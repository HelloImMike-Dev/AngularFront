webpackJsonp(["consola-envios.module"],{

/***/ "./src/app/components/consola-envios/consola-envios-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaEnviosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consola_envios_component__ = __webpack_require__("./src/app/components/consola-envios/consola-envios.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConsolaEnviosRoutingModule = /** @class */ (function () {
    function ConsolaEnviosRoutingModule() {
    }
    ConsolaEnviosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__consola_envios_component__["a" /* ConsolaEnviosComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ConsolaEnviosRoutingModule);
    return ConsolaEnviosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/consola-envios/consola-envios.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\" [titulo]=\"'Direccion Operaciones'\"  style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <!--Empieza el area de trabajo-->\r\n  <div class=\"area\">\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div>\r\n        <label class=\"etiqueta\">CONSOLA DE ENVÍOS</label>\r\n      </div>\r\n    </div>\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\r\n      <div class=\"areaPrincipal\" *ngIf=\"partHabilidatas\">\r\n        <div class=\"informacionLista\">\r\n          <div class=\"filtros\">\r\n            <div>\r\n              <div class=\"menu\" id=\"menuOrden\" (click)=\"abreCombo()\">\r\n                <div id=\"menuOrden1\">\r\n                </div>\r\n                <div id=\"menuOrden2\">\r\n                </div>\r\n                <div id=\"menuOrden3\">\r\n                </div>\r\n                <section id=\"section\">\r\n                  <ul class=\"listaHamburguesa\">\r\n                    <li (click)=\"ordenamiento('En Pausa')\">En Pausa</li>\r\n                    <li (click)=\"ordenamiento('Por Sistema')\">Por Enviar</li>\r\n                  </ul>\r\n                </section>\r\n              </div>\r\n              <label id=\"menuOrdenLabel\">{{tipoOrden}}</label>\r\n            </div>\r\n            <div class=\"barraBusqueda\">\r\n              <div class=\"buscar\">\r\n                <div>\r\n                  <div class=\"lupa\">\r\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                  </div>\r\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Cliente, Contacto, Packing List\" />\r\n                  <div class=\"lupa\" (click)=\"buscar('')\" style=\"cursor: pointer;\">\r\n                    <img src=\"assets/Images/cerrar.svg\"  height=\"12px\" alt=\"buscar\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"vistaLista\">\r\n            <header>\r\n              <div  class=\"imagenesDiv\" style=\"max-width: 27px\">\r\n                <label>#</label>\r\n              </div>\r\n              <div class=\"imagenesDiv\" style=\"min-width: 60px\"></div>\r\n              <div style=\"width: 5%\">\r\n                <label>#Prioridad</label>\r\n              </div>\r\n              <div>\r\n                <label>Cliente</label>\r\n              </div>\r\n              <div style=\"width: 20%\">\r\n                <label>Zona</label>\r\n              </div>\r\n              <div style=\"width: 15%\">\r\n                <label>Contacto</label>\r\n              </div>\r\n              <div style=\"width: 13%\">\r\n                <label>FEE</label>\r\n              </div>\r\n              <div>\r\n                <label>Días Restantes</label>\r\n              </div>\r\n              <div></div>\r\n              <div></div>\r\n              <div class=\"imagenesDiv\"></div>\r\n            </header>\r\n            <div style=\"height: 95%;width: 100%;overflow: auto;\">\r\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n                <div  *ngFor=\"let item of lista; let i = index\" style=\"display: flex;flex-direction:column;width: 100%;position: relative;\">\r\n                  <div [ngClass]=\"item.activePart? 'divActive': 'div'\">\r\n                    <div class=\"dfSelect\"></div>\r\n                    <div class=\"datosLst\">\r\n                      <div class=\"imagenesDiv\" style=\"max-width: 27px\">\r\n                        <label>{{i + 1}}</label>\r\n                      </div>\r\n                      <div class=\"imagenesDiv\" style=\"min-width: 60px\">\r\n                        <div class=\"tooltip\" *ngIf=\"item.urgencia === 0\">\r\n                          <img src=\"./assets/Images/pausar.svg\" *ngIf=\"item.urgencia === 0\" (click)=\"cambiarStatus(item, 1)\" height=\"15px\">\r\n                          <span class=\"tooltiptext\" *ngIf=\"item.urgencia === 0\"> Pausar Envío</span>\r\n                        </div>\r\n                        <div class=\"tooltip\"  *ngIf=\"item.urgencia !== 0\">\r\n                          <img src=\"./assets/Images/reanudar.svg\" *ngIf=\"item.urgencia !== 0\" (click)=\"cambiarStatus(item, 0)\" height=\"15px\">\r\n                          <span class=\"tooltiptext\" *ngIf=\"item.urgencia\"> Reanudar Envío</span>\r\n                        </div>\r\n                      </div>\r\n                      <div style=\"width: 5%\">\r\n                        <label>{{item.indicePrioridad}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <label>{{item.cliente}}</label>\r\n                      </div>\r\n                      <div style=\"width: 20%\">\r\n                        <span>{{item.zona}}</span>\r\n                        <label class=\"textLimite\">{{item.calle}} C.P {{item.cp}}</label>\r\n                      </div>\r\n                      <div style=\"width: 15%\">\r\n                        <span>{{item.contacto}}</span>\r\n                        <label class=\"textLimite\">{{item.puesto}}</label>\r\n                      </div>\r\n                      <div style=\"width: 13%\">\r\n                        <label style=\" text-transform: capitalize;\">{{item.fee}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <label>{{item.dias}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <span>{{item.totalPartidas}} PL</span>\r\n                        <label class=\"textLimite\"><span *ngIf=\"item.totalInspeccion > 0\">{{item.totalInspeccion}} Inspeccion</span><span *ngIf=\"item.totalInspeccion > 0 && item.totalEmbalar > 0\"> · </span> <span *ngIf=\"item.totalEmbalar > 0\">{{item.totalEmbalar}} Embalaje</span></label>\r\n                      </div>\r\n                      <div style=\"width: 8%\">\r\n                        <label *ngIf=\"item.urgencia !== 0\" [style.color]=\"'#D0021B'\">En Pausa</label>\r\n                        <label *ngIf=\"item.urgencia === 0\" [style.color]=\"'#242424'\">Por Enviar</label>\r\n                      </div>\r\n                      <div class=\"imagenesDiv\">\r\n                        <img src=\"./assets/Images/flecha_abajo.svg\" *ngIf=\"item.activePart\" (click)=\"item.activePart = !item.activePart\">\r\n                        <img src=\"./assets/Images/flecha_arriba.svg\" *ngIf=\"!item.activePart\" (click)=\"item.activePart = !item.activePart\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!--Empieza Lista partidas-->\r\n                  <div *ngIf=\"item.activePart\" class=\"partidas\">\r\n                    <header class=\"headerPart\">\r\n                      <div>\r\n                        <label><span style=\"padding-left: 5px; font-weight: bold\">Packing List</span></label>\r\n                      </div>\r\n                    </header>\r\n                    <div class=\"listaPart\" *ngIf=\"item.partidas.length > 0\">\r\n                      <div class=\"listaPartidas\" *ngFor=\"let part of item.partidas; let i = index\">\r\n                        <div class=\"datosLst\">\r\n                          <div>\r\n                            <span>\r\n                            <label class=\"labelData\">{{i +1}} ·</label>\r\n                            <span class=\"spanData\">{{part.codigo}} </span>\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!--Termina Lista partidas-->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"sinDatos\" *ngIf=\"!partHabilidatas\">\r\n        <label>SIN PARTIDAS DISPONIBLES</label>\r\n      </div>\r\n    </div>\r\n    <!--Terminan los componentes-->\r\n    <footer class=\"footer\">\r\n      <div class=\"datosFooter\">\r\n        <div class=\"Prioridad1\">\r\n            <img style=\"height: 20px;\" class=\"img\" src='./assets/Images/reanudar.svg' /> Reanudar Envío\r\n        </div>\r\n        <div class=\"Prioridad1\">\r\n          <img style=\"height: 20px;\" class=\"img\" src='./assets/Images/pausar.svg' /> Pausar Envío\r\n        </div>\r\n        <div class=\"Prioridad1\">\r\n          <label class=\"p1\">FEE: </label> Fecha Estimada de Entrega\r\n        </div>\r\n        <div class=\"Prioridad1\">\r\n          <label class=\"p1\">PL: </label> Packing List\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/consola-envios/consola-envios.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{width:100%;height:100%;overflow:auto}.vistaLista{height:90%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:10px}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;padding-right:13px;border-bottom:2px solid #000;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cabezera>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cabezera>div>.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento;margin-bottom:5px;font-weight:normal}.areaPrincipal{min-width:1175px;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 20px 20px 20px}.footer{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;-webkit-box-sizing:border-box;box-sizing:border-box}.footer>.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px}.footer>.datosFooter>.Prioridad1{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.footer>.datosFooter>.Prioridad1>.p1{color:#424242;font-weight:bold;margin-right:6px;font-size:14px}.footer>.datosFooter>.Prioridad1>.img{margin-right:6px}.vistaGeneral{width:100%;height:115px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vistaGeneral>.areaInformativa{height:60px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.vistaGeneral>.areaInformativa>label{font-family:Novecento;font-weight:bold;font-size:24px;color:#424242}.vistaGeneral>.botonera{height:55px;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.informacionLista{width:100%;height:100%}.informacionLista>.filtros{height:10%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.informacionLista>.filtros>div{width:50%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:50px;width:100%;border-style:solid;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:90%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.menu{position:relative;z-index:4}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:74px;overflow:auto;width:137px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}header{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;height:5%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #242424;padding-right:10px;padding-left:10px}header>div{width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}header>div>label{font-family:Roboto;font-weight:bold;font-size:15px;color:#424242;text-align:left}.headerPart{border-bottom:initial !important;padding-left:10px !important;padding-right:10px !important}.headerPart>div{-webkit-box-pack:initial !important;-ms-flex-pack:initial !important;justify-content:initial !important}.headerPart>div>label{color:#848387 !important;font-weight:normal !important}.lista{width:100%;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista div>.div{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #eceef0}.lista div>.div .datosLst:hover{background-color:#eceef0}.lista div>.div .datosLst{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:5px 10px 5px 10px;display:-webkit-box;display:-ms-flexbox;display:flex}.lista div>.div .datosLst>div{width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;padding-left:5px}.lista div>.div .datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:center}.lista div>.div .datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;text-align:center}.lista div>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista div>.divActive{border-bottom:1px solid #eceef0;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#eceef0;width:100%}.lista div>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista div>.divActive>.datosLst{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:5px 10px 5px 5px;display:-webkit-box;display:-ms-flexbox;display:flex}.lista div>.divActive>.datosLst>div{-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;padding-left:5px;width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lista div>.divActive>.datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:center}.lista div>.divActive>.datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;text-align:center}.imagenesDiv{min-width:25px;max-width:25px;width:initial !important;cursor:pointer}.filtros{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:80px}.listaPart{width:100%;font-size:20px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #d4d4d5;border-top:1px solid #d4d4d5;max-height:200px;flex-direction:column;height:100%}.listaPart>.listaPartidas{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:220px;position:relative;border-bottom:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:10px;padding-right:10px}.listaPart>.listaPartidas>.datosLst{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:10px 0px 10px 0px;display:-webkit-box;display:-ms-flexbox;display:flex}.listaPart>.listaPartidas>.datosLst>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.listaPart>.listaPartidas>.datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left;padding-left:5px}.listaPart>.listaPartidas>.datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;line-height:1.5}.textLimite{font-size:14px !important}.partidas{height:100%;background-color:#f8f8f9;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 40px 20px 40px;overflow:hidden}.imgEstado{padding-left:5px;height:17.5px;vertical-align:text-top}.labelData{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left}.spanData{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;padding-left:5px}.sinDatos{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sinDatos>label{color:#d8d9dd;font-family:Novecento;font-weight:bold;font-size:50px;text-align:center;width:100%}.tooltip{position:relative;display:inline-block;cursor:pointer}.tooltip>.tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.tooltip:hover>.tooltiptext{visibility:visible;opacity:1;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip>.tooltiptext{visibility:hidden;width:94px;background-color:#424242;color:#fff;font-family:\"Roboto\";text-align:left;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;margin-top:0px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}"

/***/ }),

/***/ "./src/app/components/consola-envios/consola-envios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaEnviosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gestor_producto_reclamo_producto_reclamo_service__ = __webpack_require__("./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_consola_envio_consola_envio_service__ = __webpack_require__("./src/app/services/consola-envio/consola-envio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
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






var ConsolaEnviosComponent = /** @class */ (function () {
    function ConsolaEnviosComponent(_serviceReclamo, _servicesEnvio, coreComponent, ComunServices) {
        this._serviceReclamo = _serviceReclamo;
        this._servicesEnvio = _servicesEnvio;
        this.coreComponent = coreComponent;
        this.ComunServices = ComunServices;
        this.partHabilidatas = true;
    }
    ConsolaEnviosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iniciarVista();
        this.ComunServices.recargar.subscribe(function (data) {
            if (data === 'consolaEnvio') {
                _this.activeMenu = false;
                _this.iniciarVista();
            }
        });
    };
    ConsolaEnviosComponent.prototype.iniciarVista = function () {
        this.classAsideMenu = 'asideNormalMenu';
        this.searchTerm = '';
        this.tipoOrden = 'Todos';
        this.listaUniverso = [];
        // this.lista = [];
        this.folio = '';
        this.usuario = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        var roles = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        for (var i = 0; i < roles.length; i++) {
            if (roles[i] === 'Comprador_Master') {
                this.rolMaster = true;
            }
        }
        this.obtenerDatos();
    };
    ConsolaEnviosComponent.prototype.obtenerDatos = function () {
        var _this = this;
        if (this.rolMaster) {
            this.obtenerValoresMenu(this.usuario);
        }
        else {
            setTimeout(function () {
                _this.itemsMenu = [{ rol: 'GESTOR DE OPERACIONES', active: true,
                        menu: [{ nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: false },
                            { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: true, disable: false },
                            { nombre: 'Material en Stock', url: 'stock', select: false },
                            { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }
                        ] }];
                _this.activeMenu = true;
            }, 100);
        }
        this.datosEnvios();
    };
    ConsolaEnviosComponent.prototype.datosEnvios = function () {
        var _this = this;
        this.coreComponent.openModal(1);
        this._servicesEnvio.obtenerEnvios().subscribe(function (data) {
            if (data.current.TODAS !== undefined && data.current.TODAS !== null && data.current.TODAS.length > 0) {
                _this.lista = data.current.TODAS;
                _this.listaUniverso = data.current.TODAS;
                _this.partHabilidatas = true;
            }
            else {
                _this.partHabilidatas = false;
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
        });
    };
    ConsolaEnviosComponent.prototype.obtenerValoresMenu = function (idUsuario) {
        var _this = this;
        this.coreComponent.openModal(1);
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
                        { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: true, tipo: 'flecha' },
                        { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }] }
            ];
            _this.activeMenu = true;
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
        });
    };
    /*****/
    ConsolaEnviosComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    ConsolaEnviosComponent.prototype.abreCombo = function () {
        if (document.getElementById('section').className === 'visible') {
            document.getElementById('section').className = '';
        }
        else {
            document.getElementById('section').className = 'visible';
        }
    };
    ConsolaEnviosComponent.prototype.ordenamiento = function (tipo) {
        var searchArrayAux = [];
        var valor;
        if (tipo === 'En Pausa') {
            this.tipoOrden = 'En Pausa';
            valor = 1;
        }
        else if (tipo === 'Por Sistema') {
            valor = 0;
            this.tipoOrden = 'Por Envíar';
        }
        this.lista.forEach(function (folio) {
            if (folio.urgencia === valor) {
                searchArrayAux.unshift(folio);
            }
            else {
                searchArrayAux.push(folio);
            }
        });
        this.lista = searchArrayAux;
    };
    ConsolaEnviosComponent.prototype.buscar = function (search) {
        var part = [];
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.lista = this.listaUniverso.slice();
        }
        else {
            for (var i = 0; i < this.listaUniverso.length; i++) {
                part = this.listaUniverso[i].partidas;
                if (this.listaUniverso[i].contacto.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaUniverso[i].cliente.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(this.listaUniverso[i]);
                }
                else {
                    for (var j = 0; j < part.length; j++) {
                        if (part[j].codigo === null) {
                            part[j].codigo = '';
                        }
                        if (part[j].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaUniverso[i]);
                            break;
                        }
                    }
                }
            }
            this.lista = searchArrayAux;
        }
        if (this.tipoOrden !== 'Todos') {
            this.ordenamiento(this.tipoOrden);
        }
    };
    ConsolaEnviosComponent.prototype.cambiarStatus = function (item, urgencia) {
        var _this = this;
        var datos = {
            idPPedidos: item.idPPedidos,
            urgencia: urgencia
        };
        this.coreComponent.openModal(1);
        this._servicesEnvio.actualizarUgencia(datos).subscribe(function (data) {
            if (data.current) {
                _this.datosEnvios();
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log(error);
        });
    };
    ConsolaEnviosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-consola-envios',
            template: __webpack_require__("./src/app/components/consola-envios/consola-envios.component.html"),
            styles: [__webpack_require__("./src/app/components/consola-envios/consola-envios.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_gestor_producto_reclamo_producto_reclamo_service__["a" /* ProductoReclamoService */], __WEBPACK_IMPORTED_MODULE_3__services_consola_envio_consola_envio_service__["a" /* ConsolaEnvioService */], __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */]])
    ], ConsolaEnviosComponent);
    return ConsolaEnviosComponent;
}());



/***/ }),

/***/ "./src/app/components/consola-envios/consola-envios.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolaEnviosModule", function() { return ConsolaEnviosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consola_envios_component__ = __webpack_require__("./src/app/components/consola-envios/consola-envios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consola_envios_routing_module__ = __webpack_require__("./src/app/components/consola-envios/consola-envios-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ConsolaEnviosModule = /** @class */ (function () {
    function ConsolaEnviosModule() {
    }
    ConsolaEnviosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__consola_envios_routing_module__["a" /* ConsolaEnviosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__consola_envios_component__["a" /* ConsolaEnviosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__consola_envios_component__["a" /* ConsolaEnviosComponent */]
            ]
        })
    ], ConsolaEnviosModule);
    return ConsolaEnviosModule;
}());



/***/ })

});
//# sourceMappingURL=consola-envios.module.chunk.js.map