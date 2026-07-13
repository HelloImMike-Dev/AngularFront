webpackJsonp(["llamadas.module"],{

/***/ "./src/app/components/gestion/consultas/llamadas/llamadas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LlamadasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__llamadas_component__ = __webpack_require__("./src/app/components/gestion/consultas/llamadas/llamadas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LlamadasRoutingModule = /** @class */ (function () {
    function LlamadasRoutingModule() {
    }
    LlamadasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__llamadas_component__["a" /* LlamadasComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], LlamadasRoutingModule);
    return LlamadasRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/llamadas/llamadas.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div (click)=\"backMenu()\">\r\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\r\n  </div>\r\n  <div *ngIf=\"!detalle\">LLAMADAS</div>\r\n  <div *ngIf=\"detalle\" (click)=\"regresarConsulta()\" class=\"regresar\">LLAMADAS</div>\r\n  <div *ngIf=\"detalle\">|</div>\r\n  <div *ngIf=\"detalle\">DETALLES</div>\r\n  <!-- <h4>{{ detalle }}</h4> -->\r\n</div>\r\n<div *ngIf=\"!detalle\" class=\"consultaResultados\">\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Vista de Filtros -->\r\n    <div class=\"filtros\">\r\n      <!-- <div>\r\n        <pq-radio-button [widthTotal]=\"'100px'\" [lstItems]=\"lstItems\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\" (emitItem)=\"radioSistema($event)\"\r\n          [width]=\"'15px'\"></pq-radio-button>\r\n      </div> -->\r\n      <!-- <div>\r\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\r\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\r\n      </div> -->\r\n\r\n      <div *ngIf=\"isThereData;else loader\">\r\n        <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\r\n          [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\"></gestion-filter>\r\n      </div>\r\n\r\n      <ng-template #loader>\r\n        <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <!-- Vista de datos recolectados -->\r\n  <div [ngClass]=\"'resultados' + (!showGraphic ? ' visible' : '')\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\" *ngIf=\"!showGraphic\">\r\n    <div>\r\n      <div>\r\n        RESULTADOS\r\n      </div>\r\n      <div>\r\n        <img [style.margin-right]=\"'15px'\" height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/cobros/graficaminigris.svg\"\r\n          alt=\"\" (click)=\"showGraphicPanel()\">\r\n        <img height=\"20px\" width=\"20px\" src=\"assets/Images/exportar.svg\" alt=\"\" (click)=\"download()\">\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div>\r\n        <div [style.min-width]=\"'50px'\">#</div>\r\n        <div [style.min-width]=\"'100px'\">Fecha</div>\r\n        <div [style.min-width]=\"'150px'\">Empresa</div>\r\n        <div [style.min-width]=\"'150px'\">Contacto</div>\r\n        <div [style.min-width]=\"'280px'\">Asunto</div>\r\n        <div [style.min-width]=\"'280px'\">Comentarios</div>\r\n        <div [style.min-width]=\"'110px'\">Destino</div>\r\n        <div [style.min-width]=\"'110px'\">Atendió</div>\r\n        <div [style.min-width]=\"'110px'\">Estado</div>\r\n        <div [style.min-width]=\"'30px'\"></div>\r\n      </div>\r\n      <div>\r\n        <div *ngFor=\"let item of lstLlamadas; let i = index\">\r\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\r\n          <div [style.min-width]=\"'100px'\">{{item.fecha | dateFormatSlash}}</div>\r\n          <div [style.min-width]=\"'150px'\">{{item.empresa}}</div>\r\n          <div [style.min-width]=\"'150px'\">{{item.contacto}}</div>\r\n          <div [style.min-width]=\"'280px'\">{{item.asunto}}</div>\r\n          <div [style.min-width]=\"'280px'\">{{item.comentarios}}</div>\r\n          <div [style.min-width]=\"'110px'\">{{item.destino}}</div>\r\n          <div [style.min-width]=\"'110px'\">{{item.atendio}}</div>\r\n          <div [style.min-width]=\"'110px'\">{{item.estado}}</div>\r\n          <div [style.min-width]=\"'30px'\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"total\">\r\n      <p>Total:\r\n        <span>{{lstLlamadas.length}}</span>\r\n        <span>Llamada<span *ngIf=\"lstLlamadas.length != 1\">s</span>\r\n        </span>\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n  <div style=\"position: relative;\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\" *ngIf=\"showGraphic\">\r\n    <div [ngClass]=\"'graphics-panel-container' + (showGraphic ? ' visible' : '')\" [style.top]=\"topGraphics\">\r\n      <div class=\"graphics-panel-option\">\r\n        <img src=\"assets/Images/gestion/images/tablaminigris.svg\" (click)=\"showTablePanel()\">\r\n      </div>\r\n      <div class=\"graphics-container\" *ngIf=\"refrescar\">\r\n        <div class=\"donut-container\" *ngFor=\"let item of graficas; let i = index\">\r\n          <p class=\"donut-title\">{{item}}</p>\r\n          <div id=\"asistencia-canvas\" class=\"canvas-container\">\r\n            <pn-donut-chart [idGrafica]=\"i+'asis'\" [data]=\"graficasValores[i]\" [tipoGrafica]=\"'General'\"></pn-donut-chart>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/gestion/consultas/llamadas/llamadas.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(0,137,149,.02)}:host>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:#008895;height:41px;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;padding:0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(1)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;cursor:pointer}:host>div:nth-of-type(1)>div:nth-of-type(2){margin-left:20px}:host>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;height:calc(100vh - 170px);width:100%;overflow-x:hidden}:host>div:nth-of-type(2)>.panelNormal{background:#fff;height:100%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll}:host>div:nth-of-type(2)>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>div:nth-of-type(2)>.panelOcultar .filtros{display:none}:host>div:nth-of-type(2)>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}:host>div:nth-of-type(2) .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>div:nth-of-type(2) .filtroHeader>.abrir{cursor:pointer}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>div:nth-of-type(2) .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242;padding-bottom:50px}:host>div:nth-of-type(2) .filtros>.divAvanzada{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:130px;font-size:16px;color:#424242}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div>div{margin-top:6px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2){border-bottom:1px solid #424242;padding-bottom:18px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:53px;padding-top:10px;border-bottom:1px solid #eceef0}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding-bottom:18px;border-bottom:1px solid #424242}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2)>input{height:25px;border:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:5px}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2)>div:nth-of-type(2){height:100%;width:100%;background:rgba(0,137,149,.02)}:host>div:nth-of-type(2)>.resultados{z-index:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:1s ease-in-out;transition:1s ease-in-out}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1){border-bottom:3px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(1){font-size:22px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2)>img{cursor:pointer;height:30px;width:30px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:782px;width:100%;height:100%;overflow-x:scroll}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1030px;min-height:57px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1030px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>span{margin-top:10px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>.circleGreen{height:18px;width:18px;background-color:#91be5f;border-radius:50%}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>.circleYellow{height:18px;width:18px;background-color:#dc931c;border-radius:50%}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>.circleRed{height:18px;width:18px;background-color:#952936;border-radius:50%}:host>div:nth-of-type(2)>.resultados>.total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;min-height:30px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}:host>div:nth-of-type(2) .graphics-panel-container{overflow:scroll;position:absolute;width:100%;-webkit-transition:top 600ms;transition:top 600ms;height:100%;opacity:1;z-index:30;background-color:#f4fcfd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .graphics-panel-container .graphics-panel-option{width:100%;text-align:right}:host>div:nth-of-type(2) .graphics-panel-container .graphics-panel-option img{min-width:30px;min-height:30px}:host>div:nth-of-type(2) .graphics-panel-container .graphics-panel-option img:hover{cursor:pointer}:host>div:nth-of-type(2) .graphics-panel-container .graphics-container{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:97%;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>div:nth-of-type(2) .graphics-panel-container .graphics-container .donut-container{min-width:235px;min-height:263px;width:30%;height:50%;margin:0 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2) .graphics-panel-container .graphics-container .donut-container .donut-title{text-align:center}:host>div:nth-of-type(2) .graphics-panel-container .graphics-container .donut-container .canvas-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;min-height:80%;max-height:400px;position:relative;padding:20px;height:100%}@-webkit-keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@-webkit-keyframes mostar{from{width:50px}to{width:321px}}@keyframes mostar{from{width:50px}to{width:321px}}:host #chart{width:100%;height:100%}"

/***/ }),

/***/ "./src/app/components/gestion/consultas/llamadas/llamadas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LlamadasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_UtilFechas__ = __webpack_require__("./src/app/class/UtilFechas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_util_util_service__ = __webpack_require__("./src/app/services/util/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_gestion_consulta_llamadas_llamadas_service__ = __webpack_require__("./src/app/services/gestion/consulta/llamadas/llamadas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LlamadasComponent = /** @class */ (function () {
    function LlamadasComponent(router, _fb, _gestionService, coreComponent, utilService, _llamadaService) {
        var _this = this;
        this.router = router;
        this._fb = _fb;
        this._gestionService = _gestionService;
        this.coreComponent = coreComponent;
        this.utilService = utilService;
        this._llamadaService = _llamadaService;
        this.detalle = false;
        this.classPanel = 'panelNormal';
        this.hiddenClose = true;
        this.topGraphics = '-110%';
        this.IsDate = true;
        this.IsImage = true;
        this.sistema = true;
        this.dropEmpresas = [{ nombre: '--TODOS--', key: 0 }];
        this.dropDestino = [{ nombre: '--TODOS--', key: 0 }];
        this.dropAtendio = [{ nombre: '--TODOS--', key: 0 }];
        this.lstLlamadas = [];
        this.lstEmpresas = [];
        this.isThereData = false;
        this.parametros = new __WEBPACK_IMPORTED_MODULE_4__class_Parametros_class__["a" /* Parametros */]();
        this._utilFechas = new __WEBPACK_IMPORTED_MODULE_7__class_UtilFechas__["a" /* UtilFechas */]();
        this.showGraphic = false;
        this.graficasCargadas = false;
        this.graficasValores = [];
        this.graficas = [];
        this.refrescar = true;
        // Variables para datos dinamicos de la gráfica
        this.lstEmpresasConsultaActual = [];
        this.lstAuxEmpre = [];
        this.lstValores = [];
        this.lstAuxDesti = [];
        this.lstValoresDesti = [];
        this.lstDestinoGrafica = [];
        this.lstClienteGrafica = []; // Asistente para tipo
        this.lstClienteGraficaAbiCerra = []; // Asistente para abierta vs cerrada
        this.lstClienteGraficaAbiCerraAux = [];
        this.lstClienteGraficaEtFt = []; // Asistemte para ET FT
        this.lstClienteGraficaDestino = []; // Asistente para destino
        this.lstClienteGraficaCliente = []; // Asistente para clientes
        this.llenar = function () {
            _this.Elements = [
                new __WEBPACK_IMPORTED_MODULE_5__shared_filter_element_model__["a" /* ElementFilter */]('string', 'Empresa', _this.dropEmpresas, true),
                new __WEBPACK_IMPORTED_MODULE_5__shared_filter_element_model__["a" /* ElementFilter */]('string', 'Destino', [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'AHernandezM', key: 1 },
                    { nombre: 'AMaza', key: 2 },
                    { nombre: 'BArias', key: 3 },
                    { nombre: 'BEMeza', key: 4 },
                    { nombre: 'BGuevara', key: 5 },
                    { nombre: 'BLozada', key: 6 },
                    { nombre: 'CEJuarez', key: 7 },
                    { nombre: 'CLGalicia', key: 8 },
                    { nombre: 'CLozada', key: 9 },
                    { nombre: 'CMRamirez', key: 10 },
                    { nombre: 'CobranzaPQF', key: 11 },
                    { nombre: 'ComPHS-USA', key: 12 },
                    { nombre: 'CTirado', key: 13 },
                    { nombre: 'DCastaneda', key: 14 },
                    { nombre: 'DesPHS-USA', key: 15 },
                    { nombre: 'DPeralta', key: 16 },
                    { nombre: 'ernestogl', key: 17 },
                    { nombre: 'ERobledo', key: 18 },
                    { nombre: 'FCatalan', key: 19 },
                    { nombre: 'FCTovar', key: 20 },
                    { nombre: 'GAngel', key: 21 },
                    { nombre: 'GETorres', key: 22 },
                    { nombre: 'GGamaliel', key: 23 },
                    { nombre: 'GSCruz', key: 24 },
                    { nombre: 'InsPHS-USA', key: 25 },
                    { nombre: 'IPerez', key: 26 },
                    { nombre: 'JCHernandez', key: 27 },
                    { nombre: 'JHernandez', key: 28 },
                    { nombre: 'JIOlvera', key: 29 },
                    { nombre: 'JLOlivares', key: 30 },
                    { nombre: 'KBanderas', key: 31 },
                    { nombre: 'LHernandez', key: 32 },
                    { nombre: 'LMorales', key: 33 },
                    { nombre: 'LRosas', key: 34 },
                    { nombre: 'LVera', key: 35 },
                    { nombre: 'MAFlores', key: 36 },
                    { nombre: 'MensajeroE1', key: 37 },
                    { nombre: 'MensajeroE2', key: 38 },
                    { nombre: 'MensajeroGDL', key: 39 },
                    { nombre: 'MNava', key: 40 },
                    { nombre: 'MPavon', key: 41 },
                    { nombre: 'MRMoreno', key: 42 },
                    { nombre: 'msi', key: 43 },
                    { nombre: 'MTorres', key: 44 },
                    { nombre: 'NCortes', key: 45 },
                    { nombre: 'NVGomez', key: 46 },
                    { nombre: 'OCardona', key: 47 },
                    { nombre: 'ONRamirez', key: 48 },
                    { nombre: 'PLozada', key: 49 },
                    { nombre: 'PMendez', key: 50 },
                    { nombre: 'RH', key: 51 },
                    { nombre: 'RRosas', key: 52 },
                    { nombre: 'RThome', key: 53 },
                    { nombre: 'SIAvalos', key: 54 },
                    { nombre: 'SLeyva', key: 55 },
                    { nombre: 'SVergara', key: 56 },
                    { nombre: 'VGonzalez', key: 57 },
                    { nombre: 'XMaya', key: 58 },
                    { nombre: 'YCervantes', key: 59 },
                    { nombre: 'YMunoz', key: 60 }
                ], true),
                new __WEBPACK_IMPORTED_MODULE_5__shared_filter_element_model__["a" /* ElementFilter */]('string', 'Atendió', [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'AHernandezM', key: 1 },
                    { nombre: 'AMaza', key: 2 },
                    { nombre: 'BArias', key: 3 },
                    { nombre: 'BEMeza', key: 4 },
                    { nombre: 'BGuevara', key: 5 },
                    { nombre: 'BLozada', key: 6 },
                    { nombre: 'CEJuarez', key: 7 },
                    { nombre: 'CLGalicia', key: 8 },
                    { nombre: 'CLozada', key: 9 },
                    { nombre: 'CMRamirez', key: 10 },
                    { nombre: 'CobranzaPQF', key: 11 },
                    { nombre: 'ComPHS-USA', key: 12 },
                    { nombre: 'CTirado', key: 13 },
                    { nombre: 'DCastaneda', key: 14 },
                    { nombre: 'DesPHS-USA', key: 15 },
                    { nombre: 'DPeralta', key: 16 },
                    { nombre: 'ernestogl', key: 17 },
                    { nombre: 'ERobledo', key: 18 },
                    { nombre: 'FCatalan', key: 19 },
                    { nombre: 'FCTovar', key: 20 },
                    { nombre: 'GAngel', key: 21 },
                    { nombre: 'GETorres', key: 22 },
                    { nombre: 'GGamaliel', key: 23 },
                    { nombre: 'GSCruz', key: 24 },
                    { nombre: 'InsPHS-USA', key: 25 },
                    { nombre: 'IPerez', key: 26 },
                    { nombre: 'JCHernandez', key: 27 },
                    { nombre: 'JHernandez', key: 28 },
                    { nombre: 'JIOlvera', key: 29 },
                    { nombre: 'JLOlivares', key: 30 },
                    { nombre: 'KBanderas', key: 31 },
                    { nombre: 'LHernandez', key: 32 },
                    { nombre: 'LMorales', key: 33 },
                    { nombre: 'LRosas', key: 34 },
                    { nombre: 'LVera', key: 35 },
                    { nombre: 'MAFlores', key: 36 },
                    { nombre: 'MensajeroE1', key: 37 },
                    { nombre: 'MensajeroE2', key: 38 },
                    { nombre: 'MensajeroGDL', key: 39 },
                    { nombre: 'MNava', key: 40 },
                    { nombre: 'MPavon', key: 41 },
                    { nombre: 'MRMoreno', key: 42 },
                    { nombre: 'msi', key: 43 },
                    { nombre: 'MTorres', key: 44 },
                    { nombre: 'NCortes', key: 45 },
                    { nombre: 'NVGomez', key: 46 },
                    { nombre: 'OCardona', key: 47 },
                    { nombre: 'ONRamirez', key: 48 },
                    { nombre: 'PLozada', key: 49 },
                    { nombre: 'PMendez', key: 50 },
                    { nombre: 'RH', key: 51 },
                    { nombre: 'RRosas', key: 52 },
                    { nombre: 'RThome', key: 53 },
                    { nombre: 'SIAvalos', key: 54 },
                    { nombre: 'SLeyva', key: 55 },
                    { nombre: 'SVergara', key: 56 },
                    { nombre: 'VGonzalez', key: 57 },
                    { nombre: 'XMaya', key: 58 },
                    { nombre: 'YCervantes', key: 59 },
                    { nombre: 'YMunoz', key: 60 }
                ], true),
                new __WEBPACK_IMPORTED_MODULE_5__shared_filter_element_model__["a" /* ElementFilter */]('string', 'Estado', [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'CERRADA', key: 1 },
                    { nombre: 'ABIERTA', key: 2 }
                ], false)
            ];
            _this.isThereData = true;
        };
    }
    LlamadasComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('Inicia carga de cosas');
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        // let parametros: Parametros = new Parametros();
        this.parametros.fechaInicio = new Date();
        this.parametros.fechaFin = new Date();
        this.parametros.empresa = '--TODOS--';
        this.parametros.comentarios = '--TODOS--';
        this.parametros.destino = '--TODOS--';
        this.parametros.atendio = '--TODOS--';
        this.parametros.estado = '--TODOS--';
        this.parametros.idUsuarioLogueado = 91;
        // Carga de datos desde base de datos
        this._gestionService.dropClientes().subscribe(function (data) {
            _this.lstEmpresas = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstEmpresas; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.dropEmpresas = _this.dropEmpresas.concat(lstAux);
            _this.llenar();
            _this.listarLlamadas(_this.parametros);
            _this.getLlamadasUnion(_this.parametros);
            // this.getEmpresasConsultaActual();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
        // Carga de datos
        // this.llenar();
        // console.log(this.dropEmpresas);
        // console.log('Fin de carga de cosas');
        // console.log('Fin listado llamadas');
        // Cargar las gráficas
    };
    LlamadasComponent.prototype.regresarConsulta = function () {
        this.detalle = false;
    };
    LlamadasComponent.prototype.backMenu = function () {
        this.router.navigate(['protected/gestion/']);
    };
    LlamadasComponent.prototype.closePanel = function () {
        this.classPanel = 'panelOcultar';
        this.hiddenClose = false;
    };
    LlamadasComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = 'panelMostrar';
            this.hiddenClose = true;
        }
    };
    // Método cuando presionas el boton de consular //
    LlamadasComponent.prototype.mostrarDatos = function ($event) {
        // let parametros: Parametros = new Parametros();
        // console.log('evento recibido: ', $event);
        this.parametros.fechaInicio = $event.Fechas.fechaInicial;
        this.parametros.fechaFin = $event.Fechas.fechaFinal;
        this.parametros.empresa = $event.Datos[0].nombre;
        this.parametros.destino = $event.Datos[1].nombre;
        this.parametros.atendio = $event.Datos[2].nombre;
        this.parametros.estado = $event.Datos[3].nombre;
        this.parametros.idUsuarioLogueado = 91;
        this.coreComponent.openModal(0);
        this.listarLlamadas(this.parametros);
        this.getLlamadasUnion(this.parametros);
    };
    LlamadasComponent.prototype.listarLlamadas = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._llamadaService.obtenerLlamadas(parametros).subscribe(function (data) {
            // console.log('ahora', data.current);
            if (data.current !== undefined) {
                _this.lstLlamadas = data.current;
                _this.getEmpresasConsultaActual(data.current);
                // console.log('lstLlamadas: ', this.lstLlamadas);
                _this.coreComponent.closeModal(0);
            }
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    // Función para descargar archivo
    LlamadasComponent.prototype.download = function () {
        var lstLlamadas2 = [];
        // console.log(this.lstLlamadas);
        this.lstLlamadas.forEach(function (llamada, index) {
            var llamadaAux = {
                '#': index + 1,
                'Fecha': "\"" + new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(llamada.fecha) + "\"",
                'Empresa': "\"" + llamada.empresa + "\"",
                'Contacto': "\"" + llamada.contacto + "\"",
                'Asunto': "\"" + llamada.asunto + "\"",
                'Comentarios': "\"" + llamada.comentarios + "\"",
                'Destino': "\"" + llamada.destino + "\"",
                'Atendió': "\"" + llamada.atendio + "\"",
                'Estado': "\"" + llamada.estado + "\""
                // 'Cliente': "\"" + factura.nombre_cliente + "\"",
                // 'Razón Social': "\"" + factura.rsocial + "\"",
                // 'RFC': factura.rfc,
                // 'Factura': factura.factura,
                // 'UUID': factura.uuid,
                // 'Vendió': factura.fpor,
                // 'Sub Total M.N.': "\"" + new AccountingFormatMoney().transform(factura.importeMN) + "\"",
                // 'IVA M.N.': "\"" + new AccountingFormatMoney().transform(factura.totalivaMN) + "\"",
                // 'Total M.N.': "\"" + new AccountingFormatMoney().transform(factura.totalMN) + "\"",
                // 'Sub Total USD': "\"" + new AccountingFormatMoney().transform(factura.importe) + "\"",
                // 'IVA USD': "\"" + new AccountingFormatMoney().transform(factura.totaliva) + "\"",
                // 'Total USD': "\"" + new AccountingFormatMoney().transform(factura.total) + "\"",
                // 'Moneda': factura.moneda,
                // 'T.Cambio': "\"" + new AccountingFormatMoney().transform(factura.pdolar) + "\"",
                // 'C.Pago': factura.cpago,
                // 'F. Facturación': new dateFormatSlash().transform(factura.fecha),
                // 'Tipo': factura.tipo,
                // 'Refacturada': factura.refacturada,
                // 'Estado': factura.estado,
                // 'Fecha Cancelación': new dateFormatSlash().transform(factura.fechaCancelacion) == "Pendiente" ? "NA" : new dateFormatSlash().transform(factura.fechaCancelacion),
                // 'No. Cuenta': factura.cuentaBanco,
            };
            lstLlamadas2.push(llamadaAux);
        });
        var csvData = this.ConvertToCSV(lstLlamadas2);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'ConsultaLlamadas-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
        a.click();
    };
    // Función para convertir JSON en formato CSV
    LlamadasComponent.prototype.ConvertToCSV = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        for (var index in objArray[0]) {
            row += index + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    // consultaLlamadas(parametros: Parametros) {
    //   this.coreComponent.openModal(0);
    //   this._llamadaService.obtenerLlamadas(parametros).subscribe(
    //     data => {
    //       this.lstLlamadas = data.current;
    //       this.coreComponent.closeModal(0);
    //     },
    //     error => {
    //       this.coreComponent.closeModal(0);
    //     }
    //   );
    // }
    // radioSistema($event) {
    //   console.log('RadioSistema');
    // }
    // Gráficas
    LlamadasComponent.prototype.showGraphicPanel = function () {
        var _this = this;
        this.showGraphic = true;
        setTimeout(function () { _this.topGraphics = "0"; }, 100);
        // console.log('Entro', this.showGraphic);
    };
    LlamadasComponent.prototype.showTablePanel = function () {
        var _this = this;
        this.topGraphics = "-110%";
        setTimeout(function () { _this.showGraphic = false; }, 300);
        // console.log(this.showGraphic);
    };
    LlamadasComponent.prototype.getLlamadasUnion = function (parametros) {
        var _this = this;
        this.refrescar = false;
        this._llamadaService.obtenerLlamadas(parametros).subscribe(function (data) {
            console.log(data.current);
            _this.lstLlamadas = data.current;
            // this.totalChecadas = this.lstAsistencias.length;
            _this.graficasCargadas = false;
            _this.coreComponent.closeModal(0);
            _this.limpiarVariablesGrafica();
            _this.calcularDatosParaGraficas();
            _this.graficasValores = [
                _this.clientes,
                _this.abierta_cerrada,
                _this.et_ft,
                _this.destino,
                _this.tipo
                // this.categorias
            ];
            _this.graficas = [];
            // Titulos de Gráficas
            _this.graficas = [
                'Clientes',
                'Abierta vs Cerrada',
                'ET vs FT',
                'Destino',
                'Tipo'
                // "Categoría"
            ];
            _this.refrescar = true;
        }, function (error) {
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    LlamadasComponent.prototype.getEmpresasConsultaActual = function (lstTemporalEmpresas) {
        // for (let i = 0; i < this.lstLlamadas.length; i++) {
        //   let nombreEmpresa = this.lstLlamadas
        // }
        var temporaldestino = [];
        var tempoAux2 = [];
        var temporalEmpresas = [];
        this.lstEmpresasConsultaActual = [];
        // console.log('Nueva lista recibida: ', lstTemporalEmpresas);
        // console.log('consulta: ', this.lstLlamadas);
        if (lstTemporalEmpresas.length > 0) {
            // this.lstEmpresasConsultaActual.push(lstTemporalEmpresas[0]);
            temporalEmpresas.push(lstTemporalEmpresas[0]);
            // console.log('antes de unico: ', lstTemporalEmpresas[0]);
            // console.log('unico: ', this.lstEmpresasConsultaActual);
        }
        // console.log('tamaño lstLlamadas:', this.lstLlamadas.length);
        // console.log('tamaño lstEmpresasConsultaActual: ', lstEmpresasConsultaActual.length);
        this.lstLlamadas.forEach(function (empresaTemp) {
            var repetido = false;
            var contador = 0;
            temporalEmpresas.forEach(function (temp) {
                // console.log('empresaTemp: ', empresaTemp.empresa);
                // console.log('temp: ', temp.empresa);
                if (temp.empresa === empresaTemp.empresa) {
                    contador += 1;
                    if (contador > 0) {
                        // La empresa ya se encuentra en el arreglo
                        repetido = true;
                        // console.log('Se repitio');
                    }
                }
                // console.log('contador: ', contador);
            });
            // console.log('repetido: ', repetido);
            if (!repetido) {
                // console.log('Se agrego');
                // Inserta la empresa en el arreglo
                temporalEmpresas.push(empresaTemp);
            }
        });
        // console.log('Arreglo de empresas: ', lstEmpresasConsultaActual);
        temporalEmpresas.forEach(function (temp) {
            tempoAux2.push(temp.empresa);
        });
        // Limpieza de arreglo
        this.lstEmpresasConsultaActual = [];
        // lstAuxEmpre.forEach(function (temp) {
        //   this.lstEmpresasConsultaActual.push(temp);
        // });
        this.lstEmpresasConsultaActual = tempoAux2;
        // console.log('Nombre de empresas: ', lstAuxEmpre);
        // console.log('Nombre  de empresas final: ', this.lstEmpresasConsultaActual);
        // Proceso con destinos
        if (this.lstLlamadas.length > 0) {
            this.lstAuxDesti.push(this.lstLlamadas[0]);
        }
        this.lstLlamadas.forEach(function (tempLlamadas) {
            var repetido = false;
            var contador = 0;
            temporaldestino.forEach(function (tempAuxDest) {
                if (tempLlamadas.destino === tempAuxDest.destino) {
                    contador += 1;
                    if (contador > 0) {
                        repetido = true;
                    }
                }
            });
            if (!repetido) {
                temporaldestino.push(tempLlamadas);
            }
        });
        var temporal = [];
        temporaldestino.forEach(function (temp) {
            temporal.push(temp.destino);
        });
        this.lstAuxDesti = [];
        this.lstAuxDesti = temporal;
        // console.log('Destinos finales: ', this.lstAuxDesti);
    };
    LlamadasComponent.prototype.limpiarVariablesGrafica = function () {
        // Limpieza de arrelgos para la fiunción de calcularDatosGracias
        this.lstDestinoGrafica = [];
        this.lstClienteGrafica = [];
        this.lstClienteGraficaAbiCerra = [];
        this.lstClienteGraficaEtFt = [];
        this.lstClienteGraficaDestino = [];
        this.lstClienteGraficaCliente = [];
        this.lstClienteGraficaAbiCerraAux = [];
        // Arreglo de valores para empresa y destino.
        this.lstValores = [];
        this.lstValoresDesti = [];
        var lstValTemp = [];
        this.lstEmpresasConsultaActual.forEach(function (temp) {
            lstValTemp.push(0);
        });
        this.lstValores = lstValTemp;
        var lstValuesExtraHoverClientes = [];
        this.lstEmpresasConsultaActual.forEach(function (temp) {
            lstValuesExtraHoverClientes.push([0, 0]);
        });
        var lstValTempo2 = [];
        // console.log('Ni idea: ', lstAuxDesti);
        this.lstAuxDesti.forEach(function (tempo) {
            lstValTempo2.push(0);
        });
        this.lstValoresDesti = lstValTempo2;
        var lstValuesExtraHoverDestino = [];
        this.lstAuxDesti.forEach(function (temp) {
            lstValuesExtraHoverDestino.push([0, 0]);
        });
        // console.log('etiquetas: ', this.lstEmpresasConsultaActual);
        this.clientes = {
            titulo: 'Totales',
            labels: this.lstEmpresasConsultaActual,
            valores: this.lstValores,
            labelsExtras: ['Clientes', 'Llamadas'],
            labelsExtrasHover: ['Clientes', 'Llamadas'],
            valuesExtras: [0, 0],
            valuesExtrasHover: lstValuesExtraHoverClientes
        };
        console.log('clientes: ', this.clientes);
        this.abierta_cerrada = {
            titulo: 'Totales',
            labels: [
                'CERRADA',
                'ABIERTA'
            ],
            valores: [0, 0],
            labelsExtras: ['Clientes', 'Llamadas'],
            labelsExtrasHover: ['Clientes', 'Llamadas'],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0, 0], [0, 0]]
        };
        this.et_ft = {
            titulo: 'Totales',
            labels: ['ET', 'FT'],
            valores: [0, 0],
            labelsExtras: ['Clientes', 'Llamadas'],
            labelsExtrasHover: ['Clientes', 'Llamadas'],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0, 0], [0, 0]]
        };
        this.destino = {
            titulo: 'Totales',
            labels: this.lstAuxDesti,
            valores: this.lstValoresDesti,
            labelsExtras: ['Clientes', 'Llamdas'],
            labelsExtrasHover: ['Clientes', 'Llamadas'],
            valuesExtras: [0, 0],
            valuesExtrasHover: lstValuesExtraHoverDestino
        };
        this.tipo = {
            titulo: 'Totales',
            labels: [
                'Con requisición',
                'Sin requisición'
            ],
            valores: [0, 0],
            labelsExtras: ['Clientes', 'Llamadas'],
            labelsExtrasHover: ['Clientes', 'Llamadas'],
            valuesExtras: [0, 0],
            valuesExtrasHover: [
                [0, 0],
                [0, 0]
            ]
        };
    };
    LlamadasComponent.prototype.calcularDatosParaGraficas = function () {
        // console.log('tam: ', this.lstAuxDesti.length);
        for (var _i = 0, _a = this.lstLlamadas; _i < _a.length; _i++) {
            var llamada = _a[_i];
            this.llenarTotales(this.clientes, llamada, 'CLIENTES');
            this.llenarTotales(this.abierta_cerrada, llamada, 'ABIERTA_CERRADA');
            this.llenarTotales(this.et_ft, llamada, 'ET_FT');
            this.llenarTotales(this.destino, llamada, 'DESTINO');
            this.llenarTotales(this.tipo, llamada, 'TIPO');
            // this.llenarTotales(this.categorias, llamada, "CATEGORIAS");
        }
        this.graficasCargadas = true;
        // console.log(this.clientes);
        console.log(this.lstClienteGraficaAbiCerra);
        console.log('Empresas consulta: ', this.lstEmpresasConsultaActual);
        console.log(this.lstClienteGraficaAbiCerra[0]);
        console.log(this.lstClienteGraficaAbiCerra[1]);
        this.abierta_cerrada.valuesExtrasHover[1][0] = this.lstClienteGraficaAbiCerra[1].length;
    };
    LlamadasComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        switch (graficaElegida) {
            case 'CLIENTES':
                // console.log('esquema: ', this.clientes);
                // console.log('Empre: ', this.lstEmpresasConsultaActual);
                var posicion2 = this.lstEmpresasConsultaActual.indexOf(elemento.empresa);
                if (this.lstClienteGraficaCliente.indexOf(elemento.empresa) === -1) {
                    this.lstClienteGraficaCliente.push(elemento.empresa);
                    total.valores[posicion2]++;
                    total.valuesExtras[0]++;
                    if (total.valuesExtrasHover != null) {
                        // console.log(':D ', total.valuesExtrasHover[posicion2]);
                        total.valuesExtrasHover[posicion2][0]++;
                    }
                }
                total.valuesExtras[1]++;
                total.valuesExtrasHover[posicion2][1]++;
                break;
            case 'ABIERTA_CERRADA':
                if (this.lstClienteGraficaAbiCerra[0] === undefined) {
                    this.lstClienteGraficaAbiCerra[0] = [];
                    this.lstClienteGraficaAbiCerra[1] = [];
                }
                if (elemento.estado === 'CERRADA') {
                    if (this.lstClienteGraficaAbiCerra[0].indexOf(elemento.empresa) === -1) {
                        this.lstClienteGraficaAbiCerra[0].push(elemento.empresa);
                        if (this.lstClienteGraficaAbiCerra[1].indexOf(elemento.empresa) === -1) {
                            total.valuesExtras[0]++; // Total clientes
                            total.valuesExtrasHover[0][0]++; // clientes sección cerrada
                        }
                        total.valores[0]++;
                    }
                    total.valuesExtras[1]++; // Total llamadas
                    total.valuesExtrasHover[0][1]++; // Llamadas sección cerrada
                }
                else if (elemento.estado === 'ABIERTA' || elemento.estado === 'EN ESPERA') {
                    if (this.lstClienteGraficaAbiCerra[1].indexOf(elemento.empresa) === -1) {
                        this.lstClienteGraficaAbiCerra[1].push(elemento.empresa);
                        if (this.lstClienteGraficaAbiCerra[0].indexOf(elemento.empresa) === -1) {
                            total.valuesExtras[0]++; // Total clientes
                            total.valuesExtrasHover[1][0]++; // Clientes sección abierta
                            total.valuesExtrasHover[1][0] = this.lstClienteGraficaAbiCerra[1].length;
                        }
                        else {
                            total.valuesExtrasHover[0][0]--;
                        }
                        total.valores[1]++;
                    }
                    total.valuesExtras[1]++; // Total Llamadas
                    total.valuesExtrasHover[1][1]++; // Llamadas sección abierta
                }
                break;
            case 'ET_FT':
                if (this.lstClienteGraficaEtFt[0] === undefined) {
                    this.lstClienteGraficaEtFt[0] = [];
                    this.lstClienteGraficaEtFt[1] = [];
                }
                if (elemento.enTiempo === 'NA' || elemento.enTiempo === 'ET') {
                    if (this.lstClienteGraficaEtFt[0].indexOf(elemento.empresa) === -1) {
                        this.lstClienteGraficaEtFt[0].push(elemento.empresa);
                        if (this.lstClienteGraficaEtFt[1].indexOf(elemento.empresa) === -1) {
                            total.valuesExtras[0]++; // Total Clientes
                            total.valuesExtrasHover[0][0]++; // clientes sección
                        }
                        else {
                            // total.valuesExtrasHover[1][0]--;
                        }
                        total.valores[0]++; // Aunmento de En Tiempo
                    }
                    total.valuesExtras[1]++; // Total llamadas
                    total.valuesExtrasHover[0][1]++; // Llamadas sección
                }
                else {
                    if (this.lstClienteGraficaEtFt[1].indexOf(elemento.empresa) === -1) {
                        this.lstClienteGraficaEtFt[1].push(elemento.empresa);
                        if (this.lstClienteGraficaEtFt[0].indexOf(elemento.empresa) === -1) {
                            total.valuesExtras[0]++; // Total Clientes
                            total.valuesExtrasHover[1][0]++; // clientes sección
                            total.valuesExtrasHover[1][0] = this.lstClienteGraficaEtFt[1].length;
                        }
                        else {
                            total.valuesExtrasHover[0][0]--;
                        }
                        total.valores[1]++; // Aumento de Fuera de tiempo
                    }
                    total.valuesExtras[1]++; // Total llamadas
                    total.valuesExtrasHover[1][1]++; // Llamadas sección
                }
                break;
            case 'DESTINO':
                // console.log('wow: ', this.lstAuxDesti);
                // console.log('posicion: ', this.lstAuxDesti.indexOf(elemento.destino));
                var posicion = this.lstAuxDesti.indexOf(elemento.destino);
                if (this.lstClienteGraficaDestino[posicion] === undefined) {
                    this.lstClienteGraficaDestino[posicion] = [];
                }
                if (this.lstClienteGraficaDestino[posicion].indexOf(elemento.empresa) === -1) {
                    this.lstClienteGraficaDestino[posicion].push(elemento.empresa);
                    total.valores[posicion]++;
                    total.valuesExtras[0]++;
                    total.valuesExtrasHover[posicion][0]++;
                }
                total.valuesExtras[1]++;
                total.valuesExtrasHover[posicion][1]++;
                // let posicion = this.lstAuxDesti.indexOf(elemento.destino);
                // if (this.lstClienteGraficaDestino.indexOf(elemento.empresa) === -1) {
                //   this.lstClienteGraficaDestino.push(elemento.empresa);
                //   total.valores[posicion]++;
                //   total.valuesExtras[0]++;
                //   total.valuesExtrasHover[posicion][0]++;
                // }
                // total.valuesExtras[1]++;
                // total.valuesExtrasHover[posicion][1]++;
                break;
            case 'TIPO':
                // console.log('to: ', elemento.requsicionCotiza);
                // console.log('empresas ', this.lstLlamadas);
                // console.log('emp2: ', this.lstEmpresasConsultaActual);
                // onsole.log('ele.empresa: ', elemento.empresa);
                // console.log('arre: ', this.lstClienteGrafica);
                if (this.lstClienteGrafica[0] === undefined) {
                    this.lstClienteGrafica[0] = [];
                    this.lstClienteGrafica[1] = [];
                }
                if (elemento.requsicionCotiza) {
                    if (this.lstClienteGrafica[0].indexOf(elemento.empresa) === -1) {
                        // console.log(this.lstClienteGrafica.indexOf(elemento.empresa));
                        this.lstClienteGrafica[0].push(elemento.empresa);
                        total.valuesExtras[0]++; // Total clientes
                        total.valuesExtrasHover[0][0]++; // Clientes sección
                        total.valores[0]++;
                    }
                    total.valuesExtras[1]++; // Total llamadas
                    total.valuesExtrasHover[0][1]++; // Llamadas sección
                }
                else {
                    if (this.lstClienteGrafica[1].indexOf(elemento.empresa) === -1) {
                        this.lstClienteGrafica[1].push(elemento.empresa);
                        total.valuesExtras[0]++; // clientes sección
                        total.valuesExtrasHover[1][0]++; // Clientes
                        total.valores[1]++;
                    }
                    total.valuesExtras[1]++; // Total llamadas
                    total.valuesExtrasHover[1][1]++; // Llamadas
                }
                break;
        }
    };
    LlamadasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-llamadas',
            template: __webpack_require__("./src/app/components/gestion/consultas/llamadas/llamadas.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/llamadas/llamadas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_gestion_gestion_service__["a" /* GestionService */],
            __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_9__services_util_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_10__services_gestion_consulta_llamadas_llamadas_service__["a" /* LlamadasService */]])
    ], LlamadasComponent);
    return LlamadasComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/llamadas/llamadas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LlamadasModule", function() { return LlamadasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__llamadas_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/llamadas/llamadas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__llamadas_component__ = __webpack_require__("./src/app/components/gestion/consultas/llamadas/llamadas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var LlamadasModule = /** @class */ (function () {
    function LlamadasModule() {
    }
    LlamadasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__llamadas_routing_module__["a" /* LlamadasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__llamadas_component__["a" /* LlamadasComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__llamadas_component__["a" /* LlamadasComponent */]
            ]
        })
    ], LlamadasModule);
    return LlamadasModule;
}());



/***/ })

});
//# sourceMappingURL=llamadas.module.chunk.js.map