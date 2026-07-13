webpackJsonp(["cotizaciones.module"],{

/***/ "./src/app/components/gestion/consultas/cotizaciones/cotizaciones-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cotizaciones_component__ = __webpack_require__("./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CotizacionesRoutingModule = /** @class */ (function () {
    function CotizacionesRoutingModule() {
    }
    CotizacionesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__cotizaciones_component__["a" /* CotizacionesComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CotizacionesRoutingModule);
    return CotizacionesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div (click)=\"backMenu()\">\r\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\r\n  </div>\r\n  |\r\n\r\n  <div *ngIf=\"!detalle\">CONSULTA DE COTIZACIONES</div>\r\n  <div *ngIf=\"detalle\" (click)=\"regresarConsulta()\" class=\"regresar\" style=\"  margin-right: 20px; cursor: pointer;\">CONSULTA DE COTIZACIONES </div>\r\n  <div *ngIf=\"detalle\" style=\"  margin-right: 20px;\">|</div>\r\n  <div *ngIf=\"detalle\">DETALLES</div>\r\n</div>\r\n<div *ngIf=\"!detalle\">\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        cerrar\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"filtros\">\r\n      <div style=\"display: none\">\r\n        <pq-radio-button [widthTotal]=\"'100px'\" [lstItems]=\"lstItems\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\" (emitItem)=\"emitItem($event)\"></pq-radio-button>\r\n      </div>\r\n      <div>\r\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\r\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\r\n      </div>\r\n\r\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\r\n        <!--  Si ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\r\n            Y la propiedad IsLoader como verdadera\r\n          -->\r\n        <div *ngIf=\"isThereData;else loader\">\r\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\r\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\"></gestion-filter>\r\n        </div>\r\n\r\n        <!--  Si no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\r\n              una propiedad\r\n              IsLoader como Falsa-->\r\n        <ng-template #loader>\r\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\r\n        <div style=\"display: none\">\r\n          <!--<pq-radio-button [widthTotal]=\"'60px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\" (emitItem)=\"emitItem($event)\"></pq-radio-button>-->\r\n        </div>\r\n\r\n        <div>\r\n          <span>Folio de cotización</span>\r\n          <input [(ngModel)]=\"txtCotizacion\" type=\"text\">\r\n        </div>\r\n\r\n        <div (click)=\"Rapida()\">\r\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"resultados\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\r\n    <div>\r\n      <div>\r\n        RESULTADOS\r\n      </div>\r\n      <div>\r\n        <img height=\"20px\" width=\"20px\" (click)=\"download()\" src=\"assets/Images/exportar.svg\" alt=\"\">\r\n        <img [style.margin-right]=\"'15px'\" (click)=\"showGraphic()\" height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/images/graficaminigris.svg\"\r\n          alt=\"\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"lstCotizaciones\" class=\"sistema \">\r\n\r\n      <div style=\"min-width: 1520px;\">\r\n        <div [style.min-width]=\"'50px'\">#</div>\r\n        <div [style.min-width]=\"'160px'\">Fecha</div>\r\n        <div [style.min-width]=\"'160px'\">Cliente</div>\r\n        <div [style.min-width]=\"'160px'\">Contacto</div>\r\n        <div [style.min-width]=\"'160px'\">Medio de envío</div>\r\n        <div [style.min-width]=\"'160px'\">Cotizó</div>\r\n        <div [style.min-width]=\"'160px'\">Cotización</div>\r\n        <div [style.min-width]=\"'160px'\">Requisición</div>\r\n        <div [style.min-width]=\"'160px'\">Estado</div>\r\n        <div [style.min-width]=\"'160px'\">Envío</div>\r\n        <div [style.min-width]=\"'30px'\" [style.background]=\"red\"></div>\r\n      </div>\r\n\r\n\r\n      <div>\r\n        <div *ngFor=\"let item of lstCotizaciones; let i = index\">\r\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.fecha}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.nombreCliente}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.contacto}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.msalida}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.cotizo}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.folioCotizacion}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.requisicion}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.estado}}</div>\r\n          <div [style.min-width]=\"'160px'\">\r\n            <div style=\"margin-right: 10px;\">\r\n              {{item.enTiempoFueraDeTiempo? \"ET \": \"FT \"}}\r\n            </div>\r\n            <div *ngIf=\"item.enTiempoFueraDeTiempo\" class=\"circuloverde\">\r\n\r\n            </div>\r\n            <div *ngIf=\"!item.enTiempoFueraDeTiempo\" class=\"circulorojo\">\r\n\r\n            </div>\r\n          </div>\r\n          <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\r\n            <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"total\" style=\"display: flex; align-content: center; align-items: center; justify-content: center\">\r\n      <p>Total:\r\n        <span>{{lstCotizaciones.length}}</span>\r\n        <span *ngIf=\"lstCotizaciones.length == 1\">Cotización</span>\r\n        <span *ngIf=\"lstCotizaciones.length != 1\">Cotizaciones</span>\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!--Sección de detalles-->\r\n<div *ngIf=\"detalle\" class=\"consultaDetalles\">\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"Cotizacion_Detalle\" class=\"filtros\">\r\n      <div class=\"detalleCliente\"> {{Cotizacion_Detalle.nombreCliente}} </div>\r\n      <div style=\"height: 0.1px; margin: 0.1px;\"></div>\r\n      <div class=\"detalleTitulo \">Folio:</div>\r\n      <div class=\"detalleTexto\" style=\"color:#008895; cursor:pointer\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Cotizaciones/'+Cotizacion_Detalle.folioCotizacion+'.pdf')\">\r\n        {{Cotizacion_Detalle.folioCotizacion}} </div>\r\n      <div class=\"detalleTitulo\">Referencia:</div>\r\n      <div class=\"detalleTexto\" style=\"color:#008895; cursor:pointer\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+Cotizacion_Detalle.requisicion+'.pdf')\">{{Cotizacion_Detalle.requisicion}}</div>\r\n      <div class=\"detalleTitulo\">Fecha de origen:</div>\r\n      <div class=\"detalleTexto\">{{Cotizacion_Detalle.fechaOrigen | dateFormatSlashHour}} </div>\r\n      <div class=\"detalleTitulo\">Fecha de registro</div>\r\n      <div class=\"detalleTexto\">{{Cotizacion_Detalle.fechaRegistro | dateFormatSlashHour}} </div>\r\n      <div class=\"detalleTitulo\">Pendiente de origen:</div>\r\n      <div class=\"detalleTexto\">{{Cotizacion_Detalle.pendienteOrigen}}</div>\r\n      <div class=\"detalleTitulo\">Condiciones de pago:</div>\r\n      <div class=\"detalleTexto\">{{Cotizacion_Detalle.cpago}}</div>\r\n      <div class=\"detalleTitulo\">Monto total de la cotización:</div>\r\n      <div class=\"detalleTexto\">{{Cotizacion_Detalle.montoCotiza | acFormatMoney}} USD</div>\r\n      <div class=\"detalleTitulo\">Total de piezas:</div>\r\n      <div class=\"detalleTexto\">{{lstPartidas.length}}</div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"hiddenClose\" style=\" visibility: hidden;width: 100%; opacity: 1;margin-top: 40px;background: transparent;color:#008895;;display:flex;flex-direction: column; justify-content: center;align-content: center; align-items: center\">\r\n\r\n      Pedido\r\n      <div style=\"width: 70%;height:60%; opacity: 1;;background: transparent;margin-top: 20px;;display:flex; justify-content: center;align-content: center; align-items: center; position: relative\">\r\n        <div style=\"width:60%;height:10vh;background:transparent;position:absolute;text-align:center; margin-top:10%;font-size:12px;\r\n          border-radius: 100%;\">Totales\r\n          <p style=\"font-size: 10px;margin-top: 20px;color: #424242 \">\r\n            Monto total:#\r\n          </p>\r\n\r\n          <p style=\"font-size: 10px;color: #424242 \">\r\n            Partidas: #\r\n          </p>\r\n\r\n\r\n          <p style=\"font-size: 10px;color: #424242 \">\r\n            Piezas:#\r\n          </p>\r\n\r\n        </div>\r\n        <div>\r\n\r\n          <div style=\"min-width: 300px;min-height: 200px;\">\r\n            <!--   <canvas id=\"graficoIndividual\"></canvas> -->\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"contenidoFactura\">\r\n    <div class=\"detalleFactura\" style=\"justify-content: center; background: transparent;overflow-y: auto\">\r\n      <div style=\"background: transparent; justify-content: center\">C-{{Cotizacion_Detalle.folioCotizacion}} </div>\r\n      <div>\r\n        <!--  lista de Compras-->\r\n        <div [ngClass]=\"i==0?'divActual':''\" *ngFor=\"let item of lstPartidas; let i = index\" (click)=\"obtenerTiempoProceso(item, i,0)\">\r\n          <div class=\"dfSelect\"></div>\r\n          <div>\r\n            <div>\r\n              <div *ngIf=\"item.cantidad==1\" [style.color]=\"'#008895'\">#{{(i+1)+\" - \"+item.cantidad +\"Pza - \"}}{{item.monto | acFormatMoney}} USD </div>\r\n\r\n              <div *ngIf=\"item.cantidad!=1\" [style.color]=\"'#008895'\">#{{(i+1)+\" - \"+item.cantidad +\"Pzas - \"}}{{item.monto | acFormatMoney}} USD </div>\r\n              <div></div>\r\n            </div>\r\n            <div>\r\n              <div style=\"width: 65%\">{{item.concepto}}</div>\r\n\r\n              <div style=\"width: 5%\"></div>\r\n\r\n            </div>\r\n\r\n\r\n            <div>\r\n              <div style=\"width:70%\"> </div>\r\n              <div *ngIf=\"Cotizacion_Detalle.estado=='Abierto' ;\" style=\"width:19%; color:red; text-align: center\"> Abierto</div>\r\n              <div *ngIf=\"Cotizacion_Detalle.estado=='Cerrado'\" style=\"width:19%; color:#91BE5F; text-align: center \"> Cerrado </div>\r\n            </div>\r\n\r\n            <div>\r\n\r\n              <!--Aqui se muestra otra ventana\r\n                  http://201.161.12.60:51725/SAP/Pedidos/062218-5141.pdf\r\n                  -->\r\n              <div style=\"color:#008895; width:70%\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+item.pedido+'.pdf')\">\r\n                PU {{item.precio | acFormatMoney}} USD </div>\r\n\r\n\r\n              <div *ngIf=\"item.estado=='Recibido'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}\r\n                <span style=\"color:#91BE5F \"> ET</span>\r\n              </div>\r\n\r\n              <div *ngIf=\"item.estado=='BackOrder'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}\r\n                <span style=\"color:#D0021B  \"> FT</span>\r\n              </div>\r\n\r\n              <div *ngIf=\"item.estado!='BackOrder'&&item.estado!='Recibido'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 100%; height: 100px;display: flex;flex-wrap: wrap; justify-content: center;align-content: center;align-items: center; background: transparent\">\r\n          <div style=\"background: transparent\">\r\n            Total: {{lstPartidas.length==1?lstPartidas.length+\" Partida\" :lstPartidas.length+\" Partidas\" }}\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"lineaTiempo\" style=\"    overflow-y: scroll;\">\r\n\r\n\r\n      <div *ngIf=\"lstPartidas[PartidaSeleccionada]!=null&&lstPartidas[PartidaSeleccionada].cantidad==1\">\r\n        # {{(PartidaSeleccionada+1)}}-{{lstPartidas[PartidaSeleccionada].cantidad +\"Pieza\" }}</div>\r\n      <div *ngIf=\"lstPartidas[PartidaSeleccionada]!=null&&lstPartidas[PartidaSeleccionada].cantidad!=1\">\r\n        # {{(PartidaSeleccionada+1)}}-{{lstPartidas?lstPartidas[PartidaSeleccionada].cantidad:\"\" }}-Piezas</div>\r\n\r\n      <div [ngClass]=\"i==lineaSeleccionada?'cont-timeLine cont-timeLineSelected':'cont-timeLine'\" *ngFor=\"let item of lstTiempoProceso; let i = index\"\r\n        (click)=\"SeleccionarProceso(item, i)\" style=\"border-bottom: none; cursor: pointer;display: flex;flex-direction: row; min-width: 564px\">\r\n\r\n        <div class=\"cuadroActivo\" style=\"min-width: 8px;\r\n    background: #008895;\r\n    min-height:150px; display: flex; flex-direction: column\">\r\n\r\n        </div>\r\n\r\n        <div class=\"cuadroActivo\" style=\"min-width: 8px;\r\n    background: transparent;\r\n    min-height:150px; display: flex; flex-direction: column\">\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.proceso!='Evaluar respuesta' && item.proceso!='Ingresó en catálogo'\" style=\"display: flex;\r\n                              flex-direction: column;  padding-left: 1rem\">\r\n\r\n          <div style=\"font-size: 18px;width: 100%;\r\n                      font-weight: bold;\r\n                      color: #424242;\r\n                      margin-bottom: 15px;display: flex; justify-content: space-between\">\r\n            <div style=\"width: 90%; min-width: 520px;\">\r\n              {{item.proceso}}\r\n            </div>\r\n\r\n            <div *ngIf=\"item.fechaFin !=null\" class=\"circuloverde\"></div>\r\n\r\n            <div *ngIf=\"item.fechaFin ==null\" class=\"circulorojo\"></div>\r\n          </div>\r\n\r\n          <div style=\"    font-size: 16px;\r\n                      color: #008895;\r\n                      margin-bottom: 5px;margin-bottom: 2px\">{{item.responsable}}</div>\r\n          <div style=\"    font-size: 16px;\r\n                      color: #F3B23F;\r\n                      margin-bottom: 5px;\">FI {{item.fechaInicio | dateFormatSlashHour}}</div>\r\n          <div style=\"    font-size: 16px;\r\n                      color: #571C7B;\r\n                      margin-bottom: 5px;\">FF {{item.fechaFin | dateFormatSlashHour}}</div>\r\n          <div style=\"    font-size: 16px;\r\n                      color: #981E30;\r\n                      margin-bottom: 5px;\">TT {{item.totalProceso}} día\r\n            <span *ngIf=\"item.totalProceso != 1\">s</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <hr>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"detalleTiempo\">\r\n      <div style=\"display: flex;\">\r\n        <div   *ngIf=\"ProcesoSeleccionado!=null\" style=\"width: 90%\">\r\n          {{ProcesoSeleccionado.proceso}}\r\n        </div>\r\n        <div *ngIf=\"ProcesoSeleccionado !=null\" class=\"circuloverde\"></div>\r\n\r\n        <div *ngIf=\"ProcesoSeleccionado ==null\" class=\"circulorojo\"></div>\r\n\r\n\r\n      </div>\r\n      <!--Seccion de Registro -->\r\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Registro'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Recepción\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaInicio | dateFormatSlashHour}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Registro\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Medio\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.medio ?ProcesoSeleccionado.medio : \"ND\"}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Contacto\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.contacto ?ProcesoSeleccionado.contacto : \"ND\"}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Registró\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.responsable ?ProcesoSeleccionado.responsable : \"ND\"}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Referencia\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.referencia?ProcesoSeleccionado.referencia: \"ND\"}}\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <!--Seccion de Clasificación-->\r\n\r\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Clasificación'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Clasificación Inicial\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.clasificacion?ProcesoSeleccionado.pcotiza.clasificacion: \"ND\"}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Clasificación Final\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.clasifFinal?ProcesoSeleccionado.pcotiza.clasifFinal: \"ND\"}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha Registro\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaInicio | dateFormatSlashHour}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha Clasificación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Cotización\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.referencia?ProcesoSeleccionado.referencia: \"ND\"}}\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Clasificó\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.responsable?ProcesoSeleccionado.responsable: \"ND\"}}\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          contacto\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.contacto?ProcesoSeleccionado.contacto: \"ND\"}}\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <!--Seccion de Envio-->\r\n\r\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Envío'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Clasificación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{ProcesoSeleccionado.clasificacion?ProcesoSeleccionado.clasificacion: \"ND\"}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Registro\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{Cotizacion_Detalle.fechaRegistro | dateFormatSlashHour}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          fecha Inicio Envío\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha Envío\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\r\n        </div>\r\n      </div>\r\n\r\n      <!--Seccion de  ConformacionS-->\r\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Confirmación'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha Inicio\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{ProcesoSeleccionado.fechaInicio | dateFormatSlashHour}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha Fin\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Confirmo\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.responsable?ProcesoSeleccionado.responsable: \"ND\"}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Contacto\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{ProcesoSeleccionado.contacto?ProcesoSeleccionado.contacto: \"ND\"}}\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Comentarios\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{ProcesoSeleccionado.comentarios?ProcesoSeleccionado.comentarios: \"ND\"}}\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!--Seccion de  Tramitacion-->\r\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Tramitación'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Registro\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaInicio | dateFormatSlashHour}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de tramitación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          P. Interno\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion CVerde\" style=\"cursor:pointer; font-weight: 300; color:#008895;\"(click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+ProcesoSeleccionado.comentarios+'.pdf')\">\r\n\r\n         \r\n          <p style=\"cursor: pointer;\">\r\n              {{ProcesoSeleccionado.comentarios?ProcesoSeleccionado.comentarios: \"ND\"}}\r\n          </p>\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Tramitó\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.responsable?ProcesoSeleccionado.responsable: \"ND\"}}\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Contacto de Envío\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.contacto?ProcesoSeleccionado.contacto: \"ND\"}}\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <!--Seccion de  Pedido-->\r\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='PEDIDO'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Pedido\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.comentarios?ProcesoSeleccionado.comentarios: \"ND\"}}\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <!--Seccion de  RECOTIZADA-->\r\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='RECOTIZADA'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Recotizada en\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.referencia?ProcesoSeleccionado.referencia: \"ND\"}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Comentarios\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.comentarios?ProcesoSeleccionado.comentarios: \"ND\"}}\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <!--Seccion de  RECOTIZADA-->\r\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='RECOTIZADA'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Recotizada en\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.referencia?ProcesoSeleccionado.referencia: \"ND\"}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Comentarios\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.comentarios?ProcesoSeleccionado.comentarios: \"ND\"}}\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <!--Seccion de  Investigacion-->\r\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Investigación'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha Inicio\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha Fin\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.referencia?ProcesoSeleccionado.referencia: \"ND\"}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Investigó\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.responsable?ProcesoSeleccionado.responsable: \"ND\"}}\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Clasificación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.clasifOrigen?ProcesoSeleccionado.pcotiza.clasifOrigen: \"ND\"}}\r\n        </div>\r\n\r\n\r\n        <div class=\"encabezadoGestion\">\r\n          Investigación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          FI: {{ProcesoSeleccionado.fechaInicio | dateFormatSlashHour}} FF:{{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}} TT:\r\n          {{ProcesoSeleccionado.totalProceso==1?ProcesoSeleccionado.totalProceso+\" dia\": ProcesoSeleccionado.totalProceso+\"\r\n          dias\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Investigó\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.responsable?ProcesoSeleccionado.responsable: \"ND\"}}\r\n\r\n        </div>\r\n\r\n        <div class=\"encabezadoGestion\">\r\n          Datos de Producto Investigado\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Producto\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.tipoProveedor?ProcesoSeleccionado.tipoProveedor: \"ND\"}}-{{ProcesoSeleccionado.proveedor?ProcesoSeleccionado.proveedor:\r\n          \"ND\"}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n\r\n          Tipo\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.producto.tipo?ProcesoSeleccionado.pcotiza.producto.tipo: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Catalogo\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.codigo?ProcesoSeleccionado.pcotiza.codigo: \"ND\"}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          concepto\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.descripcion?ProcesoSeleccionado.pcotiza.descripcion: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Presentación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{ProcesoSeleccionado.pcotiza.presentacion?ProcesoSeleccionado.pcotiza.presentacion: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Marca\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{ProcesoSeleccionado.pcotiza.fabrica?ProcesoSeleccionado.pcotiza.fabrica: \"ND\"}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Precio de Lista\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.precio | acFormatMoney}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Dispobilidad y Manejo\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Tiempo de Entrega\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.tiempoEntrega?ProcesoSeleccionado.pcotiza.tiempoEntrega: \"ND\"}}\r\n\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Disponibilidad\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.producto.disponibilidad?ProcesoSeleccionado.pcotiza.producto.disponibilidad: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Cargos por envio y adicionales\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.cargosEnviosAdicionales?ProcesoSeleccionado.pcotiza.cargosEnviosAdicionales: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Manejo\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.producto.manejo?ProcesoSeleccionado.pcotiza.producto.manejo: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Hielo seco\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.hieloSeco?ProcesoSeleccionado.pcotiza.hieloSeco: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Comentarios Adicionales\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ProcesoSeleccionado.pcotiza.comentariosAdicionales?ProcesoSeleccionado.pcotiza.comentariosAdicionales: \"ND\"}}\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"encabezadoGestion\">\r\n          Evaluar Respuesta\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          FI: {{EvaluarPropuesta.fechaInicio | dateFormatSlashHour}} FF:{{EvaluarPropuesta.fechaFin | dateFormatSlashHour}} TT: {{EvaluarPropuesta.totalProceso==1?EvaluarPropuesta.totalProceso+\"\r\n          dia\": EvaluarPropuesta.totalProceso+\" dias\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Evaluó\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.responsable?EvaluarPropuesta.responsable: \"ND\"}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Clasificación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.clasifOrigen?EvaluarPropuesta.pcotiza.clasifOrigen: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion CVerde\">\r\n          Producto\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.tipoProveedor?EvaluarPropuesta.tipoProveedor: \"ND\"}}-{{EvaluarPropuesta.proveedor?EvaluarPropuesta.proveedor:\r\n          \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Catálogo\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.codigo?EvaluarPropuesta.pcotiza.codigo: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Concepto\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.descripcion?EvaluarPropuesta.pcotiza.descripcion: \"ND\"}}\r\n\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Presentación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.presentacion?EvaluarPropuesta.pcotiza.presentacion: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Marca\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.fabrica?EvaluarPropuesta.pcotiza.fabrica: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Precio de Lista\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.precio | acFormatMoney}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion CVerde\">\r\n          Disponibilida y Manejo\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Tiempo de Entrega\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.tiempoEntrega?EvaluarPropuesta.pcotiza.tiempoEntrega: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Disponibilidad\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.producto.disponibilidad?EvaluarPropuesta.pcotiza.producto.disponibilidad: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Cargos por Envío y Adicionales\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n\r\n          {{EvaluarPropuesta.pcotiza.cargosEnviosAdicionales?EvaluarPropuesta.pcotiza.cargosEnviosAdicionales: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Manejo\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.producto.manejo?EvaluarPropuesta.pcotiza.producto.manejo: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Hielo Seco\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{EvaluarPropuesta.pcotiza.hieloSeco?EvaluarPropuesta.pcotiza.hieloSeco: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Comentarios Adicionales\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.comentariosAdicionales?EvaluarPropuesta.pcotiza.comentariosAdicionales: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Comentarios Adicionales para el Responsable C-Productos\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{EvaluarPropuesta.pcotiza.comentariosAdicionales?EvaluarPropuesta.pcotiza.comentariosAdicionales: \"ND\"}}\r\n\r\n        </div>\r\n        <div class=\"encabezadoGestion\">\r\n          Ingreso de Catálogo\r\n        </div>\r\n\r\n\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          FI: {{IngresoCatalogo.fechaInicio | dateFormatSlashHour}} FF:{{IngresoCatalogo.fechaFin | dateFormatSlashHour}} TT: {{IngresoCatalogo.totalProceso==1?IngresoCatalogo.totalProceso+\"\r\n          dia\": IngresoCatalogo.totalProceso+\" dias\"}}\r\n\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Ingresó\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          ND\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!--Seccion de  Seguimiento-->\r\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Seguimiento'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Historial\r\n        </div>\r\n\r\n        <div *ngFor=\"let historial of lstHistorial; let i = index\">\r\n\r\n\r\n\r\n          <div class=\"subencabezadoGestion\">\r\n            #{{(lstHistorial.length)-i}}\r\n          </div>\r\n          <div class=\"contenidoencabezadoGestion\">\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"subencabezadoGestion\">\r\n            Estado\r\n          </div>\r\n          <div class=\"contenidoencabezadoGestion\">\r\n            {{historial.estadoFinal?historial.estadoFinal: \"ND\"}}\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"subencabezadoGestion\">\r\n            {{historial.vendedor?historial.vendedor: \"ND\"}}\r\n          </div>\r\n          <div class=\"contenidoencabezadoGestion\">\r\n          </div>\r\n          <div class=\"subencabezadoGestion\">\r\n            Origen\r\n          </div>\r\n          <div class=\"contenidoencabezadoGestion\">\r\n            {{historial.estado?historial.estado: \"ND\"}}\r\n          </div>\r\n\r\n          <div class=\"subencabezadoGestion\">\r\n            Contacto\r\n          </div>\r\n          <div class=\"contenidoencabezadoGestion\">\r\n            {{historial.contacto?historial.contacto: \"ND\"}}\r\n          </div>\r\n\r\n          <div class=\"subencabezadoGestion\">\r\n            FER\r\n          </div>\r\n          <div class=\"contenidoencabezadoGestion\">\r\n            {{historial.fer | dateFormatSlashHour}}\r\n          </div>\r\n\r\n          <div class=\"subencabezadoGestion\">\r\n            FR\r\n          </div>\r\n          <div class=\"contenidoencabezadoGestion\">\r\n            {{historial.fr | dateFormatSlashHour}}\r\n          </div>\r\n\r\n\r\n          <div class=\"subencabezadoGestion\">\r\n            Comentarios\r\n          </div>\r\n          <div class=\"contenidoencabezadoGestion\">\r\n            {{historial.comentarios?historial.contacto: \"ND\"}}\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.scss":
/***/ (function(module, exports) {

module.exports = ".circuloverde{background:#91be5f;height:15px;width:15px;border-radius:15px 15px 15px 15px}.cuadroActivo{min-width:8px;background:#008895;height:100%}.circulorojo{background:#d0021b;height:15px;width:15px;border-radius:15px 15px 15px 15px}.encabezadoGestion{font-size:18px;color:#008895;margin-top:20px;margin-bottom:10px}.cont-timeLine{min-width:592px;background:#fff;padding:15px 20px}.cont-timeLine:hover{background-color:rgba(0,137,149,.05)}.cont-timeLineSelected{background-color:rgba(0,137,149,.05)}.subencabezadoGestion{font-size:16px;font-weight:400;color:#424242;margin-bottom:3px}.contenidoencabezadoGestion{font-size:16px;font-weight:200;color:#424242;margin-bottom:25px;cursor:default !important}:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(0,137,149,.02)}:host>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:#008895;height:41px;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;padding:0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(1)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;cursor:pointer}:host>div:nth-of-type(1)>div:nth-of-type(2){margin-left:20px}:host>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:calc(100vh - 170px);width:100%}:host>div:nth-of-type(2)>.panelNormal{background:#fff;height:100%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll}:host>div:nth-of-type(2)>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>div:nth-of-type(2)>.panelOcultar .filtros{display:none}:host>div:nth-of-type(2)>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}:host>div:nth-of-type(2) .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>div:nth-of-type(2) .filtroHeader>.abrir{cursor:pointer}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>div:nth-of-type(2) .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242}:host>div:nth-of-type(2) .filtros>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:50px;border-bottom:1px solid #eceef0;padding-top:15px;padding-bottom:20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .filtros>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;border-bottom:1px solid #eceef0;color:#fff;font-size:14px}:host>div:nth-of-type(2) .filtros>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:140px;height:25px;margin-right:1px}:host>div:nth-of-type(2) .filtros>.divAvanzada{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:130px;font-size:16px;color:#424242}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div>div{margin-top:6px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2){border-bottom:1px solid #424242;padding-bottom:18px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:53px;padding-top:10px;border-bottom:1px solid #eceef0}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding-bottom:18px;border-bottom:1px solid #424242}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2)>input{height:25px;border:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:5px}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2) .filtros>.detalleCliente{font-size:16px;color:#424242;font-weight:bold;margin-top:15px}:host>div:nth-of-type(2) .filtros>.detalleTitulo{font-size:16px;color:#424242;font-weight:400;margin-top:20px}:host>div:nth-of-type(2) .filtros>.detalleTexto{font-size:16px;color:#424242;font-weight:200}:host>div:nth-of-type(2) .filtros>.detalleTextoVerde{font-size:16px;color:#008895 !important;font-weight:300;cursor:pointer}:host>div:nth-of-type(2) .filtros>.detalleTextoVerde:hover{text-decoration:underline}:host>div:nth-of-type(2)>.contenidoFactura{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:calc(100vh - 170px);width:100%;overflow:scroll}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura{min-width:592px;padding:15px 20px}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(1){font-size:22px;font-weight:bold}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(2){margin-top:20px;border-top:1px solid #424242;border-bottom:1px solid #979797}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #fff}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(1){min-width:8px;background:transparent}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:5px 10px;width:100%;cursor:pointer}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:5px 0px}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2){-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div:hover{background-color:#fff}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActual{background-color:#fff;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActual>div:nth-of-type(1){min-width:8px;background:#008895}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActive{background-color:#fff}:host>div:nth-of-type(2)>.contenidoFactura>.detalleFactura>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;margin-top:15px;font-size:14px;color:#424242;font-weight:300}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo{min-width:592px;background:#fff;padding:15px 20px}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(1){font-size:22px;font-weight:bold;color:#008895}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2){margin-top:20px;border-top:1px solid #424242;border-bottom:1px solid #979797}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(1){min-width:8px;background:transparent}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 10px;width:100%}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1){font-size:18px;font-weight:bold;color:#424242;margin-bottom:15px}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2){font-size:16px;color:#008895;margin-bottom:2px}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3){font-size:16px;color:#f3b23f;margin-bottom:2px}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4){font-size:16px;color:#571c7b;margin-bottom:2px}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5){font-size:16px;color:#981e30;margin-bottom:2px}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>.divActive{background-color:rgba(0,137,149,.05)}:host>div:nth-of-type(2)>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>.divActive>div:nth-of-type(1){min-width:8px;background:#008895}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo{min-width:592px;padding-top:15px}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo>div:nth-of-type(1){font-size:22px;font-weight:bold;padding:0px 20px}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo>div:nth-of-type(2){border-top:1px solid #424242;margin:20px 20px;overflow:scroll;max-height:calc(100vh - 248px)}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div{border-bottom:1px solid #d8d8d8}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .titulo{font-size:18px;color:#008895;margin-top:20px;margin-bottom:10px}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .subTitulo{font-size:16px;font-weight:400;color:#424242;margin-bottom:3px}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normal{font-size:16px;font-weight:200;color:#424242;margin-bottom:25px;cursor:default !important}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde{font-size:16px;font-weight:200;margin-bottom:25px;color:#008895}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde>span{cursor:pointer}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde:hover>span{text-decoration:underline}:host>div:nth-of-type(2)>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde:hover>.normal{text-decoration:none}:host>div:nth-of-type(2)>div:nth-of-type(2){height:100%;width:100%;background:rgba(0,137,149,.02)}:host>div:nth-of-type(2)>.resultados{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:1s ease-in-out;transition:1s ease-in-out}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1){border-bottom:3px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(1){font-size:22px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2)>img{cursor:pointer;height:30px;width:30px}:host>div:nth-of-type(2)>.resultados>.sistema{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host>div:nth-of-type(2)>.resultados>.sistema>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1240px;min-height:57px}:host>div:nth-of-type(2)>.resultados>.sistema>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>div:nth-of-type(2)>.resultados>.sistema>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1520px}:host>div:nth-of-type(2)>.resultados>.sistema>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host>div:nth-of-type(2)>.resultados>.sistema>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}@-webkit-keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@-webkit-keyframes mostar{from{width:50px}to{width:321px}}@keyframes mostar{from{width:50px}to{width:321px}}"

/***/ }),

/***/ "./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gestion_consulta_cotizaciones_cotizacion_service__ = __webpack_require__("./src/app/services/gestion/consulta/cotizaciones/cotizacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CotizacionesComponent = /** @class */ (function () {
    function CotizacionesComponent(router, _gestionService, _cotizacionService, coreComponent) {
        var _this = this;
        this.router = router;
        this._gestionService = _gestionService;
        this._cotizacionService = _cotizacionService;
        this.coreComponent = coreComponent;
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.avanzada = true;
        this.itemsDropList = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.IsImage = true;
        this.Clear = true;
        this.IsDate = true;
        this.isThereData = false;
        this.lstPartidas = [];
        this.lstHistorial = [];
        this.lstTiempoProceso = [];
        this.PartidaSeleccionada = 0;
        this.lineaSeleccionada = 0;
        this.DatosFill1 = {
            Fechas: {
                fechaInicial: new Date(),
                fechaFinal: new Date(),
            }
        };
        this.detalle = false;
        this.txtCotizacion = "";
        this.lstCotizaciones = [];
        this.Clientes = [{ nombre: '--TODOS--', key: 0 }];
        //LLENADO DE COMPONENTE PARA FILTROS
        this.Llenar = function () {
            var newListProveedor = [];
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cliente", _this.Clientes, true),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cotizó", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'BArias', key: 1 },
                    { nombre: 'BGuevara', key: 2 },
                    { nombre: 'BLozada', key: 3 },
                    { nombre: 'CEJuarez', key: 4 },
                    { nombre: 'DPeralta', key: 5 },
                    { nombre: 'FCTovar', key: 6 },
                    { nombre: 'GETorres', key: 7 },
                    { nombre: 'JIOlvera', key: 8 },
                    { nombre: 'LHernandez', key: 9 },
                    { nombre: 'LVera', key: 10 },
                    { nombre: 'MNava', key: 11 },
                    { nombre: 'MRMoreno', key: 12 },
                    { nombre: 'MTorres', key: 13 },
                    { nombre: 'NVGomez', key: 14 },
                    { nombre: 'RThome', key: 15 },
                    { nombre: 'SVergara', key: 16 },
                    { nombre: 'YCervantes', key: 17 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Medio de Envío", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Correo', key: 1 },
                    { nombre: 'Fax', key: 2 },
                    { nombre: 'Pendiente', key: 3 },
                ], false),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Cerrado', key: 1 },
                    { nombre: 'Abierto', key: 2 },
                ], false),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
    }
    //METODOS QUE SE CARGAN AL ENTRAR EL COMPONENTE
    CotizacionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this.date = new Date();
        this.date2 = new Date();
        this.date = new Date();
        this.date2 = new Date();
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
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
        this._gestionService.dropClientes().subscribe(function (data) {
            _this.lstClientes = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstClientes; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.Clientes = _this.Clientes.concat(lstAux);
            var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
            parametros.finicio = new Date();
            parametros.ffin = new Date();
            var cotizacion = {
                folioCotizacion: null,
                estado: "--TODOS--",
                nombreCliente: "--TODOS--",
                msalida: "--TODOS--",
                cotizo: "--TODOS--"
            };
            parametros.cotizacion = cotizacion;
            parametros.idEmpleado = 27;
            console.log(_this.txtCotizacion);
            _this._cotizacionService.listaCotizacionesAvanzada(parametros).subscribe(function (data) {
                _this.coreComponent.closeModal(0);
                _this.lstCotizaciones = data.current;
                console.log(_this.lstCotizaciones);
            }, function (error) {
                console.log("error al obtener cotización por folio");
                _this.coreComponent.closeModal(0);
            });
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    CotizacionesComponent.prototype.regresarConsulta = function () {
        this.detalle = false;
    };
    CotizacionesComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    CotizacionesComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    CotizacionesComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    CotizacionesComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    CotizacionesComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
    };
    CotizacionesComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
    };
    CotizacionesComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    CotizacionesComponent.prototype.dropList = function (index, $event) {
    };
    CotizacionesComponent.prototype.mostrarDatos = function ($event) {
        console.log($event);
        this.Avanzada($event);
    };
    CotizacionesComponent.prototype.Rapida = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.idEmpleado = 0;
        var cotizacion = {
            folioCotizacion: this.txtCotizacion,
            estado: "--TODOS--",
            nombreCliente: "--TODOS--",
            msalida: "--TODOS--",
            cotizo: "--TODOS--"
        };
        parametros.cotizacion = cotizacion;
        parametros.idEmpleado = 27;
        console.log(this.txtCotizacion);
        this._cotizacionService.listaCotizacionesAvanzada(parametros).subscribe(function (data) {
            _this.lstCotizaciones = data.current;
            console.log(_this.lstCotizaciones);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error al obtener cotización por folio");
            _this.coreComponent.closeModal(0);
        });
    };
    CotizacionesComponent.prototype.Avanzada = function (Datos) {
        var _this = this;
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = Datos.Fechas.fechaInicial;
        parametros.ffin = Datos.Fechas.fechaFinal;
        parametros.idEmpleado = 0;
        var cotizacion = {
            folioCotizacion: "",
            estado: Datos.Datos[3].nombre,
            nombreCliente: Datos.Datos[0].nombre,
            msalida: Datos.Datos[2].nombre,
            cotizo: Datos.Datos[1].nombre
        };
        parametros.cotizacion = cotizacion;
        parametros.idEmpleado = 27;
        this._cotizacionService.listaCotizacionesAvanzada(parametros).subscribe(function (data) {
            _this.lstCotizaciones = data.current;
            console.log(_this.lstCotizaciones);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error login");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    //Función para convertir JSON en formato CSV
    CotizacionesComponent.prototype.ConvertToCSV = function (objArray) {
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
    CotizacionesComponent.prototype.buscarcomas = function (cadena) {
        var cadenaSinComas;
        var coma = ",";
        var espacio = "";
        cadenaSinComas = cadena.replace(coma, espacio);
        return cadenaSinComas;
    };
    // Función de descarga de archivo CSV 
    CotizacionesComponent.prototype.download = function () {
        var _this = this;
        if (this.lstCotizaciones.length > 0) {
            var lstCompras2_1 = [];
            this.lstCotizaciones.forEach(function (cotizacion, index) {
                var ObjAux = {
                    '#': (index + 1),
                    'Fecha': cotizacion.fecha,
                    'Cliente': _this.buscarcomas(cotizacion.nombreCliente),
                    'Contacto': cotizacion.contacto,
                    'Medio de Envío': cotizacion.msalida,
                    'Cotizó': cotizacion.cotizo,
                    'Cotización': cotizacion.folioCotizacion,
                    'Requisición': cotizacion.requisicion,
                    'Estado': cotizacion.estado,
                    'Enviado': (cotizacion.enTiempoFueraDeTiempo == true ? 'ET' : 'FT'),
                };
                lstCompras2_1.push(ObjAux);
            });
            var csvData = this.ConvertToCSV(lstCompras2_1);
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'ConzultaCotizacion-' + this.fechaDescarga(new Date()) + '.csv';
            a.click();
        }
        else {
            console.log("No existen Cotizaciones");
        }
    };
    CotizacionesComponent.prototype.fechaDescarga = function (fechaE) {
        var now = new Date(fechaE);
        var date;
        var mes = now.getMonth();
        switch (mes) {
            case 0:
                date = now.getDate() + 'Ene' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 1:
                date = now.getDate() + 'Feb' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 2:
                date = now.getDate() + 'Mar' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 3:
                date = now.getDate() + 'Abr' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 4:
                date = now.getDate() + 'May' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 5:
                date = now.getDate() + 'Jun' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 6:
                date = now.getDate() + 'Jul' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 7:
                date = now.getDate() + 'Ago' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 8:
                date = now.getDate() + 'Sep·' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 9:
                date = now.getDate() + 'Oct' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 10:
                date = now.getDate() + 'Nov' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 11:
                date = now.getDate() + 'Dic' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            default:
                break;
        }
        return date;
    };
    //*************Seccion para trabajar con Detalle Cotizacion***************+
    CotizacionesComponent.prototype.verDetalle = function (item) {
        console.log("Cotización seleccionada");
        console.log(item);
        this.Cotizacion_Detalle = item;
        this.ObtenerPartidas(item);
        this.detalle = true;
    };
    CotizacionesComponent.prototype.ObtenerPartidas = function (item) {
        var _this = this;
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.folio = item.folioCotizacion;
        this._cotizacionService.listaPartidasXFolioCotizacion(parametros).subscribe(function (data) {
            _this.lstPartidas = data.current;
            console.log(_this.lstPartidas);
            _this.obtenerTiempoProceso(data.current[0], 0, 1);
        }, function (error) {
            console.error("Error al obtener Partidas", error);
            _this.coreComponent.closeModal(0);
        });
    };
    CotizacionesComponent.prototype.obtenerTiempoProceso = function (Partida, index, firstTime) {
        var _this = this;
        if (firstTime != 1) {
            this.coreComponent.openModal(0);
        }
        this.PartidaSeleccionada = 0;
        this.PartidaSeleccionada = index;
        console.log("Tiempo Proceso", Partida);
        var idPcotiza = Partida.idPCotiza;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        console.log("idpCotiza" + idPcotiza);
        parametros.idpcotiza = idPcotiza;
        var ArreAUX = [];
        this._cotizacionService.listaTiempoProcesoPartidas(parametros).subscribe(function (data) {
            data.current.forEach(function (TiempoProceso) {
                if (TiempoProceso.proceso != "Evaluar respuesta" && TiempoProceso.proceso != "Ingresó en catálogo") {
                    TiempoProceso.responsable = TiempoProceso.responsable.toUpperCase();
                    ArreAUX.push(TiempoProceso);
                }
                else {
                    if (TiempoProceso.proceso == "Evaluar respuesta") {
                        _this.EvaluarPropuesta = TiempoProceso;
                    }
                    else {
                        if (TiempoProceso.proceso == "Ingresó en catálogo") {
                            _this.IngresoCatalogo = TiempoProceso;
                        }
                    }
                }
            });
            console.log("EvaluarProp", _this.EvaluarPropuesta);
            console.log("EvaluarProp", _this.IngresoCatalogo);
            _this.lstTiempoProceso = ArreAUX;
            console.log(_this.lstTiempoProceso);
            console.log("Partidas", _this.lstPartidas[_this.PartidaSeleccionada].idPCotiza);
            _this.ProcesoSeleccionado = _this.lstTiempoProceso[0];
            _this.ObtenerHistorial(_this.lstPartidas[_this.PartidaSeleccionada].idPCotiza);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.error("Error en la consulta del tiempo proceso", error);
            _this.coreComponent.closeModal(0);
        });
    };
    CotizacionesComponent.prototype.ObtenerHistorial = function (index) {
        var _this = this;
        var idPcotiza = index;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.idpcotiza = idPcotiza;
        this._cotizacionService.listaHistorialXPartidaXidPcotiza(parametros).subscribe(function (data) {
            _this.lstHistorial = data.current;
            console.log(_this.lstHistorial);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.error("Error en la carga del historial ", error);
            _this.coreComponent.closeModal(0);
        });
    };
    //Abrir PDF 
    CotizacionesComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    CotizacionesComponent.prototype.SeleccionarProceso = function (Proceso, index) {
        this.ProcesoSeleccionado = Proceso;
        this.lineaSeleccionada = index;
        console.log("Proceso Seleccionado", this.ProcesoSeleccionado);
    };
    CotizacionesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-cotizaciones',
            template: __webpack_require__("./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_5__services_gestion_consulta_cotizaciones_cotizacion_service__["a" /* CotizacionService */], __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], CotizacionesComponent);
    return CotizacionesComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/cotizaciones/cotizaciones.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionesModule", function() { return CotizacionesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cotizaciones_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/cotizaciones/cotizaciones-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cotizaciones_component__ = __webpack_require__("./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.ts");
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











var CotizacionesModule = /** @class */ (function () {
    function CotizacionesModule() {
    }
    CotizacionesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__cotizaciones_routing_module__["a" /* CotizacionesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__cotizaciones_component__["a" /* CotizacionesComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__cotizaciones_component__["a" /* CotizacionesComponent */]
            ]
        })
    ], CotizacionesModule);
    return CotizacionesModule;
}());



/***/ })

});
//# sourceMappingURL=cotizaciones.module.chunk.js.map