webpackJsonp(["facturacion.module"],{

/***/ "./src/app/components/gestion/consultas/facturacion/facturacion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturacionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facturacion_component__ = __webpack_require__("./src/app/components/gestion/consultas/facturacion/facturacion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacturacionRoutingModule = /** @class */ (function () {
    function FacturacionRoutingModule() {
    }
    FacturacionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__facturacion_component__["a" /* FacturacionComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], FacturacionRoutingModule);
    return FacturacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/facturacion/facturacion.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div (click)=\"backMenu()\">\r\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\r\n  </div>\r\n  |\r\n  <div *ngIf=\"!detalle\">CONSULTA DE FACTURACIÓN</div>\r\n  <div *ngIf=\"detalle\" (click)=\"regresarConsulta()\" class=\"regresar\">CONSULTA DE FACTURACIÓN</div>\r\n  <div *ngIf=\"detalle\">|</div>\r\n  <div *ngIf=\"detalle\">DETALLES</div>\r\n</div>\r\n<div *ngIf=\"!detalle\" class=\"consultaResultados\">\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"filtros\">\r\n      <div>\r\n        <pq-radio-button [widthTotal]=\"'100px'\" [lstItems]=\"lstItems\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\" (emitItem)=\"radioSistema($event)\"\r\n          [width]=\"'15px'\"></pq-radio-button>\r\n      </div>\r\n      <div>\r\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\r\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\r\n      </div>\r\n\r\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\r\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\r\n            Y la propiedad IsLoader como verdadera\r\n        -->\r\n        <div *ngIf=\"isThereData;else loader\">\r\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\r\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\"></gestion-filter>\r\n        </div>\r\n\r\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\r\n            una propiedad\r\n            IsLoader como Falsa-->\r\n        <ng-template #loader>\r\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\r\n        <div>\r\n          <pq-radio-button [widthTotal]=\"'60px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\"\r\n            (emitItem)=\"radioRapida($event)\" [width]=\"'15px'\"></pq-radio-button>\r\n        </div>\r\n\r\n        <div [formGroup]=\"filtroForm\">\r\n          <span>{{filtroConsultaRapida}}</span>\r\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\r\n        </div>\r\n\r\n        <div (click)=\"filtroRapido()\">\r\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"resultados\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\r\n    <div>\r\n      <div>\r\n        RESULTADOS\r\n      </div>\r\n      <div>\r\n        <img height=\"20px\" width=\"20px\" src=\"assets/Images/exportar.svg\" alt=\"\" (click)=\"download()\">\r\n        <img [style.margin-right]=\"'15px'\" height=\"20px\" width=\"20px\" src=\"assets/Images/descargar.svg\" alt=\"\" (click)=\"compressed_files()\">\r\n      </div>\r\n    </div>\r\n    <div class=\"sistema\" *ngIf=\"sistema && !fueraSistema\">\r\n      <div>\r\n        <div [style.min-width]=\"'50px'\">#</div>\r\n        <div [style.min-width]=\"'160px'\">Cliente</div>\r\n        <div [style.min-width]=\"'160px'\">Cobrador</div>\r\n        <div [style.min-width]=\"'180px'\">Razón social</div>\r\n        <div [style.min-width]=\"'160px'\">RFC</div>\r\n        <div [style.min-width]=\"'100px'\">Factura</div>\r\n        <div [style.min-width]=\"'160px'\">UUID</div>\r\n        <div [style.min-width]=\"'120px'\">Vendió</div>\r\n        <div [style.min-width]=\"'80px'\">Monto</div>\r\n        <div [style.min-width]=\"'160px'\">C. Pago</div>\r\n        <div [style.min-width]=\"'120px'\">F. Facturación</div>\r\n        <div [style.min-width]=\"'160px'\">Tipo</div>\r\n        <div [style.min-width]=\"'100px'\">Refacturada</div>\r\n        <div [style.min-width]=\"'100px'\">Estado</div>\r\n        <div [style.min-width]=\"'30px'\"></div>\r\n      </div>\r\n      <div>\r\n        <div *ngFor=\"let item of lstFacturas; let i = index\">\r\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.nombre_cliente}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.cobrador}}</div>\r\n          <div [style.min-width]=\"'180px'\">{{item.rsocial}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.rfc}}</div>\r\n          <div [style.min-width]=\"'100px'\">{{item.factura}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.uuid}}</div>\r\n          <div [style.min-width]=\"'120px'\">{{item.fpor}}</div>\r\n          <div [style.min-width]=\"'80px'\" [style.justify-content]=\"'flex-end'\">{{item.importe | acFormatMoney}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.cpago}}</div>\r\n          <div [style.min-width]=\"'120px'\">{{item.fecha | dateFormatSlash}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.tipo}}</div>\r\n          <div [style.min-width]=\"'100px'\">{{item.refacturada}}</div>\r\n          <div [style.min-width]=\"'100px'\">{{item.estado}}</div>\r\n          <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\r\n            <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"fueraSistema\" *ngIf=\"!sistema && !fueraSistema\">\r\n      <div>\r\n        <div [style.min-width]=\"'50px'\">#</div>\r\n        <div [style.min-width]=\"'160px'\">Folio</div>\r\n        <div [style.min-width]=\"'160px'\">UUID</div>\r\n        <div [style.min-width]=\"'160px'\">RFC</div>\r\n        <div [style.min-width]=\"'160px'\">Cliente</div>\r\n        <div [style.min-width]=\"'160px'\">Cobrador</div>\r\n        <div [style.min-width]=\"'160px'\">Vendió</div>\r\n        <div [style.min-width]=\"'160px'\">Fecha</div>\r\n        <div [style.min-width]=\"'100px'\">Monto</div>\r\n        <div [style.min-width]=\"'160px'\">Estado</div>\r\n      </div>\r\n      <div>\r\n        <div *ngFor=\"let item of lstFacturas; let i = index\">\r\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.numeroFactura}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.uuid}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.rfc_Cliente}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.nombre_Cliente}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.cobrador}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.facturadoPor}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.fecha | dateFormatSlash}}</div>\r\n          <div [style.min-width]=\"'100px'\" [style.justify-content]=\"'flex-end'\">{{item.montoFacturaDLS | acFormatMoney}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.estado}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"fueraSistemaRapida\" *ngIf=\"fueraSistema\">\r\n      <div>\r\n        <div [style.min-width]=\"'50px'\">#</div>\r\n        <div [style.min-width]=\"'160px'\">Folio</div>\r\n        <div [style.min-width]=\"'160px'\">UUID</div>\r\n        <div [style.min-width]=\"'160px'\">Folio PC</div>\r\n        <div [style.min-width]=\"'160px'\">RFC</div>\r\n        <div [style.min-width]=\"'160px'\">Cliente</div>\r\n        <div [style.min-width]=\"'160px'\">Cobrador</div>\r\n        <div [style.min-width]=\"'160px'\">Vendió</div>\r\n        <div [style.min-width]=\"'160px'\">Fecha</div>\r\n        <div [style.min-width]=\"'100px'\">Monto</div>\r\n        <div [style.min-width]=\"'160px'\">Estado</div>\r\n      </div>\r\n      <div>\r\n        <div *ngFor=\"let item of lstFacturas; let i = index\">\r\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.numeroFactura}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.uuid}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.folioPC}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.rfc_Cliente}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.nombre_Cliente}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.cobrador}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.facturadoPor}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.fecha | dateFormatSlash}}</div>\r\n          <div [style.min-width]=\"'100px'\" [style.justify-content]=\"'flex-end'\">{{item.montoFacturaDLS | acFormatMoney}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.estado}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"total\">\r\n      <p>Total:\r\n        <span>{{lstFacturas.length}}</span>\r\n        <span>Factura<span *ngIf=\"lstFacturas.length != 1\">s</span>\r\n        </span>\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"detalle\" class=\"consultaDetalles\">\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"filtros\">\r\n      <div class=\"detalleCliente\">{{facturaDetalle.nombre_cliente}}</div>\r\n      <div class=\"detalleTitulo\">Factura:</div>\r\n      <div class=\"detalleTextoVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\"> {{facturaDetalle.factura}}</div>\r\n      <div class=\"detalleTitulo\">Vendió:</div>\r\n      <div class=\"detalleTexto\">{{facturaDetalle.fpor}}</div>\r\n      <div class=\"detalleTitulo\">P. Interno:</div>\r\n      <div class=\"detalleTextoVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+facturaDetalle.cpedido+'.pdf')\">{{facturaDetalle.cpedido}}</div>\r\n      <div class=\"detalleTitulo\">Referencia de Cliente:</div>\r\n      <div class=\"detalleTextoVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+facturaDetalle.doctoR+'.pdf')\">{{facturaDetalle.referencia}}</div>\r\n      <div class=\"detalleTitulo\">Monto:</div>\r\n      <div class=\"detalleTexto\">{{facturaDetalle.importe | acFormatMoney}} USD</div>\r\n      <div class=\"detalleTitulo\">Condiciones de Pago:</div>\r\n      <div class=\"detalleTexto\">{{facturaDetalle.cPago}}</div>\r\n      <div class=\"detalleTitulo\">Medio de Pago:</div>\r\n      <div class=\"detalleTexto\">{{facturaDetalle.medioPago}}</div>\r\n      <div class=\"detalleTitulo\">Fecha de Facturación:</div>\r\n      <div class=\"detalleTexto\">{{facturaDetalle.fecha | dateFormatSlash}}</div>\r\n      <div class=\"detalleTitulo\">FEP:</div>\r\n      <div class=\"detalleTexto\">\r\n        <span *ngIf=\"facturaDetalle.fep != null\">{{facturaDetalle.fep | dateFormatSlash}}</span>\r\n        <span *ngIf=\"facturaDetalle.fep == null\">Pendiente</span>\r\n      </div>\r\n      <div class=\"detalleTitulo\">Tipo:</div>\r\n      <div class=\"detalleTexto\">{{facturaDetalle.tipo}}</div>\r\n      <div class=\"detalleTitulo\">Medio:</div>\r\n      <div class=\"detalleTexto\">{{facturaDetalle.medio}}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"contenidoFactura\">\r\n    <div class=\"detalleFactura\">\r\n      <div>DETALLE DE FACTURA</div>\r\n      <div>\r\n        <div [ngClass]=\"i==0?'divActual':lstFacturasDetalleActive[i]\" *ngFor=\"let item of lstFacturasDetalle; let i = index\" (click)=\"resumenFactura(i)\">\r\n          <div class=\"dfSelect\"></div>\r\n          <div>\r\n            <div>\r\n              <div [style.color]=\"'#008895'\">F-{{item.factura}}</div>\r\n              <div>Fecha de Facturación: {{item.fecha | dateFormatSlash}}</div>\r\n            </div>\r\n            <div>\r\n              <div>{{item.importe | acFormatMoney}} USD</div>\r\n              <div *ngIf=\"item.estado == 'Por Cobrar'\">DRC:\r\n                <span *ngIf=\"item.drc != null\">{{item.drc}}</span>\r\n                <span *ngIf=\"item.drc == null\">Pendiente</span>\r\n              </div>\r\n              <div *ngIf=\"item.estado == 'Cobrada'\">Moroso:\r\n                <span [style.color]=\"item.moroso != 'No'?'#C1272D':'#39B54A'\">{{item.moroso}}</span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <div>Total de Pzas: {{item.numPiezas}}</div>\r\n              <div [style.color]=\"item.estado != 'Cobrada'?'#C1272D':'#39B54A'\">{{item.estado}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div> TOTAL: {{lstFacturasDetalle.length}} FACTURA<span *ngIf=\"lstFacturasDetalle.length != 1\">S</span> · {{totalDetalle | acFormatMoney}} USD</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"lineaTiempo\">\r\n      <div>LÍNEA DE TIEMPO</div>\r\n      <div *ngIf=\"lstLineaTiempo != undefined\">\r\n        <div [ngClass]=\"lstLineaTiempoActive[i]\" *ngFor=\"let item of lstLineaTiempo; let i = index\" (click)=\"lineaTiempo(i)\">\r\n          <div class=\"ltSelect\"></div>\r\n          <div>\r\n            <div>\r\n              <div>{{item.etapa}}</div>\r\n              <div>{{item.responsable}}</div>\r\n              <div>FI {{item.fechaInicio | dateFormatSlashHour}}</div>\r\n              <div>FF {{item.fechaFin | dateFormatSlashHour}}</div>\r\n              <div>TT {{item.totalProceso}} día<span *ngIf=\"item.totalProceso != 1\">s</span>\r\n              </div>\r\n            </div>\r\n            <div></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"detalleTiempo\">\r\n      <div style=\"text-transform: uppercase\">\r\n        {{estadoItemLineaTiempo}}\r\n      </div>\r\n      <div>\r\n        <!-- Credito -->\r\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'FACTURACION' && itemLineaTiempo != undefined\">\r\n          <div>\r\n            <div class=\"titulo\">Generales</div>\r\n            <div class=\"subTitulo\">Fecha de facturación:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Factura:</div>\r\n            <div class=\"normalVerde\">\r\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\">{{itemLineaTiempo.referencia}}</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Archivo XML:</div>\r\n            <div class=\"normalVerde\">\r\n              <span><a href=\"http://201.161.12.60:51725/SAP/Facturas/{{facturaDetalle.fpor}}/{{facturaDetalle.factura}}.xml\" download>{{itemLineaTiempo.referencia}}.xml</a></span>\r\n            </div>\r\n            <div class=\"subTitulo\">Facturó:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\r\n            <div class=\"subTitulo\">Tipo de cambio:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.tcambio | acFormatMoney}}</div>\r\n            <div class=\"subTitulo\">Tipo:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.tipo}}</div>\r\n            <div class=\"subTitulo\">Medio:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.medio}}</div>\r\n          </div>\r\n          <div style=\"border-bottom: 0px\">\r\n            <div class=\"titulo\">Cargar factura a portal</div>\r\n            <div class=\"normal\">FI {{itemLineaTiempo.fechaInicioPortal | dateFormatSlashHour}} : FF {{itemLineaTiempo.fechaFinPortal | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Realizó:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo.fechaFinPortal != null\">{{itemLineaTiempo.contacto}}</span>\r\n              <span *ngIf=\"itemLineaTiempo.fechaFinPortal == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Comprobante portal:</div>\r\n            <div class=\"normalVerde\">\r\n              <span *ngIf=\"itemLineaTiempo.fechaFinPortal != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/ComprobantePortal/'+itemLineaTiempo.pedimento+'.pdf')\">Ver</span>\r\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo.fechaFinPortal == null\">Pendiente</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Entrega -->\r\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'ENTREGA' && itemLineaTiempo != undefined\">\r\n          <div>\r\n            <div class=\"titulo\">Generales</div>\r\n            <div class=\"subTitulo\">Fecha tramitación:</div>\r\n            <div class=\"normal\">{{lineaIiempoSelect.fechaInicio | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Fecha entrega:</div>\r\n            <div class=\"normal\">{{lineaIiempoSelect.fechaFin | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Conforme:</div>\r\n            <div class=\"normalVerde\"><span *ngIf=\"lineaIiempoSelect.conforme != ''\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/DC/'+lineaIiempoSelect.documento+'.pdf')\">{{lineaIiempoSelect.conforme}}</span><span class=\"normal\" *ngIf=\"lineaIiempoSelect.conforme == ''\">Pendiente</span></div>\r\n          </div>\r\n          <div>\r\n            <div class=\"titulo\">Tramitar ruta</div>\r\n            <div class=\"normal\">FI {{itemLineaTiempo[0].fechaInicio | dateFormatSlashHour}} : FF {{itemLineaTiempo[0].fechaFin | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Tramitó:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo[0].fechaFin != null\">{{itemLineaTiempo[0].responsable}}</span>\r\n              <span *ngIf=\"itemLineaTiempo[0].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Etiqueta:</div>\r\n            <div class=\"normalVerde\">\r\n              <span *ngIf=\"itemLineaTiempo[0].fechaFin != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemLineaTiempo[0].referencia+'.pdf')\">{{itemLineaTiempo[0].referencia}}</span>\r\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[0].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Comentarios gestor ruta:</div>\r\n            <div class=\"normalVerde\">\r\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[0].fechaFin != null && itemLineaTiempo[0].comentarios == ''\">ND</span>\r\n              <span *ngIf=\"itemLineaTiempo[0].fechaFin != null\">{{itemLineaTiempo[0].comentarios}}</span>\r\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[0].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"titulo\">Surtir ruta</div>\r\n            <div class=\"normal\">FI {{itemLineaTiempo[1].fechaInicio | dateFormatSlashHour}} : FF {{itemLineaTiempo[1].fechaFin | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Surtió:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo[1].fechaFin != null\">{{itemLineaTiempo[1].responsable}}</span>\r\n              <span *ngIf=\"itemLineaTiempo[1].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Surtido:</div>\r\n            <div style=\"margin-bottom: 25px\">\r\n              <span *ngIf=\"itemLineaTiempo[1].fechaFin != null\">\r\n                <span *ngFor=\"let item of itemLineaTiempo[1].referencia\">\r\n                  <span class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+item+'.pdf')\"><span>{{item}}</span></span>&nbsp;&nbsp;\r\n                </span>\r\n              </span>\r\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[1].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Caja colectora:</div>\r\n            <div class=\"normalVerde\">\r\n              <span *ngIf=\"itemLineaTiempo[1].fechaFin != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemLineaTiempo[1].pedimento+'.pdf')\">{{itemLineaTiempo[1].pedimento}}</span>\r\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[1].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n          </div>\r\n          <div  style=\"border-bottom: 0px;\">\r\n            <div class=\"titulo\">Asignar mensajero</div>\r\n            <div class=\"normal\">FI {{itemLineaTiempo[2].fechaInicio | dateFormatSlashHour}} : FF {{itemLineaTiempo[2].fechaFin | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Asignó:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin != null\">{{itemLineaTiempo[2].contacto}}</span>\r\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Mensajero asignado:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin != null\">{{itemLineaTiempo[2].responsable}}</span>\r\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Ruta:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin != null\">{{itemLineaTiempo[2].medio}} ‧ {{itemLineaTiempo[2].referencia}}</span>\r\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"itemLineaTiempo[3] != undefined\" style=\"border-bottom: 0px; border-top: 1px solid #D8D8D8\">\r\n            <div class=\"titulo\">Ejecutar ruta</div>\r\n            <div class=\"normal\">FI {{itemLineaTiempo[3].fechaInicio | dateFormatSlashHour}} : FF {{itemLineaTiempo[3].fechaFin | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Entrega:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo[3].fechaFin != null\">{{itemLineaTiempo[3].referencia}}</span>\r\n              <span *ngIf=\"itemLineaTiempo[3].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"itemLineaTiempo[4] != undefined\" style=\"border-bottom: 0px; border-top: 1px solid #D8D8D8\">\r\n            <div class=\"titulo\">Cerrar ruta</div>\r\n            <div class=\"normal\">FI {{itemLineaTiempo[4].fechaInicio | dateFormatSlashHour}} : FF {{itemLineaTiempo[4].fechaFin | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Cerró:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo[4].fechaFin != null\">{{itemLineaTiempo[4].responsable}}</span>\r\n              <span *ngIf=\"itemLineaTiempo[4].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Documentos resultantes:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo[4].fechaFin != null\">\r\n                <span class=\"normalVerde\">\r\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/RT/'+itemLineaTiempo[4].pedimento+'.pdf')\">{{itemLineaTiempo[4].pedimento}}</span>\r\n                </span>&nbsp;\r\n                <span class=\"normalVerde\">\r\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/AR/'+itemLineaTiempo[4].referencia+'.pdf')\">{{itemLineaTiempo[4].referencia}}</span>\r\n                </span>\r\n              </span>\r\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[4].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">¿Entrega y revisión?</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo[4].fechaFin != null\">{{itemLineaTiempo[4].medio}}</span>\r\n              <span *ngIf=\"itemLineaTiempo[4].fechaFin == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Refacturación</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo[4].refacturacion != null\">{{itemLineaTiempo[4].refacturacion}}</span>\r\n              <span *ngIf=\"itemLineaTiempo[4].refacturacion == null\">ND</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n         <!-- Revision -->\r\n         <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'REVISION' && itemLineaTiempo != undefined\">\r\n            <div style=\"border-bottom: 0px\">\r\n                <div class=\"titulo\">Generales</div>\r\n                <div class=\"subTitulo\">Fecha entrega:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo[0].fechaEntrega | dateFormatSlashHour}}</div>\r\n                <div class=\"subTitulo\">Fecha programación:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo[0].fechaProgramacion | dateFormatSlashHour}}</div>\r\n                <div class=\"subTitulo\">Fecha revisión:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo[0].fechaRevision | dateFormatSlashHour}}</div>\r\n                <div class=\"subTitulo\">Programó:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo[0].responsable}}</div>\r\n                <div class=\"subTitulo\">Comentarios para la revisión:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo[0].comentarios}}</div>\r\n                <div class=\"subTitulo\">Mensajero asignado:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo[0].mensajero}}</div>\r\n                <div class=\"subTitulo\">Revisión:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo[0].revision}}</div>\r\n                <div class=\"subTitulo\">Documentación de cierre:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo[0].docsCierre}}</div>\r\n                <div class=\"subTitulo\">Documentos resultantes:</div>\r\n                <div class=\"normal\">\r\n                    <span class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/AR/'+itemLineaTiempo[1].doscResult1+'.pdf')\">\r\n                      <span>{{itemLineaTiempo[0].doscResult1}}</span>\r\n                    </span>\r\n                    <span class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/RT/'+itemLineaTiempo[1].doscResult2+'.pdf')\">\r\n                      <span >{{itemLineaTiempo[0].doscResult2}}</span>\r\n                    </span>\r\n                  </div>\r\n              </div>\r\n         </div>\r\n\r\n         <!-- Cobro -->\r\n         <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'COBRO' && itemLineaTiempo != undefined\">\r\n          <div>\r\n            <div class=\"titulo\">Generales</div>\r\n            <div class=\"subTitulo\">Fecha revisión:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo[0].fechaRevision | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Fecha programación:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo[0].fechaProgramacion | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Fecha cobro:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo[0].fechaCobro | dateFormatSlashHour}}</div>\r\n          </div>\r\n          <div>\r\n            <div class=\"titulo\">Programación</div>\r\n            <div class=\"normal\">FI {{itemLineaTiempo[1].fechaRevision | dateFormatSlashHour}} : FF {{itemLineaTiempo[1].fechaProgramacion | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Programó:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo[1].responsable}}</div>\r\n            <div class=\"subTitulo\">Monto:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo[1].monto | acFormatMoney}}</div>\r\n            <div class=\"subTitulo\">Moneda:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo[1].cobro}}</div>\r\n            <div class=\"subTitulo\">Tipo de cambio:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo[1].doscResult1 | acFormatMoney}}</div>\r\n            <div class=\"subTitulo\">FEP:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo[1].fechaEntrega | dateFormatSlash}}</div>\r\n          </div>\r\n          <div style=\"border-bottom: 0px\">\r\n            <div class=\"titulo\">Monitoreo</div>\r\n            <div class=\"normal\">FI {{itemLineaTiempo[4].fechaRevision | dateFormatSlashHour}} : FF {{itemLineaTiempo[4].fechaProgramacion | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Comprobante pago:</div>\r\n            <div class=\"normalVerde\">\r\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemLineaTiempo[4].doscResult1+'.pdf')\">{{itemLineaTiempo[4].doscResult1}}</span>\r\n            </div>\r\n            <div class=\"subTitulo\" *ngIf=\"itemLineaTiempo[4].fechaProgramacion != null\">Complemento de pago:</div>\r\n            <div class=\"normal\" *ngIf=\"itemLineaTiempo[4].fechaProgramacion != null\">\r\n              <span>\r\n                <span class=\"normalVerde\">\r\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/ComplementoPago/'+facturaDetalle.fpor+'/'+itemLineaTiempo[4].documento+'.pdf')\">PDF</span>\r\n                </span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <span class=\"normalVerde\">\r\n                  <span><a href=\"http://201.161.12.60:51725/SAP/ComplementoPago/{{facturaDetalle.fpor}}/{{itemLineaTiempo[4].documento}}.xml\" download>XML</a></span>\r\n                </span>\r\n              </span>\r\n            </div>\r\n            <div class=\"subTitulo\">Monto cobrado:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo[4].monto | acFormatMoney}}</div>\r\n            <div class=\"subTitulo\">Fecha cobro:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo[4].fechaCobro | dateFormatSlash}}</div>\r\n            <div class=\"subTitulo\">Moroso:</div>\r\n            <div class=\"normal\">\r\n              <span [style.color]=\"'#39B54A'\" *ngIf=\"itemLineaTiempo[4].cobro == 0\">NO</span>\r\n              <span [style.color]=\"'#C1272D'\" *ngIf=\"itemLineaTiempo[4].cobro == 1\">SI</span>\r\n            </div>\r\n          </div>\r\n\r\n         </div>\r\n\r\n        <!-- Factura -->\r\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'FACTURA' && itemLineaTiempo != undefined\">\r\n          <div>\r\n              <div class=\"titulo\">Generales</div>\r\n              <div class=\"subTitulo\">Fecha de facturación:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo[0].fechaFacturacion | dateFormatSlashHour}}</div>\r\n              <div class=\"subTitulo\">Factura:</div>\r\n              <div class=\"normalVerde\">\r\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\">{{itemLineaTiempo[0].factura}}</span>\r\n              </div>\r\n              <div class=\"subTitulo\">Archivo XML:</div>\r\n              <div class=\"normalVerde\">\r\n                  <span><a href=\"http://201.161.12.60:51725/SAP/Facturas/{{facturaDetalle.fpor}}/{{facturaDetalle.factura}}.xml\" download>{{itemLineaTiempo[0].factura}}.xml</a></span>\r\n              </div>\r\n              <div class=\"subTitulo\">Facturó:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo[0].responsable}}</div>\r\n              <div class=\"subTitulo\">Tipo de cambio:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo[0].tcambio | acFormatMoney}}</div>\r\n              <div class=\"subTitulo\">Tipo:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo[0].tipo}}</div>\r\n              <div class=\"subTitulo\">Medio:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo[0].medio}}</div>\r\n          </div>\r\n          <div>\r\n              <div class=\"titulo\">Entrega</div>\r\n              <div class=\"subTitulo\">Fecha entrega:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo[1].fechaEntrega | dateFormatSlashHour}}</div>\r\n              <div class=\"subTitulo\">Conforme:</div>\r\n              <div class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/DC/'+itemLineaTiempo[1].docsCierre+'.pdf')\">\r\n                  <span *ngIf=\"itemLineaTiempo[1].conforme == 1\">SI</span>\r\n                  <span *ngIf=\"itemLineaTiempo[1].conforme == 0\">NO</span>\r\n              </div>\r\n              <div class=\"subTitulo\">Mensajero asignado:</div>\r\n              <div class=\"normal\">\r\n                <span *ngIf=\"itemLineaTiempo[1].mensajero != null\">{{itemLineaTiempo[1].mensajero}}</span>\r\n                <span *ngIf=\"itemLineaTiempo[1].mensajero == null\">Pendiente</span>\r\n              </div>\r\n              <div class=\"subTitulo\">Ruta:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo[1].rutaMensajeria}}·{{itemLineaTiempo[1].zonaMensajeria}}</div>\r\n              <div class=\"subTitulo\">Documentos resultantes:</div>\r\n              <div class=\"normal\">\r\n                <span class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/AR/'+itemLineaTiempo[1].doscResult1+'.pdf')\">\r\n                  <span>{{itemLineaTiempo[1].doscResult1}}</span>\r\n                </span>\r\n                <span class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/RT/'+itemLineaTiempo[1].doscResult2+'.pdf')\">\r\n                  <span >{{itemLineaTiempo[1].doscResult2}}</span>\r\n                </span>\r\n              </div>\r\n              <div class=\"subTitulo\">¿Entrega y revisión?</div>\r\n              <div class=\"normal\">\r\n                <span *ngIf=\"itemLineaTiempo[1].entregaRevision\">SI</span>\r\n                <span *ngIf=\"!itemLineaTiempo[1].entregaRevision\">NO</span>\r\n              </div>\r\n              <div class=\"subTitulo\">Refacturación:</div>\r\n              <div class=\"normal\">\r\n                  {{itemLineaTiempo[1].refacturacion}}\r\n              </div>\r\n          </div>\r\n          <div style=\"border-bottom: 0px\">\r\n              <div class=\"titulo\">Cobro</div>\r\n              <div class=\"subTitulo\">Fecha cobro:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo[2].fechaCobro | dateFormatSlashHour}}</div>\r\n              <div class=\"subTitulo\">Monto cobrado:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo[2].monto | acFormatMoney}} {{itemLineaTiempo[2].moneda}}</div>\r\n              <div class=\"subTitulo\">Comprobante pago:</div>\r\n              <div class=\"normalVerde\">\r\n                <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemLineaTiempo[2].doscResult1+'.pdf')\">\r\n                  {{itemLineaTiempo[2].doscResult1}}\r\n                </span>\r\n              </div>\r\n              <div class=\"subTitulo\">Complemento de pago:</div>\r\n              <div class=\"normal\">\r\n                <span>\r\n                  <span class=\"normalVerde\">\r\n                    <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/ComplementoPago/'+facturaDetalle.fpor+'/'+itemLineaTiempo[2].documento+'.pdf')\">PDF</span>\r\n                  </span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <span class=\"normalVerde\">\r\n                    <span><a href=\"http://201.161.12.60:51725/SAP/ComplementoPago/{{facturaDetalle.fpor}}/{{itemLineaTiempo[2].documento}}.xml\" download>XML</a></span>\r\n                  </span>\r\n                </span>\r\n              </div>\r\n              <div class=\"subTitulo\">Moroso:</div>\r\n              <div class=\"normal\">\r\n                <span [style.color]=\"'#39B54A'\" *ngIf=\"!itemLineaTiempo[2].moroso\">NO</span>\r\n                <span [style.color]=\"'#C1272D'\" *ngIf=\"itemLineaTiempo[2].moroso\">SI</span>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- PREPAGO 100% -->\r\n        <!-- Facturación por Adelantado -->\r\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Facturación por Adelantado' && itemLineaTiempo != undefined\">\r\n            <div>\r\n                <div class=\"titulo\">Generales</div>\r\n                <div class=\"subTitulo\">Fecha tramitación PSC:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.fechaTramitacion | dateFormatSlashHour}}</div>\r\n                <div class=\"subTitulo\">Fecha facturación por adelantado:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.fechaFacturacion | dateFormatSlashHour}}</div>\r\n                <div class=\"subTitulo\">Pedido:</div>\r\n                <div class=\"normalVerde\">\r\n                    <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+itemLineaTiempo.documento+'.pdf')\">{{itemLineaTiempo.pedido}}</span>\r\n                  </div>\r\n                <div class=\"subTitulo\">Factura:</div>\r\n                <div class=\"normalVerde\">\r\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\">{{itemLineaTiempo.factura}}</span>\r\n                </div>\r\n                <div class=\"subTitulo\">Archivo XML:</div>\r\n                <div class=\"normalVerde\">\r\n                    <span><a href=\"http://201.161.12.60:51725/SAP/Facturas/{{facturaDetalle.fpor}}/{{facturaDetalle.factura}}.xml\" download>{{itemLineaTiempo.factura}}.xml</a></span>\r\n                </div>\r\n                <div class=\"subTitulo\">Facturó:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\r\n                <div class=\"subTitulo\">Tipo de cambio:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.tcambio | acFormatMoney}}</div>\r\n                <div class=\"subTitulo\">Tipo:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.tipo}}</div>\r\n                <div class=\"subTitulo\">Medio:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.medio}}</div>\r\n            </div>\r\n          </div>\r\n\r\n        <!-- Monitoreo cobro SC -->\r\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Monitoreo de Cobro SC' && itemLineaTiempo != undefined\">\r\n          <div>\r\n            <div class=\"titulo\">Generales</div>\r\n            <div class=\"subTitulo\">Fecha tramitación PSC:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.fechaTramitacion | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Fecha asociación de pago:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.fechaAsosiacion | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Fecha validación de cobro:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.fechaCobro | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Factura:</div>\r\n            <div class=\"normalVerde\">\r\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\">{{itemLineaTiempo.factura}}</span>\r\n            </div>\r\n            <div *ngIf=\"itemLineaTiempo.clave != null\" class=\"subTitulo\">Proforma:</div>\r\n            <div *ngIf=\"itemLineaTiempo.clave != null\" class=\"normalVerde\">\r\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Proforma/'+facturaDetalle.fpor+'/'+itemLineaTiempo.clave+'.pdf')\">{{itemLineaTiempo.clave}}</span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"titulo\">Asociación de pago</div>\r\n            <div class=\"subTitulo\">Monto:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo.total > 0\">{{itemLineaTiempo.total | acFormatMoney}} {{itemLineaTiempo.moneda}}</span>\r\n              <span *ngIf=\"itemLineaTiempo.total == 0\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Medio de pago:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo.medioPago != null\">{{itemLineaTiempo.medioPago}}</span>\r\n              <span *ngIf=\"itemLineaTiempo.medioPago == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">FEP:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.fep | dateFormatSlash}}</div>\r\n            <div class=\"subTitulo\">Comentarios para la validación:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo.comentarios != null\">{{itemLineaTiempo.comentarios}}</span>\r\n              <span *ngIf=\"itemLineaTiempo.comentarios == null\">Pendiente</span>\r\n            </div>\r\n          </div>\r\n          <div style=\"border-bottom:0px;\">\r\n            <div class=\"titulo\">Validación de cobro SC</div>\r\n            <div class=\"subTitulo\">Monto cobrado:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo.importe > 0\">{{itemLineaTiempo.importe | acFormatMoney}} {{itemLineaTiempo.monedaPago}}</span>\r\n              <span *ngIf=\"itemLineaTiempo.importe == 0\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Tipo de cambio:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo.tcambio > 0\">{{itemLineaTiempo.tcambio}}</span>\r\n              <span *ngIf=\"itemLineaTiempo.tcambio == 0\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Fecha de pago:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.fechaPago | dateFormatSlash}}</div>\r\n            <div class=\"subTitulo\">Documento que ampara:</div>\r\n            <div class=\"normalVerde\">\r\n              <span *ngIf=\"itemLineaTiempo.fechaCobro != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemLineaTiempo.documento+'.pdf')\">Ver</span>\r\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo.fechaCobro == null\">Pendiente</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Factura' && itemLineaTiempo != undefined\">\r\n          <div>\r\n            <div class=\"titulo\">Generales</div>\r\n            <div class=\"subTitulo\">Fecha facturación:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.fechaFacturacion | dateFormatSlash}}</div>\r\n            <div class=\"subTitulo\">Factura:</div>\r\n            <div class=\"normalVerde\">\r\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\">{{itemLineaTiempo.factura}}</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Archivo XML:</div>\r\n            <div class=\"normalVerde\">\r\n              <span><a href=\"http://201.161.12.60:51725/SAP/Facturas/{{facturaDetalle.fpor}}/{{itemLineaTiempo.factura}}.xml\" download>{{itemLineaTiempo.factura}}.xml</a></span>\r\n            </div>\r\n            <div class=\"subTitulo\">Facturó:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\r\n            <div class=\"subTitulo\">Tipo de cambio:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.tcambio | acFormatMoney}}</div>\r\n            <div class=\"subTitulo\">Tipo:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.tipo}}</div>\r\n            <div class=\"subTitulo\">Medio:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.medio}}</div>\r\n          </div>\r\n          <div>\r\n            <div class=\"titulo\">Envío de factura</div>\r\n            <div class=\"subTitulo\">Fecha envío:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.fechaEnvio | dateFormatSlashHour}}</div>\r\n            <div class=\"subTitulo\">Contacto:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.contacto}}</div>\r\n            <div class=\"subTitulo\">Fecha envío ProquifaNet:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo.fechaProquifa != null\">{{itemLineaTiempo.fechaProquifa | dateFormatSlash}}</span>\r\n              <span *ngIf=\"itemLineaTiempo.fechaProquifa == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Cuerpo del correo:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.comentarios}}</div>\r\n          </div>\r\n          <div style=\"border-bottom:0px;\">\r\n            <div class=\"titulo\">Validación de cobro SC</div>\r\n            <div class=\"subTitulo\">Monto cobrado:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.importe | acFormatMoney}} {{itemLineaTiempo.monedaPago}}</div>\r\n            <div class=\"subTitulo\">Tipo de cambio:</div>\r\n            <div class=\"normal\">{{itemLineaTiempo.tcambio}}</div>\r\n            <div class=\"subTitulo\">Fecha de pago:</div>\r\n            <div class=\"normal\">\r\n              <span *ngIf=\"itemLineaTiempo.fechaPago != null\">{{itemLineaTiempo.fechaPago | dateFormatSlash}}</span>\r\n              <span *ngIf=\"itemLineaTiempo.fechaPago == null\">Pendiente</span>\r\n            </div>\r\n            <div class=\"subTitulo\">Documento que ampara:</div>\r\n            <div class=\"normalVerde\">\r\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemLineaTiempo.documento+'.pdf')\">Ver</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/gestion/consultas/facturacion/facturacion.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(0,137,149,.02)}:host>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:#008895;height:41px;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;padding:0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(1)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;cursor:pointer}:host>div:nth-of-type(1)>div:nth-of-type(2){margin-left:20px}:host>div:nth-of-type(1)>div:nth-of-type(3){margin-left:20px}:host>div:nth-of-type(1)>div:nth-of-type(4){margin-left:20px}:host>div:nth-of-type(1)>.regresar{cursor:pointer;font-weight:200}:host>.consultaResultados{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:calc(100vh - 170px);width:100%}:host>.consultaResultados>.panelNormal{background:#fff;height:99%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll}:host>.consultaResultados>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>.consultaResultados>.panelOcultar .filtros{display:none}:host>.consultaResultados>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}:host>.consultaResultados .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>.consultaResultados .filtroHeader>.abrir{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;min-height:22px}:host>.consultaResultados .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.consultaResultados .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>.consultaResultados .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242}:host>.consultaResultados .filtros>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:50px;border-bottom:1px solid #eceef0;padding-top:15px;padding-bottom:20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>.consultaResultados .filtros>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;border-bottom:1px solid #eceef0;color:#fff;font-size:14px}:host>.consultaResultados .filtros>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:140px;height:25px;margin-right:1px}:host>.consultaResultados .filtros>.divAvanzada{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:15px;padding-bottom:50px}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:130px;font-size:16px;color:#424242}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(1)>div>div{margin-top:6px}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(2){border-bottom:1px solid #424242;padding-bottom:18px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px}:host>.consultaResultados .filtros>.divAvanzada>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;margin-bottom:50px;background:#424242;width:100%;height:35px;cursor:pointer}:host>.consultaResultados .filtros>.divRapida>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:53px;padding-top:10px;border-bottom:1px solid #eceef0}:host>.consultaResultados .filtros>.divRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding-bottom:18px;border-bottom:1px solid #424242}:host>.consultaResultados .filtros>.divRapida>div:nth-of-type(2)>input{height:25px;border:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:5px}:host>.consultaResultados .filtros>.divRapida>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>.consultaResultados>div:nth-of-type(2){height:100%;width:100%;background:rgba(0,137,149,.02)}:host>.consultaResultados>.resultados{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:1s ease-in-out;transition:1s ease-in-out}:host>.consultaResultados>.resultados>div:nth-of-type(1){border-bottom:3px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>.consultaResultados>.resultados>div:nth-of-type(1)>div:nth-of-type(1){font-size:22px}:host>.consultaResultados>.resultados>div:nth-of-type(1)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.consultaResultados>.resultados>div:nth-of-type(1)>div:nth-of-type(2)>img{cursor:pointer;height:30px;width:30px}:host>.consultaResultados>.resultados>.sistema{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host>.consultaResultados>.resultados>.sistema>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1840px;min-height:57px}:host>.consultaResultados>.resultados>.sistema>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.consultaResultados>.resultados>.sistema>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1840px}:host>.consultaResultados>.resultados>.sistema>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host>.consultaResultados>.resultados>.sistema>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host>.consultaResultados>.resultados>.fueraSistema{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host>.consultaResultados>.resultados>.fueraSistema>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1430px;min-height:57px}:host>.consultaResultados>.resultados>.fueraSistema>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.consultaResultados>.resultados>.fueraSistema>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1430px}:host>.consultaResultados>.resultados>.fueraSistema>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host>.consultaResultados>.resultados>.fueraSistema>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host>.consultaResultados>.resultados>.fueraSistemaRapida{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host>.consultaResultados>.resultados>.fueraSistemaRapida>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1590px;min-height:57px}:host>.consultaResultados>.resultados>.fueraSistemaRapida>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.consultaResultados>.resultados>.fueraSistemaRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1590px}:host>.consultaResultados>.resultados>.fueraSistemaRapida>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host>.consultaResultados>.resultados>.fueraSistemaRapida>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host>.consultaResultados>.resultados>.total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;min-height:30px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}:host>.consultaDetalles{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:calc(100vh - 170px);width:100%}:host>.consultaDetalles>.panelNormal{background:#fff;height:99%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll}:host>.consultaDetalles>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>.consultaDetalles>.panelOcultar .filtros{display:none}:host>.consultaDetalles>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}:host>.consultaDetalles .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>.consultaDetalles .filtroHeader>.abrir{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;min-height:22px}:host>.consultaDetalles .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.consultaDetalles .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>.consultaDetalles .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242;border-bottom:1px solid #424242;padding-bottom:25px}:host>.consultaDetalles .filtros>.detalleCliente{font-size:16px;color:#424242;font-weight:bold;margin-top:15px}:host>.consultaDetalles .filtros>.detalleTitulo{font-size:16px;color:#424242;font-weight:400;margin-top:20px}:host>.consultaDetalles .filtros>.detalleTexto{font-size:16px;color:#424242;font-weight:200}:host>.consultaDetalles .filtros>.detalleTextoVerde{font-size:16px;color:#008895 !important;font-weight:300;cursor:pointer}:host>.consultaDetalles .filtros>.detalleTextoVerde:hover{text-decoration:underline}:host>.consultaDetalles>.contenidoFactura{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:calc(100vh - 171px);width:100%;overflow:scroll}:host>.consultaDetalles>.contenidoFactura>.detalleFactura{min-width:592px;padding:15px 20px}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(1){font-size:22px;font-weight:bold}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2){margin-top:20px;border-top:1px solid #424242;border-bottom:1px solid #979797}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #fff}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(1){min-width:8px;background:transparent}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:5px 10px;width:100%;cursor:pointer}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:5px 0px}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2){-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div:hover{background-color:#fff}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActual{background-color:#fff;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActual>div:nth-of-type(1){min-width:8px;background:#008895}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActive{background-color:#fff}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;margin-top:15px;font-size:14px;color:#424242;font-weight:300}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo{min-width:592px;background:#fff;padding:15px 20px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(1){font-size:22px;font-weight:bold;color:#008895}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2){margin-top:20px;overflow:scroll;max-height:calc(100vh - 248px);border-top:1px solid #424242;border-bottom:1px solid #979797}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(1){min-width:8px;background:transparent}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 10px;width:100%}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1){font-size:18px;font-weight:bold;color:#424242;margin-bottom:15px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2){font-size:16px;color:#008895;margin-bottom:2px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3){font-size:16px;color:#f3b23f;margin-bottom:2px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4){font-size:16px;color:#571c7b;margin-bottom:2px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5){font-size:16px;color:#981e30;margin-bottom:2px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div:hover{background-color:rgba(0,137,149,.05)}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>.divActive{background-color:rgba(0,137,149,.05)}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>.divActive>div:nth-of-type(1){min-width:8px;background:#008895}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo{min-width:592px;padding-top:15px}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(1){font-size:22px;font-weight:bold;padding:0px 20px}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2){border-top:1px solid #424242;margin:20px 20px;overflow:scroll;max-height:calc(100vh - 248px)}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div{border-bottom:1px solid #d8d8d8}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .titulo{font-size:18px;color:#008895;margin-top:20px;margin-bottom:10px}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .subTitulo{font-size:16px;font-weight:400;color:#424242;margin-bottom:3px}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normal{font-size:16px;font-weight:200;color:#424242;margin-bottom:25px;cursor:default !important}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde{font-size:16px;font-weight:200;margin-bottom:25px;color:#008895}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde>span{cursor:pointer}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde:hover>span{text-decoration:underline}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde:hover>.normal{text-decoration:none}:host a{color:#008895;text-decoration:none}:host a:visited{color:#008895;text-decoration:none}:host a:hover{text-decoration:underline}@-webkit-keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@-webkit-keyframes mostar{from{width:50px}to{width:321px}}@keyframes mostar{from{width:50px}to{width:321px}}:host .detalle{cursor:pointer}"

/***/ }),

/***/ "./src/app/components/gestion/consultas/facturacion/facturacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gestion_consulta_facturacion_facturacion_service__ = __webpack_require__("./src/app/services/gestion/consulta/facturacion/facturacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_UtilFechas__ = __webpack_require__("./src/app/class/UtilFechas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_util_util_service__ = __webpack_require__("./src/app/services/util/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FacturacionComponent = /** @class */ (function () {
    function FacturacionComponent(router, _fb, _gestionService, _facturaService, coreComponent, utilService) {
        var _this = this;
        this.router = router;
        this._fb = _fb;
        this._gestionService = _gestionService;
        this._facturaService = _facturaService;
        this.coreComponent = coreComponent;
        this.utilService = utilService;
        this.GENERAL_RUTA = 'http://201.161.12.60:51725/SAP/';
        this.FACTURAS_RUTA = "Facturas/";
        this._utilFechas = new __WEBPACK_IMPORTED_MODULE_8__class_UtilFechas__["a" /* UtilFechas */]();
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.lstItems = ['De sistema', 'Fuera sistema'];
        this.lstRadiosRapida = ['Factura', 'Pedido', 'UUID'];
        this.avanzada = true;
        this.detalle = false;
        this.sistema = true;
        this.fueraSistema = false;
        this.filtroConsultaRapida = "Factura";
        this.Clear = true;
        this.totalDetalle = 0;
        //isThereData indica se inicia en false para mostrar el loader
        this.isThereData = false;
        this.lstFacturas = [];
        this.defaultSelected = { nombre: '--TODOS--' };
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.dropCobrador = [{ nombre: '--TODOS--', key: 0 }];
        this.lstFacturasDetalle = [];
        this.lstFacturasDetalleActive = [];
        this.lstLineaTiempo = [];
        this.lstLineaTiempoActive = [];
        this.estadoItemLineaTiempo = "";
        this.itemLineaTiempo = undefined;
        //Esta funcion se llama una vez que se rrealzia un servicio
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cobrador", _this.dropCobrador, false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Facturó", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Proveedora', key: 1 },
                    { nombre: 'Proquifa', key: 2 },
                    { nombre: 'Pharma', key: 3 },
                    { nombre: 'Golocaer', key: 4 },
                    { nombre: 'Mungen', key: 5 },
                    { nombre: 'Ryndem', key: 6 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Condiciones de pago", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: '15 Dias', key: 1 },
                    { nombre: '21 Dias', key: 2 },
                    { nombre: '30 Dias', key: 3 },
                    { nombre: '45 Dias', key: 4 },
                    { nombre: '60 Dias', key: 5 },
                    { nombre: 'Anticipo 50%', key: 6 },
                    { nombre: 'Pago Contra Entrega', key: 7 },
                    { nombre: 'Prepago 100%', key: 8 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Tipo", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Por Adelantado', key: 1 },
                    { nombre: 'Normal', key: 2 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Cobrada', key: 1 },
                    { nombre: 'Cancelada', key: 2 },
                    { nombre: 'Por Cobrar', key: 3 },
                    { nombre: 'Por Cancelar', key: 4 },
                    { nombre: 'A Refacturación', key: 5 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Refacturado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Si', key: 1 },
                    { nombre: 'No', key: 2 }
                ], false),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
        this.Llenar2 = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cobrador", _this.dropCobrador, false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Facturó", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Proveedora', key: 1 },
                    { nombre: 'Proquifa', key: 2 },
                    { nombre: 'Pharma', key: 3 },
                    { nombre: 'Golocaer', key: 4 },
                    { nombre: 'Mungen', key: 5 },
                    { nombre: 'Ryndem', key: 6 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Cobrada', key: 1 },
                    { nombre: 'Cancelada', key: 2 },
                    { nombre: 'Por Cobrar', key: 3 },
                    { nombre: 'Por Cancelar', key: 4 },
                    { nombre: 'A Refacturación', key: 5 }
                ], false),
            ];
            _this.isThereData = true;
            _this.Clear = true;
        };
        this.IsDate = true;
        this.IsImage = true;
    }
    FacturacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.date = new Date();
        this.date2 = new Date();
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.cliente = "--TODOS--";
        parametros.estado = "--TODOS--";
        parametros.refacturada = "--TODOS--";
        parametros.facturo = "--TODOS--";
        parametros.tipo = "--TODOS--";
        parametros.medio = "--TODOS--";
        parametros.cPago = "--TODOS--";
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;
        this.consultaAvanzadaFacturacion(parametros);
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
    };
    FacturacionComponent.prototype.compressed_files = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        var fechaFactura = new Date();
        console.log(this.utilService);
        var nombreArchivo = 'Factura ' + (this.utilService.getTextMonth(fechaFactura.getMonth())) + '-' + fechaFactura.getDate() + ' ' + fechaFactura.getHours() + '_' + fechaFactura.getMinutes() + '_' + fechaFactura.getSeconds();
        parametros.archivos = [];
        parametros.nombres = [];
        parametros.archivosClientes = [];
        for (var _i = 0, _a = this.lstFacturas; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.uuid) {
                parametros.archivosClientes.push({
                    nombreCliente: data.fpor,
                    rutasArchivos: [
                        this.GENERAL_RUTA + '' + this.FACTURAS_RUTA + data.fpor + '/' + data.factura + '.pdf',
                        this.GENERAL_RUTA + '' + this.FACTURAS_RUTA + data.fpor + '/' + data.factura + '.xml'
                    ],
                    nombresArchivos: [
                        data.factura + ".pdf",
                        data.factura + ".xml"
                    ]
                });
            }
        }
        parametros.nombreArchivo = nombreArchivo;
        console.log(parametros);
        this._facturaService.generarZip(parametros).subscribe(function (data) {
            console.log(data);
            var blob = window.URL.createObjectURL(new Blob([data._body], { type: 'application/octet-stream' }));
            var element = document.createElement('a');
            element.setAttribute('href', blob);
            element.setAttribute('download', nombreArchivo + ".zip");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
            _this.coreComponent.closeModal(0);
            parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            parametros.nombreArchivo = nombreArchivo;
            _this._facturaService.eliminarZip(parametros).subscribe(function (data) {
                if (data.status_code === 200) {
                    console.log(data.message);
                }
            });
        }, function (error) {
            console.log("error");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.str2bytes = function (str) {
        var bytes = new Uint8Array(str.length);
        for (var i = 0; i < str.length; i++) {
            bytes[i] = str.charCodeAt(i);
        }
        return bytes;
    };
    FacturacionComponent.prototype.download = function () {
        if (this.sistema) {
            var lstFacturas2_1 = [];
            console.log(this.lstFacturas);
            this.lstFacturas.forEach(function (factura, index) {
                var facturaAux = {
                    '#': index + 1,
                    'Cliente': "\"" + factura.nombre_cliente + "\"",
                    'Razón Social': "\"" + factura.rsocial + "\"",
                    'RFC': factura.rfc,
                    'Factura': factura.factura,
                    'UUID': factura.uuid,
                    'Vendió': factura.fpor,
                    'Sub Total M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.importeMN) + "\"",
                    'IVA M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.totalivaMN) + "\"",
                    'Total M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.totalMN) + "\"",
                    'Sub Total USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.importe) + "\"",
                    'IVA USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.totaliva) + "\"",
                    'Total USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.total) + "\"",
                    'Moneda': factura.moneda,
                    'T.Cambio': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.pdolar) + "\"",
                    'C.Pago': factura.cpago,
                    'F. Facturación': new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(factura.fecha),
                    'Tipo': factura.tipo,
                    'Refacturada': factura.refacturada,
                    'Estado': factura.estado,
                    'Fecha Cancelación': new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(factura.fechaCancelacion) == "Pendiente" ? "NA" : new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(factura.fechaCancelacion),
                    'No. Cuenta': factura.cuentaBanco,
                };
                lstFacturas2_1.push(facturaAux);
            });
            var csvData = this.ConvertToCSV(lstFacturas2_1);
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'ConsultaFacturacion-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
            a.click();
        }
        else {
            var lstFacturas2_2 = [];
            console.log(this.lstFacturas);
            this.lstFacturas.forEach(function (factura, index) {
                var facturaAux = {
                    '#': index + 1,
                    'Folio': "\"" + factura.numeroFactura + "\"",
                    'UUID': "\"" + factura.uuid + "\"",
                    'RFC': factura.rfc_Cliente,
                    'Cliente': factura.nombre_Cliente,
                    'Vendió': factura.facturadoPor,
                    'Fecha': new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(factura.fecha),
                    'Sub Total M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.importe) + "\"",
                    'IVA M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.iva) + "\"",
                    'Total M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(((factura.importe + factura.iva))) + "\"",
                    'Sub Total USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.montoFacturaDLS) + "\"",
                    'IVA USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.ivaDLS) + "\"",
                    'Total USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform((factura.montoFacturaDLS + factura.ivaDLS)) + "\"",
                    'Moneda': factura.moneda,
                    'T.Cambio': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.tipoCambio) + "\"",
                    'Estado': factura.estado,
                    'No. Cuenta': factura.cuentaBanco,
                };
                lstFacturas2_2.push(facturaAux);
            });
            var csvData = this.ConvertToCSV(lstFacturas2_2);
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'ConsultaFacturacion-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
            a.click();
        }
    };
    //Función para convertir JSON en formato CSV
    FacturacionComponent.prototype.ConvertToCSV = function (objArray) {
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
    FacturacionComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    FacturacionComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    FacturacionComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    FacturacionComponent.prototype.radioSistema = function ($event) {
        if ($event == 0 && !this.sistema) {
            this.sistema = true;
            this.IsDate = false;
            this.IsDate = true;
            this.Llenar();
            this.lstRadiosRapida = ['Factura', 'Pedido', 'UUID'];
            this.fueraSistema = false;
            if (this.avanzada) {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.cliente = "--TODOS--";
                parametros.estado = "--TODOS--";
                parametros.refacturada = "--TODOS--";
                parametros.facturo = "--TODOS--";
                parametros.tipo = "--TODOS--";
                parametros.medio = "--TODOS--";
                parametros.cPago = "--TODOS--";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                this.consultaAvanzadaFacturacion(parametros);
            }
            else {
                this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                    filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
                });
            }
        }
        else if ($event == 1 && this.sistema) {
            this.sistema = false;
            this.IsDate = false;
            this.IsDate = true;
            this.Llenar2();
            this.lstRadiosRapida = ['Factura', 'UUID'];
            this.filtroConsultaRapida = "Factura";
            if (!this.sistema && !this.avanzada) {
                this.fueraSistema = true;
            }
            if (this.avanzada) {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.dentroSistema = false;
                parametros.idCliente = 0;
                parametros.factura = 0;
                parametros.uuid = "";
                parametros.fpor = "";
                parametros.estado = "";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                this.listarFacturasEmitidas(parametros);
            }
            else {
                this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                    filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
                });
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.dentroSistema = false;
                parametros.idCliente = 0;
                parametros.factura = 0;
                parametros.uuid = "";
                parametros.fpor = "";
                parametros.estado = "";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                this.listarFacturasEmitidas(parametros);
            }
        }
    };
    FacturacionComponent.prototype.radioRapida = function ($event) {
        if ($event == 0) {
            this.filtroConsultaRapida = "Factura";
        }
        else if ($event == 1 && this.sistema) {
            this.filtroConsultaRapida = "Pedido";
        }
        else if ($event == 1 && !this.sistema) {
            this.filtroConsultaRapida = "UUID";
        }
        else if ($event == 2) {
            this.filtroConsultaRapida = "UUID";
        }
    };
    FacturacionComponent.prototype.filtroAvanzada = function () {
        if (!this.avanzada) {
            this.avanzada = true;
            this.fueraSistema = false;
            this.filtroConsultaRapida = "Factura";
            this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
            });
            if (this.sistema) {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.cliente = "--TODOS--";
                parametros.estado = "--TODOS--";
                parametros.refacturada = "--TODOS--";
                parametros.facturo = "--TODOS--";
                parametros.tipo = "--TODOS--";
                parametros.medio = "--TODOS--";
                parametros.cPago = "--TODOS--";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                parametros.idUsuarioLogueado = 91;
                this.consultaAvanzadaFacturacion(parametros);
            }
            else {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.dentroSistema = false;
                parametros.idCliente = 0;
                parametros.factura = 0;
                parametros.uuid = "";
                parametros.fpor = "";
                parametros.estado = "";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                this.listarFacturasEmitidas(parametros);
            }
        }
    };
    FacturacionComponent.prototype.filtroRapida = function () {
        if (this.avanzada) {
            this.avanzada = false;
            if (!this.sistema) {
                this.fueraSistema = true;
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.dentroSistema = false;
                parametros.idCliente = 0;
                parametros.factura = 0;
                parametros.uuid = "";
                parametros.fpor = "";
                parametros.estado = "";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                this.listarFacturasEmitidas(parametros);
            }
            else {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.facturaS = (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "";
                parametros.cPedido = (this.filtroConsultaRapida == "Pedido") ? this.filtroForm.get('filtroDato').value : "";
                parametros.uuid = (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "";
                parametros.fpor = "";
                parametros.idUsuarioLogueado = 91;
                this.consultaRapidaFacturacion(parametros);
            }
        }
    };
    FacturacionComponent.prototype.filtroRapido = function () {
        console.log(this.filtroForm.get('filtroDato').value);
        if (this.sistema) {
            var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            parametros.facturaS = (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "";
            parametros.cPedido = (this.filtroConsultaRapida == "Pedido") ? this.filtroForm.get('filtroDato').value : "";
            parametros.uuid = (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "";
            parametros.fpor = "--TODOS--";
            parametros.idUsuarioLogueado = 91;
            this.consultaRapidaFacturacion(parametros);
        }
        else {
            var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            parametros.finicio = null;
            parametros.ffin = null;
            parametros.dentroSistema = false;
            parametros.idCliente = 0;
            parametros.factura = (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : 0;
            parametros.uuid = (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "";
            parametros.fpor = "";
            parametros.estado = "";
            parametros.idUsuarioLogueado = 91;
            parametros.cobrador = 0;
            this.listarFacturasEmitidas(parametros);
        }
    };
    FacturacionComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    FacturacionComponent.prototype.dropList = function (index, $event) {
    };
    FacturacionComponent.prototype.mostrarDatos = function ($event) {
        if (this.sistema) {
            var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            parametros.finicio = $event.Fechas.fechaInicial;
            parametros.ffin = $event.Fechas.fechaFinal;
            parametros.cliente = ($event.Datos[0].key != 0) ? $event.Datos[0].key : $event.Datos[0].nombre;
            parametros.cobrador = $event.Datos[1].key;
            parametros.facturo = $event.Datos[2].nombre;
            parametros.cPago = $event.Datos[3].nombre;
            parametros.tipo = $event.Datos[4].nombre;
            parametros.estado = $event.Datos[5].nombre;
            parametros.refacturada = $event.Datos[6].nombre;
            parametros.medio = "--TODOS--";
            parametros.idUsuarioLogueado = 91;
            this.consultaAvanzadaFacturacion(parametros);
        }
        else {
            var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            parametros.finicio = $event.Fechas.fechaInicial;
            parametros.ffin = $event.Fechas.fechaFinal;
            parametros.dentroSistema = false;
            parametros.idCliente = $event.Datos[0].key;
            parametros.factura = 0;
            parametros.uuid = "";
            parametros.fpor = $event.Datos[2].nombre != "--TODOS--" ? $event.Datos[2].nombre : "";
            parametros.estado = $event.Datos[3].nombre != "--TODOS--" ? $event.Datos[3].nombre : "";
            parametros.idUsuarioLogueado = 91;
            parametros.cobrador = $event.Datos[1].key;
            this.listarFacturasEmitidas(parametros);
        }
    };
    FacturacionComponent.prototype.consultaAvanzadaFacturacion = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._facturaService.consultaAvanzadaFacturacion(parametros).subscribe(function (data) {
            _this.lstFacturas = data.current;
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.consultaRapidaFacturacion = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._facturaService.consultaRapidaFacturacion(parametros).subscribe(function (data) {
            _this.lstFacturas = data.current;
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.listarFacturasEmitidas = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._facturaService.listarFacturasEmitidas(parametros).subscribe(function (data) {
            console.log(data.current);
            _this.lstFacturas = data.current;
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.regresarConsulta = function () {
        this.detalle = false;
    };
    FacturacionComponent.prototype.verDetalle = function (item) {
        console.log(item);
        this.facturaDetalle = item;
        this.detalle = true;
        var lstAux = [];
        lstAux.push(item);
        if (item.estado == "Cobrada") {
            if (item.cPago.indexOf("DIAS") < 0 || this._utilFechas.regresaDiferenciaEntreFechasEnDias(new Date(item.fechaPago + " 00:00:00"), new Date(item.fep + " 00:00:00")) >= 0) {
                lstAux[0]["moroso"] = "No";
            }
            else {
                lstAux[0]["moroso"] = "Si";
            }
        }
        if (item.cPago.indexOf("DIAS") < 0 && item.cPago.indexOf("ENTREGA") < 0) {
            console.log("obtenerLineaTiempoPrepago");
            this.obtenerLineaTiempoPrepago(item.factura, item.fpor);
        }
        else if (item.cPago.indexOf("DIAS") >= 0 || item.cPago.indexOf("ENTREGA") >= 0) {
            console.log("obtenerResumen");
            this.obtenerResumen(item.factura, item.fpor);
        }
        else {
            this.lstLineaTiempo = undefined;
            this.itemLineaTiempo = undefined;
            this.estadoItemLineaTiempo = "";
        }
        if (this.lstLineaTiempo != undefined) {
            this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("");
            this.lstLineaTiempoActive[0] = "divActive";
        }
        this.totalDetalle = 0;
        this.totalDetalle += item.importe;
        for (var _i = 0, _a = this.lstFacturas; _i < _a.length; _i++) {
            var factura = _a[_i];
            if (factura.factura != item.factura && factura.nombre_cliente == item.nombre_cliente && factura.estado != "Cobrada") {
                lstAux.push(factura);
                this.totalDetalle += factura.importe;
            }
        }
        this.lstFacturasDetalle = [];
        this.lstFacturasDetalle = this.lstFacturasDetalle.concat(lstAux);
        this.lstFacturasDetalleActive = new Array(this.lstFacturasDetalle.length).fill("");
        this.lstFacturasDetalleActive[0] = "divActual";
        console.log(this.lstFacturasDetalle);
    };
    FacturacionComponent.prototype.resumenFactura = function (i) {
        this.lstFacturasDetalleActive = new Array(this.lstFacturasDetalle.length).fill("");
        this.lstFacturasDetalleActive[i] = "divActive";
        if (this.lstFacturasDetalle[i].cPago.indexOf("DIAS") < 0 && this.lstFacturasDetalle[i].cPago.indexOf("ENTREGA") < 0) {
            this.obtenerLineaTiempoPrepago(this.lstFacturasDetalle[i].factura, this.lstFacturasDetalle[i].fpor);
        }
        else if (this.lstFacturasDetalle[i].cPago.indexOf("DIAS") >= 0 || this.lstFacturasDetalle[i].cPago.indexOf("ENTREGA") >= 0) {
            this.obtenerResumen(this.lstFacturasDetalle[i].factura, this.lstFacturasDetalle[i].fpor);
        }
    };
    FacturacionComponent.prototype.obtenerResumen = function (facturaS, fpor) {
        var _this = this;
        this.facturaS = facturaS;
        this.fpor = fpor;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.coreComponent.openModal(0);
        this._facturaService.obtenerResumen(parametros).subscribe(function (data) {
            _this.lstLineaTiempo = [];
            if (data.current != undefined && data.current.length > 0) {
                _this.lstLineaTiempo = data.current;
                console.log(_this.lstLineaTiempo);
                var _temp = [];
                var _facc = [];
                for (var i = 0; i < data.current.length; i++) {
                    if (data.current[i].etapa == 'FACTURACION' || data.current[i].etapa == 'ENTREGA' ||
                        data.current[i].etapa == 'REVISION' || data.current[i].etapa == 'COBRO' ||
                        data.current[i].etapa == 'FACTURA REMISION' || data.current[i].etapa == 'REFACTURACION' ||
                        data.current[i].etapa == 'CANCELACION' || data.current[i].etapa == 'FACTURA') {
                        _temp.push(data.current[i]);
                    }
                }
                _facc = _temp;
                var _arrTemp = [];
                var currenItem = void 0;
                for (var j = 0; j < _facc.length; j++) {
                    currenItem = _facc[j];
                    if (currenItem.etapa == 'COBRO' && currenItem.etapaPadre == '1') {
                        _arrTemp.push(currenItem);
                    }
                    else if (currenItem.etapa == 'ENTREGA') {
                        if (currenItem.fechaFin == null) {
                            if (currenItem.conforme == "NO DISPONIBLE")
                                currenItem.conforme = "Pendiente";
                        }
                        else {
                            if (currenItem.conforme == "NO DISPONIBLE")
                                currenItem.conforme = "ND";
                        }
                    }
                }
                for (var k = 0; k < _facc.length; k++) {
                    if (_facc[k].etapaPadre != '1') {
                        _arrTemp.push(_facc[k]);
                    }
                }
                if (_arrTemp.length > 0)
                    _arrTemp[_arrTemp.length - 1].finLista = true;
                _this.lstLineaTiempo = _arrTemp;
                console.log("obtenerResumen");
                console.log(_this.lstLineaTiempo);
                _this.lstLineaTiempoActive = new Array(_this.lstLineaTiempo.length).fill("");
                _this.lstLineaTiempoActive[0] = "divActive";
                _this.estadoItemLineaTiempo = _this.lstLineaTiempo[0].etapa;
                _this.itemLineaTiempo = _this.lstLineaTiempo[0];
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerLineaTiempoPrepago = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.facturaS = facturaS;
        this.fpor = fpor;
        this.coreComponent.openModal(0);
        this._facturaService.obtenerLineaTiempoPrepago(parametros).subscribe(function (data) {
            console.log(data.current);
            _this.lstLineaTiempo = data.current;
            _this.lstLineaTiempoActive = new Array(_this.lstLineaTiempo.length).fill("");
            _this.lstLineaTiempoActive[0] = "divActive";
            console.log("obtenerLineaTiempoPrepago");
            if (_this.lstLineaTiempo[0].etapa == "Facturación por Adelantado") {
                _this.obtenerResumenFacturacionXAdelantado(parametros.facturaS, parametros.fpor);
            }
            else {
                _this.obtenerResumenMonitoreoCobro(parametros.facturaS, parametros.fpor);
            }
            _this.estadoItemLineaTiempo = _this.lstLineaTiempo[0].etapa;
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenMonitoreoCobro = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.itemLineaTiempo = undefined;
        this.coreComponent.openModal(0);
        this._facturaService.obtenerResumenMonitoreoCobro(parametros).subscribe(function (data) {
            console.log(data.current);
            _this.itemLineaTiempo = data.current[0];
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenFacturaPrepago = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.itemLineaTiempo = undefined;
        this.coreComponent.openModal(0);
        this._facturaService.obtenerResumenFacturaPrepago(parametros).subscribe(function (data) {
            console.log(data.current);
            _this.itemLineaTiempo = data.current[0];
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenEntrega = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.itemLineaTiempo = undefined;
        this.estadoItemLineaTiempo = "ENTREGA";
        this.coreComponent.openModal(0);
        this._facturaService.obtenerResumenEntrega(parametros).subscribe(function (data) {
            _this.itemLineaTiempo = new Array(undefined, undefined, undefined, undefined, undefined);
            for (var i = 0; i < data.current.length; i++) {
                var currentItem = data.current[i];
                if (currentItem.etapa == 'TRAMITAR RUTA') {
                    _this.itemLineaTiempo[0] = currentItem;
                }
                else if (currentItem.etapa == 'SURTIR RUTA') {
                    _this.itemLineaTiempo[1] = currentItem;
                    if (_this.itemLineaTiempo[1].fechaFin != null) {
                        _this.itemLineaTiempo[1].referencia = _this.itemLineaTiempo[1].referencia.split(",");
                    }
                }
                else if (currentItem.etapa == 'ASIGNAR MENSAJERO') {
                    _this.itemLineaTiempo[2] = currentItem;
                }
                else if (currentItem.etapa == 'EJECUTAR RUTA') {
                    _this.itemLineaTiempo[3] = currentItem;
                }
                else if (currentItem.etapa == 'CERRAR RUTA') {
                    _this.itemLineaTiempo[4] = currentItem;
                }
            }
            console.log(_this.itemLineaTiempo);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenRevision = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.coreComponent.openModal(0);
        this.itemLineaTiempo = undefined;
        this._facturaService.obtenerResumenRevision(parametros).subscribe(function (data) {
            _this.itemLineaTiempo = data.current;
            _this.coreComponent.closeModal(0);
            console.log(_this.itemLineaTiempo);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenCobro = function (facturaS, fpor, sc) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        parametros.sc = sc;
        this.coreComponent.openModal(0);
        this.itemLineaTiempo = undefined;
        this._facturaService.obtenerResumenCobro(parametros).subscribe(function (data) {
            _this.itemLineaTiempo = data.current;
            _this.coreComponent.closeModal(0);
            console.log(_this.itemLineaTiempo);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenFactura = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.coreComponent.openModal(0);
        this.itemLineaTiempo = undefined;
        this._facturaService.obtenerResumenFactura(parametros).subscribe(function (data) {
            _this.itemLineaTiempo = data.current;
            _this.coreComponent.closeModal(0);
            console.log(_this.itemLineaTiempo);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenFacturacionXAdelantado = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.coreComponent.openModal(0);
        this.itemLineaTiempo = undefined;
        this._facturaService.obtenerResumenFacturacionXAdelantado(parametros).subscribe(function (data) {
            _this.itemLineaTiempo = data.current[0];
            _this.coreComponent.closeModal(0);
            console.log(_this.itemLineaTiempo);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.lineaTiempo = function (i) {
        this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("");
        this.lstLineaTiempoActive[i] = "divActive";
        this.estadoItemLineaTiempo = this.lstLineaTiempo[i].etapa;
        this.lineaIiempoSelect = this.lstLineaTiempo[i];
        //this.itemLineaTiempo = this.lstLineaTiempo[i];
        this.itemLineaTiempo = undefined;
        switch (this.estadoItemLineaTiempo) {
            case "Monitoreo de Cobro SC":
                console.log("Credito Monitoreo Cobro SC");
                this.obtenerResumenMonitoreoCobro(this.facturaS, this.fpor);
                break;
            case "Factura":
                console.log("Credito Factura Prepago");
                this.obtenerResumenFacturaPrepago(this.facturaS, this.fpor);
                break;
            case "FACTURACION":
                console.log("Facturacion");
                this.itemLineaTiempo = this.lstLineaTiempo[0];
                break;
            case "ENTREGA":
                console.log("Credito Entrega");
                this.obtenerResumenEntrega(this.facturaS, this.fpor);
                break;
            case "REVISION":
                console.log("Credito Revision");
                this.obtenerResumenRevision(this.facturaS, this.fpor);
                break;
            case "COBRO":
                console.log("Credito Cobro");
                this.obtenerResumenCobro(this.facturaS, this.fpor, 0);
                break;
            case "FACTURA":
                console.log("Credito Factura");
                this.obtenerResumenFactura(this.facturaS, this.fpor);
                break;
            case "Facturación por Adelantado":
                console.log("Facturación por Adelantado");
                this.obtenerResumenFacturacionXAdelantado(this.facturaS, this.fpor);
                break;
        }
    };
    FacturacionComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    FacturacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-facturacion',
            template: __webpack_require__("./src/app/components/gestion/consultas/facturacion/facturacion.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/facturacion/facturacion.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_gestion_gestion_service__["a" /* GestionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_gestion_consulta_facturacion_facturacion_service__["a" /* FacturacionService */], __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_10__services_util_util_service__["a" /* UtilService */]])
    ], FacturacionComponent);
    return FacturacionComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/facturacion/facturacion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturacionModule", function() { return FacturacionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facturacion_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/facturacion/facturacion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__facturacion_component__ = __webpack_require__("./src/app/components/gestion/consultas/facturacion/facturacion.component.ts");
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












var FacturacionModule = /** @class */ (function () {
    function FacturacionModule() {
    }
    FacturacionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__facturacion_routing_module__["a" /* FacturacionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__facturacion_component__["a" /* FacturacionComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__facturacion_component__["a" /* FacturacionComponent */]
            ]
        })
    ], FacturacionModule);
    return FacturacionModule;
}());



/***/ })

});
//# sourceMappingURL=facturacion.module.chunk.js.map