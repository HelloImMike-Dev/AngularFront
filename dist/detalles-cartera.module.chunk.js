webpackJsonp(["detalles-cartera.module"],{

/***/ "./src/app/components/catalogo/detalles-cartera/detalles-cartera-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallesCarteraRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalles_cartera_component__ = __webpack_require__("./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetallesCarteraRoutingModule = /** @class */ (function () {
    function DetallesCarteraRoutingModule() {
    }
    DetallesCarteraRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__detalles_cartera_component__["a" /* DetallesCarteraComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], DetallesCarteraRoutingModule);
    return DetallesCarteraRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"linksCarteras\" [homePath]=\"homePath\"></pn-header-bc>\r\n<div class=\"header\">\r\n  <div class=\"cartera-info-basica\">\r\n    <p class=\"bold\">{{cartera.nombreCartera}}</p>\r\n    <p>{{cartera.folio}}</p>\r\n    <p>{{cartera.categoria}} · {{cartera.nivelIngreso}}</p>\r\n  </div>\r\n  <div class=\"vertical-line\"></div>\r\n  <div class=\"periodo-facturacion\">\r\n    <div class=\"datos-cont\">\r\n      <div class=\"superior\">\r\n        <p class=\"bold title\">FPAc</p>\r\n        <p class=\"subtitle\">Part</p>\r\n      </div>\r\n      <div class=\"inferior\">\r\n        <p class=\"bold\">${{cartera.facturacionActual | acFormatNumber2decimal }}</p>\r\n        <p>{{porcentajeComparacionfacturaGlobal(cartera.facturacionActual) | acFormatNumber2decimal }}%</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"datos-cont flecha-cont\">\r\n      <div>\r\n        <p></p>\r\n        <p></p>\r\n      </div>\r\n      <div>\r\n        <img class=\"flecha-periodos\" src=\"assets/Images/catalogo/flecharoja.png\" />\r\n        <p class=\"flecha-texto\">{{calcularPorcentaje(cartera.facturacionActual, cartera.facturacionAnterior) | acFormatNumber2decimal }}%</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"datos-cont\">\r\n      <div class=\"superior\">\r\n        <p class=\"bold title\">FACTURACIÓN</p>\r\n        <p class=\"subtitle\">Periodo anterior</p>\r\n      </div>\r\n      <div class=\"inferior\">\r\n        <div>\r\n          <p class=\"bold title\">${{cartera.facturacionAnterior | acFormatNumber2decimal }}</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"subtitle\">{{porcentajeComparacionfacturaGlobal(cartera.facturacionAnterior) | acFormatNumber2decimal }}%</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"datos-cartera\">\r\n    <div class=\"objetivo-promedio\">\r\n      <div class=\"datos-cont\">\r\n        <div class=\"superior\">\r\n          <p class=\"bold title\">OF</p>\r\n          <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\r\n        </div>\r\n        <div class=\"inferior\">\r\n          <p class=\"bold title\">${{cartera.objetivoFundamental | acFormatNumber2decimal }}</p>\r\n          <div class=\"objetivo-valor\">\r\n            <img class=\"objetivo min\" src=\"assets/Images/catalogo/objetivo.svg\" />\r\n            <p class=\"subtitle\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior, cartera.objetivoFundamental) | acFormatNumber2decimal }}%</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"datos-cont\">\r\n        <div class=\"superior\">\r\n          <p class=\"bold title\">OD</p>\r\n          <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\r\n        </div>\r\n        <div class=\"inferior\">\r\n          <p class=\"bold title\">${{cartera.objetivoDeseado | acFormatNumber2decimal }}</p>\r\n          <div class=\"objetivo-valor\">\r\n            <img class=\"objetivo min\" src=\"assets/Images/catalogo/objetivo.svg\" />\r\n            <p class=\"subtitle\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior, cartera.objetivoDeseado) | acFormatNumber2decimal }}%</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"datos-cont\">\r\n        <div class=\"superior\">\r\n          <p class=\"bold title\">PROMEDIO</p>\r\n          <p class=\"subtitle\">Facturado</p>\r\n        </div>\r\n        <div class=\"inferior\">\r\n          <p class=\"bold title\">${{cartera.promedioFacturacion | acFormatNumber2decimal }}</p>\r\n          <div class=\"objetivo-valor\">\r\n            <p>&nbsp;</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"proyeccion-venta\">\r\n      <div class=\"pv-label top\">\r\n        <p class=\"bold\">PV</p>\r\n        <img class=\"pv-grafica\" src=\"assets/Images/catalogo/Recurso_209.svg\" />\r\n      </div>\r\n      <div class=\"pv-cont bot\">\r\n        <p class=\"pv-cant bold space\">${{cartera.proyeccionVenta | acFormatNumber2decimal}}</p>\r\n        <div class=\"pv-arrows-cont\">\r\n          <div class=\"pv-arrow\">\r\n            <p class=\"fant-value\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\r\n            <img class=\"arrow fant-img\" [src]=\"'assets/Images/catalogo/' + (cartera.facturacionAnterior <= cartera.proyeccionVenta ? 'arriba1.png': 'abajo1.png')\" />\r\n          </div>\r\n          <div class=\"pv-arrow\">\r\n            <p class=\"of-value\">{{calcularCambioEnProcentaje(cartera.objetivoFundamental, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\r\n            <img class=\"arrow of-img\" [src]=\"'assets/Images/catalogo/' + (cartera.objetivoFundamental <= cartera.proyeccionVenta ? 'arriba2.png': 'abajo2.png')\" />\r\n          </div>\r\n          <div class=\"pv-arrow\">\r\n            <p class=\"od-value\">{{calcularCambioEnProcentaje(cartera.objetivoDeseado, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\r\n            <img class=\"arrow od-img\" [src]=\"'assets/Images/catalogo/' + (cartera.objetivoDeseado <= cartera.proyeccionVenta ? 'arriba3.png': 'abajo3.png')\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"deudas-cont\">\r\n      <div class=\"datos-cont\">\r\n        <p class=\"bold superior\">DEBE</p>\r\n        <p class=\"bold inferior\">${{cartera.debe | acFormatNumber2decimal }}</p>\r\n      </div>\r\n      <div class=\"datos-cont\">\r\n        <p class=\"bold superior\">DEBEMOS</p>\r\n        <p class=\"bold inferior\">${{cartera.debemos | acFormatNumber2decimal }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"vertical-line\"></div>\r\n  <div class=\"cartera-info-detalle\">\r\n    <div class=\"detalle-column\">\r\n      <div class=\"detalle\">\r\n        <img src=\"assets/Images/catalogo/creadorB.svg\" />\r\n        <p class=\"subtitle\">{{cartera.elaboro || 'ND'}}</p>\r\n      </div>\r\n      <div class=\"detalle\">\r\n        <img src=\"assets/Images/catalogo/Recurso 201.svg\" />\r\n        <p class=\"subtitle\">{{cartera.industria || 'ND'}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"detalle-column\">\r\n      <div class=\"detalle\">\r\n        <img src=\"assets/Images/catalogo/Recurso 213.svg\" />\r\n        <p class=\"subtitle\">{{cartera.esac || 'ND'}}</p>\r\n      </div>\r\n      <div class=\"detalle\">\r\n        <img src=\"assets/Images/catalogo/importancia.svg\" />\r\n        <p class=\"subtitle\">{{cartera.estrella || 'ND'}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"detalle-column\">\r\n      <div class=\"detalle\">\r\n        <img src=\"assets/Images/catalogo/EV.svg\" />\r\n        <p class=\"subtitle\">{{cartera.ev || 'ND'}}</p>\r\n      </div>\r\n      <div class=\"detalle\">\r\n        <img src=\"assets/Images/catalogo/dificultad.png\" />\r\n        <p class=\"subtitle\">{{cartera.triangulo || 'ND'}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"detalle-column\">\r\n      <div class=\"detalle\">\r\n        <img src=\"assets/Images/catalogo/cobradorB.svg\" />\r\n        <p class=\"subtitle\">{{cartera.cobrador || 'ND'}}</p>\r\n      </div>\r\n      <div class=\"detalle\">\r\n        <img src=\"assets/Images/catalogo/todos.svg\" />\r\n        <p class=\"subtitle\">{{cartera.numeroClientes || 'ND'}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"detalle-column\">\r\n      <div class=\"detalle\">\r\n        <img src=\"assets/Images/catalogo/Recurso 213.svg\" />\r\n        <p class=\"subtitle\">{{cartera.evt || 'ND'}}</p>\r\n      </div>\r\n      <div class=\"detalle\">\r\n        <img src=\"assets/Images/catalogo/msjero.svg\" />\r\n        <p class=\"subtitle\">{{cartera.mensajero || 'ND'}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"clients-content\">\r\n  <div class=\"client-wrapper\" *ngFor=\"let cliente of cartera.clientes\">\r\n    <flip-card [cliente]=\"cliente\">\r\n\r\n    </flip-card>\r\n  </div>\r\n</div>\r\n<div class=\"nomenclatura-cont\">\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <p class=\"bold title\">FPACT</p>\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Facturación Periódo Act.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <p class=\"bold title\">PART</p>\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Participación</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <p class=\"bold title\">OF</p>\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Obj. Fundamental</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <p class=\"bold title\">OD</p>\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Obj. Deseado</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <p class=\"bold title\">PV</p>\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Proyección Venta</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Objetivo</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/Recurso_209.svg\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Creador</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/esac.svg\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">ESAC</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/esac.svg\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">EVT</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/EV.svg\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">EV</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/cobradorB.svg\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Cobrador</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/Recurso 201.svg\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Farmaceútica</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/importancia.svg\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Importancia</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/dificultad.png\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Dificultad</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/msjero.svg\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Mensajero</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"nomen-bloque\">\r\n    <div class=\"nomen-row\">\r\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/todos.svg\" />\r\n    </div>\r\n    <div class=\"nomen-row\">\r\n      <p class=\"subtitle\">Clientes</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <div class=\"footer-column\">\r\n    <div (click)=\"clicked()\" class=\"green-button extra-large\" >EXPORTAR</div>\r\n  </div>\r\n  <div class=\"footer-column\">\r\n    <div (click)=\"modal = true\" class=\"green-button extra-large\" >ELIMINAR</div>\r\n    <div (click)=\"redirectEdit()\" class=\"green-button extra-large\" >EDITAR</div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"modal\" class=\"modal\">\r\n  <div (click)=\"modal = false\" class=\"modal-bg\"></div>\r\n  <div class=\"modal-content\">\r\n    <div class=\"header\">\r\n      <p>ProquifaNet</p>\r\n      <div (click)=\"modal = false\" class=\"close-modal\" >X</div>\r\n    </div>\r\n    <div class=\"body\">\r\n      <div class=\"message\">\r\n        <p>¿Estás seguro de eliminar la cartera {{cartera.nombreCartera}}?</p>\r\n      </div>\r\n      <div class=\"options\">\r\n        <div (click)=\"modal = false\" class=\"green-button extra-large\" >Cancelar</div>\r\n        <div (click)=\"deleteWallet()\" class=\"red-button extra-large\" >Eliminar</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"modalDelete\" class=\"modal\">\r\n  <div class=\"modal-bg\"></div>\r\n  <div class=\"modal-content\">\r\n    <div class=\"header\">\r\n      <p>ProquifaNet</p>\r\n    </div>\r\n    <div class=\"body\">\r\n      <div class=\"message\">\r\n        <p>La cartera fue eliminada correctamente.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}:host .header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;background-color:#eceef0;width:100%;height:16%;max-height:193px;font-size:13px}:host .header .cartera-info-basica{min-width:126.16px;width:11%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .header .cartera-info-basica p{padding:3px 0}:host .header .cartera-info-basica p:nth-child(1){font-family:\"Roboto-bold\"}:host .header .cartera-info-basica p:nth-child(2),:host .header .cartera-info-basica p:nth-child(3){font-family:\"Roboto-regular\"}:host .header .vertical-line{position:relative;width:1px;height:85%;background-color:#979797;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host .header .periodo-facturacion{min-width:172.05px;width:15%;height:90%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .header .periodo-facturacion .datos-cont{width:40%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .header .periodo-facturacion .datos-cont div{width:100%;text-align:center}:host .header .periodo-facturacion .datos-cont.flecha-cont{width:20%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .header .periodo-facturacion .datos-cont.flecha-cont div{width:auto}:host .header .periodo-facturacion .datos-cont.flecha-cont div:nth-child(2){margin-top:30px}:host .header .periodo-facturacion .datos-cont.flecha-cont div:nth-child(2) .flecha-periodos{max-width:28px;max-height:14px}:host .header .periodo-facturacion .datos-cont.flecha-cont div:nth-child(2) .flecha-texto{margin-top:5px;color:#c1272d;font-weight:300}:host .header .datos-cartera{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;min-width:573.5px;width:50%}:host .header .datos-cartera .objetivo-promedio{height:90%;width:40%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}:host .header .datos-cartera .objetivo-promedio .datos-cont{width:33%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .header .datos-cartera .objetivo-promedio .datos-cont div{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .header .datos-cartera .objetivo-promedio .datos-cont .objetivo-valor{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .header .datos-cartera .objetivo-promedio .datos-cont .objetivo-valor p{margin-left:5px}:host .header .datos-cartera .proyeccion-venta{height:100%;width:35%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .header .datos-cartera .proyeccion-venta .pv-label.top{margin-bottom:13%}:host .header .datos-cartera .proyeccion-venta .pv-label .pv-grafica{max-width:24px;max-height:20px}:host .header .datos-cartera .proyeccion-venta p{text-align:center}:host .header .datos-cartera .proyeccion-venta .pv-cont{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}:host .header .datos-cartera .proyeccion-venta .pv-cont .pv-arrows-cont{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;position:absolute;bottom:-10px}:host .header .datos-cartera .proyeccion-venta .pv-cont .pv-arrows-cont .pv-arrow{width:33%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .header .datos-cartera .proyeccion-venta .pv-cont .pv-arrows-cont .pv-arrow .arrow{margin-left:10px;max-width:28px;max-height:14px}:host .header .datos-cartera .proyeccion-venta .fant-value{color:#008895}:host .header .datos-cartera .proyeccion-venta .of-value{color:#279e96}:host .header .datos-cartera .proyeccion-venta .od-value{color:#279e96;opacity:.5}:host .header .datos-cartera .deudas-cont{width:25%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:90%}:host .header .datos-cartera .deudas-cont .datos-cont{width:50%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .header .datos-cartera .deudas-cont .datos-cont p{width:100%;text-align:center}:host .header .datos-cartera .deudas-cont .datos-cont .objetivo-valor{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .header .datos-cartera .deudas-cont .datos-cont .objetivo-valor p{margin-left:5px}:host .header .datos-cartera>div{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .header .cartera-info-detalle{display:-webkit-box;display:-ms-flexbox;display:flex;width:calc(24% - 2px);height:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-size:12px}:host .header .cartera-info-detalle .detalle-column{width:25%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}:host .header .cartera-info-detalle .detalle-column .detalle{width:20%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .header .cartera-info-detalle .detalle-column .detalle img{width:34px;height:34px}:host .header .cartera-info-detalle .detalle-column .detalle p{font-size:9px;margin-top:5px}:host .header .space{margin-bottom:10px}:host .header .toRight{text-align:right !important}:host .clients-content{width:100%;height:70%;padding-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:auto}:host .clients-content .client-wrapper{width:25%;height:40%;min-height:280px}:host .objetivo{width:17px;height:17px}:host .objetivo.min{width:10px;height:10px}:host .nomenclatura-cont{width:100%;height:4%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-wrap:wrap;flex-wrap:wrap;border-top:2px solid #eceef0;border-bottom:2px solid #4a4a4a;padding:10px 0}:host .nomenclatura-cont .nomen-bloque{max-width:5.5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 10px}:host .nomenclatura-cont .nomen-bloque .nomen-row{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:10px}:host .nomenclatura-cont .nomen-bloque .nomen-row p{text-align:center}:host .nomenclatura-cont .nomen-bloque .nomen-row:last-child p{margin-top:10px}:host .footer{height:5%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:5%}:host .footer .footer-column:first-child{margin-left:20px;width:auto;margin-right:0}:host .footer .footer-column{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:20px}:host .footer .footer-column div:first-child{margin-right:20px}:host   .bold{font-weight:bold}:host .green-button{background-color:#008895;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:\"Novecento-Demibold\"}:host .green-button:hover{cursor:pointer;background-color:#329faa}:host .red-button{background-color:#950d00;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:\"Novecento-Demibold\"}:host .red-button:hover{cursor:pointer;background-color:#aa3d32}:host .medium{padding:5px 10px}:host .large{padding:3px 15px}:host .extra-large{width:200px;height:30px}:host .superior{margin-bottom:16%;margin-top:14%}:host .inferior{margin-top:16%}:host .modal .modal-bg{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#ccc;opacity:.7;z-index:5}:host .modal .modal-content{z-index:6;position:fixed;top:45%;left:35%;width:30%;min-width:400px}:host .modal .modal-content .header{background-color:#008895;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:5px 0;border-top-left-radius:15px;border-top-right-radius:15px;font-size:24px}:host .modal .modal-content .header .close-modal{position:absolute;right:20px;font-size:20px}:host .modal .modal-content .header .close-modal:hover{cursor:pointer}:host .modal .modal-content .body{border-bottom-left-radius:15px;border-bottom-right-radius:15px;background-color:#fff;padding:20px 25px}:host .modal .modal-content .body .message{margin-bottom:15px}:host .modal .modal-content .body .message p{text-align:center}:host .modal .modal-content .body .options{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}:host .title{font-family:\"Roboto-bold\"}:host .subtitle{font-family:\"Roboto-regular\"}@media(max-width: 1801px){:host .header{font-size:10px}:host .header .cartera-info-detalle .detalle-column .detalle img{width:28px;height:28px}:host .header .cartera-info-detalle .detalle-column .detalle p{font-size:7px;margin-top:5px}:host .superior{margin-bottom:12%}:host .inferior{margin-top:12%}}@media(max-width: 1990px){:host .clients-content .client-wrapper{width:33.3%}}@media(max-height: 1100px){:host .header .datos-cartera .proyeccion-venta .pv-label.top{margin-bottom:6% !important}:host .clients-content{height:70%;padding-top:0}:host .clients-content{height:70%;padding-top:0}:host .extra-large{width:150px;height:25px}:host .objetivo{width:15px;height:15px}:host .superior{margin-bottom:12%}:host .inferior{margin-top:0}:host .nomenclatura-cont{min-height:54px;padding:2px 0;height:5%}:host .nomenclatura-cont .nomen-bloque .nomen-row:last-child p{margin-top:3px;font-size:8px}:host .footer{height:7%}}"

/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallesCarteraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_catalogo_cartera_class__ = __webpack_require__("./src/app/class/catalogo/cartera.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_catalogo_cliente_class__ = __webpack_require__("./src/app/class/catalogo/cliente.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetallesCarteraComponent = /** @class */ (function () {
    function DetallesCarteraComponent(catalogoService, http, router, coreContainer, route) {
        this.catalogoService = catalogoService;
        this.http = http;
        this.router = router;
        this.coreContainer = coreContainer;
        this.route = route;
        this.linksCarteras = [
            { label: 'Clientes', path: '/protected/catalogo/clientes' },
            { label: 'Carteras', path: '/protected/catalogo/clientes/carteras' },
        ];
        this.homePath = '/protected/catalogo';
        this.idCartera = 0;
        this.cartera = new __WEBPACK_IMPORTED_MODULE_4__class_catalogo_cartera_class__["a" /* Cartera */]();
        this.modal = false;
        this.modalDelete = false;
    }
    DetallesCarteraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coreContainer.openModal(0);
        var idCartera = this.route.snapshot.paramMap.get('id');
        this.catalogoService.obtenerCarterasPorUsuario({ idFuncion: 0, idResponsable: 0, idCartera: Number(idCartera) })
            .subscribe(function (data) {
            data.current.map(function (clienteData, index) {
                var cartera;
                if (index === 0) {
                    cartera = new __WEBPACK_IMPORTED_MODULE_4__class_catalogo_cartera_class__["a" /* Cartera */]();
                    cartera.setIdCartera(clienteData.idCartera);
                    cartera.setNombreCartera(clienteData.cart_nombre);
                    cartera.setArea(clienteData.area);
                    cartera.setRuta(clienteData.ruta);
                    cartera.setIndustria(clienteData.industria);
                    cartera.setEstrella(clienteData.importancia);
                    cartera.setTriangulo(clienteData.dificultad);
                    cartera.setFolio(clienteData.folio);
                    cartera.setEsac(clienteData.cart_nombreEsac);
                    cartera.setEv(clienteData.cart_nombreEv);
                    cartera.setEvt(clienteData.cart_nombreEVT);
                    cartera.setCobrador(clienteData.cart_nombreCobrador);
                    cartera.setElaboro(clienteData.cart_nombreElaboro);
                    cartera.setMensajero(clienteData.cart_nombreMensajero);
                    cartera.setNumeroClientes(1);
                    cartera.setFacturacionGlobal(clienteData.cli_factGlobal);
                    cartera.setFacturacionActual(clienteData.cart_facturacionAct);
                    cartera.setFacturacionAnterior(clienteData.cart_facturacionAnt);
                    cartera.setObjetivoFundamental(clienteData.cart_montoFundamental);
                    cartera.setObjetivoDeseado(clienteData.cart_montoDeseado);
                    cartera.setProyeccionVenta(clienteData.cart_proyeccionVenta);
                    cartera.setPromedioFacturacion(clienteData.cart_promedioFacturacion);
                    cartera.setDebemos(clienteData.cart_debemos);
                    cartera.setDebe(clienteData.cart_deben);
                    cartera.setPublicada(clienteData.cart_publicada);
                    cartera.setNivelIngreso(clienteData.nivelIngreso);
                    cartera.setCategoria(clienteData.cli_categoria);
                    var cliente = new __WEBPACK_IMPORTED_MODULE_5__class_catalogo_cliente_class__["a" /* Cliente */]();
                    cliente.setId(clienteData.idCliente);
                    cliente.setNombre(clienteData.nombre);
                    cliente.setNivelIngreso(clienteData.nivelIngreso);
                    cliente.setFacturaAct(clienteData.cli_facturacionAct);
                    cliente.setFacturaAnt(clienteData.cli_facturacionAnt);
                    cliente.setObjetivoFundamental(clienteData.cli_monto_ObjetivoFundamental);
                    cliente.setObjetivoDeseado(clienteData.cli_monto_ObjetivoDeseado);
                    cliente.setPromedioFacturado(clienteData.cli_promedioFacturacion);
                    cliente.setProyeccionVenta(clienteData.cli_proyeccionVenta);
                    cliente.setImagen(clienteData.imagen);
                    cliente.setCategoria(clienteData.cli_categoria);
                    cartera.setClientes([cliente]);
                    _this.cartera = cartera;
                }
                else {
                    cartera = _this.cartera;
                    cartera.setEstrella(cartera.getEstrella() || clienteData.importancia);
                    cartera.setTriangulo(cartera.getTriangulo() || clienteData.dificultad);
                    var cliente = new __WEBPACK_IMPORTED_MODULE_5__class_catalogo_cliente_class__["a" /* Cliente */]();
                    cliente.setId(clienteData.idCliente);
                    cliente.setNombre(clienteData.nombre);
                    cliente.setNivelIngreso(clienteData.nivelIngreso);
                    cliente.setFacturaAct(clienteData.cli_facturacionAct);
                    cliente.setFacturaAnt(clienteData.cli_facturacionAnt);
                    cliente.setObjetivoFundamental(clienteData.cli_monto_ObjetivoFundamental);
                    cliente.setObjetivoDeseado(clienteData.cli_monto_ObjetivoDeseado);
                    cliente.setPromedioFacturado(clienteData.cli_promedioFacturacion);
                    cliente.setProyeccionVenta(clienteData.cli_proyeccionVenta);
                    cliente.setImagen(clienteData.imagen);
                    cliente.setCategoria(clienteData.cli_categoria);
                    cartera.setClientes(cartera.getClientes().concat([cliente]));
                    cartera.setNumeroClientes(cartera.getNumeroClientes() + 1);
                }
            });
            _this.linksCarteras.push({ label: _this.cartera.nombreCartera, path: '' });
            _this.coreContainer.closeModal(0);
        });
    };
    DetallesCarteraComponent.prototype.calcularFlujoFacturaciones = function () {
        if (this.cartera.facturacionActual >= this.cartera.facturacionAnterior) {
            return '+' + ((this.cartera.facturacionActual / this.cartera.facturacionAnterior * 100) - 100);
        }
        return '-' + (100 - (this.cartera.facturacionActual / this.cartera.facturacionAnterior * 100));
    };
    DetallesCarteraComponent.prototype.calcularPorcentaje = function (primerValor, segundoValor) {
        if (primerValor >= segundoValor) {
            return '+' + ((primerValor / segundoValor * 100) - 100);
        }
        return '-' + (100 - (primerValor / segundoValor * 100));
    };
    DetallesCarteraComponent.prototype.porcentajeComparacionfacturaGlobal = function (primerValor) {
        if (primerValor >= this.cartera.facturacionGlobal) {
            return (primerValor / this.cartera.facturacionGlobal * 100);
        }
        return (primerValor / this.cartera.facturacionGlobal * 100);
    };
    DetallesCarteraComponent.prototype.calcularCambioEnProcentaje = function (valorAntiguo, valorNuevo) {
        return ((valorNuevo - valorAntiguo) / valorAntiguo * 100);
    };
    DetallesCarteraComponent.prototype.deleteWallet = function () {
        var _this = this;
        this.modal = false;
        this.coreContainer.openModal(0);
        this.catalogoService.eliminarCartera({ idUsuario: 0, idCartera: this.cartera.idCartera }).subscribe(function (data) {
            console.log('Cartera eliminada correctamente');
            _this.coreContainer.closeModal(0);
            _this.modal = false;
            _this.modalDelete = true;
            setTimeout(function () {
                _this.modalDelete = false;
                _this.router.navigate(['/protected/catalogo/clientes/carteras']);
            }, 3000);
        });
    };
    DetallesCarteraComponent.prototype.redirectEdit = function () {
        this.router.navigate(['/protected/catalogo/clientes/carteras/edit/', this.cartera.idCartera]);
    };
    DetallesCarteraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'detalles-cartera',
            template: __webpack_require__("./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__["a" /* CatalogoService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DetallesCarteraComponent);
    return DetallesCarteraComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/detalles-cartera.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCarteraModule", function() { return DetallesCarteraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalles_cartera_routing_module__ = __webpack_require__("./src/app/components/catalogo/detalles-cartera/detalles-cartera-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detalles_cartera_component__ = __webpack_require__("./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flip_card_flip_card_component__ = __webpack_require__("./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DetallesCarteraModule = /** @class */ (function () {
    function DetallesCarteraModule() {
    }
    DetallesCarteraModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__detalles_cartera_routing_module__["a" /* DetallesCarteraRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__detalles_cartera_component__["a" /* DetallesCarteraComponent */],
                __WEBPACK_IMPORTED_MODULE_7__flip_card_flip_card_component__["a" /* FlipCardComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_catalogo_catalogo_service__["a" /* CatalogoService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__detalles_cartera_component__["a" /* DetallesCarteraComponent */]
            ]
        })
    ], DetallesCarteraModule);
    return DetallesCarteraModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flip-container\" >\r\n  <div [ngClass]=\"'flipper' + (flipOnEvent ? ' flip': '')\">\r\n    <div class=\"front-face\" (click)=\"flipCard(true)\">\r\n      <img class=\"\" [src]=\"cliente.imagen !== null ? 'assets/Images/clientes/' + cliente.id+'.png' : 'assets/Images/clientes/default.png'\" />\r\n      <p *ngIf=\"!cliente.imagen\" class=\"client-name\">{{cliente.nombre}}</p>\r\n    </div>\r\n    <div class=\"back-face\">\r\n      <div class=\"client-name-cont\">\r\n        <p class=\"bold title\">{{cliente.nombre}}</p>\r\n        <img class=\"tache\" src=\"assets/Images/catalogo/tache_Carteras.png\" (click)=\"flipCard(false)\" />\r\n      </div>\r\n      <div class=\"info-cont\">\r\n        <div class=\"info-block\">\r\n          <div class=\"block-info left\">\r\n            <div>\r\n              <div class=\"fac\">\r\n                <p class=\"bold\">FACT Actual</p>\r\n                <p class=\"money bold\">${{cliente.facturaAct | acFormatNumber2decimal}}</p>\r\n              </div>\r\n              <div class=\"bloque\">\r\n                <div class=\"label\">\r\n                  <p class=\"light\">Objetivo Fundamental</p>\r\n                </div>\r\n                <div>\r\n                  <div class=\"money bold right\">${{cliente.objetivoFundamental | acFormatNumber2decimal}}</div>\r\n                  <div class=\"porcent\">\r\n                    <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\r\n                    <p>{{calcularCambioEnProcentaje(cliente.facturaAnt, cliente.objetivoFundamental) | acFormatNumber2decimal}}%</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"bloque\">\r\n                <div class=\"label\">\r\n                  <p class=\"light\">Promedio facturado</p>\r\n                </div>\r\n                <div>\r\n                  <div class=\"money bold\">${{cliente.promedioFacturado | acFormatNumber2decimal}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"block-info right\">\r\n            <div>\r\n              <div class=\"fac\">\r\n                <p class=\"bold\">FACT Anterior</p>\r\n                <p class=\"money bold\">${{cliente.facturaAnt | acFormatNumber2decimal}}</p>\r\n              </div>\r\n              <div class=\"bloque\">\r\n                <div class=\"label\">\r\n                  <p class=\"light\">Objetivo Deseado</p>\r\n                </div>\r\n                <div>\r\n                  <div class=\"money bold right\">${{cliente.objetivoDeseado | acFormatNumber2decimal}}</div>\r\n                  <div class=\"porcent\">\r\n                    <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\r\n                    <p>{{calcularCambioEnProcentaje(cliente.facturaAnt, cliente.objetivoDeseado) | acFormatNumber2decimal}}%</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"bloque\">\r\n                <div class=\"label\">\r\n                  <p class=\"light\">Proyección venta</p>\r\n                </div>\r\n                <div>\r\n                  <div class=\"money bold right\">${{cliente.proyeccionVenta | acFormatNumber2decimal}}</div>\r\n                  <div class=\"porcent\">\r\n                    <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\r\n                    <p>{{calcularCambioEnProcentaje(cliente.facturaAnt, cliente.proyeccionVenta) | acFormatNumber2decimal}}%</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{width:100%;height:100%}:host .flip-container{width:100%;height:100%}:host .flip-container .flipper.flip{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host .flip-container:hover .flipper .front-face{-webkit-filter:grayscale(0);filter:grayscale(0);cursor:pointer}:host .flip-container .flipper{width:100%;height:100%;-webkit-transition:800ms cubic-bezier(0.58, 0.06, 0.67, 1.45);transition:800ms cubic-bezier(0.58, 0.06, 0.67, 1.45);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}:host .flip-container .flipper:host ::ng-deep div.front-face:nth-child(1),:host .flip-container .flipper:host ::ng-deep div.back-face:nth-child(2){position:absolute;top:0;left:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}:host .flip-container .flipper:host ::ng-deep div.front-face:nth-child(1){z-index:2;-webkit-transform:rotateY(0);transform:rotateY(0)}:host .flip-container .flipper:host ::ng-deep div.back-face:nth-child(2){-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host .flip-container .flipper .front-face{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-filter:grayscale(100);filter:grayscale(100);-webkit-transition:400ms;transition:400ms}:host .flip-container .flipper .front-face img{-webkit-transform:scale(1.3);transform:scale(1.3)}:host .flip-container .flipper .front-face .client-name{position:absolute;width:100%;left:0;bottom:10px;text-align:center;font-family:\"Roboto\"}:host .flip-container .flipper .back-face{width:calc(100% - 28px);height:calc(100% - 24px);background-color:#e7f4f5;padding:12px 14px}:host .flip-container .flipper .back-face .client-name-cont{width:100%;height:20%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;border-bottom:1px solid #000}:host .flip-container .flipper .back-face .client-name-cont .title{font-size:22px;width:calc(100% - 20px);text-align:center}:host .flip-container .flipper .back-face .client-name-cont .tache{position:absolute;right:0;top:0;width:20px;height:20px}:host .flip-container .flipper .back-face .client-name-cont .tache:hover{cursor:pointer}:host .flip-container .flipper .back-face .info-cont{width:100%;height:78%;margin-top:2%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;font-size:15px}:host .flip-container .flipper .back-face .info-cont .info-block{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}:host .flip-container .flipper .back-face .info-cont .block-info{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;width:50%}:host .flip-container .flipper .back-face .info-cont .block-info.left{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}:host .flip-container .flipper .back-face .info-cont .block-info.left>div{width:90%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}:host .flip-container .flipper .back-face .info-cont .block-info.right{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}:host .flip-container .flipper .back-face .info-cont .block-info.right>div{width:90%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}:host .flip-container .flipper .back-face .info-cont .block-info .fac{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host .flip-container .flipper .back-face .info-cont .block-info .fac .bold{text-align:right;width:40%}:host .flip-container .flipper .back-face .info-cont .block-info .bloque{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host .flip-container .flipper .back-face .info-cont .block-info .bloque .label{width:40%;font-weight:300}:host .flip-container .flipper .back-face .info-cont .block-info .bloque .label .light{text-align:right}:host .flip-container .flipper .back-face .info-cont .block-info .bloque .porcent{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .flip-container .flipper .back-face .info-cont .block-info .bloque .porcent p{font-size:12px}:host .flip-container .flipper .back-face .money{color:#008895;font-family:\"Roboto-bold\" !important}:host .flip-container .flipper .back-face .bold{font-family:\"Roboto Medium\"}:host .flip-container .flipper .back-face .light{font-family:\"Roboto-light\"}:host .flip-container .flipper .back-face .right{text-align:right}:host .objetivo{width:17px;height:17px}:host .objetivo.min{width:10px;height:10px}@media(max-width: 1701px){:host .label{font-size:13px}:host .bold,:host .money,:host .porcent{font-size:13px}:host .title{font-size:20px !important;width:calc(100% - 20px);text-align:center}:host .porcent p{font-size:11px}:host .objetivo{width:15px;height:15px}:host .objetivo.min{width:10px;height:10px}}"

/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlipCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_cliente_class__ = __webpack_require__("./src/app/class/catalogo/cliente.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlipCardComponent = /** @class */ (function () {
    function FlipCardComponent() {
        this.flipOnEvent = false;
    }
    FlipCardComponent.prototype.ngOnInit = function () {
    };
    FlipCardComponent.prototype.flipCard = function (value) {
        this.flipOnEvent = value;
    };
    FlipCardComponent.prototype.calcularCambioEnProcentaje = function (valorAntiguo, valorNuevo) {
        return ((valorNuevo - valorAntiguo) / valorAntiguo * 100);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_catalogo_cliente_class__["a" /* Cliente */])
    ], FlipCardComponent.prototype, "cliente", void 0);
    FlipCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'flip-card',
            template: __webpack_require__("./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FlipCardComponent);
    return FlipCardComponent;
}());



/***/ })

});
//# sourceMappingURL=detalles-cartera.module.chunk.js.map