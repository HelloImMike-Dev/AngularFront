webpackJsonp(["catalogo.module"],{

/***/ "./src/app/components/catalogo/catalogo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalogo_component__ = __webpack_require__("./src/app/components/catalogo/catalogo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CatalogoRoutingModule = /** @class */ (function () {
    function CatalogoRoutingModule() {
    }
    CatalogoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__catalogo_component__["a" /* CatalogoComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CatalogoRoutingModule);
    return CatalogoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/catalogo.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"header\">\r\n <!--  <p>Heeeere comes the Menu!!!</p> -->\r\n  <pq-tarjeta-menu *ngFor=\"let item of catalogos; let i = index\" [nombre]=\"item.nombre\" [imagen]=\"pathImg + item.img\" [redirect]=\"item.redirect\"></pq-tarjeta-menu>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/catalogo/catalogo.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:calc(100vh - 231px);margin:20px 0;width:100%}:host .header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:calc(100% - 90%);margin:0 25px 10px 25px}:host .header-menu{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;margin-bottom:15px}:host .header-menu .exportar{width:32px;height:32px;margin-right:25px}:host .container{width:100%;border-top:3px solid #000;border-bottom:3px solid #000}:host .container .buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}:host .container .buscar div{width:200px}:host .container .buscar div .buscar-input{border-radius:25px;min-width:200px;height:16px}:host .container .buscar div .buscar-input::-webkit-input-placeholder{padding-left:20px}:host .container .buscar div .buscar-input::-moz-placeholder{padding-left:20px}:host .container .buscar div .buscar-input::-ms-input-placeholder{padding-left:20px}:host .container .buscar div .buscar-input::placeholder{padding-left:20px}:host .container .tabla-clientes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;height:66vh;width:100%;overflow-y:auto}:host .container .tabla-clientes .cliente{text-align:center;width:14%;-webkit-filter:grayscale(100%);filter:grayscale(100%);border-right:1px solid #ccc;border-bottom:1px solid #ccc}:host .container .tabla-clientes .cliente img{width:60%}:host .container .tabla-clientes .cliente.final{border-right:none}:host .container .tabla-clientes .cliente:hover{-webkit-filter:grayscale(0);filter:grayscale(0)}:host .container .total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0 25px}"

/***/ }),

/***/ "./src/app/components/catalogo/catalogo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CatalogoComponent = /** @class */ (function () {
    function CatalogoComponent() {
        this.pathImg = "assets/Images/gestion/tarjetasMenu/";
        this.catalogos = [{ "nombre": "AGENTE ADUANAL", "img": "Recurso179.svg", "redirect": "" },
            { "nombre": "CLIENTES", "img": "Recurso178.svg", "redirect": "/protected/catalogo/clientes" },
            { "nombre": "NO DEFINIDO", "img": "Recurso174.svg", "redirect": "" },
            { "nombre": "INDICADORES", "img": "Recurso_151.svg", "redirect": "" },
            { "nombre": "PROVEEDORES", "img": "Recurso177.svg", "redirect": "" },
            { 'nombre': 'PATRÓN', 'img': 'Recurso177.svg', 'redirect': '/protected/catalogo/empresas' },
            { 'nombre': 'CUENTAS CONTABLES', 'img': 'icono_cuentas_contables.svg', 'redirect': '/protected/contabilidad/contables' },
            { 'nombre': 'POLIZAS', 'img': 'icono_cuentas_contables.svg', 'redirect': '/protected/contabilidad/polizas' }
        ];
    }
    CatalogoComponent.prototype.ngOnInit = function () {
        console.log('Llamando a servicio de obtener clientes');
    };
    CatalogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-catalogo',
            template: __webpack_require__("./src/app/components/catalogo/catalogo.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/catalogo.component.scss")]
        })
    ], CatalogoComponent);
    return CatalogoComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/catalogo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoModule", function() { return CatalogoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalogo_routing_module__ = __webpack_require__("./src/app/components/catalogo/catalogo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__catalogo_component__ = __webpack_require__("./src/app/components/catalogo/catalogo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CatalogoModule = /** @class */ (function () {
    function CatalogoModule() {
    }
    CatalogoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__catalogo_routing_module__["a" /* CatalogoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__catalogo_component__["a" /* CatalogoComponent */],
            ]
        })
    ], CatalogoModule);
    return CatalogoModule;
}());



/***/ })

});
//# sourceMappingURL=catalogo.module.chunk.js.map