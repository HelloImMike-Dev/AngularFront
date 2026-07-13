webpackJsonp(["consola-prioridades.module"],{

/***/ "./src/app/components/consola-prioridades/consola-prioridades-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaPrioridadesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consola_prioridades_component__ = __webpack_require__("./src/app/components/consola-prioridades/consola-prioridades.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConsolaPrioridadesRoutingModule = /** @class */ (function () {
    function ConsolaPrioridadesRoutingModule() {
    }
    ConsolaPrioridadesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__consola_prioridades_component__["a" /* ConsolaPrioridadesComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ConsolaPrioridadesRoutingModule);
    return ConsolaPrioridadesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/consola-prioridades/consola-prioridades.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"   [titulo]=\"'RESPONSABLE DE SURTIDO'\" style=\"width: 100%;\" *ngIf=\"activar\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <!--Empieza el area de trabajo-->\r\n  <div class=\"area\">\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div>\r\n        <label class=\"etiqueta\">CONSOLA DE PRIORIDADES</label>\r\n      </div>\r\n    </div>\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\r\n      <div class=\"areaPrincipal\" *ngIf=\"partHabilidatas\">\r\n        <div class=\"vistaGeneral\">\r\n          <div class=\"areaInformativa\">\r\n              <label>ZONAS</label>\r\n          </div>\r\n          <div class=\"botonera\">\r\n            <pn-botonera [lista]=\"listaZonas\" *ngIf=\"activeBotonera\" style=\"width: 100%;height: 100%\" (event)=\"seleccionarLista($event, recargar)\" [selectedPos]=\"selectItem\"></pn-botonera>\r\n          </div>\r\n        </div>\r\n        <div class=\"informacionLista\">\r\n          <div class=\"filtros\">\r\n            <div>\r\n              <div class=\"menu\" id=\"menuOrden\" (click)=\"abreCombo()\">\r\n                <div id=\"menuOrden1\">\r\n                </div>\r\n                <div id=\"menuOrden2\">\r\n                </div>\r\n                <div id=\"menuOrden3\">\r\n                </div>\r\n                <section id=\"section\">\r\n                  <ul class=\"listaHamburguesa\">\r\n                    <li (click)=\"ordenamiento('Urgencia')\">Urgencia</li>\r\n                    <li (click)=\"ordenamiento('Por Sistema')\">Por Sistema</li>\r\n                  </ul>\r\n                </section>\r\n              </div>\r\n              <label id=\"menuOrdenLabel\">{{tipoOrden}}</label>\r\n            </div>\r\n            <div class=\"barraBusqueda\">\r\n              <div class=\"buscar\">\r\n                <div>\r\n                  <div class=\"lupa\">\r\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                  </div>\r\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Cliente, Contacto, P.Interno, Código, Concepto\" />\r\n                  <div class=\"lupa\" (click)=\"buscar('')\" style=\"cursor: pointer;\">\r\n                    <img src=\"assets/Images/cerrar.svg\"  height=\"12px\" alt=\"buscar\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"filtros\">\r\n              <div class=\"menu\" (click)=\"abreComboFiltrado()\" id=\"menuFiltro\">\r\n                <div id=\"menuFiltro1\">\r\n                </div>\r\n                <div id=\"menuFiltro2\">\r\n                </div>\r\n                <div id=\"menuFiltro3\">\r\n                </div>\r\n                <section id=\"sectionFiltrado\">\r\n                  <ul class=\"listaHamburguesa\">\r\n                    <li (click)=\"filtrado('Todos')\">Todos</li>\r\n                    <li (click)=\"filtrado('Embalaje')\">Embalaje</li>\r\n                    <li (click)=\"filtrado('Inspección')\">Inspección</li>\r\n                  </ul>\r\n                </section>\r\n              </div>\r\n              <label id=\"menuFiltrolabel\">{{tipoOrdenFiltrado}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"vistaLista\">\r\n            <header>\r\n              <div  class=\"imagenesDiv\" style=\"max-width: 27px\">\r\n                <label>#</label>\r\n              </div>\r\n              <div class=\"imagenesDiv\" style=\"min-width: 29px;max-width: 29px\"></div>\r\n              <div class=\"imagenesDiv\"></div>\r\n              <div class=\"imagenesDiv\" style=\"min-width: 68px; max-height: 68px\"></div>\r\n              <div style=\"width: 5%\">\r\n                <label>#Prioridad</label>\r\n              </div>\r\n              <div>\r\n                <label>Cliente</label>\r\n              </div>\r\n              <div style=\"width: 20%\">\r\n                <label>Zona</label>\r\n              </div>\r\n              <div>\r\n                <label>Contacto</label>\r\n              </div>\r\n              <div>\r\n                <label>Monto</label>\r\n              </div>\r\n              <div style=\"width: 13%\">\r\n                <label>FEE</label>\r\n              </div>\r\n              <div>\r\n                <label style=\"text-align: center;\">Días Restantes</label>\r\n              </div>\r\n              <div></div>\r\n              <div></div>\r\n              <div class=\"imagenesDiv\"></div>\r\n            </header>\r\n            <div style=\"height: 95%;width: 100%;overflow: auto;\">\r\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n                <div  *ngFor=\"let item of lista; let i = index\" style=\"display: flex;flex-direction:column;width: 100%;position: relative;\">\r\n                  <div [ngClass]=\"item.activePart? 'divActive': 'div'\">\r\n                    <div class=\"dfSelect\"></div>\r\n                    <div class=\"datosLst\">\r\n                      <div class=\"imagenesDiv\" style=\"max-width: 27px\">\r\n                        <label>{{i + 1}}</label>\r\n                      </div>\r\n                      <div class=\"imagenesDiv\" style=\"max-width: 29px;min-width: 29px\">\r\n                        <div class=\"tooltip\">\r\n                          <img src=\"./assets/Images/candado_morado.svg\"  (click)=\"quitarRestriccion(true, item)\" *ngIf=\"item.restriccion === 1\">\r\n                          <span class=\"tooltiptext\" *ngIf=\"item.restriccion === 1\"> Con Restricción por Fin de Mes</span>\r\n                          <img src=\"./assets/Images/candado_verde_R.svg\"  (click)=\"quitarRestriccion(false, item)\" *ngIf=\"item.facturaRemision === 1 && item.remision ===1\">\r\n                          <span class=\"tooltiptext\" *ngIf=\"item.facturaRemision === 1 && item.remision ===1\" > Revertir Entrega con Restricción R </span>\r\n                          <img src=\"./assets/Images/candado_verde_F.svg\"  (click)=\"quitarRestriccion(false, item)\" *ngIf=\"item.facturaRemision === 1 && item.remision ===0\">\r\n                          <span class=\"tooltiptext\" *ngIf=\"item.facturaRemision === 1 && item.remision ===0\" > Revertir Entrega con Restricción F </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"imagenesDiv\" *ngIf=\"item.pausado === 0 && item.metodo === 0\">\r\n                        <div class=\"tooltip\" *ngIf=\"item.urgencia === 0\">\r\n                          <img src=\"./assets/Images/dar_prioridad.svg\" *ngIf=\"item.urgencia === 0\" (click)=\"cambiarStatus(item, 1)\">\r\n                          <span class=\"tooltiptext\" *ngIf=\"item.urgencia === 0\"> Dar Prioridad</span>\r\n                        </div>\r\n                        <div class=\"tooltip\"  *ngIf=\"item.urgencia !== 0\">\r\n                          <img src=\"./assets/Images/revertir_prioridad.svg\" *ngIf=\"item.urgencia !== 0\" (click)=\"cambiarStatus(item, 0)\">\r\n                          <span class=\"tooltiptext\" *ngIf=\"item.urgencia\"> Revertir Prioridad</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"imagenesDiv\" *ngIf=\"item.pausado !== 0 && item.metodo === 0\" style=\"pointer-events: none;\">\r\n                        <div  *ngIf=\"item.urgencia === 0\">\r\n                          <img src=\"./assets/Images/flecha_prioridad_inactivo.svg\" *ngIf=\"item.urgencia === 0\">\r\n                        </div>\r\n                        <div   *ngIf=\"item.urgencia !== 0\">\r\n                          <img src=\"./assets/Images/flecha_revert_inactivo.svg\" *ngIf=\"item.urgencia !== 0\" >\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"imagenesDiv\" *ngIf=\"item.metodo === 1\">\r\n                        <div class=\"tooltipAbove\">\r\n                          <img (click)=\"popInformativo(item)\" src=\"./assets/Images/icono_warning.svg\">\r\n                          <span class=\"tooltiptext\">No Facturable</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"imagenesDiv\" style=\"min-width: 68px; max-height: 68px\">\r\n                        <div class=\"tooltip\" *ngIf=\"item.pausado === 0 && item.metodo === 0\">\r\n                          <img src=\"./assets/Images/pausar.svg\" *ngIf=\"item.pausado === 0\" (click)=\"pausar(item, 1)\" height=\"15px\">\r\n                          <span class=\"tooltiptext\" *ngIf=\"item.pausado === 0\"> Pausar Envío</span>\r\n                        </div>\r\n                        <div class=\"tooltip\"  *ngIf=\"item.pausado !== 0 && item.metodo === 0\">\r\n                          <img src=\"./assets/Images/reanudar.svg\" *ngIf=\"item.pausado !== 0\" (click)=\"pausar(item, 0)\" height=\"15px\">\r\n                          <span class=\"tooltiptext\" *ngIf=\"item.pausado !== 0\" style=\"\"> Reanudar Envío</span>\r\n                        </div>\r\n                      </div>\r\n                      <div style=\"width: 5%\">\r\n                        <label>{{item.indicePrioridad}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <label (click)=\"popInformativo(item)\" [ngClass]=\"item.metodo == 1? 'activeClient': ''\"> {{item.cliente}}</label>\r\n                      </div>\r\n                      <div style=\"width: 20%\">\r\n                        <span>{{item.zona}}</span>\r\n                        <label class=\"textLimite\">{{item.calle}} C.P {{item.cp}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <span>{{item.contacto}}</span>\r\n                        <label class=\"textLimite\">{{item.puesto}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <label>{{item.monto | currency: 'USD'}} USD</label>\r\n                      </div>\r\n                      <div class=\"alertProgramados\">\r\n                        <img src=\"./assets/Images/relojAlarma.svg\" *ngIf=\"item.programado === 1\" class=\"imgAlert\" height=\"17px\">\r\n                        <label style=\" text-transform: capitalize;\" [style.color]=\"item.programado === 1? '#D08F29':'#424242'\">{{item.fee}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <label>{{item.dias}}</label>\r\n                      </div>\r\n                      <div>\r\n                        <span>{{item.totalPartidas}} Partidas · {{item.totalPiezas}} Pzas</span>\r\n                        <label class=\"textLimite\"><span *ngIf=\"item.totalInspeccion > 0\">{{item.totalInspeccion}} Inspeccion</span><span *ngIf=\"item.totalInspeccion > 0 && item.totalEmbalar > 0\"> · </span> <span *ngIf=\"item.totalEmbalar > 0\">{{item.totalEmbalar}} Embalaje</span></label>\r\n                      </div>\r\n                      <div style=\"width: 8%\">\r\n                        <label *ngIf=\"item.urgencia !== 0\" [style.color]=\"'#D0021B'\">Urgencia</label>\r\n                        <label *ngIf=\"item.urgencia === 0\" [style.color]=\"'#242424'\">Por Sistema</label>\r\n                      </div>\r\n                      <div class=\"imagenesDiv\">\r\n                        <img src=\"./assets/Images/flecha_abajo.svg\" *ngIf=\"item.activePart\" (click)=\"item.activePart = !item.activePart\">\r\n                        <img src=\"./assets/Images/flecha_arriba.svg\" *ngIf=\"!item.activePart\" (click)=\"item.activePart = !item.activePart\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!--Empieza Lista partidas-->\r\n                  <div *ngIf=\"item.activePart\" class=\"partidas\">\r\n                    <header class=\"headerPart\">\r\n                      <div>\r\n                        <label>#<span style=\"padding-left: 20px\">Partidas</span></label>\r\n                      </div>\r\n                    </header>\r\n                    <div class=\"listaPart\" *ngIf=\"item.partidas.length > 0\">\r\n                      <div class=\"listaPartidas\" *ngFor=\"let part of item.partidas; let i = index\">\r\n                        <div class=\"datosLst\">\r\n                          <div style=\"width: 80%\">\r\n                            <span>\r\n                            <img src=\"./assets/Images/relojAlarma.svg\" *ngIf=\"part.programado === 1\" class=\"imgAlert\" height=\"14px\">\r\n                            <label class=\"labelData\">{{i +1}} ·\r\n                            <img class=\"imgEstado\" src=\"./assets/Images/congelacion.svg\" *ngIf=\"part.tipo === 'congelacion'\">\r\n                            <img class=\"imgEstado\" src=\"./assets/Images/refrigeracion.svg\" *ngIf=\"part.tipo === 'refrigeracion'\">\r\n                            <img clas=\"imgEstado\" src=\"./assets/Images/ambiente.svg\" *ngIf=\"part.tipo === 'ambiente'\">\r\n                            </label>\r\n                            <span class=\"spanData\">{{part.codigo}} ·</span>\r\n                            <span class=\"spanData\" [style.color]=\"part.programado === 1? '#D08F29':'#424242'\">{{part.fechaPartida}}</span>\r\n                            <label class=\"labelData\"> P.Interno {{part.cpedido}}</label>\r\n                            <label class=\"labelData\" style=\"font-weight: bold\"> · {{part.fabrica}} · </label>\r\n                            <label class=\"labelData\" >{{part.descripcion}}</label>\r\n                            </span>\r\n                          </div>\r\n                          <div style=\"justify-content: center\">\r\n                            <label style=\"color: #008894\">{{part.piezas}} <span *ngIf=\"part.piezas === 1\" class=\"spanData\">Pza</span> <span class=\"spanData\" *ngIf=\"part.piezas > 1\">Pzas</span></label>\r\n                          </div>\r\n                          <div style=\"justify-content: center\">\r\n                            <span class=\"spanData\">{{part.tipo}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!--Termina Lista partidas-->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"sinDatos\" *ngIf=\"!partHabilidatas\">\r\n        <label>SIN PARTIDAS DISPONIBLES</label>\r\n      </div>\r\n    </div>\r\n    <!--Terminan los componentes-->\r\n      <footer class=\"footer\">\r\n        <div class=\"datosFooter\">\r\n          <div class=\"Prioridad1\">\r\n            <img style=\"height: 20px;\" class=\"img\" src='./assets/Images/revertir_prioridad.svg' />\r\n            <span>Revertir Prioridad</span>\r\n          </div>\r\n          <div class=\"Prioridad1\">\r\n            <img style=\"height: 20px;\" class=\"img\" src='./assets/Images/dar_prioridad.svg' />\r\n            <span>Dar Prioridad</span>\r\n          </div>\r\n          <div class=\"Prioridad1\">\r\n            <img class=\"img\" src='./assets/Images/congelacion.svg' />\r\n            <span>Congelación</span>\r\n          </div>\r\n          <div class=\"Prioridad1\">\r\n            <img class=\"img\" src='./assets/Images/refrigeracion.svg' />\r\n            <span>Refrigeración</span>\r\n          </div>\r\n          <div class=\"Prioridad1\">\r\n            <img class=\"img\" src='./assets/Images/ambiente.svg' />\r\n            <span>Ambiente</span>\r\n          </div>\r\n          <div class=\"Prioridad1\">\r\n            <img class=\"img\" src='./assets/Images/relojAlarma.svg' />\r\n            <span>Productos Programados</span>\r\n          </div>\r\n          <div class=\"Prioridad1\">\r\n            <label class=\"p1\">FEE: </label> Fecha Estimada de Entrega\r\n          </div>\r\n          <div class=\"Prioridad1\">\r\n            <img style=\"height: 20px;\" class=\"img\" src='./assets/Images/icono_warning.svg' />\r\n            <span>No Facturable</span>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n  </div>\r\n</div>\r\n<pn-pop-up-restriccion *ngIf=\"deleteRestriction\" (cerrarPop)=\"validarFactura($event)\" [empresa]=\"cliente.toLowerCase()\"></pn-pop-up-restriccion>\r\n<pn-pop-up-restriccion-entrega *ngIf=\"activeRestriction\" (cerrarPop)=\"activarResctriccion($event)\" [cliente]=\"cliente.toLowerCase()\"></pn-pop-up-restriccion-entrega>\r\n<pn-pop-up-tipo-pago *ngIf=\"activePop\" [datos]=\"inforCliente\" (cerrarPop)=\"cerrarPopDatos($event)\"></pn-pop-up-tipo-pago>\r\n"

/***/ }),

/***/ "./src/app/components/consola-prioridades/consola-prioridades.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.alertProgramados{width:13% !important;-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important;-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important;-webkit-box-align:initial !important;-ms-flex-align:initial !important;align-items:initial !important}.imgAlert{padding-right:5px}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{width:100%;height:100%;overflow:auto}.vistaLista{height:90%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:10px}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;padding-right:13px;border-bottom:2px solid #000;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cabezera>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cabezera>div>.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento;margin-bottom:5px;font-weight:normal}.areaPrincipal{min-width:1175px;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 20px 20px 20px}.footer{overflow:auto;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;-webkit-box-sizing:border-box;box-sizing:border-box}.footer>.datosFooter{min-width:900px;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px}.footer>.datosFooter>.Prioridad1{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.footer>.datosFooter>.Prioridad1>.p1{color:#424242;font-weight:bold;margin-right:6px;font-size:14px}.footer>.datosFooter>.Prioridad1>.img{margin-right:6px}.vistaGeneral{width:100%;height:115px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vistaGeneral>.areaInformativa{height:60px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.vistaGeneral>.areaInformativa>label{font-family:Novecento;font-weight:bold;font-size:24px;color:#424242}.vistaGeneral>.botonera{height:55px;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.informacionLista{width:100%;height:calc(100% - 115px)}.informacionLista>.filtros{height:10%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around}.informacionLista>.filtros>div{width:30%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:50px;width:100%;border-style:solid;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:90%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40% !important}.menu{position:relative;z-index:4}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}.filtrosOrden{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:74px;overflow:auto;width:137px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}header{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;height:5%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #242424;padding-right:10px;padding-left:10px}header>div{width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}header>div>label{font-family:Roboto;font-weight:bold;font-size:15px;color:#424242;text-align:left}.headerPart{border-bottom:initial !important;padding-left:40px !important;padding-right:40px !important}.headerPart>div{-webkit-box-pack:initial !important;-ms-flex-pack:initial !important;justify-content:initial !important}.headerPart>div>label{color:#848387 !important;font-weight:normal !important}.lista{width:100%;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista div>.div{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #eceef0}.lista div>.div .datosLst:hover{background-color:#eceef0}.lista div>.div .datosLst{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:5px 10px 5px 10px;display:-webkit-box;display:-ms-flexbox;display:flex}.lista div>.div .datosLst>div{width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;padding-left:5px}.lista div>.div .datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:center}.lista div>.div .datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;text-align:center}.lista div>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista div>.divActive{border-bottom:1px solid #eceef0;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#eceef0;width:100%}.lista div>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista div>.divActive>.datosLst{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:5px 10px 5px 5px;display:-webkit-box;display:-ms-flexbox;display:flex}.lista div>.divActive>.datosLst>div{-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:5px;padding-left:5px;width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lista div>.divActive>.datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:center}.lista div>.divActive>.datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;text-align:center}.imagenesDiv{min-width:25px;max-width:25px;width:initial !important;cursor:pointer}.filtros{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:80px}.listaPart{width:100%;font-size:20px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;border-bottom:1px solid #d4d4d5;border-top:1px solid #d4d4d5}.listaPart>.listaPartidas{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;position:relative;border-bottom:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:40px;padding-right:40px}.listaPart>.listaPartidas>.datosLst{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:10px 0px 10px 0px;display:-webkit-box;display:-ms-flexbox;display:flex}.listaPart>.listaPartidas>.datosLst>div{width:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.listaPart>.listaPartidas>.datosLst>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left;padding-left:5px}.listaPart>.listaPartidas>.datosLst>div>span{font-family:Roboto;font-weight:400;font-size:16px;line-height:1.5}.textLimite{font-size:14px !important}.partidas{height:100%;background-color:#f8f8f9;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 40px 20px 40px}.imgEstado{padding-left:5px;height:17.5px;vertical-align:text-top}.labelData{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left}.spanData{font-family:Roboto;font-weight:400;font-size:16px;color:#008894;padding-left:5px}.sinDatos{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sinDatos>label{color:#d8d9dd;font-family:Novecento;font-weight:bold;font-size:50px;text-align:center;width:100%}.activeClient:hover{color:#008894 !important;cursor:pointer}.tooltip{position:relative;display:inline-block;cursor:pointer}.tooltip>.tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.tooltip:hover>.tooltiptext{visibility:visible;opacity:1;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip>.tooltiptext{visibility:hidden;width:94px;background-color:#424242;color:#fff;font-family:\"Roboto\";text-align:left;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;margin-top:0px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}.tooltipAbove{position:relative;cursor:pointer}.tooltipAbove>.tooltiptext:before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #424242;bottom:-6px;content:\"\";height:0;left:50%;margin-left:-6px;position:absolute;width:0}.tooltipAbove>.tooltiptext{width:103px;background-color:#424242;color:#fff;display:none;position:absolute;top:-31px;right:-49px;font-size:9px;font-family:Roboto;padding:5px;z-index:1;text-align:center}.tooltipAbove:hover>.tooltiptext{display:block;opacity:1}"

/***/ }),

/***/ "./src/app/components/consola-prioridades/consola-prioridades.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaPrioridadesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_consola_consola_prioridades_service__ = __webpack_require__("./src/app/services/consola/consola-prioridades.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_gestor_producto_reclamo_producto_reclamo_service__ = __webpack_require__("./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
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






var ConsolaPrioridadesComponent = /** @class */ (function () {
    function ConsolaPrioridadesComponent(_consolaService, coreComponent, _serviceReclamo, e, comunService) {
        this._consolaService = _consolaService;
        this.coreComponent = coreComponent;
        this._serviceReclamo = _serviceReclamo;
        this.e = e;
        this.comunService = comunService;
        this.estadoBotonera = '';
        this.recargar = 0;
        this.element = e.nativeElement;
    }
    ConsolaPrioridadesComponent.prototype.ngOnDestroy = function () {
        this.element.remove();
    };
    ConsolaPrioridadesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classAsideMenu = 'asideNormalMenu';
        this.roles = __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        this.usuario = __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
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
                    menu: [{ nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: true },
                        { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                        { nombre: 'Material en Stock', url: 'stock', select: false },
                        { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }
                    ] }];
            this.activar = true;
        }
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'consolaPrioridades') {
                _this.obtenerDatos();
            }
        });
        this.element.addEventListener('click', function (e) {
            if (e.target.id !== 'menuOrden' && e.target.id !== 'menuOrdenLabel' && e.target.id !== 'menuOrden1' && e.target.id !== 'menuOrden2' && e.target.id !== 'menuOrden3'
                && e.target.id !== 'menuFiltro' && e.target.id !== 'menuFiltro1' && e.target.id !== 'menuFiltro2' && e.target.id !== 'menuFiltro3' && e.target.id !== 'menuFiltrolabel') {
                if (document.getElementById('section') !== null) {
                    document.getElementById('section').className = '';
                }
                if (document.getElementById('sectionFiltrado') !== null) {
                    document.getElementById('sectionFiltrado').className = '';
                }
            }
        });
        this.obtenerDatos();
    };
    ConsolaPrioridadesComponent.prototype.obtenerDatos = function () {
        this.tipoOrdenFiltrado = 'Filtrar';
        this.activarBtn = true;
        this.tipoOrden = 'Todos';
        this.folio = '';
        this.datosBotonera();
    };
    ConsolaPrioridadesComponent.prototype.obtenerValoresMenu = function (idUsuario) {
        var _this = this;
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
                    menu: [{ nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: true, tipo: 'flecha' },
                        { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                        { nombre: 'Material en Stock', url: 'stock', select: false },
                        { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }] }
            ];
            _this.activar = true;
        }, function (error) {
        });
    };
    ConsolaPrioridadesComponent.prototype.datosBotonera = function () {
        var _this = this;
        this.recargar = 0;
        this.coreComponent.openModal(1);
        this.activeBotonera = false;
        this._consolaService.datosBotonera().subscribe(function (data) {
            var i;
            _this.listaZonas = [];
            if (data.current.barra !== undefined && data.current.barra !== null && data.current.barra.length > 0) {
                _this.partHabilidatas = true;
                var title_1;
                var listaBarra = data.current.barra;
                _this.listas = data.current;
                _this.listaUniverso = data.current.TODAS;
                _this.lista = data.current.TODAS;
                i = 0;
                listaBarra.forEach(function (zona) {
                    if (zona.totalClientes === 1) {
                        title_1 = 'Cliente';
                    }
                    else {
                        title_1 = 'Clientes';
                    }
                    if (zona.totalClientes != null && zona.totalClientes > 0) {
                        _this.listaZonas.push({ nombre: zona.zona, total: zona.totalClientes, etiquetaTotal: title_1, pos: i });
                        i++;
                    }
                });
                if (_this.estadoBotonera === null || _this.estadoBotonera === '') {
                    _this.selectItem = 0;
                }
                _this.activeBotonera = true;
                if (_this.estadoBotonera !== '') {
                    _this.recargar = 1;
                }
            }
            else {
                _this.partHabilidatas = false;
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
        });
    };
    ConsolaPrioridadesComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    /*****/
    ConsolaPrioridadesComponent.prototype.abreCombo = function () {
        if (document.getElementById('section').className === 'visible') {
            document.getElementById('section').className = '';
        }
        else {
            document.getElementById('section').className = 'visible';
        }
    };
    ConsolaPrioridadesComponent.prototype.abreComboFiltrado = function () {
        if (document.getElementById('sectionFiltrado').className === 'visible') {
            document.getElementById('sectionFiltrado').className = '';
        }
        else {
            document.getElementById('sectionFiltrado').className = 'visible';
        }
    };
    ConsolaPrioridadesComponent.prototype.buscar = function (search) {
        var part = [];
        var searchArrayAux = [];
        this.searchTerm = search;
        if (this.tipoOrdenFiltrado !== 'Todos' && this.tipoOrdenFiltrado !== 'Filtrar') {
            if (search === '') {
                this.lista = this.listaFiltrado.slice();
            }
            else {
                for (var i = 0; i < this.listaFiltrado.length; i++) {
                    part = this.listaFiltrado[i].partidas;
                    if (this.listaFiltrado[i].contacto.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaFiltrado[i].cliente.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                        searchArrayAux.push(this.listaFiltrado[i]);
                    }
                    else {
                        for (var j = 0; j < part.length; j++) {
                            if (part[j].codigo === null) {
                                part[j].codigo = '';
                            }
                            if (part[j].descripcion == null) {
                                part[j].descripcion = '';
                            }
                            if (part[j].cpedido.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || part[j].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || part[j].descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                                searchArrayAux.push(this.listaUniverso[i]);
                                break;
                            }
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
                    part = this.listaUniverso[i].partidas;
                    if (this.listaUniverso[i].contacto.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaUniverso[i].cliente.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                        searchArrayAux.push(this.listaUniverso[i]);
                    }
                    else {
                        for (var j = 0; j < part.length; j++) {
                            if (part[j].codigo === null) {
                                part[j].codigo = '';
                            }
                            if (part[j].descripcion == null) {
                                part[j].descripcion = '';
                            }
                            if (part[j].cpedido.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || part[j].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || part[j].descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                                searchArrayAux.push(this.listaUniverso[i]);
                                break;
                            }
                        }
                    }
                }
                this.lista = searchArrayAux;
            }
        }
        if (this.tipoOrden !== 'Todos') {
            this.ordenamiento(this.tipoOrden);
        }
    };
    ConsolaPrioridadesComponent.prototype.ordenamiento = function (tipo) {
        var searchArrayAux = [];
        var valor;
        if (tipo === 'Urgencia') {
            this.tipoOrden = 'Urgencia';
            valor = 1;
        }
        else if (tipo === 'Por Sistema') {
            valor = 0;
            this.tipoOrden = 'Por Sistema';
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
    ConsolaPrioridadesComponent.prototype.filtrado = function (tipoFiltrado) {
        this.tipoOrdenFiltrado = tipoFiltrado;
        var part = [];
        var searchArrayAux = [];
        if (tipoFiltrado === '' || this.tipoOrdenFiltrado === 'Todos') {
            this.lista = this.listaUniverso.slice();
        }
        else {
            for (var i = 0; i < this.listaUniverso.length; i++) {
                part = this.listaUniverso[i].partidas;
                for (var j = 0; j < part.length; j++) {
                    if (part[j].tipo.toLowerCase().indexOf(tipoFiltrado.toLowerCase()) !== -1) {
                        searchArrayAux.push(this.listaUniverso[i]);
                        break;
                    }
                }
            }
            this.lista = searchArrayAux;
            this.listaFiltrado = this.lista.slice();
        }
        if (this.tipoOrden !== 'Todos') {
            this.ordenamiento(this.tipoOrden);
        }
    };
    ConsolaPrioridadesComponent.prototype.seleccionarItem = function (i, item) {
        this.folio = item.idPPedido;
    };
    ConsolaPrioridadesComponent.prototype.cambiarStatus = function (item, urgencia) {
        var _this = this;
        var datos = {
            idPPedidos: item.idPPedidos,
            urgencia: urgencia
        };
        this.coreComponent.openModal(1);
        this._consolaService.actualizarUgencia(datos).subscribe(function (data) {
            if (data.current) {
                _this.datosBotonera();
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log(error);
        });
    };
    ConsolaPrioridadesComponent.prototype.pausar = function (item, pausado) {
        var _this = this;
        var datos = {
            idPPedidos: item.idPPedidos,
            pausado: pausado
        };
        this.coreComponent.openModal(1);
        this._consolaService.actualizarPausado(datos).subscribe(function (data) {
            if (data.current) {
                _this.datosBotonera();
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
        });
    };
    ConsolaPrioridadesComponent.prototype.seleccionarLista = function (tipo, valor) {
        this.tipoOrdenFiltrado = 'Filtrar';
        this.selectItem = tipo.pos;
        this.estadoBotonera = tipo.nombre;
        this.lista = this.listas[tipo.nombre];
        this.listaUniverso = this.listas[tipo.nombre];
        if (valor === 0) {
            this.searchTerm = '';
            this.tipoOrden = 'Todos';
        }
        else {
            if (this.searchTerm !== '') {
                this.buscar(this.searchTerm);
            }
            else if (this.tipoOrden !== 'Todos') {
                this.ordenamiento(this.tipoOrden);
            }
        }
    };
    ConsolaPrioridadesComponent.prototype.quitarRestriccion = function (condicion, item) {
        this.cliente = item.cliente;
        this.itemSelect = item;
        if (condicion) {
            this.deleteRestriction = true;
        }
        else if (!condicion) {
            this.activeRestriction = true;
        }
    };
    ConsolaPrioridadesComponent.prototype.validarFactura = function (datos) {
        var _this = this;
        var remision;
        this.deleteRestriction = false;
        if (datos.valor && this.itemSelect !== null && this.itemSelect !== null) {
            if (datos.tipo === 'factura') {
                remision = 0;
            }
            else if (datos.tipo === 'remision') {
                remision = 1;
            }
            var obj = {
                idPPedidos: this.itemSelect.idPPedidos,
                facturaRemision: 1,
                remisionar: remision,
            };
            this.coreComponent.openModal(1);
            this._consolaService.habilitarEntrega(obj).subscribe(function (data) {
                if (data.current === true) {
                    _this.datosBotonera();
                }
                _this.coreComponent.closeModal(1);
            }, function (error) {
                _this.coreComponent.closeModal(1);
                console.log('error');
            });
        }
    };
    ConsolaPrioridadesComponent.prototype.activarResctriccion = function (valor) {
        var _this = this;
        this.activeRestriction = false;
        if (valor) {
            var obj = {
                idPPedidos: this.itemSelect.idPPedidos,
                facturaRemision: 0,
                remisionar: this.itemSelect.remision,
            };
            this.coreComponent.openModal(1);
            this._consolaService.habilitarEntrega(obj).subscribe(function (data) {
                if (data.current === true) {
                    _this.datosBotonera();
                }
                _this.coreComponent.closeModal(1);
            }, function (error) {
                _this.coreComponent.closeModal(1);
                console.log('error');
            });
        }
    };
    ConsolaPrioridadesComponent.prototype.popInformativo = function (item) {
        if (item.metodo === 1) {
            this.inforCliente = item;
            this.activePop = true;
        }
    };
    ConsolaPrioridadesComponent.prototype.cerrarPopDatos = function (valor) {
        if (valor) {
            this.activePop = false;
        }
    };
    ConsolaPrioridadesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-consola-prioridades',
            template: __webpack_require__("./src/app/components/consola-prioridades/consola-prioridades.component.html"),
            styles: [__webpack_require__("./src/app/components/consola-prioridades/consola-prioridades.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_consola_consola_prioridades_service__["a" /* ConsolaPrioridadesService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__services_gestor_producto_reclamo_producto_reclamo_service__["a" /* ProductoReclamoService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */]])
    ], ConsolaPrioridadesComponent);
    return ConsolaPrioridadesComponent;
}());



/***/ }),

/***/ "./src/app/components/consola-prioridades/consola-prioridades.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolaPrioridadesModule", function() { return ConsolaPrioridadesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consola_prioridades_component__ = __webpack_require__("./src/app/components/consola-prioridades/consola-prioridades.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__consola_prioridades_routing_module__ = __webpack_require__("./src/app/components/consola-prioridades/consola-prioridades-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_botonera_botonera_module__ = __webpack_require__("./src/app/components/shared/botonera/botonera.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pop_up_restriccion_pop_up_restriccion_component__ = __webpack_require__("./src/app/components/consola-prioridades/pop-up-restriccion/pop-up-restriccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pop_up_restriccion_entrega_pop_up_restriccion_entrega_component__ = __webpack_require__("./src/app/components/consola-prioridades/pop-up-restriccion-entrega/pop-up-restriccion-entrega.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pop_up_tipo_pago_pop_up_tipo_pago_component__ = __webpack_require__("./src/app/components/consola-prioridades/pop-up-tipo-pago/pop-up-tipo-pago.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ConsolaPrioridadesModule = /** @class */ (function () {
    function ConsolaPrioridadesModule() {
    }
    ConsolaPrioridadesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__consola_prioridades_routing_module__["a" /* ConsolaPrioridadesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_botonera_botonera_module__["a" /* BotoneraModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__consola_prioridades_component__["a" /* ConsolaPrioridadesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pop_up_restriccion_pop_up_restriccion_component__["a" /* PopUpRestriccionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pop_up_restriccion_entrega_pop_up_restriccion_entrega_component__["a" /* PopUpRestriccionEntregaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pop_up_tipo_pago_pop_up_tipo_pago_component__["a" /* PopUpTipoPagoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__consola_prioridades_component__["a" /* ConsolaPrioridadesComponent */]
            ]
        })
    ], ConsolaPrioridadesModule);
    return ConsolaPrioridadesModule;
}());



/***/ }),

/***/ "./src/app/components/consola-prioridades/pop-up-restriccion-entrega/pop-up-restriccion-entrega.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\r\n\r\n  <div id=\"id01\" class=\"modal\" #pop>\r\n    <div class=\"modal-content\">\r\n      <header class=\"header\">\r\n        <h1> PROQUIFA NET  </h1>\r\n      </header>\r\n\r\n      <div class=\"contenido\">\r\n        <div class=\"datos\">\r\n\r\n          <div class=\"alerta\">\r\n            <img src=\"assets/Images/alerta.svg\" alt=\"\" class=\"alert\"/>\r\n          </div>\r\n\r\n          <div class=\"alertaTxt\">\r\n            <p>¿Estas seguro que deseas restringir la entrega de  <span class=\"cliente\">{{cliente}} </span> ?</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <footer class=\"footer2\">\r\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar(false)\">\r\n          <label> CANCELAR </label>\r\n        </a>\r\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar(true)\">\r\n          <label> ACEPTAR </label>\r\n        </a>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/consola-prioridades/pop-up-restriccion-entrega/pop-up-restriccion-entrega.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal{z-index:11;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(238,238,238,.8);font-family:\"Roboto\",sans-serif}.modal-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:auto;text-align:center;background-color:#fff;position:relative;padding:0;outline:0;width:620px;height:360px;color:#424242;border-radius:25px;font-family:\"Roboto\";font-size:20px;border:1px solid #008a98}.header{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch;height:52px;background-color:#008894;border:1px solid #0ac3d3;border-radius:25px 25px 0px 0px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;justify-content:center;align-items:center}.header h1{top:20px;color:#fff;font-size:25px;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-weight:bold}.contenido{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:stretch;align-self:stretch;width:90%;height:50%;padding-left:4%;padding-right:3%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;color:#424242}.footer2{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch;height:20%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:30px;margin-right:30px}.btnOk{display:-webkit-box;display:-ms-flexbox;display:flex;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#008894;cursor:pointer}.btnOk>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.btnOk>label{font-family:\"Roboto\";font-size:21px;font-weight:bold;color:#fff;padding-top:2.8%;cursor:pointer}.datos{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40%;padding-bottom:10%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:30px}.alerta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;align-self:auto}.alerta img.alert{width:100%;height:100%}.alertaTxt{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:18px;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;align-self:auto;margin-left:29px;margin-right:29px}.alertaTxt p{font-family:\"Roboto\";font-size:25px;color:#424242;padding-top:25px;line-height:1.2}.cliente{font-weight:bold;color:#008894;text-transform:capitalize}"

/***/ }),

/***/ "./src/app/components/consola-prioridades/pop-up-restriccion-entrega/pop-up-restriccion-entrega.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpRestriccionEntregaComponent; });
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

var PopUpRestriccionEntregaComponent = /** @class */ (function () {
    function PopUpRestriccionEntregaComponent() {
        this.cerrarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpRestriccionEntregaComponent.prototype.ngOnInit = function () {
    };
    PopUpRestriccionEntregaComponent.prototype.cerrar = function (valor) {
        this.cerrarPop.emit(valor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopUpRestriccionEntregaComponent.prototype, "cliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpRestriccionEntregaComponent.prototype, "cerrarPop", void 0);
    PopUpRestriccionEntregaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-restriccion-entrega',
            template: __webpack_require__("./src/app/components/consola-prioridades/pop-up-restriccion-entrega/pop-up-restriccion-entrega.component.html"),
            styles: [__webpack_require__("./src/app/components/consola-prioridades/pop-up-restriccion-entrega/pop-up-restriccion-entrega.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpRestriccionEntregaComponent);
    return PopUpRestriccionEntregaComponent;
}());



/***/ }),

/***/ "./src/app/components/consola-prioridades/pop-up-restriccion/pop-up-restriccion.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div id=\"id01\" class=\"modal\" #pop>\r\n    <div class=\"modal-content\">\r\n      <header class=\"header\">\r\n        <h1> PROQUIFA NET  </h1>\r\n      </header>\r\n\r\n      <div class=\"contenido\">\r\n        <div class=\"datos\">\r\n          <div class=\"alertaTxt\">\r\n            <p>¿ Estás seguro que deseas quitar la restricción a <label class=\"cliente\">{{empresa}}</label> ?</p>\r\n          </div>\r\n          <div class=\"option\">\r\n            <label style=\"padding-right: 30px\">Realizar entrega con:</label>\r\n              <div>\r\n                <img src=\"./assets/Images/radio_1.svg\" height=\"20px\"  (click)=\"select('factura')\" *ngIf=\"!facturaSelect\">\r\n                <img src=\"./assets/Images/radio_selected.svg\" height=\"20px\"  (click)=\"select('factura')\" *ngIf=\"facturaSelect\">\r\n                <label>Factura</label>\r\n              </div>\r\n              <div>\r\n                <img src=\"./assets/Images/radio_1.svg\" height=\"20px\" (click)=\"select('remision')\" *ngIf=\"!remisionSelect\">\r\n                <img src=\"./assets/Images/radio_selected.svg\" height=\"20px\"  (click)=\"select('remision')\" *ngIf=\"remisionSelect\">\r\n                <label>Remisión</label>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <footer class=\"footer2\" >\r\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar(false)\" >\r\n          <label> CANCELAR </label>\r\n        </a>\r\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar(true)\" [style.pointer-events]= \"facturaSelect || remisionSelect? 'auto': 'none'\" [style.background]=\"facturaSelect || remisionSelect? '#008894': '#C2C3CA'\">\r\n          <label> ACEPTAR </label>\r\n        </a>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/consola-prioridades/pop-up-restriccion/pop-up-restriccion.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal{z-index:11;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(238,238,238,.8);font-family:\"Roboto\",sans-serif}.modal-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:auto;text-align:center;background-color:#fff;position:relative;padding:0;outline:0;width:620px;height:439px;color:#424242;border-radius:25px;font-family:\"Roboto\";font-size:20px;border:1px solid #008a98}.header{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch;height:52px;background-color:#008894;border-radius:25px 25px 0px 0px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;justify-content:center;align-items:center}.header h1{top:20px;color:#fff;font-size:25px;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-weight:bold}.contenido{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:stretch;align-self:stretch;width:100%;height:50%;padding-top:3%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;color:#424242}.footer2{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch;height:20%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:30px;margin-left:30px}.btnOk{display:-webkit-box;display:-ms-flexbox;display:flex;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#008894;cursor:pointer}.btnOk>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.datos{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:40px;-webkit-box-sizing:border-box;box-sizing:border-box}.alerta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.alerta img.alert{width:100%;height:100%}.alertaTxt{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;align-self:auto;margin-bottom:10px;padding-left:30px;padding-right:30px}.alertaTxt p{font-family:\"Roboto\";font-size:29px;color:#313433;padding-top:25px;line-height:1.2}.option{height:89px;width:100%;z-index:5;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.option>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:26px}.option>div>img{cursor:pointer;padding-right:6px}.option::before{content:\"\";opacity:.1;background-color:#008894;z-index:-1;top:0;bottom:0;left:0;right:0;position:absolute}.cliente{color:#008894;font-weight:bold;text-transform:capitalize}"

/***/ }),

/***/ "./src/app/components/consola-prioridades/pop-up-restriccion/pop-up-restriccion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpRestriccionComponent; });
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

var PopUpRestriccionComponent = /** @class */ (function () {
    function PopUpRestriccionComponent() {
        this.cerrarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpRestriccionComponent.prototype.ngOnInit = function () {
        this.tipoF = '';
    };
    PopUpRestriccionComponent.prototype.cerrar = function (valor) {
        var obj;
        obj = {
            tipo: this.tipoF,
            valor: valor
        };
        this.cerrarPop.emit(obj);
    };
    PopUpRestriccionComponent.prototype.select = function (tipo) {
        if (tipo === 'factura') {
            this.tipoF = tipo;
            if (!this.facturaSelect) {
                this.facturaSelect = true;
                if (this.remisionSelect) {
                    this.remisionSelect = false;
                }
            }
        }
        else if (tipo === 'remision') {
            this.tipoF = tipo;
            if (!this.remisionSelect) {
                this.remisionSelect = true;
                if (this.facturaSelect) {
                    this.facturaSelect = false;
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopUpRestriccionComponent.prototype, "empresa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpRestriccionComponent.prototype, "cerrarPop", void 0);
    PopUpRestriccionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-restriccion',
            template: __webpack_require__("./src/app/components/consola-prioridades/pop-up-restriccion/pop-up-restriccion.component.html"),
            styles: [__webpack_require__("./src/app/components/consola-prioridades/pop-up-restriccion/pop-up-restriccion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpRestriccionComponent);
    return PopUpRestriccionComponent;
}());



/***/ }),

/***/ "./src/app/components/consola-prioridades/pop-up-tipo-pago/pop-up-tipo-pago.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\r\n\r\n  <div id=\"id01\" class=\"modal\" #pop>\r\n    <div class=\"modal-content\">\r\n      <header class=\"header\">\r\n        <h1> DATOS DEL CLIENTE </h1>\r\n      </header>\r\n\r\n      <div class=\"contenido\">\r\n        <div class=\"datosCliente\">\r\n          <div>\r\n            <label>{{datos.cliente}}</label>\r\n            <div>\r\n              <label style=\"color: #242424\"> {{contact}}</label>\r\n              <label>{{numberOrders}}</label>\r\n            </div>\r\n            <div>\r\n              <label>Contacto</label>\r\n              <label>con restricción</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"infoWarning\">\r\n          <div><label>Imposible facturar debido a que los pedidos cuentan con un método de pago PUE y forma de pago 99</label></div>\r\n        </div>\r\n        <div>\r\n          <span>Esac</span>\r\n          <div class=\"datas\">\r\n            <div style=\"width: 50%\"><label>{{esac.name}}</label></div>\r\n            <div><label>{{esac.ext}}</label></div>\r\n            <div style=\"width: 35%\"><label>{{esac.email}}</label></div>\r\n          </div>\r\n          <div class=\"datas\">\r\n            <div style=\"width: 50%\"><span>Contacto</span></div>\r\n            <div><span>Extensión</span></div>\r\n            <div style=\"width: 35%\"><span>Correo Electrónico</span></div>\r\n          </div>\r\n        </div>\r\n        <div style=\"background-color: #f3f9f9\">\r\n          <span>Cobrador</span>\r\n          <div class=\"datas\">\r\n            <div style=\"width: 50%\"><label>{{debtCollector.name}}</label></div>\r\n            <div><label>{{debtCollector.ext}}</label></div>\r\n            <div style=\"width: 35%\"><label>{{debtCollector.email}}</label></div>\r\n          </div>\r\n          <div class=\"datas\">\r\n            <div style=\"width: 50%\"><span>Contacto</span></div>\r\n            <div><span>Extensión</span></div>\r\n            <div style=\"width: 35%\"><span>Correo Electrónico</span></div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <span style=\"font-weight: bold\">Pedidos con Resticción</span>\r\n          <textarea [disabled]=\"true\" [ngModel]=\"pedidos\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <footer class=\"footer2\">\r\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar()\" >\r\n          <label> ACEPTAR </label>\r\n        </a>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/consola-prioridades/pop-up-tipo-pago/pop-up-tipo-pago.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal{z-index:11;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(238,238,238,.8);font-family:\"Roboto\",sans-serif}.modal-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:auto;text-align:center;background-color:#fff;position:relative;padding:0;outline:0;height:673px;width:793px;color:#424242;border-radius:25px;font-family:\"Roboto\";font-size:20px;border:1px solid #008a98}.header{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch;height:52px;background-color:#008894;border-radius:24px 24px 0px 0px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;justify-content:center;align-items:center}.header h1{top:20px;color:#fff;font-size:25px;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-weight:bold}.contenido{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:stretch;align-self:stretch;width:100%;height:516px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;color:#424242;-webkit-box-sizing:border-box;box-sizing:border-box}.contenido>div{height:135px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:20px;padding-right:20px;padding-top:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.contenido>div>span{font-family:Roboto;font-weight:400;font-size:18px;color:#008894;padding-bottom:12px}.contenido>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%}.footer2{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch;height:68px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btnOk{display:-webkit-box;display:-ms-flexbox;display:flex;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#008a98;cursor:pointer}.btnOk>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.datos{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40%;padding-bottom:10%;-webkit-box-sizing:border-box;box-sizing:border-box}.datosCliente{height:90px !important;width:100%;padding:20px 20px 0 20px}.datosCliente>div{padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1.5;border-bottom:1px solid #424242}.datosCliente>div>label{font-family:Novecento !important;font-weight:bold !important;font-size:20px !important;color:#008894 !important}.datosCliente>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}.datosCliente>div>div>label{font-family:Roboto;font-weight:400;font-size:14px;color:#008894}textarea{resize:none;border:none;height:80px;width:100%;font-family:Roboto;font-weight:400;font-size:18px;color:#424242}.datas{-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:3px !important}.datas>div{width:15%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box}.datas>div>label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242}.datas>div>span{font-family:Roboto;font-weight:400;font-size:15px;color:#848387}.infoWarning{height:70px !important;padding-top:10px !important}.infoWarning>div{height:100% !important;border-bottom:1px solid !important}"

/***/ }),

/***/ "./src/app/components/consola-prioridades/pop-up-tipo-pago/pop-up-tipo-pago.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpTipoPagoComponent; });
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

var PopUpTipoPagoComponent = /** @class */ (function () {
    function PopUpTipoPagoComponent() {
        this.cerrarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpTipoPagoComponent.prototype.ngOnChanges = function () {
        if (this.datos !== undefined && this.datos !== null) {
            this.getInformation();
        }
    };
    PopUpTipoPagoComponent.prototype.ngOnInit = function () {
    };
    PopUpTipoPagoComponent.prototype.getInformation = function () {
        var arrayContac = this.datos.contacto.split(' ');
        this.pedidos = this.datos.cpedidos.toString().replace(',', ', ');
        if (arrayContac.length >= 2) {
            this.contact = arrayContac[0] + ' ' + arrayContac[1] + ' · ' + this.datos.puesto;
        }
        else {
            this.contact = arrayContac[0];
        }
        if (this.datos.cpedidos.length > 1) {
            this.numberOrders = this.datos.cpedidos.length + ' Pedidos';
        }
        else {
            this.numberOrders = this.datos.cpedidos.length + ' Pedido';
        }
        this.esac = this.validateDatas(this.datos.nombreEsac, this.datos.emailEsac, this.datos.extEsac);
        this.debtCollector = this.validateDatas(this.datos.nombreCobrador, this.datos.emailCobrador, this.datos.extCobrador);
    };
    PopUpTipoPagoComponent.prototype.validateDatas = function (nombre, email, ext) {
        var datas = new Object;
        if (nombre === null) {
            nombre = 'ND';
        }
        if (email === null) {
            email = 'ND';
        }
        if (ext === null) {
            ext = 'ND';
        }
        datas = {
            name: nombre,
            email: email,
            ext: ext
        };
        return datas;
    };
    PopUpTipoPagoComponent.prototype.cerrar = function () {
        this.cerrarPop.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpTipoPagoComponent.prototype, "datos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpTipoPagoComponent.prototype, "cerrarPop", void 0);
    PopUpTipoPagoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-tipo-pago',
            template: __webpack_require__("./src/app/components/consola-prioridades/pop-up-tipo-pago/pop-up-tipo-pago.component.html"),
            styles: [__webpack_require__("./src/app/components/consola-prioridades/pop-up-tipo-pago/pop-up-tipo-pago.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpTipoPagoComponent);
    return PopUpTipoPagoComponent;
}());



/***/ })

});
//# sourceMappingURL=consola-prioridades.module.chunk.js.map