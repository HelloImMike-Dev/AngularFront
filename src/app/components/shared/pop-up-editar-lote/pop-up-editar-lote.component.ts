import { Component, Renderer2, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { PartidaInspeccion } from '../../../class/despachos/PartidaInspeccion.class';
import { DocumentoAdjunto } from '../../../class/comun/DocumentoAdjunto.class';
import { InspeccionService } from '../../../services/inspeccion/inspeccion.service';
import { parametrosInspeccion } from '../../../class/despachos/parametrosInspeccion.class';
import { SessionUser } from '../../../services/session/session.service';
import { ElectronService } from 'ngx-electron';

import { Router } from '@angular/router';
import { ComunService } from '../../../services/comun/comun.service';
import { CoreContainerComponent } from '../../core-container/core-container.component';
import { Parametros } from '../../../class/Parametros.class';
import { CamaraService, ErrorCamara } from '../../../services/camara/camara.service';


@Component({
  selector: 'pq-pop-up-editar-lote',
  templateUrl: './pop-up-editar-lote.component.html',
  styleUrls: ['./pop-up-editar-lote.component.scss'],
  providers: [CamaraService]
})
export class PopUpEditarLoteComponent implements OnInit {
  @Output() enviarUbicacionNoDesp: EventEmitter<any> = new EventEmitter<any>(); /// SE AGREGO PARA ENVIAR LA UBICACION DE NO DESPACHABLES
  @Output() activo: EventEmitter<any> = new EventEmitter<any>();
  @Output() actualizarPieza: EventEmitter<any> = new EventEmitter<any>();
  @Output() enviarDocumento: EventEmitter<any> = new EventEmitter<any>();
  @Input() partidaPrioridad: PartidaInspeccion = new PartidaInspeccion();
  @Input() archCertificado: DocumentoAdjunto = new DocumentoAdjunto();
  @Input() archSeguridad: DocumentoAdjunto = new DocumentoAdjunto();
  @Input() pza: PartidaInspeccion;
  @Input() publicacion: boolean;
  @Input() conDocumentacion: boolean;
  @Input() vistaPieza: boolean;
  @ViewChild("pop") pop: ElementRef;
  @ViewChild('popInf') private popInf: ElementRef;
  @ViewChild('player') private player: ElementRef;
  errorCamaraFotos: string;


  ubicacionImprimir: string; //// Se agrego para obtener la ubicacion desde el servicio

//  pza: PartidaInspeccion;
  mostrar: boolean = true;
  editar: boolean = false;
  vistaLote: boolean = true;
  noLote: string = "";
  foto: any = ["Frente", "Arriba", "Abajo"];
  fecha: string;
  OpcionDefault1: string;
  OpcionDefault2: string;
  presentacion: string = "100 mg";
  catalogo: string = "1612534";
  desc: string = "Sertraline Hydrochloride (100mg) USP";
  documentacion: string = "Hoja y/o Certificado";
  caducidad: string = "No Disponible";
  fisico: string = "Etiqueta legible, Sellada, No roto";

  checkDocto: boolean = true;
  checked:boolean = true;
  checkFis: boolean = true;
  checkedCat: boolean = true;
  checkLote: boolean = true;
  checkDesc: boolean = true;
  checkCad: boolean = true;
  checkPre: boolean = true;
  checkIdi: boolean = true;
  checkEdic: boolean = true;
  checkDocumentacion: boolean = true;
  prueba: boolean = false;
  checked2: boolean = true;
  label1: string = '#008A98';
  label2: string = '#008A98';
  label3: string = '#008A98';
  label4: string = '#999999';
  label5: string = '#008A98';
  label6: string = '#008A98';
  label7: string = '#008A98';
  contentDoc: boolean = true;
  textoAlerta: string;
  mostrarAlerta: boolean;
  displayImg = 'block';
  activarText: boolean; /// Se agrego para validar el text area
  meses: any = [
    { nombre: 'Enero', key: 1 },
    { nombre: 'Febrero', key: 2 },
    { nombre: 'Marzo', key: 3 },
    { nombre: 'Abril', key: 4 },
    { nombre: 'Mayo', key: 5 },
    { nombre: 'Junio', key: 6 },
    { nombre: 'Julio', key: 7 },
    { nombre: 'Agosto', key: 8 },
    { nombre: 'Septiembre', key: 9 },
    { nombre: 'Octubre', key: 10 },
    { nombre: 'Noviembre', key: 11 },
    { nombre: 'Diciembre', key: 12 }
  ];
  anio: any = new Array<any>();
  selectedAnio: any;
  selectedMes: any;
  mesNum: number;
  nuevoHojaSeguridad: any;
  nuevoCertificado: any;
  archivoAdjunto: DocumentoAdjunto;
  checkDocto2: boolean;
  edicion: string = '2017';
  idioma: string = 'Español';
  banderaImg: boolean;
  banderaImg2: boolean;
  banderaImg3: boolean;
  folioImgFrente: string;
  folioImgAbajo: string;
  folioImgArriba: string;
  btnAceptar: boolean;
  btnEtiquetar: boolean = false;
  reporteTxt: string = "";
  imageDataURL: any;
  imageDataURL2: any;
  imageDataURL3: any;
  param: parametrosInspeccion;
  paramPrueba: DocumentoAdjunto = new DocumentoAdjunto();
  aux: Boolean = true;
  nuevoLote: string = "";
  copiaPartidaPrioridad: PartidaInspeccion = new PartidaInspeccion();
  cambioI: boolean;
  tipoBolsa:string;
  documentActivo: boolean;
  reporteTxtPub: string;
  files: any[] = [];
  rutaManejo: string;
  ubicacionEtiqueta: string;
  //  archCertificado:DocumentoAdjunto = new DocumentoAdjunto();
  //archSeguridad:DocumentoAdjunto = new DocumentoAdjunto();
  seconds;
  _maximizer: Boolean = false;
  _fullScreen: Boolean = false;

  // canvasFrente: HTMLElement;
  // video: HTMLElement;
  resultado: any;
  constructor(
    private _insp: InspeccionService,
    private _electronService: ElectronService,
    private coreComponent: CoreContainerComponent,
    private _commonService: ComunService,
    private camara: CamaraService
    ) { }

  ngOnInit() {
    //this.partidaPrioridad = Object.assign(new PartidaInspeccion, this.copiaPartidaPrioridad);
    this.copiaPartidaPrioridad = Object.assign(new PartidaInspeccion, this.partidaPrioridad);
    console.log("COPIA PP " +this.copiaPartidaPrioridad);
    this.pza.documento = this.copiaPartidaPrioridad.documento;
    this.idioma = this.partidaPrioridad.idioma;
    this.edicion = this.partidaPrioridad.edicion;
    //this.fotos();
    this.creacionListaCmbAno();
    this.lotes();

    if (this.conDocumentacion == true) {
      this.checkDocto = false;
      this.aux= false;
      this.checkDocto2 = true;
      this.label4 = '#008A98';
    } else {
      this.checkDocto = true;
      this.aux = true;
      this.checkDocto2 = false;
      this.label4 = '#999999';
    }
    console.log(this.noLote);
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);

  }

  lotes() {
    if (this.nuevoCertificado !== undefined) {
      this.archCertificado = this.nuevoCertificado;
      this.btnAceptar = true;
    } else {
      this.archCertificado = this.pza.certificado;
      this.btnAceptar = false;
    }
    if (this.nuevoHojaSeguridad != undefined) {
      this.archSeguridad = this.nuevoHojaSeguridad;
    } else {
      this.archSeguridad = this.pza.hojaSeguridad;
    }
    if (!this.vistaPieza) {
      this.vistaLote = true;
      //this.pza = this.partidaPrioridad;
      var fechaHoy: Date = new Date();


      var obj: any;
      obj = new Object;
      this.selectedMes = obj;
      obj.nombre = this.pza.mesCaduca;
      var obj: any;
      obj = new Object;
      this.selectedAnio = obj;
      obj.nombre = this.pza.anoCaduca;

      this.caducidad = this.pza.caducidad;
      if (this.pza.loteDistinto == false) {
        this.noLote = this.copiaPartidaPrioridad.lote;

      }
      // else {
      //   this.noLote = this.pza.lote;
      //
      // }

      if (this.checkDocto2 == true) {
        this.checkDocto = false;
        // if(this.nuevoCertificado != undefined){
        //   this.btnAceptar= true;
        // }
        // else
        // this.btnAceptar = false;
      } else this.checkDocto = true;

    } else if (this.vistaPieza == true) { this.piezas(); }

  }
  piezas() {
    this.fotos();
    if(this.partidaPrioridad.tipo !== 'Publicaciones') {
      if (this.validaCaducidad() !== "") {
        this.mostrarAlerta = true;
      } else
        this.vistaLote = false;
    }
    this.presentacion = this.copiaPartidaPrioridad.tipoPresentacion;
    this.catalogo = this.pza.codigo;
    this.desc = this.pza.concepto;
    this.caducidad = this.pza.mesCaduca + ' ' + this.pza.anoCaduca;
    this.noLote = this.pza.lote;
    /*this.idioma = this.partidaPrioridad.idioma;
    this.edicion = this.partidaPrioridad.edicion;*/
    // if (this.caducidad != this.pza.caducidad) {
    //   this.pza.caducidad = this.caducidad;
    //   this.btnAceptar = true;
    // } else { this.btnAceptar = false; }
    // this.cambiaCheck(this.checkLote,'lote');
    // this.cambiaCheck(this.checkedCat,'catalogo');
    // this.cambiaCheck(this.checkCad,'caducidad');
    // this.cambiaCheck(this.checkPre,'presentacion');
    // this.cambiaCheck(this.checkDesc, 'descripcion');
    // this.cambiaCheck(this.checkFis, 'fisicamente');
    // this.cambiaCheck(this.checkDocumentacion,'documentacion');
    this.imageDataURL = undefined;
    this.imageDataURL2 = undefined;
    this.imageDataURL3 = undefined;
    this.btnEtiquetar = false;
    if (this.pza.catCorrecto == false || this.pza.descripcionCorrecta == false || this.pza.presentacionCorrecta == false
      || this.pza.loteCorrecto == false || this.pza.caducidadCorrecta == false
      || this.pza.fisicamenteCorrecto == false) { this.fotos(); this.prueba = true; this.activarText = true; }
  }

  cerrar() {
    this.pop.nativeElement.style.display = 'none';
    this.mostrar = false;
    this.activo.emit(this.mostrar);
    this.pza = this.copiaPartidaPrioridad;
  }

  aceptar() {

    let codigo = this.pza.codigo;
    let lote = this.pza.lote;
    let idProducto = this.copiaPartidaPrioridad.idProducto;

    if (this.validaCaducidad() !== "") {
      this.mostrarAlerta = true;
    } else {
      if(this.pza.certificado.archivo != undefined && this.pza.catCorrecto != false){
        if (this.pza.certificado.archivo[0].name != this.archCertificado.archivo[0].name) {
          let atributos: any = new Array<any>();

          atributos.push(this.archCertificado[0], codigo + "-" + lote, idProducto, 'Certificado');
          this.partidaPrioridad.listaArchivos.push(atributos);
          this.pza.documento = codigo + "-" + lote;
        }

      } else{
        if(this.nuevoCertificado != undefined && this.pza.catCorrecto != false){
          let atributos: any = new Array<any>();
          atributos.push(this.archCertificado[0], codigo + "-" + lote, idProducto, 'Certificado');
          this.partidaPrioridad.listaArchivos.push(atributos);
          this.pza.documento = codigo + "-" + lote;
        }
      }


    }
    this.pza.esPublicacion = false;
    if(this.btnEtiquetar == true){

      this.enviarImg();
     /* this.finalizar();*/ // Se comento para colocarlo dentro del servicio de las imagenes ya que si no , no se obtienen los nombres para las piezas
      /*this.tipoBolsa  = "No Despachable";
      if(this.copiaPartidaPrioridad.pasosImprimirEtiqueta === false)
        this.cambioI = true;
      else{
        this.mostrar = true;
        this.actualizarPieza.emit(this.pza);
        this.activo.emit(this.mostrar);
        this.pop.nativeElement.style.display = 'none';
      }*/

    }else {

      this.mostrar = true;
      this.actualizarPieza.emit(this.pza);
      this.activo.emit(this.mostrar);
      this.pop.nativeElement.style.display = 'none';

    }


  }
  //// METODO CREADO PARA QUE PERMITA ENVIAR LA UBICACION
 finalizarTerminarPop() {
   this.tipoBolsa  = "No Despachable";
   if (this.copiaPartidaPrioridad.pasosImprimirEtiqueta === false) {
     this.cambioI = true;
   } else {
     this.mostrar = true;
     this.actualizarPieza.emit(this.pza);
     this.activo.emit(this.mostrar);
     this.pop.nativeElement.style.display = 'none';
   }
 }

  cambiaCheck(check: boolean, tipoCheck: string) {
    this.documentActivo = false;
    //this.checked2 = check;
    if (tipoCheck == 'noAplica') {
      this.checked2 = check;
      if (this.checked2 == false) {
        this.checkDocto2 = true;
        if (this.nuevoCertificado != undefined) {
          this.btnAceptar = true;
          console.log("btnAceptar " + this.btnAceptar);
        }
        else {
          this.checkDocto = false;
          this.aux = false;
          this.btnAceptar = false;
        }
      }
      else {
        this.checkDocto2 = false;
        this.btnAceptar = true;
        this.aux= true;
      }
    }

    if (tipoCheck == 'catalogo') {
      this.checked2 = check;
      if(this.checked2 == false){
        if (this.pza.catCorrecto == false && this.checked2 != false){
          this.label1 = '#008A98';
          this.checkedCat = false;
          this.pza.catCorrecto = true;

        }
        else {
          this.checkedCat = false;
          this.label1 = '#999999';
          this.pza.catCorrecto = false;
        }

      }
      else{
        this.checkedCat = true;
        this.label1 = '#008A98';
        this.pza.catCorrecto = true;
      }
    }
    if (tipoCheck == 'descripcion') {

      this.checked2 = check;
      if(this.checked2 == false){
        if (this.pza.descripcionCorrecta == false && this.checked2 != false){
          this.label2 = '#008A98';
          this.checkDesc = false;
          this.pza.descripcionCorrecta = true;

        }
        else {
          this.checkDesc = false;
          this.label2 = '#999999';
          this.pza.descripcionCorrecta = false;
        }

      }
      else{
        this.checkDesc = true;
        this.label2 = '#008A98';
        this.pza.descripcionCorrecta = true;
      }


      // if (this.checked2 == false) {
      //   this.label2 = '#999999';
      //   this.pza.descripcionCorrecta = false;
      // } else {
      //   this.label2 = '#008A98';
      //   this.pza.descripcionCorrecta = true;
      // }
    }
    if (tipoCheck == 'presentacion') {
      this.checked2 = check;

      if(this.checked2 == false){
        if (this.pza.presentacionCorrecta == false && this.checked2 != false){
          this.label3 = '#008A98';
          this.checkPre = false;
          this.pza.presentacionCorrecta = true;

        }
        else {
          this.checkPre = false;
          this.label3 = '#999999';
          this.pza.presentacionCorrecta = false;
        }

      }
      else{
        this.checkPre = true;
        this.label3 = '#008A98';
        this.pza.presentacionCorrecta = true;
      }


      // if (this.checked2 == false) {
      //   this.label3 = '#999999';
      //   this.pza.presentacionCorrecta = false;
      // } else {
      //   this.label3 = '#008A98';
      //   this.pza.presentacionCorrecta = true;
      // }
    }
    if (tipoCheck == 'documentacion') {
      this.checked2 = check;
      if(this.checked2 == false){
        if (this.pza.documentacionCorrecta == false && this.checked2 != false) {
          this.label4 = '#008A98';
          this.checkDocumentacion = false;
          this.pza.documentacionCorrecta = true;

        }
        else {
          this.checkDocumentacion = false;
          this.label4 = '#999999';
          this.pza.documentacionCorrecta = false;
        }

      }
      else{
        this.checkDocumentacion = true;
        this.label4 = '#008A98';
        this.pza.documentacionCorrecta = true;
      }

      // if (this.checked2 == true) {
      //   this.label4 = '#008A98';
      //   this.pza.documentacionCorrecta = true;
      //
      // } else {
      //   //this.checkDocto = true;
      //   this.label4 = '#999999';
      //   this.pza.documentacionCorrecta = false;
      //
      // }
    }
    if (tipoCheck == 'lote') {
      this.checked2 = check;

      if(this.checked2 == false){
        if (this.pza.loteCorrecto == false && this.checked2 != false){
          this.label5 = '#008A98';
          this.checkLote = false;
          this.pza.loteCorrecto = true;

        }
        else {
          this.checkLote = false;
          this.label5 = '#999999';
          this.pza.loteCorrecto = false;
        }

      }
      else{
        this.checkLote = true;
        this.label5 = '#008A98';
        this.pza.loteCorrecto = true;
      }

      // if (this.checked2 == false) {
      //   this.label5 = '#999999';
      //   this.pza.loteCorrecto = false;
      // } else {
      //   this.label5 = '#008A98';
      //   this.pza.loteCorrecto = true;
      // }
    }
    if (tipoCheck == 'caducidad') {
      this.checked2 = check;
      if(this.checked2 == false){
        if (this.pza.caducidadCorrecta == false && this.checked2 != false){
          this.label6 = '#008A98';
          this.checkCad = false;
          this.pza.caducidadCorrecta = true;

        }
        else {
          this.checkCad = false;
          this.label6 = '#999999';
          this.pza.caducidadCorrecta = false;
        }

      }
      else{
        this.checkCad = true;
        this.label6 = '#008A98';
        this.pza.caducidadCorrecta = true;
      }



      // if (this.checked2 == false) {
      //   this.label6 = '#999999';
      //   this.pza.caducidadCorrecta = false;
      // } else {
      //   this.label6 = '#008A98';
      //   this.pza.caducidadCorrecta = true;
      // }
    }
    if (tipoCheck == 'fisicamente') {
      this.checked2 = check;
      if(this.checked2 == false){
        if (this.pza.fisicamenteCorrecto == false && this.checked2 != false){
          this.label7 = '#008A98';
          this.checkFis = false;
          this.pza.fisicamenteCorrecto = true;

        }
        else {
          this.checkFis = false;
          this.label7 = '#999999';
          this.pza.fisicamenteCorrecto = false;
        }

      }
      else{
        this.checkFis = true;
        this.label7 = '#008A98';
        this.pza.fisicamenteCorrecto = true;
      }
      // if (this.checked2 == false) {
      //   this.label7 = '#999999';
      //   this.pza.fisicamenteCorrecto = false;
      //   this.pza.fisicamenCon = 'No';
      // } else {
      //   this.label7 = '#008A98';
      //   this.pza.fisicamenteCorrecto = true;
      // }
    }
    this.pza.esPublicacion = false;
    this.pza.despachable = false;
    this.pza.idCompra = this.copiaPartidaPrioridad.idPartidaCompra;
    this.pza.idPPedido = this.copiaPartidaPrioridad.idPPedido;
    if (this.pza.catCorrecto == false || this.pza.descripcionCorrecta == false || this.pza.presentacionCorrecta == false
      || this.pza.loteCorrecto == false || this.pza.caducidadCorrecta == false
      || this.pza.fisicamenteCorrecto == false) {
      this.fotos();
      this.pza.estadoFisico = "No Despachable";
      this.pza.rechazoXInsp = true;
      this.prueba = true;
      this.activarText = true;
      this.displayImg = 'block';
      if(this.copiaPartidaPrioridad.pasosImprimirEtiqueta == true)
        this.maximizer();
      console.log("estadoFisico", this.pza.estadoFisico);
      if(this.imageDataURL != undefined && this.imageDataURL2 != undefined && this.imageDataURL3 !=undefined ){
        this.btnEtiquetar = true;
      }
      else this.btnEtiquetar = false;
      if (this.pza.documentacionCorrecta == false) {
        this.pza.rechazoXDoc = false;
      }
    } else if (this.pza.documentacionCorrecta == false) {
      this.documentActivo = true;
      this.btnEtiquetar = true;
      this.pza.estadoFisico = "No Despachable";
      this.pza.rechazoXInsp = true;
      // this.prueba = true;
      this.activarText = true;
      this.displayImg = 'block';
      if(this.copiaPartidaPrioridad.pasosImprimirEtiqueta == true)
        this.maximizer();
      console.log("estadoFisico", this.pza.estadoFisico);
        this.pza.rechazoXDoc = false;
    } else {
      this.pza.estadoFisico = "Despachable";
      this.prueba = false;
      this.activarText = false;
      this.displayImg = 'none';
      //  this.btnEtiquetar = false;
      console.log("estadoFisico", this.pza.estadoFisico);
    }


  }
  cambiaCheckPublicacion(check: boolean, tipoCheck: string) {
    let ckec = check;
    console.log('Check', check);
    if (tipoCheck == 'catalogo') {
      this.checked2 = check;
      if(this.checked2 == false){
        if (this.pza.catCorrecto == false && this.checked2 != false){
          this.label1 = '#008A98';
          this.checkedCat = false;
          this.pza.catCorrecto = true;

        }
        else {
          this.checkedCat = false;
          this.label1 = '#999999';
          this.pza.catCorrecto = false;
        }

      }
      else{
        this.checkedCat = true;
        this.label1 = '#008A98';
        this.pza.catCorrecto = true;
      }
    }
    if (tipoCheck == 'descripcion') {

      this.checked2 = check;
      if(this.checked2 == false){
        if (this.pza.descripcionCorrecta == false && this.checked2 !== false) {
          this.label2 = '#008A98';
          this.checkDesc = false;
          this.pza.descripcionCorrecta = true;

        }
        else {
          this.checkDesc = false;
          this.label2 = '#999999';
          this.pza.descripcionCorrecta = false;
        }

      }
      else{
        this.checkDesc = true;
        this.label2 = '#008A98';
        this.pza.descripcionCorrecta = true;
      }

    }
    if (tipoCheck == 'fisicamente') {
      this.checked2 = check;
      if(this.checked2 == false) {
        if (this.pza.fisicamenteCorrecto == false && this.checked2 != false) {
          this.label7 = '#008A98';
          this.checkFis = false;
          this.pza.fisicamenteCorrecto = true;

        }
        else {
          this.checkFis = false;
          this.label7 = '#999999';
          this.pza.fisicamenteCorrecto = false;
        }

      }
      else {
        this.checkFis = true;
        this.label7 = '#008A98';
        this.pza.fisicamenteCorrecto = true;
      }
    }
    if (tipoCheck == 'edicion') {
      this.checked2 = check;
      if(this.checked2 == false){
        if (this.pza.edicionCorrecta == false && this.checked2 != false){
          this.label3 = '#008A98';
          this.checkEdic = false;
          this.pza.edicionCorrecta = true;

        }
        else {
          this.checkEdic = false;
          this.label3 = '#999999';
          this.pza.edicionCorrecta = false;
        }

      }
      else {
        this.checkEdic = true;
        this.label3 = '#008A98';
        this.pza.edicionCorrecta = true;
      }
    }
    if (tipoCheck == 'idioma') {
      this.checked2 = check;
      if(this.checked2 == false){
        if (this.pza.idiomaCorecto == false && this.checked2 != false){
          this.label5 = '#008A98';
          this.checkIdi = false;
          this.pza.idiomaCorecto = true;

        }
        else {
          this.checkIdi = false;
          this.label5 = '#999999';
          this.pza.idiomaCorecto = false;
        }

      }
      else {
        this.checkIdi = true;
        this.label5 = '#008A98';
        this.pza.idiomaCorecto = true;
      }
    }

    this.pza.esPublicacion = true;
    this.pza.despachable = false;
    this.pza.idCompra = this.copiaPartidaPrioridad.idPartidaCompra;
    this.pza.idPPedido = this.copiaPartidaPrioridad.idPPedido;
    if (this.pza.catCorrecto == false || this.pza.descripcionCorrecta == false
      || this.pza.fisicamenteCorrecto == false || this.pza.edicionCorrecta == false || this.pza.idiomaCorecto == false) {
      this.pza.estadoFisico = "No Despachable";
      this.pza.rechazoXInsp = true;
      // this.prueba = true;
      this.activarText = true;
      this.displayImg = 'block';

      if( this.reporteTxtPub !== undefined && this.reporteTxtPub !== '' && this.files[0].archivo !== undefined &&
        this.files[1].archivo !== undefined && this.files[2].archivo !== undefined) {
        this.btnEtiquetar = true;
      }
      else this.btnEtiquetar = false;
      if (this.pza.documentacionCorrecta == false) {
        this.pza.rechazoXDoc = false;
      }
    } else {
      this.btnEtiquetar = false;
    }
  }
  infoCombo(index: any, tipo: string) {
    if (tipo == 'mes') {
      this.pza.mesNum = index.key;
      this.pza.mesCaduca = index.nombre;
    } else if (tipo == 'anio') {
      this.pza.anoCaduca = index.nombre;
    }
    if((this.pza.mesCaduca != this.copiaPartidaPrioridad.mesCaduca) || (this.pza.anoCaduca != this.copiaPartidaPrioridad.anoCaduca) ){
      if (this.validaCaducidad() !== "") {
        this.mostrarAlerta = true;
      } else {
        if (this.pza.lote === this.copiaPartidaPrioridad.lote && (this.conDocumentacion == undefined || this.conDocumentacion == false)) {
          this.btnAceptar = true;
        }
        else
          this.btnAceptar = false;
      }
    } else {this.btnAceptar = false;}
  }
  cambioLote(texto: string) {
    var obj: any;
    obj = new Object;
    obj.tipo = 'lote';
    obj.nombre = texto;
    this.nuevoLote = obj.nombre;
    //this.noLote = obj.nombre;
    this.pza.lote = obj.nombre;
    //this.checkDocto = false;
    this.btnAceptar = false;
    if (this.nuevoLote !== this.copiaPartidaPrioridad.lote )
      this.pza.loteDistinto = true;
    else this.pza.loteDistinto= false;
  }
  creacionListaCmbAno() {
    var list = new Array<any>();
    var obj: any;
    var fecha: Date = new Date();
    var anoAct: any;
    var limiteAnos: number = 0;
    var contLlave: number = 0;

    anoAct = fecha.getFullYear();
    limiteAnos = anoAct + 10;

    obj = new Object;
    obj.nombre = "Año";
    obj.key = 0;

    list.push(obj);

    contLlave = 1;

    for (var i: number = anoAct; i < limiteAnos; i++) {
      obj = new Object;
      obj.nombre = i + "";
      obj.key = contLlave;

      list.push(obj);

      contLlave = contLlave + 1;

    }
    this.anio = list;
  }

  cerrarAlerta() {
    this.mostrarAlerta = false;
  }

  validaCaducidad(): string {
    var alertaTxt: string = "";
    let fechaActual: Date = new Date();
    if (this.pza.mesCaduca !== null && this.pza.mesCaduca !== undefined && this.pza.mesCaduca !== 'Mes' && this.pza.anoCaduca !== 'Año') {
      if (parseInt(this.pza.anoCaduca) == fechaActual.getFullYear()) {
        if (this.pza.mesNum == undefined) {
          var mes: number = this.copiaPartidaPrioridad.mesNum;
          if (mes < fechaActual.getMonth()) {
            alertaTxt = this.textoAlerta = "La caducidad es incorrecta ";
          }
        } else {
          var mes: number = this.pza.mesNum - 1;
          if (mes < fechaActual.getMonth()) {
            alertaTxt = this.textoAlerta = "La caducidad es incorrecta";
          }
        }
      }
    } else {
      alertaTxt = this.textoAlerta = "La caducidad es incorrecta";
    }
    return alertaTxt;
  }

  rechazoTxt(texto: string) {
    var obj: any;
    obj = new Object;
    obj.tipo = 'reporte';
    obj.nombre = texto;
    this.reporteTxt = obj.nombre;
    this.pza.reporte = this.reporteTxt;
    const index = this.partidaPrioridad.nombreImagenesRechazo.length;
    this.partidaPrioridad.comentariosImagen[index] = texto;
    console.log(this.reporteTxt);
  }
  rechazoTxtPub(texto: string) {
    var obj: any;
    obj = new Object;
    obj.tipo = 'reporte';
    obj.nombre = texto;
    this.reporteTxtPub = obj.nombre;
    this.pza.reporte = this.reporteTxt;
    console.log(this.reporteTxt);
    this.verificarBtn();
  }
  verificarBtn() {
    if (this.pza.catCorrecto == false || this.pza.descripcionCorrecta == false
      || this.pza.fisicamenteCorrecto == false || this.pza.edicionCorrecta == false || this.pza.idiomaCorecto == false) {
      if ( this.reporteTxtPub !== undefined && this.reporteTxtPub !== '' && this.files[0].archivo !== undefined &&
        this.files[1].archivo !== undefined && this.files[2].archivo !=undefined) {
        this.btnEtiquetar = true;
      } else {
        this.btnEtiquetar = false;
      }
    } else {
      this.btnEtiquetar = false;
    }
  }
  enviarDocumentacion(archivo: any, tipo: string) {
    var base64: any;
    base64 = new Object;
    //  this.archivoAdjunto.archivo = archivo;
    if (tipo === 'Certificado') {
      this.nuevoCertificado = new DocumentoAdjunto();
      if(this.pza.certificado.archivo != undefined){
        if(archivo[0].name != this.pza.certificado.archivo[0].name)


          this.nuevoCertificado = archivo;
        this.archCertificado = this.nuevoCertificado;
        //this.archCertificado.nombre = "Certificado.pdf";
        this.btnAceptar = true;
        this.aux = true;

      }
      else{
        this.aux = true;
        this.btnAceptar = true;
        this.nuevoCertificado = archivo;
        this.archCertificado = this.nuevoCertificado;
      }

    } else {
      //  this.btnAceptar = false;

      if (tipo === 'HojaSeguridad') {
        this.nuevoHojaSeguridad = new DocumentoAdjunto();
        if (this.pza.hojaSeguridad.archivo != undefined) {
          if (archivo[0].name != this.pza.hojaSeguridad.archivo[0].name) {
            this.nuevoHojaSeguridad = archivo
            this.archSeguridad = this.nuevoHojaSeguridad;
            //this.nuevoHojaSeguridad.nombre = "HojaSeguridad.pdf";
          } else {
            this.archSeguridad = this.pza.hojaSeguridad
          }
        } else {
          this.nuevoHojaSeguridad = archivo;
          this.archSeguridad = this.nuevoHojaSeguridad;
        }
      }
      //else
      //  this.btnAceptar = false;

    }



    // var obj: any;
    // obj = new Object;
    // obj.doc = this.archivoAdjunto;
    // obj.tipo = tipo;
    //  this.enviarDocumento.emit(obj);
  }

  fotos() {
    // Conexion propia a la camara; si ya esta abierta solo se reutiliza y se libera al cerrar el pop-up
    if (!this.player) {
      // Se llama desde ngOnInit, antes de que exista el <video>
      setTimeout(() => {
        if (this.player) {
          this.fotos();
        }
      });
      return;
    }
    this.camara.iniciarCamara(this.player.nativeElement).then(() => {
      this.errorCamaraFotos = null;
    }, (error: ErrorCamara) => {
      this.errorCamaraFotos = error && error.mensaje ? error.mensaje : 'No fue posible iniciar la cámara.';
    });
  }
  takeSnapshot(tipo: string) {
    let video = <HTMLVideoElement>document.getElementById("player");
    if (tipo == 'Frente') {
      var canvasFrente = <HTMLCanvasElement>document.getElementById("canvasFrente");
      var image = document.getElementById("output");
      var width = video.videoWidth;
      var height = video.videoHeight;
      var context = canvasFrente.getContext('2d');
      canvasFrente.width = width;
      canvasFrente.height = height;
      context.drawImage(video, 0, 0, width, height);
      this.imageDataURL = canvasFrente.toDataURL('image/png');
      image.setAttribute('src', this.imageDataURL);
      this.folioImgFrente = "frente";
      //  this.pza.imagenFrente = this.imageDataURL;
      let array = this.imageDataURL.split(",");
      this.imageDataURL = array[1];
      //  console.log(this.imageDataURL);

      //  resolve(this.imageDataURL);


    } else if (tipo == 'Arriba') {
      var canvasArriba = <HTMLCanvasElement>document.getElementById("canvasArriba");
      var image2 = document.getElementById("output2");
      var width = video.videoWidth;
      var height = video.videoHeight;
      var context = canvasArriba.getContext('2d');
      canvasArriba.width = width;
      canvasArriba.height = height;
      context.drawImage(video, 0, 0, width, height);
      this.imageDataURL2 = canvasArriba.toDataURL('image/png');
      image2.setAttribute('src', this.imageDataURL2);
      this.folioImgArriba = "arriba";
      //  this.pza.imagenArriba = this.imageDataURL2;
      let array = this.imageDataURL2.split(",");
      this.imageDataURL2 = array[1];

    } else if (tipo == 'Abajo') {

      var canvas = <HTMLCanvasElement>document.getElementById("canvasAbajo");
      var image3 = document.getElementById("output3");
      var width = video.videoWidth;
      var height = video.videoHeight;
      var context = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
      this.imageDataURL3 = canvas.toDataURL('image/png;base64,+data._body');
      image3.setAttribute('src', this.imageDataURL3);
      this.folioImgAbajo = "abajo";
      //  this.pza.imagenAbajo = this.imageDataURL3;
      let array = this.imageDataURL3.split(",");
      this.imageDataURL3 = array[1];
    }

    if (this.imageDataURL != undefined && this.imageDataURL2 != undefined && this.imageDataURL3 != undefined) {
      this.btnEtiquetar = true;
    } else this.btnEtiquetar = false;

  }

  finalizar() {
    this.param = new parametrosInspeccion();

    //  this.param.listaPzas = Object.assign([], this.pza);
    this.param.idCompra = this.partidaPrioridad.idPartidaCompra;
    this.param.idPPedido = this.partidaPrioridad.idPPedido;
    this.param.usuario = SessionUser.getInstance().getUser().getUsuario();
    this.param.estado = "No Despachable";
    if (this.partidaPrioridad.tipo.toLowerCase() !== 'publicaciones') {
      if (this.partidaPrioridad.manejo == "Ambiente") {
        this.param.numAnaquel = 8;
        this.param.letraAnaquel = 'A';
        this.param.ubicacion = 'Cuarentena (Anaquel ' + this.param.numAnaquel + "-" + this.param.letraAnaquel + ")";
        this.ubicacionImprimir = 'Cuarentena (Anaquel 8A)'; // Se agrego para obtener la ubicacion
        this.pza.ubicacion = 'Anaquel_8A';
        this.imprimirEtiqueta(this.param); /// Se agrego para obtener la ubicacion
        this.finalizarTerminarPop(); // SE LLAMA AL METODO QUE SE CREO NUEVO
      } else if (this.partidaPrioridad.manejo == "Congelación" || this.partidaPrioridad.manejo == "Congelacion") {
        this.param.numAnaquel = 0;
        this.param.letraAnaquel = "C";
        this.param.ubicacion = "Cuarentena (Congelador " + this.param.letraAnaquel + ")";
        this.obtenerUbicacion(false); // Se agrego para obtener la ubicacion
      } else if (this.partidaPrioridad.manejo == "Refrigeración" || this.partidaPrioridad.manejo == "Refrigeracion") {
        this.param.numAnaquel = 0;
        this.param.letraAnaquel = "G";
        this.param.ubicacion = "Cuarentena (Refrigerador " + this.param.letraAnaquel + ")";
        this.obtenerUbicacion(false); // Se agrego para obtener la ubicacion
      }
    } else {
      this.partidaPrioridad.manejo = 'Ambiente';
      this.obtenerUbicacion(false); // Se agrego para obtener la ubicacion
    }
    // else if (this.esPublicacion) {
    //   this.param.ubicacion = "Ambiente";
    //   this.param.numAnaquel = obj.numAnaquel;
    //   this.param.letraAnaquel = obj.letraAnaquel;
    // }
    //

    // this.param.fechaInspeccion = "12Jul2018";
    // this.param.numRechazos = this.partidaPrioridad.contIncidencia;
    // this.param.finalizarPendiente = true;
    // this.param.fechaInicio = new Date();
    //

  /*  if(this.copiaPartidaPrioridad.pasosImprimirEtiqueta === true)
      this.imprimirEtiqueta(this.param);*/

  }

  //////////////// Se obtiene la ubicación para imprimir/////////
  obtenerUbicacion(tipo: boolean) {
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
    this._insp.obtenerUbicacionInspeccion(data).subscribe(
      data => {
        console.log("Ubicacion ", data.current);
        let string = data.current;
        if (this.partidaPrioridad.cantidadCompra === 1) {
          this.partidaPrioridad.ubicacion = data.current;
        }
        this.pza.ubicacion = data.current; /// Se agrego para obtener la ubicacion de cada etiqueta
        // this.actualizarPieza.emit(this.pza);
        let parts: any[] = string.split("_");
        let respuesta = parts[0];
        let letra = parts[1];
        let ubicacionAux;
        let idUbicacion;
        ubicacionAux = respuesta + " " + "Cuarentena (" + letra + ')';
        this.ubicacionImprimir =  ubicacionAux ;
        if (this.partidaPrioridad.tipo.toLowerCase() !== 'publicaciones') {
          this.imprimirEtiqueta(this.param);
        } else {
          this.ubicacionImprimir = respuesta + '(' + letra + ')';
            this.imprimirEtiquetaPubli(this.param);
        }
        this.finalizarTerminarPop(); // SE LLAMA AL METODO QUE SE CREO NUEVO
      }, error => {

      }
    );
  }
///////////////////////////////////////////////////////////////////



  transform(dateToFormat: any): any {
    if (dateToFormat == undefined || dateToFormat == null) { return "Pendiente" }
    let now: Date = new Date();
    if (dateToFormat.length == 10) {
      now = new Date(dateToFormat);
    } else {
      now = new Date(dateToFormat);
    }
    let date: String;
    let mes: number = now.getMonth();
    let hora: String = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
    let minutos: String = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
    let hour: String = hora + ":" + minutos;
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



  enviarImg() {
    var data: any;
    data = new Object;
    data = {
      frente:this.imageDataURL,
      arriba:this.imageDataURL2,
      abajo:this.imageDataURL3,
      concepto : "Folio rechazo"
    };
    this.coreComponent.openModal(0);
    this._insp.nombreArchivo(data).subscribe(
      data => {
        console.log(data);
        let string:any = data.current;
        let folios: any []= string.split("|");
        let frente = folios[0]; // 123
        let arriba = folios[1]; // 654321
        let abajo = folios[2];
        console.log (folios + "***f1:" +frente+" "+ "f2: " +arriba+" "+ "f3: " +abajo);
        this.pza.fFrente= frente;
        this.pza.fArriba= arriba;
        this.pza.fAbajo= abajo;

        console.log(this.pza);
        let index = this.partidaPrioridad.nombreImagenesRechazo.length;
        this.partidaPrioridad.nombreImagenesRechazo[index] = data.current;
        //  this.actualizarPieza.emit(this.pza);
        this.finalizar();
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
        console.log(error);
      });
    // let string: any = "FR-081618-0811|FR-081618-0812|FR-081618-0813";
    // let parts: any[] = string.split("|");
    // let part1 = parts[0];
    // let part2 = parts[1];
    // let part3 = parts[2];
    // console.log(parts + "f1: " + part1 + "f2: " + part2 + "f3: " + part3);
    // this.pza.fFrente = "FR-081618-0811";
    // this.pza.fArriba = "FR-081618-0812";
    // this.pza.fAbajo = "FR-081618-0813";
    // console.log(this.pza);
  }


  cerrarPopInf(dato:any){
    console.log(dato);
    this.partidaPrioridad.qrBolsaIncidencia = dato.codigo;
    this.popInf.nativeElement.style.display = 'none';
    //  this.comunService.videoZindex(false);

    if(dato.cambio == true){
      console.log(this.pza);
      this.actualizarPieza.emit(this.pza);
      this.activo.emit(this.mostrar);
      this.pop.nativeElement.style.display = 'none';

    }
  }

  async imprimirEtiqueta(datos: parametrosInspeccion) {
    let fee: string;
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
    this.rutaManejo = 'http://ryndem.mx/DESARROLLO/Imagenes/imagenesEtiqueta/ambiente.svg';
    this.enviarUbicacionNoDesp.emit(this.ubicacionImprimir); /// SE AGREGO PARA ENVIAR LA UBICACION DE LAS NO DESPACHABLES
    const BrowserWindow = electron.remote.BrowserWindow;
    //clipboard.writeText('Electron is ready!!');
    let newWin = new BrowserWindow({ width: 288, height: 216 });
    var fecha: string = this.transform(new Date());
    const barcode = await this.getBarcode(this.partidaPrioridad.folioEtiqueta);
    var html = [
      "<html><head>",
      "<style>",
      "@media print { @page {size: 10cm 9cm;padding:0;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}",
      ".contenido {position: absolute;max-width: 9.5cm; page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;} .bcode{font-family:'Novecentowide'; font-size:12px;} img{page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;}",
      "</style></head>",
      "<body> <div class='contenido'>",
      "<img style='width: 8cm; height:1.5cm; margin-top:-20px;' ",
      "src='" + barcode + "'>",
      "</div>",
      "<div style='padding-top: 37px;' >",
      "<div style='font-size: 18px; min-height: 23px; align-self: center; text-align: center;'>" + this.partidaPrioridad.folioEtiqueta + "</div>",
      "<div style='flex-direction: row; display: flex; padding-top: 15px;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px '> Cliente:</div>",
      "<div  style='font-size: 14px; height:23px;'> " + this.partidaPrioridad.nombreCliente + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px;width: 432px;  font-weight: bold; text-align: center;'> " + tipoPartida + ' ' +  fee + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Estatus:</div>",
      "<div  style='font-size: 14px; height:23px;  font-weight: bold; '> " + datos.estado + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Inspecciono: </div>",
      "<div  style='font-size: 14px; height:23px; '> " + datos.usuario + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Tipo:</div>",
      "<div  style='font-size: 14px; height:23px; '> " + this.partidaPrioridad.tipo + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Control: </div>",
      "<div  style='font-size: 14px; height:23px; '>" + this.partidaPrioridad.control + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Ubicación:</div>",
      "<div  style='font-size: 14px; min-height:23px; width:185px;'> " + this.ubicacionImprimir + "</div>",  /*datos.ubicacion*/
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; width:140px; text-align:right; padding-right: 5px'> Inspeccionado:</div>",
      "<div  style='font-size: 14px; '> " + fecha + "</div>",
      "</div>",
      "</div>",

      "</body></html>"
    ].join("");

    newWin.loadURL("data:text/html;charset=utf-8," + encodeURI(html));
    newWin.hide();
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
    })
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

  exitFullScreen(){
    if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
      this._electronService.remote.getCurrentWindow().setFullScreen(false);
      this._maximizer = false;
    }
  }
  recibeImg(archivo, tipo) {
    if (tipo === 'Frente') {
      this.files[0] = {tipo: 'Frente', archivo: archivo[0]};
    } else if (tipo === 'Arriba') {
      this.files[1] = {tipo: 'Arriba', archivo: archivo[0]};
    } else if (tipo === 'Abajo') {
      this.files[2] = {tipo: 'Abajo', archivo: archivo[0]};
    }
    console.log('File--->', this.files);
    this.verificarBtn();
  }
  aceptarPublicacion() {
    this.pza.esPublicacion = true;
    if (this.btnEtiquetar == true) {

      this.guardarImg();
      this.finalizar();

    } else {

      this.mostrar = true;
      this.actualizarPieza.emit(this.pza);
      this.activo.emit(this.mostrar);
      this.pop.nativeElement.style.display = 'none';

    }
  }
  guardarImg() {
    this._insp.uploadImage(this.files, 'Folio rechazo').subscribe( data => {
      this.resultado = data.current;
      let index = this.partidaPrioridad.nombreImagenesRechazo.length;
      this.partidaPrioridad.nombreImagenesRechazo[index] = this.resultado; // Se guardan el nombre de las imagenes de rechazo
    });
  }
  async imprimirEtiquetaPubli(datos: parametrosInspeccion) {
    this.enviarUbicacionNoDesp.emit(this.ubicacionImprimir); /// SE AGREGO PARA ENVIAR LA UBICACION DE LAS NO DESPACHABLES
    const BrowserWindow = electron.remote.BrowserWindow;
    //clipboard.writeText('Electron is ready!!');
    let newWin = new BrowserWindow({ width: 288, height: 216 });
    var fecha: string = this.transform(new Date());
    const barcode = await this.getBarcode(this.partidaPrioridad.folioEtiqueta);
    var html = [
      "<html><head>",
      "<style>",
      "@media print { @page {size: 10cm 9cm;padding:0;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}",
      ".contenido {position: absolute;max-width: 9.5cm; page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;} .bcode{font-family:'Novecentowide'; font-size:12px;} img{page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;}",
      "</style></head>",
      "<body> <div class='contenido'>",
      "<img style='width: 8cm; height:1.5cm; margin-top:-20px;' ",
      "src='" + barcode + "'>",
      "</div>",
      "<div style='padding-top: 37px;' >",
      "<div style='font-size: 18px; min-height: 23px; align-self: center; text-align: center;'>" + this.partidaPrioridad.folioEtiqueta + "</div>",
      "<div style='flex-direction: row; display: flex; padding-top: 15px;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px '> Cliente:</div>",
      "<div  style='font-size: 14px; height:23px;'> " + this.partidaPrioridad.nombreCliente + "</div>",
      // "<div  style='font-size: 12px; height:30px;'> " + " PROCTER AND " + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Estatus:</div>",
      "<div  style='font-size: 14px; height:23px;  font-weight: bold; '> " + datos.estado + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex; ' >",
      "<div  style='font-size: 14px; height:23px;width:140px; text-align:right; padding-right: 5px'> Manejo:</div>",
      "<div  style='font-size: 14px; height:23px;' font-weight: bold; >  NA </div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Inspecciono: </div>",
      "<div  style='font-size: 14px; height:23px; '> " + datos.usuario + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Tipo:</div>",
      "<div  style='font-size: 14px; height:23px; '> " + this.partidaPrioridad.tipo + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Control: </div>",
      "<div  style='font-size: 14px; height:23px; '>" + this.partidaPrioridad.control + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Ubicación:</div>",
      "<div  style='font-size: 14px; min-height:23px; width:185px;'> " + this.ubicacionImprimir + "</div>",  /*datos.ubicacion*/
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; width:140px; text-align:right; padding-right: 5px'> Inspeccionado:</div>",
      "<div  style='font-size: 14px; '> " + fecha + "</div>",
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
    });
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
