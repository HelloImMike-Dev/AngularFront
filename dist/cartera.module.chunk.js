webpackJsonp(["cartera.module"],{

/***/ "./src/app/components/catalogo/cartera/cartera-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarteraRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartera_component__ = __webpack_require__("./src/app/components/catalogo/cartera/cartera.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarteraRoutingModule = /** @class */ (function () {
    function CarteraRoutingModule() {
    }
    CarteraRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__cartera_component__["a" /* CarteraComponent */],
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CarteraRoutingModule);
    return CarteraRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/cartera/cartera.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"linksCarteras\" [homePath]=\"homePath\"></pn-header-bc>\r\n<div class=\"container\">\r\n  <div class=\"buscar\">\r\n    <div class=\"input-cont\">\r\n      <img class=\"lupa\" src=\"assets/Images/catalogo/lupa.png\" />\r\n      <input class=\"buscar-input\" placeholder=\"Buscar Cliente\" (input)=\"changeText($event.target.value)\" />\r\n    </div>\r\n    <div class=\"radio-cont\">\r\n      <pq-radio-button [lstItems]=\"lstItems\" [width]=\"'15px'\" (emitItem)=\"onRadioChange($event)\"></pq-radio-button>\r\n    </div>\r\n    <pn-green-button btnClasses=\"large\" (emitAction)=\"goToNewWallet()\" ></pn-green-button>\r\n  </div>\r\n  <div class=\"tabla-clientes\">\r\n    <div class=\"filter-cont\">\r\n      <filter-menu [filtros]=\"filtros\" (sendValue)=\"getOptions($event)\" [filterSelected]=\"filterSelected\" [totalObjetos]=\"totalCarteras\" [totalObjetosLabel]=\"'CARTERAS'\"></filter-menu>\r\n    </div>\r\n    <div class=\"clientes-content\">\r\n      <div *ngFor=\"let cartera of carterasDisplay; let i = index\" [ngClass]=\"'cliente' + (i !== 0 && (i+1) % carterasPorFila === 0  ?' final': '')\" >\r\n        <div class=\"cliente-cont\">\r\n          <pn-information-card [cartera]=\"cartera\" [carteraSelected]=\"idCarteraSelected\" (flipEvent)=\"onSelectedCartera($event)\" (showMoreEvent)=\"selectWallet($event)\"></pn-information-card>\r\n        </div>\r\n        <!-- <img [src]=\"cliente.imagen !== null ? 'assets/Images/clientes/' + cliente.idCliente+'.png' : 'assets/Images/clientes/default_select.png'\" /> CLIENTES TIENEN IMAGEN PERO CAMPO EN BD SIGUE SIENDO NULO -->\r\n        <div [ngClass]=\"'vertical-line' + (i !== 0 && (i+1) % carterasPorFila === 0  ?' final': '')\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/catalogo/cartera/cartera.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%}:host .header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:calc(100% - 50px);margin:0 25px 10px 25px}:host .header div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .container{width:calc(100% - 40px);height:calc(100% - 41px);margin:0 20px 0 20px}:host .container .buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px 0 20px 0}:host .container .buscar .big{padding:5px 10px}:host .container .buscar .input-cont{width:200px;position:relative}:host .container .buscar .input-cont .lupa{position:absolute;width:20px;height:20px;top:5px;left:5px}:host .container .buscar .input-cont .buscar-input{border-radius:25px;width:428px;height:25px;border:1px solid #bfc0c7;padding-left:25px;outline:none}:host .container .buscar .input-cont .buscar-input:focus{border:1px solid #333}:host .container .tabla-clientes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;height:calc(100% - 61px);width:100%;overflow-y:auto}:host .container .tabla-clientes .filter-cont{width:100%;border-top:2px solid #424242;border-bottom:1px solid #c2c3c9}:host .container .tabla-clientes .clientes-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}:host .container .tabla-clientes .clientes-content .cliente{text-align:center;width:25%;height:40%;display:-webkit-box;display:-ms-flexbox;display:flex;max-height:425px;min-height:425px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;border-bottom:1px solid #eceef0;margin-top:20px}:host .container .tabla-clientes .clientes-content .cliente:last-child .vertical-line{opacity:0}:host .container .tabla-clientes .clientes-content .cliente img{width:60%}:host .container .tabla-clientes .clientes-content .cliente .cliente-cont{height:100%;width:calc(100% - 2px)}:host .container .tabla-clientes .clientes-content .cliente .vertical-line{top:5px;right:1px;width:2px;height:92%;margin:0 12px;margin-left:4px;background-color:#eceef0}:host .container .tabla-clientes .clientes-content .cliente .vertical-line.final{opacity:0}:host .container .tabla-clientes .clientes-content .cliente .horizontal-line{position:absolute;bottom:1px;left:0;width:100%;height:2px;background-color:#eceef0}:host .container .total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0 25px}:host .footer .engrane-menu{position:relative;overflow:hidden}:host .footer .engrane-menu .opciones{background-color:#333;position:absolute;bottom:-2px;z-index:-1;width:29px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 500ms;transition:all 500ms}:host .footer .engrane-menu .opciones .opcion{position:relative;width:20px;height:20px;padding:6px 0}:host .footer .engrane-menu .opciones .opcion:hover{cursor:pointer}:host .footer .engrane-menu .opciones .opcion:hover>.opcion-label{display:block}:host .footer .engrane-menu .opciones .opcion .opcion-label{display:none;min-width:40px;background-color:#333;position:absolute;left:28px;top:5px;color:#fff;font-size:12px;text-align:center;padding:3px;white-space:nowrap}:host .footer .engrane-menu:hover{background-color:#333;overflow:visible}:host .footer .engrane-menu:hover .opciones{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;bottom:30px;z-index:1}:host .footer .engrane-menu:hover .engrane{background-color:#333}:host .footer .engrane-menu .engrane{width:100%;height:100%;position:relative;z-index:2;background-color:#fff}@media(min-width: 2175px){:host .container .buscar .input-cont{width:428px}:host .container .buscar .input-cont .buscar-input{width:calc(100% - 26px)}:host .container .buscar .radio-cont{margin-right:128px}:host .container .tabla-clientes .clientes-content .cliente{width:20%;height:40%}:host .container .tabla-clientes .clientes-content .cliente.second{padding-left:0}}@media(max-width: 1500px){:host .container .buscar .input-cont{width:200px !important}:host .container .buscar .input-cont .buscar-input{width:calc(100% - 26px)}:host .container .tabla-clientes .clientes-content .cliente{width:33%;height:75%}:host .container .tabla-clientes .clientes-content .cliente.second{padding-left:0}}"

/***/ }),

/***/ "./src/app/components/catalogo/cartera/cartera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarteraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__ = __webpack_require__("./src/app/components/shared/filter-menu/filterMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_catalogo_cartera_class__ = __webpack_require__("./src/app/class/catalogo/cartera.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_catalogo_cliente_class__ = __webpack_require__("./src/app/class/catalogo/cliente.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
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








var CarteraComponent = /** @class */ (function () {
    function CarteraComponent(catalogoService, http, router, coreContainer) {
        this.catalogoService = catalogoService;
        this.http = http;
        this.router = router;
        this.coreContainer = coreContainer;
        this.POSICION_PUBLICADAS = 0;
        this.POSICION_BORRADORES = 1;
        this.PUBLICADAS = true;
        this.BORRADORES = false;
        this.clientes = [];
        this.niveles = [];
        this.rutas = [];
        this.industrias = [];
        this.esacs = [];
        this.evs = [];
        this.evts = [];
        this.cobradores = [];
        this.carteras = [];
        this.mensajeros = [];
        this.carterasDisplay = [];
        this.linksCarteras = [
            { label: 'Clientes', path: '/protected/catalogo/clientes' },
            { label: 'Carteras', path: '/protected/catalogo/clientes/carteras' },
        ];
        this.homePath = '/protected/catalogo';
        this.lstItems = ['Aplicadas', 'Borradores'];
        this.searchValue = '';
        this.esPublicada = true;
        this.filterSelected = { index: 0, value: 'TODOS', name: 'TODOS' };
        this.idCarteraSelected = 0;
        this.residuoParaDefinirFila = 0;
        this.onResizeReference = this.onResize.bind(this);
    }
    CarteraComponent.prototype.selectWallet = function (idCartera) {
        this.router.navigate(['/protected/catalogo/clientes/carteras', idCartera]);
    };
    CarteraComponent.prototype.goToNewWallet = function () {
        this.router.navigate(['/protected/catalogo/clientes/carteras/edit/', 0]);
    };
    CarteraComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResizeReference);
    };
    CarteraComponent.prototype.onResize = function () {
        this.cambiarNumeroCarteras();
    };
    CarteraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coreContainer.openModal(0);
        this.cambiarNumeroCarteras();
        window.addEventListener('resize', this.onResizeReference);
        this.catalogoService.obtenerCarterasPorUsuario()
            .subscribe(function (data) {
            _this.clientes = data.current;
            _this.clientes.map(function (clienteData) {
                _this.getFilters(clienteData);
                //Está pendiente el filtro de ejecutivoVentaTelefonica (EVT)
                _this.defineCartera(clienteData);
            });
            var newArr = _this.filterCarteras(_this.searchValue, _this.esPublicada, _this.filterSelected);
            _this.carterasDisplay = newArr;
            _this.totalCarteras = _this.carterasDisplay.length;
            _this.coreContainer.closeModal(0);
        });
    };
    CarteraComponent.prototype.onClicked = function () {
        console.log('botón nueva Cartera clicked!!!');
    };
    CarteraComponent.prototype.onRadioChange = function (value) {
        this.esPublicada = value === this.POSICION_PUBLICADAS ? this.PUBLICADAS : this.BORRADORES;
        var newArr = this.filterCarteras(this.searchValue, this.esPublicada, this.filterSelected);
        this.carterasDisplay = newArr;
        this.totalCarteras = this.carterasDisplay.length;
    };
    CarteraComponent.prototype.changeText = function (value) {
        var _this = this;
        this.searchValue = value.toLowerCase();
        if (this.idBusquedaTimeout) {
            clearTimeout(this.idBusquedaTimeout);
        }
        this.idBusquedaTimeout = setTimeout(function () {
            var newArr = _this.filterCarteras(_this.searchValue, _this.esPublicada, _this.filterSelected);
            _this.carterasDisplay = newArr;
            _this.totalCarteras = _this.carterasDisplay.length;
        }, 700);
    };
    CarteraComponent.prototype.filterCarteras = function (searchValue, aplicadas, filterMenu) {
        var _this = this;
        if (filterMenu === void 0) { filterMenu = { name: 'TODOS' }; }
        return this.carteras.filter(function (cartera) {
            var clientesFilter = cartera.clientes.filter(function (cliente) {
                if (filterMenu.name === 'nivelIngreso') {
                    return ((cliente.nombre.toLowerCase().startsWith(_this.searchValue) || cliente.nombre.toLowerCase().endsWith(_this.searchValue) || cliente.nombre.toLowerCase() === _this.searchValue) && cliente[filterMenu.name] === filterMenu.value);
                }
                return (cliente.nombre.toLowerCase().startsWith(_this.searchValue) || cliente.nombre.toLowerCase().endsWith(_this.searchValue) || cliente.nombre.toLowerCase() === _this.searchValue);
            });
            if (filterMenu.name !== 'nivelIngreso' && filterMenu.name !== __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].TODOS.label) {
                return clientesFilter.length !== 0 && cartera.esPublicada() === aplicadas && cartera[filterMenu.name] === filterMenu.value;
            }
            return clientesFilter.length !== 0 && cartera.esPublicada() === aplicadas;
        });
    };
    CarteraComponent.prototype.cambiarNumeroCarteras = function () {
        if (document.body.clientWidth < 1500) {
            this.carterasPorFila = 3;
            this.residuoParaDefinirFila = 1;
        }
        else if (document.body.clientWidth > 2175) {
            this.carterasPorFila = 5;
            this.residuoParaDefinirFila = 2;
        }
        else {
            this.carterasPorFila = 4;
            this.residuoParaDefinirFila = 2;
        }
    };
    CarteraComponent.prototype.getOptions = function (event) {
        this.filterSelected = this.selectFilterMenu(event);
        var newArr = this.filterCarteras(this.searchValue, this.esPublicada, this.filterSelected);
        this.carterasDisplay = newArr;
        this.totalCarteras = this.carterasDisplay.length;
    };
    CarteraComponent.prototype.selectFilterMenu = function (event) {
        var attributeForFilter = {
            name: 'TODOS',
            value: event.valor,
            index: event.index
        };
        switch (event.opcion) {
            case __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].TODOS.label:
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].ESAC.label:
                attributeForFilter.name = 'esac';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].EVT.label:
                attributeForFilter.name = 'evt';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].EV.label:
                attributeForFilter.name = 'ev';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].COBRADOR.label:
                attributeForFilter.name = 'cobrador';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].COBRADOR.label:
                attributeForFilter.name = 'mensajero';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].INGRESO.label:
                attributeForFilter.name = 'nivelIngreso';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].RUTA.label:
                attributeForFilter.name = 'ruta';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].INDUSTRIA.label:
                attributeForFilter.name = 'industria';
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].MENSAJERO.label:
                attributeForFilter.name = "mensajero";
                break;
        }
        return attributeForFilter;
    };
    CarteraComponent.prototype.onSelectedCartera = function ($event) {
        this.idCarteraSelected = $event;
        if ($event.idCartera !== 0 && $event.idCartera !== this.idCarteraSelected) {
            if (this.linksCarteras.length === 2) {
                this.linksCarteras.push({ label: ($event.nombre ? $event.nombre : 'ND') + ' · ' + ($event.folio ? $event.folio : ''), path: '/protected/catalogo/clientes/carteras' });
            }
            else {
                this.linksCarteras = this.linksCarteras.slice(0, 2).concat([{ label: ($event.nombre ? $event.nombre : 'ND') + ' · ' + ($event.folio ? $event.folio : ''), path: '/protected/catalogo/clientes/carteras' }]);
            }
            this.idCarteraSelected = $event.idCartera;
        }
        else {
            this.idCarteraSelected = 0;
            this.linksCarteras = this.linksCarteras.slice(0, 2).slice();
        }
    };
    CarteraComponent.prototype.getFilters = function (clienteData) {
        if (!this.niveles.find(function (ingreso) { return ingreso.name === clienteData.nivelIngreso; })) {
            this.niveles.push({ name: clienteData.nivelIngreso, action: "none" });
        }
        if (clienteData.ruta && !this.rutas.find(function (ruta) { return ruta.name === clienteData.ruta; }) && clienteData.ruta !== '--NINGUNA--') {
            this.rutas.push({ name: clienteData.ruta, action: "none" });
        }
        if (clienteData.industria && !this.industrias.find(function (industria) { return industria.name === clienteData.industria; }) && clienteData.industria !== '--NINGUNO--') {
            this.industrias.push({ name: clienteData.industria, action: "none" });
        }
        if (clienteData.cart_nombreEsac && !this.esacs.find(function (esac) { return esac.name === clienteData.cart_nombreEsac; }) && clienteData.cart_nombreEsac !== '--NINGUNO--') {
            this.esacs.push({ name: clienteData.cart_nombreEsac, action: "none" });
        }
        if (clienteData.cart_nombreCobrador && !this.cobradores.find(function (cobrador) { return cobrador.name === clienteData.cart_nombreCobrador; }) && clienteData.cart_nombreCobrador !== '--NINGUNO--') {
            this.cobradores.push({ name: clienteData.cart_nombreCobrador, action: "none" });
        }
        if (clienteData.cart_nombreEv && !this.evs.find(function (ev) { return ev.name === clienteData.cart_nombreEv; }) && clienteData.cart_nombreEv !== '--NINGUNO--') {
            this.evs.push({ name: clienteData.cart_nombreEv, action: "none" });
        }
        if (clienteData.cart_nombreEVT && !this.evts.find(function (evt) { return evt.name === clienteData.cart_nombreEVT; }) && clienteData.cart_nombreEVT !== '--NINGUNO--') {
            this.evts.push({ name: clienteData.cart_nombreEVT, action: "none" });
        }
        if (clienteData.cart_nombreMensajero && !this.mensajeros.find(function (mensajero) { return mensajero.name === clienteData.cart_nombreMensajero; }) && clienteData.cart_nombreMensajero !== '--NINGUNO--') {
            this.mensajeros.push({ name: clienteData.cart_nombreMensajero, action: "none" });
        }
        this.filtros = [
            __assign({}, __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].TODOS),
            __assign({}, __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].ESAC, { hasOptions: this.esacs.length > 0, options: this.esacs }),
            __assign({}, __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].EVT, { hasOptions: this.evts.length > 0, options: this.evts }),
            __assign({}, __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].EV, { hasOptions: this.evs.length > 0, options: this.evs }),
            __assign({}, __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].COBRADOR, { hasOptions: this.cobradores.length > 0, options: this.cobradores }),
            __assign({}, __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].MENSAJERO, { hasOptions: this.mensajeros.length > 0, options: this.mensajeros }),
            __assign({}, __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].INGRESO, { hasOptions: this.niveles.length > 0, options: this.niveles }),
            __assign({}, __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].RUTA, { hasOptions: this.rutas.length > 0, options: this.rutas }),
            __assign({}, __WEBPACK_IMPORTED_MODULE_4__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].INDUSTRIA, { hasOptions: this.industrias.length > 0, options: this.industrias })
        ];
    };
    CarteraComponent.prototype.defineCartera = function (clienteData) {
        var cartera;
        var index = this.carteras.findIndex(function (cartera) { return (cartera.getIdCartera() === clienteData.idCartera); });
        if (index === -1) {
            cartera = new __WEBPACK_IMPORTED_MODULE_5__class_catalogo_cartera_class__["a" /* Cartera */]();
            cartera.setIdCartera(clienteData.idCartera);
            cartera.setNombreCartera(clienteData.cart_nombre);
            cartera.setArea(clienteData.area);
            cartera.setRuta(clienteData.ruta);
            cartera.setIndustria(clienteData.industria);
            cartera.setEstrella(cartera.getEstrella() || clienteData.importancia);
            cartera.setTriangulo(cartera.getTriangulo() || clienteData.dificultad);
            cartera.setFolio(clienteData.folio);
            cartera.setEsac(clienteData.cart_nombreEsac);
            cartera.setEv(clienteData.cart_nombreEv);
            cartera.setEvt(clienteData.cart_nombreEVT);
            cartera.setCobrador(clienteData.cart_nombreCobrador);
            cartera.setMensajero(clienteData.cart_nombreMensajero);
            cartera.setElaboro(clienteData.cart_nombreElaboro);
            cartera.setNumeroClientes(1);
            cartera.setFacturacionActual(clienteData.cli_facturacionAct);
            cartera.setFacturacionAnterior(clienteData.cli_facturacionAnt);
            cartera.setObjetivoFundamental(clienteData.cli_monto_ObjetivoFundamental);
            cartera.setObjetivoDeseado(clienteData.cli_monto_ObjetivoDeseado);
            cartera.setProyeccionVenta(clienteData.cli_proyeccionVenta);
            cartera.setPromedioFacturacion(clienteData.cli_promedioFacturacion);
            cartera.setDebemos(clienteData.cli_debemos);
            cartera.setDebe(clienteData.cli_deben);
            cartera.setPublicada(clienteData.cart_publicada);
            var cliente = new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_cliente_class__["a" /* Cliente */]();
            cliente.setId(clienteData.idCliente);
            cliente.setNombre(clienteData.nombre);
            cliente.setNivelIngreso(clienteData.nivelIngreso);
            cliente.setFacturaAct(clienteData.cli_facturacionAct);
            cliente.setImagen(clienteData.imagen);
            cartera.setClientes([cliente]);
            this.carteras.push(cartera);
        }
        else {
            cartera = this.carteras[index];
            cartera.setEstrella(cartera.getEstrella() || clienteData.importancia);
            cartera.setTriangulo(cartera.getTriangulo() || clienteData.dificultad);
            cartera.setFacturacionActual(cartera.getFacturacionActual() + clienteData.cli_facturacionAct);
            cartera.setFacturacionAnterior(cartera.getFacturacionAnterior() + clienteData.cli_facturacionAnt);
            cartera.setObjetivoFundamental(cartera.getObjetivoFundamental() + clienteData.cli_monto_ObjetivoFundamental);
            cartera.setObjetivoDeseado(cartera.getObjetivoDeseado() + clienteData.cli_monto_ObjetivoDeseado);
            cartera.setProyeccionVenta(cartera.getProyeccionVenta() + clienteData.cli_proyeccionVenta);
            cartera.setPromedioFacturacion(cartera.getPromedioFacturacion() + clienteData.cli_promedioFacturacion);
            cartera.setDebemos(cartera.getDebemos() + clienteData.cli_debemos);
            cartera.setDebe(cartera.getDebe() + clienteData.cli_deben);
            var cliente = new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_cliente_class__["a" /* Cliente */]();
            cliente.setId(clienteData.idCliente);
            cliente.setNombre(clienteData.nombre);
            cliente.setNivelIngreso(clienteData.nivelIngreso);
            cliente.setFacturaAct(clienteData.cli_facturacionAct);
            cliente.setImagen(clienteData.imagen);
            cartera.setClientes(cartera.getClientes().concat([cliente]));
            cartera.setNumeroClientes(cartera.getNumeroClientes() + 1);
        }
    };
    CarteraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-cartera',
            template: __webpack_require__("./src/app/components/catalogo/cartera/cartera.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/cartera/cartera.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__["a" /* CatalogoService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], CarteraComponent);
    return CarteraComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/cartera/cartera.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarteraModule", function() { return CarteraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cartera_routing_module__ = __webpack_require__("./src/app/components/catalogo/cartera/cartera-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cartera_component__ = __webpack_require__("./src/app/components/catalogo/cartera/cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__information_card_pagination_pagination_component__ = __webpack_require__("./src/app/components/catalogo/cartera/information-card/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__information_card_information_card_component__ = __webpack_require__("./src/app/components/catalogo/cartera/information-card/information-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CarteraModule = /** @class */ (function () {
    function CarteraModule() {
    }
    CarteraModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__cartera_routing_module__["a" /* CarteraRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__cartera_component__["a" /* CarteraComponent */],
                __WEBPACK_IMPORTED_MODULE_7__information_card_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__information_card_information_card_component__["a" /* InformationCardComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_catalogo_catalogo_service__["a" /* CatalogoService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__cartera_component__["a" /* CarteraComponent */]
            ]
        })
    ], CarteraModule);
    return CarteraModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/cartera/information-card/information-card.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card-container\">\r\n\t<div [ngClass]=\"'flip-container' + (carteraSelected === cartera.idCartera || doFlip ? ' hover' : '')\"  >\r\n\t\t<div class=\"flipper\">\r\n\t\t\t<div class=\"front\">\r\n\t      <!-- front content -->\r\n\t      <p class=\"cart_nombre\">{{cartera.nombreCartera && cartera.nombreCartera !== '' ? cartera.nombreCartera : 'ND'}}</p>\r\n\t      <div class=\"headerContentFront\">\r\n\t        <div class=\"folioCartera\">{{cartera.folio}}</div>\r\n\t        <div class=\"userIconCatera\">\r\n            <img src=\"assets/Images/catalogo/todos.svg\" width=\"22%\" alt=\"todos\">\r\n\t\t\t\t\t\t<p>{{cartera.numeroClientes}}</p>\r\n\t        </div>\r\n\t      </div>\r\n\t      <hr>\r\n\t      <div class=\"centerPagination\">\r\n\t   \t\t\t<div class=\"paginationContent\">\r\n\t    \t\t\t<app-pagination [clientes]=\"cartera.clientes\"></app-pagination>\r\n\t   \t\t\t</div>\r\n\t   \t\t</div>\r\n\t  \t\t<a>\r\n    \t\t\t<div class=\"buttonCardContent\">\r\n        \t\t<div class=\"buttonCardBtn\" (click)=\"flip(cartera.nombreCartera,cartera.folio, cartera.idCartera)\">\r\n      \t\t\t\t<h4 >VER MÁS</h4>\r\n        \t\t</div>\r\n      \t\t</div>\r\n    \t\t</a>\r\n\t\t\t\t<div class=\"footContent\">\r\n      \t\t<div class=\"iconsContent\">\r\n        \t<div class=\"iconoCarteraFront ev\">\r\n\t\t\t\t\t\t<img src=\"assets/Images/catalogo/EV.svg\" />\r\n\t\t\t\t\t\t<p>{{cartera.ev || 'ND'}}</p>\r\n\t\t\t\t\t</div>\r\n        \t<div class=\"iconoCarteraFront cobrador\">\r\n\t\t\t\t\t\t<img src=\"assets/Images/catalogo/Recurso_203.svg\" />\r\n\t\t\t\t\t\t<p>{{cartera.cobrador || 'ND'}}</p>\r\n\t\t\t\t\t</div>\r\n        \t<div class=\"iconoCarteraFront esac\">\r\n\t\t\t\t\t\t<img src=\"assets/Images/catalogo/esac.svg\" />\r\n\t\t\t\t\t\t<p>{{cartera.esac || 'ND'}}</p>\r\n\t\t\t\t\t</div>\r\n        \t<div class=\"iconoCarteraFront evt\">\r\n\t\t\t\t\t\t<img src=\"assets/Images/catalogo/esac.svg\" />\r\n\t\t\t\t\t\t<p>{{cartera.evt || 'ND'}}</p>\r\n\t\t\t\t\t</div>\r\n        \t<div class=\"iconoCarteraFront elaboro\">\r\n\t\t\t\t\t\t<img src=\"assets/Images/catalogo/creador.png\" />\r\n\t\t\t\t\t\t<p>{{cartera.elaboro || 'ND'}}</p>\r\n\t\t\t\t\t</div>\r\n        \t<div class=\"iconoCarteraFront todos\">\r\n\t\t\t\t\t\t<img src=\"assets/Images/catalogo/msjero.svg\" />\r\n\t\t\t\t\t\t<p>{{cartera.mensajero || 'ND'}}</p>\r\n\t\t\t\t\t</div>\r\n      \t</div>\r\n  \t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"back\" >\r\n      <!-- back content -->\r\n      <div class=\"backContent\" onclick=\"this.classList.toggle('hover');\">\r\n\t\t\t\t<img class=\"tache\" src=\"assets/Images/catalogo/tache_Carteras.png\" (click)=\"flip(cartera.nombreCartera,cartera.folio, 0)\" />\r\n      \t<div class=\"headerBackCartera\">{{cartera.nombreCartera}}</div>\r\n          <div class=\"subheaderBackCartera\">{{cartera.folio}}</div>\r\n\t        <hr>\r\n\t        <div class=\"backCenterContent\">\r\n\t          <div class=\"FactCarteraContent\">\r\n\t          \t<div class=\"headerFactcarteraContent\"> &nbsp; FACT.  <span class=\"CVerde\">&nbsp;${{cartera.facturacionActual | acFormatNumber2decimal }}</span></div>\r\n\t            \t<div class=\"infoFactcarteraContent\">\r\n\t              \t<div class=\"rowCarteraContent\">&nbsp;  OF. <span class=\"CVerde\">${{cartera.objetivoFundamental | acFormatNumber2decimal }}</span></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"rowCarteraContent\">&nbsp;    PF. <span class=\"CVerde\">${{cartera.promedioFacturacion | acFormatNumber2decimal }}</span></div>\r\n                    \t<div class=\"rowCarteraContent\">&nbsp; DEBE. <span class=\"CVerde\">${{cartera.debe | acFormatNumber2decimal }}</span></div>\r\n                </div>\r\n        \t\t</div>\r\n\t          <div class=\"FantCarteraContent\">\r\n\t\t\t\t\t\t\t<div class=\"headerFantcarteraContent\">FANT.&nbsp;${{cartera.facturacionAnterior | acFormatNumber2decimal }}</div>\r\n\t\t\t\t\t\t\t<div class=\"infoFantcarteraContent\">\r\n\t\t\t\t\t\t\t\t<div class=\"rowCarteraContent\">OF. ${{cartera.objetivoDeseado | acFormatNumber2decimal }}   &nbsp;</div>\r\n\t\t\t\t\t\t\t\t<div class=\"rowCarteraContent\">PV. ${{cartera.proyeccionVenta | acFormatNumber2decimal }}  &nbsp;</div>\r\n\t\t\t\t\t\t\t\t<div class=\"rowCarteraContent\">DEBEMOS. ${{cartera.debemos | acFormatNumber2decimal }}   &nbsp;</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t      <div class=\"footContentBack\">\r\n\t\t\t\t\t<div class=\"iconsContent\">\r\n\t\t\t\t\t\t<div class=\"iconoCartera\">{{cartera.ruta}}</div>\r\n\t\t\t\t\t\t<div class=\"iconoCartera2\">{{cartera.industria}}</div>\r\n\t\t\t\t\t\t<div class=\"iconoCartera3\">{{cartera.estrella ? cartera.estrella : 'ND'}}</div>\r\n\t\t\t\t\t\t<div class=\"iconoCartera4\">{{cartera.triangulo ? cartera.triangulo : 'ND'}}</div>\r\n\t\t\t\t\t\t<div class=\"iconoCartera5\">{{cartera.numeroClientes}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<a>\r\n\t\t\t\t\t<div class=\"buttonCardContent\">\r\n\t\t\t\t\t\t<div class=\"buttonCardBtn\" (click)=\"redirect(cartera.idCartera)\">\r\n\t\t\t\t\t\t\t<h4>Entrar</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</a>\r\n\t    </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/catalogo/cartera/information-card/information-card.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-container{width:98%;font-family:\"Roboto\",sans-serif;height:99%}.card-container .flip-container{-webkit-perspective:1000px;perspective:1000px;background:#fff}.card-container .front:hover{background:#f3f9fa}.card-container .centerPagination{width:100%;height:58%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.card-container .paginationContent{width:100%;height:100%}.card-container .footContent{margin-top:5px;width:100%;height:11%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.card-container .footContentBack{width:100%;height:12%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;border:0 none #ccc;border-bottom:1px solid #424242;border-radius:0}.card-container .iconsContent{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;height:100%;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;font-size:10px;border-top:1px solid #eceef0}.card-container .iconoCarteraFront{margin-top:10px;height:100%;width:16%;opacity:.4;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.card-container .iconoCarteraFront img{width:20px;height:20px}.card-container .iconoCarteraFront p{width:58px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center !important;font-family:Helvetica}.card-container .iconoCartera{height:70%;width:20%;background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2233px%22 height%3D%2235px%22 viewBox%3D%220 0 33 35%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 50.2 (55047) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Eruta%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Symbols%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22ruta%22%3E%0D            %3Cimage x%3D%220%22 y%3D%220%22 width%3D%2233%22 height%3D%2235%22 xlink%3Ahref%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAACkAAAAsCAYAAAD4rZFFAAABJ2lDQ1BrQ0dDb2xvclNwYWNlQWRvYmVSR0IxOTk4AAAokWNgYFJILCjIYRJgYMjNKykKcndSiIiMUmB%2FxMDKIMrAxSDOIJ6YXFzgGBDgwwAEMBoVfLvGwAiiL%2BuCzMKUxwu4UlKLk4H0HyDOTi4oKmFgYMwAspXLSwpA7B4gWyQpG8xeAGIXAR0IZG8BsdMh7BNgNRD2HbCakCBnIPsDkM2XBGYzgeziS4ewBUBsqL0gIOiYkp%2BUqgDyvYahpaWFJol%2BIAhKUitKQLRzfkFlUWZ6RomCIzCkUhU885L1dBSMDAwtGBhA4Q5R%2FTkQHJ6MYmcQYgiAEJsjwcDgv5SBgeUPQsykl4FhgQ4DA%2F9UhJiaIQODgD4Dw745yaVFZVBjGJmMGRgI8QEHsUpNXfB9hgAABulJREFUWAnNmGlsVUUYhlstoCiiRgREEdkUhKCgoIkbbXEh%2FlADuFWD2oJoXIIhKGKUuASLMRgREBCJSwJExQQQjIUWo1gDBlHWWFwqm8jqBqJYn%2FfcmcvMnHMXCQa%2B5Lkz8803M%2B%2BZ7Zy2sKGhoeBotyJXYGFhoVvMmi%2FpW9yEgBIohYuhI7QCa1vJ1MEyqIJFi6oX%2F0mal7mTV%2BgV8hCJuLaMMhzuhFPyGjEVtIvkDXgRsfW52nm6vEIWkYg7no5HwwholGuQLPV%2FUTcOnkXsH5niPF1eIYNIBHajs9nQJVOnh%2BBfS5tBCF2V1NbT5RUSRCKwmE7eh2ZJnTm%2BoeS%2FgF9BsdqnkyCbKfYGhC4OgzxdXiEQaQTOowMttWsHKMyA1tAfdkILBvuHNDLaHkNmO2jffgCb4S44FlzbS%2BH6UKirSx0lGoNoaedAKFDL04tOy0lbgqzaFSiHKdcoj7WkXEHaC8LlVf9zGK8raaIliqTBcUTPgpOCVlr23gy4khh1foGprw7ibLHGZHooXu0o9wb145rGmWnGdf1RPlEkNY9C9yBaHQ9gIC2PTE9ul%2B7LyBP%2FWWFcuo%2BjmTLtB1DWKrmm8TRuzGIieRrts5FB5GrKtzOA9qI1Xd7WwiW0%2Fq9thrSDzZt%2ByiirX9dGmvFdX0FMJLUPg5bbmg5DGR2Hd5oVuYO6PTbYTfHvpqxDJeuUSlK%2Fpj8JTR828hpX43vmvXFKi0t0SW%2BCFk7UNDqs4An1zmwLEtcehsBFIPF69WkAoQfXwPsM2oPav8thGtQZ6um3gX6nUi4Haz%2BTaVO1eJEu%2FchCkaV4PzJ1NnmTjERfAidb52FINcu1IFF3BP31Q2SV9RXZjEn7BWUVww7ks0ukWfsWdEB%2Bg%2F2gmW0KjeFE6AnngNuGYvTA1yqTYNKRUaSWJjQdls9hCeiNos0uYcrrdTmXZYvtI%2FyRsZyVZEbAj9AZtFXUTuKvhD5gbwmykXk6wpk810aZVFfCJET8EvgLGLyZ8WnvZbMdpvIM%2BtFMrzO8Iz%2F96I4cBmNVNubp0HK5Zt8g1qdZigk0lfbpc4m0p7sRgk63HdvU9D%2FXlk3q6QhnMhSt%2FZXJ7ExqdrLZUirvBz1Uf4RuJP0UcXtJrYXjeDpCkbaRTXUlZTIN0hx0QGKGGA10D4yCduDaPuqn4xiD2G2kOmgZzVNMlF0a2%2BBsm0lI7Z8CsQdFgAadD1OgHfwONbAAvgfdp%2FeBvgH00RF%2B4Xs6wgG%2Bo8GpYG0hnegu03VQAyt4cvt2sculaya0t3DoetGDPAYTaWcfSoelL74J0BUWwm3QAIUgk460hZf5q9QMSdcmZzbi1ltDV4hO5scwEyRad6EOmj4e9Ma4GnE1pDFDqLZKNVwIitfsaXvIJnKZax9HFi53jfG7iT4S3BN8JuWrQAJlV8BEeB0GwSMgq8wkUJVmRcrIagZvhFlgTSuRtlCk9kx4WjVLEtQbyuF5eA%2B2QWhLcVxmnBKe1RC6hoAqE9SRdAu8i%2F8z44uSIrdA5W6WQQJucfx6W0ylbhmpiIy4Z8g8DvVwPmgvtwPZZuI3p7I5f5cToddgB1D%2BXvAsnElVVnoRqXfsK4FPxQ3GdxbpfkRJrN7fsr9TSV6%2F2scy3aMV9LM9Kjk%2FMZEEraB%2BthOj7EBmTjPqWp0p6ESeZ%2FI%2FmLQN8eG1YqpiSTfblrF%2FitXiiIk0QcNJ9SnlWiUDP%2BQ41jr5HsoziN7TK0GzMhiyGv1pFa4zQeEnYrptokgG20TE3emog5nxdDwZ9EeVlsXO5uUHQwpeNvkxxOkeTDTq9DabAY1Bf22uJk20RJGKpJHurtEJrYbiW8MgN5Pag1TixOkqWgJ6ty8h7ianLsri60DmQygG3a8PQkbzLvOk%2F6rR4VO0fjJDDwfwa2llnXmwb5ShTSuS%2BdBTZUz%2BT0D3bRfQzKudBOpfLfNIPXP%2FOZBTpFoy6GCSydAEstkuKjVwSxgHuqg1SydAaAtwPAF6GdQi1Lsb%2F7NI9Y5Q7a%2Fp0EflPG0Dca%2FBHmgOupe3gLbDNaB7VrO%2BDrojNH11uSIz7kkaeUYHejtcCrfCKq8yc0F77znQxa8%2FfZ%2BGaeR1onXAJFCmK6wsyiX85LXcCe00sxI8EEpBb5ykB%2F4K%2F9swBXHpK422bfHVgU64tXoynYiLXsvuTB6ySNuzUgZtStIeTgPtv52wngGVJhptXqIiPNUP0GaCGhx2kYkqcjgR2ZoQnXr3UG2l3B6he12RSUuUo%2FvDU40QHaBo1pwetUfD2U3cR06b%2Fz07lhF08l0bYbZP2nfEZlIKmE0dphfSalIZXU%2FeN63urSNt4xEwDNbDKITXhoK80x1WHi3lI7rc%2BU7Cv%2F3cRXxdS1rJAAAAAElFTkSuQmCC%22%3E%3C%2Fimage%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\");background-repeat:no-repeat;background-size:30%;background-position:top;opacity:.8;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end;font-family:Helvetica}.card-container .iconoCartera2{height:70%;width:20%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2213.41mm%22 height%3D%2213.41mm%22 viewBox%3D%220 0 38 38%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bisolation%3Aisolate%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3ERecurso 201%3C%2Ftitle%3E%3Cg id%3D%22Capa_2%22 data-name%3D%22Capa 2%22%3E%3Cg id%3D%22Capa_1-2%22 data-name%3D%22Capa 1%22%3E%3Cimage class%3D%22cls-1%22 width%3D%2238%22 height%3D%2238%22 xlink%3Ahref%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsSAAALEgHS3X78AAACjElEQVRYR%2BWYPWsUURSGnwQTs1GiIhFFE6MISoigFglEQRSDIPiFWHkOHrW0ML9AbewVBCtxYFbBQhG%2FUNHExiKNhfZa2Ii9ChqNRWbgOpm5dyeZNQs%2BcIv3vGeYl%2FvF7LbNzMzQqrSHGhaThsKp2EUV2xTqq5pgOBXrB8aBk6HeqvGGU7ENwASwCnjn620GoZm7BvwGjsf16Fmgt3KWBPw%2BYE9cj74E%2BppCaOZuL1YwgLaie07FtgLdiZyO69H73MYm4pu558DbZLxSsU5Pb1MILWtKL3A41FQ1jYYDOBdqqJoy4Q6qWF%2BoqUrKhGsHLM9QsV4VW5HnLQRfuDzvrIrl1dcDL6oO6AvXk1MbAPbl1AGGyQmoYodUbFfBM17KLGvKTc%2FL0oCrndoaYFLFRt1GFRshwHzCbQTeqNjpAn8YeK1ivU6tB3ipYgecWqxiR%2FAwn3AAXUCkYtcLLuchYCITsAY8VbGjie4E7qrY%2FjlPJ8w3XMp5YBJYl%2BMNMfu55QbsAO6r2KlEdwGPVWxv9mEIf5U0wihwr8AbAq5kau1ADPxKdA14CMw56QuduZSax%2BvIqbXx98Tk3QylZm4a%2BOroLmCpo38C3xxdY3ZfpfwAvjt6GYH3lwn3JK5Hx1KhYpeBS45%2FJ65H5vhXgQuOfyOuR%2BOO%2FwBID0cuVS1rU%2FCF8%2B2jf4JvWbP3V7eKDTh6ZcZfnvGzm7wn43cToMyeGwM%2BevwTySjiTDIapky4z8CUo7cBWx39idlP%2BpTtwGZHfwDc3yEjwFo8lAk3FTitE4HT%2Bui%2FOa2LTpll7Vcxc%2FSOjL8l4w9m%2FMGM30%2BAMuF2Arc8%2Fu5kFDGWjIZp6WVt6XCF%2F5W0Ai09cy0d7g8NaY%2BYqnXNcAAAAABJRU5ErkJggg%3D%3D%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-repeat:no-repeat;background-size:30%;background-position:top;opacity:.8;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end;font-family:Helvetica}.card-container .iconoCartera3{height:70%;width:20%;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAACTUlEQVR42syYPWsUURSGn52sQjBoihR2gllU2OxqQFwLJRK/UojVYuEtBmz8CxERAiL4CyyFWxxSWLkIiizBNuncRTCyKdNtIRqJH8G1ucI42flw5+xMDhxmYM499+G9Z869M6BkxvhLxvhLWvnK6NmKu77RSOZpqQU0gIaWap6yWuH74sACav01FdU8ZbXUVPMyqnUzpJaaalkVexDzbLkQMGP8K8BCTMiCi8ldsRWlGD2wFGplVm1iBKjjwDPgRMohs/X6udfd7vud/5mnFDH5DHAaqDg/5bwCTI24OjtAD/jkvOd8U8T294EZ498BqgGACjBNvvY5AN0DPpSB7+61P0RxNg2cd/4LaHoitgU0gZ8Ubz+ApohtlQJ1tQi8AiYLgtoFbonYtX3FXyDcP1BD30pj/AbwFjiaE9QX4IaIXU/TLvKCGwoVCebgzgJtYGZMUH3gqojtpG6wAbgasDYGuD6wKGK7I+2VbuBlYFsRahu4FAeVahMXsR/dkmpZW8Ruap0u6opgtZE38VCdTQBfFXvbLjAlYn9nVeykcsOdBGY1lnJuDK2iqgFWGwNYXQOsmnKygfPcFEuzlC9d3Jy7z5wzqfMfBr7F/BVqAw9F7EZo3AXgCXAtYtwecETERp4Bk35DnYmIWQeWRey7iKa8AVx3X0hPh3ytl13uzqhg4VroAI/cqTfRHPhFY/zbwONQ0VfjwLyUtbAF3AXm00KFAFvAvMuxlabOkhQ7BtwHnovYvSz9wXX6VWP8F8C9pJZRGgwGHETzOKD2ZwDRcq8WW8WrLQAAAABJRU5ErkJggg==\");background-repeat:no-repeat;background-size:30%;background-position:top;opacity:.8;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end;font-family:Helvetica}.card-container .iconoCartera4{height:70%;width:20%;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAB8UlEQVR42uyYv0tWURjHP/d9LUMtMaghIgOFNwJfhYSihigM2lqkiC/4LEIQNDSVW7lIEDoIYVHDHc6/0BTh4tAQaTY4+A80uklQb8tR7O1Nr6/n3nsgn+3ee87lc77POc+PkzQaDWK0CpFatGBJqB9JdgJ4B9xzLv0Vk2IvgHHgQTSKSXYdWPSPG0DNufR7qYpJdgx4u+NVLzAXgyufA4NN7+5LNlaaKyW7BHwCqi0+rwNDzqWbhSomWYc/hdV/DBkEpspw5RNgeI8xTyWrFeZKyS4Ay0BnhuEfgTHn0kauiklW8aewM+OUm4CKcOVD4No+58xK1pcbmGTngJk2FnPKZ4bcFHsN9LR5WCYluxocTLIJ4PYBY+aCDzNhwCQ7HSLNAEPA45CKzQMnA1UhzyTrPzCYZHeAuwHLoy6/0F2tugdUL/AeOB64QK3V6yMrq6sra+0q9hI4k1P1PC9Zz77BJLsBTOZY1p/1JVP2XClZF/AVGMi55/gJjDqXLmdVbLoAqK09vuDz7+5gko1mjTWB7HKrBiZpgjoCfPaBsEj7q4FpVmyqBKiWDUyyQ62LwBfgaIkN+C3n0g/bYH7zLQFXSr4Z2G5gtlz5KAKoPxqYRLLzwDegO5L7lB9AvQK8iQgKv8dfJYcXd4dg/yvY7wEAgg1p0UA353AAAAAASUVORK5CYII=\");background-repeat:no-repeat;background-size:30%;background-position:top;opacity:.8;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end;font-family:Helvetica}.card-container .iconoCartera5{height:70%;width:20%;background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2235px%22 height%3D%2235px%22 viewBox%3D%220 0 35 35%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 50.2 (55047) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Etodos%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Symbols%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22todos%22 fill%3D%22%23444242%22%3E%0D            %3Cpath d%3D%22M24.9351667%2C19.5854 C23.1426176%2C21.1514 20.8429118%2C22.1800667 18.3146765%2C22.4220667 L20.4764412%2C24.5254 L17.2303627%2C34.3234 L13.8456569%2C24.3894 L16.0520294%2C22.4300667 C13.5052647%2C22.1920667 11.1918333%2C21.1567333 9.39104902%2C19.5854 C3.84595098%2C22.4454 0.0433039216%2C28.2687333 6.8627451e-05%2C35.0000667 L34.3227157%2C35.0000667 C34.2815392%2C28.2687333 30.4754608%2C22.4454 24.9351667%2C19.5854%22 id%3D%22Fill-4%22%3E%3C%2Fpath%3E%0D            %3Cpath d%3D%22M17.49937%2C0.0672 C23.12947%2C0.0672 27.68647%2C4.40986667 27.68647%2C9.76586667 C27.68647%2C15.1172 23.12947%2C19.4598667 17.49937%2C19.4598667 C11.88187%2C19.4598667 7.32417%2C15.1172 7.32417%2C9.76586667 C7.32417%2C4.40986667 11.88187%2C0.0672 17.49937%2C0.0672%22 id%3D%22Fill-1%22%3E%3C%2Fpath%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\");background-repeat:no-repeat;background-size:30%;background-position:top;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end;opacity:.8;font-family:Helvetica}.card-container .buttonCardContent{width:100%;height:12%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;border:0 none #ccc;border-bottom:0px solid #ccc;border-radius:0}.card-container .buttonCardBtn{background:#1e8893;font-size:12px;color:#fff;width:35%;height:50%;height:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.card-container .buttonCardBtn h4{font-family:\"Novecento-Demibold\"}.card-container .buttonCardBtn:hover{cursor:pointer;background:#26a1af;color:#fff}.card-container .flip-container:focus .flipper,.card-container .flip-container.hover .flipper{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card-container .flip-container{width:100%;height:100%}.card-container .front,.card-container .back{width:100%;height:100%}.card-container .flipper{-webkit-transition:.6s;transition:.6s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;height:100%}.card-container .front p{line-height:16px;padding-top:4px;text-align:left}.card-container .folioCartera{width:80%;font-family:\"Roboto-regular\";color:#424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.card-container .userIconCatera{width:20%;color:#739ba5}.card-container .userIconCatera p{display:inline-block;padding:0}.card-container .headerContentFront{width:calc(100% - 15px);height:5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 0 0 3%}.card-container .front,.card-container .back{border-style:solid;border-color:rgba(110,110,110,.288);border-width:0px;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0}.card-container .front{z-index:2;-webkit-transform:rotateY(0deg);transform:rotateY(0deg);font-family:\"Roboto\",sans-serif}.card-container .front hr{background-color:#424242;margin-bottom:0;height:1px;border:none}.card-container .front .cart_nombre{padding:10px 0 0 3%;font-family:\"Roboto-bold\";color:#424242}.card-container .back{font-family:\"Roboto\",sans-serif;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);background-color:#e7f4f5}.card-container .backContent{width:100%;height:74%;position:relative}.card-container .backContent .tache{width:20px;height:20px;position:absolute;right:8px;top:8px}.card-container .backContent .tache:hover{cursor:pointer}.card-container .headerBackCartera{width:100%;height:13%;font-weight:900;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;font-size:18px;font-family:\"Roboto-bold\"}.card-container .subheaderBackCartera{width:100%;height:5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;font-size:18px;font-family:\"Roboto-regular\"}.card-container .backCenterContent{width:100%;height:80%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.card-container .FactCarteraContent{width:48%;height:100%}.card-container .headerFactcarteraContent{font-weight:900;height:30%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;font-family:\"Roboto-regular\"}.card-container .headerFactcarteraContent .CVerde{color:#1e8893;font-family:\"Roboto-bold\"}.card-container .headerFantcarteraContent{font-weight:900;height:30%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;font-family:\"Roboto-regular\"}.card-container .headerFantcarteraContent .CVerde{color:#1e8893;font-family:\"Roboto-bold\"}.card-container .FantCarteraContent{width:48%;height:100%}.card-container .infoFactcarteraContent{height:65%;text-align:left}.card-container .infoFantcarteraContent{height:65%;text-align:right}.card-container .rowCarteraContent{width:100%;height:33%;font-family:\"Roboto-light\"}.card-container .rowCarteraContent .CVerde{color:#1e8893;font-family:\"Roboto-light\"}.card-container .CVerde{color:#1e8893;font-family:\"Roboto-bold\"}"

/***/ }),

/***/ "./src/app/components/catalogo/cartera/information-card/information-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_cartera_class__ = __webpack_require__("./src/app/class/catalogo/cartera.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformationCardComponent = /** @class */ (function () {
    function InformationCardComponent() {
        this.flipEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showMoreEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.folio = "JIESACMASTER 2811171";
        this.nombreCartera = "Novertis";
        this.factura = 0;
        this.ofFact = 0;
        this.pf = 0;
        this.debe = 0;
        this.fant = 0;
        this.ofFant = 0;
        this.pv = 0;
        this.debemos = 0;
        this.numClientes = 0;
        this.dificultad = 0;
        this.industria = "farmacéutica";
        this.importancia = 0;
        this.ruta = "local";
        this.ev = "";
        this.cobrador = "";
        this.esac1 = "";
        this.esac2 = "";
        this.creador = "";
        this.todos = "";
        this.doFlip = false;
        this.clientes = [{
                nombre: "1",
                monto: "12500", nivel: "2000"
            }, { nombre: "2",
                monto: "12500", nivel: "2000" },
            { nombre: "3",
                monto: "12500", nivel: "2000" }, { nombre: "4",
                monto: "12500", nivel: "2000" }, { nombre: "5",
                monto: "12500", nivel: "2000" },
            { nombre: "6",
                monto: "12500", nivel: "2000" },
            { nombre: "7",
                monto: "12500", nivel: "2000" }, { nombre: "8",
                monto: "12500", nivel: "2000" }, { nombre: "9",
                monto: "12500", nivel: "2000" },
            { nombre: "10",
                monto: "12500", nivel: "2000" },
            { nombre: "11",
                monto: "12500", nivel: "2000" }, { nombre: "12",
                monto: "12500", nivel: "2000" }, { nombre: "13",
                monto: "12500", nivel: "2000" },
            { nombre: "14",
                monto: "12500", nivel: "2000" },
            { nombre: "15",
                monto: "12500", nivel: "2000" }, { nombre: "16",
                monto: "12500", nivel: "2000" }, { nombre: "17",
                monto: "12500", nivel: "2000" },
            { nombre: "18",
                monto: "12500", nivel: "2000" }, { nombre: "19",
                monto: "12500", nivel: "2000" }, { nombre: "20",
                monto: "12500", nivel: "2000" },
            { nombre: "21",
                monto: "12500", nivel: "2000" }, { nombre: "22",
                monto: "12500", nivel: "2000" }, { nombre: "23",
                monto: "12500", nivel: "2000" },
            { nombre: "24",
                monto: "12500", nivel: "2000" }, { nombre: "25",
                monto: "12500", nivel: "2000" }, { nombre: "26",
                monto: "12500", nivel: "2000" },
            { nombre: "27",
                monto: "12500", nivel: "2000" }, { nombre: "28",
                monto: "12500", nivel: "2000" }, { nombre: "29",
                monto: "12500", nivel: "2000" },
            { nombre: "30",
                monto: "12500", nivel: "2000" }, { nombre: "31",
                monto: "12500", nivel: "2000" }, { nombre: "32",
                monto: "12500", nivel: "2000" },
        ];
        this.hover = false;
    }
    InformationCardComponent.prototype.ngOnInit = function () {
        this.numClientes = 27;
    };
    InformationCardComponent.prototype.voltearTarjeta = function () {
        this.hover = !this.hover;
    };
    InformationCardComponent.prototype.flip = function (nombre, folio, idCartera) {
        this.flipEvent.emit({ nombre: nombre, folio: folio, idCartera: idCartera });
    };
    InformationCardComponent.prototype.redirect = function (idCartera) {
        this.showMoreEvent.emit(idCartera);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InformationCardComponent.prototype, "flipEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InformationCardComponent.prototype, "showMoreEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_catalogo_cartera_class__["a" /* Cartera */])
    ], InformationCardComponent.prototype, "cartera", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "heigth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], InformationCardComponent.prototype, "Data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformationCardComponent.prototype, "folio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformationCardComponent.prototype, "nombreCartera", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "factura", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "ofFact", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "pf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "debe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "fant", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "ofFant", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "pv", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "debemos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InformationCardComponent.prototype, "numClientes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "dificultad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformationCardComponent.prototype, "industria", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "importancia", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformationCardComponent.prototype, "ruta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformationCardComponent.prototype, "ev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformationCardComponent.prototype, "cobrador", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformationCardComponent.prototype, "esac1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformationCardComponent.prototype, "esac2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformationCardComponent.prototype, "creador", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformationCardComponent.prototype, "todos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformationCardComponent.prototype, "carteraSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], InformationCardComponent.prototype, "clientes", void 0);
    InformationCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-information-card',
            template: __webpack_require__("./src/app/components/catalogo/cartera/information-card/information-card.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/cartera/information-card/information-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InformationCardComponent);
    return InformationCardComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/cartera/information-card/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clientesContent\"  >\r\n  <div class=\"flexbox\"  >\r\n    <div *ngFor=\"let cliente of dataSplited\" class=\"{{class}}\" >\r\n      <div class=\"iconPaginatorCartera\">\r\n        <img  class=\"animationZoom\" [src]=\"cliente.imagen ? 'assets/Images/clientes/' + cliente.id+'.png' : 'assets/Images/catalogo/icono1.png'\" />\r\n      </div>\r\n      <div class=\"infoPaginatorCartera\">\r\n        <p class=\"clienteCartera CVerdeTitle\">{{cliente.nombre}}</p>\r\n        <p class=\"clienteCartera\">Monto facturado {{cliente.factura}} · Nivel de ingreso {{cliente.nivelIngreso}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"paginators\">\r\n  <div *ngFor=\"let page of pages \">\r\n    <div *ngIf=\"current==page.page;else empty\" class=\"fillPaginator\"></div>\r\n    <ng-template #empty  >\r\n      <a (click)=\"change_page(page.page,$event)\">\r\n        <div class=\"emptyPaginator\"></div>\r\n      </a>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/catalogo/cartera/information-card/pagination/pagination.component.scss":
/***/ (function(module, exports) {

module.exports = ".clientesContent{width:100%;height:93%}.flexbox{width:100%;height:93%;overflow:hidden}.clienteContent{width:100%;height:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:3px 0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #eceef0}.iconPaginatorCartera{width:7%;height:100%;text-align:left;padding:0 1% 0 3%}.iconPaginatorCartera img{width:100%;height:100%;max-width:30px;max-height:30px}.infoPaginatorCartera{font-weight:100;width:88%;height:100%;font-size:12px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-top:3px}.clienteCartera{width:100%;text-align:left;font-family:\"Roboto-regular\";font-size:12px;color:#424242}.CVerde{color:#1e8893}.CVerdeTitle{font-family:\"Roboto-bold\";font-size:12px;color:#1e8893}.paginators{width:100%;height:7%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.fillPaginator{height:7px;width:7px;background-color:#1e8893;border-color:#000;border-style:solid;border-radius:50%;display:inline-block;margin-right:10px}.emptyPaginator{height:7px;width:7px;background-color:#d8d9dd;border-radius:50%;display:inline-block;margin-right:10px}.emptyPaginator:hover{height:7px;width:7px;border:1px;border-color:#1e8893;border-style:solid;border-radius:50%;cursor:pointer}.w3-animate-right{position:relative;-webkit-animation:animateright .4s;animation:animateright .4s}@-webkit-keyframes animateright{from{right:-300px;opacity:0}to{right:0;opacity:1}}@keyframes animateright{from{right:-300px;opacity:0}to{right:0;opacity:1}}.w3-animate-left{position:relative;-webkit-animation:animateleft .4s;animation:animateleft .4s}@-webkit-keyframes animateleft{from{left:-300px;opacity:0}to{left:0;opacity:1}}@keyframes animateleft{from{left:-300px;opacity:0}to{left:0;opacity:1}}"

/***/ }),

/***/ "./src/app/components/catalogo/cartera/information-card/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
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

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.class = "clienteContent  w3-animate-right ";
        this.pages = [];
        this.heigth = "93%";
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.split();
    };
    PaginationComponent.prototype.split = function () {
        if (this.clientes.length > 5) {
            var pages = Math.ceil(this.clientes.length / 5);
            var i = 0;
            while (i < pages) {
                var page = { page: i };
                this.pages.push(page);
                i = i + 1;
            }
            this.current = 0;
            this.dataSplited = this.clientes.slice(0, 5);
        }
        else {
            this.dataSplited = this.clientes.slice();
        }
    };
    PaginationComponent.prototype.newSplit = function (index) {
        index = index * 5;
        if ((index + 5) <= this.clientes.length) {
            this.dataSplited = this.clientes.slice(index, index + 5);
        }
        else {
            this.dataSplited = this.clientes.slice(index);
        }
    };
    PaginationComponent.prototype.change_page = function (page, event) {
        if (page < this.current) {
            this.class = "clienteContent  w3-animate-left ";
        }
        else {
            this.class = "clienteContent  w3-animate-right   ";
        }
        this.current = page;
        this.newSplit(page);
        event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PaginationComponent.prototype, "clientes", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__("./src/app/components/catalogo/cartera/information-card/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/cartera/information-card/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ })

});
//# sourceMappingURL=cartera.module.chunk.js.map