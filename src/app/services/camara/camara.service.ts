import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';

declare const MediaRecorder: any;

export interface ErrorCamara {
  tipo: string;
  mensaje: string;
}

@Injectable()
export class CamaraService implements OnDestroy {

  static readonly VIDEO_BITS_POR_SEGUNDO = 500000;
  static readonly DURACION_MAXIMA_MS = 20 * 60 * 1000;
  static readonly INTERVALO_CHUNK_MS = 1000;
  public errores = new Subject<ErrorCamara>();
  public limiteAlcanzado = new Subject<void>();

  private stream: MediaStream = null;
  private recorder: any = null;
  private chunks: Blob[] = [];
  private detencion: Promise<Blob> = null;
  private limiteTimer: any = null;
  private video: HTMLVideoElement = null;

  static traducirError(error: any): ErrorCamara {
    const nombre = error && error.name ? error.name : '';
    switch (nombre) {
      case 'NotAllowedError':
      case 'PermissionDeniedError':
      case 'SecurityError':
        return {tipo: 'permiso', mensaje: 'No se otorgó permiso para usar la cámara.'};
      case 'NotReadableError':
      case 'TrackStartError':
      case 'AbortError':
        return {tipo: 'ocupada', mensaje: 'La cámara está siendo usada por otra aplicación o no responde. Ciérrala e intenta de nuevo.'};
      case 'NotFoundError':
      case 'DevicesNotFoundError':
      case 'OverconstrainedError':
        return {tipo: 'sin-camara', mensaje: 'No se encontró una cámara conectada.'};
      default:
        return {tipo: 'desconocido', mensaje: 'No fue posible iniciar la cámara.'};
    }
  }

  get camaraActiva(): boolean {
    return !!this.stream && this.stream.getVideoTracks().some(track => track.readyState === 'live');
  }

  get grabando(): boolean {
    return !!this.recorder && this.recorder.state !== 'inactive';
  }

  /** Abre la camara y la muestra en el elemento de video. Rechaza con un ErrorCamara. */
  iniciarCamara(video: HTMLVideoElement): Promise<void> {
    this.video = video;
    if (this.camaraActiva) {
      this.mostrarEnVideo();
      return Promise.resolve();
    }
    this.liberar();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return Promise.reject({tipo: 'sin-soporte', mensaje: 'Este equipo no permite el acceso a la cámara.'});
    }
    return navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then((stream: MediaStream) => {
        this.stream = stream;
        stream.getVideoTracks().forEach(track => {
          track.onended = () => this.errores.next({
            tipo: 'desconectada',
            mensaje: 'Se perdió la señal de la cámara. Verifica que esté conectada y reintenta.'
          });
        });
        this.mostrarEnVideo();
      }, (error: any) => {
        throw CamaraService.traducirError(error);
      });
  }

  /** Cambia el elemento de video donde se muestra la camara (por ejemplo si el *ngIf lo recreo). */
  asignarVideo(video: HTMLVideoElement) {
    this.video = video;
    this.mostrarEnVideo();
  }

  /** Inicia una grabacion nueva. Lanza un ErrorCamara si la camara no esta activa. */
  iniciarGrabacion() {
    if (!this.camaraActiva) {
      throw {tipo: 'sin-camara', mensaje: 'La cámara no está activa, no se puede grabar.'} as ErrorCamara;
    }
    if (this.grabando) {
      return;
    }
    this.chunks = [];
    this.detencion = null;
    try {
      this.recorder = new MediaRecorder(this.stream, {
        mimeType: this.tipoSoportado(),
        videoBitsPerSecond: CamaraService.VIDEO_BITS_POR_SEGUNDO
      });
    } catch (e) {
      this.recorder = null;
      throw {tipo: 'grabador', mensaje: 'No fue posible iniciar la grabación del video.'} as ErrorCamara;
    }
    this.recorder.ondataavailable = (event: any) => {
      if (event.data && event.data.size > 0) {
        this.chunks.push(event.data);
      }
    };
    this.recorder.start(CamaraService.INTERVALO_CHUNK_MS);
    this.limiteTimer = setTimeout(() => {
      this.detenerGrabacion().then(() => this.limiteAlcanzado.next(), () => {});
    }, CamaraService.DURACION_MAXIMA_MS);
  }

  /**
   * Detiene la grabacion y resuelve con el video completo (espera a onstop, asi que incluye el ultimo fragmento).
   * Llamarlo varias veces es seguro: siempre regresa la misma promesa.
   */
  detenerGrabacion(): Promise<Blob> {
    if (this.detencion) {
      return this.detencion;
    }
    if (!this.recorder) {
      return Promise.reject({tipo: 'sin-grabacion', mensaje: 'No hay una grabación de video en curso.'} as ErrorCamara);
    }
    this.limpiarTimer();
    const recorder = this.recorder;
    this.detencion = new Promise<Blob>((resolve, reject) => {
      const armarBlob = () => {
        const blob = new Blob(this.chunks, {type: 'video/webm'});
        if (blob.size === 0) {
          reject({tipo: 'video-vacio', mensaje: 'El video grabado está vacío.'} as ErrorCamara);
        } else {
          resolve(blob);
        }
      };
      if (recorder.state === 'inactive') {
        armarBlob();
        return;
      }
      recorder.onstop = armarBlob;
      recorder.onerror = () => reject({tipo: 'grabador', mensaje: 'Ocurrió un error al grabar el video.'} as ErrorCamara);
      try {
        recorder.stop();
      } catch (e) {
        armarBlob();
      }
    });
    return this.detencion;
  }

  /** Convierte el video a base64 sin el prefijo data:...;base64, */
  blobABase64(blob: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const resultado = reader.result as string;
        resolve(resultado.substring(resultado.indexOf(',') + 1));
      };
      reader.onerror = () => reject({tipo: 'lectura', mensaje: 'No fue posible preparar el video para enviarlo.'} as ErrorCamara);
      reader.readAsDataURL(blob);
    });
  }

  /** Apaga la camara y descarta la grabacion en curso. */
  liberar() {
    this.limpiarTimer();
    if (this.recorder && this.recorder.state !== 'inactive') {
      try {
        this.recorder.stop();
      } catch (e) {
      }
    }
    this.recorder = null;
    if (this.stream) {
      this.stream.getTracks().forEach(track => {
        track.onended = null;
        track.stop();
      });
    }
    this.stream = null;
    if (this.video) {
      (this.video as any).srcObject = null;
    }
  }

  ngOnDestroy() {
    this.liberar();
    this.chunks = [];
    this.video = null;
  }

  private mostrarEnVideo() {
    if (this.video && this.stream) {
      this.video.muted = true;
      (this.video as any).srcObject = this.stream;
      const reproduccion: any = this.video.play();
      if (reproduccion && reproduccion.catch) {
        reproduccion.catch(() => {});
      }
    }
  }

  private tipoSoportado(): string {
    const tipos = ['video/webm;codecs=vp8', 'video/webm'];
    if (typeof MediaRecorder.isTypeSupported === 'function') {
      for (const tipo of tipos) {
        if (MediaRecorder.isTypeSupported(tipo)) {
          return tipo;
        }
      }
    }
    return 'video/webm';
  }

  private limpiarTimer() {
    if (this.limiteTimer) {
      clearTimeout(this.limiteTimer);
      this.limiteTimer = null;
    }
  }
}
