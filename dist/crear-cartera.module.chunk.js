webpackJsonp(["crear-cartera.module"],{

/***/ "./src/app/components/catalogo/crear-cartera/crear-cartera-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCarteraRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_cartera_component__ = __webpack_require__("./src/app/components/catalogo/crear-cartera/crear-cartera.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrearCarteraRoutingModule = /** @class */ (function () {
    function CrearCarteraRoutingModule() {
    }
    CrearCarteraRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__crear_cartera_component__["a" /* CrearCarteraComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CrearCarteraRoutingModule);
    return CrearCarteraRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/crear-cartera/crear-cartera.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"linksCarteras\" [homePath]=\"homePath\"></pn-header-bc>\r\n<div class=\"paneles\">\r\n  <div class=\"panel-lista-clientes\">\r\n    <div class=\"search-container\">\r\n      <div class=\"input-cont\">\r\n        <img class=\"lupa\" src=\"assets/Images/catalogo/lupa.png\" />\r\n        <input class=\"buscar-input\" placeholder=\"Buscar Cliente\" (input)=\"changeClientsFilter($event.target.value)\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"filtros-container\">\r\n      <filter-menu [filtros]=\"filtros\" (sendValue)=\"getOptions($event)\" [filterSelected]=\"filterSelected\" [totalObjetos]=\"\" [totalObjetosLabel]=\"''\"></filter-menu>\r\n    </div>\r\n    <div id=\"clientes\" class='container clientes-sin-cartera' [dragula]='\"bag-one\"' [dragulaModel]='clientesSinCarteraDisplay' [dragulaOptions]=\"options\">\r\n      <div id=\"{{cliente.id}}\" class=\"cliente\" *ngFor=\"let cliente of clientesSinCarteraDisplay\">\r\n        <client-card [idCliente]=\"cliente.id\" [tieneImagen]=\"cliente.imagen\" [nombre]=\"cliente.imagen ? '': cliente.nombre\"></client-card>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"coverListaClientes\" class=\"container clientes-sin-cartera cover\" >\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-cartera\">\r\n    <div id=\"clientes-cartera\" class='container clientes-cartera' [dragula]='\"bag-one\"' [dragulaModel]='cartera.clientes' [dragulaOptions]=\"options\">\r\n      <div id=\"{{cliente.id}}\" [ngClass]=\"'cliente' + (cliente.esOriginal ? ' original':'') + ' en-cartera'\" *ngFor=\"let cliente of cartera.clientes\">\r\n        <client-card [idCliente]=\"cliente.id\" [tieneImagen]=\"cliente.imagen\" [conFiltro]=\"false\" [containerClass]=\"'cliente-container'\" [nombre]=\"cliente.imagen ? '': cliente.nombre\" ></client-card>\r\n      </div>\r\n      <p *ngIf=\"cartera.clientes.length === 0\" class=\"label-sin-clientes\">ARRASTRA CLIENTE AQUÍ</p>\r\n    </div>\r\n    <div class=\"panel-cartera-info\">\r\n      <div class=\"title\">\r\n        <p>DATOS GENERALES</p>\r\n      </div>\r\n      <div class=\"wallet-form\">\r\n        <input placeholder=\"Nombre de cartera\" (input)=\"changeName($event)\" [value]=\"cartera.nombreCartera\" />\r\n        <div class=\"cmb-row\">\r\n          <div class=\"cmb-container\">\r\n            <p class=\"cmb-label\">ESAC</p>\r\n            <div class=\"cmb\">\r\n              <pq-drop-list [items]=\"esacList\" [itemSelect]=\"esacSelected\" (valueDropList)=\"getComboValue($event,'esac')\" [isSearch]=\"false\" ></pq-drop-list>\r\n              <div *ngIf=\"this.rolUsuario !== 'ESAC' && this.rolUsuario !== 'Direccion'\" class=\"cmb-cover\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"cmb-container\">\r\n            <p class=\"cmb-label\">EV Telemarketing</p>\r\n            <div class=\"cmb\">\r\n              <pq-drop-list [items]=\"evtList\" [itemSelect]=\"evtSelected\" (valueDropList)=\"getComboValue($event,'evt')\" [isSearch]=\"false\"></pq-drop-list>\r\n              <div *ngIf=\"this.rolUsuario !== 'ESAC' && this.rolUsuario !== 'Direccion'\" class=\"cmb-cover\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"cmb-container\">\r\n            <p class=\"cmb-label\">EV Campo</p>\r\n            <div class=\"cmb\">\r\n              <pq-drop-list [items]=\"evList\" [itemSelect]=\"evSelected\" (valueDropList)=\"getComboValue($event,'ev')\" [isSearch]=\"false\" ></pq-drop-list>\r\n              <div *ngIf=\"this.rolUsuario !== 'Ventas' && this.rolUsuario !== 'Direccion'\" class=\"cmb-cover\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"cmb-container\">\r\n            <p class=\"cmb-label\">Cobrador</p>\r\n            <div class=\"cmb\">\r\n              <pq-drop-list [items]=\"cobradorList\" [itemSelect]=\"cobradorSelected\" (valueDropList)=\"getComboValue($event,'cobrador')\" [isSearch]=\"false\" ></pq-drop-list>\r\n              <div *ngIf=\"this.rolUsuario !== 'Finanzas' && this.rolUsuario !== 'Direccion'\" class=\"cmb-cover\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"cmb-container\">\r\n            <p class=\"cmb-label\">Mensajero</p>\r\n            <div class=\"cmb\">\r\n              <pq-drop-list [items]=\"mensajeroList\" [itemSelect]=\"mensajeroSelected\" (valueDropList)=\"getComboValue($event,'mensajero')\" [isSearch]=\"false\" ></pq-drop-list>\r\n              <div *ngIf=\"this.rolUsuario !== 'Direccion'\" class=\"cmb-cover\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"wallet-info\">\r\n        <div class=\"info-row\">\r\n          <div class=\"info\">\r\n            <p class=\"label\">Facturación Anterior</p>\r\n            <p class=\"money fant-value\">${{cartera.facturacionAnterior | acFormatNumber2decimal }}</p>\r\n          </div>\r\n          <div class=\"info\">\r\n            <p class=\"label\">Objetivo Fundamental</p>\r\n            <p class=\"money of-value\">${{cartera.objetivoFundamental | acFormatNumber2decimal }}</p>\r\n            <p class=\"porcent\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior,cartera.objetivoFundamental) | acFormatNumber2decimal }}%</p>\r\n          </div>\r\n          <div class=\"info\">\r\n            <p class=\"label\">Objetivo Deseado</p>\r\n            <p class=\"money od-value\">${{cartera.objetivoDeseado | acFormatNumber2decimal }}</p>\r\n            <p class=\"porcent\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior,cartera.objetivoDeseado) | acFormatNumber2decimal }}%</p>\r\n          </div>\r\n          <div class=\"info\">\r\n            <p class=\"label\">Proyección Venta</p>\r\n            <p class=\"money\">${{cartera.proyeccionVenta | acFormatNumber2decimal }}</p>\r\n            <div class=\"pv-arrows-cont\">\r\n              <div class=\"pv-arrow\">\r\n                <p class=\"fant-value\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\r\n                <img class=\"arrow fant-img\" [src]=\"'assets/Images/catalogo/' + (cartera.facturacionAnterior <= cartera.proyeccionVenta ? 'arriba1.png': 'abajo1.png')\" />\r\n              </div>\r\n              <div class=\"pv-arrow\">\r\n                <p class=\"of-value\">{{calcularCambioEnProcentaje(cartera.objetivoFundamental, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\r\n                <img class=\"arrow of-img\" [src]=\"'assets/Images/catalogo/' + (cartera.objetivoFundamental <= cartera.proyeccionVenta ? 'arriba2.png': 'abajo2.png')\" />\r\n              </div>\r\n              <div class=\"pv-arrow\">\r\n                <p class=\"od-value\">{{calcularCambioEnProcentaje(cartera.objetivoDeseado, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\r\n                <img class=\"arrow od-img\" [src]=\"'assets/Images/catalogo/' + (cartera.objetivoDeseado <= cartera.proyeccionVenta ? 'arriba3.png': 'abajo3.png')\" />\r\n              </div>\r\n            </div>\r\n            <div>\r\n            </div>\r\n          </div>\r\n          <div class=\"info\">\r\n            <p class=\"label\">Facturación Actual</p>\r\n            <p class=\"money fact\">${{cartera.facturacionActual | acFormatNumber2decimal }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"wallet-buttons\">\r\n        <div (click)=\"true\" class=\"green-button extra-large\" >Exportar</div>\r\n        <div class=\"wallet-div\">\r\n          <div *ngIf=\"cartera.idCartera !== 0 && !cartera.publicada\" (click)=\"guardarCambios(true)\" class=\"green-button extra-large\">PUBLICAR</div>\r\n          <div *ngIf=\"cartera.idCartera === 0 || cartera.publicada\" class=\"green-button extra-large disabled\">PUBLICAR</div>\r\n          <div (click)=\"guardarCambios()\" class=\"green-button extra-large\">GUARDAR</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"modalMoverCliente\" class=\"modal\">\r\n  <div (click)=\"modalMoverCliente = false\" class=\"modal-bg\"></div>\r\n  <div class=\"modal-content\">\r\n    <div class=\"header\">\r\n      <p>ASIGNAR CARTERA</p>\r\n    </div>\r\n    <div class=\"body\">\r\n      <div class=\"body-wrapper\">\r\n        <div class=\"message\">\r\n          <p>El cliente debe ser asignado a una nueva cartera, favor de seleccionar la cartera destino</p>\r\n          <p class=\"last-client-msg\">*La cartera se borrará automaticamente al quedarse sin clientes.</p>\r\n        </div>\r\n        <div class=\"wallets-container\">\r\n          <div *ngIf=\"listaCarteras.length === 0\" class=\"loader\">\r\n\r\n          </div>\r\n          <div class=\"wallet-item\" *ngFor=\"let cartera of listaCarteras; let i = index\">\r\n            <div class=\"row\">\r\n              <div class=\"wallet-info\">\r\n                <span>#{{i + 1}}</span>\r\n                <span>·</span>\r\n                <span>{{cartera.nombreCartera}}</span>\r\n              </div>\r\n              <img *ngIf=\"i === modalWalletSelected\" (click)=\"selectNewWalletForCliente(-1)\" class=\"radio\" src=\"assets/Images/radio_selected.svg\" />\r\n              <img *ngIf=\"i !== modalWalletSelected\" (click)=\"selectNewWalletForCliente(i)\" class=\"radio\" src=\"assets/Images/radio_unselected.svg\" />\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"wallet-role\">\r\n                <img src=\"assets/Images/catalogo/verde_esac.svg\" />\r\n                <p>{{cartera.esac || 'Sin asignación'}}</p>\r\n              </div>\r\n              <div class=\"wallet-role\">\r\n                <img src=\"assets/Images/catalogo/verde_ev.svg\" />\r\n                <p>{{cartera.ev || 'Sin asignación'}}</p>\r\n              </div>\r\n              <div class=\"wallet-role\">\r\n                <img src=\"assets/Images/catalogo/verde_cobrador.svg\" />\r\n                <p>{{cartera.cobrador || 'Sin asignación'}}</p>\r\n              </div>\r\n              <div class=\"wallet-role\">\r\n                <img src=\"assets/Images/catalogo/verde_clientes.svg\" />\r\n                <p>{{cartera.numeroClientes}} Clientes</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"options\">\r\n        <div (click)=\"modalMoverCliente = false\" class=\"green-button extra-large\" >Cancelar</div>\r\n        <div *ngIf=\"modalWalletSelected !== -1\" (click)=\"moverClienteACartera()\" class=\"green-button extra-large\" >Aceptar</div>\r\n        <div *ngIf=\"modalWalletSelected === -1\" class=\"green-button extra-large disabled\" >Aceptar</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"modalSuccess\" class=\"modal\">\r\n  <div (click)=\"modalSuccess = false\" class=\"modal-bg\"></div>\r\n  <div class=\"modal-content success\">\r\n    <div class=\"header\">\r\n      <img class=\"gif-exito\" src=\"assets/Images/gif_exitosa.gif\" />\r\n    </div>\r\n    <div class=\"body\">\r\n      <div class=\"message\">\r\n        <p class=\"mensaje-centrado\">{{mensaje}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/catalogo/crear-cartera/crear-cartera.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}:host .loader{position:absolute;top:calc(48% - 30px);left:calc(48% - 30px);border:8px solid #f3f3f3;border-top:8px solid #008895;border-radius:50%;width:60px;height:60px;-webkit-animation:spin .9s linear infinite;animation:spin .9s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .paneles{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .paneles .panel-lista-clientes{width:calc(50% - 38px);height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0 19px;position:relative}:host .paneles .panel-lista-clientes .search-container{height:5%;max-height:30px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:19px 0;border-bottom:1px solid #424242}:host .paneles .panel-lista-clientes .search-container .input-cont{position:relative}:host .paneles .panel-lista-clientes .search-container .input-cont .lupa{position:absolute;width:20px;height:20px;top:5px;left:5px}:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input{border-radius:25px;width:403px;height:25px;border:1px solid #bfc0c7;padding-left:25px;outline:none}:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input:focus{border:1px solid #333}:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input::-webkit-input-placeholder{font-family:\"Roboto-regular\"}:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input::-moz-placeholder{font-family:\"Roboto-regular\"}:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input::-ms-input-placeholder{font-family:\"Roboto-regular\"}:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input::placeholder{font-family:\"Roboto-regular\"}:host .paneles .panel-lista-clientes .filtros-container{height:7%;min-height:84px}:host .paneles .panel-lista-clientes .clientes-sin-cartera{width:100%;max-height:88%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:auto}:host .paneles .panel-lista-clientes .cover{position:absolute;top:12%;left:0;z-index:3}:host .paneles .panel-cartera{width:calc(50% - 38px);height:100%;background-color:#eceef0;padding:0 19px}:host .paneles .panel-cartera .clientes-cartera{width:100%;height:69%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;border-bottom:1px solid #979797;overflow-y:auto}:host .paneles .panel-cartera .clientes-cartera .label-sin-clientes{position:absolute;font-family:\"Novecento-Demibold\";width:100%;top:48%;left:0;text-align:center;color:#279e96;opacity:.5;font-size:30px}:host .paneles .panel-cartera .panel-cartera-info{height:31%}:host .paneles .panel-cartera .title{height:calc(15% - 36px);width:100%;padding:16px 0 20px 0}:host .paneles .panel-cartera .title p{width:100%;text-align:center;font-family:\"Novecento-Demibold\"}:host .paneles .panel-cartera .wallet-form{width:100%;height:33%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host .paneles .panel-cartera .wallet-form input{width:100%;border:1px solid #eceef0;height:20px;font-size:12px}:host .paneles .panel-cartera .wallet-form input::-webkit-input-placeholder{font-family:\"Novecento\";color:#c2c3c9;font-size:12px}:host .paneles .panel-cartera .wallet-form input::-moz-placeholder{font-family:\"Novecento\";color:#c2c3c9;font-size:12px}:host .paneles .panel-cartera .wallet-form input::-ms-input-placeholder{font-family:\"Novecento\";color:#c2c3c9;font-size:12px}:host .paneles .panel-cartera .wallet-form input::placeholder{font-family:\"Novecento\";color:#c2c3c9;font-size:12px}:host .paneles .panel-cartera .wallet-form .cmb-row{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:19px;margin-bottom:25px}:host .paneles .panel-cartera .wallet-form .cmb-row .cmb-container{min-width:100px;width:16%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host .paneles .panel-cartera .wallet-form .cmb-row .cmb-container p:first-child{font-family:\"Roboto-regular\";font-size:14px;color:#424242}:host .paneles .panel-cartera .wallet-form .cmb-row .cmb-container .cmb{height:61%;width:100%;position:relative;background-color:#fff}:host .paneles .panel-cartera .wallet-form .cmb-row .cmb-container .cmb .cmb-cover{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#ccc;opacity:.5;z-index:5}:host .paneles .panel-cartera .wallet-info{width:100%;height:100%;height:calc(30% - 52px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #979797;border-bottom:1px solid #979797;padding-top:25px;padding-bottom:25px}:host .paneles .panel-cartera .wallet-info .info-row{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host .paneles .panel-cartera .wallet-info .info-row .info{width:20%;height:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .paneles .panel-cartera .wallet-info .info-row .info .label{font-family:\"Roboto-regular\";color:#424242;font-size:13px;text-align:center}:host .paneles .panel-cartera .wallet-info .info-row .info .porcent{font-family:\"Roboto-regular\";color:#000;font-size:12px;margin-top:5px}:host .paneles .panel-cartera .wallet-info .info-row .info .money{margin-top:5px;text-align:center;color:#008895;font-size:13px;font-family:\"Roboto-bold\"}:host .paneles .panel-cartera .wallet-info .info-row .info .money.fact{color:#900280;font-size:13px}:host .paneles .panel-cartera .wallet-info .info-row .info .pv-arrows-cont{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;position:absolute;bottom:-12%}:host .paneles .panel-cartera .wallet-info .info-row .info .pv-arrows-cont .pv-arrow{width:33%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 3px}:host .paneles .panel-cartera .wallet-info .info-row .info .pv-arrows-cont .pv-arrow p{font-family:\"Roboto-regular\";color:#000;font-size:8px}:host .paneles .panel-cartera .wallet-info .info-row .info .pv-arrows-cont .pv-arrow .arrow{margin-left:3px;max-width:21px;max-height:9px}:host .paneles .panel-cartera .wallet-buttons{width:100%;height:calc(22% - 40px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:20px 0}:host .paneles .panel-cartera .wallet-buttons .wallet-div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:60%}:host .green-button{background-color:#008a98;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:\"Novecento-Demibold\"}:host .green-button:hover{cursor:pointer;background-color:#329faa}:host .disabled{background-color:#767676}:host .disabled:hover{cursor:not-allowed !important;background-color:#767676 !important}:host .extra-large{width:200px;height:30px}:host .modal .modal-bg{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#ccc;opacity:.7;z-index:5}:host .modal .modal-content{z-index:6;position:fixed;top:calc(50% - 324px);left:calc(50% - 361px);width:30%;min-width:722px;max-width:722px}:host .modal .modal-content.success{top:calc(50% - 80px)}:host .modal .modal-content .header{width:100%;background-color:#008895;border-color:#008895;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px 0;border-top-left-radius:15px;border-top-right-radius:15px;min-height:41px;max-height:45px;font-size:24px}:host .modal .modal-content .header p{font-family:\"Novecento-Demibold\"}:host .modal .modal-content .header .close-modal{position:absolute;right:20px;font-size:20px}:host .modal .modal-content .header .close-modal:hover{cursor:pointer}:host .modal .modal-content .header .gif-exito{height:50px}:host .modal .modal-content .body{border-color:#008895;border-bottom-left-radius:15px;border-bottom-right-radius:15px;background-color:#fff;padding:20px 25px;width:calc(100% - 50px);height:calc(100% - 40px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host .modal .modal-content .body .body-wrapper{height:100%;width:100%}:host .modal .modal-content .body .message{height:10%;margin-bottom:15px}:host .modal .modal-content .body .message p{font-size:20px;text-align:left;font-family:\"Roboto Medium\"}:host .modal .modal-content .body .message .last-client-msg{margin-top:5px;font-size:10px;color:#c12730;text-align:right}:host .modal .modal-content .body .message .mensaje-centrado{text-align:center}:host .modal .modal-content .body .wallets-container{position:relative;width:100%;height:90%;min-height:450px;max-height:450px;border-top:1px solid #bfc0c7;border-bottom:1px solid #bfc0c7;overflow-y:auto}:host .modal .modal-content .body .wallets-container .wallet-item{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom:2px solid #bfc0c7}:host .modal .modal-content .body .wallets-container .wallet-item .row{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .modal .modal-content .body .wallets-container .wallet-item .row .wallet-info{color:#008895}:host .modal .modal-content .body .wallets-container .wallet-item .row .wallet-info span{font-family:\"Roboto-regular\"}:host .modal .modal-content .body .wallets-container .wallet-item .row .radio{width:20px;height:20px;margin-right:10px}:host .modal .modal-content .body .wallets-container .wallet-item .row .radio:hover{cursor:pointer}:host .modal .modal-content .body .wallets-container .wallet-item .row:first-child{padding-top:10px}:host .modal .modal-content .body .wallets-container .wallet-item .row:nth-child(2){padding:8px 0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .modal .modal-content .body .wallets-container .wallet-item .row:nth-child(2) .wallet-role{width:15%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .modal .modal-content .body .wallets-container .wallet-item .row:nth-child(2) .wallet-role img{width:28px;height:32px}:host .modal .modal-content .body .wallets-container .wallet-item .row:nth-child(2) .wallet-role p{margin-top:12px;font-size:10px;font-family:\"Roboto-regular\"}:host .modal .modal-content .body .options{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:20px}:host .fant-value{color:#008895 !important}:host .of-value{color:#279e96 !important}:host .od-value{color:#008895 !important;opacity:.8}:host .cliente{width:20%;height:200px}:host .cliente:hover{cursor:-webkit-grab;cursor:grab}.cliente:active{cursor:-webkit-grabbing;cursor:grabbing}@media(max-width: 1850px)and (max-height: 1170px){:host .panel-lista-clientes{width:calc(40% - 38px)}:host .panel-cartera{width:calc(60% - 38px);height:100%;background-color:#eceef0;padding:0 19px}:host .panel-cartera .clientes-cartera{width:100%;height:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;border-bottom:1px solid #979797}:host .cliente{width:25%}:host .cliente.en-cartera{width:25%}:host .extra-large{width:150px !important}}@media(max-height: 1170px){:host .panel-cartera .clientes-cartera{height:60% !important}:host .panel-cartera .panel-cartera-info{height:40% !important}:host .modal .modal-content{top:22% !important}}@media(max-height: 870px){:host .panel-cartera{overflow-y:auto}:host .panel-cartera .clientes-cartera{height:calc(50% - 1px) !important}:host .panel-cartera .panel-cartera-info{height:50% !important}:host .panel-cartera .panel-cartera-info .wallet-info{padding:5px 0 !important;height:calc(30% - 10px)}:host .panel-cartera .panel-cartera-info .wallet-info .info-row .info .pv-arrows-cont{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;position:relative !important;bottom:-10% !important}:host .panel-cartera .panel-cartera-info .wallet-info .info-row .info .pv-arrows-cont .pv-arrow{width:100% !important}:host .panel-cartera .panel-cartera-info .wallet-info .info-row .info .pv-arrows-cont .pv-arrow p{font-family:\"Roboto-regular\";color:#000;font-size:10px !important;height:12px}:host .panel-cartera .panel-cartera-info .wallet-info .info-row .info .pv-arrows-cont .pv-arrow .arrow{margin-left:3px;max-width:21px;max-height:9px}:host .wallet-buttons{padding:19px 0 !important}:host .extra-large{width:150px !important}:host .cliente{width:33%}:host .cliente.en-cartera{width:25% !important;height:150px !important}:host .modal .modal-content{top:8% !important}:host .modal .modal-content.success{top:calc(50% - 40px) !important}}@media(max-width: 1657px){:host .panel-cartera .panel-cartera-info .wallet-form .cmb-row .cmb-container .cmb-label{font-size:12px !important}}"

/***/ }),

/***/ "./src/app/components/catalogo/crear-cartera/crear-cartera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCarteraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_filter_menu_filterMenu_component__ = __webpack_require__("./src/app/components/shared/filter-menu/filterMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_catalogo_cartera_class__ = __webpack_require__("./src/app/class/catalogo/cartera.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_catalogo_cliente_class__ = __webpack_require__("./src/app/class/catalogo/cliente.class.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CrearCarteraComponent = /** @class */ (function () {
    function CrearCarteraComponent(catalogoService, http, router, coreContainer, route, dragulaService) {
        this.catalogoService = catalogoService;
        this.http = http;
        this.router = router;
        this.coreContainer = coreContainer;
        this.route = route;
        this.dragulaService = dragulaService;
        this.linksCarteras = [
            { label: 'Clientes', path: '/protected/catalogo/clientes' },
            { label: 'Carteras', path: '/protected/catalogo/clientes/carteras' },
        ];
        this.filtros = __WEBPACK_IMPORTED_MODULE_5__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].filtrosNuevaCartera;
        this.labelButton = 'GUARDAR';
        this.homePath = '/protected/catalogo';
        this.filterSelected = { index: 0, value: 'TODOS', name: 'TODOS' };
        this.filterInstance = { label: 'TODOS', value: 'TODOS' };
        this.totalCarteras = 0;
        this.filterClientName = '';
        this.clientesSinCartera = [];
        this.clientesSinCarteraDisplay = [];
        this.clientescartera = [];
        this.cartera = { idCartera: 0, nombreCartera: '', clientes: [], publicada: false };
        this.nuevosClientesEnCartera = [];
        this.options = {
            revertOnSpill: true
        };
        this.coverListaClientes = false;
        this.esacList = [{ nombre: '--NINGUNO--', key: 0 }];
        this.esacSelected = { nombre: '--NINGUNO--', key: 0 };
        this.evtList = [{ nombre: '--NINGUNO--', key: 0 }];
        this.evtSelected = { nombre: '--NINGUNO--', key: 0 };
        this.evList = [{ nombre: '--NINGUNO--', key: 0 }];
        this.evSelected = { nombre: '--NINGUNO--', key: 0 };
        this.cobradorList = [{ nombre: '--NINGUNO--', key: 0 }];
        this.cobradorSelected = { nombre: '--NINGUNO--', key: 0 };
        this.mensajeroList = [{ nombre: '--NINGUNO--', key: 0 }];
        this.mensajeroSelected = { nombre: '--NINGUNO--', key: 0 };
        this.modalMoverCliente = false;
        this.modalSuccess = false;
        this.modalWalletSelected = -1;
        this.listaCarteras = [];
        this.idCarteraAMover = 0;
        this.mensaje = '';
        // Se obtiene el id de la función para despues definir el área con la que se guardará la cartera.
        this.idFuncion = __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser() ? __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().idFuncion : 22;
        this.rolUsuario = this.obtenerFuncionUsuario();
        this.setDragulaDropModelSubscriber();
    }
    CrearCarteraComponent.prototype.setDragulaDropModelSubscriber = function () {
        /* this.dragulaService.dropModel.subscribe((value) => {
           // la condición pregunta si el cliente siendo arrastrade priviene de la lista de clientes sin cartera y se soltó en los clientes de la cartera. Si es así entonces agrega el nuevo cliente al arreglo de nuevosClientesEnCartera
           if(value[1].id && value[2].id === 'clientes-cartera' && value[3].id === 'clientes'){
             let cliente = this.cartera.clientes.find(cliente => {
               return cliente.getId() === Number(value[1].id)
             });
             this.nuevosClientesEnCartera = [...this.nuevosClientesEnCartera, cliente];
           } else if(value[1].id && value[2].id === 'clientes' && value[3].id === 'clientes-cartera') {
           // la condición pregunta si el cliente siendo arrastrado proviene de la lista de los clientes de la cartera y está siendo soltado en la lista de clientes sin cartera. de ser así obtiene al cliente desde su nueva posición en el
           // arreglo de clientesSinCarteraDisplay.
             let cliente = this.clientesSinCarteraDisplay.find((cliente:Cliente) => cliente.getId() === Number(value[1].id));
             //la condición pregunta si el cliente es encontrado, si es un cliente original(inició en la lista de clientes de la cartera) y si la cartera no ha sido publicada, de ser así niega el drop y muestra el modal de mover cliente.
             if(cliente && cliente.esOriginal  && this.cartera.publicada){
               setTimeout(() => {
                 this.cartera = {
                   ...this.cartera,
                   clientes: [...this.cartera.clientes, cliente]
                 }
                 this.clientesSinCarteraDisplay = this.clientesSinCarteraDisplay.filter((cliente:Cliente) => cliente.getId() !== Number(value[1].id));
                 this.modalMoverCliente = true;
                 // Si la lista de carteras del modal mover cliente se encuentra vacía entonces llama a servicio para obtener el listado de carteras
                 if(this.listaCarteras.length === 0){
                   this.catalogoService.obtenerCarteras().subscribe(
                     data => {
                       let carteras = []
                       data.current.map ( cartera => {
                         carteras.push(Cartera.builder(cartera))
                       })
                       this.listaCarteras = carteras
                       this.idCarteraAMover = Number(value[1].id)
                     }
                   );
                 }
               }, 100)
             } else {
               this.nuevosClientesEnCartera = this.nuevosClientesEnCartera.filter((cliente:Cliente) => cliente.getId() !== Number(value[1].id));
             }
           }
     
           //Al moverse un cliente de listado hace que se tenga que recalcular los valores mostrados en la interfaz, por lo que aquí se vuelve a recalcular dichos valores.
           let datos = this.cartera.clientes.reduce( (acum,cliente) => ({
             objetivoDeseado: acum.objetivoDeseado + cliente.objetivoDeseado,
             objetivoFundamental: acum.objetivoFundamental + cliente.objetivoFundamental,
             facturaAnt: acum.facturaAnt + cliente.facturaAnt,
             facturaAct: acum.facturaAct + cliente.facturaAct,
             proyeccionVenta: acum.proyeccionVenta + cliente.proyeccionVenta
           }), {objetivoDeseado: 0, objetivoFundamental: 0, facturaAnt: 0, facturaAct: 0, proyeccionVenta: 0});
     
           let fechaHoy = new Date(Date.now());
           this.cartera.objetivoDeseado = datos.objetivoDeseado
           this.cartera.objetivoFundamental = datos.objetivoFundamental
           this.cartera.facturacionActual = datos.facturaAct
           this.cartera.facturacionAnterior = datos.facturaAnt
           this.cartera.proyeccionVenta = datos.facturaAct / (fechaHoy.getMonth()+1) * 12
         });*/
    };
    CrearCarteraComponent.prototype.ngOnInit = function () {
        this.cartera.idCartera = Number(this.route.snapshot.paramMap.get('id'));
        this.coreContainer.openModal(0);
        this.obtenerClientesSinCartera();
        this.obtenerCombosDeCartera();
        if (this.cartera.idCartera !== 0) {
            this.obtenerCartera();
        }
        if (this.cartera.idCartera === 0) {
            this.linksCarteras.push({ label: 'Nueva Cartera', path: '' });
            var area = this.obtenerFuncionUsuario();
            this.cartera.area = area;
        }
    };
    CrearCarteraComponent.prototype.obtenerFuncionUsuario = function () {
        return this.idFuncion === 39 ? 'Finanzas' : this.idFuncion === 3 ? 'Ventas' : this.idFuncion === 37 ? 'ESAC' : (this.idFuncion === 1 || this.idFuncion === 21 || this.idFuncion === 22) ? 'Direccion' : '';
    };
    CrearCarteraComponent.prototype.obtenerClientesSinCartera = function () {
        var _this = this;
        this.catalogoService.obtenerClientesSinCartera().subscribe(function (data) {
            var arr = [];
            for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                var clienteData = _a[_i];
                var cliente = new __WEBPACK_IMPORTED_MODULE_9__class_catalogo_cliente_class__["a" /* Cliente */]();
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
                cliente.esOriginal = false;
                cliente.idIndustria = cliente.idIndustria;
                arr = arr.concat([cliente]);
            }
            _this.clientesSinCartera = arr;
            _this.clientesSinCarteraDisplay = arr;
            _this.totalCarteras = _this.clientesSinCarteraDisplay.length;
            if (_this.cartera.clientes.length > 0) {
                _this.clientesSinCartera = _this.clientesSinCartera.filter(function (cliente) {
                    return !_this.cartera.clientes.find(function (clienteCartera) { return clienteCartera.id === cliente.id; });
                });
                _this.clientesSinCarteraDisplay = _this.clientesSinCartera.slice(0);
                _this.totalCarteras = _this.clientesSinCarteraDisplay.length;
            }
            if (_this.cartera.idCartera === 0) {
                _this.coreContainer.closeModal(0);
            }
        });
    };
    CrearCarteraComponent.prototype.obtenerCombosDeCartera = function () {
        var _this = this;
        this.catalogoService.obtenerCombosNuevaCartera().subscribe(function (data) {
            for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                var valorCombo = _a[_i];
                _this.setCombosData(valorCombo);
                _this.esacSelected = { nombre: '--NINGUNO--', key: 0 };
                _this.evSelected = { nombre: '--NINGUNO--', key: 0 };
                _this.evtSelected = { nombre: '--NINGUNO--', key: 0 };
                _this.cobradorSelected = { nombre: '--NINGUNO--', key: 0 };
                _this.mensajeroSelected = { nombre: '--NINGUNO--', key: 0 };
            }
        });
    };
    CrearCarteraComponent.prototype.obtenerCartera = function () {
        var _this = this;
        this.catalogoService.obtenerCarterasPorUsuario({ idFuncion: 0, idResponsable: 0, idCartera: Number(this.cartera.idCartera) })
            .subscribe(function (data) {
            data.current.map(function (clienteData, index) {
                var cartera;
                if (index === 0) {
                    cartera = new __WEBPACK_IMPORTED_MODULE_8__class_catalogo_cartera_class__["a" /* Cartera */]();
                    cartera.setIdCartera(clienteData.idCartera);
                    cartera.setNombreCartera(clienteData.cart_nombre);
                    cartera.setRuta(clienteData.ruta);
                    cartera.setIndustria(clienteData.industria);
                    cartera.idIndustria = clienteData.idIndustria;
                    cartera.setEstrella(clienteData.importancia);
                    cartera.setTriangulo(clienteData.dificultad);
                    cartera.setFolio(clienteData.folio);
                    cartera.idEsac = clienteData.cart_idEsac;
                    cartera.setEsac(clienteData.cart_nombreEsac);
                    cartera.idEv = clienteData.cart_idEv;
                    cartera.setEv(clienteData.cart_nombreEv);
                    cartera.idEvt = clienteData.cart_idEVT;
                    cartera.setEvt(clienteData.cart_nombreEVT);
                    cartera.idCobrador = clienteData.cart_idCobrador;
                    cartera.setCobrador(clienteData.cart_nombreCobrador);
                    cartera.idMensajero = clienteData.cart_idMensajero;
                    cartera.setMensajero(clienteData.cart_nombreMensajero);
                    cartera.setElaboro(clienteData.cart_nombreElaboro);
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
                    var cliente = new __WEBPACK_IMPORTED_MODULE_9__class_catalogo_cliente_class__["a" /* Cliente */]();
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
                    cliente.esOriginal = true;
                    cartera.setClientes([cliente]);
                    _this.cartera = cartera;
                }
                else {
                    cartera = _this.cartera;
                    cartera.setEstrella(cartera.getEstrella() || clienteData.importancia);
                    cartera.setTriangulo(cartera.getTriangulo() || clienteData.dificultad);
                    var cliente = new __WEBPACK_IMPORTED_MODULE_9__class_catalogo_cliente_class__["a" /* Cliente */]();
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
                    cliente.esOriginal = true;
                    cartera.setClientes(cartera.getClientes().concat([cliente]));
                    cartera.setNumeroClientes(cartera.getNumeroClientes() + 1);
                    cartera.idIndustria = clienteData.idIndustria;
                }
            });
            _this.esacSelected = _this.cartera.idEsac !== 0 ? { nombre: _this.cartera.esac, key: _this.cartera.idEsac } : { nombre: '--NINGUNO--', key: 0 };
            _this.evSelected = _this.cartera.idEv !== 0 ? { nombre: _this.cartera.ev, key: _this.cartera.idEv } : { nombre: '--NINGUNO--', key: 0 };
            _this.evtSelected = _this.cartera.idEvt !== 0 ? { nombre: _this.cartera.evt, key: _this.cartera.idEvt } : { nombre: '--NINGUNO--', key: 0 };
            _this.cobradorSelected = _this.cartera.idCobrador !== 0 ? { nombre: _this.cartera.cobrador, key: _this.cartera.idCobrador } : { nombre: '--NINGUNO--', key: 0 };
            _this.mensajeroSelected = _this.cartera.idMensajero !== 0 ? { nombre: _this.cartera.mensajero, key: _this.cartera.idMensajero } : { nombre: '--NINGUNO--', key: 0 };
            _this.linksCarteras.push({ label: _this.cartera.nombreCartera, path: '/protected/catalogo/clientes/carteras/' + _this.cartera.idCartera });
            _this.linksCarteras.push({ label: 'Editar', path: '' });
            var datos = _this.cartera.clientes.reduce(function (acum, cliente) { return ({
                objetivoDeseado: acum.objetivoDeseado + cliente.objetivoDeseado,
                objetivoFundamental: acum.objetivoFundamental + cliente.objetivoFundamental,
                facturaAnt: acum.facturaAnt + cliente.facturaAnt,
                facturaAct: acum.facturaAct + cliente.facturaAct,
                proyeccionVenta: acum.proyeccionVenta + cliente.proyeccionVenta
            }); }, { objetivoDeseado: 0, objetivoFundamental: 0, facturaAnt: 0, facturaAct: 0, proyeccionVenta: 0 });
            var fechaHoy = new Date(Date.now());
            _this.cartera.objetivoDeseado = datos.objetivoDeseado;
            _this.cartera.objetivoFundamental = datos.objetivoFundamental;
            _this.cartera.facturacionActual = datos.facturaAct;
            _this.cartera.facturacionAnterior = datos.facturaAnt;
            setTimeout(function () {
                _this.cartera = __assign({}, _this.cartera, { cart_updateESAC: false, cart_updateEV: false, cart_updateCOBRADOR: false, cart_updateEVT: false });
                _this.coreContainer.closeModal(0);
            }, 1500);
            _this.clientesSinCartera = _this.clientesSinCartera.filter(function (cliente) {
                return !_this.cartera.clientes.find(function (clienteCartera) { return clienteCartera.id === cliente.id; });
            });
            _this.clientesSinCarteraDisplay = _this.clientesSinCartera.slice(0);
            _this.totalCarteras = _this.clientesSinCarteraDisplay.length;
        });
    };
    CrearCarteraComponent.prototype.getOptions = function ($event) {
        console.log($event);
        this.filterInstance = { label: $event.valor, value: $event.valor === 'AA+' ? 'AAplus' : $event.valor === 'DISTRIBUIDORES' ? 'DISTRIBUIDOR' : $event.valor === 'BAJOS' ? 'BAJO' : $event.valor };
        this.filterSelected = __assign({}, $event, { value: $event.valor });
        this.setFilter();
    };
    CrearCarteraComponent.prototype.setCombosData = function (vc) {
        switch (vc.tipo) {
            case 'Esac':
                this.esacList = this.esacList.concat([{ nombre: vc.valor, key: vc.idValorCombo }]);
                break;
            case 'evt':
                this.evtList = this.evtList.concat([{ nombre: vc.concepto, key: vc.valor }]);
                break;
            case 'ev':
                this.evList = this.evList.concat([{ nombre: vc.concepto, key: vc.valor }]);
                break;
            case 'cobrador':
                this.cobradorList = this.cobradorList.concat([{ nombre: vc.concepto, key: vc.valor }]);
                break;
            case 'msj':
                this.mensajeroList = this.cobradorList.concat([{ nombre: vc.concepto, key: vc.valor }]);
                break;
        }
    };
    CrearCarteraComponent.prototype.changeClientsFilter = function ($event) {
        this.filterClientName = $event;
        this.filterSelected = $event;
        this.setFilter();
    };
    CrearCarteraComponent.prototype.setFilter = function () {
        var _this = this;
        var newArr = this.clientesSinCartera.filter(function (cliente) {
            if (_this.filterInstance.label !== 'TODOS') {
                if (_this.filterClientName && _this.filterClientName !== '') {
                    return cliente.nivelIngreso === _this.filterInstance.value && (cliente.nombre.toLowerCase().startsWith(_this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase().endsWith(_this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase() === _this.filterClientName.toLowerCase());
                }
                return cliente.nivelIngreso === _this.filterInstance.value;
            }
            if (_this.filterClientName && _this.filterClientName !== '') {
                return (cliente.nombre.toLowerCase().startsWith(_this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase().endsWith(_this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase().nombre === _this.filterClientName.toLowerCase());
            }
            return true;
        });
        this.clientesSinCarteraDisplay = newArr;
        this.totalCarteras = this.clientesSinCarteraDisplay.length;
    };
    CrearCarteraComponent.prototype.changeName = function ($event) {
        this.cartera.nombreCartera = $event.target.value;
    };
    CrearCarteraComponent.prototype.calcularCambioEnProcentaje = function (valorAntiguo, valorNuevo) {
        return ((valorNuevo - valorAntiguo) / valorAntiguo * 100);
    };
    CrearCarteraComponent.prototype.guardarCambios = function (publicar) {
        var _this = this;
        if (publicar === void 0) { publicar = false; }
        this.coreContainer.openModal(0);
        this.cartera.clientes = this.cartera.clientes.map(function (cliente) { return (__assign({}, cliente, { idCliente: cliente.id })); });
        console.log(this.cartera);
        var dataBody = {
            idUsuario: 0,
            cartera: __assign({}, this.cartera, { area: this.obtenerFuncionUsuario(), idcartera: this.cartera.idCartera, nombre: this.cartera.nombreCartera, industria: !this.cartera.idIndustria ? 112 : this.cartera.idIndustria, usuario: 27, publicada: publicar || this.cartera.publicada ? true : false, cart_updatePublicada: this.cartera.publicada && publicar ? publicar : this.cartera.publicada, cart_updateESAC: this.cartera.cart_updateESAC ? this.cartera.cart_updateESAC : false, cart_updateEV: this.cartera.cart_updateEV ? this.cartera.cart_updateEV : false, cart_updateCOBRADOR: this.cartera.cart_updateCOBRADOR ? this.cartera.cart_updateCOBRADOR : false, cart_updateEVT: this.cartera.cart_updateEVT ? this.cartera.cart_updateEVT : false, cart_updateMENSAJERO: this.cartera.cart_updateMENSAJERO ? this.cartera.cart_updateMENSAJERO : false })
        };
        this.catalogoService.actualizarCartera(dataBody).subscribe(function (data) {
            if (Number(_this.route.snapshot.paramMap.get('id')) === 0 && data.current !== -1) {
                _this.cartera.idCartera = data.current;
                _this.linksCarteras[_this.linksCarteras.length - 1] = { label: _this.cartera.nombreCartera, path: '/protected/catalogo/clientes/carteras/' + _this.cartera.idCartera };
                _this.linksCarteras.push({ label: 'Editar', path: '' });
                _this.mensaje = 'La cartera ha sido creada exitosamente';
                _this.modalSuccess = true;
                setTimeout(function () {
                    _this.modalSuccess = false;
                }, 2000);
            }
            else {
                _this.linksCarteras[_this.linksCarteras.length - 2] = { label: _this.cartera.nombreCartera, path: '/protected/catalogo/clientes/carteras/' + _this.cartera.idCartera };
                _this.mensaje = 'El cartera ha sido actualizada exitosamente';
                _this.modalSuccess = true;
                if (publicar) {
                    alert('actualiza cartera a ser publicada');
                    _this.cartera.publicada = true;
                }
                setTimeout(function () {
                    _this.modalSuccess = false;
                }, 2000);
            }
            _this.coreContainer.closeModal(0);
        });
    };
    CrearCarteraComponent.prototype.getComboValue = function ($event, property) {
        this.cartera[property] = Number($event.key);
        this.cartera['cart_update' + property.toUpperCase()] = true;
    };
    CrearCarteraComponent.prototype.selectNewWalletForCliente = function (index) {
        this.modalWalletSelected = index;
    };
    CrearCarteraComponent.prototype.moverClienteACartera = function () {
        var _this = this;
        this.coreContainer.openModal(0);
        var dataBody = {
            idCliente: this.idCarteraAMover,
            idCartera: this.listaCarteras[this.modalWalletSelected].idCartera,
            idCarteraAnt: this.cartera.idCartera
        };
        this.catalogoService.moverClienteACartera(dataBody).subscribe(function (data) {
            if (data.current.moverCliente) {
                _this.cartera = __assign({}, _this.cartera, { clientes: _this.cartera.clientes.filter(function (cliente) { return cliente.id !== _this.idCarteraAMover; }).slice() });
                _this.mensaje = 'El cliente se cambió de cartera correctamente';
                _this.modalSuccess = true;
                setTimeout(function () {
                    _this.modalSuccess = false;
                    if (data.current.carteraBorrada) {
                        _this.router.navigate(['/protected/catalogo/clientes/carteras']);
                    }
                }, 3000);
            }
            _this.modalMoverCliente = false;
            _this.coreContainer.closeModal(0);
        });
    };
    CrearCarteraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-crear-cartera',
            template: __webpack_require__("./src/app/components/catalogo/crear-cartera/crear-cartera.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/crear-cartera/crear-cartera.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_catalogo_catalogo_service__["a" /* CatalogoService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["b" /* DragulaService */]])
    ], CrearCarteraComponent);
    return CrearCarteraComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/crear-cartera/crear-cartera.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearCarteraModule", function() { return CrearCarteraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crear_cartera_routing_module__ = __webpack_require__("./src/app/components/catalogo/crear-cartera/crear-cartera-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crear_cartera_component__ = __webpack_require__("./src/app/components/catalogo/crear-cartera/crear-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CrearCarteraModule = /** @class */ (function () {
    function CrearCarteraModule() {
    }
    CrearCarteraModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__crear_cartera_routing_module__["a" /* CrearCarteraRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["a" /* DragulaModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_drop_list_drop_list_module__["a" /* DropListModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__crear_cartera_component__["a" /* CrearCarteraComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_catalogo_catalogo_service__["a" /* CatalogoService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__crear_cartera_component__["a" /* CrearCarteraComponent */]
            ]
        })
    ], CrearCarteraModule);
    return CrearCarteraModule;
}());



/***/ })

});
//# sourceMappingURL=crear-cartera.module.chunk.js.map