webpackJsonp(["ruta-envio-por-cliente.module"],{

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inspeccionPorPrioridad\">\r\n  <h1>PRIORIDAD DE EMBALAJE</h1>\r\n  <div id=\"myProgress\">\r\n    <div id=\"Prioridad1\" [style.width]=\"porcentajeP1\" *ngIf=\"mostrarP1\">\r\n      <h2>Prioridad 1</h2>\r\n      <p><label>Por trabajar: </label>{{formatoPzaP1 | acFormatNumber}} <label>P· List</label></p>\r\n      <p><label *ngIf=\"!existo\">Tiempo Estimado de Trabajo: </label>{{TEIPrioridad1}}</p>\r\n    </div>\r\n    <div id=\"Prioridad2\" [style.width]=\"porcentajeP2\" *ngIf=\"mostrarP2\">\r\n\r\n      <div class=\"descripcionLargaP2\" *ngIf=\"descripcionLargaP2\">\r\n        <h2>Prioridad 2</h2>\r\n        <p><label>Por Inspeccionar: </label>{{formatoPzaP2 | acFormatNumber }} </p>\r\n        <p><label>Tiempo Estimado de Inspección: </label>{{TEIPrioridad2}}</p>\r\n      </div>\r\n\r\n      <div class=\"descripcionCortaP2\" *ngIf=\"descripcionCortaP2\">\r\n        <h2>P2</h2>\r\n        <p><label>PI: </label>{{formatoPzaP2 | acFormatNumber }} <label>P· List</label> </p>\r\n        <p><label>TEI: </label>{{TEIPrioridad2}}</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"Prioridad3\" [style.width]=\"porcentajeP3\" *ngIf=\"mostrarP3\">\r\n\r\n      <div class=\"descripcionLargaP3\" *ngIf=\"descripcionLargaP3\">\r\n        <h2>Prioridad 3</h2>\r\n        <p><label>Por Inspeccionar: </label>{{formatoPzaP3}} <label>P· List</label></p>\r\n        <p><label>Tiempo Estimado de Inspección: </label>{{TEIPrioridad3}}</p>\r\n      </div>\r\n\r\n      <div class=\"descripcionCortaP3\" *ngIf=\"descripcionCortaP3\">\r\n        <h2>P3</h2>\r\n        <p><label>PI: </label>{{formatoPzaP3}} </p>\r\n        <p><label>TEI: </label>{{TEIPrioridad3}}</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.scss":
/***/ (function(module, exports) {

module.exports = "#myProgress{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:123px;color:#9b9b9b;font-family:\"Novecento\";margin-left:0%;padding-top:10px;-webkit-box-sizing:border-box;box-sizing:border-box}#Prioridad1{height:123px;width:45%;background-color:#af3634;text-align:left;line-height:19px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;font-size:20px;border:1px solid #fff;padding-left:10px;padding-top:6px}#Prioridad2{height:123px;width:30%;background-color:#eeb253;text-align:left;line-height:19px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;font-size:20px;border:1px solid #fff;padding-left:10px;padding-top:6px}#Prioridad3{height:123px;width:30%;background-color:#63b257;text-align:left;line-height:19px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;font-size:20px;border:1px solid #fff;padding-left:10px;padding-top:6px}p{font-size:12px;color:#fff;margin-top:1%}h1{font-size:22px;color:#008895;font-family:\"Novecento\"}h2{font-size:20px;color:#fff}.tipoInspeccion{margin-top:2%;margin-bottom:2%;text-align:left;font-size:24px;font-weight:bold}.pedimento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.imgPedimento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;padding:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.txtPedimento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.tipoTexto{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-weight:500;font-family:\"Novecento\"}.datoTexto{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-family:\"Novecento\"}.ordenDeCompra{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:121px}.txtOC{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box}.tipoTextoOC{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-weight:500;font-family:\"Roboto\",sans-serif;padding-bottom:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.datoTextoOC{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-family:\"Novecento\";padding-left:7%;-webkit-box-sizing:border-box;box-sizing:border-box}@media all and (min-height: 770px)and (max-height: 880px)and (min-width: 1300px)and (max-width: 2571px){h1{font-size:13px}#Prioridad1{height:100px}#Prioridad2{height:100px}#Prioridad3{height:100px}p{font-size:9px}h2{font-size:11px}#myProgress{padding-top:10px}}"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraPrioridadesPorClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_trabajar_ruta_envio_por_cliente_service__ = __webpack_require__("./src/app/services/trabajar-ruta/envio-por-cliente.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarraPrioridadesPorClienteComponent = /** @class */ (function () {
    function BarraPrioridadesPorClienteComponent(router, coreComponent, _datosPrio) {
        this.router = router;
        this.coreComponent = coreComponent;
        this._datosPrio = _datosPrio;
        this.inspector = "aHernandezM";
        this.PackingList = [];
        // Piezas por prioridad
        this.pzasP1 = 0;
        this.pzasP2 = 0;
        this.pzasP3 = 0;
    }
    BarraPrioridadesPorClienteComponent.prototype.ngOnInit = function () {
        this.obtenerTiempoTrabajoEnvio();
    };
    // Método para obtener el promedio por pieza de cada packing list.
    BarraPrioridadesPorClienteComponent.prototype.obtenerTiempoTrabajoEnvio = function () {
        var _this = this;
        this._datosPrio.obtenerTiempo().subscribe(function (data) {
            /*Calcular tiempo POR pieza*/
            var tiempoT;
            tiempoT = data.current.Tiempo[0].tiempo;
            /****************************/
            _this.PackingList = data.current.Piezas;
            _this.PackingList.forEach(function (element) {
                if (element.prioridad === 'P1') {
                    _this.pzasP1 = element.totalPiezas;
                }
                else if (element.prioridad === 'P2') {
                    _this.pzasP2 = element.totalPiezas;
                }
                else if (element.prioridad === 'P3') {
                    _this.pzasP3 = element.totalPiezas;
                }
            });
            _this.tiempo = tiempoT;
            _this.TEIPrioridad1 = _this.obtenerTiempoEstimado(_this.pzasP1, _this.tiempo);
            _this.TEIPrioridad2 = _this.obtenerTiempoEstimado(_this.pzasP2, _this.tiempo);
            _this.TEIPrioridad3 = _this.obtenerTiempoEstimado(_this.pzasP3, _this.tiempo);
            /******/
            _this.mostrarP1 = _this.visualizarP1(_this.pzasP1);
            _this.mostrarP2 = _this.visualizarP2(_this.pzasP2);
            _this.mostrarP3 = _this.visualizarP3(_this.pzasP3);
            /******/
            _this.formatoPzaP1 = (_this.pzasP1 == 1) ? _this.pzasP1 + ' pieza' : _this.pzasP1 + ' piezas';
            _this.formatoPzaP2 = (_this.pzasP2 == 1) ? _this.pzasP2 + ' pieza' : _this.pzasP2 + ' piezas';
            _this.formatoPzaP3 = (_this.pzasP3 == 1) ? _this.pzasP3 + ' pieza' : _this.pzasP3 + ' piezas';
            /******/
            _this.porcentajeP1 = _this.obtenerPorcentajeP1(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP2 = _this.obtenerPorcentajeP2(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP3 = _this.obtenerPorcentajeP3(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
        });
    };
    // Funciones para porcentajes
    BarraPrioridadesPorClienteComponent.prototype.obtenerPorcentajeP1 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == true && value2 == true && value3 == false) {
            porcentaje = 70;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            porcentaje = 50;
        }
        else if (value1 == true && value2 == false && value3 == true) {
            porcentaje = 70;
        }
        return porcentaje;
    };
    BarraPrioridadesPorClienteComponent.prototype.obtenerPorcentajeP2 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == false && value2 == true && value3 == true) {
            this.descripcionLargaP2 = true;
            this.descripcionCortaP2 = false;
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 70;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            this.descripcionLargaP2 = false;
            this.descripcionCortaP2 = true;
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 25;
        }
        else if (value1 == true && value2 == true && value3 == false) {
            this.descripcionCortaP2 = true;
            this.descripcionLargaP2 = false;
            porcentaje = 30;
        }
        return porcentaje;
    };
    BarraPrioridadesPorClienteComponent.prototype.obtenerPorcentajeP3 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == true && value2 == false && value3 == true) {
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 30;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            porcentaje = 25;
        }
        else if (value1 == false && value2 == true && value3 == true) {
            porcentaje = 30;
        }
        return porcentaje;
    };
    //Funciones para visualizar los recuadros por prioridad
    BarraPrioridadesPorClienteComponent.prototype.visualizarP1 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            return true;
    };
    BarraPrioridadesPorClienteComponent.prototype.visualizarP2 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP2 = true;
        return true;
    };
    BarraPrioridadesPorClienteComponent.prototype.visualizarP3 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP3 = true;
        return true;
    };
    BarraPrioridadesPorClienteComponent.prototype.obtenerTiempoEstimado = function (piezas, tPromedio) {
        var tiempo = piezas * tPromedio;
        var hours;
        var minutes;
        var seconds;
        hours = Math.floor(tiempo / 3600);
        minutes = Math.floor((tiempo % 3600) / 60);
        seconds = tiempo % 60;
        // Anteponiendo un 0 a los minutos si son menos de 10
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
        if ((hours == 0 || hours == NaN) && minutes == 0) {
            var result = "1 min";
            return result;
            // console.log("1 minuto restante o menos  ");
        }
        else if (hours <= 0) {
            var result = minutes + " min";
            return result;
        }
        else {
            var result = hours + " hr " + minutes + " min";
            return result;
        }
    };
    BarraPrioridadesPorClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-barra-prioridades-por-cliente',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__services_trabajar_ruta_envio_por_cliente_service__["a" /* EnvioPorClienteService */]])
    ], BarraPrioridadesPorClienteComponent);
    return BarraPrioridadesPorClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"barraProgreso\">\r\n\r\n  <div class=\"barra\">\r\n    <h1>PROGRESO DE {{evento| uppercase}}</h1>\r\n    <div class=\"datos\">\r\n      <div class=\"mensaje\">\r\n        <label class=\"mensajeBarra\">{{mensaje}}</label>\r\n      </div>\r\n      <div class=\"hora\">\r\n        <img src='./assets/Images/reloj.svg' style=\"margin-right: 10px;\" class=\"imagenReloj\"/>\r\n        <label>{{hora}}</label>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"padreBarraProgreso\" style=\"position: relative\">\r\n      <div id=\"myProgress\">\r\n        <div id=\"myBar\" [style.width]=\"promedio\" [style.background]=\"colorBarra\">\r\n          <span class=\"tooltiptextleft\" *ngIf=\"tooltiptextLeft\">{{formatoPzasInspeccionadas}}</span>\r\n          <label class=\"textLeft\" *ngIf=\"textLeft\">{{formatoPzasInspeccionadas}}</label>\r\n        </div>\r\n\r\n        <div id=\"myBar2\" [style.width]=\"restante\">\r\n          <span class=\"tooltiptextRigth\" *ngIf=\"toolTipRigth\">{{formatoPzasRestantes}}</span>\r\n          <label class=\"textRigth\" *ngIf=\"textRigth\">{{formatoPzasRestantes}}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"datosBarra\">\r\n        <div class=\"PzasIniciales\">\r\n          0 Packing List\r\n        </div>\r\n        <div class=\"pzasTotales\">\r\n          {{pzasTotales}} Packing List\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.scss":
/***/ (function(module, exports) {

module.exports = ".barraProgreso{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:20%;padding-left:20px;padding-right:20px;font-family:\"Roboto\",sans-serif}.barra{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:50%;text-align:left;font-family:\"Roboto\",sans-serif}#myProgress{width:100%;background-color:#ddd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:70px;font-weight:bold;margin-top:1%;color:#9b9b9b}#myBar{height:100%;background-color:#9db83c;text-align:center;line-height:30px;color:#424242;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;position:relative;display:inline-block}.datosBarra{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:1%;font-weight:bold;font-size:14px}.PzasIniciales{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.pzasTotales{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.textLeft,.textRigth{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}h1{font-size:20px;color:#008894}.datos{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mensaje{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.hora{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;font-size:30px;font-weight:bold;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.tooltip .tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.tooltip:hover .tooltiptext{visibility:visible;opacity:1}.tooltip{position:relative;display:inline-block;cursor:pointer}.tooltip .tooltiptext{visibility:hidden;width:130px;background-color:#4c4c4c;color:#fff;font-family:\"Roboto\";text-align:left;border-radius:6px;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:2%;margin-left:-60px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}.mensajeBarra{font-style:italic;padding-top:5px}.imagenReloj{width:37px;height:37px}.textLeft,.textRigth{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:\"Roboto\"}#myBar2 .tooltiptextRigth{visibility:visibility;width:119px;height:17%;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;bottom:-10%;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;margin-left:-60px;font-size:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#myBar2 .tooltiptextRigth::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #000 transparent}#myBar{height:100%;text-align:center;line-height:30px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;position:relative;display:inline-block;font-size:25px}#myBar2{height:100%;background-color:#ddd;text-align:center;line-height:30px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#9b9b9b;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;font-weight:bold;font-size:25px}#myBar .tooltiptextleft{visibility:visibility;width:119px;height:17%;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;bottom:-10%;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;margin-left:-60px;font-size:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#myBar .tooltiptextleft::after{content:\" \";position:absolute;color:#424242;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #000 transparent}@media all and (min-height: 770px)and (max-height: 880px)and (min-width: 1300px)and (max-width: 2571px){#myBar2{font-size:16px}#myBar{font-size:16px}h1{font-size:13px}.padreBarraProgreso{width:356px}#myProgress{width:356px;height:47px}.mensajeBarra{font-size:11px}.hora{font-size:12px}.imagenReloj{width:20px}}"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraProgresoPorClienteComponent; });
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

var BarraProgresoPorClienteComponent = /** @class */ (function () {
    function BarraProgresoPorClienteComponent() {
        // inspector:string = "aHernandezM";
        this.evento = "trabajo de ruta";
        this.mensaje = "Con el ritmo de inspección actual, lograrás cumplir el objetivo";
        //Estos son los valores centrales del componente, simplemente al modificar estos datos el comportamiento del componente cambia-
        this.PzasInspeccionadas = 10;
        this.pzasTotales = 150;
        this.PackingList = [];
        ///////////// variables de mensaje para barra de progreso y el color////////////////////////////////
        this.mensajeNaranja = 'Con el ritmo de Trabajo actual, no lograrás cumplir el objetivo.';
        this.mensajeAzul = 'Acelera el ritmo de Tabajo, para que logres el objetivo.';
        this.mensajeVerde = 'Con el ritmo de Trabajo actual, lograrás cumplir el objetivo.';
        this.naranja = '#FF6700';
        this.azul = '#0098DA';
        this.verde = '#94BA13 ';
    }
    BarraProgresoPorClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PzasInspeccionadas = this.totPiezas;
        this.pzasTotales = this.packingTotales;
        this.obtenerPiezasInspeccion(this.inspector);
        this.idHora = setInterval(function () {
            _this.hora = _this.obtenerHoraActual();
        }, 1000);
    };
    BarraProgresoPorClienteComponent.prototype.obtenerPiezasInspeccion = function (inspector) {
        //  this.obtenerRestante(this.pzasTotales);
        this.restante = this.obtenerRestante(this.pzasTotales) + '%';
        this.pzasRestantes = (this.pzasTotales - this.PzasInspeccionadas);
        this.formatoPzasRestantes = (this.pzasRestantes === 1) ? this.pzasRestantes + ' Packing List (restante)' : this.pzasRestantes + ' Packing List (restantes)';
        this.promedio = this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas) + '%';
        this.formatoPzasInspeccionadas = (this.PzasInspeccionadas === 1) ? this.PzasInspeccionadas + ' Packing List enviado' : this.PzasInspeccionadas + ' Packing List enviados';
    };
    // Funcion para obtener porcentaje restante
    BarraProgresoPorClienteComponent.prototype.obtenerRestante = function (pzasTotales) {
        var restante = 100 - this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas);
        return restante;
    };
    BarraProgresoPorClienteComponent.prototype.obtenerHoraActual = function () {
        var fecha = new Date();
        var formatoMinutos = fecha.getMinutes();
        var minutes = (formatoMinutos < 10) ? '0' + formatoMinutos : formatoMinutos;
        var formatoHoras = fecha.getHours();
        var hours = (formatoHoras < 10) ? '0' + formatoHoras : formatoHoras;
        return hours + ':' + minutes + ' Hrs.';
    };
    // Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
    BarraProgresoPorClienteComponent.prototype.obtenerPorcentaje = function (totales, inspeccionadas) {
        var porcentaje;
        if (totales < inspeccionadas) {
            alert('El numero de piezas inspeccionadas es mayor que las piezas totales');
        }
        else if (totales === inspeccionadas) {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
        }
        else {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
            if (porcentaje <= 25) {
                this.toolTipRigth = false;
                this.textRigth = true;
                this.tooltiptextLeft = true;
                this.textLeft = false;
            }
            else if (porcentaje >= 85 && porcentaje <= 100) {
                this.toolTipRigth = true;
                this.textRigth = false;
                this.tooltiptextLeft = false;
                this.textLeft = true;
            }
            else {
                this.toolTipRigth = false;
                this.textRigth = true;
                this.tooltiptextLeft = false;
                this.textLeft = true;
            }
        }
        return porcentaje;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BarraProgresoPorClienteComponent.prototype, "totPiezas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BarraProgresoPorClienteComponent.prototype, "packingTotales", void 0);
    BarraProgresoPorClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-barra-progreso-por-cliente',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarraProgresoPorClienteComponent);
    return BarraProgresoPorClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<script src='http://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular-resource.js'></script>\r\n<script src='../../../../../../app/services/session/consume-rest.js'></script>\r\n<div style=\"width: 100%;height: calc(100% - 59px);overflow: auto;\">\r\n  <div class=\"content-area\">\r\n    <div id=\"principal\">\r\n      <div style=\" width: 100%; height: 100%; justify-content: space-between; display: flex;\">\r\n        <div id=\"encabezados\" style=\" height: 100%;\">\r\n          <div class=\"infoPL\" *ngIf=\"datosCliente.length > 0\">\r\n            <label class=\"label_estilo_encabezado \">INFORMACIÓN PACKING LIST</label>\r\n            <label class=\"label_nombre_lugar \">{{datosCliente[0].cliente}}</label>\r\n            <label class=\"label_cliente \"> {{contactoInfo}} </label>\r\n            <div style=\"\" class=\"ubicacion\">\r\n              <img id=\"ubicacion\" src=\"./assets/Images/Configuracion/Rutas/ubicacion.svg\" style=\"width: 14px\"/>\r\n              <span class=\"label_ubicacion\" style=\"padding-left: 10px;\"> {{datosCliente[0].ruta}} · {{datosCliente[0].mensajeria}}</span>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"progresoTrabajo\">\r\n            <pn-barra-progreso-por-cliente *ngIf=\"activarBarraProgreso\" [totPiezas]=\"recibePiezasTot\"\r\n                                              [packingTotales]=\"totalesPacking\"></pn-barra-progreso-por-cliente>\r\n          </div>\r\n          <div class=\"prioridadEmbalaje\">\r\n            <pn-barra-prioridades-por-cliente *ngIf=\"activarBarraPrioridades\"></pn-barra-prioridades-por-cliente>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"contenedorFormulario\">\r\n      <div class=\"infoEnvio\">\r\n        <div>\r\n          <div>\r\n            <div class=\" subtituloPeque \"\r\n                 style=\" padding-top: 10px; display: flex;\">Destino\r\n            </div>\r\n            <div class=\"rowFormulario\">\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">País:</div>\r\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].pais}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Estado:</div>\r\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].estado}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Calle / Nº / Colonia:</div>\r\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].calle}}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"rowFormulario\">\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Delegación / Municipio:</div>\r\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].delegacion}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">C.P:</div>\r\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].cp}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Ruta:</div>\r\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].ruta}}</div>\r\n              </div>\r\n              <div class=\"datosForm\" style=\"z-index: 3;\">\r\n                <div class=\"estiloLabelData\">Mensajeria:</div>\r\n                <div class=\"estiloLabelsContacto\" style=\"min-width: 136px\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\"><!--{{colectarElemtosAux[0].mensajeria}}-->\r\n                  <pn-combo-flecha-verde [title]=\"'Seleccionar'\"  [itemSelect]=\"selectedEnvio\" id=\"cmbEnvio\"  (valueDropList)=\"recibeValosCombo($event,'envio')\" [items]=\"tiposEnvios\" [heightLi]=\"'35px'\"></pn-combo-flecha-verde>\r\n                </div>\r\n                <div class=\"estiloLabelsContacto\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">\r\n                  {{this.mensajeria}}\r\n                </div>\r\n              </div>\r\n              <div class=\"datosForm\" *ngIf=\"activeCuenta\">\r\n                <div class=\"estiloLabelData\"># Cuenta: </div>\r\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].numero}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"comentarioEnvio\">\r\n            <div>\r\n              <label class=\"subtituloPeque\" style=\" padding-bottom: 10px; display: flex;\">Comentario\r\n                de envío</label>\r\n              <div>\r\n                <div class=\"estiloLabelData\" *ngIf=\"comentarios !== null\">\r\n                  <textarea class=\"comentariosText\" readonly>{{comentarios}}</textarea>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <div *ngIf=\"comentarios == null\">\r\n                  <div class=\"contenedorComentario\" *ngIf=\"!etiquetaComentarios\">\r\n                    <label>SIN COMENTARIOS</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <label class=\" subtituloPeque \" style=\"display: flex;\">Datos del paquete</label>\r\n              <div class=\"datosPaq\">\r\n                <div style=\"padding-bottom: 5px;\">\r\n                  <label class=\"estiloLabelData\">Peso:</label>\r\n                  <input class=\"inputPaquete\" name=\"peso\" id=\"peso\"\r\n                         (input)=\"recibeContacto($event.target.value,'peso')\" [value]=\"valorInicial\"\r\n                          style=\"z-index: 3\" [(ngModel)]=\"peso\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">\r\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">kg</label>\r\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">{{dataMeter.peso}} kg</label>\r\n                </div>\r\n                <div style=\"padding-bottom: 5px;\">\r\n                  <label class=\"estiloLabelData\">Longitud:</label>\r\n                  <input class=\"inputPaquete\" name=\"longitud\" id=\"longitud\"\r\n                         (input)=\"recibeContacto($event.target.value,'longitud')\" value=\" \"\r\n                         style=\"z-index: 3\" [(ngModel)]=\"longitud\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">\r\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">cm</label>\r\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">{{dataMeter.length}} cm</label>\r\n                </div>\r\n\r\n                <div style=\"padding-bottom: 5px;\">\r\n                  <label class=\"estiloLabelData\">Altura:</label>\r\n                  <input class=\"inputPaquete\" name=\"altura\" id=\"altura\"\r\n                         (input)=\"recibeContacto($event.target.value,'altura')\" value=\" \"\r\n                         style=\"z-index: 3\" [(ngModel)]=\"altura\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">\r\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">cm</label>\r\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">{{dataMeter.height}}cm</label>\r\n                </div>\r\n\r\n                <div style=\"padding-bottom: 5px;position: relative;z-index: 1;\">\r\n                  <label class=\"estiloLabelData\">Ancho:</label>\r\n                  <input class=\"inputPaquete\" name=\"ancho\" id=\"ancho\"\r\n                         (input)=\"recibeContacto($event.target.value, 'ancho')\" value=\" \"\r\n                         style=\"z-index: 3\" [(ngModel)]=\"ancho\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">\r\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">cm</label>\r\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">{{dataMeter.width}} cm</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"width: 50%;box-sizing: border-box;padding-left: 10px;display: flex\">\r\n          <div class=\"contacto\">\r\n            <div>\r\n              <label class=\" subtituloPeque \" style=\" padding-top: 10px; display: flex;\"> Contacto</label>\r\n              <div class=\"rowFormulario\">\r\n                <div class=\"datosForm\">\r\n                  <div class=\"estiloLabelData\">Nombre:</div>\r\n                  <div class=\"estiloLabelsContacto\">{{datosCliente[0].contacto}}</div>\r\n                </div>\r\n                <div class=\"datosForm\">\r\n                  <div class=\"estiloLabelData\">Puesto:</div>\r\n                  <div class=\"estiloLabelsContacto\">{{datosCliente[0].puesto}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"rowFormulario\">\r\n                <div class=\"datosForm\" style=\"position: relative;z-index: 1;\">\r\n                  <div class=\"estiloLabelData\">Departamento:</div>\r\n                  <div class=\"estiloLabelsContacto\">{{datosCliente[0].departamento}}</div>\r\n                </div>\r\n                <div class=\"datosForm\">\r\n                  <label class=\"estiloLabelData\">Tel:</label>\r\n                  <div class=\"estiloLabelsContacto\">{{datosCliente[0].tel}}</div>\r\n                </div>\r\n                <div class=\"datosForm\" style=\"position: relative;z-index: 1;\">\r\n                  <label class=\"estiloLabelData\">Email:</label>\r\n                  <div class=\"estiloLabelsContacto\">{{datosCliente[0].mail}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div style=\"padding-top: 15px;\">\r\n              <label class=\"subtituloPeque\">Registro de envío</label>\r\n              <div id=\"archivo\" class=\"archivo\">\r\n                <div class=\"datosForm\" style=\"align-items: center;\">\r\n                  <label class=\"estiloLabelData\" class=\"estiloLabelsContacto\"> Guía de envío:</label>\r\n                  <div>\r\n                    <input id=\"ingresoNumTracking\" class=\"estiloInputMensajero\" name=\"mensajero \" value=\" \" type=\"text \"\r\n                           maxlength=\"10\" [ngModel]=\"ingresoTracking\" (ngModelChange)=\"incluirTrackingArreglo($event)\"\r\n                           style=\"z-index: 3; position: relative\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">\r\n                    <label style=\"z-index: 3; position: relative\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">{{datosCliente[0].numero}}</label>\r\n                  </div>\r\n                  <label id=\"localizacion\"></label>\r\n                </div>\r\n                <div class=\"datosForm\" style=\"align-items: center;\">\r\n                  <label class=\"estiloLabelData\"> Guía de envío escaneada:</label>\r\n                  <div id=\"EstiloCargarArchivo\">\r\n\r\n                    <div>\r\n                      <pq-file-upload  [disabled]=\"true\" [docR]=\"guiaDoc\" style=\"min-width: 260px;display: flex;\"\r\n                                      (enviarDocumento)=\"recibeDocumentacion($event)\"\r\n                                      [activarOjito]=\"tipoEnvio\"></pq-file-upload>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"secondSeccion\">\r\n        <div class=\"listaNueva\">\r\n          <label class=\"encabezadoLista\">PACKING LIST</label>\r\n          <div id=\"estilo_borde_verde_lista\" class=\"lista\">\r\n            <div [ngClass]=\"lstResultadoCotizaciones[i]\" *ngFor=\"let packing_list of encabezadosPasckinList; let i = index\" class=\"listaItem\" (click)=\"itemSelect(i)\">\r\n              <div class=\"ltSelect\"></div>\r\n              <div id=\"listaContent\" style=\"display: flex; flex-direction: column; justify-content: space-between; \">\r\n                <label class=\"numPacking_list \"> #{{i+1}}· <span\r\n                  style=\" padding-bottom: 15px;\"\r\n                  class=\"nombrePacking_list \"> {{packing_list.folio}}  </span></label>\r\n                <label class=\"piezasPacking_llist \"> {{packing_list.piezas}}&nbsp;{{'Piezas'}}</label>\r\n                <div style=\"display: flex; flex-direction: row \">\r\n                  <label class=\"p1\"> P1 · {{packing_list.p1}} </label>\r\n                  <label class=\"p2\"> P2 · {{packing_list.p2}} </label>\r\n                  <label class=\"p3\"> P3 · {{packing_list.p3}} </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"overflow-y: scroll\" class=\"segundaSeccion\">\r\n          <div class=\"escanearCodigos\">\r\n            <div class=\"tituloColectar\">\r\n          <span class=\"tituloColectarElem\">\r\n          COLECTAR ELEMENTO </span>\r\n              <span class=\"estiloNombreSeleccioncliente\"> {{datoPL}}</span>\r\n            </div>\r\n            <!-- div de tipos de elementos -->\r\n            <div class=\"elementosItems\">\r\n          <textarea type=\"text\" name=\"firstname\" autofocus=\"focus\" (keydown.enter)=\"enterAux()\" #textarea\r\n                    [(ngModel)]=\"codigosBarraElemento\" class=\"textArea\"\r\n                    style=\"width: 95%; position: absolute\"></textarea>\r\n              <div class=\"seccionUno\" [attr.id]=\"'div0'\" *ngIf=\"colectarElemtosAux.length>0\">\r\n                <div class=\"contenedorTarjeta\">\r\n                  <div class=\"imagenTarjeta\">\r\n                    <label class=\"estiloTipoElemento\">DOCUMENTACIÓN</label>\r\n                    <img class=\"img\" src=\"./assets/Images/bolsa_doc.svg\" style=\" width: 68px; height: 74px;\"/>\r\n                    <div class=\"divColectarElementos\"\r\n                         style=\"border:1px solid #D8D8D8; display: flex; flex-direction: column; \">\r\n                      <label class=\"labelcolectarElementos\">{{datoPL}}</label>\r\n                      <label class=\"labelcolectarElementos\">Sobre</label>\r\n                      <label class=\"labelcolectarElementos\"></label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"escanear\" style=\"flex-direction: row; display: flex; position: relative; \">\r\n                    <div class=\"imgEscanear\">\r\n                      <img src='./assets/Images/Images/codigo_gris.svg' *ngIf=\"!codigosValidos[indexPacking][0]\"/>\r\n                      <img src='./assets/Images/Images/codigobarras_verde.svg' *ngIf=\"codigosValidos[indexPacking][0]\"/>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"seccionUno\" class=\"seccionUno\" *ngFor=\"let elemento of colectarElemtosAux; let i = index \"\r\n                   [attr.id]=\"'div'+i\">\r\n                <div class=\"contenedorTarjeta\">\r\n                  <div class=\"imagenTarjeta\">\r\n                    <label class=\"estiloTipoElemento\"> {{elemento.tipo}} </label>\r\n                    <img class=\"img\" [src]=\"imgTipoValidacionArr[i]\" style=\" width: 68px; height: 74px;\"/>\r\n                    <div class=\"divColectarElementos\"\r\n                         style=\"border:1px solid #D8D8D8; display: flex; flex-direction: column; \">\r\n                      <label class=\"labelcolectarElementos\">{{elemento.folio}}</label>\r\n                      <label class=\"labelcolectarElementos\">{{tipoDeProducto[i]}}</label>\r\n                      <label class=\"labelcolectarElementos\">{{elemento.cant}}&nbsp;{{'Piezas'}}</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"escanear\" style=\"flex-direction: row; display: flex; position: relative; \">\r\n                    <div class=\"imgEscanear\">\r\n                      <img src='./assets/Images/Images/codigo_gris.svg' *ngIf=\"!codigosValidos[indexPacking][i+1]\"/>\r\n                      <img src='./assets/Images/Images/codigobarras_verde.svg' *ngIf=\"codigosValidos[indexPacking][i+1]\"/>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- prueba-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"totalPacking\">\r\n      <div>\r\n        <label class=\"totalPacking_llist \" style=\"align-content:center; padding-left: 70px;\">{{'Total :'}}\r\n          {{totalPacking}} {{'Packing list'}}</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"totalFinalizar\">\r\n    <div class=\"botonFinalizar\" (click)=\"finalizar()\" [style.pointerEvents]=\"btnAceptar ? 'auto':'none'\"\r\n         [style.background]=\"btnAceptar ? '#008895':'#C2C3C9'\"> FINALIZAR\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"footer \" style=\" border: none; border-top: solid;\">\r\n  <div class=\"datosFooter \" style=\"width: 100%;height: 100%;\">\r\n    <div class=\"Prioridad1 \">\r\n      <label class=\"p1 \">P1 <span>Prioridad 1</span></label>\r\n    </div>\r\n    <div class=\"Prioridad2 \">\r\n      <label class=\"p2 \">P2 <span>Prioridad 2</span></label>\r\n    </div>\r\n    <div class=\"Prioridad3 \">\r\n      <label class=\"p3 \">P3 <span>Prioridad 3</span></label>\r\n    </div>\r\n    <div class=\"Ambiente \">\r\n      <img class=\"img \" src='./assets/Images/ambiente.svg'/> Ambiente\r\n    </div>\r\n    <div class=\"Congelación \">\r\n      <img class=\"img \" src='./assets/Images/congelacion.svg'/> Congelación\r\n    </div>\r\n    <div class=\"Refrigeración \">\r\n      <img class=\"img \" src='./assets/Images/refrigeracion.svg'/> Refrigeración\r\n    </div>\r\n  </div>\r\n</footer>\r\n<div *ngIf=\"activarAlerta\">\r\n  <pq-alerta [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlert($event)\"></pq-alerta>\r\n</div>\r\n<div *ngIf=\"activarAlertExit\">\r\n<pn-pop-up-finalizar (desactivarPop)=\"cerrarPop($event)\" [label]=\"'Operación exitosa'\"\r\n                     [imagen]=\"true\"></pn-pop-up-finalizar>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.scss":
/***/ (function(module, exports) {

module.exports = ".content-area{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px;width:100%;min-height:860px;height:calc(100% - 50px)}.encabezadoCliente{font-family:\"Novecento\";font-weight:bold;font-size:28px;color:#424242;text-align:left;padding-left:30px;size:150px;height:50px;padding-top:20px}.area{display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #d8d8d8;width:100%;min-width:220px;border-top:1px solid #d8d8d8}.bordeDatosC{width:100%}.contenedor{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:20px}.label_estilo_encabezado{font-family:\"Novecento\";font-weight:bold;font-size:22px;color:#008895;height:28px;padding-bottom:5px}.label_nombre_lugar{font-family:\"Roboto\";font-weight:medium;font-size:18px;color:#424242;width:369px;height:52px}.label_cliente{font-family:\"Roboto\";font-weight:\"Regular\";font-size:16px;color:#424242;width:369px;height:22px}.label_ubicacion{font-family:\"Roboto\";font-size:16px;color:#424242;width:369px}.encabezadoLista{font-family:Helvetica;font-size:25px;color:#008895;line-height:22px;font-weight:bold;padding-bottom:20px;height:42px}.numPacking_list{font-family:Helvetica;font-size:20px;color:#000;line-height:22px;font-weight:bold;padding-bottom:12px}.totalPacking_llist{font-size:12px;color:#404040;text-align:center;font-family:\"Roboto\";width:167px;height:16px}.datosFooter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px;min-height:56px;max-height:56px}.Ambiente,.Congelación,.Prioridad1,.Prioridad2,.Prioridad3,.Refrigeración{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.p1,.p2,.p3{margin-right:10px}.p1{color:#af3634;font-weight:bold}.p1>span{color:#242424;font-weight:400}.p2{color:#eeb253;font-weight:bold}.p2>span{color:#242424;font-weight:400}.p3{color:#63b236;font-weight:bold}.p3>span{color:#242424;font-weight:400}.img{padding-right:6px;cursor:pointer}.nombrePacking_list{font-family:Helvetica-Bold;font-size:20px;color:#008895;line-height:22px}.seleccionLista{font-family:Helvetica;font-weight:bold;font-size:25px;color:#008895;width:100%}.contenedorComentario{opacity:.18;font-family:Novecento;font-size:20px;color:#4a4a4a;text-align:center;font-weight:bold}.estiloComentario{font-family:Roboto;color:#4a4a4a;font-size:15px}.estiloNombreSeleccioncliente{font-family:\"Novecento\";font-size:25px;color:#008895;text-align:left;line-height:30px;padding-left:20px}.subtitulos{font-family:Roboto;font-size:18px;color:#4a4a4a;font-weight:bold;padding-top:20px;padding-bottom:20px}.subtituloPeque{font-family:Roboto;font-size:18px;color:#4a4a4a;font-weight:bold}.divColectarElemntos{font-family:Roboto-Medium;font-size:14px;color:#008895;text-align:center;padding-bottom:20px;padding-top:20px;margin-top:20px}#encabezados{width:99%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-width:800px}.infoPL{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:429px;max-width:429px}.progresoTrabajo{min-width:908px;max-width:908px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-left:1px solid #d8d8d8;border-right:1px solid #d8d8d8;padding-left:25px;padding-right:25px;-webkit-box-sizing:border-box;box-sizing:border-box}.prioridadEmbalaje{min-width:396px;max-width:396px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-left:25px;-webkit-box-sizing:border-box;box-sizing:border-box}#principal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;min-height:230px;max-height:230px !important;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid #d8d8d8;border-bottom:1px solid #d8d8d8;-webkit-box-sizing:border-box;box-sizing:border-box}.mensajero{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0px 0px;border:1px solid #d8d9dd}.estiloInputMensajero{background-size:30px;height:25px;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;width:100%;margin:-29px 0px;min-width:255px}.contacto{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:15px}#error{margin-top:20%}#error>ul>li{background:gray;padding:.5rem;color:#fff;font-weight:0;font-size:.8em;text-align:center;-webkit-animation:up 1s ease-in-out 1 backwards;animation:up 1s ease-in-out 1 backwards}.comentarioEnvio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:10px}.comentariosText{outline:none;border:1px solid #eceef0;width:220px;height:54px;resize:none}.lista{height:100%;overflow:scroll}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{height:101px;background-color:#eceef0}.lista>.divActive .ltSelect{background:#008895 !important;width:10px !important}.lista>.divFinalizar{height:101px;background-color:#eceef0;pointer-events:none;opacity:.6}#listaContent{padding-top:15px;padding-bottom:15.8px;padding-left:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.listaItem{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:solid 1px #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box}.listaSeleccionada{border-bottom:solid 1px #eceef0;height:100%;width:100%;min-height:80px;font-size:20px;padding:19px 23px 18px 17px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:6px solid #008895;background-color:#eceef0}.listaSeleccionada>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px;color:#008895}.listaSeleccionada>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;color:#008895}.listaSeleccionada>.datosLst>p{font-weight:normal;color:#424242}.contenedorFormulario{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-top:20px;border-top:1px solid #d8d8d8;height:calc(100vh - 672px);overflow-y:scroll;min-height:500px}.contenedorFormulario>.secondSeccion{height:70%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-top:5px}.formularioRutas{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 20px;padding-right:0px;min-width:450px;width:calc(100% - 514px);-webkit-box-sizing:border-box;box-sizing:border-box}.tabla-clientes{overflow-y:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:267px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;height:100%;min-height:270px;overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:12px;border-bottom:1px solid #d8d8d8;width:15%}.estiloTipoElemento{font-family:Novecento;font-size:16px;color:#008895;text-align:center;font-weight:bold;padding-top:10px;padding-bottom:15px}.textArea{width:100%;z-index:1;opacity:0;bottom:0px;top:0px}.imgEscanear{position:absolute}.divColectarElementos{opacity:.94;background:#008895;width:181px;height:63px;padding:5px 0px;border:1px solid #d8d8d8;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.divColectarElementos .labelcolectarElementos{font-family:Roboto;font-size:14px;color:#fff;text-align:center;font-weight:medium}.escanear{font-family:\"Roboto\";display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;height:30px;width:100%;margin-top:22px}.elementosItems{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:calc(100vh - 581px)}.infoEnvio{height:30%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #d8d8d8;min-height:200px}.infoEnvio>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:50%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:10px}.escanearCodigos{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 20px 10px 10px;min-width:472px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.tituloColectar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:80px}.seccionUno{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:30px;padding-top:30px;margin-left:10px;height:260px;-webkit-box-sizing:border-box;box-sizing:border-box}.contenedorTarjeta{height:100%}.imagenTarjeta{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border:1px solid #d8d8d8;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:181px;max-height:208px;min-height:208px;-webkit-box-sizing:border-box;box-sizing:border-box}.datosForm{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.rowFormulario{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-top:10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.estiloLabelsContacto{font-family:Roboto-Light;font-size:15px;color:#4a4a4a;margin-right:10px}.estiloTxtAreaContacto{font-family:Roboto-Light;font-size:15px;color:#4a4a4a}.estiloLabelData{font-family:Roboto-Regular;font-size:15px;color:#4a4a4a;margin-right:10px}.botonFinalizar{width:170px;height:30px;background:#c2c3c9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold}#EstiloCargarArchivo{font-family:\"Roboto\";font-weight:lighter;font-size:14px;color:#abaab0;padding-left:0px;max-width:350px}.totalFinalizar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin:15px 0;padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.totalPacking{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin:15px 0;-webkit-box-sizing:border-box;box-sizing:border-box;height:42px;min-height:40px}.totalPacking>div{border-bottom:1px solid #d8d8d8;border-top:1px solid #d8d8d8;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.archivo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:10px;padding-bottom:20px}.tituloColectarElem{padding-bottom:10px;-ms-flex-line-pack:center;align-content:center;font-family:Helvetica-Bold;font-weight:bold;font-size:25px;color:#008895;width:100%;padding-left:20px}.segundaSeccion{-webkit-box-sizing:border-box;box-sizing:border-box;border-left:1px solid #d8d8d8;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;width:85%;height:100%}.ubicacion{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-top:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.piezasPacking_llist{padding-bottom:12px}.listaNueva{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:20px;padding-right:20px;min-width:267px;width:15%}.datosPaq{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-top:10px;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;z-index:1}::ng-deep .dropList>.container-drop>.Title{height:20px !important}::ng-deep .dropList>.container-drop>.Title>p{font-size:16px !important}::ng-deep .dropList>.container-drop>.Title>img{top:4px !important;height:10px !important}::ng-deep .dropListSelect>.container-drop>.Title{height:20px !important}::ng-deep .dropListSelect>.container-drop>.Title>p{font-size:16px !important}::ng-deep .dropListSelect>.container-drop>.Title>img{top:4px !important;height:10px !important}@media all and (min-height: 770px)and (max-height: 1130px)and (min-width: 1300px)and (max-width: 2572px){.label_estilo_encabezado{font-size:13px}.label_nombre_lugar,label_cliente{font-size:12px}#principal{min-width:189px;min-height:180px}.escanearCodigos,.formularioRutas{height:100%}.progresoTrabajo{min-width:480px}.infoPL{min-width:334px}.encabezadoLista{font-size:13px;padding-bottom:0px}.estiloNombreSeleccioncliente{font-size:12px}.tituloColectarElem{font-size:13px}.seleccionLista{font-size:13px}.subtitulos{font-size:12px;padding-bottom:15px;padding-top:15px}.subtituloPeque{font-size:11px;padding-top:11px}.estiloLabelData{font-size:11px}.estiloLabelsContacto{font-size:11px}.rowFormulario{padding-top:16px}.numPacking_list{font-size:12px;padding-bottom:6px}.nombrePacking_list{font-size:12px}.piezasPacking_llist{font-size:11px;padding-bottom:6px}.p1,.p2,.p3{font-size:11px}.lista>.divActive{height:88px}.tabla-clientes{min-width:230px;border-bottom:1px solid #d8d8d8}.seccionUno{padding-top:0px}.estiloTipoElemento{padding-bottom:0px;font-size:11px}.imagenTarjeta{max-width:114.5px;max-height:159px}.divColectarElementos{width:116px;height:50px}.tituloColectar{min-height:60px}.divColectarElementos>.labelcolectarElementos{font-size:9px}.contenedorTarjeta{max-width:114.5px;max-height:159px}.ubicacion{padding-top:9px}.escanearCodigos{min-width:345px}.comentarioEnvio{padding-top:initial}.formularioRutas{width:calc(100% - 349px)}}@media all and (min-height: 1131px)and (max-height: 1330px){.content-area{min-height:820px}}@media all and (min-height: 770px)and (max-height: 1130px){.content-area{min-height:760px}}@media all and (min-height: 1335px)and (max-height: 1440px){.content-area{height:calc(100% - 60px)}}.inputPaquete{position:relative;width:50px}"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizarEnvioClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trabajar_ruta_envio_por_cliente_service__ = __webpack_require__("./src/app/services/trabajar-ruta/envio-por-cliente.service.ts");
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




var FinalizarEnvioClienteComponent = /** @class */ (function () {
    function FinalizarEnvioClienteComponent(_serviceEnvio, coreComponent) {
        this._serviceEnvio = _serviceEnvio;
        this.coreComponent = coreComponent;
        this.validarPaquteria = false;
        this.finalizarEnvio = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.regresarVistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focus = true;
        this.activar = false;
        this.pintarCodigo = false;
        this.activarBotonEnvio = false;
        this.popUp = false;
        this.numeroTracking = '';
        this.arreglo_numeros_tracking = [];
        this.arreglo_numeros_trackingCopia = [];
        this.lstResultadoCotizaciones = [];
        this.vistaInicialActiva = true;
        this.contadorM = 0;
        this.tiposEnvios = [
            /* { nombre: '--NINGUNO--', key: 0 }, */
            { nombre: 'DHL', key: 0 },
            { nombre: 'ESTAFETA', key: 1 },
            { nombre: 'FEDEX', key: 2 },
            { nombre: 'UPS', key: 3 }
        ];
        this.indexPacking = 0;
        this.colectarElemtos = [];
        this.colectarElemtosAux = [];
        this.codigosValidos = [];
        this.datosFormulario = [];
        this.btnsFinalizar = [];
        this.encabezadosPasckinList = [];
        this.codigosBarra = [];
        this.imgTipoValidacionArr = [];
        this.labelComentarios = true;
        this.cantidadPL = 0;
        this.tipoDeProducto = [];
        this.valoresData = [];
        this.lstDesactivadas = [];
        this.datosCliente = [];
        this.valoresDataEnvio = [];
        this.validarnumerosEnvio = /^([0-9])*$/;
        this.popUpLocalizar = false;
        this.listaColectarElementosAuxiliar = [];
        this.tipoEnvio = false;
        this.val = 0;
        this.mensajeria = 'Seleccionar';
        this.lstPendientes = [];
        this.lstPacking = [];
        this.auxDataClientCurrent = [];
        this.packing_list = [];
        this.listaAuxiliar = [];
        this.contador = 0;
        this.rutaPath = 'http://proquifa.com.mx:51725/SAP/';
        //rutaPath = 'http://187.189.39.50:51725/SAP/';
        this.usuario = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser();
        this.guiaDoc = [];
    }
    FinalizarEnvioClienteComponent.prototype.ngOnInit = function () {
        this.activarInputs = true;
        this.activeCuenta = true;
        this.activarBarraPrioridades = true;
        this.obtenerPackingListClient();
    };
    FinalizarEnvioClienteComponent.prototype.ngOnChanges = function () {
        if (this.totalesBarra !== undefined && this.totalesBarra !== null && this.totalesBarra.length > 0) {
            if (this.recibePiezasTot !== this.totalesBarra[0].hechas || this.totalesPacking !== this.totalesBarra[0].totales) {
                this.recibePiezasTot = this.totalesBarra[0].hechas;
                this.totalesPacking = this.totalesBarra[0].totales;
                this.activarBarraProgreso = true;
            }
        }
    };
    FinalizarEnvioClienteComponent.prototype.obtenerPackingListClient = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this._serviceEnvio.obtenerPackingList(this.idCliente).subscribe(function (data) {
            // const arrayAux = Object.getOwnPropertyNames(data.current['PackingList']);
            if (data.current && data.current !== null && data.current !== '') {
                _this.comentarios = data.current['Comentarios'];
                console.log('valor de la lista :) ' + data.current);
                _this.colectarElemtosAux = [];
                _this.encabezadosPasckinList = [];
                _this.colectarElemtos = [];
                _this.codigosValidos = [];
                _this.lstPendientes = [];
                _this.lstPacking = [];
                _this.lstDesactivadas = [];
                _this.auxDataClientCurrent = data.current.PackingList;
                _this.infoCliente = data.current.Cliente;
                console.log('info 1' + _this.auxDataClientCurrent);
                console.log('info 2' + _this.infoCliente);
                console.log('info 3' + data);
                console.log(data.current);
                console.log(_this.infoCliente);
                var array = Object.getOwnPropertyNames(_this.auxDataClientCurrent);
                _this.datosCliente = _this.auxDataClientCurrent[array[0]];
                //// Validar campos vacios
                _this.dataMeter = _this.datosCliente[0].envio;
                var path = _this.rutaPath + 'Guias/' + _this.datosCliente[0].guia + '.pdf';
                console.log('Guia: ', path);
                if (_this.datosCliente[0].envio.tipo === 'Guia') {
                    _this.activeCuenta = false;
                    _this.tipoEnvio = false;
                    _this.activar = true;
                    _this.numGuia = _this.datosCliente[0].numero;
                    _this.guiaDoc = [{ path: path, name: _this.datosCliente[0].guia + '.pdf' }];
                }
                else {
                    _this.activeCuenta = true;
                    _this.tipoEnvio = true;
                    _this.guiaDoc = null;
                }
                if (_this.datosCliente[0].tel === undefined || _this.datosCliente[0].tel === null || _this.datosCliente[0].tel === '') {
                    _this.datosCliente[0].tel = 'ND';
                }
                if (_this.datosCliente[0].puesto === undefined || _this.datosCliente[0].puesto === null || _this.datosCliente[0].puesto === '') {
                    _this.datosCliente[0].puesto = 'ND';
                    var separador = _this.datosCliente[0].contacto.split('-');
                    if (separador.lenght > 0) {
                        _this.contactoInfo = separador[2];
                    }
                    else {
                        _this.contactoInfo = separador[0];
                    }
                }
                else {
                    _this.contactoInfo = _this.datosCliente[0].contacto + '/' + _this.datosCliente[0].puesto;
                }
                if (_this.datosCliente[0].departamento === undefined || _this.datosCliente[0].departamento === null || _this.datosCliente[0].departamento === '') {
                    _this.datosCliente[0].departamento = 'ND';
                }
                /////
                _this.totalPacking = array.length;
                _this.sumaDePackingList = array.length;
                for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                    var datos = array_1[_i];
                    var objetoAux = {};
                    objetoAux['folio'] = datos;
                    objetoAux['piezas'] = 0;
                    objetoAux['p1'] = 0;
                    objetoAux['p2'] = 0;
                    objetoAux['p3'] = 0;
                    _this.colectarElemtos.push(_this.auxDataClientCurrent[datos]);
                    _this.codigosValidos.push(new Array(_this.auxDataClientCurrent[datos].length).fill(false));
                    _this.codigosValidos[_this.codigosValidos.length - 1].splice(0, 0, false);
                    console.log(_this.codigosValidos);
                    _this.codigosBarra.push(new Array(_this.auxDataClientCurrent[datos].length).fill(''));
                    _this.datosFormulario.push({ contacto: '', telefono: '', puesto: '', email: '' });
                    _this.btnsFinalizar.push(false);
                    for (var _a = 0, _b = _this.auxDataClientCurrent[datos]; _a < _b.length; _a++) {
                        var datos2 = _b[_a];
                        objetoAux['piezas'] += datos2.cant;
                        objetoAux['p1'] += datos2.p1;
                        objetoAux['p2'] += datos2.p2;
                        objetoAux['p3'] += datos2.p3;
                    }
                    _this.encabezadosPasckinList.push(objetoAux);
                }
                _this.mostrarListaImagenes(0);
                _this.itemSelect(0);
                _this.valoresData.forEach(function (element) {
                    _this.listaAuxiliar.push(element.folio);
                });
                _this.coreComponent.closeModal(0);
            }
            else {
                _this.coreComponent.closeModal(0);
                _this.regresarVistaP.emit(true);
            }
        }, function (error) {
            console.log(error);
            // terminar loading false
            _this.coreComponent.closeModal(0);
        });
    };
    ////////////// Este metodo es para cambiar de packingList
    FinalizarEnvioClienteComponent.prototype.itemSelect = function (i) {
        var _this = this;
        this.indiceLts = i;
        this.indexAux = i;
        this.textArea.nativeElement.focus();
        this.mostrarListaImagenes(i); //// Se llama al metodo que muestra lo que trae la lista
        this.colectarElemtosAux = this.colectarElemtos[i];
        /// Agregar campo de inicio para la lista de mensajerias
        if (this.contadorM === 0) {
            var obj = void 0;
            obj = new Object;
            obj.nombre = this.colectarElemtosAux[0].mensajeria;
            this.selectedEnvio = obj;
            this.mensajeria = this.colectarElemtosAux[0].mensajeria;
        }
        /////
        this.idPendiente = 'Guia-' + this.colectarElemtosAux[0].idPendiente;
        console.log(this.idPendiente);
        /****************************************************/
        this.datoPL = this.colectarElemtosAux[0].packingList;
        this.indexPacking = i;
        this.lstResultadoCotizaciones = [];
        this.listaAuxiliar = [];
        this.numeroTracking = '';
        this.valor_tracking = '';
        this.fileName = '';
        this.activarBtn = true;
        this.btnAceptar = false;
        this.datoRemove = 0;
        /***************************/
        this.activar = false;
        this.valorInicial = '';
        /***************************/
        this.arreglo_numeros_tracking.forEach(function (element) {
            if (i === element.indexObjeto) {
                _this.pruebaIndex = i;
                _this.datoRemove = element.indexObjeto;
                _this.btnAceptar = true;
                _this.numeroTracking = element.numeroTracking;
                _this.valor_tracking = _this.numeroTracking + '.pdf';
                _this.activar = false;
                _this.activarBtn = element.valor;
                _this.pintarCodigo = true;
            }
        });
        this.folio_packing_list = this.folio_packing_list;
        this.activarBotonEnvio = false;
        this.contador = 0;
        if (this.lstResultadoCotizaciones[i] !== 'divFinalizar') {
            this.lstResultadoCotizaciones = [];
            this.lstResultadoCotizaciones = new Array(this.packing_list.length).fill('');
            for (var j = 0; j < this.lstDesactivadas.length; j++) {
                this.lstResultadoCotizaciones[this.lstDesactivadas[j]] = 'divFinalizar';
            }
            if (this.lstResultadoCotizaciones[i] !== 'divFinalizar') {
                this.lstResultadoCotizaciones[i] = 'divActive';
            }
        }
        this.listaAuxiliar = [];
        this.codigoValido = [];
        this.imgRealizaEnvio = [];
        this.contadorM++;
    };
    /////////// este metodo se encarga de mostrar los datos de acuerdo a la lista que se selecciona
    FinalizarEnvioClienteComponent.prototype.mostrarListaImagenes = function (index) {
        var _this = this;
        this.colectarElemtos[index].forEach(function (element) {
            if (element.tipo === 'Hielera Congelacion' || element.tipo === 'Hielera Congelación' || element.tipo === 'CONGELACIÓN') {
                element.tipo = 'CONGELACIÓN';
                _this.tipoDeProducto.push('Hielera');
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push('./assets/Images/hielera_refri.svg');
            }
            else if (element.tipo === 'Hielera Refrigeracion' || element.tipo === 'Hielera Refrigeración' || element.tipo === 'REFRIGERACIÓN') {
                element.tipo = 'REFRIGERACIÓN';
                _this.tipoDeProducto.push('Hielera');
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push('./assets/Images/hielera_refri.svg');
            }
            else if (element.tipo === 'Bolsa de transito' || element.tipo === 'TRANSITO') {
                element.tipo = 'TRANSITO';
                _this.tipoDeProducto.push('Bolsa');
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push('./assets/Images/bolsa_ambiente.svg');
            }
            var comentario = element.comentario;
            if (comentario.length > 0) {
                _this.labelComentarios = false;
            }
            else {
                _this.labelComentarios = true;
            }
        });
    };
    FinalizarEnvioClienteComponent.prototype.incluirTrackingArreglo = function (tracking) {
        this.ingresoTracking = tracking.trim();
        this.ingresoTrackingAux = this.ingresoTracking.trim();
        var guiaStrin = this.ingresoTrackingAux.toString();
        this.numGuia = guiaStrin;
        console.log('input');
        console.log('filename' + this.ingresoTracking);
        var objetoInput = {
            numeroTracking: this.ingresoTracking,
            indexObjeto: this.numeroPosicion,
            valor: false
        };
        console.log('tt' + this.ingresoTracking);
        if (this.ingresoTracking.length === 10) {
            this.fileName = this.ingresoTracking;
        }
        this.validarBotonEnvio();
    };
    /*Recibir tipo de envio*/
    FinalizarEnvioClienteComponent.prototype.recibeValosCombo = function (datos, tipo) {
        this.mensajeria = datos.nombre;
        ///// Activar la funcion de envio
        this.validarBotonEnvio();
    };
    FinalizarEnvioClienteComponent.prototype.validarBotonEnvio = function () {
        if ((this.lstPacking.length === this.colectarElemtos.length)) {
            this.activar = true;
        }
        else {
            this.activar = false;
            // this.archivo = undefined;
        }
        if (this.activar && (this.guiaDoc !== null || (this.archivo !== undefined && this.archivo.length > 0 && this.peso !== undefined && this.peso !== null && this.longitud !== null))) {
            this.btnAceptar = true;
        }
        else {
            this.btnAceptar = false;
        }
    };
    FinalizarEnvioClienteComponent.prototype.recibeDocumentacion = function (archivo) {
        console.log(archivo);
        // this.paqDistinta = true;
        this.cargarDocumento = archivo;
        this.archivo = archivo;
        this.validarBotonEnvio();
    };
    FinalizarEnvioClienteComponent.prototype.recibeContacto = function (texto, tipoInput) {
        var obj;
        obj = new Object();
        obj.tipo = tipoInput;
        if (tipoInput === 'peso') {
            this.peso = texto.trim();
        }
        else if (tipoInput === 'longitud') {
            this.longitud = texto.trim();
        }
        else if (tipoInput === 'altura') {
            this.altura = texto.trim();
        }
        else if (tipoInput === 'ancho') {
            this.ancho = texto.trim();
        }
        this.validarBotonEnvio();
    };
    FinalizarEnvioClienteComponent.prototype.enterAux = function () {
        var contador = 0;
        var aux = this.codigosBarraElemento.trim();
        this.codigosBarraElemento = aux;
        console.log(this.codigosBarraElemento, this.colectarElemtosAux);
        var validarDup = this.validarCodigoDuplicado(this.codigosBarraElemento);
        if (validarDup) {
            if (this.datoPL === this.codigosBarraElemento) {
                this.codigosValidos[this.indexPacking][0] = true;
                this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento;
            }
            else {
                for (var i = 0; i < this.colectarElemtosAux.length; i++) {
                    if (this.colectarElemtosAux[i].folio === this.codigosBarraElemento) {
                        this.codigosValidos[this.indexPacking][i + 1] = true;
                        this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento; // Agregar a la lista auxiliar
                    }
                    else {
                        contador++;
                    }
                }
            }
            if (contador === this.colectarElemtosAux.length) {
                this.mensaje = 'Folio incorrecto';
                this.activarAlerta = true;
            }
        }
        else {
            // alert('Elemento duplicado');
            this.mensaje = 'Folio duplicado';
            this.activarAlerta = true;
        }
        this.codigosBarraElemento = '';
        this.validarBotonEnvio();
        this.validarEscaneo();
    };
    FinalizarEnvioClienteComponent.prototype.validarCodigoDuplicado = function (elemento) {
        var i;
        if (this.listaColectarElementosAuxiliar.length === 0) {
            return true;
        }
        else {
            for (i = 0; i < this.listaColectarElementosAuxiliar.length; i++) {
                console.log(this.listaColectarElementosAuxiliar[i], elemento);
                if (this.listaColectarElementosAuxiliar[i] === elemento) {
                    return false;
                }
            }
            return true;
        }
    };
    FinalizarEnvioClienteComponent.prototype.validarEscaneo = function () {
        var contador = 0;
        for (var _i = 0, _a = this.codigosValidos[this.indexPacking]; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                contador++;
            }
        }
        if (contador === this.codigosValidos[this.indexPacking].length) {
            if (this.lstResultadoCotizaciones[this.indiceLts] !== 'divFinalizar') {
                this.lstPendientes.push(this.colectarElemtosAux[0].idPendiente);
                this.lstDesactivadas.push(this.indiceLts);
                this.lstPacking.push(this.colectarElemtosAux[0].packingList);
            }
            this.lstResultadoCotizaciones[this.indiceLts] = 'divFinalizar';
        }
        this.validarBotonEnvio();
    };
    FinalizarEnvioClienteComponent.prototype.finalizar = function () {
        var _this = this;
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var obj = {
            idPendiente: this.colectarElemtosAux[0].idPendiente,
            idUsuario: this.idUsuario,
            numGuia: this.numGuia,
            packingList: this.colectarElemtosAux[0].packingList,
            mensajeria: this.mensajeria,
            lstPackingList: this.lstPacking,
            pendientes: this.lstPendientes
        };
        console.log('Soy lo que se va a enviar a finalizar-->', obj);
        this._serviceEnvio.RegistrarTrEnvioPagoCliente(obj).subscribe(function (data) {
            _this.tipoGuardar = 'Paqueteria';
            var numGuia = _this.idPendiente;
            console.log('Soy numero de guia', numGuia);
            for (var i = 0; i < _this.lstPendientes.length; i++) {
                numGuia = 'Guia-' + _this.lstPendientes[i];
                if (_this.datosCliente[0].envio.tipo !== 'Guia' && _this.cargarDocumento !== null) {
                    _this._serviceEnvio.uploadFile(numGuia, _this.cargarDocumento, _this.tipoGuardar).subscribe(function (dataFile) {
                    });
                }
            }
            if (data.current === true) {
                /**ACTIVAR ALERTA DE OPERACION EXITOSA**/
                _this.activarAlertExit = true;
            }
        });
    };
    FinalizarEnvioClienteComponent.prototype.cerrarAlert = function ($event) {
        this.activarAlerta = false;
        this.textArea.nativeElement.focus();
    };
    FinalizarEnvioClienteComponent.prototype.cerrarPop = function ($event) {
        var _this = this;
        this.val = 2;
        this.activarInputs = false;
        // this.limpiarVariables();
        this.finalizarEnvio.emit(true);
        setTimeout(function () {
            _this.activarBarraPrioridades = false;
            _this.activarBarraProgreso = false;
        }, 100);
        setTimeout(function () {
            _this.activarBarraPrioridades = true;
            _this.activarBarraProgreso = true;
        }, 100);
        this.obtenerPackingListClient();
        this.activarAlertExit = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Boolean)
    ], FinalizarEnvioClienteComponent.prototype, "validarPaquteria", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FinalizarEnvioClienteComponent.prototype, "finalizarEnvio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FinalizarEnvioClienteComponent.prototype, "regresarVistaP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Boolean)
    ], FinalizarEnvioClienteComponent.prototype, "paqDistinta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FinalizarEnvioClienteComponent.prototype, "idCliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FinalizarEnvioClienteComponent.prototype, "totalesBarra", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textarea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FinalizarEnvioClienteComponent.prototype, "textArea", void 0);
    FinalizarEnvioClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-finalizar-envio-cliente',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_trabajar_ruta_envio_por_cliente_service__["a" /* EnvioPorClienteService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], FinalizarEnvioClienteComponent);
    return FinalizarEnvioClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listaClientes\" style=\"height: calc(100% - 60px);\">\r\n  <div class=\"content-area\">\r\n    <div class=\"area\" style=\" display: flex; border-bottom: 1px solid #D8D8D8;  min-width: 800px; border-top: 1px solid #D8D8D8;display: flex;position: relative\">\r\n      <!--Inicio Div Daos C-->\r\n      <div id=\"bordeDatosC\" class=\"datosC\" style=\"display: flex; flex-direction:row; height: 80%; justify-content: space-between; width: 100%; \">\r\n        <label class=\"encabezadoCliente\">CLIENTES</label>\r\n        <div style=\"padding-right: 10px; \" ng-model=\"searchText\" class=\"form-control\">\r\n          <div class=\"buscar\">\r\n            <div>\r\n              <div class=\"lupa\">\r\n                <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n              </div>\r\n              <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"clientes\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Fin datos C-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"catalogoClientes\">\r\n    <div class=\"container\">\r\n      <div id=\"datosArreglo\" class=\"tabla-clientes\" *ngIf=\"listaUniverso.length > 0\">\r\n        <div class=\"item\" *ngFor=\"let datos of listaCli let i= index\">\r\n          <div style=\"display: flex;\">\r\n            <img style=\"height:106px; width: 106px; \" src=\"./assets/Images/clientes/{{datos.idCliente}}.png\" onerror=\"this.src='./assets/Images/clientes/default.png';\">\r\n          </div>\r\n          <div id=\"datosCliente\">\r\n            <label class=\"numCliente \">{{'#'}}{{i+1}} <span class= \"nombreClienteEstilo \" > {{datos.nombreCliente}} </span></label>\r\n            <label class=\"datosCllienteEstilo \"> {{datos.cant}} {{'Piezas '}} · {{datos.numPL}}{{' Packing List'}}</label>\r\n            <div style=\"display: flex; flex-direction: row;\">\r\n              <label class=\"p1 \"> P1. {{datos.p1}} </label>\r\n              <label class=\"p2 \"> P2  {{datos.p2}} </label>\r\n              <label class=\"p3 \"> P3  {{datos.p3}} </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"imagenMas\" (click)=\"cambiarVistaPorCliente(datos)\">\r\n            <img type=image src=\"./assets/Images/Images/entrar.svg\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"mensajeSinDatos\" *ngIf=\"listaUniverso.length === 0\">\r\n        <label>NO HAY ENVIOS PAGADOS POR CLIENTE</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!listaClientes\" style=\"width: 100%;height: 100%\">\r\n<pn-finalizar-envio-cliente [idCliente]=\"idCliente\" [totalesBarra]=\"totalesBarra\" (regresarVistaP)=\"regresarVista($event)\" (finalizarEnvio)=\"actualizarDatos($event)\"></pn-finalizar-envio-cliente>\r\n</div>\r\n<footer class=\"footer \" style=\"  border: none; border-top: solid;\" *ngIf=\"listaClientes\">\r\n  <div class=\"datosFooter \" style=\"width: 100%;height: 100%; \">\r\n    <div class=\"Prioridad1 \">\r\n      <label class=\"p1 \">P1</label> Prioridad 1\r\n    </div>\r\n    <div class=\"Prioridad2 \">\r\n      <label class=\"p2 \">P2</label> Prioridad 2\r\n    </div>\r\n    <div class=\"Prioridad3 \">\r\n      <label class=\"p3 \">P3</label> Prioridad 3\r\n    </div>\r\n    <div class=\"Ambiente \">\r\n      <img class=\"img \" src='./assets/Images/ambiente.svg' /> Ambiente\r\n    </div>\r\n    <div class=\"Congelación \">\r\n      <img class=\"img \" src='./assets/Images/congelacion.svg' /> Congelación\r\n    </div>\r\n    <div class=\"Refrigeración \">\r\n      <img class=\"img \" src='./assets/Images/refrigeracion.svg' /> Refrigeración\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.scss":
/***/ (function(module, exports) {

module.exports = ".vPrincipalCli{width:100%;height:100%}.vPrincipalCli>div{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex}#divBoton{width:100%;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.botonIngresar{width:190px;height:50px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.tooltip .tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.tooltip:hover .tooltiptext{visibility:visible;opacity:0%}.tooltip{position:relative;display:inline-block;cursor:pointer}.tooltip .tooltiptext{visibility:hidden;width:148px;height:42px;background-color:#4c4c4c;text-align:left;padding:5px 10px 0px 0px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:2%;margin-left:-60px;font-size:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1;font-family:ArialMT;font-size:9px;color:#fff;text-align:center}.datosFooter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px;min-height:56px;max-height:56px}.Ambiente,.Congelación,.Prioridad1,.Prioridad2,.Prioridad3,.Refrigeración{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.img,.p1,.p2,.p3{margin-right:10px}.p1{color:#af3634;font-weight:bold}.p2{color:#eeb253;font-weight:bold}.p3{color:#63b236;font-weight:bold}.img{cursor:pointer}.placeholder{font-family:\"Helvetica\";font-size:30px;color:#aaa9af}.nombreClienteEstilo{font-family:Helvetica-Bold;font-size:18px;color:#008895;line-height:22px}.datosCllienteEstilo{font-family:Helvetica;font-size:16px;color:#666;width:193px;height:19px}.numCliente{font-family:Helvetica;font-size:18px;color:#000;line-height:22px;font-weight:bold;max-height:65px;overflow:hidden}@supports(-webkit-line-clamp: 3){.numCliente{display:block;display:-webkit-box !important;line-height:1.1;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 3){.numCliente{position:relative;line-height:1.1;overflow:hidden;width:100%}.numCliente:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;height:100%;-ms-flex-direction:row;flex-direction:row;position:relative}.catalogoClientes{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;width:100%;height:calc(100vh - 395px);min-width:800px}.item{width:420px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;height:140px;margin:10px 10px}.imagenMas{width:9%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer}.tabla-clientes{-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:calc(100vh - 395px);padding:20px 10px;min-width:900px;-webkit-box-sizing:border-box;box-sizing:border-box}.mensajeSinDatos{overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:calc(100vh - 395px);padding:20px 10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mensajeSinDatos>label{font-size:calc((100% + 6vw) / 2 );width:70%;text-align:center;font-family:Roboto;font-weight:bold;color:#eceef0}.encabezadoCliente{font-family:\"Novecento\";font-weight:bold;font-size:28px;color:#424242;text-align:left;padding-left:30px;width:187px;size:150px;height:50px;padding-top:20px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:50px;margin-top:10px;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:403.1px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:30px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{background:transparent;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:0px solid #000;width:380px;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.content-area{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}#datosCliente{width:64%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:20px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:110px;overflow:auto;line-height:1.5}"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trabajar_ruta_envio_por_cliente_service__ = __webpack_require__("./src/app/services/trabajar-ruta/envio-por-cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaClientesComponent = /** @class */ (function () {
    function ListaClientesComponent(_serviceEnvio, coreContainer) {
        this._serviceEnvio = _serviceEnvio;
        this.coreContainer = coreContainer;
        this.updateDates = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cambiarResolucion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cambioVarPrincipal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listaCli = [];
        this.listaUniverso = [];
        this.auxDataCurrent = [];
    }
    ListaClientesComponent.prototype.ngOnInit = function () {
        this.listaClientes = true;
        this.auxDataCurrent.push({ idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5 }, { idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5 }, { idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5 }, { idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5 }, { idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5 });
    };
    ListaClientesComponent.prototype.ngOnChanges = function () {
        this.obtenerCliente();
        if (this.cambioVista === true) {
            this.listaClientes = true;
        }
    };
    ListaClientesComponent.prototype.obtenerCliente = function () {
        var _this = this;
        this.listaCli = [];
        this.listaUniverso = [];
        this.coreContainer.openModal(0);
        this._serviceEnvio.obtenerCliente().subscribe(function (data) {
            if (data.current !== null && data.current && data.current.length > 0) {
                _this.listaCli = data.current;
                _this.listaUniverso = data.current;
            }
            _this.coreContainer.closeModal(0);
        }, function (error) {
            console.log(error);
            _this.coreContainer.closeModal(0);
        });
    };
    ListaClientesComponent.prototype.cambiarVistaPorCliente = function (datos) {
        this.buscar('');
        this.cambiarResolucion.emit(true);
        this.listaClientes = false;
        this.idCliente = datos.idCliente;
    };
    ListaClientesComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.listaCli = this.listaUniverso.slice();
        }
        else {
            this.listaUniverso.forEach(function (folio) {
                if (folio.nombreCliente.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.listaCli = searchArrayAux;
        }
    };
    ListaClientesComponent.prototype.regresarVista = function (valor) {
        this.updateDates.emit(false);
        this.listaClientes = true;
        this.buscar('');
        this.obtenerCliente();
        this.cambioVarPrincipal.emit(true);
    };
    ListaClientesComponent.prototype.actualizarDatos = function () {
        this.buscar('');
        this.obtenerCliente();
        this.updateDates.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ListaClientesComponent.prototype, "cambioVista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListaClientesComponent.prototype, "totalesBarra", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ListaClientesComponent.prototype, "updateDates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ListaClientesComponent.prototype, "cambiarResolucion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ListaClientesComponent.prototype, "cambioVarPrincipal", void 0);
    ListaClientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-lista-clientes',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_trabajar_ruta_envio_por_cliente_service__["a" /* EnvioPorClienteService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], ListaClientesComponent);
    return ListaClientesComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpCerrar\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <div class=\"alerta\" *ngIf=\"imagen\">\r\n        <img src=\"assets/Images/flecha_blanca_encirculoverde.svg\" alt=\"\" class=\"alert\" />\r\n      </div>\r\n      <label [style.padding-top]=\"imagen?'15px':'80px'\">\r\n        {{label}}\r\n      </label>\r\n    </div>\r\n    <div class=\"dvBotones\">\r\n      <div class=\"dvBoton\" (click)=\"cerrar()\">\r\n        <label>Aceptar</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:4}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:9;background:#fff;border-radius:20px;border:1px solid #008894}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;border-radius:19px 19px 0 0;color:#fff;font-family:Roboto;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px;padding-top:30px}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.popContenido>label{font-family:Roboto;font-weight:bold;font-size:30px}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff;font-weight:bold}#popUp>div.popContenido>.dvBotones>.dvBoton>label{font-family:\"Novecento\";font-size:21px;font-weight:bold;color:#fff;cursor:pointer;margin-top:-2px}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}.alerta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;padding-top:20px}.alerta img.alert{width:100%;height:100%}"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpFinalizarComponent; });
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

var PopUpFinalizarComponent = /** @class */ (function () {
    function PopUpFinalizarComponent() {
        this.desactivarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpFinalizarComponent.prototype.ngOnInit = function () {
        this.popUpCerrar = true;
    };
    PopUpFinalizarComponent.prototype.cerrar = function () {
        this.popUpCerrar = false;
        this.desactivarPop.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopUpFinalizarComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpFinalizarComponent.prototype, "imagen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpFinalizarComponent.prototype, "desactivarPop", void 0);
    PopUpFinalizarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-finalizar',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpFinalizarComponent);
    return PopUpFinalizarComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutaEnvioPorClienteRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ruta_envio_por_cliente_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RutaEnvioPorClienteRouting = /** @class */ (function () {
    function RutaEnvioPorClienteRouting() {
    }
    RutaEnvioPorClienteRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__ruta_envio_por_cliente_component__["a" /* RutaEnvioPorClienteComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], RutaEnvioPorClienteRouting);
    return RutaEnvioPorClienteRouting;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animationZoom\" style=\"width: 100%; height: 100%; flex-direction: row; display: flex; min-width: 800px; \">\r\n  <div  class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles  [items]=\"itemsMenu\"  style=\"width: 100%\"  *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div class=\"acordeon\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <div id=\"divPrincipal\" class=\"vPrincipal\">\r\n    <div class=\"bordeUno\" [style.min-width]=\"resolucion\" *ngIf=\"vistaPrin\">\r\n      <div style=\"cursor: pointer; height: 35px; width: 20px; \" *ngIf=\"!vistaPrincipal\" (click)=\"regresarVista()\">\r\n        <img class=\"img\" src='./assets/Images/regresar.svg' style=\"width: 100%; height: 100%;\"/>\r\n      </div>\r\n      <label class=\"etiqueta\">TRABAJAR RUTAS · ENVIO PAGADO POR CLIENTE</label>\r\n    </div>\r\n    <div class=\"bordeUnoEnvio\"  *ngIf=\"!vistaPrin\">\r\n      <div style=\"cursor: pointer; height: 35px; width: 20px; \" *ngIf=\"!vistaPrincipal\" (click)=\"regresarVista()\">\r\n        <img class=\"img\" src='./assets/Images/regresar.svg' style=\"width: 100%; height: 100%;\" />\r\n      </div>\r\n      <label class=\"etiqueta\">TRABAJAR RUTAS · ENVIO PAGADO POR CLIENTE</label>\r\n    </div>\r\n    <div class=\"datosG\">\r\n      <div class=\"subPadre min-width: 900px;\">\r\n        <div>\r\n          <div style=\"width:165px; height:40px; display: flex; flex-direction: column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; \">\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosObjetivo\"> TU OBJETIVO </label>\r\n            <label style=\"height: 50%; width: 100% \" class=\" estiloDatosObjetivo \"> DE PACKING LIST HOY </label>\r\n          </div>\r\n          <div style=\"max-width: 85px; min-width: 30px; height:75px; font-family: Roboto; font-size: 46px; font-weight:bold; color: #39B54A; text-align: center;\">\r\n            <label class=\"estiloNumero\"> {{objetivoDePackingList}}</label>\r\n          </div>\r\n          <img class=\"img\" src='./assets/Images/objetivo.svg' style=\"height: 65%;width:22px; padding-bottom: 3px; padding-left: 10px;\" />\r\n          <div style=\"padding-left: 19px\">\r\n            <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\r\n          </div>\r\n          <div style=\"width:145px; height:40px; display: flex; flex-direction:column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px; \">\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosTrabajado \"> PACKING LIST </label>\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosTrabajado \"> TRABAJADAS HOY </label>\r\n          </div>\r\n\r\n          <div class=\"tooltip\" style=\"max-width:85px; height:50px; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\r\n            <label class=\"estiloNumero\"> {{packing_trabajadas_hoy}}</label>\r\n          </div>\r\n          <div style=\"padding-left: 19px\">\r\n            <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\r\n          </div>\r\n          <div style=\"width:120px; height:45px; display: flex; flex-direction: column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px;\">\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> PACKING LIST</label>\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> DESEADAS </label>\r\n          </div>\r\n          <div class=\"tooltip\" style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\r\n            <label class=\"estiloNumero\"> {{packingListDeceada}}</label>\r\n            <label [style.color]=\"colorIndiceInspeccionDeceada\" style=\"font-size:16px; color:#D0021B; font-weight: bold; left: 40px; position: absolute; top: -7px\">\r\n              {{inspeccionDeceadaHastaElMomento}}</label>\r\n            <span class=\"tooltiptext\">{{mensajePackingDeseadas}}</span>\r\n          </div>\r\n          <div style=\"padding-left: 35px\"></div>\r\n          <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\r\n          <div style=\"width:113px; height:40px; display: flex; flex-direction: column;font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px; \">\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosMinimo\"> MÍNIMO DE</label>\r\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosMinimo\"> PACKING LIST </label>\r\n          </div>\r\n          <div class=\"tooltip\" style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\r\n            <label class=\"estiloNumero\"> {{minimoPackingDeInspeccion}}</label>\r\n            <label [style.color]=\"colorMinimoInspeccion\" style=\"font-size:16px; color:#D0021B; font-weight: bold; left: 40px; position: absolute; top: -7px\">\r\n              {{valorSigno}}{{minimaInspeccionHastaElMomento}}</label>\r\n            <span class=\"tooltiptext\">{{mensajeEmbDeseado}}</span>\r\n          </div>\r\n          <div [ngStyle]=\"{'flex-direction':'column', 'display':'flex','padding-left': '2%'}\">\r\n            <!-- <pq-pop-up-estadisticas></pq-pop-up-estadisticas>-->\r\n            <pq-pop-up-estadisticas *ngIf=\"activarGraficasPrioEsta\" [tipo]=\"'Paking list'\" [muestraHallazgos]=\"false\" [tipoTotales]=\"'Paking list'\" [totalesPorInspector]= \"totales_estadisticas\" [donaChart] = \"dataPrioridadEstadisticas\" [tipoGrafica]=\"graficasEstadisticas\" [activarGraficas]=\"false\"></pq-pop-up-estadisticas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- FIN DATOSC -->\r\n    <div [ngClass]=\"vistaPrin? 'rutasClientes': 'rutasEnvio'\">\r\n      <pn-lista-clientes (cambioVarPrincipal)=\"regresarVista()\" (cambiarResolucion)=\"cambiarResolucione($event)\" [cambioVista]=\"vistaPrincipal\" [totalesBarra]=\"totalesBarra\" (updateDates)=\"actualizarDatos($event)\"></pn-lista-clientes>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.scss":
/***/ (function(module, exports) {

module.exports = ".subPadre{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}.subPadre>div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:15px;padding-bottom:15px;width:100%}.aux{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;background:#e6e6e6}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.acordeon{position:absolute;padding-top:352px;right:0}.vPrincipal{width:100%;height:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-width:500px;overflow-x:scroll}.etiqueta{font-family:\"Novecento\";font-weight:300;font-size:25px;color:#5b5b5b;text-align:left;min-width:800px}.rutasClientes{min-width:900px;width:100%;overflow:auto;height:calc(100% - 123px)}.rutasEnvio{width:100%;min-width:1760px;overflow:auto;height:calc(100% - 123px)}.datosG{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:75px;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:800px}.bordeUno{height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:18px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:2px solid #000}.bordeUnoEnvio{min-width:1760px;height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:18px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:2px solid #000}.estiloDatosObjetivo,.estiloDatosTrabajado,.estiloDatos,.estiloDatosMinimo{font-size:16px;font-family:Roboto;font-weight:bold}.tooltip{position:relative;display:inline-block;cursor:pointer}.tooltip>.tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.tooltip:hover>.tooltiptext{visibility:visible;opacity:1;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip>.tooltiptext{visibility:hidden;width:130px;background-color:#424242;color:#fff;font-family:\"Roboto\";text-align:left;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:25%;margin-top:0px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}@media all and (max-width: 1405px){.estiloDatos{min-height:30px}}@media all and (min-height: 770px)and (max-height: 1130px)and (min-width: 1300px)and (max-width: 2572px){.bordeUnoEnvio,.rutasEnvio{min-width:1304px}}"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutaEnvioPorClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trabajar_ruta_envio_por_cliente_service__ = __webpack_require__("./src/app/services/trabajar-ruta/envio-por-cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RutaEnvioPorClienteComponent = /** @class */ (function () {
    function RutaEnvioPorClienteComponent(comunService, _serviceTrabajarRuta, _embalarService, core) {
        this.comunService = comunService;
        this._serviceTrabajarRuta = _serviceTrabajarRuta;
        this._embalarService = _embalarService;
        this.core = core;
        this.classAsideMenu = 'asideNormalMenu';
        this.objetivoDePackingList = 0;
        this.packing_trabajadas_hoy = 0;
        this.packingListDeceada = 0;
        this.inspeccionDeceadaHastaElMomento = 0;
        this.minimoPackingDeInspeccion = 0;
        this.minimaInspeccionHastaElMomento = 0;
        this.totalesBarra = [];
        this.inspeccionDeceadaHastaElMomentoMen = 0;
        this.listaPorAnio = [];
        this.listaPorQuincena = [];
        this.listaPorMes = [];
        this.arrayDatosYear = [];
        this.arrayLabelYear = [];
        this.listaQuincena = [];
        this.listaMes = [];
        this.listaYear = [];
        this.arrayLabelQuincena = [];
        this.arrayDatosQuincena = [];
        this.arrayDatosMes = [];
        this.arrayLabelMes = [];
        this.totEmb = 0;
        this.totAlmacen = 0;
        this.totEnvio = 0;
        this.totEnvioXClient = 0;
        this.filtroPrioUsuario = [];
        this.nuevaPrioridadEstadisticas = [];
        this.colorIndiceInspeccionDeceada = "#D0021B";
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
    }
    RutaEnvioPorClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'trabajarRutaCliente') {
                _this.activeMenu = false;
                _this.obtenerMenu();
                _this.obtenerObjetivos();
                _this.ObtenerEstadisticaUsuarioEnvioPL(_this.idUsuario);
            }
        });
        console.log('Soy usuario --> ', this.idUsuario);
        this.vistaPrincipal = true;
        this.vistaPrin = true;
        if (this.vistaPrin === true) {
            this.resolucion = '900px';
        }
        this.obtenerMenu();
        this.obtenerObjetivos();
        this.ObtenerEstadisticaUsuarioEnvioPL(this.idUsuario);
    };
    RutaEnvioPorClienteComponent.prototype.obtenerMenu = function () {
        var _this = this;
        this.core.openModal(1);
        this.activeMenu = false;
        this._embalarService.totalesGeneral().subscribe(function (data) {
            _this.totEmb = data.current.Embalar;
            _this.totAlmacen = data.current.Almacen;
            _this.totEnvio = data.current.Envio;
            _this.totEnvioXClient = data.current.EnvioXCliente;
            _this.itemsMenu = [
                { rol: 'RESPONSABLE DE ALMACEN ', active: true, menu: [
                        { nombre: 'Salidas Almacén', tipo: 'valor', valor: _this.totEmb, url: 'embalar', disable: false },
                        {
                            nombre: 'Trabajar rutas',
                            tipo: '',
                            valor: 0,
                            url: 'poolVisitas',
                            disable: true,
                            subMenu: [
                                { nombre: 'Almacén', tipo: 'valor', valor: _this.totAlmacen, url: 'almacen', select: false },
                                { nombre: 'Envío', tipo: 'valor', valor: _this.totEnvio, url: 'envio', select: false },
                                { nombre: 'Envio Pagado por cliente', tipo: 'valor', valor: _this.totEnvioXClient, url: 'trabajarRutaCliente', select: true }
                            ],
                            select: false
                        }
                    ] }
            ];
            _this.activeMenu = true;
            _this.core.closeModal(1);
        });
    };
    RutaEnvioPorClienteComponent.prototype.obtenerObjetivos = function () {
        var _this = this;
        this.totalesBarra = [];
        this.core.openModal(1);
        this._serviceTrabajarRuta.obtenerTotObjetivos().subscribe(function (data) {
            if (data.current['Hoy'] !== undefined) {
                _this.packing_trabajadas_hoy = data.current['Hoy'];
            }
            if (data.current['Deseadas'] !== undefined) {
                _this.packingListDeceada = data.current['Deseadas'];
                _this.inspeccionDeceadaHastaElMomento =
                    _this.packing_trabajadas_hoy - _this.packingListDeceada;
                _this.inspeccionDeceadaHastaElMomentoMen = -1 * _this.inspeccionDeceadaHastaElMomento;
                if (_this.inspeccionDeceadaHastaElMomentoMen === 0) {
                    _this.mensajePackingDeseadas = 'HAZ ALCANZADO LOS PAKING LIST DESEADOS';
                }
                else {
                    _this.mensajePackingDeseadas = 'ESTAS A' + ' ' + _this.inspeccionDeceadaHastaElMomentoMen + ' ' + 'PACKING LIST DESEADAS';
                }
            }
            if (data.current['Minimo'] !== undefined) {
                _this.minimoPackingDeInspeccion = data.current['Minimo'];
                /* this.minimaInspeccionHastaElMomento =
                   this.minimoPackingDeInspeccion - this.packing_trabajadas_hoy;*/
                if (_this.packing_trabajadas_hoy > _this.minimoPackingDeInspeccion) {
                    // this.cambiarColor = '#39B54A';
                    _this.minimaInspeccionHastaElMomento = _this.packing_trabajadas_hoy - _this.minimoPackingDeInspeccion;
                    _this.valorSigno = '+';
                    _this.colorMinimoInspeccion = '#39B54A';
                    _this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE ETREGAS';
                }
                else if (_this.minimoPackingDeInspeccion > _this.packing_trabajadas_hoy) {
                    // this.cambiarColor = '#D0021B';
                    _this.minimaInspeccionHastaElMomento = _this.minimoPackingDeInspeccion - _this.packing_trabajadas_hoy;
                    _this.valorSigno = '-';
                    _this.colorMinimoInspeccion = '#D0021B'; //rojo
                    if (_this.minimaInspeccionHastaElMomento > 1) {
                        _this.mensajeEmbDeseado = 'ESTAS A' + ' ' + _this.minimaInspeccionHastaElMomento + ' ' + 'PIEZAS DE SUPERAR EL MÍNIMO DE ENTREGAS';
                    }
                    else {
                        _this.mensajeEmbDeseado = 'ESTAS A' + ' ' + _this.minimaInspeccionHastaElMomento + ' ' + 'PIEZA DE SUPERAR EL MÍNIMO DE ENTREGA';
                    }
                }
                else if (_this.packing_trabajadas_hoy === _this.minimoPackingDeInspeccion) {
                    // this.cambiarColor = '#FBB03B';
                    _this.minimaInspeccionHastaElMomento = _this.packing_trabajadas_hoy - _this.minimoPackingDeInspeccion;
                    _this.valorSigno = ' ';
                    _this.mensajeEmbDeseado = 'HAZ ALCANZADO EL MÍNIMO DE ENTREGAS';
                }
            }
            if (data.current['Objetivo'] !== undefined) {
                _this.objetivoDePackingList = data.current['Objetivo'];
            }
            _this.totalesBarra.push({ totales: _this.packingListDeceada, hechas: _this.packing_trabajadas_hoy });
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
            console.log(error);
        });
    };
    RutaEnvioPorClienteComponent.prototype.ObtenerEstadisticaUsuarioEnvioPL = function (idUsuario) {
        var _this = this;
        this.activarGraficasPrioEsta = false;
        var totPza = 0;
        var totPartidas = 0;
        var totPzaPrio = 0;
        var totPzaPrio1 = 0;
        var totPzaPrio2 = 0;
        var totPzaPrio3 = 0;
        this.listaQuincena = { listaLabel: [''], listaDatos: [0] };
        this.listaMes = { listaLabel: [''], listaDatos: [0] };
        this.listaYear = { listaLabel: [''], listaDatos: [0] };
        this.listaPrioridadUsuarioEstadisticas = [];
        this.core.openModal(1);
        this._serviceTrabajarRuta.obtenerPrioridades(idUsuario).subscribe(function (data) {
            console.log('Soy data prioridades -->', data.current);
            /////////////////////////////////////////////////////////////////////
            if (data.current.Prioridad !== undefined) {
                if (data.current.AllYears) {
                    _this.listaAnios = data.current.AllYears;
                }
                if (data.current.Prioridad) {
                    _this.listaPrioridadEstadisticas = data.current.Prioridad;
                }
                if (data.current.Year) {
                    _this.listaPorAnio = data.current.Year;
                    _this.listaPorAnio.forEach(function (inde) {
                        _this.arrayLabelYear.push(inde.tiempo);
                        _this.arrayDatosYear.push(inde.totalPiezas);
                    });
                }
                if (data.current.Mes) {
                    _this.listaPorMes = data.current.Mes;
                    _this.listaPorMes.forEach(function (inde) {
                        _this.arrayLabelMes.push(inde.tiempo);
                        _this.arrayDatosMes.push(inde.totalPiezas);
                    });
                }
                if (data.current.Quincena) {
                    _this.listaPorQuincena = data.current.Quincena;
                    _this.listaPorQuincena.forEach(function (inde) {
                        _this.arrayLabelQuincena.push(inde.tiempo);
                        _this.arrayDatosQuincena.push(inde.totalPiezas);
                    });
                }
                _this.listaPrioridadEstadisticasDatos = data.current.Prioridad;
                ///// Se asignan a las listas los datos para la grafica de puntos
                _this.listaQuincena = { listaLabel: _this.arrayLabelQuincena, listaDatos: _this.arrayDatosQuincena };
                _this.listaMes = { listaLabel: _this.arrayLabelMes, listaDatos: _this.arrayDatosMes };
                _this.listaYear = { listaLabel: _this.arrayLabelYear, listaDatos: _this.arrayDatosYear };
                ////// Aqui termina
                for (var i = 0; i < _this.listaAnios.length; i++) {
                    totPza += _this.listaAnios[i].totalPiezas;
                    totPartidas += _this.listaAnios[i].totalPl;
                }
                for (var i = 0; i < _this.listaPrioridadEstadisticasDatos.length; i++) {
                    if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P1') {
                        totPzaPrio1 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                    else if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P2') {
                        totPzaPrio2 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                    else if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P3') {
                        totPzaPrio3 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                }
                //////////////////////////////////////// GRAFICAS DONUT CHARTS //////////////////7///////////////
                _this.listaPrioridadUsuarioEstadisticas = [{ 'prioridad': 'Prioridad 1', 'pieza': totPzaPrio1 },
                    { 'prioridad': 'Prioridad 2', 'pieza': totPzaPrio2 },
                    { 'prioridad': 'Prioridad 3', 'pieza': totPzaPrio3 }];
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
                _this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: _this.listaQuincena, listaMes: _this.listaMes, listaAnio: _this.listaYear };
            }
            else {
                //////////////////////////////////////// GRAFICAS DONUT CHARTS /////////////////////////////////
                _this.listaPrioridadUsuarioEstadisticas = [{ 'prioridad': 'Ninguna', 'pieza': 0 }];
                _this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: _this.listaQuincena, listaMes: _this.listaMes, listaAnio: _this.listaYear };
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
            }
            _this.core.closeModal(1);
        });
    };
    // Metodo para las variables de la graficas estadisticas
    RutaEnvioPorClienteComponent.prototype.limpiarVariablesGraficaEstadisticas = function () {
        this.core.openModal(1);
        this.filtroPrioUsuario = [];
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var valor = _a[_i];
            this.filtroPrioUsuario.push(valor.prioridad);
        }
        var valoresC = [];
        var valoresPrioEst = [];
        for (var _b = 0, _c = this.listaPrioridadUsuarioEstadisticas; _b < _c.length; _b++) {
            var nombre = _c[_b];
            valoresPrioEst.push([0]);
            valoresC.push(0);
        }
        if (this.listaPrioridadUsuarioEstadisticas.length > 1) {
            this.dataPrioridadEstadisticas = {
                titulo: 'Totales',
                labels: this.filtroPrioUsuario,
                valores: valoresC,
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: valoresPrioEst
            };
            this.graficasEstadisticas = 'Prioridades';
        }
        else {
            this.dataPrioridadEstadisticas = {
                titulo: 'Totales',
                labels: [""],
                valores: [1],
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: [[0], [0]]
            };
            this.graficasEstadisticas = 'Gris';
        }
        this.core.closeModal(1);
    };
    RutaEnvioPorClienteComponent.prototype.calcularDatosGraficaEstadisticas = function () {
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var usuario = _a[_i];
            this.llenarTotales(this.dataPrioridadEstadisticas, usuario, 'PRIORIDADESESTADISTICAS');
        }
    };
    RutaEnvioPorClienteComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        this.core.openModal(1);
        switch (graficaElegida) {
            case 'PRIORIDADESESTADISTICAS':
                var posicionP4 = this.filtroPrioUsuario.indexOf(elemento.prioridad);
                if (this.nuevaPrioridadEstadisticas.indexOf(elemento.prioridad) === -1) {
                    this.nuevaPrioridadEstadisticas.push(elemento.prioridad);
                }
                total.valuesExtrasHover[posicionP4][0] += elemento.pieza;
                total.valuesExtras[0] += elemento.pieza; // Total de Partidas
                total.valores[posicionP4] += elemento.pieza; // +(elemento.monto.toFixed(2)); //Monto total
                this.activarGraficasPrioEsta = true; // ACTIVAR EL COMPONENTE PARA LA GRAFICA DE DONA PRIORIDADES USUARIO
                this.core.closeModal(1);
                break;
            default:
                this.core.closeModal(1);
                break;
        }
    };
    RutaEnvioPorClienteComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    RutaEnvioPorClienteComponent.prototype.regresarVista = function () {
        this.vistaPrincipal = true;
        this.obtenerMenu();
    };
    RutaEnvioPorClienteComponent.prototype.cambiarResolucione = function (valor) {
        this.vistaPrincipal = false;
        this.vistaPrin = false;
        if (this.vistaPrin === false) {
            this.resolucion = '1700px';
        }
    };
    RutaEnvioPorClienteComponent.prototype.actualizarDatos = function (valor) {
        if (valor === false) {
            this.activeMenu = false;
            this.vistaPrincipal = true;
            this.obtenerMenu();
        }
        this.obtenerObjetivos();
        this.ObtenerEstadisticaUsuarioEnvioPL(this.idUsuario);
    };
    RutaEnvioPorClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-ruta-envio-por-cliente',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__services_trabajar_ruta_envio_por_cliente_service__["a" /* EnvioPorClienteService */], __WEBPACK_IMPORTED_MODULE_3__services_embalar_embalar_service__["a" /* EmbalarService */], __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], RutaEnvioPorClienteComponent);
    return RutaEnvioPorClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaEnvioPorClienteModule", function() { return RutaEnvioPorClienteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ruta_envio_por_cliente_routing__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ruta_envio_por_cliente_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pop_up_estadisticas_pop_up_estadisticas_module__ = __webpack_require__("./src/app/components/shared/pop-up-estadisticas/pop-up-estadisticas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lista_clientes_lista_clientes_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__finalizar_envio_cliente_finalizar_envio_cliente_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__barra_prioridades_por_cliente_barra_prioridades_por_cliente_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__barra_progreso_por_cliente_barra_progreso_por_cliente_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pop_up_finalizar_pop_up_finalizar_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var RutaEnvioPorClienteModule = /** @class */ (function () {
    function RutaEnvioPorClienteModule() {
    }
    RutaEnvioPorClienteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ruta_envio_por_cliente_routing__["a" /* RutaEnvioPorClienteRouting */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_pop_up_estadisticas_pop_up_estadisticas_module__["a" /* PopUpEstadisticasModule */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_13__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_14__shared_alerta_alerta_module__["a" /* AlertaModule */],
                __WEBPACK_IMPORTED_MODULE_16__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__ruta_envio_por_cliente_component__["a" /* RutaEnvioPorClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_7__lista_clientes_lista_clientes_component__["a" /* ListaClientesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__finalizar_envio_cliente_finalizar_envio_cliente_component__["a" /* FinalizarEnvioClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_9__barra_prioridades_por_cliente_barra_prioridades_por_cliente_component__["a" /* BarraPrioridadesPorClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_11__barra_progreso_por_cliente_barra_progreso_por_cliente_component__["a" /* BarraProgresoPorClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pop_up_finalizar_pop_up_finalizar_component__["a" /* PopUpFinalizarComponent */]
            ]
        })
    ], RutaEnvioPorClienteModule);
    return RutaEnvioPorClienteModule;
}());



/***/ })

});
//# sourceMappingURL=ruta-envio-por-cliente.module.chunk.js.map