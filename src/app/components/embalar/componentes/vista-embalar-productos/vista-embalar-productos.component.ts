import {Component, OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges, Output, Input, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SessionUser} from '../../../../services/session/session.service';
import {EmbalarService} from '../../../../services/embalar/embalar.service';
import {ComunService} from '../../../../services/comun/comun.service';
import {CamaraService, ErrorCamara} from '../../../../services/camara/camara.service';
import {VideoPendienteService} from '../../../../services/camara/video-pendiente.service';
import {folioVideoDeRespuesta, mensajeErrorSubidaVideo, timeoutSubidaVideo} from '../../../../services/camara/video-api.util';
@Component({
  selector: 'pq-vista-embalar-productos',
  templateUrl: './vista-embalar-productos.component.html',
  styleUrls: ['./vista-embalar-productos.component.scss'],
  providers: [CamaraService]
})
export class VistaEmbalarProductosComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  vistaVideo: boolean;
  vistaEmbalar: boolean;
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Output() cambiarVistaGenerar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() EventEmitterEnviar: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventActivarPopVistaP: EventEmitter<any> = new EventEmitter<any>();
  @Output() activarBoton: EventEmitter<boolean> = new EventEmitter<any>();
  @Output() activarImprimirGenerar: EventEmitter<boolean> = new EventEmitter<any>(); // Se emite cuado ya se va a imprimir en el clic generar
  @Input() datosCliente: any;
  @Input() activarEnviarInfo: boolean;
  @Input() estadoVistaUsuario: any;
  @Input() activarImpresionSobreProd: boolean;
  @Input() activarPaking: boolean; // Se recibe la activacion de mandar el paking list y se envia a productos por embalar
  @Output() sobrante: EventEmitter<boolean> = new EventEmitter<boolean>();
  video: ElementRef;
  @ViewChild('video') set videoElemento(elemento: ElementRef) {
    this.video = elemento;
    if (!elemento) {
      return;
    }
    const video: HTMLVideoElement = elemento.nativeElement;
    video.controls = false;
    video.autoplay = true;
    if (this.reproduciendo) {
      (video as any).srcObject = null;
      video.src = this.path;
    } else if (this.camara.camaraActiva) {
      this.camara.asignarVideo(video);
    }
  }
  vistaEtiquetaPoPGene: boolean;
  vistaEtiquetaPoPBolsa: boolean;
  botonGenerar: boolean;
  comentariosEntrega: string;
  path: string;
  mensajeVideo: boolean;
  videoValido: boolean = true;
  folioHielera: any; /// Almacenara el folio temporal de la hielera
  mostrarBotones: boolean; true;
  recibirValorFD: any;
  recibirValorEmbajale: any;
  idEmpleado: string;
  lista: any [] = [];
  listaCongelacion: any [] = [];
  listaRegrigeracion: any [] = [];
  listaAmbiente: any [] = [];
  totPzaCongelacion = 0;
  totPzaRefrigeracion = 0;
  totPzaAmbiente = 0;
  listaTotales: any;
  vistaEtiquetaPoP = false;
  openModal: boolean;
  openBtnMas: boolean;
  /*ruta: string = "http://192.168.2.156:8081:8080/SAP/InspeccionOC/videoPartida/"; */
  ruta: string = "http://proquifa.com.mx:51725/SAP/InspeccionOC/videoPartida/";
  /*rutaProd: string = "http://192.168.2.156:8080/SAP/InspeccionOC/videoPartida/";*/
  rutaProd: string = "http://proquifa.com.mx:51725/SAP/InspeccionOC/videoPartida/";
  /*"http://localhost:4848/glassfish4/glassfish/domains/domain1/docroot/SAP/InspeccionOC/videoPartida/"*/
  i: any = 0;
  desactivarBtn: string;
  folio: any; ////// ALMACENA LO QUE TRAE EL OUTPUT DEL POP-UP DE ESCANEAR y GENERAR-ETIQUETA (TRAE FOLIO Y TIPO)
  listaPaking: any[] = []; //// Esta variable recupera el valor que manda productos con respecto a lo que se debe mostrar en paking list
  manejoAScanear: string;
  popScaner: boolean;
  listaVideoConge: any[] = [];
  listaVideoAmbiente: any[] = [];
  listaVideo: any[] = [];
  cambiarImpresion: boolean;
  tipo: string;
  enviarTipo: string;
  activarFocus: boolean = false;
  /******VIDEO***/
  estadoCamara: string; // 'abriendo' | 'lista' | 'error' | 'apagada'
  errorCamara: string;
  mensajeAlerta: string;
  embalajeIniciado: boolean;
  limiteGrabacion: boolean;
  guardandoVideo: boolean;
  videoGuardado: boolean;
  errorEnvio: boolean;
  reproduciendo: boolean;
  private destruido: boolean;
  private videoBase64: string;
  private subsCamara: Subscription[] = [];
  private quitarRevisionVideo: () => void;
  datosClient: any;
  etiquetaBolsa: boolean;
  tipoEtiqueta: string;
  nombreVideo: string;
  constructor(private embalarServices: EmbalarService, private ComunServices: ComunService, private camara: CamaraService,
              private videoPendiente: VideoPendienteService) {
  this.vistaVideo = true;
  }

  ngOnInit() {
    let usuario = SessionUser.getInstance().getUser().getIdEmpleado();
    this.idEmpleado = usuario.toString();
    // this.idEmpleado = '54'
    console.log('Soy empleado  convertido<--->', this.idEmpleado);
    this.obtenerFolioPorUsuario(this.idEmpleado);
    this.quitarRevisionVideo = this.videoPendiente.registrar(() => this.mensajeVideoPendiente());
    this.subsCamara.push(this.camara.errores.subscribe((error: ErrorCamara) => {
      if (this.estadoCamara !== 'apagada' && !this.reproduciendo) {
        this.mostrarErrorCamara(error);
        if (this.embalajeIniciado && !this.limiteGrabacion && !this.guardandoVideo) {
          this.mensajeAlerta = this.errorCamara + ' El embalaje NO se está grabando.';
        }
      }
    }));
    this.subsCamara.push(this.camara.limiteAlcanzado.subscribe(() => {
      this.limiteGrabacion = true;
      this.mensajeAlerta = 'Se alcanzó la duración máxima de grabación (20 minutos). ' +
        'El video grabado hasta ahora se conservará y se enviará al generar el packing list.';
    }));
  }
  ngOnChanges(changes: SimpleChanges) {
    this.datosClient = this.datosCliente;
    if (this.activarImpresionSobreProd) {
      this.cambiarImpresion = true;
      this.openModal = false;
      console.log('Entre de nuevo --->');
    }
    /*Se detiene la grabacion y se envia el video solo cuando se activa el paking list*/
    const paking = changes.activarPaking;
    if (paking && paking.currentValue && !paking.previousValue && !paking.isFirstChange()) {
      this.save();
    }
  }
  ngOnDestroy() {
    this.destruido = true;
    this.subsCamara.forEach(subs => subs.unsubscribe());
    if (this.quitarRevisionVideo) {
      this.quitarRevisionVideo();
    }
  }
  /** Mensaje para avisar antes de salir o cerrar si el video aun no esta en el servidor */
  mensajeVideoPendiente(): string {
    if (this.guardandoVideo) {
      return 'El video del embalaje se está guardando.';
    }
    if (this.errorEnvio && !this.videoGuardado) {
      return 'El video del embalaje no se ha enviado.';
    }
    if (this.embalajeIniciado && !this.videoGuardado && (this.camara.grabando || this.limiteGrabacion)) {
      return 'Hay una grabación de embalaje que no se ha guardado.';
    }
    return null;
  }
  /************************************************************************/
  ngAfterViewInit() {
    // Se abre la camara solo para la vista previa, la grabacion inicia al presionar Iniciar
    setTimeout(() => this.abrirCamara());
  }
  abrirCamara() {
    if (!this.video || this.destruido) {
      return;
    }
    this.estadoCamara = 'abriendo';
    this.errorCamara = null;
    this.camara.iniciarCamara(this.video.nativeElement).then(() => {
      if (this.destruido || this.reproduciendo || this.videoGuardado || this.guardandoVideo) {
        this.camara.liberar();
        this.estadoCamara = 'apagada';
        return;
      }
      this.estadoCamara = 'lista';
      if (this.embalajeIniciado && !this.limiteGrabacion) {
        this.iniciarGrabacion();
      }
    }, (error: ErrorCamara) => this.mostrarErrorCamara(error));
  }
  reintentarCamara() {
    if (this.estadoCamara !== 'abriendo') {
      this.abrirCamara();
    }
  }
  iniciarGrabacion() {
    if (this.estadoCamara === 'abriendo') {
      return; // Se inicia en cuanto la camara este lista
    }
    if (this.estadoCamara === 'error') {
      this.mensajeAlerta = 'La cámara no está disponible, el embalaje NO se está grabando. ' + this.errorCamara;
      return;
    }
    try {
      this.camara.iniciarGrabacion();
    } catch (error) {
      this.mostrarErrorCamara(error);
      this.mensajeAlerta = 'El embalaje NO se está grabando. ' + this.errorCamara;
    }
  }
  mostrarErrorCamara(error: ErrorCamara) {
    this.estadoCamara = 'error';
    this.errorCamara = error && error.mensaje ? error.mensaje : 'No fue posible iniciar la cámara.';
  }
  save() {
    if (this.guardandoVideo || this.videoGuardado) {
      return;
    }
    this.guardandoVideo = true;
    this.errorEnvio = false;
    const obtenerVideo: Promise<string> = this.videoBase64 ? Promise.resolve(this.videoBase64) :
      this.camara.detenerGrabacion().then(blob => {
        this.camara.liberar();
        this.estadoCamara = 'apagada';
        return this.camara.blobABase64(blob);
      });
    obtenerVideo.then((b64: string) => {
      this.videoBase64 = b64;
      this.guardarVideo(b64);
    }, (error: ErrorCamara) => {
      this.guardandoVideo = false;
      this.errorEnvio = true;
      this.mensajeAlerta = 'No se pudo guardar el video del embalaje. ' + (error && error.mensaje ? error.mensaje : '');
    });
  }
  /** Mensaje que se muestra sobre el video, el guardado tiene prioridad sobre el estado de la camara */
  get estadoVideoVista(): string {
    if (this.reproduciendo) {
      return null;
    }
    if (this.guardandoVideo) {
      return 'guardando';
    }
    if (this.errorEnvio && !this.videoGuardado) {
      return 'errorEnvio';
    }
    if (this.estadoCamara === 'abriendo') {
      return 'abriendo';
    }
    if (this.estadoCamara === 'error') {
      return 'errorCamara';
    }
    return null;
  }
  reintentarEnvio() {
    if (this.activarPaking) {
      this.save();
    }
  }
  cerrarAlerta() {
    this.mensajeAlerta = null;
  }
  errorEnvioVideo(mensaje: string) {
    this.guardandoVideo = false;
    this.errorEnvio = true;
    this.mensajeAlerta = 'No se pudo enviar el video del embalaje. ' + mensaje + ' Presiona "Reintentar envío".';
  }
  guardarVideo(obj: any) {
    const datos = {
      video: obj,
      concepto: 'Grabacion Embalar'
    };
    this.embalarServices.guardarVideo(datos, timeoutSubidaVideo(obj)).subscribe(
      data => {
        const folio = folioVideoDeRespuesta(data);
        if (!folio) {
          console.log('Respuesta sin folio de video', data);
          this.errorEnvioVideo('El servidor no regresó el folio del video' +
            (data && data.message ? ': ' + data.message : '.'));
          return;
        }
        this.guardandoVideo = false;
        this.videoGuardado = true;
        this.videoBase64 = null;
        this.nombreVideo = folio;
        console.log('Video ===> ', this.nombreVideo);
      },
      error => {
        console.log(error);
        this.errorEnvioVideo(mensajeErrorSubidaVideo(error));
      });

  }
  /**********************************************/
  activarPopImp(valor) {
    this.activarImprimirGenerar.emit(valor);
  }
  quitarVistaVideo() {
   /* this.listaAmbiente = [{folio:1234}];
    this.listaCongelacion = [];*/
    this.vistaVideo = false;
    this.embalajeIniciado = true;
    this.iniciarGrabacion();
    // this.vistaEmbalar = true;
    this.i = 1;
    this.event.emit(this.mostrarBotones);
    if (this.listaCongelacion.length > 0) {
      this.tipo = 'Hielera';
      this.manejoAScanear = 'Congelacion';
      this.openModal = true;
      this.popScaner = false;
    } else if (this.listaRegrigeracion.length > 0) {
      this.tipo = 'Hielera';
      this.manejoAScanear = 'Refrigeracion';
      this.openModal = true;
      this.popScaner = false;
    } else if (this.listaAmbiente.length > 0 ) {
      /*this.openModal = false;
      this.popScaner = true;*/
      this.tipo = 'Bolsa de tránsito';
      this.manejoAScanear = 'Ambiente';
      this.openModal = true;
    }
  }
  activarVistaPack($valor) {
    this.eventActivarPopVistaP.emit($valor);
  }
  recibirFD(valor: any) {
    this.recibirValorFD = valor;
    console.log('Soy valor', valor);
  }
  recibirTipoEmbajale(tipoEmbalaje: any) {
    this.recibirValorEmbajale = tipoEmbalaje;
    // console.log(tipoEmbalaje);
  }
  recibirValorB(val: boolean) {
    // console.log(val);
    this.EventEmitterEnviar.emit(val);
  }
  recibirDatosPakingList(valor: any) {
    // console.log('Entre al papá :)');
    this.listaPaking = valor;
  }
  recibirManejoScanear(manejo: string) {
    this.i += 1;
   if (manejo === 'Refrigeracion' || manejo === 'Refrigeración') {
     this.tipo = 'Hielera';
      this.manejoAScanear = manejo;
      this.openModal = true;
    } else if (manejo === 'Ambiente') {
      /*this.manejoAScanear = manejo;
      this.popScaner = true;*/
     this.tipo = 'Bolsa de tránsito';
     this.manejoAScanear = manejo;
     this.openModal = true;
    }
  }
  recibirFolio(folioPaking) {
    this.folio = folioPaking;
  }
  obtenerFolioPorUsuario(idEmpleado) {
    this.embalarServices.obtenerFolioPorUsuario(idEmpleado).subscribe(
      data => {
        // console.log('Soy data productos por embalar', data.current);
        this.lista = data.current;
        this.folioHielera = data.current[0].folioTemporal;
        // console.log('Folio hielera:', this.folioHielera);
        this.comentariosEntrega = data.current[0].comentariosEntrega;
        this.lista.forEach(element => {
          if (element.manejo === 'Congelacion' || element.manejo === 'Congelación') {
            this.listaCongelacion.push(element);
            this.totPzaCongelacion += element.piezas;
          } else if (element.manejo === 'Refrigeración' || element.manejo === 'Refrigeracion') {
            this.listaRegrigeracion.push(element);
            this.totPzaRefrigeracion += element.piezas;
          } else if (element.manejo === 'Ambiente') {
            this.listaAmbiente.push(element);
            this.totPzaAmbiente += element.piezas;
          }
        });
        // console.log('congelacion:', this.listaCongelacion, 'Ambiente :', this.listaAmbiente , ' refrigeracion', this.listaRegrigeracion);
        this.listaTotales = {congelacion: this.totPzaCongelacion, refrigeracion: this.totPzaRefrigeracion, ambiente: this.totPzaAmbiente,
                             arrayConge:  this.listaCongelacion, arrayRefri: this.listaRegrigeracion, arrayAmbiente: this.listaAmbiente};
      });
  }
  reproducirVideo(nombreVideo) {
   /* this.path = this.ruta + nombreVideo + ".webm";*/
    this.path = this.rutaProd + nombreVideo + ".webm";
    // srcObject tiene prioridad sobre src, se apaga la camara para poder reproducir
    this.reproduciendo = true;
    this.camara.liberar();
    this.estadoCamara = 'apagada';
    if (this.video) {
      (this.video.nativeElement as any).srcObject = null;
      this.video.nativeElement.src = this.path;
    }
    if ( nombreVideo !== 'error' ) {
      this.mensajeVideo = false;
      this. videoValido = true;
    } else {
      this.mensajeVideo = true;
      this. videoValido = false;
    }
  }
  mostrarModalEtiqueta (val: any) {
    // console.log('hola, llegue', val);
    this.enviarTipo = this.manejoAScanear;
    // this.i += 1;
    this.vistaEtiquetaPoP = val;
  }
  mostrarListaEmbalar(val: any) {
    this.vistaEmbalar = val;
    this.vistaEtiquetaPoP = false;
    this.openModal = false;
    this.popScaner = false;
    this.activarFocus = !this.activarFocus;
  }
  agregarPaquete(manejo: string) {
    this.i += 1;
    // console.log('Soy popS-->', this.popScaner);
    if (manejo === 'Congelacion' || manejo === 'Refrigeracion') {
      this.tipo = 'Hielera';
      this.openModal = true;
      this.popScaner = false;
      // this.i += 1;
    } else if (manejo === 'Ambiente') {
      this.tipo = 'Bolsa de tránsito';
      // this.manejoAScanear = 'Ambiente';
      /*this.popScaner = true;
      this.openModal = false;*/
      this.openModal = true;
    }
  }
  activacionBoton(activado: boolean) {
    this.activarBoton.emit(activado);
  }
  activarBtnMas(respuesta: boolean) {
    this.openBtnMas = respuesta;
  }
  enviarBtnDesactivo($tipo) {
    this.desactivarBtn = $tipo;
  }
  mostrarModalEtiquetaCamGenerar (val: any) {
    // console.log('hola, llegue', val);
    this.vistaEtiquetaPoPGene = val;
    this.botonGenerar = true;
  }
  mostrarEtiquetaBolsa() {
    this.etiquetaBolsa = false;
    this.vistaEtiquetaPoPBolsa = true;
  }
  enviarDatosVisOper($valor) {
    // this.cambiarVistaGenerar.emit($valor);
    this.cambiarVistaGenerar.emit($valor);
  }
  activarDatosBolsa($valor) {
    this.vistaEtiquetaPoPGene = false;
    this.botonGenerar = false;
    this.etiquetaBolsa = true;
  }
  sobrantes( estado) {
    this.sobrante.emit(estado);
  }
}
