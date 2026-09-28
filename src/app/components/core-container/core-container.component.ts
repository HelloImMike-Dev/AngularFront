import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ElectronService } from "ngx-electron";
import {SessionUser} from '../../services/session/session.service';

@Component({
  selector: "pq-core-container",
  templateUrl: "./core-container.component.html",
  styleUrls: ["./core-container.component.scss"]
})
export class CoreContainerComponent implements OnInit {
  botonera: boolean = true;
  classAside: string = "asideNormal";
  modalLoading: boolean = false;
  blockScreen: boolean = false;
  ocultarBotonera: boolean;

  _maximizer: Boolean = false;
  _fullScreen: Boolean = false;

  iniciarBotonera: boolean;
  pendientes: number = 0;
  mejoras: number = 0;
  solicitud: number = 0;
  gestion: number = 0;
  catalogos: number = 0;
  configuracion: number = 0;
  incidente: String = "";
  indice = 0;

  constructor(
    private _electronService: ElectronService,
    private cdRef: ChangeDetectorRef
  ) {
    document.addEventListener("keydown", event => {
      switch (event.key) {
        case "Escape":
          this.exitFullScreen();
          break;
      }
    });
  }

  ngOnInit() {
    this.modalLoading = false;
    this.blockScreen = false;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ocultarMenu() {
    this.ocultarBotonera = !this.ocultarBotonera;
    console.log(this.ocultarBotonera);
    if (this.ocultarBotonera) {
      this.classAside = "asideOcultar";
    } else {
      this.classAside = "asideMostrar";
    }
  }

  fullScreen() {
    this._electronService.remote.getCurrentWindow().setFullScreen(true);
    this._maximizer = true;
  }

  minimize() {
    if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
      this.exitFullScreen();
      this._electronService.remote.getCurrentWindow().setSize(1368, 770);
    }
    setTimeout(() => {
      this._electronService.remote.getCurrentWindow().minimize();
    }, 500);
  }

  maximizer() {
    this.exitFullScreen();
    this._maximizer = !this._maximizer;
    if (this._maximizer) {
      this._electronService.remote.getCurrentWindow().maximize();
    } else {
      this._electronService.remote.getCurrentWindow().setSize(1368, 770);
    }
  }

  close() {
    // app.quit cierra la ventana; si hay un video sin guardar, main.js pregunta antes de cerrar
    this._electronService.remote.app.quit();
  }

  exitFullScreen() {
    if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
      this._electronService.remote.getCurrentWindow().setFullScreen(false);
      this._maximizer = false;
    }
  }

  closeModal(opc: number) {
    switch (opc) {
      case 0:
        if (this.modalLoading) {
          this.modalLoading = false;
        }
        break;
      case 1:
        this.indice --;
        if (this.indice === 0) {
          if (this.modalLoading) {
            this.modalLoading = false;
          }
        }
        break;
    }
  }

  openModal(opc: number) {
    switch (opc) {
      case 0:
        if (!this.modalLoading) {
          this.modalLoading = true;
        }
        break;
      case 1:
        this.indice ++;
        if (this.indice === 1) {
          if (!this.modalLoading) {
            this.modalLoading = true;
          }
        }
        break;
    }
  }

  enableBlockScreen(){
    this.blockScreen = true;
  }

  disableBlockScreen(){
    this.blockScreen = false;
  }
}
