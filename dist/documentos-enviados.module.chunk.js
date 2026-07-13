webpackJsonp(["documentos-enviados.module"],{

/***/ "./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosEnviadosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentos_enviados_component__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentosEnviadosRoutingModule = /** @class */ (function () {
    function DocumentosEnviadosRoutingModule() {
    }
    DocumentosEnviadosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__documentos_enviados_component__["a" /* DocumentosEnviadosComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], DocumentosEnviadosRoutingModule);
    return DocumentosEnviadosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div (click)=\"backMenu()\">\r\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\r\n  </div>\r\n  |\r\n  <div>CONSULTA DE DOCUMENTOS</div>\r\n</div>\r\n<div>\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"filtros\">\r\n      <div>\r\n\r\n      </div>\r\n      <div>\r\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\r\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\r\n      </div>\r\n\r\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\r\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\r\n              Y la propiedad IsLoader como verdadera\r\n            -->\r\n\r\n        <div *ngIf=\"isThereData;else loader\">\r\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\r\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" [istextbox]=\"istextbox\" style=\"width: 100%\"></gestion-filter>\r\n\r\n        </div>\r\n\r\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\r\n              una propiedad\r\n              IsLoader como Falsa-->\r\n        <ng-template #loader>\r\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\r\n        </ng-template>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\r\n        <div>\r\n        </div>\r\n        <div [formGroup]=\"filtroForm\">\r\n          <span>Folio Documento</span>\r\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\r\n        </div>\r\n        <div (click)=\"filtroRapido()\">\r\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"resultados\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\r\n    <div>\r\n      <div>\r\n        RESULTADOS\r\n      </div>\r\n    </div>\r\n    <div class=\"fechafactura\">\r\n      <div>\r\n        <div [style.min-width]=\"'50px'\">#</div>\r\n        <div [style.min-width]=\"'150px'\">Folio</div>\r\n        <div [style.min-width]=\"'160px'\">Adjuntos</div>\r\n        <div [style.min-width]=\"'180px'\">Empresa</div>\r\n        <div [style.min-width]=\"'160px'\">Remitente</div>\r\n        <div [style.min-width]=\"'160px'\">Contacto</div>\r\n        <div [style.min-width]=\"'160px'\">Tipo</div>\r\n        <div [style.min-width]=\"'130px'\">Fecha Inicio</div>\r\n        <div [style.min-width]=\"'130px'\">Fecha Fin</div>\r\n      </div>\r\n      <div>\r\n      <div *ngFor=\"let item of lstDocumentos; let i = index\">\r\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\r\n          <div [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.tipo=='Cotizaciones por enviar'\"> \r\n            <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Cotizaciones/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\r\n          </div>\r\n          <div  [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.tipo=='Notificaciones por enviar'\"> \r\n            <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\r\n          </div>\r\n          <div  [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.tipo=='Factura-Proforma por enviar'\"> \r\n            <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\r\n          </div>\r\n          <div  [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.tipo=='Pedidos por enviar'\"> \r\n            <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\r\n          </div>\r\n          <div  [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.proformaFpor=='Proquifa'\"> \r\n            <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Proforma/Proquifa/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\r\n          </div>       \r\n          <div  [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.proformaFpor=='Golocaer'\"> \r\n            <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Proforma/Golocaer/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\r\n          </div>         \r\n          <div [style.min-width]=\"'150px'\" *ngIf=\"item.adjuntosDocumento!=''\">{{item.adjuntosDocumento}}</div>\r\n          <div [style.min-width]=\"'150px'\" *ngIf=\"item.adjuntosDocumento==''\">ND</div>\r\n          <div [style.min-width]=\"'180px'\">{{item.estado}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.origen}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.contacto}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.tipo}}</div>\r\n          <div [style.min-width]=\"'130px'\">{{item.finicio | dateFormatSlash}}</div>\r\n          <div [style.min-width]=\"'130px'\">{{item.ffin | dateFormatSlash}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"total\" *ngIf=\"lstDocumentos!= null\">\r\n      <p>Total:\r\n        <span>{{lstDocumentos.length}}</span>\r\n         <span>Documento<span *ngIf=\"lstDocumentos.length != 1\">s</span>\r\n          <span>Enviado<span *ngIf=\"lstDocumentos.length != 1\">s</span>\r\n          </span>\r\n        </span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(0,137,149,.02)}:host>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:#008895;height:41px;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;padding:0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(1)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;cursor:pointer}:host>div:nth-of-type(1)>div:nth-of-type(2){margin-left:20px}:host>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:calc(100vh - 170px);width:100%}:host>div:nth-of-type(2)>.panelNormal{background:#fff;height:100%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll}:host>div:nth-of-type(2)>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>div:nth-of-type(2)>.panelOcultar .filtros{display:none}:host>div:nth-of-type(2)>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}:host>div:nth-of-type(2) .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>div:nth-of-type(2) .filtroHeader>.abrir{cursor:pointer}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>div:nth-of-type(2) .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242}:host>div:nth-of-type(2) .filtros>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;border-bottom:1px solid #eceef0;color:#fff;font-size:14px}:host>div:nth-of-type(2) .filtros>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:140px;height:25px;margin-right:1px}:host>div:nth-of-type(2) .filtros>.divAvanzada{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:130px;font-size:16px;color:#424242}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div>div{margin-top:6px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2){border-bottom:1px solid #424242;padding-bottom:18px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding-bottom:18px;border-bottom:1px solid #424242}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2)>input{height:25px;border:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:5px}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2)>div:nth-of-type(2){height:100%;width:100%;background:rgba(0,137,149,.02)}:host>div:nth-of-type(2)>.resultados{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:1s ease-in-out;transition:1s ease-in-out}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1){border-bottom:3px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(1){font-size:22px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2)>img{cursor:pointer;height:30px;width:30px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:655px;width:100%;height:100%;overflow-x:scroll}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1320px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(2)>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:57px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}:host .fechafactura{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host .fechafactura>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1320px;min-height:57px}:host .fechafactura>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .fechafactura>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1320px}:host .fechafactura>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host .fechafactura>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host .normalVerde{font-size:16px;font-weight:200;margin-bottom:25px;color:#008895;text-align:center;height:72px}:host .normalVerde>span{cursor:pointer}:host .total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;min-height:30px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}@-webkit-keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@-webkit-keyframes mostar{from{width:50px}to{width:321px}}@keyframes mostar{from{width:50px}to{width:321px}}"

/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosEnviadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_gestion_consulta_documentos_enviados_documentos_enviados_service__ = __webpack_require__("./src/app/services/gestion/consulta/documentos-enviados/documentos-enviados.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DocumentosEnviadosComponent = /** @class */ (function () {
    function DocumentosEnviadosComponent(router, _gestionService, coreComponent, _documentosEnviadosService) {
        var _this = this;
        this.router = router;
        this._gestionService = _gestionService;
        this.coreComponent = coreComponent;
        this._documentosEnviadosService = _documentosEnviadosService;
        this.filtroConsultaRapida = "Folio Documento";
        this.IsDate = true;
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.avanzada = true;
        this.itemsDropList = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Origen", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'BGuevara', key: 1 },
                    { nombre: 'BLozada', key: 2 },
                    { nombre: 'CEJuarez', key: 3 },
                    { nombre: 'DPeralta', key: 4 },
                    { nombre: 'FCTovar', key: 5 },
                    { nombre: 'GETorres', key: 6 },
                    { nombre: 'LHernandez', key: 7 },
                    { nombre: 'LVera', key: 8 },
                    { nombre: 'MRMoreno', key: 9 },
                    { nombre: 'MNava', key: 10 },
                    { nombre: 'MTorres', key: 11 },
                    { nombre: 'NVGomez', key: 12 },
                    { nombre: 'RThome', key: 13 },
                    { nombre: 'SVergara', key: 14 },
                    { nombre: 'YCervantes', key: 15 },
                ], false),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Tipo", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Pedidos por enviar', key: 1 },
                    { nombre: 'Cotizaciones por enviar', key: 2 },
                    { nombre: 'Proforma por enviar', key: 3 },
                    { nombre: 'Facturas por enviar', key: 4 },
                    { nombre: 'Factura-Proforma por enviar', key: 5 },
                    { nombre: 'Notificaciones por enviar', key: 6 }
                ], false),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
        this.IsImage = true;
    }
    DocumentosEnviadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
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
        this.facturaForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.avanzada = true;
        var cuerpo = {
            fInicio: new Date(),
            ffin: new Date(),
            destino: 0,
            origen: "",
            tipo: "",
            folioDocumento: ""
        };
        this.obtenerEnvioCorreoDocumentos(cuerpo);
    };
    DocumentosEnviadosComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    DocumentosEnviadosComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    DocumentosEnviadosComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    DocumentosEnviadosComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    DocumentosEnviadosComponent.prototype.mostrarDatos = function ($event) {
        if ($event.Datos[0].nombre === "--TODOS--") {
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
        }
        var cuerpo = {
            finicio: $event.Fechas.fechaInicial,
            ffin: $event.Fechas.fechaFinal,
            destino: $event.Datos[0].key,
            origen: $event.Datos[1].nombre,
            tipo: $event.Datos[2].nombre,
            folioDocumento: this.txtFactura
        };
        this.obtenerEnvioCorreoDocumentos(cuerpo);
    };
    DocumentosEnviadosComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
        var cuerpo = {
            fInicio: new Date(),
            ffin: new Date(),
            destino: 0,
            origen: "",
            tipo: "",
            folioDocumento: ""
        };
        this.obtenerEnvioCorreoDocumentos(cuerpo);
    };
    DocumentosEnviadosComponent.prototype.obtenerEnvioCorreoDocumentos = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._documentosEnviadosService.obtenerEnvioCorreoDocumentos(parametros).subscribe(function (data) {
            _this.lstDocumentos = data.current;
            console.log(_this.lstDocumentos);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    DocumentosEnviadosComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
        var cuerpo = {
            fInicio: new Date(),
            ffin: new Date(),
            destino: 0,
            origen: "",
            tipo: "",
            folioDocumento: ""
        };
        this.obtenerEnvioCorreoDocumentos(cuerpo);
    };
    DocumentosEnviadosComponent.prototype.filtroRapido = function () {
        console.log("Filtro Rápido");
        this.avanzada = false;
        if (this.filtroForm.get('filtroDato').value != "") {
            var cuerpo = {
                fInicio: "",
                ffin: "",
                destino: 0,
                origen: "",
                tipo: "",
                folioDocumento: this.filtroForm.get('filtroDato').value,
            };
            this.obtenerEnvioCorreoDocumentos(cuerpo);
        }
        else {
            var cuerpo = {
                fInicio: new Date(),
                ffin: new Date(),
                destino: 0,
                origen: "",
                tipo: "",
                folioDocumento: this.filtroForm.get('filtroDato').value,
            };
            this.obtenerEnvioCorreoDocumentos(cuerpo);
        }
    };
    DocumentosEnviadosComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    DocumentosEnviadosComponent.prototype.dropList = function (index, $event) {
    };
    DocumentosEnviadosComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    DocumentosEnviadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-documentos-enviados',
            template: __webpack_require__("./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_7__services_gestion_consulta_documentos_enviados_documentos_enviados_service__["a" /* DocumentosEnviadosService */]])
    ], DocumentosEnviadosComponent);
    return DocumentosEnviadosComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosEnviadosModule", function() { return DocumentosEnviadosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documentos_enviados_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__documentos_enviados_component__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DocumentosEnviadosModule = /** @class */ (function () {
    function DocumentosEnviadosModule() {
    }
    DocumentosEnviadosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__documentos_enviados_routing_module__["a" /* DocumentosEnviadosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__documentos_enviados_component__["a" /* DocumentosEnviadosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__documentos_enviados_component__["a" /* DocumentosEnviadosComponent */]
            ]
        })
    ], DocumentosEnviadosModule);
    return DocumentosEnviadosModule;
}());



/***/ })

});
//# sourceMappingURL=documentos-enviados.module.chunk.js.map