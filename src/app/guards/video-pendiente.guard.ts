import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {VideoPendienteService} from '../services/camara/video-pendiente.service';

/** Evita salir de Inspeccion o Embalar por el menu sin avisar si hay un video sin guardar. */
@Injectable()
export class VideoPendienteGuard implements CanDeactivate<any> {

  constructor(private videoPendiente: VideoPendienteService) {
  }

  canDeactivate(): boolean {
    return this.videoPendiente.confirmarSalida();
  }
}
