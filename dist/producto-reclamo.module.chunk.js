webpackJsonp(["producto-reclamo.module"],{

/***/ "./src/app/components/producto-reclamo/envio-correo/envio-correo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" *ngIf=\"correo\">\r\n  <!-- Inicio modal -->\r\n  <div id=\"pop-up-lote\" class=\"modal\" #pop>\r\n    <!-- Inicio modal-content -->\r\n    <div class=\"modal-content\">\r\n      <header class=\"header\" >\r\n        ENVIAR EVIDENCIA DE FACTURACIÓN\r\n      </header>\r\n      <div class=\"contenido\">\r\n        <div style=\"width: 100%;height: 90%\">\r\n          <div class=\"remitentes\">\r\n            <label>Contacto: <span class=\"destinatarios\">{{correoContacto}} </span></label>\r\n          </div>\r\n          <div class=\"remitentes\" style=\"padding-left: 63px;\">\r\n            <label>CC : <input #textCopia (blur)=\"cambioCopia(textCopia.value, 'CC')\" value=\"{{cc}}\"  type=\"text\" class=\"copiaCorreo\"></label>\r\n          </div>\r\n          <div class=\"remitentes\" style=\"padding-left: 50px;\">\r\n            <label>CCO : <input #textCopiaO (blur)=\"cambioCopia(textCopiaO.value, 'CCO')\" value=\"{{destinatarioCopia}}\"  type=\"text\" class=\"copiaCorreo\"></label>\r\n          </div>\r\n          <div  class=\"remitentes\" style=\"padding-left: 20px;\">\r\n            <label>ASUNTO : <span style=\"font-weight: 300\"> PRODUCTO RECLAMO </span></label>\r\n          </div>\r\n          <div class=\"comentarios\">\r\n            <textarea placeholder=\" Escribe Comentarios Adicionales\" [(ngModel)]=\"comentario\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div style=\"width: 100%;height: 10%\" class=\"btnDireccionPL\">\r\n          <div>\r\n            <a class=\"btnImprimir\" (click)=\"finalizar()\">ACEPTAR</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Fin modal-content-->\r\n  </div>\r\n  <!--Fin modal-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/producto-reclamo/envio-correo/envio-correo.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal{z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(255,255,255,.7);font-family:\"Roboto\",sans-serif}.modal-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:auto;top:0%;background-color:#fff;position:relative;padding:0;outline:0;width:795px;height:520px;color:#000;border:1px solid #008894;font-family:\"Roboto\",sans-serif;border-radius:11px 11px 11px 11px}.header{width:100%;height:55px;color:#fff;font-family:\"Novecento\";font-weight:bold;font-size:26px;background:#008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:10px 10px 0px 0px}.contenido{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:stretch;align-self:stretch;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:20px;padding-right:20px}.btnDireccionPL{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:5%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;justify-items:center}.btnImprimir{width:170px;height:30px;background-color:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.titulo{font-family:Novecento;font-weight:bold;font-size:16px}.remitentes{height:15%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:10px;padding-bottom:10px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #424242}.remitentes>label{font-family:Novecento;font-weight:bold;font-size:16px}.comentarios{width:100%;height:35%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-top:10px}.comentarios>textarea{width:100%;height:100%;border-color:transparent}.destinatarios{font-family:Roboto;font-weight:300;color:#008894;font-size:16px;padding-left:5px}.copiaCorreo{height:27px;width:500px;border-color:transparent;outline:0 none}"

/***/ }),

/***/ "./src/app/components/producto-reclamo/envio-correo/envio-correo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvioCorreoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnvioCorreoComponent = /** @class */ (function () {
    function EnvioCorreoComponent() {
        this.cerrarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.comentario = '';
        this.destinatarioCopia = '';
        this.cc = '';
    }
    EnvioCorreoComponent.prototype.ngOnInit = function () {
        this.correo = true;
        console.log('sOY NUEVO CORREO -->');
    };
    EnvioCorreoComponent.prototype.cambioCopia = function (texto, tipo) {
        if (tipo === 'CCO') {
            this.destinatarioCopia = texto;
        }
        else if (tipo = 'CC') {
            this.cc = texto;
        }
    };
    EnvioCorreoComponent.prototype.finalizar = function () {
        var obj = {
            correo: this.correoContacto,
            ccorreo: this.cc,
            cocorreo: this.destinatarioCopia,
            cuerpoCorreo: this.comentario,
        };
        console.log(this.destinatarioCopia);
        console.log(this.cc);
        this.cerrarPop.emit(obj);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EnvioCorreoComponent.prototype, "cerrarPop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EnvioCorreoComponent.prototype, "correoContacto", void 0);
    EnvioCorreoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-envio-correo',
            template: __webpack_require__("./src/app/components/producto-reclamo/envio-correo/envio-correo.component.html"),
            styles: [__webpack_require__("./src/app/components/producto-reclamo/envio-correo/envio-correo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EnvioCorreoComponent);
    return EnvioCorreoComponent;
}());



/***/ }),

/***/ "./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaSeccion\">\r\n  <div>\r\n    <div class=\"datosPersonales\" *ngIf=\"contacto !== 'Seleccionar'\">\r\n      <div>\r\n        <div>\r\n          <img src=\"./assets/Images/contacto.svg\" class=\"icono\">\r\n          <pn-combo-flecha-verde [validar]=\"true\"  [items]=\"itemContacto\" [itemSelect]=\"selected\" [heightLi]=\"'35px'\" [widthBorder] = 'false' (valueDropList)=\"recibirItem($event)\" style=\"width: 250px;\" *ngIf=\"activarCombo\"></pn-combo-flecha-verde>\r\n        </div>\r\n        <div>\r\n          <img src=\"./assets/Images/mail.svg\" class=\"icono\">\r\n          <label>{{itemContactoS.email}}</label>\r\n        </div>\r\n        <div>\r\n          <img src=\"./assets/Images/telefono.svg\" class=\"icono\">\r\n          <label>{{itemContactoS.tel}}</label>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <label>{{itemContactoS.titulo}}</label>\r\n        <span>Título de Contacto</span>\r\n      </div>\r\n      <div>\r\n        <label>{{itemContactoS.puesto}}</label>\r\n        <span>Puesto</span>\r\n      </div>\r\n      <div>\r\n        <label>{{itemContactoS.departament}}</label>\r\n        <span>Departamento</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"datosPersonales\" *ngIf=\"contacto == 'Seleccionar'\">\r\n      <div style=\"width: 100%\">\r\n        <div class=\"noSeleccionado\">\r\n          <img src=\"./assets/Images/contacto.svg\" class=\"icono\">\r\n          <pn-combo-flecha-verde  [items]=\"itemContacto\" [itemSelect]=\"selected\" [heightLi]=\"'35px'\" [widthBorder] = 'false' (valueDropList)=\"recibirItem($event)\" style=\"width: 250px;display: flex;align-items: center\" *ngIf=\"activarCombo\"></pn-combo-flecha-verde>\r\n        </div>\r\n        <div style=\"height: 50%;width: 100%\">\r\n          <h1>SELECCIONA UN CONTACTO PARA VISUALIZAR ESTA SECCIÓN</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div style=\"padding-right: 20px;\" class=\"seccionListas\">\r\n        <div class=\"titulos\" style=\"border-bottom: initial\">\r\n          <label>PRODUCTOS RECHAZADOS</label>\r\n        </div>\r\n        <div>\r\n          <div class=\"titulosLista\">\r\n            <div class=\"organizarLista\" style=\"padding-bottom: 10px; padding-top: initial\">\r\n              <div style=\"height: 100%;    display: flex;align-items: center;\">\r\n                <div class=\"menu\" (click)=\"abreCombo()\">\r\n                  <div>\r\n                  </div>\r\n                  <div>\r\n                  </div>\r\n                  <div>\r\n                  </div>\r\n                  <section id=\"section\">\r\n                    <ul class=\"listaHamburguesa\">\r\n                      <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\r\n                      <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\r\n                    </ul>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div style=\"height: 100%;    display: flex;align-items: center;\">\r\n                <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\r\n              </div>\r\n              <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n                <div class=\"buscar\">\r\n                  <div>\r\n                    <div class=\"lupa\">\r\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                    </div>\r\n                    <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Buscar\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--Lista total-->\r\n          <div class=\"listaSeccionUno\">\r\n            <div>\r\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\r\n                <div [ngClass]=\"item.identificador === folio? 'divActive': ''\"  *ngFor=\"let item of lista; let i = index\"\r\n                     style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\" (click)=\"seleccionarItem(i, item)\">\r\n                  <div class=\"dfSelect\"></div>\r\n                  <div class=\"datosLst\">\r\n                    <div class=\"informacionList\">\r\n                      <label>#{{i +1}} · <span style=\"color:#008894\">{{item.codigo}} </span>{{item.concepto}}</label>\r\n                      <p>Fecha de Inspección: <span style=\"text-transform: capitalize;\">{{item.fechaInspeccionFormato}}</span> · Inspector: {{item.inspector}}</p>\r\n                      <h3 class=\"textoPiezas\">Lugar: {{item.destino}} · FEE: <span style=\"text-transform: capitalize;\">{{item.feeFormato}}</span> · DRE: {{item.dre}} · Tipo: {{item.tipo}}</h3>\r\n                      <p>OC: {{item.compra}} · Pedido Interno {{item.cpedido}}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"totales\">\r\n              <label>#{{lista.length}}</label>\r\n              <label>{{lista.length}} Piezas</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--linea degradada-->\r\n      <div class=\"borderLine\"></div>\r\n      <!---->\r\n      <div style=\"width: 65%;padding-left: 20px\" class=\"seccionListas\">\r\n        <div class=\"titulos\">\r\n          <label *ngIf=\"activarOc\" class=\"corteTexto\">#{{indiceOc}} · <span>{{itemOc.codigo}}</span> {{itemOc.concepto}}</label>\r\n        </div>\r\n        <div>\r\n          <div style=\"height: 10%; width: 100%; display: flex;flex-direction: column\">\r\n            <div style=\"height: 60%; width: 100%;display: flex;flex-direction: row;justify-content: space-between\">\r\n              <div class=\"infoProveedor\">\r\n                <span>Producto Rechazado</span>\r\n                <div>\r\n                  <div style=\"padding-right: 5px;\">\r\n                    <label style=\"font-weight: 400\">Tipo:</label>\r\n                    <label>{{itemOc.tipo}}</label>\r\n                  </div>\r\n                  <div>\r\n                    <label style=\"font-weight: 400\">Manejo:</label>\r\n                    <label>{{itemOc.manejo}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"infoProveedor\">\r\n                <div style=\"padding-top: 20px\">\r\n                  <div>\r\n                    <label style=\"font-weight: 400;color: #008894;\">Causa:</label>\r\n                    <label>{{itemOc.origen}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"seccionContenido\">\r\n            <div class=\"texto\">\r\n              <div style=\"height: calc(100% - 54px)\">\r\n                <label>Reporte de Rechazo</label>\r\n              </div>\r\n              <div class=\"rechazo\">\r\n                <label class=\"rechazoMotivo\">{{itemOc.rechazo}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"imagenes\">\r\n              <div class=\"imagenRechazo\">\r\n                <div class=\"image\">\r\n                  <label (click)=\"visualizarImg('frente')\" [style.font-weight]=\"fotoF? 'bold': ''\">Foto Frente</label>\r\n                  <label (click)=\"visualizarImg('arriba')\" [style.font-weight]=\"fotoAr? 'bold': ''\">Foto Arriba</label>\r\n                  <label (click)=\"visualizarImg('abajo')\" [style.font-weight]=\"fotoAb? 'bold': ''\">Foto Abajo</label>\r\n                </div>\r\n                <div class=\"estilosImagen\">\r\n                  <img [src]=\"pathImg\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"motivos\">\r\n              <div style=\"justify-content: flex-start;align-items: center;padding-top: 5px;\">\r\n                <div class=\"etiquetaInstruc\">\r\n                  <label class=\"instruc\">Instrucciones</label>\r\n                </div>\r\n                <div class=\"tipoInstruc\">\r\n                  <label style=\"padding-left: 13px;\">Reclamar la reposición del producto</label>\r\n                </div>\r\n              </div>\r\n              <div  style=\"flex-direction: row;height: 55%;padding-top: 5px;\">\r\n                <div style=\"flex-direction: column;width: 70%\">\r\n                  <label>Solicitud de Reclamo</label>\r\n                  <textarea [ngModel]=\"instruccion\" (ngModelChange)=\"recibirInstruccion($event)\" placeholder=\"Escribe Aquí\"></textarea>\r\n                </div>\r\n                <div class=\"tipoEnvio\">\r\n                  <label>Medio de Reclamo</label>\r\n                  <div style=\"padding-right: 47px;\">\r\n                    <img src=\"./assets/Images/radio_unselected.svg\" *ngIf=\"!entregarSelect\" (click)=\"activarSelect('tel')\">\r\n                    <img src=\"./assets/Images/radio_selected.svg\" *ngIf=\"entregarSelect\" (click)=\"activarSelect('tel')\">\r\n                    <label>Tel</label>\r\n                  </div>\r\n                  <div>\r\n                    <img src=\"./assets/Images/radio_unselected.svg\" *ngIf=\"!reclamarSelect\" (click)=\"activarSelect('mail')\">\r\n                    <img src=\"./assets/Images/radio_selected.svg\" *ngIf=\"reclamarSelect\" (click)=\"activarSelect('mail')\">\r\n                    <label>Mail/Fax</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"btn\">\r\n    <div [style.background-color]=\"activarBtn? '#4BA92B': '#C2C3C9'\" [style.pointer-events]=\"activarBtn? 'auto':'none'\" (click)=\"finalizar()\">\r\n      <label>ACEPTAR</label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<pn-envio-correo *ngIf=\"activarPop\" (cerrarPop)=\"finalizarEnvio($event)\" [correoContacto]=\"this.itemContactoS.email\"></pn-envio-correo>\r\n"

/***/ }),

/***/ "./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.scss":
/***/ (function(module, exports) {

module.exports = ".areaSeccion{min-width:1175px;min-height:1000px;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0px 20px 0px 20px}.areaSeccion>div{width:100%;height:calc(100% - 71px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.areaSeccion>div>.datosPersonales{width:100%;height:153px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #424242;line-height:1.5}.areaSeccion>div>.datosPersonales>div{height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:10px}.areaSeccion>div>.datosPersonales>div>label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.areaSeccion>div>.datosPersonales>div>span{font-family:Roboto;font-weight:400;font-size:17px;color:#848387;text-align:left}.areaSeccion>div>.datosPersonales>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.areaSeccion>div>.datosPersonales>div>div>label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.areaSeccion>div>.datosPersonales>div>div>h1{font-family:Novecento;font-weight:bold;font-size:40px;color:#d8d9dd;line-height:55px}.areaSeccion>div>div{width:100%;height:calc(100% - 153px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.areaSeccion>.btn{height:71px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:20px}.areaSeccion>.btn div{display:-webkit-box;display:-ms-flexbox;display:flex;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#c2c3c9;cursor:pointer}.areaSeccion>.btn div>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.primeraSec{width:30%;background:#fff;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:20px;margin-right:20px;min-width:350px}.primeraSec>.listaSeccionUno{height:90%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.primeraSec>.listaSeccionUno>div{height:calc(100% - 30px);border-bottom:1px solid;width:100%;border-top:1px solid;overflow:scroll}.primeraSec>.listaSeccionUno>.totales{height:30px;width:100%;border-bottom:0;border-top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lista{width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>div>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;padding-top:5px;padding-bottom:5px;padding-left:20px}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive>div>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;padding-top:5px;padding-bottom:5px;padding-left:20px}.listaSeccionUno{-webkit-box-sizing:border-box;box-sizing:border-box;min-height:668px;height:96%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto}.listaSeccionUno>div{height:calc(100% - 30px);border-bottom:1px solid;width:100%;border-top:1px solid;overflow:auto;position:relative}.listaSeccionUno>.totales{height:30px;width:100%;border-bottom:0;border-top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1.2}.borderLine{width:1.1px;height:100%;background:-webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;background:linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%}.icono{width:16px;margin-right:5px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:50px;width:100%;border-style:solid;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:90%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.menu{position:relative}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:74px;overflow:auto;width:219px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}.espacios{padding-right:120px}.subtitulo{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.noSeleccionado{height:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:20px}.informacionList{font-family:Roboto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.informacionList label{color:#242424;font-weight:bold;font-size:20px;font-family:Roboto;-webkit-transition:.8s font-size;transition:.8s font-size;overflow:hidden}@supports(-webkit-line-clamp: 2){.informacionList label{display:block;display:-webkit-box !important;line-height:1.2;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 2){.informacionList label{position:relative;line-height:1.2;overflow:hidden;width:100%}.informacionList label:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.informacionList p{font-weight:400;font-family:Roboto;font-size:17px;color:#242424;text-align:left;-webkit-transition:.8s font-size;transition:.8s font-size}.informacionList h3{font-size:17px;font-family:Roboto;color:#848387;font-weight:400;-webkit-transition:.8s font-size;transition:.8s font-size}.pedidoInter{font-weight:400 !important}.imagenFlecha{position:absolute;right:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;height:100%}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.seccionListas{width:35%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.seccionListas>.titulos{width:100%;height:67px;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #242424;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.seccionListas>.titulos>label{font-family:Novecento;font-weight:bold;font-size:24px;color:#424242;text-align:left;overflow:hidden;-webkit-transition:.8s font-size;transition:.8s font-size}.seccionListas>.titulos>label>span{color:#008894;font-size:24px;font-weight:bold;font-family:Novecento}.seccionListas>div{width:100%;height:calc(100% - 67px)}.numeroIndex{font-size:28px;font-family:Roboto;font-weight:400;color:#242424;text-align:left;padding-right:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px}.infoProveedor{height:100%;width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1.2}.infoProveedor>span{font-family:Roboto;font-weight:bold;font-size:20px;color:#008894;text-align:left;-webkit-transition:.8s font-size;transition:.8s font-size}.infoProveedor>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.infoProveedor>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.infoProveedor>div>div>label{font-family:Roboto;font-weight:bold;font-size:16px;color:#424242;text-align:left;padding-right:5px;-webkit-transition:.8s font-size;transition:.8s font-size}.segundaS{height:40%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.segundaS .causaProducto{height:100%;width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.segundaS .causaProducto>span{font-family:Roboto;font-weight:bold;font-size:20px;color:#008894;text-align:left;-webkit-transition:.8s font-size;transition:.8s font-size}.segundaS .causaProducto>label{overflow:hidden;font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left;padding-right:5px;-webkit-transition:.8s font-size;transition:.8s font-size}@supports(-webkit-line-clamp: 1){.segundaS .causaProducto>label{display:block;display:-webkit-box !important;line-height:inital;-webkit-line-clamp:1;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 1){.segundaS .causaProducto>label{position:relative;line-height:inital;overflow:hidden;width:100%}.segundaS .causaProducto>label:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.seccionContenido{height:90%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.seccionContenido>.texto{height:116px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:5px}.seccionContenido>.texto>div>label{font-family:Roboto;font-weight:bold;font-size:20px;color:#424242;text-align:left}.seccionContenido>.texto>.rechazo{height:54px;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f9e0e0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}.seccionContenido>.imagenes{height:calc(100% - 116px);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:5px}.seccionContenido>.imagenes>.imagenRechazo{height:100%;width:100%;background-color:#f3f3f4;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.seccionContenido>.imagenes>.imagenRechazo>.image{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:10px}.seccionContenido>.imagenes>.imagenRechazo>.image>label{cursor:pointer;font-family:Roboto;font-weight:400;font-size:20px;color:#008894;text-align:left;height:23px}.seccionContenido>.imagenes>.imagenRechazo>.image>label:hover{border-bottom:1px solid}.seccionContenido>.imagenes>.imagenRechazo>.estilosImagen{height:calc(100% - 20px);width:calc(100% - 20px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.seccionContenido>.imagenes>.imagenRechazo>.estilosImagen>img{height:305px;position:relative}.rechazoMotivo{font-weight:400 !important;font-size:17px !important;color:#424242;overflow:hidden}@supports(-webkit-line-clamp: 2){.rechazoMotivo{display:block;display:-webkit-box !important;line-height:1.2;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 2){.rechazoMotivo{position:relative;line-height:1.2;overflow:hidden;width:100%}.rechazoMotivo:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.motivos{height:calc(100% - 407px);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.motivos>div{height:45%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.motivos>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.motivos>div>div>label{font-family:Roboto;font-weight:400;font-size:17px;color:#424242;-webkit-transition:.8s font-size;transition:.8s font-size}.motivos>div>div>img{height:20px;padding-right:15px}.motivos>div>div>textarea{height:71px;outline:0 none;border-width:1px;border-style:solid;border-color:#d8d9dd;font-size:16px;font-family:Roboto;font-weight:400;width:99%}.motivos>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left}.tipoEnvio{width:30% !important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.tipoEnvio>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:5px}.tipoEnvio>div>img{width:20px;padding-right:6px}.tipoEnvio>div>label{font-family:Roboto;font-size:18px;color:#424242}.instruc{font-weight:bold !important;font-size:18px !important;color:#008894 !important;text-align:left}.tipoInstruc{background:rgba(0,136,149,.12);height:70% !important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important;padding-top:5px}.etiquetaInstruc{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important;height:30% !important}@supports(-webkit-line-clamp: 1){.etiquetaInstruc{display:block;display:-webkit-box !important;line-height:1.2;-webkit-line-clamp:1;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 1){.etiquetaInstruc{position:relative;line-height:1.2;overflow:hidden;width:100%}.etiquetaInstruc:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}@supports(-webkit-line-clamp: 1){.corteTexto{display:block;display:-webkit-box !important;line-height:1.2;-webkit-line-clamp:1;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 1){.corteTexto{position:relative;line-height:1.2;overflow:hidden;width:100%}.corteTexto:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}::ng-deep .dropListSelect .container-drop .Title>p{font-weight:bold !important;color:#008894}@media all and (min-width: 1300px)and (max-width: 1836px){.areaSeccion>div>.datosPersonales>div>div>h1{font-size:35px}.seccionListas>.titulos>label{font-size:22px}.seccionListas>.titulos>label>span{font-size:22px}.infoProveedor>span,.causaProducto>span{font-size:18px}.infoProveedor>div>div>label,.causaProducto>label{font-size:16px}.informacionList>label{font-size:18px}.informacionList>p{font-size:17px}.informacionList>h3{font-size:16px}.motivos>div>div>label{font-size:16px}}@media all and (min-width: 1300px)and (max-width: 1864px){.espacios{padding-right:20px}}@media all and (min-height: 770px)and (max-height: 1261px){.listaSeccionUno{height:95.5%}.tipoInstruc{height:70% !important}.etiquetaInstruc{height:30% !important}}"

/***/ }),

/***/ "./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionProductoReclamoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gestor_producto_reclamo_producto_reclamo_service__ = __webpack_require__("./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GestionProductoReclamoComponent = /** @class */ (function () {
    function GestionProductoReclamoComponent(_serviceContac, _serviveReclamo, coreContainer, comunService) {
        this._serviceContac = _serviceContac;
        this._serviveReclamo = _serviveReclamo;
        this.coreContainer = coreContainer;
        this.comunService = comunService;
        this.regreVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.contacto = 'Seleccionar';
        this.validar = 1;
        this.folio = '';
        this.val = 1;
        this.itemContacto = []; /*= [
          {nombre: 'Uno', key: 0}
          ];*/
        this.rutaProd = 'http://proquifa.com.mx:51725/SAP/InspeccionOC/ImagenesRechazo/';
        this.rutaLocal = 'http://localhost:8080/SAP/InspeccionOC/ImagenesRechazo/';
        this.lista = [];
        this.listaUniveso = [];
    }
    GestionProductoReclamoComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object();
        obj.nombre = 'Seleccionar';
        this.selected = obj;
        this.obtenerLista();
    };
    GestionProductoReclamoComponent.prototype.ngOnChanges = function () {
        if (this.datosProveedor !== null && this.val === 1) {
            this.recibirContactos();
            this.val++;
        }
    };
    GestionProductoReclamoComponent.prototype.obtenerLista = function () {
        var _this = this;
        this.lista = [];
        this.listaUniveso = [];
        this.totalProductos = 0;
        this._serviveReclamo.piezasReclamoPorProveedor(this.datosProveedor.idProveedor).subscribe(function (data) {
            if (data.current && data.current !== undefined && data.current.length > 0) {
                var listaAux = data.current;
                for (var i = 0; i < listaAux.length; i++) {
                    _this.lista.push(listaAux[i]);
                    _this.listaUniveso.push(listaAux[i]);
                    _this.totalProductos++;
                }
                _this.seleccionarItem(0, _this.lista[0]);
            }
            else {
                _this.regreVista.emit(true);
            }
        }, function (error) {
            console.log(error);
        });
    };
    /*****/
    GestionProductoReclamoComponent.prototype.abreCombo = function () {
        if (document.getElementById('section').className == 'visible') {
            document.getElementById('section').className = "";
        }
        else {
            document.getElementById('section').className = 'visible';
        }
    };
    GestionProductoReclamoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.lista = this.listaUniveso.slice();
        }
        else {
            this.listaUniveso.forEach(function (folio) {
                if (folio.oc.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        if (this.lista.length > 0) {
            if (this.tipoOrden === 'Más Recientes') {
                this.ordenamientoFechaTramNue();
            }
            else if (this.tipoOrden === 'Más Antiguos') {
                this.ordenamientoFechaTramAnt();
            }
        }
    };
    GestionProductoReclamoComponent.prototype.recibirContactos = function () {
        var _this = this;
        this._serviceContac.contactoProveedor(this.datosProveedor.idProveedor).subscribe(function (data) {
            var listaContacto = data.current;
            for (var i = 0; i < listaContacto.length; i++) {
                _this.itemContacto.push({ nombre: listaContacto[i].nombre, key: i, departament: listaContacto[i].departamento,
                    puesto: listaContacto[i].puesto, email: listaContacto[i].email, titulo: listaContacto[i].titulo, tel: listaContacto[i].telefono });
            }
            _this.activarCombo = true;
        }, function (error) {
            console.log('Error -->', error);
        });
    };
    GestionProductoReclamoComponent.prototype.ordenamientoFechaTramNue = function () {
        this.tipoOrden = 'Más Recientes';
        this.lista.sort(function (a, b) {
            if (a.fecha < b.fecha) {
                return 1;
            }
            if (a.fecha > b.fecha) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    GestionProductoReclamoComponent.prototype.ordenamientoFechaTramAnt = function () {
        this.tipoOrden = 'Más Antiguos';
        this.lista.sort(function (a, b) {
            if (a.fecha > b.fecha) {
                return 1;
            }
            if (a.fecha < b.fecha) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    GestionProductoReclamoComponent.prototype.recibirItem = function (itemContacto) {
        if (itemContacto.nombre === 'Seleccionar' && this.validar === 2) {
            this.selected = this.contacto;
        }
        if (itemContacto.nombre !== 'Seleccionar' && itemContacto.nombre !== undefined) {
            this.validar++;
            this.contacto = itemContacto.nombre;
            this.itemContactoS = itemContacto;
        }
        this.validarBtn();
    };
    GestionProductoReclamoComponent.prototype.seleccionarItem = function (i, item) {
        this.imgFrentr = '';
        this.imgArriba = '';
        this.imgAbajo = '';
        this.instruccion = '';
        this.reclamarSelect = false;
        this.entregarSelect = false;
        this.activarOc = true;
        this.folio = item.identificador;
        this.itemOc = item;
        this.indiceOc = i + 1;
        if (item.imagenRechazo !== null && item.imagenRechazo !== '') {
            var imagenes = this.itemOc.imagenRechazo.split('|');
            this.imgFrentr = imagenes[0];
            this.imgArriba = imagenes[1];
            this.imgAbajo = imagenes[2];
        }
        this.visualizarImg('frente');
        this.validarBtn();
    };
    GestionProductoReclamoComponent.prototype.visualizarImg = function (tipo) {
        var _this = this;
        var img;
        this.fotoAb = false;
        this.fotoAr = false;
        this.fotoF = false;
        if (tipo === 'abajo') {
            img = this.imgAbajo;
            this.fotoAb = true;
        }
        else if (tipo === 'frente') {
            img = this.imgFrentr;
            this.fotoF = true;
        }
        else if (tipo === 'arriba') {
            this.fotoAr = true;
            img = this.imgArriba;
        }
        this.comunService.obtenerRuta(img, 'Imagen', '').then(function (data) {
            _this.pathImg = data;
        });
    };
    GestionProductoReclamoComponent.prototype.activarSelect = function (tipo) {
        if (tipo === 'tel') {
            if (!this.entregarSelect) {
                this.accion = 'Telefono';
                this.entregarSelect = true;
                if (this.reclamarSelect) {
                    this.reclamarSelect = false;
                }
            }
        }
        else if (tipo === 'mail') {
            if (!this.reclamarSelect) {
                this.accion = 'Mail/Fax';
                this.reclamarSelect = true;
                if (this.entregarSelect) {
                    this.entregarSelect = false;
                }
            }
        }
        this.validarBtn();
    };
    GestionProductoReclamoComponent.prototype.recibirInstruccion = function (valor) {
        this.instruccion = valor;
        this.validarBtn();
    };
    GestionProductoReclamoComponent.prototype.validarBtn = function () {
        if (this.instruccion !== undefined && this.instruccion !== null && this.instruccion !== ''
            && ((this.entregarSelect !== false) || (this.reclamarSelect !== false)) && this.contacto !== null &&
            this.contacto !== null && this.contacto !== 'Seleccionar') {
            this.activarBtn = true;
        }
        else {
            this.activarBtn = false;
        }
    };
    GestionProductoReclamoComponent.prototype.finalizar = function () {
        if (this.accion === 'Mail/Fax') {
            this.activarPop = true;
        }
        else if (this.accion === 'Telefono') {
            var datosFinalizar = {
                idPieza: this.itemOc.identificador,
                MEnvio: this.accion,
                Notas: this.instruccion,
                Contacto: this.contacto,
                idPCompra: this.itemOc.idPCompra,
                idProveedor: this.datosProveedor.idProveedor
            };
            this.cerrarFinalizar(datosFinalizar);
        }
    };
    GestionProductoReclamoComponent.prototype.cerrarFinalizar = function (datosFinalizar) {
        var _this = this;
        this.coreContainer.openModal(0);
        this._serviveReclamo.finalizarCuarentena(datosFinalizar).subscribe(function (data) {
            console.log(data);
            if (data.current === true) {
                _this.obtenerLista();
            }
            _this.coreContainer.closeModal(0);
        }, function (error) {
            console.log('Error =>', error);
            _this.coreContainer.closeModal(0);
        });
    };
    GestionProductoReclamoComponent.prototype.finalizarEnvio = function (datosCorreo) {
        this.activarPop = false;
        var datosFinalizar = {
            idPieza: this.itemOc.identificador,
            MEnvio: this.accion,
            Notas: this.instruccion,
            Contacto: this.contacto,
            idPCompra: this.itemOc.idPCompra,
            idProveedor: this.datosProveedor.idProveedor,
            datosCorreo: datosCorreo
        };
        this.cerrarFinalizar(datosFinalizar);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GestionProductoReclamoComponent.prototype, "datosProveedor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], GestionProductoReclamoComponent.prototype, "regreVista", void 0);
    GestionProductoReclamoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-gestion-producto-reclamo',
            template: __webpack_require__("./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.html"),
            styles: [__webpack_require__("./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */], __WEBPACK_IMPORTED_MODULE_2__services_gestor_producto_reclamo_producto_reclamo_service__["a" /* ProductoReclamoService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */]])
    ], GestionProductoReclamoComponent);
    return GestionProductoReclamoComponent;
}());



/***/ }),

/***/ "./src/app/components/producto-reclamo/producto-reclamo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoReclamoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_reclamo_component__ = __webpack_require__("./src/app/components/producto-reclamo/producto-reclamo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductoReclamoRoutingModule = /** @class */ (function () {
    function ProductoReclamoRoutingModule() {
    }
    ProductoReclamoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__producto_reclamo_component__["a" /* ProductoReclamoComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ProductoReclamoRoutingModule);
    return ProductoReclamoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/producto-reclamo/producto-reclamo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"  style=\"width: 100%;\" *ngIf=\"activeMenuReclamo\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"area\">\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div>\r\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaP\" (click)=\"regresarVistaP()\">\r\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\r\n        </div>\r\n        <label class=\"etiqueta\">PRODUCTO A RECLAMO</label>\r\n      </div>\r\n      <div *ngIf=\"!vistaP\">\r\n        <label class=\"title\">{{cliente}}</label>\r\n      </div>\r\n    </div>\r\n    <!--Termina la cabezera-->\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\r\n      <div class=\"content\" *ngIf=\"vistaP\">\r\n        <div class=\"primeraSec\">\r\n          <div class=\"titulosLista\">\r\n            <div  class=\"tituloCliente\">\r\n              <label class=\"tituloLista\">PROVEEDORES</label>\r\n            </div>\r\n            <div class=\"organizarLista\">\r\n              <div style=\"height: 100%;    display: flex;align-items: center;\">\r\n                <div class=\"menu\" (click)=\"abreCombo()\">\r\n                  <div>\r\n                  </div>\r\n                  <div>\r\n                  </div>\r\n                  <div>\r\n                  </div>\r\n                  <section id=\"section\">\r\n                    <ul class=\"listaHamburguesa\">\r\n                      <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\r\n                      <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\r\n                    </ul>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div style=\"height: 100%; display: flex;align-items: center;\">\r\n                <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\r\n              </div>\r\n              <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n                <div class=\"buscar\">\r\n                  <div>\r\n                    <div class=\"lupa\">\r\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                    </div>\r\n                    <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Proveedor\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--Lista total-->\r\n          <div class=\"listaSeccionUno\">\r\n            <div>\r\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\r\n                <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                  <div class=\"imagenFlecha\">\r\n                    <img src=\"./assets/Images/regresarAzul.svg\" class=\"flechaInicio\" (click)=\"seleccionarItem(i, item)\">\r\n                  </div>\r\n                  <div class=\"dfSelect\"></div>\r\n                  <div class=\"datosLst\">\r\n                    <div class=\"numeroIndex\">\r\n                      <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\r\n                    </div>\r\n                    <div class=\"informacionList\">\r\n                      <label style=\"color: #008894\">{{item.proveedor}} </label>\r\n                      <p>{{item.totalOC}} OC · {{item.totalProducto}} Productos</p>\r\n                      <h3 class=\"textoPiezas\">Fecha de Inspección: {{item.fechaFormato}} </h3>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"totales\">\r\n              <label>#{{lista.length}}</label>\r\n              <label>{{lista.length}} Proveedores</label>\r\n              <label>{{totalOc}} OC</label>\r\n              <label>{{totalProductos}} Productos</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"contenidoGrafica\">\r\n          <div class=\"grafica\">\r\n            <label style=\"padding-bottom: 10px\">PROVEEDORES</label>\r\n            <pn-donut-chart  [idGrafica]=\"'proveedores'\" [data]=\"dataProveedores\" [tipoGrafica]=\"tipoGraficaProveedores\" [height]=\"'auto'\" style=\"height: 90%;\" *ngIf=\"activarProveedores\"></pn-donut-chart>\r\n          </div>\r\n          <div class=\"grafica\">\r\n            <label>TIPOS DE PRODUCTOS</label>\r\n            <pn-grafica-barras  [data]=\"dataBarra\" [idGrafica]=\"'barra'\" style=\"width:50%;height: 90%;\" *ngIf=\"activarBarra\"></pn-grafica-barras>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <pn-gestion-producto-reclamo  *ngIf=\"!vistaP\" [datosProveedor]=\"datosProveedor\" (regreVista)=\"vistaInicial()\"></pn-gestion-producto-reclamo>\r\n    </div>\r\n    <div class=\"foo\">\r\n      <footer>\r\n        <div>\r\n          <div class=\"Prioridad1\">\r\n            <label class=\"p1\">OC: </label> Orden de Compra\r\n          </div>\r\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\r\n            <label class=\"p1\">FEE: </label> Fecha Estimada de Entrega\r\n          </div>\r\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\r\n            <label class=\"p1\">DRE: </label> Días Restantes de Entrega\r\n          </div>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/producto-reclamo/producto-reclamo.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{width:100%;height:100%;overflow:auto}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;padding-right:13px;border-bottom:2px solid #000;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cabezera>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cabezera>div>.title{font-family:Novecento;font-weight:bold;font-size:24px;color:#008894;text-align:right}.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento;margin-bottom:5px}.foo{width:100%;height:55px}.foo>footer{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-webkit-box-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;-webkit-box-sizing:border-box;box-sizing:border-box}.foo>footer>div{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px}.content{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.primeraSec{width:30%;background:#fff;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:20px;margin-right:20px;min-width:350px}.primeraSec>.listaSeccionUno{height:90%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.primeraSec>.listaSeccionUno>div{height:calc(100% - 30px);border-bottom:1px solid;width:100%;border-top:1px solid;overflow:scroll}.primeraSec>.listaSeccionUno>.totales{height:30px;width:100%;border-bottom:0;border-top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.contenidoGrafica{width:70%;background:#eceef0;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-ms-flexbox;display:flex}.grafica{height:50%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 20px 20px 20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.grafica>label{height:10%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}.tituloCliente{width:50%;height:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.titulosLista{height:10%;padding-top:15px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:15px;min-height:90px}.tituloLista{font-size:24px;font-family:Novecento;font-weight:bold}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:50%}.menu{position:relative}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:74px;overflow:auto;width:219px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:50px;width:100%;border-style:solid;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:90%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.subtitulo{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.imagenFlecha{position:absolute;right:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;height:100%;padding-right:5px}.flechaInicio{width:100%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.lista{border-bottom:solid 1px #eceef0;border-bottom:solid 1px #eceef0;width:100%;min-height:80px;font-size:20px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>div>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding-top:10px;padding-bottom:10px;padding-left:15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst label{color:#008895;padding-left:-2px;font-family:\"Roboto-Bold\";font-size:28px}.lista>.divActive .datosLst p{font-family:\"Roboto-Bold\";font-size:24px;color:#000;line-height:26px}.lista>.divActive .datosLst h3{font-family:\"Roboto-regular\";font-size:21px}.textoPiezas{font-family:\"Roboto-regular\";font-size:21px}.informacionList{font-family:Roboto;padding-top:4px}.informacionList label{color:#008894;font-weight:bold;font-size:24px;font-family:Roboto;line-height:1}.informacionList span{min-height:23px;max-height:46px;font-weight:bold;font-size:20px;color:#424242;font-family:Roboto}.informacionList h3{font-size:17px;font-family:Roboto;color:#424242;line-height:1.5;margin-top:4px;font-weight:400}.numeroIndex{font-size:26px;font-family:Roboto;font-weight:400;text-align:left;padding-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.Prioridad1,.Prioridad2,.Prioridad3{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.Prioridad1>label,.Prioridad2>label,.Prioridad3>label{font-weight:bold;padding:6px}@media all and (min-width: 1300px)and (max-width: 1500px){.numeroIndex{font-size:25px}}"

/***/ }),

/***/ "./src/app/components/producto-reclamo/producto-reclamo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoReclamoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gestor_producto_reclamo_producto_reclamo_service__ = __webpack_require__("./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductoReclamoComponent = /** @class */ (function () {
    function ProductoReclamoComponent(coreContainer, _serviceReclamo) {
        this.coreContainer = coreContainer;
        this._serviceReclamo = _serviceReclamo;
        this.classAsideMenu = 'asideNormalMenu';
        this.lista = [];
        this.listaUniverso = [];
        this.totalProductos = 0;
        this.totalOc = 0;
        this.listaGrafica = [];
        this.listaUniveso = [];
        this.listaBarra = [];
        this.filtroProveedores = [];
        this.colores = ['#D2B422', '#DE0209', '#F09600', '#4BA92B'];
    }
    ProductoReclamoComponent.prototype.ngOnInit = function () {
        this.vistaP = true;
        this.tipoOrden = 'Todos';
        this.usuario = __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.obtenerDatos();
        this.obtenerValoresMenu(this.usuario);
    };
    ProductoReclamoComponent.prototype.obtenerValoresMenu = function (idUsuario) {
        var _this = this;
        this.activeMenuReclamo = false;
        this.rolMaster = false;
        this.coreContainer.openModal(1);
        var roles = __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        this._serviceReclamo.obtenerTotales(idUsuario).subscribe(function (data) {
            for (var i = 0; i < roles.length; i++) {
                if (roles[i] === 'Comprador_Master') {
                    _this.rolMaster = true;
                }
            }
            console.log(data);
            if (_this.rolMaster) {
                _this.itemsMenu = [{ rol: 'GESTOR DE COMPRAS', active: true, menu: [
                            { nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', select: false, tipo: 'valor', valor: data.current.ArriboDocumentos },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: true },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false },
                                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }
                        ] },
                    { rol: 'GESTOR DE OPERACIONES', active: false, menu: [
                            { nombre: 'Consola de Prioridades', url: 'consolaPrioridades', tipo: 'flecha' },
                            { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                            { nombre: 'Material en Stock', url: 'stock', select: false },
                            { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }
                        ] }];
            }
            else {
                _this.itemsMenu = [
                    { rol: 'GESTOR DE COMPRAS', active: true, menu: [
                            { nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', select: false, tipo: 'valor', valor: data.current.ArriboDocumentos },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: true },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false },
                                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }
                        ] }
                ];
            }
            _this.activeMenuReclamo = true;
            _this.coreContainer.closeModal(1);
        }, function (error) {
            _this.coreContainer.closeModal(1);
        });
    };
    ProductoReclamoComponent.prototype.obtenerDatos = function () {
        var _this = this;
        this.activarProveedores = false;
        this.listaGrafica = [];
        this.activarBarra = false;
        this.totalOc = 0;
        this.totalProductos = 0;
        this.lista = [];
        this.listaUniveso = [];
        this._serviceReclamo.piezasRechazadas().subscribe(function (data) {
            _this.listaBarra = data.current.barra;
            if (data.current.grafica && data.current.grafica !== undefined) {
                _this.listaGrafica = data.current.grafica;
                _this.totalesGrafica = data.current.totales;
            }
            if (data.current.lista && data.current.lista !== undefined) {
                var listaAux = data.current.lista;
                var fechaAux = void 0;
                for (var i = 0; i < listaAux.length; i++) {
                    fechaAux = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaAux[i].fechaInspeccion);
                    _this.listaUniveso.push({ idProveedor: listaAux[i].idProveedor, proveedor: listaAux[i].proveedor, totalOC: listaAux[i].totalOC,
                        fecha: listaAux[i].fechaInspeccionFormato, fechaFormato: fechaAux, totalProducto: listaAux[i].totalProducto });
                    _this.lista.push({ idProveedor: listaAux[i].idProveedor, proveedor: listaAux[i].proveedor, totalOC: listaAux[i].totalOC,
                        fecha: listaAux[i].fechaInspeccionFormato, fechaFormato: fechaAux, totalProducto: listaAux[i].totalProducto });
                    _this.totalOc += listaAux[i].totalOC;
                    _this.totalProductos += listaAux[i].totalProducto;
                }
            }
            _this.llenarGraficaBarra();
            _this.limpiarDataG();
        }, function (error) {
            console.log(error);
        });
    };
    ProductoReclamoComponent.prototype.llenarGraficaBarra = function () {
        var etiqueta = [];
        var datos = [];
        this.listaBarra.forEach(function (folio) {
            etiqueta.push(folio.tipo);
            datos.push(folio.totalProducto);
        });
        this.dataBarra = {
            labels: etiqueta,
            barBackground: this.colores,
            values: datos
        };
        this.activarBarra = true;
    };
    ProductoReclamoComponent.prototype.limpiarDataG = function () {
        var _this = this;
        //////// Emìeza grafica productos //////
        var valoresP = [];
        var valoresProvee = [];
        for (var _i = 0, _a = this.listaGrafica; _i < _a.length; _i++) {
            var nombre = _a[_i];
            valoresProvee.push([0, 0, 0]);
            valoresP.push(0);
            this.filtroProveedores.push(nombre.proveedor);
        }
        if (valoresP.length > 0) {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: this.filtroProveedores,
                valores: valoresP,
                labelsExtras: ['Proveedores', 'Productos', 'OC'],
                labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
                valuesExtras: [this.totalesGrafica.totalProveedores, this.totalesGrafica.totalProducto, this.totalesGrafica.totalOC],
                valuesExtrasHover: valoresProvee,
            };
            this.tipoGraficaProveedores = 'General';
            this.calcularDatosParaGraficas();
        }
        else {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Proveedores', 'Productos', 'OC'],
                labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0, 0]],
            };
            this.tipoGraficaProveedores = 'Gris';
            setTimeout(function () {
                _this.activarProveedores = true;
            }, 5);
        }
    };
    ProductoReclamoComponent.prototype.calcularDatosParaGraficas = function () {
        if (this.listaGrafica.length > 0) {
            for (var _i = 0, _a = this.listaGrafica; _i < _a.length; _i++) {
                var productos = _a[_i];
                this.llenarTotalesGraficas(this.dataProveedores, productos, 'PROVEEDORES');
            }
        }
    };
    ProductoReclamoComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida) {
        var _this = this;
        switch (graficaElegida) {
            case 'PROVEEDORES':
                var posicion1 = this.filtroProveedores.indexOf(elemento.proveedor);
                total.valuesExtrasHover[posicion1][0] += elemento.totalProveedores;
                total.valuesExtrasHover[posicion1][1] += +(elemento.totalProducto);
                total.valuesExtrasHover[posicion1][2] += elemento.totalOC;
                total.valores[posicion1] += elemento.totalProducto;
                setTimeout(function () {
                    _this.activarProveedores = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    ProductoReclamoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (this.listaUniverso.length > 0) {
            if (search === '') {
                this.lista = this.listaUniverso.slice();
            }
            else {
                this.listaUniverso.forEach(function (folio) {
                    if (folio.proveedor.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                        searchArrayAux.push(folio);
                    }
                });
                this.lista = searchArrayAux;
            }
            if (this.lista.length > 0) {
                if (this.tipoOrden === 'Más Recientes') {
                    this.ordenamientoFechaTramNue();
                }
                else if (this.tipoOrden === 'Más Antiguos') {
                    this.ordenamientoFechaTramAnt();
                }
            }
        }
    };
    /*****/
    ProductoReclamoComponent.prototype.abreCombo = function () {
        if (document.getElementById('section').className === 'visible') {
            document.getElementById('section').className = '';
        }
        else {
            document.getElementById('section').className = 'visible';
        }
    };
    ProductoReclamoComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    ProductoReclamoComponent.prototype.ordenamientoFechaTramNue = function () {
        this.tipoOrden = 'Más Recientes';
        this.lista.sort(function (a, b) {
            if (a.fecha < b.fecha) {
                return 1;
            }
            if (a.fecha > b.fecha) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    ProductoReclamoComponent.prototype.ordenamientoFechaTramAnt = function () {
        this.tipoOrden = 'Más Antiguos';
        this.lista.sort(function (a, b) {
            if (a.fecha > b.fecha) {
                return 1;
            }
            if (a.fecha < b.fecha) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    ProductoReclamoComponent.prototype.regresarVistaP = function () {
        this.vistaP = true;
    };
    ProductoReclamoComponent.prototype.seleccionarItem = function (i, item) {
        this.datosProveedor = item;
        this.vistaP = false;
    };
    ProductoReclamoComponent.prototype.vistaInicial = function () {
        this.vistaP = true;
        this.tipoOrden = 'Todos';
        this.obtenerValoresMenu(this.usuario);
        this.obtenerDatos();
    };
    ProductoReclamoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-producto-reclamo',
            template: __webpack_require__("./src/app/components/producto-reclamo/producto-reclamo.component.html"),
            styles: [__webpack_require__("./src/app/components/producto-reclamo/producto-reclamo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_2__services_gestor_producto_reclamo_producto_reclamo_service__["a" /* ProductoReclamoService */]])
    ], ProductoReclamoComponent);
    return ProductoReclamoComponent;
}());



/***/ }),

/***/ "./src/app/components/producto-reclamo/producto-reclamo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoReclamoModule", function() { return ProductoReclamoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__producto_reclamo_routing_module__ = __webpack_require__("./src/app/components/producto-reclamo/producto-reclamo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_reclamo_component__ = __webpack_require__("./src/app/components/producto-reclamo/producto-reclamo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_grafica_barras_grafica_barras_module__ = __webpack_require__("./src/app/components/shared/grafica-barras/grafica-barras.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gestion_producto_reclamo_gestion_producto_reclamo_component__ = __webpack_require__("./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__envio_correo_envio_correo_component__ = __webpack_require__("./src/app/components/producto-reclamo/envio-correo/envio-correo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProductoReclamoModule = /** @class */ (function () {
    function ProductoReclamoModule() {
    }
    ProductoReclamoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__producto_reclamo_routing_module__["a" /* ProductoReclamoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_grafica_barras_grafica_barras_module__["a" /* GraficaBarrasModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__producto_reclamo_component__["a" /* ProductoReclamoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gestion_producto_reclamo_gestion_producto_reclamo_component__["a" /* GestionProductoReclamoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__envio_correo_envio_correo_component__["a" /* EnvioCorreoComponent */]
            ]
        })
    ], ProductoReclamoModule);
    return ProductoReclamoModule;
}());



/***/ })

});
//# sourceMappingURL=producto-reclamo.module.chunk.js.map