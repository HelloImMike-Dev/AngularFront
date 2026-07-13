webpackJsonp(["interfacturacion.module"],{

/***/ "./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; height:100%\" *ngIf=\"Vistafacturacion\">\r\n<div style=\"height: 95%; width: 100%; display: -webkit-box\" >\r\n  <div style=\"width: 30%;background: #FFFFFF;height: 100%\">\r\n    <div style=\"height: 15%; padding-top: 15px;width: 90%\">\r\n      <label class=\"titulo\">Facturación</label>\r\n      <div style=\"display: -webkit-box;padding-top: 15px\">\r\n      <h3 style=\"padding-left: 30px\">Todos</h3>\r\n      <div class=\"barraBusqueda\">\r\n        <div class=\"buscar\" style=\"padding-left: 236px;\">\r\n          <div>\r\n            <div class=\"lupa\">\r\n              <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n            </div>\r\n            <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Cliente\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <!--Lista total-->\r\n    <div style=\"height: 70%;padding-left: 31px; display: flex;\">\r\n      <div style=\"border-bottom: 1px solid; width: 95%;border-top: 1px solid;overflow: scroll\">\r\n        <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"validarLista\">\r\n          <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%; height: 95px;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n            <div style=\"position: absolute; position: absolute; padding-top: 20px;right: 0\">\r\n            <img src=\"./assets/Images/FlechaDerVerde.svg\" style=\"width: 60%; height: 60%;\" (click)=\"seleccionarItem(i)\">\r\n            </div>\r\n            <div class=\"dfSelect\"></div>\r\n            <div class=\"datosLst\" style=\"padding-top: 15px;padding-left: 15px\">\r\n              <label class=\"index\" style=\"font-family: Roboto-Bold\">#{{i +1}}</label>\r\n              <label style=\"color: #008894\">{{item.referencia}} < <label style=\"text-align: center;color: #424242\">{{item.nombre}}</label></label>\r\n              <p>{{item.cantidad}} OC· {{item.precio}}</p>\r\n              <h3 class=\"textoPiezas\">{{item.piezas}} piezas · {{item.productos}} Productos</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Lista de busqueda-->\r\n        <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"!validarLista\">\r\n          <div  *ngFor=\"let item of  clientesSearched; let i = index\"  (click)=\"seleccionarItem(i)\" style=\"display: flex;flex-direction:row;width: 100%; height: 95px;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n            <div style=\"position: absolute; position: absolute; padding-top: 20px;right: 0\">\r\n              <img src=\"./assets/Images/FlechaDerVerde.svg\" style=\"width: 60%; height: 60%;\" (click)=\"seleccionarItem(i)\">\r\n            </div>\r\n            <div class=\"dfSelect\"></div>\r\n            <div class=\"datosLst\" style=\"padding-top: 15px;padding-left: 15px\">\r\n              <label class=\"index\" style=\"font-family: Roboto-Bold\">#{{i +1}}</label>\r\n              <label style=\"color: #008894\">{{item.referencia}} < <label style=\"text-align: center;color: #424242\">{{item.nombre}}</label></label>\r\n              <p>{{item.cantidad}} OC· {{item.precio}}</p>\r\n              <h3 class=\"textoPiezas\">{{item.piezas}} piezas · {{item.productos}} Productos</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!---->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"contenidoGrafica\">\r\n    <div style=\"height: 5%;\">\r\n      <label class=\"tituloGrafica\">CLIENTES</label>\r\n    </div>\r\n    <div class=\"grafica\">\r\n    <pn-donut-chart [data]=\"dataFacturacion\" [tipoGrafica]=\"'General'\" [height]=\"'auto'\"></pn-donut-chart>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div style=\"width: 100%;height: 5%\">\r\n  <footer class=\"footer\">\r\n    <div class=\"datosFooter\">\r\n      <div class=\"Prioridad1\">\r\n        <label class=\"p1\">PHS</label> Pharma Scientific, inc\r\n      </div>\r\n\r\n      <div class=\"Prioridad2\">\r\n        <label class=\"p2\">GOL</label> Golocaer\r\n      </div>\r\n\r\n      <div class=\"Prioridad3\">\r\n        <label class=\"p3\">PQF</label> Proquifa S.A de C.V\r\n      </div>\r\n\r\n      <div class=\"Prioridad3\">\r\n        <label class=\"p3\">MUN</label> Mungen\r\n      </div>\r\n\r\n      <div class=\"Prioridad3\">\r\n        <label class=\"p3\">RMT</label> RM Trading Inc.\r\n      </div>\r\n\r\n      <div class=\"Prioridad3\">\r\n        <label class=\"p3\">OC</label> RM Orden de compra\r\n      </div>\r\n      <!--<div class=\"Ambiente\">\r\n        <img class=\"img\" src='./assets/Images/ambiente.svg' /> Ambiente\r\n      </div>\r\n\r\n      <div class=\"Congelación\">\r\n        <img class=\"img\" src='./assets/Images/congelacion.svg' /> Congelación\r\n      </div>\r\n\r\n      <div class=\"Refrigeración\">\r\n        <img class=\"img\" src='./assets/Images/refrigeracion.svg' /> Refrigeración\r\n      </div>\r\n      <div class=\"Refrigeración\">\r\n        <img class=\"img\" src='./assets/Images/Images/Configuracion/Rutas/ubicacion.svg' /> Ubicaciòn\r\n      </div>-->\r\n    </div>\r\n  </footer>\r\n</div>\r\n</div>\r\n<pn-oredenes-de-compra *ngIf=\"activarVistaOrdenesComp\"></pn-oredenes-de-compra>\r\n"

/***/ }),

/***/ "./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.scss":
/***/ (function(module, exports) {

module.exports = ".tituloGrafica{font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}.grafica{height:80%;width:70%;display:-webkit-box;display:-ms-flexbox;display:flex}.contenidoGrafica{width:70%;background:#eceef0;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-ms-flexbox;display:flex}.lista{border-bottom:solid 1px #eceef0;border-bottom:solid 1px #eceef0;width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst label{color:#008895;padding-left:-2px;font-family:\"Roboto-Bold\";font-size:28px}.lista>.divActive .datosLst p{font-family:\"Roboto-Bold\";font-size:24px;color:#000;line-height:26px}.lista>.divActive .datosLst h3{font-family:\"Roboto-regular\";font-size:21px}.textoPiezas{font-family:\"Roboto-regular\";font-size:21px}.titulo{padding-left:30px;font-family:Novecentowide;font-weight:Bold;font-size:24px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:50px;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:249px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.footer{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-webkit-box-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;min-width:759px;-webkit-box-sizing:border-box;box-sizing:border-box}.linea{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;text-align:center}.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px}.Prioridad1,.Prioridad2,.Prioridad3,.Ambiente,.Congelación,.Refrigeración,.Pedimento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.p1{color:#424242;font-weight:bold}.p2{color:#424242;font-weight:bold}.p3{color:#424242;font-weight:bold}.img,.p1,.p2,.p3{margin-right:6px}.datosC{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:1608px;margin-left:20px;margin-right:20px;width:98%}"

/***/ }),

/***/ "./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturacionComponent; });
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

var FacturacionComponent = /** @class */ (function () {
    function FacturacionComponent() {
        //// Data estatico para visualizar la grafica.
        this.cambiarBarraRegreso = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dataFacturacion = {
            titulo: 'Clientes',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
            valuesExtras: [6, 324, 157, 5000],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
        };
        this.lista = [{ 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12 },
            { 'referencia': "PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6 }];
        this.clientes = [];
        this.validarLista = true;
        this.Vistafacturacion = true; /// VARIABLE PARA VISUALIZAR LA PRIMER VISTA DE FACTURACION
    }
    FacturacionComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.lista.length; i++) {
            this.clientes.push(this.lista[i]);
        }
    };
    FacturacionComponent.prototype.seleccionarItem = function ($index) {
        this.Vistafacturacion = false;
        this.activarVistaOrdenesComp = true;
        this.cambiarBarraRegreso.emit(false);
        console.log('Soy clic -->', $index);
    };
    /// Funcion de buscar en facturacion
    FacturacionComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            // this.ClientesSearched= this.clientesConsulta;
            this.clientesSearched = this.clientes.slice();
        }
        else {
            this.clientes.forEach(function (folio) {
                if (folio.nombre
                    .toLowerCase()
                    .indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.clientesSearched = searchArrayAux;
            this.validarLista = false;
            //  this.regresaConsulta.emit(searchArrayAux);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FacturacionComponent.prototype, "cambiarBarraRegreso", void 0);
    FacturacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-facturacion',
            template: __webpack_require__("./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.html"),
            styles: [__webpack_require__("./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FacturacionComponent);
    return FacturacionComponent;
}());



/***/ }),

/***/ "./src/app/components/interfacturacion/interfacturacion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterfacturacionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfacturacion_component__ = __webpack_require__("./src/app/components/interfacturacion/interfacturacion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InterfacturacionRoutingModule = /** @class */ (function () {
    function InterfacturacionRoutingModule() {
    }
    InterfacturacionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__interfacturacion_component__["a" /* InterfacturacionComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], InterfacturacionRoutingModule);
    return InterfacturacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/interfacturacion/interfacturacion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion [items]=\"itemsMenu\" [titulo]=\"'FACTURISTA'\"  style=\"width: 100%;\"></pn-menu-seccion>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <!--Termina seccion de menu-->\r\n  <!--Empieza el area de trabajo-->\r\n  <div class=\"area\">\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div style=\"cursor: pointer;\" *ngIf=\"!vistaInicialActiva\" (click)=\"regresarVistaP()\">\r\n        <img class=\"img\" src='./assets/Images/regresar.svg'/>\r\n      </div>\r\n      <label class=\"etiqueta\">INTERFACTURACIÓN</label>\r\n    </div>\r\n    <!--Termina la cabezera-->\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 64px)'}\" *ngIf=\"vistaFacturacion\">\r\n      <pn-facturacion (cambiarBarraRegreso)=\"cambiarDireccionamiento($event)\"></pn-facturacion>\r\n    </div>\r\n    <!--Terminan los componentes-->\r\n  </div>\r\n  <!--Termina area de trabajo-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/interfacturacion/interfacturacion.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{width:100%;height:100%}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;border-bottom:2px solid #000}.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecentowide}.img{cursor:pointer}"

/***/ }),

/***/ "./src/app/components/interfacturacion/interfacturacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterfacturacionComponent; });
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

var InterfacturacionComponent = /** @class */ (function () {
    function InterfacturacionComponent() {
        this.totInterfac = 3;
        this.vistaInicialActiva = true;
        this.classAsideMenu = 'asideNormalMenu';
        this.itemsMenu = [
            { nombre: 'Interfacturación', tipo: 'valor', valor: this.totInterfac, url: '', disable: true },
        ];
        /* AQUI TERMINA*/
        this.vistaFacturacion = true;
    }
    InterfacturacionComponent.prototype.ngOnInit = function () {
    };
    /*Metodos para el menu de secciones*/
    InterfacturacionComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = "asideOcultarMenu";
        }
        else {
            this.classAsideMenu = "asideMostrarMenu";
        }
    };
    InterfacturacionComponent.prototype.regresarVistaP = function () {
        var _this = this;
        setTimeout(function () {
            _this.vistaFacturacion = false;
        }, 5);
        this.vistaInicialActiva = true;
        setTimeout(function () {
            _this.vistaFacturacion = true;
        }, 5);
    };
    InterfacturacionComponent.prototype.cambiarDireccionamiento = function ($event) {
        // this.vistaFacturacion = false;
        this.vistaInicialActiva = $event;
    };
    InterfacturacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-interfacturacion',
            template: __webpack_require__("./src/app/components/interfacturacion/interfacturacion.component.html"),
            styles: [__webpack_require__("./src/app/components/interfacturacion/interfacturacion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InterfacturacionComponent);
    return InterfacturacionComponent;
}());



/***/ }),

/***/ "./src/app/components/interfacturacion/interfacturacion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfacturacionModule", function() { return InterfacturacionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfacturacion_component__ = __webpack_require__("./src/app/components/interfacturacion/interfacturacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfacturacion_routing_module__ = __webpack_require__("./src/app/components/interfacturacion/interfacturacion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_menu_seccion_menu_seccion_component__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_facturacion_facturacion_component__ = __webpack_require__("./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_component__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_oredenes_de_compra_oredenes_de_compra_component__ = __webpack_require__("./src/app/components/interfacturacion/componentes/oredenes-de-compra/oredenes-de-compra.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var InterfacturacionModule = /** @class */ (function () {
    function InterfacturacionModule() {
    }
    InterfacturacionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__interfacturacion_routing_module__["a" /* InterfacturacionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__interfacturacion_component__["a" /* InterfacturacionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_menu_seccion_menu_seccion_component__["a" /* MenuSeccionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__componentes_facturacion_facturacion_component__["a" /* FacturacionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_component__["a" /* DonutChartComponent */],
                __WEBPACK_IMPORTED_MODULE_8__componentes_oredenes_de_compra_oredenes_de_compra_component__["a" /* OredenesDeCompraComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__interfacturacion_component__["a" /* InterfacturacionComponent */]
            ]
        })
    ], InterfacturacionModule);
    return InterfacturacionModule;
}());



/***/ })

});
//# sourceMappingURL=interfacturacion.module.chunk.js.map