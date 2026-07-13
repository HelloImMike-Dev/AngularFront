webpackJsonp(["carta-porte.module"],{

/***/ "./src/app/components/carta-porte/carta-porte-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaPorteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carta_porte_component__ = __webpack_require__("./src/app/components/carta-porte/carta-porte.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartaPorteRoutingModule = /** @class */ (function () {
    function CartaPorteRoutingModule() {
    }
    CartaPorteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__carta_porte_component__["a" /* CartaPorteComponent */]
                    }
                ])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CartaPorteRoutingModule);
    return CartaPorteRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/carta-porte/carta-porte.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <div  class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"  style=\"width: 100%\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div class=\"menuAcordeon\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\"/>\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\"/>\r\n    </div>\r\n  </div>\r\n  <div class=\"area\">\r\n    <div class=\"contain\">\r\n      <div class=\"title\">\r\n        <label>Envíos Programados</label>\r\n      </div>\r\n      <div class=\"list\" *ngIf=\"listPendientes.length > 0\">\r\n       <div class=\"list-contain\">\r\n         <div class=\"list-senders\">\r\n          <div class=\"container-list\">\r\n            <div class=\"item\"  *ngFor=\"let pendiente of listPendientes; let i=index\">\r\n              <div [ngClass]=\"selected == i?'item-container-selected':'item-container'\" (click)=\"slopSelect(pendiente, i)\">\r\n                <div class=\"sender\">\r\n                  <div>\r\n                    <label class=\"text-bold\">{{pendiente.responsable}}</label>\r\n                   <!-- <label>Licencia: CD123456</label>-->\r\n                  </div>\r\n                  <div>\r\n                    <label class=\"text-bold\">{{pendiente.eventos}} Clientes</label>\r\n                    <!--<label>5 Eventos</label>-->\r\n                  </div>\r\n                </div>\r\n                <div class=\"destiny\">\r\n                  <div class=\"img\">\r\n                    <img src=\"./assets/Images/Indicador.svg\">\r\n                  </div>\r\n                  <div class=\"data-destiny\">\r\n                    <div>\r\n                      <label class=\"text-bold\">Origen</label>\r\n                      <label>PROQUIFA</label>\r\n                    </div>\r\n                    <div>\r\n                      <label class=\"text-bold\">Destino</label>\r\n                      <label>PROQUIFA</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n         </div>\r\n         <div *ngIf = \"!visorPdf && !visorPdfAux\" class=\"detail\">\r\n           <div>\r\n            <div class=\"transport\">\r\n             <div class=\"data\">\r\n               <label>TRANSPORTE</label>\r\n               <div class=\"drop\">\r\n                 <pn-combo-flecha-rellena class=\"combo\" [title]=\"'Seleccionar'\"  [items]=\"vehicle\"[subtitleActive]=\"false\" *ngIf=\"activeVehicle\" (valueDropList)=\"selectedOption($event, 'vehicle')\"></pn-combo-flecha-rellena>\r\n               </div>\r\n             </div>\r\n           </div>\r\n            <div class=\"transport\">\r\n             <div class=\"data\">\r\n               <label>MENSAJERO</label>\r\n               <div class=\"drop\">\r\n                 <pn-combo-flecha-rellena class=\"combo\" [title]=\"'Seleccionar'\" [items]=\"mensajeros\" [subtitleActive]=\"false\" *ngIf=\"activeMensajero\" (valueDropList)=\"selectedOption($event, 'mensajero')\"></pn-combo-flecha-rellena>\r\n               </div>\r\n             </div>\r\n           </div>\r\n            <div class=\"transport\">\r\n             <div class=\"data\">\r\n               <label>CLIENTE</label>\r\n               <div class=\"drop\">\r\n                 <pn-combo-flecha-rellena  class=\"combo\" [title]=\"'Seleccionar'\" [items]=\"clients\" [subtitleActive]=\"false\" *ngIf=\"activeClients\" (valueDropList)=\"selectedOption($event, 'client')\"></pn-combo-flecha-rellena>\r\n               </div>\r\n             </div>\r\n           </div>\r\n             <div class=\"transport\">\r\n               <div class=\"data\">\r\n                 <label>KILOMETROS RECORRIDOS</label>\r\n                 <div class=\"km\">\r\n                   <input [(ngModel)]=\"distance\" class=\"input-text\" type=\"number\" in=\"0\" oninput=\"this.value =\r\n                  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\">\r\n                   <label>KM</label>\r\n                 </div>\r\n               </div>\r\n             </div>\r\n           </div>\r\n           <div>\r\n             <button (click)=\"generateCartaPorte()\" [disabled]=\"!selectedClient || !selectedVehicle  || !selectedMensajero\" [ngClass]=\"selectedClient && selectedVehicle && selectedMensajero?'botonIngresar':'botonIngresar botonDisabled'\">GENERAR CARTA PORTE</button>\r\n           </div>\r\n         </div>\r\n         <div class=\"pdf\" *ngIf = \"visorPdf || visorPdfAux\">\r\n           <pq-visor-pdf *ngIf = \"visorPdf\" class=\"pdfViewer\" [urlPdf]=\"path\" ></pq-visor-pdf>\r\n           <pq-visor-pdf *ngIf = \"visorPdfAux\" class=\"pdfViewer\" [urlPdf]=\"path\" ></pq-visor-pdf>\r\n         </div>\r\n       </div>\r\n      </div>\r\n      <div class=\"without-data\" *ngIf=\"listPendientes.length === 0\">\r\n        <div>\r\n          <label>SIN DATOS</label>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<pq-alerta *ngIf=\"alert\" [alertaTxt]=\"msgAlert\" (confirmacion)=\"closeAlert()\"></pq-alerta>\r\n"

/***/ }),

/***/ "./src/app/components/carta-porte/carta-porte.component.scss":
/***/ (function(module, exports) {

module.exports = ".principal{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font:12px Roboto-Regular}.aux{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;background:#e6e6e6}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.menuAcordeon{position:absolute;padding-top:352px;right:0}.combo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:250px;background:#fff}.area{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;overflow:auto}.area>.contain{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:500px}.area>.contain>.title{display:-webkit-box;display:-ms-flexbox;display:flex;height:50px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.area>.contain>.title>label{font-family:Roboto;font-size:24px}.area>.contain>.list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%}.area>.contain>.list>.list-contain{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;border-top:1px solid #a0a0a0}.area>.contain>.list>.list-contain>.list-senders{display:-webkit-box;display:-ms-flexbox;display:flex;width:230px;min-width:230px;border-right:1px solid #a0a0a0}.area>.contain>.list>.list-contain>.list-senders>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.area>.contain>.list>.list-contain>.list-senders>div>.item{width:100%;height:135px;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:8px;border-bottom:1px solid #eceef0;cursor:pointer}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.sender{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.sender>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.sender>div>label{font-size:14px;padding-top:3px}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.sender>div>.text-bold{font-family:Roboto-Bold}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.sender>div>.text{font-family:Roboto;color:#a0a0a0}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.destiny{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-height:90px;padding-top:10px}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.destiny>.img>img{height:100%;padding-right:5px}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.destiny>.data-destiny{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.destiny>.data-destiny>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.destiny>.data-destiny>div>.text-bold{font-size:14px;font-family:Roboto-Bold}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container>.destiny>.data-destiny>div>.text{font-size:14px;font-family:Roboto;color:#a0a0a0}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-radius:12px;height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:8px;-webkit-box-shadow:0px 0px 25px rgba(0,0,0,.1);box-shadow:0px 0px 25px rgba(0,0,0,.1)}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.sender{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.sender>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.sender>div>label{font-size:14px;padding-top:3px}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.sender>div>.text-bold{font-family:Roboto-Bold}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.sender>div>.text{font-family:Roboto;color:#a0a0a0}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.destiny{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-height:90px;padding-top:10px}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.destiny>.img>img{height:100%;padding-right:5px}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.destiny>.data-destiny{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.destiny>.data-destiny>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.destiny>.data-destiny>div>.text-bold{font-size:14px;font-family:Roboto-Bold}.area>.contain>.list>.list-contain>.list-senders>div>.item>.item-container-selected>.destiny>.data-destiny>div>.text{font-size:14px;font-family:Roboto;color:#a0a0a0}.area>.contain>.list>.list-contain>.detail{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:100%;padding:15px}.area>.contain>.list>.list-contain>.detail>div>.transport{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:5px}.area>.contain>.list>.list-contain>.detail>div>.transport>.data{width:100%;background:#e8e8e8;padding:15px;max-height:60px}.area>.contain>.list>.list-contain>.detail>div .botonIngresar{width:250px;height:30px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;float:right;padding-left:auto}.area>.contain>.list>.list-contain>.detail>div .botonDisabled{background:#d5dee2 !important}.area>.contain>.without-data{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:100%;padding:15px;padding-top:1px #292929}.area>.contain>.without-data>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.area>.contain>.without-data>div>label{font-size:28px;font-family:Roboto-Bold;color:#b7c3ce}.drop{width:307px;margin-right:20px;margin-top:5px;height:35px}.number{min:0}.km{height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.km>label{padding-left:5px}.input-text{background-size:30px;height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;width:100%;margin:-29px 0px;min-width:255px}.pdf{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:100%;padding:15px}.pdf>.pdfViewer{min-width:450px;max-width:450px;border:20px solid #eceef0;height:100%;width:100%;display:inline-table}"

/***/ }),

/***/ "./src/app/components/carta-porte/carta-porte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaPorteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_carta_porte_carta_porte_service__ = __webpack_require__("./src/app/services/carta-porte/carta-porte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartaPorteComponent = /** @class */ (function () {
    function CartaPorteComponent(router, cartaPorteServices, coreComponent) {
        this.router = router;
        this.cartaPorteServices = cartaPorteServices;
        this.coreComponent = coreComponent;
        this.classAsideMenu = 'asideNormalMenu';
        this.listPendientes = [];
        this.mensajeros = [];
        this.vehicle = [];
        this.clients = [];
        this.activeMensajero = false;
        this.activeVehicle = false;
        this.activeClients = false;
        this.selected = -1;
        this.selectedMensajero = null;
        this.selectedVehicle = null;
        this.selectedClient = null;
        this.listClient = [];
        this.visorPdf = false;
        this.visorPdfAux = false;
        this.distance = 0;
        this.alert = false;
        this.msgAlert = '';
        this.rutaGeneral = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        this.pathGeneral = this.rutaGeneral.rutaGeneral;
        this.path = null;
    }
    CartaPorteComponent.prototype.ngOnInit = function () {
        this.itemsMenu = [{ rol: 'GESTOR DE OPERACIONES', active: true,
                menu: [{ nombre: 'Asignar Ruta', tipo: 'valor', valor: 0, url: 'gestorRuta', select: false },
                    { nombre: 'Carta Porte', tipo: '', valor: 0, url: 'cartaPorte', select: true }] }];
        this.activeMenu = true;
        this.obtenerPendientes();
        this.obtenerCatMensajero();
        this.obtenerCatVehiculos();
    };
    CartaPorteComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    CartaPorteComponent.prototype.obtenerPendientes = function () {
        var _this = this;
        this.coreComponent.openModal(1);
        this.cartaPorteServices.obtenerPendientes().subscribe(function (data) {
            if (data.current !== null) {
                console.log(data.current);
                _this.listPendientes = data.current;
                _this.slopSelect(_this.listPendientes[0], 0);
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log("Error al recuperar los pendientes");
        });
    };
    CartaPorteComponent.prototype.obtenerCatMensajero = function () {
        var _this = this;
        this.coreComponent.openModal(1);
        this.cartaPorteServices.obtenerCatMensajeros().subscribe(function (data) {
            console.log(data.current);
            if (data.current !== null) {
                var list = data.current;
                for (var i = 0; i < list.length; i++) {
                    _this.mensajeros.push({ nombre: list[i].mensajero, key: list[i].idMensajero });
                }
                _this.activeMensajero = true;
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log("Error al recuperar los mensajeros");
        });
    };
    CartaPorteComponent.prototype.obtenerCatVehiculos = function () {
        var _this = this;
        this.coreComponent.openModal(1);
        this.cartaPorteServices.obtenerCatVehiculos().subscribe(function (data) {
            console.log(data.current);
            if (data.current !== null) {
                var list = data.current;
                for (var i = 0; i < list.length; i++) {
                    _this.vehicle.push({ nombre: list[i].placaVM, key: list[i].idVehiculo });
                }
                _this.activeVehicle = true;
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log("Error al recuperar los vehiculos");
        });
    };
    CartaPorteComponent.prototype.slopSelect = function (slop, index) {
        this.activeClients = false;
        this.selected = index;
        if (slop.folioTimbrado) {
            this.path = this.pathGeneral + 'CartaPorte/' + slop.folioTimbrado + '.pdf';
            if (!this.visorPdf) {
                this.visorPdfAux = false;
                this.visorPdf = true;
            }
            else {
                this.visorPdf = false;
                this.visorPdfAux = true;
            }
        }
        else {
            this.visorPdf = false;
            this.visorPdfAux = false;
        }
        this.getCatCLients(slop.responsable);
    };
    CartaPorteComponent.prototype.getCatCLients = function (mensajero) {
        var _this = this;
        this.coreComponent.openModal(1);
        this.cartaPorteServices.getCatClient(mensajero).subscribe(function (data) {
            console.log(data.current);
            if (data.current !== null) {
                var list = data.current;
                _this.listClient = data.current;
                for (var i = 0; i < list.length; i++) {
                    _this.clients.push({ nombre: list[i].nombre, key: i + 1 });
                }
                _this.activeClients = true;
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log("Error al recuperar los clientes");
        });
    };
    CartaPorteComponent.prototype.selectedOption = function (value, item) {
        debugger;
        if (item === "mensajero") {
            this.selectedMensajero = value;
        }
        else if (item === "vehicle") {
            this.selectedVehicle = value;
        }
        else if (item === "client") {
            this.selectedClient = value.nombre;
        }
    };
    CartaPorteComponent.prototype.generateCartaPorte = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        console.log("ENtre al boton");
        var cliente = this.listClient.filter(function (cliente) { return cliente.nombre === _this.selectedClient; })[0];
        console.log(cliente);
        var data = {
            "version": "4.0",
            "tipoComprobante": "T",
            "lugaqrExpedicion": "14080",
            "cliente": cliente,
            "distRecorrida": this.distance.toString(),
            "responsable": this.listPendientes[this.selected].responsable,
            "idMensajero": this.selectedMensajero.key,
            "idVehiculo": this.selectedVehicle.key
        };
        console.log(data);
        debugger;
        this.cartaPorteServices.generateCartaPorte(data).subscribe(function (data) {
            console.log(data);
            _this.alert = true;
            if (data.current > 0) {
                _this.msgAlert = 'Se Genero Correctamente';
            }
            else {
                _this.msgAlert = 'Error al Generar';
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
            console.log("Erro al generar carta porte: " + error);
            _this.msgAlert = 'Error al Generar';
        });
    };
    CartaPorteComponent.prototype.closeAlert = function () {
        this.alert = false;
    };
    CartaPorteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-carta-porte',
            template: __webpack_require__("./src/app/components/carta-porte/carta-porte.component.html"),
            styles: [__webpack_require__("./src/app/components/carta-porte/carta-porte.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_carta_porte_carta_porte_service__["a" /* CartaPorteService */], __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], CartaPorteComponent);
    return CartaPorteComponent;
}());



/***/ }),

/***/ "./src/app/components/carta-porte/carta-porte.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaPorteModule", function() { return CartaPorteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carta_porte_component__ = __webpack_require__("./src/app/components/carta-porte/carta-porte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carta_porte_routing_module__ = __webpack_require__("./src/app/components/carta-porte/carta-porte-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_rellena_combo_flecha_rellena_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-rellena/combo-flecha-rellena.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_visor_pdf_visor_pdf_module__ = __webpack_require__("./src/app/components/shared/visor-pdf/visor-pdf.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CartaPorteModule = /** @class */ (function () {
    function CartaPorteModule() {
    }
    CartaPorteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__carta_porte_routing_module__["a" /* CartaPorteRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_rellena_combo_flecha_rellena_module__["a" /* ComboFlechaRellenaModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_visor_pdf_visor_pdf_module__["a" /* VisorPdfModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_alerta_alerta_module__["a" /* AlertaModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__carta_porte_component__["a" /* CartaPorteComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__carta_porte_component__["a" /* CartaPorteComponent */]]
        })
    ], CartaPorteModule);
    return CartaPorteModule;
}());



/***/ })

});
//# sourceMappingURL=carta-porte.module.chunk.js.map