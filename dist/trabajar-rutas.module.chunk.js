webpackJsonp(["trabajar-rutas.module"],{

/***/ "./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buscar\">\r\n    <div>\r\n        <div class=\"lupa\">\r\n            <img src=\"assets/Images/catalogo/lupa.png\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n        </div>\r\n        <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Cliente\" required ng-pattern-restrict=\"^[A-Za-z0-9]*$\">\r\n\r\n        <!-- <input ng-model=\"search\" class=\"buscar-input\" placeholder=\"{{placeholder}}\" /> -->\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.scss":
/***/ (function(module, exports) {

module.exports = ".input-cont{padding-top:20px;width:100%;position:relative}.input-cont .lupa{position:absolute;width:20px;height:20px;top:5px;left:5px;padding-top:20px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:50px;margin-top:10px;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:403.1px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:30px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:0px solid #000;width:380px;padding-left:5px}"

/***/ }),

/***/ "./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscadorOvaladoComponent; });
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

var BuscadorOvaladoComponent = /** @class */ (function () {
    function BuscadorOvaladoComponent() {
        this.clientesConsulta = [];
        this.regresaConsulta = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        ///variable para termino
        this.searchTerm = "";
        this.ClientesSearched = [];
        //Metodo para buscar termino
        //  this.ClientesSearched= [...this.clientesConsulta];
    }
    BuscadorOvaladoComponent.prototype.ngOnInit = function () {
        console.log(this.clientesConsulta);
    };
    BuscadorOvaladoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            // this.ClientesSearched= this.clientesConsulta;
            this.ClientesSearched = this.clientesConsulta.slice();
        }
        else {
            this.clientesConsulta.forEach(function (cliente) {
                if (cliente.nombreCliente
                    .toLowerCase()
                    .indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(cliente);
                }
            });
            this.ClientesSearched = searchArrayAux;
            this.regresaConsulta.emit(searchArrayAux);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BuscadorOvaladoComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], BuscadorOvaladoComponent.prototype, "clientesConsulta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BuscadorOvaladoComponent.prototype, "regresaConsulta", void 0);
    BuscadorOvaladoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-buscador-ovalado",
            template: __webpack_require__("./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.scss")]
        })
    ], BuscadorOvaladoComponent);
    return BuscadorOvaladoComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area\">\r\n  <div class=\"area\" style=\"height: 100%\">\r\n    <div id=\"bordeDatosC\" class=\"datosC\">\r\n      <div style=\"display: flex\">\r\n        <div style=\"cursor: pointer; height: 35px; width: 20px;display: flex\">\r\n          <img class=\"img\" src='./assets/Images/regresar.svg' style=\"width: 100%; height: 100%;padding-right: 10px\"\r\n               (click)=\"regresarVistaCli()\"/> <!--Feccha para regresar a los clientes-->\r\n        </div>\r\n        <label style=\"  display: flex;\" class=\"encabezadoCliente\">{{Cliente}}</label>\r\n      </div>\r\n      <div class=\"contenedorFormulario\">\r\n        <div class=\"tabla-clientes\" style=\"width: 15%\">\r\n          <label class=\"encabezadoLista\">PACKING LIST</label>\r\n          <div id=\"estilo_borde_verde_lista\" class=\"lista\">\r\n            <div [ngClass]=\"lstResultadoCotizaciones[i]\"\r\n                 *ngFor=\"let packing_list of encabezadosPasckinList; let i = index \"\r\n                 class=\"listaItem\" (click)=\"itemSelect(i)\">\r\n              <div class=\"ltSelect\"></div>\r\n              <div id=\"listaContent\" style=\"display: flex; flex-direction: column; justify-content: space-between; \">\r\n                <label style=\" padding-bottom: 12px;\" class=\"numPacking_list \"> #{{i+1}}· <span\r\n                  style=\" padding-bottom: 15px;\"\r\n                  class=\"nombrePacking_list \"> {{packing_list.folio}} </span></label>\r\n                <label style=\" padding-bottom: 12px;\" class=\"piezasPacking_llist \">{{packing_list.piezas}}&nbsp;{{'Piezas'}}</label>\r\n                <div style=\"display: flex; flex-direction: row \">\r\n                  <label class=\"p1\"> P1 · {{packing_list.p1}} </label>\r\n                  <label class=\"p2\"> P2 · {{packing_list.p2}} </label>\r\n                  <label class=\"p3\"> P3 · {{packing_list.p3}} </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- total -->\r\n        </div>\r\n        <div class=\"segundaSeccion\">\r\n          <div class=\"escanearCodigos\" style=\"width: 15%\">\r\n            <div class=\"tituloColectar\">\r\n            <span class=\"tituloColectarElementos\"\r\n                  style=\"padding-bottom: 10px; align-content: center;font-family: Helvetica-Bold; font-weight: bold; color: #008895; width: 100%;\">\r\n              COLECTAR ELEMENTO\r\n            </span>\r\n              <span class=\"estiloNombreSeleccioncliente\"> {{datoPL}}</span>\r\n            </div>\r\n            <div class=\"elementosItems\">\r\n            <textarea type=\"text \" name=\"firstname \" autofocus=\"focus \" (keydown.enter)=\"enterAux()\"\r\n                      #textarea class=\"textArea\" [(ngModel)]=\"codigosBarraElemento\"\r\n                      style=\"width: 95%; position: absolute\"></textarea>\r\n              <div class=\"seccionUno\" [attr.id]=\"'div0'\" *ngIf=\"colectarElemtosAux.length>0\">\r\n                <div class=\"contenedorTarjeta\">\r\n                  <div class=\"imagenTarjeta\">\r\n                    <label class=\"estiloTipoElemento\">DOCUMENTACIÓN</label>\r\n                    <img class=\"img\" src=\"./assets/Images/bolsa_doc.svg\" style=\" width: 68px; height: 74px;\"/>\r\n                    <div class=\"divColectarElementos\"\r\n                         style=\"border:1px solid #D8D8D8; display: flex; flex-direction: column; \">\r\n                      <label class=\"labelcolectarElementos\">{{datoPL}}</label>\r\n                      <label class=\"labelcolectarElementos\">Sobre</label>\r\n                      <label class=\"labelcolectarElementos\"></label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"escanear\" style=\"flex-direction: row; display: flex; position: relative; \">\r\n                    <div class=\"imgEscanear\">\r\n                      <img src='./assets/Images/Images/codigo_gris.svg' *ngIf=\"!codigosValidos[indexPacking][0]\"/>\r\n                      <img src='./assets/Images/Images/codigobarras_verde.svg' *ngIf=\"codigosValidos[indexPacking][0]\"/>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"seccionUno\" class=\"seccionUno\" *ngFor=\"let elemento of colectarElemtosAux; let i = index \"\r\n                   [attr.id]=\"'div'+i\">\r\n                <!-- div  -->\r\n                <div class=\"contenedorTarjeta\">\r\n                  <div class=\"imagenTarjeta\">\r\n                    <label class=\"estiloTipoElemento \"> {{elemento.tipo}} </label>\r\n                    <img class=\"img\" [src]=\"imgTipoValidacionArr[i]\" style=\" width: 68px; height: 74px; \"/>\r\n                    <div class=\"divColectarElementos\">\r\n                      <label class=\"labelcolectarElementos \">{{elemento.folio}}</label>\r\n                      <label class=\"labelcolectarElementos \">{{tipoDeProducto[i]}}</label>\r\n                      <label class=\"labelcolectarElementos \"> {{elemento.cant}}&nbsp;{{'Piezas'}}</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"escanear \" style=\"flex-direction: row; display:flex; position: relative; \">\r\n                    <!--<textarea [attr.id]=\"'textId'+i\" type=\"text \" name=\"firstname \" autofocus=\"focus \"\r\n                              (keydown.enter)=\"enter(i) \"\r\n                              #textarea [(ngModel)]=\"codigosBarra[indexPacking][i]\" class=\"textArea\"></textarea>-->\r\n                    <div class=\"imgEscanear\">\r\n                      <img src='./assets/Images/Images/codigo_gris.svg' *ngIf=\"!codigosValidos[indexPacking][i + 1]\"/>\r\n                      <img src='./assets/Images/Images/codigobarras_verde.svg'\r\n                           *ngIf=\"codigosValidos[indexPacking][i + 1]\"/>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- div  -->\r\n          <div class=\"formularioRutas\" style=\"width: 85%\">\r\n            <div class=\"\">\r\n              <label class=\"seleccionLista \"> EJECUTAR RUTA </label>\r\n              <div class=\"infoFormulario\">\r\n                <label class=\" subtitulos \"\r\n                       style=\" border-bottom: 1px solid #008895;padding-bottom: 20px; display: flex; \">\r\n                  Informacion de la persona que recoge</label>\r\n                <div *ngIf=\"datosFormulario.length > 0\">\r\n                  <div>\r\n                    <label class=\"estiloLabel \">Contacto:</label>\r\n                    <input class=\"estiloInput \" name=\"contacto \" value=\" \" type=\"text \" required\r\n                           #contacto (input)=\"validarFormulario() \" id=\"contacto \"\r\n                           [(ngModel)]=\"datosFormulario[indexPacking].contacto\" autofocus/>\r\n                  </div>\r\n                  <div>\r\n                    <label class=\"estiloLabel \">Tel:</label>\r\n                    <input class=\"estiloInput \" name=\"telefono \" type=\"number \" required\r\n                           #telefono (input)=\"validarFormulario() \"\r\n                           id=\"telefono \" [(ngModel)]=\"datosFormulario[indexPacking].telefono\" autofocus/>\r\n                  </div>\r\n                  <div>\r\n                    <label class=\"estiloLabel \">Puesto:</label>\r\n                    <input class=\"estiloInput \" name=\"puesto \" type=\"text \" required #puesto\r\n                           (input)=\"validarFormulario() \"\r\n                           id=\"puesto \" [(ngModel)]=\"datosFormulario[indexPacking].puesto\" autofocus/>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"estiloLabel\">Email</label>\r\n                    <input type=\"email \" class=\"estiloInput\"\r\n                           id=\"email\" [(ngModel)]=\"datosFormulario[indexPacking].email\" name=\"email \"\r\n                           (input)=\"validarFormulario() \">\r\n                  </div>\r\n                  <label class=\"estiloLabel \" class=\"subtitulos\">Comentarios de entrega</label>\r\n                  <div class=\"comentarios\">\r\n                <textarea class=\"estiloComentario \" name=\"comentarios \"\r\n                          pattern=\".{0,200} \" type=\"text \" value=\"notas_comentarios \" *ngIf=\"!labelComentarios\"\r\n                          readonly> {{colectarElemtosAux[0].comentario}} </textarea>\r\n                    <div class=\"contenedorComentario \" *ngIf=\"labelComentarios\">\r\n                      <label>SIN COMENTARIOS</label>\r\n                    </div>\r\n                  </div>\r\n                  <label class=\"estiloLabel \" class=\"subtitulos\">Documento que ampara:</label>\r\n                  <div class=\"acuseRecibo\" *ngIf=\"refrescar\">\r\n                    <label>Acuse de Recibo:</label>\r\n                    <pq-file-upload [disabled]=\"true\" [docR]=\"cargarDocumento\" style=\"min-width: 260px;max-width: 260px;\"\r\n                                    (enviarDocumento)=\"recibeDocumentacion($event)\"\r\n                                    [activarOjito]=\"true\"></pq-file-upload>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"totalFinalizar\">\r\n        <label class=\"totalPacking_llist\">{{'Total :'}}\r\n          {{encabezadosPasckinList.length}} {{'Packing list'}}</label>\r\n        <div class=\"botonFinalizar\" (click)=\"onSubmitFinalizar()\"\r\n             [style.pointerEvents]=\"btnsFinalizar[indexPacking]? 'auto': 'none' \"\r\n             [style.background]=\"btnsFinalizar[indexPacking]? '#008895': '#C2C3C9' \">\r\n          FINALIZAR\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"popError\">\r\n  <pq-alerta [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlert($event)\"></pq-alerta>\r\n</div>\r\n<div *ngIf=\"activarAlertExit\">\r\n  <pn-operacion-exitosa (desactivarPop)=\"cerrarPopExit($event)\" [imagen]=\"true\"\r\n                        [label]=\"'Operación Exitosa'\"></pn-operacion-exitosa>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.scss":
/***/ (function(module, exports) {

module.exports = ".content-area{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px;height:100%;width:100%}.datosC{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding-top:20px;height:calc(100vh - 337px)}.encabezadoCliente{font-family:\"Novecento\";font-weight:bold;font-size:28px;color:#424242;text-align:left;size:150px;height:50px}.encabezadoLista{font-family:Helvetica;font-size:25px;color:#008895;line-height:22px;font-weight:bold;padding-bottom:20px;height:42px}.piezasPacking_llist{font-family:Helvetica;font-size:14px;color:#666;width:193px;height:19px}.numPacking_list{font-family:Helvetica;font-size:20px;color:#000;line-height:22px;font-weight:bold}.totalPacking_llist{font-size:12px;color:#404040;text-align:center;font-family:\"Roboto\";width:167px;height:16px}.p1,.p2,.p3{margin-right:10px}.p1{color:#af3634;font-weight:bold}.p2{color:#eeb253;font-weight:bold}.p3{color:#63b236;font-weight:bold}.img{cursor:pointer}.nombrePacking_list{font-family:Helvetica-Bold;font-size:20px;color:#008895;line-height:22px}.seleccionLista{font-family:Helvetica;font-weight:bold;font-size:25px;color:#008895;width:100%}.estiloNombreSeleccioncliente{font-family:Novecento;font-size:25px;color:#008895;text-align:left;line-height:30px}.estiloInput{width:1055px;height:30px;float:right;font-family:Roboto;font-size:15px;color:#4a4a4a;border:1px solid #d8d8d8;z-index:3;position:relative}.subtitulos{font-family:Roboto;font-size:18px;color:#4a4a4a;font-weight:bold;padding-top:20px}.divColectarElemntos{font-family:Roboto-Medium;font-size:14px;color:#008895;text-align:center;padding-bottom:20px;padding-top:20px;margin-top:20px}#error{margin-top:20%}#error>ul>li{background:gray;padding:.5rem;color:#fff;font-weight:0;font-size:.8em;text-align:center;-webkit-animation:up 1s ease-in-out 1 backwards;animation:up 1s ease-in-out 1 backwards}.listaItem{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;width:249px;border-bottom:solid 1px #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box}.lista{overflow:scroll;border-bottom:solid 1px #eceef0}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{height:101px;background-color:#eceef0}.lista>.divActive .ltSelect{background:#008895 !important;width:10px !important}#listaContent{padding-top:15px;padding-bottom:15.8px;padding-left:10px}.listaSeleccionada{border-bottom:solid 1px #eceef0;height:100%;width:100%;min-height:80px;font-size:20px;padding:19px 23px 18px 17px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:6px solid #008895;background-color:#eceef0}.listaSeleccionada>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px;color:#008895}.listaSeleccionada>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;color:#008895}.listaSeleccionada>.datosLst>p{font-weight:normal;color:#424242}.escanearCodigos{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 20px;min-width:472px;max-width:472px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.elementosItems{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:calc(100vh - 581px)}.formularioRutas{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 0px;min-width:450px;width:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.formularioRutas>div{padding:0px 20px;border-left:1px solid #d8d8d8}.infoFormulario{padding-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.infoFormulario>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.infoFormulario>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:28px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:34px}.infoFormulario>div>div>label{min-width:75px}.infoFormulario>div>label{margin-top:80px;padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #008895}.comentarios{margin:0px !important;min-height:120px !important}#divBoton{width:100%;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.botonFinalizar{width:170px;height:30px;background:#c2c3c9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.area{display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #d8d8d8;width:100%;min-width:220px;border-top:1px solid #d8d8d8;display:flex;border-bottom:none}.vistaColectarElementos{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%;font-family:\"Roboto\",sans-serif}.vistaColectar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.pAmbiente{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:14%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flecha1{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:12%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.pRefrigeracion{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:14%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flecha2{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:12%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.pCongelacion{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:14%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dato{font-size:40px;color:#404040;text-align:center;margin-top:10%}.tipo{font-size:35px;color:#338a9c;text-align:center;margin-top:10%;font-weight:bold}.botonIngresar{width:190px;height:30px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.estiloTipoElemento{font-family:Novecento;font-size:16px;color:#008895;text-align:center;font-weight:bold;padding-top:10px;padding-bottom:15px}.divColectarElementos{opacity:.94;background:#008895;width:181px;height:63px;padding:5px 0px;border:1px solid #d8d8d8;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.divColectarElementos .labelcolectarElementos{font-family:Roboto;font-size:14px;color:#fff;text-align:center;font-weight:medium}.footer{height:150%}.escanear{font-family:\"Roboto\";display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;height:30px;width:100%;margin-top:22px}.textArea{width:100%;z-index:1;opacity:0;bottom:0px;top:0px}.imgEscanear{position:absolute}.etiquetaSinComentarios{opacity:.18;font-family:Novecento;font-weight:Bold;font-size:36px;color:#4a4a4a;text-align:center}.contenedorFormulario{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:86.5%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:20px;border-top:1px solid #d8d8d8;height:calc(100vh - 480px)}.tabla-clientes{overflow-y:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:267px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;height:calc(100vh - 480px);overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:12px;border-bottom:1px solid #d8d8d8}.tituloColectar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:80px}.contenedorComentario{opacity:.18;font-family:Novecento;font-size:36px;color:#4a4a4a;text-align:center;font-weight:bold}.estiloComentario{font-family:Roboto;color:#4a4a4a;font-size:15px;border:none;width:100%;resize:none;height:120px}textarea:focus{outline:none !important;border:none;-webkit-box-shadow:none;box-shadow:none}.totalFinalizar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin-top:15px}.seccionUno{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:30px;padding-top:30px;height:260px}.contenedorTarjeta{height:100%}.imagenTarjeta{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border:1px solid #d8d8d8;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:181px;max-height:208px;min-height:208px;-webkit-box-sizing:border-box;box-sizing:border-box}.tituloColectarElementos{font-size:25px}.segundaSeccion{overflow-y:scroll;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #d8d8d8;display:-webkit-box;display:-ms-flexbox;display:flex;width:85%;position:relative;box-sizing:border-box;border-left:1px solid #d8d8d8}.acuseRecibo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-top:0px !important;margin-bottom:40px !important;-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.acuseRecibo>label{margin-right:15px !important}@media all and (min-height: 750px)and (max-height: 770px){.area{height:100%}.contenedorFormulario{height:calc(100vh - 442px)}.divColectarElementos{width:115px;height:35.5px}.divColectarElementos>.labelcolectarElementos{font-size:9px}.escanearCodigos{height:100%;min-width:290px}.estiloNombreSeleccioncliente{font-size:12px}.estiloComentario{font-size:11px}.encabezadoCliente{font-size:14px;height:32px}.estiloTipoElemento{font-size:10px;padding-bottom:0px}.tabla-clientes{height:100%}.estiloInput{height:25px;width:251px}.estiloLabel{font-size:11px}.imagenTarjeta{height:74px;width:115px;min-height:169px}.encabezadoLista{font-size:13px;padding-bottom:0px}.escanear{margin-top:0px}.formularioRutas{height:100%;min-width:346px}.infoFormulario>div>label{margin-top:26px}.infoFormulario>div>div{margin-top:7px}.tituloColectarElementos{font-size:13px}.seccionUno{padding-top:0px;width:115px;height:205px}.listaItem{height:90px;width:200px}#listaContent{padding-left:2px}.nombrePacking_list{font-size:12px}.numPacking_list{font-size:12px}.p1,.p2,.p3{font-size:11px}.seleccionLista{font-size:13px;font-family:Novecento;font-weight:bold}.subtitulos{padding-top:0px;font-size:12px}.tabla-clientes{min-width:210px}}"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClientesDetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_clientes_detalle_service__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrabajarRutasClientesDetalleComponent = /** @class */ (function () {
    function TrabajarRutasClientesDetalleComponent(_trabajarRutasClienteDetalleService) {
        this._trabajarRutasClienteDetalleService = _trabajarRutasClienteDetalleService;
        this.auxDataClientCurrent = [];
        this.valoresData = [];
        this.encabezadosPasckinList = [];
        this.elementosPackingList = [];
        this.tipoDeProducto = [];
        this.imgTipoValidacionArr = [];
        this.indexPacking = 0;
        this.active = true;
        this.RegresarVistaClie = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchClienthanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lstResultadoCotizaciones = [];
        this.llenarArregloContacto = [];
        this.packing_list = [];
        this.listaAuxiliar = [];
        this.contacto = "";
        this.telefono = "";
        this.puesto = "";
        this.email = "";
        this.labelComentarios = true;
        this.focus = true;
        this.vistaInicialActiva = true;
        this.contador = 0;
        this.cantidadPL = 0;
        this.texto = "";
        this.colectarElemtos = [];
        this.colectarElemtosAux = [];
        this.elementos = [];
        this.codigosBarra = [];
        this.codigosValidos = [];
        this.datosFormulario = [];
        this.btnsFinalizar = [];
        this.listaColectarElementosAuxiliar = [];
        this.refrescar = true;
    }
    TrabajarRutasClientesDetalleComponent.prototype.ngOnInit = function () {
        this.obtenerPackingListClient();
        console.log(this.elementosPackingList);
        console.log("Creo el objeto");
        this.llenarArregloContacto = [
            { idPendiente: "", contacto: "", tel: "", puesto: "", email: "" }
        ];
        this.textArea.nativeElement.focus();
        console.log(this.elementosPackingList);
    };
    TrabajarRutasClientesDetalleComponent.prototype.itemSelect = function (i) {
        this.recibeDocumentacion(null);
        this.colectarElemtosAux = this.colectarElemtos[i];
        this.datoPL = this.colectarElemtosAux[0].packingList;
        this.indexPacking = i;
        this.lstResultadoCotizaciones = [];
        this.listaAuxiliar = [];
        this.lstResultadoCotizaciones = new Array(this.packing_list.length).fill("");
        this.lstResultadoCotizaciones[i] = "divActive";
        console.log("________Valores Data....");
        console.log(this.valoresData[i]);
        console.log("________Valores Data....");
        console.log(this.colectarElemtos);
        console.log("________Valores Data");
        for (var _i = 0, _a = this.valoresData; _i < _a.length; _i++) {
            var iterator = _a[_i];
            this.colectarElemtos.push(iterator);
        }
        this.obtenerImagenes(i);
    };
    TrabajarRutasClientesDetalleComponent.prototype.obtenerImagenes = function (index) {
        var _this = this;
        this.imgTipoValidacionArr = [];
        this.colectarElemtos[index].forEach(function (element) {
            if (element.tipo === "Hielera Congelacion" || element.tipo === "CONGELACIÓN") {
                element.tipo = "CONGELACIÓN";
                console.log("tipo hielera congelacion");
                _this.tipoDeProducto.push("Hielera");
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
            }
            else if (element.tipo === "Bolsa de transito" || element.tipo === "TRANSITO") {
                element.tipo = "TRANSITO";
                console.log("Bolsa de transito");
                _this.tipoDeProducto.push("Bolsa");
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push("./assets/Images/bolsa_ambiente.svg");
            }
            if (element.tipo === "Hielera Refrigeracion" || element.tipo === "REFRIGERACIÓN") {
                element.tipo = "REFRIGERACIÓN";
                _this.tipoDeProducto.push("Hielera");
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
            }
            var comentario = element.comentario;
            if (comentario.length > 0) {
                _this.labelComentarios = false;
            }
            else {
                _this.labelComentarios = true;
            }
        });
    };
    TrabajarRutasClientesDetalleComponent.prototype.onSubmitFinalizar = function () {
        console.log("cod barra");
        console.log(this.codigosBarra.length);
        console.log(this.contacto);
        if (this.btnsFinalizar[this.indexPacking] == true) {
            console.log("llamada al servicio");
            this.finalizarEjecutarRutaAlmacen();
            // this.onRemove();
            console.log(this.llenarArregloContacto);
        }
        else {
            console.log("No se eliminara");
        }
    };
    TrabajarRutasClientesDetalleComponent.prototype.functionDelete = function () {
        var index = this.colectarElemtos.indexOf(this.indexPacking);
        console.log("index" + index);
        console.log("Se eliminara posicion " + this.indexPacking);
        var txt;
        if (confirm("Se eliminara posicion " + this.indexPacking)) {
            txt = "FINALIZAR";
            this.elementosPackingList.splice(this.indexPacking, 1);
            setTimeout(function () {
            }, 2000);
            this.itemSelect(0);
        }
        else {
            txt = "FINALIZAR";
        }
        document.getElementById("botonF").innerHTML = txt;
    };
    TrabajarRutasClientesDetalleComponent.prototype.onRemove = function () {
        this.encabezadosPasckinList.splice(this.indexPacking, 1);
        this.colectarElemtos.splice(this.indexPacking, 1);
        this.codigosValidos.splice(this.indexPacking, 1);
        this.codigosBarra.splice(this.indexPacking, 1);
        this.datosFormulario.splice(this.indexPacking, 1);
        this.btnsFinalizar.splice(this.indexPacking, 1);
        this.colectarElemtosAux = this.colectarElemtos[0];
        if (this.encabezadosPasckinList.length == 0) {
            console.log("Entro cambiar vista");
            this.event.emit(false);
        }
        this.event.emit(true);
        this.indexPacking = 0;
    };
    TrabajarRutasClientesDetalleComponent.prototype.validarFormulario = function () {
        var error = 0;
        if (this.datosFormulario[this.indexPacking].contacto == "") {
            error++;
        }
        if (this.datosFormulario[this.indexPacking].telefono == "") {
            error++;
        }
        if (this.datosFormulario[this.indexPacking].puesto == "") {
            error++;
        }
        if (this.datosFormulario[this.indexPacking].email == "") {
            error++;
        }
        if (this.archivo == undefined || this.archivo == null) {
            error++;
        }
        for (var _i = 0, _a = this.codigosValidos[this.indexPacking]; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item) {
                error++;
            }
        }
        if (error == 0) {
            this.btnsFinalizar[this.indexPacking] = true;
        }
        else {
            this.btnsFinalizar[this.indexPacking] = false;
        }
    };
    TrabajarRutasClientesDetalleComponent.prototype.ngAfterViewInit = function () {
        //this.elementRef.nativeElement.focus();
    };
    /***************************************************************/
    TrabajarRutasClientesDetalleComponent.prototype.enterAux = function () {
        var contador = 0;
        var aux = this.codigosBarraElemento.trim();
        this.codigosBarraElemento = aux;
        console.log(this.codigosBarraElemento);
        var validarDup = this.validarCodigoDuplicado(this.codigosBarraElemento);
        if (validarDup) {
            if (this.datoPL == this.codigosBarraElemento) {
                this.codigosValidos[this.indexPacking][0] = true;
                this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento;
            }
            else {
                for (var i = 0; i < this.colectarElemtosAux.length; i++) {
                    if (this.colectarElemtosAux[i].folio === this.codigosBarraElemento) {
                        this.codigosValidos[this.indexPacking][i + 1] = true;
                        this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento; // Agregar a la lista auxiliar
                    }
                    else {
                        contador++;
                    }
                }
            }
            if (contador === this.colectarElemtosAux.length) {
                this.mensaje = 'Folio incorrecto';
                this.popError = true;
            }
        }
        else {
            // alert('Elemento duplicado');
            this.mensaje = 'Folio duplicado';
            this.popError = true;
        }
        this.codigosBarraElemento = '';
        this.validarFormulario();
    };
    TrabajarRutasClientesDetalleComponent.prototype.validarCodigoDuplicado = function (elemento) {
        var i;
        if (this.listaColectarElementosAuxiliar.length === 0) {
            return true;
        }
        else {
            for (i = 0; i < this.listaColectarElementosAuxiliar.length; i++) {
                if (this.listaColectarElementosAuxiliar[i] === elemento) {
                    return false;
                }
            }
            return true;
        }
    };
    /***************************************************************/
    TrabajarRutasClientesDetalleComponent.prototype.enter = function (i) {
        if (this.colectarElemtosAux[i].folio == this.codigosBarra[this.indexPacking][i].split("\n").join("").trim()) {
            this.codigosValidos[this.indexPacking][i] = true;
        }
        else {
            this.codigosValidos[this.indexPacking][i] = false;
            this.codigosBarra[this.indexPacking][i] = "";
        }
        this.validarFormulario();
    };
    TrabajarRutasClientesDetalleComponent.prototype.obtenerPackingListClient = function () {
        var _this = this;
        this._trabajarRutasClienteDetalleService
            .obtenerPackingListClient(this.idCliente)
            .subscribe(function (data) {
            _this.auxDataClientCurrent = data.current;
            var array = Object.getOwnPropertyNames(_this.auxDataClientCurrent);
            _this.sumaDePackingList = array.length;
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var datos = array_1[_i];
                var objetoAux = {};
                objetoAux["folio"] = datos;
                objetoAux["piezas"] = 0;
                objetoAux["p1"] = 0;
                objetoAux["p2"] = 0;
                objetoAux["p3"] = 0;
                _this.colectarElemtos.push(_this.auxDataClientCurrent[datos]);
                _this.codigosValidos.push(new Array(_this.auxDataClientCurrent[datos].length).fill(false));
                _this.codigosValidos[_this.codigosValidos.length - 1].splice(0, 0, false);
                _this.codigosBarra.push(new Array(_this.auxDataClientCurrent[datos].length).fill(""));
                _this.datosFormulario.push({ contacto: "", telefono: "", puesto: "", email: "" });
                _this.btnsFinalizar.push(false);
                for (var _a = 0, _b = _this.auxDataClientCurrent[datos]; _a < _b.length; _a++) {
                    var datos2 = _b[_a];
                    objetoAux["piezas"] += datos2.cant;
                    objetoAux["p1"] += datos2.p1;
                    objetoAux["p2"] += datos2.p2;
                    objetoAux["p3"] += datos2.p3;
                }
                _this.encabezadosPasckinList.push(objetoAux);
            }
            _this.colectarElemtos[0].forEach(function (element) {
                var elemento = element.tipo.ignoreCase;
                if (element.tipo === "Hielera Congelacion") {
                    element.tipo = "CONGELACIÓN";
                    console.log("tipo hielera congelacion");
                    _this.tipoDeProducto.push("Hielera");
                    _this.contador = element.cant;
                    _this.cantidadPL += _this.contador;
                    _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
                }
                else if (element.tipo === "Bolsa de transito") {
                    element.tipo = "TRANSITO";
                    console.log("Bolsa de transito");
                    _this.tipoDeProducto.push("Bolsa");
                    _this.contador = element.cant;
                    _this.cantidadPL += _this.contador;
                    _this.imgTipoValidacionArr.push("./assets/Images/bolsa_ambiente.svg");
                }
                if (element.tipo === "Hielera Refrigeracion" || elemento === 'Refrigeración' || elemento === 'refrigeracion') {
                    element.tipo = "REFRIGERACIÓN";
                    _this.tipoDeProducto.push("Hielera");
                    _this.contador = element.cant;
                    _this.cantidadPL += _this.contador;
                    _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
                }
                var comentario = element.comentario;
                if (comentario.length > 0) {
                    _this.labelComentarios = false;
                }
                else {
                    _this.labelComentarios = true;
                }
            });
            _this.itemSelect(0);
            _this.valoresData.forEach(function (element) {
                _this.listaAuxiliar.push(element.folio);
            });
            console.log(_this.listaAuxiliar);
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasClientesDetalleComponent.prototype.finalizarEjecutarRutaAlmacen = function () {
        var _this = this;
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var id = parseInt(this.idUsuario);
        var info = {
            idUsuario: id,
            idPendiente: this.colectarElemtosAux[0].idPendiente,
            contacto: this.datosFormulario[this.indexPacking].contacto,
            tel: this.datosFormulario[this.indexPacking].telefono,
            puesto: this.datosFormulario[this.indexPacking].puesto,
            email: this.datosFormulario[this.indexPacking].email,
            packingList: this.colectarElemtosAux[0].packingList
        };
        this._trabajarRutasClienteDetalleService.finalizarEjecutarRutaAlmacen(info).subscribe(function (data) {
            console.log("REspuesta del seervicio");
            _this._trabajarRutasClienteDetalleService.uploadFile(_this.colectarElemtosAux[0].packingList, _this.archivo).subscribe(function (data) {
                _this.recibeDocumentacion(null);
            });
            console.log(data);
            if (data.current === true) {
                _this.activarAlertExit = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasClientesDetalleComponent.prototype.cerrarAlert = function (datos) {
        this.popError = false;
        this.textArea.nativeElement.focus();
    };
    TrabajarRutasClientesDetalleComponent.prototype.cerrarPopExit = function () {
        this.activarAlertExit = false;
        this.onRemove();
    };
    TrabajarRutasClientesDetalleComponent.prototype.regresarVistaCli = function () {
        console.log('Entro al clic');
        this.RegresarVistaClie.emit(true);
    };
    TrabajarRutasClientesDetalleComponent.prototype.recibeDocumentacion = function (archivo) {
        var _this = this;
        console.log(archivo);
        if (archivo != undefined && archivo != null) {
            this.archivo = archivo;
            this.validarFormulario();
        }
        else {
            this.refrescar = false;
            setTimeout(function () {
                _this.refrescar = true;
            }, 50);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("text"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TrabajarRutasClientesDetalleComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesDetalleComponent.prototype, "RegresarVistaClie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesDetalleComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesDetalleComponent.prototype, "searchClienthanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrabajarRutasClientesDetalleComponent.prototype, "Cliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrabajarRutasClientesDetalleComponent.prototype, "idCliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("textarea"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TrabajarRutasClientesDetalleComponent.prototype, "textArea", void 0);
    TrabajarRutasClientesDetalleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-trabajar-rutas-clientes-detalle",
            template: __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_clientes_detalle_service__["a" /* TrabajarRutasClienteDetalleService */]])
    ], TrabajarRutasClientesDetalleComponent);
    return TrabajarRutasClientesDetalleComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClientesDetalleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trabajar_rutas_clientes_detalle_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_pop_ups_operacion_exitosa_operacion_exitosa_module__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/pop-ups/operacion-exitosa/operacion-exitosa.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TrabajarRutasClientesDetalleModule = /** @class */ (function () {
    function TrabajarRutasClientesDetalleModule() {
    }
    TrabajarRutasClientesDetalleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_alerta_alerta_module__["a" /* AlertaModule */],
                __WEBPACK_IMPORTED_MODULE_7__componentes_pop_ups_operacion_exitosa_operacion_exitosa_module__["a" /* OperacionExitosaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__trabajar_rutas_clientes_detalle_component__["a" /* TrabajarRutasClientesDetalleComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__trabajar_rutas_clientes_detalle_component__["a" /* TrabajarRutasClientesDetalleComponent */],
            ]
        })
    ], TrabajarRutasClientesDetalleModule);
    return TrabajarRutasClientesDetalleModule;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cambiaCliente\">\r\n    <div class=\"content-area\">\r\n        <div class=\"area\" style=\" display: flex; border-bottom: 1px solid #D8D8D8;  min-width: 800px; border-top: 1px solid #D8D8D8;display: flex;position: relative\">\r\n            <!--Inicio Div Daos C-->\r\n            <div id=\"bordeDatosC\" class=\"datosC\" style=\"display: flex; flex-direction:row; height: 80%; justify-content: space-between; width: 100%; \">\r\n                <label class=\"encabezadoCliente\">CLIENTES</label>\r\n                <div style=\"padding-right: 10px; \" ng-model=\"searchText\" class=\"form-control\">\r\n                    <div class=\"buscar\">\r\n                        <div>\r\n                            <div class=\"lupa\">\r\n                                <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                            </div>\r\n                            <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"clientes\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--Fin datos C-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"catalogoClientes\">\r\n        <div class=\"container\">\r\n            <div id=\"datosArreglo\" class=\"tabla-clientes\" *ngIf=\"muestraArregloClientes\">\r\n                <div class=\"item\" *ngFor=\"let datos of auxDataCurrent let i= index\">\r\n                    <div style=\"display: flex;\">\r\n                        <img style=\"height:106px; width: 106px; \" src=\"./assets/Images/clientes/{{datos.idCliente}}.png\" onerror=\"this.src='./assets/Images/clientes/default.png';\">\r\n                    </div>\r\n                    <div id=\"datosCliente\">\r\n                        <label class=\"numCliente \">{{'#'}}{{i+1}} <span class= \"nombreClienteEstilo \" > {{datos.nombreCliente}} </span></label>\r\n                        <label class=\"datosCllienteEstilo \"> {{datos.cant}} {{'Piezas '}} · {{datos.numPL}}{{' Packing List'}}</label>\r\n                        <div style=\"display: flex; flex-direction: row;\">\r\n                            <label class=\"p1 \"> P1. {{datos.p1}} </label>\r\n                            <label class=\"p2 \"> P2  {{datos.p2}} </label>\r\n                            <label class=\"p3 \"> P3  {{datos.p3}} </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"imagenMas\" (click)=\"cambiarVistaPorCliente(datos.nombreCliente,datos.idCliente)\">\r\n                        <img type=image src=\"./assets/Images/Images/entrar.svg\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"datosArreglo2\" class=\"tabla-clientes\" style=\" padding-left: 55px; min-width: 900px; \" *ngIf=\"!muestraArregloClientes\">\r\n\r\n                <div class=\"item\" *ngFor=\"let datos of ClientesSearched; let i = index\" style=\" padding-top: 25px;\">\r\n                    <div style=\" display: flex; \">\r\n                        <img style=\"height:106px; width: 106px; \" src=\"./assets/Images/clientes/{{datos.idCliente}}.png\">\r\n                    </div>\r\n                    <div id=\"datosClienteSearch\" style=\" width: 64%; display: flex; flex-direction: column; padding-left: 20px; justify-content: space-between; \">\r\n                        <label class=\"numCliente \">{{'#'}}{{i+1}} <span class= \"nombreClienteEstilo \" > {{datos.nombreCliente}} </span></label>\r\n                        <label class=\"datosCllienteEstilo \"> {{datos.cant}} {{'Piezas '}} · {{datos.numPL}}{{' Packing List'}}</label>\r\n                        <div style=\"display: flex; flex-direction: row ;     padding-left: 10px;\">\r\n                            <label class=\"p1 \"> P1. {{datos.p1}} </label>\r\n                            <label class=\"p2 \"> P2  {{datos.p2}} </label>\r\n                            <label class=\"p3 \"> P3  {{datos.p3}} </label>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"width: 9%; display: flex; padding-bottom: 0px; \">\r\n                        <img style=\"padding-top: 70px; \" type=image src=\"./assets/Images/Images/entrar.svg \" (click)=\"cambiarVistaPorCliente(datos.nombreCliente,datos.idCliente)\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"detalle-rutas\" *ngIf=\"!cambiaCliente\">\r\n    <pn-trabajar-rutas-clientes-detalle style=\"width: 100%; height: 100%;  min-width: 2030px;\" [Cliente]=\"enviaNombreCliente\" [idCliente]=\"enviarIdCliente\" (event)=\"cerrarDetalle($event)\" (RegresarVistaClie)=\"regresarVistaClientes($event)\"></pn-trabajar-rutas-clientes-detalle>\r\n</div>\r\n\r\n<footer class=\"footer \" style=\"  border: none; border-top: solid;\">\r\n    <div class=\"datosFooter \" style=\"width: 100%;height: 100%; \">\r\n        <div class=\"Prioridad1 \">\r\n            <label class=\"p1 \">P1</label> Prioridad 1\r\n        </div>\r\n        <div class=\"Prioridad2 \">\r\n            <label class=\"p2 \">P2</label> Prioridad 2\r\n        </div>\r\n        <div class=\"Prioridad3 \">\r\n            <label class=\"p3 \">P3</label> Prioridad 3\r\n        </div>\r\n        <div class=\"Ambiente \">\r\n            <img class=\"img \" src='./assets/Images/ambiente.svg' /> Ambiente\r\n        </div>\r\n        <div class=\"Congelación \">\r\n            <img class=\"img \" src='./assets/Images/congelacion.svg' /> Congelación\r\n        </div>\r\n        <div class=\"Refrigeración \">\r\n            <img class=\"img \" src='./assets/Images/refrigeracion.svg' /> Refrigeración\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.scss":
/***/ (function(module, exports) {

module.exports = ".subPadre{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px}#divBoton{width:100%;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.botonIngresar{width:190px;height:50px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.tooltip .tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.tooltip:hover .tooltiptext{visibility:visible;opacity:0%}.tooltip{position:relative;display:inline-block;cursor:pointer}.tooltip .tooltiptext{visibility:hidden;width:148px;height:42px;background-color:#4c4c4c;text-align:left;padding:5px 10px 0px 0px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:2%;margin-left:-60px;font-size:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1;font-family:ArialMT;font-size:9px;color:#fff;text-align:center}.datosFooter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px;min-height:56px;max-height:56px}.Ambiente,.Congelación,.Prioridad1,.Prioridad2,.Prioridad3,.Refrigeración{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.img,.p1,.p2,.p3{margin-right:10px}.p1{color:#af3634;font-weight:bold}.p2{color:#eeb253;font-weight:bold}.p3{color:#63b236;font-weight:bold}.img{cursor:pointer}.placeholder{font-family:\"Helvetica\";font-size:30px;color:#aaa9af}.nombreClienteEstilo{font-family:Helvetica-Bold;font-size:18px;color:#008895;line-height:22px}.datosCllienteEstilo{font-family:Helvetica;font-size:16px;color:#666;width:193px;height:19px}.numCliente{font-family:Helvetica;font-size:18px;color:#000;line-height:22px;font-weight:bold}.container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;height:100%;-ms-flex-direction:row;flex-direction:row;position:relative}.catalogoClientes{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;width:100%;height:calc(100vh - 395px);min-width:800px}.item{width:420px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;height:140px;padding:10px 20px}.imagenMas{width:9%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;cursor:pointer}.tabla-clientes{-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:calc(100vh - 395px);padding:20px 10px;min-width:900px;-webkit-box-sizing:border-box;box-sizing:border-box}.encabezadoCliente{font-family:\"Novecento\";font-weight:bold;font-size:28px;color:#424242;text-align:left;padding-left:30px;width:187px;size:150px;height:50px;padding-top:20px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:50px;margin-top:10px;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:403.1px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:30px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:0px solid #000;width:380px;font-family:Helvetica;font-size:18px;color:#aaa9af;padding-left:5px}.content-area{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}#datosCliente{width:64%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:20px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:110px}"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_cliente_services__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-cliente.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrabajarRutasClientesComponent = /** @class */ (function () {
    function TrabajarRutasClientesComponent(_trabajarRutasClienteService, coreComponent) {
        this._trabajarRutasClienteService = _trabajarRutasClienteService;
        this.coreComponent = coreComponent;
        ///Cambiar la pantallla
        this.vistaInicialActiva = true;
        ///Variables para el buscador
        this.arregloClientes = [];
        ///buscador
        this.ClientesSearched = [];
        this.searchTermChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actualizarV = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitVistaPrincipal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clientesConsulta = [];
        ///
        this.auxDataCurrent = [];
        this.muestraArregloClientes = true;
        /////variables  para el html
        this.cambiaCliente = true;
        /////////Declaracion de vriables para el footer
        this.vistaInicialI = true; //=false;
        this.cliente = "Cliente";
    }
    TrabajarRutasClientesComponent.prototype.ngOnInit = function () {
        this.infoClientes();
        this.ocultaScroll = false;
    };
    /////Metodo para volve a la vista anterior
    TrabajarRutasClientesComponent.prototype.regresarVista = function () {
        this.vistaInicialActiva = true;
    };
    TrabajarRutasClientesComponent.prototype.recibeBusqueda = function (valor) {
        this.arregloClientes = valor;
        console.log("Valor de valor" + valor.length);
        if (valor.length == 0) {
            this.arregloClientes = valor;
            this.muestraArregloClientes;
        }
        else
            this.arregloClientes = valor;
        this.muestraArregloClientes = false;
    };
    TrabajarRutasClientesComponent.prototype.cambiarPantalla = function () {
        this.vistaInicialActiva = false;
    };
    TrabajarRutasClientesComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            this.ClientesSearched = this.auxDataCurrent.slice();
        }
        else {
            this.auxDataCurrent.forEach(function (cliente) {
                if (cliente.nombreCliente
                    .toLowerCase()
                    .indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(cliente);
                    _this.enviarIdCliente = cliente.idCliente;
                }
            });
            this.ClientesSearched = searchArrayAux;
            this.muestraArregloClientes = false;
        }
    };
    TrabajarRutasClientesComponent.prototype.cambiarVistaPorCliente = function (nombre, idCliente) {
        this.enviaNombreCliente = nombre;
        this.enviarIdCliente = idCliente;
        console.log(nombre);
        this.cambiaCliente = false;
        console.log("llego id" + this.enviarIdCliente);
    };
    TrabajarRutasClientesComponent.prototype.infoClientes = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this._trabajarRutasClienteService.infoClientes().subscribe(function (data) {
            if (data.current != '') {
                _this.auxDataCurrent = data.current;
                console.log("/**** infoClientes ****/");
                console.log(_this.auxDataCurrent);
                _this.auxDataCurrent.forEach(function (element) {
                    console.log("data");
                    console.log(element);
                });
            }
            else {
                _this.cambiaCliente = false;
                _this.emitVistaPrincipal.emit(true);
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    TrabajarRutasClientesComponent.prototype.cerrarDetalle = function ($event) {
        console.log("Evento cerrar");
        this.infoClientes();
        this.actualizarV.emit(true);
        if ($event === false) {
            this.cambiaCliente = true;
        }
    };
    TrabajarRutasClientesComponent.prototype.regresarVistaClientes = function ($result) {
        this.cambiaCliente = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrabajarRutasClientesComponent.prototype, "searchValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesComponent.prototype, "searchTermChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesComponent.prototype, "actualizarV", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesComponent.prototype, "emitVistaPrincipal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TrabajarRutasClientesComponent.prototype, "clientesConsulta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrabajarRutasClientesComponent.prototype, "placeholder", void 0);
    TrabajarRutasClientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-trabajar-rutas-clientes",
            template: __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_cliente_services__["a" /* TrabajarRutasClienteService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], TrabajarRutasClientesComponent);
    return TrabajarRutasClientesComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClientesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trabajar_rutas_clientes_routing__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trabajar_rutas_clientes_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trabajar_rutas_clientes_detalle_trabajar_rutas_clientes_detalle_module__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TrabajarRutasClientesModule = /** @class */ (function () {
    function TrabajarRutasClientesModule() {
    }
    TrabajarRutasClientesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__trabajar_rutas_clientes_routing__["a" /* TrabajarRutasClientesRouting */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__trabajar_rutas_clientes_detalle_trabajar_rutas_clientes_detalle_module__["a" /* TrabajarRutasClientesDetalleModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__trabajar_rutas_clientes_component__["a" /* TrabajarRutasClientesComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__trabajar_rutas_clientes_component__["a" /* TrabajarRutasClientesComponent */],
            ]
        })
    ], TrabajarRutasClientesModule);
    return TrabajarRutasClientesModule;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClientesRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_clientes_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrabajarRutasClientesRouting = /** @class */ (function () {
    function TrabajarRutasClientesRouting() {
    }
    TrabajarRutasClientesRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_clientes_component__["a" /* TrabajarRutasClientesComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], TrabajarRutasClientesRouting);
    return TrabajarRutasClientesRouting;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrabajarRutasRouting = /** @class */ (function () {
    function TrabajarRutasRouting() {
    }
    TrabajarRutasRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_component__["a" /* TrabajarRutasComponent */]
                    },
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], TrabajarRutasRouting);
    return TrabajarRutasRouting;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animationZoom\" style=\"width: 100%; height: 100%; flex-direction: row; display: flex; min-width: 800px; \"> <!--overflow: scroll;-->\r\n<!--  <div class=\"menuSeccion\">\r\n    <pn-menu-seccion [pendiente]=\"totalPendientes\" [items]=\"itemsMenu\" [titulo]=\"'GESTOR ENVÍO'\" [vistaInicialActiva]=\"vistaInicialActiva\" style=\"width: 100%\"></pn-menu-seccion>\r\n  </div>-->\r\n  <div style=\"position:relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [pendiente]=\"totalPendientes\" [items]=\"itemsMenu\" [vistaInicialActiva]=\"vistaInicialActiva\" style=\"width: 100%\"  *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n\r\n  </div>\r\n  <div id=\"divPrincipal\" style=\"width: 100%; height: 100%; flex-direction: row ; overflow-x: scroll; min-width: 500px;\">\r\n    <div class=\"bordeUno\" style=\" min-width: 900px; height: 48px; box-sizing: border-box; display: flex; padding-left: 18px; align-items: center; border-bottom: 2px solid black;\">\r\n      <div style=\"cursor: pointer; height: 35px; width: 20px; \" *ngIf=\"!vistaInicialActiva\" (click)=\"regresarVista()\">\r\n        <img class=\"img\" src='./assets/Images/regresar.svg' style=\"width: 100%; height: 100%;\" />\r\n      </div>\r\n      <label class=\"encabezadoCliente\" style=\"font-family: 'Novecento'; font-weight: 300; font-size: 25px; color: #5B5B5B; text-align: left; min-width: 800px;\"\r\n        class=\"etiqueta\">TRABAJAR RUTA. ALMACÉN</label>\r\n    </div>\r\n    <div class=\"datosC\" style=\"display: flex ; flex-direction:column; height: 75px; box-sizing: border-box; min-width: 800px; \">\r\n      <div class=\"subPadre min-width: 900px;\">\r\n        <div style=\" flex-direction: row; display: flex; box-sizing: border-box; padding-top: 15px; padding-bottom: 15px; width: 100%\">\r\n          <div style=\"width:165px; height:40px; display: flex; flex-direction: column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; position: 564px; \">\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosObjetivo\"> TU OBJETIVO </label>\r\n            <label style=\"height: 50%; width: 100% \" class=\" estiloDatosObjetivo \"> DE PACKING LIST HOY </label>\r\n          </div>\r\n          <div style=\"max-width: 85px; min-width: 30px; height:75px; font-family: Roboto; font-size: 46px; font-weight:bold; color: #39B54A; text-align: center;\">\r\n            <label class=\"estiloNumero\"> {{objetivoDePackingList}}</label>\r\n          </div>\r\n          <img class=\"img\" src='./assets/Images/objetivo.svg' style=\"height: 65%;width:22px; padding-bottom: 3px; padding-left: 10px;\" />\r\n          <div style=\"padding-left: 19px\">\r\n            <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\r\n          </div>\r\n          <div style=\"width:145px; height:40px; display: flex; flex-direction:column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px; \">\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosTrabajado \"> PACKING LIST </label>\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosTrabajado \"> TRABAJADAS HOY </label>\r\n          </div>\r\n\r\n          <div class=\"tooltip\" style=\"max-width:85px; height:50px; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\r\n            <label class=\"estiloNumero\"> {{packing_trabajadas_hoy}}</label>\r\n          </div>\r\n          <div style=\"padding-left: 19px\">\r\n            <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\r\n          </div>\r\n          <div style=\"width:120px; height:45px; display: flex; flex-direction: column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px;\">\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> PACKING LIST</label>\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> DESEADAS </label>\r\n          </div>\r\n          <div class=\"tooltip\" style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\r\n            <label class=\"estiloNumero\"> {{packingListDeceada}}</label>\r\n            <label [style.color]=\"colorIndiceInspeccionDeceada\" style=\"font-size:16px; color:#D0021B; font-weight: bold; left: 40px; position: absolute; top: -7px\">\r\n              {{inspeccionDeceadaHastaElMomento}}</label>\r\n            <span class=\"tooltiptext\">{{mensajePackingDeseadas}}</span>\r\n          </div>\r\n          <div style=\"padding-left: 35px\"></div>\r\n          <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\r\n          <div style=\"width:113px; height:40px; display: flex; flex-direction: column;font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px; \">\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosMinimo\"> MÍNIMO DE</label>\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosMinimo\"> PACKING LIST </label>\r\n          </div>\r\n          <div class=\"tooltip\" style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\r\n            <label class=\"estiloNumero\"> {{minimoPackingDeInspeccion}}</label>\r\n            <label [style.color]=\"colorMinimoInspeccion\" style=\"font-size:16px; color:#D0021B; font-weight: bold; left: 40px; position: absolute; top: -7px\">\r\n              {{valorSigno}}{{minimaInspeccionHastaElMomento}}</label>\r\n            <span class=\"tooltiptext\">{{mensajeEmbDeseado}}</span>\r\n          </div>\r\n          <div [ngStyle]=\"{'flex-direction':'column', 'display':'flex','padding-left': '2%'}\">\r\n           <!-- <pq-pop-up-estadisticas></pq-pop-up-estadisticas>-->\r\n            <pq-pop-up-estadisticas *ngIf=\"activarGraficasPrioEsta\" [tipo]=\"'Paking list'\" [muestraHallazgos]=\"false\" [tipoTotales]=\"'Paking list'\" [totalesPorInspector]= \"totales_estadisticas\" [donaChart] = \"dataPrioridadEstadisticas\" [tipoGrafica]=\"graficasEstadisticas\" [activarGraficas]=\"false\"></pq-pop-up-estadisticas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- FIN DATOSC -->\r\n    <div style=\"height: 90%; width: 100%; flex-direction: column; display: flex; min-width: 900px\" class=\"VistaInicial\" *ngIf=\"vistaInicialActiva\">\r\n      <div id=\"botonera\" style=\"height:50px; width:100%\" class=\"botoneraL\">\r\n        <pn-botonera-dias style=\"font-size: 21px; color: #4A4A4A; text-align: center; font-family: Roboto-Regular;\"\r\n          [iniciarBotonera]=\"iniciarBotonera\" [tHoy]=\"valoresTabs[0]\" [tManana]=\"valoresTabs[1]\" [tPasadoM]=\"valoresTabs[2]\" [tTodo]=\"valoresTabs[4]\" [tFuturo]=\"valoresTabs[3]\" (event)=\"cambiarTab($event)\"></pn-botonera-dias>\r\n      </div>\r\n      <div  class=\"graficas\">\r\n        <div class=\"padreCliente_Prioridades\">\r\n          <div>\r\n            <div class=\"tituloGrafica\">\r\n              CLIENTES\r\n            </div>\r\n            <div id=\"donaCliente\" style=\"width: 100%; height: 100%; display: flex;\">\r\n              <pn-donut-chart *ngIf=\"dataCLienteReload\" [idGrafica]=\"'cliente'\" [data]=\"dataCLiente\" [tipoGrafica]=\"tiposGraficas[0]\" [height]=\"'auto'\">\r\n              </pn-donut-chart>\r\n            </div>\r\n          </div>\r\n          <!--<div>\r\n            <div class=\"tituloGrafica\">\r\n              PRIORIDADES\r\n            </div>\r\n            <div id=\"donaPrioridades\" style=\"width: 100%; height: 100%; display: flex;\">\r\n              <pn-donut-chart *ngIf=\"dataPrioridadesReload\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridades\" [tipoGrafica]=\"tiposGraficas[1]\" [height]=\"'auto'\">\r\n              </pn-donut-chart>\r\n            </div>\r\n          </div>-->\r\n        </div>\r\n        <!-- fin grafica clientes y productos -->\r\n        <!-- <div [ngStyle]=\"{'width': '8%', 'height':'100%'}\"></div> -->\r\n      <!--  <div class=\" padrePrioridades\">\r\n          <div>\r\n            <div class=\"tituloGPequenio\">\r\n              PRIORIDAD 1\r\n            </div>\r\n            <div id=\"donaPrioridadUno\" style=\"width: 100%; height: 100%; display: flex;\">\r\n              <pn-donut-chart *ngIf=\"dataPrioridadUnoReload\" [idGrafica]=\"'prioridadUno'\" [data]=\"dataPrioridadUno\" [tipoGrafica]=\"tiposGraficas[2]\"\r\n                [height]=\"'auto'\"> </pn-donut-chart>\r\n            </div>\r\n          </div>\r\n          <div >\r\n            <div class=\"tituloGPequenio\">\r\n              PRIORIDAD 2\r\n            </div>\r\n            <div id=\"donaPrioridadDos\" style=\"width: 100%; height: 100%; display: flex;\">\r\n              <pn-donut-chart *ngIf=\"dataPrioridadDosReload\" [idGrafica]=\"'prioridadDos'\" [data]=\"dataPrioridadDos\" [tipoGrafica]=\"tiposGraficas[3]\"\r\n                [height]=\"'auto'\"> </pn-donut-chart>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"tituloGPequenio\">\r\n              PRIORIDAD 3\r\n            </div>\r\n            <div id=\"donaPrioridadTres\" style=\"width: 100%; height: 100%; display: flex;\">\r\n              <pn-donut-chart *ngIf=\"dataPrioridadTresReload\" [idGrafica]=\"'prioridadTres'\" [data]=\"dataPrioridadTres\" [tipoGrafica]=\"tiposGraficas[4]\"\r\n                [height]=\"'auto'\"> </pn-donut-chart>\r\n            </div>\r\n          </div>\r\n          &lt;!&ndash; fin GRafica prioridad 1,2,3&ndash;&gt;\r\n        </div>-->\r\n        <!-- fin div graficas -->\r\n      </div>\r\n      <div id=\"divBoton\" [style.pointerEvents]=\"activarBtnIngresar?'auto':'none'\">\r\n        <a class=\"botonIngresar\" (click)=\"cambiarPantalla()\" [style.background]=\"activarBtnIngresar?'#008894':'#E6E6E6'\">INGRESAR</a>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!vistaInicialActiva\" style=\"width: 100%;min-width: 900px\" class=\"rutasClientes\">\r\n      <pn-trabajar-rutas-clientes style=\"width: 100%; height: 100%;\" (actualizarV)=\"actualizarVista($event)\" (emitVistaPrincipal)=\"vistaPrincipal($event)\"></pn-trabajar-rutas-clientes>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.scss":
/***/ (function(module, exports) {

module.exports = ".subPadre{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}.menuSeccion{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.flexbox-container{display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex}#divBoton{width:100%;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.botonIngresar{width:190px;height:40px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.tituloGrafica{width:100px;font-size:36px;font-weight:bold;text-align:center}.tituloGMediano{width:100px;font-size:24px;font-weight:bold;text-align:center}.tituloGPequenio{width:100px;font-size:21px;font-weight:bold;text-align:center}#prioridad1,#prioridad2,#prioridad3{width:55%}#donaProducto{width:75%}.tooltip{position:relative;display:inline-block;cursor:pointer}.tooltip>.tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.tooltip:hover>.tooltiptext{visibility:visible;opacity:1;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip>.tooltiptext{visibility:hidden;width:130px;background-color:#424242;color:#fff;font-family:\"Roboto\";text-align:left;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;margin-top:0px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}.gr_ch{width:50%}.gr_ch .alineacion{display:-webkit-box;display:-ms-flexbox;display:flex;height:50%;width:100%}.gr_ch .donut-title{margin-top:10px;font:20px Roboto-Bold;text-align:center}.gr_ch .canvas-container{width:80%;margin-left:20px}@media all and (max-width: 1405px){.estiloDatos{min-height:30px}.rutasClientes{height:71%}}.graficas{width:100%;height:calc(100vh - 350px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around}.graficas .padreCliente_Prioridades{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:90%;margin:30px 0px}.graficas .padreCliente_Prioridades>div{min-width:90%}.graficas .padreCliente_Prioridades>div>div{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.graficas .padrePrioridades{width:20%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:30px 0px}.graficas .padrePrioridades>div{width:100%;max-height:25%;margin:6% 0px}.graficas .padrePrioridades>div>div{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.estiloDatosObjetivo,.estiloDatosTrabajado,.estiloDatos,.estiloDatosMinimo{font-size:16px;font-family:Roboto;font-weight:bold}.botoneraL{-webkit-box-sizing:content-box;box-sizing:content-box;border-bottom:1px solid #88868a;border-top:1px solid #88868a;position:relative}"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_service__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrabajarRutasComponent = /** @class */ (function () {
    /******************/
    function TrabajarRutasComponent(comunService, _trabajarRutaService, _embalarService) {
        this.comunService = comunService;
        this._trabajarRutaService = _trabajarRutaService;
        this._embalarService = _embalarService;
        //@Input() partidaPrioridad:PartidaInspeccion = new PartidaInspeccion();
        //////variables de los donout
        this.tituloDonaCliente = "";
        this.graficasValores_p = [];
        this.graficaTipos_p = [];
        this.graficas_p = [];
        this.graficaTipos_prioridad = [];
        this.graficas_prioridad = [];
        this.lstConsultaActual = []; //las que tengas donaclientes
        this.lstclientesG = []; //las que tengas
        this.lstGraficaPrioridades = []; ///dona prioridades
        this.lstPrioridadesG = []; //las que tengas
        this.lstGraficaUnoP1 = []; ///dona p1
        this.lstPrioridadUnoG = []; //las que tengas
        this.lstGraficaDosP2 = []; ///dona p2
        this.lstPrioridadDosG = []; //las que tengas
        this.lstGraficaTresP2 = []; ///dona p3
        this.lstPrioridadTresG = []; //las que tengas
        this.valoresTabs = [0, 0, 0, 0, 0];
        this.tiposGraficas = ["Gris", "Gris", "Gris", "Gris", "Gris"];
        this.datosGraficas = [];
        this.graficasValores = [];
        this.dataCLienteReload = true;
        this.dataCLiente = {
            titulo: "Clientes",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadesReload = true;
        this.dataPrioridades = {
            titulo: "Prioridades",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadUnoReload = true;
        this.dataPrioridadUno = {
            titulo: "Prioridad 1",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadDosReload = true;
        this.dataPrioridadDos = {
            titulo: "Prioridad 2",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadTresReload = true;
        this.dataPrioridadTres = {
            titulo: "Prioridad 3",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        ///////
        this.lstAux = [];
        this.lstAuxPrioridades = [];
        this.vistaInicialActiva = true;
        this.classAsideMenu = "asideNormalMenu";
        this.totalPendientes = 0;
        /////variables  para el html
        this.inspeccionDeceadaHastaElMomento = 0;
        this.inspeccionDeceadaHastaElMomentoMen = 0;
        this.minimaInspeccionHastaElMomento = 0;
        this.objetivoDePackingList = 0;
        this.packingListDeceada = 0;
        this.packing_trabajadas_hoy = 0;
        this.minimoPackingDeInspeccion = 0;
        this.colorIndiceInspeccionDeceada = "#D0021B";
        this.colorMinimoInspeccion = "#D0021B";
        this.listaPorAnio = [];
        this.listaPorQuincena = [];
        this.listaPorMes = [];
        this.arrayDatosYear = [];
        this.arrayLabelYear = [];
        this.listaQuincena = [];
        this.listaMes = [];
        this.listaYear = [];
        this.arrayLabelQuincena = [];
        this.arrayDatosQuincena = [];
        this.arrayDatosMes = [];
        this.arrayLabelMes = [];
        this.filtroPrioUsuario = [];
        this.nuevaPrioridadEstadisticas = [];
        this.totEmbalar = 0;
        this.totAlmacen = 0;
        this.totEnvio = 0;
        this.totEnvioXCliente = 0;
    }
    TrabajarRutasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'almacen') {
                _this.activeMenu = false;
                _this.obtenerMetodos();
            }
        });
        this.obtenerMetodos();
    };
    TrabajarRutasComponent.prototype.obtenerMetodos = function () {
        this.obtenerTotMenu();
        this.obtenerObjetivos();
        this.obtenerInfoGraficas();
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var id = parseInt(this.idUsuario);
        var obj = {
            idUsuarioLogueado: id
        };
        this.ObtenerEstadisticaUsuarioPL(obj);
        // inspeccionDeceadaHastaElMomento
        // minimaInspeccionHastaElMomento
        if (this.inspeccionDeceadaHastaElMomento < 0) {
            this.colorIndiceInspeccionDeceada = "#D0021B";
        }
        else if (this.packingListDeceada > this.inspeccionDeceadaHastaElMomento) {
            this.colorIndiceInspeccionDeceada = "#39B54A"; /////verde
        }
        if (this.minimaInspeccionHastaElMomento < 0) {
            this.colorMinimoInspeccion = "#D0021B"; //rojo
        }
        else if (this.minimoPackingDeInspeccion > this.minimaInspeccionHastaElMomento) {
            this.colorMinimoInspeccion = "#39B54A";
        }
    };
    TrabajarRutasComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = "asideOcultarMenu";
        }
        else {
            this.classAsideMenu = "asideMostrarMenu";
        }
    };
    /*Metodo para llamar al servicio de la graficas prioridades */
    TrabajarRutasComponent.prototype.ObtenerEstadisticaUsuarioPL = function (datosUser) {
        var _this = this;
        this.activarGraficasPrioEsta = false;
        var totPza = 0;
        var totPartidas = 0;
        var totPzaPrio = 0;
        var totPzaPrio1 = 0;
        var totPzaPrio2 = 0;
        var totPzaPrio3 = 0;
        this.listaQuincena = { listaLabel: [''], listaDatos: [0] };
        this.listaMes = { listaLabel: [''], listaDatos: [0] };
        this.listaYear = { listaLabel: [''], listaDatos: [0] };
        this.listaPrioridadUsuarioEstadisticas = [];
        this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: this.listaQuincena, listaMes: this.listaMes, listaAnio: this.listaYear };
        this._trabajarRutaService.ObtenerEstadisticaUsuarioPL(datosUser).subscribe(function (data) {
            console.log('Soy data prioridades -->', datosUser.idUsuarioLogueado);
            console.log('Soy data prioridades -->', data.current);
            /////////////////////////////////////////////////////////////////////
            if (data.current.Prioridad !== undefined) {
                if (data.current.AllYears) {
                    _this.listaAnios = data.current.AllYears;
                }
                if (data.current.Prioridad) {
                    _this.listaPrioridadEstadisticas = data.current.Prioridad;
                }
                if (data.current.Year) {
                    _this.listaPorAnio = data.current.Year;
                    _this.listaPorAnio.forEach(function (inde) {
                        _this.arrayLabelYear.push(inde.tiempo);
                        _this.arrayDatosYear.push(inde.totalPiezas);
                    });
                }
                if (data.current.Mes) {
                    _this.listaPorMes = data.current.Mes;
                    _this.listaPorMes.forEach(function (inde) {
                        _this.arrayLabelMes.push(inde.tiempo);
                        _this.arrayDatosMes.push(inde.totalPiezas);
                    });
                }
                if (data.current.Quincena) {
                    _this.listaPorQuincena = data.current.Quincena;
                    _this.listaPorQuincena.forEach(function (inde) {
                        _this.arrayLabelQuincena.push(inde.tiempo);
                        _this.arrayDatosQuincena.push(inde.totalPiezas);
                    });
                }
                _this.listaPrioridadEstadisticasDatos = data.current.Prioridad;
                ///// Se asignan a las listas los datos para la grafica de puntos
                _this.listaQuincena = { listaLabel: _this.arrayLabelQuincena, listaDatos: _this.arrayDatosQuincena };
                _this.listaMes = { listaLabel: _this.arrayLabelMes, listaDatos: _this.arrayDatosMes };
                _this.listaYear = { listaLabel: _this.arrayLabelYear, listaDatos: _this.arrayDatosYear };
                ////// Aqui termina
                for (var i = 0; i < _this.listaAnios.length; i++) {
                    totPza += _this.listaAnios[i].totalPiezas;
                    totPartidas += _this.listaAnios[i].totalPL;
                }
                for (var i = 0; i < _this.listaPrioridadEstadisticasDatos.length; i++) {
                    if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P1') {
                        totPzaPrio1 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                    else if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P2') {
                        totPzaPrio2 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                    else if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P3') {
                        totPzaPrio3 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                }
                //////////////////////////////////////// GRAFICAS DONUT CHARTS //////////////////7///////////////
                _this.listaPrioridadUsuarioEstadisticas = [{ 'prioridad': 'Prioridad 1', 'pieza': totPzaPrio1 },
                    { 'prioridad': 'Prioridad 2', 'pieza': totPzaPrio2 },
                    { 'prioridad': 'Prioridad 3', 'pieza': totPzaPrio3 }];
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
                _this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: _this.listaQuincena, listaMes: _this.listaMes, listaAnio: _this.listaYear };
            }
            else {
                //////////////////////////////////////// GRAFICAS DONUT CHARTS /////////////////////////////////
                _this.listaPrioridadUsuarioEstadisticas = [{ 'prioridad': 'Ninguna', 'pieza': 0 }];
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
            }
        });
    };
    // Metodo para las variables de la graficas estadisticas
    TrabajarRutasComponent.prototype.limpiarVariablesGraficaEstadisticas = function () {
        this.filtroPrioUsuario = [];
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var valor = _a[_i];
            this.filtroPrioUsuario.push(valor.prioridad);
        }
        var valoresC = [];
        var valoresPrioEst = [];
        for (var _b = 0, _c = this.listaPrioridadUsuarioEstadisticas; _b < _c.length; _b++) {
            var nombre = _c[_b];
            valoresPrioEst.push([0]);
            valoresC.push(0);
        }
        if (this.listaPrioridadUsuarioEstadisticas.length > 1) {
            this.dataPrioridadEstadisticas = {
                titulo: 'Totales',
                labels: this.filtroPrioUsuario,
                valores: valoresC,
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: valoresPrioEst
            };
            this.graficasEstadisticas = 'Prioridades';
        }
        else {
            this.dataPrioridadEstadisticas = {
                titulo: 'Totales',
                labels: [""],
                valores: [1],
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: [[0], [0]]
            };
            this.graficasEstadisticas = 'Gris';
        }
    };
    TrabajarRutasComponent.prototype.calcularDatosGraficaEstadisticas = function () {
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var usuario = _a[_i];
            this.llenarTotales(this.dataPrioridadEstadisticas, usuario, 'PRIORIDADESESTADISTICAS');
        }
    };
    TrabajarRutasComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        switch (graficaElegida) {
            case 'PRIORIDADESESTADISTICAS':
                var posicionP4 = this.filtroPrioUsuario.indexOf(elemento.prioridad);
                if (this.nuevaPrioridadEstadisticas.indexOf(elemento.prioridad) === -1) {
                    this.nuevaPrioridadEstadisticas.push(elemento.prioridad);
                }
                total.valuesExtrasHover[posicionP4][0] += elemento.pieza;
                total.valuesExtras[0] += elemento.pieza; // Total de Partidas
                total.valores[posicionP4] += elemento.pieza; // +(elemento.monto.toFixed(2)); //Monto total
                this.activarGraficasPrioEsta = true; // ACTIVAR EL COMPONENTE PARA LA GRAFICA DE DONA PRIORIDADES USUARIO
                break;
            default:
                break;
        }
    };
    //////////////////////////////////////////////////////////
    TrabajarRutasComponent.prototype.cambiarPantalla = function () {
        this.vistaInicialActiva = false;
    };
    TrabajarRutasComponent.prototype.regresarVista = function () {
        this.vistaInicialActiva = true;
        this.seleccionarHoy();
    };
    TrabajarRutasComponent.prototype.seleccionarHoy = function () {
        setTimeout(function () {
            var idHoy = document.getElementById('dhoy');
            if (idHoy) {
                document.getElementById('dhoy').click();
            }
            else {
                this.seleccionarHoy();
            }
        }, 100);
    };
    TrabajarRutasComponent.prototype.obtenerObjetivos = function () {
        var _this = this;
        this._trabajarRutaService.obtenerObjetivos().subscribe(function (data) {
            if (data.current["Hoy"] != undefined) {
                _this.packing_trabajadas_hoy = data.current["Hoy"];
            }
            if (data.current["Deseadas"] != undefined) {
                _this.packingListDeceada = data.current["Deseadas"];
                _this.inspeccionDeceadaHastaElMomento =
                    _this.packing_trabajadas_hoy - _this.packingListDeceada;
                _this.inspeccionDeceadaHastaElMomentoMen = -1 * _this.inspeccionDeceadaHastaElMomento;
                if (_this.inspeccionDeceadaHastaElMomentoMen === 0) {
                    _this.mensajePackingDeseadas = 'HAZ ALCANZADO LOS PAKING LIST DESEADOS';
                }
                else {
                    _this.mensajePackingDeseadas = 'ESTAS A' + ' ' + _this.inspeccionDeceadaHastaElMomentoMen + ' ' + 'PACKING LIST DESEADAS';
                }
            }
            if (data.current["Minimo"] != undefined) {
                _this.minimoPackingDeInspeccion = data.current["Minimo"];
                /* this.minimaInspeccionHastaElMomento =
                   this.minimoPackingDeInspeccion - this.packing_trabajadas_hoy;*/
                if (_this.packing_trabajadas_hoy > _this.minimoPackingDeInspeccion) {
                    // this.cambiarColor = '#39B54A';
                    _this.minimaInspeccionHastaElMomento = _this.packing_trabajadas_hoy - _this.minimoPackingDeInspeccion;
                    _this.valorSigno = '+';
                    _this.colorMinimoInspeccion = "#39B54A";
                    _this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE ETREGAS';
                }
                else if (_this.minimoPackingDeInspeccion > _this.packing_trabajadas_hoy) {
                    // this.cambiarColor = '#D0021B';
                    _this.minimaInspeccionHastaElMomento = _this.minimoPackingDeInspeccion - _this.packing_trabajadas_hoy;
                    _this.valorSigno = '-';
                    _this.colorMinimoInspeccion = "#D0021B"; //rojo
                    if (_this.minimaInspeccionHastaElMomento > 1) {
                        _this.mensajeEmbDeseado = 'ESTAS A' + ' ' + _this.minimaInspeccionHastaElMomento + ' ' + 'PIEZAS DE SUPERAR EL MÍNIMO DE ENTREGAS';
                    }
                    else {
                        _this.mensajeEmbDeseado = 'ESTAS A' + ' ' + _this.minimaInspeccionHastaElMomento + ' ' + 'PIEZA DE SUPERAR EL MÍNIMO DE ENTREGA';
                    }
                }
                else if (_this.packing_trabajadas_hoy === _this.minimoPackingDeInspeccion) {
                    // this.cambiarColor = '#FBB03B';
                    _this.minimaInspeccionHastaElMomento = _this.packing_trabajadas_hoy - _this.minimoPackingDeInspeccion;
                    _this.valorSigno = ' ';
                    _this.mensajeEmbDeseado = 'HAZ ALCANZADO EL MÍNIMO DE ENTREGAS';
                }
            }
            if (data.current["Objetivo"] != undefined) {
                _this.objetivoDePackingList = data.current["Objetivo"];
            }
            if (_this.packing_trabajadas_hoy < _this.packingListDeceada) {
                _this.activarBtnIngresar = true;
            }
            else {
                _this.activarBtnIngresar = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasComponent.prototype.obtenerTotMenu = function () {
        var _this = this;
        this._embalarService.totalesGeneral().subscribe(function (data) {
            _this.totEmb = data.current.Embalar;
            _this.totAlmacen = data.current.Almacen;
            _this.totEnvio = data.current.Envio;
            _this.totEnvioXCliente = data.current.EnvioXCliente;
            _this.itemsMenu = [{ rol: 'RESPONSABLE DE SURTIDO', active: true, menu: [
                        { nombre: 'Salidas Almacén', tipo: 'valor', valor: _this.totEmb, url: 'embalar', disable: false },
                        {
                            nombre: 'Trabajar rutas',
                            tipo: '',
                            valor: 0,
                            url: 'poolVisitas',
                            disable: true,
                            subMenu: [
                                { nombre: 'Almacén', tipo: 'valor', valor: _this.totAlmacen, url: 'almacen', select: true },
                                { nombre: 'Envío', tipo: 'valor', valor: _this.totEnvio, url: 'envio' },
                                { nombre: 'Envio Pagado por cliente', tipo: 'valor', valor: _this.totEnvioXCliente, url: 'trabajarRutaCliente' }
                            ],
                            select: false
                        }
                    ] }];
            _this.activeMenu = true;
        });
    };
    TrabajarRutasComponent.prototype.obtenerInfoGraficas = function () {
        var _this = this;
        this._trabajarRutaService.obtenerMontosTab().subscribe(function (data) {
            console.log(data);
            _this.valoresTabs = [
                data.current["Hoy"],
                data.current["Mañana"],
                data.current["Pasado"],
                data.current["Futuro"],
                data.current["Todo"]
            ];
        }, function (error) {
            console.log(error);
        });
        this._trabajarRutaService.obtenerInfoGraficas().subscribe(function (data) {
            _this.datosGraficas = data.current;
            _this.cambiarTab("hoy");
            var idHoy = document.getElementById('dhoy');
            if (idHoy) {
                setTimeout(function () {
                    document.getElementById('dhoy').click();
                }, 100);
            }
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasComponent.prototype.cambiarTab = function ($event) {
        switch ($event) {
            case "hoy":
                this.llenarGraficas("Hoy");
                break;
            case "manana":
                this.llenarGraficas("Mañana");
                break;
            case "pasado":
                this.llenarGraficas("Pasado");
                break;
            case "futuro":
                this.llenarGraficas("futuro");
                break;
            case "todo":
                this.llenarGraficas("Todo");
                break;
        }
    };
    TrabajarRutasComponent.prototype.llenarGraficas = function (dia) {
        var _this = this;
        this.limpiarGraficas();
        if (this.datosGraficas[dia] != undefined) {
            var graficaHoy = this.datosGraficas[dia];
            console.log(graficaHoy);
            if (graficaHoy["Clientes"] != undefined) {
                var clientes = [];
                var monto = [];
                var piezasMonto = [];
                var sumPiezas = 0;
                var sumMonto = 0;
                var formatoMonto = void 0; /// Se agrego para darle formato al monto
                var formatoMontoTotal = void 0; /// Se agrego para darle formato al monto
                for (var _i = 0, _a = graficaHoy["Clientes"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    clientes.push(item.titulo);
                    monto.push(item.monto);
                    formatoMonto = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(item.monto);
                    piezasMonto.push([item.piezas, formatoMonto]);
                    sumPiezas += item.piezas;
                    sumMonto += item.monto;
                }
                /*For para ordenar los datos de acuerdo al monto*/
                var montoAuxL = void 0;
                var band = false;
                while (!band) {
                    band = true;
                    for (var i = 0; i < monto.length - 1; i++) {
                        var aux = i + 1;
                        if (monto[i] < monto[aux]) {
                            montoAuxL = monto[i + 1];
                            monto[i + 1] = monto[i];
                            monto[i] = montoAuxL;
                            // band = false;
                            ///////////////////////
                            montoAuxL = piezasMonto[i + 1][1];
                            piezasMonto[i + 1][1] = piezasMonto[i][1];
                            piezasMonto[i][1] = montoAuxL;
                            /////////////////////
                            montoAuxL = piezasMonto[i + 1][0];
                            piezasMonto[i + 1][0] = piezasMonto[i][0];
                            piezasMonto[i][0] = montoAuxL;
                            /////////////////////////////
                            montoAuxL = clientes[i + 1];
                            clientes[i + 1] = clientes[i];
                            clientes[i] = montoAuxL;
                            band = false;
                        }
                    }
                }
                /**********************************************/
                formatoMontoTotal = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(sumMonto); /// Se asigna el formato al total del monto
                this.dataCLiente = {
                    titulo: "Clientes",
                    labels: clientes,
                    valores: monto,
                    labelsExtras: [["Piezas"], ["Monto"]],
                    labelsExtrasHover: ["Piezas", "Monto"],
                    valuesExtras: [sumPiezas, formatoMontoTotal],
                    valuesExtrasHover: piezasMonto
                };
                this.tiposGraficas[0] = "General";
                this.dataCLienteReload = false;
                setTimeout(function () {
                    _this.dataCLienteReload = true;
                }, 5);
            }
            else {
                this.tiposGraficas[0] = "Gris";
                this.dataCLienteReload = false;
                setTimeout(function () {
                    _this.dataCLienteReload = true;
                }, 5);
            }
            /***************************************** graficas de prioridadades ***********************************/
            /*if (graficaHoy["Prioridades"] != undefined) {
              let prioridades: any = [];
              let monto: any = [];
              let piezasMonto: any = [];
              let sumPiezas: any = 0;
              let sumMonto: any = 0;
              for (let item of graficaHoy["Prioridades"]) {
                prioridades.push(item.titulo);
                monto.push(item.monto);
                piezasMonto.push([item.piezas, "$" + item.monto]);
                sumPiezas += item.piezas;
                sumMonto += item.monto;
              }
      
              this.dataPrioridades = {
                titulo: "Prioridades",
                labels: prioridades,
                valores: monto,
                labelsExtras: [["Piezas"], ["Monto"]],
                labelsExtrasHover: ["Piezas", "Monto"],
                valuesExtras: [sumPiezas, "$" + sumMonto],
                valuesExtrasHover: piezasMonto
              };
              this.tiposGraficas[1] = "General";
              this.dataPrioridadesReload = false;
              setTimeout(() => {
                this.dataPrioridadesReload = true;
              }, 5);
            } else {
              this.tiposGraficas[1] = "Gris";
              this.dataPrioridadesReload = false;
              setTimeout(() => {
                this.dataPrioridadesReload = true;
              }, 5);
            }*/
            /*if (graficaHoy["P1"] != undefined) {
              let clientes: any = [];
              let monto: any = [];
              let piezasMonto: any = [];
              let sumPiezas: any = 0;
              let sumMonto: any = 0;
              for (let item of graficaHoy["P1"]) {
                clientes.push(item.titulo);
                monto.push(item.monto);
                piezasMonto.push([item.piezas, "$" + item.monto]);
                sumPiezas += item.piezas;
                sumMonto += item.monto;
              }
              this.dataPrioridadUno = {
                titulo: "Prioridad 1",
                labels: clientes,
                valores: monto,
                labelsExtras: [["Piezas"], ["Monto"]],
                labelsExtrasHover: ["Piezas", "Monto"],
                valuesExtras: [sumPiezas, "$" + sumMonto],
                valuesExtrasHover: piezasMonto
              };
              this.tiposGraficas[2] = "PrioridadRoja";
              this.dataPrioridadUnoReload = false;
              setTimeout(() => {
                this.dataPrioridadUnoReload = true;
              }, 5);
            } else {
              this.tiposGraficas[2] = "Gris";
              this.dataPrioridadUnoReload = false;
              setTimeout(() => {
                this.dataPrioridadUnoReload = true;
              }, 5);
            }*/
            /*if (graficaHoy["P2"] != undefined) {
              let clientes: any = [];
              let monto: any = [];
              let piezasMonto: any = [];
              let sumPiezas: any = 0;
              let sumMonto: any = 0;
              for (let item of graficaHoy["P2"]) {
                clientes.push(item.titulo);
                monto.push(item.monto);
                piezasMonto.push([item.piezas, "$" + item.monto]);
                sumPiezas += item.piezas;
                sumMonto += item.monto;
              }
              this.dataPrioridadDos = {
                titulo: "Prioridad 2",
                labels: clientes,
                valores: monto,
                labelsExtras: [["Piezas"], ["Monto"]],
                labelsExtrasHover: ["Piezas", "Monto"],
                valuesExtras: [sumPiezas, "$" + sumMonto],
                valuesExtrasHover: piezasMonto
              };
              this.tiposGraficas[3] = "PrioridadNaranja";
              this.dataPrioridadDosReload = false;
              setTimeout(() => {
                this.dataPrioridadDosReload = true;
              }, 5);
            } else {
              this.tiposGraficas[3] = "Gris";
              this.dataPrioridadDosReload = false;
              setTimeout(() => {
                this.dataPrioridadDosReload = true;
              }, 5);
            }*/
            /*if (graficaHoy["P3"] != undefined) {
              let clientes: any = [];
              let monto: any = [];
              let piezasMonto: any = [];
              let sumPiezas: any = 0;
              let sumMonto: any = 0;
              for (let item of graficaHoy["P3"]) {
                clientes.push(item.titulo);
                monto.push(item.monto);
                piezasMonto.push([item.piezas, "$" + item.monto]);
                sumPiezas += item.piezas;
                sumMonto += item.monto;
              }
              this.dataPrioridadTres = {
                titulo: "Prioridad 3",
                labels: clientes,
                valores: monto,
                labelsExtras: [["Piezas"], ["Monto"]],
                labelsExtrasHover: ["Piezas", "Monto"],
                valuesExtras: [sumPiezas, "$" + sumMonto],
                valuesExtrasHover: piezasMonto
              };
              this.tiposGraficas[4] = "PrioridadVerde";
              this.dataPrioridadTresReload = false;
              setTimeout(() => {
                this.dataPrioridadTresReload = true;
              }, 5);
            } else {
              this.tiposGraficas[4] = "Gris";
              this.dataPrioridadTresReload = false;
              setTimeout(() => {
                this.dataPrioridadTresReload = true;
              }, 5);
            }*/
        }
    };
    TrabajarRutasComponent.prototype.limpiarGraficas = function () {
        var _this = this;
        this.dataCLiente = {
            titulo: "Clientes",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridades = {
            titulo: "Prioridades",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadUno = {
            titulo: "Prioridad 1",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadDos = {
            titulo: "Prioridad 2",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadTres = {
            titulo: "Prioridad 3",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.tiposGraficas = ["Gris", "Gris", "Gris", "Gris", "Gris"];
        this.dataCLienteReload = false;
        this.dataPrioridadesReload = false;
        this.dataPrioridadUnoReload = false;
        this.dataPrioridadDosReload = false;
        this.dataPrioridadTresReload = false;
        setTimeout(function () {
            _this.dataCLienteReload = true;
            _this.dataPrioridadesReload = true;
            _this.dataPrioridadUnoReload = true;
            _this.dataPrioridadDosReload = true;
            _this.dataPrioridadTresReload = true;
        }, 5);
    };
    TrabajarRutasComponent.prototype.actualizarVista = function ($event) {
        this.obtenerObjetivos(); // Vista superior
        this.obtenerInfoGraficas(); // Grafica de la vista principal
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var id = parseInt(this.idUsuario);
        var obj = {
            idUsuarioLogueado: id
        };
        this.ObtenerEstadisticaUsuarioPL(obj);
    };
    TrabajarRutasComponent.prototype.vistaPrincipal = function ($event) {
        this.vistaInicialActiva = true;
        this.seleccionarHoy();
    };
    TrabajarRutasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-trabajar-rutas",
            template: __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_service__["a" /* TrabajarRutaService */], __WEBPACK_IMPORTED_MODULE_4__services_embalar_embalar_service__["a" /* EmbalarService */]])
    ], TrabajarRutasComponent);
    return TrabajarRutasComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajarRutasModule", function() { return TrabajarRutasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trabajar_rutas_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_radio_button_sin_label_radio_button_sin_label_module__ = __webpack_require__("./src/app/components/shared/radio-button-sin-label/radio-button-sin-label.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__trabajar_rutas_routing__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_search_bar_search_bar_module__ = __webpack_require__("./src/app/components/shared/search-bar/search-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_buscador_ovalado_buscador_ovalado_component__ = __webpack_require__("./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trabajar_rutas_clientes_trabajar_rutas_clientes_module__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_pop_up_estadisticas_pop_up_estadisticas_module__ = __webpack_require__("./src/app/components/shared/pop-up-estadisticas/pop-up-estadisticas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_grafica_puntos_grafica_puntos_module__ = __webpack_require__("./src/app/components/shared/grafica-puntos/grafica-puntos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__responsableae_componentes_botonera_dias_botonera_dias_module__ = __webpack_require__("./src/app/components/responsableae/componentes/botonera-dias/botonera-dias.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__trabajar_rutas_clientes_trabajar_rutas_clientes_detalle_trabajar_rutas_clientes_detalle_module__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var TrabajarRutasModule = /** @class */ (function () {
    function TrabajarRutasModule() {
    }
    TrabajarRutasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_12__trabajar_rutas_routing__["a" /* TrabajarRutasRouting */],
                __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_radio_button_sin_label_radio_button_sin_label_module__["a" /* RadioButtonSinLabelModule */],
                __WEBPACK_IMPORTED_MODULE_13__shared_search_bar_search_bar_module__["a" /* SearchBarModule */],
                __WEBPACK_IMPORTED_MODULE_15__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_17__shared_pop_up_estadisticas_pop_up_estadisticas_module__["a" /* PopUpEstadisticasModule */],
                __WEBPACK_IMPORTED_MODULE_18__shared_grafica_puntos_grafica_puntos_module__["a" /* GraficaPuntosModule */],
                __WEBPACK_IMPORTED_MODULE_19__responsableae_componentes_botonera_dias_botonera_dias_module__["a" /* BotoneraDiasModule */],
                __WEBPACK_IMPORTED_MODULE_16__trabajar_rutas_clientes_trabajar_rutas_clientes_module__["a" /* TrabajarRutasClientesModule */],
                __WEBPACK_IMPORTED_MODULE_20__trabajar_rutas_clientes_trabajar_rutas_clientes_detalle_trabajar_rutas_clientes_detalle_module__["a" /* TrabajarRutasClientesDetalleModule */],
                __WEBPACK_IMPORTED_MODULE_21__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_22__shared_alerta_alerta_module__["a" /* AlertaModule */],
                __WEBPACK_IMPORTED_MODULE_23__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__trabajar_rutas_component__["a" /* TrabajarRutasComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_buscador_ovalado_buscador_ovalado_component__["a" /* BuscadorOvaladoComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__trabajar_rutas_component__["a" /* TrabajarRutasComponent */]]
        })
    ], TrabajarRutasModule);
    return TrabajarRutasModule;
}());



/***/ })

});
//# sourceMappingURL=trabajar-rutas.module.chunk.js.map