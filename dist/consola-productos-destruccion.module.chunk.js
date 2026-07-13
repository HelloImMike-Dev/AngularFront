webpackJsonp(["consola-productos-destruccion.module"],{

/***/ "./src/app/components/consola-productos-destruccion/consola-productos-destruccion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaProductosDestruccionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consola_productos_destruccion_component__ = __webpack_require__("./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConsolaProductosDestruccionRoutingModule = /** @class */ (function () {
    function ConsolaProductosDestruccionRoutingModule() {
    }
    ConsolaProductosDestruccionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__consola_productos_destruccion_component__["a" /* ConsolaProductosDestruccionComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ConsolaProductosDestruccionRoutingModule);
    return ConsolaProductosDestruccionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"   [titulo]=\"'RESPONSABLE DE SURTIDO'\" style=\"width: 100%;\" *ngIf=\"activar\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"area\">\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div>\r\n        <label class=\"etiqueta\">MATERIAL EN DESTRUCCIÓN</label>\r\n      </div>\r\n    </div>\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\r\n      <div class=\"areaPrincipal\" *ngIf=\"dispobliesParts\">\r\n        <div class=\"areaInformativa\">\r\n          <label>MATERIALES</label>\r\n        </div>\r\n        <div class=\"informacionLista\">\r\n          <div class=\"filtros\">\r\n            <div class=\"filtering\">\r\n              <div>\r\n                <label>Marcas</label>\r\n                <pn-drop-list-search [title]=\"'Seleccionar'\" [valImg]=\"'flechaRellena'\" [items]=\"marcas\" *ngIf=\"activeMarca\" [subtitleActive]=\"false\" (valueDropList)=\"filtrar($event, 'Marca')\" style=\"display: flex;align-items: center\"></pn-drop-list-search>\r\n              </div>\r\n              <div>\r\n                <label>Control</label>\r\n                <pn-combo-flecha-rellena [title]=\"'Seleccionar'\" [valImg]=\"'flechaRellena'\" [items]=\"control\" [subtitleActive]=\"false\" (valueDropList)=\"filtrar($event, 'Control')\"></pn-combo-flecha-rellena>\r\n              </div>\r\n              <div>\r\n                <label>Manejo</label>\r\n                <pn-combo-flecha-rellena [title]=\"'Seleccionar'\" [valImg]=\"'flechaRellena'\" [items]=\"tipoManejo\" [subtitleActive]=\"false\"  (valueDropList)=\"filtrar($event, 'Manejo')\"></pn-combo-flecha-rellena>\r\n              </div>\r\n            </div>\r\n            <div class=\"barraBusqueda\">\r\n              <div class=\"buscar\">\r\n                <div>\r\n                  <div class=\"lupa\">\r\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                  </div>\r\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Descripción, Catálogo\" />\r\n                  <div class=\"lupa\" (click)=\"buscar('')\" style=\"cursor: pointer;\">\r\n                    <img src=\"assets/Images/cerrar.svg\"  height=\"12px\" alt=\"buscar\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"contentList\">\r\n            <div class=\"vistaLista\">\r\n              <header>\r\n                <div class=\"imagenesDiv\">\r\n                  <pq-check-gris-palomita-verde style=\"width:25px;height:25px;\" [check]=\"activeCheck\" (event)=\"completeSelected($event)\"></pq-check-gris-palomita-verde>\r\n                </div>\r\n                <div class=\"imagenesDiv\" style=\"min-width: 29px;max-width: 29px\">\r\n                </div>\r\n                <div  class=\"imagenesDiv\" style=\"max-width: 27px\">\r\n                  <label>#</label>\r\n                </div>\r\n                <div>\r\n                  <label>Marca</label>\r\n                </div>\r\n                <div>\r\n                  <label>Catálogo</label>\r\n                </div>\r\n                <div style=\"width: 18%\">\r\n                  <label>Descripción</label>\r\n                </div>\r\n                <div>\r\n                  <label>Justificacion</label>\r\n                </div>\r\n                <div>\r\n                  <label>Control</label>\r\n                </div>\r\n                <div style=\"width: 8%\">\r\n                  <label>Tipo</label>\r\n                </div>\r\n                <div>\r\n                  <label style=\"text-align: center;\">Etiqueta</label>\r\n                </div>\r\n                <div>\r\n                  <label style=\"text-align: center;\">Lote</label>\r\n                </div>\r\n                <div>\r\n                  <label style=\"text-align: center;\">P.U</label>\r\n                </div>\r\n              </header>\r\n              <div style=\"height: 91%;width: 100%;overflow: auto;\">\r\n                <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n                  <div  *ngFor=\"let item of lista; let i = index\" style=\"display: flex;flex-direction:column;width: 100%;position: relative;\">\r\n                    <div [ngClass]=\"item.activePart? 'divActive': 'div'\">\r\n                      <div class=\"dfSelect\"></div>\r\n                      <div class=\"datosLst\">\r\n                        <div class=\"imagenesDiv\">\r\n                          <pq-check-gris-palomita-verde style=\"width:25px;height:25px;\" [check]=\"item.active\" (event)=\"selectedItem($event, item)\"></pq-check-gris-palomita-verde>\r\n                        </div>\r\n                        <div class=\"imagenesDiv\" style=\"max-width: 29px;min-width: 29px\">\r\n                          <img class=\"imgEstado\" src=\"./assets/Images/congelacion.svg\" *ngIf=\"item.manejoTransporte.toLowerCase() === 'congelación'\">\r\n                          <img class=\"imgEstado\" src=\"./assets/Images/refrigeracion.svg\" *ngIf=\"item.manejoTransporte.toLowerCase() === 'refrigeración'\">\r\n                          <img clas=\"imgEstado\" src=\"./assets/Images/ambiente.svg\" *ngIf=\"item.manejoTransporte.toLowerCase() === 'ambiente'\">\r\n                        </div>\r\n                        <div class=\"imagenesDiv\" style=\"max-width: 27px\">\r\n                          <span>{{i + 1}}</span>\r\n                        </div>\r\n                        <div>\r\n                          <label>{{item.fabrica}}</label>\r\n                        </div>\r\n                        <div>\r\n                          <span>{{item.codigo}}</span>\r\n                        </div>\r\n                        <div style=\"width: 18%\">\r\n                          <label>{{item.descripcion}}</label>\r\n                        </div>\r\n                        <div>\r\n                          <span>{{item.contacto}}</span>\r\n                        </div>\r\n                        <div>\r\n                          <label>{{item.control}}</label>\r\n                        </div>\r\n                        <div style=\"width: 8%\">\r\n                          <span>{{item.tipo}}</span>\r\n                        </div>\r\n                        <div>\r\n                          <label>{{item.etiqueta}}</label>\r\n                        </div>\r\n                        <div>\r\n                          <span>{{item.puesto}}</span>\r\n                        </div>\r\n                        <div>\r\n                          <span *ngIf=\"item.ruta === 'Dolares'\">{{item.monto | currency: 'USD'}} USD</span>\r\n                          <span *ngIf=\"item.ruta === 'Pesos'\">{{item.monto | acFormatMoney}} MXN</span>\r\n                          <span *ngIf=\"item.ruta === 'Libras'\">{{item.monto | acFormatMoney}} lbs</span>\r\n                          <span *ngIf=\"item.ruta === 'Euros'\">{{item.monto | currency: '€'}} EUR</span>\r\n                          <span *ngIf=\"item.ruta === 'DlCan'\">{{item.monto | acFormatMoney}} CAD</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!--Termina Lista partidas-->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"scoredPieces\">\r\n              <div>\r\n                <label># {{lista.length}} Piezas</label>\r\n              </div>\r\n              <div>\r\n                <div class=\"dvBoton\" (click)=\"enviarDestruccion()\" [style.background]=\"listaEnviar.length > 0 ? '#008894':'#C2C3C9'\" [style.pointerEvents]=\"listaEnviar.length > 0?'auto':'none'\">\r\n                  <label>ENVIAR A DESTRUCCIÓN</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"sinDatos\" *ngIf=\"!dispobliesParts\">\r\n        <label>SIN PARTIDAS DISPONIBLES</label>\r\n      </div>\r\n    </div>\r\n    <!--Terminan los componentes-->\r\n    <footer class=\"footer\">\r\n      <div class=\"datosFooter\">\r\n        <div class=\"Prioridad1\">\r\n          <img class=\"img\" src='./assets/Images/congelacion.svg' />\r\n          <span>Congelación</span>\r\n        </div>\r\n        <div class=\"Prioridad1\">\r\n          <img class=\"img\" src='./assets/Images/refrigeracion.svg' />\r\n          <span>Refrigeración</span>\r\n        </div>\r\n        <div class=\"Prioridad1\">\r\n          <img class=\"img\" src='./assets/Images/ambiente.svg' />\r\n          <span>Ambiente</span>\r\n        </div>\r\n        <div class=\"Prioridad1\">\r\n          <label class=\"p1\">PU: </label> Precio Unitario\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>\r\n<pn-pop-up-destruccioon (emitDatas)=\"cerrarPop($event)\" *ngIf=\"activePop\" [lista]=\"listaEnviar\"></pn-pop-up-destruccioon>\r\n"

/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.alertProgramados{width:13% !important;-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important;-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important;-webkit-box-align:initial !important;-ms-flex-align:initial !important;align-items:initial !important}.imgAlert{padding-right:5px}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{width:100%;height:100%;overflow:auto}.vistaLista{height:calc(100% - 70px);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:10px}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;padding-right:13px;border-bottom:2px solid #000;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cabezera>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cabezera>div>.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento;margin-bottom:5px;font-weight:normal}.areaPrincipal{min-width:1175px;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 20px 0px 20px}.informacionLista{width:100%;height:calc(100% - 60px)}.informacionLista>.filtros{height:10%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.informacionLista>.filtros>div{width:50%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.areaInformativa{height:60px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.areaInformativa>label{font-family:Novecento;font-weight:bold;font-size:24px;color:#424242}.footer{overflow:auto;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;-webkit-box-sizing:border-box;box-sizing:border-box}.footer>.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px}.footer>.datosFooter>.Prioridad1{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.footer>.datosFooter>.Prioridad1>.p1{color:#424242;font-weight:bold;margin-right:6px;font-size:14px}.footer>.datosFooter>.Prioridad1>.img{margin-right:6px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:50px;width:100%;border-style:solid;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:70%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40% !important}.imagenesDiv{min-width:25px;max-width:25px;width:initial !important}header{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;height:9%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #242424;padding-right:10px;padding-left:10px}header>div{width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}header>div>label{font-family:Roboto;font-weight:bold;font-size:15px;color:#424242;text-align:left}.lista{width:100%;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista div>.div{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #eceef0}.lista div>.div .datosLst:hover{background-color:#eceef0}.lista div>.div .datosLst{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:5px 10px 5px 10px;display:-webkit-box;display:-ms-flexbox;display:flex}.lista div>.div .datosLst>div{width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;padding-left:5px}.lista div>.div .datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:center}.lista div>.div .datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;text-align:center}.lista div>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista div>.divActive{border-bottom:1px solid #eceef0;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#eceef0;width:100%}.lista div>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista div>.divActive>.datosLst{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:5px 10px 5px 5px;display:-webkit-box;display:-ms-flexbox;display:flex}.lista div>.divActive>.datosLst>div{-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;padding-left:5px;width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lista div>.divActive>.datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:center}.lista div>.divActive>.datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;text-align:center}.scoredPieces{width:100%;height:69px;display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.scoredPieces>div{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.scoredPieces>div>label{font-family:Roboto;font-weight:400;font-size:14px;color:#424242}.scoredPieces>div>.dvBoton{display:-webkit-box;display:-ms-flexbox;display:flex;width:305px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#008894;cursor:pointer}.scoredPieces>div>.dvBoton>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.filtering{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:30px}.filtering>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.filtering>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;padding-right:5px}.sinDatos{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sinDatos>label{color:#d8d9dd;font-family:Novecento;font-weight:bold;font-size:50px;text-align:center;width:100%}.contentList{width:100%;height:90%}::ng-deep .list{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media all and (min-width: 1300px)and (max-width: 1861px){.buscar>div{width:50%}}"

/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaProductosDestruccionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_consola_destruccion_material_destruccion_service__ = __webpack_require__("./src/app/services/consola-destruccion/material-destruccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_gestor_producto_reclamo_producto_reclamo_service__ = __webpack_require__("./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConsolaProductosDestruccionComponent = /** @class */ (function () {
    function ConsolaProductosDestruccionComponent(_serviceConsole, core, _insp, comunService, _serviceReclamo) {
        this._serviceConsole = _serviceConsole;
        this.core = core;
        this._insp = _insp;
        this.comunService = comunService;
        this._serviceReclamo = _serviceReclamo;
        this.listaEnviar = [];
        this.control = [{ nombre: 'Todos', key: 0 },
            { nombre: 'Normal', key: 1 },
            { nombre: 'Origen', key: 2 },
            { nombre: 'Mundiales', key: 3 },
            { nombre: 'Nacionales', key: 4 }];
        this.tipoManejo = [{ nombre: 'Todos', key: 0 },
            { nombre: 'Ambiente', key: 1 },
            { nombre: 'Refrigeración', key: 2 },
            { nombre: 'Congelación', key: 3 }];
    }
    ConsolaProductosDestruccionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classAsideMenu = 'asideNormalMenu';
        this.roles = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        this.usuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'consolaDest') {
                _this.obtenerDatos();
            }
        });
        this.obtenerDatos();
    };
    ConsolaProductosDestruccionComponent.prototype.obtenerValoresMenu = function (idUsuario) {
        var _this = this;
        this.core.openModal(1);
        this._serviceReclamo.obtenerTotales(idUsuario).subscribe(function (data) {
            console.log(data);
            _this.itemsMenu = [
                { rol: 'GESTOR DE COMPRAS', active: false, menu: [
                        { nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', select: false, tipo: 'valor', valor: data.current.ArriboDocumentos },
                        { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: false },
                        {
                            nombre: 'Cargar Saldo a Favor',
                            tipo: '',
                            valor: 0,
                            url: 'poolVisitas',
                            disable: true,
                            subMenu: [
                                { nombre: 'Nota de Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false },
                                { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                            ],
                            select: false
                        }
                    ] },
                { rol: 'GESTOR DE OPERACIONES', active: true,
                    menu: [{ nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: false, tipo: 'flecha' },
                        { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                        { nombre: 'Material en Stock', url: 'stock', select: false },
                        { nombre: 'Material en Destrucción', url: 'consolaDest', select: true }] }
            ];
            _this.activar = true;
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    ConsolaProductosDestruccionComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    ConsolaProductosDestruccionComponent.prototype.obtenerDatos = function () {
        var _this = this;
        this.activeCheck = false;
        this.marcas = [];
        this.filtroMarca = '';
        this.filtroManejo = '';
        this.filtroControl = '';
        this.activeMarca = false;
        this.activar = false;
        this.obtenerTotales();
        this.core.openModal(1);
        this._serviceConsole.obtenerListado().subscribe(function (data) {
            if (data.current.Todas !== null && data.current.Todas.length > 0) {
                _this.lista = data.current.Todas;
                _this.listaUniverso = data.current.Todas;
                _this.dispobliesParts = true;
                var marcas = data.current.Marcas;
                _this.marcas.push({ nombre: 'Todos', key: 0 });
                for (var i = 0; i < marcas.length; i++) {
                    _this.marcas.push({ nombre: marcas[i].fabrica, key: i + 1 });
                }
                _this.activeMarca = true;
            }
            else {
                _this.dispobliesParts = false;
            }
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    ConsolaProductosDestruccionComponent.prototype.obtenerTotales = function () {
        for (var i = 0; i < this.roles.length; i++) {
            if (this.roles[i] === 'Comprador_Master') {
                this.rolMaster = true;
            }
        }
        if (this.rolMaster) {
            this.obtenerValoresMenu(this.usuario);
        }
        else {
            this.itemsMenu = [{ rol: 'GESTOR DE OPERACIONES', active: true,
                    menu: [{ nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: false },
                        { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                        { nombre: 'Material en Stock', url: 'stock', select: false },
                        { nombre: 'Material en Destrucción', url: 'consolaDest', select: true }
                    ] }];
            this.activar = true;
        }
    };
    ConsolaProductosDestruccionComponent.prototype.buscar = function (search) {
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            if (this.filtroManejo !== '' || this.filtroMarca !== '' || this.filtroControl !== '') {
                this.lista = this.listaFiltros.slice();
            }
            else {
                this.lista = this.listaUniverso.slice();
            }
        }
        else {
            if (this.filtroManejo !== '' || this.filtroMarca !== '' || this.filtroControl !== '') {
                if (this.listaFiltros.length > 0) {
                    for (var i = 0; i < this.listaFiltros.length; i++) {
                        if (this.listaFiltros[i].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaFiltros[i].descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaFiltros[i]);
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < this.listaUniverso.length; i++) {
                    if (this.listaUniverso[i].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaUniverso[i].descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                        searchArrayAux.push(this.listaUniverso[i]);
                    }
                }
            }
            this.lista = searchArrayAux;
        }
    };
    ConsolaProductosDestruccionComponent.prototype.filtrar = function (valores, tipo) {
        var _this = this;
        var lista;
        var listaAux;
        if (valores.nombre !== 'Todos') {
            if (tipo === 'Marca') {
                lista = this.listaUniverso.filter(function (item) { return item.fabrica.toLowerCase() === valores.nombre.toLowerCase(); });
                if (this.filtroControl !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    lista = listaAux.filter(function (item) { return item.control.toLowerCase() === _this.filtroControl.toLowerCase(); });
                }
                if (this.filtroManejo !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    lista = listaAux.filter(function (item) { return item.manejoTransporte.toLowerCase() === _this.filtroManejo.toLowerCase(); });
                }
                this.filtroMarca = valores.nombre;
            }
            else if (tipo === 'Control') {
                lista = this.listaUniverso.filter(function (item) { return item.control.toLowerCase() === valores.nombre.toLowerCase(); });
                if (this.filtroMarca !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    lista = listaAux.filter(function (item) { return item.fabrica.toLowerCase() === _this.filtroMarca.toLowerCase(); });
                }
                if (this.filtroManejo !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    console.log(listaAux.filter(function (item) { return item.manejoTransporte.toLowerCase() === _this.filtroManejo.toLowerCase(); }));
                    lista = listaAux.filter(function (item) { return item.manejoTransporte.toLowerCase() === _this.filtroManejo.toLowerCase(); });
                }
                this.filtroControl = valores.nombre;
            }
            else if (tipo === 'Manejo') {
                lista = this.listaUniverso.filter(function (item) { return item.manejoTransporte.toLowerCase() === valores.nombre.toLowerCase(); });
                this.filtroManejo = valores.nombre;
                if (this.filtroMarca !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    lista = listaAux.filter(function (item) { return item.fabrica.toLowerCase() === _this.filtroMarca.toLowerCase(); });
                }
                if (this.filtroControl !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    lista = listaAux.filter(function (item) { return item.control.toLowerCase() === _this.filtroControl.toLowerCase(); });
                }
            }
        }
        else {
            if (tipo === 'Marca') {
                this.filtroMarca = '';
            }
            else if (tipo === 'Manejo') {
                this.filtroManejo = '';
            }
            else if (tipo === 'Control') {
                this.filtroControl = '';
            }
            lista = this.listaUniverso.slice();
            if (this.filtroControl !== '') {
                listaAux = lista.slice();
                lista = listaAux.filter(function (item) { return item.control.toLowerCase() === _this.filtroControl.toLowerCase(); });
            }
            if (this.filtroManejo !== '' && lista.length > 0) {
                listaAux = lista.slice();
                lista = listaAux.filter(function (item) { return item.manejoTransporte.toLowerCase() === _this.filtroManejo.toLowerCase(); });
            }
            if (this.filtroMarca !== '' && lista.length > 0) {
                listaAux = lista.slice();
                lista = listaAux.filter(function (item) { return item.fabrica.toLowerCase() === _this.filtroMarca.toLowerCase(); });
            }
        }
        this.lista = lista;
        this.searchTerm = '';
        this.listaFiltros = lista.slice();
    };
    ConsolaProductosDestruccionComponent.prototype.enviarDestruccion = function () {
        this.activePop = true;
    };
    ConsolaProductosDestruccionComponent.prototype.cerrarPop = function (datas) {
        this.activePop = false;
        if (datas.valor) {
            this.cerrarPendiente(datas.archivo);
        }
    };
    ConsolaProductosDestruccionComponent.prototype.selectedItem = function (event, items) {
        items.active = event;
        this.validateCheck();
    };
    ConsolaProductosDestruccionComponent.prototype.validateCheck = function () {
        var lista = [];
        lista = this.lista.filter(function (item) { return item.active === true; });
        this.listaEnviar = lista.slice();
    };
    ConsolaProductosDestruccionComponent.prototype.cerrarPendiente = function (archivo) {
        var _this = this;
        this.core.openModal(1);
        this._serviceConsole.enviarDestruccion(this.listaEnviar).subscribe(function (data) {
            if (data.current !== null) {
                _this.enviarArchivo(archivo, data.current + '.pdf');
            }
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    ConsolaProductosDestruccionComponent.prototype.enviarArchivo = function (archivo, nameFile) {
        var _this = this;
        this.core.openModal(1);
        this._serviceConsole.uploadFile(archivo, nameFile, 'Productos_Destruccion', '1').subscribe(function (data) {
            _this.core.closeModal(1);
            _this.obtenerDatos();
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    ConsolaProductosDestruccionComponent.prototype.completeSelected = function (valor) {
        for (var i = 0; i < this.lista.length; i++) {
            this.lista[i].active = valor;
        }
        this.activeCheck = valor;
        this.validateCheck();
    };
    ConsolaProductosDestruccionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-consola-productos-destruccion',
            template: __webpack_require__("./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.html"),
            styles: [__webpack_require__("./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_consola_destruccion_material_destruccion_service__["a" /* MaterialDestruccionService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__["a" /* InspeccionService */], __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_6__services_gestor_producto_reclamo_producto_reclamo_service__["a" /* ProductoReclamoService */]])
    ], ConsolaProductosDestruccionComponent);
    return ConsolaProductosDestruccionComponent;
}());



/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/consola-productos-destruccion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolaProductosDestruccionModule", function() { return ConsolaProductosDestruccionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consola_productos_destruccion_component__ = __webpack_require__("./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__consola_productos_destruccion_routing_module__ = __webpack_require__("./src/app/components/consola-productos-destruccion/consola-productos-destruccion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_search_drop_list_search_module__ = __webpack_require__("./src/app/components/shared/drop-list-search/drop-list-search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_rellena_combo_flecha_rellena_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-rellena/combo-flecha-rellena.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_check_gris_palomita_verde_check_gris_palomita_verde_module__ = __webpack_require__("./src/app/components/shared/check-gris-palomita-verde/check-gris-palomita-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pop_up_destruccioon_pop_up_destruccioon_component__ = __webpack_require__("./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ConsolaProductosDestruccionModule = /** @class */ (function () {
    function ConsolaProductosDestruccionModule() {
    }
    ConsolaProductosDestruccionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__consola_productos_destruccion_routing_module__["a" /* ConsolaProductosDestruccionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_search_drop_list_search_module__["a" /* DropListSearchModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_rellena_combo_flecha_rellena_module__["a" /* ComboFlechaRellenaModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_check_gris_palomita_verde_check_gris_palomita_verde_module__["a" /* CheckGrisPalomitaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_file_upload_file_upload_module__["a" /* FileUploadModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__consola_productos_destruccion_component__["a" /* ConsolaProductosDestruccionComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__consola_productos_destruccion_component__["a" /* ConsolaProductosDestruccionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pop_up_destruccioon_pop_up_destruccioon_component__["a" /* PopUpDestruccioonComponent */]
            ]
        })
    ], ConsolaProductosDestruccionModule);
    return ConsolaProductosDestruccionModule;
}());



/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\r\n\r\n  <div id=\"id01\" class=\"modal\" #pop>\r\n    <div class=\"modal-content\">\r\n      <header class=\"header\">\r\n        <h1> ENVIAR A DESTRUCCIÓN  </h1>\r\n      </header>\r\n      <div class=\"contenido\">\r\n        <div class=\"total\">\r\n          <div class=\"material\">\r\n            <label># MATERIALES</label>\r\n          </div>\r\n          <div class=\"piezas\">\r\n            <div style=\"height: 95%;width: 100%;overflow: auto;\">\r\n              <div class= \"lista\">\r\n                <div  *ngFor=\"let item of lista; let i = index\" style=\"display: flex;flex-direction:column;width: 100%;position: relative;\">\r\n                  <div [ngClass]=\"item.activePart? 'divActive': 'div'\">\r\n                    <div class=\"dfSelect\"></div>\r\n                    <div class=\"datosLst\">\r\n                      <label>#{{i +1}} {{item.fabrica}} · {{item.codigo}}\r\n                      <span style=\"font-weight: bold\"> · {{item.contacto}} ·\r\n                        <span style=\"font-weight: 400\"> {{item.descripcion}}</span>\r\n                      </span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <!--Termina Lista partidas-->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"uploadDoc\">\r\n          <div>\r\n            <pq-file-upload class=\"centerFile\" (enviarDocumento)=\"recibirDoc($event)\"></pq-file-upload>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <footer class=\"footer2\" *ngIf=\"activarBoton\">\r\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar(false)\" >\r\n          <label> CANCELAR </label>\r\n        </a>\r\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar(true)\" [style.background]=\"activeBtn? '#008894': '#C2C3C9'\">\r\n          <label> ACEPTAR </label>\r\n        </a>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal{z-index:11;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(238,238,238,.8);font-family:\"Roboto\",sans-serif}.modal-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:auto;text-align:center;background-color:#fff;position:relative;padding:0;outline:0;width:795px;height:675px;color:#424242;border-radius:25px;font-family:\"Roboto\";font-size:20px;border:1px solid #008a98}.header{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch;height:52px;background-color:#008894;border-radius:24px 24px 0px 0px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.header h1{top:20px;color:#fff;font-size:25px;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-weight:bold}.contenido{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:stretch;align-self:stretch;width:100%;height:534px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;color:#424242}.footer2{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch;height:85px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:20px;padding-left:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btnOk{width:170px;height:30px;background-color:#008a98;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.btnOk>label{font-family:\"Roboto\";font-size:21px;font-weight:bold;color:#fff;padding-top:1.8%;cursor:pointer}.datos{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40%;padding-bottom:10%;-webkit-box-sizing:border-box;box-sizing:border-box}.alerta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.alerta img.alert{width:100%;height:100%}.alertaTxt{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:18px;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;align-self:auto}.alertaTxt p{font-family:\"Roboto\";font-size:25px;color:#424242;padding-top:25px}.total{height:444px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:20px;padding-left:20px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.total>.material{width:100%;height:65px;border-bottom:1px solid #242424;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.total>.material>label{font-family:Novecento;font-weight:bold;font-size:22px;color:#008894}.total>.piezas{width:100%;height:378px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:10px;padding-bottom:10px}.uploadDoc{width:100%;height:90px;background-color:rgba(0,136,148,.05);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploadDoc>div{width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lista{width:100%;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;display:unset;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.lista div>.div{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #eceef0}.lista div>.div .datosLst{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:5px 10px 5px 10px;display:-webkit-box;display:-ms-flexbox;display:flex;width:10%;display:flex}.lista div>.div .datosLst>label{font-family:Roboto;font-weight:bold;font-size:16px;color:#008894}.lista div>.div .datosLst>label>span{font-family:Roboto;font-weight:400;font-size:16px;color:#424242}.lista div>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista div>.divActive{border-bottom:1px solid #eceef0;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#eceef0;width:100%}.lista div>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista div>.divActive>.datosLst{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:5px 10px 5px 5px;display:-webkit-box;display:-ms-flexbox;display:flex}.lista div>.divActive>.datosLst>div{-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;padding-left:5px;width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lista div>.divActive>.datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:center}.lista div>.divActive>.datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;text-align:center}.centerFile{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sinDatos{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sinDatos>label{color:#d8d9dd;font-family:Novecento;font-weight:bold;font-size:50px;text-align:center;width:100%}"

/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpDestruccioonComponent; });
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

var PopUpDestruccioonComponent = /** @class */ (function () {
    function PopUpDestruccioonComponent() {
        this.emitDatas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpDestruccioonComponent.prototype.ngOnInit = function () {
        this.activarBoton = true;
    };
    PopUpDestruccioonComponent.prototype.cerrar = function (val) {
        var obj = {
            valor: val,
            archivo: this.archivo
        };
        this.emitDatas.emit(obj);
    };
    PopUpDestruccioonComponent.prototype.recibirDoc = function (archivo) {
        if (archivo !== undefined && archivo != null) {
            this.archivo = archivo;
            this.activeBtn = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpDestruccioonComponent.prototype, "emitDatas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpDestruccioonComponent.prototype, "lista", void 0);
    PopUpDestruccioonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-destruccioon',
            template: __webpack_require__("./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.html"),
            styles: [__webpack_require__("./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpDestruccioonComponent);
    return PopUpDestruccioonComponent;
}());



/***/ })

});
//# sourceMappingURL=consola-productos-destruccion.module.chunk.js.map