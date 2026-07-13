webpackJsonp(["asuntos-regulatorios.module"],{

/***/ "./src/app/components/asuntos-regulatorios/asuntos-regulatorios-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsuntosRegulatoriosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asuntos_regulatorios_component__ = __webpack_require__("./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AsuntosRegulatoriosRoutingModule = /** @class */ (function () {
    function AsuntosRegulatoriosRoutingModule() {
    }
    AsuntosRegulatoriosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__asuntos_regulatorios_component__["a" /* AsuntosRegulatoriosComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AsuntosRegulatoriosRoutingModule);
    return AsuntosRegulatoriosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"  style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <!--Termina seccion de menu-->\r\n  <!--Empieza el area de trabajo-->\r\n  <div class=\"area\"> <!--[style.width]=\"quitarWith? 'calc(100% - 321px)':'100%'\"-->\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div style=\"cursor: pointer;\" *ngIf=\"!vistaPrincipal\" (click)=\"regresarVistaP()\">\r\n        <img class=\"img\" src='./assets/Images/regresar.svg'/>\r\n      </div>\r\n      <label class=\"etiqueta\" style=\"width: 45%\">GESTIONAR CARGA PAP</label>\r\n      <span class=\"cabeceraCliente\">{{cabeceraClient}}</span>\r\n    </div>\r\n    <!--Termina la cabezera-->\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 120px)'}\">\r\n      <div style=\"width: 100%; height: 100%\" *ngIf=\"vistaPrincipal\">\r\n        <div style=\"height: 100%; width: 100%; display: -webkit-box\" >\r\n          <div class=\"listaProd\">\r\n            <div class=\"titulosLista\">\r\n              <div  class=\"tituloCliente\">\r\n                <label class=\"tituloLista\">CLIENTES</label>\r\n              </div>\r\n              <div class=\"organizarLista\">\r\n                <div style=\"width: 10%; height: 100%;    display: flex;align-items: center;\">\r\n                  <div class=\"menu\" (click)=\"abreCombo()\">\r\n                    <div>\r\n                    </div>\r\n                    <div>\r\n                    </div>\r\n                    <div>\r\n                    </div>\r\n                    <section id=\"section\">\r\n                      <ul class=\"listaHamburguesa\">\r\n                        <li (click)=\"ordenamientoCliente()\">Alfabético (A-Z)</li>\r\n                        <li (click)=\"ordenamientoFechaTramNue()\">Trámites Más Nuevos</li>\r\n                        <li (click)=\"ordenamientoFechaTramAnt()\">Trámites Más Antiguos</li>\r\n                      </ul>\r\n                    </section>\r\n                  </div>\r\n                </div>\r\n               <div style=\"width: 38%; height: 100%;    display: flex;align-items: center;\">\r\n                 <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\r\n               </div>\r\n                <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n                  <div class=\"buscar\" style=\"padding-left: 236px;\">\r\n                    <div>\r\n                      <div class=\"lupa\">\r\n                        <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                      </div>\r\n                      <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Cliente, Producto\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Lista total-->\r\n            <div class=\"segundaSeccionList\">\r\n              <div style=\"width: 97%;\">\r\n                <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n                  <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                    <div class=\"dfSelect\"></div>\r\n                    <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(i, item)\">\r\n                      <div class=\"numeroIndex\">\r\n                        <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\r\n                      </div>\r\n                      <div class=\"informacionList\">\r\n                        <label>{{item.cliente}}</label>\r\n                        <span class=\"span\">{{item.sustancia}}</span>\r\n                        <h3> <span class=\"spanPeq\" style=\"color: #008894\">{{item.cpedido}} · <span class=\"spanPeq\">{{item.piezas}} piezas · Presentación: {{item.presentacion}}· {{item.monto}}</span></span></h3>\r\n                        <h3>FT: {{item.ft}}· FEE: {{item.fee}}</h3>\r\n                      </div>\r\n                      <div style=\"position: absolute; position: absolute; padding-top: 43px;right:0; width: 5%\">\r\n                        <img src=\"./assets/Images/FlechaDerVerde.svg\" class=\"imgFlecha\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"totales\">\r\n              <label># {{total}}</label>\r\n              <label>{{totPiezas}} Pzas.</label>\r\n              <label>Monto: {{montoTot}} </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"contenidoGrafica\">\r\n             <div class=\"grafica\" *ngIf=\"grafica\" style=\"padding-right: 10px;\">\r\n               <label class=\"tituloGrafica\">CLIENTES</label>\r\n               <pn-donut-chart *ngIf=\"clienteData\" [data]=\"dataCliente\" [tipoGrafica]=\"tipoGraficaCliente\" [height]=\"'auto'\"></pn-donut-chart>\r\n             </div>\r\n            <div  id=\"donaProducto\" class=\"grafica\" style=\"    padding-left: 10px;\">\r\n              <label class=\"tituloGrafica\">PRODUCTOS</label>\r\n              <pn-donut-chart *ngIf=\"ProductoData\" [idGrafica]=\"'producto'\" [data]=\"dataProducto\" [tipoGrafica]=\"tipoGraficaProducto\" [height]=\"'auto'\"> </pn-donut-chart>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <!--Terminan los componentes-->\r\n      <pn-vista-carga-documento *ngIf=\"vistaDocumento\" [datos]= \"datosProducto\" (vistaP)=\"regresarVistaP()\" (ActualizarvistaP)=\"recargarVista($event)\"></pn-vista-carga-documento>\r\n  </div>\r\n  <!--Termina area de trabajo-->\r\n    <div style=\"width: 100%;height: 50px\">\r\n      <footer class=\"footer\">\r\n        <div class=\"abreviaciones\">\r\n          <div class=\"Prioridad1\">\r\n            <label class=\"p1\">FEE: <span class=\"texto\"> Fecha Estimada de Entrega</span></label>\r\n          </div>\r\n          <div class=\"Prioridad2\">\r\n            <label class=\"p2\">P.U: <span class=\"texto\">Precio Unitario</span></label>\r\n          </div>\r\n\r\n        </div>\r\n      </footer>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{height:100%;width:100%;overflow:auto}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;border-bottom:2px solid #000}.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento}.img{cursor:pointer}.tituloGrafica{font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}.grafica{height:80%;width:70%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.grafica label{text-align:center}.contenidoGrafica{width:70%;background:#eceef0;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}.lista{width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst label{color:#008895;padding-left:-2px;font-family:\"Roboto-Bold\";font-size:28px}.lista>.divActive .datosLst p{font-family:\"Roboto-Bold\";font-size:24px;color:#000;line-height:26px}.lista>.divActive .datosLst h3{font-family:\"Roboto-regular\";font-size:21px}.textoPiezas{font-family:\"Roboto-regular\";font-size:21px}.titulo{padding-left:30px;font-family:Novecentowide;font-weight:Bold;font-size:24px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:249px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.footer{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.linea{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;text-align:center}.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px}.Prioridad1,.Prioridad2{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%;font-family:Roboto;font-weight:300}.p1{color:#424242;font-weight:bold}.p2{color:#424242;font-weight:bold}.p3{color:#424242;font-weight:bold}.datosC{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:1608px;margin-left:20px;margin-right:20px;width:98%}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:50%}.subtitulo{font-size:18px;font-family:Roboto;font-weight:300}.tituloLista{font-size:24px;font-family:Novecento;font-weight:bold}.numeroIndex{font-size:28px;font-family:Roboto-Regular;text-align:left;width:10%;padding-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px}.informacionList{font-family:Roboto;width:85%;padding-top:4px}.informacionList label{color:#008894;font-weight:bold;font-size:24px;font-family:Roboto;line-height:1}.informacionList h3{font-size:17px;font-family:Roboto;color:#424242;line-height:1.5;margin-top:4px}.imgFlecha{width:17.9px;height:27.4px}.listaProd{width:30%;background:#fff;height:100%;min-width:396px;padding-left:20px;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.infoLista{height:10%;padding-top:15px;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.totales{height:5%;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:distribute;justify-content:space-around;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:5px}.titulosLista{height:10%;padding-top:15px;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:15px;min-height:90px}.abreviaciones{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-top:2px solid #424242}.menu{position:relative}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:120px;overflow:auto;width:219px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}.segundaSeccionList{height:85%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid;width:95%;border-top:1px solid;overflow:auto}.tituloCliente{width:50%;height:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.cabeceraCliente{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:55%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;color:#008894;font-family:Roboto;font-weight:bold;font-size:28px;padding-right:19.2px}.span{min-height:23px;max-height:46px;font-weight:bold;font-size:20px;color:#424242;font-family:Roboto;overflow:hidden}@supports(-webkit-line-clamp: 2){.span{display:block;display:-webkit-box !important;line-height:1.1;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 2){.span{position:relative;line-height:1.1;overflow:hidden;width:100%}.span:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.spanPeq{font-size:17px;font-family:Roboto;color:#424242}@media all and (min-width: 1300px)and (max-width: 1509px){.informacionList>label{font-size:18px}.informacionList>.span{font-size:16px;min-height:17px;max-height:34px}.informacionList>h3{font-size:15px}.numeroIndex{font-size:22px}.cabeceraCliente{font-size:25px}.spanPeq>{font-size:15px}}.select{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;position:relative;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0}.texto{font-family:Roboto;font-weight:300}.agrupacion{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}"

/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsuntosRegulatoriosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_asuntos_regulatorios_asuntos_regulatorios_service__ = __webpack_require__("./src/app/services/asuntos-regulatorios/asuntos-regulatorios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
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






var AsuntosRegulatoriosComponent = /** @class */ (function () {
    function AsuntosRegulatoriosComponent(comunServe, _serviceAsuntos, coreComponent) {
        this.comunServe = comunServe;
        this._serviceAsuntos = _serviceAsuntos;
        this.coreComponent = coreComponent;
        this.classAsideMenu = 'asideNormalMenu';
        this.dataFacturacion = {
            titulo: 'Clientes',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
            valuesExtras: [6, 324, 157, 5000],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
        };
        this.dataFacturacion2 = {
            titulo: 'Productos',
            labels: ['Totales'],
            valores: [6],
            labelsExtras: [['clientes'], ['Ordenes de compra']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra'],
            valuesExtras: [6, 324],
            valuesExtrasHover: [[6, 3], [324, 157]]
        };
        this.lista = []; /*[] = [{ 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          {  'referencia':"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          { 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2},
          { 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6}];*/
        this.grafica = true;
        this.grafica1 = true;
        this.clientes = [];
        this.listaUniverso = [];
        this.validarLista = true;
        this.Vistafacturacion = true; /// VARIABLE PARA VISUALIZAR LA PRIMER VISTA DE FACTURACION
        this.precio = '$15,000.000';
        this.fecha = '12/Dic/2018';
        this.fecha2 = '12/Jun/2019';
        this.filtroProducto = [];
        this.filtroCliente = [];
        this.vistaPrincipal = true;
        this.quitarWith = true;
        this.datosProducto = [];
    }
    AsuntosRegulatoriosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.subs = this.comunServe.recargar.subscribe(function (data) {
            if (data === 'asuntosRegulatorios') {
                _this.searchTerm = '';
                _this.activeMenu = false;
                _this.getPendietesPAP(idUsuario);
            }
        });
        this.getPendietesPAP(idUsuario);
        /*for (let i: number = 0; i < this.lista.length; i++) {
          this.clientes.push(this.lista[i]);
        }*/
    };
    AsuntosRegulatoriosComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
            this.quitarWith = false;
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
            this.quitarWith = true;
        }
    };
    AsuntosRegulatoriosComponent.prototype.regresarVistaP = function () {
        this.cabeceraClient = '';
        this.vistaPrincipal = true;
        this.vistaDocumento = false;
    };
    AsuntosRegulatoriosComponent.prototype.seleccionarItem = function ($index, item) {
        // this.datosProducto = this.lista[$index];
        // this.cabeceraClient = this.lista[$index].cliente;
        this.datosProducto = item;
        this.cabeceraClient = item.cliente;
        this.vistaPrincipal = false;
        this.vistaDocumento = true;
        console.log('Soy clic -->', $index);
    };
    /// Funcion de buscar en facturacion
    AsuntosRegulatoriosComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            // this.ClientesSearched= this.clientesConsulta;
            this.lista = this.listaUniverso.slice();
        }
        else {
            this.listaUniverso.forEach(function (folio) {
                if (folio.cliente.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 || folio.sustancia.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        if (this.tipoOrden === 'Alfabético (A-Z)') {
            this.ordenamientoCliente();
        }
        else if (this.tipoOrden === 'Trámites Más Nuevos') {
            this.ordenamientoFechaTramNue();
        }
        else if (this.tipoOrden === 'Trámites Más Antiguos') {
            this.ordenamientoFechaTramAnt();
        }
    };
    AsuntosRegulatoriosComponent.prototype.getPendietesPAP = function (idUsuario) {
        var _this = this;
        this.lista = [];
        this.listaUniverso = [];
        this.totPiezas = 0;
        this.montoTot = 0;
        var montoTot = 0;
        this.coreComponent.openModal(0);
        this._serviceAsuntos.getPendietesPAP(idUsuario).subscribe(function (data) {
            var listaAux = data.current.lista;
            if (data.current.graficas.Productos !== undefined) {
                _this.graficas = data.current.graficas;
            }
            else {
                _this.graficas = [];
            }
            var presentacion;
            var monto = 0;
            var FT;
            var FEE;
            var FTAux;
            var FEEAux;
            var FtFormat;
            var precioUnit;
            for (var i = 0; i < listaAux.length; i++) {
                FTAux = listaAux[i].ftramite.split('-');
                FT = FTAux[0] + '/' + FTAux[1] + '/' + FTAux[2].split('T')[0];
                FtFormat = FTAux[0] + '-' + FTAux[1] + '-' + FTAux[2].split('T')[0];
                FTAux = _this.transform(FT);
                FEEAux = listaAux[i].fee.split('-');
                FEE = FEEAux[0] + '/' + FEEAux[1] + '/' + FEEAux[2].split('T')[0];
                FEEAux = _this.transform(FEE);
                presentacion = listaAux[i].cantidad + listaAux[i].unidad;
                // monto = new AccountingFormatMoney().transform(listaAux[i].monto);
                precioUnit = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(listaAux[i].precio);
                _this.lista.push({ cliente: listaAux[i].cliente, sustancia: listaAux[i].concepto, piezas: listaAux[i].piezas, presentacion: presentacion,
                    monto: listaAux[i].monto, ft: FTAux, fee: FEEAux, precioUnit: precioUnit, fechaOriginal: listaAux[i].ftramite,
                    idPPedido: listaAux[i].idPPedido, ftFormat: FtFormat, idPedido: listaAux[i].idPedido, cpedido: listaAux[i].cpedido });
                _this.listaUniverso.push({ cliente: listaAux[i].cliente, sustancia: listaAux[i].concepto, piezas: listaAux[i].piezas, presentacion: presentacion,
                    monto: listaAux[i].monto, ft: FTAux, fee: FEEAux, precioUnit: precioUnit, fechaOriginal: listaAux[i].ftramite,
                    idPPedido: listaAux[i].idPPedido, ftFormat: FtFormat, idPedido: listaAux[i].idPedido, cpedido: listaAux[i].cpedido });
                _this.totPiezas += listaAux[i].piezas;
                montoTot += listaAux[i].monto;
            }
            /* this.lista = [{cliente: 'Ber', cant: 2, ftFormat: '2001-02-12'},
               {cliente: 'arroz', cant: 4, ftFormat: '1998-12-01'}, {cliente: 'clt', cant: 4, ftFormat: '1998-12-15'}];
             console.log('Soy lista -->', this.lista);
             this.ordenamientoCliente();*/
            console.log('Soy lista -->', _this.lista);
            /****************************/
            for (var i = 0; i < _this.lista.length; i++) {
                _this.clientes.push(_this.lista[i]);
            }
            /**********************************/
            _this.montoTot = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(montoTot);
            _this.total = _this.lista.length;
            _this.iniciarMenu(_this.total);
            _this.llenarGraficas(_this.graficas);
            _this.coreComponent.closeModal(0);
        });
    };
    AsuntosRegulatoriosComponent.prototype.iniciarMenu = function (totProd) {
        this.itemsMenu = [
            { rol: 'ASISTENTE REGULATORIO', active: true, menu: [
                    { nombre: 'Gestionar Carga PAP', url: 'asuntosRegulatorios', tipo: 'valor', valor: totProd, select: true }
                ] }
        ];
        this.activeMenu = true;
    };
    AsuntosRegulatoriosComponent.prototype.ordenamientoCliente = function () {
        this.tipoOrden = 'Alfabético (A-Z)';
        this.lista.sort(function (a, b) {
            if (a.cliente.toLowerCase() > b.cliente.toLowerCase()) {
                return 1;
            }
            if (a.cliente.toLowerCase() < b.cliente.toLowerCase()) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    AsuntosRegulatoriosComponent.prototype.ordenamientoFechaTramNue = function () {
        this.tipoOrden = 'Trámites Más Nuevos';
        this.lista.sort(function (a, b) {
            if (a.ftFormat < b.ftFormat) {
                return 1;
            }
            if (a.ftFormat > b.ftFormat) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        var fecha1 = new Date();
        var fecha2 = new Date();
    };
    AsuntosRegulatoriosComponent.prototype.ordenamientoFechaTramAnt = function () {
        this.tipoOrden = 'Trámites Más Antiguos';
        this.lista.sort(function (a, b) {
            if (a.ftFormat > b.ftFormat) {
                return 1;
            }
            if (a.ftFormat < b.ftFormat) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    AsuntosRegulatoriosComponent.prototype.llenarGraficas = function (lista) {
        var _this = this;
        this.limpiarVariables();
        if (lista.Productos !== undefined) {
            setTimeout(function () {
                _this.ProductoData = false;
                _this.clienteData = false;
            }, 5);
            this.listaProductos = lista['Productos'];
            this.listaClientes = lista['Clientes'];
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
        }
        else {
            this.listaProductos = [];
            this.listaClientes = [];
            this.limpiarVariablesGrafica();
        }
    };
    AsuntosRegulatoriosComponent.prototype.limpiarVariables = function () {
        this.filtroProducto = [];
        this.filtroCliente = [];
        this.ProductoData = false;
        this.clienteData = false;
    };
    AsuntosRegulatoriosComponent.prototype.limpiarVariablesGrafica = function () {
        var _this = this;
        //////// Emìeza grafica productos //////
        var valoresP = [];
        var valoresProductos = [];
        if (this.listaProductos.length > 0) {
            for (var _i = 0, _a = this.listaProductos; _i < _a.length; _i++) {
                var nombre = _a[_i];
                this.filtroProducto.push(nombre.nombre);
                valoresProductos.push([0, 0]);
                valoresP.push(0);
            }
        }
        if (valoresP.length > 0) {
            this.dataProducto = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: valoresP,
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: valoresProductos,
            };
            this.dataProductoAux = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: valoresP,
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: valoresProductos,
            };
            this.tipoGraficaProducto = 'General';
        }
        else {
            this.dataProducto = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: [1],
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaProducto = 'Gris';
            setTimeout(function () {
                _this.ProductoData = true;
            }, 5);
        }
        //////// Emìeza grafica Cliente //////
        var valoresC = [];
        var valoresClientes = [];
        if (this.listaClientes.length > 0) {
            for (var _b = 0, _c = this.listaClientes; _b < _c.length; _b++) {
                var nombre = _c[_b];
                this.filtroCliente.push(nombre.nombre);
                valoresClientes.push([0, 0, 0]);
                valoresC.push(0);
            }
        }
        if (valoresC.length > 0) {
            this.dataCliente = {
                titulo: 'Totales',
                labels: this.filtroCliente,
                valores: valoresC,
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Productos', 'Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: valoresClientes,
            };
            this.dataClienteAux = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: valoresC,
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Productos', 'Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: valoresClientes,
            };
            this.tipoGraficaCliente = 'General';
        }
        else {
            this.dataCliente = {
                titulo: 'Totales',
                labels: this.filtroCliente,
                valores: [1],
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Productos', 'Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0, 0]],
            };
            setTimeout(function () {
                _this.tipoGraficaCliente = 'Gris';
                _this.clienteData = true;
            }, 5);
        }
    };
    AsuntosRegulatoriosComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.listaProductos; _i < _a.length; _i++) {
            var productos = _a[_i];
            this.llenarTotalesGraficas(this.dataProducto, productos, 'PRODUCTOS', this.dataProductoAux);
        }
        for (var _b = 0, _c = this.listaClientes; _b < _c.length; _b++) {
            var productos = _c[_b];
            this.llenarTotalesGraficas(this.dataCliente, productos, 'CLIENTES', this.dataClienteAux);
        }
    };
    AsuntosRegulatoriosComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida, totalAux) {
        var _this = this;
        switch (graficaElegida) {
            case 'PRODUCTOS':
                var valuesExtraAux = total.valuesExtras;
                var valuesExtrasHover = total.valuesExtrasHover;
                var posicion1 = this.filtroProducto.indexOf(elemento.nombre);
                total.valuesExtrasHover[posicion1][0] += elemento.totalPiezas;
                // total.valuesExtrasHover[posicion1][0] += elemento.totalProductos;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                totalAux.valuesExtras[2] += elemento.monto;
                total.valuesExtras[2] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[2]);
                total.valuesExtras[1] += elemento.totalPiezas; // Total de Partidas
                total.valuesExtras[0] += elemento.totalProductos; // Total de Productos
                total.valores[posicion1] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
                valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion1][1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion1][1]);
                setTimeout(function () {
                    _this.ProductoData = true;
                }, 5);
                break;
            case 'CLIENTES':
                valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicion2 = this.filtroCliente.indexOf(elemento.nombre);
                total.valuesExtrasHover[posicion2][1] += elemento.totalPiezas;
                total.valuesExtrasHover[posicion2][0] += elemento.totalProductos;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                totalAux.valuesExtras[2] += elemento.monto;
                total.valuesExtras[2] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[2]);
                total.valuesExtras[1] += elemento.totalPiezas; // Total de Partidas
                total.valuesExtras[0] += elemento.totalProductos; // Total de Productos
                total.valores[posicion2] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
                valuesExtrasHover[posicion2][2] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion2][2] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion2][2]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.clienteData = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    AsuntosRegulatoriosComponent.prototype.transform = function (dateToFormat) {
        if (dateToFormat == undefined || dateToFormat == null) {
            return "Pendiente";
        }
        var now = new Date();
        if (dateToFormat.length == 10) {
            now = new Date(dateToFormat);
        }
        else {
            now = new Date(dateToFormat);
        }
        var date;
        var mes = now.getMonth();
        var hora = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
        var minutos = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
        var hour = hora + ":" + minutos;
        switch (mes) {
            case 0:
                date = now.getDate() + '/Ene/' + now.getFullYear();
                break;
            case 1:
                date = now.getDate() + '/Feb/' + now.getFullYear();
                break;
            case 2:
                date = now.getDate() + '/Mar/' + now.getFullYear();
                break;
            case 3:
                date = now.getDate() + '/Abr/' + now.getFullYear();
                break;
            case 4:
                date = now.getDate() + '/May/' + now.getFullYear();
                break;
            case 5:
                date = now.getDate() + '/Jun/' + now.getFullYear();
                break;
            case 6:
                date = now.getDate() + '/Jul/' + now.getFullYear();
                break;
            case 7:
                date = now.getDate() + '/Ago/' + now.getFullYear();
                break;
            case 8:
                date = now.getDate() + '/Sep/' + now.getFullYear();
                break;
            case 9:
                date = now.getDate() + '/Oct/' + now.getFullYear();
                break;
            case 10:
                date = now.getDate() + '/Nov/' + now.getFullYear();
                break;
            case 11:
                date = now.getDate() + '/Dic/' + now.getFullYear();
                break;
            default:
                break;
        }
        return date;
    };
    /*****/
    AsuntosRegulatoriosComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    AsuntosRegulatoriosComponent.prototype.recargarVista = function (val) {
        if (val) {
            this.cabeceraClient = '';
            var idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
            this.getPendietesPAP(idUsuario);
            this.vistaPrincipal = true;
            this.vistaDocumento = false;
        }
    };
    AsuntosRegulatoriosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-asuntos-regulatorios',
            template: __webpack_require__("./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.html"),
            styles: [__webpack_require__("./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__services_asuntos_regulatorios_asuntos_regulatorios_service__["a" /* AsuntosRegulatoriosService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], AsuntosRegulatoriosComponent);
    return AsuntosRegulatoriosComponent;
}());



/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/asuntos-regulatorios.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsuntosRegulatoriosModule", function() { return AsuntosRegulatoriosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfacturacion_componentes_oredenes_de_compra_oredenes_de_compra_component__ = __webpack_require__("./src/app/components/interfacturacion/componentes/oredenes-de-compra/oredenes-de-compra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__asuntos_regulatorios_component__ = __webpack_require__("./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__asuntos_regulatorios_routing_module__ = __webpack_require__("./src/app/components/asuntos-regulatorios/asuntos-regulatorios-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vista_carga_documento_vista_carga_documento_component__ = __webpack_require__("./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_visor_pdf_visor_pdf_module__ = __webpack_require__("./src/app/components/shared/visor-pdf/visor-pdf.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AsuntosRegulatoriosModule = /** @class */ (function () {
    function AsuntosRegulatoriosModule() {
    }
    AsuntosRegulatoriosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__asuntos_regulatorios_routing_module__["a" /* AsuntosRegulatoriosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_visor_pdf_visor_pdf_module__["a" /* VisorPdfModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__asuntos_regulatorios_component__["a" /* AsuntosRegulatoriosComponent */],
                // MenuSeccionComponent,
                // DonutChartComponent,
                __WEBPACK_IMPORTED_MODULE_3__interfacturacion_componentes_oredenes_de_compra_oredenes_de_compra_component__["a" /* OredenesDeCompraComponent */],
                __WEBPACK_IMPORTED_MODULE_8__vista_carga_documento_vista_carga_documento_component__["a" /* VistaCargaDocumentoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__asuntos_regulatorios_component__["a" /* AsuntosRegulatoriosComponent */]
            ]
        })
    ], AsuntosRegulatoriosModule);
    return AsuntosRegulatoriosModule;
}());



/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaPrincipal\">\r\n  <div class=\"titulo\">\r\n    <label> PRODUCTO </label>\r\n  </div>\r\n  <div class=\"datos\">\r\n   <div class=\"infoProd\">\r\n     <div class=\"nombre\">\r\n       <label>{{nombreFabricante}} · <span>{{nombreProd}}</span></label>\r\n     </div>\r\n     <div class=\"nombre\">\r\n       <span style=\"font-size: 18px; font-weight: 400\"><label class=\"labelPeq\">{{cpedido}} · </label> {{piezas}} {{conceptoPiezas}}  · <label class=\"labelPeq\">Presentación {{presentacion}}</label> · Fecha Trámite {{fechaTramite}} </span>\r\n     </div>\r\n   </div>\r\n    <div class=\"fechas\">\r\n      <div style=\"width: 12%\">\r\n        <label>FEE</label>\r\n        <h1>{{fechaEntrega}}</h1>\r\n      </div>\r\n      <div style=\"width: 22%\">\r\n        <label>Tipo de Permiso:</label>\r\n        <div>\r\n          <pn-combo-flecha-verde [title]=\"'Seleccionar'\" [items]=\"tiposPermiso\" (valueDropList)=\"recibirTipo($event)\"></pn-combo-flecha-verde>\r\n        </div>\r\n      </div>\r\n      <div style=\"width: 19%\">\r\n        <label> No. Permiso de Adquisición</label>\r\n      <input #textAdquisicion (blur)=\"cambioAquisicion(textAdquisicion.value)\" value=\"{{permAdq}}\"  id=\"textAdquision\" type=\"text\"\r\n             style=\"width: 100%;height: 24px;max-width: 206px;\">\r\n      </div>\r\n      <div style=\"width: 16%\">\r\n        <label> Fecha de Permiso</label>\r\n        <pq-date-picker style=\"height: 21px\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event)\" [(date)]=\"date\" [color]=\"false\"></pq-date-picker>\r\n      </div>\r\n      <div style=\"width: 15%\">\r\n        <label> Fecha Vencimiento</label>\r\n        <h1>{{fechaVencimiento}}</h1>\r\n      </div>\r\n      <div style=\"width: 18%\">\r\n        <label> # de Acta de Liberación</label>\r\n        <h1>NA</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div  class=\"documento\">\r\n    <div style=\"width: 100%; height: 5%;min-height: 30px;\">\r\n      <label class=\"titulo2\">PERMISO DE ADQUISICIÓN</label>\r\n    </div>\r\n    <div class=\"cargaDoc\">\r\n      <input type=\"file\" class=\"carga\"  (change)=\"fileChange2($event)\" id=\"cargarDocumento\">\r\n      <label for=\"cargarDocumento\" style=\"display: flex\" *ngIf=\"primerCarga\" class=\"cargarDocumento\"><img src=\"./assets/Images/cargar_permiso.svg\" class=\"imgeArchivo\">\r\n        <p class=\"textoImagen\">CARGAR PERMISO DE ADQUISICIÓN EN PLAZA</p></label>\r\n      <div *ngIf=\"!primerCarga\" class=\"vistDoc\">\r\n      <div style=\"width: 100%;height: 95%; justify-content: center;display: flex\">\r\n        <div class=\"contentRefuse\" id=\"preview\" [innerHtml] = \"htmlToAdd\" [style.height]=\"'100%'\"\r\n             [style.overflow]=\"'auto'\">\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!primerCarga\" class=\"recargar\">\r\n        <label for=\"cargarDocumento\" style=\"display: flex\"><img src=\"./assets/Images/editar-pieza/cargar.svg\"></label>\r\n      </div>\r\n      </div>\r\n   </div>\r\n  </div>\r\n  <div class=\"btnDireccionPL\">\r\n    <div>\r\n      <a class=\"btnImprimir\" (click)=\"cambiarVista()\">CANCELAR</a>\r\n    </div>\r\n    <div>\r\n      <a class=\"btnImprimir\" (click)=\"finalizar()\" [style.pointer-events]=\"colorBoton?'auto':'none'\" [style.background]=\"colorBoton?'#4BA92B':'#D8D9DD'\">ACEPTAR</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.scss":
/***/ (function(module, exports) {

module.exports = ".areaPrincipal{height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:22px;padding-right:22px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:1431px;min-height:988px}.cargaDoc{width:100%;height:95%;background-color:#eceef0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.carga{display:none}.carga::-webkit-file-upload-button{opacity:0}.titulo{width:100%;height:5%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #424242;padding:5px;min-height:40px}.titulo label{font-family:novecento;font-weight:bold;font-size:24px;justify-items:center}.infoProd{height:100%;width:35%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;line-height:1.3;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:25px}.infoProd .nombre{width:100%;min-height:28px;max-height:56px;line-height:1.3;overflow:hidden}@supports(-webkit-line-clamp: 2){.infoProd .nombre{display:block;display:-webkit-box !important;line-height:1.1;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 2){.infoProd .nombre{position:relative;line-height:1.1;overflow:hidden;width:100%}.infoProd .nombre:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.infoProd .nombre label{color:#008894;font-family:Roboto;font-weight:bold;font-size:24px}.infoProd .nombre span{color:#424242}.infoProd .cantidadProd{line-height:1.3;width:100%;height:53%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.infoProd .cantidadProd span{color:#424242;font-size:18px;font-family:Roboto-Regular;display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:6px}.infoProd .cantidadProd h1{color:#008894;font-size:18px;font-family:Roboto-Regular}.fechas{height:100%;width:65%;display:-webkit-box;display:-ms-flexbox;display:flex}.fechas div{-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:20px}.fechas div label{font-family:Roboto-Regular;font-size:17px;color:#424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:6px}.datos{-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:10px;padding-top:10px;width:100%;min-height:10%;display:-webkit-box;display:-ms-flexbox;display:flex;min-height:90px}.btnDireccionPL{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:5%;padding-top:15px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;justify-items:center}.btnImprimir{width:170px;height:30px;background-color:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.titulo2{font-family:novecento;font-weight:bold;font-size:24px;justify-items:center}.recargar{width:100%;height:5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.contentRefuse{height:100%;overflow:auto;width:69%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.vistDoc{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:20px;padding-bottom:10px;padding-right:30px;padding-left:30px}.textoImagen{color:#d8d9dd;font-size:36px;text-align:center;position:relative;font-family:Novecento;font-weight:bold}.imgeArchivo{height:265px;width:204px;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;text-align:center}.cargarDocumento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;cursor:pointer}.documento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:10px;width:100%;height:80%}.labelPeq{font-size:18px !important;font-weight:400 !important}::ng-deep .dropListSelect{min-width:186px}::ng-deep .dropListSelect .container-drop .Title>p{font-size:15px !important}::ng-deep .dropList{min-width:186px}@media all and (min-width: 1300px)and (max-width: 1509px){.infoProd>.nombre>label{font-size:22px}.infoProd>.nombre{min-height:24px;max-height:48px}.infoProd>.cantidadProd{font-size:16px}.btnDireccionPL{padding-bottom:6px;padding-top:6px}}"

/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaCargaDocumentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_asuntos_regulatorios_asuntos_regulatorios_service__ = __webpack_require__("./src/app/services/asuntos-regulatorios/asuntos-regulatorios.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VistaCargaDocumentoComponent = /** @class */ (function () {
    function VistaCargaDocumentoComponent(_servicesAsuntos) {
        this._servicesAsuntos = _servicesAsuntos;
        this.vistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ActualizarvistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pdf = '';
        this.htmlToAdd = '';
        this.primerCarga = true;
        this.val = 1;
        this.date = new Date();
        this.fechaVenc = new Date();
        this.diasSum = 179;
        this.validar = 1;
        this.tiposPermiso = [
            { nombre: 'ESTUPEFACIENTE', key: 0 },
            { nombre: 'PRECURSOR QUÍMICO', KEY: 1 },
            { nombre: 'PSICOTRÓPICO', key: 2 }
        ];
    }
    VistaCargaDocumentoComponent.prototype.ngOnInit = function () {
    };
    VistaCargaDocumentoComponent.prototype.ngOnChanges = function () {
        // fechaEntregaAux = "01/01/2017";
        if (this.datos) {
            this.informacionProd = this.datos;
            this.nombreFabricante = this.informacionProd.cliente;
            this.nombreProd = this.informacionProd.sustancia;
            this.piezas = this.informacionProd.piezas;
            this.presentacion = this.informacionProd.presentacion;
            this.fechaTramite = this.informacionProd.ft;
            // fechaEntregaAux = this.informacionProd.ft;
            this.fechaEntrega = this.informacionProd.fee;
            this.precioUnit = this.informacionProd.precioUnit;
            this.total = this.informacionProd.monto;
            this.idPPedido = this.informacionProd.idPPedido;
            this.idPedido = this.informacionProd.idPedido;
            this.cpedido = this.informacionProd.cpedido;
            // const fechaVenc = new Date(this.informacionProd.ft);
            /*this.fechaVenc.setDate(fechaVenc.getDate() + (this.diasSum));
            this.fechaAux = this.fechaVenc.toDateString().split(' ');
            const fechaConv = this.fechaAux[2] + '/' +  this.fechaAux[1] + '/' +  this.fechaAux[3];
            this.fechaVencimiento = this.transform(fechaConv);*/
            console.log('Fecha vencimiento -->', this.fechaVenc);
            // fechaFinal.setDate(fechaInicial.getDate()+parseInt(intervalo));
            if (this.piezas === 1) {
                this.conceptoPiezas = 'Pieza';
            }
            else {
                this.conceptoPiezas = 'Piezas';
            }
            this.iniciarVista(this.informacionProd);
        }
    };
    VistaCargaDocumentoComponent.prototype.iniciarVista = function (informacion) {
    };
    VistaCargaDocumentoComponent.prototype.fileChange2 = function ($event) {
        if (this.val === 1) {
            this.primerCarga = false;
            this.val = 2;
        }
        console.log($event);
        this.file = $event.target.files;
        this.validarBtnAcep();
        this.mostrarDocumento(this.file);
    };
    VistaCargaDocumentoComponent.prototype.mostrarDocumento = function (fileInput) {
        /*const blob = new Blob([fileInput], {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(blob).split(':');
        this.url = fileURL[1] + ':' + fileURL[2] + ':' + fileURL[3];*/
        var doc = document.querySelector('#preview');
        var $img = document.querySelector('#preview');
        var reader = new FileReader();
        /*Validación para eliminar si ya existe un elemento*/
        if (document.querySelector('#preview')) {
            document.querySelector('#preview').children[0].remove();
        }
        /******************/
        reader.onload = function (e) {
            document.querySelector('#preview').insertAdjacentHTML('afterbegin', '<iframe id="pdf" src="' + e.target.result + '" width="100%" height="100%" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">');
        };
        reader.readAsDataURL(fileInput[0]);
    };
    VistaCargaDocumentoComponent.prototype.cambioAquisicion = function (texto) {
        this.permisoAdquisicion = texto;
        this.validarBtnAcep();
    };
    VistaCargaDocumentoComponent.prototype.recibeValosCombo = function () {
    };
    VistaCargaDocumentoComponent.prototype.getFechaImpl = function (fecha) {
        var anio = fecha.substr(0, 4);
        var mes = fecha.substr(4, 2);
        var dia = fecha.substr(6, 2);
        var fechaVenc = new Date();
        var fechaCam = mes + '/' + dia + '/' + anio;
        var fechaEvaluar = dia + '/' + mes + '/' + anio;
        var fechaVal = new Date(fechaCam);
        fechaVenc = new Date(fechaCam);
        console.log('Fecha a sumar --> ', fechaVal);
        this.fechaPermiso = fechaCam;
        fechaVenc.setDate(fechaVenc.getDate() + (this.diasSum)); // Debe colocarse la misma fecha
        console.log('Fecha nueva -->', fechaVenc);
        this.fechaAux = fechaVenc.toDateString().split(' ');
        var fechaConv = this.fechaAux[2] + '/' + this.fechaAux[1] + '/' + this.fechaAux[3];
        console.log('Fecha vencimiento -->', fechaConv);
        if (this.validar > 2) {
            this.fechaEnviar = this.transformNumber(fechaConv);
            this.fechaVencimiento = this.transform(fechaConv);
        }
        this.validar++;
        this.validarBtnAcep();
    };
    VistaCargaDocumentoComponent.prototype.transform = function (dateToFormat) {
        if (dateToFormat == undefined || dateToFormat == null) {
            return "Pendiente";
        }
        var now = new Date();
        if (dateToFormat.length == 10) {
            now = new Date(dateToFormat);
        }
        else {
            now = new Date(dateToFormat);
        }
        var date;
        var mes = now.getMonth();
        var hora = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
        var minutos = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
        var hour = hora + ":" + minutos;
        switch (mes) {
            case 0:
                date = now.getDate() + '/Ene/' + now.getFullYear();
                break;
            case 1:
                date = now.getDate() + '/Feb/' + now.getFullYear();
                break;
            case 2:
                date = now.getDate() + '/Mar/' + now.getFullYear();
                break;
            case 3:
                date = now.getDate() + '/Abr/' + now.getFullYear();
                break;
            case 4:
                date = now.getDate() + '/May/' + now.getFullYear();
                break;
            case 5:
                date = now.getDate() + '/Jun/' + now.getFullYear();
                break;
            case 6:
                date = now.getDate() + '/Jul/' + now.getFullYear();
                break;
            case 7:
                date = now.getDate() + '/Ago/' + now.getFullYear();
                break;
            case 8:
                date = now.getDate() + '/Sep/' + now.getFullYear();
                break;
            case 9:
                date = now.getDate() + '/Oct/' + now.getFullYear();
                break;
            case 10:
                date = now.getDate() + '/Nov/' + now.getFullYear();
                break;
            case 11:
                date = now.getDate() + '/Dic/' + now.getFullYear();
                break;
            default:
                break;
        }
        return date;
    };
    VistaCargaDocumentoComponent.prototype.cambiarVista = function () {
        this.vistaP.emit(true);
    };
    VistaCargaDocumentoComponent.prototype.recibirTipo = function ($event) {
        this.tipoP = $event.nombre;
    };
    VistaCargaDocumentoComponent.prototype.validarBtnAcep = function () {
        if (this.fechaEntrega && this.permisoAdquisicion && this.file && this.permisoAdquisicion !== ' ' && this.tipoP !== null && this.tipoP !== undefined && this.tipoP !== 'Seleccionar') {
            this.colorBoton = true;
        }
        else {
            this.colorBoton = false;
        }
    };
    VistaCargaDocumentoComponent.prototype.finalizar = function () {
        var _this = this;
        var idProducto;
        var fechaP = this.fechaPermiso.split('/');
        var fechaPermiso = fechaP[2] + '-' + fechaP[0] + '-' + fechaP[1];
        var datos = {
            idPPedido: this.idPPedido,
            idPedido: this.idPedido,
            noPermisoAdquisicion: this.permisoAdquisicion,
            fechaPermiso: fechaPermiso,
            fechaVencimiento: this.fechaEnviar,
            actaLiberacion: 'NA',
            tipoPermiso: this.tipoP
        };
        this._servicesAsuntos.cerrarPendietesPAP(datos).subscribe(function (data) {
            if (data.current !== 0) {
                idProducto = data.current;
                _this.guardarArchivo(idProducto);
            }
        });
    };
    VistaCargaDocumentoComponent.prototype.guardarArchivo = function (idProducto) {
        var _this = this;
        this._servicesAsuntos.uploadFile(this.file, idProducto, 'ProductoPAP', '').subscribe(function (data) {
            _this.ActualizarvistaP.emit(true);
        });
    };
    VistaCargaDocumentoComponent.prototype.transformNumber = function (dateToFormat) {
        if (dateToFormat == undefined || dateToFormat == null) {
            return "Pendiente";
        }
        var now = new Date();
        if (dateToFormat.length == 10) {
            now = new Date(dateToFormat);
        }
        else {
            now = new Date(dateToFormat);
        }
        var dia = now.getDate().toString();
        console.log('Dia-->', dia);
        if (dia.length > 1) {
        }
        else {
            dia = 0 + dia;
        }
        var date;
        var mes = now.getMonth();
        var hora = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
        var minutos = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
        var hour = hora + ":" + minutos;
        switch (mes) {
            case 0:
                date = now.getFullYear() + '-01-' + dia;
                break;
            case 1:
                date = now.getFullYear() + '-02-' + dia;
                break;
            case 2:
                date = now.getFullYear() + '-03-' + dia;
                break;
            case 3:
                date = now.getFullYear() + '-04-' + dia;
                break;
            case 4:
                date = now.getFullYear() + '-05-' + dia;
                break;
            case 5:
                date = now.getFullYear() + '-06-' + dia;
                break;
            case 6:
                date = now.getFullYear() + '-07-' + dia;
                break;
            case 7:
                date = now.getFullYear() + '-08-' + dia;
                break;
            case 8:
                date = now.getFullYear() + '-09-' + dia;
                break;
            case 9:
                date = now.getFullYear() + '-10-' + dia;
                break;
            case 10:
                date = now.getFullYear() + '-11-' + dia;
                break;
            case 11:
                date = now.getFullYear() + '-12-' + dia;
                break;
            default:
                break;
        }
        return date;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaCargaDocumentoComponent.prototype, "datos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaCargaDocumentoComponent.prototype, "vistaP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaCargaDocumentoComponent.prototype, "ActualizarvistaP", void 0);
    VistaCargaDocumentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-carga-documento',
            template: __webpack_require__("./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.html"),
            styles: [__webpack_require__("./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_asuntos_regulatorios_asuntos_regulatorios_service__["a" /* AsuntosRegulatoriosService */]])
    ], VistaCargaDocumentoComponent);
    return VistaCargaDocumentoComponent;
}());



/***/ })

});
//# sourceMappingURL=asuntos-regulatorios.module.chunk.js.map