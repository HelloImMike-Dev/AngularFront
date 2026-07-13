webpackJsonp(["productos-bo.module"],{

/***/ "./src/app/components/productos-bo/productos-bo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosBoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos_bo_component__ = __webpack_require__("./src/app/components/productos-bo/productos-bo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductosBoRoutingModule = /** @class */ (function () {
    function ProductosBoRoutingModule() {
    }
    ProductosBoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__productos_bo_component__["a" /* ProductosBoComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ProductosBoRoutingModule);
    return ProductosBoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/productos-bo/productos-bo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion [items]=\"itemsMenu\" [titulo]=\"'GESTOR DE CONTENIDO'\"  style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <!--Termina seccion de menu-->\r\n  <!--Empieza el area de trabajo-->\r\n  <div class=\"area\">\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div>\r\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaP\" (click)=\"regresarVistaP()\">\r\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\r\n        </div>\r\n        <label class=\"etiqueta\">GESTIONAR PRODUCTO BO</label>\r\n      </div>\r\n      <div *ngIf=\"!vistaP\">\r\n        <label class=\"title\">{{cliente}}</label>\r\n      </div>\r\n    </div>\r\n    <!--Termina la cabezera-->\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\r\n      <div style=\"height: 100%; width: 100%;display: flex\" *ngIf=\"vistaP\">\r\n        <div class=\"primeraSec\">\r\n          <div class=\"titulosLista\">\r\n            <div  class=\"tituloCliente\">\r\n              <label class=\"tituloLista\">PROVEEDORES</label>\r\n            </div>\r\n            <div class=\"organizarLista\">\r\n              <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n                <div class=\"buscar\">\r\n                  <div>\r\n                    <div class=\"lupa\">\r\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                    </div>\r\n                    <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Proveedor\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--Lista total-->\r\n          <div class=\"listaSeccionUno\">\r\n            <div>\r\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\r\n                <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                  <div class=\"imagenFlecha\">\r\n                    <img src=\"./assets/Images/regresarAzul.svg\" class=\"flechaInicio\" (click)=\"seleccionarItem(i, item)\">\r\n                  </div>\r\n                  <div class=\"dfSelect\"></div>\r\n                  <div class=\"datosLst\" style=\"padding-top: 10px;padding-left: 15px; display: flex\">\r\n                    <div class=\"numeroIndex\">\r\n                      <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\r\n                    </div>\r\n                    <div class=\"informacionList\">\r\n                      <label style=\"color: #008894\">{{item.proveedor}} </label>\r\n                      <p>{{item.totalProductos}} Productos en BO</p>\r\n                      <h3>{{item.totalControlados}} Controlados · <span style=\"color: #4BA92B\">{{item.totalNoControlados}} No controlados</span></h3>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"totales\">\r\n              <label># {{listaUniverso.length}}</label>\r\n              <label>{{totalProductos}} Productos</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"contenidoGrafica\">\r\n          <div class=\"grafica\">\r\n            <div style=\"padding-right: 10px\">\r\n              <label>PROVEEDORES</label>\r\n              <div>\r\n                <pn-donut-chart *ngIf=\"activarGrProv\" [data]=\"dataProveedores\" [tipoGrafica]=\"tipoGraficaProveedores\" [height]=\"'auto'\" [idGrafica]=\"'proveedores'\"></pn-donut-chart>\r\n              </div>\r\n            </div>\r\n            <div style=\"padding-left: 10px\">\r\n              <label>LÍNEAS</label>\r\n              <div>\r\n                <pn-donut-chart *ngIf=\"activarGrLinea\" [data]=\"dataLineas\" [tipoGrafica]=\"tipoGraficaLineas\" [height]=\"'auto'\"  [idGrafica]=\"'lineas'\"></pn-donut-chart>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"grafica\" style=\"align-items: center;flex-direction: column;\">\r\n            <label>PRODUCTOS CONTROLADOS</label>\r\n            <div>\r\n              <pn-grafica-barras *ngIf=\"activarGraficaBarra\" [data]=\"dataBarra\" [idGrafica]=\"'barra'\" style=\"    width: 100%;height: 100%;display: flex;\"></pn-grafica-barras>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--vista siguiente-->\r\n      <pn-vista-gestion-producto *ngIf=\"!vistaP\" [datosProveedor]=\"item\" (vistaP)=\"vistaPrincipal($event)\" (finalizarLista)=\"cargarVistaP($event)\"></pn-vista-gestion-producto>\r\n    </div>\r\n    <!--Terminan los componentes-->\r\n    <div style=\"width: 100%;height: 55px\">\r\n      <footer class=\"footer\">\r\n        <div class=\"datosFooter\">\r\n          <div class=\"Prioridad1\">\r\n            <label class=\"p1\">BO: </label> Back Order\r\n          </div>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n  <!--Termina area de trabajo-->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/productos-bo/productos-bo.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{width:100%;height:100%;overflow:auto}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;padding-right:13px;border-bottom:2px solid #000;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cabezera>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cabezera>div>.title{font-family:Novecento;font-weight:bold;font-size:24px;color:#008894;text-align:right}.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento;margin-bottom:5px}.img{cursor:pointer}.lista{border-bottom:solid 1px #eceef0;border-bottom:solid 1px #eceef0;width:100%;min-height:80px;font-size:20px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst label{color:#008895;padding-left:-2px;font-family:\"Roboto-Bold\";font-size:28px}.lista>.divActive .datosLst p{font-family:\"Roboto-Bold\";font-size:24px;color:#000;line-height:26px}.lista>.divActive .datosLst h3{font-family:\"Roboto-regular\";font-size:21px}.textoPiezas{font-family:\"Roboto-regular\";font-size:21px}.titulo{padding-left:30px;font-family:Novecentowide;font-weight:Bold;font-size:24px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:50px;width:100%;border-style:solid;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.footer{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-webkit-box-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;-webkit-box-sizing:border-box;box-sizing:border-box}.linea{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;text-align:center}.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px}.Prioridad1,.Prioridad2,.Prioridad3,.Ambiente,.Congelación,.Refrigeración,.Pedimento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.p1{color:#424242;font-weight:bold}.p2{color:#424242;font-weight:bold}.p3{color:#424242;font-weight:bold}.datosC{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:1608px;margin-left:20px;margin-right:20px;width:98%}.tituloGrafica{font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}.grafica{height:50%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:20px;padding-top:20px}.grafica>label{font-family:Novecento;font-weight:bold;font-size:calc((1vh + 1vw) / 2 );color:#424242;height:10%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex}.grafica>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:50%;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.grafica>div>label{font-family:Novecento;font-weight:bold;font-size:calc((1vh + 1vw) / 2 );color:#424242;height:10%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex}.grafica>div>div{height:85%;width:100%}.contenidoGrafica{width:70%;background:#eceef0;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}.menu{position:relative}.menu:HOVER{cursor:pointer}.tituloCliente{width:100%;height:50%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.titulosLista{height:10%;padding-top:15px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:15px;min-height:90px}.tituloLista{font-size:24px;font-family:Novecento;font-weight:bold}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:50%}.primeraSec{width:30%;background:#fff;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:20px;margin-right:20px;min-width:350px}.primeraSec>.listaSeccionUno{height:90%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.primeraSec>.listaSeccionUno>div{height:calc(100% - 30px);border-bottom:1px solid;width:100%;border-top:1px solid;overflow:scroll}.primeraSec>.listaSeccionUno>.totales{height:30px;width:100%;border-bottom:0;border-top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.informacionList{font-family:Roboto;width:85%;padding-top:8px}.informacionList>label{color:#008894;font-weight:bold;font-size:28px;font-family:Roboto;line-height:1}.informacionList>h3{font-family:Roboto;font-size:18px;color:#de0209;text-align:left;font-weight:400}.informacionList>p{font-family:Roboto;font-weight:bold;font-size:22px;color:#424242}.numeroIndex{font-size:28px;font-family:Roboto-Regular;text-align:left;padding-right:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px}.subtitulo{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.imagenFlecha{position:absolute;right:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;height:100%;padding-right:5px}.flechaInicio{cursor:pointer;width:100%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.index{font-family:Roboto;font-weight:400;font-size:28px;color:#424242;text-align:left}"

/***/ }),

/***/ "./src/app/components/productos-bo/productos-bo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosBoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_productos_bo_productos_bo_service__ = __webpack_require__("./src/app/services/productos-bo/productos-bo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductosBoComponent = /** @class */ (function () {
    /**************************/
    function ProductosBoComponent(comunService, _productosBO, coreContainer) {
        this.comunService = comunService;
        this._productosBO = _productosBO;
        this.coreContainer = coreContainer;
        this.classAsideMenu = 'asideNormalMenu';
        /**********DATOS DE EJEMPLO GRAFICAS****/
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
            titulo: 'Clientes',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
            valuesExtras: [6, 324, 157, 5000],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
        };
        this.tipoGrafica = 'General';
        /*****PRUEBA DE LISTA*****/
        this.lista = [];
        this.listaUniverso = [];
        this.listaBarra = [];
        this.filtroProveedores = [];
        this.listaLineas = [];
        this.filtroLinea = [];
    }
    ProductosBoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'productosBO') {
                _this.obtenerDatos();
            }
        });
        this.vistaP = true;
        this.obtenerDatos();
    };
    ProductosBoComponent.prototype.regresarVistaP = function () {
        this.vistaP = true;
    };
    ProductosBoComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    ProductosBoComponent.prototype.obtenerDatos = function () {
        var _this = this;
        this.activarGrProv = false;
        this.activarGraficaBarra = false;
        this.totalProductos = 0;
        this.coreContainer.openModal(0);
        this._productosBO.obtenerGraficaProveedor().subscribe(function (data) {
            _this.listaBarra = data.current.barra;
            _this.lista = data.current.lista;
            _this.listaUniverso = data.current.lista;
            for (var i = 0; i < _this.listaUniverso.length; i++) {
                _this.totalProductos += _this.listaUniverso[i].totalProductos;
            }
            _this.listaProveedores = data.current.grafica;
            var listaLineas = data.current.porFamilia;
            for (var i = 0; i < listaLineas.length; i++) {
                if (listaLineas[i].etiqueta === 'Estandares Químico' || listaLineas[i].etiqueta === 'Estandares Biológico' || listaLineas[i].etiqueta === 'Reactivos Biológico'
                    || listaLineas[i].etiqueta === 'Reactivos Químico' || listaLineas[i].etiqueta === 'Labware' || listaLineas[i].etiqueta === 'Publicaciones') {
                    _this.listaLineas.push(listaLineas[i]);
                }
            }
            _this.limpiarVariablesGrafica();
            _this.calcularDatosParaGraficas();
            _this.graficaBarra();
            _this.coreContainer.closeModal(0);
            _this.iniciarMenu(data.current['totales'].totalProductos);
        }, function (error) {
            _this.coreContainer.closeModal(0);
            console.log(error);
        });
    };
    ProductosBoComponent.prototype.iniciarMenu = function (totProd) {
        if (totProd === null) {
            totProd = 0;
        }
        this.itemsMenu = [
            { nombre: 'Gestionar Producto BO', url: 'productosBO', tipo: 'valor', valor: totProd },
        ];
        this.activeMenu = true;
    };
    /// Funcion de buscar en facturacion
    ProductosBoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
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
    };
    ProductosBoComponent.prototype.graficaBarra = function () {
        var nombres = [];
        var colores = [];
        var datos = [];
        this.listaBarra.forEach(function (folio) {
            nombres.push(folio.control);
            datos.push(folio.totalControlados);
            if (folio.control === 'Controlados') {
                colores.push('#DE0209');
            }
            else if (folio.control === 'No Controlados') {
                colores.push('#4BA92B');
            }
        });
        if (this.listaBarra.length === 1) {
            datos.push(0);
            if (this.listaBarra[0].control === 'Controlados') {
                colores.push('#4BA92B');
                nombres.push('No Controlados');
            }
            else if (this.listaBarra[0].control === 'No Controlados') {
                colores.push('#DE0209');
                nombres.push('Controlados');
            }
        }
        if (this.listaBarra.length > 0) {
            this.dataBarra = {
                labels: nombres,
                values: datos,
                barBackground: colores
            };
        }
        else {
            this.dataBarra = {
                labels: ['Controlados', 'No Controlados'],
                values: [0, 0],
                barBackground: []
            };
        }
        this.activarGraficaBarra = true;
    };
    ProductosBoComponent.prototype.limpiarVariablesGrafica = function () {
        var _this = this;
        //////// Emìeza grafica proveedores //////
        var valoresP = [];
        var valoresProv = [];
        for (var _i = 0, _a = this.listaProveedores; _i < _a.length; _i++) {
            var nombre = _a[_i];
            this.filtroProveedores.push(nombre.proveedor);
            valoresProv.push([0, 0]);
            valoresP.push(0);
        }
        if (valoresP.length > 0) {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: this.filtroProveedores,
                valores: valoresP,
                labelsExtras: ['Proveedores', 'Producto'],
                labelsExtrasHover: ['Proveedores', 'Productos'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresProv,
            };
            this.tipoGraficaProveedores = 'General';
        }
        else {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Proveedores', 'Producto'],
                labelsExtrasHover: ['Proveedores', 'Producto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaProveedores = 'Gris';
            setTimeout(function () {
                _this.activarGrProv = true;
            }, 5);
        }
        //////// Emìeza grafica lineas //////
        var valoresL = [];
        var valoresLineas = [];
        for (var _b = 0, _c = this.listaLineas; _b < _c.length; _b++) {
            var nombre = _c[_b];
            this.filtroLinea.push(nombre.etiqueta);
            valoresProv.push([0]);
            valoresL.push(0);
        }
        if (valoresL.length > 0) {
            this.dataLineas = {
                titulo: 'Totales',
                labels: this.filtroLinea,
                valores: valoresL,
                labelsExtras: ['Estándares Biologico', 'Estándares Químicos', 'Reactivos Biológicos', 'Reactivos Químico', 'Labware', 'Publicaciones'],
                labelsExtrasHover: ['Productos'],
                valuesExtras: [0, 0, 0, 0, 0, 0],
                valuesExtrasHover: valoresProv,
            };
            this.tipoGraficaLineas = 'General';
        }
        else {
            this.dataLineas = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Estándares Biologico', 'Estándares Químicos', 'Reactivos Biológicos', 'Reactivos Químico', 'Labware', 'Publicaciones'],
                labelsExtrasHover: ['Producto'],
                valuesExtras: [0, 0, 0, 0, 0, 0],
                valuesExtrasHover: [[0]],
            };
            this.tipoGraficaLineas = 'Gris';
            setTimeout(function () {
                _this.activarGrLinea = true;
            }, 5);
        }
    };
    ProductosBoComponent.prototype.calcularDatosParaGraficas = function () {
        if (this.listaProveedores.length > 0) {
            for (var _i = 0, _a = this.listaProveedores; _i < _a.length; _i++) {
                var proveedor = _a[_i];
                this.llenarTotalesGraficas(this.dataProveedores, proveedor, 'PROVEEDORES');
            }
        }
        if (this.listaLineas.length > 0) {
            for (var _b = 0, _c = this.listaLineas; _b < _c.length; _b++) {
                var linea = _c[_b];
                this.llenarTotalesGraficas(this.dataLineas, linea, 'LINEAS');
            }
        }
    };
    ProductosBoComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida) {
        var _this = this;
        switch (graficaElegida) {
            case 'PROVEEDORES':
                var posicion2 = this.filtroProveedores.indexOf(elemento.proveedor);
                total.valores[posicion2] += elemento.totalProductos;
                total.valuesExtras[0] += 1;
                total.valuesExtras[1] += elemento.totalProductos;
                total.valuesExtrasHover[posicion2][0] += 1;
                total.valuesExtrasHover[posicion2][1] = elemento.totalProductos;
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrProv = true;
                }, 5);
                break;
            case 'LINEAS':
                var posicion1 = this.filtroLinea.indexOf(elemento.etiqueta);
                total.valores[posicion1] += elemento.totalProductos;
                if (elemento.etiqueta === 'Estandares Químico') {
                    total.valuesExtras[1] += elemento.totalProductos;
                }
                else if (elemento.etiqueta === 'Estandares Biológico') {
                    total.valuesExtras[0] += elemento.totalProductos;
                }
                else if (elemento.etiqueta === 'Reactivos Biológico') {
                    total.valuesExtras[2] += elemento.totalProductos;
                }
                else if (elemento.etiqueta === 'Reactivos Químico') {
                    total.valuesExtras[3] += elemento.totalProductos;
                }
                else if (elemento.etiqueta === 'Labware') {
                    total.valuesExtras[4] += elemento.totalProductos;
                }
                else if (elemento.etiqueta === 'Publicaciones') {
                    total.valuesExtras[5] += elemento.totalProductos;
                }
                total.valuesExtrasHover[posicion1][0] = elemento.totalProductos;
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrLinea = true;
                }, 5);
                break;
        }
    };
    ProductosBoComponent.prototype.seleccionarItem = function (i, item) {
        console.log(item);
        this.item = item;
        this.cliente = item.proveedor;
        this.vistaP = false;
    };
    ProductosBoComponent.prototype.vistaPrincipal = function (valor) {
        if (valor === false) {
            this.regresarVistaP();
        }
        else if (valor === true) {
            this.obtenerDatos();
        }
    };
    ProductosBoComponent.prototype.cargarVistaP = function () {
        this.regresarVistaP();
        this.obtenerDatos();
    };
    ProductosBoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-productos-bo',
            template: __webpack_require__("./src/app/components/productos-bo/productos-bo.component.html"),
            styles: [__webpack_require__("./src/app/components/productos-bo/productos-bo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__services_productos_bo_productos_bo_service__["a" /* ProductosBoService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], ProductosBoComponent);
    return ProductosBoComponent;
}());



/***/ }),

/***/ "./src/app/components/productos-bo/productos-bo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosBoModule", function() { return ProductosBoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productos_bo_routing_module__ = __webpack_require__("./src/app/components/productos-bo/productos-bo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productos_bo_component__ = __webpack_require__("./src/app/components/productos-bo/productos-bo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_grafica_barras_grafica_barras_module__ = __webpack_require__("./src/app/components/shared/grafica-barras/grafica-barras.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vista_gestion_producto_vista_gestion_producto_component__ = __webpack_require__("./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProductosBoModule = /** @class */ (function () {
    function ProductosBoModule() {
    }
    ProductosBoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__productos_bo_routing_module__["a" /* ProductosBoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_grafica_barras_grafica_barras_module__["a" /* GraficaBarrasModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_alerta_alerta_module__["a" /* AlertaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__productos_bo_component__["a" /* ProductosBoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__vista_gestion_producto_vista_gestion_producto_component__["a" /* VistaGestionProductoComponent */]
            ]
        })
    ], ProductosBoModule);
    return ProductosBoModule;
}());



/***/ }),

/***/ "./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaSeccion\">\r\n  <div>\r\n    <div>\r\n      <div style=\"width: 40%;flex-direction: column;padding-right: 20px\">\r\n        <div class=\"titulosLista\">\r\n          <div  class=\"tituloCliente\">\r\n            <label class=\"tituloLista\">PRODUCTOS</label>\r\n          </div>\r\n          <div class=\"filtro\">\r\n            <div style=\"padding-right: 10px\">\r\n              <pn-combo-flecha-verde [items]=\"listaLineas\" [itemSelect]=\"selectedLinea\" [heightLi]=\"'35px'\" (valueDropList)=\"recibirFiltro($event, 'linea')\"></pn-combo-flecha-verde>\r\n            </div>\r\n            <div style=\"padding-left: 10px\">\r\n              <pn-combo-flecha-verde [items]=\"listaTipos\" [itemSelect]=\"selectedTipo\" [heightLi]=\"'35px'\" (valueDropList)=\"recibirFiltro($event, 'tipo')\"></pn-combo-flecha-verde>\r\n            </div>\r\n          </div>\r\n          <div class=\"organizarLista\">\r\n            <div style=\"width: 10%; height: 100%;    display: flex;align-items: center;\">\r\n              <div class=\"menu\" (click)=\"abreCombo()\">\r\n                <div>\r\n                </div>\r\n                <div>\r\n                </div>\r\n                <div>\r\n                </div>\r\n                <section id=\"section\">\r\n                  <ul class=\"listaHamburguesa\">\r\n                    <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\r\n                    <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\r\n                  </ul>\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div style=\"width: 38%; height: 100%;    display: flex;align-items: center;\">\r\n              <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\r\n            </div>\r\n            <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n              <div class=\"buscar\">\r\n                <div>\r\n                  <div class=\"lupa\">\r\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                  </div>\r\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"tipoBuscar($event)\" class=\"buscar-input\" placeholder=\"Cliente\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Lista total-->\r\n        <div class=\"segundaSeccionList\">\r\n          <div style=\"width: 99%;display: flex;overflow: auto;position: relative;height: 100%;\">\r\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n              <div [ngClass]=\"item.codigo === codigo? 'divActive': ''\" *ngFor=\"let item of lista; let i = index;\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                <div class=\"dfSelect\"></div>\r\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(item, i)\">\r\n                  <div class=\"informacionList\">\r\n                    <label> #{{i +1}} · <span>{{item.proveedor}}</span> · {{item.codigo}}  <span [style.color]=\"item.control === 'Controlados' ? '#DE0209': '#4BA92B'\">· {{item.control}}</span></label>\r\n                    <label style=\"font-size: 19px; font-weight: 400\">{{item.descripcion}}</label>\r\n                    <h1>{{item.referencia}} · {{item.presentacion}}</h1>\r\n                    <h3> Fecha de Inicio: {{item.fechaInicio}}</h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"totales\">\r\n          <label>{{listaUniverso.length}} Productos</label>\r\n        </div>\r\n      </div>\r\n      <!--linea degradada-->\r\n      <div class=\"borderLine\"></div>\r\n      <!---->\r\n      <div style=\"padding-left: 20px;flex-direction: column\" class=\"razon\">\r\n        <div *ngIf=\"seleccionado\" style=\"height: calc(100% - 50px); width: 100%\">\r\n          <div class=\"tituloProducto\">\r\n            <label class=\"tituloLista\">PRODUCTO NO DISPONIBLE</label>\r\n          </div>\r\n          <div class=\"infoProducto\">\r\n            <div class=\"imgProveedor\">\r\n              <img [src]=\"pathImg\" class=\"producto\" [style.padding-right]=\"tipoImagen? '10px' : 'initial'\">\r\n            </div>\r\n            <div *ngIf=\"seleccionado\" class=\"selectedData\">\r\n              <div>\r\n                <label> #{{indice}} · {{itemSelect.codigo}} · {{itemSelect.presentacion}}</label>\r\n                <h3 style=\"font-weight: lighter; font-size: 25px\">{{itemSelect.descripcion}}</h3>\r\n                <span>{{itemSelect.referencia}} · <span [style.color]=\"itemSelect.control === 'Controlados' ? '#DE0209': '#4BA92B'\">{{itemSelect.control}}</span></span>\r\n                <h1>Marca: <span class=\"marca\">{{itemSelect.proveedor}}</span></h1>\r\n              </div>\r\n              <div style=\"width: 30%;align-items: center\">\r\n                <span>{{itemSelect.fechaInicio}}</span>\r\n                <h1>Fecha de Inicio BO</h1>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"infoPrincipal\">\r\n            <div>\r\n              <label>Razón del Producto en BackOrder</label>\r\n              <pn-combo-flecha-verde [items]=\"listaRazones\" [itemSelect]=\"selectedRazon\" [heightLi]=\"'35px'\"  style=\"max-width: 737px\" (valueDropList)=\"recibirRazon($event)\"></pn-combo-flecha-verde>\r\n            </div>\r\n            <div *ngIf=\"activarFecha\">\r\n              <label>Fecha Estimada de Disponibilidad</label>\r\n              <pq-date-picker style=\"max-width: 250px;display: flex;align-items: center;\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event)\" [(date)]=\"date\" [color]=\"false\"></pq-date-picker>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!seleccionado\" class=\"bloqueoCarga\">\r\n          <label>SELECCIONA UN PRODUCTO PARA VISUALIZAR ESTA SECCIÓN</label>\r\n        </div>\r\n        <div class=\"btn\">\r\n            <div (click)=\"cancelar()\" style=\"background: #008894\">\r\n              <label>CANCELAR</label>\r\n            </div>\r\n            <div [style.background-color]=\"activarBtn? '#008894': '#C2C3C9'\" [style.pointer-events]=\"activarBtn? 'auto':'none'\" (click)=\"finalizar()\">\r\n              <label>ACEPTAR</label>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<pq-alerta [activarBoton]=\"false\" [alertaTxt]=\"'Operación Exitosa'\" (confirmacion)=\"cerrarPop($event)\" *ngIf=\"activarAlert\"></pq-alerta>\r\n"

/***/ }),

/***/ "./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.scss":
/***/ (function(module, exports) {

module.exports = ".areaSeccion{min-width:1295px;min-height:515px;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 20px 20px 20px}.areaSeccion>div{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.areaSeccion>div>div{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.areaSeccion>div>div>div{width:60%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box}.areaSeccion>div>div>.razon{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.areaSeccion>div>div>.razon>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.areaSeccion>div>div>.razon>div>label{font-family:Novecento;font-weight:bold;font-size:40px;color:#d8d9dd;text-align:center;line-height:55px;max-width:677px}.areaSeccion>div>div>.razon>.btn{height:50px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.areaSeccion>div>div>.razon>.btn>div{display:-webkit-box;display:-ms-flexbox;display:flex;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#c2c3c9;cursor:pointer}.areaSeccion>div>div>.razon>.btn>div>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.areaSeccion>div>div>.borderLine{width:1.1px;height:100%;background:-webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;background:linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%}.titleData{font-family:Roboto;font-weight:bold;font-size:24px;color:#008895;text-align:left}.icono{width:16px;margin-right:5px}.tituloLista{font-size:24px;font-family:Novecento;font-weight:bold}.numeroIndex{font-size:28px;font-family:Roboto-Regular;text-align:left;width:10%;padding-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.numeroIndex label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.informacionList{font-family:Roboto;width:95%;padding-top:8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.informacionList>label{color:#424242;font-weight:bold;font-size:20px;font-family:Roboto;line-height:1;overflow:hidden}@supports(-webkit-line-clamp: 3){.informacionList>label{display:block;display:-webkit-box !important;line-height:1.1;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 3){.informacionList>label{position:relative;line-height:1.1;overflow:hidden;width:100%}.informacionList>label:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.informacionList h3{line-height:1.5;margin-top:4px;font-weight:400;font-family:Roboto-Regular;font-size:17px;color:#848387;text-align:left}.informacionList span{font-family:Roboto;font-weight:bold;font-size:20px;color:#008894;text-align:left}.informacionList h1{font-family:Roboto;font-weight:400;font-size:18px;color:#008894;text-align:left}.informacionList .tooltip{font-family:Roboto;font-weight:400;font-size:18px;position:relative;display:inline-block;cursor:pointer}.informacionList .tooltip>.tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.informacionList .tooltip:hover>.tooltiptext{visibility:visible;opacity:1;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.informacionList .tooltip>.tooltiptext{visibility:hidden;width:initial;background-color:#424242;color:#fff;font-family:\"Roboto\";text-align:left;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;margin-top:0px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}.informacionList .tooltip>label{color:#fff}.tituloProducto{height:65px;width:100%}.segundaSeccionList{height:85%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid;width:100%;border-top:1px solid;overflow:auto}.tituloCliente{width:100%;height:33%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lista{width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.titulosLista{height:15%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:15px;min-height:90px}.filtro{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:33%;width:100%}.filtro>div{height:100%;width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.filtro>div>pn-combo-flecha-verde{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:33%}.titulo{padding-left:30px;font-family:Novecentowide;font-weight:Bold;font-size:24px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.barraBusqueda{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cargaDoc{width:100%;height:100%;background-color:#eceef0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.carga{display:none}.carga::-webkit-file-upload-button{opacity:0}.recargar{width:100%;height:5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.contentRefuse{height:100%;overflow:auto;width:69%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.vistDoc{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:20px;padding-bottom:10px;padding-right:30px;padding-left:30px}.textoImagen{color:#424242;font-size:32px;text-align:center;position:relative;font-family:Roboto;font-weight:bold;opacity:.5;margin-top:5px}.imgeArchivo{height:265px;width:204px;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;text-align:center}.cargarDocumento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.documento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:10px;width:100%;height:80%}.seccionDocument{height:calc(100% - 99px);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:20px}.hojaSeguridad{height:98px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:67px;background:#eceef0}.hojaSeguridad>div{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.hojaSeguridad>div>label{font-family:Roboto;font-weight:bold;font-size:18px;color:#424242;padding-right:5px}.extension{opacity:.3;font-family:Roboto;font-weight:bold;font-size:24px;color:#424242}.totales{height:33px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.totales>label{font-family:Roboto;font-weight:400;font-size:14px;color:#424242;text-align:left;padding-right:60px}.selectedData{width:calc(100% - 130px);height:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.selectedData>div{width:70%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;line-height:1.2}.selectedData>div>label{font-family:Roboto;font-weight:bold;font-size:21px;color:#424242}.selectedData>div>h3{font-family:Roboto;font-weight:bold;font-size:17px;color:#008894;text-align:left;overflow:hidden}@supports(-webkit-line-clamp: 2){.selectedData>div>h3{display:block;display:-webkit-box !important;line-height:1.2;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 2){.selectedData>div>h3{position:relative;line-height:1.2;overflow:hidden;width:100%}.selectedData>div>h3:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.selectedData>div>span{font-family:Roboto;font-weight:bold;font-size:18px;color:#008894}.selectedData>div>h1{font-family:Roboto;font-weight:400;font-size:17px;color:#969696;text-align:left}.bloqueoCarga{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}::ng-deep .dropListSelect .container-drop .Title>p{font-weight:bold !important;color:#008894}::ng-deep .dropList .container-drop .Title>p{font-weight:400 !important}.infoProducto{height:203px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 20px 20px 20px;background:#f8fbfc}.descarga{font-family:Roboto;font-weight:bold;font-size:20px;color:#008894 !important;text-align:left}label.descarga:hover{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;border-bottom:1px solid;border-bottom:1px solid}.descargaToltip{font-size:12px}label.descargaToltip:hover{border-bottom:1px solid}.menu{position:relative}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:85px;overflow:auto;width:219px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}.imgProveedor{width:130px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.marca{font-family:Roboto;font-weight:bold;font-size:17px;color:#008894}.infoPrincipal{height:calc(100% - 268px);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:53px}.infoPrincipal>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;line-height:1.5;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:40px}.infoPrincipal>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left}.producto{height:129px}@media all and (min-height: 770px)and (max-height: 1090px){.textoImagen{font-size:28px}.extension{font-size:20px}.imgeArchivo{height:247px;width:114px;-webkit-transition:width .8s;transition:width .8s}.infoProducto{height:114px;padding:10px 20px 10px 20px}.selectedData>div>label{font-size:19px}.selectedData>div>h3{font-size:21px !important}@supports(-webkit-line-clamp: 1){.selectedData>div>h3{display:block;display:-webkit-box !important;line-height:1.2;-webkit-line-clamp:1;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 1){.selectedData>div>h3{position:relative;line-height:1.2;overflow:hidden;width:100%}.selectedData>div>h3:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.selectedData>div>span{font-size:16px}.producto{height:85px}.infoPrincipal{height:calc(100% - 126px)}.titulosLista{min-height:99px}.tituloLista{font-size:20px;-webkit-transition:font-size .2ms;transition:font-size .2ms}}"

/***/ }),

/***/ "./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaGestionProductoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_productos_bo_productos_bo_service__ = __webpack_require__("./src/app/services/productos-bo/productos-bo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VistaGestionProductoComponent = /** @class */ (function () {
    function VistaGestionProductoComponent(_servicios, coreContainer) {
        this._servicios = _servicios;
        this.coreContainer = coreContainer;
        this.DEFAULT_FORMAT = 'YYYYMMDD HH:mm:ss';
        this.vistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.finalizarLista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listaLineas = [
            { nombre: 'Todas las Líneas', key: 0 },
            { nombre: 'Estándares · Biológico', key: 1 },
            { nombre: 'Estándares · Químico', key: 2 },
            { nombre: 'Reactivos · Biológico', key: 3 },
            { nombre: 'Reactivos · Químicos', key: 4 },
            { nombre: 'Labware', key: 5 },
            { nombre: 'Publicaciones', key: 6 }
        ];
        this.listaTipos = [
            { nombre: 'Todos los tipos', key: 0 },
            { nombre: 'No Controlados', key: 1 },
            { nombre: 'Controlados', key: 2 }
        ];
        this.listaRazones = [
            { nombre: 'No disponible', key: 0 },
            { nombre: 'En Producción', key: 1 },
            { nombre: 'Descontinuado', key: 2 }
        ];
        this.lista = [];
        this.listaUniverso = [];
        this.searchTerm = '';
        this.tipoFiltroL = 'Todas las Líneas';
        this.tipoFiltroT = 'Todos los tipos';
        this.date = undefined;
        this.activarFecha = false;
    }
    VistaGestionProductoComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object;
        obj.nombre = 'Todas las Líneas';
        this.selectedLinea = obj;
        var obj1;
        obj1 = new Object;
        obj1.nombre = 'Todos los tipos';
        this.selectedTipo = obj1;
        var obj2;
        obj2 = new Object;
        obj2.nombre = 'Seleccionar';
        this.selectedRazon = obj2;
        this.obtenerProductos();
    };
    VistaGestionProductoComponent.prototype.obtenerProductos = function () {
        var _this = this;
        this.lista = [];
        this.listaUniverso = [];
        this.coreContainer.openModal(0);
        this._servicios.obtenerProductosProveedor(this.datosProveedor.idProveedor).subscribe(function (data) {
            var fechaI;
            var refQ;
            var presentacion;
            var tipo;
            var filtroLinea;
            var listaGeneral = data.current;
            for (var i = 0; i < listaGeneral.length; i++) {
                fechaI = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaGeneral[i].fechaInicio);
                if (listaGeneral[i].tipo === 'Labware' || listaGeneral[i].tipo === 'Publicaciones') {
                    refQ = listaGeneral[i].tipo;
                }
                else {
                    if (listaGeneral[i].tipo === 'Estandares' || listaGeneral[i].tipo === 'Estándares') {
                        tipo = 'Estándares';
                    }
                    else {
                        tipo = listaGeneral[i].tipo;
                    }
                    refQ = tipo + ' - ' + listaGeneral[i].subTipo;
                    filtroLinea = tipo + ' · ' + listaGeneral[i].subTipo;
                }
                if (listaGeneral[i].presentacion !== 'ND') {
                    presentacion = listaGeneral[i].presentacion + ' ' + listaGeneral[i].cantidad + listaGeneral[i].unidad;
                }
                else {
                    presentacion = listaGeneral[i].cantidad + listaGeneral[i].unidad;
                }
                _this.lista.push({ codigo: listaGeneral[i].codigo, descripcion: listaGeneral[i].descripcion, control: listaGeneral[i].control,
                    fechaInicio: fechaI, presentacion: presentacion, referencia: refQ, proveedor: listaGeneral[i].proveedor, filtroTipo: filtroLinea, fecha: listaGeneral[i].fechaInicio,
                    tipo: listaGeneral[i].presentacion, idProducto: listaGeneral[i].idProducto, idProductoBO: listaGeneral[i].idProductoBO });
                _this.listaUniverso.push({ codigo: listaGeneral[i].codigo, descripcion: listaGeneral[i].descripcion, control: listaGeneral[i].control,
                    fechaInicio: fechaI, presentacion: presentacion, referencia: refQ, proveedor: listaGeneral[i].proveedor, filtroTipo: filtroLinea, fecha: listaGeneral[i].fechaInicio,
                    tipo: listaGeneral[i].presentacion, idProducto: listaGeneral[i].idProducto, idProductoBO: listaGeneral[i].idProductoBO });
            }
            _this.seleccionarItem(_this.lista[0], 0);
            _this.coreContainer.closeModal(0);
        }, function (error) {
            _this.coreContainer.closeModal(0);
        });
    };
    /*****/
    VistaGestionProductoComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    VistaGestionProductoComponent.prototype.tipoBuscar = function (search) {
        if (this.tipoFiltroL === 'Todas las Líneas' && this.tipoFiltroT === 'Todos los tipos') {
            this.buscar(search);
        }
        else {
            this.searchTerm = search;
            this.recibirFiltro('', '');
        }
    };
    /// Funcion de buscar en facturacion
    VistaGestionProductoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            // this.ClientesSearched= this.clientesConsulta;
            this.lista = this.listaUniverso.slice();
        }
        else {
            this.listaUniverso.forEach(function (folio) {
                if (folio.descripcion.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 || folio.codigo.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        this.validarOrden();
    };
    VistaGestionProductoComponent.prototype.validarOrden = function () {
        if (this.tipoOrden === 'Más Antiguos') {
            this.ordenamientoFechaTramAnt();
        }
        else if (this.tipoOrden === 'Más Recientes') {
            this.ordenamientoFechaTramNue();
        }
    };
    VistaGestionProductoComponent.prototype.ordenamientoFechaTramNue = function () {
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
        this.buscarIndice();
    };
    VistaGestionProductoComponent.prototype.ordenamientoFechaTramAnt = function () {
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
        this.buscarIndice();
    };
    VistaGestionProductoComponent.prototype.recibirFiltro = function (datos, tipo) {
        var _this = this;
        if (tipo !== '') {
            if (tipo === 'linea') {
                this.tipoFiltroL = datos.nombre;
            }
            else if (tipo === 'tipo') {
                this.tipoFiltroT = datos.nombre;
            }
        }
        var listaAux = this.listaUniverso.slice();
        if (this.tipoFiltroL === 'Todas las Líneas' && this.tipoFiltroT === 'Todos los tipos') {
            this.lista = this.listaUniverso.slice();
        }
        else {
            if (this.tipoFiltroL !== 'Todas las Líneas') {
                this.lista = listaAux.filter(function (item) { return item.filtroTipo.toLowerCase() === _this.tipoFiltroL.toLowerCase(); });
                if (this.tipoFiltroT !== 'Todos los tipos') {
                    listaAux = this.lista.slice();
                    this.lista = listaAux.filter(function (item) { return item.control.toLowerCase() === _this.tipoFiltroT.toLowerCase(); });
                }
            }
            else if (this.tipoFiltroT !== 'Todos los tipos') {
                this.lista = listaAux.filter(function (item) { return item.control.toLowerCase() === _this.tipoFiltroT.toLowerCase(); });
                if (this.tipoFiltroL !== 'Todas las Líneas') {
                    listaAux = this.lista.slice();
                    this.lista = listaAux.filter(function (item) { return item.filtroTipo.toLowerCase() === _this.tipoFiltroL.toLowerCase(); });
                }
            }
        }
        if (this.searchTerm !== '') {
            this.buscarFiltro(this.searchTerm, this.lista);
        }
        this.validarOrden();
    };
    /// Funcion de buscar en facturacion
    VistaGestionProductoComponent.prototype.buscarFiltro = function (search, lista) {
        var _this = this;
        var listaAux = lista;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search !== "") {
            listaAux.forEach(function (folio) {
                if (folio.descripcion.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 || folio.codigo.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        else {
            this.lista = lista;
        }
    };
    VistaGestionProductoComponent.prototype.seleccionarItem = function (item, i) {
        this.tipoImagen = false;
        this.activarFecha = true;
        this.date = undefined;
        var obj2;
        obj2 = new Object;
        obj2.nombre = 'Seleccionar';
        this.selectedRazon = obj2;
        this.motivo = undefined;
        this.fechaDisponible = null;
        this.itemSelect = item;
        this.indice = i + 1;
        if (item.proveedor === 'USP') {
            if (item.tipo === 'Bolsa de aluminio') {
                this.tipoImagen = true;
            }
            if (item.tipo !== null && item.tipo !== 'ND') {
                this.pathImg = './assets/Images/productos/44/' + item.tipo + '.png';
            }
            else {
                this.pathImg = './assets/Images/productos/vial.png';
            }
        }
        else {
            this.pathImg = './assets/Images/productos/vial.png';
        }
        this.seleccionado = true;
        this.codigo = item.codigo;
    };
    VistaGestionProductoComponent.prototype.buscarIndice = function () {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.codigo === this.lista[i].codigo) {
                this.indice = i + 1;
            }
        }
        return false;
    };
    VistaGestionProductoComponent.prototype.getFechaImpl = function (fecha) {
        this.fechaDisponible = fecha;
        this.validarBtn();
    };
    VistaGestionProductoComponent.prototype.recibirRazon = function (dato) {
        this.motivo = dato.nombre;
        if (dato.nombre === 'Descontinuado') {
            this.activarFecha = false;
            this.fechaDisponible = null;
        }
        else {
            this.activarFecha = true;
        }
        this.validarBtn();
    };
    VistaGestionProductoComponent.prototype.validarBtn = function () {
        var fecha = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date()).format('YYYYMMDD');
        if (this.activarFecha) {
            if (this.fechaDisponible !== undefined && this.fechaDisponible !== null && this.motivo !== undefined && this.motivo !== 'Seleccionar' && this.fechaDisponible > fecha) {
                this.activarBtn = true;
            }
            else {
                this.activarBtn = false;
            }
        }
        else if (!this.activarFecha) {
            if (this.motivo !== undefined && this.motivo !== 'Seleccionar') {
                this.activarBtn = true;
            }
            else {
                this.activarBtn = false;
            }
        }
    };
    VistaGestionProductoComponent.prototype.cancelar = function () {
        this.vistaP.emit(false);
    };
    VistaGestionProductoComponent.prototype.finalizar = function () {
        var _this = this;
        var fecha = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date()).format(this.DEFAULT_FORMAT);
        var obj = {
            idProductoBO: this.itemSelect.idProductoBO,
            idProducto: this.itemSelect.idProducto,
            fua: fecha,
            disponibilidad: this.fechaDisponible,
            razon: this.motivo
        };
        this.activarAlert = true;
        console.log('Soy datos a enviar', obj);
        this._servicios.finalizarProductoBO(obj).subscribe(function (data) {
            if (data.current) {
                if (_this.listaUniverso.length > 1) {
                    _this.obtenerProductos();
                    _this.vistaP.emit(true);
                }
                else {
                    _this.finalizarLista.emit(true);
                }
            }
        });
    };
    VistaGestionProductoComponent.prototype.cerrarPop = function (valor) {
        this.activarAlert = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaGestionProductoComponent.prototype, "vistaP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaGestionProductoComponent.prototype, "finalizarLista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaGestionProductoComponent.prototype, "datosProveedor", void 0);
    VistaGestionProductoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-gestion-producto',
            template: __webpack_require__("./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.html"),
            styles: [__webpack_require__("./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_productos_bo_productos_bo_service__["a" /* ProductosBoService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], VistaGestionProductoComponent);
    return VistaGestionProductoComponent;
}());



/***/ })

});
//# sourceMappingURL=productos-bo.module.chunk.js.map