webpackJsonp(["material-receptor-gdl.module"],{

/***/ "./src/app/components/material-receptor-gdl/material-receptor-gdl-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialReceptorGdlRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_receptor_gdl_component__ = __webpack_require__("./src/app/components/material-receptor-gdl/material-receptor-gdl.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialReceptorGdlRoutingModule = /** @class */ (function () {
    function MaterialReceptorGdlRoutingModule() {
    }
    MaterialReceptorGdlRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__material_receptor_gdl_component__["a" /* MaterialReceptorGdlComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], MaterialReceptorGdlRoutingModule);
    return MaterialReceptorGdlRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/material-receptor-gdl/material-receptor-gdl.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"   style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <!--Termina seccion de menu-->\r\n  <!--Empieza el area de trabajo-->\r\n  <div class=\"area\">\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div style=\"cursor: pointer;\" *ngIf=\"!vistaPrincipal\" (click)=\"regresarVistaP()\">\r\n        <img class=\"img\" src='./assets/Images/regresar.svg'/>\r\n      </div>\r\n      <label class=\"etiqueta\">DECLARAR ARRIBO DE GUÍA</label>\r\n    </div>\r\n    <!--Termina la cabezera-->\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 64px)'}\">\r\n      <div class=\"vistaPrincipal\" *ngIf=\"vistaPrincipal\">\r\n        <div class=\"contenidoGrafica\">\r\n          <div class=\"grafica\" style=\"padding-right: 10px;\">\r\n            <label class=\"tituloGrafica\">MENSAJERIA</label>\r\n            <pn-donut-chart *ngIf=\"mensajeroData\" [data]=\"dataMensajero\" [tipoGrafica]=\"tipoGraficaMensajero\" [height]=\"'auto'\"></pn-donut-chart>\r\n          </div>\r\n          <div  id=\"donaProducto\" class=\"grafica\" style=\"    padding-left: 10px;\">\r\n            <label class=\"tituloGrafica\">CLIENTES</label>\r\n            <pn-donut-chart *ngIf=\"clienteData\" [idGrafica]=\"'producto'\" [data]=\"dataCliente\" [tipoGrafica]=\"tipoGraficaCliente\" [height]=\"'auto'\"> </pn-donut-chart>\r\n          </div>\r\n        </div>\r\n        <div id=\"divBoton\">\r\n          <div class=\"botonIngresar\" style=\"width: 190px; cursor:pointer\" (click)=\"cambioDeVista()\" [style.pointerEvents] = \"activarBtn ? 'auto' : 'none'\" [style.background]= \"activarBtn ? '#008895' : '#D5DBDB'\" >\r\n            <label>INGRESAR</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!vistaPrincipal\" style=\"width: 100%; height: 100%\">\r\n        <pn-vista-escanear-guia (vistaP)=\"recargarVista($event)\"></pn-vista-escanear-guia>\r\n      </div>\r\n    </div>\r\n    <!--Termina area de trabajo-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/material-receptor-gdl/material-receptor-gdl.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{height:100%;width:100%;overflow:auto}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;border-bottom:2px solid #000}.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento;display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:5px}.img{cursor:pointer}.footer{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.linea{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;text-align:center}.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px}.Prioridad1,.Prioridad2{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%;font-family:Roboto;font-weight:300}.p1{color:#424242;font-weight:bold}.p2{color:#424242;font-weight:bold}.p3{color:#424242;font-weight:bold}.contenidoGrafica{width:100%;height:90%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}.tituloGrafica{font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}.grafica{height:80%;width:70%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.grafica label{text-align:center;padding-bottom:30px}.botonIngresar{width:70px;height:30px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}#divBoton{width:100%;height:10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vistaPrincipal{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:#eceef0}"

/***/ }),

/***/ "./src/app/components/material-receptor-gdl/material-receptor-gdl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialReceptorGdlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_material_receptor_material_receptor_service__ = __webpack_require__("./src/app/services/material-receptor/material-receptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MaterialReceptorGdlComponent = /** @class */ (function () {
    function MaterialReceptorGdlComponent(_datosGrafica, coreContainer, comunService) {
        this._datosGrafica = _datosGrafica;
        this.coreContainer = coreContainer;
        this.comunService = comunService;
        this.vistaPrincipal = true;
        this.classAsideMenu = 'asideNormalMenu';
        this.dataCliente = {
            titulo: 'Clientes',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
            valuesExtras: [6, 324, 157, 5000],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
        };
        this.dataMensajero = {
            titulo: 'Productos',
            labels: ['Totales'],
            valores: [6],
            labelsExtras: [['clientes'], ['Ordenes de compra']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra'],
            valuesExtras: [6, 324],
            valuesExtrasHover: [[6, 3], [324, 157]]
        };
        this.banderaPrueba = true;
        /***VARIABLES GRAFICAS**/
        this.filtroCliente = [];
        this.filtroMensajero = [];
    }
    MaterialReceptorGdlComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idUsuario;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'receptorMaterial') {
                _this.activeMenu = false;
                idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
                _this.datosGrafica(idUsuario);
            }
        });
        idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.datosGrafica(idUsuario);
    };
    MaterialReceptorGdlComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    MaterialReceptorGdlComponent.prototype.regresarVistaP = function () {
        this.vistaPrincipal = true;
    };
    MaterialReceptorGdlComponent.prototype.cambioDeVista = function () {
        this.vistaPrincipal = false;
    };
    MaterialReceptorGdlComponent.prototype.datosGrafica = function (idUsuario) {
        var _this = this;
        this.coreContainer.openModal(0);
        this._datosGrafica.datosGrafica(idUsuario).subscribe(function (data) {
            // console.log(data.current);
            _this.llenarGraficas(data.current);
            _this.coreContainer.closeModal(0);
        });
    };
    MaterialReceptorGdlComponent.prototype.llenarGraficas = function (lista) {
        var _this = this;
        this.activeMenu = false;
        this.limpiarVariables();
        if (lista && lista !== null && lista !== undefined && lista.Cliente) {
            this.activarBtn = true;
            setTimeout(function () {
                _this.mensajeroData = false;
                _this.clienteData = false;
            }, 5);
            this.cliente = lista.Cliente;
            this.mensajeria = lista.Mensajeria;
            this.totales = lista.Totales;
            this.valuesExtras = [this.totales[0].totalMensajeria, this.totales[0].totalGuias, this.totales[0].totalClientes, this.totales[0].totalFacturas];
            this.valuesExtrasClientes = [this.totales[0].totalClientes, this.totales[0].totalGuias, this.totales[0].totalMensajeria, this.totales[0].totalFacturas];
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
            this.iniciarMenu(this.totales[0].totalGuias);
        }
        else {
            this.iniciarMenu(0);
            this.activarBtn = false;
            this.cliente = [];
            this.mensajeria = [];
            this.totales = [];
            this.limpiarVariablesGrafica();
        }
    };
    MaterialReceptorGdlComponent.prototype.iniciarMenu = function (totGuia) {
        this.itemsMenu = [
            { rol: 'RECEPTOR DE MATERIAL', active: true, menu: [
                    { nombre: 'Declarar Arribo Guía', url: 'receptorMaterial', tipo: 'valor', valor: totGuia, select: true },
                ] }
        ];
        this.activeMenu = true;
    };
    MaterialReceptorGdlComponent.prototype.limpiarVariables = function () {
        this.filtroMensajero = [];
        this.filtroCliente = [];
        this.mensajeroData = false;
        this.clienteData = false;
    };
    MaterialReceptorGdlComponent.prototype.limpiarVariablesGrafica = function () {
        var _this = this;
        //////// Emìeza grafica productos //////
        var valoresM = [];
        var valoresMen = [];
        if (this.mensajeria && this.mensajeria.length > 0) {
            for (var _i = 0, _a = this.mensajeria; _i < _a.length; _i++) {
                var nombre = _a[_i];
                this.filtroMensajero.push(nombre.concepto);
                valoresMen.push([0, 0, 0, 0]);
                valoresM.push(0);
            }
        }
        if (valoresM.length > 0) {
            this.dataMensajero = {
                titulo: 'Totales',
                labels: this.filtroMensajero,
                valores: valoresM,
                labelsExtras: ['Mensajeria', 'Guías', 'Clientes', 'Facturas'],
                labelsExtrasHover: ['Mensajeria', 'Guías', 'Clientes', 'Facturas'],
                valuesExtras: this.valuesExtras,
                valuesExtrasHover: valoresMen,
            };
            this.tipoGraficaMensajero = 'General';
        }
        else {
            this.dataMensajero = {
                titulo: 'Totales',
                labels: this.filtroMensajero,
                valores: [1],
                labelsExtras: ['Mensajeria', 'Guías', 'Clientes', 'Facturas'],
                labelsExtrasHover: ['Mensajeria', 'Guías', 'Clientes', 'Facturas'],
                valuesExtras: [0, 0, 0, 0],
                valuesExtrasHover: [[0, 0, 0, 0]],
            };
            this.tipoGraficaMensajero = 'Gris';
            setTimeout(function () {
                _this.mensajeroData = true;
            }, 5);
        }
        //////// Emìeza grafica Cliente //////
        var valoresC = [];
        var valoresClientes = [];
        if (this.cliente && this.cliente.length > 0) {
            for (var _b = 0, _c = this.cliente; _b < _c.length; _b++) {
                var nombre = _c[_b];
                this.filtroCliente.push(nombre.concepto);
                valoresClientes.push([0, 0, 0, 0]);
                valoresC.push(0);
            }
        }
        if (valoresC.length > 0) {
            this.dataCliente = {
                titulo: 'Totales',
                labels: this.filtroCliente,
                valores: valoresC,
                labelsExtras: ['Clientes', 'Guías', 'Mensajeria', 'Facturas'],
                labelsExtrasHover: ['Clientes', 'Guías', 'Mensajeria', 'Facturas'],
                valuesExtras: this.valuesExtrasClientes,
                valuesExtrasHover: valoresClientes,
            };
            this.tipoGraficaCliente = 'General';
        }
        else {
            this.dataCliente = {
                titulo: 'Totales',
                labels: this.filtroCliente,
                valores: [1],
                labelsExtras: ['Clientes', 'Guías', 'Mensajeria', 'Facturas'],
                labelsExtrasHover: ['Clientes', 'Guías', 'Mensajeria', 'Facturas'],
                valuesExtras: [0, 0, 0, 0],
                valuesExtrasHover: [[0, 0, 0, 0]],
            };
            setTimeout(function () {
                _this.tipoGraficaCliente = 'Gris';
                _this.clienteData = true;
            }, 5);
        }
    };
    MaterialReceptorGdlComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.mensajeria; _i < _a.length; _i++) {
            var mensajero = _a[_i];
            this.llenarTotalesGraficas(this.dataMensajero, mensajero, 'MENSAJERIA');
        }
        for (var _b = 0, _c = this.cliente; _b < _c.length; _b++) {
            var cliente = _c[_b];
            this.llenarTotalesGraficas(this.dataCliente, cliente, 'CLIENTES');
        }
    };
    MaterialReceptorGdlComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida) {
        var _this = this;
        switch (graficaElegida) {
            case 'MENSAJERIA':
                var valuesExtraAux = total.valuesExtras;
                var valuesExtrasHover = total.valuesExtrasHover;
                var posicion1 = this.filtroMensajero.indexOf(elemento.concepto);
                total.valuesExtrasHover[posicion1][0] += elemento.totalMensajeria;
                // total.valuesExtrasHover[posicion1][0] += elemento.totalProductos;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                // totalAux.valuesExtras[2] += elemento.monto;
                // total.valuesExtras[2] = new AccountingFormatMoney().transform( totalAux.valuesExtras[2]);
                // total.valuesExtras[1] += elemento.totalPiezas; // Total de Partidas
                // total.valuesExtras[0] += elemento.totalProductos; // Total de Productos
                total.valores[posicion1] += elemento.totalGuias; // +(elemento.monto.toFixed(2)); //Monto total
                // valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion1][1] += elemento.totalGuias;
                total.valuesExtrasHover[posicion1][2] += elemento.totalClientes;
                total.valuesExtrasHover[posicion1][3] += elemento.totalFacturas;
                setTimeout(function () {
                    _this.mensajeroData = true;
                }, 5);
                break;
            case 'CLIENTES':
                valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicion2 = this.filtroCliente.indexOf(elemento.concepto);
                total.valores[posicion2] += elemento.totalGuias;
                total.valuesExtrasHover[posicion2][0] += elemento.totalClientes;
                total.valuesExtrasHover[posicion2][1] += elemento.totalGuias;
                total.valuesExtrasHover[posicion2][2] += elemento.totalMensajeria;
                total.valuesExtrasHover[posicion2][3] += elemento.totalFacturas;
                /*---------Termina------*/
                setTimeout(function () {
                    _this.clienteData = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    MaterialReceptorGdlComponent.prototype.recargarVista = function (event) {
        this.vistaPrincipal = true;
        var idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.datosGrafica(idUsuario);
    };
    MaterialReceptorGdlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-material-receptor-gdl',
            template: __webpack_require__("./src/app/components/material-receptor-gdl/material-receptor-gdl.component.html"),
            styles: [__webpack_require__("./src/app/components/material-receptor-gdl/material-receptor-gdl.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_material_receptor_material_receptor_service__["a" /* MaterialReceptorService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */]])
    ], MaterialReceptorGdlComponent);
    return MaterialReceptorGdlComponent;
}());



/***/ }),

/***/ "./src/app/components/material-receptor-gdl/material-receptor-gdl.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialReceptorGdlModule", function() { return MaterialReceptorGdlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_receptor_gdl_component__ = __webpack_require__("./src/app/components/material-receptor-gdl/material-receptor-gdl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_receptor_gdl_routing_module__ = __webpack_require__("./src/app/components/material-receptor-gdl/material-receptor-gdl-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vista_escanear_guia_vista_escanear_guia_component__ = __webpack_require__("./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MaterialReceptorGdlModule = /** @class */ (function () {
    function MaterialReceptorGdlModule() {
    }
    MaterialReceptorGdlModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__material_receptor_gdl_routing_module__["a" /* MaterialReceptorGdlRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__material_receptor_gdl_component__["a" /* MaterialReceptorGdlComponent */],
                __WEBPACK_IMPORTED_MODULE_10__vista_escanear_guia_vista_escanear_guia_component__["a" /* VistaEscanearGuiaComponent */]
            ]
        })
    ], MaterialReceptorGdlModule);
    return MaterialReceptorGdlModule;
}());



/***/ }),

/***/ "./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 55px)'}\">\r\n    <div style=\"height: 100%; width: 100%; display: -webkit-box\" >\r\n      <div class=\"listaProd\">\r\n        <div class=\"titulosLista\">\r\n          <div  class=\"tituloCliente\">\r\n            <label class=\"tituloLista\">GUÍAS</label>\r\n          </div>\r\n          <div class=\"organizarLista\">\r\n            <div style=\"width: 10%; height: 100%;    display: flex;align-items: center;\">\r\n              <div class=\"menu\" (click)=\"abreCombo()\">\r\n                <div>\r\n                </div>\r\n                <div>\r\n                </div>\r\n                <div>\r\n                </div>\r\n                <section id=\"section\">\r\n                  <ul class=\"listaHamburguesa\">\r\n                    <li (click)=\"ordenamientoFechaTramNue(0)\">Más Nuevos</li>\r\n                    <li (click)=\"ordenamientoFechaTramAnt(0)\">Mas Antiguos</li>\r\n                  </ul>\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div style=\"width: 38%; height: 100%;    display: flex;align-items: center;\">\r\n              <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\r\n            </div>\r\n            <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n              <div class=\"buscar\" style=\"padding-left: 236px;\">\r\n                <div>\r\n                  <div class=\"lupa\">\r\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                  </div>\r\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Buscar\"/>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Lista total-->\r\n        <div class=\"segundaSeccionList\">\r\n          <div style=\"width: 97%;\">\r\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"validarLista\">\r\n              <div  [ngClass]=\"listaFD[i]\" *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                <div class=\"dfSelect\"></div>\r\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(i, item)\">\r\n                  <div class=\"informacionList\">\r\n                    <label class=\"numeroIndex\"> #{{i +1}} · <span class=\"tipoMen\"> {{item.mensajeria}}</span></label>\r\n                    <span class=\"guia\">Guía: {{item.guia}}</span>\r\n                    <h3 class=\"fechaEnv\"> Fecha de Envio : {{fechas[i].fecha}} · {{fechas[i].hora}} {{fechas[i].tipo}}</h3>\r\n                    <div style=\"display: flex;justify-content: space-between;\">\r\n                      <h3 class=\"totalesList\"> <img height=\"17px;\" src=\"./assets/Images/catalogo/btnClientes_azul.png\" style=\"padding-right: 5px;\">{{item.totalClientes}} Clientes</h3>\r\n                      <h3 class=\"totalesList\"><img height=\"17px;\" src=\"./assets/Images/ventas/visitas/archivos.svg\" style=\"padding-right: 5px;\">{{item.totalFacturas}} Facturas</h3>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Lista de busqueda-->\r\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"!validarLista\">\r\n              <div  [ngClass]=\"listaFD[i]\" *ngFor=\"let item of  clientesSearched; let i = index\"  (click)=\"seleccionarItem(i, item)\" class=\"select\">\r\n                <div class=\"dfSelect\"></div>\r\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(i)\">\r\n                  <div class=\"informacionList\">\r\n                    <label class=\"numeroIndex\"> #{{i +1}} · <span class=\"tipoMen\">{{item.mensajeria}}</span></label>\r\n                    <span class=\"guia\">Guía: {{item.guia}}</span>\r\n                    <h3 class=\"fechaEnv\"> Fecha de Envio : {{fechas[i].fecha}} · {{fechas[i].hora}} {{fechas[i].tipo}}</h3>\r\n                    <div style=\"display: flex;justify-content: space-between;\">\r\n                      <h3 class=\"totalesList\"> <img height=\"17px;\" src=\"./assets/Images/catalogo/btnClientes_azul.png\" style=\"padding-right: 5px;\">{{item.totalClientes}} Clientes</h3>\r\n                      <h3 class=\"totalesList\"><img height=\"17px;\" src=\"./assets/Images/ventas/visitas/archivos.svg\" style=\"padding-right: 5px;\">{{item.totalFacturas}} Facturas</h3>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!---->\r\n          </div>\r\n        </div>\r\n        <div class=\"totales\">\r\n          <label># {{total}}</label>\r\n          <label>{{totCli}} Clientes</label>\r\n          <label>{{totFac}} Facturas</label>\r\n          <!--<label>{{totDir}} Direcciones</label>-->\r\n        </div>\r\n      </div>\r\n      <!--linea degradada-->\r\n      <div class=\"borderLine\"></div>\r\n      <div class=\"contenidoEsaneo\">\r\n        <div class=\"tituloEscaneo\" style=\"min-height: 50px;\">\r\n          <label>LECTURA CÓDIGO DE BARRAS</label>\r\n        </div>\r\n        <div class=\"escaneo\">\r\n          <div class=\"vistaPedimento\">\r\n\r\n              <textarea  id=\"pedimento\" type=\"text\" name=\"firstname\" autofocus=\"focus\"  (keydown.enter)=\"enter()\"\r\n               #textarea  [(ngModel)]=\"textoPedimento\" class=\"texArea\">\r\n            </textarea>\r\n\r\n            <div class=\"contenedorImagen\" >\r\n              <div style=\"height: 25%;%; display:flex\"></div>\r\n              <div style=\"height:27%; display:flex; width:50%; \">\r\n                <img width=\"100%\" height=\"100%\" src='./assets/Images/Codigo_de_barras.svg' *ngIf=\"inicio\">\r\n                <img width=\"100%\" height=\"100%\" src=\"./assets/Images/Codigo_de_barras_incorrecto.svg\"  *ngIf=\"escaneoIncorrecto\">\r\n                <img width=\"100%\" height=\"100%\" src=\"./assets/Images/Codigo_de_barras_correcto.svg\"  *ngIf=\"escaneoCorrecto\">\r\n              </div>\r\n              <div style=\"height:6%; display:flex\"></div>\r\n              <div style=\"height:12%; display:flex; align-items:center; \"  *ngIf=\"activarGuia\">\r\n                <!-- <label class=\"textoPedimento\">[3018 8000249]</label> -->\r\n                <label class=\"subtituloEscaneo\">Escanea el código de barras</label>\r\n              </div>\r\n              <div style=\"height:19%; display:flex; flex-direction:column;\" *ngIf=\"activarGuia\">\r\n                <label class=\"subtituloEscaneo\" [style.color]=\"escaneoCorrecto? '#008894':'#848387'\">Guía: {{numGuiaEscanear}}</label>\r\n                <label class=\"subtituloEscaneo\"></label>\r\n              </div>\r\n              <div style=\"height:19%; display:flex\"> </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div style=\"width: 100%; height: 50px\">\r\n  <div style=\"width: 100%;height: 100%\">\r\n    <footer class=\"footer\">\r\n      <div class=\"abreviaciones\">\r\n        <div class=\"Prioridad1\">\r\n          <label class=\"p1\"><img height=\"17px;\" src=\"./assets/Images/catalogo/btnClientes_azul.png\" class=\"imgFooter\"><span class=\"texto\"> Clientes</span></label>\r\n        </div>\r\n        <div class=\"Prioridad2\">\r\n          <label class=\"p2\"><img height=\"17px;\" src=\"./assets/Images/ventas/visitas/archivos.svg\" class=\"imgFooter\"><span class=\"texto\"> Facturas</span></label>\r\n        </div>\r\n\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.scss":
/***/ (function(module, exports) {

module.exports = ".lista{width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.textoPiezas{font-family:\"Roboto-regular\";font-size:21px}.titulo{padding-left:30px;font-family:Novecentowide;font-weight:Bold;font-size:24px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:249px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.footer{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.linea{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;text-align:center}.datosC{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:1608px;margin-left:20px;margin-right:20px;width:98%}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:50%}.subtitulo{font-size:18px;font-family:Roboto;font-weight:300}.tituloLista{font-size:24px;font-family:Novecento;font-weight:bold}.numeroIndex{font-size:20px;font-family:Roboto;font-weight:bold;text-align:left;padding-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px}.numeroIndex>.tipoMen{font-family:Roboto;font-weight:bold;font-size:20px;color:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:5px}.informacionList{font-family:Roboto;width:85%;padding-top:4px}.informacionList>.fechaEnv{font-family:Roboto-Regular;font-size:18px;color:#008894;font-weight:300}.imgFlecha{width:17.9px;height:27.4px}.listaProd{width:30%;background:#fff;height:100%;min-width:396px;padding-left:20px;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.infoLista{height:10%;padding-top:15px;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.totales{height:7%;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:distribute;justify-content:space-around;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:5px}.titulosLista{height:10%;padding-top:15px;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:15px;min-height:90px}.abreviaciones{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-top:2px solid #424242;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.menu{position:relative}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:120px;overflow:auto;width:219px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}.segundaSeccionList{height:82%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid;width:95%;border-top:1px solid;overflow:auto}.tituloCliente{width:50%;height:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.cabeceraCliente{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:55%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;color:#008894;font-family:Roboto;font-weight:bold;font-size:28px;padding-right:19.2px}.select{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;position:relative;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0}.texto{font-family:Roboto;font-weight:300}.contenidoEsaneo{width:69.9%;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}.tituloEscaneo{height:7%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #000;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:24px;font-family:Novecento;font-weight:bold;color:#424242}.escaneo{height:93%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.subtituloEscaneo{font-family:Roboto-Regular;font-size:48px;color:#424242}.vistaPedimento{font-family:\"Roboto\";display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;height:100%;width:100%;position:relative}.textoPedimento{font-family:\"Roboto\";font-size:50px;color:#424242;font-weight:lighter;font-style:normal}.textoVerde{font-family:\"Novecento\";font-size:50px;color:#008895;font-weight:bold}.texArea{width:100%;height:100%;z-index:1;opacity:0}.contenedorImagen{position:absolute;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.guia{font-family:Roboto-Regular;font-size:18px;color:#424242;font-weight:300}.totalesList{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;font-family:Roboto;font-size:18px;color:#848387;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:400}.Prioridad1,.Prioridad2{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:1.7%;margin-right:1.7%;font-family:Roboto;font-weight:300}.borderLine{width:.1%;height:100%;background:-webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;background:linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%}.imgFooter{padding-right:3.5px}@media all and (max-width: 1690px)and (min-width: 1300px){.subtituloEscaneo{font-size:38px}}"

/***/ }),

/***/ "./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaEscanearGuiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_material_receptor_material_receptor_service__ = __webpack_require__("./src/app/services/material-receptor/material-receptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VistaEscanearGuiaComponent = /** @class */ (function () {
    function VistaEscanearGuiaComponent(_materialReceptor, coreContainer) {
        this._materialReceptor = _materialReceptor;
        this.coreContainer = coreContainer;
        this.vistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lista = []; /* [{ 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          {  'cliente':"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          { 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2},
          { 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6}];*/
        this.clientes = [];
        this.validarLista = true;
        this.datosProducto = [];
        this.listaFD = [];
        this.fechas = [];
        /*Variables apra totales**/
        this.total = 0;
        this.totDir = 0;
        this.totFac = 0;
        this.totCli = 0;
    }
    VistaEscanearGuiaComponent.prototype.ngOnInit = function () {
        this.obtenerLista();
        this.focus = true;
        this.inicio = true;
        /*for (let i: number = 0; i < this.lista.length; i++) {
          this.clientes.push(this.lista[i]);
        }*/
        this.tipoOrden = 'Todos';
    };
    VistaEscanearGuiaComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.focus();
    };
    VistaEscanearGuiaComponent.prototype.obtenerLista = function () {
        var _this = this;
        var idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this._materialReceptor.getGuias(idUsuario).subscribe(function (data) {
            console.log(data.current);
            var listaAux = data.current;
            var fecha;
            var fechaAux;
            var separador;
            var hora;
            var horaAux;
            for (var i = 0; i < listaAux.length; i++) {
                fechaAux = listaAux[i].fechaEnvio;
                separador = fechaAux.split('-');
                fecha = _this.transform(separador[1] + '-' + separador[2] + '-' + separador[0]);
                horaAux = listaAux[i].hora;
                separador = horaAux.split(':');
                if (separador[0] >= 1 && separador[0] < 12) {
                    _this.tipoHora = 'AM';
                }
                else if (separador[0] >= 12 && separador[0] < 24) {
                    _this.tipoHora = 'PM';
                }
                hora = separador[0] + ':' + separador[1];
                _this.fechas.push({ fechaEnvio: listaAux[i].fechaEnvio, fecha: fecha, hora: hora, tipo: _this.tipoHora });
            }
            _this.lista = data.current;
            _this.clientes = data.current;
            _this.total = _this.lista.length;
            if (_this.lista.length === 0) {
                _this.vistaP.emit(true);
            }
            // this.copiaLista(this.lista);
            _this.calcularTotales(_this.lista);
            _this.seleccionarItem(0, _this.lista[0]);
        });
    };
    VistaEscanearGuiaComponent.prototype.copiaLista = function (lista) {
        this.clientes = [];
        for (var i = 0; i < lista.length; i++) {
            this.clientes.push(lista[i]);
        }
    };
    VistaEscanearGuiaComponent.prototype.transform = function (dateToFormat) {
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
    VistaEscanearGuiaComponent.prototype.calcularTotales = function (lista) {
        var facturas = 0;
        var clientes = 0;
        for (var i = 0; i < lista.length; i++) {
            facturas += lista[i].totalFacturas;
            clientes += lista[i].totalClientes;
        }
        this.totCli = clientes;
        this.totFac = facturas;
    };
    /// Funcion de buscar en facturacion
    VistaEscanearGuiaComponent.prototype.buscar = function (search) {
        var _this = this;
        this.activarGuia = false;
        this.listaFD[this.index] = '';
        this.numGuiaEscanear = '';
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            // this.ClientesSearched= this.clientesConsulta;
            this.lista = this.clientes.slice();
            if (this.tipoOrden === 'Más Nuevos') {
                this.ordenamientoFechaTramNue(1);
            }
            else if (this.tipoOrden === 'Más Antiguos') {
                this.ordenamientoFechaTramAnt(1);
            }
        }
        else {
            this.clientes.forEach(function (folio) {
                if (folio.guia.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            if (searchArrayAux.length > 0 || this.searchTerm) {
                this.lista = searchArrayAux;
            }
            if (this.lista.length > 0) {
                if (this.tipoOrden === 'Más Nuevos') {
                    this.ordenamientoFechaTramNue(1);
                }
                else if (this.tipoOrden === 'Más Antiguos') {
                    this.ordenamientoFechaTramAnt(1);
                }
            }
            this.validarLista = true;
            //  this.regresaConsulta.emit(searchArrayAux);
        }
    };
    /****Seleccionar lista*/
    VistaEscanearGuiaComponent.prototype.seleccionarItem = function (i, item) {
        /****Activar Escaneo*/
        this.activarGuia = true;
        this.escaneoCorrecto = false;
        this.inicio = true;
        this.escaneoIncorrecto = false;
        this.elementRef.nativeElement.focus();
        /********/
        this.index = i;
        this.numGuiaEscanear = item.guia;
        this.idPendiente = item.idPendiente;
        this.tipoPedimento = item.guia;
        this.listaFD = [];
        this.listaFD = new Array(this.lista.length).fill('');
        this.listaFD[i] = 'divActive';
        this.datosProducto = this.lista[i];
        console.log('Soy clic -->', i);
    };
    VistaEscanearGuiaComponent.prototype.ordenamientoFechaTramNue = function (val) {
        this.tipoOrden = 'Más Nuevos';
        if (this.lista.length > 0) {
            this.lista.sort(function (a, b) {
                if (a.fechaEnvio < b.fechaEnvio) {
                    return 1;
                }
                if (a.fechaEnvio > b.fechaEnvio) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            this.configurarFecha(this.lista);
            // this.copiaLista(this.lista);
            if (val !== 1) {
                this.seleccionarItem(0, this.lista[0]);
            }
        }
    };
    VistaEscanearGuiaComponent.prototype.ordenamientoFechaTramAnt = function (val) {
        this.tipoOrden = 'Más Antiguos';
        if (this.lista.length > 0) {
            this.lista.sort(function (a, b) {
                if (a.fechaEnvio > b.fechaEnvio) {
                    return 1;
                }
                if (a.fechaEnvio < b.fechaEnvio) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            this.configurarFecha(this.lista);
            // this.copiaLista(this.lista);
            if (val !== 1) {
                this.seleccionarItem(0, this.lista[0]);
            }
        }
    };
    VistaEscanearGuiaComponent.prototype.configurarFecha = function (lista) {
        this.fechas = [];
        var listaAux = lista;
        var fecha;
        var fechaAux;
        var separador;
        var hora;
        var horaAux;
        for (var i = 0; i < listaAux.length; i++) {
            fechaAux = listaAux[i].fechaEnvio;
            separador = fechaAux.split('-');
            fecha = this.transform(separador[1] + '-' + separador[2] + '-' + separador[0]);
            horaAux = listaAux[i].hora;
            separador = horaAux.split(':');
            if (separador[0] >= 1 && separador[0] < 12) {
                this.tipoHora = 'AM';
            }
            else if (separador[0] >= 12 && separador[0] < 24) {
                this.tipoHora = 'PM';
            }
            hora = separador[0] + ':' + separador[1];
            this.fechas.push({ fechaEnvio: listaAux[i].fechaEnvio, fecha: fecha, hora: hora, tipo: this.tipoHora });
        }
    };
    /*****/
    VistaEscanearGuiaComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    VistaEscanearGuiaComponent.prototype.txt = function (texto) {
        var obj;
        obj = new Object;
        obj.nombre = texto;
        this.textoPedimento = obj.nombre;
        console.log(this.textoPedimento);
    };
    VistaEscanearGuiaComponent.prototype.enter = function () {
        var _this = this;
        var pedimento = this.textoPedimento;
        this.textoPedimento = pedimento.trim();
        if (this.textoPedimento.toLowerCase().indexOf(this.tipoPedimento.toLowerCase()) !== -1) {
            this.escaneoCorrecto = true;
            this.inicio = false;
            this.escaneoIncorrecto = false;
            this.finalizar();
        }
        else {
            this.escaneoCorrecto = false;
            this.inicio = false;
            this.escaneoIncorrecto = true;
            setTimeout(function () {
                _this.elementRef.nativeElement.focus();
            }, 5);
        }
        this.textoPedimento = '';
    };
    VistaEscanearGuiaComponent.prototype.finalizar = function () {
        var _this = this;
        var idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var objEnviar = { guia: this.numGuiaEscanear, idUsuario: idUsuario, idPendiente: this.idPendiente };
        this.coreContainer.openModal(0);
        this._materialReceptor.finalizar(objEnviar).subscribe(function (data) {
            if (data.current === true) {
                /* this.clientes.splice(this.index, 1);
                 this.lista = [...this.clientes];
                 this.fechas.splice(this.index, 1);*/
                _this.obtenerLista();
                // this.copiaLista(this.lista);
            }
            _this.coreContainer.closeModal(0);
        });
        this.seleccionarItem(0, this.lista[0]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaEscanearGuiaComponent.prototype, "vistaP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textarea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VistaEscanearGuiaComponent.prototype, "elementRef", void 0);
    VistaEscanearGuiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-escanear-guia',
            template: __webpack_require__("./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.html"),
            styles: [__webpack_require__("./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_material_receptor_material_receptor_service__["a" /* MaterialReceptorService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], VistaEscanearGuiaComponent);
    return VistaEscanearGuiaComponent;
}());



/***/ })

});
//# sourceMappingURL=material-receptor-gdl.module.chunk.js.map