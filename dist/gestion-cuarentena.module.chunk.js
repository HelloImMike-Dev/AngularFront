webpackJsonp(["gestion-cuarentena.module"],{

/***/ "./src/app/components/gestion-cuarentena/gestion-cuarentena-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionCuarentenaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gestion_cuarentena_component__ = __webpack_require__("./src/app/components/gestion-cuarentena/gestion-cuarentena.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GestionCuarentenaRoutingModule = /** @class */ (function () {
    function GestionCuarentenaRoutingModule() {
    }
    GestionCuarentenaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__gestion_cuarentena_component__["a" /* GestionCuarentenaComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], GestionCuarentenaRoutingModule);
    return GestionCuarentenaRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion-cuarentena/gestion-cuarentena.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"   style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <!--Termina seccion de menu-->\r\n  <!--Empieza el area de trabajo-->\r\n  <div class=\"area\">\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div>\r\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaP\" (click)=\"regresarVistaP()\">\r\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\r\n        </div>\r\n        <label class=\"etiqueta\">GESTIONAR CUARENTENA</label>\r\n      </div>\r\n      <div *ngIf=\"!vistaP\">\r\n        <label class=\"title\">{{cliente}}</label>\r\n      </div>\r\n    </div>\r\n    <!--Termina la cabezera-->\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\r\n      <div style=\"height: 100%; width: 100%;display: flex\" *ngIf=\"vistaP\">\r\n        <div class=\"primeraSec\">\r\n          <div class=\"titulosLista\">\r\n            <div  class=\"tituloCliente\">\r\n              <label class=\"tituloLista\">PROVEEDORES</label>\r\n            </div>\r\n            <div class=\"organizarLista\">\r\n              <div style=\"height: 100%;    display: flex;align-items: center;\">\r\n                <div class=\"menu\" (click)=\"abreCombo()\">\r\n                  <div>\r\n                  </div>\r\n                  <div>\r\n                  </div>\r\n                  <div>\r\n                  </div>\r\n                  <section id=\"section\">\r\n                    <ul class=\"listaHamburguesa\">\r\n                      <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\r\n                      <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\r\n                    </ul>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div style=\"height: 100%; display: flex;align-items: center;\">\r\n                <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\r\n              </div>\r\n              <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n                <div class=\"buscar\">\r\n                  <div>\r\n                    <div class=\"lupa\">\r\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                    </div>\r\n                    <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Proveedor\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--Lista total-->\r\n          <div class=\"listaSeccionUno\">\r\n            <div>\r\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\r\n                <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                  <div class=\"imagenFlecha\">\r\n                    <img src=\"./assets/Images/regresarAzul.svg\" class=\"flechaInicio\" (click)=\"seleccionarItem(i, item)\">\r\n                  </div>\r\n                  <div class=\"dfSelect\"></div>\r\n                  <div class=\"datosLst\">\r\n                    <div class=\"numeroIndex\">\r\n                      <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\r\n                    </div>\r\n                    <div class=\"informacionList\">\r\n                      <label style=\"color: #008894\">{{item.proveedor}} </label>\r\n                      <p>{{item.cantidad}} {{item.totalOC}} OC · {{item.totalProducto}} Productos</p>\r\n                      <h3 class=\"textoPiezas\">Fecha de Inspección: {{item.fechaFormato}} </h3>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"totales\">\r\n              <label>#{{lista.length}}</label>\r\n              <label>{{lista.length}} Proveedores</label>\r\n              <label>{{totalOc}} OC</label>\r\n              <label>{{totalProductos}} Productos</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"contenidoGrafica\">\r\n          <div class=\"grafica\">\r\n            <label style=\"padding-bottom: 10px\">PROVEEDORES</label>\r\n              <pn-donut-chart  [idGrafica]=\"'proveedores'\" [data]=\"dataProveedores\" [tipoGrafica]=\"tipoGraficaProveedores\" [height]=\"'auto'\" style=\"height: 90%;\" *ngIf=\"activarProveedores\"></pn-donut-chart>\r\n          </div>\r\n          <div class=\"grafica\">\r\n            <label>TIPOS DE PRODUCTOS</label>\r\n            <pn-grafica-barras  [data]=\"dataBarra\" [idGrafica]=\"'barra'\" style=\"width:50%;height: 90%;\" *ngIf=\"activarBarra\"></pn-grafica-barras>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <pn-vista-trabajar-productos *ngIf=\"!vistaP\" [datosProveedor]=\"itemSelect\" (regreVista)=\"refrescarVista($event)\"></pn-vista-trabajar-productos>\r\n      <!--vista siguiente-->\r\n    </div>\r\n    <!--Terminan los componentes-->\r\n    <div style=\"width: 100%;height: 55px\">\r\n      <footer class=\"footer\">\r\n        <div class=\"datosFooter\">\r\n          <div class=\"Prioridad1\" *ngIf=\"vistaP\">\r\n            <label class=\"p1\">OC: </label> Orden de Compra\r\n          </div>\r\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\r\n            <label class=\"p1\">FEE: </label> Fecha Estimada de Entrega\r\n          </div>\r\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\r\n            <label class=\"p1\">DRE: </label> Días Restantes de Entrega\r\n          </div>\r\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\r\n            <label class=\"p1\">UEP: </label> Pendiente\r\n          </div>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n  <!--Termina area de trabajo-->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/gestion-cuarentena.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{width:100%;height:100%;overflow:auto}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;padding-right:13px;border-bottom:2px solid #000;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cabezera>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cabezera>div>.title{font-family:Novecento;font-weight:bold;font-size:24px;color:#008894;text-align:right}.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento;margin-bottom:5px}.img{cursor:pointer}.lista{border-bottom:solid 1px #eceef0;border-bottom:solid 1px #eceef0;width:100%;min-height:80px;font-size:20px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>div>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding-top:10px;padding-bottom:10px;padding-left:15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst label{color:#008895;padding-left:-2px;font-family:\"Roboto-Bold\";font-size:28px}.lista>.divActive .datosLst p{font-family:\"Roboto-Bold\";font-size:24px;color:#000;line-height:26px}.lista>.divActive .datosLst h3{font-family:\"Roboto-regular\";font-size:21px}.textoPiezas{font-family:\"Roboto-regular\";font-size:21px}.titulo{padding-left:30px;font-family:Novecentowide;font-weight:Bold;font-size:24px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:50px;width:100%;border-style:solid;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:90%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.footer{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-webkit-box-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;-webkit-box-sizing:border-box;box-sizing:border-box}.linea{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;text-align:center}.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px}.Prioridad1,.Prioridad2,.Prioridad3,.Ambiente,.Congelación,.Refrigeración,.Pedimento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.p1{color:#424242;font-weight:bold}.p2{color:#424242;font-weight:bold}.p3{color:#424242;font-weight:bold}.p1,.p2,.p3{margin-right:6px}.datosC{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:1608px;margin-left:20px;margin-right:20px;width:98%}.grafica{height:50%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 20px 20px 20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.grafica>label{height:10%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}.graficaBarra{display:-webkit-box;display:-ms-flexbox;display:flex;height:50%;width:100%;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:20px;padding-top:20px}.contenidoGrafica{width:70%;background:#eceef0;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-ms-flexbox;display:flex}.menu{position:relative}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:74px;overflow:auto;width:219px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}.tituloCliente{width:50%;height:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.titulosLista{height:10%;padding-top:15px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:15px;min-height:90px}.tituloLista{font-size:24px;font-family:Novecento;font-weight:bold}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:50%}.primeraSec{width:30%;background:#fff;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:20px;margin-right:20px;min-width:350px}.primeraSec>.listaSeccionUno{height:90%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.primeraSec>.listaSeccionUno>div{height:calc(100% - 30px);border-bottom:1px solid;width:100%;border-top:1px solid;overflow:scroll}.primeraSec>.listaSeccionUno>.totales{height:30px;width:100%;border-bottom:0;border-top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.informacionList{font-family:Roboto;padding-top:4px}.informacionList label{color:#008894;font-weight:bold;font-size:24px;font-family:Roboto;line-height:1}.informacionList span{min-height:23px;max-height:46px;font-weight:bold;font-size:20px;color:#424242;font-family:Roboto}.informacionList h3{font-size:17px;font-family:Roboto;color:#424242;line-height:1.5;margin-top:4px;font-weight:400}.numeroIndex{font-size:28px;font-family:Roboto;font-weight:400;text-align:left;padding-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.subtitulo{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.imagenFlecha{position:absolute;right:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;height:100%;padding-right:5px}.flechaInicio{width:100%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}@media all and (min-width: 1300px)and (max-width: 1500px){.numeroIndex{font-size:25px}}"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/gestion-cuarentena.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionCuarentenaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gestionar_cuarentena_gestionar_cuarentena_service__ = __webpack_require__("./src/app/services/gestionar-cuarentena/gestionar-cuarentena.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
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




var GestionCuarentenaComponent = /** @class */ (function () {
    function GestionCuarentenaComponent(_gestorCuarentena, comunService) {
        this._gestorCuarentena = _gestorCuarentena;
        this.comunService = comunService;
        this.filtroProveedores = [];
        this.classAsideMenu = 'asideNormalMenu';
        this.tipoGrafica = 'General';
        this.lista = [{ 'nombreProv': "Abastecedora Científica", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 5 },
            { 'nombreProv': "Proquifa", fechaInspeccion: new Date('11/Apr/2017'), totalOc: 4, fecha: '11/Abr/2017', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Lab Pisa", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 3 },
            { 'nombreProv': "Lab Pisa Mexico", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Proveedora", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 2 },
            { 'nombreProv': "Proquifa Gdl", fechaInspeccion: new Date('12/Sep/2018'), totalOc: 4, fecha: '12/Sep/2018', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Laboratorio", fechaInspeccion: new Date('12/Nov/2018'), totalOc: 4, fecha: '12/Nov/2018', 'piezas': 21, totProd: 11 },
            { 'nombreProv': "Ryndem", fechaInspeccion: new Date('11/Nov/2017'), totalOc: 4, fecha: '11/Nov/2017', 'piezas': 21, totProd: 21 },
            { 'nombreProv': "Proveedora Gn", fechaInspeccion: new Date('12/Aug/2018'), totalOc: 4, fecha: '12/Ago/2018', 'piezas': 21, totProd: 11 },
            { 'nombreProv': "Prov", fechaInspeccion: new Date('12/Jan/2018'), totalOc: 4, fecha: '12/Ene/2018', 'piezas': 21, totProd: 4 },
            { 'nombreProv': "Sanofi", fechaInspeccion: new Date('12/Mar/2018'), totalOc: 4, fecha: '12/Mar/2018', 'piezas': 21, totProd: 6 }];
        this.listaUniveso = [{ 'nombreProv': "Abastecedora Científica", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 5 },
            { 'nombreProv': "Proquifa", fechaInspeccion: new Date('11/Apr/2017'), totalOc: 4, fecha: '11/Abr/2017', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Lab Pisa", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 3 },
            { 'nombreProv': "Lab Pisa Mexico", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Proveedora", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 2 },
            { 'nombreProv': "Proquifa Gdl", fechaInspeccion: new Date('12/Sep/2018'), totalOc: 4, fecha: '12/Sep/2018', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Laboratorio", fechaInspeccion: new Date('12/Nov/2018'), totalOc: 4, fecha: '12/Nov/2018', 'piezas': 21, totProd: 11 },
            { 'nombreProv': "Ryndem", fechaInspeccion: new Date('11/Nov/2017'), totalOc: 4, fecha: '11/Nov/2017', 'piezas': 21, totProd: 21 },
            { 'nombreProv': "Proveedora Gn", fechaInspeccion: new Date('12/Aug/2018'), totalOc: 4, fecha: '12/Ago/2018', 'piezas': 21, totProd: 11 },
            { 'nombreProv': "Prov", fechaInspeccion: new Date('12/Jan/2018'), totalOc: 4, fecha: '12/Ene/2018', 'piezas': 21, totProd: 4 },
            { 'nombreProv': "Sanofi", fechaInspeccion: new Date('12/Mar/2018'), totalOc: 4, fecha: '12/Mar/2018', 'piezas': 21, totProd: 6 }];
        this.dataFacturacion = {
            titulo: 'Totales',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['Proveedores'], ['Productos'], ['OC']],
            labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
            valuesExtras: [6, 324, 15],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50], [324, 157, 50]]
        };
        this.listaGrafica = [];
        this.colores = ['#D2B422', '#DE0209', '#F09600', '#4BA92B'];
        this.listaBarra = [];
    }
    GestionCuarentenaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'gestorCuarentena') {
                _this.activeMenu = false;
                _this.obtenerDatos();
            }
        });
        this.tipoOrden = 'Todos';
        this.vistaP = true;
        this.obtenerDatos();
    };
    GestionCuarentenaComponent.prototype.regresarVistaP = function () {
        this.vistaP = true;
    };
    /*Metodos para el menu de secciones*/
    GestionCuarentenaComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    GestionCuarentenaComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.lista = this.listaUniveso.slice();
        }
        else {
            this.listaUniveso.forEach(function (folio) {
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
    };
    /*****/
    GestionCuarentenaComponent.prototype.abreCombo = function () {
        if (document.getElementById('section').className == 'visible') {
            document.getElementById('section').className = "";
        }
        else {
            document.getElementById('section').className = 'visible';
        }
    };
    GestionCuarentenaComponent.prototype.ordenamientoFechaTramNue = function () {
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
    GestionCuarentenaComponent.prototype.ordenamientoFechaTramAnt = function () {
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
    GestionCuarentenaComponent.prototype.obtenerDatos = function () {
        var _this = this;
        this.activarProveedores = false;
        this.listaGrafica = [];
        this.activarBarra = false;
        this.totalOc = 0;
        this.totalProductos = 0;
        this.lista = [];
        this.listaUniveso = [];
        this._gestorCuarentena.piezasRechazadas().subscribe(function (data) {
            _this.listaBarra = data.current.barra;
            if (data.current.grafica && data.current.grafica !== undefined) {
                _this.listaGrafica = data.current.grafica;
                _this.totalesGrafica = data.current.totales;
            }
            if (data.current.lista && data.current.lista !== undefined) {
                var listaAux = data.current.lista;
                var fechaAux = void 0;
                for (var i = 0; i < listaAux.length; i++) {
                    fechaAux = new __WEBPACK_IMPORTED_MODULE_2__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaAux[i].fechaInspeccion);
                    _this.listaUniveso.push({ idProveedor: listaAux[i].idProveedor, proveedor: listaAux[i].proveedor, totalOC: listaAux[i].totalOC,
                        fecha: listaAux[i].fechaInspeccionFormato, fechaFormato: fechaAux, totalProducto: listaAux[i].totalProducto });
                    _this.lista.push({ idProveedor: listaAux[i].idProveedor, proveedor: listaAux[i].proveedor, totalOC: listaAux[i].totalOC,
                        fecha: listaAux[i].fechaInspeccionFormato, fechaFormato: fechaAux, totalProducto: listaAux[i].totalProducto });
                    _this.totalOc += listaAux[i].totalOC;
                    _this.totalProductos += listaAux[i].totalProducto;
                }
            }
            _this.iniciarMenu(_this.totalesGrafica.totalProducto);
            _this.llenarGraficaBarra();
            _this.limpiarDataG();
        });
    };
    GestionCuarentenaComponent.prototype.iniciarMenu = function (totProd) {
        if (totProd === null) {
            totProd = 0;
        }
        this.itemsMenu = [
            { rol: 'GESTOR DE RECURSOS', active: true, menu: [
                    { nombre: 'Gestor Cuarentena', url: 'gestorCuarentena', tipo: 'valor', valor: totProd, select: true },
                ] }
        ];
        this.activeMenu = true;
    };
    GestionCuarentenaComponent.prototype.llenarGraficaBarra = function () {
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
    GestionCuarentenaComponent.prototype.limpiarDataG = function () {
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
    GestionCuarentenaComponent.prototype.calcularDatosParaGraficas = function () {
        if (this.listaGrafica.length > 0) {
            for (var _i = 0, _a = this.listaGrafica; _i < _a.length; _i++) {
                var productos = _a[_i];
                this.llenarTotalesGraficas(this.dataProveedores, productos, 'PROVEEDORES');
            }
        }
    };
    GestionCuarentenaComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida) {
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
    GestionCuarentenaComponent.prototype.seleccionarItem = function (i, item) {
        this.cliente = item.proveedor;
        this.vistaP = false;
        this.itemSelect = item;
    };
    GestionCuarentenaComponent.prototype.refrescarVista = function (valor) {
        this.obtenerDatos();
        if (valor === true) {
            this.regresarVistaP();
        }
    };
    GestionCuarentenaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-gestion-cuarentena',
            template: __webpack_require__("./src/app/components/gestion-cuarentena/gestion-cuarentena.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion-cuarentena/gestion-cuarentena.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_gestionar_cuarentena_gestionar_cuarentena_service__["a" /* GestionarCuarentenaService */], __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__["a" /* ComunService */]])
    ], GestionCuarentenaComponent);
    return GestionCuarentenaComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion-cuarentena/gestion-cuarentena.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionCuarentenaModule", function() { return GestionCuarentenaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gestion_cuarentena_component__ = __webpack_require__("./src/app/components/gestion-cuarentena/gestion-cuarentena.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_grafica_barras_grafica_barras_module__ = __webpack_require__("./src/app/components/shared/grafica-barras/grafica-barras.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gestion_cuarentena_routing_module__ = __webpack_require__("./src/app/components/gestion-cuarentena/gestion-cuarentena-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vista_trabajar_productos_vista_trabajar_productos_component__ = __webpack_require__("./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pop_up_pop_up_finalizar_exitoso_pop_up_finalizar_exitoso_component__ = __webpack_require__("./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var GestionCuarentenaModule = /** @class */ (function () {
    function GestionCuarentenaModule() {
    }
    GestionCuarentenaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_grafica_barras_grafica_barras_module__["a" /* GraficaBarrasModule */],
                __WEBPACK_IMPORTED_MODULE_5__gestion_cuarentena_routing_module__["a" /* GestionCuarentenaRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__gestion_cuarentena_component__["a" /* GestionCuarentenaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__vista_trabajar_productos_vista_trabajar_productos_component__["a" /* VistaTrabajarProductosComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pop_up_pop_up_finalizar_exitoso_pop_up_finalizar_exitoso_component__["a" /* PopUpFinalizarExitosoComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__gestion_cuarentena_component__["a" /* GestionCuarentenaComponent */]
            ]
        })
    ], GestionCuarentenaModule);
    return GestionCuarentenaModule;
}());



/***/ }),

/***/ "./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpCerrar\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <div class=\"alerta\" *ngIf=\"imagen\">\r\n        <img src=\"assets/Images/flecha_blanca_encirculoverde.svg\" alt=\"\" class=\"alert\" />\r\n      </div>\r\n      <div [style.padding-top]=\"imagen?'15px':'80px'\">\r\n        <label>\r\n          Has enviado exitosamente a cuarentena\r\n        </label>\r\n        <span>\r\n        {{label}}\r\n      </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:3}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:9;background:#fff;border-radius:20px;border:1px solid #008894}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;border-radius:19px 19px 0 0;color:#fff;font-family:Roboto;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px;padding-top:30px}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>div{line-height:1.2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:20px;padding-left:20px}#popUp>div.popContenido>.popContenido>div>span{font-family:Roboto;font-weight:bold;font-size:29px;color:#008894;text-align:center}#popUp>div.popContenido>.popContenido>div>label{font-family:Roboto;font-weight:400;font-size:29px;color:#424242;text-align:center}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff;font-weight:bold}#popUp>div.popContenido>.dvBotones>.dvBoton>label{font-family:\"Novecento\";font-size:21px;font-weight:bold;color:#fff;cursor:pointer;margin-top:-2px}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}.alerta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;padding-top:20px}.alerta img.alert{width:100%;height:100%}"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpFinalizarExitosoComponent; });
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

var PopUpFinalizarExitosoComponent = /** @class */ (function () {
    function PopUpFinalizarExitosoComponent() {
        this.desactivarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpFinalizarExitosoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.popUpCerrar = true;
        setTimeout(function () {
            _this.cerrar();
        }, 3000);
    };
    PopUpFinalizarExitosoComponent.prototype.cerrar = function () {
        this.popUpCerrar = false;
        this.desactivarPop.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopUpFinalizarExitosoComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpFinalizarExitosoComponent.prototype, "imagen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpFinalizarExitosoComponent.prototype, "desactivarPop", void 0);
    PopUpFinalizarExitosoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-finalizar-exitoso',
            template: __webpack_require__("./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpFinalizarExitosoComponent);
    return PopUpFinalizarExitosoComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaSeccion\">\r\n  <div>\r\n    <div class=\"datosPersonales\" *ngIf=\"contacto !== 'Seleccionar'\">\r\n      <div>\r\n        <div>\r\n          <img src=\"./assets/Images/contacto.svg\" class=\"icono\">\r\n          <pn-combo-flecha-verde [validar]=\"true\"  [items]=\"itemContacto\" [itemSelect]=\"selected\" [heightLi]=\"'35px'\" [widthBorder] = 'false' (valueDropList)=\"recibirItem($event)\" style=\"width: 250px;\" *ngIf=\"activarCombo\"></pn-combo-flecha-verde>\r\n        </div>\r\n        <div>\r\n          <img src=\"./assets/Images/mail.svg\" class=\"icono\">\r\n          <label>{{itemContactoS.email}}</label>\r\n        </div>\r\n        <div>\r\n          <img src=\"./assets/Images/telefono.svg\" class=\"icono\">\r\n          <label>{{itemContactoS.tel}}</label>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <label>{{itemContactoS.titulo}}</label>\r\n        <span>Título de Contacto</span>\r\n      </div>\r\n      <div>\r\n        <label>{{itemContactoS.puesto}}</label>\r\n        <span>Puesto</span>\r\n      </div>\r\n      <div>\r\n        <label>{{itemContactoS.departament}}</label>\r\n        <span>Departamento</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"datosPersonales\" *ngIf=\"contacto == 'Seleccionar'\">\r\n      <div style=\"width: 100%\">\r\n        <div class=\"noSeleccionado\">\r\n          <img src=\"./assets/Images/contacto.svg\" class=\"icono\">\r\n          <pn-combo-flecha-verde  [items]=\"itemContacto\" [itemSelect]=\"selected\" [heightLi]=\"'35px'\" [widthBorder] = 'false' (valueDropList)=\"recibirItem($event)\" style=\"width: 250px;display: flex;align-items: center\" *ngIf=\"activarCombo\"></pn-combo-flecha-verde>\r\n        </div>\r\n        <div style=\"height: 50%;width: 100%\">\r\n          <h1>SELECCIONA UN CONTACTO PARA VISUALIZAR ESTA SECCIÓN</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div style=\"padding-right: 20px;\" class=\"seccionListas\">\r\n        <div class=\"titulos\" style=\"border-bottom: initial\">\r\n          <label>ORDENES DE COMPRA</label>\r\n        </div>\r\n        <div>\r\n            <div class=\"titulosLista\">\r\n              <div class=\"organizarLista\" style=\"padding-bottom: 10px; padding-top: initial\">\r\n                <div style=\"height: 100%;    display: flex;align-items: center;\">\r\n                  <div class=\"menu\" (click)=\"abreCombo()\">\r\n                    <div>\r\n                    </div>\r\n                    <div>\r\n                    </div>\r\n                    <div>\r\n                    </div>\r\n                    <section id=\"section\">\r\n                      <ul class=\"listaHamburguesa\">\r\n                        <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\r\n                        <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\r\n                      </ul>\r\n                    </section>\r\n                  </div>\r\n                </div>\r\n                <div style=\"height: 100%;    display: flex;align-items: center;\">\r\n                  <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\r\n                </div>\r\n                <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n                  <div class=\"buscar\">\r\n                    <div>\r\n                      <div class=\"lupa\">\r\n                        <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                      </div>\r\n                      <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"OC\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Lista total-->\r\n            <div class=\"listaSeccionUno\">\r\n              <div>\r\n                <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\r\n                  <div [ngClass]=\"item.oc === folio? 'divActive': ''\"  *ngFor=\"let item of lista; let i = index\"\r\n                       style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\" (click)=\"seleccionarItem(i, item)\">\r\n                    <div class=\"dfSelect\"></div>\r\n                    <div class=\"datosLst\">\r\n                      <div class=\"informacionList\">\r\n                        <label>#{{i +1}} · {{item.oc}} </label>\r\n                        <p>{{item.piezas}} Piezas · Inspector {{item.inspector}}</p>\r\n                        <h3 class=\"textoPiezas\">Fecha de Inspección: <span style=\"text-transform: capitalize;\">{{item.fechaInspeccion}}</span></h3>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"totales\">\r\n                <label>#{{lista.length}}</label>\r\n                <label>{{totalProductos}} Piezas</label>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <!--linea degradada-->\r\n      <div class=\"borderLine\"></div>\r\n      <!---->\r\n      <div style=\"width: 32%;padding-right: 20px;padding-left: 20px\" class=\"seccionListas\">\r\n        <div class=\"titulos\">\r\n          <label *ngIf=\"selectedOc\">#{{indice}} · OC<span>-{{this.folio}}</span></label>\r\n        </div>\r\n        <div>\r\n          <div class=\"titulosLista\">\r\n            <div class=\"organizarLista\">\r\n              <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n                <div class=\"buscar\">\r\n                  <div style=\"width: 100%\">\r\n                    <div class=\"lupa\">\r\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                    </div>\r\n                    <input type=\"text\" [ngModel]=\"searchTermOc\" (ngModelChange)=\"buscarOc($event)\" class=\"buscar-input\" placeholder=\"codigo, tipo, descripción\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--Lista total-->\r\n          <div class=\"listaSeccionUno\" style=\"padding-top: 15px;\">\r\n            <div style=\"border-top: initial\">\r\n              <div class= \"lista\" style=\"display: unset;flex-direction: column;padding: initial\" >\r\n                <div [ngClass]=\"item.identificador === folioOc? 'divActive': ''\"  *ngFor=\"let item of listaOc; let i = index\"\r\n                     style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\" (click)=\"seleccionarItemPieza(i, item)\">\r\n                  <div class=\"dfSelect\"></div>\r\n                  <div class=\"datosLst\">\r\n                    <div class=\"informacionList\" style=\"line-height: 1.3;\">\r\n                      <label>#{{i +1}} · <span style=\"color: #008894\">{{item.codigo}}</span> {{item.concepto}}</label>\r\n                      <label style=\"font-weight: 400\">Fecha de Inpección: <span style=\"text-transform: capitalize\">{{item.fechaInspeccionFormato}}</span> · Inspector: {{item.inspector}}</label>\r\n                      <h3>Lugar: {{item.destino}} FEE: {{item.feeFormato}} DRE: {{item.dre}} Tipo: {{item.tipo}}</h3>\r\n                      <label class=\"pedidoInter\">Pedido Interno {{item.cpedido}}</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"totales\">\r\n              <label>{{listaOcUniverso.length}} Piezas</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--linea degradada-->\r\n      <div class=\"borderLine\"></div>\r\n      <!---->\r\n      <div style=\"width: 48%;padding-left: 20px\" class=\"seccionListas\">\r\n        <div class=\"titulos\">\r\n          <label *ngIf=\"activarOc\" class=\"corteTexto\">#{{indiceOc}} · <span>{{itemOc.codigo}}</span> {{itemOc.concepto}}</label>\r\n        </div>\r\n        <div>\r\n          <div style=\"height: 15%; width: 100%; display: flex;flex-direction: column\">\r\n            <div style=\"height: 60%; width: 100%;display: flex;flex-direction: row;justify-content: space-between\">\r\n              <div class=\"infoProveedor\">\r\n                <span>Producto</span>\r\n                <div>\r\n                  <div style=\"padding-right: 5px;\">\r\n                    <label style=\"font-weight: 400\">Costo:</label>\r\n                    <label>{{itemOc.costo}}</label>\r\n                  </div>\r\n                  <div>\r\n                    <label style=\"font-weight: 400\">Manejo:</label>\r\n                    <label>{{itemOc.manejo}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"infoProveedor\">\r\n                <span>Datos Económicos · Proveedor</span>\r\n                <div>\r\n                  <div>\r\n                    <label style=\"font-weight: 400\">Origen:</label>\r\n                    <label>{{itemOc.origen}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"segundaS\">\r\n              <div class=\"causaProducto\">\r\n                <label>Marca:</label>\r\n                <label style=\"font-weight: bold\">{{itemOc.proveedor}}</label>\r\n              </div>\r\n              <div class=\"causaProducto\">\r\n                <span>Causa</span>\r\n                <label>{{itemOc.causa.trim().slice(this.itemOc.causa.lenght, -1)}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"seccionContenido\">\r\n            <div class=\"texto\">\r\n              <div style=\"height: calc(100% - 84px)\">\r\n                <label>Reporte de Rechazo</label>\r\n              </div>\r\n              <div class=\"rechazo\">\r\n                <label style=\"font-weight: 400\">{{itemOc.rechazo}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"imagenes\">\r\n              <div class=\"imagenRechazo\">\r\n                <div class=\"image\">\r\n                  <label (click)=\"visualizarImg('frente')\" [style.font-weight]=\"fotoF? 'bold': ''\">Foto Frente</label>\r\n                  <label (click)=\"visualizarImg('arriba')\" [style.font-weight]=\"fotoAr? 'bold': ''\">Foto Arriba</label>\r\n                  <label (click)=\"visualizarImg('abajo')\" [style.font-weight]=\"fotoAb? 'bold': ''\">Foto Abajo</label>\r\n                </div>\r\n                <div class=\"estilosImagen\">\r\n                  <img [src]=\"pathImg\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"motivos\">\r\n              <div style=\"flex-direction: row; justify-content: flex-start;align-items: center\">\r\n                <div class=\"espacios\">\r\n                  <img src=\"./assets/Images/radio_unselected.svg\" *ngIf=\"!entregarSelect\" (click)=\"activarSelect('entregar')\">\r\n                  <img src=\"./assets/Images/radio_selected.svg\" *ngIf=\"entregarSelect\" (click)=\"activarSelect('entregar')\">\r\n                  <label>Entregar Producto a Cliente</label>\r\n                </div>\r\n                <div>\r\n                  <img src=\"./assets/Images/radio_unselected.svg\" *ngIf=\"!reclamarSelect\" (click)=\"activarSelect('reclamar')\">\r\n                  <img src=\"./assets/Images/radio_selected.svg\" *ngIf=\"reclamarSelect\" (click)=\"activarSelect('reclamar')\">\r\n                  <label>Reclamar reposición de producto</label>\r\n                </div>\r\n              </div>\r\n              <div  style=\"flex-direction: column;height: 70%\">\r\n                 <label>Instrucciones</label>\r\n                <textarea [ngModel]=\"instruccion\" (ngModelChange)=\"recibirInstruccion($event)\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"btn\">\r\n    <div [style.background-color]=\"activarBtn? '#4BA92B': '#C2C3C9'\" [style.pointer-events]=\"activarBtn? 'auto':'none'\" (click)=\"finalizar()\">\r\n      <label>ACEPTAR</label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<pn-pop-up-finalizar-exitoso *ngIf=\"activarPop\" (desactivarPop)=\"cerrarPop($event)\" [label]=\"itemOc.concepto\" [imagen]=\"true\"></pn-pop-up-finalizar-exitoso>\r\n"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.scss":
/***/ (function(module, exports) {

module.exports = ".buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:50px;width:100%;border-style:solid;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:90%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.menu{position:relative}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:74px;overflow:auto;width:219px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}.areaSeccion{min-width:1175px;min-height:1000px;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0px 20px 0px 20px}.areaSeccion>div{width:100%;height:calc(100% - 71px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.areaSeccion>div>.datosPersonales{width:100%;height:153px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #424242;line-height:1.5}.areaSeccion>div>.datosPersonales>div{height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:10px}.areaSeccion>div>.datosPersonales>div>label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.areaSeccion>div>.datosPersonales>div>span{font-family:Roboto;font-weight:400;font-size:17px;color:#848387;text-align:left}.areaSeccion>div>.datosPersonales>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.areaSeccion>div>.datosPersonales>div>div>label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.areaSeccion>div>.datosPersonales>div>div>h1{font-family:Novecento;font-weight:bold;font-size:40px;color:#d8d9dd;line-height:55px}.areaSeccion>div>div{width:100%;height:calc(100% - 153px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.areaSeccion>.btn{height:71px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:5px}.areaSeccion>.btn div{display:-webkit-box;display:-ms-flexbox;display:flex;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#c2c3c9;cursor:pointer}.areaSeccion>.btn div>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.seccionListas{width:20%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.seccionListas>.titulos{width:100%;height:67px;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #242424;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.seccionListas>.titulos>label{font-family:Novecento;font-weight:bold;font-size:24px;color:#424242;text-align:left;overflow:hidden;-webkit-transition:.8s font-size;transition:.8s font-size}.seccionListas>.titulos>label>span{color:#008894;font-size:24px;font-weight:bold;font-family:Novecento}.seccionListas>div{width:100%;height:calc(100% - 67px)}@supports(-webkit-line-clamp: 1){.corteTexto{display:block;display:-webkit-box !important;line-height:1.2;-webkit-line-clamp:1;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 1){.corteTexto{position:relative;line-height:1.2;overflow:hidden;width:100%}.corteTexto:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.listaSeccionUno{-webkit-box-sizing:border-box;box-sizing:border-box;min-height:668px;height:96%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto}.listaSeccionUno>div{height:calc(100% - 30px);border-bottom:1px solid;width:100%;border-top:1px solid;overflow:auto;position:relative}.listaSeccionUno>.totales{height:30px;width:100%;border-bottom:0;border-top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1.2}.noSeleccionado{height:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:20px}.informacionList{font-family:Roboto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.informacionList label{color:#242424;font-weight:bold;font-size:20px;font-family:Roboto;-webkit-transition:.8s font-size;transition:.8s font-size}.informacionList p{font-weight:400;font-family:Roboto;font-size:19px;color:#008894;text-align:left;-webkit-transition:.8s font-size;transition:.8s font-size}.informacionList h3{font-size:18px;font-family:Roboto;color:#848387;margin-top:4px;font-weight:400;-webkit-transition:.8s font-size;transition:.8s font-size}.pedidoInter{font-weight:400 !important}.imagenFlecha{position:absolute;right:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;height:100%}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.primeraSec{width:30%;background:#fff;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:20px;margin-right:20px;min-width:350px}.primeraSec>.listaSeccionUno{height:90%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.primeraSec>.listaSeccionUno>div{height:calc(100% - 30px);border-bottom:1px solid;width:100%;border-top:1px solid;overflow:scroll}.primeraSec>.listaSeccionUno>.totales{height:30px;width:100%;border-bottom:0;border-top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lista{width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>div>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;padding-top:5px;padding-bottom:5px;padding-left:20px}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive>div>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;padding-top:5px;padding-bottom:5px;padding-left:20px}.borderLine{width:1.1px !important;height:100% !important;background:-webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;background:linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%}.icono{width:16px;margin-right:5px}.flechaInicio{width:100%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg);padding-left:5px}.numeroIndex{font-size:28px;font-family:Roboto;font-weight:400;color:#242424;text-align:left;padding-right:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px}.infoProveedor{height:100%;width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1.2}.infoProveedor>span{font-family:Roboto;font-weight:bold;font-size:20px;color:#008894;text-align:left;-webkit-transition:.8s font-size;transition:.8s font-size}.infoProveedor>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.infoProveedor>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.infoProveedor>div>div>label{font-family:Roboto;font-weight:bold;font-size:18px;color:#424242;text-align:left;padding-right:5px;-webkit-transition:.8s font-size;transition:.8s font-size}.segundaS{height:40%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.segundaS .causaProducto{height:100%;width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.segundaS .causaProducto>span{font-family:Roboto;font-weight:bold;font-size:20px;color:#008894;text-align:left;-webkit-transition:.8s font-size;transition:.8s font-size}.segundaS .causaProducto>label{overflow:hidden;font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left;padding-right:5px;-webkit-transition:.8s font-size;transition:.8s font-size}@supports(-webkit-line-clamp: 1){.segundaS .causaProducto>label{display:block;display:-webkit-box !important;line-height:inital;-webkit-line-clamp:1;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 1){.segundaS .causaProducto>label{position:relative;line-height:inital;overflow:hidden;width:100%}.segundaS .causaProducto>label:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.seccionContenido{height:85%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.seccionContenido>.texto{height:116px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:5px}.seccionContenido>.texto>div>label{font-family:Roboto;font-weight:bold;font-size:20px;color:#424242;text-align:left}.seccionContenido>.texto>.rechazo{line-height:84px;width:100%;background-color:#f9e0e0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}.seccionContenido>.imagenes{height:calc(100% - 116px);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:5px}.seccionContenido>.imagenes>.imagenRechazo{height:100%;width:100%;background-color:#f3f3f4;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.seccionContenido>.imagenes>.imagenRechazo>.image{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:10px}.seccionContenido>.imagenes>.imagenRechazo>.image>label{cursor:pointer;font-family:Roboto;font-weight:400;font-size:20px;color:#008894;text-align:left;height:23px}.seccionContenido>.imagenes>.imagenRechazo>.image>label:hover{border-bottom:1px solid}.seccionContenido>.imagenes>.imagenRechazo>.estilosImagen{height:calc(100% - 20px);width:calc(100% - 20px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.seccionContenido>.imagenes>.imagenRechazo>.estilosImagen>img{height:305px;position:relative}.motivos{height:calc(100% - 407px);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.motivos>div{height:30%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.motivos>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.motivos>div>div>label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:center;-webkit-transition:.8s font-size;transition:.8s font-size}.motivos>div>div>img{height:20px;padding-right:15px}.motivos>div>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left}.motivos>div>textarea{height:77px;outline:0 none;border-width:1px;border-style:solid;border-color:#d8d9dd;font-size:16px;font-family:Roboto;font-weight:400;resize:none}.espacios{padding-right:120px}.subtitulo{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}::ng-deep .dropListSelect .container-drop .Title>p{font-weight:bold !important;color:#008894}@media all and (min-width: 1300px)and (max-width: 1836px){.areaSeccion>div>.datosPersonales>div>div>h1{font-size:35px}.seccionListas>.titulos>label{font-size:22px}.seccionListas>.titulos>label>span{font-size:22px}.infoProveedor>span,.causaProducto>span{font-size:18px}.infoProveedor>div>div>label,.causaProducto>label{font-size:16px}.informacionList>label{font-size:18px}.informacionList>p{font-size:17px}.informacionList>h3{font-size:16px}.motivos>div>div>label{font-size:16px}}@media all and (min-width: 1300px)and (max-width: 1864px){.espacios{padding-right:20px}}@media all and (min-height: 770px)and (max-height: 1261px){.listaSeccionUno{height:95.5%}}"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaTrabajarProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gestionar_cuarentena_gestionar_cuarentena_service__ = __webpack_require__("./src/app/services/gestionar-cuarentena/gestionar-cuarentena.service.ts");
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




var VistaTrabajarProductosComponent = /** @class */ (function () {
    function VistaTrabajarProductosComponent(_serviceContac, _seriveCuarentena, comunService) {
        this._serviceContac = _serviceContac;
        this._seriveCuarentena = _seriveCuarentena;
        this.comunService = comunService;
        this.regreVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemContacto = [];
        this.contacto = 'Seleccionar';
        this.listaOc = [];
        this.listaOcUniverso = [];
        this.folio = '';
        this.searchTerm = '';
        this.searchTermOc = '';
        this.val = 1;
        this.validar = 1;
        this.rutaProd = 'http://proquifa.com.mx:51725/SAP/InspeccionOC/ImagenesRechazo/';
        this.rutaLocal = 'http://localhost:8080/SAP/InspeccionOC/ImagenesRechazo/';
        this.lista = [];
        this.listaUniveso = [];
    }
    VistaTrabajarProductosComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object();
        obj.nombre = 'Seleccionar';
        this.selected = obj;
        this.tipoOrden = 'Todos';
        // this.recibirContactos();
        // this.obtenerListas();
    };
    VistaTrabajarProductosComponent.prototype.ngOnChanges = function () {
        if (this.datosProveedor !== null && this.val === 1) {
            this.recibirContactos();
            this.obtenerListas();
            this.val++;
        }
    };
    VistaTrabajarProductosComponent.prototype.recibirContactos = function () {
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
    VistaTrabajarProductosComponent.prototype.obtenerListas = function () {
        var _this = this;
        this.totalProductos = 0;
        this.lista = [];
        this.listaUniveso = [];
        this._seriveCuarentena.piezasRechazadasPorProveedor(this.datosProveedor.idProveedor).subscribe(function (data) {
            if (data.current && data.current !== undefined && data.current.length > 0) {
                var listaAux = data.current;
                for (var i = 0; i < listaAux.length; i++) {
                    _this.lista.push({
                        proveedor: listaAux[i].proveedor,
                        piezas: listaAux[i].lstRechazos.length,
                        fechaInspeccion: listaAux[i].fechaInspeccionFormato,
                        listaRechazos: listaAux[i].lstRechazos,
                        oc: listaAux[i].compra,
                        inspector: listaAux[i].inspector,
                        fecha: listaAux[i].fechaInspeccion
                    });
                    _this.listaUniveso.push({
                        proveedor: listaAux[i].proveedor,
                        piezas: listaAux[i].lstRechazos.length,
                        fechaInspeccion: listaAux[i].fechaInspeccionFormato,
                        listaRechazos: listaAux[i].lstRechazos,
                        oc: listaAux[i].compra,
                        inspector: listaAux[i].inspector,
                        fecha: listaAux[i].fechaInspeccion
                    });
                    _this.totalProductos++;
                }
                _this.seleccionarItem(0, _this.lista[0]);
            }
            else {
                _this.regreVista.emit(true);
            }
        }, function (error) {
        });
    };
    /*****/
    VistaTrabajarProductosComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    VistaTrabajarProductosComponent.prototype.buscar = function (search) {
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
    VistaTrabajarProductosComponent.prototype.buscarOc = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTermOc = search;
        if (search === '') {
            this.listaOc = this.listaOcUniverso.slice();
        }
        else {
            this.listaOcUniverso.forEach(function (folio) {
                if (folio.codigo.toLowerCase().indexOf(_this.searchTermOc.toLowerCase()) !== -1 ||
                    folio.concepto.toLowerCase().indexOf(_this.searchTermOc.toLowerCase()) !== -1 ||
                    folio.tipo.toLowerCase().indexOf(_this.searchTermOc.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.listaOc = searchArrayAux;
        }
    };
    VistaTrabajarProductosComponent.prototype.ordenamientoFechaTramNue = function () {
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
    VistaTrabajarProductosComponent.prototype.ordenamientoFechaTramAnt = function () {
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
    VistaTrabajarProductosComponent.prototype.recibirItem = function (itemContacto) {
        if (itemContacto.nombre === 'Seleccionar' && this.validar === 2) {
            this.selected = this.contacto;
        }
        if (itemContacto.nombre !== 'Seleccionar' && itemContacto.nombre !== undefined) {
            this.validar++;
            this.contacto = itemContacto.nombre;
            this.itemContactoS = itemContacto;
        }
        this.buscar(this.searchTerm);
    };
    VistaTrabajarProductosComponent.prototype.seleccionarItem = function (i, item) {
        this.searchTermOc = '';
        this.selectedOc = true;
        this.indice = i + 1;
        this.folio = item.oc;
        this.listaOc = item.listaRechazos;
        this.listaOcUniverso = item.listaRechazos;
        this.seleccionarItemPieza(0, this.listaOc[0]);
        this.validarBtn();
        this.buscarOc(this.searchTermOc);
    };
    VistaTrabajarProductosComponent.prototype.seleccionarItemPieza = function (i, item) {
        this.imgFrentr = '';
        this.imgArriba = '';
        this.imgAbajo = '';
        this.instruccion = '';
        this.reclamarSelect = false;
        this.entregarSelect = false;
        this.activarOc = true;
        this.folioOc = item.identificador;
        this.itemOc = item;
        this.indiceOc = i + 1;
        if (this.itemOc.imagenRechazo !== null) {
            var imagenes = this.itemOc.imagenRechazo.split('|');
            this.imgFrentr = imagenes[0];
            this.imgArriba = imagenes[1];
            this.imgAbajo = imagenes[2];
        }
        this.visualizarImg('frente');
        this.validarBtn();
    };
    VistaTrabajarProductosComponent.prototype.visualizarImg = function (tipo) {
        var _this = this;
        var img;
        this.fotoAb = false;
        this.fotoAr = false;
        this.fotoF = false;
        var nombreImg;
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
    VistaTrabajarProductosComponent.prototype.activarSelect = function (tipo) {
        if (tipo === 'entregar') {
            if (!this.entregarSelect) {
                this.accion = 'Entregar';
                this.entregarSelect = true;
                if (this.reclamarSelect) {
                    this.reclamarSelect = false;
                }
            }
        }
        else if (tipo === 'reclamar') {
            if (!this.reclamarSelect) {
                this.accion = 'Reclamar';
                this.reclamarSelect = true;
                if (this.entregarSelect) {
                    this.entregarSelect = false;
                }
            }
        }
        this.validarBtn();
    };
    VistaTrabajarProductosComponent.prototype.recibirInstruccion = function (valor) {
        this.instruccion = valor;
        this.validarBtn();
    };
    VistaTrabajarProductosComponent.prototype.validarBtn = function () {
        if (this.instruccion !== undefined && this.instruccion !== null && this.instruccion !== ''
            && ((this.entregarSelect !== false) || (this.reclamarSelect !== false))) {
            this.activarBtn = true;
        }
        else {
            this.activarBtn = false;
        }
    };
    VistaTrabajarProductosComponent.prototype.finalizar = function () {
        var _this = this;
        var objEnviar = {
            idPieza: this.itemOc.identificador,
            instrucciones: this.instruccion,
            idPCompra: this.itemOc.idPCompra,
            accion: this.accion,
            idProveedor: this.datosProveedor.idProveedor,
            idPPedido: this.itemOc.idPPedido
        };
        this._seriveCuarentena.finalizarCuarentena(objEnviar).subscribe(function (data) {
            if (data.current === true) {
                _this.obtenerListas();
                _this.regreVista.emit(false);
                _this.activarPop = true;
            }
        });
    };
    VistaTrabajarProductosComponent.prototype.cerrarPop = function () {
        this.activarPop = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaTrabajarProductosComponent.prototype, "datosProveedor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaTrabajarProductosComponent.prototype, "regreVista", void 0);
    VistaTrabajarProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-trabajar-productos',
            template: __webpack_require__("./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */], __WEBPACK_IMPORTED_MODULE_2__services_gestionar_cuarentena_gestionar_cuarentena_service__["a" /* GestionarCuarentenaService */], __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__["a" /* ComunService */]])
    ], VistaTrabajarProductosComponent);
    return VistaTrabajarProductosComponent;
}());



/***/ })

});
//# sourceMappingURL=gestion-cuarentena.module.chunk.js.map