webpackJsonp(["cliente.module"],{

/***/ "./src/app/components/catalogo/active-button/activeButton.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button class=\"button active\" (click)=\"onClick(1)\">Habilitados</button>\r\n  <button class=\"button\" (click)=\"onClick(0)\">Deshabilitados</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/catalogo/active-button/activeButton.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:calc(100% - 32px)}:host div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}:host div .button{width:200px}:host div .button.active{background-color:#437b8f;color:#fff;font-weight:bold;border-color:#437b8f}"

/***/ }),

/***/ "./src/app/components/catalogo/active-button/activeButton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveButtonComponent; });
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

var ActiveButtonComponent = /** @class */ (function () {
    function ActiveButtonComponent() {
        this.emitAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ActiveButtonComponent.prototype.ngOnInit = function () {
    };
    ActiveButtonComponent.prototype.onClick = function (active) {
        console.log("Diste click para " + (active ? 'habilitar' : 'deshabilitar'));
        this.emitAction.emit(active);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ActiveButtonComponent.prototype, "emitAction", void 0);
    ActiveButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'active-button',
            template: __webpack_require__("./src/app/components/catalogo/active-button/activeButton.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/active-button/activeButton.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActiveButtonComponent);
    return ActiveButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/cliente/cliente-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cliente_component__ = __webpack_require__("./src/app/components/catalogo/cliente/cliente.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClienteRoutingModule = /** @class */ (function () {
    function ClienteRoutingModule() {
    }
    ClienteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__cliente_component__["a" /* ClienteComponent */],
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ClienteRoutingModule);
    return ClienteRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/cliente/cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"opcion\"> </pn-header-bc>\r\n\r\n<div class=\"header-menu\">\r\n  <div class=\"white_space\"></div>\r\n  <div class=\"radiop\">\r\n\r\n    <img class=\"animationZoom\" (click)=\"Habilitar(0)\" [src]=\"HabilidatosSelected ? 'assets/Images/radio_selected.svg ' : 'assets/Images/radio_unselected.svg' \"\r\n      (click)=\"Habilitar(1)\" style=\" cursor:pointer\" width=\"14px\" height=\"14px\" alt=\"radioInactive\">\r\n    <p style=\"cursor: pointer; margin-left: 10px\" (click)=\"Habilitar(1)\">Habilitados</p>\r\n\r\n    <img class=\" animationZoom\" (click)=\"Habilitar(0)\" [src]=\"!HabilidatosSelected ?'assets/Images/radio_selected.svg' : 'assets/Images/radio_unselected.svg' \"\r\n      (click)=\"Habilitar(2)\" style=\"margin-left: 40px; cursor:pointer\" width=\"14px\" height=\"14px\" alt=\"radioInactive\">\r\n    <p style=\"cursor: pointer; margin-left: 10px\" (click)=\"Habilitar(0)\">Deshabilitados</p>\r\n  </div>\r\n  <div class=\"espacio_bco\"></div>\r\n  <button (click)=\"clickToExport()\" class=\"exportar\">\r\n    <img src='assets/Images/exportar.png' width=\"16px \">\r\n  </button>\r\n</div>\r\n\r\n<div class=\"container\" style=\"height: calc(80vh);\">\r\n  <div class=\"filter-container\">\r\n    <filter-menu [filtros]=\"filtros\" [filterSelected]=\"filterSelected\" (sendValue)=\"getOptions($event)\"></filter-menu>\r\n  </div>\r\n  <div class=\"buscar\">\r\n    <div>\r\n      <div class=\"lupa\">\r\n        <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n      </div>\r\n      <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"clientes\" />\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div *ngIf=\"clientesDisplay.length>0; else cargando\">\r\n    <div *ngIf=\"isByCorporativo==false; else ByCorp\" class=\"tabla-clientes \">\r\n      <div style=\"margin-top:5px;width: 100%; display: flex; flex-direction: row; flex-wrap: wrap; margin-left: 2.5%;\">\r\n        <div *ngFor=\"let cliente of ClientesSearched; let i = index\" style=\"display: flex; flex-wrap: wrap\">\r\n          <div [ngClass]=\"'cliente' \">\r\n            <div class=\"flip-container\" onclick=\"this.classList.toggle('hover');\">\r\n              <div class=\"flipper\">\r\n                <div class=\"front\">\r\n                  <!-- front content -->\r\n                  <div class=\"headerContentFront\">\r\n                  </div>\r\n                  <div class=\"centerPagination\">\r\n                    <img class=\" ima animationZoom\" [src]=\"cliente.imagen !== null ? 'assets/Images/clientes/' + cliente.idCliente+'.png' : 'assets/Images/clientes/default.png'\"\r\n                    />\r\n                    <!-- CLIENTES TIENEN IMAGEN PERO CAMPO EN BD SIGUE SIENDO NULO -->\r\n                    <!-- <img [src]=\"'assets/Images/clientes/' + cliente.idCliente+'.png'\" onerror=\"this.src = 'assets/Images/clientes/default_select.png'\" /> -->\r\n                  </div>\r\n                  <div class=\"footContent\">\r\n                    <span *ngIf=\"cliente.imagen==null \">{{cliente.nombre}}</span>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"back\">\r\n                  <!-- back content -->\r\n                  <div class=\"backContent\">\r\n                    <div class=\"crossContent\" style=\"width: 100%;display: flex; justify-content: flex-end; align-content: center;align-items: center;\">\r\n                      <img src=\"assets/Images/tachecito.png \" height=\"20px\" width=\"20px\" alt=\"Cerrar\">\r\n                    </div>\r\n                    <div class=\"headerBackCartera CVerde\">\r\n                      {{cliente.nombre}}\r\n\r\n                    </div>\r\n\r\n                    <hr>\r\n                    <div class=\"backCenterContent\">\r\n\r\n                      <p style=\"width:100%;font-weight: 100\">\r\n                        {{cliente.nivelIngreso}}\r\n                      </p>\r\n\r\n                      <p style=\"width:100%;font-weight: 100\">\r\n                        {{cliente.rol}}&nbsp; {{cliente.sector}}\r\n                      </p>\r\n                      <p style=\"width:100%;font-weight: 100\">\r\n                        {{cliente.industria}}\r\n                      </p>\r\n                      <p style=\"width:100%;font-weight: 100\">\r\n                        {{cliente.ruta}}\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"footContentBack\">\r\n                    <div class=\"iconsContent\">\r\n                    </div>\r\n                  </div>\r\n                  <!--(click)=\"Entrar($event)\"-->\r\n                  <a (click)=\"Entrar($event)\">\r\n                    <div class=\"buttonCardContent\">\r\n                      <div class=\"buttonCardBtn\">\r\n                        <h4>Entrar</h4>\r\n                      </div>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: flex; justify-content: center;align-content: center;align-items: center; \">\r\n            <hr [ngClass]=\"'v' + (i !== 0 && (i+1) % carterasPorFila === 0  ?' final': '')\" />\r\n          </div>\r\n          <hr [ngClass]=\"'h'\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #ByCorp>\r\n      <div class=\"tabla-clientes2 \">\r\n        <div *ngFor=\"let Grupo of clientesAgrupados; let i = index\">\r\n          <h3 style=\"margin-bottom: 10px; margin-top: 30px;margin-left: 30px; color:#739ba5; \">\r\n            {{Grupo.nombreGrupo}}\r\n          </h3>\r\n          <div style=\"margin-top:10px;width: 100%; display: flex; flex-direction: row; flex-wrap: wrap;\">\r\n            <div *ngFor=\"let cliente of Grupo.clientes; let i = index\" [ngClass]=\"'cliente' + (i !== 0 && (i+1) % Grupo.clientes.length == 0  ?' final': '')\">\r\n              <div>\r\n                <div class=\"flip-container\" onclick=\"this.classList.toggle('hover');\">\r\n                  <div class=\"flipper\">\r\n                    <div class=\"front\">\r\n                      <!-- front content -->\r\n                      <div class=\"headerContentFront\">\r\n                      </div>\r\n                      <div class=\"centerPagination\">\r\n\r\n                        <img class=\" ima animationZoom\" [src]=\"cliente.imagen !== null ? 'assets/Images/clientes/' + cliente.idCliente+'.png' : 'assets/Images/clientes/default_select.png'\"\r\n                        />\r\n                        <!-- CLIENTES TIENEN IMAGEN PERO CAMPO EN BD SIGUE SIENDO NULO -->\r\n                        <!-- <img [src]=\"'assets/Images/clientes/' + cliente.idCliente+'.png'\" onerror=\"this.src = 'assets/Images/clientes/default_select.png'\" /> -->\r\n                      </div>\r\n                      <div class=\"footContent\" style=\"border-bottom: 0.5px solid #ccc;\">\r\n                        <p *ngIf=\"cliente.imagen==null\">{{cliente.nombre}}</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"back\">\r\n                      <!-- back content -->\r\n                      <div class=\"backContent\">\r\n                        <div class=\"crossContent\" style=\"width: 100%;display: flex; justify-content: flex-end; align-content: center;align-items: center; \">\r\n                          <img src=\"assets/Images/tachecito.png \" height=\"20px\" width=\"20px\" alt=\"Cerrar\">\r\n                        </div>\r\n                        <div class=\"headerBackCartera CVerde\">\r\n                          {{cliente.nombre}}\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"backCenterContent\">\r\n                          <p style=\"width:100%;font-weight: 100\">\r\n                            {{cliente.rol}}&nbsp; {{cliente.sector}}\r\n                          </p>\r\n                          <p style=\"width:100%;font-weight: 100\">\r\n                            {{cliente.industria}}\r\n                          </p>\r\n                          <p style=\"width:100%;font-weight: 100\">\r\n                            {{cliente.ruta}}\r\n                          </p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"footContentBack\">\r\n                        <div class=\"iconsContent\">\r\n                        </div>\r\n                      </div>\r\n                      <a (click)=\"Entrar($event)\">\r\n                        <div class=\"buttonCardContent\">\r\n                          <div class=\"buttonCardBtn\">\r\n                            <h4>Entrar</h4>\r\n                          </div>\r\n                        </div>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <ng-template #cargando>\r\n    <div class=\"tabla-clientes\">\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<div class=\"footer\" style=\"margin-top:10px\">\r\n  <div style=\"width: 100%;height: 90%;display: flex; justify-content: space-between; align-content: center;align-items: center; \">\r\n    <div style=\"width: 10%; text-align: left;\">\r\n      <div class=\"engrane-menu\">\r\n        <div class=\"opciones\">\r\n          <div class=\"opcion\" (click)=\"redirectTo('/protected/catalogo/clientes')\">\r\n            <img src=\"assets/Images/catalogo/objetivoscrecimiento.png\" />\r\n            <p class=\"opcion-label\">Objetivos de crecimiento</p>\r\n          </div>\r\n          <div class=\"opcion\" (click)=\"redirectTo('/protected/catalogo/clientes')\">\r\n            <img src=\"assets/Images/catalogo/nivelingresoblanco20x20px.png\" />\r\n            <p class=\"opcion-label\">Intervalos Nivel Ingreso</p>\r\n          </div>\r\n          <div class=\"opcion\" (click)=\"redirectTo('/protected/catalogo/clientes')\">\r\n            <img src=\"assets/Images/catalogo/corporativoblanco20x20px.png\" />\r\n            <p class=\"opcion-label\">Corporativos</p>\r\n          </div>\r\n          <div class=\"opcion\" (click)=\"redirectTo('/protected/catalogo/clientes/carteras/')\">\r\n            <img src=\"assets/Images/catalogo/carteras.png\" />\r\n            <p class=\"opcion-label\">Carteras</p>\r\n          </div>\r\n        </div>\r\n        <div style=\"width: 100%;height: 90%; display: flex;justify-content: center; align-content: center;align-items: center;\">\r\n          <img class=\"engrane\" src=\"assets/Images/catalogo/engraneGrisGrande.png\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"width: 20%;\">\r\n      <div class=\"total\" *ngIf=\"isByCorporativo==false; else ByCorpTot\">\r\n        <p>Total: {{ClientesSearched.length}} Clientes</p>\r\n      </div>\r\n      <ng-template #ByCorpTot>\r\n        <div class=\"total\">\r\n          <p>Total: {{clientesAgrupados.length}} Clientes</p>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n    <div style=\"width: 20%;height: 90%; display: flex; justify-content: flex-end; align-content: center;align-items: center; \">\r\n      <div class=\"btn-agregar-cliente\">Agregar</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/catalogo/cliente/cliente.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;margin:0px 0;width:100%}:host .header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;margin-top:0px}:host .header-menu{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;background:transparent;height:50px}:host .header-menu .white_space{width:3%}:host .header-menu .radiop{width:40%;display:-webkit-box;display:-ms-flexbox;display:flex;background:transparent;-ms-flex-wrap:wrap;flex-wrap:wrap;font-weight:100}:host .header-menu .espacio_bco{width:65%}:host .header-menu .exportar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:32px;height:34px;background:#1e8893;border:none;margin-right:25px;cursor:pointer}:host .container{width:98%;margin-left:1%;border-top:1px solid #424242}:host .container .filter-container{width:100%;border-bottom:1px solid #c2c3c9}:host .container .buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:50px;margin-top:10px;width:100%;border-style:solid}:host .container .buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:403.1px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:30px}:host .container .buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}:host .container .buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:0px solid #000;width:380px;padding-left:5px}:host .container .tabla-clientes{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-x:hidden;width:98.7%;margin-left:1.3%;overflow-y:auto}:host .container .tabla-clientes .cliente{text-align:center;width:300px;-webkit-filter:grayscale(100%);filter:grayscale(100%);border-right:0px solid #ccc}:host .container .tabla-clientes .cliente .ima{width:127px}:host .container .tabla-clientes .cliente:hover{-webkit-filter:grayscale(0);filter:grayscale(0)}:host .container .total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .tabla-clientes2{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:97%;overflow-y:auto;margin-left:3%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;overflow-y:auto}:host .tabla-clientes2 .cliente{text-align:center;width:300px;-webkit-filter:grayscale(100%);filter:grayscale(100%)}:host .tabla-clientes2 .cliente .ima{width:127px}:host .tabla-clientes2 .cliente.final{border-bottom:0px solid #ccc}:host .tabla-clientes2 .cliente:hover{-webkit-filter:grayscale(0);filter:grayscale(0)}:host .tabla-clientes2 .total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .footer{border-top:2px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:98%;margin-left:1%;margin-top:15px;padding-top:8px;margin-bottom:5px;height:4.3vh}:host .footer .engrane-menu{position:relative;overflow:auto;width:26px;height:26px}:host .footer .engrane-menu .opciones{background-color:#333;position:absolute;z-index:-1;width:26px;bottom:0 !important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:bottom 500ms;transition:bottom 500ms}:host .footer .engrane-menu .opciones .opcion{position:relative;width:20px;height:20px;padding:6px 0}:host .footer .engrane-menu .opciones .opcion:hover{cursor:pointer}:host .footer .engrane-menu .opciones .opcion:hover>.opcion-label{opacity:1}:host .footer .engrane-menu .opciones .opcion .opcion-label{display:block;background-color:#333;position:absolute;left:28px;top:8px;color:#fff;font-size:12px;text-align:center;padding:5px 6px;white-space:nowrap;opacity:0;-webkit-transition:opacity 200ms;transition:opacity 200ms}:host .footer .engrane-menu .opciones .opcion .opcion-label::after{content:\" \";position:absolute;top:65%;right:100%;margin-top:-5px;border-width:3px;border-style:solid;border-color:transparent #000 transparent transparent}:host .footer .engrane-menu:hover{background-color:#333;overflow:visible}:host .footer .engrane-menu:hover .opciones{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;bottom:100% !important;z-index:1}:host .footer .engrane-menu .engrane{width:18px;height:18px;position:relative;z-index:2}.total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.animationZoom{-webkit-animation:animatezoom .2s;animation:animatezoom .2s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}.aniamtionTop{position:absolute;-webkit-animation:animatetop .3s;animation:animatetop .3s}@-webkit-keyframes animatetop{from{margin-top:3vh;opacity:0}to{margin-top:7vh;opacity:1}}@keyframes animatetop{from{margin-top:3vh;opacity:0}to{margin-top:7vh;opacity:1}}.aniamtionTopitems{position:relative;-webkit-animation:animatetop2 .5s;animation:animatetop2 .5s}@-webkit-keyframes animatetop2{from{top:-600px;opacity:0}to{top:0px;opacity:1}}@keyframes animatetop2{from{top:-600px;opacity:0}to{top:0px;opacity:1}}.flip-container{-webkit-perspective:1000px;perspective:1000px;background:#fff}.front:hover{background:#f3f9fa}.centerPagination{width:100%;height:70%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.paginationContent{width:98%;height:100%}.footContent{margin-top:1px;width:101%;height:14.5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;line-height:20px}.footContentBack{width:100%;height:12%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;border:0 none #ccc;border-radius:0}.iconsContent{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:98%;height:100%;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;font-size:10px}.buttonCardContent{width:100%;height:12%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;border:0 none #ccc;border-bottom:0px solid #ccc;border-radius:0}.buttonCardBtn{background:#1e8893;color:#fff;width:50%;height:60%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buttonCardBtn:hover{cursor:pointer;background:#26a1af;color:#fff}.flip-container:hover .flipper,.flip-container.hover .flipper{cursor:pointer}.flip-container:focus .flipper,.flip-container.hover .flipper{cursor:pointer;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.flip-container,.front,.back{width:300px;height:300px}.flipper{-webkit-transition:.6s;transition:.6s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}.front p{line-height:5px}.headerContentFront{width:100%;height:15%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.front,.back{border-style:solid;border-color:rgba(110,110,110,.288);border-width:0px;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0}.front{z-index:2;-webkit-transform:rotateY(0deg);transform:rotateY(0deg);font-family:\"Roboto\",sans-serif}.back{font-family:\"Roboto\",sans-serif;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.backContent{width:100%;height:74%}.headerBackCartera{width:100%;height:17%;font-weight:900;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.subheaderBackCartera{width:100%;height:5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.backCenterContent{width:100%;height:80%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.FactCarteraContent{width:48%;height:100%}.headerFactcarteraContent{font-weight:900;height:30%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.headerFantcarteraContent{font-weight:900;height:30%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.FantCarteraContent{width:48%;height:100%}.infoFactcarteraContent{height:65%;text-align:left}.infoFantcarteraContent{height:65%;text-align:right}.rowCarteraContent{width:100%;height:33%}.CVerde{color:#1e8893}.animationZoom{-webkit-animation:animatezoom .2s;animation:animatezoom .2s}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}.btn-agregar-cliente{width:200px;height:30px;color:#fff;background:#1e8893;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;cursor:pointer}.btn-agregar-cliente:hover{background:#1e8893}@media only screen and (min-width: 600px){.container .tabla-clientes{height:33vh}.container .tabla-clientes2{height:40vh}.engrane-menu .opciones{bottom:28px}}@media only screen and (min-width: 800px)and (min-height: 700px){.container .tabla-clientes{height:35vh}.container .tabla-clientes2{height:35vh}}@media only screen and (min-width: 800px)and (min-height: 800px){.container .tabla-clientes{height:45vh}.container .tabla-clientes2{height:45vh}}@media only screen and (min-width: 1100px)and (min-height: 800px){.container .tabla-clientes{height:50vh}.container .tabla-clientes2{height:50vh}}@media only screen and (min-width: 1200px)and (min-height: 800px){.container .tabla-clientes{height:46vh}.container .tabla-clientes2{height:46vh}}@media only screen and (min-width: 1200px)and (min-height: 899px){.container .tabla-clientes{height:50vh}.container .tabla-clientes2{height:50vh}}@media only screen and (min-width: 1200px)and (min-height: 900px){.container .tabla-clientes{height:49vh}.container .tabla-clientes2{height:49vh}}@media only screen and (min-width: 1200px)and (min-height: 1000px){.container .tabla-clientes{height:57vh}.container .tabla-clientes2{height:57vh}}@media only screen and (min-width: 1200px)and (min-height: 1100px){.container .tabla-clientes{height:58vh}.container .tabla-clientes2{height:58vh}}@media only screen and (min-width: 1200px)and (min-height: 1200px){.container .tabla-clientes{height:55vh}.container .tabla-clientes2{height:55vh}}@media only screen and (min-width: 1680px)and (min-height: 1000px){.container .tabla-clientes{height:calc(58vh)}.container .tabla-clientes2{height:calc(58vh)}}@media only screen and (min-width: 1680px)and (min-height: 1150px){.container .tabla-clientes{height:calc(62vh)}.container .tabla-clientes2{height:calc(62vh)}}@media only screen and (min-width: 2000px)and (min-height: 1150px){.container .tabla-clientes{height:calc(62vh)}.container .tabla-clientes2{height:calc(62vh)}}hr.v{width:1px;height:158px;opacity:.4;background:#eceef0;color:#eceef0}hr.v.final{display:none}hr.h{width:100%;height:1px;opacity:.4;background:#eceef0;color:#eceef0}hr.h.final{display:none}"

/***/ }),

/***/ "./src/app/components/catalogo/cliente/cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__ = __webpack_require__("./src/app/components/catalogo/filter-menu/filterMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_catalogo_clientes_clientes_service__ = __webpack_require__("./src/app/services/catalogo/clientes/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClienteComponent = /** @class */ (function () {
    function ClienteComponent(clienteService, http, router, coreComponent) {
        this.clienteService = clienteService;
        this.http = http;
        this.router = router;
        this.coreComponent = coreComponent;
        this.clientes = [];
        this.clientesDisplay = [];
        this.clientesConsulta = [];
        this.totalClientes = 0;
        this.isByCorporativo = false;
        this.ClientesFiltrados = [];
        this.clientesAgrupados = [];
        this.ClientesSearched = [];
        this.HabilidatosSelected = true;
        this.searchTerm = "";
        this.filterSelected = { index: 3, value: 'TODOS', name: 'TODOS' };
        this.opcion = [
            {
                label: 'Clientes',
                path: '/protected/catalogo/clientes',
            }
        ];
        this.linksCarteras = [
            { label: 'Cliente', path: '/protected/catalogo/clientes', urlImg: 'assets/Images/catalogo/nivelingresoblanco20x20px.png' },
            { label: 'Carteras', path: '/protected/catalogo/clientes/carteras', urlImg: 'assets/Images/catalogo/corporativoblanco20x20px.png' },
        ];
        this.homePath = '/protected/catalogo';
        this.onResizeReference = this.onResize.bind(this);
        this.filtros = __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].filtrosClientes;
    }
    ClienteComponent.prototype.ObtenerClientesPorUsuario = function (isHabilitado) {
        var _this = this;
        this.coreComponent.openModal(0);
        this.clienteService.obtenerClientesPorUsuario(isHabilitado)
            .subscribe(function (data) {
            console.log(data);
            _this.clientes = data.current;
            _this.clientesDisplay = _this.clientes.map(function (cliente) { return cliente; });
            _this.clientesConsulta = _this.clientes.map(function (cliente) { return cliente; });
            _this.ClientesFiltrados = _this.clientes.map(function (cliente) { return cliente; });
            _this.totalClientes = data.current.length;
            _this.coreComponent.closeModal(0);
            _this.getOptions({ opcion: "TODOS" });
            _this.filterSelected = { index: 3, value: 'TODOS', name: 'TODOS' };
        }, function (error) { _this.coreComponent.closeModal(0); });
    };
    ClienteComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResizeReference);
    };
    ClienteComponent.prototype.ngOnInit = function () {
        window.addEventListener('resize', this.onResizeReference);
        console.log('Llamando a servicio de obtener clientes');
        this.ObtenerClientesPorUsuario(1);
    };
    ClienteComponent.prototype.onResize = function () {
        this.cambiarNumeroCarteras();
    };
    ClienteComponent.prototype.cambiarNumeroCarteras = function () {
        if (document.body.clientWidth < 1480) {
            this.carterasPorFila = 3;
        }
        else if (document.body.clientWidth > 2175) {
            this.carterasPorFila = 7;
        }
        else {
            this.carterasPorFila = 4;
        }
    };
    ClienteComponent.prototype.agregarFiltro = function ($event) {
        console.log("Lleg\u00F3 un valor desde active button, el valor es: " + $event);
    };
    ClienteComponent.prototype.redirectTo = function (url) {
        this.router.navigate([url]);
    };
    ClienteComponent.prototype.getOptions = function (event) {
        var _this = this;
        this.filterSelected = this.selectFilterMenu(event);
        switch (event.opcion) {
            case "NIVEL DE INGRESO":
                var stringToSearch_1 = event.valor;
                if (stringToSearch_1 === "DIST") {
                    stringToSearch_1 = "Distribuidor";
                }
                if (stringToSearch_1 === "AA+") {
                    stringToSearch_1 = "aaplus";
                }
                var arreauxiliar_1 = [];
                this.ClientesFiltrados.forEach(function (cliente) {
                    if (cliente.nivelIngreso.toUpperCase() === stringToSearch_1.toUpperCase()) {
                        arreauxiliar_1.push(cliente);
                    }
                });
                this.isByCorporativo = false;
                ;
                this.clientesConsulta = arreauxiliar_1;
                this.ClientesSearched = this.clientesConsulta;
                break;
            case "RUTA":
                var stringToSearch2_1 = event.valor;
                var arreauxiliar2_1 = [];
                if (stringToSearch2_1 == "GUADALAJÁRA") {
                    stringToSearch2_1 = "GUADALAJARA";
                }
                if (stringToSearch2_1 == "FORÁNEO") {
                    stringToSearch2_1 = "FORANEO";
                }
                if (stringToSearch2_1 == "CENTRO AMÉRICA") {
                    stringToSearch2_1 = "CENTROAMERICA";
                }
                if (stringToSearch2_1 == "SUDAMÉRICA") {
                    stringToSearch2_1 = "SUDAMERICA";
                }
                this.ClientesFiltrados.forEach(function (cliente) {
                    if (cliente.ruta != null) {
                        if (cliente.ruta.toUpperCase() === stringToSearch2_1.toUpperCase()) {
                            arreauxiliar2_1.push(cliente);
                        }
                    }
                });
                this.isByCorporativo = false;
                this.clientesConsulta = arreauxiliar2_1;
                this.ClientesSearched = this.clientesConsulta;
                break;
            case "CORPORATIVO":
                var Grupos_1 = [];
                var isFirstTime = true;
                this.clientesAgrupados = [this.ClientesFiltrados.length];
                this.ClientesFiltrados.forEach(function (cliente, index) {
                    var i = 0;
                    var isExist = false;
                    while (i < Grupos_1.length) {
                        if (cliente.nombreCorporativo != null) {
                            if (Grupos_1[i] != null) {
                                if (Grupos_1[i].toUpperCase() == cliente.nombreCorporativo.toUpperCase()) {
                                    isExist = true;
                                }
                            }
                        }
                        else {
                            isExist = true;
                        }
                        i = i + 1;
                    }
                    if (isExist == false) {
                        Grupos_1.push(cliente.nombreCorporativo);
                    }
                });
                var ClientesAgrupados = [];
                Grupos_1.forEach(function (Grupo, index) {
                    var clienteAgrupado = [];
                    var nombreGrupo;
                    _this.ClientesFiltrados.forEach(function (cliente, index) {
                        if ((Grupo == cliente.nombreCorporativo) && Grupo != null) {
                            clienteAgrupado.push(cliente);
                        }
                    });
                    var objAuxiliar = { nombreGrupo: Grupo, clientes: clienteAgrupado };
                    _this.clientesAgrupados.push(objAuxiliar);
                });
                if (this.clientesAgrupados.length > 2) {
                    this.clientesAgrupados.splice(0, 1);
                }
                this.isByCorporativo = true;
                break;
            case "EV":
                this.isByCorporativo = false;
                ;
                break;
            case "ESSAC":
                this.isByCorporativo = false;
                ;
                break;
            case "CUENTA CLAVE":
                var stringToSearch6 = event.valor;
                var arreauxiliar6_1 = [];
                this.ClientesFiltrados.forEach(function (cliente) {
                    if (cliente.tieneCartera != null) {
                        if (cliente.tieneCartera != false) {
                            arreauxiliar6_1.push(cliente);
                        }
                    }
                });
                this.clientesConsulta = arreauxiliar6_1;
                this.ClientesSearched = this.clientesConsulta;
                this.isByCorporativo = false;
                ;
                break;
            case "TODOS":
                this.isByCorporativo = false;
                ;
                this.clientesConsulta = this.ClientesFiltrados;
                this.ClientesSearched = this.clientesConsulta;
                break;
        }
    };
    ClienteComponent.prototype.selectFilterMenu = function (event) {
        var attributeForFilter = {
            name: 'TODOS',
            value: event.valor,
            index: event.index
        };
        switch (event.opcion) {
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].TODOS.label:
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].CORPORATIVO.label:
                attributeForFilter.name = 'CORPORATIVO';
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].RUTA.label:
                attributeForFilter.name = 'RUTA';
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].CUENTA_CLAVE.label:
                attributeForFilter.name = 'CUENTA CLAVE';
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].ESAC.label:
                attributeForFilter.name = 'ESAC';
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].EV.label:
                attributeForFilter.name = 'EV';
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].INGRESO.label:
                attributeForFilter.name = 'NIVEL DE INGRESO';
                break;
        }
        return attributeForFilter;
    };
    ClienteComponent.prototype.Entrar = function (event) {
        event.stopPropagation();
        console.log("Entrar");
    };
    ClienteComponent.prototype.clickToExport = function () {
        console.log("Se exporta el catálogo");
    };
    ClienteComponent.prototype.Habilitar = function (opc) {
        this.ClientesFiltrados = [];
        switch (opc) {
            case 1:
                this.ObtenerClientesPorUsuario(1);
                this.HabilidatosSelected = true;
                break;
            case 0:
                this.ObtenerClientesPorUsuario(0);
                this.HabilidatosSelected = false;
                break;
        }
    };
    ClienteComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            this.ClientesSearched = this.clientesConsulta;
        }
        else {
            this.clientesConsulta.forEach(function (cliente) {
                if (cliente.nombre.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(cliente);
                }
            });
            this.ClientesSearched = searchArrayAux;
        }
    };
    ClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-catalogo',
            template: __webpack_require__("./src/app/components/catalogo/cliente/cliente.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/cliente/cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_catalogo_clientes_clientes_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__components_core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], ClienteComponent);
    return ClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/cliente/cliente.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteModule", function() { return ClienteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cliente_routing_module__ = __webpack_require__("./src/app/components/catalogo/cliente/cliente-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cliente_component__ = __webpack_require__("./src/app/components/catalogo/cliente/cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__active_button_activeButton_component__ = __webpack_require__("./src/app/components/catalogo/active-button/activeButton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_catalogo_clientes_clientes_service__ = __webpack_require__("./src/app/services/catalogo/clientes/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ClienteModule = /** @class */ (function () {
    function ClienteModule() {
    }
    ClienteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__cliente_routing_module__["a" /* ClienteRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__cliente_component__["a" /* ClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_7__active_button_activeButton_component__["a" /* ActiveButtonComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_catalogo_clientes_clientes_service__["a" /* ClienteService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__cliente_component__["a" /* ClienteComponent */]
            ]
        })
    ], ClienteModule);
    return ClienteModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/filter-menu/filterMenu.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"menu\">\r\n  <div class=\"filter-item \" *ngFor=\"let filtro of listaFiltros\" >\r\n     <div *ngIf=\"filtro.hasOptions;else nOptions\" (click)=\"ShowDrop(filtro.label,$event,filtro)\" style=\"width: 100%;height: 100%; cursor: pointer;\" class=\"ctn-menu-filter\">\r\n<div style=\"width: 100%;\">\r\n    <img    id=\"{{'img'+filtro.label}}\"   class=\"dropbtn\" src=\"{{filtro.imgUrl}}\" alt=\"\">\r\n    \r\n</div>\r\n{{filtro.label}}\r\n     </div>\r\n       <ng-template #nOptions>\r\n\r\n          <div  (click)=\"sendEvent(filtro.label,2 ,filtro.label)\" id=\"{{'id'+filtro.label}}\" style=\"width: 100%;height: 100%;cursor: pointer;\" class=\"ctn-menu-filter\">\r\n              <div style=\"width: 100%;\">\r\n                  <img    id=\"{{'img'+filtro.label}}\"   class=\"dropbtn\" src=\"{{filtro.imgUrl}}\" alt=\"\">\r\n              </div>\r\n              {{filtro.label}}\r\n                </div>\r\n               </ng-template>\r\n    <div  *ngIf=\"filtro.hasOptions\"  id=\"{{'myDropdown'+filtro.label}}\" class=\"dropdown-content aniamtionTop\" >\r\n          <a  *ngFor=\"let option of filtro.options\" (click)=\"sendEvent(option.name,1,filtro.label)\" class=\"aniamtionTopitems\">{{option.name}}</a>\r\n\r\n  \r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/catalogo/filter-menu/filterMenu.component.scss":
/***/ (function(module, exports) {

module.exports = ".menu{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.menu .filter-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:14%;text-align:center;font-weight:300}.dropbtn{padding:16px;font-size:16px;width:32px;font-weight:300;border:none;cursor:pointer}.dropbtn:focus{background:#639}.dropdown{position:relative;display:inline-block}.dropdown-content{display:none;position:absolute;margin-top:7vh;left:0px;background-color:#f3f9fa;width:100%;overflow:auto;-webkit-box-shadow:0px 8px 16px 0px rgba(0,0,0,.2);box-shadow:0px 8px 16px 0px rgba(0,0,0,.2);z-index:1;left:0}.dropdown-content a{color:#000;padding:12px 16px;text-decoration:none;display:block;cursor:pointer}.dropdown-content a:hover{color:#1e8893;cursor:pointer}.animationZoom{-webkit-animation:animatezoom .2s;animation:animatezoom .2s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}.aniamtionTop{position:absolute;-webkit-animation:animatetop .3s;animation:animatetop .3s}@-webkit-keyframes animatetop{from{margin-top:3vh;opacity:0}to{margin-top:7vh;opacity:1}}@keyframes animatetop{from{margin-top:3vh;opacity:0}to{margin-top:7vh;opacity:1}}.aniamtionTopitems{position:relative;-webkit-animation:animatetop2 .5s;animation:animatetop2 .5s}@-webkit-keyframes animatetop2{from{top:-600px;opacity:0}to{top:0px;opacity:1}}@keyframes animatetop2{from{top:-600px;opacity:0}to{top:0px;opacity:1}}.dropdown a:hover{background-color:#ddd}.show{display:block}.ctn-menu-filter{background:#fff}.ctn-menu-filter:hover{background:#e7f4f5}.ctn-menu-filter:focus{background:#e7f4f5}"

/***/ }),

/***/ "./src/app/components/catalogo/filter-menu/filterMenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMenuComponent; });
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

var FilterMenuComponent = /** @class */ (function () {
    function FilterMenuComponent() {
        this.openned = "";
        this.sendValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listaFiltros = [];
    }
    FilterMenuComponent_1 = FilterMenuComponent;
    Object.defineProperty(FilterMenuComponent.prototype, "filtros", {
        set: function (filtros) {
            this.listaFiltros = filtros;
        },
        enumerable: true,
        configurable: true
    });
    FilterMenuComponent.prototype.onSelect = function (filtro) {
    };
    FilterMenuComponent.prototype.ngOnInit = function () { };
    FilterMenuComponent.prototype.ShowDrop = function (event, evento, filtro) {
        var fil = filtro;
        console.log(event);
        evento.stopPropagation();
        if (filtro.hasOptions) {
            this.onClick(evento);
            document.getElementById("myDropdown" + event).classList.toggle("show");
            this.openned = "img" + event;
        }
        this.selected = filtro;
    };
    FilterMenuComponent.prototype.sendEvent = function (valor, opc, filtro) {
        var fil = filtro;
        var resp;
        switch (opc) {
            case 1:
                document.getElementById("id" + filtro).style.background = "#E7F4F5";
                resp = { opcion: this.selected.label, valor: valor };
                break;
            case 2:
                document.getElementById("id" + filtro).style.background = "#E7F4F5";
                resp = { opcion: valor, valor: valor };
                break;
            default: break;
        }
        this.sendValue.emit(resp);
    };
    // Close the dropdown if the user clicks outside of it
    FilterMenuComponent.prototype.onClick = function (event) {
        if (!(event.path[0].id == this.openned)) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
    FilterMenuComponent.INGRESO = {
        label: 'NIVEL DE INGRESO', imgUrl: 'assets/Images/catalogo/nivelIngreso.png', isSelected: false, hasOptions: true, options: [
            { name: "AA+", action: "none" }, { name: "AA", action: "none" },
            { name: "AM", action: "none" }, { name: "AB", action: "none" },
            { name: "MA", action: "none" }, { name: "MM", action: "none" },
            { name: "MB", action: "BAJO" }, { name: "BAJO", action: "none" },
            { name: "DIST", action: "none" }
        ]
    };
    FilterMenuComponent.CORPORATIVO = { label: 'CORPORATIVO', imgUrl: 'assets/Images/catalogo/btnCorporativo.png', isSelected: false, hasOptions: false };
    FilterMenuComponent.RUTA = {
        label: 'RUTA', imgUrl: 'assets/Images/catalogo/ruta.png', isSelected: false, hasOptions: true, options: [{ name: "LOCAL", action: "none" }, { name: "FORÁNEO", action: "none" },
            { name: "GUADALAJÁRA", action: "none" }, { name: "CENTRO AMÉRICA", action: "none" },
            { name: "SUDAMÉRICA", action: "none" }, { name: "RESTO DEL MUNDO", action: "none" }]
    };
    FilterMenuComponent.TODOS = { label: 'TODOS', imgUrl: 'assets/Images/catalogo/btnClientes.png', isSelected: true };
    FilterMenuComponent.CUENTA_CLAVE = { label: 'CUENTA CLAVE', imgUrl: 'assets/Images/catalogo/cuentaClave.png', isSelected: false, hasOptions: false, };
    FilterMenuComponent.ESAC = { label: 'ESAC', imgUrl: 'assets/Images/catalogo/esacNegro.png', isSelected: false, hasOptions: false, };
    FilterMenuComponent.EV = { label: 'EV', imgUrl: 'assets/Images/catalogo/evNegro.png', isSelected: false, hasOptions: false, };
    FilterMenuComponent.filtrosClientes = [
        FilterMenuComponent_1.INGRESO,
        FilterMenuComponent_1.CORPORATIVO,
        FilterMenuComponent_1.RUTA,
        FilterMenuComponent_1.TODOS,
        FilterMenuComponent_1.CUENTA_CLAVE,
        FilterMenuComponent_1.ESAC,
        FilterMenuComponent_1.EV
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FilterMenuComponent.prototype, "sendValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], FilterMenuComponent.prototype, "filtros", null);
    FilterMenuComponent = FilterMenuComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            host: {
                '(document:click)': 'onClick($event)',
            },
            selector: 'filter-menu',
            template: __webpack_require__("./src/app/components/catalogo/filter-menu/filterMenu.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/filter-menu/filterMenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterMenuComponent);
    return FilterMenuComponent;
    var FilterMenuComponent_1;
}());



/***/ }),

/***/ "./src/app/services/catalogo/clientes/clientes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
        this.apiURL = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'obtenerClientesXUsuario';
        this.datos = [];
    }
    ClienteService.prototype.obtenerClientesPorUsuario = function (isHabilitado) {
        var bodyData = {
            empleado: {
                idFuncion: 72,
                usuario: 'OCardona'
            },
            habilitado: isHabilitado
        };
        var body = JSON.stringify(bodyData);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURL, body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server Error'); });
    };
    ClienteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ClienteService);
    return ClienteService;
}());



/***/ })

});
//# sourceMappingURL=cliente.module.chunk.js.map