webpackJsonp(["compras.module"],{

/***/ "./src/app/components/gestion/consultas/compras/compras-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compras_component__ = __webpack_require__("./src/app/components/gestion/consultas/compras/compras.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComprasRoutingModule = /** @class */ (function () {
    function ComprasRoutingModule() {
    }
    ComprasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__compras_component__["a" /* ComprasComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ComprasRoutingModule);
    return ComprasRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/compras.component.html":
/***/ (function(module, exports) {

module.exports = "<!--060418-2501-->\r\n<div>\r\n  <div (click)=\"backMenu()\">\r\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\r\n  </div>\r\n  |\r\n  <div *ngIf=\"!detalle\">CONSULTA DE COMPRAS </div>\r\n  <div *ngIf=\"detalle\" (click)=\"regresarConsulta()\" class=\"regresar\" style=\"  margin-right: 20px;\">CONSULTA DE COMPRAS </div>\r\n  <div *ngIf=\"detalle\" style=\"  margin-right: 20px;\">|</div>\r\n  <div *ngIf=\"detalle\">DETALLES</div>\r\n</div>\r\n<div *ngIf=\"!detalle\">\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"filtros\">\r\n      <div style=\"display: none;\">\r\n        <!--  <pq-radio-button [widthTotal]=\"'100px'\" [lstItems]=\"lstItems\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\" (emitItem)=\"emitItem($event)\"></pq-radio-button>\r\n      -->\r\n      </div>\r\n      <div>\r\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\r\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\r\n      </div>\r\n\r\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\r\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\r\n            Y la propiedad IsLoader como verdadera\r\n          -->\r\n        <div *ngIf=\"isThereData;else loader\">\r\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\r\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\"></gestion-filter>\r\n        </div>\r\n\r\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\r\n            una propiedad\r\n            IsLoader como Falsa-->\r\n        <ng-template #loader>\r\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\r\n        <div style=\"display: none\">\r\n\r\n        </div>\r\n\r\n        <div>\r\n          <span>Orden de compra</span>\r\n          <input [(ngModel)]=\"txtFactura\" type=\"text\">\r\n        </div>\r\n\r\n        <div (click)=\"ConsultaEspecifica(txtFactura)\">\r\n          <img height=\"20px\" (click)=\"ConsultaEspecifica(txtFactura)\" src=\"assets/Images/visualizar.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"resultados w3-animate-left \" *ngIf=\"isTableShow;else ShowGraphic\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\r\n    <div>\r\n      <div>\r\n        RESULTADOS\r\n      </div>\r\n      <div>\r\n        <img height=\"20px\" width=\"20px\" (click)=\"download()\" src=\"assets/Images/exportar.svg\" alt=\"\">\r\n        <img [style.margin-right]=\"'15px'\" (click)=\"showGraphic()\" height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/images/graficaminigris.svg\"\r\n          alt=\"\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"lstCompras\" class=\"sistema \">\r\n      <div>\r\n        <div [style.min-width]=\"'50px'\">#</div>\r\n        <div [style.min-width]=\"'160px'\">OC</div>\r\n        <div [style.min-width]=\"'160px'\">Proveedor</div>\r\n        <div [style.min-width]=\"'160px'\">Compró</div>\r\n        <div [style.min-width]=\"'160px'\">Colocó</div>\r\n        <div [style.min-width]=\"'160px'\">Comprador</div>\r\n        <div [style.min-width]=\"'160px'\">Estado</div>\r\n        <div [style.min-width]=\"'30px'\"></div>\r\n      </div>\r\n      <div>\r\n        <div *ngFor=\"let item of lstCompras; let i = index\">\r\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.clave}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.nombreProveedor}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.empresa}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.colocarDesde}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.comprador}}</div>\r\n          <div [style.min-width]=\"'160px'\">{{item.abierto_cerrado}}</div>\r\n          <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\r\n            <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"total\">\r\n      <p>Total:\r\n        <span>{{lstCompras.length}}</span>\r\n        <span>Compra\r\n          <span *ngIf=\"lstCompras.length != 1\">s</span>\r\n        </span>\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--Elemento Que muestra la vista Grafica-->\r\n  <ng-template #ShowGraphic>\r\n    <div class=\"w3-animate-right GlobalContainer-graphic-Component\" style=\"overflow:hidden;\">\r\n\r\n      <!--Elemento Que muestra los gráficos-->\r\n      <div class=\"GraphicsContainer-graphic-Component\" style=\"overflow-y: scroll\">\r\n\r\n        <div class=\"OnceGraphic-graphic-Component\" style=\"overflow: auto\">\r\n          <pq-graficas-dona [id]=\"id1\" [Refresh]=\"refresh\" [grafica1]=\"Grafico1\" [opcion]=\"0\"></pq-graficas-dona>\r\n        </div>\r\n      </div>\r\n      <div class=\"Filter-Container-graphic-Component\">\r\n        <div class=\"Tabgraphic-Component\" (click)=\"showTable()\">\r\n          <img height=\"16.2px\" width=\"20.4px\" src=\"assets/Images/gestion/images/tablaminibca.svg\" alt=“”>\r\n        </div>\r\n        <!--contenedor principal para los filtros de los graficos-->\r\n        <div class=\"Main-Container-filter-graphic-Component\">\r\n          <!--Encabezado Totales-->\r\n          <div class=\"totals-filter-graphic-Component\">\r\n            TOTALES\r\n\r\n\r\n\r\n\r\n\r\n            <br>\r\n          </div>\r\n          <!--Resultados de los filtros-->\r\n          <div class=\"Results-filter-graphic-Component\">\r\n\r\n\r\n            <div class=\"Contenedor-Paneles\">\r\n              <div class=\"Panel-Izq\">\r\n                <img width=\"21.4px\" src=\"assets/Images/gestion/images/verdeflecha.png\" alt=\"\">\r\n              </div>\r\n\r\n              <div class=\"Panel-Derecho\">\r\n                Monto USD:\r\n                <br>\r\n                <p class=\"total\"> $470,194.28</p>\r\n                <p class=\"azul\">$470,194.28</p>\r\n                <p class=\"morado\">$470,194.28</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"Contenedor-Paneles\">\r\n              <div class=\"Panel-Izq\">\r\n                <img width=\"21.4px\" src=\"assets/Images/gestion/images/rojoflecha.png\" alt=\"\">\r\n              </div>\r\n\r\n              <div class=\"Panel-Derecho\">\r\n                No. Compra:\r\n                <br>\r\n                <p class=\"total\"> $470,194.28</p>\r\n                <p class=\"azul\">$470,194.28</p>\r\n                <p class=\"morado\">$470,194.28</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"Contenedor-Paneles\">\r\n              <div class=\"Panel-Izq\">\r\n                <img width=\"21.4px\" src=\"assets/Images/gestion/images/verdeflecha.png\" alt=\"\">\r\n              </div>\r\n\r\n              <div class=\"Panel-Derecho\">\r\n                Total Piezas:\r\n                <br>\r\n                <p class=\"total\"> $470,194.28</p>\r\n                <p class=\"azul\">$470,194.28</p>\r\n                <p class=\"morado\">$470,194.28</p>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <br>\r\n          </div>\r\n          <!--Dobles filtros-->\r\n          <div class=\"filters-graphic-Component\">\r\n\r\n\r\n            <div class=\"content2dates\" style=\" width:100%;height: 25%; display: flex; flex-wrap: wrap\">\r\n\r\n\r\n              <div style=\"width: 10%;height: 100%; display: flex;  justify-content: center;  align-items: center; align-content: center;\">\r\n                <div class=\"dotAzul\"></div>\r\n              </div>\r\n              <div style=\"display: flex;flex-wrap: wrap; width: 80%; justify-content: space-between;;; height: 100%; align-content: center; align-items: center;\">\r\n                <div>\r\n                  Del\r\n                  <div>\r\n                    <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date3\" dateFormat=\"YYYYMMDD\"></pq-date-picker>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div>\r\n                  Al\r\n                  <div>\r\n                    <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date4\" dateFormat=\"YYYYMMDD\"></pq-date-picker>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <br>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"content2dates\" style=\" width:100%;height: 25%; display: flex; flex-wrap: wrap\">\r\n\r\n\r\n              <div style=\"width: 10%;height: 100%; display: flex; justify-content: center; align-items: center; align-content: center;\">\r\n                <div class=\"dotMorado\"></div>\r\n              </div>\r\n              <div style=\"display: flex;flex-wrap: wrap; width: 80%; justify-content: space-between;;; height: 100%; align-content: center; align-items: center;\">\r\n                <div>\r\n                  Del\r\n                  <div>\r\n                    <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date3\" dateFormat=\"YYYYMMDD\"></pq-date-picker>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div>\r\n                  Al\r\n                  <div>\r\n                    <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date4\" dateFormat=\"YYYYMMDD\"></pq-date-picker>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <br>\r\n            </div>\r\n\r\n            <div style=\"width:90%;display: flex; justify-content:center;\">\r\n              <div style=\"width: 235px;; height: 35px;background: white; display: flex; justify-content: center; align-content: center; align-items: center;cursor: pointer;\">\r\n\r\n\r\n                <img class=\"img-filter2\" height=\"24px\" src=\"assets/Images/gestion/images/reloadAzul.svg\" alt=\"\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n<!--Sección de detalles-->\r\n<div *ngIf=\"detalle\" class=\"consultaDetalles\">\r\n  <div [ngClass]=\"classPanel\">\r\n    <div class=\"filtroHeader\">\r\n      <div class=\"abrir\" (click)=\"openPanel()\">\r\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\r\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\r\n      </div>\r\n      <div *ngIf=\"hiddenClose\">\r\n        CERRAR\r\n        <div class=\"cerrar\" (click)=\"closePanel()\">\r\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"filtros\">\r\n      <div class=\"detalleCliente\"> {{CompraDetalle.nombreProveedor}} </div>\r\n      <div style=\"height: 0.1px; margin: 0.1px;\"></div>\r\n      <div class=\"detalleTitulo\">OC:</div>\r\n      <div class=\"detalleTexto\" style=\"color:#008895; cursor:pointer\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Ordenes de compra/'+CompraDetalle.clave+'-P.pdf')\">\r\n      {{CompraDetalle.clave}} </div>\r\n      <div class=\"detalleTitulo\">Colocó:</div>\r\n      <div class=\"detalleTexto\">{{CompraDetalle.colocarDesde}}</div>\r\n      <div class=\"detalleTitulo\">Comprò:</div>\r\n      <div class=\"detalleTexto\">{{CompraDetalle.empresa}}</div>\r\n      <div class=\"detalleTitulo\">Fecha de Comfirmación</div>\r\n      <div class=\"detalleTexto\">{{CompraDetalle.fechaConfirmacion | dateFormatSlashHour}}</div>\r\n      <div class=\"detalleTitulo\">Fecha de colocación:</div>\r\n      <div class=\"detalleTexto\">{{CompraDetalle.fecha | dateFormatSlashHour}}</div>\r\n      <div class=\"detalleTitulo\">Comprobador:</div>\r\n      <div class=\"detalleTexto\">{{CompraDetalle.comprador}}</div>\r\n      <div class=\"detalleTitulo\">Monto total de compra:</div>\r\n      <div class=\"detalleTexto\">{{CompraDetalle.montoTotalDolares | acFormatMoney}} USD</div>\r\n      <div class=\"detalleTitulo\">Total de piezas:</div>\r\n      <div class=\"detalleTexto\">{{CompraDetalle.totalPiezas}}</div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"hiddenClose\" style=\"width: 100%; opacity: 1;margin-top: 40px;background: transparent;color:#008895;;display:flex;flex-direction: column; justify-content: center;align-content: center; align-items: center\">\r\n\r\n      Recibido ET vs FT\r\n      <div style=\"width: 70%;height:60%; opacity: 1;;background: transparent;margin-top: 20px;;display:flex; justify-content: center;align-content: center; align-items: center; position: relative\">\r\n        <div style=\"width:60%;height:10vh;background:transparent;position:absolute;text-align:center; margin-top:10%;font-size:12px;\r\n          border-radius: 100%;\">Totales\r\n          <p style=\"font-size: 10px;margin-top: 20px;color: #424242 \">\r\n            Monto total: {{montototalGraficaDetalle | acFormatMoney}} USD\r\n          </p>\r\n\r\n          <p style=\"font-size: 10px;color: #424242 \">\r\n            Partidas: {{nPartidas}}\r\n          </p>\r\n\r\n\r\n          <p style=\"font-size: 10px;color: #424242 \">\r\n            Piezas:{{TotalPiezasPartidasDetalle}}\r\n          </p>\r\n\r\n        </div>\r\n        <div>\r\n\r\n          <div style=\"min-width: 300px;min-height: 200px;\">\r\n            <canvas id=\"graficoIndividual\"></canvas>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"contenidoFactura\">\r\n    <div class=\"detalleFactura\" style=\"justify-content: center; background: transparent;overflow-y: auto\">\r\n      <div style=\"background: transparent; justify-content: center\">OC {{CompraDetalle.clave}} </div>\r\n      <div>\r\n        <!--  lista de Compras-->\r\n        <div [ngClass]=\"i==0?'divActual':''\" *ngFor=\"let item of lstPartidas; let i = index\" (click)=\"resumenFactura(i)\">\r\n          <div class=\"dfSelect\"></div>\r\n          <div>\r\n            <div>\r\n              <div *ngIf=\"item.totalPiezas==1\" [style.color]=\"'#008895'\">#{{(i+1)+\" - \"+item.totalPiezas +\"Pza - \"}}{{item.montoTotal | acFormatMoney}} USD </div>\r\n\r\n              <div *ngIf=\"item.totalPiezas!=1\" [style.color]=\"'#008895'\">#{{(i+1)+\" - \"+item.totalPiezas +\"Pzas - \"}}{{item.montoTotal | acFormatMoney}} USD </div>\r\n              <div></div>\r\n            </div>\r\n            <div>\r\n              <div style=\"width: 65%\">{{item.descripcionProducto}}</div>\r\n\r\n              <div style=\"width: 5%\"></div>\r\n              <div style=\"width:30%\">FEE: {{item.fechaEstimadaEntrega| dateFormatSlash}}\r\n              </div>\r\n\r\n            </div>\r\n            <div>\r\n              <div style=\"opacity: 0.5;\">PU {{item.costo| acFormatMoney}} USD </div>\r\n              <div></div>\r\n            </div>\r\n\r\n            <div>\r\n              <div style=\"width:70%\"> {{item.destino}} </div>\r\n              <div *ngIf=\"item.abierto;else cerrado\" style=\"width:19%; color:red; text-align: center\"> Abierto</div>\r\n              <ng-template #cerrado>\r\n                <div style=\"width:19%; color:#91BE5F; text-align: center\"> Cerrado</div>\r\n              </ng-template>\r\n            </div>\r\n\r\n            <div>\r\n\r\n              <!--Aqui se muestra otra ventana\r\n              http://201.161.12.60:51725/SAP/Pedidos/062218-5141.pdf\r\n              -->\r\n              <div style=\"color:#008895; width:70%\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+item.pedido+'.pdf')\">\r\n              {{item.pedido}} </div>\r\n\r\n\r\n              <div *ngIf=\"item.estado=='Recibido'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}\r\n                <span style=\"color:#91BE5F \"> ET</span>\r\n              </div>\r\n\r\n              <div *ngIf=\"item.estado=='BackOrder'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}\r\n                <span style=\"color:#D0021B  \"> FT</span>\r\n              </div>\r\n\r\n              <div *ngIf=\"item.estado!='BackOrder'&&item.estado!='Recibido'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 100%; height: 100px;display: flex;flex-wrap: wrap; justify-content: center;align-content: center;align-items: center; background: transparent\">\r\n          <div style=\"background: transparent\">\r\n            {{lstPartidas.length==1?lstPartidas.length+\" Partida\" :lstPartidas.length+\" Partidas\" }}\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"lineaTiempo\">\r\n\r\n\r\n      <div *ngIf=\"lstPartidas[PartidaSeleccionada].totalPiezas==1\">\r\n        # {{(PartidaSeleccionada+1)}}-{{lstPartidas[PartidaSeleccionada].totalPiezas +\"Pieza\" }}</div>\r\n      <div *ngIf=\"lstPartidas[PartidaSeleccionada].totalPiezas!=1\">\r\n        # {{(PartidaSeleccionada+1)}}-{{lstPartidas?lstPartidas[PartidaSeleccionada].totalPiezas:\"\" }}-Piezas</div>\r\n\r\n      <div [ngClass]=\"i==lineaSeleccionada?'cont-timeLine cont-timeLineSelected':'cont-timeLine'\" *ngFor=\"let item of lstTiempoProceso; let i = index\"\r\n        (click)=\"SeleccionarLinea(i)\" style=\"border-bottom: none; cursor: pointer;display: flex;flex-direction: row; min-width: 564px\">\r\n        <br>\r\n\r\n\r\n        <div *ngIf=\"lineaSeleccionada==i\" class=\"cuadroActivo\" style=\"min-width: 8px;\r\nbackground: #008895;\r\nmin-height:150px; display: flex; flex-direction: column\">\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"lineaSeleccionada!=i\" class=\"cuadroActivo\" style=\"min-width: 8px;\r\nbackground: transparent;\r\nmin-height:150px; display: flex; flex-direction: column\">\r\n\r\n        </div>\r\n\r\n        <div style=\"display: flex;\r\n                          flex-direction: column;  padding-left: 1rem\">\r\n\r\n          <div style=\"font-size: 18px;width: 100%;\r\n                  font-weight: bold;\r\n                  color: #424242;\r\n                  margin-bottom: 15px;display: flex; justify-content: space-between\">\r\n            <div style=\"width: 90%; min-width: 520px;\">\r\n              {{item.etapa}}\r\n            </div>\r\n\r\n            <div *ngIf=\"item.fechaFin !=null\" class=\"circuloverde\"></div>\r\n\r\n            <div *ngIf=\"item.fechaFin ==null\" class=\"circulorojo\"></div>\r\n          </div>\r\n\r\n          <div style=\"    font-size: 16px;\r\n                  color: #008895;\r\n                  margin-bottom: 5px;margin-bottom: 2px\">{{item.responsable}}</div>\r\n          <div style=\"    font-size: 16px;\r\n                  color: #F3B23F;\r\n                  margin-bottom: 5px;\">FI {{item.fechaInicio | dateFormatSlash}}</div>\r\n          <div style=\"    font-size: 16px;\r\n                  color: #571C7B;\r\n                  margin-bottom: 5px;\">FF {{item.fechaFin | dateFormatSlash}}</div>\r\n          <div style=\"    font-size: 16px;\r\n                  color: #981E30;\r\n                  margin-bottom: 5px;\">TT {{item.totalProceso}} día\r\n            <span *ngIf=\"item.totalProceso != 1\">s</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <hr>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"detalleTiempo\">\r\n      <div style=\"display: flex;\">\r\n        <div style=\"width: 90%\">\r\n          {{lstTiempoProceso[lineaSeleccionada].etapa}}\r\n        </div>\r\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].fechaFin !=null\" class=\"circuloverde\"></div>\r\n\r\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].fechaFin ==null\" class=\"circulorojo\"></div>\r\n\r\n\r\n      </div>\r\n      <!--Seccion de Tramitacion -->\r\n      <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].etapa=='TRAMITACIÓN'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Tramitación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaTramitacion | dateFormatSlashHour}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          OC\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ lstTiempoProceso[lineaSeleccionada].referencia?lstTiempoProceso[lineaSeleccionada].referencia: \"ND\"}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Proveedor\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ lstTiempoProceso[lineaSeleccionada].proveedor?lstTiempoProceso[lineaSeleccionada].proveedor: \"ND\"}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Compró\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ lstTiempoProceso[lineaSeleccionada].fpor?lstTiempoProceso[lineaSeleccionada].fpor: \"ND\"}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Contacto\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ lstTiempoProceso[lineaSeleccionada].contacto?lstTiempoProceso[lineaSeleccionada].contacto: \"ND\"}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Comprador\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ lstTiempoProceso[lineaSeleccionada].responsable?lstTiempoProceso[lineaSeleccionada].responsable: \"ND\"}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Tráfico\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ lstTiempoProceso[lineaSeleccionada].trafico?lstTiempoProceso[lineaSeleccionada].trafico: \"ND\"}}\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <!--Seccion de confirmacion-->\r\n\r\n      <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].etapa=='CONFIRMACIÓN'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de colocación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaInicio | dateFormatSlashHour}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de confirmación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaFin | dateFormatSlashHour}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Colocó\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ lstTiempoProceso[lineaSeleccionada].responsable?lstTiempoProceso[lineaSeleccionada].responsable: \"ND\"}}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Comentarios de la confirmación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{ lstTiempoProceso[lineaSeleccionada].comentariios?lstTiempoProceso[lineaSeleccionada].comentariios: \"ND\"}}\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <!--Seccion de importacioón-->\r\n\r\n      <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].etapa=='IMPORTACIÓN'\">\r\n        <div class=\"encabezadoGestion\">\r\n          Generales\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Arribo Tránsito\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaInicio | dateFormatSlashHour}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Arribo Matriz\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaFin | dateFormatSlashHour}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          No. Pedimento\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].pedimento ?lstTiempoProceso[lineaSeleccionada].pedimento :\"ND\" }}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Orden de despacho\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].ordenDespacho ?lstTiempoProceso[lineaSeleccionada].ordenDespacho :\"ND\" }}\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Aduana\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].aduna?lstTiempoProceso[lineaSeleccionada].aduna:\"ND\" }}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Agente aduanal\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].agenteAduanal?lstTiempoProceso[lineaSeleccionada].agenteAduanal:\"ND\" }}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fletera\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].feltera?lstTiempoProceso[lineaSeleccionada].fletera:\"ND\" }}\r\n        </div>\r\n\r\n        <hr style=\"opacity: .5\">\r\n\r\n        <div class=\"encabezadoGestion\">\r\n          DECLARAR ARRIBO TRÁNSITO\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Arribo Tránsito\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaInicio | dateFormatSlashHour}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Lista de Arribo</div>\r\n\r\n        <!--Aqui se abre una nueva ventana con url\r\n          http://201.161.12.60:51725/SAP/ListaArribo/LA-062018-3560.pdf\r\n          -->\r\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].folio!=null\" class=\"contenidoencabezadoGestion \" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/ListaArribo/'+lstTiempoProceso[lineaSeleccionada].folio+'.pdf')\"\r\n          style=\"color: #008895;cursor:pointer;\">\r\n          {{lstTiempoProceso[lineaSeleccionada].folio }}\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].folio==null\" class=\"contenidoencabezadoGestion \">\r\n          ND\r\n\r\n        </div>\r\n\r\n        <hr style=\"opacity: .5\">\r\n        <div class=\"encabezadoGestion\">\r\n          DESPACHO\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Planificación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaPlanificacion | dateFormatSlashHour}}\r\n\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de registro de despacho</div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          Pendiente\r\n        </div>\r\n        <!--\r\n            Aqui se abre una nueva ventana por url \r\n            http://201.161.12.60:51725/SAP/OrdenDespacho/OD-061918-0906/1618%208000523.pdf\r\n          -->\r\n        <div class=\"subencabezadoGestion\">\r\n          No. pedimento</div>\r\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].pedimento!=null\" class=\"contenidoencabezadoGestion \" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/OrdenDespacho/'+lstTiempoProceso[lineaSeleccionada].ordenDespacho+'/'+lstTiempoProceso[lineaSeleccionada].pedimento+'.pdf')\"\r\n          style=\"color: #008895;cursor:pointer;\">\r\n\r\n          {{lstTiempoProceso[lineaSeleccionada].pedimento ?lstTiempoProceso[lineaSeleccionada].pedimento :\"ND\" }}\r\n        </div>\r\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].pedimento==null\" class=\"contenidoencabezadoGestion\">\r\n          ND\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Pedimento</div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaPedimento | dateFormatSlash}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Referencia</div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].referencia ?lstTiempoProceso[lineaSeleccionada].referencia :\"ND\" }}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Guia de Embarque</div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{lstTiempoProceso[lineaSeleccionada].guiaEmbarque ?lstTiempoProceso[lineaSeleccionada].guiaEmbarque :\"ND\" }}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Salida de Aduana</div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaSalidaAduana | dateFormatSlashHour}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha Estimada de Arribo</div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaEstimadaArribo | dateFormatSlashHour}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Comprador que recibe</div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].responsable ?lstTiempoProceso[lineaSeleccionada].responsable :\"ND\" }}\r\n        </div>\r\n\r\n        <hr style=\"opacity: .5\">\r\n\r\n        <div class=\"encabezadoGestion\">\r\n          REGISTRO ARRIBO\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Registro\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaFin | dateFormatSlashHour}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Recibió\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].responsable ?lstTiempoProceso[lineaSeleccionada].responsable :\"ND\" }}\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <!--Seccion de  TRÁNSITO PHS-->\r\n\r\n      <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].etapa=='TRÁNSITO PHS'\">\r\n        <div class=\"encabezadoGestion\">\r\n          TRÁNSITO PHS\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          FI {{lstTiempoProceso[lineaSeleccionada].fechaInicio | dateFormatSlashHour}} : FF {{lstTiempoProceso[lineaSeleccionada].fechaFin\r\n          | dateFormatSlashHour}} : TT {{lstTiempoProceso[lineaSeleccionada].id==1?lstTiempoProceso[lineaSeleccionada].id\r\n          +\" dia\":lstTiempoProceso[lineaSeleccionada].id +\" dias\"}}\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n\r\n          FEA PHS\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaEsperadaArribo | dateFormatSlash}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          FRA PHS\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          Pendiente\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <!--Seccion de RECIBIDO-->\r\n\r\n      <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].etapa=='RECIBIDO'\">\r\n        <div class=\"encabezadoGestion\">\r\n          GENERALES\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          Fecha de Tramitación\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaInicio | dateFormatSlashHour}}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          FRA PHS\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaFin | dateFormatSlashHour}}\r\n        </div>\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          FEE\r\n        </div>\r\n        <div clasS=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].fechaEsperadaArribo | dateFormatSlashHour}}\r\n        </div>\r\n        <div class=\"subencabezadoGestion\">\r\n          Inspección Matriz\r\n        </div>\r\n        <div class=\"contenidoencabezadoGestion\" *ngIf=\"lstPartidas[PartidaSeleccionada].totalPiezas==1\">\r\n\r\n          {{lstPartidas[PartidaSeleccionada].totalPiezas +\" Pieza Despachable\" }}\r\n        </div>\r\n\r\n        <div class=\"contenidoencabezadoGestion\" *ngIf=\"lstPartidas[PartidaSeleccionada].totalPiezas!=1\">\r\n          {{lstPartidas?lstPartidas[PartidaSeleccionada].totalPiezas+ \" Piezas Despachable\" :\"\" }}\r\n        </div>\r\n\r\n\r\n        <div class=\"subencabezadoGestion\">\r\n          # de Monitoreos\r\n        </div>\r\n        <div clasS=\"contenidoencabezadoGestion\">\r\n          {{lstTiempoProceso[lineaSeleccionada].pedimento ?lstTiempoProceso[lineaSeleccionada].pedimento :\"ND\" }}\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/compras.component.scss":
/***/ (function(module, exports) {

module.exports = ".circuloverde{background:#91be5f;height:15px;width:15px;border-radius:15px 15px 15px 15px}.cuadroActivo{min-width:8px;background:#008895;height:100%}.circulorojo{background:#d0021b;height:15px;width:15px;border-radius:15px 15px 15px 15px}.encabezadoGestion{font-size:18px;color:#008895;margin-top:20px;margin-bottom:10px}.cont-timeLine{min-width:592px;background:#fff;padding:15px 20px}.cont-timeLine:hover{background-color:rgba(0,137,149,.05)}.cont-timeLineSelected{background-color:rgba(0,137,149,.05)}.subencabezadoGestion{font-size:16px;font-weight:400;color:#424242;margin-bottom:3px}.contenidoencabezadoGestion{font-size:16px;font-weight:200;color:#424242;margin-bottom:25px;cursor:default !important}:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(0,137,149,.02)}:host>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:#008895;height:41px;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;padding:0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(1)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;cursor:pointer}:host>div:nth-of-type(1)>div:nth-of-type(2){margin-left:20px}:host>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:calc(100vh - 170px);width:100%}:host>div:nth-of-type(2)>.panelNormal{background:#fff;height:100%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll}:host>div:nth-of-type(2)>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}:host>div:nth-of-type(2)>.panelOcultar .filtros{display:none}:host>div:nth-of-type(2)>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}:host>div:nth-of-type(2) .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}:host>div:nth-of-type(2) .filtroHeader>.abrir{cursor:pointer}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2) .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}:host>div:nth-of-type(2) .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242}:host>div:nth-of-type(2) .filtros>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:50px;border-bottom:1px solid #eceef0;padding-top:15px;padding-bottom:20px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .filtros>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;border-bottom:1px solid #eceef0;color:#fff;font-size:14px}:host>div:nth-of-type(2) .filtros>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:140px;height:25px;margin-right:1px}:host>div:nth-of-type(2) .filtros>.divAvanzada{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:130px;font-size:16px;color:#424242}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(1)>div>div{margin-top:6px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2){border-bottom:1px solid #424242;padding-bottom:18px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px}:host>div:nth-of-type(2) .filtros>.divAvanzada>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:1px;padding-top:1px;border-bottom:1px solid #eceef0}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding-bottom:18px;border-bottom:1px solid #424242}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(2)>input{height:25px;border:1px solid #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:5px}:host>div:nth-of-type(2) .filtros>.divRapida>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:18px;background:#424242;width:100%;height:35px;cursor:pointer}:host>div:nth-of-type(2)>div:nth-of-type(2){height:100%;width:100%;background:rgba(0,137,149,.02)}:host>div:nth-of-type(2)>.resultados{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:1s ease-in-out;transition:1s ease-in-out}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1){border-bottom:3px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;-webkit-box-sizing:border-box;box-sizing:border-box}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(1){font-size:22px}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>div:nth-of-type(2)>.resultados>div:nth-of-type(1)>div:nth-of-type(2)>img{cursor:pointer;height:30px;width:30px}:host>div:nth-of-type(2)>.resultados>.sistema{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;overflow-x:scroll}:host>div:nth-of-type(2)>.resultados>.sistema>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1240px;min-height:57px}:host>div:nth-of-type(2)>.resultados>.sistema>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:57px;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>div:nth-of-type(2)>.resultados>.sistema>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-width:1240px}:host>div:nth-of-type(2)>.resultados>.sistema>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:70px;border-bottom:1px solid #c2c3c9}:host>div:nth-of-type(2)>.resultados>.sistema>div:nth-of-type(2)>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:160px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host>div:nth-of-type(2)>.resultados>.total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;min-height:30px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}@-webkit-keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@-webkit-keyframes mostar{from{width:50px}to{width:321px}}@keyframes mostar{from{width:50px}to{width:321px}}.w3-animate-right{position:relative;-webkit-animation:animateright .4s;animation:animateright .4s}@-webkit-keyframes animateright{from{right:-900px;opacity:0}to{right:0;opacity:1}}@keyframes animateright{from{right:-900px;opacity:0}to{right:0;opacity:1}}.w3-animate-left{position:relative;-webkit-animation:animateleft .8s;animation:animateleft .8s}@-webkit-keyframes animateleft{from{left:-50px;opacity:0}to{left:0;opacity:1}}@keyframes animateleft{from{left:-50px;opacity:0}to{left:0;opacity:1}}.GlobalContainer-graphic-Component{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.GlobalContainer-graphic-Component .GraphicsContainer-graphic-Component{width:85%;height:auto;background:rgba(0,137,149,.02)}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component{width:15%;min-width:321px;max-width:321px;height:100%;background:#424242}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Tabgraphic-Component{position:absolute;right:321px;top:1%;background:#424242;cursor:pointer;width:50px;height:35px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component{margin-left:17px;width:100%;height:100%}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .totals-filter-graphic-Component{width:100%;background:transparent;height:10%;color:#fff;border-style:solid;border-bottom:1px solid #008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-line-pack:end;align-content:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding-bottom:10px}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component{width:100%;background:transparent;height:35%;color:#fff;border-style:solid;border-bottom:1px solid #008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:10px}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles{margin-top:10px;width:100%;height:33%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles .Panel-Izq{width:20%;height:100%;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;margin-top:2px}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles .Panel-Derecho{width:80%;height:100%;background:transparent}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles .Panel-Derecho .total{margin-top:2px;color:#fff}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles .Panel-Derecho .azul{margin-top:3px;color:#439dc1}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles .Panel-Derecho .morado{margin-top:3px;color:#aa65e7}.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .filters-graphic-Component{width:100%;background:transparent;height:40%;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-line-pack:start;align-content:flex-start;align-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding-bottom:10px}.dotAzul{height:12px;width:12px;border-radius:50%;background-color:#439dc1}.dotMorado{height:12px;width:12px;border-radius:50%;background-color:#aa65e7}.consultaDetalles{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:calc(100vh - 170px);width:100%}.consultaDetalles>.panelNormal{background:#fff;height:100%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:321px;min-width:321px;overflow-y:scroll}.consultaDetalles>.panelOcultar{background:#fff;-webkit-animation-name:ocultarPanel;animation-name:ocultarPanel;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 15px}.consultaDetalles>.panelOcultar .filtros{display:none}.consultaDetalles>.panelMostrar{background:#fff;-webkit-animation-name:mostar;animation-name:mostar;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.consultaDetalles .filtroHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#424242;font-size:10px;margin-bottom:20px}.consultaDetalles .filtroHeader>.abrir{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;min-height:22px}.consultaDetalles .filtroHeader>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.consultaDetalles .filtroHeader>div:nth-of-type(2)>.cerrar{margin-left:9px;cursor:pointer}.consultaDetalles .filtros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #424242;border-bottom:1px solid #424242;padding-bottom:25px}.consultaDetalles .filtros>.detalleCliente{font-size:16px;color:#424242;font-weight:bold;margin-top:15px}.consultaDetalles .filtros>.detalleTitulo{font-size:16px;color:#424242;font-weight:400;margin-top:20px}.consultaDetalles .filtros>.detalleTexto{font-size:16px;color:#424242;font-weight:200}.consultaDetalles .filtros>.detalleTextoVerde{font-size:16px;color:#008895 !important;font-weight:300;cursor:pointer}.consultaDetalles .filtros>.detalleTextoVerde:hover{text-decoration:underline}.consultaDetalles>.contenidoFactura{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:calc(100vh - 170px);width:100%;overflow:scroll}.consultaDetalles>.contenidoFactura>.detalleFactura{min-width:592px;padding:15px 20px}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(1){font-size:22px;font-weight:bold}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2){margin-top:20px;border-top:1px solid #424242;border-bottom:1px solid #979797}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #fff}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(1){min-width:8px;background:transparent}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:5px 10px;width:100%;cursor:pointer}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:5px 0px}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2){-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>div:hover{background-color:#fff}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActual{background-color:#fff;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActual>div:nth-of-type(1){min-width:8px;background:#008895}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(2)>.divActive{background-color:#fff}.consultaDetalles>.contenidoFactura>.detalleFactura>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;margin-top:15px;font-size:14px;color:#424242;font-weight:300}.consultaDetalles>.contenidoFactura>.lineaTiempo{min-width:592px;background:#fff;padding:15px 20px}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(1){font-size:22px;font-weight:bold;color:#008895}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2){margin-top:20px;border-top:1px solid #424242;border-bottom:1px solid #979797}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(1){min-width:8px;background:transparent}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 10px;width:100%}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1){font-size:18px;font-weight:bold;color:#424242;margin-bottom:15px}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2){font-size:16px;color:#008895;margin-bottom:2px}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3){font-size:16px;color:#f3b23f;margin-bottom:2px}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4){font-size:16px;color:#571c7b;margin-bottom:2px}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(5){font-size:16px;color:#981e30;margin-bottom:2px}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>.divActive{background-color:rgba(0,137,149,.05)}.consultaDetalles>.contenidoFactura>.lineaTiempo>div:nth-of-type(2)>.divActive>div:nth-of-type(1){min-width:8px;background:#008895}.consultaDetalles>.contenidoFactura>.detalleTiempo{min-width:592px;padding-top:15px}.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(1){font-size:22px;font-weight:bold;padding:0px 20px}.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2){border-top:1px solid #424242;margin:20px 20px;overflow:scroll;max-height:calc(100vh - 248px)}.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div{border-bottom:1px solid #d8d8d8}.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .titulo{font-size:18px;color:#008895;margin-top:20px;margin-bottom:10px}.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .subTitulo{font-size:16px;font-weight:400;color:#424242;margin-bottom:3px}.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normal{font-size:16px;font-weight:200;color:#424242;margin-bottom:25px;cursor:default !important}.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde{font-size:16px;font-weight:200;margin-bottom:25px;color:#008895}.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde>span{cursor:pointer}.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde:hover>span{text-decoration:underline}.consultaDetalles>.contenidoFactura>.detalleTiempo>div:nth-of-type(2) .monitoreo_Cobro_SC>div .normalVerde:hover>.normal{text-decoration:none}a{color:#008895;text-decoration:none}a:visited{color:#008895;text-decoration:none}a:hover{text-decoration:underline}@keyframes ocultarPanel{from{min-width:321px}to{min-width:50px}}@keyframes mostar{from{width:50px}to{width:321px}}.detalle{cursor:pointer}.regresar{cursor:pointer;font-weight:200}"

/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/compras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_gestion_consulta_compras_compras_service__ = __webpack_require__("./src/app/services/gestion/consulta/compras/compras.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js__ = __webpack_require__("./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ComprasComponent = /** @class */ (function () {
    function ComprasComponent(router, _gestionService, coreComponent, _comprasService) {
        var _this = this;
        this.router = router;
        this._gestionService = _gestionService;
        this.coreComponent = coreComponent;
        this._comprasService = _comprasService;
        this.montototalGraficaDetalle = 0;
        this.CompraDetalle = {
            nombreProveedor: "",
            clave: "123",
        };
        this.nPartidas = 0;
        this.detalle = false;
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.TotalPiezasPartidasDetalle = 0;
        this.hiddenClose2 = true;
        this.lstRadiosRapida = ['Factura', 'Pedido', 'UUID'];
        this.avanzada = true;
        this.lineaSeleccionada = 0;
        this.PartidaSeleccionada = 0;
        this.isTableShow = true;
        this.itemsDropList = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.isThereData = false;
        this.ruta = "assets/Images/gestion/images/reload2.svg";
        this.lstCompras = [];
        this.Clear = true;
        this.IsDate = true;
        this.lstClientes = [];
        this.lstComprasXGrafica = [];
        this.lstPartidas = [];
        this.lstCompraEsp = [];
        this.date3 = new Date();
        this.date4 = new Date();
        this.lstTiempoProceso = [];
        this.DatosFill1 = {
            Fechas: {
                fechaInicial: new Date(),
                fechaFinal: new Date(),
            }
        };
        this.graficoCargado = false;
        this.refresh = false;
        this.id1 = "g1";
        this.id2 = "g1234";
        this.IsImage = true;
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.dropCobrador = [{ nombre: '--TODOS--', key: 0 }];
        this.Estadisticos = { totalpartidas: 0, totalpiezas: 0, totalcompras: 0 };
        this.Llenar = function () {
            var newListProveedor = [];
            for (var _i = 0, _a = _this.Proveedores; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.nombre != null) {
                    newListProveedor.push(item);
                }
            }
            _this.Proveedores = newListProveedor;
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Proveedor", _this.Proveedores, true),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Compró", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Golocaer', key: 1 },
                    { nombre: 'Mungen', key: 2 },
                    { nombre: 'Pharma', key: 3 },
                    { nombre: 'Proquifa', key: 4 },
                    { nombre: 'Proveedora', key: 5 },
                    { nombre: 'RM trading', key: 6 }
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
    ;
    ;
    ComprasComponent.prototype.Avanzada = function (Datos) {
        var _this = this;
        console.log(Datos);
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = Datos.Fechas.fechaInicial;
        parametros.ffin = Datos.Fechas.fechaFinal;
        parametros.idUsuario = 0;
        parametros.coloco = 0;
        if (Datos.Datos[0].nombre == "--TODOS--") {
            parametros.proveedor = 0;
        }
        else {
            parametros.proveedor = Datos.Datos[0].key;
        }
        if (Datos.Datos[1].nombre == "--TODOS--") {
            parametros.empresaCompra = "";
        }
        else {
            parametros.empresaCompra = Datos.Datos[1].nombre;
        }
        if (Datos.Datos[2].nombre == "--TODOS--") {
            parametros.estadoInt = 0;
        }
        else {
            parametros.estadoInt = Datos.Datos[2].key;
        }
        parametros.ordenCompra = "";
        parametros.usuario = 91;
        this._comprasService.consultarCompras(parametros).subscribe(function (data) {
            _this.lstCompras = data.current;
            console.log(data.current);
            _this.lstCompras = _this.eliminarObjetosDuplicados(data.current, 'clave');
            _this.lstSinSeparar = data.current;
            console.log(_this.lstCompras);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
        this._comprasService.consultarGraficaXCompra(parametros).subscribe(function (data) {
            var ComprasXGrafica = data.current;
            console.log(ComprasXGrafica);
            _this.SepararProveedores(ComprasXGrafica);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
        this.refresh = true;
    };
    ComprasComponent.prototype.eliminarObjetosDuplicados = function (arr, prop) {
        var nuevoArray = [];
        var lookup = {};
        for (var i in arr) {
            lookup[arr[i][prop]] = arr[i];
        }
        for (i in lookup) {
            nuevoArray.push(lookup[i]);
        }
        this.Estadisticos.totalcompras = nuevoArray.length;
        return nuevoArray;
    };
    ComprasComponent.prototype.obtenerTotales = function () {
        var total_partidas = 0;
        var total_compras = 0;
        this.lstSinSeparar.forEach(function (element) {
            total_partidas = total_partidas + element.totalPartidas;
        });
        this.Estadisticos.totalpartidas = total_partidas;
        console.log(this.Estadisticos);
    };
    ComprasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]()
        });
        this.date = new Date();
        this.date2 = new Date();
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.proveedor = 0;
        parametros.estadoInt = 0;
        parametros.ordenCompra = "";
        parametros.usuario = 0;
        parametros.empresaCompra = "";
        parametros.coloco = 0;
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;
        parametros.idUsuario = 0;
        var param = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */];
        param.valorAdicional = "";
        // this.consultaAvanzadaFacturacion(parametros);
        this.coreComponent.openModal(0);
        this._comprasService.consultarProveedores(param).subscribe(function (data) {
            _this.Proveedores = data.current;
            var lstAux = [];
            lstAux.push({ nombre: '--TODOS--', key: 0 });
            for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.Proveedores = _this.Proveedores.concat(lstAux);
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
        this._comprasService.consultarCompras(parametros).subscribe(function (data) {
            _this.lstCompras = _this.eliminarObjetosDuplicados(data.current, 'clave');
            _this.lstSinSeparar = data.current;
            _this.obtenerTotales();
            console.log(data.current);
            console.log(_this.Estadisticos);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
        this._comprasService.consultarGraficaXCompra(parametros).subscribe(function (data) {
            var ComprasXGrafica = data.current;
            console.log(ComprasXGrafica);
            _this.SepararProveedores(ComprasXGrafica);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    ComprasComponent.prototype.ContarRepetidos = function (ComprasXGrafica, proveedor) {
        var compras = 0;
        ComprasXGrafica.forEach(function (element) {
            if (proveedor.nombreProveedor == element.nombreProveedor) {
                compras = compras + 1;
            }
        });
        return compras;
    };
    ComprasComponent.prototype.SepararProveedores = function (ComprasXGrafica) {
        var _this = this;
        console.log("ComprasXGrafica");
        console.log(ComprasXGrafica);
        var PorProveedor = this.eliminarObjetosDuplicados(ComprasXGrafica, 'nombreProveedor');
        var Estad = [];
        var PorClave = this.eliminarObjetosDuplicados(ComprasXGrafica, 'clave');
        var Arre = [PorProveedor.length];
        console.log("Proveedor" + " ========================================loremp");
        console.log(PorProveedor);
        PorProveedor.sort(function (a, b) {
            return (b.montoTotalDolares - a.montoTotalDolares);
        });
        if (PorProveedor.length > 11) {
            console.log("Entro");
            var ArreAuxiliar = PorProveedor.slice(0, 10);
            PorProveedor = ArreAuxiliar;
        }
        console.log("Proveedor Mochados" + " ========================================loremp");
        console.log(PorProveedor);
        PorProveedor.forEach(function (Proveedor) {
            var datos = {
                partidas: 0,
                Proveedor: '',
                NCompras: 0,
                totalpiezas: 0,
                montoTotalDolares: 0,
            };
            ComprasXGrafica.forEach(function (element) {
                if (Proveedor.nombreProveedor == element.nombreProveedor) {
                    datos.partidas = datos.partidas + element.totalPartidas;
                    datos.Proveedor = element.nombreProveedor;
                    datos.NCompras = _this.ContarRepetidos(ComprasXGrafica, element);
                }
            });
            var totalpiezas = 0;
            var totalDolares = 0;
            PorClave.forEach(function (element) {
                if (Proveedor.nombreProveedor == element.nombreProveedor) {
                    totalpiezas = totalpiezas + element.totalPiezas;
                    totalDolares = totalDolares + element.montoTotalDolares;
                }
            });
            datos.totalpiezas = totalpiezas;
            datos.montoTotalDolares = totalDolares;
            Estad.push(datos);
        });
        console.log(PorProveedor);
        console.log(Estad);
        console.log(Estad.length);
        this.Estad = Estad;
        Estad.sort(function (a, b) {
            return (b.montoTotalDolares - a.montoTotalDolares);
        });
        if (Estad.length > 10) {
            console.log("Entro");
            var ArreAuxiliar = Estad.slice(0, 10);
            Estad = ArreAuxiliar;
        }
        console.log(Estad);
        var Valores = [];
        var Etiquetas = [];
        var partidas = 0;
        var totalpiezas = 0;
        var totalmonto = 0;
        var compras = 0;
        Estad.forEach(function (element) {
            Valores.push(element.montoTotalDolares);
            Etiquetas.push("" + element.Proveedor);
            partidas = partidas + element.partidas;
            totalpiezas = totalpiezas + element.totalpiezas;
            totalmonto = totalmonto + element.montoTotalDolares;
        });
        var TotalesG1 = {
            partidas: partidas,
            totalpiezas: totalpiezas,
            totalmonto: totalmonto.toFixed(2),
            compras: compras = PorClave.length,
        };
        this.Grafico1 = {
            valores: Valores, etiquetas: Etiquetas, totales: TotalesG1
        };
        console.log(this.Grafico1);
    };
    ComprasComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    ComprasComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    ComprasComponent.prototype.openPanel = function () {
        var _this = this;
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
            if (this.graficoCargado) {
                console.log(this.graficoCargado);
                setTimeout(function (datos) {
                    if (datos === void 0) { datos = { valores: [] }; }
                    _this.donita2(datos);
                }, 1000);
            }
        }
    };
    ComprasComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    ComprasComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
    };
    ComprasComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
    };
    ComprasComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    ComprasComponent.prototype.dropList = function (index, $event) {
    };
    ComprasComponent.prototype.ConsultaEspecifica = function (txtFactura) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = null;
        parametros.ffin = null;
        parametros.proveedor = 0;
        parametros.estadoInt = 0;
        parametros.ordenCompra = txtFactura;
        parametros.usuario = 0;
        parametros.empresaCompra = "";
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;
        this.coreComponent.openModal(0);
        this._comprasService.consultarCompras(parametros).subscribe(function (data) {
            _this.lstCompras = _this.eliminarObjetosDuplicados(data.current, 'clave');
            _this.lstSinSeparar = data.current;
            console.log(data.current);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
        console.log(txtFactura);
    };
    ComprasComponent.prototype.mostrarDatos = function ($event) {
        this.DatosFill1 = $event;
        this.Avanzada($event);
    };
    //Función para convertir JSON en formato CSV
    ComprasComponent.prototype.ConvertToCSV = function (objArray) {
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
    // Función de descarga de archivo CSV 
    ComprasComponent.prototype.download = function () {
        var lstCompras2 = [];
        this.lstCompras.forEach(function (compra, index) {
            var ObjAux = {
                '#': (index + 1),
                OC: compra.clave,
                Proveedor: compra.empresa,
                Colocó: compra.colocarDesde,
                Comprador: compra.comprador,
                Estado: compra.estado
            };
            lstCompras2.push(ObjAux);
        });
        var csvData = this.ConvertToCSV(lstCompras2);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'ConsultaCompras-' + this.fechaDescarga(new Date()) + '.csv';
        a.click();
    };
    ComprasComponent.prototype.fechaDescarga = function (fechaE) {
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
    ComprasComponent.prototype.regresarConsulta = function () {
        this.detalle = false;
    };
    //=========/Apartado para graficos===============/////
    ComprasComponent.prototype.showGraphic = function () {
        this.isTableShow = false;
    };
    ComprasComponent.prototype.showTable = function () {
        this.isTableShow = true;
    };
    ComprasComponent.prototype.verDetalle = function (item) {
        this.CompraDetalle = item;
        this.detalle = true;
        this.obtenerPartidasEsp(this.CompraDetalle.clave);
        //this.obtenerComprasPClave(this.CompraDetalle.clave);
        console.log("COmpra detale ->>>>>");
        console.log(this.CompraDetalle);
    };
    ComprasComponent.prototype.obtenerComprasPClave = function (clave) {
        var _this = this;
        console.log(clave);
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = this.DatosFill1.Fechas.fechaInicial;
        parametros.ffin = this.DatosFill1.Fechas.fechaFinal;
        parametros.idUsuario = 0;
        parametros.coloco = 0;
        parametros.proveedor = 0;
        parametros.empresaCompra = "";
        parametros.estadoInt = 0;
        parametros.ordenCompra = clave;
        parametros.usuario = 91;
        this._comprasService.consultarCompras(parametros).subscribe(function (data) {
            _this.lstCompraEsp = data.current;
            console.log(data.current);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error comprasEsp");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
        this.refresh = true;
    };
    ComprasComponent.prototype.obtenerPartidasEsp = function (clave) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        this.coreComponent.openModal(0);
        parametros.ordenCompra = clave;
        this._comprasService.consultaPartidasPorCompraEspecifica(parametros).subscribe(function (data) {
            _this.lstPartidas = data.current;
            _this.obtenerTiempoProceso(_this.lstPartidas[0].compra, _this.lstPartidas[0].idPartidaCompra);
            _this.obtenerTotales();
            console.log(data.current);
            setTimeout(function () { _this.ObtenerDatosGraficaDetalle(); }, 1000);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    ComprasComponent.prototype.ObtenerDatosGraficaDetalle = function () {
        var datos = {
            valores: []
        };
        var pzas = 0;
        var et = 0;
        var ft = 0;
        var total = 0;
        this.lstPartidas.forEach(function (element) {
            console.log(element.estado);
            if (element.estado == "Recibido") {
                et = et + element.montoTotal;
            }
            else {
                if (element.estado == "BackOrder") {
                    ft = ft + element.montoTotal;
                }
            }
            pzas = pzas + element.totalPiezas;
            total = total + element.montoTotal;
        });
        console.log("se muestran los datos ET VS FT");
        console.log(datos);
        this.montototalGraficaDetalle = total;
        this.TotalPiezasPartidasDetalle = pzas;
        this.nPartidas = this.lstPartidas.length;
        if (et == 0 && ft == 0) {
            et = total;
        }
        datos.valores.push(et);
        datos.valores.push(ft);
        this.donita2(datos);
    };
    ComprasComponent.prototype.resumenFactura = function (pos) {
        this.PartidaSeleccionada = pos;
        this.obtenerTiempoProceso(this.lstPartidas[pos].compra, this.lstPartidas[pos].idPartidaCompra);
    };
    ComprasComponent.prototype.obtenerTiempoProceso = function (ordenCompra, idPCompra) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.ordenCompra = ordenCompra;
        parametros.idPCompra = idPCompra;
        this.coreComponent.openModal(0);
        this._comprasService.obtenerTiempoProcesoPorPartida(parametros).subscribe(function (data) {
            var arrayaux = [];
            data.current.forEach(function (element) {
                if (element.nivel == 1) {
                    arrayaux.push(element);
                }
            });
            _this.lstTiempoProceso = arrayaux;
            console.log(data.current);
            console.log(_this.lstTiempoProceso);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    ComprasComponent.prototype.SeleccionarLinea = function (i) {
        this.lineaSeleccionada = i;
        console.log(this.lstTiempoProceso[i]);
    };
    ComprasComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    ComprasComponent.prototype.donita2 = function (datos) {
        this.graficoCargado = true;
        console.log("Dentro de Donita");
        var colores = ["#94BA13 ", "#0098DA "];
        var etiquetas = ["Total"];
        var coloresP = ["#439DC1", "#C5792E ", "#2C9484 ", "#E34B43 ", "#CC3185", "#A9CA4E", "#524B96", "#EFCD50", "#a33532", "5d90dc"];
        etiquetas = ["ET", "FT"];
        var valores = datos.valores;
        var colorVerdeGrafica = ["#008895", "#D0021B"];
        this.createDoughnut("graficoIndividual", etiquetas, valores, colorVerdeGrafica);
    };
    ComprasComponent.prototype.createDoughnut = function (element, etiquetas, valores, colores) {
        console.log("Dentro del createDona");
        var oilCanvas = document.getElementById(element);
        __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"].defaults.global.defaultFontFamily = "Roboto";
        __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"].defaults.global.defaultFontSize = 12;
        __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"].defaults.global.animation.duration = 1200;
        __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"].defaults.global.animation.easing = 'easeInCirc';
        var oilData = {
            labels: etiquetas,
            datasets: [
                {
                    data: valores,
                    backgroundColor: colores,
                    borderColor: "black",
                    borderWidth: 0
                }
            ]
        };
        var chartOptions = {
            maintainAspectRatio: false,
            cutoutPercentage: 65,
            circumference: 2 * Math.PI,
            legend: {
                display: false,
                position: 'right',
                fontFamily: 'Roboto',
                fontSize: '12px',
                padding: 20
            },
            tooltips: {
                display: true,
                backgroundColor: '#000',
            }
        };
        var pieChart = new __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"](oilCanvas, {
            type: 'doughnut',
            data: oilData,
            options: chartOptions,
            plugins: [{
                    id: 'my-plugin',
                    afterDraw: function (chart, option) {
                        chart.ctx.fillStyle = 'black';
                        chart.ctx.textBaseline = 'middle';
                        chart.ctx.font = '10px Roboto';
                        //   chart.ctx.fillText('Totales', chart.width / 2 - 20, chart.width / 3.5, 200);
                        // chart.ctx.fillText('Monto:', chart.width / 2 - 20, chart.width / 2.9, 200);
                        //chart.ctx.fillText('Clientes:', chart.width / 2 - 20, chart.width / 2.5, 200);
                        //chart.ctx.fillText('Cobros:', chart.width / 2 - 20, chart.width /2.2, 200);
                        //chart.ctx.fillText('Partidas:', chart.width / 2 - 20, chart.width / 1.9, 200);
                        //chart.ctx.fillText('Piezas:', chart.width / 2 - 20, chart.width / 1.7, 200);
                    }
                }]
        });
    };
    ComprasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-compras',
            template: __webpack_require__("./src/app/components/gestion/consultas/compras/compras.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/compras/compras.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__services_gestion_consulta_compras_compras_service__["a" /* ComprasService */]])
    ], ComprasComponent);
    return ComprasComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/compras.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasModule", function() { return ComprasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compras_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/compras/compras-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compras_component__ = __webpack_require__("./src/app/components/gestion/consultas/compras/compras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphicas_compras_graficas_module__ = __webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComprasModule = /** @class */ (function () {
    function ComprasModule() {
    }
    ComprasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__compras_routing_module__["a" /* ComprasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__graphicas_compras_graficas_module__["a" /* GraficasCobrosModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__compras_component__["a" /* ComprasComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__compras_component__["a" /* ComprasComponent */]
            ]
        })
    ], ComprasModule);
    return ComprasModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasCobrosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graficas_cobros_component__ = __webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GraficasCobrosRoutingModule = /** @class */ (function () {
    function GraficasCobrosRoutingModule() {
    }
    GraficasCobrosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__graficas_cobros_component__["a" /* GraficasComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], GraficasCobrosRoutingModule);
    return GraficasCobrosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.html":
/***/ (function(module, exports) {

module.exports = "<div   *ngIf=\"opcion==0\" class=\"divContenedor\">\r\n  <!--Gráfica 1-->\r\n\r\n\r\n\r\n\r\n  <div class=\"divGraficaTituloCtn\" style=\"position: relative;\">\r\n    <div style=\"width:100%;height: 15%;display:flex; justify-content: center;align-content: center;align-items: center;\">{{Titulo1}}</div>\r\n    <div class=\"Grafico flexCenter\">\r\n      <div style=\"color:#424242; position:absolute; width: 40%; background: transparent;opacity: 1; min-width: 82px;  min-height: 81.5px; font-size: 12px;height: 43%;border-radius: 50px;\"\r\n        class=\"flexCenter \">\r\n        <div class=\"flexCenter\" style=\"width: 100%\">\r\n          Total\r\n        </div>\r\n        <div class=\"flexCenter\" style=\"width: 100%\">\r\n          Monto: ${{grafica1.totales.totalmonto}}\r\n        </div>\r\n        <div class=\"flexCenter\" style=\"width: 100%\">\r\n          Compras: {{grafica1.totales.compras}}\r\n        </div>\r\n        <div class=\"flexCenter\" style=\"width: 100%\">\r\n          Partidas:{{grafica1.totales.partidas}}\r\n        </div>\r\n        <div class=\"flexCenter\" style=\"width: 100%\">\r\n          Piezas:{{grafica1.totales.totalpiezas}}\r\n        </div>\r\n      </div>\r\n      <canvas id=\"g1\"></canvas>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Gráfica 2-->\r\n  <div class=\"divGraficaTituloCtn\">\r\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo2}}</div>\r\n    <div class=\"Grafico\">\r\n\r\n      <canvas id=\"g2\"></canvas>\r\n    </div>\r\n  </div>\r\n  <!--Gráfica 3-->\r\n  <div class=\"divGraficaTituloCtn\">\r\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo3}}</div>\r\n    <div class=\"Grafico\">\r\n      <canvas id=\"g3\"></canvas>\r\n    </div>\r\n\r\n  </div>\r\n  <!--Gráfica 4-->\r\n  <div class=\"divGraficaTituloCtn\">\r\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo4}}</div>\r\n    <div class=\"Grafico\">\r\n      <canvas id=\"g4\"></canvas>\r\n    </div>\r\n  </div>\r\n  <!--Gráfica 5-->\r\n  <div class=\"divGraficaTituloCtn\">\r\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo5}}</div>\r\n    <div class=\"Grafico\">\r\n      <canvas id=\"g5\"></canvas>\r\n    </div>\r\n  </div>\r\n  <!--Gráfica 6-->\r\n  <div class=\"divGraficaTituloCtn\">\r\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo6}}</div>\r\n    <div class=\"Grafico\">\r\n      <canvas id=\"g6\"></canvas>\r\n    </div>\r\n  </div>\r\n  <!--Gráfica 7-->\r\n\r\n  <div class=\"divGraficaTituloCtn\">\r\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo7}}</div>\r\n    <div class=\"Grafico\">\r\n      <canvas id=\"g7\"></canvas>\r\n    </div>\r\n  </div>\r\n  <!--Gráfica 8-->\r\n  <div class=\"divGraficaTituloCtn\">\r\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo8}}</div>\r\n    <div class=\"Grafico\">\r\n      <canvas id=\"g8\"></canvas>\r\n    </div>\r\n  </div>\r\n  <!--Gráfica 9-->\r\n  <div class=\"divGraficaTituloCtn\">\r\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo9}}</div>\r\n    <div class=\"Grafico\">\r\n      <canvas id=\"g9\"></canvas>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div   *ngIf=\"opcion==1\" class=\"divContenedor\">\r\n    <!--Gráfica 1-->\r\n  \r\n  \r\n  \r\n    <div class=\"divGraficaTituloCtn\">\r\n        <div style=\"width:100%;display: flex;justify-content: center;align-content: center;align-items: center;\">Gráfico de componente </div>\r\n        <div class=\"Grafico\">\r\n          <canvas id=\"g21\"></canvas>\r\n        </div>\r\n      </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.scss":
/***/ (function(module, exports) {

module.exports = ".padreG{width:100%;height:100%;background:rgba(0,137,149,.02)}.tituloGrafica{position:absolute;top:-45px;right:133px;left:0px;margin:auto;width:100px;font-size:36px;font-weight:bold}.tituloGraficaMediana{position:absolute;top:7px;right:71px;left:0px;margin:auto;width:100px;font-size:24px;font-weight:bold}.tituloGraficaChica{position:absolute;text-align:center;margin:auto;width:200px;font-size:15px;font-family:\"Roboto\";font-style:Medium}#doughnut1Div{position:relative}#doughnut1Div2{position:relative}#doughnut1Div3{position:relative}#doughnut1Div4{position:relative}#doughnut1Div5{position:relative}#doughnut1Div6{position:relative}.divContenedor{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto}.divContenedor .divGraficaTituloCtn{min-width:159px;min-height:165px;width:25%;height:25vh;background:transparent;margin-left:1px;margin-right:0px;margin-bottom:5px;margin-top:5px}.divContenedor .divGraficaTituloCtn .Grafico{width:100%;height:80%}.tituloGrafica{width:100%;height:15%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flexCenter{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.borderRadious{border:2px solid red;padding:10px;border-radius:25px}.animationZoom{-webkit-animation:animatezoom .2s;animation:animatezoom .2s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}"

/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__("./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__ = __webpack_require__("./src/app/class/compras/utils/query.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraficasComponent = /** @class */ (function () {
    function GraficasComponent() {
        this.TotalesVacios = {
            partidas: 0,
            totalpiezas: 0,
            totalmonto: (0.0000).toFixed(2),
            compras: 0,
        };
        this.etiquetasVacias = [0];
        this.opcion = 0;
        this.Titulo1 = "TOP 10 PROVEEDORES";
        this.Titulo2 = "AVISOS DE CAMBIO";
        this.Titulo3 = "COMPRADORES";
        this.Titulo4 = "ABIERTO VS CERRADO";
        this.Titulo5 = "TOP 10 PRODUCTOS";
        this.Titulo6 = "TIPO";
        this.Titulo7 = "MARCA";
        this.Titulo8 = "ESTADO";
        this.Titulo9 = "ET vs FT";
        this.grafica1 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica2 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica3 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica4 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica5 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica6 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica7 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica8 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica9 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.Elements = [{ titulo: 'g1' }, { titulo: 'g2' }, { titulo: 'g3' }];
        this.squery = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        this.punterosProvee = new Array();
    }
    /* constructor(private router: Router,
      private _insp: InspeccionService) { } */
    GraficasComponent.prototype.ngOnChanges = function (changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(changes);
    };
    GraficasComponent.prototype.ngOnInit = function () {
        if (this.opcion == 0) {
            this.donita();
            // this.dona2();
            /*  this.recibePartidas(); */
            var pieChart_1 = this.pieChart;
            var total = this.grafica1.totales;
            document.getElementById("g1").onclick = function (evt) {
                var activePoints = pieChart_1.getElementsAtEvent(evt);
                var firstPoint = activePoints[0];
                var label = pieChart_1.data.labels[firstPoint._index];
                var value = pieChart_1.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
            };
        }
        else {
            if (this.opcion == 1) {
                this.donita2();
            }
        }
    };
    GraficasComponent.prototype.donita2 = function () {
        var colores = ["#94BA13 ", "#0098DA "];
        var etiquetas = ["Total"];
        var valores = [];
        var coloresP = ["#439DC1", "#C5792E ", "#2C9484 ", "#E34B43 ", "#CC3185", "#A9CA4E", "#524B96", "#EFCD50", "#a33532", "5d90dc"];
        etiquetas = ["Sin contenido",];
        valores = [1];
        var colorVacio = ["#a0a0a0"];
        this.createDoughnut("g21", etiquetas, valores, colorVacio);
    };
    GraficasComponent.prototype.donita = function () {
        var colores = ["#94BA13 ", "#0098DA "];
        var etiquetas = ["Total"];
        var valores = [];
        var coloresP = ["#439DC1", "#C5792E ", "#2C9484 ", "#E34B43 ", "#CC3185", "#A9CA4E", "#524B96", "#EFCD50", "#a33532", "5d90dc"];
        etiquetas = ["Sin contenido",];
        valores = [1];
        var colorVacio = ["#a0a0a0"];
        var cadena = "" + this.id;
        console.log(this.grafica1);
        this.createDoughnut("g1", this.grafica1.etiquetas, this.grafica1.valores, coloresP);
        this.createDoughnut("g2", etiquetas, valores, colorVacio);
        this.createDoughnut("g3", etiquetas, valores, colorVacio);
        this.createDoughnut("g4", etiquetas, valores, colorVacio);
        this.createDoughnut("g5", etiquetas, valores, colorVacio);
        this.createDoughnut("g6", etiquetas, valores, colorVacio);
        this.createDoughnut("g7", etiquetas, valores, colorVacio);
        this.createDoughnut("g8", etiquetas, valores, colorVacio);
        this.createDoughnut("g9", etiquetas, valores, colorVacio);
    };
    GraficasComponent.prototype.createDoughnut = function (element, etiquetas, valores, colores) {
        var oilCanvas = document.getElementById(element);
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.defaultFontFamily = "Roboto";
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.defaultFontSize = 12;
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.animation.duration = 3000;
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.animation.easing = 'easeOutBounce';
        var oilData = {
            labels: etiquetas,
            datasets: [
                {
                    data: valores,
                    backgroundColor: colores,
                    borderColor: "black",
                    borderWidth: 0
                }
            ]
        };
        var chartOptions = {
            maintainAspectRatio: false,
            cutoutPercentage: 60,
            circumference: 2 * Math.PI,
            legend: {
                display: false,
                position: 'right',
                fontFamily: 'Roboto',
                fontSize: '12px',
                padding: 20
            },
            tooltips: {
                display: true,
                backgroundColor: '#000',
            }
        };
        this.pieChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](oilCanvas, {
            type: 'doughnut',
            data: oilData,
            options: chartOptions,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], GraficasComponent.prototype, "opcion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo6", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo7", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo8", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo9", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica6", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica7", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica8", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica9", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], GraficasComponent.prototype, "Refresh", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasComponent.prototype, "Elements", void 0);
    GraficasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'pq-graficas-dona',
            template: __webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.scss")]
        })
    ], GraficasComponent);
    return GraficasComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/graphicas-compras/graficas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasCobrosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graficas_cobros_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graficas_cobros_component__ = __webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
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












var GraficasCobrosModule = /** @class */ (function () {
    function GraficasCobrosModule() {
    }
    GraficasCobrosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__graficas_cobros_routing_module__["a" /* GraficasCobrosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__graficas_cobros_component__["a" /* GraficasComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__graficas_cobros_component__["a" /* GraficasComponent */]
            ],
        })
    ], GraficasCobrosModule);
    return GraficasCobrosModule;
}());



/***/ })

});
//# sourceMappingURL=compras.module.chunk.js.map