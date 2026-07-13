webpackJsonp(["saldo-nota-credito.module"],{

/***/ "./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaldoNotaCreditoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saldo_nota_credito_component__ = __webpack_require__("./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SaldoNotaCreditoRoutingModule = /** @class */ (function () {
    function SaldoNotaCreditoRoutingModule() {
    }
    SaldoNotaCreditoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__saldo_nota_credito_component__["a" /* SaldoNotaCreditoComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], SaldoNotaCreditoRoutingModule);
    return SaldoNotaCreditoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\" [titulo]=\"'Direccion Operaciones'\"  style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <!--Empieza el area de trabajo-->\r\n  <div class=\"area\">\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div>\r\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaP\" (click)=\"regresarVistaP(true)\">\r\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\r\n        </div>\r\n        <label class=\"etiqueta\">NOTAS DE CRÉDITO</label>\r\n      </div>\r\n    </div>\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\" *ngIf=\"vistaP\">\r\n      <div class=\"areaPrincipal\" *ngIf=\"vistaP\">\r\n        <div class=\"vistaGeneral\">\r\n          <div class=\"areaInformativa\">\r\n            <label>EMPRESAS</label>\r\n          </div>\r\n          <div class=\"botonera\">\r\n            <pn-botonera [lista]=\"listaEmpresas\" *ngIf=\"activeBotonera\" style=\"width: 100%;height: 100%\" (event)=\"seleccionarLista($event)\" [selectedPos]=\"selectItem\"></pn-botonera>\r\n          </div>\r\n        </div>\r\n        <div class=\"informacionLista\">\r\n          <div class=\"filtros\">\r\n            <div>\r\n              <div class=\"menu\" id=\"menuOrden\" (click)=\"abreCombo()\">\r\n                <div id=\"menuOrden1\">\r\n                </div>\r\n                <div id=\"menuOrden2\">\r\n                </div>\r\n                <div id=\"menuOrden3\">\r\n                </div>\r\n                <section id=\"section\">\r\n                  <ul class=\"listaHamburguesa\">\r\n                    <li (click)=\"ordenamientoFechaTramNue()\">Más Nuevas</li>\r\n                    <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguas</li>\r\n                  </ul>\r\n                </section>\r\n              </div>\r\n              <label id=\"menuOrdenLabel\">{{tipoOrden}}</label>\r\n            </div>\r\n            <div class=\"select\">\r\n              <label>Proveedor</label>\r\n              <pn-combo-flecha-rellena [title]=\"'Seleccionar'\"  valImg=\"flechaRellena\" style=\"display: flex;align-items: center;max-width: 233px;\" [items]=\"proveedores\" *ngIf=\"activeCombos\" [subtitleActive]=\"false\" (valueDropList)=\"filtrarEmpresa($event)\" [colorPrincipal]=\"'#424242'\"></pn-combo-flecha-rellena>\r\n            </div>\r\n            <div class=\"barraBusqueda\">\r\n              <div class=\"buscar\">\r\n                <div>\r\n                  <div class=\"lupa\">\r\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                  </div>\r\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Folio, serie\" />\r\n                  <div class=\"lupa\" (click)=\"buscar('')\" style=\"cursor: pointer;\">\r\n                    <img src=\"assets/Images/cerrar.svg\"  height=\"12px\" alt=\"buscar\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"vistaLista\">\r\n            <header>\r\n              <div  class=\"imagenesDiv\" style=\"max-width: 27px\">\r\n                <label>#</label>\r\n              </div>\r\n              <div>\r\n                <label>Empresa</label>\r\n              </div>\r\n              <div style=\"width: 20%\">\r\n                <label>Proveedor</label>\r\n              </div>\r\n              <div>\r\n                <label>Fecha</label>\r\n              </div>\r\n              <div>\r\n                <label>Folio Documento</label>\r\n              </div>\r\n              <div>\r\n                <label>Serie CFDI</label>\r\n              </div>\r\n              <div style=\"width: 13%\">\r\n                <label>Monto</label>\r\n              </div>\r\n              <div class=\"imagenesDiv\"></div>\r\n            </header>\r\n            <div style=\"height: 95%;width: 100%;overflow: auto;\">\r\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n                <div  *ngFor=\"let item of lista; let i = index\" style=\"display: flex;flex-direction:column;width: 100%;position: relative;\">\r\n                  <div [ngClass]=\"item.activePart? 'divActive': 'div'\">\r\n                    <div class=\"dfSelect\"></div>\r\n                    <div class=\"datosLst\">\r\n                      <div class=\"imagenesDiv\" style=\"max-width: 27px\">\r\n                        <label>{{i + 1}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <span>{{item.empresa.alias}}</span>\r\n                      </div>\r\n                      <div style=\"width: 20%\">\r\n                        <label>{{item.proveedor.nombre}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <span style=\"text-transform: capitalize\">{{item.ffechaDocto}}</span>\r\n                      </div>\r\n                      <div>\r\n                        <label (click)=\"openBrowser(item)\" class=\"linkPdf\">{{item.folio}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <span *ngIf=\"item.serie !== null && item.serie !== ''\">{{item.serie}}</span>\r\n                        <span *ngIf=\"item.serie === null || item.serie === ''\">No Aplica</span>\r\n                      </div>\r\n                      <div>\r\n                        <label *ngIf=\"item.moneda === 'Dolares'\">{{item.monto | currency: 'USD'}} USD</label>\r\n                        <label *ngIf=\"item.moneda === 'Pesos'\">{{item.monto | acFormatMoney}} MXN</label>\r\n                        <label *ngIf=\"item.moneda === 'Libras'\">{{item.monto | acFormatMoney}} lbs</label>\r\n                        <label *ngIf=\"item.moneda === 'Euros'\">{{item.monto | currency: '€'}} </label>\r\n                        <label *ngIf=\"item.moneda === 'DlCan'\">{{item.monto | acFormatMoney}} CAD</label>\r\n                      </div>\r\n                      <div class=\"imagenesDiv\" (click)=\"eliminarSaldo(item)\">\r\n                        <div class=\"tooltip\">\r\n                          <img src=\"./assets/Images/eliminar.svg\">\r\n                          <span class=\"tooltiptext\">Eliminar</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!--Empieza Lista partidas-->\r\n                  <!--Termina Lista partidas-->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 65px)'}\" *ngIf=\"!vistaP\">\r\n      <pn-generar-saldo *ngIf=\"!vistaP\" class=\"generar\" [tipoSaldo]=\"false\" (regresarVista)=\"regresarVistaP($event)\"></pn-generar-saldo>\r\n    </div>\r\n    <!--Terminan los componentes-->\r\n    <footer class=\"footer\" *ngIf=\"vistaP\">\r\n      <div class=\"datosFooter\">\r\n        <div class=\"dvBoton\" (click)=\"abrirNuevo()\">\r\n          <label>Agregar</label>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>\r\n<pn-pop-up-saldos *ngIf=\"eliminar\" [alertaTxt]=\"mensaje\" [folio]=\"folio\" [activarBoton]=\"true\" (emit)=\"recibirValor($event)\"></pn-pop-up-saldos>\r\n"

/***/ }),

/***/ "./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.aux{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;background:#e6e6e6}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{width:100%;height:100%;overflow:auto}.vistaLista{height:90%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:10px}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;padding-right:13px;border-bottom:2px solid #000;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cabezera>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cabezera>div>.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento;margin-bottom:5px;font-weight:normal}.areaPrincipal{min-width:1175px;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 20px 20px 20px}.footer{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;-webkit-box-sizing:border-box;box-sizing:border-box}.footer>.datosFooter{padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px}.footer>.datosFooter>.dvBoton{display:-webkit-box;display:-ms-flexbox;display:flex;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#008a98;cursor:pointer}.footer>.datosFooter>.dvBoton>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.generar{width:100%;height:100%}.vistaGeneral{width:100%;height:115px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vistaGeneral>.areaInformativa{height:60px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.vistaGeneral>.areaInformativa>label{font-family:Novecento;font-weight:bold;font-size:24px;color:#424242}.vistaGeneral>.botonera{height:55px;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.lista{width:100%;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista div>.div{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #eceef0}.lista div>.div .datosLst:hover{background-color:#eceef0}.lista div>.div .datosLst{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:5px 10px 5px 10px;display:-webkit-box;display:-ms-flexbox;display:flex}.lista div>.div .datosLst>div{width:15%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;padding-left:5px}.lista div>.div .datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:center}.lista div>.div .datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;text-align:center}.lista div>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista div>.divActive{border-bottom:1px solid #eceef0;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#eceef0;width:100%}.lista div>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista div>.divActive>.datosLst{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:5px 10px 5px 5px;display:-webkit-box;display:-ms-flexbox;display:flex}.lista div>.divActive>.datosLst>div{-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;padding-left:5px;width:15%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lista div>.divActive>.datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:center}.lista div>.divActive>.datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;text-align:center}.imagenesDiv{min-width:25px;max-width:25px;width:initial !important;cursor:pointer}.filtros{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex}.listaPart{width:100%;font-size:20px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;border-bottom:1px solid #d4d4d5;border-top:1px solid #d4d4d5}.listaPart>.listaPartidas{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;position:relative;border-bottom:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:40px;padding-right:40px}.listaPart>.listaPartidas>.datosLst{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:10px 0px 10px 0px;display:-webkit-box;display:-ms-flexbox;display:flex}.listaPart>.listaPartidas>.datosLst>div{width:15%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.listaPart>.listaPartidas>.datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left;padding-left:5px}.listaPart>.listaPartidas>.datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;line-height:1.5}.textLimite{font-size:14px !important}.partidas{height:100%;background-color:#f8f8f9;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 40px 20px 40px}.imgEstado{padding-left:5px;height:17.5px;vertical-align:text-top}.labelData{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left}.spanData{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;padding-left:5px}.sinDatos{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sinDatos>label{color:#d8d9dd;font-family:Novecento;font-weight:bold;font-size:50px;text-align:center;width:100%}.informacionLista{width:100%;height:calc(100% - 115px)}.informacionLista>.filtros{height:10%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around}.informacionLista>.filtros>div{width:20%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.select{width:60% !important}.select>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left;padding-right:10px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:50px;width:100%;border-style:solid;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:90%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:20% !important}.menu{position:relative;z-index:4}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}.filtrosOrden{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:74px;overflow:auto;width:137px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}header{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;height:5%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #242424;padding-right:10px;padding-left:10px}header>div{width:15%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;padding-left:5px}header>div>label{font-family:Roboto;font-weight:bold;font-size:15px;color:#424242;text-align:left}.headerPart{border-bottom:initial !important;padding-left:40px !important;padding-right:40px !important}.headerPart>div{-webkit-box-pack:initial !important;-ms-flex-pack:initial !important;justify-content:initial !important}.headerPart>div>label{color:#848387 !important;font-weight:normal !important}::ng-deep .list{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tooltip{position:relative;cursor:pointer}.tooltip>.tooltiptext:before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #424242;bottom:-6px;content:\"\";height:0;left:50%;margin-left:-6px;position:absolute;width:0}.tooltip>.tooltiptext{width:103px;background-color:#424242;color:#fff;display:none;position:absolute;top:-31px;right:-49px;font-size:12px;font-family:Roboto;padding:5px;z-index:1;text-align:center}.tooltip:hover>.tooltiptext{display:block;opacity:1}.linkPdf:hover{text-decoration:underline;color:#008894 !important;cursor:pointer}"

/***/ }),

/***/ "./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaldoNotaCreditoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_saldos_notas_saldos_favor_service__ = __webpack_require__("./src/app/services/saldos-notas/saldos-favor.service.ts");
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






var SaldoNotaCreditoComponent = /** @class */ (function () {
    function SaldoNotaCreditoComponent(core, _trabajarArribo, _serviceSaldo, comun) {
        this.core = core;
        this._trabajarArribo = _trabajarArribo;
        this._serviceSaldo = _serviceSaldo;
        this.comun = comun;
        this.listaEmpresas = [];
        this.selectItem = 0;
        this.listaFiltrado = [];
    }
    SaldoNotaCreditoComponent.prototype.ngOnInit = function () {
        this.obtenerDatos();
    };
    SaldoNotaCreditoComponent.prototype.obtenerDatos = function () {
        this.tipoOrden = 'Todos';
        this.activeCombos = false;
        this.activeMenu = false;
        this.vistaP = true;
        this.classAsideMenu = 'asideNormalMenu';
        this.usuario = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.obtenerValoresMenu(this.usuario);
        this.obetenerEmpresas();
    };
    SaldoNotaCreditoComponent.prototype.obtenerValoresMenu = function (idUsuario) {
        var _this = this;
        this.rolMaster = false;
        var roles = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        this.core.openModal(1);
        this._trabajarArribo.obtenerTotales(idUsuario).subscribe(function (data) {
            for (var i = 0; i < roles.length; i++) {
                if (roles[i] === 'Comprador_Master') {
                    _this.rolMaster = true;
                }
            }
            console.log(data);
            if (_this.usuario === 'LRosas') {
                _this.itemsMenu = [
                    { rol: 'GESTOR DE COMPRAS', active: true, menu: [{ nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', disable: true, tipo: 'valor', valor: data.current.ArriboDocumentos, select: false },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota de Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: true },
                                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }] },
                    { rol: 'GESTOR DE OPERACIONES', active: false, menu: [
                            { nombre: 'Consola de Prioridades', url: 'consolaPrioridades', tipo: 'flecha' },
                            { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                            { nombre: 'Material en Stock', url: 'stock', select: false },
                            { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }
                        ] }
                ];
            }
            else {
                _this.itemsMenu = [
                    { rol: 'GESTOR DE COMPRAS', active: true, menu: [
                            { nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', tipo: 'valor', valor: data.current.ArriboDocumentos, select: false },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota de Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: true },
                                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }
                        ] }
                ];
            }
            _this.activeMenu = true;
            _this.core.closeModal(1);
        }, function (error) {
        });
    };
    SaldoNotaCreditoComponent.prototype.obetenerEmpresas = function () {
        var _this = this;
        this.activeBotonera = false;
        var obj = {
            tipo: 'Nota'
        };
        this.listaEmpresas = [];
        this.proveedores = [];
        this.core.openModal(1);
        this._serviceSaldo.obtenerLista(obj).subscribe(function (data) {
            var title;
            var listaProvee;
            var botonera = data.current['BARRAS'];
            if (data.current.TODAS !== null && data.current.TODAS !== undefined && data.current.TODAS.length > 0) {
                _this.listaUniverso = data.current.TODAS;
                _this.lista = data.current.TODAS;
                _this.listas = data.current;
                listaProvee = data.current.PROVEEDORES;
                _this.proveedores.push({ nombre: 'TODOS', key: 0 });
                for (var i = 0; i < listaProvee.length; i++) {
                    _this.proveedores.push({ nombre: listaProvee[i].proveedor.nombre, key: i + 1 });
                }
                _this.activeCombos = true;
                _this.ordenamientoFechaTramNue();
            }
            for (var i = 0; i < botonera.length; i++) {
                if (botonera[i].total > 1) {
                    title = 'Notas';
                }
                else {
                    title = 'Nota';
                }
                _this.listaEmpresas.push({ nombre: botonera[i].etiqueta, total: botonera[i].total, etiquetaTotal: title, pos: i });
            }
            _this.activeBotonera = true;
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    SaldoNotaCreditoComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    SaldoNotaCreditoComponent.prototype.abrirNuevo = function () {
        this.vistaP = false;
    };
    SaldoNotaCreditoComponent.prototype.regresarVistaP = function (valor) {
        this.vistaP = true;
        if (!valor) {
            this.obtenerDatos();
        }
        // this.seleccionarLista(0);
    };
    SaldoNotaCreditoComponent.prototype.seleccionarLista = function (tipo) {
        this.searchTerm = '';
        this.selectItem = tipo.pos;
        this.lista = this.listas[tipo.nombre];
        this.listaUniverso = this.listas[tipo.nombre];
        if (this.tipoFiltrado !== undefined && this.tipoFiltrado !== 'TODOS') {
            var obj = {
                nombre: this.tipoFiltrado
            };
            this.filtrarEmpresa(obj);
        }
        else {
            if (this.tipoOrden === 'Más Antiguas') {
                this.ordenamientoFechaTramAnt();
            }
            else if (this.tipoOrden === 'Más Nuevas') {
                this.ordenamientoFechaTramNue();
            }
        }
    };
    /*****/
    SaldoNotaCreditoComponent.prototype.abreCombo = function () {
        if (document.getElementById('section').className === 'visible') {
            document.getElementById('section').className = '';
        }
        else {
            document.getElementById('section').className = 'visible';
        }
    };
    SaldoNotaCreditoComponent.prototype.buscar = function (search) {
        var searchArrayAux = [];
        this.searchTerm = search;
        if (this.tipoFiltrado !== undefined && this.tipoFiltrado !== null && this.tipoFiltrado !== 'Seleccionar') {
            if (search === '') {
                this.lista = this.listaFiltrado.slice();
            }
            else {
                for (var i = 0; i < this.listaFiltrado.length; i++) {
                    if (this.listaFiltrado[i].serie !== null) {
                        if (this.listaFiltrado[i].folio.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaFiltrado[i].serie.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaFiltrado[i]);
                        }
                    }
                    else {
                        if (this.listaFiltrado[i].folio.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaFiltrado[i]);
                        }
                    }
                }
                this.lista = searchArrayAux;
            }
        }
        else {
            if (search === '') {
                this.lista = this.listaUniverso.slice();
            }
            else {
                for (var i = 0; i < this.listaUniverso.length; i++) {
                    if (this.listaUniverso[i].serie !== null) {
                        if (this.listaUniverso[i].folio.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaUniverso[i].serie.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaUniverso[i]);
                        }
                    }
                    else {
                        if (this.listaUniverso[i].folio.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaUniverso[i]);
                        }
                    }
                }
                this.lista = searchArrayAux;
            }
        }
    };
    SaldoNotaCreditoComponent.prototype.ordenamientoFechaTramNue = function () {
        this.tipoOrden = 'Más Nuevas';
        this.lista.sort(function (a, b) {
            if (a.ordenarFecha < b.ordenarFecha) {
                return 1;
            }
            if (a.ordenarFecha > b.ordenarFecha) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    SaldoNotaCreditoComponent.prototype.ordenamientoFechaTramAnt = function () {
        this.tipoOrden = 'Más Antiguas';
        this.lista.sort(function (a, b) {
            if (a.ordenarFecha > b.ordenarFecha) {
                return 1;
            }
            if (a.ordenarFecha < b.ordenarFecha) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    SaldoNotaCreditoComponent.prototype.filtrarEmpresa = function (valores) {
        var lista;
        if (valores.nombre !== 'TODOS') {
            lista = this.listaUniverso.filter(function (item) { return item.proveedor.nombre.toLowerCase() === valores.nombre.toLowerCase(); });
        }
        else {
            lista = this.listaUniverso.slice();
        }
        this.lista = lista;
        this.listaFiltrado = lista;
        this.tipoFiltrado = valores.nombre;
        this.searchTerm = '';
        if (this.tipoOrden === 'Más Antiguas') {
            this.ordenamientoFechaTramAnt();
        }
        else if (this.tipoOrden === 'Más Nuevas') {
            this.ordenamientoFechaTramNue();
        }
    };
    SaldoNotaCreditoComponent.prototype.eliminarSaldo = function (item) {
        this.mensaje = '¿ Seguro que desea eliminar la nota de crédito con';
        this.folio = 'Folio ' + item.folioDocto + '?';
        this.eliminar = true;
        this.itemSelect = item;
    };
    SaldoNotaCreditoComponent.prototype.recibirValor = function (event) {
        var _this = this;
        this.eliminar = false;
        var datas = {
            idSaldo: this.itemSelect.idSaldo,
            habilitado: false
        };
        if (event) {
            this._serviceSaldo.eliminarSaldo(datas).subscribe(function (data) {
                if (data.current) {
                    _this.obtenerDatos();
                }
            });
        }
    };
    SaldoNotaCreditoComponent.prototype.openBrowser = function (item) {
        console.log('Entre ');
        var shell = electron.shell;
        this.comun.obtenerRuta(item.folioDocto, 'Saldo', '').then(function (data) {
            shell.openExternal(data);
        });
    };
    SaldoNotaCreditoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-saldo-nota-credito',
            template: __webpack_require__("./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.html"),
            styles: [__webpack_require__("./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */], __WEBPACK_IMPORTED_MODULE_4__services_saldos_notas_saldos_favor_service__["a" /* SaldosFavorService */], __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */]])
    ], SaldoNotaCreditoComponent);
    return SaldoNotaCreditoComponent;
}());



/***/ }),

/***/ "./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaldoNotaCreditoModule", function() { return SaldoNotaCreditoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saldo_nota_credito_component__ = __webpack_require__("./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__saldo_nota_credito_routing_module__ = __webpack_require__("./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pop_up_saldos_pop_up_saldos_module__ = __webpack_require__("./src/app/components/saldo-favor/pop-up-saldos/pop-up-saldos-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__saldos_generar_saldo_generar_saldo_module__ = __webpack_require__("./src/app/components/saldo-favor/saldos/generar-saldo/generar-saldo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_combo_flecha_rellena_combo_flecha_rellena_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-rellena/combo-flecha-rellena.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_botonera_botonera_module__ = __webpack_require__("./src/app/components/shared/botonera/botonera.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SaldoNotaCreditoModule = /** @class */ (function () {
    function SaldoNotaCreditoModule() {
    }
    SaldoNotaCreditoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__saldo_nota_credito_routing_module__["a" /* SaldoNotaCreditoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__pop_up_saldos_pop_up_saldos_module__["a" /* PopUpSaldosModule */],
                __WEBPACK_IMPORTED_MODULE_6__saldos_generar_saldo_generar_saldo_module__["a" /* GenerarSaldoModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_combo_flecha_rellena_combo_flecha_rellena_module__["a" /* ComboFlechaRellenaModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_botonera_botonera_module__["a" /* BotoneraModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_accounting_accounting_module__["a" /* PipeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__saldo_nota_credito_component__["a" /* SaldoNotaCreditoComponent */]
            ]
        })
    ], SaldoNotaCreditoModule);
    return SaldoNotaCreditoModule;
}());



/***/ })

});
//# sourceMappingURL=saldo-nota-credito.module.chunk.js.map