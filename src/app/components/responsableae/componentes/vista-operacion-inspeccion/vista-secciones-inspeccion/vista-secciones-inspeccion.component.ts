import { Component, OnInit, OnDestroy, Output, ViewChild, Input, SimpleChanges, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { InspeccionNivelPiezaComponent } from '../../inspeccion-nivel-pieza/inspeccion-nivel-pieza.component';
import { PartidaInspeccion } from '../../../../../class/despachos/PartidaInspeccion.class';
import { DocumentoAdjunto } from '../../../../../class/comun/DocumentoAdjunto.class';
import { parametrosInspeccion } from '../../../../../class/despachos/parametrosInspeccion.class';
import { SessionUser } from '../../../../../services/session/session.service';
import { Router } from '@angular/router';
import { ComunService } from '../../../../../services/comun/comun.service';
import { InspeccionService } from '../../../../../services/inspeccion/inspeccion.service';
import { dateFormatSlash } from '../../../../../pipes/accounting/accounting.pipe';
import { Subscription } from 'rxjs/Subscription';
import {CoreContainerComponent} from '../../../../core-container/core-container.component';
import {Parametros} from '../../../../../class/Parametros.class';
import {CamaraService, ErrorCamara} from '../../../../../services/camara/camara.service';
import {VideoPendienteService} from '../../../../../services/camara/video-pendiente.service';
import {folioVideoDeRespuesta, mensajeErrorSubidaVideo, timeoutSubidaVideo} from '../../../../../services/camara/video-api.util';

@Component({
  selector: 'pn-vista-secciones-inspeccion',
  templateUrl: './vista-secciones-inspeccion.component.html',
  styleUrls: ['./vista-secciones-inspeccion.component.scss'],
  providers: [CamaraService]
})
export class VistaSeccionesInspeccionComponent implements OnInit, OnDestroy {

  @ViewChild('vistaInspeccionPartida') private vistaInspeccion: any;
  @ViewChild('vistaInspeccionPiezas') private vistaPiezas: InspeccionNivelPiezaComponent;
  @ViewChild('popConf') private popC: ElementRef;
  @ViewChild('video') set video(ref: ElementRef) {
    this.elementoVideo = ref ? ref.nativeElement : null;
    if (this.elementoVideo) {
      this.abrirCamara(this.elementoVideo);
    }
  }
  @Input() partidaPrioridad: PartidaInspeccion = new PartidaInspeccion();
  @Input() conDocumentacion: boolean;
  @Output() reiniciarVista: EventEmitter<any> = new EventEmitter<any>();
  guardarDocumento: boolean;
  ubicacionNoDes: any;
  indexBarraActividades: number = 0;
  recibePzas: number;
  recibeTotalPzas: number;
  clickArrows: boolean;
  clickArrows2: boolean;
  cambioIndexBarra: number;
  valorNuevo: string;
  info: PartidaInspeccion = new PartidaInspeccion();
  valoresVistaInspeccion: any;
  recibeConf: boolean;
  abrirPopConfirmacion: boolean;
  abrirPopInformativo: boolean;
  mostrarAlerta: boolean;
  textoAlerta: string;
  confirmacion: boolean = false;
  documentoCertificado: DocumentoAdjunto = new DocumentoAdjunto();
  documentoHoja: DocumentoAdjunto = new DocumentoAdjunto();
  maxItemList: number = 1;
  contIncidencia: number;
  contDespachable: number;
  permiteRegresar: boolean;
  listaPiezas: any;
  finalizarActivo: boolean = false;
  esPublicacion: boolean;
  vieneDe: string;
  reiniciaBarra: boolean = false;
  mostrarPopFinalizar: boolean;
  param: parametrosInspeccion = new parametrosInspeccion();
  subs: Subscription = new Subscription();
  ocultaVideo: boolean;
  cajaVerde: boolean;
  btnVolver: boolean;
  actividades: any[] = ["INSPECCIONAR PARTIDA", "INSPECCIONAR PIEZAS", "ALMACENAR PRODUCTOS"];
  infoCompleta: boolean;
  folioVideo: any;
  iniciaVideo: boolean;
  guardarDocumentacion: boolean;
  base64String: any;
  nombreArchivo: any;
  ubicacionImp: string;
  prioridad: any;
  partidaPrioridadNueva: PartidaInspeccion = new PartidaInspeccion();
  cambiarNoDesp: boolean;
  mensajeEtiqueta: string;
  mostrarPopFinalizarNoDesp: boolean;
  mostrarDoc: boolean = false;
  cantEtiquetas = 0;
  etiquetaStock: boolean;
  rutaImg = 'http://ryndem.mx/DESARROLLO/Imagenes/imagenesEtiqueta/';
  rutaManejo: string;
  ubicacionEtiqueta: string ='';
  private elementoVideo: HTMLVideoElement = null;
  errorCamara: string;
  avisoCamara: string;
  iniciandoCamara: boolean = false;
  guardandoVideo: boolean = false;
  videoGuardado: boolean = false;
  limiteGrabacion: boolean = false;
  errorEnvioVideo: string = null;
  private videoBase64: string = null;
  private quitarRevisionVideo: () => void;

   //pasosImprimirEtiqueta:boolean = true;

  constructor(
    private router: Router,
    private inspeccionT: InspeccionService,
    private comunService: ComunService,
    private coreComponent: CoreContainerComponent,
    private _commonService: ComunService,
    private camara: CamaraService,
    private zone: NgZone,
    private videoPendienteService: VideoPendienteService
    ) { }

  ngOnInit() {
    var that = this;
    console.log(this.documentoCertificado, this.documentoHoja);
    console.log('Soy prioridad a enviar final <--->', this.partidaPrioridad.prioridad); /// Enviar al servicio.
    this.prioridad = this.partidaPrioridad.prioridad;
    this.documentoCertificado.nombre = "";
    this.transform(new Date());
    this.quitarRevisionVideo = this.videoPendienteService.registrar(() => this.mensajeVideoPendiente());

    this.subs.add(this.comunService.valueVideo
      .subscribe(
        (data) => {
          this.ocultaVideo = data;
          // console.log(data, this.ocultaVideo);
        }));
    this.subs.add(this.comunService.folioVideo
      .subscribe(
        (data) => {
          console.log(data, "entre subs folio");
          this.folioVideo = data;
        }));

        this.subs.add(this.comunService.guardaVideo.subscribe(
          (data) => {
            console.log(data);

            if (data == true) {
            this.save();
            }
          }, error => {
            console.log(error);
          }
        ));
    this.subs.add(this.camara.errores.subscribe((error: ErrorCamara) => {
      this.zone.run(() => this.errorCamara = error.mensaje);
    }));
    this.subs.add(this.camara.limiteAlcanzado.subscribe(() => {
      this.zone.run(() => {
        this.limiteGrabacion = true;
        this.avisoCamara = 'Se alcanzó el tiempo máximo de grabación (20 min). El video grabado se conserva y se guardará al terminar la inspección.';
      });
    }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    if (this.quitarRevisionVideo) {
      this.quitarRevisionVideo();
    }
  }
  /** Mensaje para avisar antes de salir o cerrar si el video aun no esta en el servidor */
  mensajeVideoPendiente(): string {
    if (this.guardandoVideo) {
      return 'El video de la inspección se está guardando.';
    }
    if (this.errorEnvioVideo) {
      return 'El video de la inspección no se ha enviado.';
    }
    if (!this.videoGuardado && (this.camara.grabando || this.limiteGrabacion)) {
      return 'Hay una grabación de inspección que no se ha guardado.';
    }
    return null;
  }
  ngOnChanges(change: SimpleChanges) {
        console.log(change);
    }
  cambioIndex(cambioIndex: number) {
    this.cambioIndexBarra = cambioIndex;
    this.abrirPopInformativo = false;
    this.comunService.videoZindex(false);
    if (this.cambioIndexBarra == 1) {
      this.recibePzas = this.recibePzas + 1;
      this.avanzarSimple();
      this.confirmacion = false;
      this.permiteRegresar = undefined;
    }

  }

  recibeIndex(indexActual: number) {
    this.indexBarraActividades = indexActual;

    if (indexActual == 0) {
      this.maxItemList = 1;
    }
    /*if(indexActual === 1 && this.partidaPrioridad.fabrica === 'USP')
    {
      this.indexBarraActividades = 2;
    }*/
    if (this.indexBarraActividades < 2) {
      this.confirmacion = false;

    } else {
      if (this.cambiarNoDesp) {
        this.actualizarNoDespachables();
      }
      if ((this.contDespachable == undefined || this.contDespachable == 0) && (this.contIncidencia == undefined || this.contIncidencia == 0)) {
        this.regresar();
      }
      else {
        if (this.indexBarraActividades == 2 && this.confirmacion == false) {
          if (this.recibePzas > this.recibeTotalPzas) {
            this.avanzarSimple();
            this.confirmacion = true;
          } else {
            this.abrirPop();
            this.regresar();
          }
        }
      }
    }
  }
actualizarNoDespachables() {
    let tipo: boolean;
  this.contIncidencia = this.partidaPrioridad.cantidadCompra;
  this.recibeTotalPzas = 0;
  this.recibePzas = this.partidaPrioridad.cantidadCompra;
  this.partidaPrioridad.contIncidencia = this.contIncidencia;
  this.contDespachable = 1;
  this.partidaPrioridad.pasosImprimirEtiqueta = true;
  if (this.partidaPrioridad.manejo.toLowerCase() === 'refrigeracion' || this.partidaPrioridad.manejo.toLowerCase() === 'refrigeración') {
    tipo = false;
  } else if (this.partidaPrioridad.manejo.toLowerCase() === 'congelacion' || this.partidaPrioridad.manejo.toLowerCase() === 'congelación') {
    tipo = false;
  } else if (this.partidaPrioridad.manejo.toLowerCase() === 'ambiente') {
    tipo = false;
  }
  this.btnVolver = false;
  this.obtenerUbicacionNoDesp(tipo);
}
obtenerUbicacionNoDesp(tipo) {
  var data: any;
  data = new Object;
  data = {
    tarima: tipo,
    manejo: this.partidaPrioridad.manejo,
    idPPedido: this.partidaPrioridad.idPPedido,
    tipoProducto: this.partidaPrioridad.tipo,
    piezas: this.partidaPrioridad.contDespachable,
    idProducto: this.partidaPrioridad.idProducto,
    proveedor: this.partidaPrioridad.fabrica
  };
  this.inspeccionT.obtenerUbicacionInspeccion(data).subscribe(
    data => {
      console.log("Ubicacion ", data.current);
      let string = data.current;
      let parts: any[] = string.split("_");
      let respuesta = parts[0];
      let letra = parts[1];
      let ubicacionAux;
      let idUbicacion;
      ubicacionAux = respuesta + " " + "Cuarentena (" + letra + ')';
      this.ubicacionNoDes = ubicacionAux;
      this.ubicacionImp = string;
      // this.ubicacionImprimirNoDesp =  ubicacionAux ;
      // this.imprimirEtiqueta(this.param);
      // this.finalizarTerminarPop(); // SE LLAMA AL METODO QUE SE CREO NUEVO
    }, error => {

    }
  );
}

  regresar() {
    console.log('regresar');
    this.clickArrows = !this.clickArrows;
  }

  avanzar() {
    console.log('avanzar');
    if (this.indexBarraActividades == 0) {
      if (this.verificarInformacionCompleta() == "") {
        this.avanzarSimple();
      } else if (this.verificarInformacionCompleta() == 'noDespachable') {
        this.contIncidencia = this.partidaPrioridad.cantidadCompra;
        // this.cambiarNoDesp = true;
        setTimeout(() => {
          this.avanzarSimple();
        }, 2);
        setTimeout(() => {
          this.avanzarSimple();
        }, 3);
      } else {
        this.mostrarAlerta = true;
      }
    }
    else {
      this.abrirPop();
    }
  }

  avanzarSimple() {
    console.log('avanzar');
    this.clickArrows2 = !this.clickArrows2;
  }

  asignarUbicacion(valor) {
     this.ubicacionImp = valor;
  }
  etiquetar() {
    if (this.videoPendiente()) {
      return;
    }
    let codigo = this.partidaPrioridad.codigo;
    let lote = this.partidaPrioridad.lote;
    let folioDocumento = codigo +"-"+ lote;
    let idProducto = this.partidaPrioridad.idProducto;

   if (!this.cambiarNoDesp) {
     if (this.documentoCertificado.nombre !== ""  && this.documentoCertificado.nombre !== undefined) {
       if (this.documentoCertificado.archivo !== undefined) {
         let atributos:any = new Array<any>();
         let tipoArchivo = 'Certificado';
         this.documentoCertificado.nombre = 'Certificado.pdf';
         atributos.push(this.documentoCertificado.archivo[0],folioDocumento,idProducto,tipoArchivo );
         this.partidaPrioridad.listaArchivos.push(atributos);
       }
     }
     if (this.documentoHoja.nombre !== undefined && this.documentoHoja.nombre !== "" ) {
       if (this.documentoHoja.archivo !== undefined) {
         let tipoArchivo = 'HojaSeguridad';

         let data = new Object;
         let atributos:any = new Array<any>();
         atributos.push(this.documentoHoja.archivo[0], codigo, idProducto, tipoArchivo);
         this.partidaPrioridad.listaArchivos.push(atributos);
       }

     }

     this.guardaDocumentacion(this.partidaPrioridad.listaArchivos);
     // this.finalizarActivo = true;

     if (this.partidaPrioridad.pasosImprimirEtiqueta == true  && this.partidaPrioridad.contDespachable > 0){
       this.imprimir();
       this.mensajeEtiqueta = 'Etiquetas despachables';
       this.mostrarPopFinalizar = true;
       //   this.finalizarActivo = true;
     } else {
       this.finalizarActivo = true;
     }
   } else if (this.cambiarNoDesp) {
     if (this.partidaPrioridad.pasosImprimirEtiqueta == true  && this.partidaPrioridad.contIncidencia > 0) {
       this.imprimir();
       this.mensajeEtiqueta = 'Etiquetas no despachables';
       this.mostrarPopFinalizarNoDesp = true;
       //   this.finalizarActivo = true;
     }
   }
  }

  actualizarPartida(valores: any) {

    if (this.partidaPrioridad.tipo === 'Publicaciones') {   /******Nueva validacion, tipo: publicaciones*/
      if (valores.tipo == 'edicion') {
        this.partidaPrioridad.edicion = valores.item.nombre;
      } else if (valores.tipo == 'idioma') {
        this.partidaPrioridad.idioma = valores.item.nombre;
      }
    } else {
      if (valores.tipo == 'presentacion') {
        this.partidaPrioridad.tipoPresentacion = valores.item.nombre;
      }
      else if (valores.tipo == 'almacenaje') {
        this.partidaPrioridad.manejo = valores.item.nombre;
      }
      else if (valores.tipo == 'transportacion') {
        this.partidaPrioridad.manejoTransporte = valores.item.nombre;
      }
      else if (valores.tipo == 'lote') {
        this.partidaPrioridad.lote = valores.item.nombre;
        this.partidaPrioridad.loteOriginal = valores.item.nombre;
      }
      else if (valores.tipo == 'mes') {
        this.partidaPrioridad.mesCaduca = valores.item.nombre;
        this.partidaPrioridad.mesNum = valores.item.key - 2;
        this.partidaPrioridad.caducidad = this.partidaPrioridad.mesCaduca + " " + this.partidaPrioridad.anoCaduca;
      }
      else if (valores.tipo == 'anio') {
        this.partidaPrioridad.anoCaduca = valores.item.nombre;
        this.partidaPrioridad.caducidad = this.partidaPrioridad.mesCaduca + " " + this.partidaPrioridad.anoCaduca;
      } else if (valores.tipo === 'cantidad') {
        this.partidaPrioridad.cantidadCambio = valores.nombre;
        console.log('SOY LA NUEVA CANTIDAD -->', this.partidaPrioridad.cantidad);
      } else if (valores.tipo === 'unidad' && valores.item.nombre !== 'Seleccionar') {
        this.partidaPrioridad.unidadCambio = valores.item.nombre;
        console.log('SOY LA NUEVA UNIDAD -->', this.partidaPrioridad.unidad);
      }
    }
   if (valores.tipo == 'datosNivelPieza') {
      this.partidaPrioridad.acumPiezas = valores.acumPiezas;
      this.partidaPrioridad.totalPiezas = valores.totalPiezas;
      this.partidaPrioridad.contIncidencia = valores.contIncidencia;
      this.partidaPrioridad.contDespachable = valores.contDespachable;
      this.recibePzas = valores.acumPiezas;
      this.recibeTotalPzas = valores.totalPiezas;
      this.contDespachable = valores.contDespachable;
      this.contIncidencia = valores.contIncidencia;
      console.log("pzas:", valores.acumPiezas, "totalp:",
        valores.totalPiezas, " pzasInci:", valores.contIncidencia,
        " pzasDes:", valores.contDespachable);
       if ((this.contDespachable == 0 || this.contDespachable == undefined) && (this.contIncidencia == 0 || this.contIncidencia == undefined)) {
        this.permiteRegresar = true;
        this.cajaVerde = undefined;
        this.btnVolver = true;
        console.log("this.permiteRegresar", this.permiteRegresar);
      }
      else {
        if (this.recibeTotalPzas > 1) {
          this.cajaVerde = true;
        } else {
          this.cajaVerde;
        }
        this.btnVolver = false;
        this.permiteRegresar = false;

      }


    }
  }

  abrirPop() {
    if ((this.contDespachable != undefined && this.contDespachable > 0) || (this.contIncidencia != undefined && this.contIncidencia > 0)) {
      if (this.recibePzas > this.recibeTotalPzas) {
        this.abrirPopInformativo = true;
        this.comunService.videoZindex(true);
      } else {
        this.abrirPopConfirmacion = true;
        this.comunService.videoZindex(true);
      }
    }
  }
  popConfirmacion(conf: boolean) {
    this.recibeConf = conf;
    if (this.recibeConf == true) {
      this.permiteRegresar = undefined;
      this.avanzarSimple();
      this.abrirPopConfirmacion = false;
      this.comunService.videoZindex(false);
      this.confirmacion = true;
    }
    else {
      this.abrirPopConfirmacion = false;
      this.comunService.videoZindex(false);
    }
  }

  verificarInformacionCompleta(): string {

    var tipoError: string = "";
    var tipoErrorAux: string = '';
    var fechaActual: Date = new Date();

    if (this.partidaPrioridad.tipo !== 'Publicaciones') {

      if (this.partidaPrioridad.anoCaduca != 'Seleccionar') {
        if (this.partidaPrioridad.mesCaduca !== null && this.partidaPrioridad.mesCaduca !== undefined && this.partidaPrioridad.mesCaduca !== '--NINGUNO--' && tipoError === "") {
          if (parseInt(this.partidaPrioridad.anoCaduca) == fechaActual.getFullYear()) {
            var mes: number = this.partidaPrioridad.mesNum;
            if (mes < fechaActual.getMonth()) {
              tipoError = this.textoAlerta = "La caducidad es incorrecta";
            }
          }


        }
        else {
          tipoError = this.textoAlerta = "La caducidad es incorrecta";
        }
      } else {
        tipoError = this.textoAlerta = "La caducidad es incorrecta";
      }

      if (this.partidaPrioridad.tipoPresentacion === null || this.partidaPrioridad.tipoPresentacion === undefined || this.partidaPrioridad.tipoPresentacion === '--NINGUNO--' || this.partidaPrioridad.tipoPresentacion === 'Seleccionar' && tipoError == "") {
        tipoError = this.textoAlerta = "El dato presentación es incorrecto";
      }

      else if (this.partidaPrioridad.manejo === null || this.partidaPrioridad.manejo === undefined || this.partidaPrioridad.manejo === '--NINGUNO--' || this.partidaPrioridad.manejo === 'Seleccionar' && tipoError == "") {
        tipoError = this.textoAlerta = "El dato de almacenaje es incorrecto";
      }

      else if (this.partidaPrioridad.fabrica !== null && this.partidaPrioridad.fabrica != 'USP' && tipoError == "") {
        if (this.partidaPrioridad.lote === null || this.partidaPrioridad.lote === undefined || this.partidaPrioridad.lote === "") {
          tipoError = this.textoAlerta = "El dato de lote es incorrecto";
        }
      }
      else if (this.partidaPrioridad.fabrica !== null && this.partidaPrioridad.fabrica == 'USP' && tipoError == "") {
        if (this.partidaPrioridad.lote === undefined || this.partidaPrioridad.lote === '--NINGUNO--' || this.partidaPrioridad.lote === 'Seleccionar') {
          tipoError = this.textoAlerta = "El dato de lote es incorrecto";
        }
      }
      if ((this.partidaPrioridad.cantidad === null  || this.partidaPrioridad.cantidad === "") && (this.partidaPrioridad.cantidadCambio === null  || this.partidaPrioridad.cantidadCambio === "")) {
          tipoError = this.textoAlerta = "Cantidad incorrecta";
      } else if ((this.partidaPrioridad.unidad === null  || this.partidaPrioridad.unidad === "" || this.partidaPrioridad.unidad === 'Seleccionar') && (this.partidaPrioridad.unidadCambio === null  || this.partidaPrioridad.unidadCambio === "" || this.partidaPrioridad.unidadCambio === 'Seleccionar')) {
        tipoError = this.textoAlerta = "Unidad incorrecta";
      }

      if (this.partidaPrioridad.manejoTransporte === null || this.partidaPrioridad.manejoTransporte === undefined || this.partidaPrioridad.manejoTransporte === '--NINGUNO--' || this.partidaPrioridad.manejoTransporte === 'Seleccionar' && tipoError == "") {
        tipoError = this.textoAlerta = "El dato de transportación es incorrecto";
      }


      if (this.conDocumentacion) {
        this.conDocumentacion = true;
        if (this.documentoCertificado.nombre == "") {
          // tipoError = this.textoAlerta = "Falta cargar documentación";
          this.cambiarNoDesp = true;
          tipoError = 'noDespachable';
        } else {
          this.cambiarNoDesp = false;
        }
      } else {
        this.conDocumentacion = false;
      }

    } else {
      if (this.partidaPrioridad.idioma === undefined || this.partidaPrioridad.idioma === '--NINGUNO--' || this.partidaPrioridad.idioma === 'Seleccionar') {
        tipoError = this.textoAlerta = "El idioma es incorrecto";
      }


      else if (this.partidaPrioridad.edicion === "" && tipoError == "") {
        tipoError = this.textoAlerta = "La edición es incorrecta";
      }
    }
    return tipoError;
  }

  cerrarAlerta() {
    let idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    if (this.vieneDe == "guardar") {
      this.comunService.finalizarI(true);
      /******Se llama al servicio qeu a parta una partida para verificar el pedimento******/
      this.coreComponent.openModal(1);
      this.inspeccionT.apartarInspeccion(idUsuario).subscribe(
        data => {
          if (data.current) {
            this.partidaPrioridadNueva = data.current;
            /*********VALIDACIÓN PARA REGRESAR A LA VISTA DE GRABAR ********/
            if (this.partidaPrioridadNueva.pedimento === this.partidaPrioridad.pedimento) {
              this.reiniciarVista.emit(true); /***Se hace la llamada a la vista de grabar***/
            } else {
              // Se comento para que en cualquier caso regrese a la vista Grabar ya que se quito la sección de pedimento
              /*this.reiniciarVista.emit(false); /!***Se hace la llamada para recargar la vista principal***!/*/
              this.reiniciarVista.emit(true); /***Se hace la llamada a la vista de grabar***/
            }
            this.coreComponent.closeModal(1);
          } else {
            this.reiniciarVista.emit(false); /***Se hace la llamada para recargar la vista principal***/
            this.coreComponent.closeModal(1);
          }
        },
        error => {
          this.coreComponent.closeModal(1);
        });
     ///////// this.reiniciarVista.emit(); /***Se hace la llamada para recargar la vista principal***/
    } else if ( this.vieneDe === 'duplicado') {
      this.mostrarAlerta = false;
      this.vieneDe = "";
      this.reiniciaBarra = false;
      this.reiniciarVista.emit(false);
    }

    this.mostrarAlerta = false;
    this.vieneDe = "";
    this.reiniciaBarra = false;
  }


  verificarAvance() {
    if (this.verificarInformacionCompleta() == "") {
      this.maxItemList = undefined; // Se pasa a la 2 vista
      this.avanzarSimple();
    } else  if (this.verificarInformacionCompleta() == 'noDespachable') {
      this.maxItemList = undefined; //  Se agrego para pasar a la tercer vista directamente
      setTimeout(() => {
        this.avanzarSimple();
      }, 2);
    } else {
      this.mostrarAlerta = true; // No avanza a ninfuna vista
    }
  }

  cargarDocumentos(archivo: any) {
    if (archivo.tipo == 'Certificado') {
      this.documentoCertificado = archivo.doc;
    } else {
      this.documentoHoja = archivo.doc;
    }


  }


  recibeConDocumentacion(conDoc: boolean) {
    this.conDocumentacion = conDoc;
    console.log(this.conDocumentacion);
  }

  // verificaRegreso() {
  //   if (this.contDespachable < 1 || this.contIncidencia <1) {
  //     this.permiteRegresar;
  //     //  this.regresar();
  //   } else this.permiteRegresar = false;
  // }

  recibeListaPiezas(list: any) {
    this.listaPiezas = list;
    console.log("---listaPzas", this.listaPiezas);
  }


  finalizar(obj: any): Object {
    this.infoCompleta = true;
    if (obj.ubicacion == "" ) {
      this.infoCompleta = false;
    }
    // if (this.partidaPrioridad.manejo == "Ambiente" && obj.numAnaquel == 0) {
    //   this.infoCompleta = false;
    // }

    if (this.infoCompleta) {
      this.param.listaPzas = Object.assign([], this.listaPiezas);
      this.param.idCompra = this.partidaPrioridad.idPartidaCompra;
      this.param.idPPedido = this.partidaPrioridad.idPPedido;
      this.param.usuario = SessionUser.getInstance().getUser().getUsuario();
      if (this.partidaPrioridad.cantidadCompra === this.contIncidencia) {
        this.param.ubicacionAsignada = obj.ubicacionIncidencia;
      } else {
        this.param.ubicacionAsignada = obj.ubicacion;
      }
      this.param.ubicacion = this.partidaPrioridad.manejo;
      this.param.fechaInspeccion = "12Jul2018";
      this.param.numRechazos = this.partidaPrioridad.contIncidencia;
      this.param.finalizarPendiente = true;
      this.param.fechaInicio = new Date();
      this.param.videoPartida = this.folioVideo;
      this.param.codigoQrBolsa = "QR-" + this.partidaPrioridad.codigoQrBolsa;
      this.param.qrBolsaIncidencia = "QR-" +this.partidaPrioridad.qrBolsaIncidencia;
      this.param.prioridad = this.partidaPrioridad.prioridad; /// Se agrego esta linea para enviar la prioridad
      this.param.aplicaDocumentacion = this.conDocumentacion; /// Se agrego esta linea para enviar si hay o no documentos
      this.param.cantidadProducto = this.partidaPrioridad.cantidad; //
      this.param.unidadProducto = this.partidaPrioridad.unidad; //
      this.param.idProducto = this.partidaPrioridad.idProducto;
      this.param.manejo = this.partidaPrioridad.manejo;
      this.param.manejoTransporte = this.partidaPrioridad.manejoTransporte;
      this.param.lote = this.partidaPrioridad.lote;
      this.param.tipoPresentacion = this.partidaPrioridad.tipoPresentacion;
      this.param.nombreImagenesRechazo = this.partidaPrioridad.nombreImagenesRechazo;
      this.param.idioma = this.partidaPrioridad.idioma;
      this.param.edicion = this.partidaPrioridad.edicion;
      this.param.cantDespachables = this.partidaPrioridad.contDespachable;
      this.param.idProveedor = this.partidaPrioridad.idProveedor;
      this.param.documentosSDS = this.partidaPrioridad.sds;
      this.param.documentos = this.partidaPrioridad.documentacion;
      this.param.cargaDoc = this.partidaPrioridad.cargaDoc;
      this.param.comentarios = this.partidaPrioridad.comentariosImagen;
      this.param.tipo = this.partidaPrioridad.tipo;
      if (this.partidaPrioridad.unidadCambio !== undefined && this.partidaPrioridad.unidadCambio !== null) {
        this.param.unidadCambio = this.partidaPrioridad.unidadCambio;
      } else if (this.partidaPrioridad.unidad !== null) {
        this.param.unidadCambio = this.partidaPrioridad.unidad.toString();
      }
      if (this.partidaPrioridad.cantidadCambio !== undefined && this.partidaPrioridad.cantidadCambio !== null) {
        this.param.cantidadCambio = this.partidaPrioridad.cantidadCambio;
      } else {
        this.param.cantidadCambio = this.partidaPrioridad.cantidad;
      }
      this.param.codigoProd = this.partidaPrioridad.codigo;
      this.param.presentacionProd = this.partidaPrioridad.concepto;
      this.param.marca = this.partidaPrioridad.nombreProveedor;
      this.param.idInspeccionOC = this.partidaPrioridad.idPartidaInspeccion;
      this.param.idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
      } else {
      this.textoAlerta = "Faltan datos para finalizar las inspección";
      this.mostrarAlerta = true;
      this.finalizarActivo = false;
    }

    if(this.partidaPrioridad.pasosImprimirEtiqueta == true)
        this.finalizarInspeccion();
    else{
      this.guardarConsumible ();
  //  this.finalizarInspeccion(this.param);
}
    this.guardarExistenciasUbicacion(obj.ubicacion, this.partidaPrioridad.contDespachable, obj.ubicacionIncidencia, this.partidaPrioridad.contIncidencia);
    return this.param;

  }


  finalizarInspeccion() {
    let folio: string;
    if(this.param.idCompra === undefined){
      this.finalizarActivo = true;
    }else{
      this.coreComponent.openModal(1);
      this.inspeccionT.recibeRespuestaFinalizarInspeccion(this.param).subscribe(
      data => {
        console.log(data);
        this.partidaPrioridad.cargaDoc = false;
        if (data.current == true) {
          this.textoAlerta = "Operación exitosa";
          this.mostrarAlerta = true;
          this.vieneDe = "guardar";
          //  this.reiniciaBarra = true;
        }  else if (data.current !== '' && data.current !== undefined && data.current !== null && data.current !== false) {
          this.etiquetaStock = true;
          this.cantEtiquetas = data.current.length;
          this.cambiarNoDesp = false;
          for (let i = 0; i < data.current.length; i++) {
            folio = data.current[i];
            this.imprimirEtiqueta(this.param, folio);
          }
        }
        this.coreComponent.closeModal(1);
      },
      error => {
        console.log(error);
      });
    // }
    // this.vieneDe = "guardar";
    // this.reiniciaBarra = true;
    // his.finalizarActivo = false;
  //  this.mostrarPopFinalizar = false;
    // this.textoAlerta = "Operación exitosa";
    // this.mostrarAlerta = true;
    }
  }

  activarPopFinalizar() {
    this.textoAlerta = "Operación exitosa";
    this.mostrarAlerta = true;
    this.vieneDe = "guardar";
  }


  imprimir() {
    if (this.partidaPrioridad.manejo === 'Ambiente') {
      this.rutaManejo = this.rutaImg + 'ambiente.svg';
    } else if (this.partidaPrioridad.manejo === 'Refrigeracion' || this.partidaPrioridad.manejo === 'Refrigeración') {
      this.rutaManejo = this.rutaImg + 'refrigeracion.svg';
    } else if (this.partidaPrioridad.manejo === 'Congelacion' || this.partidaPrioridad.manejo === 'Congelación') {
      this.rutaManejo = this.rutaImg + 'congelacion.svg';
    }
    this.param.idCompra = this.partidaPrioridad.idPartidaCompra;
    this.param.idInspeccionOC = this.partidaPrioridad.idPartidaInspeccion;
    this.param.idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    this.inspeccionT.verificarFinalizar(this.param).subscribe(
      data => {
        if (data.current === true) {
          this.param.idCompra = undefined;
          this.imprimirEtiqueta(this.param, this.partidaPrioridad.folioEtiqueta);
          console.log('Soy ubicacion a imprimir<<<----->>>', this.ubicacionImp );
        } else if (data.current !== undefined && data.current !== null && data.current.inspector !== null) {
          console.log('Llego el usuario ==>', data.current.inspector);
          this.vieneDe = 'duplicado';
          this.textoAlerta = 'Las piezas ya fueron inspeccionadas por el usuario: ' + data.current.inspector;
          this.mostrarAlerta = true;
        }
      });


  }
  async imprimirEtiqueta(datos: parametrosInspeccion, folioEtiqueta) {
    let fee: string;
    let cliente: string;
    let tipoPartida: string = '';
    if (this.partidaPrioridad.fechaEstimadaEntrega !== null && this.partidaPrioridad.fechaEstimadaEntrega !== undefined) {
      const fechaSec = this.partidaPrioridad.fechaEstimadaEntrega.toString().split('-');
      fee = fechaSec[1] + fechaSec[2] + fechaSec[0].substring(2, 4);
    } else {
      fee = '';
    }
    if (this.partidaPrioridad.aceptaParciales === 1) {
      tipoPartida = '(Pa';
    } else {
      tipoPartida = '(NPa';
    }
    if (this.partidaPrioridad.tipoPartida === 'Programado') {
      tipoPartida += '/Pr)';
    } else {
      tipoPartida += ')';
    }
    console.log(datos, 'Soy datos de imprimir');
    let estado: string;
    if (!this.cambiarNoDesp) {
        estado = 'Despachables';
    } else if (this.cambiarNoDesp) {
      estado = 'No Despachables';
    }

    if (this.partidaPrioridad.nombreCliente !== null && this.partidaPrioridad.nombreCliente !== this.ubicacionNoDes) {
      cliente = this.partidaPrioridad.nombreCliente;
    } else {
      tipoPartida = '(NA)';
      cliente = 'STOCK';
    }
    const usuario = SessionUser.getInstance().getUser().getUsuario();
    const BrowserWindow = electron.remote.BrowserWindow;
    //clipboard.writeText('Electron is ready!!');
    let newWin = new BrowserWindow({ width: 288, height: 216 });
    const fecha: string = this.transform(new Date());
    const barcode = await this.getBarcode(folioEtiqueta);
    var html = [
      "<html><head>",
      "<style>",
      "@media print { @page {size: 11cm 10cm;padding:0;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}",
      ".contenido {position: absolute;max-width: 9.5cm; page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;} .bcode{font-family:'Code 128'; font-size:12px;} img{page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;}",
      "</style></head>",
      "<body> <div class='contenido'>",
      "<img style='width: 9.5cm; height:1.5cm; margin-top:-20px;' ",
      "src='" + barcode + "'>",
      "</div>",
      "<div style='padding-top: 37px' >",
      "<div style='font-size: 18px; min-height: 23px; align-self: center; text-align: center;'>" + folioEtiqueta + "</div>",
      "<div style='flex-direction: row; display: flex; padding-top: 15px;' >",
      "<div  style='font-size: 14px; min-height:23px; width:160px; min-width:150px;text-align:right;padding-right: 5px'> Cliente:</div>",
      "<div  style='font-size: 14px; min-height:23px;'> " + cliente + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px;width: 432px;  font-weight: bold; text-align: center;'> " + tipoPartida + ' ' +  fee + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:160px; text-align:right; padding-right: 5px'> Estatus:</div>",
      "<div  style='font-size: 14px; height:23px; font-weight: bold; '> " + estado + "</div>",/*datos.estado*/
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:160px; text-align:right; padding-right: 5px'> Inspecciono: </div>",
      "<div  style='font-size: 14px; height:23px;'> " + usuario + "</div>", /*datos.usuario*/
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:160px; text-align:right; padding-right: 5px'> Tipo:</div>",
      "<div  style='font-size: 14px; height:23px;'> " + this.partidaPrioridad.tipo + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:160px; text-align:right; padding-right: 5px'> Control: </div>",
      "<div  style='font-size: 14px; height:23px;'>" + this.partidaPrioridad.control + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:160px; text-align:right; padding-right: 5px'> Ubicación:</div>",
      "<div  style='font-size: 14px; height:23px;'> " + this.ubicacionImp + "</div>", /**datos.ubicacionAsignada */
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px;height:20px; width:160px; text-align:right; padding-right: 5px'> Inspeccionado:</div>",
      "<div  style='font-size: 14px;'> " + fecha + "</div>",
      "</div>",
      "</div>",

      "</body></html>"
    ].join("");

    newWin.loadURL("data:text/html;charset=utf-8," + encodeURI(html));
    newWin.hide()
    // newWin.webContents.openDevTools()
    newWin.webContents.on('did-finish-load', () => {
      console.log(newWin.webContents.getPrinters());
      let prints = newWin.webContents.getPrinters();
      let impresora: String = "";

      for (let print of prints) {
        if (print.description == "ZebraTicket") {
          impresora = print.name;
        }
      }

      newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, (success) => {
        newWin.close();
      });
      this.cantEtiquetas --;
      if (this.etiquetaStock && this.cantEtiquetas === 0) {
        this.activarPopFinalizar();
      }
    });
  }

  transform(dateToFormat: any): any {
    if (dateToFormat == undefined || dateToFormat == null) { return "Pendiente" }
    let now: Date = new Date();
    if (dateToFormat.length == 10) {
      now = new Date(dateToFormat);
    } else {
      now = new Date(dateToFormat);
    }
    let date: String;
    const mes: number = now.getMonth();
    const hora: String = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
    const minutos: String = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
    const hour: String = hora + ':' + minutos;
    switch (mes) {
      case 0:
        date = now.getDate() + '/Ene/' + now.getFullYear() + " " + hour;
        break;
      case 1:
        date = now.getDate() + '/Feb/' + now.getFullYear() + " " + hour;
        break;
      case 2:
        date = now.getDate() + '/Mar/' + now.getFullYear() + " " + hour;
        break;
      case 3:
        date = now.getDate() + '/Abr/' + now.getFullYear() + " " + hour;
        break;
      case 4:
        date = now.getDate() + '/May/' + now.getFullYear() + " " + hour;
        break;
      case 5:
        date = now.getDate() + '/Jun/' + now.getFullYear() + " " + hour;
        break;
      case 6:
        date = now.getDate() + '/Jul/' + now.getFullYear() + " " + hour;
        break;
      case 7:
        date = now.getDate() + '/Ago/' + now.getFullYear() + " " + hour;
        break;
      case 8:
        date = now.getDate() + '/Sep/' + now.getFullYear() + " " + hour;
        break;
      case 9:
        date = now.getDate() + '/Oct/' + now.getFullYear() + " " + hour;
        break;
      case 10:
        date = now.getDate() + '/Nov/' + now.getFullYear() + " " + hour;
        break;
      case 11:
        date = now.getDate() + '/Dic/' + now.getFullYear() + " " + hour;
        break;
      default:
        break;
    }
    return date;
  }

  recibeRespuestaFinalizarInspeccion(parametros: parametrosInspeccion) {
    this.inspeccionT.obtenerModoInspeccion().subscribe(
      data => {
        // this.tipoInspeccion= data.current;

      },
      error => {
        console.log(error);
      }
    );
  }
  recibeIniciarVideo(valor: boolean) {
    this.iniciaVideo = valor;
    console.log("bandera para iniciar video", valor, this.iniciaVideo);
  }

  guardaDocumentacion(lista:any){
    let aux:any;
      for( aux of lista){
      let file = aux[0];
      let folioDocumento = aux[1];
      let subcarpeta = aux [2];
      let tipoArchivo = aux[3];
      if (tipoArchivo === 'Certificado') {
        this.partidaPrioridad.documentacion = folioDocumento;
      } else {
        this.partidaPrioridad.sds = folioDocumento;
      }
        this.inspeccionT.guardaDocumentacion(file, folioDocumento, subcarpeta, tipoArchivo).subscribe(
        data =>{
          this.partidaPrioridad.cargaDoc = true;
          console.log(data);
        },
        error =>{
          console.log(error)
        }
      );
    }

  }

guardarExistenciasUbicacion( ubicacionDesp:string, pzasDesp:number, ubicacionNoDesp:string, pzasND:number){
  var data: any;
  data = new Object;
  if (ubicacionDesp == undefined)
    ubicacionDesp = "";
  if(ubicacionNoDesp == undefined)
    ubicacionNoDesp = "";

  data = {
        idUbicacion: ubicacionDesp,
        idUbicacionIncidencia : ubicacionNoDesp,
        pzasDespachables:this.partidaPrioridad.contDespachable,
        pzasIncidencias: this.partidaPrioridad.contIncidencia
  }
    this.inspeccionT.guardarExistenciaUbicacion(data).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    )


}

abrirCamara(video: HTMLVideoElement) {
  video.controls = false;
  video.autoplay = true;
  if (this.iniciandoCamara) {
    this.camara.asignarVideo(video);
    return;
  }
  this.iniciandoCamara = true;
  this.camara.iniciarCamara(video).then(() => {
    this.iniciandoCamara = false;
    this.errorCamara = undefined;
    this.iniciarGrabacionInspeccion();
  }, (error: ErrorCamara) => {
    this.iniciandoCamara = false;
    this.errorCamara = error && error.mensaje ? error.mensaje : 'No fue posible iniciar la cámara.';
  });
}

reintentarCamara() {
  if (this.elementoVideo) {
    this.abrirCamara(this.elementoVideo);
  }
}
iniciarGrabacionInspeccion() {
  if (this.videoGuardado || this.guardandoVideo || this.videoBase64 || this.limiteGrabacion || this.camara.grabando) {
    return;
  }
  try {
    this.camara.iniciarGrabacion();
  } catch (error) {
    this.errorCamara = error && error.mensaje ? error.mensaje : 'No fue posible iniciar la grabación del video.';
  }
}

save() {
  if (this.videoGuardado || this.guardandoVideo || this.videoBase64) {
    return;
  }
  this.guardandoVideo = true;
  this.camara.detenerGrabacion()
    .then((blob: Blob) => this.camara.blobABase64(blob))
    .then((b64: string) => {
      // Se conserva el video para poder reintentar el envio sin volver a grabar
      this.videoBase64 = b64;
      this.guardarVideo(b64);
    })
    .catch((error: ErrorCamara) => {
      this.guardandoVideo = false;
      console.log(error);
      this.textoAlerta = 'No se pudo guardar el video de la inspección. ' + (error && error.mensaje ? error.mensaje : '');
      this.mostrarAlerta = true;
    });
}

guardarVideo(obj: any) {
  const data = {
    video: obj,
    concepto: "Grabacion Lote Inspeccion"
  };
  this.guardandoVideo = true;
  this.errorEnvioVideo = null;
  this.inspeccionT.guardarVideo(data, timeoutSubidaVideo(obj)).subscribe(
    respuesta => {
      const folio = folioVideoDeRespuesta(respuesta);
      if (!folio) {
        console.log('Respuesta sin folio de video', respuesta);
        this.errorGuardarVideo('El servidor no regresó el folio del video' +
          (respuesta && respuesta.message ? ': ' + respuesta.message : '.'));
        return;
      }
      this.guardandoVideo = false;
      this.videoGuardado = true;
      this.videoBase64 = null;
      this.nombreArchivo = folio;
      this.folioVideo = folio;
      this.comunService.enviaFolio(this.nombreArchivo);
    },
    error => {
      console.log(error);
      this.errorGuardarVideo(mensajeErrorSubidaVideo(error));
    });
}

errorGuardarVideo(mensaje: string) {
  this.guardandoVideo = false;
  this.errorEnvioVideo = mensaje;
  this.textoAlerta = 'No se pudo enviar el video de la inspección. ' + mensaje + ' Presiona "Reintentar envío".';
  this.mostrarAlerta = true;
}

reintentarEnvioVideo() {
  if (this.videoBase64 && !this.guardandoVideo) {
    this.guardarVideo(this.videoBase64);
  }
}

/** Evita finalizar mientras el video se sube o si fallo su envio, para no guardar la partida sin videoPartida */
videoPendiente(): boolean {
  if (this.guardandoVideo) {
    this.textoAlerta = 'El video de la inspección se está guardando, espera a que termine para continuar.';
    this.mostrarAlerta = true;
    return true;
  }
  if (this.errorEnvioVideo) {
    this.textoAlerta = 'El video de la inspección no se ha enviado. Presiona "Reintentar envío" antes de continuar.';
    this.mostrarAlerta = true;
    return true;
  }
  return false;
}


  guardarConsumible() {
    let cantidad:number = 0;
    var data: any;
    data = new Object;

  if(this.partidaPrioridad.codigoQrBolsa !== undefined){
      cantidad = cantidad + 1;
  }
  if(this.partidaPrioridad.qrBolsaIncidencia !== undefined){
    cantidad = cantidad + 1;
  }

    data = {cantidad: cantidad,  tipoBolsa : 'BolsaInspeccion' }

      this.inspeccionT.guardarConsumible(data).subscribe(
        data => {
          console.log(data);
          if (data.current == true){
                this.finalizarInspeccion();
          }
          else {
            this.finalizarActivo = false;
            this.textoAlerta = "Error en la tabla Consumibles ";
            this.mostrarAlerta = true;

          }

        }, error => {
          console.log(error);
        }
      )
  }

  recibirUbicacionNoD(ubicacion){
    this.ubicacionNoDes = ubicacion;
  }

  getBarcode(code) {
    return new Promise(resolve => {
      const parameter = new Parametros();
      parameter.code = code;
      this._commonService.getBarcode(parameter)
        .subscribe(
          data => {
            resolve(data.current);
          },
          error => {
            resolve(`https://barcode.tec-it.com/barcode.ashx?data=${code}&code=Code128&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0`);
          });
    });
  }
}
