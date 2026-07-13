webpackJsonp(["gestion.module"],{

/***/ "./src/app/components/gestion/gestion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gestion_component__ = __webpack_require__("./src/app/components/gestion/gestion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GestionRoutingModule = /** @class */ (function () {
    function GestionRoutingModule() {
    }
    GestionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__gestion_component__["a" /* GestionComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], GestionRoutingModule);
    return GestionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/gestion.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p class=\"title\">\r\n    TABLEROS\r\n  </p>\r\n\r\n  <div class=\"divTableros\">\r\n    <pq-tarjeta-menu *ngFor=\"let item of tableros; let i = index\" [nombre]=\"item.nombre\" [imagen]=\"pathImg + item.img\"></pq-tarjeta-menu>\r\n  </div>\r\n</div>\r\n\r\n<div>\r\n  <p class=\"title\">\r\n    CONSULTAS\r\n  </p>\r\n\r\n  <div class=\"divConsultas\">\r\n    <pq-tarjeta-menu *ngFor=\"let item of consultas; let i = index\" [nombre]=\"item.nombre\" [imagen]=\"pathImg + item.img\" [redirect]=\"item.redirect\"></pq-tarjeta-menu>\r\n  </div>\r\n</div>\r\n\r\n<div>\r\n  <p class=\"title\">\r\n    REPORTES\r\n  </p>\r\n\r\n  <div class=\"divReportes\">\r\n    <pq-tarjeta-menu *ngFor=\"let item of reportes; let i = index\" [nombre]=\"item.nombre\" [imagen]=\"pathImg + item.img\" [redirect]=\"item.redirect\"></pq-tarjeta-menu>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/gestion/gestion.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:calc(100vh - 231px);margin:20px}:host .title{margin:0;margin-bottom:5px;font-size:34px}:host .divTableros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:calc(100%);overflow:scroll;color:#404040}:host .divConsultas{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:calc(100%);overflow:scroll}:host .divReportes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-bottom:150px;width:calc(100%);overflow:scroll}"

/***/ }),

/***/ "./src/app/components/gestion/gestion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionComponent; });
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

var GestionComponent = /** @class */ (function () {
    function GestionComponent() {
        this.pathImg = "assets/Images/gestion/tarjetasMenu/";
        this.tableros = [{ "nombre": "CLIENTES", "img": "Recurso_153.svg" },
            { "nombre": "OPERATIVOS", "img": "Recurso_151.svg" },
            { "nombre": "PRODUCTOS", "img": "Recurso_150.svg" },
            { "nombre": "PROVEEDORES", "img": "Recurso_149.svg" }];
        this.consultas = [{ "nombre": "ASISTENCIA", "img": "Recurso172.svg", "redirect": "protected/gestion/consulta/asistencia" },
            { "nombre": "COBROS", "img": "Recurso175.svg", "redirect": "protected/gestion/consulta/cobros" },
            { "nombre": "COMPRAS", "img": "Recurso174.svg", "redirect": "protected/gestion/consulta/compras" },
            { "nombre": "CONFIRMACIÓN", "img": "Recurso_152.svg", "redirect": "protected/gestion/consulta/confirmacion" },
            { "nombre": "COTIZACIONES", "img": "Recurso173.svg", "redirect": "protected/gestion/consulta/cotizaciones" },
            { "nombre": "DOCUMENTOS ENVIADOS", "img": "Recurso_162.svg", "redirect": "protected/gestion/consulta/documentosEnviados" },
            { "nombre": "DOCUMENTOS RECIBIDOS", "img": "Recurso_165.svg", "redirect": "protected/gestion/consulta/documentosRecibidos" },
            { "nombre": "ENTREGAS", "img": "Recurso171.svg", "redirect": "protected/gestion/consulta/entregas" },
            { "nombre": "FACTURACIÓN", "img": "Recurso170.svg", "redirect": "protected/gestion/consulta/facturacion" },
            { "nombre": "LLAMADAS", "img": "Recurso169.svg", "redirect": "protected/gestion/consulta/llamadas" },
            { "nombre": "NOTA DE CRÉDITO", "img": "Recurso_162.svg", "redirect": "protected/gestion/consulta/nota-credito" },
            { "nombre": "PAGOS", "img": "Recurso_161.svg" },
            { "nombre": "PEDIDOS", "img": "Recurso_168.svg" },
            { "nombre": "PERMISOS DE IMPORTACIÓN", "img": "Recurso_167.svg" }];
        this.reportes = [{ "nombre": "COBROS", "img": "Recurso_159.svg", "redirect": "protected/gestion/reportes/reportecobros" },
            { "nombre": "COMPRAS", "img": "Recurso_158.svg" },
            { "nombre": "CONFIRMACIÓN DE DATOS ", "img": "Recurso_157.svg" },
            { "nombre": "NOTIFICADOS", "img": "Recurso_156.svg" },
            { "nombre": "PERMISOS DE IMPORTACIÓN", "img": "Recurso_155.svg" },
            { "nombre": "PRODUCTO ALMACÉN", "img": "Recurso_160.svg" },
            { "nombre": "SEGUIMIENTO", "img": "Recurso_154.svg", "redirect": "protected/gestion/reportes/seguimiento" }];
    }
    GestionComponent.prototype.ngOnInit = function () {
    };
    GestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-gestion',
            template: __webpack_require__("./src/app/components/gestion/gestion.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/gestion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GestionComponent);
    return GestionComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/gestion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionModule", function() { return GestionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gestion_routing_module__ = __webpack_require__("./src/app/components/gestion/gestion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gestion_component__ = __webpack_require__("./src/app/components/gestion/gestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GestionModule = /** @class */ (function () {
    function GestionModule() {
    }
    GestionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__gestion_routing_module__["a" /* GestionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__gestion_component__["a" /* GestionComponent */]
            ]
        })
    ], GestionModule);
    return GestionModule;
}());



/***/ })

});
//# sourceMappingURL=gestion.module.chunk.js.map