webpackJsonp(["seguimiento.module"],{

/***/ "./src/app/class/gestion/ventas/SeguimientoCotizacionAgrupada.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguimientoCotizacionAgrupada; });
var SeguimientoCotizacionAgrupada = /** @class */ (function () {
    function SeguimientoCotizacionAgrupada() {
        this._cotizaciones = new Array();
    }
    SeguimientoCotizacionAgrupada.prototype.getMontoCotizacion = function () {
        return this._montoCotizacion;
    };
    SeguimientoCotizacionAgrupada.prototype.setMontoCotizacion = function (value) {
        this._montoCotizacion = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getFolioCotizacion = function () {
        return this._folioCotizacion;
    };
    SeguimientoCotizacionAgrupada.prototype.setFolioCotizacion = function (value) {
        this._folioCotizacion = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getMarca = function () {
        return this._marca;
    };
    SeguimientoCotizacionAgrupada.prototype.setMarca = function (value) {
        this._marca = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getTipoProducto = function () {
        return this._tipoProduct;
    };
    SeguimientoCotizacionAgrupada.prototype.setTipoProducto = function (value) {
        this._tipoProduct = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getPartidas = function () {
        return this._partidas;
    };
    SeguimientoCotizacionAgrupada.prototype.setPartidas = function (value) {
        this._partidas = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getNivelIngreso = function () {
        return this._nivelIngreso;
    };
    SeguimientoCotizacionAgrupada.prototype.setNivelIngreso = function (value) {
        this._nivelIngreso = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getTipoSeguimiento = function () {
        return this._tipoSeguimiento;
    };
    SeguimientoCotizacionAgrupada.prototype.setTipoSeguimiento = function (value) {
        this._tipoSeguimiento = value;
    };
    SeguimientoCotizacionAgrupada.prototype.SeguimientoCotizacionAgrupada = function () {
        this.setUltimo("");
        //trace("declara objeto");
        this._nombreVendedor = "Sin Asignar";
        this._nombreESAC = "Sin Asignar";
        this._monto = 0;
    };
    SeguimientoCotizacionAgrupada.prototype.getMonedaCotizacionPartida = function () {
        return this._monedaCotizacionPartida;
    };
    SeguimientoCotizacionAgrupada.prototype.setMonedaCotizacionPartida = function (value) {
        this._monedaCotizacionPartida = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getEstatusMasCritico = function () {
        return this._estatusMasCritico;
    };
    SeguimientoCotizacionAgrupada.prototype.setEstatusMasCritico = function (value) {
        this._estatusMasCritico = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getNombreESAC = function () {
        return this._nombreESAC;
    };
    SeguimientoCotizacionAgrupada.prototype.setNombreESAC = function (value) {
        if (value != null && value != "") {
            this._nombreESAC = value;
        }
        else {
            this._nombreESAC = "";
        }
    };
    SeguimientoCotizacionAgrupada.prototype.getNumClientes = function () {
        return this._numClientes;
    };
    SeguimientoCotizacionAgrupada.prototype.setNumClientes = function (value) {
        this._numClientes = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getTotalPartidas = function () {
        return this._totalPartidas;
    };
    SeguimientoCotizacionAgrupada.prototype.setTotalPartidas = function (value) {
        this._totalPartidas = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getNombreVendedor = function () {
        return this._nombreVendedor;
    };
    SeguimientoCotizacionAgrupada.prototype.setNombreVendedor = function (value) {
        if (value != null) {
            this._nombreVendedor = value;
        }
        else {
            if (this._nombreVendedor == "")
                this._nombreVendedor = "Sin Asignar";
        }
    };
    SeguimientoCotizacionAgrupada.prototype.getMontoString = function () {
        //	this._montoString = '$ ' + UtilsFormatosNumericos.precisionADosDecimalesConComas(monto);
        return this._montoString;
    };
    SeguimientoCotizacionAgrupada.prototype.setMontoString = function (value) {
        this._montoString = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getMonto = function () {
        return this._monto;
    };
    SeguimientoCotizacionAgrupada.prototype.setMonto = function (value) {
        this._monto = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getPiezas = function () {
        return this._piezas;
    };
    SeguimientoCotizacionAgrupada.prototype.setPiezas = function (value) {
        this._piezas = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getUltimo = function () {
        return this._ultimo;
    };
    SeguimientoCotizacionAgrupada.prototype.setUltimo = function (value) {
        this._ultimo = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getFechaSiguienteContacto = function () {
        return this._fechaSiguienteContacto;
    };
    SeguimientoCotizacionAgrupada.prototype.setFechaSiguienteContacto = function (value) {
        this._fechaSiguienteContacto = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getTotalCotizaciones = function () {
        return this._totalCotizaciones;
    };
    SeguimientoCotizacionAgrupada.prototype.setTotalCotizaciones = function (value) {
        this._totalCotizaciones = value;
    };
    SeguimientoCotizacionAgrupada.prototype.getNombreCliente = function () {
        return this._nombreCliente;
    };
    SeguimientoCotizacionAgrupada.prototype.setNombreCliente = function (value) {
        if (value != null) {
            this._nombreCliente = value;
        }
        else {
            this._nombreCliente = "";
        }
    };
    SeguimientoCotizacionAgrupada.prototype.getCotizaciones = function () {
        return this._cotizaciones;
    };
    SeguimientoCotizacionAgrupada.prototype.setCotizaciones = function (value) {
        this._cotizaciones = value;
        this.setPiezas(0);
        this.setMonto(0);
        this.setTotalPartidas(0);
        this.setNumClientes(0);
        if (value.length > 0) {
            this.setNombreCliente(value[0].nombreCliente);
            this.setNombreVendedor(value[0].nombreEV);
            this.setNombreESAC(value[0].nombreVendedor);
            this.setTotalCotizaciones(value.length);
            var p = 0;
            var q = 0;
            for (var m = 0; m < value.length; m++) {
                this._totalPartidas = this._totalPartidas + value[m].partidas;
                p = p + value[m].piezas;
                q = q + value[m].montoCotizacion;
            }
            this.setPiezas(p);
            this.setMonto(q);
        }
        console.log("ENTROOOOOOOO");
    };
    SeguimientoCotizacionAgrupada.prototype.getNumFila = function () {
        return this._numFila;
    };
    SeguimientoCotizacionAgrupada.prototype.setNumFila = function (value) {
        this._numFila = value;
    };
    return SeguimientoCotizacionAgrupada;
}());



/***/ }),

/***/ "./src/app/components/gestion/reportes/seguimiento/seguimiento-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguimientoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seguimiento_component__ = __webpack_require__("./src/app/components/gestion/reportes/seguimiento/seguimiento.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeguimientoRoutingModule = /** @class */ (function () {
    function SeguimientoRoutingModule() {
    }
    SeguimientoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__seguimiento_component__["a" /* SeguimientoComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], SeguimientoRoutingModule);
    return SeguimientoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/reportes/seguimiento/seguimiento.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div (click)=\"backMenu()\">\r\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\r\n  </div>\r\n  REPORTE |\r\n  <div>SEGUIMIENTO</div>\r\n  <!-- <div *ngIf=\"detalle\"  class=\"regresar\">CONSULTA DE FACTURACIÓN</div>\r\n  <div *ngIf=\"detalle\">|</div>\r\n  <div *ngIf=\"detalle\">DETALLES</div>-->\r\n</div>\r\n<div class=\"consultaResultados\" [ngClass]=\"'resultados' + (!showGraphic ? ' visible' : '')\" >\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"filtros\">\r\n      <div></div>\r\n      <div>\r\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\r\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\r\n      </div>\r\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\r\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\r\n            Y la propiedad IsLoader como verdadera\r\n        -->\r\n        <div>\r\n          <div class=\"divSeguimiento\" [style.background]=\"tipoCotizacion==1?'#008895':''\" [style.color]=\"tipoCotizacion==1?'#ffff':''\"\r\n            (click)=\"obtenerSeguimiento()\">\r\n            <div style=\"display: flex;\">\r\n              <div style=\"margin-left: 4px;\" *ngIf=\"tipoCotizacion==1\">\r\n                <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/reportes/seguimiento/seguimiento_b.svg\" alt=\"\">\r\n              </div>\r\n              <div style=\"margin-left: 4px;\" *ngIf=\"tipoCotizacion!=1\">\r\n                <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/reportes/seguimiento/seguimiento_n.svg\" alt=\"\">\r\n              </div>\r\n              <div style=\"display: flex; align-items: center; margin-left: 4px;\">Seguimiento</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"divConfirmacion\" [style.background]=\"tipoCotizacion==2?'#008895':''\" [style.color]=\"tipoCotizacion==2?'#ffff':''\"\r\n            (click)=\"obtenerConfirmacion()\">\r\n            <div style=\"display: flex;\">\r\n              <div style=\"margin-left: 4px;\" *ngIf=\"tipoCotizacion==2\">\r\n                <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/reportes/seguimiento/confirmacion_b.svg\" alt=\"\">\r\n              </div>\r\n              <div style=\"margin-left: 4px;\" *ngIf=\"tipoCotizacion!=2\">\r\n                <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/reportes/seguimiento/confirmacion_n.svg\" alt=\"\">\r\n              </div>\r\n              <div style=\"display: flex; align-items: center; margin-left: 4px;\">Confirmación</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"divCancelar\" [style.background]=\"tipoCotizacion==3?'#008895':''\" [style.color]=\"tipoCotizacion==3?'#ffff':''\"\r\n            (click)=\"obtenerCancelable()\">\r\n            <div style=\"display: flex;\">\r\n              <div style=\"margin-left: 4px;\" *ngIf=\"tipoCotizacion==3\">\r\n                <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/reportes/seguimiento/seguimiento_b.svg\" alt=\"\">\r\n              </div>\r\n              <div style=\"margin-left: 4px;\" *ngIf=\"tipoCotizacion!=3\">\r\n                <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/reportes/seguimiento/seguimiento_n.svg\" alt=\"\">\r\n              </div>\r\n              <div style=\"display: flex; align-items: center; margin-left: 4px;\">Cancelable</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"isThereData;else loader\">\r\n\r\n\r\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" (diahoy)=\"filtroCuadros(4,1)\" (todas)=\"filtroCuadros(5,1)\"\r\n            (diaManana)=\"filtroCuadros(6,1)\" (diaPasado)=\"filtroCuadros(7)\" (diaPospasado)=\"filtroCuadros(8,1)\" (diaFuturo)=\"filtroCuadros(9,1)\" (diaAyer)=\"filtroCuadros(3,1)\"\r\n            (diaAntier)=\"filtroCuadros(2,1)\" (diaAnteAntier)=\"filtroCuadros(1,1)\" (diaPa)=\"filtroCuadros(0,1)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\r\n            (grafica)=\"showGraphicPanel()\" [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\" [isSeguimiento]=\"isSeguimiento\"\r\n            [activarHoy]=\"activaGraficaHoy\" [activarTodo]=\"activaGraficaTodo\" [activarManana]=\"activaGraficaManana\" [activarPasadoMa]=\"activaGraficaPasadoMa\" [activarPosPasado]=\"activaGraficaPosPasado\" [activarFuturo]=\"activaGraficaFuturo\" [activarAyer]=\"activaGraficaAyer\"\r\n            [activarAntier]=\"activaGraficaAntier\" [activarAnteAntier]=\"activaGraficaAnteAntier\" [activarPasado]=\"activarPasado\" [tasa]=\"tazaRealizacion\"\r\n            ></gestion-filter>\r\n\r\n        </div>\r\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\r\n            una propiedad\r\n            IsLoader como Falsa-->\r\n\r\n        <ng-template #loader>\r\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\r\n        </ng-template>\r\n\r\n      </div>\r\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\r\n\r\n        <!--<div>\r\n          <pq-radio-button [widthTotal]=\"'60px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\"\r\n            (emitItem)=\"radioRapida($event)\" [width]=\"'15px'\"></pq-radio-button>\r\n        </div>-->\r\n        <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsLoader]=\"isThereData\"\r\n          [Clear]=\"Clear\" [istextboxSeguimiento]=\"istextboxSeguimiento\" style=\"width: 100%\" [isSeguimiento]=\"isSeguimiento\"></gestion-filter>\r\n        <!--  <div [formGroup]=\"filtroForm\">\r\n            <span>Búsqueda por Folio</span>\r\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\r\n          </div>-->\r\n        <!--<div (click)=\"filtroRapido()\">\r\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\r\n        </div>-->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- Fin Filtros -->\r\n  <!-- Seccion detalle -->\r\n  <div class=\"consultaDetalles\" *ngIf=\"!showGraphic\">\r\n    <div *ngIf=\"!detalle\" class=\"contenidoFactura\">\r\n      <div class=\"detalleFactura\">\r\n        <div style=\" display:flex\">\r\n          <div class=\"rangoVerde\" [style.background]=\"rango==1?'#008895':''\" [style.color]=\"rango==1?'#ffff':''\" (click)=\"todo()\">Todo</div>\r\n          <div class=\"rangoBlanco\" [style.background]=\"rango==2?'#008895':''\" [style.color]=\"rango==2?'#ffff':''\" (click)=\"diezmil()\">>$10,000</div>\r\n          <div class=\"rangoBlanco\" [style.background]=\"rango==3?'#008895':''\" [style.color]=\"rango==3?'#ffff':''\" (click)=\"dosmil()\">$2,001-$10,000</div>\r\n          <div class=\"rangoBlanco\" [style.background]=\"rango==4?'#008895':''\" [style.color]=\"rango==4?'#ffff':''\" (click)=\"cero()\">$0,000-2,000</div>\r\n        </div>\r\n        <div>\r\n          <div style=\"margin-top: 19px; margin-bottom: 21px; display: flex;\"> {{titulo}}/ {{today}}  {{numeroDia}} &nbsp;\r\n            <span *ngIf=\"tipoCotizacion===1\">Seguimiento</span>\r\n            <span *ngIf=\"tipoCotizacion===2\">Confirmación</span>\r\n            <span *ngIf=\"tipoCotizacion===3\">Cancelable</span>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div style=\"min-height: 115px;\" [ngClass]=\"lstLineaTiempoActive[i]\" *ngFor=\"let item of informacion; let i = index\"   (click)=\"filtrarClientePanelDos(item.nombreCliente)\" (click)=\"lineaTiempo(i)\" >\r\n            <div class=\"dfSelect\"></div>\r\n            <div>\r\n              <div>\r\n                <div style=\"display: flex;font-family: 'Roboto-Bold'\"># {{i+1}} ·   \r\n                    <div *ngIf=\"item.numCotizaciones > 1\"> {{item.numCotizaciones}} Cotizaciones </div>\r\n                    <div *ngIf=\"item.numCotizaciones<=1\">{{item.numCotizaciones}} Cotización </div>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <div>\r\n                  <div> {{item.nombreCliente}} </div>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <div style=\"font-family: 'Roboto-Bold'\"> {{item.monto | acFormatMoney}} USD</div>\r\n              </div>\r\n              <div>\r\n                <div style=\"display: flex\">ESAC:&nbsp;\r\n                  <div style=\" color: #008895;\"> {{item.nombreEsac}} </div>\r\n                </div>\r\n                <div style=\"display: flex\">EVT:&nbsp;\r\n                  <div style=\" color: #008895;\"> {{item.nombreEVT}} </div>\r\n                </div>\r\n                <div style=\"display: flex\">EVC:&nbsp;\r\n                  <div style=\" color: #008895;\"> {{item.nombreEV}} </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div style=\"display: flex; justify-content: center; height: 50px; align-items: center\">\r\n            Cliente<span *ngIf=\"lstAux1.length != 1\">s</span>:\r\n            <span>{{informacion.length}}</span>\r\n            <span> TOTAL: {{montoTotal | acFormatMoney}} USD</span>\r\n          \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"lineaTiempo\">\r\n        <div>\r\n          <div style=\"height: 62px;border-bottom: 1px solid #979797; align-items: center;display: flex;\">{{nombreCliente}}</div>\r\n        </div>\r\n        <div>\r\n          <div [ngClass]=\"lstResultadoCotizaciones[i]\" *ngFor=\"let item of tempCotizaciones; let i = index\" (click)=\"obtenerPartidasPorCotizacionEnSeguimiento(i)\"  (click)=\"cotizaciones(i)\"   >\r\n\r\n            <div class=\"ltSelect\"></div>\r\n            <div>\r\n              <div>\r\n                <div>\r\n                  <span class=\"link\" style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Cotizaciones/'+item.facturadoPor+'/'+item.numeroFactura+'.pdf')\">{{item.folioCotizacion}}</span>\r\n                  ·\r\n                  <span class=\"link\" style=\" color: #008895;    margin-right: 80px;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+item.cpedido+'.pdf')\">{{item.folio}}</span>\r\n                </div>\r\n                <div style=\"display: flex;\">\r\n                  <div style=\"color:#9CC100\" *ngIf=\"item.enTiempo=='ET'\"> {{item.enTiempo}} ·&nbsp; </div>\r\n                  <div style=\"color:#AD0404 \" *ngIf=\"item.enTiempo=='FT'\"> {{item.enTiempo}} ·&nbsp; </div>\r\n                  <div *ngIf=\"item.enTiempo==null\"> Pendiente ·&nbsp; </div>\r\n                  <div *ngIf=\"item.diasAtraso<0 || item.diasAtraso===0\">0 días</div>\r\n                  <div *ngIf=\"item.diasAtraso>0\">{{item.diasAtraso}} días</div>\r\n                </div>\r\n                <div style=\"display: flex\">\r\n                  <div style=\"width: 320px;\">{{item.monto | acFormatMoney}} USD · {{item.piezas}} pzas\r\n                  </div>\r\n                  <div style=\" color: #008895;\">{{item.estadoSeguimiento}} </div>\r\n                </div>\r\n              </div>\r\n              <div></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"text-align: center;\">\r\n          <div>\r\n            <span>{{tempCotizaciones.length}}</span> Cotizacio\r\n            <span *ngIf=\"tempCotizaciones.length>1\">nes</span> ·{{tercerSuma | acFormatMoney}} USD\r\n            <div>Total piezas: {{piezasSuma}}</div>\r\n            <div>TOTAL</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"detalleFactura\">\r\n        <div></div>\r\n        <div style=\"display: flex\">\r\n          <div style=\"margin-top: 20px;\">{{folio}}</div> <div *ngIf=\"radarActivo==false\" (click)=\"radar(false)\" style=\"margin-top: 20px;margin-left: 335px;\"><img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/reportes/seguimiento/localizacion_1.svg\" alt=\"\"></div>\r\n          <div  *ngIf=\"radarActivo==true\" (click)=\"radar(true)\" style=\"margin-top: 20px;margin-left: 335px;\"><img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/reportes/seguimiento/localizacion_2.svg\" alt=\"\"></div>\r\n        </div>\r\n        <div>\r\n          <div style=\"min-height: 150px;\" [ngClass]=\"lstResultadoPartidas[i]\" *ngFor=\"let item of lstInfo; let i = index\" (click)=\"cuartoSegmento(i)\" (click)=\"partidas(i)\">\r\n            <div class=\"dfSelect\"></div>\r\n            <div>\r\n              <div>\r\n                <div style=\"display: flex\">\r\n                  <div style=\"color: #424242;font-family: Roboto-Bold;width: 315px;\">#{{i+1}} · {{item.cantidad}} pz · $ {{item.monto}} {{item.monedaCotiza}} </div> Siguiente:&nbsp;\r\n                  <div *ngIf=\"item.fechaSiguiente!=null\"> {{item.fechaSiguiente | date :'dd-MM-yy'}}</div>\r\n                  <div *ngIf=\"item.fechaSiguiente===null\"> Pendiente</div>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <div style=\"font-size: 14px; \">{{item.concepto}} </div>\r\n              </div>\r\n              <div>\r\n                <div style=\"font-size: 14px;color: #989A99;\">{{item.tipo}} · {{item.control}}</div>\r\n              </div>\r\n              <div>\r\n                <div style=\"display: flex\">\r\n                  <div style=\"font-size: 14px;color: #989A99;width: 380px; display: flex;\">PU: $ {{item.precio}} Dólares </div>\r\n                  <div style=\" color: #008895;\"> {{item.estado}} </div>\r\n                \r\n                </div>\r\n                <!--<div style=\"display: flex\"> </div>-->\r\n              </div>\r\n              <div><img height=\"15px\" width=\"15px\" src=\"assets/Images/gestion/reportes/seguimiento/localizacion_1.svg\" alt=\"\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div>\r\n          </div>\r\n        </div>\r\n        <div style=\"text-align: center;\">\r\n          <div>\r\n            <span>{{sumaPartidas}}</span> Partidas · {{suma  | acFormatMoney}} USD\r\n            <div>Total piezas: {{sumaPiezas}}</div>\r\n            <div>TOTAL</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"historial\">\r\n        <div>\r\n          <div style=\"height:62px;align-items:center;display: flex;border-bottom: 1px solid #979797; \">Historial</div>\r\n        </div>\r\n        <div>\r\n          <div *ngFor=\"let item of lstElementos; let i = index\" style=\"border-bottom: 1px solid black;\" >\r\n            <div *ngIf=\"lstElementos.length!=0\">\r\n                <div class=\"ltSelect\"></div>\r\n                <div *ngIf=\"item!=null && item!= undefined\">\r\n                  <div>\r\n                    <div># {{i+1}} · {{item.estadoFinal}} <div  [ngClass]=\"item.estado=='Confirmacion' || item.estado=='En S3'?'circleGreen':'circleRed'\"></div> </div>\r\n                    <div style=\" color: #008895;\">{{item.vendedor}}</div>\r\n                    <div>\r\n                      <div>Origen:</div>\r\n                      <div>{{item.estado}}</div>\r\n                      <div>Contacto:</div>\r\n                      <div>{{item.contacto}}</div>\r\n                      <div>FER:</div>\r\n                      <div>{{item.fer |  date :'dd-MM-yy'}}</div>\r\n                      <div>FR:</div>\r\n                      <div *ngIf=\"item.fr===null\">Pendiente</div>\r\n                      <div *ngIf=\"item.fr!=null\">{{item.fr |date :'dd-MM-yy'}}</div>\r\n                      <div>Comentarios:</div>\r\n                      <div>{{item.comentarios}}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            \r\n          </div>\r\n          <div *ngIf=\"lstElementos.length===0\">\r\n              Sin información\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Fin detalle -->\r\n  <!-- Seccion Graficas -->\r\n  <div style=\"position: relative;\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\" *ngIf=\"showGraphic\">\r\n    <div [ngClass]=\"'graphics-panel-container' + (showGraphic ? ' visible' : '')\" [style.top]=\"topGraphics\" style=\"    height: calc(100vh - 171px);\">\r\n      <div class=\"graphics-panel-option\">\r\n        <img src=\"assets/Images/gestion/images/tablaminigris.svg\" (click)=\"showTablePanel()\">\r\n      </div>\r\n      <div class=\"graphics-container\" *ngIf=\"refrescar\" >\r\n        <div class=\"donut-container\" *ngFor=\"let item of graficas; let i = index\">\r\n          <p class=\"donut-title\">{{item}}</p>\r\n          <div id=\"asistencia-canvas\" class=\"canvas-container\" >\r\n            <pn-donut-chart [idGrafica]=\"i+'asis'\" [data]=\"graficasValores[i]\" [tipoGrafica]=\"'General'\"></pn-donut-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/gestion/reportes/seguimiento/seguimiento.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(0,137,149,.02)}:host>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:#008895;height:41px;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;padding:0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(1)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;cursor:pointer}:host>div:nth-of-type(1)>div:nth-of-type(2){margin-left:20px}:host>div:nth-of-type(1)>div:nth-of-type(3){margin-left:20px}:host>div:nth-of-type(1)>div:nth-of-type(4){margin-left:20px}:host>div:nth-of-type(1)>.regresar{cursor:pointer;font-weight:200}:host>.consultaResultados{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.consultaResultados>.panelNormal{background:#fff;height:99%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll;max-height:calc(100vh - 171px)}:host>.consultaResultados>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>.consultaResultados>.panelOcultar .filtros{display:none}:host>.consultaResultados>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll;max-height:calc(100vh - 171px)}:host>.consultaResultados .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>.consultaResultados .filtroHeader>.abrir{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;min-height:22px}:host>.consultaResultados .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.consultaResultados .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>.consultaResultados .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242}:host>.consultaResultados .filtros>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:50px;border-bottom:1px solid #eceef0;padding-top:15px;padding-bottom:20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>.consultaResultados .filtros>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;border-bottom:1px solid #eceef0;color:#fff;font-size:14px}:host>.consultaResultados .filtros>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:140px;height:25px;margin-right:1px}:host>.consultaResultados .filtros>.divAvanzada{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:15px;padding-bottom:50px}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:130px;font-size:16px;color:#424242}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(1)>div>div{margin-top:6px}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(2){padding-bottom:18px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;margin-bottom:50px;background:#424242;width:100%;height:35px;cursor:pointer}:host>.consultaResultados .filtros>.divRapida>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:53px;padding-top:10px;border-bottom:1px solid #eceef0}:host>.consultaResultados .filtros>.divRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding-bottom:18px;border-bottom:1px solid #424242}:host>.consultaResultados .filtros>.divRapida>div:nth-of-type(2)>input{height:25px;border:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:5px}:host>.consultaResultados .filtros>.divRapida>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>.consultaResultados>.consultaDetalles{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:calc(100vh - 170px);width:72%}:host>.consultaResultados>.consultaDetalles>.panelNormal{background:#fff;height:99%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll}:host>.consultaResultados>.consultaDetalles>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>.consultaResultados>.consultaDetalles>.panelOcultar .filtros{display:none}:host>.consultaResultados>.consultaDetalles>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll;max-height:calc(100vh - 171px)}:host>.consultaResultados>.consultaDetalles .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>.consultaResultados>.consultaDetalles .filtroHeader>.abrir{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;min-height:22px}:host>.consultaResultados>.consultaDetalles .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.consultaResultados>.consultaDetalles .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>.consultaResultados>.consultaDetalles .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242;border-bottom:1px solid #424242;padding-bottom:25px}:host>.consultaResultados>.consultaDetalles .filtros>.detalleCliente{font-size:16px;color:#424242;font-weight:bold;margin-top:15px}:host>.consultaResultados>.consultaDetalles .filtros>.detalleTitulo{font-size:16px;color:#424242;font-weight:400;margin-top:20px}:host>.consultaResultados>.consultaDetalles .filtros>.detalleTexto{font-size:16px;color:#424242;font-weight:200}:host>.consultaResultados>.consultaDetalles .filtros>.detalleTextoVerde{font-size:16px;color:#008895 !important;font-weight:300;cursor:pointer}:host>.consultaResultados>.consultaDetalles .filtros>.detalleTextoVerde:hover{text-decoration:underline}:host>.consultaResultados>.consultaDetalles>.contenidoFactura{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:calc(100vh - 171px);width:93%;overflow-x:scroll}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura{min-width:505px;padding:15px 20px;margin-top:10px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(1){font-size:12px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(1) .rangoVerde{border:1px solid #c2c3c9;width:119px;height:35px;margin-bottom:10px;margin-right:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(1) .rangoBlanco{border:1px solid #c2c3c9;background:transparent;width:119px;height:35px;margin-bottom:10px;margin-right:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2){font-size:22px;font-weight:bold;border-top:1px solid #424242}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;flex-direction:column !important;margin-top:20px;border-top:1px solid #424242;width:100%;font-family:\"Roboto-Bold\";font-size:14px;color:#424242}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;border-bottom:1px solid #fff;height:13%}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3)>div>div:nth-of-type(1){min-width:8px;background:transparent}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:5px 10px;width:95%;background:transparent;margin-top:10px;cursor:pointer;border:1px solid #eceef0}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3)>div>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:5px 0px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3)>div>div:nth-of-type(2)>div>div:nth-of-type(2){-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3)>div:hover{background-color:#fff}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3)>.divActual{background-color:#fff;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3)>.divActual>div:nth-of-type(1){min-width:8px;background:#008895}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3)>.divActive{height:13% !important;background-color:#fff}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3)>.divActive .dfSelect{background:#008895;margin-top:10px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;margin-top:15px;font-size:14px;color:#424242;font-weight:300;height:90%;overflow:scroll}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo{min-width:505px;background:#fff;padding:15px 20px;line-height:30px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(1){font-size:22px;font-weight:bold;color:#008895;border-top:1px solid #424242;margin-top:10px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2){margin-top:20px;overflow:scroll;max-height:calc(100vh - 248px)}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer;margin-bottom:10px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(1){min-width:8px;background:transparent}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:900px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 10px;width:100%;border:1px solid #d3d3d3;font-family:\"Roboto-Bold\"}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1){font-size:14px;color:#424242}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2){font-size:14px;color:#424242;margin-bottom:2px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3){font-size:14px;color:#424242;margin-bottom:2px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4){font-size:14px;color:#424242;margin-bottom:2px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5){font-size:14px;color:#424242;margin-bottom:2px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div:hover{width:100%;background-color:rgba(0,137,149,.05)}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>.divActive{background-color:rgba(0,137,149,.05);width:100%}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>.divActive>div:nth-of-type(1){min-width:8px;background:#008895;height:116px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo{min-width:505px;padding-top:15px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(1){font-size:22px;font-weight:bold;padding:0px 20px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2){border-top:1px solid #424242;margin:20px 20px;overflow:scroll;max-height:calc(100vh - 248px)}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div{border-bottom:1px solid #d8d8d8}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .titulo{font-size:18px;color:#008895;margin-top:20px;margin-bottom:10px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .subTitulo{font-size:16px;font-weight:400;color:#424242;margin-bottom:3px}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normal{font-size:16px;font-weight:200;color:#424242;margin-bottom:25px;cursor:default !important}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde{font-size:16px;font-weight:200;margin-bottom:25px;color:#008895}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde>span{cursor:pointer}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde:hover>span{text-decoration:underline}:host>.consultaResultados>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde:hover>.normal{text-decoration:none}:host>.consultaResultados>.resultados{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:1s ease-in-out;transition:1s ease-in-out}:host>.consultaResultados>.resultados>div:nth-of-type(1){border-bottom:3px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>.consultaResultados>.resultados>div:nth-of-type(1)>div:nth-of-type(1){font-size:22px}:host>.consultaResultados>.resultados>div:nth-of-type(1)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.consultaResultados>.resultados>div:nth-of-type(1)>div:nth-of-type(2)>img{cursor:pointer;height:30px;width:30px}:host a{color:#008895;text-decoration:none}:host a:visited{color:#008895;text-decoration:none}:host a:hover{text-decoration:underline}@-webkit-keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@-webkit-keyframes mostar{from{width:50px}to{width:321px}}@keyframes mostar{from{width:50px}to{width:321px}}:host .detalle{cursor:pointer}:host .divSeguimiento{width:93px;height:35px;background:transparent;margin-right:3px;font-family:\"Roboto-Regular\";font-size:10px !important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;cursor:pointer;border:.5px solid #c2c3c9}:host .divConfirmacion{width:93px;height:35px;background:transparent;margin-right:3px;font-family:\"Roboto-Regular\";font-size:10px !important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;cursor:pointer;border:.5px solid #c2c3c9}:host .divCancelar{width:93px;height:35px;background:transparent;margin-right:3px;font-family:\"Roboto-Regular\";font-size:10px !important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;cursor:pointer;border:.5px solid #c2c3c9}.historial{min-width:505px;background:#fff;padding:15px 20px;line-height:30px;font-family:\"Roboto-Bold\";font-size:14px;color:#424242}.historial>div:nth-of-type(1){font-size:22px;font-weight:bold;color:#008895;border-top:1px solid #424242;margin-top:10px}.historial>div:nth-of-type(2){margin-top:20px;overflow:scroll;max-height:calc(100vh - 248px);font-family:\"Roboto-Bold\";font-size:14px;color:#424242}.historial>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer}.historial>div:nth-of-type(2)>div>div:nth-of-type(1){min-width:8px;background:transparent}.historial>div:nth-of-type(2)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.historial>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 10px;width:100%;margin-bottom:10px}.historial>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1){font-size:18px;color:#424242;margin-bottom:15px;display:-webkit-box;display:-ms-flexbox;display:flex}.historial>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2){font-size:16px;color:#424242;margin-bottom:2px}.historial>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3){font-size:16px;color:#424242;margin-bottom:2px}.historial>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4){font-size:16px;color:#424242;margin-bottom:2px}.historial>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5){font-size:16px;color:#424242;margin-bottom:2px}.historial>div:nth-of-type(2)>div:hover{width:495px;background-color:rgba(0,137,149,.05)}.historial>div:nth-of-type(2)>.divActive{width:495px;background-color:rgba(0,137,149,.05)}.historial>div:nth-of-type(2)>.divActive>div:nth-of-type(1){min-width:8px;background:#008895}.graphics-panel-container{overflow:scroll;position:absolute;top:-110%;-webkit-transition:top 600ms;transition:top 600ms;height:100%;opacity:1;z-index:30;background-color:#f4fcfd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.graphics-panel-container.visible{top:0}.graphics-panel-container .graphics-panel-option{width:100%;text-align:right}.graphics-panel-container .graphics-panel-option img{min-width:30px;min-height:30px}.graphics-panel-container .graphics-panel-option img:hover{cursor:pointer}.graphics-panel-container .graphics-container{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:97%;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.graphics-panel-container .graphics-container .donut-container{min-width:235px;min-height:263px;width:30%;height:50%;margin:0 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.graphics-panel-container .graphics-container .donut-container .donut-title{text-align:center}.graphics-panel-container .graphics-container .donut-container .canvas-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;min-height:80%;max-height:400px;position:relative;padding:20px}.circleGreen{height:15px;width:15px;background-color:#91be5f;border-radius:50%;margin-top:8px;margin-left:466px}.circleRed{height:15px;width:15px;background-color:#952936;border-radius:50%;margin-top:8px;margin-left:466px}"

/***/ }),

/***/ "./src/app/components/gestion/reportes/seguimiento/seguimiento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguimientoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_util_util_service__ = __webpack_require__("./src/app/services/util/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_gestion_reportes_seguimiento_seguimiento_service__ = __webpack_require__("./src/app/services/gestion/reportes/seguimiento/seguimiento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_compras_utils_query_class__ = __webpack_require__("./src/app/class/compras/utils/query.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_gestion_ventas_SeguimientoCotizacionAgrupada_class__ = __webpack_require__("./src/app/class/gestion/ventas/SeguimientoCotizacionAgrupada.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SeguimientoComponent = /** @class */ (function () {
    function SeguimientoComponent(router, _fb, _gestionService, coreComponent, utilService, _seguimientoService) {
        var _this = this;
        this.router = router;
        this._fb = _fb;
        this._gestionService = _gestionService;
        this.coreComponent = coreComponent;
        this.utilService = utilService;
        this._seguimientoService = _seguimientoService;
        this.mostrar = true;
        this.objeto = { nombreCliente: "", monto: 0, folioCotizacion: "", folio: "", piezas: 0, diasAtraso: 0, enTiempo: "", estadoSeguimiento: "" };
        this.auxiliar = [];
        this.nombres = [];
        this.FiltroSeguimiento = [];
        this.FiltroConfirmacion = [];
        this.FiltroCancelable = [];
        this.sumita = 0;
        this.CotizacionesGlobal = 0;
        this.nuevoFiltro2 = [];
        this.filtroNombreClientes1 = [];
        this.nuevoFiltro = [];
        this.radarActivo = false;
        this.situacion = [];
        this.lstElementos = [];
        this.partidasSuma = 0;
        this.piezasSuma = 0;
        this.montoTotal = 0;
        this.filtradoCotizaciones = [];
        this.lstResultadoPartidas = [];
        this.lstResultadoCotizaciones = [];
        this.filtroNuevo2 = [];
        this.nuevoFiltroMarcas = [];
        this.nuevoEServicio = [];
        this.nuevoMarcas = [];
        this.nuevoVendedor = [];
        this.nuevo = [];
        this.nuevoClientes = [];
        this.nuevoConfirmacion = [];
        this.filtroNombreClientes = [];
        this.activaGraficaHoy = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaGraficaPosPasado = 0;
        this.activaPasado = 0;
        this.activaGraficaFuturo = 0;
        this.activaGraficaAyer = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaGraficaTodo = 0;
        this.tempCotizaciones = [];
        this.lstEstado = [];
        this.nombreEmpresas = [];
        this.topGraphics = "-110%";
        this.lstGraficaClientes = [];
        this.lista = [];
        this.filtroMarcas = [];
        this.filtroEjecutivoVentas = [];
        this.filtroEjecutivoServicio = [];
        this.GClientes = [];
        this.showGraphic = false;
        this.lstLineaTiempoActive = [];
        this.filtroNombre = [];
        this.ejecutivoServicio = [];
        this.estadoConfirmacion = [];
        this.marcas = [];
        this.tipoProducto = [];
        this.estadoSeguimiento = [];
        this.nivelIngreso = [];
        this.rango = 1;
        this.istextbox = true;
        this.istextboxSeguimiento = true;
        this.filtroConsultaRapida = "Busqueda por Folio";
        this.tipoCotizacion = 1;
        this.cuartoSelect = 0;
        this.sumaPartidas = 0;
        this.tercerSuma = 0;
        this.suma = 0;
        this.lstInfoCuarto = [];
        this.isSeguimiento = true;
        this.Clear = true;
        this.isThereData = true;
        this.lstAux = [];
        this.lstAux1 = [];
        this.lstMarcas = [];
        this.IsImage = true;
        //  IsDate: boolean = true;
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.dropCobrador = [{ nombre: '--TODOS--', key: 0 }];
        this.dropFabricantes = [{ nombre: '--TODOS--', key: 0 }];
        this.avanzada = true;
        /**Variables Gráficas */
        this.graficasValores = [];
        this.graficas = [];
        this.refrescar = true;
        this.graficasCargadas = false;
        /*Nueva implementación */
        this._sql = new __WEBPACK_IMPORTED_MODULE_8__class_compras_utils_query_class__["a" /* Query */]();
        this._origen = "";
        this._cliente = "";
        this._folio = "";
        this._tipo = "";
        this._marca = "";
        this._control = "";
        this._esacMaster = "";
        this._diaSeleccionado = "DIA0";
        this._vistaGraficasBool = "tabla";
        this._objLabels = new Object();
        this._totalSoloUnaVez = true;
        this._arrEtiquetaDia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        this._partidasSeguimiento = new Array();
        this.clientes = [];
        this.facturo = [];
        this.estado = [];
        this.informacion = [];
        this.objetoInfo = {
            nombreCliente: "",
            monto: 0,
            nombreEsac: "",
            nombreEV: "",
            nombreEVT: "",
            numCotizaciones: 0,
            numPartidas: 0,
            numPiezas: 0,
            tipoSeguimiento: "",
            folioCotizacion: [],
        };
        //Esta funcion se llama una vez que se realzia un servicio
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Responsable", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'DPeralta', key: 1 },
                    { nombre: 'GETorres', key: 2 },
                    { nombre: 'GSCruz', key: 3 },
                    { nombre: 'KBanderas', key: 4 },
                    { nombre: 'MRMoreno', key: 5 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Tipo", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Estandares', key: 1 },
                    { nombre: 'Biológicos', key: 2 },
                    { nombre: 'Reactivos', key: 3 },
                    { nombre: 'Publicaciones', key: 4 },
                    { nombre: 'Labware', key: 5 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Marca", _this.dropFabricantes, true),
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Control", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Nacionales', key: 1 },
                    { nombre: 'Mundiales', key: 2 },
                    { nombre: 'Normal', key: 3 }
                ], true),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
    }
    ;
    ;
    ;
    SeguimientoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this._gestionService.dropCobrador().subscribe(function (data) {
            _this.lstCobradores = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstCobradores; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.usuario, key: item.idEmpleado });
            }
            _this.dropCobrador = _this.dropCobrador.concat(lstAux);
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
        this._gestionService.dropClientes().subscribe(function (data) {
            _this.lstClientes = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstClientes; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.dropClientes = _this.dropClientes.concat(lstAux);
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
        this._gestionService.dropFabricantes().subscribe(function (data) {
            _this.lstFabricantes = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstFabricantes; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.dropFabricantes = _this.dropFabricantes.concat(lstAux);
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
        this.facturaForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.seguimiento();
    };
    /*Obtine todas las cotizaciones de todos los clientes, "Universo" */
    SeguimientoComponent.prototype.obtenerCotizacionesEnSeguimientoEnPartidas = function (parametros, tipo, $evt) {
        var _this = this;
        if ($evt === void 0) { $evt = null; }
        this.refrescar = false;
        this.lstCotizaciones = [];
        this.lstAux = [];
        this.lstAux1 = [];
        this.lstMarcas = [];
        this.sumaPartidas = 0;
        this.coreComponent.openModal(0);
        this._seguimientoService.obtenerCotizacionesEnSeguimientoEnPartidas(parametros).subscribe(function (data) {
            _this.lstCotizaciones = data.current;
            console.log(_this.lstCotizaciones);
            _this._sql.Query(_this.lstCotizaciones, ["tipoSeguimiento", "nombreCliente", "folioCotizacion", "marca", "control", "tipoProduct", "nivelIngreso", "diasFiltro", "enTiempo", "nombreEV", "nombreVendedor", "estadoSeguimiento", "master"]);
            if (_this._sql.indexObject.enTiempo != null) {
                var totalFT = _this._sql.indexObject.enTiempo.FT == null ? 0 : _this._sql.indexObject.enTiempo.FT.length;
                var totalET = _this._sql.indexObject.enTiempo.ET == null ? 0 : _this._sql.indexObject.enTiempo.ET.length;
                totalET = totalET + (_this._sql.indexObject.enTiempo.Pendiente == null ? 0 : _this._sql.indexObject.enTiempo.Pendiente.length);
                var tasaRealizacion = (totalET * 100) / (totalET + totalFT);
                _this.tazaRealizacion = 'TR ' + tasaRealizacion.toFixed(2) + ' %';
                //   console.log("TAZA DE REALIZACIÓN", this.tazaRealizacion);
            }
            if (_this._totalSoloUnaVez) {
                var total = _this._sql.universo.length.toString();
                _this.TODO = total;
                _this._totalSoloUnaVez = false;
            }
            // this._origen = "Seguimiento";
            _this.filtrarConsultaVista(_this._cliente, _this._tipo, _this._marca, _this._control, _this._diaSeleccionado, _this._folio, _this._origen, _this._vistaGraficasBool, _this._esacMaster);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    SeguimientoComponent.prototype.filtrarConsultaVista = function ($cliente, $tipo, $marca, $control, $diaSeleccionado, $folio, $origen, $vistaCurrent, $esacMaster) {
        this.lstAux = [];
        this._cliente = $cliente == "" ? null : $cliente;
        this._tipo = $tipo == "" ? null : $tipo;
        this._folio = $folio == "" ? null : $folio;
        this._marca = $marca == "" ? null : $marca;
        this._control = $control == "" ? null : $control;
        this._origen = $origen == "" ? null : $origen;
        this._esacMaster = $esacMaster == "" ? null : $esacMaster;
        this._diaSeleccionado = $diaSeleccionado == "" || $diaSeleccionado == "TODO" ? null : $diaSeleccionado;
        this._vistaGraficasBool = $vistaCurrent != null && $vistaCurrent != "" ? $vistaCurrent : this._vistaGraficasBool;
        if (this._vistaGraficasBool == "grafica") {
        }
        else {
            var ultimoMontoTotal = 0;
            var nombresCliente = this._sql.getPunteros([null, "nombreCliente"]);
            var idxNombreCliente = this._cliente == "" || this._cliente == null ? nombresCliente : [this._cliente]; //"nombreCliente"
            var numFFila = 0;
            for (var f = 0; f < idxNombreCliente.length; f++) {
                var punterosCadaCliente = this._sql.getPunteros([this._origen, idxNombreCliente[f], this._folio, this._marca, this._control, this._tipo, null, null, null, null, null, null, this._esacMaster]);
                if (punterosCadaCliente.length > 0) {
                    numFFila++;
                    var cotizacionNew = new __WEBPACK_IMPORTED_MODULE_9__class_gestion_ventas_SeguimientoCotizacionAgrupada_class__["a" /* SeguimientoCotizacionAgrupada */]();
                    cotizacionNew.setNumFila(numFFila);
                    cotizacionNew.setNombreCliente(idxNombreCliente[f]);
                    var estatus = this._sql.getValoresCampo("estadoSeguimiento", punterosCadaCliente);
                    if (estatus.indexOf('Por Realizar') != -1 || estatus.indexOf('En Realización(email)') != -1 || estatus.indexOf('En Realización') != -1) {
                        cotizacionNew.setEstatusMasCritico("No Trabajada");
                    }
                    if (estatus.indexOf('Cotización Reenviada') != -1) {
                        cotizacionNew.setEstatusMasCritico("Cotización no recibida");
                    }
                    if (estatus.indexOf('Contacto NO Localizado') != -1) {
                        cotizacionNew.setEstatusMasCritico("Contacto No Localizado");
                    }
                    cotizacionNew.setMonto(this._sql.getSumarCampo("montoCotizacion", punterosCadaCliente));
                    cotizacionNew.setPiezas(this._sql.getSumarCampo("piezas", punterosCadaCliente));
                    cotizacionNew.setTotalCotizaciones(this._sql.getValoresCampo("folioCotizacion", punterosCadaCliente).length);
                    cotizacionNew.setTipoSeguimiento(this._sql.getValoresCampo("tipoSeguimiento", punterosCadaCliente));
                    cotizacionNew.setPartidas(this._sql.getValoresCampo("partidas", punterosCadaCliente));
                    cotizacionNew.setTipoProducto(this._sql.getValoresCampo("tipoProduct", punterosCadaCliente));
                    var sqlArrayEV = this._sql.getValoresCampo("nombreEV", punterosCadaCliente);
                    cotizacionNew.setNombreVendedor(sqlArrayEV[0]);
                    var sqlArrayESAC = this._sql.getValoresCampo("nombreVendedor", punterosCadaCliente);
                    cotizacionNew.setNombreESAC(sqlArrayESAC[0]);
                    cotizacionNew.setFechaSiguienteContacto(this._sql.getValoresCampo("fechaSiguienteContacto", punterosCadaCliente));
                    cotizacionNew.setNivelIngreso(this._sql.getValoresCampo("nivelIngreso", punterosCadaCliente));
                    cotizacionNew.setMarca(this._sql.getValoresCampo("marca", punterosCadaCliente));
                    cotizacionNew.setNombreESAC(this._sql.getValoresCampo("master", punterosCadaCliente));
                    cotizacionNew.setFolioCotizacion(this._sql.getValoresCampo("folioCotizacion", punterosCadaCliente));
                    cotizacionNew.setMontoCotizacion(this._sql.getValoresCampo("montoCotizacion", punterosCadaCliente));
                    ultimoMontoTotal = +cotizacionNew.getMonto();
                    this.lstAux.push(cotizacionNew);
                }
            }
            var lastItem = new __WEBPACK_IMPORTED_MODULE_9__class_gestion_ventas_SeguimientoCotizacionAgrupada_class__["a" /* SeguimientoCotizacionAgrupada */]();
            lastItem.setUltimo(this.lstAux.length.toString());
            lastItem.setMonto(ultimoMontoTotal);
            this.lstAux.push(lastItem);
            //    console.log(this.lstAux);
            this.filtroCuadros(4, 1);
        }
        var diasFiltro = ["PASADO", "DIA-3", "DIA-2", "DIA-1", "DIA0", "DIA1", "DIA2", "DIA3", "FUTURO"];
        for (var t = 0; t < diasFiltro.length; t++) {
            var punterosDia = this._sql.getPunteros([this._origen, this._cliente, this._folio, this._marca, this._control, this._tipo, null, diasFiltro[t], null, null, null, null, this._esacMaster]);
            var total = punterosDia.length == 0 ? '' : punterosDia.length.toString(); //_sql.getValoresCampo( "folioCotizacion", punterosDia ).length;
            this._objLabels[diasFiltro[t]] = total;
        }
        var fechaHoy = new Date();
        var fechaAyer = new Date();
        fechaAyer.setDate(fechaHoy.getDate() - 1);
        var fechaManana = new Date();
        fechaManana.setDate(fechaHoy.getDate() + 1);
        this.diahoy = this._arrEtiquetaDia[fechaHoy.getDay()] + ' ' + fechaHoy.getDate();
        this.diaayer = this._arrEtiquetaDia[fechaAyer.getDay()] + ' ' + fechaAyer.getDate();
        this.diamanana = this._arrEtiquetaDia[fechaManana.getDay()] + ' ' + fechaManana.getDate();
        this.origen = this._origen;
    };
    SeguimientoComponent.prototype.lineaTiempo = function (i) {
        this.lstLineaTiempoActive = [];
        this.lstLineaTiempoActive = new Array(this.lstAux1.length).fill('');
        this.lstLineaTiempoActive[i] = 'divActive';
        this.cotizaciones(0);
    };
    SeguimientoComponent.prototype.cotizaciones = function (i) {
        this.lstResultadoCotizaciones = [];
        this.lstResultadoCotizaciones = new Array(this.tempCotizaciones.length).fill('');
        this.lstResultadoCotizaciones[i] = 'divActive';
    };
    SeguimientoComponent.prototype.partidas = function (i) {
        this.lstResultadoPartidas = [];
        this.lstResultadoPartidas = new Array(this.lstInfo.length).fill('');
        this.lstResultadoPartidas[i] = 'divActive';
    };
    SeguimientoComponent.prototype.radar = function (n) {
        if (n === false) {
            this.radarActivo = true;
            this.partidas(0);
        }
        else {
            this.radarActivo = false;
            this.partidas(0);
        }
    };
    SeguimientoComponent.prototype.filtroCuadros = function (numDia, rango) {
        var _this = this;
        this.lineaTiempo(0);
        this.cotizaciones(0);
        this.numeroDias = numDia;
        this.nuevoFiltro = [];
        this.nuevoFiltro2 = [];
        this.FiltroCancelable = [];
        this.FiltroConfirmacion = [];
        this.FiltroSeguimiento = [];
        switch (numDia) {
            case 0:
                this.titulo = "Pasado";
                this.mostrar != true ? this.activeGraphicPasado() : '';
                var fechaPasado = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaPasado.getDate() - 5);
                break;
            case 1:
                this.titulo = "Ante Antier";
                this.mostrar != true ? this.activeGraphicAnte() : '';
                var fechaAnte = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaAnte.getDate() - 4);
                break;
            case 2:
                this.titulo = "Antier";
                this.mostrar != true ? this.activeGraphicAntier() : '';
                var fechaAntier = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaAntier.getDate() - 3);
                break;
            case 3:
                this.titulo = "Ayer";
                this.mostrar != true ? this.activeGraphicAyer() : '';
                var fechaAyer = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaAyer.getDate() - 2);
                break;
            case 4:
                this.titulo = "Hoy";
                this.mostrar != true ? this.activeGraphicHoy() : '';
                var fecha = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fecha.getDate() - 1);
                break;
            case 5:
                this.mostrar != true ? this.activeGraphicTodo() : '';
                var fechaTodo = new Date();
                this.fechaGeneral = "TODO";
                this.todos();
                break;
            case 6:
                this.titulo = "Mañana";
                this.mostrar != true ? this.activeGraphicManana() : '';
                var fechaMa = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaMa.getDate());
                break;
            case 7:
                this.titulo = "Pasado Mañana";
                this.mostrar != true ? this.activeGraphicPasadoMa() : '';
                var fechaPasadoMa = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaPasadoMa.getDate() + 1);
                break;
            case 8:
                this.titulo = "Pospasado";
                this.mostrar != true ? this.activeGraphicPosPasado() : '';
                var fechaPos = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaPos.getDate() + 2);
                break;
            case 9:
                this.titulo = "Futuro";
                this.mostrar != true ? this.activeGraphicFuturo() : '';
                this.activeGraphicFuturo();
                var fechaFuturo = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaFuturo.getDate() + 3);
                break;
            default:
                break;
        }
        this.mostrar = false;
        if (this.fechaGeneral != "TODO") {
            this.lstCotizaciones.forEach(function (element) {
                var fechaCompara = new Date(element.fechaSiguienteContacto);
                if (element.tipoSeguimiento === "Cancelable") {
                    if ((_this.fechaGeneral.getDate()) === fechaCompara.getDate() && _this.fechaGeneral.getMonth() === fechaCompara.getMonth() && _this.fechaGeneral.getFullYear() === fechaCompara.getFullYear() && element.partidas != 0 || element.fechaSiguienteContacto === null) {
                        _this.FiltroCancelable.push(element);
                    }
                }
                else if (element.tipoSeguimiento === "Seguimiento") {
                    if ((_this.fechaGeneral.getDate()) === fechaCompara.getDate() && _this.fechaGeneral.getMonth() === fechaCompara.getMonth() && _this.fechaGeneral.getFullYear() === fechaCompara.getFullYear() && element.partidas != 0) {
                        _this.FiltroSeguimiento.push(element);
                    }
                }
                else if (element.tipoSeguimiento === "Confirmación") {
                    //(this.fechaGeneral.getDate()) === fechaCompara.getDate() && this.fechaGeneral.getMonth() === fechaCompara.getMonth() && this.fechaGeneral.getFullYear() === fechaCompara.getFullYear() && element.partidas != 0
                    // if (element.enTiempo!=null ) {
                    _this.FiltroConfirmacion.push(element);
                    // }
                }
            });
            console.log(this.FiltroSeguimiento);
            if (this.tipoCotizacion === 1) {
                this.obtenerSeguimiento();
            }
            else if (this.tipoCotizacion === 2) {
                this.obtenerConfirmacion();
            }
            else if (this.tipoCotizacion === 3) {
                this.obtenerCancelable();
            }
            var options = {
                weekday: 'long',
            };
            this.respaldo = this.lstAux1;
            var fechaAux = void 0;
            this.graficasCargadas = false;
            this.graficasValores = [
                this.nivelIngreso,
                this.GClientes,
                this.estadoSeguimiento,
                this.ejecutivoVentas,
                this.tipoProducto,
                this.marcas,
                this.estadoConfirmacion,
                this.ejecutivoServicio
            ];
            this.graficas = [];
            // Titulos de Gráficas
            this.graficas = [
                'Nivel de Ingreso Clientes',
                'Clientes',
                'Estado Seguimiento',
                'Ejecutivo de Ventas',
                'Tipo Producto',
                'Marcas',
                'Estado Confirmación',
                'Ejecutivo de servicios a Cliente'
                // "Categoría"
            ];
            //  this.refrescar = true;
            //  this.calcularDatosParaGraficas();
        }
    };
    //	PANEL 2
    SeguimientoComponent.prototype.filtrarClientePanelDos = function ($cliente) {
        var _this = this;
        this.nombreCliente = $cliente;
        this._cotizacionesPorCliente = new Array();
        this._diaSeleccionado = null;
        this.tempCotizaciones = [];
        this.filtradoCotizaciones = [];
        if (this.fechaGeneral != "TODO") {
            if (this.tipoCotizacion != 2 && this.avanzada) {
                this.lstCotizaciones.forEach(function (element) {
                    var fecha = new Date(element.fechaSiguienteContacto);
                    if (element.nombreCliente === $cliente && _this.fechaGeneral.getDate() === fecha.getDate() && _this.fechaGeneral.getMonth() === fecha.getMonth() && _this.fechaGeneral.getFullYear() === fecha.getFullYear()) {
                        _this.tempCotizaciones.push(element);
                    }
                });
            }
            else if (this.tipoCotizacion === 2 || !this.avanzada) {
                this.lstCotizaciones.forEach(function (element) {
                    var fecha = new Date(element.fechaSiguienteContacto);
                    if (element.nombreCliente === $cliente && element.enTiempo === null) {
                        _this.tempCotizaciones.push(element);
                    }
                });
            }
            else if (this.tipoCotizacion != 2 && !this.avanzada) {
                this.lstCotizaciones.forEach(function (element) {
                    var fecha = new Date(element.fechaSiguienteContacto);
                    if (element.nombreCliente === $cliente && _this.fechaGeneral.getDate() === fecha.getDate() && _this.fechaGeneral.getMonth() === fecha.getMonth() && _this.fechaGeneral.getFullYear() === fecha.getFullYear()) {
                        _this.tempCotizaciones.push(element);
                    }
                });
            }
            this.objeto = {
                nombreCliente: "", monto: 0, folioCotizacion: "", folio: "", piezas: 0, diasAtraso: 0, enTiempo: "", estadoSeguimiento: ""
            };
            var nuevoAux_1 = [];
            this.tempCotizaciones.forEach(function (element) {
                if (_this.filtradoCotizaciones.lastIndexOf(element.folioCotizacion) === -1) {
                    _this.filtradoCotizaciones.push(element.folioCotizacion);
                }
            });
            this.filtradoCotizaciones.forEach(function (element) {
                _this.tempCotizaciones.forEach(function (e) {
                    if (element === e.folioCotizacion) {
                        _this.objeto.nombreCliente = e.nombreCliente;
                        _this.objeto.monto = _this.objeto.monto + e.montoCotizacion;
                        _this.objeto.folioCotizacion = e.folioCotizacion;
                        _this.objeto.folio = e.folio;
                        _this.objeto.diasAtraso = e.diasAtraso;
                        _this.objeto.enTiempo = e.enTiempo;
                        _this.objeto.piezas = _this.objeto.piezas + e.piezas;
                        _this.objeto.estadoSeguimiento = e.estadoSeguimiento;
                    }
                });
                nuevoAux_1.push(_this.objeto);
                _this.objeto = {
                    nombreCliente: "", monto: 0, folioCotizacion: "", folio: "", piezas: 0, diasAtraso: 0, enTiempo: "", estadoSeguimiento: ""
                };
            });
            this.tempCotizaciones = [];
            this.tercerSuma = 0;
            this.tempCotizaciones = nuevoAux_1;
            this.tempCotizaciones.forEach(function (element) {
                _this.tercerSuma += element.monto;
            });
            var options = {
                weekday: 'long',
            };
            this.fechaGeneral.setDate(this.fechaGeneral.getDate() + 1);
            this.today = this.fechaGeneral.toLocaleDateString('es-MX', options).charAt(0).toUpperCase() + this.fechaGeneral.toLocaleDateString('es-MX', options).slice(1);
            this.numeroDia = this.fechaGeneral.getDate();
            this.fechaGeneral.setDate(this.fechaGeneral.getDate() - 1);
            var indicesCotizacion = this._sql.getPunteros(["Seguimiento", $cliente, null, this._marca, this._control, this._tipo, null, this._diaSeleccionado, null, null, null, null, this._esacMaster]);
            var numFFila = 0;
            for (var f = 0; f < this.tempCotizaciones.length; f++) {
                var currentFila = this.tempCotizaciones[f];
                var folioCot = this.tempCotizaciones[f].folioCotizacion; //currentFila._folioCotizacion;
                var indicesCurrent = this._sql.getPunteros([this._origen, $cliente, folioCot, this._marca, this._control, this._tipo, null, this._diaSeleccionado, null, null, null, null, this._esacMaster]); //_sql.getPunteros( [ null, null, folioCot ] );
                currentFila._montoCotizacion = 0;
                var montoSuma = this._sql.getSumarCampo("montoCotizacion", indicesCurrent);
                currentFila._montoCotizacion = montoSuma > -1 ? montoSuma : -9999;
                currentFila._piezas = 0;
                var piezasSuma = this._sql.getSumarCampo("piezas", indicesCurrent);
                currentFila._piezas = piezasSuma > -1 ? piezasSuma : -666;
                this._cotizacionesPorCliente.push(currentFila);
            }
            var lastItem = new __WEBPACK_IMPORTED_MODULE_9__class_gestion_ventas_SeguimientoCotizacionAgrupada_class__["a" /* SeguimientoCotizacionAgrupada */]();
            lastItem.setUltimo(this.tempCotizaciones.length.toString());
            lastItem.setMonto(this._sql.getSumarCampo("montoCotizacion", indicesCotizacion)); //, "folioCotizacion" );
            lastItem.setPiezas(this._sql.getSumarCampo("piezas", indicesCotizacion)); //, "folioCotizacion" );
            this._cotizacionesPorCliente.push(lastItem);
            this.obtenerPartidasPorCotizacionEnSeguimiento(0);
            this.piezasSuma = 0;
            this.partidasSuma = 0;
            this.tempCotizaciones.forEach(function (element) {
                _this.piezasSuma = _this.piezasSuma + element._piezas;
            });
        }
        else {
            this.lstCotizaciones.forEach(function (element) {
                var fecha = new Date(element.fechaSiguienteContacto);
                if (element.nombreCliente === $cliente) {
                    _this.tempCotizaciones.push(element);
                }
            });
            this.objeto = {
                nombreCliente: "", monto: 0, folioCotizacion: "", folio: "", piezas: 0, diasAtraso: 0, enTiempo: "", estadoSeguimiento: ""
            };
            var nuevoAux_2 = [];
            this.tempCotizaciones.forEach(function (element) {
                if (_this.filtradoCotizaciones.lastIndexOf(element.folioCotizacion) === -1) {
                    _this.filtradoCotizaciones.push(element.folioCotizacion);
                }
            });
            this.filtradoCotizaciones.forEach(function (element) {
                _this.tempCotizaciones.forEach(function (e) {
                    if (element === e.folioCotizacion) {
                        _this.objeto.nombreCliente = e.nombreCliente;
                        _this.objeto.monto = _this.objeto.monto + e.montoCotizacion;
                        _this.objeto.folioCotizacion = e.folioCotizacion;
                        _this.objeto.folio = e.folio;
                        _this.objeto.diasAtraso = e.diasAtraso;
                        _this.objeto.enTiempo = e.enTiempo;
                        _this.objeto.piezas = _this.objeto.piezas + e.piezas;
                        _this.objeto.estadoSeguimiento = e.estadoSeguimiento;
                    }
                });
                nuevoAux_2.push(_this.objeto);
                _this.objeto = {
                    nombreCliente: "", monto: 0, folioCotizacion: "", folio: "", piezas: 0, diasAtraso: 0, enTiempo: "", estadoSeguimiento: ""
                };
            });
            this.tempCotizaciones = [];
            this.tercerSuma = 0;
            this.tempCotizaciones = nuevoAux_2;
            this.tempCotizaciones.forEach(function (element) {
                _this.tercerSuma += element.monto;
            });
        }
    };
    SeguimientoComponent.prototype.obtenerPartidasPorCotizacionEnSeguimiento = function (i) {
        var _this = this;
        this.sumaPartidas = 0;
        this.sumaPiezas = 0;
        this.suma = 0;
        this.lstInfo = [];
        if (this.tempCotizaciones[i] != undefined) {
            this.folio = this.tempCotizaciones[i].folioCotizacion;
            var parametros = {
                folio: this.tempCotizaciones[i].folioCotizacion
            };
            this._seguimientoService.obtenerPartidasPorCotizacionEnSeguimiento(parametros).subscribe(function (data) {
                _this.lstInfo = data.current;
                _this.lstInfo.forEach(function (element) {
                    _this.suma = _this.suma + element.monto;
                    _this.sumaPiezas = _this.sumaPiezas + element.cantidad;
                });
                _this.cuartoSegmento(0);
                _this.partidas(0);
                _this.resultObtenerPartidasSeguimiento(_this.lstInfo);
                _this.sumaPartidas = _this.lstInfo.length;
            }, function (error) {
                _this.coreComponent.closeModal(0);
            });
        }
    };
    SeguimientoComponent.prototype.resultObtenerPartidasSeguimiento = function ($partidas) {
        this._partidasSeguimiento = new Array();
        if ($partidas != null && $partidas.length > 0) {
            this._partidasSeguimiento = $partidas;
            var folioPartida = this._partidasSeguimiento[0]._folioCotizacion;
            var primerCotizacion = this._sql.ensamblarLista([null, null, folioPartida]).length > 0 ? this._sql.ensamblarLista([null, null, folioPartida]).getItemAt(0) : null;
            if (primerCotizacion == null)
                return;
            var fechaCotizacion = primerCotizacion.getFechaSiguienteContacto();
            for (var m = 0; m < this._partidasSeguimiento.length; m++) {
                this._partidasSeguimiento[m].numFila = m + 1;
                var necesariosEnfoque = 1;
                var cuentaEnfoque = 0;
                if (this._tipo != null && this._tipo.length > 0)
                    necesariosEnfoque++;
                if (this._control != null && this._control.length > 0)
                    necesariosEnfoque++;
                if (this._marca != null && this._marca.length > 0)
                    necesariosEnfoque++;
                var currentFila = this._partidasSeguimiento[m];
                if (currentFila.getFechaSiguiente != null && fechaCotizacion != null) {
                    if (currentFila.getFechaSiguiente().getDate() == fechaCotizacion.getDate()
                        && currentFila.getFechaSiguiente().getMonth() == fechaCotizacion.getMonth()
                        && currentFila.getFechaSiguiente().getFullYear() == fechaCotizacion.getFullYear())
                        cuentaEnfoque++;
                }
                if (currentFila.getTipo() == this._tipo)
                    cuentaEnfoque++;
                if (currentFila.getControl() == this._control)
                    cuentaEnfoque++;
                if (currentFila.getMarca() == this._marca)
                    cuentaEnfoque++;
                if (cuentaEnfoque == necesariosEnfoque
                    && currentFila.getEstado() != "Recotizada"
                    && currentFila.getEstado() != "Pedido"
                    && currentFila.getEstado() != "Cancelada")
                    currentFila.setEnfocado(true);
            }
        }
        var numericDataSort;
        //numericDataSort.fields = [new SortField("ultimo"), new SortField("enfocado", true)];
        $partidas.sort = numericDataSort;
        //  $partidas.refresh();
        this._partidasSeguimiento = $partidas;
        //  this.actualizaUltimo(this._partidasSeguimiento);
    };
    SeguimientoComponent.prototype.tercerSegmento = function (i) {
        // this.folio = this.lstFolios[i].folioCotizacion;
        var cuerpo = {};
        this.obtenerPartidasPorCotizacionEnSeguimiento(cuerpo);
    };
    SeguimientoComponent.prototype.cuartoSegmento = function (i) {
        var _this = this;
        this.cuartoSelect = i;
        this.lstInfoCuarto = [];
        this.lstElementos = [];
        this.situacion = [];
        this.lstInfo.forEach(function (h, index) {
            _this.lstInfoCuarto.push(h.historial);
            _this.situacion.push(h.situacion);
        });
        this.lstInfoCuarto[i].forEach(function (element, index) {
            _this.lstElementos.push(element);
        });
    };
    SeguimientoComponent.prototype.activeGraphicHoy = function () {
        this.activaGraficaAyer = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaFuturo = 0;
        this.activaGraficaTodo = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaGraficaPosPasado = 0;
        this.activaPasado = 0;
        this.activaGraficaHoy++;
        this.activaGraficaHoy === 1 ? this.showTablePanel() : this.activaGraficaHoy === 2 ? this.showGraphicPanel() : this.activaGraficaHoy == 3 ? this.showTablePanel() : '';
        this.activaGraficaHoy == 3 ? this.activaGraficaHoy = 0 : '';
    };
    SeguimientoComponent.prototype.activeGraphicManana = function () {
        this.activaGraficaAyer = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaFuturo = 0;
        this.activaGraficaTodo = 0;
        this.activaGraficaHoy = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaGraficaPosPasado = 0;
        this.activaPasado = 0;
        this.activaGraficaManana++;
        this.activaGraficaManana === 1 ? this.showTablePanel() : this.activaGraficaManana === 2 ? this.showGraphicPanel() : this.activaGraficaManana == 3 ? this.showTablePanel() : '';
        this.activaGraficaManana == 3 ? this.activaGraficaManana = 0 : '';
    };
    SeguimientoComponent.prototype.activeGraphicPasadoMa = function () {
        this.activaGraficaAyer = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaFuturo = 0;
        this.activaGraficaTodo = 0;
        this.activaGraficaHoy = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPosPasado = 0;
        this.activaPasado = 0;
        this.activaGraficaPasadoMa++;
        this.activaGraficaPasadoMa === 1 ? this.showTablePanel() : this.activaGraficaPasadoMa === 2 ? this.showGraphicPanel() : this.activaGraficaPasadoMa == 3 ? this.showTablePanel() : '';
        this.activaGraficaPasadoMa == 3 ? this.activaGraficaPasadoMa = 0 : '';
    };
    SeguimientoComponent.prototype.activeGraphicPosPasado = function () {
        this.activaGraficaAyer = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaFuturo = 0;
        this.activaGraficaTodo = 0;
        this.activaGraficaHoy = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaPasado = 0;
        this.activaGraficaPosPasado++;
        this.activaGraficaPosPasado === 1 ? this.showTablePanel() : this.activaGraficaPosPasado === 2 ? this.showGraphicPanel() : this.activaGraficaPosPasado == 3 ? this.showTablePanel() : '';
        this.activaGraficaPosPasado == 3 ? this.activaGraficaPosPasado = 0 : '';
    };
    SeguimientoComponent.prototype.activeGraphicFuturo = function () {
        this.activaGraficaAyer = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaPosPasado = 0;
        this.activaGraficaTodo = 0;
        this.activaGraficaHoy = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaPasado = 0;
        this.activaGraficaFuturo++;
        this.activaGraficaFuturo === 1 ? this.showTablePanel() : this.activaGraficaFuturo === 2 ? this.showGraphicPanel() : this.activaGraficaFuturo == 3 ? this.showTablePanel() : '';
        this.activaGraficaFuturo == 3 ? this.activaGraficaFuturo = 0 : '';
    };
    SeguimientoComponent.prototype.activeGraphicAyer = function () {
        this.activaGraficaFuturo = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaPosPasado = 0;
        this.activaGraficaTodo = 0;
        this.activaGraficaHoy = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaPasado = 0;
        this.activaGraficaAyer++;
        this.activaGraficaAyer === 1 ? this.showTablePanel() : this.activaGraficaAyer === 2 ? this.showGraphicPanel() : this.activaGraficaAyer == 3 ? this.showTablePanel() : '';
        this.activaGraficaAyer == 3 ? this.activaGraficaAyer = 0 : '';
    };
    SeguimientoComponent.prototype.activeGraphicAntier = function () {
        this.activaGraficaFuturo = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaGraficaAyer = 0;
        this.activaGraficaPosPasado = 0;
        this.activaGraficaTodo = 0;
        this.activaGraficaHoy = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaPasado = 0;
        this.activaGraficaAntier++;
        this.activaGraficaAntier === 1 ? this.showTablePanel() : this.activaGraficaAntier === 2 ? this.showGraphicPanel() : this.activaGraficaAntier == 3 ? this.showTablePanel() : '';
        this.activaGraficaAntier == 3 ? this.activaGraficaAntier = 0 : '';
    };
    SeguimientoComponent.prototype.activeGraphicAnte = function () {
        this.activaGraficaFuturo = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaAyer = 0;
        this.activaGraficaPosPasado = 0;
        this.activaGraficaTodo = 0;
        this.activaGraficaHoy = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaPasado = 0;
        this.activaGraficaAnteAntier++;
        this.activaGraficaAnteAntier === 1 ? this.showTablePanel() : this.activaGraficaAnteAntier === 2 ? this.showGraphicPanel() : this.activaGraficaAnteAntier == 3 ? this.showTablePanel() : '';
        this.activaGraficaAnteAntier == 3 ? this.activaGraficaAnteAntier = 0 : '';
    };
    SeguimientoComponent.prototype.activeGraphicPasado = function () {
        this.activaGraficaFuturo = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaAyer = 0;
        this.activaGraficaPosPasado = 0;
        this.activaGraficaTodo = 0;
        this.activaGraficaHoy = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaPasado++;
        this.activaPasado === 1 ? this.showTablePanel() : this.activaPasado === 2 ? this.showGraphicPanel() : this.activaPasado == 3 ? this.activaPasado = 0 : '';
    };
    SeguimientoComponent.prototype.activeGraphicTodo = function () {
        this.activaGraficaFuturo = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaAyer = 0;
        this.activaGraficaPosPasado = 0;
        this.activaPasado = 0;
        this.activaGraficaHoy = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaGraficaTodo++;
        this.activaGraficaTodo === 1 ? this.showTablePanel() : this.activaGraficaTodo === 2 ? this.showGraphicPanel() : this.activaGraficaTodo == 3 ? this.showTablePanel() : '';
        this.activaGraficaTodo == 3 ? this.activaGraficaTodo = 0 : '';
    };
    SeguimientoComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    SeguimientoComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    SeguimientoComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    SeguimientoComponent.prototype.filtroRapido = function () {
    };
    SeguimientoComponent.prototype.filtroRapida = function () {
        this.lstMarcas = [];
        this.avanzada = false;
        this.Elements = [];
        this.Elements = [new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", this.dropClientes, true)];
        this.isSeguimiento = false;
        this.lstAux1 = [];
        this.lstAux1 = this.lstAux;
        this.lstMarcas = [];
        this.todos();
        this.showGraphic = false;
    };
    SeguimientoComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
        this.isSeguimiento = true;
        this.Llenar();
        this.filtroCuadros(4, 1);
        // this.seguimiento();
        this.showGraphic = false;
    };
    SeguimientoComponent.prototype.seguimiento = function () {
        this.tipoCotizacion = 1;
        this.avanzada = true;
        var cuerpo = {
            confirmacion: 2,
            cliente: "",
            empleadoString: "",
            tipo: "",
            marca: "",
            control: "",
            master: 0
        };
        var tipo = "Seguimiento";
        this.obtenerCotizacionesEnSeguimientoEnPartidas(cuerpo, tipo);
    };
    SeguimientoComponent.prototype.obtenerSeguimiento = function () {
        var _this = this;
        this.tipoCotizacion = 1;
        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();
        this.refrescar = false;
        setTimeout(function () {
            _this.refrescar = true;
        }, 10);
        this.respaldoDatos = [];
        this.auxiliar = [];
        this.montoTotal = 0;
        this.rango = 1;
        this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] };
        this.informacion = [];
        this.lstAux1 = [];
        this.nombres = [];
        this.nuevaLista = [];
        if (this.fechaGeneral != "TODO") {
            this.lstCotizaciones.forEach(function (element) {
                var fechaNueva = new Date(element.fechaSiguienteContacto);
                if (element.tipoSeguimiento === "Seguimiento" && (_this.fechaGeneral.getDate() === fechaNueva.getDate() && _this.fechaGeneral.getMonth() === fechaNueva.getMonth() && _this.fechaGeneral.getFullYear() === fechaNueva.getFullYear())) {
                    _this.lstAux1.push(element);
                }
            });
            this.lstAux1.forEach(function (element) {
                if (_this.nombres.lastIndexOf(element.nombreCliente) === -1) {
                    _this.nombres.push(element.nombreCliente);
                }
            });
            this.nombres.forEach(function (element) {
                _this.lstAux1.forEach(function (e) {
                    if (element === e.nombreCliente) {
                        _this.objetoInfo.nombreCliente = e.nombreCliente;
                        _this.objetoInfo.monto = _this.objetoInfo.monto + e.montoCotizacion;
                        _this.objetoInfo.nombreEV = e.nombreEV;
                        _this.objetoInfo.nombreEsac = e.nombreVendedor;
                        _this.objetoInfo.numCotizaciones = _this.objetoInfo.numCotizaciones + 1;
                        _this.objetoInfo.numPartidas = _this.objetoInfo.numPartidas + e.partidas;
                        _this.objetoInfo.numPiezas = _this.objetoInfo.numPiezas + e.piezas;
                        _this.objetoInfo.tipoSeguimiento = e.tipoSeguimiento;
                        _this.objetoInfo.nombreEVT = e.nombreEVT;
                        if (_this.objetoInfo.folioCotizacion.indexOf(e.folioCotizacion) === -1) {
                            _this.objetoInfo.folioCotizacion.push(e.folioCotizacion);
                        }
                    }
                });
                _this.informacion.push(_this.objetoInfo);
                _this.respaldoDatos.push(_this.objetoInfo);
                _this.objetoInfo = {
                    nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: []
                };
            });
            if (this.informacion.length === 0) {
                this.tempCotizaciones = [];
                this.lstInfo = [];
                this.lstElementos = [];
                this.nombreCliente = "";
                this.folio = "";
            }
            else {
                var nombre = this.informacion[0].nombreCliente;
                this.filtrarClientePanelDos(nombre);
                this.auxiliar = this.informacion;
                this.informacion.forEach(function (element) {
                    _this.montoTotal += element.monto;
                });
            }
        }
    };
    SeguimientoComponent.prototype.obtenerConfirmacion = function () {
        var _this = this;
        this.tipoCotizacion = 2;
        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();
        this.refrescar = false;
        setTimeout(function () {
            _this.refrescar = true;
        }, 10);
        this.respaldoDatos = [];
        this.auxiliar = [];
        this.montoTotal = 0;
        this.rango = 1;
        this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] };
        this.lstAux1 = [];
        this.nombres = [];
        this.informacion = [];
        this.nuevaLista = [];
        this.lstCotizaciones.forEach(function (element) {
            var Nueva = new Date(element.fechaSiguienteContacto);
            if (element.tipoSeguimiento === "Confirmación") {
                _this.lstAux1.push(element);
            }
        });
        this.lstAux1.forEach(function (element) {
            if (_this.nombres.lastIndexOf(element.nombreCliente) === -1) {
                _this.nombres.push(element.nombreCliente);
            }
        });
        this.nombres.forEach(function (element) {
            _this.lstAux1.forEach(function (e) {
                if (element === e.nombreCliente) {
                    _this.objetoInfo.nombreCliente = e.nombreCliente;
                    _this.objetoInfo.monto = _this.objetoInfo.monto + e.montoCotizacion;
                    _this.objetoInfo.nombreEV = e.nombreEV;
                    _this.objetoInfo.nombreEsac = e.nombreVendedor;
                    _this.objetoInfo.numCotizaciones = _this.objetoInfo.numCotizaciones + 1;
                    _this.objetoInfo.numPartidas = _this.objetoInfo.numPartidas + e.partidas;
                    _this.objetoInfo.numPiezas = _this.objetoInfo.numPiezas + e.piezas;
                    _this.objetoInfo.tipoSeguimiento = e.tipoSeguimiento;
                    _this.objetoInfo.nombreEVT = e.nombreEVT;
                    if (_this.objetoInfo.folioCotizacion.indexOf(e.folioCotizacion) === -1) {
                        _this.objetoInfo.folioCotizacion.push(e.folioCotizacion);
                    }
                }
            });
            _this.informacion.push(_this.objetoInfo);
            _this.respaldoDatos.push(_this.objetoInfo);
            _this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] };
        });
        if (this.informacion.length === 0) {
            this.tempCotizaciones = [];
            this.lstInfo = [];
            this.lstElementos = [];
            this.nombreCliente = "";
            this.folio = "";
        }
        else {
            var nombre = this.informacion[0].nombreCliente;
            this.filtrarClientePanelDos(nombre);
            this.auxiliar = this.informacion;
            this.informacion.forEach(function (element) {
                _this.montoTotal += element.monto;
            });
        }
    };
    SeguimientoComponent.prototype.obtenerCancelable = function () {
        var _this = this;
        this.tipoCotizacion = 3;
        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();
        this.refrescar = false;
        this.respaldoDatos = [];
        this.auxiliar = [];
        this.montoTotal = 0;
        this.rango = 1;
        this.lstAux1 = [];
        this.tipoCotizacion = 3;
        this.nuevaLista = [];
        this.nombres = [];
        this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] };
        this.informacion = [];
        this.lstCotizaciones.forEach(function (element) {
            var fechaNueva = new Date(element.fechaSiguienteContacto);
            if (element.tipoSeguimiento === "Cancelable" && (_this.fechaGeneral.getDate() === fechaNueva.getDate() && _this.fechaGeneral.getMonth() === fechaNueva.getMonth() && _this.fechaGeneral.getFullYear() === fechaNueva.getFullYear())) {
                _this.lstAux1.push(element);
            }
        });
        this.lstAux1.forEach(function (element) {
            if (_this.nombres.lastIndexOf(element.nombreCliente) === -1) {
                _this.nombres.push(element.nombreCliente);
            }
        });
        this.nombres.forEach(function (element) {
            _this.lstAux1.forEach(function (e) {
                if (element === e.nombreCliente) {
                    _this.objetoInfo.nombreCliente = e.nombreCliente;
                    _this.objetoInfo.monto = _this.objetoInfo.monto + e.montoCotizacion;
                    _this.objetoInfo.nombreEV = e.nombreEV;
                    _this.objetoInfo.nombreEsac = e.nombreVendedor;
                    _this.objetoInfo.numCotizaciones = _this.objetoInfo.numCotizaciones + 1;
                    _this.objetoInfo.numPartidas = _this.objetoInfo.numPartidas + e.partidas;
                    _this.objetoInfo.numPiezas = _this.objetoInfo.numPiezas + e.piezas;
                    _this.objetoInfo.tipoSeguimiento = e.tipoSeguimiento;
                    _this.objetoInfo.nombreEVT = e.nombreEVT;
                    if (_this.objetoInfo.folioCotizacion.indexOf(e.folioCotizacion) === -1) {
                        _this.objetoInfo.folioCotizacion.push(e.folioCotizacion);
                    }
                }
            });
            _this.informacion.push(_this.objetoInfo);
            _this.respaldoDatos.push(_this.objetoInfo);
            _this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] };
        });
        if (this.informacion.length === 0) {
            this.tempCotizaciones = [];
            this.lstInfo = [];
            this.lstElementos = [];
            this.nombreCliente = "";
            this.folio = "";
        }
        else {
            var nombre = this.informacion[0].nombreCliente;
            this.filtrarClientePanelDos(nombre);
            this.auxiliar = this.informacion;
            this.informacion.forEach(function (element) {
                _this.montoTotal += element.monto;
            });
        }
        setTimeout(function () {
            _this.refrescar = true;
        }, 10);
    };
    SeguimientoComponent.prototype.todos = function () {
        var _this = this;
        this.informacion = [];
        this.respaldoDatos = [];
        var temporal = [];
        var fechaC = new Date();
        var nuevaFecha = new Date();
        if (this.tipoCotizacion === 1) {
            this.tipo = "Seguimiento";
        }
        else if (this.tipoCotizacion === 2) {
            this.tipo = "Confirmación";
        }
        else if (this.tipoCotizacion === 3) {
            this.tipo = "Cancelable";
        }
        var fechaHoy = new Date();
        var fechaManana = new Date();
        fechaManana.setDate(fechaManana.getDate() + 1);
        var fechaPasadoMa = new Date();
        fechaPasadoMa.setDate(fechaPasadoMa.getDate() + 2);
        var fechaPosPasado = new Date();
        fechaPosPasado.setDate(fechaPosPasado.getDate() + 3);
        var fechaFuturo = new Date();
        fechaFuturo.setDate(fechaFuturo.getDate() + 4);
        var fechaAyer = new Date();
        fechaAyer.setDate(fechaAyer.getDate() - 1);
        var fechaAntier = new Date();
        fechaAntier.setDate(fechaAntier.getDate() - 2);
        var fechaAnteAtier = new Date();
        fechaAnteAtier.setDate(fechaAnteAtier.getDate() - 3);
        var fechaPasado = new Date();
        fechaPasado.setDate(fechaPasado.getDate() - 4);
        this.lstAux1 = [];
        this.nuevaLista = [];
        this.nombres = [];
        this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] };
        this.informacion = [];
        this.lstCotizaciones.forEach(function (element) {
            var fechaI = new Date(element.fechaSiguienteContacto);
            if ((element.tipoSeguimiento === _this.tipo) && ((fechaI.getDate() === fechaHoy.getDate() && fechaI.getMonth() === fechaHoy.getMonth() && fechaI.getFullYear() === fechaHoy.getFullYear())
                || (fechaI.getDate() === fechaManana.getDate() && fechaI.getMonth() === fechaManana.getMonth() && fechaI.getFullYear() === fechaManana.getFullYear()) || (fechaI.getDate() === fechaPasadoMa.getDate() && fechaI.getMonth() === fechaPasadoMa.getMonth() && fechaI.getFullYear() === fechaPasadoMa.getFullYear()) || (fechaI.getDate() === fechaPosPasado.getDate() && fechaI.getMonth() === fechaPosPasado.getMonth() && fechaI.getFullYear() === fechaPosPasado.getFullYear())
                || (fechaI.getDate() === fechaFuturo.getDate() && fechaI.getMonth() === fechaFuturo.getMonth() && fechaI.getFullYear() === fechaFuturo.getFullYear()) || (fechaI.getDate() === fechaAyer.getDate() && fechaI.getMonth() === fechaAyer.getMonth() && fechaI.getFullYear() === fechaAyer.getFullYear())
                || (fechaI.getDate() === fechaAntier.getDate() && fechaI.getMonth() === fechaAntier.getMonth() && fechaI.getFullYear() === fechaAntier.getFullYear()) || (fechaI.getDate() === fechaAnteAtier.getDate() && fechaI.getMonth() === fechaAnteAtier.getMonth() && fechaI.getFullYear() === fechaAnteAtier.getFullYear()) || (fechaI.getDate() === fechaPasado.getDate() && fechaI.getMonth() === fechaPasado.getMonth() && fechaI.getFullYear() === fechaPasado.getFullYear()))) {
                _this.lstAux1.push(element);
            }
        });
        this.lstAux1.forEach(function (element) {
            if (_this.nombres.lastIndexOf(element.nombreCliente) === -1) {
                _this.nombres.push(element.nombreCliente);
            }
        });
        this.nombres.forEach(function (element) {
            _this.lstAux1.forEach(function (e) {
                if (element === e.nombreCliente) {
                    _this.objetoInfo.nombreCliente = e.nombreCliente;
                    _this.objetoInfo.monto = _this.objetoInfo.monto + e.montoCotizacion;
                    _this.objetoInfo.nombreEV = e.nombreEV;
                    _this.objetoInfo.nombreEsac = e.nombreVendedor;
                    _this.objetoInfo.numCotizaciones = _this.objetoInfo.numCotizaciones + 1;
                    _this.objetoInfo.numPartidas = _this.objetoInfo.numPartidas + e.partidas;
                    _this.objetoInfo.numPiezas = _this.objetoInfo.numPiezas + e.piezas;
                    _this.objetoInfo.nombreEVT = e.nombreEVT;
                    if (_this.objetoInfo.folioCotizacion.indexOf(e.folioCotizacion) === -1) {
                        _this.objetoInfo.folioCotizacion.push(e.folioCotizacion);
                    }
                }
            });
            _this.informacion.push(_this.objetoInfo);
            _this.respaldoDatos.push(_this.objetoInfo);
            _this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] };
        });
        var nombre = this.informacion[0].nombreCliente;
        this.filtrarClientePanelDos(nombre);
        this.auxiliar = this.informacion;
        this.informacion.forEach(function (element) {
            _this.montoTotal += element.monto;
        });
        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();
    };
    SeguimientoComponent.prototype.mostrarDatos = function ($event) {
        this.mostrar = true;
        if (!this.avanzada) {
            this.mostrarDatosRapida($event);
        }
        else {
            if ($event.Datos[0].nombre === "--TODOS--") {
                $event.Datos[0].nombre = "";
            }
            if ($event.Datos[1].nombre === "--TODOS--") {
                $event.Datos[1].nombre = "";
            }
            if ($event.Datos[2].nombre === "--TODOS--") {
                $event.Datos[2].nombre = "";
            }
            if ($event.Datos[3].nombre === "--TODOS--") {
                $event.Datos[3].nombre = "";
            }
            if ($event.Datos[4].nombre === "--TODOS--") {
                $event.Datos[4].nombre = "";
            }
            var cuerpo = {
                confirmacion: 2,
                cliente: $event.Datos[0].nombre,
                empleadoString: $event.Datos[1].nombre,
                tipo: $event.Datos[2].nombre,
                marca: $event.Datos[3].nombre,
                control: $event.Datos[4].nombre,
                master: 0
            };
            var tipo = void 0;
            this.tipoCotizacion === 1 ? tipo = "Seguimiento" : this.tipoCotizacion === 2 ? tipo = "Confirmacion" : this.tipoCotizacion === 3 ? tipo = "Cancelable" : '';
            this.obtenerCotizacionesEnSeguimientoEnPartidas(cuerpo, tipo, null);
            if ($event.Datos[0].nombre === "") {
                $event.Datos[0].nombre = "--TODOS--";
            }
            if ($event.Datos[1].nombre === "") {
                $event.Datos[1].nombre = "--TODOS--";
            }
            if ($event.Datos[2].nombre === "") {
                $event.Datos[2].nombre = "--TODOS--";
            }
            if ($event.Datos[3].nombre === "") {
                $event.Datos[3].nombre = "--TODOS--";
            }
            if ($event.Datos[4].nombre === "") {
                $event.Datos[4].nombre = "--TODOS--";
            }
        }
    };
    SeguimientoComponent.prototype.mostrarDatosRapida = function ($event) {
        var _this = this;
        this.informacion = [];
        this.filtroNombre = [];
        this.avanzada = false;
        this.lstCotizaciones = [];
        if ($event.Datos[0].nombre === "--TODOS--" && $event.textbox === "") {
            var parametros = {
                confirmacion: 2,
                cliente: "",
                empleadoString: "",
                tipo: "",
                marca: "",
                control: "",
                master: 0
            };
            this.coreComponent.openModal(0);
            this._seguimientoService.obtenerCotizacionesEnSeguimientoEnPartidas(parametros).subscribe(function (data) {
                _this.lstCotizaciones = data.current;
                _this.coreComponent.closeModal(0);
                _this.todos();
            }, function (error) {
            });
        }
        else {
            if ($event.Datos[0].nombre === "--TODOS--" && $event.textbox != "") {
                this.respaldoDatos.forEach(function (cotizacion, index) {
                    cotizacion.folioCotizacion.forEach(function (folio) {
                        if (folio === $event.textbox) {
                            _this.informacion.push(cotizacion);
                        }
                    });
                });
                var nombre = this.informacion[0].nombreCliente;
                this.filtrarClientePanelDos(nombre);
            }
            else if ($event.Datos[0].nombre != "--TODOS--" && $event.textbox === "") {
                this.respaldoDatos.forEach(function (cotizacion, index) {
                    if ($event.Datos[0].nombre === cotizacion.nombreCliente) {
                        _this.informacion.push(cotizacion);
                    }
                });
                var nombre = this.informacion[0].nombreCliente;
                this.filtrarClientePanelDos(nombre);
            }
            else if ($event.Datos[0].nombre != "--TODOS--" && $event.textbox != "") {
                this.respaldoDatos.forEach(function (cotizacion, index) {
                    cotizacion.folioCotizacion.forEach(function (folio) {
                        if (folio === $event.textbox) {
                            _this.informacion.push(cotizacion);
                        }
                    });
                });
                var nombre = this.informacion[0].nombreCliente;
                this.filtrarClientePanelDos(nombre);
            }
        }
    };
    SeguimientoComponent.prototype.todo = function () {
        var _this = this;
        this.montoTotal = 0;
        this.informacion = [];
        this.informacion = this.auxiliar;
        this.rango = 1;
        this.informacion.forEach(function (element) {
            _this.montoTotal += element.monto;
        });
        var nombre = this.informacion[0].nombreCliente;
        this.filtrarClientePanelDos(nombre);
    };
    SeguimientoComponent.prototype.diezmil = function () {
        var _this = this;
        this.rango = 2;
        var nueva = [];
        this.auxiliar.forEach(function (element) {
            if (element.monto > 10000) {
                nueva.push(element);
                _this.montoTotal += element.monto;
            }
        });
        this.informacion = [];
        this.informacion = nueva;
        var nombre = this.informacion[0].nombreCliente;
        this.filtrarClientePanelDos(nombre);
    };
    SeguimientoComponent.prototype.dosmil = function () {
        var _this = this;
        this.rango = 3;
        var nueva = [];
        this.auxiliar.forEach(function (element) {
            if (element.monto > 2000 && element.monto <= 10000) {
                nueva.push(element);
                _this.montoTotal += element.monto;
            }
        });
        this.informacion = [];
        this.informacion = nueva;
        var nombre = this.informacion[0].nombreCliente;
        this.filtrarClientePanelDos(nombre);
    };
    SeguimientoComponent.prototype.cero = function () {
        var _this = this;
        this.montoTotal = 0;
        this.rango = 4;
        var nueva = [];
        this.auxiliar.forEach(function (element) {
            if (element.monto <= 2000 && element.monto >= 0) {
                nueva.push(element);
                _this.montoTotal += element.monto;
            }
        });
        this.informacion = [];
        this.informacion = nueva;
        var nombre = this.informacion[0].nombreCliente;
        this.filtrarClientePanelDos(nombre);
    };
    /**************GRAFICAS****************/
    SeguimientoComponent.prototype.limpiarVariablesGrafica = function () {
        this.nuevoConfirmacion = [];
        this.filtroEjecutivoVentas = [];
        this.filtroNombreClientes = [];
        this.filtroMarcas = [];
        this.filtroEjecutivoServicio = [];
        this.GClientes = [];
        this.ejecutivoServicio = [];
        this.ejecutivoVentas = [];
        this.nuevo = [];
        this.filtroNombreClientes1 = [];
        this.nuevoEServicio = [];
        this.nuevoMarcas = [];
        this.nuevoVendedor = [];
        this.nuevoClientes = [];
        this.filtroNuevo2 = [];
        this.nuevoFiltroMarcas = [];
        if (this.tipoCotizacion === 1) {
            for (var _i = 0, _a = this.FiltroSeguimiento; _i < _a.length; _i++) {
                var cotizacion = _a[_i];
                this.filtroNombreClientes.push(cotizacion.nombreCliente);
                if (this.filtroEjecutivoVentas.indexOf(cotizacion.nombreEV) === -1) {
                    this.filtroEjecutivoVentas.push(cotizacion.nombreEV);
                }
                this.filtroMarcas.push(cotizacion.marca);
                if (cotizacion.nombreVendedor === null) {
                    cotizacion.nombreVendedor = "LVera";
                }
                if (this.filtroEjecutivoServicio.indexOf(cotizacion.nombreVendedor) === -1) {
                    this.filtroEjecutivoServicio.push(cotizacion.nombreVendedor);
                }
            }
        }
        else if (this.tipoCotizacion === 2) {
            for (var _b = 0, _c = this.FiltroConfirmacion; _b < _c.length; _b++) {
                var cotizacion = _c[_b];
                this.filtroNombreClientes.push(cotizacion.nombreCliente);
                if (this.filtroEjecutivoVentas.indexOf(cotizacion.nombreEV) === -1) {
                    this.filtroEjecutivoVentas.push(cotizacion.nombreEV);
                }
                this.filtroMarcas.push(cotizacion.marca);
                if (cotizacion.nombreVendedor === null) {
                    cotizacion.nombreVendedor = "LVera";
                }
                if (this.filtroEjecutivoServicio.indexOf(cotizacion.nombreVendedor) === -1) {
                    this.filtroEjecutivoServicio.push(cotizacion.nombreVendedor);
                }
            }
        }
        else if (this.tipoCotizacion === 3) {
            for (var _d = 0, _e = this.FiltroCancelable; _d < _e.length; _d++) {
                var cotizacion = _e[_d];
                this.filtroNombreClientes.push(cotizacion.nombreCliente);
                if (this.filtroEjecutivoVentas.indexOf(cotizacion.nombreEV) === -1) {
                    this.filtroEjecutivoVentas.push(cotizacion.nombreEV);
                }
                this.filtroMarcas.push(cotizacion.marca);
                if (cotizacion.nombreVendedor === null) {
                    cotizacion.nombreVendedor = "LVera";
                }
                if (this.filtroEjecutivoServicio.indexOf(cotizacion.nombreVendedor) === -1) {
                    this.filtroEjecutivoServicio.push(cotizacion.nombreVendedor);
                }
            }
        }
        var j;
        var i;
        var tam = this.filtroMarcas.length, objVentas = {};
        for (i = 0; i < tam; i++) {
            objVentas[this.filtroMarcas[i]] = 0;
        }
        for (j in objVentas) {
            this.filtroNuevo2.push(j);
        }
        this.lstGraficaClientes = [];
        this.nombreEmpresas = [];
        this.lstEstado = [];
        var valoresCliente = [];
        var valoresC = [];
        this.filtroNombreClientes.forEach(function () {
            valoresCliente.push([0, 0, 0, 0, 0]);
            valoresC.push(0);
        });
        var valoresMarca = [];
        var valoresM = [];
        this.filtroNuevo2.forEach(function () {
            valoresMarca.push([0, 0, 0, 0, 0]);
            valoresM.push(0);
        });
        var valoresVendedor = [];
        var valoresV = [];
        this.filtroEjecutivoVentas.forEach(function () {
            valoresVendedor.push([0, 0, 0, 0, 0]);
            valoresV.push(0);
        });
        var valoresEjecutivoSer = [];
        var valoresE = [];
        this.filtroEjecutivoServicio.forEach(function () {
            valoresEjecutivoSer.push([0, 0, 0, 0, 0]);
            valoresE.push(0);
        });
        this.nivelIngreso = {
            titulo: "Totales",
            labels: ["MM", "AAplus", "AB", "AM", "MB", "AA", "MA", "Bajo"],
            valores: [0, 0, 0, 0, 0, 0, 0, 0],
            labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        };
        this.GClientes = {
            titulo: "Totales",
            labels: this.filtroNombreClientes,
            valores: valoresC,
            labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: valoresCliente
        };
        this.estadoSeguimiento = {
            titulo: "Totales",
            labels: ["Seguimiento", "Cancelable", "Confirmación"],
            valores: [0, 0, 0],
            labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        };
        this.ejecutivoVentas = {
            titulo: "Totales",
            labels: this.filtroEjecutivoVentas,
            valores: valoresV,
            labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: valoresVendedor
        };
        this.tipoProducto = {
            titulo: "Totales",
            labels: ["Estandares", "Publicaciones", "Reactivos", "Labware", "Fletes"],
            valores: [0, 0, 0, 0, 0],
            labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        };
        this.marcas = {
            titulo: "Totales",
            labels: this.filtroNuevo2,
            valores: valoresM,
            labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: valoresMarca
        };
        this.estadoConfirmacion = {
            titulo: "Totales",
            labels: ["No Trabajada", "Cotización no recibida", "Contacto No Localizado"],
            valores: [0, 0, 0],
            labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        };
        this.ejecutivoServicio = {
            titulo: "Totales",
            labels: this.filtroEjecutivoServicio,
            valores: valoresE,
            labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: valoresEjecutivoSer
        };
        this.sumita = 0;
    };
    SeguimientoComponent.prototype.calcularDatosParaGraficas = function () {
        var _this = this;
        if (this.tipoCotizacion === 1) {
            for (var _i = 0, _a = this.FiltroSeguimiento; _i < _a.length; _i++) {
                var cotizacion = _a[_i];
                this.llenarTotales(this.nivelIngreso, cotizacion, "NIVEL_INGRESO");
                this.llenarTotales(this.GClientes, cotizacion, "CLIENTES");
                this.llenarTotales(this.estadoSeguimiento, cotizacion, "ESTADO_SEGUIMIENTO");
                this.llenarTotales(this.ejecutivoVentas, cotizacion, "EJECUTIVO_VENTAS");
                this.llenarTotales(this.tipoProducto, cotizacion, "TIPO_PRODUCTO");
                this.llenarTotales(this.marcas, cotizacion, "MARCAS");
                this.llenarTotales(this.ejecutivoServicio, cotizacion, "EJECUTIVO_SERVICIO");
            }
        }
        else if (this.tipoCotizacion === 2) {
            for (var _b = 0, _c = this.FiltroConfirmacion; _b < _c.length; _b++) {
                var cotizacion = _c[_b];
                this.llenarTotales(this.nivelIngreso, cotizacion, "NIVEL_INGRESO");
                this.llenarTotales(this.GClientes, cotizacion, "CLIENTES");
                this.llenarTotales(this.estadoSeguimiento, cotizacion, "ESTADO_SEGUIMIENTO");
                this.llenarTotales(this.ejecutivoVentas, cotizacion, "EJECUTIVO_VENTAS");
                this.llenarTotales(this.tipoProducto, cotizacion, "TIPO_PRODUCTO");
                this.llenarTotales(this.marcas, cotizacion, "MARCAS");
                this.llenarTotales(this.ejecutivoServicio, cotizacion, "EJECUTIVO_SERVICIO");
            }
        }
        else if (this.tipoCotizacion === 3) {
            for (var _d = 0, _e = this.FiltroCancelable; _d < _e.length; _d++) {
                var cotizacion = _e[_d];
                this.llenarTotales(this.nivelIngreso, cotizacion, "NIVEL_INGRESO");
                this.llenarTotales(this.GClientes, cotizacion, "CLIENTES");
                this.llenarTotales(this.estadoSeguimiento, cotizacion, "ESTADO_SEGUIMIENTO");
                this.llenarTotales(this.ejecutivoVentas, cotizacion, "EJECUTIVO_VENTAS");
                this.llenarTotales(this.tipoProducto, cotizacion, "TIPO_PRODUCTO");
                this.llenarTotales(this.marcas, cotizacion, "MARCAS");
                this.llenarTotales(this.ejecutivoServicio, cotizacion, "EJECUTIVO_SERVICIO");
            }
        }
        for (var _f = 0, _g = this.lstAux; _f < _g.length; _f++) {
            var cotizacion = _g[_f];
            this.llenarTotales(this.estadoConfirmacion, cotizacion, "ESTADO_CONFIRMACION");
        }
        this.graficasCargadas = true;
        this.nivelIngreso.valuesExtras[0] = this.nivelIngreso.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.nivelIngreso.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.GClientes.valuesExtras[0] = this.GClientes.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.GClientes.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.estadoSeguimiento.valuesExtras[0] = this.estadoSeguimiento.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.estadoSeguimiento.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.ejecutivoVentas.valuesExtras[0] = this.ejecutivoVentas.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.ejecutivoVentas.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.tipoProducto.valuesExtras[0] = this.tipoProducto.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.tipoProducto.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.marcas.valuesExtras[0] = this.marcas.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.marcas.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.estadoConfirmacion.valuesExtras[0] = this.estadoConfirmacion.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.estadoConfirmacion.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.ejecutivoServicio.valuesExtras[0] = this.ejecutivoServicio.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.ejecutivoServicio.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.CotizacionesGlobal = 0;
        this.informacion.forEach(function (element) {
            _this.CotizacionesGlobal += element.folioCotizacion.length;
        });
        this.nivelIngreso.valuesExtras[2] = this.CotizacionesGlobal;
        this.GClientes.valuesExtras[2] = this.CotizacionesGlobal;
        this.estadoSeguimiento.valuesExtras[2] = this.CotizacionesGlobal;
        this.ejecutivoVentas.valuesExtras[2] = this.CotizacionesGlobal;
        this.tipoProducto.valuesExtras[2] = this.CotizacionesGlobal;
        this.marcas.valuesExtras[2] = this.CotizacionesGlobal;
        this.estadoConfirmacion[2] = this.CotizacionesGlobal;
        this.ejecutivoServicio.valuesExtras[2] = this.CotizacionesGlobal;
        this.graficasValores = [];
        this.refrescar = false;
        setTimeout(function () {
            _this.refrescar = true;
        }, 10);
        this.graficasValores = [
            this.nivelIngreso,
            this.GClientes,
            this.estadoSeguimiento,
            this.ejecutivoVentas,
            this.tipoProducto,
            this.marcas,
            this.estadoConfirmacion,
            this.ejecutivoServicio
        ];
        this.refrescar = false;
        setTimeout(function () {
            _this.refrescar = true;
        }, 10);
    };
    SeguimientoComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        switch (graficaElegida) {
            case "NIVEL_INGRESO":
                if (this.filtroNombreClientes1.indexOf(elemento.nombreCliente) === -1) {
                    this.filtroNombreClientes1.push(elemento.nombreCliente);
                    total.valuesExtras[1]++;
                    if (elemento.nivelIngreso === 'MM') {
                        total.valuesExtrasHover[0][1]++;
                        total.valuesExtrasHover[0][2]++;
                    }
                    else if (elemento.nivelIngreso === "AAplus") {
                        total.valuesExtrasHover[1][1]++;
                        total.valuesExtrasHover[1][2]++;
                    }
                    else if (elemento.nivelIngreso === "AB") {
                        total.valuesExtrasHover[2][1]++;
                        total.valuesExtrasHover[2][2]++;
                    }
                    else if (elemento.nivelIngreso === "AM") {
                        total.valuesExtrasHover[3][1]++;
                        total.valuesExtrasHover[3][2]++;
                    }
                    else if (elemento.nivelIngreso === "MB") {
                        total.valuesExtrasHover[4][1]++;
                        total.valuesExtrasHover[4][2]++;
                    }
                    else if (elemento.nivelIngreso === "AA") {
                        total.valuesExtrasHover[5][1]++;
                        total.valuesExtrasHover[5][2]++;
                    }
                    else if (elemento.nivelIngreso === "MA") {
                        total.valuesExtrasHover[6][1]++;
                        total.valuesExtrasHover[6][2]++;
                    }
                    else if (elemento.nivelIngreso === "Bajo") {
                        total.valuesExtrasHover[7][1]++;
                        total.valuesExtrasHover[7][2]++;
                    }
                }
                total.valuesExtras[0] += +(elemento.montoCotizacion.toFixed(2));
                total.valuesExtras[3]++;
                total.valuesExtras[4] += elemento.piezas;
                if (elemento.nivelIngreso === 'MM') {
                    total.valores[0]++;
                    total.valuesExtrasHover[0][3]++;
                    total.valuesExtrasHover[0][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[0][3]++;
                    total.valuesExtrasHover[0][4] += elemento.piezas;
                }
                else if (elemento.nivelIngreso === "AAplus") {
                    total.valores[1]++;
                    total.valuesExtrasHover[0][3]++;
                    total.valuesExtrasHover[1][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[1][3]++;
                    total.valuesExtrasHover[1][4] += elemento.piezas;
                }
                else if (elemento.nivelIngreso === "AB") {
                    total.valores[2]++;
                    total.valuesExtrasHover[0][3]++;
                    total.valuesExtrasHover[2][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[2][3]++;
                    total.valuesExtrasHover[2][4] += elemento.piezas;
                }
                else if (elemento.nivelIngreso === "AM") {
                    total.valores[3]++;
                    total.valuesExtrasHover[0][3]++;
                    total.valuesExtrasHover[3][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[3][3]++;
                    total.valuesExtrasHover[3][4] += elemento.piezas;
                }
                else if (elemento.nivelIngreso === "MB") {
                    total.valores[4]++;
                    total.valuesExtrasHover[0][3]++;
                    total.valuesExtrasHover[4][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[4][3]++;
                    total.valuesExtrasHover[4][4] += elemento.piezas;
                }
                else if (elemento.nivelIngreso === "AA") {
                    total.valores[5]++;
                    total.valuesExtrasHover[0][3]++;
                    total.valuesExtrasHover[5][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[5][3]++;
                    total.valuesExtrasHover[5][4] += elemento.piezas;
                }
                else if (elemento.nivelIngreso === "MA") {
                    total.valores[6]++;
                    total.valuesExtrasHover[0][3]++;
                    total.valuesExtrasHover[6][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[6][3]++;
                    total.valuesExtrasHover[6][4] += elemento.piezas;
                }
                else if (elemento.nivelIngreso === "Bajo") {
                    total.valores[7]++;
                    total.valuesExtrasHover[0][3]++;
                    total.valuesExtrasHover[7][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[7][3]++;
                    total.valuesExtrasHover[7][4] += elemento.piezas;
                }
                break;
            case "CLIENTES":
                var posicion2 = this.filtroNombreClientes.indexOf(elemento.nombreCliente);
                if (this.nuevo.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevo.push(elemento.nombreCliente);
                    total.valuesExtras[1]++; //Aumento en clientes
                    total.valuesExtrasHover[posicion2][1]++;
                }
                total.valuesExtras[3]++; // Total de Partidas
                total.valuesExtras[4] += elemento.piezas; // Total de piezas
                total.valores[posicion2] += +(elemento.montoCotizacion.toFixed(2)); //Monto total
                total.valuesExtras[0] += +(elemento.montoCotizacion.toFixed(2));
                total.valuesExtrasHover[posicion2][0] += +(elemento.montoCotizacion.toFixed(2));
                total.valuesExtrasHover[posicion2][2]++; //Suma cotizaciones
                total.valuesExtrasHover[posicion2][3] += elemento.partidas; // Total de Partidas
                total.valuesExtrasHover[posicion2][4] += elemento.piezas;
                break;
            case "ESTADO_SEGUIMIENTO":
                if (this.lstEstado.indexOf(elemento.nombreCliente) === -1) {
                    this.lstEstado.push(elemento.nombreCliente);
                    total.valuesExtras[1]++;
                    if (elemento.tipoSeguimiento === 'Seguimiento') {
                        total.valuesExtrasHover[0][1]++;
                    }
                    else if (elemento.tipoSeguimiento === "Cancelable") {
                        total.valuesExtrasHover[1][1]++;
                    }
                    else if (elemento.tipoSeguimiento === "Confirmación") {
                        total.valuesExtrasHover[2][1]++;
                    }
                }
                total.valuesExtras[3]++;
                total.valuesExtras[0] += +(elemento.montoCotizacion.toFixed(2));
                total.valuesExtras[4] += elemento.piezas;
                if (elemento.tipoSeguimiento === 'Seguimiento') {
                    total.valores[0]++;
                    total.valuesExtrasHover[0][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[0][2]++;
                    total.valuesExtrasHover[0][3]++;
                    total.valuesExtrasHover[0][4] += elemento.piezas;
                }
                else if (elemento.tipoSeguimiento === "Cancelable") {
                    total.valores[1]++;
                    total.valuesExtrasHover[1][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[1][2]++;
                    total.valuesExtrasHover[1][3]++;
                    total.valuesExtrasHover[1][4] += elemento.piezas;
                }
                else if (elemento.tipoSeguimiento === "Confirmación") {
                    total.valores[2]++;
                    total.valuesExtrasHover[2][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[2][2]++;
                    total.valuesExtrasHover[2][3]++;
                    total.valuesExtrasHover[2][4] += elemento.piezas;
                }
                break;
            case "EJECUTIVO_VENTAS":
                var posicion = this.filtroEjecutivoVentas.indexOf(elemento.nombreEV);
                if (this.nuevoVendedor.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevoVendedor.push(elemento.nombreCliente);
                    total.valores[posicion] += +(elemento.montoCotizacion.toFixed(2)); //Monto total
                    total.valuesExtras[1]++; //Aumento en clientes
                    total.valuesExtrasHover[posicion][1]++;
                }
                total.valuesExtras[3]++; // Total de Partidas
                total.valuesExtras[4] += elemento.piezas; // Total de piezas
                total.valuesExtras[0] += +(elemento.montoCotizacion.toFixed(2));
                total.valuesExtrasHover[posicion][0] += +(elemento.montoCotizacion.toFixed(2));
                total.valuesExtrasHover[posicion][2]++;
                total.valuesExtrasHover[posicion][3]++; // Total de Partidas
                total.valuesExtrasHover[posicion][4] += elemento.piezas;
                break;
            case "TIPO_PRODUCTO":
                if (this.nuevoClientes.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevoClientes.push(elemento.nombreCliente);
                    total.valuesExtras[1]++;
                    if (elemento.tipoProduct === 'Estandares') {
                        total.valuesExtrasHover[0][1]++;
                    }
                    else if (elemento.tipoProduct === "Publicaciones") {
                        total.valuesExtrasHover[1][1]++;
                    }
                    else if (elemento.tipoProduct === "Reactivos") {
                        total.valuesExtrasHover[2][1]++;
                    }
                    else if (elemento.tipoProduct === "Labware") {
                        total.valuesExtrasHover[3][1]++;
                    }
                    else if (elemento.tipoProduct === "Fletes") {
                        total.valuesExtrasHover[4][1]++;
                    }
                }
                total.valuesExtras[0] += +(elemento.montoCotizacion.toFixed(2));
                ;
                total.valuesExtras[3]++;
                total.valuesExtras[4] += elemento.piezas;
                if (elemento.tipoProduct === 'Estandares') {
                    total.valores[0]++;
                    total.valuesExtrasHover[0][0] += +(elemento.montoCotizacion.toFixed(2));
                    ;
                    total.valuesExtrasHover[0][2]++;
                    total.valuesExtrasHover[0][3] += elemento.partidas;
                    total.valuesExtrasHover[0][4] += elemento.piezas;
                }
                else if (elemento.tipoProduct === "Publicaciones") {
                    total.valores[1]++;
                    total.valuesExtrasHover[1][0] += +(elemento.montoCotizacion.toFixed(2));
                    ;
                    total.valuesExtrasHover[1][2]++;
                    total.valuesExtrasHover[1][3] += elemento.partidas;
                    total.valuesExtrasHover[1][4] += elemento.piezas;
                }
                else if (elemento.tipoProduct === "Reactivos") {
                    total.valores[2]++;
                    total.valuesExtrasHover[2][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[2][2]++;
                    total.valuesExtrasHover[2][3] += elemento.partidas;
                    total.valuesExtrasHover[2][4] += +elemento.piezas;
                }
                else if (elemento.tipoProduct === "Labware") {
                    total.valores[3]++;
                    total.valuesExtrasHover[3][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[3][2]++;
                    total.valuesExtrasHover[3][3] += elemento.partidas;
                    total.valuesExtrasHover[3][4] += elemento.piezas;
                }
                else if (elemento.tipoProduct === "Fletes") {
                    total.valores[4]++;
                    total.valuesExtrasHover[4][0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtrasHover[4][2]++;
                    total.valuesExtrasHover[4][3] += elemento.partidas;
                    total.valuesExtrasHover[4][4] += elemento.piezas;
                }
                break;
            case "MARCAS":
                var posicionM = this.filtroNuevo2.indexOf(elemento.marca);
                if (this.nuevoMarcas.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevoMarcas.push(elemento.nombreCliente);
                    total.valores[posicionM] += +(elemento.montoCotizacion.toFixed(2));
                    ; //Monto total
                    total.valuesExtras[1]++; //Aumento en clientes
                    total.valuesExtrasHover[posicionM][1]++;
                }
                total.valuesExtras[3]++; // Total de Partidas
                total.valuesExtras[4] += elemento.piezas; // Total de piezas
                total.valuesExtras[0] += +(elemento.montoCotizacion.toFixed(2));
                total.valuesExtrasHover[posicionM][0] += +(elemento.montoCotizacion.toFixed(2));
                total.valuesExtrasHover[posicionM][1]++;
                total.valuesExtrasHover[posicionM][2]++;
                total.valuesExtrasHover[posicionM][3] += elemento.partidas; // Total de Partidas
                total.valuesExtrasHover[posicionM][4]++;
                break;
            case "ESTADO_CONFIRMACION":
                if (this.nuevoConfirmacion.indexOf(elemento._nombreCliente) === -1) {
                    this.nuevoConfirmacion.push(elemento._nombreCliente);
                    total.valuesExtras[1]++;
                    if (elemento._piezas != undefined) {
                        total.valuesExtras[4] = total.valuesExtras[4] + elemento._piezas;
                    }
                }
                total.valuesExtras[0] += +(elemento._monto.toFixed(2));
                total.valuesExtras[3]++;
                if (elemento._estatusMasCritico === 'No Trabajada') {
                    total.valores[0]++;
                    total.valuesExtrasHover[0][0] += +(elemento._monto.toFixed(2));
                    total.valuesExtrasHover[0][1]++;
                    total.valuesExtrasHover[0][2]++;
                    elemento._partidas.forEach(function (par) {
                        total.valuesExtrasHover[0][3] = total.valuesExtrasHover[0][3] + par;
                    });
                    if (elemento._piezas != undefined) {
                        total.valuesExtrasHover[0][4] = total.valuesExtrasHover[0][4] + elemento._piezas;
                    }
                }
                else if (elemento._estatusMasCritico === "Cotización no recibida") {
                    total.valores[1]++;
                    total.valuesExtrasHover[1][0] += +(elemento._monto.toFixed(2));
                    total.valuesExtrasHover[1][2]++;
                    elemento._partidas.forEach(function (par) {
                        total.valuesExtrasHover[1][3] = total.valuesExtrasHover[1][3] + par;
                    });
                    if (elemento._piezas != undefined) {
                        total.valuesExtrasHover[1][4] = total.valuesExtrasHover[1][4] + elemento._piezas;
                    }
                }
                else if (elemento._estatusMasCritico === "Contacto No Localizado") {
                    total.valores[2]++;
                    total.valuesExtrasHover[2][0] += +(elemento._monto.toFixed(2));
                    total.valuesExtrasHover[2][2]++;
                    elemento._partidas.forEach(function (par) {
                        total.valuesExtrasHover[2][3] = total.valuesExtrasHover[2][3] + par;
                    });
                    if (elemento._piezas != undefined) {
                        total.valuesExtrasHover[2][4] = total.valuesExtrasHover[2][4] + elemento._piezas;
                    }
                }
                break;
            case "EJECUTIVO_SERVICIO":
                if (elemento.nombreVendedor != null) {
                    var posicionV = this.filtroEjecutivoServicio.indexOf(elemento.nombreVendedor);
                    if (this.nuevoEServicio.indexOf(elemento.nombreCliente) === -1) {
                        this.nuevoEServicio.push(elemento.nombreCliente);
                        total.valuesExtrasHover[posicionV][1]++;
                        total.valuesExtras[1]++; //Aumento en clientes
                    }
                    total.valores[posicionV] += +(elemento.montoCotizacion.toFixed(2)); //Monto total
                    total.valuesExtras[4] += elemento.piezas; // Total de piezas
                    total.valuesExtras[0] += +(elemento.montoCotizacion.toFixed(2));
                    total.valuesExtras[3]++; // Total de Partidas
                    total.valuesExtras[2]++;
                    total.valuesExtrasHover[posicionV][0] += +(elemento.montoCotizacion.toFixed(2));
                    // total.valuesExtrasHover[posicionV][1]++
                    total.valuesExtrasHover[posicionV][2]++;
                    total.valuesExtrasHover[posicionV][3]++; // Total de Partidas
                    total.valuesExtrasHover[posicionV][4] += elemento.piezas;
                }
                break;
        }
    };
    SeguimientoComponent.prototype.showGraphicPanel = function () {
        var _this = this;
        this.showGraphic = true;
        setTimeout(function () { _this.topGraphics = "0"; }, 100);
    };
    SeguimientoComponent.prototype.showTablePanel = function () {
        var _this = this;
        this.topGraphics = "-110%";
        setTimeout(function () { _this.showGraphic = false; }, 300);
    };
    SeguimientoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-facturacion',
            template: __webpack_require__("./src/app/components/gestion/reportes/seguimiento/seguimiento.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/reportes/seguimiento/seguimiento.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_6__services_util_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_7__services_gestion_reportes_seguimiento_seguimiento_service__["a" /* SeguimientoService */]])
    ], SeguimientoComponent);
    return SeguimientoComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/reportes/seguimiento/seguimiento.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoModule", function() { return SeguimientoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__seguimiento_routing_module__ = __webpack_require__("./src/app/components/gestion/reportes/seguimiento/seguimiento-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__seguimiento_component__ = __webpack_require__("./src/app/components/gestion/reportes/seguimiento/seguimiento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SeguimientoModule = /** @class */ (function () {
    function SeguimientoModule() {
    }
    SeguimientoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__seguimiento_routing_module__["a" /* SeguimientoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__seguimiento_component__["a" /* SeguimientoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__seguimiento_component__["a" /* SeguimientoComponent */]
            ]
        })
    ], SeguimientoModule);
    return SeguimientoModule;
}());



/***/ })

});
//# sourceMappingURL=seguimiento.module.chunk.js.map