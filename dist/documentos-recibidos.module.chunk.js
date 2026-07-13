webpackJsonp(["documentos-recibidos.module"],{

/***/ "./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosRecibidosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentos_recibidos_component__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentosRecibidosRoutingModule = /** @class */ (function () {
    function DocumentosRecibidosRoutingModule() {
    }
    DocumentosRecibidosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__documentos_recibidos_component__["a" /* DocumentosRecibidosComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], DocumentosRecibidosRoutingModule);
    return DocumentosRecibidosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div (click)=\"backMenu()\">\r\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\r\n  </div>\r\n  |\r\n  <div>CONSULTA DE DOCUMENTOS</div>\r\n</div>\r\n<div>\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"filtros\">\r\n      <div>\r\n\r\n      </div>\r\n      <div>\r\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\r\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\r\n      </div>\r\n\r\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\r\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\r\n              Y la propiedad IsLoader como verdadera\r\n            -->\r\n\r\n        <div *ngIf=\"isThereData;else loader\">\r\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\r\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" [istextbox]=\"istextbox\" style=\"width: 100%\"></gestion-filter>\r\n\r\n        </div>\r\n\r\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\r\n              una propiedad\r\n              IsLoader como Falsa-->\r\n        <ng-template #loader>\r\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\r\n        </ng-template>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\r\n        <div>\r\n          <pq-radio-button [widthTotal]=\"'90px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\"\r\n            (emitItem)=\"radioRapida($event)\" [width]=\"'15px'\"></pq-radio-button>\r\n        </div>\r\n        <div [formGroup]=\"filtroForm\">\r\n          <span>{{filtroConsultaRapida}}</span>\r\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\r\n        </div>\r\n        <div (click)=\"filtroRapido()\">\r\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"resultados\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\r\n    <div>\r\n      <div>\r\n        RESULTADOS\r\n      </div>\r\n    </div>\r\n    <div class=\"fechafactura\">\r\n      <div>\r\n        <div [style.min-width]=\"'40px'\">#</div>\r\n        <div [style.min-width]=\"'130px'\">Folio</div>\r\n        <div [style.min-width]=\"'110px'\">FO</div>\r\n        <div [style.min-width]=\"'110px'\">Tipo</div>\r\n        <div [style.min-width]=\"'180px'\">Empresa</div>\r\n        <div [style.min-width]=\"'130px'\">Destinatario</div>\r\n        <div [style.min-width]=\"'150px'\">Referencia</div>\r\n        <div [style.min-width]=\"'110px'\">Ingresó</div>\r\n        <div [style.min-width]=\"'130px'\">Inicio</div>\r\n        <div [style.min-width]=\"'130px'\"> Fin</div>\r\n        <div [style.min-width]=\"'130px'\"> C. Pago</div>\r\n        <div [style.min-width]=\"'130px'\"> Estado</div>\r\n      </div>\r\n      <div>\r\n      <div *ngFor=\"let item of lstDocumentos; let i = index\">\r\n        <div [style.min-width]=\"'40px'\">{{i +1}}</div>\r\n        <div [style.min-width]=\"'130px'\" class=\"normalVerde\"> \r\n          <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+item.folio+'.pdf')\">{{item.folio}}</span>\r\n        </div>\r\n        <div [style.min-width]=\"'110px'\"  *ngIf=\"item.forigen!=0\">{{item.forigen}}</div>\r\n        <div [style.min-width]=\"'110px'\"  *ngIf=\"item.forigen==0\">ND</div>\r\n        <div [style.min-width]=\"'110px'\">{{item.tipo}}</div>\r\n        <div [style.min-width]=\"'180px'\">{{item.nombreEmpresa}}</div>\r\n        <div [style.min-width]=\"'130px'\">{{item.rpor}}</div>\r\n        <div [style.min-width]=\"'150px'\">{{item.documentoCierre}}</div>\r\n        <div [style.min-width]=\"'110px'\">{{item.ingreso}}</div>\r\n        <div [style.min-width]=\"'130px'\">{{item.fecha | dateFormatSlash}}</div>\r\n        <div [style.min-width]=\"'130px'\">{{item.fechaProceso | dateFormatSlash}}</div>\r\n        <div [style.min-width]=\"'130px'\">{{item.cPago}}</div>\r\n        <div [style.min-width]=\"'130px'\"  class=\"normalVerde\"  *ngIf=\"item.cerradoAbierto=='Cerrado (C/D)'\" >\r\n          <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Cotizaciones/'+item.documentoCierre+'.pdf')\">{{item.cerradoAbierto}}</span>\r\n        </div>\r\n        <div [style.min-width]=\"'130px'\" *ngIf=\"item.cerradoAbierto!='Cerrado (C/D)'\">{{item.cerradoAbierto}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"total\" *ngIf=\"lstDocumentos!= null\">\r\n      <p>Total:\r\n        <span>{{lstDocumentos.length}}</span>\r\n         <span>Documento<span *ngIf=\"lstDocumentos.length != 1\">s</span>\r\n          <span>Enviado<span *ngIf=\"lstDocumentos.length != 1\">s</span>\r\n          </span>\r\n        </span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(0,137,149,.02)}:host>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:#008895;height:41px;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;padding:0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(1)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;cursor:pointer}:host>div:nth-of-type(1)>div:nth-of-type(2){margin-left:20px}:host>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:calc(100vh - 170px);width:100%}:host>div:nth-of-type(2)>.panelNormal{background:#fff;height:100%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll}:host>div:nth-of-type(2)>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>div:nth-of-type(2)>.panelOcultar .filtros{display:none}:host>div:nth-of-type(2)>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}:host>div:nth-of-type(2) .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>div:nth-of-type(2) .filtroHeader>.abrir{cursor:pointer}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>div:nth-of-type(2) .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242}:host>div:nth-of-type(2) .filtros>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;border-bottom:1px solid #eceef0;color:#fff;font-size:14px}:host>div:nth-of-type(2) .filtros>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:140px;height:25px;margin-right:1px}:host>div:nth-of-type(2) .filtros>.divAvanzada{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:130px;font-size:16px;color:#424242}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div>div{margin-top:6px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2){border-bottom:1px solid #424242;padding-bottom:18px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding-bottom:18px;border-bottom:1px solid #424242}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2)>input{height:25px;border:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:5px}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2)>div:nth-of-type(2){height:100%;width:100%;background:rgba(0,137,149,.02)}:host>div:nth-of-type(2)>.resultados{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:1s ease-in-out;transition:1s ease-in-out}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1){border-bottom:3px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(1){font-size:22px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2)>img{cursor:pointer;height:30px;width:30px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:655px;width:100%;height:100%;overflow-x:scroll}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1713px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:57px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}:host .fechafactura{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host .fechafactura>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1713px;min-height:57px}:host .fechafactura>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .fechafactura>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1713px}:host .fechafactura>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host .fechafactura>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host .normalVerde{font-size:16px;font-weight:200;margin-bottom:25px;color:#008895;text-align:center;height:72px}:host .normalVerde>span{cursor:pointer}:host .total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;min-height:30px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}@-webkit-keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@-webkit-keyframes mostar{from{width:50px}to{width:321px}}@keyframes mostar{from{width:50px}to{width:321px}}"

/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosRecibidosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_gestion_consulta_documentos_recibidos_documentos_recibidos_service__ = __webpack_require__("./src/app/services/gestion/consulta/documentos-recibidos/documentos-recibidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DocumentosRecibidosComponent = /** @class */ (function () {
    function DocumentosRecibidosComponent(router, _gestionService, _documentosRecibidosService, coreComponent) {
        var _this = this;
        this.router = router;
        this._gestionService = _gestionService;
        this._documentosRecibidosService = _documentosRecibidosService;
        this.coreComponent = coreComponent;
        this.filtroConsultaRapida = "Folio";
        this.lstRadiosRapida = ['Folio', 'Referencia'];
        this.IsDate = true;
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.avanzada = true;
        this.itemsDropList = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.istextbox = true;
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Destinatario", [
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
                    { nombre: 'YMunoz', key: 60 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Tipo", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Otros', key: 1 },
                    { nombre: 'Pago', key: 2 },
                    { nombre: 'Pedido', key: 3 },
                    { nombre: 'Requisición', key: 4 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Abierto', key: 1 },
                    { nombre: 'Cerrado', key: 2 },
                ], true),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
        this.IsImage = true;
    }
    DocumentosRecibidosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]()
        });
        this.date = new Date();
        this.date2 = new Date();
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
        this.facturaForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]()
        });
        this.avanzada = true;
        var cuerpo = {
            finicio: new Date(),
            ffin: new Date(),
            empresa: "--TODOS--",
            referencia: "",
            destinatario: "--TODOS--",
            tipo: "--TODOS--",
            abiertoCerrado: "--TODOS--",
            cPago: ""
        };
        this.buscarDocumentosXBA(cuerpo);
    };
    DocumentosRecibidosComponent.prototype.buscarDocumentosXBA = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._documentosRecibidosService.buscarDocumentosXBA(parametros).subscribe(function (data) {
            _this.lstDocumentos = data.current;
            console.log(_this.lstDocumentos);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    DocumentosRecibidosComponent.prototype.buscarDocumentoRecibidoPorFolio = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._documentosRecibidosService.buscarDocumentoRecibidoPorFolio(parametros).subscribe(function (data) {
            _this.lstDocumentos = data.current;
            console.log(_this.lstDocumentos);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    DocumentosRecibidosComponent.prototype.mostrarDatos = function ($event) {
        if ($event.Datos[0].key === 0) {
            $event.Datos[0].key = "--TODOS--";
        }
        /* if ($event.Datos[0].nombre === "--TODOS--") {
             $event.Datos[0].key = 0;
           }
            
            if ($event.Datos[0].key === 0) {
             $event.Datos[0].nombre = "--TODOS--";
           }
           if ($event.Datos[1].nombre === "--TODOS--") {
             $event.Datos[1].nombre = "";
           }
           if ($event.Datos[2].nombre === "--TODOS--") {
             $event.Datos[2].nombre = "";
           }*/
        var cuerpo = {
            finicio: $event.Fechas.fechaInicial,
            ffin: $event.Fechas.fechaFinal,
            empresa: $event.Datos[0].key,
            referencia: $event.textbox,
            destinatario: $event.Datos[1].nombre,
            tipo: $event.Datos[2].nombre,
            abiertoCerrado: $event.Datos[3].nombre,
            cPago: ""
        };
        this.buscarDocumentosXBA(cuerpo);
    };
    DocumentosRecibidosComponent.prototype.radioRapida = function ($event) {
        console.log("Método radioRapida ");
        if ($event == 0) {
            this.filtroConsultaRapida = "Folio";
        }
        else if ($event == 1) {
            this.filtroConsultaRapida = "Referencia";
        }
    };
    DocumentosRecibidosComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    DocumentosRecibidosComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    DocumentosRecibidosComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    DocumentosRecibidosComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    DocumentosRecibidosComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
        var cuerpo = {
            finicio: new Date(),
            ffin: new Date(),
            empresa: "--TODOS--",
            referencia: "",
            destinatario: "--TODOS--",
            tipo: "--TODOS--",
            abiertoCerrado: "--TODOS--",
            cPago: ""
        };
        this.buscarDocumentosXBA(cuerpo);
    };
    DocumentosRecibidosComponent.prototype.filtroRapido = function () {
        console.log("Filtro rápido");
        console.log("Filtro rápido");
        if (this.filtroConsultaRapida == "Folio") {
            var cuerpo = {
                folio: (this.filtroConsultaRapida == "Folio") ? this.filtroForm.get('filtroDato').value : "",
                porFolio: true
            };
            this.buscarDocumentoRecibidoPorFolio(cuerpo);
        }
        else {
            var cuerpo = {
                finicio: new Date(),
                ffin: new Date(),
                empresa: "--TODOS--",
                referencia: (this.filtroConsultaRapida == "Referencia") ? this.filtroForm.get('filtroDato').value : "",
                destinatario: "--TODOS--",
                tipo: "--TODOS--",
                abiertoCerrado: "--TODOS--",
                cPago: ""
            };
            this.buscarDocumentosXBA(cuerpo);
        }
    };
    DocumentosRecibidosComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
    };
    DocumentosRecibidosComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    DocumentosRecibidosComponent.prototype.dropList = function (index, $event) {
    };
    DocumentosRecibidosComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    DocumentosRecibidosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-documentos-recibidos',
            template: __webpack_require__("./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_6__services_gestion_consulta_documentos_recibidos_documentos_recibidos_service__["a" /* DocumentosRecibidosService */], __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], DocumentosRecibidosComponent);
    return DocumentosRecibidosComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosRecibidosModule", function() { return DocumentosRecibidosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documentos_recibidos_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__documentos_recibidos_component__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DocumentosRecibidosModule = /** @class */ (function () {
    function DocumentosRecibidosModule() {
    }
    DocumentosRecibidosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__documentos_recibidos_routing_module__["a" /* DocumentosRecibidosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__documentos_recibidos_component__["a" /* DocumentosRecibidosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__documentos_recibidos_component__["a" /* DocumentosRecibidosComponent */]
            ]
        })
    ], DocumentosRecibidosModule);
    return DocumentosRecibidosModule;
}());



/***/ })

});
//# sourceMappingURL=documentos-recibidos.module.chunk.js.map