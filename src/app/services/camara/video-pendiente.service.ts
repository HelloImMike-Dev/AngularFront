import {Injectable} from '@angular/core';

/**
 * Lleva el control de los videos de Inspeccion y Embalar que aun no se guardan en el servidor,
 * para avisar antes de salir de la pantalla o cerrar la aplicacion y que no se pierdan.
 * Cada pantalla registra una funcion que regresa un mensaje cuando tiene un video pendiente.
 */
@Injectable()
export class VideoPendienteService {

  private revisiones: Array<() => string> = [];

  constructor() {
    // En Electron regresar un valor cancela el cierre y main.js pregunta al usuario (will-prevent-unload);
    // en el navegador se muestra el aviso nativo de salir de la pagina
    window.addEventListener('beforeunload', (event: BeforeUnloadEvent) => {
      const mensaje = this.mensajePendiente();
      if (mensaje) {
        event.returnValue = mensaje;
        return mensaje;
      }
    });
  }

  /** Registra la revision de una pantalla. Regresa la funcion para quitar el registro (llamarla en ngOnDestroy). */
  registrar(revision: () => string): () => void {
    this.revisiones.push(revision);
    return () => {
      this.revisiones = this.revisiones.filter(r => r !== revision);
    };
  }

  /** Mensaje del primer video pendiente, o null si no hay ninguno. */
  mensajePendiente(): string {
    for (const revision of this.revisiones) {
      try {
        const mensaje = revision();
        if (mensaje) {
          return mensaje;
        }
      } catch (e) {
        console.log(e);
      }
    }
    return null;
  }

  /** Pregunta al usuario si quiere salir aunque se pierda el video. Regresa true si puede salir. */
  confirmarSalida(): boolean {
    const mensaje = this.mensajePendiente();
    return !mensaje || window.confirm(mensaje + '\n\nSi sales ahora, el video se perderá. ¿Deseas salir de todas formas?');
  }
}
