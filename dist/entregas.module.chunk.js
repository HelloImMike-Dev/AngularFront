webpackJsonp(["entregas.module"],{

/***/ "./src/app/components/gestion/consultas/entregas/entregas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntregasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entregas_component__ = __webpack_require__("./src/app/components/gestion/consultas/entregas/entregas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntregasRoutingModule = /** @class */ (function () {
    function EntregasRoutingModule() {
    }
    EntregasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__entregas_component__["a" /* EntregasComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], EntregasRoutingModule);
    return EntregasRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/entregas/entregas.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div (click)=\"backMenu()\">\r\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\r\n  </div>\r\n  |\r\n  <div *ngIf=\"!detalle\">CONSULTA DE ENTREGAS</div>\r\n  <div *ngIf=\"detalle\" (click)=\"regresarConsulta()\" class=\"regresar\">CONSULTA DE ENTREGAS</div>\r\n  <div *ngIf=\"detalle\">|</div>\r\n  <div *ngIf=\"detalle\">DETALLES</div>\r\n</div>\r\n<div *ngIf=\"!detalle\" class=\"consultaResultados\">\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"filtros\">\r\n      <div>\r\n\r\n      </div>\r\n      <div>\r\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\r\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\r\n      </div>\r\n\r\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\r\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\r\n              Y la propiedad IsLoader como verdadera\r\n            -->\r\n\r\n        <div *ngIf=\"isThereData;else loader\">\r\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\r\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" [istextbox]=\"istextbox\" style=\"width: 100%\"></gestion-filter>\r\n\r\n        </div>\r\n\r\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\r\n              una propiedad\r\n              IsLoader como Falsa-->\r\n        <ng-template #loader>\r\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\r\n        </ng-template>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\r\n        <div>\r\n          <pq-radio-button [widthTotal]=\"'125px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\"\r\n            (emitItem)=\"radioRapida($event)\" [width]=\"'15px'\"></pq-radio-button>\r\n        </div>\r\n        <div [formGroup]=\"filtroForm\">\r\n          <span>{{filtroConsultaRapida}}</span>\r\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\r\n        </div>\r\n        <div (click)=\"filtroRapido()\">\r\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"resultados\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\r\n    <div>\r\n      <div>\r\n        RESULTADOS\r\n      </div>\r\n      <div>\r\n      <img [style.margin-right]=\"'15px'\" height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/cobros/graficaminigris.svg\"\r\n        alt=\"\" (click)=\"showGraphic()\">\r\n      <img height=\"20px\" width=\"20px\" src=\"assets/Images/exportar.svg\" alt=\"\" (click)=\"download()\">\r\n      </div>\r\n    </div>\r\n    <div class=\"fechafactura\">\r\n      <div>\r\n        <div [style.min-width]=\"'50px'\">#</div>\r\n        <div [style.min-width]=\"'110px'\">Fecha</div>\r\n        <div [style.min-width]=\"'160px'\">Cliente</div>\r\n        <div [style.min-width]=\"'80px'\">Ruta</div>\r\n        <div [style.min-width]=\"'80px'\">Zona</div>\r\n        <div [style.min-width]=\"'80px'\">Factura</div>\r\n        <div [style.min-width]=\"'110px'\">Pedido</div>\r\n        <div [style.min-width]=\"'110px'\">Mensajero</div>\r\n        <div [style.min-width]=\"'100px'\">FER</div>\r\n        <div [style.min-width]=\"'100px'\">FR</div>\r\n        <div [style.min-width]=\"'110px'\">Estado</div>\r\n        <div [style.min-width]=\"'110px'\">Conforme</div>\r\n        <div [style.min-width]=\"'30px'\"></div>\r\n      </div>\r\n      <div>\r\n      <div *ngFor=\"let item of lstEntregas; let i = index\">\r\n        <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\r\n        <div [style.min-width]=\"'110px'\">{{item.rutaRelacionada.fecha | dateFormatSlash}}</div>\r\n        <div [style.min-width]=\"'160px'\" style=\"line-height: 1.2\">{{item.nombre_Cliente}}</div>\r\n        <div [style.min-width]=\"'80px'\">{{item.rutaRelacionada.rutaMensajeria}}</div>\r\n        <div [style.min-width]=\"'80px'\">{{item.rutaRelacionada.zonaMensajeria}}</div>\r\n        <div [style.min-width]=\"'80px'\">{{item.numeroFactura}}</div>\r\n        <div [style.min-width]=\"'110px'\">{{item.cpedido}}</div>\r\n        <div [style.min-width]=\"'110px'\">{{item.rutaRelacionada.responsable}}</div>\r\n        <div [style.min-width]=\"'100px'\">{{item.rutaRelacionada.fer | dateFormatSlash}}</div>\r\n        <div [style.min-width]=\"'100px'\">{{item.rutaRelacionada.fr | dateFormatSlash}}</div>\r\n        <div [style.min-width]=\"'110px'\">{{item.rutaRelacionada.estadoRuta}}</div>\r\n        <div [style.min-width]=\"'110px'\">{{item.rutaRelacionada.conforme}}</div>\r\n        <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\r\n          <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"total\" *ngIf=\"lstEntregas!= null\">\r\n      <p>Total:\r\n        <span>{{lstEntregas.length}}</span>\r\n         <span>Entrega<span *ngIf=\"lstEntregas.length != 1\">s</span>\r\n          </span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Sección Detalles-->\r\n\r\n\r\n<div *ngIf=\"detalle\" class=\"consultaDetalles\">\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"filtros\">\r\n      <div class=\"detalleCliente\"></div>\r\n      <div class=\"\"></div>\r\n      <div class=\"detalleTitulo\">Nivel de ingresos:</div>\r\n      <div class=\"detalleTexto\">{{entregaDetalle.nivelIngresocliente}}</div>\r\n      <div class=\"detalleTitulo\">Factura:</div>\r\n      <div class=\"detalleTexto\">{{entregaDetalle.numeroFactura}}</div>\r\n      <div class=\"detalleTitulo\">Vendió:</div>\r\n      <div class=\"detalleTexto\">{{entregaDetalle.facturadoPor}}</div>\r\n      <div class=\"detalleTitulo\">P. Interno:</div>\r\n      <div class=\"detalleTextoVerde\">\r\n          <span class=\"link\" style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+entregaDetalle.cpedido+'.pdf')\">   {{entregaDetalle.cpedido}}</span>\r\n      </div>\r\n      <div class=\"detalleTitulo\">Ruta:</div>\r\n      <div class=\"detalleTexto\">{{entregaDetalle.rutaRelacionada.rutaMensajeria}}</div>\r\n      <div class=\"detalleTitulo\">Zona:</div>\r\n      <div class=\"detalleTexto\">{{entregaDetalle.rutaRelacionada.zonaMensajeria}}</div>\r\n      <div class=\"detalleTitulo\">Monto Pedido:</div>\r\n      <div class=\"detalleTexto\">$ {{entregaDetalle.montoTotalPedido}} {{entregaDetalle.moneda}}</div>\r\n      <div class=\"detalleTitulo\">Total de Piezas:</div>\r\n      <div class=\"detalleTexto\">{{entregaDetalle.numeroPiezasFactura}}</div>\r\n      \r\n    </div>\r\n  </div>\r\n  <div class=\"contenidoFactura\">\r\n    <div class=\"detalleFactura\">\r\n      <div>DETALLE DE ENTREGA</div>\r\n      <div>\r\n        <div [ngClass]=\"i==0?'divActual':lstEntregasDetalleActive[i]\" *ngFor=\"let item of lstEntregasDetalle; let i = index\" (click)=\"resumenEntrega(i)\">\r\n          <div class=\"dfSelect\"></div>\r\n          <div>\r\n            <div>\r\n              <div>\r\n                  \r\n                <div ># {{i+1}} · {{item.numeroPiezasFactura}}pzs · ${{item.importe}} USD</div>\r\n                <div [style.color]=\"'#008895'\">F-<span class=\"link\" style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+item.facturadoPor+'/'+item.numeroFactura+'.pdf')\">{{item.numeroFactura}}</span> · \r\n                  <span class=\"link\" style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+item.cpedido+'.pdf')\"> {{item.cpedido}}</span>\r\n               \r\n                </div>  \r\n                \r\n              </div>\r\n              <div>\r\n                <div>FER+: {{item.rutaRelacionada.fer | dateFormatSlash}} </div> \r\n                <div>FR: {{item.rutaRelacionada.fr | dateFormatSlash}} </div>\r\n                 \r\n              </div>\r\n            </div>\r\n            <div>\r\n              <div>{{item.rutaRelacionada.rutaMensajeria}}   {{item.rutaRelacionada.zonaMensajeria}}  </div>\r\n              <div>\r\n                \r\n                <span [style.color]=\"'#981E30'\" *ngIf=\"item.rutaRelacionada.estadoRuta!=null && item.rutaRelacionada.estadoRuta==='Cerrada'\">{{item.rutaRelacionada.estadoRuta}}</span>\r\n                <span [style.color]=\"'#008895'\" *ngIf=\"item.rutaRelacionada.estadoRuta!=null && item.rutaRelacionada.estadoRuta==='Abierta'\">{{item.rutaRelacionada.estadoRuta}}</span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <div> {{item.rutaRelacionada.responsable}}</div>\r\n              <div>\r\n                <span [style.color]=\"'#008895'\" *ngIf=\"item.rutaRelacionada.tiempoRealizacion!=null && item.rutaRelacionada.tiempoRealizacion!='FT'\">{{item.rutaRelacionada.tiempoRealizacion}}</span>\r\n                <span [style.color]=\"'#952936'\" *ngIf=\"item.rutaRelacionada.tiempoRealizacion!=null && item.rutaRelacionada.tiempoRealizacion==='FT'\">{{item.rutaRelacionada.tiempoRealizacion}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div> TOTAL: {{lstEntregasDetalle.length}} ENTREGA\r\n          <span *ngIf=\"\">S</span> ·  USD</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"lineaTiempo\">\r\n      <div>LÍNEA DE TIEMPO</div>\r\n      <div>\r\n        <div [ngClass]=\"lstLineaTiempoActive[i]\" *ngFor=\"let item of lstLineaTiempo; let i = index\" (click)=\"lineaTiempo(i)\">\r\n          <div class=\"ltSelect\"></div>\r\n          <div>\r\n            <div>\r\n              <div >{{item.proceso}}</div>\r\n              <div >{{item.responsable}}</div>\r\n              <div>FI {{item.fechaInicio | dateFormatSlash}}</div>\r\n              <div>FF {{item.fechaFin  | dateFormatSlash}}</div>\r\n              <div>TT {{item.tiempoProceso}} día<span *ngIf=\"item.tiempoProceso != 1\">s</span>\r\n              </div>\r\n            </div>\r\n            <div></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"detalleTiempo\">\r\n      <div>\r\n        {{estadoItemLineaTiempo}}\r\n      </div>\r\n      <div>\r\n          <!--TRAMITACIÓN-->\r\n          <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Tramitación' && itemLineaTiempo != undefined\">\r\n            <div>\r\n              <div class=\"titulo\">Generales</div>\r\n              <div class=\"subTitulo\">Fecha de facturación:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash }}</div>\r\n              <div class=\"subTitulo\">Fecha de tramitación:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash }}</div>\r\n              <div class=\"subTitulo\">Tramitó:</div>\r\n              <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\r\n              <div class=\"subTitulo\">Etiquetas:</div>\r\n              <div class=\"normalVerde\" >\r\n                  <span *ngIf=\"itemLineaTiempo.etiquetas != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemLineaTiempo.etiquetas+'.pdf')\">{{itemLineaTiempo.etiquetas}}</span>\r\n              </div>\r\n              <div class=\"subTitulo\">Comentarios Gestor de ruta:</div>\r\n              <div class=\"normal\" *ngIf=\"itemLineaTiempo.comentarios ==''\">No Disponible</div>\r\n              <div class=\"normal\" *ngIf=\"itemLineaTiempo.comentarios != ''\" >{{itemLineaTiempo.comentarios}}</div>\r\n            </div>\r\n          </div>\r\n          <!--SURTIDO-->\r\n          <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Surtido' && itemLineaTiempo != undefined\">\r\n              <div>\r\n                <div class=\"titulo\">Generales</div>\r\n                <div class=\"subTitulo\">Fecha tramitación:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.fechaTramitacion | dateFormatSlash }}</div>\r\n                <div class=\"subTitulo\">Fecha de surtido:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash }}</div>\r\n                <div class=\"subTitulo\">Surtió:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\r\n                <div class=\"subTitulo\">Etiqueta de surtido:</div>\r\n                <div class=\"normalVerde\" >\r\n                    <span *ngIf=\"itemLineaTiempo.etiquetas != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemLineaTiempo.etiquetas+'.pdf')\">{{itemLineaTiempo.etiquetas}}</span>\r\n                </div>\r\n                <div class=\"subTitulo\">Caja colectora:</div>\r\n                <div class=\"normalVerde\">\r\n\r\n                  <span *ngIf=\"itemLineaTiempo.folio != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemLineaTiempo.folio+'.pdf')\">{{itemLineaTiempo.folio}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--EJECUCIÓN-->\r\n            <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Ejecución' && itemLineaTiempo != undefined\">\r\n                <div>\r\n                  <div class=\"titulo\">Generales</div>\r\n                  <div class=\"subTitulo\">Fecha surtido:</div>\r\n                  <div class=\"normal\">{{itemLineaTiempo.fechaSurtido | dateFormatSlash }}</div>\r\n                  <div class=\"subTitulo\">Fecha de asignación:</div>\r\n                  <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash }}</div>\r\n                  <div class=\"subTitulo\">Mensajero:</div>\r\n                  <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\r\n                  <div class=\"subTitulo\">Ruta:</div>\r\n                  <div class=\"normal\" >{{itemLineaTiempo.rutaMensajeria}}</div>\r\n                  <div class=\"subTitulo\">Zona:</div>\r\n                  <div class=\"normal\" >{{itemLineaTiempo.zonaMensajeria}}</div>\r\n                  <div class=\"subTitulo\">Conforme:</div>\r\n                  <div class=\"normal\" >{{itemLineaTiempo.conforme}}</div>\r\n                  <div class=\"subTitulo\">Entrega:</div>\r\n                  <div class=\"normal\" *ngIf=\"itemLineaTiempo.entrega!=null\">{{itemLineaTiempo.entrega}}</div>\r\n                  <div class=\"normal\" *ngIf=\"itemLineaTiempo.entrega===null\">Pendiente</div>\r\n                </div>\r\n            </div>\r\n            <!--CIERRE-->\r\n            <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Cierre' && itemLineaTiempo != undefined\">\r\n                <div>\r\n                  <div class=\"titulo\">Generales</div>\r\n                  <div class=\"subTitulo\">Fecha cierre:</div>\r\n                  <div class=\"normal\">{{itemLineaTiempo.fechaCierre | dateFormatSlash }}</div>\r\n                  <div class=\"subTitulo\">Cerró:</div>\r\n                  <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\r\n                  <div class=\"subTitulo\">Documentos resultantes:</div>\r\n                  <div class=\"normalVerde\" *ngIf=\"itemLineaTiempo.documento!=null && itemLineaTiempo.documento!=undefined \" >\r\n                          <div class=\"normalVerde\" *ngFor=\"let docu of itemLineaTiempo.documento; let i = index\" >\r\n                            <div class=\"normalVerde\" *ngIf=\"docu.indexOf('AR')!=0\"> \r\n                              <div class=\"normalVerde\" *ngIf=\"docu.indexOf('DC')===0\">\r\n                                <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/DC/'+docu+'.pdf')\">{{docu}}</span>\r\n                              </div>\r\n                              <div class=\"normalVerde\" *ngIf=\"docu.indexOf('RT')===0\">\r\n                                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/RT/'+docu+'.pdf')\">{{docu}}</span>\r\n                                </div>\r\n                              </div>\r\n                          </div>\r\n                  </div>\r\n                  <div class=\"normal\" *ngIf=\"itemLineaTiempo.documento== null\">Pendiente</div>\r\n                  <div class=\"subTitulo\">¿Entrega y revisión?:</div>\r\n                  <div class=\"normal\" *ngIf=\"itemLineaTiempo.entregaRevision==true\">\r\n                      <div class=\"normalVerde\" *ngIf=\"itemLineaTiempo.documento!=null && itemLineaTiempo.documento!=undefined \" >\r\n                          <div class=\"normalVerde\" *ngFor=\"let docu of itemLineaTiempo.documento; let i = index\" >\r\n                            <div class=\"normalVerde\" *ngIf=\"docu.indexOf('AR')===0\"> \r\n                                <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/AR/'+docu+'.pdf')\"> SI</span>\r\n                              </div>\r\n                        </div>\r\n                  </div> \r\n                  </div>\r\n                  <div class=\"normal\" *ngIf=\"itemLineaTiempo.entregaRevision==false\">Pendiente</div>\r\n                  <div class=\"subTitulo\">Refacturación:</div>\r\n                  <div class=\"normal\">{{itemLineaTiempo.refacturacion}}</div>\r\n                </div>\r\n            </div>\r\n            <!--ENTREGA-->\r\n            <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Entrega' && itemLineaTiempo != undefined\">\r\n              <div>\r\n                <div class=\"titulo\">Generales</div>\r\n                <div class=\"subTitulo\">Fecha facturacion:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.fechaFacturacion | dateFormatSlash }}</div>\r\n                <div class=\"subTitulo\">Factura:</div>\r\n                <div class=\"normalVerde\">\r\n                  <span style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+itemLineaTiempo.fpor+'/'+itemLineaTiempo.etiquetas+'.pdf')\">{{itemLineaTiempo.etiquetas}}</span>\r\n              \r\n                </div>\r\n                <div class=\"subTitulo\">Fecha tramitación:</div>\r\n                <div class=\"normal\" >{{itemLineaTiempo.fechaTramitacion | dateFormatSlash }}</div>\r\n                <div class=\"subTitulo\">Fecha surtido:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.fechaSurtido | dateFormatSlash }}</div>\r\n                <div class=\"subTitulo\">Ejecución:</div>\r\n                <div class=\"normal\" >{{itemLineaTiempo.fechaEjecucion | dateFormatSlash }}</div>\r\n                <div class=\"subTitulo\">Cierre:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.fechaCierre | dateFormatSlash }}</div>\r\n                <div class=\"subTitulo\">Conforme:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.conforme}}</div>\r\n                <div class=\"subTitulo\">Entrega:</div>\r\n                <div class=\"normal\">{{itemLineaTiempo.entrega}}</div>\r\n                <div class=\"subTitulo\">Notificado de entrega:</div>\r\n                <div class=\"normalVerde\">\r\n\r\n                    <span style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/ConfirmacionEntrega/'+itemLineaTiempo.referencia+'.pdf')\">{{itemLineaTiempo.referencia}}</span>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n   \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/entregas/entregas.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(0,137,149,.02)}:host>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:#008895;height:41px;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;padding:0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(1)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;cursor:pointer}:host>div:nth-of-type(1)>div:nth-of-type(2){margin-left:20px}:host>div:nth-of-type(1)>div:nth-of-type(3){margin-left:20px}:host>div:nth-of-type(1)>div:nth-of-type(4){margin-left:20px}:host>div:nth-of-type(1)>.regresar{cursor:pointer;font-weight:200}:host>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:calc(100vh - 170px);width:100%}:host>div:nth-of-type(2)>.panelNormal{background:#fff;height:100%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll;padding-bottom:60px}:host>div:nth-of-type(2)>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>div:nth-of-type(2)>.panelOcultar .filtros{display:none}:host>div:nth-of-type(2)>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}:host>div:nth-of-type(2) .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>div:nth-of-type(2) .filtroHeader>.abrir{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;min-height:22px}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>div:nth-of-type(2) .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242}:host>div:nth-of-type(2) .filtros>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:50px;border-bottom:1px solid #eceef0;padding-top:15px;padding-bottom:20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .filtros>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:14px}:host>div:nth-of-type(2) .filtros>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:140px;height:25px;margin-right:1px}:host>div:nth-of-type(2) .filtros>.divAvanzada{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:130px;font-size:16px;color:#424242}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div>div{margin-top:6px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2){border-bottom:1px solid #424242;padding-bottom:18px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:53px;padding-top:10px;border-bottom:1px solid #eceef0}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding-bottom:18px;border-bottom:1px solid #424242}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2)>input{height:25px;border:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:5px}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2)>div:nth-of-type(2){height:100%;width:100%;background:rgba(0,137,149,.02)}:host>div:nth-of-type(2)>.resultados{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:1s ease-in-out;transition:1s ease-in-out}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1){border-bottom:3px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(1){font-size:22px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;flex-direction:row-revesrse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2)>img{cursor:pointer;height:30px;width:30px}:host>div:nth-of-type(2)>.resultados>.total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;min-height:30px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}:host .fechafactura{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host .fechafactura>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1250px;min-height:57px}:host .fechafactura>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .fechafactura>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1250px}:host .fechafactura>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host .fechafactura>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host .fechacobro{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host .fechacobro>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:2785px;min-height:57px}:host .fechacobro>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .fechacobro>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:2788px}:host .fechacobro>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host .fechacobro>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host>.fechacobroRapida{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host>.fechacobroRapida>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1425px;min-height:57px}:host>.fechacobroRapida>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.fechacobroRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1425px}:host>.fechacobroRapida>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host>.fechacobroRapida>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host>.consultaDetalles{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:calc(100vh - 170px);width:100%}:host>.consultaDetalles>.panelNormal{background:#fff;height:100%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll;padding-bottom:70px}:host>.consultaDetalles>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>.consultaDetalles>.panelOcultar .filtros{display:none}:host>.consultaDetalles>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}:host>.consultaDetalles .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>.consultaDetalles .filtroHeader>.abrir{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;min-height:22px}:host>.consultaDetalles .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.consultaDetalles .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>.consultaDetalles .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242;border-bottom:1px solid #424242;padding-bottom:25px}:host>.consultaDetalles .filtros>.detalleCliente{font-size:16px;color:#424242;font-weight:bold;margin-top:15px}:host>.consultaDetalles .filtros>.detalleTitulo{font-size:16px;color:#424242;font-weight:400;margin-top:20px}:host>.consultaDetalles .filtros>.detalleTexto{font-size:16px;color:#424242;font-weight:200}:host>.consultaDetalles .filtros>.detalleTextoVerde{font-size:16px;color:#008895 !important;font-weight:300}:host>.consultaDetalles>.contenidoFactura{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:calc(100vh - 170px);width:100%;overflow:scroll}:host>.consultaDetalles>.contenidoFactura>.detalleFactura{min-width:592px;padding:15px 20px}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(1){font-size:22px;font-weight:bold}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2){margin-top:20px;border-top:1px solid #424242;border-bottom:1px solid #979797}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #fff}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(1){min-width:8px;background:transparent}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:5px 10px;width:100%;cursor:pointer}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:5px 0px}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2){-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div:hover{background-color:#fff}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActual{background-color:#fff;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActual>div:nth-of-type(1){min-width:8px;background:#008895}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActive{background-color:#fff}:host>.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;margin-top:15px;font-size:14px;color:#424242;font-weight:300}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo{min-width:592px;background:#fff;padding:15px 20px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(1){font-size:22px;font-weight:bold;color:#008895}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2){margin-top:20px;border-top:1px solid #424242;border-bottom:1px solid #979797}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(1){min-width:8px;background:transparent}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 10px;width:100%}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1){font-size:18px;font-weight:bold;color:#424242;margin-bottom:15px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2){font-size:16px;color:#008895;margin-bottom:2px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3){font-size:16px;color:#f3b23f;margin-bottom:2px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4){font-size:16px;color:#571c7b;margin-bottom:2px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5){font-size:16px;color:#981e30;margin-bottom:2px}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div:hover{background-color:rgba(0,137,149,.05)}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>.divActive{background-color:rgba(0,137,149,.05)}:host>.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>.divActive>div:nth-of-type(1){min-width:8px;background:#008895}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo{min-width:592px;padding-top:15px}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(1){font-size:22px;font-weight:bold;padding:0px 20px}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2){border-top:1px solid #424242;margin:20px 20px;overflow:scroll;max-height:calc(100vh - 228px)}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div{border-bottom:1px solid #d8d8d8}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .titulo{font-size:18px;color:#008895;margin-top:20px;margin-bottom:10px}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .subTitulo{font-size:16px;font-weight:400;color:#424242;margin-bottom:3px}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normal{font-size:16px;font-weight:200;color:#424242;margin-bottom:25px}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde{font-size:16px;font-weight:200;margin-bottom:25px;color:#008895}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde>span{cursor:pointer}:host>.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde:hover>span{text-decoration:underline}:host>.fechacobroRapida{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host>.fechacobroRapida>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1250px;min-height:57px}:host>.fechacobroRapida>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.fechacobroRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1250px}:host>.fechacobroRapida>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host>.fechacobroRapida>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}@-webkit-keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@-webkit-keyframes mostar{from{width:50px}to{width:321px}}@keyframes mostar{from{width:50px}to{width:321px}}:host .w3-animate-right{position:relative;-webkit-animation:animateright .4s;animation:animateright .4s}@-webkit-keyframes animateright{from{right:-900px;opacity:0}to{right:0;opacity:1}}@keyframes animateright{from{right:-900px;opacity:0}to{right:0;opacity:1}}:host .w3-animate-left{position:relative;-webkit-animation:animateleft .8s;animation:animateleft .8s}@-webkit-keyframes animateleft{from{left:-50px;opacity:0}to{left:0;opacity:1}}@keyframes animateleft{from{left:-50px;opacity:0}to{left:0;opacity:1}}:host .GlobalContainer-graphic-Component{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}:host .GlobalContainer-graphic-Component .GraphicsContainer-graphic-Component{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;background:#f7fbfb}:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component{width:300px;height:100%;background:#424242}:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Tabgraphic-Component{position:absolute;right:290px;top:1%;background:#424242;cursor:pointer;width:50px;height:35px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component{margin-left:17px;width:100%;height:100%}:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .totals-filter-graphic-Component{width:100%;background:transparent;height:10%;color:#fff;border-style:solid;border-bottom:1px solid #008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-line-pack:end;align-content:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding-bottom:10px}:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component{width:100%;background:transparent;height:18%;color:#fff;border-style:solid;border-top:1px solid #008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-line-pack:end;align-content:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding-bottom:10px;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .filters-graphic-Component{width:100%;background:transparent;height:40%;color:#fff;border-style:solid;border-bottom:1px solid #008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-line-pack:end;align-content:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding-bottom:10px}:host .circleGreen{height:15px;width:15px;background-color:#91be5f;border-radius:50%;margin-top:28px}:host .circleRed{height:15px;width:15px;background-color:#952936;border-radius:50%;margin-top:28px}:host .circleYellow{height:15px;width:15px;background-image:url('cobr_flag.22ddfa47182dffa0b19b.svg');border-radius:50%;margin-top:28px}:host .circlePurple{height:15px;width:15px;background-color:#a9a9f5;border-radius:50%;margin-top:28px}:host .circleDatePurple{height:12px;width:12px;background-color:#aa65e7;border-radius:50%;margin-top:48px}:host .circleDateGreen{height:12px;width:12px;background-color:#439dc1;border-radius:50%;margin-top:21px}:host .link{cursor:pointer}:host .link:hover{text-decoration:underline}"

/***/ }),

/***/ "./src/app/components/gestion/consultas/entregas/entregas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntregasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gestion_consulta_entregas_entregas_service__ = __webpack_require__("./src/app/services/gestion/consulta/entregas/entregas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_UtilFechas__ = __webpack_require__("./src/app/class/UtilFechas.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EntregasComponent = /** @class */ (function () {
    function EntregasComponent(router, coreComponent, _gestionService, _entregasService) {
        var _this = this;
        this.router = router;
        this.coreComponent = coreComponent;
        this._gestionService = _gestionService;
        this._entregasService = _entregasService;
        this.itemLineaTiempo = [];
        this.lstEntregasDetalleActive = [];
        this.lstEntregasDetalle = [];
        this.estadoItemLineaTiempo = "";
        this.lstLineaTiempoActive = [];
        this.lstLineaTiempo = [];
        this.detalle = false;
        this._utilFechas = new __WEBPACK_IMPORTED_MODULE_9__class_UtilFechas__["a" /* UtilFechas */]();
        this.IsDate = true;
        this.filtroConsultaRapida = "Folio de Factura";
        this.lstRadiosRapida = ['Folio de Factura', 'Pedido Interno'];
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.avanzada = true;
        this.fechaFacturacion = true;
        this.fechaCobros = false;
        this.isTableShow = true;
        this.totalDetalle = 0;
        this.Clear = true;
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.itemsDropList = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Cerrado', key: 1 },
                    { nombre: 'Abierto', key: 2 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Mensajero", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'ABriseno', key: 1 },
                    { nombre: 'ARojas', key: 2 },
                    { nombre: 'AS', key: 3 },
                    { nombre: 'ERobledo', key: 4 },
                    { nombre: 'IPerez', key: 5 },
                    { nombre: 'JLOlivares', key: 6 },
                    { nombre: 'LMorales', key: 7 },
                    { nombre: 'MAFlores', key: 8 },
                    { nombre: 'MensajeroE1', key: 9 },
                    { nombre: 'MensajeroE2', key: 10 },
                    { nombre: 'VGonzalez', key: 11 }
                ], true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Ruta", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Centroamérica', key: 1 },
                    { nombre: 'Foraneo', key: 2 },
                    { nombre: 'Guadalajara', key: 3 },
                    { nombre: 'Local', key: 4 },
                    { nombre: 'Resto del mundo', key: 5 },
                    { nombre: 'Sudamérica', key: 6 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Conforme", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Pendiente', key: 1 },
                    { nombre: 'No aplica', key: 2 },
                    { nombre: 'SI', key: 3 },
                    { nombre: 'NO', key: 4 },
                ], true),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
        this.IsImage = true;
    }
    EntregasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_4__class_Parametros_class__["a" /* Parametros */]();
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]()
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
        this.facturaForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]()
        });
        this.avanzada = true;
        var cuerpo = {
            idCliente: 0,
            estado: "--TODOS--",
            mensajero: "--TODOS--",
            ruta: "--TODOS--",
            conforme: "--TODOS--",
            fechaInicio: new Date(),
            fechaFin: new Date(),
            facturaS: null,
            cPedido: null
        };
        this.obtenerEntregas(cuerpo);
    };
    EntregasComponent.prototype.obtenerEntregas = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._entregasService.obtenerEntregas(parametros).subscribe(function (data) {
            _this.lstEntregas = data.current;
            console.log(_this.lstEntregas);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    EntregasComponent.prototype.obtenerEntregasSinAviso = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._entregasService.obtenerEntregas(parametros).subscribe(function (data) {
            _this.lstEntregas = data.current;
            console.log(_this.lstEntregas);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    EntregasComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    EntregasComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    EntregasComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    EntregasComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    EntregasComponent.prototype.mostrarDatos = function ($event) {
        var cuerpo = {
            idCliente: $event.Datos[0].key,
            estado: $event.Datos[1].nombre,
            mensajero: $event.Datos[2].nombre,
            ruta: $event.Datos[3].nombre,
            conforme: $event.Datos[4].nombre,
            fechaInicio: $event.Fechas.fechaInicial,
            fechaFin: $event.Fechas.fechaFinal,
            facturaS: null,
            cPedido: null
        };
        this.obtenerEntregas(cuerpo);
    };
    EntregasComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
        var cuerpo = {
            idCliente: 0,
            estado: "--TODOS--",
            mensajero: "--TODOS--",
            ruta: "--TODOS--",
            conforme: "--TODOS--",
            fechaInicio: new Date(),
            fechaFin: new Date(),
            facturaS: null,
            cPedido: null
        };
        this.obtenerEntregas(cuerpo);
    };
    EntregasComponent.prototype.radioRapida = function ($event) {
        console.log("Método radioRapida ");
        if ($event == 0) {
            this.filtroConsultaRapida = "Folio de Factura";
        }
        else if ($event == 1) {
            this.filtroConsultaRapida = "Pedido Interno";
        }
    };
    EntregasComponent.prototype.filtroRapido = function () {
        this.avanzada = false;
        if (this.filtroConsultaRapida == "Folio de Factura") {
            var cuerpo = {
                idCliente: 0,
                estado: "--TODOS--",
                mensajero: "--TODOS--",
                ruta: "--TODOS--",
                conforme: "--TODOS--",
                fechaInicio: new Date(),
                fechaFin: new Date(),
                facturaS: (this.filtroConsultaRapida == "Folio de Factura") ? this.filtroForm.get('filtroDato').value : "",
                cPedido: null
            };
            this.obtenerEntregas(cuerpo);
        }
        else {
            var cuerpo = {
                idCliente: 0,
                estado: "--TODOS--",
                mensajero: "--TODOS--",
                ruta: "--TODOS--",
                conforme: "--TODOS--",
                fechaInicio: new Date(),
                fechaFin: new Date(),
                facturaS: null,
                cPedido: (this.filtroConsultaRapida == "Pedido Interno") ? this.filtroForm.get('filtroDato').value : ""
            };
            this.obtenerEntregas(cuerpo);
        }
    };
    EntregasComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
    };
    EntregasComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    EntregasComponent.prototype.dropList = function (index, $event) {
    };
    EntregasComponent.prototype.ConvertToCSV = function (objArray) {
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
    EntregasComponent.prototype.download = function () {
        var entregas = [];
        this.lstEntregas.forEach(function (entrega, index) {
            var cuerpo = {
                '#': index + 1,
                'Cliente': "\"" + entrega.nombre_Cliente + "\"",
                'Ruta': entrega.rutaRelacionada.rutaMensajeria,
                'Zona': entrega.rutaRelacionada.zonaMensajeria,
                'Factura': entrega.numeroFactura,
                'Pedido': entrega.cpedido,
                'Mensajero': entrega.rutaRelacionada.responsable,
                'FER': new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(entrega.rutaRelacionada.fer),
                'FR': new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(entrega.rutaRelacionada.fr),
                'Estado': entrega.rutaRelacionada.estadoRuta,
                'Conforme': entrega.rutaRelacionada.conforme,
            };
            entregas.push(cuerpo);
        });
        var csvData = this.ConvertToCSV(entregas);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'ConsultaEntregas-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
        a.click();
    };
    EntregasComponent.prototype.verDetalle = function (item) {
        this.entregaDetalle = item;
        this.detalle = true;
        var lstAux = [];
        this.obtenerLineaTiempoResumen(item.rutaRelacionada.idEvento);
        this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("");
        this.lstLineaTiempoActive[0] = "divActive";
        this.totalDetalle = 0;
        this.totalDetalle += item.montoTotalPedido;
        for (var _i = 0, _a = this.lstEntregas; _i < _a.length; _i++) {
            var entrega = _a[_i];
            if (entrega.nombre_Cliente === item.nombre_Cliente) {
                lstAux.push(entrega);
                this.totalDetalle += entrega.montoTotalPedido;
                console.log(entrega);
            }
        }
        this.lstEntregasDetalle = [];
        this.lstEntregasDetalle = this.lstEntregasDetalle.concat(lstAux);
        this.lstEntregasDetalleActive = new Array(this.lstEntregasDetalle.length).fill("");
        this.lstEntregasDetalleActive[0] = "divActual";
    };
    EntregasComponent.prototype.obtenerLineaTiempoResumen = function (idPD) {
        var _this = this;
        var cuerpo = {
            idPD: idPD
        };
        var etiquetas = [];
        this.coreComponent.openModal(0);
        this._entregasService.obtenerTiempoDeProceso(cuerpo).subscribe(function (data) {
            _this.lstLineaTiempo = [];
            if (data.current != undefined && data.current.length > 0) {
                var temp = [];
                for (var i = 0; i < data.current.length; i++) {
                    temp.push(data.current[i]);
                }
                _this.lstLineaTiempo = temp;
                _this.lstLineaTiempo.forEach(function (etiqueta, index) {
                    if (_this.lstLineaTiempo[index].documento != null) {
                        if (_this.lstLineaTiempo[index].documento.split(",")) {
                            _this.lstLineaTiempo[index].documento = _this.lstLineaTiempo[index].documento.split(",");
                            if (_this.lstLineaTiempo[index].documento.indexOf("AR") != 0) {
                                _this.lstLineaTiempo[index].documento = _this.lstLineaTiempo[index].documento;
                            }
                        }
                    }
                });
                _this.documentos = etiquetas;
                _this.lstLineaTiempoActive = new Array(_this.lstLineaTiempo.length).fill("");
                _this.lstLineaTiempoActive[0] = "divActive";
                _this.estadoItemLineaTiempo = _this.lstLineaTiempo[0].proceso;
                _this.itemLineaTiempo = _this.lstLineaTiempo[0];
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    EntregasComponent.prototype.resumenEntrega = function (i) {
        this.lstEntregasDetalleActive = new Array(this.lstEntregasDetalle.length).fill("");
        this.lstEntregasDetalleActive[i] = "divActive";
        this.obtenerLineaTiempoResumen(this.lstEntregasDetalle[i].rutaRelacionada.idEvento);
    };
    EntregasComponent.prototype.lineaTiempo = function (i) {
        this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("");
        console.log(this.lstLineaTiempo[i]);
        this.lstLineaTiempoActive[i] = "divActive";
        this.estadoItemLineaTiempo = this.lstLineaTiempo[i].proceso;
        this.itemLineaTiempo = this.lstLineaTiempo[i];
        console.log("ESTADO: " + this.estadoItemLineaTiempo);
        switch (this.estadoItemLineaTiempo) {
            case "Tramitación":
                break;
        }
    };
    EntregasComponent.prototype.regresarConsulta = function () {
        this.detalle = false;
    };
    EntregasComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    EntregasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-entregas',
            template: __webpack_require__("./src/app/components/gestion/consultas/entregas/entregas.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/entregas/entregas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_6__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_5__services_gestion_consulta_entregas_entregas_service__["a" /* EntregasService */]])
    ], EntregasComponent);
    return EntregasComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/entregas/entregas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregasModule", function() { return EntregasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entregas_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/entregas/entregas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entregas_component__ = __webpack_require__("./src/app/components/gestion/consultas/entregas/entregas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var EntregasModule = /** @class */ (function () {
    function EntregasModule() {
    }
    EntregasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__entregas_routing_module__["a" /* EntregasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__entregas_component__["a" /* EntregasComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__entregas_component__["a" /* EntregasComponent */]
            ]
        })
    ], EntregasModule);
    return EntregasModule;
}());



/***/ })

});
//# sourceMappingURL=entregas.module.chunk.js.map