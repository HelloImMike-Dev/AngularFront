webpackJsonp(["asistencia.module"],{

/***/ "./src/app/components/gestion/consultas/asistencia/asistencia-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenciaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asistencia_component__ = __webpack_require__("./src/app/components/gestion/consultas/asistencia/asistencia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AsistenciaRoutingModule = /** @class */ (function () {
    function AsistenciaRoutingModule() {
    }
    AsistenciaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__asistencia_component__["a" /* AsistenciaComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AsistenciaRoutingModule);
    return AsistenciaRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/asistencia/asistencia.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div (click)=\"backMenu()\">\r\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\r\n  </div>\r\n  |\r\n  <div>CONSULTA DE ASISTENCIA</div>\r\n</div>\r\n<div>\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"filtros\">\r\n\r\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\r\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\r\n            Y la propiedad IsLoader como verdadera\r\n          -->\r\n        <div *ngIf=\"isThereData;else loader\">\r\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\r\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\"></gestion-filter>\r\n        </div>\r\n\r\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\r\n            una propiedad\r\n            IsLoader como Falsa-->\r\n        <ng-template #loader>\r\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\r\n        </ng-template>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"'resultados' + (!showGraphic ? ' visible' : '')\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\"  *ngIf=\"!showGraphic\">\r\n    <div>\r\n      <div>\r\n        RESULTADOS\r\n      </div>\r\n      <div>\r\n        <img [style.margin-right]=\"'15px'\" height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/cobros/graficaminigris.svg\"\r\n          alt=\"\" (click)=\"showGraphicPanel()\">\r\n        <img height=\"20px\" width=\"20px\" src=\"assets/Images/exportar.svg\" alt=\"\" (click)=\"download()\">\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div>\r\n        <div [style.min-width]=\"'50px'\">#</div>\r\n        <div [style.min-width]=\"'100px'\">Colaborador</div>\r\n        <div [style.min-width]=\"'100px'\">Fecha</div>\r\n        <div [style.min-width]=\"'80px'\">Hora</div>\r\n        <div [style.min-width]=\"'140px'\">Tipo checada</div>\r\n        <div [style.min-width]=\"'100px'\">Empresa</div>\r\n        <div [style.min-width]=\"'80px'\">Área</div>\r\n        <div [style.min-width]=\"'130px'\">Departamento</div>\r\n        <div [style.min-width]=\"'130px'\">Categoría</div>\r\n        <div [style.min-width]=\"'120px'\">Incidencia</div>\r\n      </div>\r\n      <div>\r\n        <div *ngFor=\"let item of lstAsistencias; let i = index\">\r\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\r\n          <div [style.min-width]=\"'100px'\">{{item.nombreCorto}}</div>\r\n          <div [style.min-width]=\"'100px'\">{{item.fecha | dateFormatSlash}}</div>\r\n          <div [style.min-width]=\"'80px'\">\r\n            <span *ngIf=\"item.hora != null\">{{item.hora}}</span>\r\n            <span *ngIf=\"item.hora == null\">NA</span>\r\n          </div>\r\n          <div [style.min-width]=\"'140px'\">\r\n            <span *ngIf=\"item.tipoChecada != null\">{{item.tipoChecada}}</span>\r\n            <span *ngIf=\"item.tipoChecada == null\">NA</span>\r\n          </div>\r\n          <div [style.min-width]=\"'100px'\">\r\n            <span *ngIf=\"item.localidad == 'DISTRITO FEDERAL'\">PROQUIFA</span>\r\n            <span *ngIf=\"item.localidad == 'CUERNAVACA'\">RYNDEM</span>\r\n            <span *ngIf=\"item.localidad == 'GUADALAJARA'\">GUADALAJARA</span>\r\n          </div>\r\n          <div [style.min-width]=\"'80px'\">\r\n            <!-- {{item.area}} -->\r\n            <div>\r\n              <img *ngIf=\"item.area == 'OPERACIONES'\" height=\"30px\" src=\"assets/Images/gestion/consultas/asistencias/asis_flechas.svg\"\r\n                matTooltip=\"{{item.area}}\" />\r\n              <img *ngIf=\"item.area == 'SERVICIOS'\" height=\"30px\" src=\"assets/Images/gestion/consultas/asistencias/asis_mas.svg\" matTooltip=\"{{item.area}}\"\r\n              />\r\n              <img *ngIf=\"item.area == 'COMERCIALIZACION'\" height=\"30px\" src=\"assets/Images/gestion/consultas/asistencias/asis_box.svg\"\r\n                matTooltip=\"{{item.area}}\" />\r\n              <img *ngIf=\"item.area == 'FINANZAS'\" height=\"30px\" src=\"assets/Images/gestion/consultas/asistencias/asis_cal.svg\" matTooltip=\"{{item.area}}\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div [style.min-width]=\"'130px'\">{{item.depto}}</div>\r\n          <div [style.min-width]=\"'130px'\">{{item.categoria}}</div>\r\n          <div [style.min-width]=\"'120px'\">\r\n            <div>\r\n              <div [ngClass]=\"item.incidencia == 'NINGUNA'?'circleGreen':item.incidencia == 'RETARDO' || item.incidencia == 'FUERA DE TIEMPO'?'circleYellow':'circleRed'\"></div>\r\n              <span *ngIf=\"item.incidencia != 'NINGUNA' && item.incidencia != 'FALTA'\">{{item.incidencia}}</span>\r\n              <span *ngIf=\"item.incidencia == 'FALTA'\">FALTÓ</span>\r\n              <span *ngIf=\"item.incidencia == 'NINGUNA'\">ASISTIÓ</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"total\">\r\n      <p>Total:\r\n        <span>{{lstAsistencias.length}}</span>\r\n        <span>Registros</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div style=\"position: relative;\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\" *ngIf=\"showGraphic\">\r\n    <div [ngClass]=\"'graphics-panel-container' + (showGraphic ? ' visible' : '')\" [style.top]=\"topGraphics\">\r\n      <div class=\"graphics-panel-option\">\r\n        <img src=\"assets/Images/gestion/images/tablaminigris.svg\" (click)=\"showTablePanel()\">\r\n      </div>\r\n      <div class=\"graphics-container\" *ngIf=\"refrescar\">\r\n        <div class=\"donut-container\" *ngFor=\"let item of graficas; let i = index\">\r\n          <p clasfgh jºº= b s=\"donut-title\">{{item}}</p>\r\n          <div id=\"asistencia-canvas\" class=\"canvas-container\">\r\n            <pn-donut-chart [idGrafica]=\"i+'asis'\" [data]=\"graficasValores[i]\" [tipoGrafica]=\"'General'\"></pn-donut-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/asistencia/asistencia.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(0,137,149,.02)}:host>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:#008895;height:41px;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;padding:0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(1)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;cursor:pointer}:host>div:nth-of-type(1)>div:nth-of-type(2){margin-left:20px}:host>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;height:calc(100vh - 170px);width:100%;overflow-x:hidden}:host>div:nth-of-type(2)>.panelNormal{background:#fff;height:100%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll}:host>div:nth-of-type(2)>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>div:nth-of-type(2)>.panelOcultar .filtros{display:none}:host>div:nth-of-type(2)>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}:host>div:nth-of-type(2) .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>div:nth-of-type(2) .filtroHeader>.abrir{cursor:pointer}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>div:nth-of-type(2) .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242;padding-bottom:50px}:host>div:nth-of-type(2) .filtros>.divAvanzada{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:130px;font-size:16px;color:#424242}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div>div{margin-top:6px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2){border-bottom:1px solid #424242;padding-bottom:18px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:53px;padding-top:10px;border-bottom:1px solid #eceef0}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding-bottom:18px;border-bottom:1px solid #424242}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2)>input{height:25px;border:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:5px}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2)>div:nth-of-type(2){height:100%;width:100%;background:rgba(0,137,149,.02)}:host>div:nth-of-type(2)>.resultados{z-index:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:1s ease-in-out;transition:1s ease-in-out}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1){border-bottom:3px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(1){font-size:22px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2)>img{cursor:pointer;height:30px;width:30px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:782px;width:100%;height:100%;overflow-x:scroll}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1030px;min-height:57px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1030px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>span{margin-top:10px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>.circleGreen{height:18px;width:18px;background-color:#91be5f;border-radius:50%}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>.circleYellow{height:18px;width:18px;background-color:#dc931c;border-radius:50%}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>.circleRed{height:18px;width:18px;background-color:#952936;border-radius:50%}:host>div:nth-of-type(2)>.resultados>.total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;min-height:30px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}:host>div:nth-of-type(2) .graphics-panel-container{overflow:scroll;position:absolute;width:100%;-webkit-transition:top 600ms;transition:top 600ms;height:100%;opacity:1;z-index:30;background-color:#f4fcfd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .graphics-panel-container .graphics-panel-option{width:100%;text-align:right}:host>div:nth-of-type(2) .graphics-panel-container .graphics-panel-option img{min-width:30px;min-height:30px}:host>div:nth-of-type(2) .graphics-panel-container .graphics-panel-option img:hover{cursor:pointer}:host>div:nth-of-type(2) .graphics-panel-container .graphics-container{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:97%;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>div:nth-of-type(2) .graphics-panel-container .graphics-container .donut-container{min-width:235px;min-height:263px;width:30%;height:50%;margin:0 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2) .graphics-panel-container .graphics-container .donut-container .donut-title{text-align:center}:host>div:nth-of-type(2) .graphics-panel-container .graphics-container .donut-container .canvas-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;min-height:80%;max-height:400px;position:relative;padding:20px;height:100%}@-webkit-keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@-webkit-keyframes mostar{from{width:50px}to{width:321px}}@keyframes mostar{from{width:50px}to{width:321px}}:host #chart{width:100%;height:100%}"

/***/ }),

/***/ "./src/app/components/gestion/consultas/asistencia/asistencia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenciaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_gestion_consulta_asistencias_asistencias_service__ = __webpack_require__("./src/app/services/gestion/consulta/asistencias/asistencias.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_UtilFechas__ = __webpack_require__("./src/app/class/UtilFechas.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AsistenciaComponent = /** @class */ (function () {
    function AsistenciaComponent(router, _asistensiaService, coreComponent) {
        var _this = this;
        this.router = router;
        this._asistensiaService = _asistensiaService;
        this.coreComponent = coreComponent;
        this._utilFechas = new __WEBPACK_IMPORTED_MODULE_7__class_UtilFechas__["a" /* UtilFechas */]();
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.avanzada = true;
        this.itemsDropList = [
            { nombre: "- - Todos - -" },
            { nombre: "nombre1" },
            { nombre: "nombre2" }
        ];
        this.defaultSelected = { nombre: "- - Todos - -" };
        this.IsImage = true;
        this.IsDate = true;
        this.isThereData = false;
        this.Clear = true;
        this.dropColaborador = [{ nombre: "--TODOS--", key: 0 }];
        this.dropTipoChecada = [
            { nombre: "--TODOS--", key: "" },
            { nombre: "ENTRADA DE TURNO", key: 1 },
            { nombre: "SALIDA A COMER", key: 2 },
            { nombre: "ENTRADA DE COMER", key: 3 },
            { nombre: "SALIDA DE TURNO", key: 4 },
            { nombre: "ENTRADA IMPREVISTA", key: 5 },
            { nombre: "SALIDA IMPREVISTA", key: 6 }
        ];
        this.dropTipoIncidencia = [{ nombre: "--TODOS--", key: "" }];
        this.dropEmpresa = [
            { nombre: "--TODOS--", key: "" },
            { nombre: "PROQUIFA", key: "DISTRITO FEDERAL" },
            { nombre: "RYNDEM", key: "CUERNAVACA" },
            { nombre: "GUADALAJARA", key: "GUADALAJARA" }
        ];
        this.dropArea = [{ nombre: "--TODOS--", key: "" }];
        this.dropDepartamento = [{ nombre: "--TODOS--", key: "" }];
        this.dropCategoria = [{ nombre: "--TODOS--", key: "" }];
        this.lstAsistencias = [];
        this.totalChecadas = 0;
        this.listaDatosAsistencias = [];
        this.listaDatosTipoChecadas = [];
        this.listaDatosIncidencias = [];
        this.listaDatosCategoria = [];
        this.listaDatosDepartamentos = [];
        this.listaDatosArea = [];
        this.graficasCargadas = false;
        this.parametros = new __WEBPACK_IMPORTED_MODULE_2__class_Parametros_class__["a" /* Parametros */]();
        this.showGraphic = false;
        this.refrescar = true;
        this.topGraphics = "-110%";
        this.graficas = [];
        this.asistenciasColaboradores = [];
        this.graficasValores = [];
        this.Llenar = function () {
            _this.Elements = [
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Colaborador", _this.dropColaborador, true),
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Tipo checada", _this.dropTipoChecada, true),
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Tipo incidencia", _this.dropTipoIncidencia, true),
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Empresa", _this.dropEmpresa, true),
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Área", _this.dropArea, true),
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Departamento", _this.dropDepartamento, true),
                new __WEBPACK_IMPORTED_MODULE_4__shared_filter_element_model__["a" /* ElementFilter */]("string", "Categoría", _this.dropCategoria, true)
            ];
            _this.isThereData = true;
            _this.Clear = false;
        };
    }
    AsistenciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.date = new Date();
        this.date2 = new Date();
        this.parametros.fechaInicio = new Date();
        this.parametros.fechaFin = new Date();
        this.parametros.idTrabajador = 0;
        this.parametros.tipoChecada = "";
        this.parametros.area = "";
        this.parametros.depto = "";
        this.parametros.categoria = "";
        this.parametros.incidencia = "";
        this.parametros.localidad = "";
        this.parametros.nombreTrabajador = "";
        this.coreComponent.openModal(0);
        this._asistensiaService.getTrabajadorUnion().subscribe(function (data) {
            var lstAux = [];
            for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.nombreCorto, key: item.idTrabajador });
            }
            _this.dropColaborador = _this.dropColaborador.concat(lstAux);
            _this._asistensiaService.getTipoIncidencia().subscribe(function (data) {
                var lstAux = [];
                for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                    var item = _a[_i];
                    lstAux.push({
                        nombre: item.nomIncidencia,
                        key: item.cveIncidencia
                    });
                }
                _this.dropTipoIncidencia = _this.dropTipoIncidencia.concat(lstAux);
                _this._asistensiaService.getConsultaArea().subscribe(function (data) {
                    var lstAux = [];
                    for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                        var item = _a[_i];
                        lstAux.push({ nombre: item.nombreArea, key: item.claveArea });
                    }
                    _this.dropArea = _this.dropArea.concat(lstAux);
                    _this._asistensiaService.getConsultaDepartamento().subscribe(function (data) {
                        var lstAux = [];
                        for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            lstAux.push({
                                nombre: item.nombreDepartamento,
                                key: item.claveDepartamento
                            });
                        }
                        _this.dropDepartamento = _this.dropDepartamento.concat(lstAux);
                        _this._asistensiaService.getConsultaCategoria().subscribe(function (data) {
                            var lstAux = [];
                            for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                                var item = _a[_i];
                                lstAux.push({
                                    nombre: item.nombreCategoria,
                                    key: item.claveCategoria
                                });
                            }
                            _this.dropCategoria = _this.dropCategoria.concat(lstAux);
                            _this.Llenar();
                            _this.getAsistenciaUnion(_this.parametros);
                        }, function (error) {
                            console.log(error);
                        });
                    }, function (error) {
                        console.log(error);
                    });
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    AsistenciaComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    AsistenciaComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    AsistenciaComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    AsistenciaComponent.prototype.download = function () {
        var lstAsistencias2 = [];
        console.log(this.lstAsistencias);
        this.lstAsistencias.forEach(function (asistencia, index) {
            var facturaAux = {
                "#": index + 1,
                Colaborador: '"' + asistencia.nombreCorto + '"',
                Fecha: new __WEBPACK_IMPORTED_MODULE_6__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(asistencia.fecha),
                Hora: asistencia.hora,
                "Tipo Checada": asistencia.tipoChecada,
                Área: asistencia.area,
                Departamento: asistencia.depto,
                Categoría: asistencia.categoria,
                Incidencia: asistencia.incidencia
            };
            lstAsistencias2.push(facturaAux);
        });
        var csvData = this.ConvertToCSV(lstAsistencias2);
        var a = document.createElement("a");
        a.setAttribute("style", "display:none;");
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: "text/csv" });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download =
            "ConsultaAsistencia-" +
                this._utilFechas.fechaDescarga(new Date()) +
                ".csv";
        a.click();
    };
    //Función para convertir JSON en formato CSV
    AsistenciaComponent.prototype.ConvertToCSV = function (objArray) {
        var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
        var str = "";
        var row = "";
        for (var index in objArray[0]) {
            row += index + ",";
        }
        row = row.slice(0, -1);
        str += row + "\r\n";
        for (var i = 0; i < array.length; i++) {
            var line = "";
            for (var index in array[i]) {
                if (line != "")
                    line += ",";
                line += array[i][index];
            }
            str += line + "\r\n";
        }
        return str;
    };
    AsistenciaComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    AsistenciaComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
    };
    AsistenciaComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
    };
    AsistenciaComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    AsistenciaComponent.prototype.dropList = function (index, $event) { };
    AsistenciaComponent.prototype.mostrarDatos = function ($event) {
        console.log($event);
        console.log("mostrarDatos");
        this.parametros.fechaInicio = $event.Fechas.fechaInicial;
        this.parametros.fechaFin = $event.Fechas.fechaFinal;
        this.parametros.nombreTrabajador =
            $event.Datos[0].key == 0 ? "" : $event.Datos[0].nombre;
        this.parametros.tipoChecada =
            $event.Datos[1].key == 0 ? "" : $event.Datos[1].key;
        this.parametros.incidencia =
            $event.Datos[2].key == 0 ? "" : $event.Datos[2].key;
        this.parametros.localidad =
            $event.Datos[3].key == 0 ? "" : $event.Datos[3].key;
        this.parametros.area = $event.Datos[4].key == 0 ? "" : $event.Datos[4].key;
        this.parametros.depto = $event.Datos[5].key == 0 ? "" : $event.Datos[5].key;
        this.parametros.categoria =
            $event.Datos[6].key == 0 ? "" : $event.Datos[6].key;
        this.coreComponent.openModal(0);
        this.getAsistenciaUnion(this.parametros);
    };
    AsistenciaComponent.prototype.getAsistenciaUnion = function (parametros) {
        var _this = this;
        this.refrescar = false;
        this._asistensiaService.getAsistenciaUnion(parametros).subscribe(function (data) {
            console.log(data.current);
            _this.lstAsistencias = data.current;
            _this.totalChecadas = _this.lstAsistencias.length;
            _this.graficasCargadas = false;
            _this.coreComponent.closeModal(0);
            _this.limpiarVariablesGrafica();
            _this.calcularDatosParaGraficas();
            _this.graficasValores = [
                _this.asistencias,
                _this.tipoChecadas,
                _this.incidencias,
                _this.areas,
                _this.departamentos,
                _this.categorias
            ];
            _this.graficas = [];
            _this.graficas = [
                "Asistencia/Inasistencia",
                "Tipo Checada",
                "Incidencias",
                "Area",
                "Departamento",
                "Categoría"
            ];
            _this.refrescar = true;
        }, function (error) {
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    AsistenciaComponent.prototype.showGraphicPanel = function () {
        var _this = this;
        this.showGraphic = true;
        setTimeout(function () { _this.topGraphics = "0"; }, 100);
    };
    AsistenciaComponent.prototype.showTablePanel = function () {
        var _this = this;
        this.topGraphics = "-110%";
        setTimeout(function () { _this.showGraphic = false; }, 300);
    };
    AsistenciaComponent.prototype.toolip = function (tooltipItem, data) {
        var label = data.labels[tooltipItem.index] +
            " : " +
            data.datasets[0].data[tooltipItem.index];
        console.log(tooltipItem);
        console.log(data);
        return label;
    };
    AsistenciaComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.lstAsistencias; _i < _a.length; _i++) {
            var checada = _a[_i];
            this.llenarTotales(this.asistencias, checada, "ASISTENCIAS");
            this.llenarTotales(this.tipoChecadas, checada, "TIPO_CHECADA");
            this.llenarTotales(this.incidencias, checada, "INCIDENCIAS");
            this.llenarTotales(this.areas, checada, "AREAS");
            this.llenarTotales(this.departamentos, checada, "DEPARTAMENTOS");
            this.llenarTotales(this.categorias, checada, "CATEGORIAS");
        }
        this.graficasCargadas = true;
        console.log(this.asistencias);
    };
    AsistenciaComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        switch (graficaElegida) {
            case "ASISTENCIAS":
                if (elemento.tipoChecada === "ENTRADA DE TURNO") {
                    if (!this.asistenciasColaboradores.find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valores[0]++;
                        total.valuesExtras[0]++;
                        total.valuesExtrasHover[0][0]++;
                        this.asistenciasColaboradores.push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (!elemento.tipoChecada) {
                    if (!this.asistenciasColaboradores.find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valores[1]++;
                        total.valuesExtras[1]++;
                        total.valuesExtrasHover[1][0]++;
                        this.asistenciasColaboradores.push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                break;
            case "TIPO_CHECADA":
                if (elemento.tipoChecada === "ENTRADA DE TURNO") {
                    total.valores[0]++;
                    total.valuesExtrasHover[0][1]++;
                    if (!this.tipoChecadasColaboradores[1].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[0][0]++;
                        this.tipoChecadasColaboradores[1].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.tipoChecada === "SALIDA IMPREVISTA") {
                    total.valores[5]++;
                    total.valuesExtrasHover[5][1]++;
                    if (!this.tipoChecadasColaboradores[2].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[5][0]++;
                        this.tipoChecadasColaboradores[2].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.tipoChecada === "ENTRADA IMPREVISTA") {
                    total.valores[4]++;
                    total.valuesExtrasHover[4][1]++;
                    if (!this.tipoChecadasColaboradores[3].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[4][0]++;
                        this.tipoChecadasColaboradores[3].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.tipoChecada === "ENTRADA DE COMER") {
                    total.valores[2]++;
                    total.valuesExtrasHover[2][1]++;
                    if (!this.tipoChecadasColaboradores[4].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[2][0]++;
                        this.tipoChecadasColaboradores[4].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.tipoChecada === "SALIDA A COMER") {
                    total.valores[1]++;
                    total.valuesExtrasHover[1][1]++;
                    if (!this.tipoChecadasColaboradores[5].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[1][0]++;
                        this.tipoChecadasColaboradores[5].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.tipoChecada === "SALIDA DE TURNO") {
                    total.valores[3]++;
                    total.valuesExtrasHover[3][1]++;
                    if (!this.tipoChecadasColaboradores[6].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[3][0]++;
                        this.tipoChecadasColaboradores[6].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.tipoChecada === "E") {
                    total.valores[6]++;
                    total.valuesExtrasHover[6][1]++;
                    if (!this.tipoChecadasColaboradores[7].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[6][0]++;
                        this.tipoChecadasColaboradores[7].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else {
                    total.valores[7]++;
                    total.valuesExtrasHover[7][1]++;
                    if (!this.tipoChecadasColaboradores[8].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[7][0]++;
                        this.tipoChecadasColaboradores[8].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                if (!this.tipoChecadasColaboradores[0].find(function (trabajador) {
                    return trabajador.id === elemento.idTrabajador &&
                        trabajador.nombre === elemento.nombreCorto;
                })) {
                    total.valuesExtras[0]++;
                    this.tipoChecadasColaboradores[0].push({
                        id: elemento.idTrabajador,
                        nombre: elemento.nombreCorto
                    });
                }
                total.valuesExtras[1]++;
                break;
            case "INCIDENCIAS":
                if (elemento.incidencia === "NINGUNA") {
                    total.valores[0]++;
                    total.valuesExtrasHover[0][1]++;
                    if (!this.incidenciasColaboradores[1].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[0][0]++;
                        this.incidenciasColaboradores[1].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.incidencia === "RETARDO") {
                    total.valores[1]++;
                    total.valuesExtrasHover[1][1]++;
                    if (!this.incidenciasColaboradores[2].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[1][0]++;
                        this.incidenciasColaboradores[2].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.incidencia === "FALTA") {
                    total.valores[2]++;
                    total.valuesExtrasHover[2][1]++;
                    if (!this.incidenciasColaboradores[3].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[2][0]++;
                        this.incidenciasColaboradores[3].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.incidencia === "FUERA DE TIEMPO") {
                    total.valores[3]++;
                    total.valuesExtrasHover[3][1]++;
                    if (!this.incidenciasColaboradores[4].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[3][0]++;
                        this.incidenciasColaboradores[4].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                if (!this.incidenciasColaboradores[0].find(function (trabajador) {
                    return trabajador.id === elemento.idTrabajador &&
                        trabajador.nombre === elemento.nombreCorto;
                })) {
                    total.valuesExtras[0]++;
                    this.incidenciasColaboradores[0].push({
                        id: elemento.idTrabajador,
                        nombre: elemento.nombreCorto
                    });
                }
                total.valuesExtras[1]++;
                break;
            case "AREAS":
                if (elemento.area === "OPERACIONES") {
                    total.valores[0]++;
                    total.valuesExtrasHover[0][1]++;
                    if (!this.areassColaboradores[1].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[0][0]++;
                        this.areassColaboradores[1].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.area === "SERVICIOS") {
                    total.valores[5]++;
                    total.valuesExtrasHover[5][1]++;
                    if (!this.areassColaboradores[6].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[5][0]++;
                        this.areassColaboradores[6].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.area === "COMERCIALIZACION") {
                    total.valores[4]++;
                    total.valuesExtrasHover[4][1]++;
                    if (!this.areassColaboradores[5].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[4][0]++;
                        this.areassColaboradores[5].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.area === "FINANZAS") {
                    total.valores[3]++;
                    total.valuesExtrasHover[3][1]++;
                    if (!this.areassColaboradores[4].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[3][0]++;
                        this.areassColaboradores[4].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.area === "DIRECCION") {
                    total.valores[1]++;
                    total.valuesExtrasHover[1][1]++;
                    if (!this.areassColaboradores[2].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[1][0]++;
                        this.areassColaboradores[2].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.area === "GENERAL") {
                    total.valores[2]++;
                    total.valuesExtrasHover[2][1]++;
                    if (!this.areassColaboradores[3].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[2][0]++;
                        this.areassColaboradores[3].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                if (!this.areassColaboradores[0].find(function (trabajador) {
                    return trabajador.id === elemento.idTrabajador &&
                        trabajador.nombre === elemento.nombreCorto;
                })) {
                    total.valuesExtras[0]++;
                    this.areassColaboradores[0].push({
                        id: elemento.idTrabajador,
                        nombre: elemento.nombreCorto
                    });
                }
                total.valuesExtras[1]++;
                break;
            case "DEPARTAMENTOS":
                if (elemento.depto === "COMPRAS") {
                    total.valores[0]++;
                    total.valuesExtrasHover[0][1]++;
                    if (!this.departamentosColaboradores[1].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[0][0]++;
                        this.departamentosColaboradores[1].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.depto === "MANTENIMIENTO") {
                    total.valores[1]++;
                    total.valuesExtrasHover[1][1]++;
                    if (!this.departamentosColaboradores[2].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[1][0]++;
                        this.departamentosColaboradores[2].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.depto === "SERVICIO A CLIENTES") {
                    total.valores[2]++;
                    total.valuesExtrasHover[2][1]++;
                    if (!this.departamentosColaboradores[3].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[2][0]++;
                        this.departamentosColaboradores[3].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.depto === "DESPACHOS") {
                    total.valores[3]++;
                    total.valuesExtrasHover[3][1]++;
                    if (!this.departamentosColaboradores[4].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[3][0]++;
                        this.departamentosColaboradores[4].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.depto === "DISEÑO") {
                    total.valores[4]++;
                    total.valuesExtrasHover[4][1]++;
                    if (!this.departamentosColaboradores[5].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[4][0]++;
                        this.departamentosColaboradores[5].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.depto === "SISTEMAS") {
                    total.valores[5]++;
                    total.valuesExtrasHover[5][1]++;
                    if (!this.departamentosColaboradores[6].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[5][0]++;
                        this.departamentosColaboradores[6].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.depto === "COBROS Y PAGOS") {
                    total.valores[6]++;
                    total.valuesExtrasHover[6][1]++;
                    if (!this.departamentosColaboradores[7].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[6][0]++;
                        this.departamentosColaboradores[7].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.depto === "VENTAS") {
                    total.valores[7]++;
                    total.valuesExtrasHover[7][1]++;
                    if (!this.departamentosColaboradores[8].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[7][0]++;
                        this.departamentosColaboradores[8].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.depto === "CALIDAD") {
                    total.valores[8]++;
                    total.valuesExtrasHover[8][1]++;
                    if (!this.departamentosColaboradores[9].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[8][0]++;
                        this.departamentosColaboradores[9].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.depto === "ADMINISTRACION") {
                    total.valores[9]++;
                    total.valuesExtrasHover[9][1]++;
                    if (!this.departamentosColaboradores[10].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[9][0]++;
                        this.departamentosColaboradores[10].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.depto === "GENERAL") {
                    total.valores[10]++;
                    total.valuesExtrasHover[10][1]++;
                    if (!this.departamentosColaboradores[11].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[10][0]++;
                        this.departamentosColaboradores[11].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                if (!this.departamentosColaboradores[0].find(function (trabajador) {
                    return trabajador.id === elemento.idTrabajador &&
                        trabajador.nombre === elemento.nombreCorto;
                })) {
                    total.valuesExtras[0]++;
                    this.departamentosColaboradores[0].push({
                        id: elemento.idTrabajador,
                        nombre: elemento.nombreCorto
                    });
                }
                total.valuesExtras[1]++;
                break;
            case "CATEGORIAS":
                if (elemento.categoria === "OPERATIVOS") {
                    total.valores[0]++;
                    total.valuesExtrasHover[0][1]++;
                    if (!this.categoriasColaboradores[1].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[0][0]++;
                        this.categoriasColaboradores[1].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.categoria === "COORDINADORES") {
                    total.valores[1]++;
                    total.valuesExtrasHover[1][1]++;
                    if (!this.categoriasColaboradores[2].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[1][0]++;
                        this.categoriasColaboradores[2].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                else if (elemento.categoria === "GENERAL") {
                    total.valores[2]++;
                    total.valuesExtrasHover[2][1]++;
                    if (!this.categoriasColaboradores[3].find(function (trabajador) {
                        return trabajador.id === elemento.idTrabajador &&
                            trabajador.nombre === elemento.nombreCorto;
                    })) {
                        total.valuesExtrasHover[2][0]++;
                        this.categoriasColaboradores[3].push({
                            id: elemento.idTrabajador,
                            nombre: elemento.nombreCorto
                        });
                    }
                }
                if (!this.categoriasColaboradores[0].find(function (trabajador) {
                    return trabajador.id === elemento.idTrabajador &&
                        trabajador.nombre === elemento.nombreCorto;
                })) {
                    total.valuesExtras[0]++;
                    this.categoriasColaboradores[0].push({
                        id: elemento.idTrabajador,
                        nombre: elemento.nombreCorto
                    });
                }
                total.valuesExtras[1]++;
                break;
        }
    };
    AsistenciaComponent.prototype.limpiarVariablesGrafica = function () {
        this.asistencias = {
            titulo: "Totales",
            labels: ["ASISTENCIA", "INASISTENCIA"],
            valores: [0, 0],
            labelsExtras: ["Asistieron", "Faltaron"],
            labelsExtrasHover: ["Colaboradores"],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0], [0]]
        };
        this.asistenciasColaboradores = [];
        this.tipoChecadas = {
            titulo: "Totales",
            labels: [
                "ENTRADA DE TURNO",
                "SALIDA A COMER",
                "ENTRADA DE COMER",
                "SALIDA DE TURNO",
                "ENTRADA IMPREVISTA",
                "SALIDA IMPREVISTA",
                "E",
                "N/A"
            ],
            valores: [0, 0, 0, 0, 0, 0, 0, 0],
            labelsExtras: ["Colaboradores", "Checada"],
            labelsExtrasHover: ["Colaboradores", "Checada"],
            valuesExtras: [0, 0],
            valuesExtrasHover: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
            ]
        };
        this.tipoChecadasColaboradores = [[], [], [], [], [], [], [], [], []];
        this.incidencias = {
            titulo: "Totales",
            labels: ["NINGUNA", "RETARDO", "FALTA", "FUERA DE TIEMPO"],
            valores: [0, 0, 0, 0],
            labelsExtras: ["Colaboradores", "Checada"],
            labelsExtrasHover: ["Colaboradores", "Checada"],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0, 0], [0, 0], [0, 0], [0, 0]]
        };
        this.incidenciasColaboradores = [[], [], [], [], []];
        this.areas = {
            titulo: "Totales",
            labels: [
                "OPERACIONES",
                "DIRECCION",
                "GENERAL",
                "FINANZAS",
                "COMERCIALIZACION",
                "SERVICIOS"
            ],
            valores: [0, 0, 0, 0, 0, 0],
            labelsExtras: ["Colaboradores", "Checada"],
            labelsExtrasHover: ["Colaboradores", "Checada"],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
        };
        this.areassColaboradores = [[], [], [], [], [], [], []];
        this.departamentos = {
            titulo: "Totales",
            labels: [
                "COMPRAS",
                "MANTENIMIENTO",
                "SERVICIO A CLIENTES",
                "DESPACHOS",
                "DISEÑO",
                "SISTEMAS",
                "COBROS Y PAGOS",
                "VENTAS",
                "CALIDAD",
                "ADMINISTRACION",
                "GENERAL"
            ],
            valores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            labelsExtras: ["Colaboradores", "Checada"],
            labelsExtrasHover: ["Colaboradores", "Checada"],
            valuesExtras: [0, 0],
            valuesExtrasHover: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
            ]
        };
        this.departamentosColaboradores = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        this.categorias = {
            titulo: "Totales",
            labels: ["OPERATIVOS", "COORDINADORES", "GENERAL"],
            valores: [0, 0, 0],
            labelsExtras: ["Colaboradores", "Checada"],
            labelsExtrasHover: ["Colaboradores", "Checada"],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0, 0], [0, 0], [0, 0]]
        };
        this.categoriasColaboradores = [[], [], [], []];
    };
    AsistenciaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-asistencia",
            template: __webpack_require__("./src/app/components/gestion/consultas/asistencia/asistencia.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/asistencia/asistencia.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_gestion_consulta_asistencias_asistencias_service__["a" /* AsistenciasService */],
            __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], AsistenciaComponent);
    return AsistenciaComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/asistencia/asistencia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaModule", function() { return AsistenciaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__asistencia_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/asistencia/asistencia-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__asistencia_component__ = __webpack_require__("./src/app/components/gestion/consultas/asistencia/asistencia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AsistenciaModule = /** @class */ (function () {
    function AsistenciaModule() {
    }
    AsistenciaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__asistencia_routing_module__["a" /* AsistenciaRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_13__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__asistencia_component__["a" /* AsistenciaComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__asistencia_component__["a" /* AsistenciaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatTooltipModule */]
            ]
        })
    ], AsistenciaModule);
    return AsistenciaModule;
}());



/***/ })

});
//# sourceMappingURL=asistencia.module.chunk.js.map