webpackJsonp(["asignar-ruta.module"],{

/***/ "./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignarRutaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignar_ruta_component__ = __webpack_require__("./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AsignarRutaRoutingModule = /** @class */ (function () {
    function AsignarRutaRoutingModule() {
    }
    AsignarRutaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__asignar_ruta_component__["a" /* AsignarRutaComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AsignarRutaRoutingModule);
    return AsignarRutaRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"  style=\"width: 100%\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\"/>\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\"/>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"area\" style=\"width:100%; height:100%;overflow: scroll;\">\r\n    <div class=\"todo\" *ngIf=\"show_mapa\">\r\n      <div class=\"linea\">\r\n        <img height=\"16px\" src=\"assets/Images/FlechaIzqVerdee.svg\" (click)=\"regresar()\">\r\n        <label>Asignar Mensajero </label>\r\n      </div>\r\n      <div *ngIf=\"reloadMensajeros\" class=\"mensajeros\">\r\n        <div class=\"detalleMensajero\" (click)=\"todos()\">\r\n          <div class=\"nombre\">TODOS</div>\r\n          <mat-divider></mat-divider>\r\n          <div class=\"zona\">\r\n            <div style=\"min-height: 16px\">Zona:<span>Todos</span></div>\r\n            Ruta:<span>{{rutaTotal.toFixed(2)}}&nbsp;Km</span>\r\n            <mat-divider></mat-divider>\r\n          </div>\r\n          <div class=\"total\">\r\n            <div>\r\n              <div>#Total de Clientes: <span> {{ clientesTotales }}</span></div>\r\n              <div>#Total Eventos: <span>{{ eventosTotales }}</span></div>\r\n            </div>\r\n            <div class=\"iconitos\" *ngFor=\"let item of arregloEventos\">\r\n              <div *ngIf=\"item.Entrega > 0\">\r\n                <img src=\"assets/Images/Images/entrega_verde.svg\">\r\n                <div><span> {{ item.Entrega }}</span></div>\r\n              </div>\r\n              <div *ngIf=\"item.Cobro > 0\">\r\n                <img src=\"assets/Images/Images/cobro_verde.svg\">\r\n                <div><span> {{item.Cobro}}</span></div>\r\n              </div>\r\n              <div *ngIf=\"item.RecoleccionM > 0\">\r\n                <img src=\"assets/Images/Images/R_material_verde.svg\">\r\n                <div><span> {{item.RecoleccionM}} </span></div>\r\n              </div>\r\n              <div *ngIf=\"item.Revision > 0\">\r\n                <img src=\"assets/Images/Images/revision_verde.svg\">\r\n                <div><span> {{ item.Revision }}</span></div>\r\n              </div>\r\n              <div *ngIf=\"item.EntregaE > 0\">\r\n                <img src=\"assets/Images/Images/e_especial_verde.svg\">\r\n                <div><span> {{ item.EntregaE }}</span></div>\r\n              </div>\r\n              <div *ngIf=\"item.RevisionE > 0\">\r\n                <img src=\"assets/Images/Images/revision_verde.svg\">\r\n                <div><span> {{item.RevisionE }}</span></div>\r\n              </div>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n          </div>\r\n          <div class=\"monto\"> Monto total: <span> {{montoTotal | acFormatMoney}} </span></div>\r\n        </div>\r\n        <div class=\"detalleMensajero no-drag\" id=\"mensajero{{i}}\" [dragula]=\"MANY_ITEMS\" [(dragulaModel)]='auxDrop'\r\n             *ngFor=\"let items of itemsAux; let i = index;\" (click)=\"rutasMensajero(i)\">\r\n          <div class=\"nombre no-drag\">\r\n            <div class=\"tooltip\"><span class=\"texto\">{{items.mensajero}}</span> <span class=\"tooltiptext\">{{items.mensajero}}</span>\r\n            </div>\r\n            <div class=\"bolitaColor\" [style.background]=\"_color[i+1]\"></div>\r\n          </div>\r\n          <mat-divider class=\"no-drag\"></mat-divider>\r\n          <div class=\"zona no-drag\">\r\n            <div class=\"zonaTxt\">\r\n              Zona:&nbsp;\r\n              <div class=\"tooltip\">\r\n                <span class=\"texto\"><span>{{items.zona}}</span> </span> <span class=\"tooltiptext\">{{items.zona}}</span>\r\n              </div>\r\n            </div>\r\n            Ruta:\r\n            <span *ngIf=\"arregloDistancias[i] == null\"> 0&nbsp;Km</span>\r\n            <span\r\n              *ngIf=\"arregloDistancias[i] != null\">{{ arregloDistancias[i].km | acFormatNumber2decimal }}&nbsp;Km</span>\r\n            <mat-divider></mat-divider>\r\n          </div>\r\n\r\n          <div class=\"total no-drag\">\r\n            <div>\r\n              <div>#Total de Clientes: <span>{{items.cliente}} </span></div>\r\n              <div>#Total Eventos: <span> {{items.RevisionE + items.EntregaE+items.Revision +items.Entrega + items.Cobro\r\n            +items.RecoleccionM }} </span></div>\r\n            </div>\r\n            <div class=\"iconitos\">\r\n              <div *ngIf=\"items.Entrega > 0\">\r\n                <img src=\"assets/Images/Images/entrega_verde.svg\">\r\n                <div><span> {{items.Entrega }}</span></div>\r\n              </div>\r\n              <div *ngIf=\"items.Cobro > 0\">\r\n                <img src=\"assets/Images/Images/cobro_verde.svg\">\r\n                <div>\r\n                  <span> {{items.Cobro }}</span>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"items.RecoleccionM > 0\">\r\n                <img src=\"assets/Images/Images/R_material_verde.svg\">\r\n                <div><span> {{items.RecoleccionM }} </span></div>\r\n              </div>\r\n              <div *ngIf=\"items.Revision > 0\">\r\n                <img src=\"assets/Images/Images/revision_verde.svg\">\r\n                <div><span> {{items.Revision }}</span></div>\r\n              </div>\r\n              <div *ngIf=\"items.EntregaE > 0\">\r\n                <img src=\"assets/Images/Images/e_especial_verde.svg\">\r\n                <div><span> {{items.EntregaE }}</span></div>\r\n              </div>\r\n              <div *ngIf=\"items.RevisionE > 0\">\r\n                <img src=\"assets/Images/Images/revision_verde.svg\">\r\n                <div><span> {{items.RevisionE }}</span></div>\r\n              </div>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n          </div>\r\n          <div class=\"monto no-drag\"> Monto total: <span> {{ items.monto |  acFormatMoney}} </span></div>\r\n        </div>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n\r\n      <div class=\"contenedorMapa\">\r\n        <div class=\"rutasMensajero\" *ngIf=\"mostrarRutas\">\r\n          <div class=\"contenedor\">\r\n            <div class=\"nombre\">\r\n              <div><span>Ruta:&nbsp;</span>{{itemsAux[colorPin].mensajero}}</div>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n\r\n            <div *ngIf=\"idEmpleado == 115\" class=\"detalle\">\r\n              <span>\r\n                Origen:</span> José María Morelos 164, Niño Jesús, 14080 Ciudad de México, CDMX <br>\r\n              <img src=\"assets/Images/Images/reloj.svg\" height=\"14px\"> <span>TET:\r\n              </span>\r\n              <span *ngIf=\"arregloDistancias[colorPin].min > 60\">\r\n                {{arregloDistancias[colorPin].min/60 | acFormatNumber}} hr&nbsp;\r\n              </span>\r\n              <span>\r\n                {{arregloDistancias[colorPin].min%60}} min\r\n              </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"idEmpleado !== 115\" class=\"detalle\">\r\n              <span>\r\n                Origen:</span> Calle La Villa #1996 Int. 3A, Col. Chapalita, Guadalajara, Jal <br>\r\n              <img src=\"assets/Images/Images/reloj.svg\" height=\"14px\"> <span>TET:\r\n              </span>\r\n              <span *ngIf=\"arregloDistancias[colorPin].min > 60\">\r\n                {{arregloDistancias[colorPin].min/60 | acFormatNumber}} hr&nbsp;\r\n              </span>\r\n              <span>\r\n                {{arregloDistancias[colorPin].min%60}} min\r\n              </span>\r\n            </div>\r\n\r\n            <mat-divider></mat-divider>\r\n            <!--Se muestra la lista que se puede deslizar para mandar a almacen-->\r\n            <div class=\"contenedorDetalle\" id=\"clientes\" [dragula]=\"MANY_ITEMS\" [(dragulaModel)]='itemsAux3'>\r\n              <div class=\"detalles\" id=\"cliente\"  *ngFor=\"let item of itemsAux3 ; let i = index;\" [ngClass]=\"item.activo?'':'no-drag'\" [style.background] = \"item.activo ?'':'#ECEEF0'\">\r\n                <div class=\"uno\"> # {{ i+1 }} ·</div>\r\n                <div class=\"dos\">\r\n                  <div class=\"nombreCliente\"> {{ item.cliente }}\r\n                  </div>\r\n                  <div class=\"zona\"><img [src]=\"_pin[colorPin+1]\" height=\"14px\"> Zona: {{ item.zona}}\r\n                    <label *ngIf=\"item.coordenada[0] == 0 && item.activo\" style=\"color:#C1272D\"> Sin validar </label>\r\n                  </div>\r\n                  <div class=\"direccion\">{{ item.calle}}</div>\r\n                  <div class=\"tiempo\">\r\n                    <!--<p *ngIf=\"item.activo\"><img src=\"assets/Images/Images/reloj.svg\" height=\"14px\">\r\n                      &nbsp;TEE: 20 min · TET: {{arregloDistancias[colorPin].minT[i]}} min\r\n                    </p>--> <!--Se comento por que aun no se calcula-->\r\n                    <p  style=\"color:#008894\">FEE+ <label  style=\"color:#242424\">{{item.fee}}</label></p>\r\n                    <p *ngIf=\"!item.activo\">\r\n                      Recibe: {{item.dias}}\r\n                    </p>\r\n                    <span>Horario Cliente: {{ item.horarioDe}} hrs · {{ item.horarioA }} hrs</span>\r\n                  </div>\r\n\r\n                  <div class=\"eventos\" (click)=\"mostrarDetalleEventos(i)\">\r\n                    <div>\r\n                      {{ item.eventosJuntos.length}} Eventos -\r\n                    </div>\r\n                    <div *ngIf=\"item.Entrega > 0\">\r\n                      <span *ngIf=\"item.prioridad == 'P3'\"\r\n                            style=\"color: #39B54A; font-size: 12px; \"> {{item.Entrega }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P2'\"\r\n                            style=\"color: #FBB03B; font-size: 12px;\"> {{item.Entrega }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P1'\" style=\"color: #C1272D; font: 12px;\"> {{item.Entrega }}</span>\r\n                      <img src=\"assets/Images/Images/entrega_verde.svg\">\r\n                    </div>\r\n                    <div *ngIf=\"item.Cobro > 0\">\r\n                      <span *ngIf=\"item.prioridad == 'P3'\" style=\"color: #39B54A; font: 12px;\"> {{item.Cobro }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P2'\" style=\"color: #FBB03B; font: 12px;\">{{item.Cobro }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P1'\" style=\"color: #C1272D; font: 12px;\"> {{item.Cobro }}</span>\r\n                      <img src=\"assets/Images/Images/cobro_verde.svg\">\r\n                    </div>\r\n                    <div *ngIf=\"item.RecoleccionM > 0\">\r\n                      <span *ngIf=\"item.prioridad == 'P3'\"\r\n                            style=\"color: #39B54A; font: 12px;\"> {{item.RecoleccionM }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P2'\"\r\n                            style=\"color: #FBB03B; font: 12px;\">{{item.RecoleccionM }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P1'\"\r\n                            style=\"color: #C1272D; font: 12px;\"> {{item.RecoleccionM }}</span>\r\n                      <img src=\"assets/Images/Images/R_material_verde.svg\">\r\n                    </div>\r\n                    <div *ngIf=\"item.Revision > 0\">\r\n                        <span *ngIf=\"item.prioridad == 'P3'\"\r\n                              style=\"color: #39B54A; font: 12px;\"> {{item.Revision }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P2'\" style=\"color: #FBB03B; font: 12px;\">{{item.Revision }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P1'\"\r\n                            style=\"color: #C1272D; font: 12px;\"> {{item.Revision }}</span>\r\n                      <img src=\"assets/Images/Images/revision_verde.svg\">\r\n                    </div>\r\n                    <div *ngIf=\"item.EntregaE > 0\">\r\n                        <span *ngIf=\"item.prioridad == 'P3'\"\r\n                              style=\"color: #39B54A; font: 12px;\"> {{item.EntregaE }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P2'\" style=\"color: #FBB03B; font: 12px;\">{{item.EntregaE }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P1'\"\r\n                            style=\"color: #C1272D; font: 12px;\"> {{item.EntregaE }}</span>\r\n                      <img src=\"assets/Images/Images/e_especial_verde.svg\">\r\n                    </div>\r\n                    <div *ngIf=\"item.RevisionE > 0\">\r\n                        <span *ngIf=\"item.prioridad == 'P3'\"\r\n                              style=\"color: #39B54A; font: 12px;\"> {{item.RevisionE }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P2'\"\r\n                            style=\"color: #FBB03B; font: 12px;\">{{item.RevisionE }}</span>\r\n                      <span *ngIf=\"item.prioridad == 'P1'\"\r\n                            style=\"color: #C1272D; font: 12px;\"> {{item.RevisionE }}</span>\r\n                      <img src=\"assets/Images/Images/revision_verde.svg\">\r\n                    </div>\r\n                  </div>\r\n                  <!-- Fin Eventos -->\r\n                  <div class=\"monto\">\r\n                    <div> Monto: $ {{ item.monto}} USD</div>\r\n                    <div class=\"imgs\" *ngIf=\"item.activo\"><img src=\"assets/Images/Images/move-arrows.svg\" alt=\"\"></div>\r\n                    <div *ngIf=\"!item.activo\"><img src=\"assets/Images/Images/block_icono.svg\" alt=\"\"></div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mapa\">\r\n          <ngui-map [zoom]=\"zoom\" [center]=\"_proquifaMap\" (mapDrag)=\"mapaClick()\" (zoom_changed)=\"mapaClick()\"\r\n                    [streetViewControl]=\"false\" [fullscreenControl]=\"false\" [mapTypeControl]=\"false\">\r\n\r\n            <marker [position]=\"_proquifa\" [icon]=\"{ url:_pin[0],  size: [40,50], scaledSize: [40,50] }\"\r\n                    (click)=\"info1($event)\">\r\n              <info-window id=\"iw2\">\r\n                <div class=\"cuadro\">\r\n                  <div class=\"imagen\"><img src=\"assets/login/logo.svg\" width=\"66px\">\r\n                  </div>\r\n\r\n                  <div class=\"texto\">\r\n                    <span> PROQUIFA </span>\r\n                    <br>\r\n                    {{itemsAux[colorPin].mensajero}}\r\n                    <br>\r\n                    {{ clientesTotales }} Clientes\r\n                    <br>\r\n                    Tiempo de recorrido:\r\n                  </div>\r\n                </div>\r\n              </info-window>\r\n\r\n            </marker>\r\n\r\n\r\n            <marker *ngFor=\"let _coor of _coordenadas let i = index;\" [position]=\"_coor\"\r\n                    [icon]=\"{ url:_pin[_separadorColor[i]],  size: [40,50], scaledSize: [40,50] }\"\r\n                    (click)=\"info2($event,i)\">\r\n              <info-window id=\"iw3\">\r\n                <div class=\"cuadro\" style=\"height: 80px;\">\r\n                  <div class=\"imagen\">\r\n                    <img *ngIf=\"idCliente_C != 0\" [src]=\"'assets/Images/clientes/'+idCliente_C+'_grande.png'\"\r\n                         onError=\"this.src = 'assets/login/logo.svg'\" width=\"66px\" #img>\r\n                    <img *ngIf=\"idCliente_C == 0\" src=\"assets/login/logo.svg\" width=\"66px\">\r\n                  </div>\r\n                  <div class=\"texto\">\r\n                    <span>{{ nombre_C }} </span>\r\n                    <br>\r\n                    Zona : {{ zona_C }}\r\n                    <br>\r\n                    Direccion: {{ direccion_C }}\r\n                    <br>\r\n                    Mensajero: {{ mensajero_C }}\r\n                    <br>\r\n                  </div>\r\n                </div>\r\n              </info-window>\r\n            </marker>\r\n\r\n            <marker *ngFor=\"let marker of positions let i = index;\" (click)=\"info($event,marker[1])\"\r\n                    [position]=\"marker[0]\"\r\n                    [label]=\"{ color: '#ffff', fontWeight: 'bold',fontSize:'22px',text: (marker[1]+1).toString() }\"\r\n                    [icon]=\"{ url: _pin2[colorPin+1],  size: [40,50], scaledSize: [40,50] }\">\r\n              <info-window id=\"iw\" (closeclick)=\"infoWindows($event,i)\">\r\n                <div class=\"cuadro\">\r\n                  <div class=\"imagen\">\r\n                    <img *ngIf=\"idCliente != 0\" src=\"assets/Images/clientes/{{idCliente}}_grande.png\"\r\n                         onError=\"this.src = 'assets/login/logo.svg'\" width=\"66px\">\r\n                    <img *ngIf=\"idCliente == 0\" src=\"assets/login/logo.svg\" width=\"66px\">\r\n                  </div>\r\n                  <div class=\"texto\">\r\n                    <span>{{ nombreC }} </span>\r\n                    <br>\r\n                    Zona {{ zonaC }} : {{ direccionC }}\r\n                    <br>\r\n                    {{ totaEventosC }} - Eventos: {{ eventosC }}\r\n                    <br>\r\n                    Monto: ${{ montoC }}\r\n                  </div>\r\n                  <div class=\"botonMap\"><img src=\"assets/Images/Images/mover_evento.svg\" width=\"19px\"\r\n                                             (click)=\"asignar($event)\">\r\n                  </div>\r\n\r\n                </div>\r\n              </info-window>\r\n\r\n              <div class=\"posi\" *ngIf=\"show \" [style.top]=\"infoWindowY\" [style.left]=\"infoWindowX\">\r\n                <div style=\"padding: 0px 20px;\"> Reasignar</div>\r\n                <div class=\"separador\" style=\"margin: 0px 20px; max-width: 190px;\"></div>\r\n                <div class=\"lstReasignar\">\r\n                  <div class=\"itemAlmacen\" (click)=\"moverAlmacen()\">\r\n                    <div>Almacén</div>\r\n                    <span>{{clientesAlmacen}} Clientes Asignados</span>\r\n                    <span>{{eventosAlmacen}} Entregas</span>\r\n                  </div>\r\n                  <div *ngFor=\"let item of itemsAux  let x = index\">\r\n                    <div class=\"itemMensajero\" (click)=\"moverMensajero(x)\" *ngIf=\"colorPin != x\">\r\n                      <div>{{item.mensajero}}</div>\r\n                      <span>{{item.zona }}</span>\r\n                      <span>{{item.cliente}} Clientes Asignados {{item.Entrega + item.Cobro + item.RecoleccionM + item.Revision + item.EntregaE + item.RevisionE}} Eventos</span>\r\n                      <span>Ruta: {{ arregloDistancias[x].km | acFormatNumber2decimal }} Km · </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </marker>\r\n\r\n            <polyline [path]=\"path\" [geodesic]=\"true\" [strokeColor]=\"'yellow'\" [strokeWeight]=\"8\"></polyline>\r\n\r\n            <map-polygon *ngIf=\"idEmpleado == 115\" [paths]=\"CUERNAVACA\" [strokeColor]=\"'#4F47A0'\" [fillColor]=\"'#7368EF'\" ></map-polygon>\r\n            <map-polygon *ngIf=\"idEmpleado == 115\" [paths]=\"TOLUCA\" [strokeColor]=\"'#0838DD'\" [fillColor]=\"'#0838DD'\"></map-polygon>\r\n            <map-polygon *ngIf=\"idEmpleado == 115\" [paths]=\"CDMX\" [strokeColor]=\"'#900280'\" [fillColor]=\"'#900280'\"></map-polygon>\r\n            <map-polygon *ngIf=\"idEmpleado == 115\" [paths]=\"PUEBLA\" [strokeColor]=\"'#FC187B'\" [fillColor]=\"'#FC187B'\"></map-polygon>\r\n            <map-polygon *ngIf=\"idEmpleado !== 115\" [paths]=\"JALISCO\" [strokeColor]=\"'#900280'\" [fillColor]=\"'#900280'\"></map-polygon>\r\n\r\n\r\n          </ngui-map>\r\n        </div>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n\r\n      <div class=\"linea2\">\r\n        <div class=\"linea2Div1\" *ngIf=\"mostrarRutas\">\r\n          <div class=\"divAlmacen\" id=\"almacen\" [dragula]=\"MANY_ITEMS\" [(dragulaModel)]='lstAlmacen'>\r\n            <div class=\"no-drag\">\r\n              <span>Almacen</span>\r\n            </div>\r\n            <div class=\"no-drag\">\r\n              <span>Clientes:</span> {{clientesAlmacen}}&nbsp;·&nbsp;<span>Entregas:</span> {{eventosAlmacen}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"linea2Div2\">\r\n          <div class=\"leyenda\"><span> *si no se publican los cambios antes de las 18:00 hrs, el sistema lo hará en\r\n          automático. </span></div>\r\n          <div class=\"boton1\" *ngIf=\"publicar\">\r\n            <button mat-flat-button (click)=\"guardarRuta()\">GUARDAR</button>\r\n          </div>\r\n          <div class=\"boton1\" *ngIf=\"!publicar\" [style.pointerEvents]=\"bloquearBtn?'none':'auto'\">\r\n            <button mat-flat-button (click)=\"publicarA()\">PUBLICAR</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"notaciones\">\r\n        <div class=\"alineacion\">\r\n          <span style=\"font-weight: bold; font: 12px; margin-right: 5px;\">TEE</span><label>: Tiempo Estimado de\r\n          Evento</label>\r\n          <div></div>\r\n\r\n          <span style=\"font-weight: bold; font: 12px;  margin-right: 5px;\">TET</span><label>:Tiempo Estimado de\r\n          Traslado</label>\r\n          <div></div>\r\n\r\n          <span style=\"font-weight: bold; color: #C1272D; font: 12px;  margin-right: 5px;\">P1</span><label>:Prioridad\r\n          1</label>\r\n          <div></div>\r\n\r\n          <span style=\"font-weight: bold; color: #FBB03B; font: 12px; margin-right: 5px; \">P2</span><label>:Prioridad\r\n          2</label>\r\n          <div></div>\r\n\r\n          <span style=\"font-weight: bold; color: #39B54A; font: 12px ;  margin-right: 5px;\">P3</span> <label>:Prioridad\r\n          3</label>\r\n          <div></div>\r\n\r\n          <img src=\"assets/Images/Images/entrega_verde.svg\" style=\" margin-right: 5px; width: 12px; height: 15px;\">\r\n          <label>:Entrega</label>\r\n          <div></div>\r\n\r\n          <img src=\"assets/Images/Images/cobro_verde.svg\" style=\" margin-right: 5px; width: 12px; height: 15px;\"><label>:Cobro</label>\r\n          <div></div>\r\n\r\n          <img src=\"assets/Images/Images/revision_verde.svg\"\r\n               style=\" margin-right: 5px; width: 12px; height: 15px;\"><label>:Revisión</label>\r\n          <div></div>\r\n\r\n          <img src=\"assets/Images/Images/e_especial_verde.svg\"\r\n               style=\" margin-right: 5px; width: 12px; height: 15px;\"><label>:Entrega\r\n          Especial</label>\r\n          <div></div>\r\n\r\n          <img src=\"assets/Images/Images/R_material_verde.svg\"\r\n               style=\" margin-right: 5px; width: 12px; height: 15px;\"><label>:Recolección\r\n          de Material</label>\r\n          <div></div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"grafica\" *ngIf=\"show_grafica\">\r\n      <div class=\"lineaGraficas\">\r\n        <div><label>Asignar Mensajero </label></div>\r\n      </div>\r\n\r\n      <div class=\"contenedoGraficas\" *ngIf=\"hay\">\r\n        <div class=\"gr_gr\">\r\n          <div class=\"canvas-container\">\r\n            <p class=\"donut-title\">Mensajero</p>\r\n            <pn-donut-chart [idGrafica]=\"0+'gms'\" [data]=\"graficasValores_p[0]\"\r\n                            [tipoGrafica]=\"graficaTipos_p[0]\"></pn-donut-chart>\r\n          </div>\r\n        </div>\r\n        <div class=\"gr_ch\">\r\n          <div style=\"height: 100%; width: 100%;\">\r\n            <div class=\"alineacion\">\r\n              <div style=\"height: 100%; width: 40%; margin-right: 60px;\">\r\n                <p class=\"donut-title\">Zona</p>\r\n                <pn-donut-chart [idGrafica]=\"1+'gms_s'\" [data]=\"graficasValores_p[1]\"\r\n                                [tipoGrafica]=\"graficaTipos_p[1]\"></pn-donut-chart>\r\n              </div>\r\n              <div style=\"height: 100%; width: 40%; \">\r\n                <p class=\"donut-title\">Eventos</p>\r\n                <pn-donut-chart [idGrafica]=\"2+'gms_s'\" [data]=\"graficasValores_p[2]\"\r\n                                [tipoGrafica]=\"graficaTipos_p[2]\"></pn-donut-chart>\r\n              </div>\r\n            </div>\r\n            <div class=\"alineacion\">\r\n              <div style=\"height: 100%; width: 40%;     margin-right: 60px;                     \">\r\n                <p class=\"donut-title\">Prioridades</p>\r\n                <pn-donut-chart [idGrafica]=\"3+'gms_ss'\" [data]=\"graficasValores_p[3]\"\r\n                                [tipoGrafica]=\"graficaTipos_p[3]\"></pn-donut-chart>\r\n              </div>\r\n              <div style=\"height: 100%; width: 40%;\">\r\n                <p class=\"donut-title\">Clientes</p>\r\n                <pn-donut-chart [idGrafica]=\"4+'gms_ss'\" [data]=\"graficasValores_p[4]\"\r\n                                [tipoGrafica]=\"graficaTipos_p[4]\"></pn-donut-chart>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"contenedoGraficas\" *ngIf=\"nohay\">\r\n        <div class=\"gr_gr\">\r\n          <div class=\"canvas-container\">\r\n            <p class=\"donut-title\">Mensajero</p>\r\n            <pn-donut-chart [idGrafica]=\"'sinDatosGr1'\" [data]=\"dataSD\" [tipoGrafica]=\"'Gris'\"></pn-donut-chart>\r\n          </div>\r\n        </div>\r\n        <div class=\"gr_ch\">\r\n          <div style=\"height: 100%; width: 100%;\">\r\n            <div class=\"alineacion\">\r\n              <div style=\"height: 100%; width: 40%; margin-right: 60px;\">\r\n                <p class=\"donut-title\">Zona</p>\r\n                <pn-donut-chart [idGrafica]=\"'sinDatosGr'\" [data]=\"dataSD1\" [tipoGrafica]=\"'Gris'\"></pn-donut-chart>\r\n              </div>\r\n              <div style=\"height: 100%; width: 40%; \">\r\n                <p class=\"donut-title\">Eventos</p>\r\n                <pn-donut-chart [idGrafica]=\"'sinDatosGr2'\" [data]=\"dataSD2\" [tipoGrafica]=\"'Gris'\"></pn-donut-chart>\r\n              </div>\r\n            </div>\r\n            <div class=\"alineacion\">\r\n              <div style=\"height: 100%; width: 40%;     margin-right: 60px;                     \">\r\n                <p class=\"donut-title\">Prioridades</p>\r\n                <pn-donut-chart [idGrafica]=\"'sinDatosGr4'\" [data]=\"dataSD3\" [tipoGrafica]=\"'Gris'\"></pn-donut-chart>\r\n              </div>\r\n              <div style=\"height: 100%; width: 40%;\">\r\n                <p class=\"donut-title\">Clientes</p>\r\n                <pn-donut-chart [idGrafica]=\"'sinDatosGr3'\" [data]=\"dataSD4\" [tipoGrafica]=\"'Gris'\"></pn-donut-chart>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"boton\" *ngIf=\"hay\">\r\n        <div [style.pointerEvents]=\"activarBoton ? 'auto' : 'none'\">\r\n          <button mat-flat-button (click)=\"mostrarGraficas()\" [style.background]=\"activarBoton?'#008895' : '#ECEEF0'\">\r\n            INGRESAR\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"container\" *ngIf=\"modalConfirm\">\r\n      <div class=\"modal\">\r\n        <div>PROQUIFA</div>\r\n        <div>\r\n          <div></div>\r\n          <div>¿Estas seguro de querer reasignar este cliente al almacén?</div>\r\n        </div>\r\n        <div>\r\n          <div (click)=\"aceptModalConfirm()\">SI</div>\r\n          <div (click)=\"closeModalConfirm()\">NO</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"activarAlerta\">\r\n      <pq-alerta *ngIf=\"activarAlerta\" [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlerta($event)\"></pq-alerta>\r\n    </div>\r\n\r\n    <div class=\"containerDetalle\" *ngIf=\"detalleEventos\">\r\n      <div class=\"modal\">\r\n        <div>Eventos</div>\r\n        <div>\r\n          <div>{{itemsAux[colorPin].mensajero}}</div>\r\n          <div><span>Cliente:</span>&nbsp;{{itemsAux3[eventoNum].cliente}}</div>\r\n          <div>\r\n            <div><span>Zona:</span>&nbsp;{{itemsAux3[eventoNum].zona}}&nbsp;·&nbsp;<span>Ruta:</span>&nbsp;N/D</div>\r\n            <div>\r\n              {{ itemsAux3[eventoNum].eventosJuntos.length}} Evento\r\n              <div *ngIf=\"itemsAux3[eventoNum].eventosJuntos.length > 1\">s</div>\r\n              :&nbsp;\r\n              <div *ngIf=\"itemsAux3[eventoNum].Entrega > 0\">\r\n                      <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P3'\"\r\n                            style=\"color: #39B54A; font-size: 12px; \"> {{itemsAux3[eventoNum].Entrega }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P2'\"\r\n                      style=\"color: #FBB03B; font-size: 12px;\"> {{itemsAux3[eventoNum].Entrega }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P1'\" style=\"color: #C1272D; font: 12px;\"> {{itemsAux3[eventoNum].Entrega }}</span>\r\n                <img src=\"assets/Images/Images/entrega_verde.svg\">\r\n              </div>\r\n              <div *ngIf=\"itemsAux3[eventoNum].Cobro > 0\">\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P3'\" style=\"color: #39B54A; font: 12px;\"> {{itemsAux3[eventoNum].Cobro }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P2'\" style=\"color: #FBB03B; font: 12px;\"> {{itemsAux3[eventoNum].Cobro }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P1'\" style=\"color: #C1272D; font: 12px;\"> {{itemsAux3[eventoNum].Cobro }}</span>\r\n                <img src=\"assets/Images/Images/cobro_verde.svg\">\r\n              </div>\r\n              <div *ngIf=\"itemsAux3[eventoNum].RecoleccionM > 0\">\r\n                      <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P3'\"\r\n                            style=\"color: #39B54A; font: 12px;\"> {{itemsAux3[eventoNum].RecoleccionM }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P2'\"\r\n                      style=\"color: #FBB03B; font: 12px;\">{{itemsAux3[eventoNum].RecoleccionM }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P1'\"\r\n                      style=\"color: #C1272D; font: 12px;\"> {{itemsAux3[eventoNum].RecoleccionM }}</span>\r\n                <img src=\"assets/Images/Images/R_material_verde.svg\">\r\n              </div>\r\n              <div *ngIf=\"itemsAux3[eventoNum].Revision > 0\">\r\n                        <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P3'\"\r\n                              style=\"color: #39B54A; font: 12px;\"> {{itemsAux3[eventoNum].Revision }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P2'\" style=\"color: #FBB03B; font: 12px;\">{{itemsAux3[eventoNum].Revision }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P1'\"\r\n                      style=\"color: #C1272D; font: 12px;\"> {{itemsAux3[eventoNum].Revision }}</span>\r\n                <img src=\"assets/Images/Images/revision_verde.svg\">\r\n              </div>\r\n              <div *ngIf=\"itemsAux3[eventoNum].EntregaE > 0\">\r\n                        <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P3'\"\r\n                              style=\"color: #39B54A; font: 12px;\"> {{itemsAux3[eventoNum].EntregaE }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P2'\" style=\"color: #FBB03B; font: 12px;\">{{itemsAux3[eventoNum].EntregaE }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P1'\"\r\n                      style=\"color: #C1272D; font: 12px;\"> {{itemsAux3[eventoNum].EntregaE }}</span>\r\n                <img src=\"assets/Images/Images/e_especial_verde.svg\">\r\n              </div>\r\n              <div *ngIf=\"itemsAux3[eventoNum].RevisionE > 0\">\r\n                        <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P3'\"\r\n                              style=\"color: #39B54A; font: 12px;\"> {{itemsAux3[eventoNum].RevisionE }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P2'\"\r\n                      style=\"color: #FBB03B; font: 12px;\">{{itemsAux3[eventoNum].RevisionE }}</span>\r\n                <span *ngIf=\"itemsAux3[eventoNum].prioridad == 'P1'\"\r\n                      style=\"color: #C1272D; font: 12px;\"> {{itemsAux3[eventoNum].RevisionE }}</span>\r\n                <img src=\"assets/Images/Images/revision_verde.svg\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div><span>Monto Total:</span>&nbsp;${{itemsAux3[eventoNum].monto}} USD</div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div *ngIf=\"itemsAux3[eventoNum].Entrega > 0\">\r\n            <div>\r\n              <div><img src=\"assets/Images/Images/entrega_verde.svg\"></div>\r\n              Entrega\r\n            </div>\r\n            <div class=\"divEntrega\">\r\n              <div *ngFor=\"let item of itemsAux3[eventoNum].foliosPL let i = index; \">\r\n                <div style=\"display: flex; justify-content: space-between;\">\r\n                  <span>#{{i+1}}&nbsp;·&nbsp;{{item}}</span>\r\n                  <span style=\"color:#008894 \">FEE+ <label style=\"color:#242424\">{{itemsAux3[eventoNum].fechas[i]}}</label></span>\r\n                </div>\r\n                <div *ngFor=\"let item2 of facturas[item] let i2 = index;\" style=\"padding-left:10px;margin: 7px 0 12px 0;\">\r\n                  #{{i2+1}}&nbsp;·&nbsp;{{item2}}&nbsp;\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"itemsAux3[eventoNum].Cobro > 0\">\r\n            <div>\r\n              <div><img src=\"assets/Images/Images/cobro_verde.svg\"></div>\r\n              Cobro\r\n            </div>\r\n            <div>\r\n              <div *ngFor=\"let item of itemsAux3[eventoNum].foliosPC let i = index; \">\r\n                #{{i+1}}&nbsp;·&nbsp;{{item}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"itemsAux3[eventoNum].RecoleccionM > 0\">\r\n            <div>\r\n              <div><img src=\"assets/Images/Images/R_material_verde.svg\"></div>\r\n              Recolección de Material\r\n            </div>\r\n            <div>\r\n              <div *ngFor=\"let item of itemsAux3[eventoNum].foliosRM let i = index; \">\r\n                #{{i+1}}&nbsp;·&nbsp;{{item}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"itemsAux3[eventoNum].Revision > 0\">\r\n            <div>\r\n              <div><img src=\"assets/Images/Images/revision_verde.svg\"></div>\r\n              Revisión\r\n            </div>\r\n            <div>\r\n              <div *ngFor=\"let item of itemsAux3[eventoNum].foliosPR let i = index; \">\r\n                #{{i+1}}&nbsp;·&nbsp;{{item}}&nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"itemsAux3[eventoNum].EntregaE > 0\">\r\n            <div>\r\n              <div><img src=\"assets/Images/Images/e_especial_verde.svg\"></div>\r\n              Entrega Especial\r\n            </div>\r\n            <div>\r\n              <div *ngFor=\"let item of itemsAux3[eventoNum].foliosES let i = index; \">\r\n                #{{i+1}}&nbsp;·&nbsp;{{item}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"itemsAux3[eventoNum].RevisionE > 0\">\r\n            <div>\r\n              <div><img src=\"assets/Images/Images/revision_verde.svg\"></div>\r\n              Revisión Especial\r\n            </div>\r\n            <div>\r\n              <div *ngFor=\"let item of itemsAux3[eventoNum].foliosRE let i = index; \">\r\n                #{{i+1}}&nbsp;·&nbsp;{{item}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div># {{itemsAux3[eventoNum].eventosJuntos.length}} Eventos</div>\r\n          <div>\r\n            <div (click)=\"ocultarDetalleEventos()\">ACEPTAR</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"activarAlerta\">\r\n      <pq-alerta *ngIf=\"activarAlerta\" [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlerta($event)\"></pq-alerta>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta.component.scss":
/***/ (function(module, exports) {

module.exports = "ngui-map{display:block;height:100%}.padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font:12px Roboto-Regular}agm-map{height:300px}.cuadro{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin:5px 0;height:70px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cuadro .imagen{float:left;background:#fff;margin-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.cuadro .texto{float:left;padding-left:10px;width:129px;background:#fff;border-left:1px solid #e6e6e6;font-size:8px;line-height:1.3em}.cuadro .texto span{font:8px Roboto-Bold}.cuadro .botonMap{float:left;background:#fff;width:19px;margin-left:5px;margin-top:-5px}.posi{float:right;background:#fff;position:absolute;max-height:250px;width:230px;padding:15px 0px;font-size:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.posi>div:nth-of-type(1){height:25px;font-size:14px;font-weight:bold}.posi .separador{background:#008894;height:1px;width:100%;margin-top:-10px;margin-bottom:5px}.posi .lstReasignar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;max-height:190px;margin-top:10px}.posi .lstReasignar .itemMensajero{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;cursor:pointer;margin-top:10px;min-height:55px;max-height:55px;padding:5px 20px}.posi .lstReasignar .itemMensajero>span{font:12px Roboto-Light}.posi .lstReasignar .itemMensajero:hover{background:#eceef0}.posi .lstReasignar>.itemAlmacen{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;cursor:pointer;min-height:55px;max-height:55px;padding:5px 20px}.posi .lstReasignar>.itemAlmacen>span{font:12px Roboto-Light}.posi .lstReasignar>.itemAlmacen:hover{background:#eceef0}.todo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%}.linea{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:#424242 2px solid;margin-top:8px;padding:0px 20px 10px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.linea img{margin-top:2px}.linea label{font:22px Novecento;margin-left:13px;color:#5b5b5b}.mensajeros{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:217px;overflow:auto}.detalleMensajero{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:211px;max-width:211px;border-right:#bfc3c6 1px solid;text-align:center;padding:21px;-webkit-box-sizing:border-box;box-sizing:border-box}.detalleMensajero .mat-divider{width:100%;margin-bottom:5px}.detalleMensajero .nombre{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;font-size:16px;color:#424242;text-align:center;font-weight:bold;margin-bottom:10px}.detalleMensajero .nombre>.tooltip{position:relative;display:inline-block;cursor:pointer}@supports(-webkit-line-clamp: 1){.detalleMensajero .nombre>.tooltip>.texto{display:block;display:-webkit-box !important;line-height:1.5em;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;height:20px}}@supports not (-webkit-line-clamp: 1){.detalleMensajero .nombre>.tooltip>.texto{position:relative;height:20px !important;line-height:1.5em;overflow:hidden;width:100%}.detalleMensajero .nombre>.tooltip>.texto:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.detalleMensajero .nombre>.tooltip>.tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.detalleMensajero .nombre>.tooltip:hover>.tooltiptext{visibility:visible;opacity:1;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.detalleMensajero .nombre>.tooltip>.tooltiptext{visibility:hidden;width:130px;background-color:#424242;color:#fff;font-family:\"Roboto\";text-align:left;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:0;margin-top:5px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}.detalleMensajero .nombre .mat-divider{margin-top:5px;margin-bottom:5px}.detalleMensajero .zona{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;font-size:12px;margin-top:5px}.detalleMensajero .zona .zonaTxt{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.detalleMensajero .zona .zonaTxt>.tooltip{position:relative;display:inline-block;cursor:pointer}.detalleMensajero .zona .zonaTxt>.tooltip>.texto{text-align:left}@supports(-webkit-line-clamp: 1){.detalleMensajero .zona .zonaTxt>.tooltip>.texto{display:block;display:-webkit-box !important;line-height:16px;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;height:16px}}@supports not (-webkit-line-clamp: 1){.detalleMensajero .zona .zonaTxt>.tooltip>.texto{position:relative;height:16px !important;line-height:16px;overflow:hidden;width:100%}.detalleMensajero .zona .zonaTxt>.tooltip>.texto:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.detalleMensajero .zona .zonaTxt>.tooltip>.tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.detalleMensajero .zona .zonaTxt>.tooltip:hover>.tooltiptext{visibility:visible;opacity:1;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.detalleMensajero .zona .zonaTxt>.tooltip>.tooltiptext{visibility:hidden;width:auto;background-color:#424242;color:#fff;font-family:\"Roboto\";text-align:left;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:0;margin-top:5px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}.detalleMensajero .zona .zonaTxt span{font:12px Roboto-Light}.detalleMensajero .zona .mat-divider{margin-top:5px;margin-bottom:5px}.detalleMensajero .total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;font-size:12px;height:73px}.detalleMensajero .total>div:nth-of-type(1)>div:nth-of-type(1){margin-bottom:3px}.detalleMensajero .total>div:nth-of-type(1)>div span{font:12px Roboto-Light}.detalleMensajero .total .mat-divider{margin-top:5px;margin-bottom:5px}.detalleMensajero .monto{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;font-size:12px}.detalleMensajero .monto .mat-divider{margin-top:2%}.detalleMensajero .monto span{font:12px Roboto-Light}.detalleMensajero .bolitaColor{min-height:12px;min-width:12px;border-radius:50px;margin-left:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.detalleMensajero .iconitos{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;margin-top:10px;width:100%}.detalleMensajero .iconitos div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:20%;height:100%}.detalleMensajero .iconitos div div{margin-left:3px;font:10px Roboto-Regular;margin-bottom:10px}.detalleMensajero:hover{background:#eceef0}.contenedorMapa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font:10px Roboto-Bold;height:70%}.mapa{width:100%}.rutasMensajero{line-height:18px;min-width:435px;max-width:435px;height:100%;padding:0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.rutasMensajero .contenedor{width:100%;height:100%}.rutasMensajero .contenedor .nombre{color:#008894;margin-top:5px;margin-bottom:5px;font-size:18px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.rutasMensajero .contenedor .nombre span{font:18px Roboto-Bold}.rutasMensajero .contenedor .detalle{font:16px Roboto-Light;margin-top:10px;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:5px}.rutasMensajero .contenedor .detalle span{font:16px Roboto-Bold}.rutasMensajero .contenedor .contenedorDetalle{height:calc(100vh - 650px);overflow:auto}.rutasMensajero .contenedor .contenedorDetalle .detalles{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:rgba(0,0,0,.12) 1px solid;padding:0px 15px}.rutasMensajero .contenedor .contenedorDetalle .detalles .uno{font:16px Roboto-Bold;width:40px;margin-top:15px;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos{width:90%;margin-bottom:5px;margin-top:15px}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .nombreCliente{font:16px Roboto-Bold}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .zona{font:14px Roboto-Regular}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .direccion{font:14px Roboto-Regular}@supports(-webkit-line-clamp: 2){.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .direccion{display:block;display:-webkit-box !important;line-height:1.2em;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;height:33px}}@supports not (-webkit-line-clamp: 2){.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .direccion{position:relative;height:33px !important;line-height:1.2em;overflow:hidden;width:100%}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .direccion:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .tiempo{font:14px Roboto-Regular}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .tiempo span{color:#008894}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .eventos{font:14px Roboto-Light;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer;width:auto}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .eventos div{border-bottom:1px solid transparent;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;justify-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .eventos div span{margin-left:5px;margin-right:5px;font-weight:bold}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .eventos:hover div{border-bottom:1px solid #008894}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .monto{font:14px Roboto-Light;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .monto div{font:14px Roboto-Light}.rutasMensajero .contenedor .contenedorDetalle .detalles .dos .monto .imgs{display:none;margin-top:-4px}.rutasMensajero .contenedor .contenedorDetalle .detalles:hover{background:#eceef0}.rutasMensajero .contenedor .contenedorDetalle .detalles:hover .imgs{display:inherit !important}.linea2{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.linea2>.linea2Div1{min-width:435px;max-width:435px;border-bottom:#424242 2px solid}.linea2>.linea2Div1 .divAlmacen{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;padding:18px 20px 10px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;font-size:16px;color:#424242}.linea2>.linea2Div1 .divAlmacen>div>span{font-weight:bold}.linea2>.linea2Div2{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:#424242 2px solid;padding:18px 20px 10px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.linea2>.linea2Div2 span{font:12px Novecento}.linea2>.linea2Div2 .leyenda{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.linea2>.linea2Div2 .boton1{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.linea2>.linea2Div2 .boton1 .mat-flat-button{background:#008894;color:#fff;line-height:20px;margin-top:4px;width:170px;height:30px}.notaciones{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.notaciones .alineacion{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;margin-top:10px;height:30px;margin-bottom:5px}.notaciones .alineacion span{font-size:10px}.notaciones .alineacion label{font-size:7px}.notaciones .alineacion div{width:5px;height:1px}.container{position:fixed;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;background:rgba(204,209,209,.6);z-index:99999;margin:auto;top:0;bottom:0;left:0;right:0}.container .modal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:460px;height:240px;background:#fff;position:fixed;margin:auto;top:0;bottom:0;left:0;right:0;border-radius:25px}.container .modal>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;height:30px;border-radius:25px 25px 0 0;background-color:#008895;color:#fff;font-family:Roboto-Bold;font-size:18px}.container .modal>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.container .modal>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%}.container .modal>div:nth-of-type(2)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%}.container .modal>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;margin-bottom:20px}.container .modal>div:nth-of-type(3)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;cursor:pointer;background-color:#008895;width:150px;height:35px;color:#fff;margin:3px;border-radius:7px}.containerDetalle{position:fixed;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;background:rgba(204,209,209,.6);z-index:99999;margin:auto;top:0;bottom:0;left:0;right:0}.containerDetalle .modal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:40%;max-width:750px;max-height:730px;height:60%;background:#fff;position:fixed;margin:auto;top:0;bottom:0;left:0;right:0;border-radius:25px}.containerDetalle .modal>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;height:55px;border-radius:25px 25px 0 0;background-color:#008895;color:#fff;font-family:Roboto-bold;font-size:26px}.containerDetalle .modal>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:Roboto-Light;height:135px;margin:0 30px;border-bottom:1px solid #424242;padding-top:20px;padding-bottom:15px;-webkit-box-sizing:border-box;box-sizing:border-box}.containerDetalle .modal>div:nth-of-type(2)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-family:Roboto-bold;color:#008894;font-size:20px;width:100%;text-transform:uppercase;margin-bottom:10px}.containerDetalle .modal>div:nth-of-type(2)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-family:Roboto-Light;width:100%;font-size:16px;margin-bottom:5px}.containerDetalle .modal>div:nth-of-type(2)>div:nth-of-type(2)>span{font-family:Roboto}.containerDetalle .modal>div:nth-of-type(2)>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-family:Roboto-Light;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;font-size:16px;margin-bottom:5px}.containerDetalle .modal>div:nth-of-type(2)>div:nth-of-type(3)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-family:Roboto-Light}.containerDetalle .modal>div:nth-of-type(2)>div:nth-of-type(3)>div>div{font-family:Roboto-Light}.containerDetalle .modal>div:nth-of-type(2)>div:nth-of-type(3)>div>span{font-family:Roboto}.containerDetalle .modal>div:nth-of-type(2)>div:nth-of-type(4){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;font-size:16px}.containerDetalle .modal>div:nth-of-type(2)>div:nth-of-type(4)>div{font-family:Roboto-Light}.containerDetalle .modal>div:nth-of-type(2)>div:nth-of-type(4)>div>span{color:#008894;font-family:Roboto}.containerDetalle .modal>div:nth-of-type(3){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid #424242;height:58%;margin:0 30px;overflow:scroll}.containerDetalle .modal>div:nth-of-type(3)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:15px;border-bottom:1px solid #eceef0}.containerDetalle .modal>div:nth-of-type(3)>div>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;color:#008895;font-family:Roboto-Bold;font-size:16px;margin:15px 0px}.containerDetalle .modal>div:nth-of-type(3)>div>div:nth-of-type(1)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:25px}.containerDetalle .modal>div:nth-of-type(3)>div>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-size:16px}.containerDetalle .modal>div:nth-of-type(3)>div>.divEntrega{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.containerDetalle .modal>div:nth-of-type(3)>div>.divEntrega>div>span{font-size:16px;font-family:Roboto-Bold}.containerDetalle .modal>div:nth-of-type(4){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:112px;margin:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box}.containerDetalle .modal>div:nth-of-type(4)>div:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;font-size:14px;width:100%;margin-top:2px}.containerDetalle .modal>div:nth-of-type(4)>div:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;margin-top:25px}.containerDetalle .modal>div:nth-of-type(4)>div:nth-of-type(2)>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;cursor:pointer;background-color:#008895;font-family:Roboto-Bold;font-size:21px;width:150px;height:35px;color:#fff;margin:3px;border-radius:7px}.grafica{height:100%;width:100%}.contenedoGraficas{width:100%;height:calc(100vh - 228px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.gr_gr{width:50%}.gr_gr .donut-title{margin-top:10px;font:20px Roboto-Bold;text-align:center}.gr_gr .canvas-container{width:80%;margin-left:20px;margin-top:10px}.gr_ch{width:50%}.gr_ch .alineacion{display:-webkit-box;display:-ms-flexbox;display:flex;height:50%;width:100%}.gr_ch .donut-title{margin-top:10px;font:20px Roboto-Bold;text-align:center}.gr_ch .canvas-container{width:80%;margin-left:20px}.boton{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:0px 20px;margin-bottom:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.boton .mat-flat-button{background:#008894;color:#fff;line-height:30px;min-width:170px}.lineaGraficas{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:#424242 2px solid;margin-top:8px}.lineaGraficas div{margin-bottom:11px}.lineaGraficas label{margin-left:20px;font:22px Novecento;color:#5b5b5b}.gu-transit{display:none;background:#eceef0}.gu-mirror{opacity:.6 !important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:rgba(0,0,0,.12) 1px solid;background:#eceef0}.gu-mirror .uno{font:16px Roboto-Bold;width:40px;margin-top:15px;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.gu-mirror .dos{width:90%;margin-bottom:5px;margin-top:15px}.gu-mirror .dos .nombreCliente{font:16px Roboto-Bold}.gu-mirror .dos .zona{font:14px Roboto-Regular}.gu-mirror .dos .direccion{font:14px Roboto-Regular}.gu-mirror .dos .tiempo{font:14px Roboto-Regular}.gu-mirror .dos .tiempo span{color:#008894}.gu-mirror .dos .eventos{font:14px Roboto-Light;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.gu-mirror .dos .eventos div{text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;justify-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px}.gu-mirror .dos .eventos div span{margin-left:5px;margin-right:5px;font-weight:bold}.gu-mirror .dos .monto{font:14px Roboto-Light;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}.gu-mirror .dos .monto div{font:14px Roboto-Light;width:85%}.gu-mirror .dos .monto .imgs{width:10%}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}"

/***/ }),

/***/ "./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignarRutaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_despachos_gestorRuta_asignar_mensajero_service__ = __webpack_require__("./src/app/services/despachos/gestorRuta/asignar-mensajero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AsignarRutaComponent = /** @class */ (function () {
    function AsignarRutaComponent(comunService, dragulaService, _asignarMensajeroService, coreComponent) {
        var _this = this;
        this.comunService = comunService;
        this.dragulaService = dragulaService;
        this._asignarMensajeroService = _asignarMensajeroService;
        this.coreComponent = coreComponent;
        this.idEmpleado = __WEBPACK_IMPORTED_MODULE_8__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.totAsignar = 0;
        this.totCerrar = 0;
        this.MANY_ITEMS = 'MANY_ITEMS';
        this.subs = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this.classAsideMenu = 'asideNormalMenu';
        this.show = false;
        this.mostrarRutas = false;
        this.rutaSeleccionada = [];
        this.clientes = [];
        this._todos = [];
        this.positions = [];
        this.path = [];
        this.linea = [];
        this.marcadores = [];
        this.modalConfirm = false;
        this.rutaAux = [];
        this._color = [];
        this._pin = [];
        this._pin2 = [];
        this.colorPin = 0; // Color para cada uno
        this.montoTotal = 0;
        this.rutaTotal = 0;
        this.clientesTotales = 0;
        this.eventosTotales = 0;
        this._coordenadas = [];
        this._coordenadasAux = [];
        this._separadorColor = [];
        this._proquifa = [];
        this._proquifaMap = ''; // punto de partida y final
        this.show_grafica = true;
        this.show_mapa = false;
        // Grafica
        this.graficasValores_p = [];
        this.graficaTipos_p = [];
        this.graficas_p = [];
        this.hay = false;
        this.nohay = false;
        this.lstConsultaActual = [];
        this.lstConsultaActual2 = [];
        this.lstConsultaActual3 = [];
        this.lstConsultaActual4 = [];
        this.lstConsultaActual5 = [];
        this.lstmensajeroG = [];
        this.lstzonaG = [];
        this.lsteventosG = [];
        this.lstprioridadesG = [];
        this.lstclientesG = [];
        this.lstAux = [];
        // Listas para clasificar por algun campo
        this.pendientesAgrupados = [];
        this.items = [];
        this.itemsAux = [];
        this.pendientesAgrupados3 = [];
        this.itemsAux3 = [];
        this.seleccionado = [];
        this.arregloDistancias = []; // Arreglo de distancias
        this.arregloDistancias2 = []; // Arreglo de distancias
        this.total_TET = 0;
        // Info marker *
        this.nombre_C = '';
        this.zona_C = '';
        this.direccion_C = '';
        this.eventos_C = '';
        this.monto_C = '';
        this.mensajero_C = '';
        this.idCliente_C = 0;
        // Por mensajero
        this.zonaC = '';
        this.direccionC = '';
        this.eventosC = '';
        this.montoC = '';
        this.nombreC = '';
        this.totaEventosC = 0;
        this.idCliente = 0;
        // RUtas
        this.rutaPG = [];
        this.mandarAlmacen = [];
        this.publicarArr = []; // Arreglo para publicar
        this.publicar = true;
        this.listaClientes = [];
        this.numAyuda = 0;
        this.otroMensajero = [];
        // Numeros
        this.arregloEventos = [];
        this.clickMensajero = false;
        this.detalleEventos = false;
        this.eventoNum = 0;
        this.facturas = [];
        this.dataSD = {
            titulo: 'Sin Datos',
            labels: ['Sin datos'],
            valores: [10],
            labelsExtras: [['Clientes'], ['Eventos']],
            labelsExtrasHover: ['Clientes', 'Eventos'],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0, 0]]
        };
        this.dataSD1 = {
            titulo: 'Sin Datos',
            labels: ['Sin datos'],
            valores: [10],
            labelsExtras: [['Clientes'], ['Eventos']],
            labelsExtrasHover: ['Clientes', 'Eventos'],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0, 0]]
        };
        this.dataSD2 = {
            titulo: 'Sin Datos',
            labels: ['Sin datos'],
            valores: [10],
            labelsExtras: [['Clientes'], ['Eventos']],
            labelsExtrasHover: ['Clientes', 'Eventos'],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0, 0]]
        };
        this.dataSD3 = {
            titulo: 'Sin Datos',
            labels: ['Sin datos'],
            valores: [10],
            labelsExtras: [['Clientes'], ['Eventos']],
            labelsExtrasHover: ['Clientes', 'Eventos'],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0, 0]]
        };
        this.dataSD4 = {
            titulo: 'Sin Datos',
            labels: ['Sin datos'],
            valores: [10],
            labelsExtras: [['Clientes'], ['Eventos']],
            labelsExtrasHover: ['Clientes', 'Eventos'],
            valuesExtras: [0, 0],
            valuesExtrasHover: [[0, 0]]
        };
        this.auxDrop = [];
        this.reloadMensajeros = true;
        this.infoWindowX = '0px';
        this.infoWindowY = '0px';
        this.lstAlmacen = [];
        this.clientesAlmacen = 0;
        this.eventosAlmacen = 0;
        this.clickPosItem = 0;
        this.inicioVista = true;
        this.activarAlerta = false;
        this.mensaje = 'Exito';
        this.totalesGraficasZona = [];
        this.totalesGraficas = [];
        this.totalesGraficasEvent = [];
        this.itemsAgrupados = [];
        dragulaService.createGroup(this.MANY_ITEMS, {
            moves: function (el, source, handle, sibling) { return !el.classList.contains('no-drag'); },
            accepts: function (el, target, source, sibling) {
                if (target.id == ('mensajero' + _this.colorPin)) {
                    return false;
                }
                else {
                    return true;
                }
            }
        });
        this.subs.add(dragulaService.dropModel(this.MANY_ITEMS).subscribe(function (_a) {
            var el = _a.el, target = _a.target, source = _a.source, sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
            // console.log('Dragula!!!');
            _this.publicar = true;
            console.log({ el: el, target: target, source: source, sourceModel: sourceModel, targetModel: targetModel, item: item });
            if (target.id == 'almacen') {
                _this.modalConfirm = true;
                _this.itemAlmacen = Object.assign({}, item);
                _this.itemAuxiliar = Object.assign({}, item);
                // this.mandarAlmacen.push(item);
            }
            else if (target.id != 'almacen') {
                _this.itemsAux3 = sourceModel;
                _this.rutaPG = _this.itemsAux3;
                _this.cambioRuta({ el: el, target: target, source: source, sourceModel: sourceModel, targetModel: targetModel, item: item });
            }
        }));
    }
    AsignarRutaComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
        this.dragulaService.destroy('MANY_ITEMS');
    };
    AsignarRutaComponent.prototype.ngDoCheck = function () {
        console.log();
    };
    AsignarRutaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'gestorRuta') {
                _this.recargar();
            }
        });
        this.inicarMenu();
        this.show_mapa = false;
        this.show_grafica = true;
        this.zoom = 10; // Zoom inicializado
        // Pintan las zona!
        this.CUERNAVACA = [{ lng: -99.3106228345, lat: 19.0272235546 },
            { lng: -99.2913043106, lat: 19.0291659473 }, { lng: -99.26056643539999, lat: 19.0051356852 }, {
                lng: -99.24867436280002,
                lat: 19.0044678533
            }, { lng: -99.2495067486, lat: 19.0080888198 }, {
                lng: -99.21841038140001,
                lat: 19.0070788999
            }, { lng: -99.22926113270002, lat: 18.9842738788 }, { lng: -99.2181210025, lat: 18.9790104299 }, {
                lng: -99.2118445129,
                lat: 18.982822821
            }, { lng: -99.19980578649999, lat: 19.000218513 }, {
                lng: -99.19061658990002,
                lat: 19.0043388575
            }, { lng: -99.1868642946, lat: 19.0001335186 }, { lng: -99.18015917410001, lat: 18.9764534121 }, {
                lng: -99.1836908289,
                lat: 18.9383780007
            }, { lng: -99.1818396308, lat: 18.9162843414 }, { lng: -99.1935931762, lat: 18.9252259592 }, {
                lng: -99.19549103050001,
                lat: 18.91337538300001
            }, { lng: -99.18700318179999, lat: 18.9048840822 }, {
                lng: -99.19062139179999,
                lat: 18.9010783329
            }, { lng: -99.198734784, lat: 18.9069240406 }, {
                lng: -99.20174419000001,
                lat: 18.9049616204
            }, { lng: -99.20465824439999, lat: 18.9090941062 }, {
                lng: -99.20682733970001,
                lat: 18.9063279784
            }, { lng: -99.213001112, lat: 18.9093017778 }, { lng: -99.2085030253, lat: 18.9016073491 }, {
                lng: -99.2148781933,
                lat: 18.8922714305
            }, { lng: -99.21486049910003, lat: 18.8846820926 }, {
                lng: -99.22223354090001,
                lat: 18.8847763713
            }, { lng: -99.22377866980001, lat: 18.8775259505 }, {
                lng: -99.2289749574,
                lat: 18.8784316118
            }, { lng: -99.23665313639999, lat: 18.8998030571 }, {
                lng: -99.25658416429999,
                lat: 18.8949147847
            }, { lng: -99.26011458480002, lat: 18.9035323551 }, {
                lng: -99.2732500227,
                lat: 18.9048943188
            }, { lng: -99.28180704010002, lat: 18.9164121824 }, {
                lng: -99.2894473658,
                lat: 18.9213839879
            }, { lng: -99.28598093960001, lat: 18.9050634639 }, { lng: -99.2979477401, lat: 18.9053719505 }, {
                lng: -99.2935537362,
                lat: 18.894572581
            }, { lng: -99.2853628347, lat: 18.9006950965 }, { lng: -99.28302118800002, lat: 18.887703689 }, {
                lng: -99.2896561764,
                lat: 18.8846924716
            }, { lng: -99.27215733670001, lat: 18.8567959071 }, {
                lng: -99.27165242149999,
                lat: 18.8477103846
            }, { lng: -99.29303169930002, lat: 18.8466097754 }, { lng: -99.3039111228, lat: 18.8511762326 }, {
                lng: -99.3267068591,
                lat: 18.8716934268
            }, { lng: -99.3360790668, lat: 18.8908698329 }, { lng: -99.340424867, lat: 18.9319035943 }, {
                lng: -99.3409175841,
                lat: 18.9359616628
            }, { lng: -99.3272553243, lat: 18.9394860015 }, { lng: -99.3206841889, lat: 18.9464591319 }, {
                lng: -99.31698375330002,
                lat: 18.9438685426
            }, { lng: -99.31080370479999, lat: 18.9570969294 }, {
                lng: -99.31085543960002,
                lat: 18.9953612819
            }, { lng: -99.3086234978, lat: 18.9974825487 }, {
                lng: -99.31947062099999,
                lat: 19.0150943189
            }, { lng: -99.31741292530001, lat: 19.0238984152 }, { lng: -99.3106228345, lat: 19.0272235546 }];
        this.TOLUCA = [{ lng: -99.70611087419999, lat: 19.4209802321 },
            {
                lng: -99.6935192265,
                lat: 19.4284354777
            }, { lng: -99.69311898800001, lat: 19.4414406768 }, {
                lng: -99.6811235566,
                lat: 19.4400395073
            }, { lng: -99.67922255430001, lat: 19.4462352785 }, { lng: -99.6717818695, lat: 19.4489157792 }, {
                lng: -99.6751198394,
                lat: 19.4537888381
            }, { lng: -99.6714763887, lat: 19.4635315791 }, { lng: -99.6662460175, lat: 19.4648542673 }, {
                lng: -99.6584047332,
                lat: 19.4752508386
            }, { lng: -99.65608531220003, lat: 19.4711724999 }, {
                lng: -99.64786959200002,
                lat: 19.4760313165
            }, { lng: -99.6426290743, lat: 19.4606702276 }, { lng: -99.65338775070002, lat: 19.4545774463 }, {
                lng: -99.6552880603,
                lat: 19.4484974798
            }, { lng: -99.6391719969, lat: 19.4366852079 }, { lng: -99.6345044678, lat: 19.4225863932 }, {
                lng: -99.6391613679,
                lat: 19.4134361901
            }, { lng: -99.64314880110001, lat: 19.4143068653 }, {
                lng: -99.64343917920002,
                lat: 19.4224257342
            }, { lng: -99.6496098219, lat: 19.4207830551 }, { lng: -99.6490506066, lat: 19.4116086751 }, {
                lng: -99.65861501489999,
                lat: 19.410328421
            }, { lng: -99.65672774610003, lat: 19.4067373709 }, { lng: -99.635019719, lat: 19.405445723 }, {
                lng: -99.6398184549,
                lat: 19.4007843721
            }, { lng: -99.6386377714, lat: 19.3983506176 }, {
                lng: -99.62411343050002,
                lat: 19.3954170393
            }, { lng: -99.61752118370001, lat: 19.3982846905 }, {
                lng: -99.59241478289999,
                lat: 19.389904933
            }, { lng: -99.5939521574, lat: 19.386108928 }, { lng: -99.590330936, lat: 19.3851136117 }, {
                lng: -99.58827710510001,
                lat: 19.3878590904
            }, { lng: -99.58413622550002, lat: 19.3854596086 }, { lng: -99.5868011088, lat: 19.3810969722 }, {
                lng: -99.5676844254,
                lat: 19.3696403215
            }, { lng: -99.55322797210003, lat: 19.3802849642 }, {
                lng: -99.54735307490002,
                lat: 19.3750333435
            }, { lng: -99.54558173780001, lat: 19.3715561588 }, {
                lng: -99.53974262680002,
                lat: 19.3728667953
            }, { lng: -99.51957548110001, lat: 19.322073281 }, { lng: -99.544581416, lat: 19.3201969581 }, {
                lng: -99.54950825250002,
                lat: 19.321200747
            }, { lng: -99.55018378090001, lat: 19.316512484 }, { lng: -99.5663258333, lat: 19.3089500886 }, {
                lng: -99.5635485552,
                lat: 19.2895726081
            }, { lng: -99.6036567486, lat: 19.2914394561 }, {
                lng: -99.60368140530001,
                lat: 19.280732436
            }, { lng: -99.62915527840001, lat: 19.2794252791 }, {
                lng: -99.63490717080001,
                lat: 19.2756926662
            }, { lng: -99.6353501111, lat: 19.2693672049 }, { lng: -99.6431020826, lat: 19.2702645237 }, {
                lng: -99.6418386557,
                lat: 19.2643771
            }, { lng: -99.6320020174, lat: 19.2571241047 }, {
                lng: -99.62863309220001,
                lat: 19.2455694845
            }, { lng: -99.63524669650001, lat: 19.240468479 }, {
                lng: -99.6316547121,
                lat: 19.2374312111
            }, { lng: -99.64125930180001, lat: 19.2347824722 }, { lng: -99.6317713931, lat: 19.228452594 }, {
                lng: -99.6394034197,
                lat: 19.2189882198
            }, { lng: -99.65259980730001, lat: 19.2204089046 }, {
                lng: -99.65845317740001,
                lat: 19.2172549507
            }, { lng: -99.6569508716, lat: 19.2119420138 }, {
                lng: -99.65936526359999,
                lat: 19.2124299926
            }, { lng: -99.66579696300001, lat: 19.2027172328 }, { lng: -99.6669961528, lat: 19.1944442554 }, {
                lng: -99.6743546921,
                lat: 19.196371486
            }, { lng: -99.6836896934, lat: 19.1772514658 }, {
                lng: -99.71733489740002,
                lat: 19.1420635678
            }, { lng: -99.73068564550003, lat: 19.1204561431 }, {
                lng: -99.731742614,
                lat: 19.1043507513
            }, { lng: -99.73566632230001, lat: 19.1004792166 }, {
                lng: -99.7437493313,
                lat: 19.0928571869
            }, { lng: -99.74529553630001, lat: 19.0851606691 }, { lng: -99.7339455214, lat: 19.0736348573 }, {
                lng: -99.7637316962,
                lat: 19.0730498079
            }, { lng: -99.76519303569999, lat: 19.0921772095 }, { lng: -99.7780588456, lat: 19.0998043684 }, {
                lng: -99.7800765969,
                lat: 19.1129512329
            }, { lng: -99.76525462810001, lat: 19.1264882808 }, {
                lng: -99.76919351540002,
                lat: 19.141038912
            }, { lng: -99.7621435783, lat: 19.1530476166 }, {
                lng: -99.76396502119999,
                lat: 19.1623937318
            }, { lng: -99.73968856690001, lat: 19.214045272 }, { lng: -99.7272224411, lat: 19.2128673387 }, {
                lng: -99.7242852312,
                lat: 19.2157118607
            }, { lng: -99.7222233055, lat: 19.2250123707 }, { lng: -99.7119482276, lat: 19.2422797666 }, {
                lng: -99.7129088505,
                lat: 19.2521944983
            }, { lng: -99.70686573720001, lat: 19.260413566 }, {
                lng: -99.71615148560001,
                lat: 19.2643185181
            }, { lng: -99.71216685749999, lat: 19.272677529 }, {
                lng: -99.70038711060003,
                lat: 19.27009399190001
            }, { lng: -99.6973325739, lat: 19.2855172933 }, {
                lng: -99.70350762830002,
                lat: 19.2866255624
            }, { lng: -99.70224176590001, lat: 19.2909836406 }, {
                lng: -99.69302435189999,
                lat: 19.2908782316
            }, { lng: -99.69193443170002, lat: 19.300076068 }, {
                lng: -99.6982188277,
                lat: 19.3015305968
            }, { lng: -99.69773028690001, lat: 19.3113108846 }, {
                lng: -99.70683270350001,
                lat: 19.3109543264
            }, { lng: -99.70977125269999, lat: 19.3184707766 }, {
                lng: -99.71525782670001,
                lat: 19.3185985125
            }, { lng: -99.71093086400001, lat: 19.3313596999 }, { lng: -99.7197878616, lat: 19.3337854915 }, {
                lng: -99.7240582681,
                lat: 19.3393573719
            }, { lng: -99.7171959901, lat: 19.3524368417 }, { lng: -99.7261394416, lat: 19.3572245367 }, {
                lng: -99.7256029867,
                lat: 19.3613629204
            }, { lng: -99.73090539510001, lat: 19.3640703299 }, {
                lng: -99.72515624899999,
                lat: 19.3681513899
            }, { lng: -99.73048787470002, lat: 19.3777677647 }, {
                lng: -99.728910941,
                lat: 19.3876505368
            }, { lng: -99.73229813259999, lat: 19.4080667365 }, {
                lng: -99.71988118300001,
                lat: 19.4109177351
            }, { lng: -99.71873844050001, lat: 19.4250672425 }, { lng: -99.70611087419999, lat: 19.4209802321 }];
        this.CDMX = [{ lng: -99.21310300240002, lat: 19.5043531549 },
            {
                lng: -99.21106002170001,
                lat: 19.5121997572
            }, { lng: -99.206021037, lat: 19.5159939395 }, { lng: -99.1792625457, lat: 19.5071568627 }, {
                lng: -99.17488913749999,
                lat: 19.5092377666
            }, { lng: -99.158260035, lat: 19.5039384159 }, { lng: -99.16401954680001, lat: 19.5189413674 }, {
                lng: -99.1762142155,
                lat: 19.5247177796
            }, { lng: -99.17222159729998, lat: 19.5282379634 }, { lng: -99.1814707967, lat: 19.5336329672 }, {
                lng: -99.1601638283,
                lat: 19.5278392366
            }, { lng: -99.15674843780001, lat: 19.533466061 }, {
                lng: -99.15910904250001,
                lat: 19.535821652
            }, { lng: -99.15211478480001, lat: 19.5457034338 }, {
                lng: -99.16148910550001,
                lat: 19.5501570391
            }, { lng: -99.15941121180001, lat: 19.5590497656 }, { lng: -99.1504816831, lat: 19.563064418 }, {
                lng: -99.1473549608,
                lat: 19.5680870141
            }, { lng: -99.13800863909999, lat: 19.5828424753 }, { lng: -99.1236056613, lat: 19.5932278843 }, {
                lng: -99.118444825,
                lat: 19.5907371194
            }, { lng: -99.1197389993, lat: 19.5860565753 }, { lng: -99.1102998535, lat: 19.5651362924 }, {
                lng: -99.11029058050001,
                lat: 19.5651225186
            }, { lng: -99.1310643579, lat: 19.5376713066 }, { lng: -99.12936376739999, lat: 19.5271148388 }, {
                lng: -99.1205188556,
                lat: 19.5148848664
            }, { lng: -99.11483198610002, lat: 19.5120941063 }, {
                lng: -99.10733430059999,
                lat: 19.5108619099
            }, { lng: -99.099842947, lat: 19.5143023831 }, { lng: -99.09188593899998, lat: 19.5108397957 }, {
                lng: -99.0650663091,
                lat: 19.4994274036
            }, { lng: -99.0686609807, lat: 19.4900285202 }, {
                lng: -99.05162902019998,
                lat: 19.4500041903
            }, { lng: -99.04830367629999, lat: 19.4424617618 }, {
                lng: -99.0557176234,
                lat: 19.4256077243
            }, { lng: -99.05903322250001, lat: 19.4015549011 }, { lng: -99.0197404876, lat: 19.3837192738 }, {
                lng: -98.9913022281,
                lat: 19.3669496024
            }, { lng: -98.99401027579999, lat: 19.3575589013 }, {
                lng: -98.9695724206,
                lat: 19.3329793475
            }, { lng: -98.96429821940001, lat: 19.3284105918 }, {
                lng: -98.9581602903,
                lat: 19.3236295503
            }, { lng: -98.96324688439999, lat: 19.3168227372 }, {
                lng: -98.9651118938,
                lat: 19.3067478203
            }, { lng: -98.96785405919999, lat: 19.3057715643 }, { lng: -98.9761018497, lat: 19.2529526812 }, {
                lng: -98.9669417998,
                lat: 19.2507765873
            }, { lng: -98.9695502097, lat: 19.2329122797 }, { lng: -98.94566588329998, lat: 19.2249400758 }, {
                lng: -98.9414716413,
                lat: 19.223500993
            }, { lng: -98.94390996289998, lat: 19.2163976831 }, {
                lng: -98.95195866730001,
                lat: 19.2186684075
            }, { lng: -98.9685472577, lat: 19.2118091662 }, {
                lng: -98.96777134440001,
                lat: 19.1985745181
            }, { lng: -98.96616020179999, lat: 19.1860256888 }, {
                lng: -98.9569156805,
                lat: 19.177114495
            }, { lng: -98.95349278019998, lat: 19.1693435252 }, {
                lng: -98.96801879089999,
                lat: 19.1653613283
            }, { lng: -98.9627711079, lat: 19.1594571961 }, { lng: -98.95482840230001, lat: 19.1504090001 }, {
                lng: -98.9691953224,
                lat: 19.1457666808
            }, { lng: -98.95884629649999, lat: 19.1218421485 }, { lng: -98.9623134531, lat: 19.0969846402 }, {
                lng: -98.9688346432,
                lat: 19.0843844092
            }, { lng: -98.97333935790002, lat: 19.0815022765 }, { lng: -98.979988345, lat: 19.075577502 }, {
                lng: -98.9860309207,
                lat: 19.0803229277
            }, { lng: -99.0295639476, lat: 19.0865145377 }, { lng: -99.04453829929999, lat: 19.0766835183 }, {
                lng: -99.0610576226,
                lat: 19.0497728775
            }, { lng: -99.13440162950001, lat: 19.0877483025 }, {
                lng: -99.22690899610001,
                lat: 19.0969212633
            }, { lng: -99.28050066600001, lat: 19.1320869049 }, {
                lng: -99.3038067886,
                lat: 19.1909599309
            }, { lng: -99.30819375420001, lat: 19.2143076935 }, {
                lng: -99.31638151729999,
                lat: 19.2219418775
            }, { lng: -99.31691535669999, lat: 19.2263507764 }, { lng: -99.317612537, lat: 19.2302143355 }, {
                lng: -99.3242005127,
                lat: 19.233366085
            }, { lng: -99.3406104828, lat: 19.2412069406 }, { lng: -99.3430869475, lat: 19.2419140008 }, {
                lng: -99.3431676142,
                lat: 19.2515414665
            }, { lng: -99.33898715820001, lat: 19.2648847921 }, { lng: -99.3405100781, lat: 19.2685294875 }, {
                lng: -99.349803569,
                lat: 19.275008012
            }, { lng: -99.3654731569, lat: 19.2789979349 }, { lng: -99.35563230199999, lat: 19.2944212315 }, {
                lng: -99.3513988942,
                lat: 19.2951836101
            }, { lng: -99.35754956060002, lat: 19.3078556805 }, {
                lng: -99.33345889650001,
                lat: 19.3327792758
            }, { lng: -99.327898527, lat: 19.3462035917 }, {
                lng: -99.32970312850001,
                lat: 19.3535558944
            }, { lng: -99.32441236450001, lat: 19.3589778619 }, {
                lng: -99.3197408052,
                lat: 19.3590837386
            }, { lng: -99.32063376030001, lat: 19.3656724912 }, {
                lng: -99.304355007,
                lat: 19.3786196972
            }, { lng: -99.30184374949999, lat: 19.3776235647 }, {
                lng: -99.29995472669998,
                lat: 19.3683138335
            }, { lng: -99.28644713160001, lat: 19.376729077 }, {
                lng: -99.2838612739,
                lat: 19.3819147746
            }, { lng: -99.27776428639999, lat: 19.3753663797 }, {
                lng: -99.27377670510002,
                lat: 19.390507911
            }, { lng: -99.27045469419998, lat: 19.3908947672 }, {
                lng: -99.26643088570002,
                lat: 19.3991700681
            }, { lng: -99.26158196260001, lat: 19.4004311428 }, {
                lng: -99.25858991410001,
                lat: 19.4053192267
            }, { lng: -99.25758610690001, lat: 19.401063919 }, {
                lng: -99.2513899068,
                lat: 19.4085293807
            }, { lng: -99.23943744729999, lat: 19.4129039212 }, { lng: -99.2238741181, lat: 19.4280725034 }, {
                lng: -99.2289555107,
                lat: 19.4390032365
            }, { lng: -99.2192213795, lat: 19.4450165411 }, { lng: -99.2206945012, lat: 19.4538854469 }, {
                lng: -99.2156666952,
                lat: 19.4577183997
            }, { lng: -99.21295757740001, lat: 19.468285328 }, { lng: -99.2079767948, lat: 19.472118959 }, {
                lng: -99.22204802330001,
                lat: 19.4757300108
            }, { lng: -99.21310300240002, lat: 19.5043531549 }];
        this.PUEBLA = [{ lng: -98.09905261750002, lat: 19.1685265426 },
            {
                lng: -98.06539002860002,
                lat: 19.18900874
            }, { lng: -98.03471116830001, lat: 19.2214449313 }, {
                lng: -98.03466537049999,
                lat: 19.2306302171
            }, { lng: -98.0187388471, lat: 19.213228221 }, { lng: -98.0292063059, lat: 19.2003137507 }, {
                lng: -98.0292908335,
                lat: 19.1964003776
            }, { lng: -98.0344660378, lat: 19.1978858752 }, { lng: -98.0362804171, lat: 19.1495653852 }, {
                lng: -98.03450371150001,
                lat: 19.1476860135
            }, { lng: -98.03021136970001, lat: 19.1553141397 }, {
                lng: -98.0266972669,
                lat: 19.1554738861
            }, { lng: -98.02681559369999, lat: 19.1500638759 }, { lng: -98.0424044821, lat: 19.1253380874 }, {
                lng: -98.0520744599,
                lat: 19.120292112
            }, { lng: -98.0496072966, lat: 19.1112625122 }, { lng: -98.0522516497, lat: 19.1068246755 }, {
                lng: -98.0677043331,
                lat: 19.0928561026
            }, { lng: -98.07409164960001, lat: 19.072143297 }, { lng: -98.0735470125, lat: 19.0648521123 }, {
                lng: -98.0801862087,
                lat: 19.0549461695
            }, { lng: -98.08488913940001, lat: 19.0541067792 }, {
                lng: -98.09696015550001,
                lat: 19.0602487801
            }, { lng: -98.115615371, lat: 19.0577043872 }, { lng: -98.1284333716, lat: 19.045842821 }, {
                lng: -98.1296534036,
                lat: 19.0397388878
            }, { lng: -98.12192753630001, lat: 19.0386652009 }, {
                lng: -98.118626062,
                lat: 19.0290432023
            }, { lng: -98.12557569970001, lat: 19.0214658402 }, {
                lng: -98.13087072600001,
                lat: 19.0012277578
            }, { lng: -98.1348657265, lat: 18.9994015784 }, {
                lng: -98.13644351400001,
                lat: 18.9944397326
            }, { lng: -98.12973749480001, lat: 18.9792180087 }, {
                lng: -98.13550716060001,
                lat: 18.9660719729
            }, { lng: -98.13448862680001, lat: 18.9518246088 }, {
                lng: -98.11836881350003,
                lat: 18.9399604276
            }, { lng: -98.1088431156, lat: 18.9394335455 }, { lng: -98.11041390290001, lat: 18.9273208496 }, {
                lng: -98.0928249735,
                lat: 18.9167416827
            }, { lng: -98.11386348409999, lat: 18.9144047044 }, { lng: -98.1245368207, lat: 18.9045454145 }, {
                lng: -98.1265480111,
                lat: 18.9162849228
            }, { lng: -98.1572648173, lat: 18.9106276756 }, { lng: -98.15571206520001, lat: 18.9052154775 }, {
                lng: -98.1425708761,
                lat: 18.8972397283
            }, { lng: -98.1344633662, lat: 18.9002069954 }, { lng: -98.12661510510002, lat: 18.8986864479 }, {
                lng: -98.1337783881,
                lat: 18.8873214945
            }, { lng: -98.1461131961, lat: 18.8856349893 }, { lng: -98.1548477157, lat: 18.8738131107 }, {
                lng: -98.1578921615,
                lat: 18.8666896489
            }, { lng: -98.1565709322, lat: 18.8625452063 }, { lng: -98.1477714853, lat: 18.8569994309 }, {
                lng: -98.14706245550001,
                lat: 18.853774208
            }, { lng: -98.1518006359, lat: 18.8459669686 }, {
                lng: -98.15492657439999,
                lat: 18.8488524711
            }, { lng: -98.15904413160001, lat: 18.8458740861 }, {
                lng: -98.16350566910002,
                lat: 18.847957421
            }, { lng: -98.1687178257, lat: 18.842222816 }, { lng: -98.1777780323, lat: 18.8435134677 }, {
                lng: -98.1806833947,
                lat: 18.8413352383
            }, { lng: -98.18887728839999, lat: 18.847454943 }, {
                lng: -98.20144249060002,
                lat: 18.8489838793
            }, { lng: -98.20845451040002, lat: 18.8458976461 }, {
                lng: -98.2318854393,
                lat: 18.8491785801
            }, { lng: -98.24370403730001, lat: 18.8554214776 }, { lng: -98.2570042856, lat: 18.8513106811 }, {
                lng: -98.2645988475,
                lat: 18.8558147103
            }, { lng: -98.28103448850001, lat: 18.8564288456 }, {
                lng: -98.2887933918,
                lat: 18.8619345362
            }, { lng: -98.28518401700002, lat: 18.8757894459 }, {
                lng: -98.2786084885,
                lat: 18.879286405
            }, { lng: -98.27904846049999, lat: 18.8904682711 }, {
                lng: -98.26926169800001,
                lat: 18.8940673932
            }, { lng: -98.2680928746, lat: 18.9027704905 }, { lng: -98.26942428800001, lat: 18.9091341107 }, {
                lng: -98.2773593687,
                lat: 18.9054079645
            }, { lng: -98.28340935600001, lat: 18.9066139374 }, {
                lng: -98.28286311430001,
                lat: 18.9159100978
            }, { lng: -98.2859342518, lat: 18.9195731654 }, {
                lng: -98.27819812129999,
                lat: 18.9261293319
            }, { lng: -98.27069711060001, lat: 18.927145864 }, {
                lng: -98.27075352590002,
                lat: 18.9521072125
            }, { lng: -98.26204833609999, lat: 18.9535808405 }, { lng: -98.2620433617, lat: 18.9569173888 }, {
                lng: -98.2730357614,
                lat: 18.9588977143
            }, { lng: -98.27674701239999, lat: 18.9727115665 }, {
                lng: -98.2834995314,
                lat: 18.981509851
            }, { lng: -98.27522995450002, lat: 18.9998919596 }, {
                lng: -98.2667707966,
                lat: 18.9939485463
            }, { lng: -98.26452355479999, lat: 18.9883138398 }, { lng: -98.261304569, lat: 18.9886514842 }, {
                lng: -98.258549211,
                lat: 19.0010044632
            }, { lng: -98.25218415930002, lat: 19.0080673035 }, {
                lng: -98.25767225830001,
                lat: 19.04477768570001
            }, { lng: -98.2632650476, lat: 19.0500533697 }, { lng: -98.27577453060003, lat: 19.0518850517 }, {
                lng: -98.2732485307,
                lat: 19.0603504357
            }, { lng: -98.2660456263, lat: 19.0620495101 }, { lng: -98.26050327570003, lat: 19.0699603903 }, {
                lng: -98.2605801198,
                lat: 19.0730909826
            }, { lng: -98.2647993949, lat: 19.0745948134 }, {
                lng: -98.26175701550001,
                lat: 19.0823814947
            }, { lng: -98.25516407290002, lat: 19.0875320013 }, {
                lng: -98.24083339400002,
                lat: 19.0894484531
            }, { lng: -98.2405275771, lat: 19.0985372795 }, { lng: -98.2364117179, lat: 19.0984603752 }, {
                lng: -98.2338039517,
                lat: 19.1125718734
            }, { lng: -98.22843435890002, lat: 19.1202983725 }, {
                lng: -98.23103941060001,
                lat: 19.1233423288
            }, { lng: -98.22791136070001, lat: 19.1278890388 }, {
                lng: -98.22920218480002,
                lat: 19.1353978761
            }, { lng: -98.2234848823, lat: 19.1415094047 }, { lng: -98.207978321, lat: 19.1367484265 }, {
                lng: -98.1899134981,
                lat: 19.1438214411
            }, { lng: -98.1879426582, lat: 19.1392450918 }, { lng: -98.1968076238, lat: 19.1310793225 }, {
                lng: -98.1912572208,
                lat: 19.1256205212
            }, { lng: -98.204629592, lat: 19.1188700495 }, { lng: -98.1853759677, lat: 19.1197318227 }, {
                lng: -98.165803158,
                lat: 19.1087879559
            }, { lng: -98.1458115609, lat: 19.1268204953 }, {
                lng: -98.1422103399,
                lat: 19.11925004500001
            }, { lng: -98.12075293310001, lat: 19.1339842721 }, {
                lng: -98.1035389444,
                lat: 19.1552821708
            }, { lng: -98.09905261750002, lat: 19.1685265426 }];
        this.JALISCO = [{ lng: -102.3862754312, lat: 21.6531671359 },
            { lng: -102.3713867872, lat: 21.6517693024 }, { lng: -102.3685886266, lat: 21.6439176888 }, {
                lng: -102.3301896201,
                lat: 21.6238081774
            }, { lng: -102.3266096429, lat: 21.6246803033 }, { lng: -102.3230033825, lat: 21.6308713867 }, {
                lng: -102.3119001061,
                lat: 21.6277943456
            }, { lng: -102.297222144, lat: 21.6546405354 }, { lng: -102.3036236993, lat: 21.6559261599 }, {
                lng: -102.3015323001,
                lat: 21.6673943327
            }, { lng: -102.2823687711, lat: 21.6652291527 }, { lng: -102.2813647218, lat: 21.6586366172 }, {
                lng: -102.2769592208,
                lat: 21.6552452366
            }, { lng: -102.2521139571, lat: 21.6563131531 }, { lng: -102.2389725638, lat: 21.6540170099 }, {
                lng: -102.2279075929,
                lat: 21.6564389593
            }, { lng: -102.2204461904, lat: 21.6839595215 }, { lng: -102.2157419206, lat: 21.687739849 }, {
                lng: -102.2164833467,
                lat: 21.6959784482
            }, { lng: -102.1795860863, lat: 21.6894263244 }, { lng: -102.1729671057, lat: 21.7086225725 }, {
                lng: -102.1684199938,
                lat: 21.7076744527
            }, { lng: -102.1682787641, lat: 21.7033925203 }, { lng: -102.1576697999, lat: 21.7015087573 }, {
                lng: -102.1518669469,
                lat: 21.7065477053
            }, { lng: -102.1436785005, lat: 21.7065145928 }, { lng: -102.1376424579, lat: 21.721973691 }, {
                lng: -102.1263887933,
                lat: 21.7279604325
            }, { lng: -102.122433203, lat: 21.7371291811 }, { lng: -102.1172456707, lat: 21.7378456976 }, {
                lng: -102.1175341124,
                lat: 21.7457267074
            }, { lng: -102.1121068521, lat: 21.7508161552 }, { lng: -102.1019458332, lat: 21.7542860158 }, {
                lng: -102.1046125511,
                lat: 21.7599983544
            }, { lng: -102.100576687, lat: 21.7555713181 }, { lng: -102.1004760069, lat: 21.7641629492 }, {
                lng: -102.0886722898,
                lat: 21.7690717342
            }, { lng: -102.0967351787, lat: 21.7787728313 }, { lng: -102.0850592294, lat: 21.7883402005 }, {
                lng: -102.0740156789,
                lat: 21.783729961
            }, { lng: -102.067713864, lat: 21.7958033068 }, { lng: -102.0566970751, lat: 21.8096187763 }, {
                lng: -102.0569237893,
                lat: 21.8174547307
            }, { lng: -102.0440355371, lat: 21.8250543008 }, { lng: -102.0401840421, lat: 21.8544412639 }, {
                lng: -102.0224373217,
                lat: 21.8522524515
            }, { lng: -102.0215637177, lat: 21.8634405829 }, { lng: -101.9437544024, lat: 21.8900827496 }, {
                lng: -101.8826136527,
                lat: 21.9109808453
            }, { lng: -101.8409895699, lat: 21.9088054929 }, { lng: -101.8376308788, lat: 21.9426459043 }, {
                lng: -101.8471150032,
                lat: 21.9452745809
            }, { lng: -101.8560294826, lat: 21.9441348771 }, { lng: -101.8671083984, lat: 21.9482616508 }, {
                lng: -101.8797298517,
                lat: 21.9476321103
            }, { lng: -101.8871693675, lat: 21.9415693091 }, { lng: -101.8878072995, lat: 21.9351699788 }, {
                lng: -101.8922886733,
                lat: 21.9520373858
            }, { lng: -101.8995030151, lat: 21.9600352911 }, { lng: -101.8994834752, lat: 21.9601351339 }, {
                lng: -101.8977947547,
                lat: 21.9667313014
            }, { lng: -101.9006416085, lat: 21.9857240063 }, { lng: -101.9112384592, lat: 21.9900765738 }, {
                lng: -101.9143866686,
                lat: 21.99853896
            }, { lng: -101.908627705, lat: 21.9930593798 }, { lng: -101.8965203944, lat: 21.9907095526 }, {
                lng: -101.8930463068,
                lat: 21.9776441279
            }, { lng: -101.8657313557, lat: 21.9914527003 }, { lng: -101.8629563112, lat: 22.0016719433 }, {
                lng: -101.8633058009,
                lat: 22.0308078937
            }, { lng: -101.8619162014, lat: 22.0374789645 }, { lng: -101.8572375762, lat: 22.0418638898 }, {
                lng: -101.852871704,
                lat: 22.0449508243
            }, { lng: -101.8467697134, lat: 22.0418310955 }, { lng: -101.8065891652, lat: 22.0374010947 }, {
                lng: -101.8065759108,
                lat: 22.0264439558
            }, { lng: -101.8039280107, lat: 22.0261591856 }, { lng: -101.787193256, lat: 22.0247797911 }, {
                lng: -101.7799321072,
                lat: 22.0175798388
            }, { lng: -101.7794992867, lat: 22.0085103619 }, { lng: -101.7613694978, lat: 22.0101196249 }, {
                lng: -101.752723841,
                lat: 22.0157501948
            }, { lng: -101.7300761848, lat: 22.0025037965 }, { lng: -101.7306771058, lat: 21.9941645242 }, {
                lng: -101.7127825898,
                lat: 21.9820540994
            }, { lng: -101.7093943008, lat: 21.973618963 }, { lng: -101.6834909177, lat: 21.9632941288 }, {
                lng: -101.6678294238,
                lat: 21.9448423465
            }, { lng: -101.6622006307, lat: 21.9427740063 }, { lng: -101.6552209381, lat: 21.9250456186 }, {
                lng: -101.6513470868,
                lat: 21.9219414098
            }, { lng: -101.6515180753, lat: 21.9085862439 }, { lng: -101.6303504178, lat: 21.9119479041 }, {
                lng: -101.6225672726,
                lat: 21.9190482414
            }, { lng: -101.6182232519, lat: 21.9310383036 }, { lng: -101.6134182539, lat: 21.9204326346 }, {
                lng: -101.5996102703,
                lat: 21.9115875163
            }, { lng: -101.5946222636, lat: 21.9107393466 }, { lng: -101.5923769203, lat: 21.9165227327 }, {
                lng: -101.5718828677,
                lat: 21.9183009453
            }, { lng: -101.5712405307, lat: 21.8970914257 }, { lng: -101.5643950775, lat: 21.8574167758 }, {
                lng: -101.5673477893,
                lat: 21.8434275512
            }, { lng: -101.5634936848, lat: 21.8415694254 }, { lng: -101.5632238965, lat: 21.8378287376 }, {
                lng: -101.5496692292,
                lat: 21.8352117675
            }, { lng: -101.5392097888, lat: 21.8119244821 }, { lng: -101.5290952494, lat: 21.8104801378 }, {
                lng: -101.5308779202,
                lat: 21.8149720782
            }, { lng: -101.5242227191, lat: 21.8193655993 }, { lng: -101.5120317281, lat: 21.8006825404 }, {
                lng: -101.540198068,
                lat: 21.7788382045
            }, { lng: -101.5644967517, lat: 21.7812052866 }, { lng: -101.5869529889, lat: 21.7793381457 }, {
                lng: -101.5833378534,
                lat: 21.7698835087
            }, { lng: -101.5814945713, lat: 21.7377315641 }, { lng: -101.5673979576, lat: 21.7344498361 }, {
                lng: -101.5594748927,
                lat: 21.7359614402
            }, { lng: -101.5727848052, lat: 21.7055792439 }, { lng: -101.580893953, lat: 21.7122890365 }, {
                lng: -101.5844466802,
                lat: 21.7068388009
            }, { lng: -101.573929811, lat: 21.6998298358 }, { lng: -101.5708626326, lat: 21.693090712 }, {
                lng: -101.5858107132,
                lat: 21.6708816835
            }, { lng: -101.582536661, lat: 21.6682359991 }, { lng: -101.5859832415, lat: 21.6621728435 }, {
                lng: -101.5847338706,
                lat: 21.6579827624
            }, { lng: -101.5905943314, lat: 21.6530447412 }, { lng: -101.5973282773, lat: 21.6383716198 }, {
                lng: -101.5884113924,
                lat: 21.6271518185
            }, { lng: -101.5837673389, lat: 21.6095735617 }, { lng: -101.5965073248, lat: 21.6111142038 }, {
                lng: -101.5973921166,
                lat: 21.6009075005
            }, { lng: -101.6137663754, lat: 21.5838808109 }, { lng: -101.6130614337, lat: 21.575934745 }, {
                lng: -101.6082396466,
                lat: 21.5755458704
            }, { lng: -101.6079883664, lat: 21.5652251742 }, { lng: -101.6241409675, lat: 21.5525764915 }, {
                lng: -101.6210586222,
                lat: 21.5480715319
            }, { lng: -101.6254859698, lat: 21.546922851 }, { lng: -101.6231088809, lat: 21.5400484342 }, {
                lng: -101.6316188645,
                lat: 21.5358666528
            }, { lng: -101.6321503869, lat: 21.5330723853 }, { lng: -101.6432123953, lat: 21.5319888469 }, {
                lng: -101.6410596385,
                lat: 21.5135383665
            }, { lng: -101.6334677043, lat: 21.5196016216 }, { lng: -101.6277254835, lat: 21.5055399246 }, {
                lng: -101.5905040151,
                lat: 21.4662473377
            }, { lng: -101.5918204986, lat: 21.4573947869 }, { lng: -101.5885246574, lat: 21.4540142273 }, {
                lng: -101.5915242088,
                lat: 21.4464187196
            }, { lng: -101.5895255528, lat: 21.4437450322 }, { lng: -101.5837019899, lat: 21.4490729269 }, {
                lng: -101.5816300333,
                lat: 21.4294925229
            }, { lng: -101.5704850782, lat: 21.4195553569 }, { lng: -101.5907135474, lat: 21.416549646 }, {
                lng: -101.6003961362,
                lat: 21.4199332182
            }, { lng: -101.6090343929, lat: 21.4159506553 }, { lng: -101.6222178202, lat: 21.415420905 }, {
                lng: -101.6327433266,
                lat: 21.4085555082
            }, { lng: -101.6411215837, lat: 21.4105697327 }, { lng: -101.6613579017, lat: 21.4071305061 }, {
                lng: -101.6790859038,
                lat: 21.394385184
            }, { lng: -101.6807397692, lat: 21.3876271315 }, { lng: -101.6570506931, lat: 21.3745386861 }, {
                lng: -101.653532211,
                lat: 21.3637147685
            }, { lng: -101.6449303367, lat: 21.3556903537 }, { lng: -101.6472262825, lat: 21.3336214106 }, {
                lng: -101.6415332833,
                lat: 21.3180527192
            }, { lng: -101.6416258583, lat: 21.3051294267 }, { lng: -101.6449218051, lat: 21.3002680994 }, {
                lng: -101.6543708316,
                lat: 21.2976192096
            }, { lng: -101.6610624205, lat: 21.2899994341 }, { lng: -101.6759812586, lat: 21.2874633134 }, {
                lng: -101.6894492726,
                lat: 21.2923396853
            }, { lng: -101.6982647666, lat: 21.2865717118 }, { lng: -101.7004930784, lat: 21.2773804737 }, {
                lng: -101.7092746106,
                lat: 21.2776832406
            }, { lng: -101.7111532581, lat: 21.2820860631 }, { lng: -101.7379147364, lat: 21.2783429115 }, {
                lng: -101.7387328636,
                lat: 21.270925236
            }, { lng: -101.7512389635, lat: 21.2727111914 }, { lng: -101.759551172, lat: 21.2700585915 }, {
                lng: -101.7676396911,
                lat: 21.2566419544
            }, { lng: -101.7568466793, lat: 21.2451427972 }, { lng: -101.7690101836, lat: 21.2422666448 }, {
                lng: -101.7740896772,
                lat: 21.2323324062
            }, { lng: -101.7755629139, lat: 21.2196203748 }, { lng: -101.7762478413, lat: 21.1978095999 }, {
                lng: -101.7824013467,
                lat: 21.1925096328
            }, { lng: -101.7815823322, lat: 21.184438603 }, { lng: -101.7855201013, lat: 21.1726014805 }, {
                lng: -101.784099798,
                lat: 21.1594001857
            }, { lng: -101.7888041892, lat: 21.1576848174 }, { lng: -101.8058744309, lat: 21.1674991342 }, {
                lng: -101.8071431097,
                lat: 21.1599119497
            }, { lng: -101.816775733, lat: 21.1550188988 }, { lng: -101.8173329787, lat: 21.1507567102 }, {
                lng: -101.8130674439,
                lat: 21.1503749491
            }, { lng: -101.8147239549, lat: 21.1417265094 }, { lng: -101.8246153392, lat: 21.1374685581 }, {
                lng: -101.8353886109,
                lat: 21.139161638
            }, { lng: -101.8324827009, lat: 21.1193054861 }, { lng: -101.8289492448, lat: 21.1219581476 }, {
                lng: -101.8215654548,
                lat: 21.1179999888
            }, { lng: -101.8196252143, lat: 21.1081110026 }, { lng: -101.8289954784, lat: 21.1009824306 }, {
                lng: -101.8378242794,
                lat: 21.1009648477
            }, { lng: -101.8387660712, lat: 21.0978283498 }, { lng: -101.8774772587, lat: 21.0948222038 }, {
                lng: -101.8800705714,
                lat: 21.0820974156
            }, { lng: -101.8769088769, lat: 21.0717070272 }, { lng: -101.8841652161, lat: 21.0655943815 }, {
                lng: -101.8969562767,
                lat: 21.0520716236
            }, { lng: -101.9040691272, lat: 21.0544855012 }, { lng: -101.8999267338, lat: 21.0483622621 }, {
                lng: -101.9037269751,
                lat: 21.0332517098
            }, { lng: -101.9088226339, lat: 21.0302604081 }, { lng: -101.9073662358, lat: 21.0122361746 }, {
                lng: -101.938847975,
                lat: 20.9566544148
            }, { lng: -101.9411434937, lat: 20.9431400956 }, { lng: -101.9395365596, lat: 20.9300870788 }, {
                lng: -101.945400481,
                lat: 20.9263737129
            }, { lng: -101.9478803366, lat: 20.9317007792 }, { lng: -101.9597680356, lat: 20.9358692497 }, {
                lng: -101.9638562414,
                lat: 20.9263498634
            }, { lng: -101.9810950204, lat: 20.9270223059 }, { lng: -101.9823326189, lat: 20.9176903482 }, {
                lng: -102.004949084,
                lat: 20.8985442917
            }, { lng: -102.0105486688, lat: 20.886070475 }, { lng: -102.0189577182, lat: 20.8838558705 }, {
                lng: -102.0182332354,
                lat: 20.8804262437
            }, { lng: -102.0137343415, lat: 20.8809960117 }, { lng: -102.0167840079, lat: 20.8699240964 }, {
                lng: -102.0224980816,
                lat: 20.8638466449
            }, { lng: -102.0394256195, lat: 20.8483124553 }, { lng: -102.0541547001, lat: 20.8482673041 }, {
                lng: -102.058303932,
                lat: 20.8454010014
            }, { lng: -102.0646536677, lat: 20.8427423869 }, { lng: -102.066051489, lat: 20.8391352652 }, {
                lng: -102.0731359897,
                lat: 20.8397944688
            }, { lng: -102.0783842413, lat: 20.8359041397 }, { lng: -102.0782948638, lat: 20.8313654051 }, {
                lng: -102.0813338659,
                lat: 20.8295810154
            }, { lng: -102.0785352827, lat: 20.8124799312 }, { lng: -102.0830380724, lat: 20.8064532207 }, {
                lng: -102.0823600803,
                lat: 20.8020827319
            }, { lng: -102.0889016373, lat: 20.8015461302 }, { lng: -102.0934916301, lat: 20.7828195063 }, {
                lng: -102.0913474433,
                lat: 20.7790465231
            }, { lng: -102.0852120761, lat: 20.7794423745 }, { lng: -102.0824102728, lat: 20.7724057371 }, {
                lng: -102.0801063191,
                lat: 20.7752421399
            }, { lng: -102.0799119711, lat: 20.7727517904 }, { lng: -102.0767676455, lat: 20.7736901117 }, {
                lng: -102.0751391024,
                lat: 20.7770160362
            }, { lng: -102.0727068745, lat: 20.7747263269 }, { lng: -102.0665681048, lat: 20.7675503031 }, {
                lng: -102.0755591127,
                lat: 20.7506054623
            }, { lng: -102.0616501538, lat: 20.7491349664 }, { lng: -102.0621590275, lat: 20.7438205457 }, {
                lng: -102.0659867128,
                lat: 20.7411176594
            }, { lng: -102.0495411127, lat: 20.7360226724 }, { lng: -102.0387803713, lat: 20.7440094202 }, {
                lng: -102.0368029042,
                lat: 20.7427850992
            }, { lng: -102.0437377993, lat: 20.7120483616 }, { lng: -102.0333232185, lat: 20.7086532888 }, {
                lng: -102.0273855835,
                lat: 20.7195139534
            }, { lng: -102.0155823383, lat: 20.7166554226 }, { lng: -102.0143667243, lat: 20.7091980946 }, {
                lng: -102.0216806424,
                lat: 20.676322005
            }, { lng: -102.0161663582, lat: 20.6736123439 }, { lng: -102.0119725302, lat: 20.6652346584 }, {
                lng: -102.007210674,
                lat: 20.6609257064
            }, { lng: -102.0021502972, lat: 20.6615948648 }, { lng: -101.9991042771, lat: 20.6666660935 }, {
                lng: -101.9833358765,
                lat: 20.6572868538
            }, { lng: -101.9760289805, lat: 20.6617220035 }, { lng: -101.9758355178, lat: 20.6651647943 }, {
                lng: -101.9713437978,
                lat: 20.6647194452
            }, { lng: -101.9722327393, lat: 20.6552031151 }, { lng: -101.9610566978, lat: 20.6405675919 }, {
                lng: -101.9574173336,
                lat: 20.6299230727
            }, { lng: -101.9608821436, lat: 20.6128737092 }, { lng: -101.9571347624, lat: 20.6105231056 }, {
                lng: -101.9541952537,
                lat: 20.612649532
            }, { lng: -101.951826401, lat: 20.6087797163 }, { lng: -101.9598842542, lat: 20.5996152442 }, {
                lng: -101.956457819,
                lat: 20.5895539118
            }, { lng: -101.9691767466, lat: 20.5799821629 }, { lng: -101.9664714665, lat: 20.5739535896 }, {
                lng: -101.9717321983,
                lat: 20.5682578599
            }, { lng: -101.9713680449, lat: 20.5601820058 }, { lng: -101.9772548393, lat: 20.5504200608 }, {
                lng: -101.9754075127,
                lat: 20.5414029383
            }, { lng: -101.9836904014, lat: 20.5358117385 }, { lng: -101.9881392524, lat: 20.5375311843 }, {
                lng: -101.9898334633,
                lat: 20.5446227451
            }, { lng: -101.9928575865, lat: 20.5429651809 }, { lng: -101.9940233362, lat: 20.5358670275 }, {
                lng: -101.9949764433,
                lat: 20.5402938144
            }, { lng: -102.0039904153, lat: 20.5455008255 }, { lng: -102.0157587872, lat: 20.542669971 }, {
                lng: -102.0114245771,
                lat: 20.5344336614
            }, { lng: -102.0119826417, lat: 20.5274034865 }, { lng: -102.0223325577, lat: 20.5158640216 }, {
                lng: -102.0217441056,
                lat: 20.5078181052
            }, { lng: -102.0308126955, lat: 20.5031224197 }, { lng: -102.0479530642, lat: 20.4835704245 }, {
                lng: -102.0453902492,
                lat: 20.4764143099
            }, { lng: -102.0474201305, lat: 20.4728829205 }, { lng: -102.0448488179, lat: 20.4686476283 }, {
                lng: -102.0458847284,
                lat: 20.4571887827
            }, { lng: -102.0578651512, lat: 20.4523479448 }, { lng: -102.0598353791, lat: 20.4458730715 }, {
                lng: -102.0697639569,
                lat: 20.4398053192
            }, { lng: -102.069935135, lat: 20.435657748 }, { lng: -102.0776972087, lat: 20.429116546 }, {
                lng: -102.0759247018,
                lat: 20.425414404
            }, { lng: -102.0809069526, lat: 20.4218744458 }, { lng: -102.0773844041, lat: 20.4201687217 }, {
                lng: -102.0747149818,
                lat: 20.4122153006
            }, { lng: -102.0826306484, lat: 20.4077691324 }, { lng: -102.0819749688, lat: 20.4052547353 }, {
                lng: -102.0864295825,
                lat: 20.4056060793
            }, { lng: -102.0894529097, lat: 20.3942438791 }, { lng: -102.0928266613, lat: 20.3899176906 }, {
                lng: -102.0985985551,
                lat: 20.3900660762
            }, { lng: -102.0980852809, lat: 20.3851480983 }, { lng: -102.1102489512, lat: 20.3790992569 }, {
                lng: -102.1166574466,
                lat: 20.3818768453
            }, { lng: -102.1264564385, lat: 20.3787263856 }, { lng: -102.1338468555, lat: 20.3819877048 }, {
                lng: -102.1370068918,
                lat: 20.3772639511
            }, { lng: -102.1423444218, lat: 20.3764020223 }, { lng: -102.1680501079, lat: 20.3801358435 }, {
                lng: -102.170519511,
                lat: 20.3779631184
            }, { lng: -102.1625238799, lat: 20.375912802 }, { lng: -102.160523557, lat: 20.3679014838 }, {
                lng: -102.1789829702,
                lat: 20.3696657777
            }, { lng: -102.179640544, lat: 20.3649712724 }, { lng: -102.1756523798, lat: 20.3599533371 }, {
                lng: -102.1802060644,
                lat: 20.3560842945
            }, { lng: -102.1989719157, lat: 20.3511748611 }, { lng: -102.2102432279, lat: 20.3576834994 }, {
                lng: -102.2136699653,
                lat: 20.3533683029
            }, { lng: -102.2218903512, lat: 20.3519871543 }, { lng: -102.2243699327, lat: 20.345079106 }, {
                lng: -102.2560502047,
                lat: 20.336617518
            }, { lng: -102.2617212163, lat: 20.340435474 }, { lng: -102.2629268504, lat: 20.3372861889 }, {
                lng: -102.2693392952,
                lat: 20.3365722138
            }, { lng: -102.2835034627, lat: 20.3458933173 }, { lng: -102.2877552542, lat: 20.3465021943 }, {
                lng: -102.2921695834,
                lat: 20.3421131387
            }, { lng: -102.295602245, lat: 20.3464283948 }, { lng: -102.2944547817, lat: 20.3539813041 }, {
                lng: -102.2984846629,
                lat: 20.3541209414
            }, { lng: -102.3100356823, lat: 20.3587601077 }, { lng: -102.3174794419, lat: 20.3461808131 }, {
                lng: -102.3294038478,
                lat: 20.3501306741
            }, { lng: -102.338241912, lat: 20.3423748968 }, { lng: -102.3446997023, lat: 20.3406282365 }, {
                lng: -102.3470733774,
                lat: 20.3362126921
            }, { lng: -102.3495551379, lat: 20.3365517335 }, { lng: -102.359761273, lat: 20.3379476612 }, {
                lng: -102.3694387909,
                lat: 20.3286304542
            }, { lng: -102.393542359, lat: 20.3345998809 }, { lng: -102.4029587833, lat: 20.3289204915 }, {
                lng: -102.4121864944,
                lat: 20.3343107326
            }, { lng: -102.4243105838, lat: 20.3338605708 }, { lng: -102.4346340873, lat: 20.3417746884 }, {
                lng: -102.450039484,
                lat: 20.3388688552
            }, { lng: -102.4560665718, lat: 20.3353115952 }, { lng: -102.4566644865, lat: 20.3300515892 }, {
                lng: -102.4703706312,
                lat: 20.3312460536
            }, { lng: -102.4844345247, lat: 20.3247583116 }, { lng: -102.4923994847, lat: 20.3096999506 }, {
                lng: -102.4986748622,
                lat: 20.3089858991
            }, { lng: -102.506673524, lat: 20.3167460849 }, { lng: -102.5117415573, lat: 20.3015942907 }, {
                lng: -102.5241416357,
                lat: 20.3012509527
            }, { lng: -102.5321426698, lat: 20.2969743579 }, { lng: -102.5327111196, lat: 20.2923514433 }, {
                lng: -102.5229570635,
                lat: 20.2855646506
            }, { lng: -102.5226049687, lat: 20.278929258 }, { lng: -102.5271933017, lat: 20.274827808 }, {
                lng: -102.5353024565,
                lat: 20.2715869411
            }, { lng: -102.537704923, lat: 20.2788477027 }, { lng: -102.5467967563, lat: 20.2810059033 }, {
                lng: -102.5561473401,
                lat: 20.2615660939
            }, { lng: -102.5599824101, lat: 20.2640212955 }, { lng: -102.5582961098, lat: 20.2723848675 }, {
                lng: -102.5658778706,
                lat: 20.2789710256
            }, { lng: -102.5708627773, lat: 20.2757805483 }, { lng: -102.5676203754, lat: 20.2703463714 }, {
                lng: -102.5691712782,
                lat: 20.2665541658
            }, { lng: -102.5826688139, lat: 20.2651522412 }, { lng: -102.592591595, lat: 20.2594754251 }, {
                lng: -102.595904042,
                lat: 20.2631651721
            }, { lng: -102.5999087683, lat: 20.2624852574 }, { lng: -102.6020275376, lat: 20.2678664438 }, {
                lng: -102.6115990278,
                lat: 20.269753621
            }, { lng: -102.6167660452, lat: 20.2646268986 }, { lng: -102.6158032807, lat: 20.2556951949 }, {
                lng: -102.6230966814,
                lat: 20.2534052626
            }, { lng: -102.618962891, lat: 20.2488283877 }, { lng: -102.6297738213, lat: 20.2299817491 }, {
                lng: -102.6461121263,
                lat: 20.2246946146
            }, { lng: -102.6616262502, lat: 20.232044827 }, { lng: -102.6709546591, lat: 20.2317254771 }, {
                lng: -102.6753209422,
                lat: 20.2266820418
            }, { lng: -102.6816809893, lat: 20.2265587135 }, { lng: -102.6868879667, lat: 20.2187519705 }, {
                lng: -102.6846841764,
                lat: 20.2064846474
            }, { lng: -102.6804398591, lat: 20.1855770761 }, { lng: -102.6811488464, lat: 20.1736122427 }, {
                lng: -102.6884792161,
                lat: 20.1682970258
            }, { lng: -102.7328240713, lat: 20.1669671809 }, { lng: -102.7558858417, lat: 20.1482465303 }, {
                lng: -102.7581177482,
                lat: 20.1524546653
            }, { lng: -102.7674280785, lat: 20.149912259 }, { lng: -102.7824231492, lat: 20.1390087112 }, {
                lng: -102.7884675701,
                lat: 20.1381548013
            }, { lng: -102.7964204991, lat: 20.1418771446 }, { lng: -102.8195515226, lat: 20.1385019925 }, {
                lng: -102.8098369276,
                lat: 20.1340873643
            }, { lng: -102.8035391452, lat: 20.1211526723 }, { lng: -102.8105753293, lat: 20.1095762322 }, {
                lng: -102.8189414999,
                lat: 20.1055122884
            }, { lng: -102.83976527, lat: 20.11521609 }, { lng: -102.8584993735, lat: 20.1433763979 }, {
                lng: -102.8548834277,
                lat: 20.1502025501
            }, { lng: -102.8692406578, lat: 20.1563905483 }, { lng: -102.8681077086, lat: 20.1640078463 }, {
                lng: -102.8790895275,
                lat: 20.1587308156
            }, { lng: -102.8890249842, lat: 20.159562286 }, { lng: -102.8983593343, lat: 20.1653662839 }, {
                lng: -102.9083410734,
                lat: 20.162947369
            }, { lng: -102.9414454351, lat: 20.1727097899 }, { lng: -102.9566277847, lat: 20.1723596633 }, {
                lng: -102.9457705398,
                lat: 20.1509001334
            }, { lng: -102.9266628127, lat: 20.137039835 }, { lng: -102.9291022657, lat: 20.1300400707 }, {
                lng: -102.9434407499,
                lat: 20.1291363681
            }, { lng: -102.9469279248, lat: 20.1321800195 }, { lng: -102.9534830584, lat: 20.1386710004 }, {
                lng: -102.9629543273,
                lat: 20.1419059739
            }, { lng: -102.9661010042, lat: 20.1278798597 }, { lng: -102.99834901, lat: 20.1261316526 }, {
                lng: -103.0013791254,
                lat: 20.1269121857
            }, { lng: -103.0066780696, lat: 20.1385327992 }, { lng: -103.0349853352, lat: 20.1372674555 }, {
                lng: -103.0371106342,
                lat: 20.1338909296
            }, { lng: -103.0350304661, lat: 20.1267227247 }, { lng: -103.0465992669, lat: 20.1241004831 }, {
                lng: -103.0437886528,
                lat: 20.1206532269
            }, { lng: -103.0449877228, lat: 20.1167411015 }, { lng: -103.0382218647, lat: 20.1183513701 }, {
                lng: -103.0354490605,
                lat: 20.1122421538
            }, { lng: -103.0435809626, lat: 20.090876529 }, { lng: -103.0335209339, lat: 20.0793669143 }, {
                lng: -103.036377267,
                lat: 20.0763166143
            }, { lng: -103.0328427709, lat: 20.0734386871 }, { lng: -103.0340505826, lat: 20.0681552067 }, {
                lng: -103.0316760758,
                lat: 20.0599782764
            }, { lng: -103.0235669872, lat: 20.0535672127 }, { lng: -103.0229222143, lat: 20.0481806599 }, {
                lng: -103.0282660736,
                lat: 20.0506022913
            }, { lng: -103.0305061496, lat: 20.0371260466 }, { lng: -103.0267962196, lat: 20.0337324033 }, {
                lng: -103.0312111729,
                lat: 20.0300847283
            }, { lng: -103.0379830795, lat: 20.0298395146 }, { lng: -103.0375931899, lat: 20.0264984367 }, {
                lng: -103.0350017614,
                lat: 20.02637088
            }, { lng: -103.0421668891, lat: 20.0147769247 }, { lng: -103.0502696377, lat: 20.0080274513 }, {
                lng: -103.0457626299,
                lat: 20.0032230193
            }, { lng: -103.0512491308, lat: 19.9981530084 }, { lng: -103.0536058438, lat: 19.9927711508 }, {
                lng: -103.0382287266,
                lat: 19.9698156398
            }, { lng: -103.0313452062, lat: 19.9675772018 }, { lng: -103.0285510621, lat: 19.9607321267 }, {
                lng: -103.0248383084,
                lat: 19.963091811
            }, { lng: -103.0195327645, lat: 19.960196257 }, { lng: -103.0164297567, lat: 19.9620348464 }, {
                lng: -103.0139772843,
                lat: 19.970154912
            }, { lng: -103.0065348914, lat: 19.972729224 }, { lng: -102.9969591781, lat: 19.9839990199 }, {
                lng: -102.9545459445,
                lat: 19.9977070104
            }, { lng: -102.9476234247, lat: 19.9912146505 }, { lng: -102.9458805417, lat: 19.9846719938 }, {
                lng: -102.9284773791,
                lat: 19.9854267611
            }, { lng: -102.9094240849, lat: 19.9702377813 }, { lng: -102.9051800833, lat: 19.9680142541 }, {
                lng: -102.8893738692,
                lat: 19.9707181723
            }, { lng: -102.8849626415, lat: 19.9767144728 }, { lng: -102.8228752628, lat: 19.9628386388 }, {
                lng: -102.79881641,
                lat: 19.9516230763
            }, { lng: -102.7920014929, lat: 19.9521140693 }, { lng: -102.7814710159, lat: 19.9602241917 }, {
                lng: -102.7765905793,
                lat: 19.9586441334
            }, { lng: -102.7849614297, lat: 19.9501328903 }, { lng: -102.7730312319, lat: 19.9311099841 }, {
                lng: -102.733757516,
                lat: 19.8982051999
            }, { lng: -102.7347072814, lat: 19.8911945052 }, { lng: -102.7419262735, lat: 19.8861890275 }, {
                lng: -102.7431817095,
                lat: 19.8790839442
            }, { lng: -102.7359278336, lat: 19.8703472821 }, { lng: -102.7367220873, lat: 19.8647722352 }, {
                lng: -102.7322585049,
                lat: 19.8543674966
            }, { lng: -102.7367973892, lat: 19.848441403 }, { lng: -102.7460265329, lat: 19.84527345 }, {
                lng: -102.7522965186,
                lat: 19.8337016999
            }, { lng: -102.7411216157, lat: 19.8170091633 }, { lng: -102.748560751, lat: 19.812732431 }, {
                lng: -102.7580398387,
                lat: 19.8136830348
            }, { lng: -102.7685818702, lat: 19.8094080747 }, { lng: -102.7869249978, lat: 19.8159850732 }, {
                lng: -102.7947603829,
                lat: 19.8142243528
            }, { lng: -102.7937495899, lat: 19.7967893198 }, { lng: -102.8027749958, lat: 19.7989112245 }, {
                lng: -102.812941015,
                lat: 19.7978807417
            }, { lng: -102.8136383334, lat: 19.7943278163 }, { lng: -102.8181168436, lat: 19.7952694405 }, {
                lng: -102.8159830539,
                lat: 19.7891751054
            }, { lng: -102.8093972935, lat: 19.7849129699 }, { lng: -102.815867451, lat: 19.7761620787 }, {
                lng: -102.815897111,
                lat: 19.7650317807
            }, { lng: -102.8115185053, lat: 19.7597585991 }, { lng: -102.8188804789, lat: 19.7514563176 }, {
                lng: -102.8058109979,
                lat: 19.7531438563
            }, { lng: -102.8053788861, lat: 19.7463992872 }, { lng: -102.8120927077, lat: 19.7418833066 }, {
                lng: -102.7981549981,
                lat: 19.7291158343
            }, { lng: -102.7940126247, lat: 19.7180190916 }, { lng: -102.7829145214, lat: 19.7056482342 }, {
                lng: -102.7846807555,
                lat: 19.6964700833
            }, { lng: -102.7938756992, lat: 19.6893430454 }, { lng: -102.7996058626, lat: 19.6790202206 }, {
                lng: -102.806537187,
                lat: 19.6762236421
            }, { lng: -102.800760507, lat: 19.6735232738 }, { lng: -102.7935899078, lat: 19.6746529319 }, {
                lng: -102.7948459416,
                lat: 19.6634856523
            }, { lng: -102.79448843, lat: 19.6546065807 }, { lng: -102.7874478574, lat: 19.6532153438 }, {
                lng: -102.7894906499,
                lat: 19.6490510456
            }, { lng: -102.786174465, lat: 19.6480483848 }, { lng: -102.78527937, lat: 19.6437700716 }, {
                lng: -102.7814236614,
                lat: 19.6437626281
            }, { lng: -102.7775720092, lat: 19.627552687 }, { lng: -102.7633534709, lat: 19.6287256227 }, {
                lng: -102.7488689199,
                lat: 19.6127106823
            }, { lng: -102.7382098347, lat: 19.6156380823 }, { lng: -102.7205417212, lat: 19.6100119996 }, {
                lng: -102.7226985273,
                lat: 19.6072599608
            }, { lng: -102.7177942884, lat: 19.602243492 }, { lng: -102.7199770164, lat: 19.5989747479 }, {
                lng: -102.7206839533,
                lat: 19.5933404759
            }, { lng: -102.7273845664, lat: 19.5854118866 }, { lng: -102.7249507825, lat: 19.5827043108 }, {
                lng: -102.7282873401,
                lat: 19.5789066042
            }, { lng: -102.7231105895, lat: 19.5801094606 }, { lng: -102.7194892953, lat: 19.5715500142 }, {
                lng: -102.7218489087,
                lat: 19.5692911058
            }, { lng: -102.7161335824, lat: 19.5643284601 }, { lng: -102.7200004012, lat: 19.5486122739 }, {
                lng: -102.7129789086,
                lat: 19.5423211803
            }, { lng: -102.7186340429, lat: 19.5341218198 }, { lng: -102.7167045413, lat: 19.5307502676 }, {
                lng: -102.7204717487,
                lat: 19.525416955
            }, { lng: -102.7198983356, lat: 19.5199590724 }, { lng: -102.7244807334, lat: 19.5188566362 }, {
                lng: -102.7277385781,
                lat: 19.5095016002
            }, { lng: -102.729035627, lat: 19.5125746081 }, { lng: -102.733136056, lat: 19.5107695604 }, {
                lng: -102.7323072453,
                lat: 19.507692084
            }, { lng: -102.7406908652, lat: 19.4990599235 }, { lng: -102.7387465551, lat: 19.4929382387 }, {
                lng: -102.7331141527,
                lat: 19.4958881652
            }, { lng: -102.7261959781, lat: 19.4924818097 }, { lng: -102.7041380783, lat: 19.5091589986 }, {
                lng: -102.6907808996,
                lat: 19.513944089
            }, { lng: -102.6821166717, lat: 19.5111281205 }, { lng: -102.6761205662, lat: 19.5124303906 }, {
                lng: -102.6715254649,
                lat: 19.4913610426
            }, { lng: -102.6758563058, lat: 19.478062627 }, { lng: -102.672907445, lat: 19.4769020104 }, {
                lng: -102.6248064215,
                lat: 19.498526269
            }, { lng: -102.6011065214, lat: 19.518704995 }, { lng: -102.5851734649, lat: 19.5234819033 }, {
                lng: -102.5832760276,
                lat: 19.5291309976
            }, { lng: -102.5780589541, lat: 19.5251290047 }, { lng: -102.5748720776, lat: 19.512783432 }, {
                lng: -102.5766370862,
                lat: 19.4982986289
            }, { lng: -102.5524047146, lat: 19.4923091379 }, { lng: -102.5455067438, lat: 19.4783273232 }, {
                lng: -102.5500322805,
                lat: 19.4725562856
            }, { lng: -102.5566677045, lat: 19.4711751357 }, { lng: -102.557894943, lat: 19.4651190771 }, {
                lng: -102.5665621334,
                lat: 19.4630163981
            }, { lng: -102.5701866325, lat: 19.4453219438 }, { lng: -102.5684293643, lat: 19.4431444433 }, {
                lng: -102.5605756845,
                lat: 19.4476412253
            }, { lng: -102.5502569792, lat: 19.4402701847 }, { lng: -102.561673525, lat: 19.4380559612 }, {
                lng: -102.5543487435,
                lat: 19.4338913639
            }, { lng: -102.5480582482, lat: 19.4350830855 }, { lng: -102.5457467324, lat: 19.4303200481 }, {
                lng: -102.5540347524,
                lat: 19.427068597
            }, { lng: -102.5581139647, lat: 19.4318907511 }, { lng: -102.5669818308, lat: 19.4349642274 }, {
                lng: -102.5741175686,
                lat: 19.4257416295
            }, { lng: -102.5783447101, lat: 19.4246790036 }, { lng: -102.5710144847, lat: 19.4122302084 }, {
                lng: -102.5849519805,
                lat: 19.3902564809
            }, { lng: -102.590507892, lat: 19.3875595855 }, { lng: -102.5970661776, lat: 19.3716102344 }, {
                lng: -102.6027954902,
                lat: 19.3651222122
            }, { lng: -102.6075069711, lat: 19.337934793 }, { lng: -102.6132954199, lat: 19.3237057513 }, {
                lng: -102.6202601951,
                lat: 19.316646107
            }, { lng: -102.6282288081, lat: 19.3143097256 }, { lng: -102.634141997, lat: 19.3071383077 }, {
                lng: -102.6443190233,
                lat: 19.2792286877
            }, { lng: -102.6409471823, lat: 19.2723091079 }, { lng: -102.6438465575, lat: 19.2659113577 }, {
                lng: -102.6405639585,
                lat: 19.2616983629
            }, { lng: -102.6470699195, lat: 19.2594873068 }, { lng: -102.6529987372, lat: 19.2442312593 }, {
                lng: -102.6580045267,
                lat: 19.2417136
            }, { lng: -102.6539624234, lat: 19.2362222333 }, { lng: -102.6584600434, lat: 19.2332220269 }, {
                lng: -102.6578421997,
                lat: 19.2296775631
            }, { lng: -102.6629805417, lat: 19.2290686697 }, { lng: -102.6634337811, lat: 19.2201762946 }, {
                lng: -102.670288321,
                lat: 19.2214827251
            }, { lng: -102.6717832136, lat: 19.2131203691 }, { lng: -102.6960966544, lat: 19.2268735589 }, {
                lng: -102.7024047685,
                lat: 19.2256418929
            }, { lng: -102.6962786389, lat: 19.2402503884 }, { lng: -102.7000031034, lat: 19.250464925 }, {
                lng: -102.7068457298,
                lat: 19.2472214203
            }, { lng: -102.7103004073, lat: 19.2419140454 }, { lng: -102.7090556354, lat: 19.2391541292 }, {
                lng: -102.71343003,
                lat: 19.2365175384
            }, { lng: -102.7295666968, lat: 19.2430938738 }, { lng: -102.739860691, lat: 19.243259491 }, {
                lng: -102.7433965713,
                lat: 19.2497296442
            }, { lng: -102.755919067, lat: 19.2560581046 }, { lng: -102.7749156322, lat: 19.2461660439 }, {
                lng: -102.7920971938,
                lat: 19.2429383295
            }, { lng: -102.7963979468, lat: 19.2327614255 }, { lng: -102.7956638808, lat: 19.2262236642 }, {
                lng: -102.811213159,
                lat: 19.2232854896
            }, { lng: -102.8189398624, lat: 19.2105779592 }, { lng: -102.8248497424, lat: 19.2068518233 }, {
                lng: -102.8330798039,
                lat: 19.2162591476
            }, { lng: -102.8482293707, lat: 19.1998220206 }, { lng: -102.8668630696, lat: 19.20578072 }, {
                lng: -102.8677212739,
                lat: 19.211821252
            }, { lng: -102.8723690459, lat: 19.2108003749 }, { lng: -102.8890652339, lat: 19.2043255714 }, {
                lng: -102.9196614919,
                lat: 19.1789051029
            }, { lng: -102.9297808768, lat: 19.1778833688 }, { lng: -102.9366694055, lat: 19.1827154382 }, {
                lng: -102.9381195361,
                lat: 19.1744212338
            }, { lng: -102.9444521282, lat: 19.178812417 }, { lng: -102.9511435612, lat: 19.17572895 }, {
                lng: -102.9548639449,
                lat: 19.1773613861
            }, { lng: -102.9581465219, lat: 19.1722400762 }, { lng: -102.9636914388, lat: 19.1743591033 }, {
                lng: -102.965712041,
                lat: 19.1674449803
            }, { lng: -102.9687943879, lat: 19.1678376412 }, { lng: -102.9801867072, lat: 19.1542589877 }, {
                lng: -102.985898221,
                lat: 19.1517330038
            }, { lng: -102.9799209161, lat: 19.120899077 }, { lng: -102.9911279647, lat: 19.1246632271 }, {
                lng: -103.0086607513,
                lat: 19.1383162745
            }, { lng: -103.0209707472, lat: 19.1336773624 }, { lng: -103.0229270863, lat: 19.126278531 }, {
                lng: -103.014400165,
                lat: 19.1086585621
            }, { lng: -103.0216445953, lat: 19.1049932689 }, { lng: -103.0181856427, lat: 19.0805388693 }, {
                lng: -102.9917375664,
                lat: 19.0570450081
            }, { lng: -102.9976404702, lat: 19.0539084005 }, { lng: -103.0290453249, lat: 19.0495528645 }, {
                lng: -103.0356329015,
                lat: 19.0349964542
            }, { lng: -103.0421382551, lat: 19.0311701788 }, { lng: -103.0502618648, lat: 19.0335216415 }, {
                lng: -103.0543726658,
                lat: 19.0379771722
            }, { lng: -103.0623890992, lat: 19.0288109274 }, { lng: -103.0666957737, lat: 19.0290027488 }, {
                lng: -103.0689776061,
                lat: 19.0223288502
            }, { lng: -103.0665464035, lat: 19.0072276897 }, { lng: -103.0644369758, lat: 19.0029058683 }, {
                lng: -103.0550977836,
                lat: 18.9982969054
            }, { lng: -103.0679333702, lat: 18.9969460719 }, { lng: -103.0897400945, lat: 18.984902912 }, {
                lng: -103.1011939882,
                lat: 18.9645354761
            }, { lng: -103.1081265476, lat: 18.9611994775 }, { lng: -103.1124389121, lat: 18.9505456834 }, {
                lng: -103.1260239884,
                lat: 18.9378331915
            }, { lng: -103.1270811442, lat: 18.9309168319 }, { lng: -103.1371012093, lat: 18.93177972 }, {
                lng: -103.1503168491,
                lat: 18.9266173228
            }, { lng: -103.1739897267, lat: 18.9358312833 }, { lng: -103.189849242, lat: 18.9537054336 }, {
                lng: -103.2040203343,
                lat: 18.9641937495
            }, { lng: -103.2067967533, lat: 18.9692305354 }, { lng: -103.2054416044, lat: 18.9775767772 }, {
                lng: -103.2129092129,
                lat: 18.9941456776
            }, { lng: -103.2107917227, lat: 19.0013365778 }, { lng: -103.2120804002, lat: 19.0038535549 }, {
                lng: -103.2211976824,
                lat: 19.0042675586
            }, { lng: -103.2297191815, lat: 19.0168873371 }, { lng: -103.2254829953, lat: 19.0246120706 }, {
                lng: -103.2320150838,
                lat: 19.0233500459
            }, { lng: -103.2335476212, lat: 19.0189918696 }, { lng: -103.2376353985, lat: 19.0202653607 }, {
                lng: -103.242898624,
                lat: 19.0145745899
            }, { lng: -103.2503022069, lat: 19.0149646095 }, { lng: -103.2554109265, lat: 19.0112109139 }, {
                lng: -103.259613753,
                lat: 19.0136128788
            }, { lng: -103.2628466978, lat: 19.0036944523 }, { lng: -103.2747209454, lat: 19.001516606 }, {
                lng: -103.2804966723,
                lat: 18.9969073266
            }, { lng: -103.2849328841, lat: 18.999827433 }, { lng: -103.290119563, lat: 18.9923536024 }, {
                lng: -103.291950545,
                lat: 18.9946728031
            }, { lng: -103.3002747537, lat: 18.9938251752 }, { lng: -103.3085091039, lat: 18.9855275819 }, {
                lng: -103.3358968489,
                lat: 18.973038677
            }, { lng: -103.3468844724, lat: 18.9789200773 }, { lng: -103.3602015032, lat: 18.979530791 }, {
                lng: -103.3664916704,
                lat: 18.9753303991
            }, { lng: -103.3697023006, lat: 18.9774460111 }, { lng: -103.3744750232, lat: 18.9757883868 }, {
                lng: -103.3827552052,
                lat: 18.9802038769
            }, { lng: -103.3880865277, lat: 18.9763464384 }, { lng: -103.3860479032, lat: 18.9705588647 }, {
                lng: -103.3964971999,
                lat: 18.9682192159
            }, { lng: -103.4041696011, lat: 18.9671544959 }, { lng: -103.4100515713, lat: 18.9716313313 }, {
                lng: -103.4145646017,
                lat: 18.9679277661
            }, { lng: -103.4189964019, lat: 18.9748543376 }, { lng: -103.4179313854, lat: 18.9786890166 }, {
                lng: -103.4228850286,
                lat: 18.9816953409
            }, { lng: -103.4430338807, lat: 18.9836025386 }, { lng: -103.4647714678, lat: 18.9772557095 }, {
                lng: -103.4747085132,
                lat: 18.9911839826
            }, { lng: -103.476849067, lat: 18.990110205 }, { lng: -103.4744586131, lat: 18.9856269437 }, {
                lng: -103.4808908443,
                lat: 18.9834222252
            }, { lng: -103.4815530359, lat: 18.9794754993 }, { lng: -103.486564795, lat: 18.9797912034 }, {
                lng: -103.4846645197,
                lat: 18.9704437372
            }, { lng: -103.4900373507, lat: 18.9716027201 }, { lng: -103.4911268285, lat: 18.967579356 }, {
                lng: -103.4980543776,
                lat: 18.9725067874
            }, { lng: -103.4926365481, lat: 18.981269373 }, { lng: -103.4933742827, lat: 18.9957507207 }, {
                lng: -103.4964785436,
                lat: 19.0080146597
            }, { lng: -103.5009727573, lat: 19.0123025941 }, { lng: -103.4966646714, lat: 19.015506432 }, {
                lng: -103.4954462679,
                lat: 19.0234672717
            }, { lng: -103.4909916272, lat: 19.0281353926 }, { lng: -103.4933609467, lat: 19.0331872715 }, {
                lng: -103.4990281788,
                lat: 19.0357834922
            }, { lng: -103.502116471, lat: 19.04732789 }, { lng: -103.5093133631, lat: 19.0520895994 }, {
                lng: -103.5115517627,
                lat: 19.0581346009
            }, { lng: -103.5242860351, lat: 19.0664370205 }, { lng: -103.5247225858, lat: 19.0766105531 }, {
                lng: -103.528321621,
                lat: 19.079804061
            }, { lng: -103.5199686316, lat: 19.0991228288 }, { lng: -103.5236989061, lat: 19.1037987069 }, {
                lng: -103.5230207741,
                lat: 19.1131435639
            }, { lng: -103.5257904891, lat: 19.1171043087 }, { lng: -103.5139401716, lat: 19.1324269596 }, {
                lng: -103.5159317387,
                lat: 19.1384273646
            }, { lng: -103.5116469611, lat: 19.1553711726 }, { lng: -103.504314629, lat: 19.1640190713 }, {
                lng: -103.5050120656,
                lat: 19.1711266217
            }, { lng: -103.4993967365, lat: 19.1773202577 }, { lng: -103.500500757, lat: 19.1867524235 }, {
                lng: -103.5055467183,
                lat: 19.195602156
            }, { lng: -103.513489126, lat: 19.2015305173 }, { lng: -103.5136065219, lat: 19.2078694235 }, {
                lng: -103.5172943698,
                lat: 19.2119099836
            }, { lng: -103.5119226535, lat: 19.2152025374 }, { lng: -103.5159645605, lat: 19.2176019432 }, {
                lng: -103.5087448153,
                lat: 19.2289677277
            }, { lng: -103.507873218, lat: 19.2373485048 }, { lng: -103.5115869867, lat: 19.24195539 }, {
                lng: -103.5075068433,
                lat: 19.2535394133
            }, { lng: -103.5113453122, lat: 19.2677227103 }, { lng: -103.5086726909, lat: 19.2911271741 }, {
                lng: -103.5118044794,
                lat: 19.2956155078
            }, { lng: -103.5041357509, lat: 19.2994971613 }, { lng: -103.5021093518, lat: 19.3088255443 }, {
                lng: -103.4941701578,
                lat: 19.3089896452
            }, { lng: -103.4934561896, lat: 19.3161937813 }, { lng: -103.4984983508, lat: 19.3199207341 }, {
                lng: -103.4894477351,
                lat: 19.3276914445
            }, { lng: -103.4890314243, lat: 19.3368501408 }, { lng: -103.4947886254, lat: 19.3465783373 }, {
                lng: -103.5031650249,
                lat: 19.3460361064
            }, { lng: -103.524140183, lat: 19.3581227192 }, { lng: -103.5319349414, lat: 19.3773061576 }, {
                lng: -103.537701943,
                lat: 19.3806555232
            }, { lng: -103.5406136357, lat: 19.3890971209 }, { lng: -103.5542147238, lat: 19.4002372902 }, {
                lng: -103.5585875012,
                lat: 19.4076850886
            }, { lng: -103.5620401138, lat: 19.4097681416 }, { lng: -103.5708177702, lat: 19.4072447121 }, {
                lng: -103.5763119602,
                lat: 19.4124307273
            }, { lng: -103.5830528162, lat: 19.4370794642 }, { lng: -103.5887706302, lat: 19.4399790475 }, {
                lng: -103.5893605937,
                lat: 19.4447309169
            }, { lng: -103.6040208535, lat: 19.4639383455 }, { lng: -103.6181146594, lat: 19.4760837258 }, {
                lng: -103.6158094148,
                lat: 19.4905210526
            }, { lng: -103.6169497232, lat: 19.4956479145 }, { lng: -103.6086167108, lat: 19.5014595295 }, {
                lng: -103.6200183381,
                lat: 19.5135316372
            }, { lng: -103.6544205564, lat: 19.5016383228 }, { lng: -103.6653241528, lat: 19.5038331976 }, {
                lng: -103.6723848557,
                lat: 19.502036189
            }, { lng: -103.6784834419, lat: 19.4973899103 }, { lng: -103.6920880124, lat: 19.4938318152 }, {
                lng: -103.7100800322,
                lat: 19.4719607812
            }, { lng: -103.7186334686, lat: 19.4674463526 }, { lng: -103.720198264, lat: 19.4550507113 }, {
                lng: -103.7373651132,
                lat: 19.4442274881
            }, { lng: -103.7537849976, lat: 19.4461966106 }, { lng: -103.7776559584, lat: 19.4310434354 }, {
                lng: -103.7912109039,
                lat: 19.4302346042
            }, { lng: -103.8012799562, lat: 19.4222245283 }, { lng: -103.8181637921, lat: 19.4146198815 }, {
                lng: -103.8225150191,
                lat: 19.4092390451
            }, { lng: -103.8262446872, lat: 19.4182028383 }, { lng: -103.8249120728, lat: 19.4228725611 }, {
                lng: -103.8305331811,
                lat: 19.4332230367
            }, { lng: -103.8269490906, lat: 19.4381328339 }, { lng: -103.8327406899, lat: 19.4397196293 }, {
                lng: -103.8440590949,
                lat: 19.4387947399
            }, { lng: -103.8542696239, lat: 19.4315361089 }, { lng: -103.8597768661, lat: 19.4311677175 }, {
                lng: -103.8669112202,
                lat: 19.4478993457
            }, { lng: -103.8816524751, lat: 19.4443240831 }, { lng: -103.8939096511, lat: 19.4643607356 }, {
                lng: -103.9113067768,
                lat: 19.4538025659
            }, { lng: -103.9008044873, lat: 19.4378127035 }, { lng: -103.9028753004, lat: 19.4348844386 }, {
                lng: -103.968112254,
                lat: 19.4545893038
            }, { lng: -103.9750634507, lat: 19.4648860592 }, { lng: -103.9777601383, lat: 19.4756411596 }, {
                lng: -103.9900515109,
                lat: 19.4751051929
            }, { lng: -103.9915787071, lat: 19.4716841896 }, { lng: -104.0008662175, lat: 19.4722650859 }, {
                lng: -104.0027050822,
                lat: 19.4699229733
            }, { lng: -104.0420137067, lat: 19.4856483434 }, { lng: -104.0547496291, lat: 19.4988055607 }, {
                lng: -104.065199325,
                lat: 19.4983472502
            }, { lng: -104.0735133633, lat: 19.4849561208 }, { lng: -104.0798748045, lat: 19.4802991835 }, {
                lng: -104.089376679,
                lat: 19.4421413337
            }, { lng: -104.0827231838, lat: 19.4330716699 }, { lng: -104.0735406253, lat: 19.4361309943 }, {
                lng: -104.0865486467,
                lat: 19.4163568563
            }, { lng: -104.0927046011, lat: 19.3940592723 }, { lng: -104.1120270366, lat: 19.3823216476 }, {
                lng: -104.1213827332,
                lat: 19.3728254793
            }, { lng: -104.1226865929, lat: 19.3614133972 }, { lng: -104.1358332385, lat: 19.3545393816 }, {
                lng: -104.127431636,
                lat: 19.3299189269
            }, { lng: -104.1244674264, lat: 19.3283721191 }, { lng: -104.1279086142, lat: 19.3255805359 }, {
                lng: -104.1251406477,
                lat: 19.3200504634
            }, { lng: -104.1311018212, lat: 19.3191176523 }, { lng: -104.135035336, lat: 19.3216203875 }, {
                lng: -104.1388073879,
                lat: 19.313737835
            }, { lng: -104.1428943159, lat: 19.3168974674 }, { lng: -104.1464555585, lat: 19.3120557741 }, {
                lng: -104.1563177412,
                lat: 19.3152242149
            }, { lng: -104.1638050176, lat: 19.303935519 }, { lng: -104.1659665667, lat: 19.3084584789 }, {
                lng: -104.1713516229,
                lat: 19.3085653537
            }, { lng: -104.1718731088, lat: 19.3131773158 }, { lng: -104.1831133205, lat: 19.3129147663 }, {
                lng: -104.1829209748,
                lat: 19.309217924
            }, { lng: -104.1881190861, lat: 19.3065720174 }, { lng: -104.1867279556, lat: 19.3043242109 }, {
                lng: -104.1925152923,
                lat: 19.3027322289
            }, { lng: -104.1919456303, lat: 19.2945416037 }, { lng: -104.1943644006, lat: 19.2918108699 }, {
                lng: -104.1951411548,
                lat: 19.2962264349
            }, { lng: -104.2071451318, lat: 19.3043878164 }, { lng: -104.2091649715, lat: 19.300597807 }, {
                lng: -104.215711116,
                lat: 19.3028815474
            }, { lng: -104.2218188534, lat: 19.2986965842 }, { lng: -104.2231790739, lat: 19.3025416982 }, {
                lng: -104.2275745453,
                lat: 19.3028467874
            }, { lng: -104.2491068611, lat: 19.312736717 }, { lng: -104.2638554725, lat: 19.3122192843 }, {
                lng: -104.2644778232,
                lat: 19.3082793265
            }, { lng: -104.2739537133, lat: 19.3017902099 }, { lng: -104.2818899732, lat: 19.3037966358 }, {
                lng: -104.2860084877,
                lat: 19.2977675239
            }, { lng: -104.2984112419, lat: 19.3037522381 }, { lng: -104.3019224077, lat: 19.2968347004 }, {
                lng: -104.3127606577,
                lat: 19.2903520759
            }, { lng: -104.3170615678, lat: 19.2799606294 }, { lng: -104.326152137, lat: 19.2825406891 }, {
                lng: -104.3329935126,
                lat: 19.2880930256
            }, { lng: -104.3471088758, lat: 19.2903388473 }, { lng: -104.3592985401, lat: 19.2726677889 }, {
                lng: -104.3647679788,
                lat: 19.2699799688
            }, { lng: -104.368127613, lat: 19.278328166 }, { lng: -104.3772661597, lat: 19.2825265325 }, {
                lng: -104.3864425631,
                lat: 19.2729314552
            }, { lng: -104.3990682119, lat: 19.2718722775 }, { lng: -104.4038596192, lat: 19.268108558 }, {
                lng: -104.4060545395,
                lat: 19.2735699554
            }, { lng: -104.4004812606, lat: 19.2861226442 }, { lng: -104.4024807971, lat: 19.2896797096 }, {
                lng: -104.4147628333,
                lat: 19.286363661
            }, { lng: -104.4201600411, lat: 19.2812281961 }, { lng: -104.4263825228, lat: 19.2828623401 }, {
                lng: -104.4422715132,
                lat: 19.2785146889
            }, { lng: -104.4387900989, lat: 19.2705506058 }, { lng: -104.4414959318, lat: 19.263862621 }, {
                lng: -104.4605850279,
                lat: 19.2598627713
            }, { lng: -104.4625347592, lat: 19.2547135962 }, { lng: -104.4601608678, lat: 19.2484245721 }, {
                lng: -104.4689340782,
                lat: 19.2449796217
            }, { lng: -104.4688443166, lat: 19.2421062525 }, { lng: -104.4603143422, lat: 19.2356745815 }, {
                lng: -104.4660053735,
                lat: 19.2306371828
            }, { lng: -104.4795732491, lat: 19.2381623147 }, { lng: -104.4907171984, lat: 19.230303023 }, {
                lng: -104.4933756505,
                lat: 19.2401231209
            }, { lng: -104.4906483606, lat: 19.246515478 }, { lng: -104.4969280921, lat: 19.2544912592 }, {
                lng: -104.5058151362,
                lat: 19.2531310361
            }, { lng: -104.509292132, lat: 19.2439349794 }, { lng: -104.5211167645, lat: 19.2540112783 }, {
                lng: -104.5257192823,
                lat: 19.2536813002
            }, { lng: -104.5281851613, lat: 19.2585768576 }, { lng: -104.5353619764, lat: 19.260199731 }, {
                lng: -104.541967261,
                lat: 19.2494827045
            }, { lng: -104.5592312828, lat: 19.2358501327 }, { lng: -104.5604373905, lat: 19.22684521 }, {
                lng: -104.5751429616,
                lat: 19.2128417973
            }, { lng: -104.5755219575, lat: 19.2091405672 }, { lng: -104.5709444515, lat: 19.204091411 }, {
                lng: -104.5793110701,
                lat: 19.1812966678
            }, { lng: -104.585271104, lat: 19.1782348431 }, { lng: -104.592358392, lat: 19.1869286272 }, {
                lng: -104.6021581941,
                lat: 19.1826725712
            }, { lng: -104.5991027028, lat: 19.1688498744 }, { lng: -104.5893554213, lat: 19.1631851918 }, {
                lng: -104.5897766277,
                lat: 19.1561829547
            }, { lng: -104.5945965588, lat: 19.152394962 }, { lng: -104.6154418074, lat: 19.1560409095 }, {
                lng: -104.6139500351,
                lat: 19.1608303475
            }, { lng: -104.6188148814, lat: 19.1629327096 }, { lng: -104.6216136843, lat: 19.1686949505 }, {
                lng: -104.6182199481,
                lat: 19.1752592481
            }, { lng: -104.6215434487, lat: 19.1810193469 }, { lng: -104.6283583789, lat: 19.1788268297 }, {
                lng: -104.6321342523,
                lat: 19.1738141858
            }, { lng: -104.6385356177, lat: 19.1749447596 }, { lng: -104.6540732673, lat: 19.182519454 }, {
                lng: -104.6661365074,
                lat: 19.1844471536
            }, { lng: -104.6600148166, lat: 19.1840060206 }, { lng: -104.6569930458, lat: 19.1845730136 }, {
                lng: -104.6600630438,
                lat: 19.1864993057
            }, { lng: -104.6607058765, lat: 19.1876841698 }, { lng: -104.6598029131, lat: 19.1952390159 }, {
                lng: -104.6606442565,
                lat: 19.1963298105
            }, { lng: -104.6639406793, lat: 19.1966346305 }, { lng: -104.6652459379, lat: 19.1990221349 }, {
                lng: -104.6698984163,
                lat: 19.1984263887
            }, { lng: -104.6719261982, lat: 19.1992131472 }, { lng: -104.6767147162, lat: 19.1962973358 }, {
                lng: -104.6765296856,
                lat: 19.1975714578
            }, { lng: -104.674163041, lat: 19.199468377 }, { lng: -104.6789031948, lat: 19.1999468662 }, {
                lng: -104.6824970506,
                lat: 19.1978900683
            }, { lng: -104.6831473127, lat: 19.1984653416 }, { lng: -104.6829612181, lat: 19.2011485575 }, {
                lng: -104.6848497943,
                lat: 19.2031042721
            }, { lng: -104.6860973476, lat: 19.2025159242 }, { lng: -104.6880592472, lat: 19.1994366346 }, {
                lng: -104.6889677439,
                lat: 19.1995587812
            }, { lng: -104.6886006283, lat: 19.2027345284 }, { lng: -104.6885511063, lat: 19.2080069634 }, {
                lng: -104.6914460162,
                lat: 19.2126338792
            }, { lng: -104.7037085247, lat: 19.2225906702 }, { lng: -104.7079596147, lat: 19.2228934643 }, {
                lng: -104.716437873,
                lat: 19.2218023087
            }, { lng: -104.7170931957, lat: 19.220207077 }, { lng: -104.7153905837, lat: 19.2175597062 }, {
                lng: -104.7156708991,
                lat: 19.2167799314
            }, { lng: -104.7192060345, lat: 19.2189936036 }, { lng: -104.72014184, lat: 19.2204879357 }, {
                lng: -104.7252266485,
                lat: 19.2205012337
            }, { lng: -104.7276268486, lat: 19.2231971812 }, { lng: -104.7300830439, lat: 19.2200608382 }, {
                lng: -104.7319431658,
                lat: 19.2205372029
            }, { lng: -104.7323775777, lat: 19.2227155618 }, { lng: -104.7334054394, lat: 19.223553455 }, {
                lng: -104.7371434445,
                lat: 19.2234749873
            }, { lng: -104.7388554479, lat: 19.2275265565 }, { lng: -104.7392066721, lat: 19.2303112911 }, {
                lng: -104.7383875738,
                lat: 19.2308584068
            }, { lng: -104.7341022117, lat: 19.2307677579 }, { lng: -104.7329271427, lat: 19.2326057557 }, {
                lng: -104.7342688057,
                lat: 19.2367456204
            }, { lng: -104.7329837718, lat: 19.2378538524 }, { lng: -104.7331058816, lat: 19.2387170767 }, {
                lng: -104.7336570516,
                lat: 19.2400460886
            }, { lng: -104.7352781788, lat: 19.2409639578 }, { lng: -104.7400394265, lat: 19.2409803201 }, {
                lng: -104.7420721233,
                lat: 19.2419609443
            }, { lng: -104.7501148777, lat: 19.2371761965 }, { lng: -104.7532658333, lat: 19.2392080484 }, {
                lng: -104.7556289211,
                lat: 19.2390565662
            }, { lng: -104.7572336389, lat: 19.2358195874 }, { lng: -104.7597489443, lat: 19.2337486847 }, {
                lng: -104.7602109228,
                lat: 19.2310987637
            }, { lng: -104.7614373323, lat: 19.2304104808 }, { lng: -104.7630563011, lat: 19.2312170764 }, {
                lng: -104.7642844466,
                lat: 19.2334625344
            }, { lng: -104.7702334922, lat: 19.2318342974 }, { lng: -104.7725471149, lat: 19.2320753792 }, {
                lng: -104.7751754783,
                lat: 19.2351470806
            }, { lng: -104.7747814459, lat: 19.2364229359 }, { lng: -104.7754450632, lat: 19.2395213719 }, {
                lng: -104.7766612945,
                lat: 19.2406908575
            }, { lng: -104.7767780311, lat: 19.2408020044 }, { lng: -104.7802617889, lat: 19.2418100323 }, {
                lng: -104.7822868298,
                lat: 19.2395687133
            }, { lng: -104.7858829806, lat: 19.2404726102 }, { lng: -104.7892788807, lat: 19.2390284947 }, {
                lng: -104.7915247753,
                lat: 19.2396851209
            }, { lng: -104.793886034, lat: 19.2394447229 }, { lng: -104.7960273919, lat: 19.2354294676 }, {
                lng: -104.7995347465,
                lat: 19.2343161087
            }, { lng: -104.8000126569, lat: 19.2324858658 }, { lng: -104.8012183752, lat: 19.2331320129 }, {
                lng: -104.8022518886,
                lat: 19.2360943935
            }, { lng: -104.8060589283, lat: 19.2365770777 }, { lng: -104.8065670647, lat: 19.2371658074 }, {
                lng: -104.811293649,
                lat: 19.2368905927
            }, { lng: -104.8113911355, lat: 19.2351262312 }, { lng: -104.812042889, lat: 19.2348060899 }, {
                lng: -104.8137932582,
                lat: 19.2368874748
            }, { lng: -104.8128138122, lat: 19.2398439345 }, { lng: -104.8128212498, lat: 19.24393759 }, {
                lng: -104.8117604631,
                lat: 19.2457197571
            }, { lng: -104.8126606364, lat: 19.2491444802 }, { lng: -104.8103732835, lat: 19.2548732192 }, {
                lng: -104.8108099745,
                lat: 19.2570967316
            }, { lng: -104.812001012, lat: 19.2584114269 }, { lng: -104.8132783225, lat: 19.2611427661 }, {
                lng: -104.8103189738,
                lat: 19.2634176547
            }, { lng: -104.8084240021, lat: 19.2636134612 }, { lng: -104.8054476064, lat: 19.2622545947 }, {
                lng: -104.8037700766,
                lat: 19.2628178914
            }, { lng: -104.8036697986, lat: 19.2681936828 }, { lng: -104.8026626321, lat: 19.2712163844 }, {
                lng: -104.7984804323,
                lat: 19.2739145654
            }, { lng: -104.7970305942, lat: 19.2805159742 }, { lng: -104.7935239725, lat: 19.2817244529 }, {
                lng: -104.792193549,
                lat: 19.2829450886
            }, { lng: -104.7920961802, lat: 19.2851988983 }, { lng: -104.7934722756, lat: 19.2909193063 }, {
                lng: -104.7955311868,
                lat: 19.2950095389
            }, { lng: -104.7995850243, lat: 19.2986258473 }, { lng: -104.8085947539, lat: 19.3037254284 }, {
                lng: -104.8159531273,
                lat: 19.3069314799
            }, { lng: -104.8331168784, lat: 19.3097444715 }, { lng: -104.8367819644, lat: 19.3087949206 }, {
                lng: -104.8419866612,
                lat: 19.3056732275
            }, { lng: -104.8446043018, lat: 19.3025498428 }, { lng: -104.8453666789, lat: 19.3038723593 }, {
                lng: -104.8471039488,
                lat: 19.3047937581
            }, { lng: -104.8444381596, lat: 19.3005183656 }, { lng: -104.8442105298, lat: 19.2987440617 }, {
                lng: -104.8406815991,
                lat: 19.297953479
            }, { lng: -104.8395879467, lat: 19.2944530259 }, { lng: -104.8406635606, lat: 19.2920019244 }, {
                lng: -104.8426958571,
                lat: 19.2928906688
            }, { lng: -104.8419415524, lat: 19.294261871 }, { lng: -104.8448075795, lat: 19.2943873668 }, {
                lng: -104.8473821169,
                lat: 19.2915004008
            }, { lng: -104.8487069275, lat: 19.2918698576 }, { lng: -104.8501703238, lat: 19.2901772306 }, {
                lng: -104.8509980079,
                lat: 19.2928080285
            }, { lng: -104.8538290124, lat: 19.2907884322 }, { lng: -104.8573396097, lat: 19.2929973484 }, {
                lng: -104.866854212,
                lat: 19.2924696848
            }, { lng: -104.8719287087, lat: 19.2913998715 }, { lng: -104.876416235, lat: 19.287370697 }, {
                lng: -104.8772794929,
                lat: 19.2848395232
            }, { lng: -104.8754371209, lat: 19.2802614662 }, { lng: -104.8764659194, lat: 19.2788011002 }, {
                lng: -104.8773710302,
                lat: 19.2787273654
            }, { lng: -104.8787401684, lat: 19.279847908 }, { lng: -104.8777868386, lat: 19.2821768711 }, {
                lng: -104.8802986159,
                lat: 19.2831693292
            }, { lng: -104.8805635201, lat: 19.2853348094 }, { lng: -104.8822607039, lat: 19.2875298436 }, {
                lng: -104.8890572252,
                lat: 19.2916605455
            }, { lng: -104.9012663047, lat: 19.2967030154 }, { lng: -104.910397799, lat: 19.2992612635 }, {
                lng: -104.9122845355,
                lat: 19.2991096579
            }, { lng: -104.9063609531, lat: 19.301554178 }, { lng: -104.9031246974, lat: 19.3028914693 }, {
                lng: -104.8976724858,
                lat: 19.3032603526
            }, { lng: -104.8986019555, lat: 19.3038815991 }, { lng: -104.8992541339, lat: 19.3067421032 }, {
                lng: -104.9016875741,
                lat: 19.304448196
            }, { lng: -104.9048387382, lat: 19.3058563244 }, { lng: -104.9064809124, lat: 19.3018101791 }, {
                lng: -104.9125037922,
                lat: 19.3008976317
            }, { lng: -104.9135713025, lat: 19.298573008 }, { lng: -104.9155335723, lat: 19.3010821102 }, {
                lng: -104.9366326765,
                lat: 19.3115364591
            }, { lng: -104.9384385655, lat: 19.3116149273 }, { lng: -104.9397934906, lat: 19.3102474767 }, {
                lng: -104.9407682947,
                lat: 19.313867434
            }, { lng: -104.9417048685, lat: 19.3148077621 }, { lng: -104.9465953879, lat: 19.3184993245 }, {
                lng: -104.9513097,
                lat: 19.3206421166
            }, { lng: -104.9550602431, lat: 19.3241312049 }, { lng: -104.9573030566, lat: 19.3245408451 }, {
                lng: -104.9635601887,
                lat: 19.331357095
            }, { lng: -104.9677320025, lat: 19.3335462252 }, { lng: -104.968170173, lat: 19.335266495 }, {
                lng: -104.9703912972,
                lat: 19.336870453
            }, { lng: -104.9704974247, lat: 19.3382459949 }, { lng: -104.9730715968, lat: 19.3424827145 }, {
                lng: -104.9756595516,
                lat: 19.3451443926
            }, { lng: -104.9799697657, lat: 19.3479626978 }, { lng: -104.9814608908, lat: 19.3480332286 }, {
                lng: -104.9821088061,
                lat: 19.3470892926
            }, { lng: -104.9830642956, lat: 19.3471181742 }, { lng: -104.9859462592, lat: 19.3501138173 }, {
                lng: -104.9870969511,
                lat: 19.3503359777
            }, { lng: -104.9876320121, lat: 19.3525460187 }, { lng: -104.9890312247, lat: 19.3536560386 }, {
                lng: -104.988660084,
                lat: 19.3545923176
            }, { lng: -104.991033724, lat: 19.3548425766 }, { lng: -104.9913922175, lat: 19.3568340276 }, {
                lng: -104.9939279045,
                lat: 19.3588212463
            }, { lng: -104.9965118144, lat: 19.359513668 }, { lng: -104.9980079349, lat: 19.3633067742 }, {
                lng: -105.0026943111,
                lat: 19.3671209008
            }, { lng: -105.0015501993, lat: 19.3680815163 }, { lng: -105.003655605, lat: 19.367845171 }, {
                lng: -105.0103103195,
                lat: 19.3743031181
            }, { lng: -105.0225115063, lat: 19.3827809214 }, { lng: -105.0243335153, lat: 19.3831118618 }, {
                lng: -105.0275489613,
                lat: 19.38512816
            }, { lng: -105.0290213308, lat: 19.3843284875 }, { lng: -105.0291373303, lat: 19.3856902795 }, {
                lng: -105.0325298432,
                lat: 19.3866357
            }, { lng: -105.0332506977, lat: 19.3872716839 }, { lng: -105.0329348581, lat: 19.3885401033 }, {
                lng: -105.0352529764,
                lat: 19.3901367777
            }, { lng: -105.0354834786, lat: 19.3919222953 }, { lng: -105.0336821578, lat: 19.3955610406 }, {
                lng: -105.033802626,
                lat: 19.3997167063
            }, { lng: -105.0283403996, lat: 19.3954633198 }, { lng: -105.0261845987, lat: 19.3964646376 }, {
                lng: -105.0239076494,
                lat: 19.3993400224
            }, { lng: -105.021020809, lat: 19.4079309607 }, { lng: -105.0207776174, lat: 19.4138115237 }, {
                lng: -105.0224899438,
                lat: 19.4208588923
            }, { lng: -105.0243454085, lat: 19.4244205547 }, { lng: -105.0257921493, lat: 19.4241720436 }, {
                lng: -105.0265985442,
                lat: 19.4256470904
            }, { lng: -105.0283905411, lat: 19.4254574154 }, { lng: -105.0302877181, lat: 19.430466205 }, {
                lng: -105.033035567,
                lat: 19.4311570983
            }, { lng: -105.0329706452, lat: 19.4329757677 }, { lng: -105.0309004928, lat: 19.4335539901 }, {
                lng: -105.0302292999,
                lat: 19.4356113194
            }, { lng: -105.0285205036, lat: 19.4374128024 }, { lng: -105.0304018535, lat: 19.4399655429 }, {
                lng: -105.0324390491,
                lat: 19.4391885663
            }, { lng: -105.033270937, lat: 19.439647895 }, { lng: -105.0355834547, lat: 19.4435448542 }, {
                lng: -105.0346953936,
                lat: 19.4453006204
            }, { lng: -105.0354008343, lat: 19.4465215987 }, { lng: -105.0393110759, lat: 19.4474747818 }, {
                lng: -105.0405120982,
                lat: 19.4451824781
            }, { lng: -105.0411251887, lat: 19.4452518309 }, { lng: -105.041807202, lat: 19.4467066556 }, {
                lng: -105.0458445705,
                lat: 19.4490802474
            }, { lng: -105.0464367652, lat: 19.4516517775 }, { lng: -105.0489707616, lat: 19.4525868892 }, {
                lng: -105.0487049974,
                lat: 19.4543892311
            }, { lng: -105.0472884039, lat: 19.4564389236 }, { lng: -105.0510517594, lat: 19.4559263109 }, {
                lng: -105.0519788452,
                lat: 19.4567915462
            }, { lng: -105.0536326976, lat: 19.4563890587 }, { lng: -105.056942067, lat: 19.4573765001 }, {
                lng: -105.0559901983,
                lat: 19.4592628682
            }, { lng: -105.0590394578, lat: 19.4605818045 }, { lng: -105.0592120131, lat: 19.4623210016 }, {
                lng: -105.065050222,
                lat: 19.4639894894
            }, { lng: -105.0647782236, lat: 19.4655042093 }, { lng: -105.0675635241, lat: 19.4656929514 }, {
                lng: -105.0697158503,
                lat: 19.4683463632
            }, { lng: -105.0721465285, lat: 19.4697681532 }, { lng: -105.0739033042, lat: 19.4726765002 }, {
                lng: -105.0765463714,
                lat: 19.4733347805
            }, { lng: -105.07683371, lat: 19.4746410972 }, { lng: -105.0740781585, lat: 19.4740825332 }, {
                lng: -105.0718174558,
                lat: 19.4747082253
            }, { lng: -105.0685301295, lat: 19.4743030403 }, { lng: -105.0681170254, lat: 19.4759180673 }, {
                lng: -105.0658353578,
                lat: 19.4751798567
            }, { lng: -105.0656332929, lat: 19.4738355479 }, { lng: -105.0623781529, lat: 19.4735859498 }, {
                lng: -105.0619737278,
                lat: 19.4743079128
            }, { lng: -105.0634497477, lat: 19.4757784751 }, { lng: -105.0615231916, lat: 19.4759621968 }, {
                lng: -105.0610581957,
                lat: 19.4769686465
            }, { lng: -105.0615353545, lat: 19.4782213282 }, { lng: -105.0633306211, lat: 19.4785773278 }, {
                lng: -105.0633364454,
                lat: 19.4809793627
            }, { lng: -105.063392559, lat: 19.4817804651 }, { lng: -105.0652965108, lat: 19.4822928939 }, {
                lng: -105.0627641299,
                lat: 19.4831731944
            }, { lng: -105.0640034259, lat: 19.4847391684 }, { lng: -105.0635277013, lat: 19.4856937277 }, {
                lng: -105.0665874546,
                lat: 19.4861693262
            }, { lng: -105.0668650567, lat: 19.4870430293 }, { lng: -105.0659557183, lat: 19.4882691966 }, {
                lng: -105.0675314243,
                lat: 19.4899145049
            }, { lng: -105.0673218786, lat: 19.4912308535 }, { lng: -105.0681857829, lat: 19.4913925081 }, {
                lng: -105.0694233663,
                lat: 19.490311554
            }, { lng: -105.0697394661, lat: 19.4911958125 }, { lng: -105.0689519739, lat: 19.4927413528 }, {
                lng: -105.0670944991,
                lat: 19.4930325318
            }, { lng: -105.0673064722, lat: 19.4961012598 }, { lng: -105.0647817917, lat: 19.4973372438 }, {
                lng: -105.064943278,
                lat: 19.4981475734
            }, { lng: -105.0673206055, lat: 19.4984442509 }, { lng: -105.0701403305, lat: 19.5001415826 }, {
                lng: -105.0699114982,
                lat: 19.5027319617
            }, { lng: -105.0708054111, lat: 19.503804029 }, { lng: -105.073586103, lat: 19.504178609 }, {
                lng: -105.0763203945,
                lat: 19.50248273
            }, { lng: -105.0800521449, lat: 19.5047688465 }, { lng: -105.0797252877, lat: 19.5063912806 }, {
                lng: -105.0806012478,
                lat: 19.5066591399
            }, { lng: -105.0822049706, lat: 19.5052783248 }, { lng: -105.0830206565, lat: 19.5058420001 }, {
                lng: -105.0828264277,
                lat: 19.5069835833
            }, { lng: -105.0848706589, lat: 19.5081886946 }, { lng: -105.0846903773, lat: 19.5095248994 }, {
                lng: -105.0825643729,
                lat: 19.5093616477
            }, { lng: -105.0836605689, lat: 19.5117711889 }, { lng: -105.0852937995, lat: 19.512551753 }, {
                lng: -105.0860179921,
                lat: 19.5149960054
            }, { lng: -105.0827845991, lat: 19.5161854544 }, { lng: -105.0840849009, lat: 19.5174645457 }, {
                lng: -105.085085217,
                lat: 19.5164562225
            }, { lng: -105.0873846221, lat: 19.5175224439 }, { lng: -105.0861923952, lat: 19.5189244664 }, {
                lng: -105.0863824893,
                lat: 19.5214248641
            }, { lng: -105.0838415426, lat: 19.5223759669 }, { lng: -105.0831009358, lat: 19.5234560924 }, {
                lng: -105.0852957455,
                lat: 19.5249686626
            }, { lng: -105.0860336519, lat: 19.5288699026 }, { lng: -105.0871721166, lat: 19.5288989938 }, {
                lng: -105.0875916112,
                lat: 19.5296950428
            }, { lng: -105.0875466098, lat: 19.5319441322 }, { lng: -105.085857079, lat: 19.5324973012 }, {
                lng: -105.0846845187,
                lat: 19.5347805298
            }, { lng: -105.0864499085, lat: 19.5384479956 }, { lng: -105.0864738208, lat: 19.542486114 }, {
                lng: -105.089778693,
                lat: 19.5537849669
            }, { lng: -105.0923191661, lat: 19.5570310662 }, { lng: -105.0913319188, lat: 19.5590545451 }, {
                lng: -105.0914785011,
                lat: 19.561739501
            }, { lng: -105.1005734738, lat: 19.5680799077 }, { lng: -105.1025622481, lat: 19.570591455 }, {
                lng: -105.1070424894,
                lat: 19.5800623185
            }, { lng: -105.1092703876, lat: 19.5817167667 }, { lng: -105.1109385078, lat: 19.5844138284 }, {
                lng: -105.1151944492,
                lat: 19.5864914667
            }, { lng: -105.124710736, lat: 19.5897895236 }, { lng: -105.1289756307, lat: 19.5901463684 }, {
                lng: -105.1322311562,
                lat: 19.5894472449
            }, { lng: -105.1367793318, lat: 19.5871327014 }, { lng: -105.1372428765, lat: 19.5839796034 }, {
                lng: -105.1367762907,
                lat: 19.5828174412
            }, { lng: -105.1378078015, lat: 19.578569322 }, { lng: -105.1389101899, lat: 19.5790928623 }, {
                lng: -105.1421789588,
                lat: 19.5785677712
            }, { lng: -105.1440355529, lat: 19.5790281483 }, { lng: -105.1451724783, lat: 19.5777196496 }, {
                lng: -105.1465347934,
                lat: 19.5795659115
            }, { lng: -105.1473879167, lat: 19.5842307993 }, { lng: -105.1486642256, lat: 19.5860765636 }, {
                lng: -105.1553197793,
                lat: 19.5893138643
            }, { lng: -105.1555507443, lat: 19.5906213743 }, { lng: -105.1568527445, lat: 19.5919135346 }, {
                lng: -105.1568595874,
                lat: 19.5942886604
            }, { lng: -105.1555129891, lat: 19.5931379403 }, { lng: -105.1533520852, lat: 19.5948461984 }, {
                lng: -105.1536793869,
                lat: 19.5961834586
            }, { lng: -105.1567271864, lat: 19.5989263598 }, { lng: -105.1542310132, lat: 19.6031143197 }, {
                lng: -105.155670961,
                lat: 19.6054077185
            }, { lng: -105.1573453757, lat: 19.6062479611 }, { lng: -105.1628594138, lat: 19.6055694353 }, {
                lng: -105.1640204301,
                lat: 19.6061323971
            }, { lng: -105.1650060726, lat: 19.6053141505 }, { lng: -105.1652124439, lat: 19.6067944342 }, {
                lng: -105.1626747947,
                lat: 19.6095940525
            }, { lng: -105.1643170327, lat: 19.6127671413 }, { lng: -105.1681550399, lat: 19.616143983 }, {
                lng: -105.1718108773,
                lat: 19.6182552663
            }, { lng: -105.1763759451, lat: 19.6195474609 }, { lng: -105.1806521975, lat: 19.6191093666 }, {
                lng: -105.1838295483,
                lat: 19.6228531946
            }, { lng: -105.1870549078, lat: 19.6237151741 }, { lng: -105.1913104418, lat: 19.623204684 }, {
                lng: -105.1940183042,
                lat: 19.6244399857
            }, { lng: -105.1952367501, lat: 19.6237594496 }, { lng: -105.1974672738, lat: 19.6238079382 }, {
                lng: -105.2002034117,
                lat: 19.6246118929
            }, { lng: -105.2015441862, lat: 19.6234346305 }, { lng: -105.2017602388, lat: 19.6216236513 }, {
                lng: -105.2045120767,
                lat: 19.6218718903
            }, { lng: -105.204473492, lat: 19.6226773289 }, { lng: -105.203094888, lat: 19.6230530478 }, {
                lng: -105.2038032214,
                lat: 19.6255223363
            }, { lng: -105.2018895618, lat: 19.6263421881 }, { lng: -105.2023312527, lat: 19.6300954325 }, {
                lng: -105.2051240745,
                lat: 19.633726813
            }, { lng: -105.2085313017, lat: 19.6362096829 }, { lng: -105.2120156789, lat: 19.6374872987 }, {
                lng: -105.214115202,
                lat: 19.6409178082
            }, { lng: -105.2188746735, lat: 19.64391825 }, { lng: -105.2216894746, lat: 19.646417885 }, {
                lng: -105.2522874597,
                lat: 19.6735787642
            }, { lng: -105.2574091559, lat: 19.6748205364 }, { lng: -105.2631372988, lat: 19.6802221866 }, {
                lng: -105.2677124298,
                lat: 19.681409573
            }, { lng: -105.2676567794, lat: 19.6830904009 }, { lng: -105.2638184321, lat: 19.6847070597 }, {
                lng: -105.2636282924,
                lat: 19.6887821621
            }, { lng: -105.264727051, lat: 19.6927118601 }, { lng: -105.2713305319, lat: 19.7026553218 }, {
                lng: -105.2767658376,
                lat: 19.7089514941
            }, { lng: -105.2865404326, lat: 19.7169041758 }, { lng: -105.2901555323, lat: 19.7179257403 }, {
                lng: -105.2942237733,
                lat: 19.7210659828
            }, { lng: -105.2955528513, lat: 19.7213864001 }, { lng: -105.2957388347, lat: 19.7227492764 }, {
                lng: -105.2941805081,
                lat: 19.7228508986
            }, { lng: -105.295668213, lat: 19.7261827658 }, { lng: -105.2962657243, lat: 19.7311183609 }, {
                lng: -105.2979329677,
                lat: 19.7319573709
            }, { lng: -105.3023295093, lat: 19.7383636949 }, { lng: -105.3218211068, lat: 19.760632566 }, {
                lng: -105.3249357598,
                lat: 19.7614965102
            }, { lng: -105.32715313, lat: 19.7644564321 }, { lng: -105.3312009017, lat: 19.766662351 }, {
                lng: -105.3329999571,
                lat: 19.7697424075
            }, { lng: -105.3308044513, lat: 19.7739931883 }, { lng: -105.3356217585, lat: 19.791264349 }, {
                lng: -105.3378740013,
                lat: 19.792087954
            }, { lng: -105.3400254992, lat: 19.7938862662 }, { lng: -105.3465227695, lat: 19.8049385603 }, {
                lng: -105.3635837166,
                lat: 19.8266608439
            }, { lng: -105.3798859086, lat: 19.8414974791 }, { lng: -105.3835114506, lat: 19.847819588 }, {
                lng: -105.3892803848,
                lat: 19.8532099643
            }, { lng: -105.4145566124, lat: 19.8844059949 }, { lng: -105.4390153667, lat: 19.9161887426 }, {
                lng: -105.4558254432,
                lat: 19.9408885242
            }, { lng: -105.4769632706, lat: 19.9654072107 }, { lng: -105.4902691504, lat: 19.9857490659 }, {
                lng: -105.4932693752,
                lat: 19.9886486766
            }, { lng: -105.4973550381, lat: 19.9942194403 }, { lng: -105.5018471333, lat: 20.001785279 }, {
                lng: -105.5148909214,
                lat: 20.0247145293
            }, { lng: -105.5171241196, lat: 20.0302005436 }, { lng: -105.5339260901, lat: 20.0616616157 }, {
                lng: -105.5400227671,
                lat: 20.0754190186
            }, { lng: -105.5438365563, lat: 20.0810679207 }, { lng: -105.5463373347, lat: 20.0864251774 }, {
                lng: -105.5474089423,
                lat: 20.0922010518
            }, { lng: -105.5519932427, lat: 20.0960631976 }, { lng: -105.5521029559, lat: 20.0991764573 }, {
                lng: -105.5491910871,
                lat: 20.1005615207
            }, { lng: -105.5484022831, lat: 20.101616142 }, { lng: -105.5474336358, lat: 20.1142402415 }, {
                lng: -105.5498177975,
                lat: 20.1331954402
            }, { lng: -105.5499198462, lat: 20.1467361996 }, { lng: -105.5508411295, lat: 20.1529875472 }, {
                lng: -105.5502235854,
                lat: 20.1606443598
            }, { lng: -105.550665333, lat: 20.1628565753 }, { lng: -105.5498029135, lat: 20.1736623397 }, {
                lng: -105.5453413027,
                lat: 20.1820296894
            }, { lng: -105.5451625686, lat: 20.183657607 }, { lng: -105.5449082748, lat: 20.1860764889 }, {
                lng: -105.5464940474,
                lat: 20.1912740075
            }, { lng: -105.5482252098, lat: 20.2042832974 }, { lng: -105.5525631259, lat: 20.2162616252 }, {
                lng: -105.5539836968,
                lat: 20.2180407456
            }, { lng: -105.5580018515, lat: 20.2276701021 }, { lng: -105.5614449537, lat: 20.2325501055 }, {
                lng: -105.5651432647,
                lat: 20.2354147082
            }, { lng: -105.574134494, lat: 20.2396187033 }, { lng: -105.5764448092, lat: 20.2390159496 }, {
                lng: -105.576528931,
                lat: 20.2363559311
            }, { lng: -105.5776638229, lat: 20.2356490486 }, { lng: -105.583130991, lat: 20.2381408008 }, {
                lng: -105.5835624298,
                lat: 20.2402966234
            }, { lng: -105.5818352311, lat: 20.2422421046 }, { lng: -105.5845644529, lat: 20.2451470698 }, {
                lng: -105.5852984539,
                lat: 20.2482075538
            }, { lng: -105.5875100645, lat: 20.2496980269 }, { lng: -105.5859910146, lat: 20.2522510541 }, {
                lng: -105.5861390091,
                lat: 20.2549578486
            }, { lng: -105.5878074033, lat: 20.2591849151 }, { lng: -105.590751052, lat: 20.2632800456 }, {
                lng: -105.6184468836,
                lat: 20.2882621392
            }, { lng: -105.6262072407, lat: 20.2933543023 }, { lng: -105.626120584, lat: 20.2944359619 }, {
                lng: -105.6235819703,
                lat: 20.2937112364
            }, { lng: -105.6265156192, lat: 20.2962751099 }, { lng: -105.6246090019, lat: 20.2997971942 }, {
                lng: -105.6178762983,
                lat: 20.3041023282
            }, { lng: -105.6141387353, lat: 20.3042267816 }, { lng: -105.6108915689, lat: 20.3065305799 }, {
                lng: -105.613554182,
                lat: 20.3061208194
            }, { lng: -105.6157728885, lat: 20.3052905435 }, { lng: -105.6218005613, lat: 20.3063027176 }, {
                lng: -105.6232108291,
                lat: 20.3025519675
            }, { lng: -105.6285844575, lat: 20.2974123636 }, { lng: -105.6351599331, lat: 20.3045598634 }, {
                lng: -105.6383737834,
                lat: 20.306073565
            }, { lng: -105.6375431848, lat: 20.3041358956 }, { lng: -105.6357760692, lat: 20.303501921 }, {
                lng: -105.6330368316,
                lat: 20.3010288551
            }, { lng: -105.6310535068, lat: 20.2976873071 }, { lng: -105.62961527, lat: 20.297483219 }, {
                lng: -105.6272948916,
                lat: 20.2941178625
            }, { lng: -105.6319830564, lat: 20.2961207125 }, { lng: -105.6403199167, lat: 20.3054852832 }, {
                lng: -105.639149034,
                lat: 20.3088199977
            }, { lng: -105.6329635355, lat: 20.3091141374 }, { lng: -105.631192668, lat: 20.3097866308 }, {
                lng: -105.6266972746,
                lat: 20.316141723
            }, { lng: -105.6251177533, lat: 20.3171430353 }, { lng: -105.6253024027, lat: 20.3179393188 }, {
                lng: -105.6257926114,
                lat: 20.320100597
            }, { lng: -105.6298513232, lat: 20.3211862542 }, { lng: -105.6298255965, lat: 20.3216654405 }, {
                lng: -105.627796264,
                lat: 20.3227522814
            }, { lng: -105.6234645476, lat: 20.3229771995 }, { lng: -105.6204381793, lat: 20.3256389118 }, {
                lng: -105.6224641143,
                lat: 20.3302180781
            }, { lng: -105.6250116751, lat: 20.3327027359 }, { lng: -105.6209814995, lat: 20.3337914205 }, {
                lng: -105.6202816725,
                lat: 20.3353298806
            }, { lng: -105.6218848207, lat: 20.3362968146 }, { lng: -105.6251732369, lat: 20.3358879487 }, {
                lng: -105.6255221138,
                lat: 20.3367098474
            }, { lng: -105.6243164252, lat: 20.3391199262 }, { lng: -105.6203793348, lat: 20.3415491519 }, {
                lng: -105.619814762,
                lat: 20.342748735
            }, { lng: -105.6208435574, lat: 20.3445435204 }, { lng: -105.6180982052, lat: 20.3454883766 }, {
                lng: -105.6178228452,
                lat: 20.3467128853
            }, { lng: -105.6193936515, lat: 20.3504455359 }, { lng: -105.622462603, lat: 20.3526276473 }, {
                lng: -105.6230130565,
                lat: 20.353794103
            }, { lng: -105.6237624736, lat: 20.3537582494 }, { lng: -105.6233296189, lat: 20.3515864773 }, {
                lng: -105.6195777444,
                lat: 20.3497698075
            }, { lng: -105.6188386353, lat: 20.3462035252 }, { lng: -105.6222915759, lat: 20.3443732296 }, {
                lng: -105.6207790104,
                lat: 20.3417483863
            }, { lng: -105.6243044814, lat: 20.3404811101 }, { lng: -105.62660095, lat: 20.3371288942 }, {
                lng: -105.625430247,
                lat: 20.3347001596
            }, { lng: -105.6217573018, lat: 20.3354787524 }, { lng: -105.6210416736, lat: 20.3349717099 }, {
                lng: -105.6260624594,
                lat: 20.3327912966
            }, { lng: -105.6255997134, lat: 20.3305794475 }, { lng: -105.6240072416, lat: 20.3296508639 }, {
                lng: -105.6217003727,
                lat: 20.3257225081
            }, { lng: -105.6228364653, lat: 20.3243166362 }, { lng: -105.6253232812, lat: 20.3234322491 }, {
                lng: -105.6297251524,
                lat: 20.3229515859
            }, { lng: -105.6309303516, lat: 20.3216165989 }, { lng: -105.6306830129, lat: 20.3202729144 }, {
                lng: -105.6274933734,
                lat: 20.3196793179
            }, { lng: -105.6256180185, lat: 20.3178728836 }, { lng: -105.6283666193, lat: 20.3156259162 }, {
                lng: -105.6317133279,
                lat: 20.3101984353
            }, { lng: -105.6402412333, lat: 20.3097466769 }, { lng: -105.6417145359, lat: 20.3087363928 }, {
                lng: -105.6414957561,
                lat: 20.3066639934
            }, { lng: -105.6580011545, lat: 20.3189725743 }, { lng: -105.6594771432, lat: 20.321291687 }, {
                lng: -105.6611605842,
                lat: 20.3273981976
            }, { lng: -105.6644068106, lat: 20.3318773914 }, { lng: -105.6694795133, lat: 20.336664404 }, {
                lng: -105.6702103255,
                lat: 20.3388016865
            }, { lng: -105.6726620271, lat: 20.3409022958 }, { lng: -105.6766693763, lat: 20.3464699439 }, {
                lng: -105.6771534914,
                lat: 20.3490849157
            }, { lng: -105.6791437345, lat: 20.3508290604 }, { lng: -105.6783524724, lat: 20.3528803615 }, {
                lng: -105.6798973866,
                lat: 20.3566584367
            }, { lng: -105.68379529, lat: 20.3606385816 }, { lng: -105.6860777153, lat: 20.3660660607 }, {
                lng: -105.6892013335,
                lat: 20.3695044593
            }, { lng: -105.6893529658, lat: 20.3744002359 }, { lng: -105.6915112533, lat: 20.3841131838 }, {
                lng: -105.6940525508,
                lat: 20.3894799901
            }, { lng: -105.6961604117, lat: 20.3912733258 }, { lng: -105.6952422226, lat: 20.394677472 }, {
                lng: -105.6974346444,
                lat: 20.4066874859
            }, { lng: -105.6966619582, lat: 20.4119119037 }, { lng: -105.6948308257, lat: 20.4125299058 }, {
                lng: -105.6920506686,
                lat: 20.4118664436
            }, { lng: -105.6904580404, lat: 20.4134744467 }, { lng: -105.6871387263, lat: 20.4138718303 }, {
                lng: -105.6809871996,
                lat: 20.4131031612
            }, { lng: -105.6799765622, lat: 20.4102466454 }, { lng: -105.6781886379, lat: 20.4096135689 }, {
                lng: -105.6749599137,
                lat: 20.4101559572
            }, { lng: -105.674193742, lat: 20.4106529244 }, { lng: -105.6739991186, lat: 20.4120026965 }, {
                lng: -105.6765155014,
                lat: 20.414666659
            }, { lng: -105.6755658686, lat: 20.4162137279 }, { lng: -105.6725319712, lat: 20.4168489336 }, {
                lng: -105.6746725238,
                lat: 20.4191363186
            }, { lng: -105.6751712053, lat: 20.4208551085 }, { lng: -105.6734329754, lat: 20.4235007871 }, {
                lng: -105.6728208563,
                lat: 20.4279341675
            }, { lng: -105.6709439494, lat: 20.4290089171 }, { lng: -105.6671689938, lat: 20.4296594772 }, {
                lng: -105.6655414782,
                lat: 20.4289135245
            }, { lng: -105.6644475041, lat: 20.4297539931 }, { lng: -105.661636393, lat: 20.4297371825 }, {
                lng: -105.6599546732,
                lat: 20.428404965
            }, { lng: -105.6574956189, lat: 20.4296703648 }, { lng: -105.6568817741, lat: 20.4261622709 }, {
                lng: -105.654123548,
                lat: 20.4238054152
            }, { lng: -105.6547786543, lat: 20.4220318565 }, { lng: -105.6527823212, lat: 20.4236808411 }, {
                lng: -105.6561926692,
                lat: 20.4273854489
            }, { lng: -105.6565888116, lat: 20.4303135054 }, { lng: -105.6530494386, lat: 20.4350910236 }, {
                lng: -105.6522006174,
                lat: 20.4386203693
            }, { lng: -105.6535948426, lat: 20.4432327712 }, { lng: -105.651009789, lat: 20.4444783902 }, {
                lng: -105.6497613724,
                lat: 20.4478289778
            }, { lng: -105.6454817892, lat: 20.4447504686 }, { lng: -105.6431486873, lat: 20.4453412163 }, {
                lng: -105.6410208754,
                lat: 20.4471315573
            }, { lng: -105.6372312403, lat: 20.4476161321 }, { lng: -105.6343292713, lat: 20.4499827475 }, {
                lng: -105.6327415421,
                lat: 20.4532618429
            }, { lng: -105.6294309045, lat: 20.4551117829 }, { lng: -105.6291741332, lat: 20.4577627807 }, {
                lng: -105.6255562396,
                lat: 20.4607359487
            }, { lng: -105.6237829487, lat: 20.4639286185 }, { lng: -105.621101886, lat: 20.4662965874 }, {
                lng: -105.619470184,
                lat: 20.4704771635
            }, { lng: -105.6165187646, lat: 20.4731871581 }, { lng: -105.6113410023, lat: 20.4732773309 }, {
                lng: -105.6102218995,
                lat: 20.4757399207
            }, { lng: -105.6068887475, lat: 20.4753147101 }, { lng: -105.6064062157, lat: 20.4778212897 }, {
                lng: -105.6016618043,
                lat: 20.4760975711
            }, { lng: -105.592290841, lat: 20.4763784528 }, { lng: -105.5866888743, lat: 20.4786485723 }, {
                lng: -105.5760463367,
                lat: 20.4855229115
            }, { lng: -105.5737899187, lat: 20.4843006278 }, { lng: -105.5715743983, lat: 20.4850055001 }, {
                lng: -105.5674521989,
                lat: 20.4846045924
            }, { lng: -105.5639389357, lat: 20.4876056443 }, { lng: -105.5586096218, lat: 20.489657443 }, {
                lng: -105.5562453049,
                lat: 20.4898324681
            }, { lng: -105.5541576003, lat: 20.4880593008 }, { lng: -105.5518304453, lat: 20.4885509734 }, {
                lng: -105.5471473185,
                lat: 20.487688403
            }, { lng: -105.5454129088, lat: 20.488386312 }, { lng: -105.5426858308, lat: 20.4909059564 }, {
                lng: -105.5389969065,
                lat: 20.490505621
            }, { lng: -105.5323398782, lat: 20.4929931514 }, { lng: -105.5232711725, lat: 20.4934647219 }, {
                lng: -105.5210866322,
                lat: 20.4942656905
            }, { lng: -105.5164049071, lat: 20.4934565874 }, { lng: -105.5121441189, lat: 20.4940327726 }, {
                lng: -105.5095555509,
                lat: 20.492982739
            }, { lng: -105.5019719132, lat: 20.4935370418 }, { lng: -105.4958777792, lat: 20.4909675122 }, {
                lng: -105.4903862314,
                lat: 20.4923673208
            }, { lng: -105.4861166054, lat: 20.4959894212 }, { lng: -105.4834810642, lat: 20.4949785793 }, {
                lng: -105.4772909913,
                lat: 20.4973192688
            }, { lng: -105.4734971414, lat: 20.4969560284 }, { lng: -105.4673450555, lat: 20.497771101 }, {
                lng: -105.45760581,
                lat: 20.4957428321
            }, { lng: -105.4535494472, lat: 20.4926153339 }, { lng: -105.4517421333, lat: 20.4919754777 }, {
                lng: -105.4507217819,
                lat: 20.4900884574
            }, { lng: -105.4464515907, lat: 20.4899167337 }, { lng: -105.4456241593, lat: 20.4903254688 }, {
                lng: -105.4448396853,
                lat: 20.4924345078
            }, { lng: -105.4452114213, lat: 20.494188685 }, { lng: -105.4475113798, lat: 20.4964122196 }, {
                lng: -105.4476919763,
                lat: 20.5005071184
            }, { lng: -105.4470678195, lat: 20.5017211092 }, { lng: -105.441460821, lat: 20.5027792239 }, {
                lng: -105.4390301917,
                lat: 20.5014840133
            }, { lng: -105.4332559531, lat: 20.5020215785 }, { lng: -105.4319708196, lat: 20.5007029022 }, {
                lng: -105.4300868749,
                lat: 20.5008448205
            }, { lng: -105.4202789985, lat: 20.5041259749 }, { lng: -105.4191945241, lat: 20.5050438746 }, {
                lng: -105.4141487893,
                lat: 20.5039153809
            }, { lng: -105.4133888351, lat: 20.5043337835 }, { lng: -105.4135864088, lat: 20.5056858777 }, {
                lng: -105.4118450305,
                lat: 20.5053707254
            }, { lng: -105.408617915, lat: 20.508030634 }, { lng: -105.4057188234, lat: 20.508020124 }, {
                lng: -105.4035179518,
                lat: 20.509745267
            }, { lng: -105.4011809373, lat: 20.5102620813 }, { lng: -105.3992493973, lat: 20.5085015052 }, {
                lng: -105.393055774,
                lat: 20.507683545
            }, { lng: -105.3880829269, lat: 20.5083196429 }, { lng: -105.3874682308, lat: 20.5072239761 }, {
                lng: -105.3846838169,
                lat: 20.5060128411
            }, { lng: -105.3815285269, lat: 20.5069307482 }, { lng: -105.3774815286, lat: 20.5056769725 }, {
                lng: -105.3738880874,
                lat: 20.5075706836
            }, { lng: -105.3722948865, lat: 20.5058454426 }, { lng: -105.3689671239, lat: 20.5056326985 }, {
                lng: -105.3687434255,
                lat: 20.50476429
            }, { lng: -105.372107322, lat: 20.5029347232 }, { lng: -105.3713739533, lat: 20.501317617 }, {
                lng: -105.3673441844,
                lat: 20.4976315387
            }, { lng: -105.3697505849, lat: 20.496419606 }, { lng: -105.3700891914, lat: 20.4937559443 }, {
                lng: -105.368044662,
                lat: 20.4928526545
            }, { lng: -105.3671183327, lat: 20.4935557472 }, { lng: -105.3685651898, lat: 20.4940434512 }, {
                lng: -105.3689543566,
                lat: 20.4957633858
            }, { lng: -105.3666195317, lat: 20.4971438615 }, { lng: -105.3677974233, lat: 20.4996063985 }, {
                lng: -105.3698023339,
                lat: 20.5008508207
            }, { lng: -105.3706966156, lat: 20.5023555191 }, { lng: -105.3688087518, lat: 20.5035107238 }, {
                lng: -105.3683841019,
                lat: 20.5046428787
            }, { lng: -105.3678506633, lat: 20.5060496231 }, { lng: -105.3660268547, lat: 20.5070718248 }, {
                lng: -105.3626742224,
                lat: 20.5070228108
            }, { lng: -105.3616271117, lat: 20.5079099894 }, { lng: -105.3555234707, lat: 20.5091709025 }, {
                lng: -105.3475794077,
                lat: 20.5076521483
            }, { lng: -105.3458266424, lat: 20.5084366492 }, { lng: -105.3435528831, lat: 20.5111469719 }, {
                lng: -105.3370983829,
                lat: 20.5126438938
            }, { lng: -105.3355750969, lat: 20.5137590065 }, { lng: -105.3315391582, lat: 20.5153120059 }, {
                lng: -105.3278556726,
                lat: 20.5147363418
            }, { lng: -105.3257900755, lat: 20.5165232047 }, { lng: -105.3256446892, lat: 20.5164855238 }, {
                lng: -105.3180857053,
                lat: 20.5145667332
            }, { lng: -105.3180773319, lat: 20.5158054366 }, { lng: -105.3213348927, lat: 20.5190604124 }, {
                lng: -105.3210706642,
                lat: 20.5220512985
            }, { lng: -105.3163788756, lat: 20.5251673827 }, { lng: -105.3146513114, lat: 20.5254201854 }, {
                lng: -105.3126269719,
                lat: 20.5273330161
            }, { lng: -105.3056078133, lat: 20.530215425 }, { lng: -105.3029438449, lat: 20.5327702412 }, {
                lng: -105.2983192353,
                lat: 20.5339176487
            }, { lng: -105.2984689182, lat: 20.5357246018 }, { lng: -105.2975294324, lat: 20.5359103735 }, {
                lng: -105.2956106,
                lat: 20.5346336419
            }, { lng: -105.2936915346, lat: 20.5349402216 }, { lng: -105.2938520518, lat: 20.538393794 }, {
                lng: -105.292946447,
                lat: 20.5399829423
            }, { lng: -105.290639087, lat: 20.5413662213 }, { lng: -105.2904864651, lat: 20.5454185735 }, {
                lng: -105.2895789685,
                lat: 20.5469328916
            }, { lng: -105.2808959934, lat: 20.5495912162 }, { lng: -105.2789919838, lat: 20.5509339476 }, {
                lng: -105.2756809594,
                lat: 20.551054519
            }, { lng: -105.2730354973, lat: 20.5536175128 }, { lng: -105.2686146851, lat: 20.5552678008 }, {
                lng: -105.2655311782,
                lat: 20.5580532221
            }, { lng: -105.2627113563, lat: 20.5585781829 }, { lng: -105.2607968158, lat: 20.559895962 }, {
                lng: -105.2566198257,
                lat: 20.5669259445
            }, { lng: -105.256007109, lat: 20.5691052783 }, { lng: -105.2543496112, lat: 20.5707056226 }, {
                lng: -105.2512278982,
                lat: 20.5787815679
            }, { lng: -105.2470828752, lat: 20.5847717383 }, { lng: -105.2475321786, lat: 20.5882601857 }, {
                lng: -105.2467165977,
                lat: 20.5944725797
            }, { lng: -105.2451221233, lat: 20.5967134874 }, { lng: -105.2412412747, lat: 20.5992589791 }, {
                lng: -105.2406825036,
                lat: 20.6073692157
            }, { lng: -105.2382795944, lat: 20.6080459889 }, { lng: -105.2396471975, lat: 20.6088179269 }, {
                lng: -105.2361941284,
                lat: 20.6151902928
            }, { lng: -105.2345568591, lat: 20.6213292926 }, { lng: -105.2355368576, lat: 20.6366188415 }, {
                lng: -105.2406785403,
                lat: 20.6436676951
            }, { lng: -105.2430633702, lat: 20.6450397519 }, { lng: -105.245763374, lat: 20.6507357715 }, {
                lng: -105.2484232095,
                lat: 20.6523129218
            }, { lng: -105.248495381, lat: 20.6541262396 }, { lng: -105.2475159547, lat: 20.6550997356 }, {
                lng: -105.2454692913,
                lat: 20.6561955864
            }, { lng: -105.2432305955, lat: 20.6561112758 }, { lng: -105.2434835976, lat: 20.6574239681 }, {
                lng: -105.2460091332,
                lat: 20.6586206174
            }, { lng: -105.2463003778, lat: 20.6615363759 }, { lng: -105.2476494231, lat: 20.6615056028 }, {
                lng: -105.249514264,
                lat: 20.6628885729
            }, { lng: -105.2497488039, lat: 20.6618083114 }, { lng: -105.2469977576, lat: 20.6588401986 }, {
                lng: -105.2478563469,
                lat: 20.6572454038
            }, { lng: -105.2493729638, lat: 20.6565622645 }, { lng: -105.2500668004, lat: 20.6577612715 }, {
                lng: -105.2554498315,
                lat: 20.661531112
            }, { lng: -105.258677798, lat: 20.6622589634 }, { lng: -105.2615030828, lat: 20.6646899211 }, {
                lng: -105.2669019176,
                lat: 20.6674858328
            }, { lng: -105.2731929553, lat: 20.6696840742 }, { lng: -105.2789012791, lat: 20.6700977738 }, {
                lng: -105.2823470904,
                lat: 20.6714488917
            }, { lng: -105.2813967725, lat: 20.6740258943 }, { lng: -105.2783936482, lat: 20.6758458828 }, {
                lng: -105.2749493097,
                lat: 20.6765636012
            }, { lng: -105.2742758037, lat: 20.6774264084 }, { lng: -105.2739994584, lat: 20.6787662339 }, {
                lng: -105.2741432108,
                lat: 20.6807345891
            }, { lng: -105.2758873583, lat: 20.6854955341 }, { lng: -105.2741062576, lat: 20.6868175227 }, {
                lng: -105.2716984069,
                lat: 20.6873406692
            }, { lng: -105.2682247334, lat: 20.6828319788 }, { lng: -105.2665124269, lat: 20.681797599 }, {
                lng: -105.2637299545,
                lat: 20.682378491
            }, { lng: -105.2631254851, lat: 20.6825047564 }, { lng: -105.2626942705, lat: 20.6938864726 }, {
                lng: -105.2559837529,
                lat: 20.7016082523
            }, { lng: -105.2572943392, lat: 20.7088219783 }, { lng: -105.2476621759, lat: 20.7154097497 }, {
                lng: -105.2467091336,
                lat: 20.7231705352
            }, { lng: -105.2383123068, lat: 20.7322816449 }, { lng: -105.2419230658, lat: 20.7437508746 }, {
                lng: -105.2327901098,
                lat: 20.7442766682
            }, { lng: -105.2325309845, lat: 20.7544889818 }, { lng: -105.2175823378, lat: 20.7669650558 }, {
                lng: -105.2119464082,
                lat: 20.7673278958
            }, { lng: -105.2076719631, lat: 20.7714191329 }, { lng: -105.2038338421, lat: 20.7686428258 }, {
                lng: -105.2009429505,
                lat: 20.772904691
            }, { lng: -105.2029012556, lat: 20.7790348523 }, { lng: -105.1999221567, lat: 20.7811977112 }, {
                lng: -105.1759134804,
                lat: 20.769194744
            }, { lng: -105.1648055181, lat: 20.793996261 }, { lng: -105.1713937066, lat: 20.796760015 }, {
                lng: -105.1683572698,
                lat: 20.8043729929
            }, { lng: -105.1756017931, lat: 20.8075269166 }, { lng: -105.173831715, lat: 20.8127407731 }, {
                lng: -105.1786739709,
                lat: 20.8146781484
            }, { lng: -105.184183199, lat: 20.8125268504 }, { lng: -105.1645385248, lat: 20.828577727 }, {
                lng: -105.1684768647,
                lat: 20.8364487993
            }, { lng: -105.165977324, lat: 20.8464353688 }, { lng: -105.160111476, lat: 20.8648903487 }, {
                lng: -105.1495553869,
                lat: 20.8818758264
            }, { lng: -105.1464348388, lat: 20.8813973985 }, { lng: -105.1419142702, lat: 20.8905402518 }, {
                lng: -105.1323577216,
                lat: 20.8894667445
            }, { lng: -105.1260418859, lat: 20.8949292613 }, { lng: -105.1195342352, lat: 20.909734138 }, {
                lng: -105.1026886055,
                lat: 20.915622036
            }, { lng: -105.0930361739, lat: 20.9235577501 }, { lng: -105.0860885494, lat: 20.9226035734 }, {
                lng: -105.0792645038,
                lat: 20.9292338086
            }, { lng: -105.0633746981, lat: 20.9344198668 }, { lng: -105.0601638377, lat: 20.9312550733 }, {
                lng: -105.0536455956,
                lat: 20.9335104556
            }, { lng: -105.0434249007, lat: 20.9317797351 }, { lng: -105.0396901429, lat: 20.9129355913 }, {
                lng: -105.0313475122,
                lat: 20.9091522796
            }, { lng: -105.0107440101, lat: 20.9230268699 }, { lng: -105.0056043777, lat: 20.9199327314 }, {
                lng: -105.0062463565,
                lat: 20.9109604679
            }, { lng: -105.0021745799, lat: 20.9137739014 }, { lng: -104.9997249199, lat: 20.921383769 }, {
                lng: -104.9934492685,
                lat: 20.9228332096
            }, { lng: -104.9856426795, lat: 20.9192343769 }, { lng: -104.9826227242, lat: 20.9141040467 }, {
                lng: -104.9778526848,
                lat: 20.9154919055
            }, { lng: -104.9741930902, lat: 20.9115694816 }, { lng: -104.9702654689, lat: 20.9117269935 }, {
                lng: -104.9685094254,
                lat: 20.9153501794
            }, { lng: -104.9549763681, lat: 20.9313064789 }, { lng: -104.9439457371, lat: 20.936264261 }, {
                lng: -104.9370760493,
                lat: 20.9362094136
            }, { lng: -104.9306602278, lat: 20.9410758708 }, { lng: -104.9246056682, lat: 20.9420985403 }, {
                lng: -104.9218867333,
                lat: 20.9392029011
            }, { lng: -104.9163326867, lat: 20.9455430499 }, { lng: -104.9089703222, lat: 20.9437038628 }, {
                lng: -104.902891427,
                lat: 20.9476711266
            }, { lng: -104.9025951464, lat: 20.9645640065 }, { lng: -104.8942672581, lat: 20.9700571896 }, {
                lng: -104.8929632207,
                lat: 20.9746172261
            }, { lng: -104.8857631547, lat: 20.9745639877 }, { lng: -104.8841064611, lat: 20.9816467835 }, {
                lng: -104.8761306437,
                lat: 20.9837676149
            }, { lng: -104.8691847349, lat: 20.9966915962 }, { lng: -104.8610155234, lat: 20.9951872338 }, {
                lng: -104.8543312648,
                lat: 21.0008769146
            }, { lng: -104.8561528736, lat: 21.0066153131 }, { lng: -104.843617146, lat: 21.0080043856 }, {
                lng: -104.8407467668,
                lat: 21.0214236829
            }, { lng: -104.8345746182, lat: 21.0156199595 }, { lng: -104.83049813, lat: 21.0194522815 }, {
                lng: -104.8122870062,
                lat: 21.0133715133
            }, { lng: -104.8052708072, lat: 21.0181053698 }, { lng: -104.8009391743, lat: 21.0166367717 }, {
                lng: -104.7918300802,
                lat: 21.0169201009
            }, { lng: -104.7854249842, lat: 21.0246301605 }, { lng: -104.7775774924, lat: 21.0180898348 }, {
                lng: -104.7744417632,
                lat: 21.0103208282
            }, { lng: -104.7566414363, lat: 21.0138191273 }, { lng: -104.7419203292, lat: 21.007572345 }, {
                lng: -104.7329351799,
                lat: 21.0135109072
            }, { lng: -104.7277254083, lat: 21.0062860314 }, { lng: -104.7284687745, lat: 20.9893946252 }, {
                lng: -104.7324408301,
                lat: 20.9884438907
            }, { lng: -104.7319690231, lat: 20.9832406633 }, { lng: -104.7219169957, lat: 20.9841015577 }, {
                lng: -104.7186873076,
                lat: 20.9815811698
            }, { lng: -104.7181541481, lat: 20.9756983578 }, { lng: -104.7115783439, lat: 20.9754444462 }, {
                lng: -104.7093423644,
                lat: 20.969432783
            }, { lng: -104.7019106736, lat: 20.9649916336 }, { lng: -104.6969805466, lat: 20.966328176 }, {
                lng: -104.689612126,
                lat: 20.9587067208
            }, { lng: -104.6824944636, lat: 20.9588558219 }, { lng: -104.6840760078, lat: 20.9459822544 }, {
                lng: -104.671580708,
                lat: 20.9423357832
            }, { lng: -104.6644456488, lat: 20.9454973236 }, { lng: -104.6648491146, lat: 20.9399590251 }, {
                lng: -104.6600220797,
                lat: 20.9341912933
            }, { lng: -104.63925609, lat: 20.9343262921 }, { lng: -104.6331916519, lat: 20.9269431877 }, {
                lng: -104.6271643601,
                lat: 20.9244484187
            }, { lng: -104.6245001503, lat: 20.9280399245 }, { lng: -104.6213828672, lat: 20.9246717408 }, {
                lng: -104.6143397142,
                lat: 20.924585035
            }, { lng: -104.6034757201, lat: 20.9327869011 }, { lng: -104.5943255606, lat: 20.9326577449 }, {
                lng: -104.5923471362,
                lat: 20.9357924613
            }, { lng: -104.5821163134, lat: 20.9352292822 }, { lng: -104.5767681335, lat: 20.9313281325 }, {
                lng: -104.5709508898,
                lat: 20.9322330469
            }, { lng: -104.5613134637, lat: 20.926742213 }, { lng: -104.5542118165, lat: 20.9163423389 }, {
                lng: -104.5499342878,
                lat: 20.9169191676
            }, { lng: -104.54487603, lat: 20.9124223118 }, { lng: -104.5478461271, lat: 20.9034117784 }, {
                lng: -104.5370724083,
                lat: 20.8953452583
            }, { lng: -104.5390036402, lat: 20.889128977 }, { lng: -104.5357116926, lat: 20.8834797818 }, {
                lng: -104.524976229,
                lat: 20.8856731026
            }, { lng: -104.5270630613, lat: 20.8815733982 }, { lng: -104.521664041, lat: 20.8705613868 }, {
                lng: -104.5159500857,
                lat: 20.8675309643
            }, { lng: -104.5126536061, lat: 20.8610329802 }, { lng: -104.5088079579, lat: 20.861907886 }, {
                lng: -104.5049818229,
                lat: 20.8428706818
            }, { lng: -104.5017571159, lat: 20.839690377 }, { lng: -104.4955964739, lat: 20.8401034742 }, {
                lng: -104.4877832656,
                lat: 20.834606134
            }, { lng: -104.4822614883, lat: 20.8239944018 }, { lng: -104.4782029535, lat: 20.8242617233 }, {
                lng: -104.4788604245,
                lat: 20.8211454585
            }, { lng: -104.4631413387, lat: 20.8149302242 }, { lng: -104.4650654716, lat: 20.8113967622 }, {
                lng: -104.4601610535,
                lat: 20.8080951236
            }, { lng: -104.4517089585, lat: 20.8049837572 }, { lng: -104.4435244687, lat: 20.8086937158 }, {
                lng: -104.4377101103,
                lat: 20.8068168553
            }, { lng: -104.4283313619, lat: 20.7922991551 }, { lng: -104.4206037394, lat: 20.7972732919 }, {
                lng: -104.4078336004,
                lat: 20.788896448
            }, { lng: -104.3986155152, lat: 20.7816020512 }, { lng: -104.3913836872, lat: 20.7697847077 }, {
                lng: -104.3865307492,
                lat: 20.7681292358
            }, { lng: -104.3875101804, lat: 20.7645638897 }, { lng: -104.3794808677, lat: 20.7517173102 }, {
                lng: -104.3798476669,
                lat: 20.7440034932
            }, { lng: -104.3770351364, lat: 20.7420280888 }, { lng: -104.3647306289, lat: 20.7450124733 }, {
                lng: -104.3605597528,
                lat: 20.7381170322
            }, { lng: -104.3555266419, lat: 20.7371099021 }, { lng: -104.3506087234, lat: 20.7265667528 }, {
                lng: -104.3363283346,
                lat: 20.7217077203
            }, { lng: -104.3337228605, lat: 20.7165549623 }, { lng: -104.326928873, lat: 20.7185429424 }, {
                lng: -104.3118910694,
                lat: 20.7047535476
            }, { lng: -104.3092743995, lat: 20.6971598855 }, { lng: -104.2907692139, lat: 20.6902166142 }, {
                lng: -104.2893676403,
                lat: 20.6877151164
            }, { lng: -104.293771909, lat: 20.6795742681 }, { lng: -104.2872813795, lat: 20.6719950395 }, {
                lng: -104.2904097818,
                lat: 20.6625305253
            }, { lng: -104.2860380298, lat: 20.658798506 }, { lng: -104.287333762, lat: 20.6544422953 }, {
                lng: -104.2831441827,
                lat: 20.6483303727
            }, { lng: -104.2841606946, lat: 20.6301920049 }, { lng: -104.2776502802, lat: 20.6235565448 }, {
                lng: -104.275914463,
                lat: 20.6171428089
            }, { lng: -104.2688331608, lat: 20.6149362223 }, { lng: -104.2608526677, lat: 20.605563727 }, {
                lng: -104.2564789741,
                lat: 20.606210939
            }, { lng: -104.2544265981, lat: 20.6137918674 }, { lng: -104.2565328924, lat: 20.6315868178 }, {
                lng: -104.2509692389,
                lat: 20.6314302422
            }, { lng: -104.2497120492, lat: 20.6340911322 }, { lng: -104.2629262051, lat: 20.6445601236 }, {
                lng: -104.2578365466,
                lat: 20.6550099659
            }, { lng: -104.2405206922, lat: 20.6624355873 }, { lng: -104.2389120717, lat: 20.6654463381 }, {
                lng: -104.2494326224,
                lat: 20.672635178
            }, { lng: -104.2552849525, lat: 20.6837230652 }, { lng: -104.251947921, lat: 20.688909701 }, {
                lng: -104.2468904723,
                lat: 20.6950332951
            }, { lng: -104.2496049348, lat: 20.7070112211 }, { lng: -104.2456394036, lat: 20.7098048059 }, {
                lng: -104.2450905229,
                lat: 20.7162889555
            }, { lng: -104.2490963846, lat: 20.7200140382 }, { lng: -104.2501457349, lat: 20.7280740717 }, {
                lng: -104.262744544,
                lat: 20.7375298409
            }, { lng: -104.2767091451, lat: 20.7708759246 }, { lng: -104.2824412397, lat: 20.7703781246 }, {
                lng: -104.2819991346,
                lat: 20.7837186553
            }, { lng: -104.2921885602, lat: 20.7848874218 }, { lng: -104.293528798, lat: 20.7728037804 }, {
                lng: -104.2965458632,
                lat: 20.772069159
            }, { lng: -104.3177014868, lat: 20.7923405016 }, { lng: -104.3298949856, lat: 20.7983493106 }, {
                lng: -104.3383199387,
                lat: 20.7916473999
            }, { lng: -104.3478105854, lat: 20.7925168749 }, { lng: -104.3488758462, lat: 20.794975543 }, {
                lng: -104.3601677855,
                lat: 20.7917470645
            }, { lng: -104.3773490563, lat: 20.7787948607 }, { lng: -104.3779900019, lat: 20.7867654896 }, {
                lng: -104.353433513,
                lat: 20.8107809235
            }, { lng: -104.3665961404, lat: 20.8157217865 }, { lng: -104.3628727819, lat: 20.821393633 }, {
                lng: -104.3596246403,
                lat: 20.8216476444
            }, { lng: -104.3607753831, lat: 20.8356859254 }, { lng: -104.3642194523, lat: 20.8416901204 }, {
                lng: -104.3518746583,
                lat: 20.8467907226
            }, { lng: -104.3359281888, lat: 20.8473942842 }, { lng: -104.3334913661, lat: 20.8437720521 }, {
                lng: -104.3212103652,
                lat: 20.8396724628
            }, { lng: -104.3109958666, lat: 20.8492225605 }, { lng: -104.3051538379, lat: 20.8479807915 }, {
                lng: -104.3002425512,
                lat: 20.8503976983
            }, { lng: -104.2984794676, lat: 20.8483188113 }, { lng: -104.2925948438, lat: 20.8502690696 }, {
                lng: -104.2931949134,
                lat: 20.8641097698
            }, { lng: -104.2816074626, lat: 20.8662851227 }, { lng: -104.2934019384, lat: 20.8895671972 }, {
                lng: -104.2709422628,
                lat: 20.8890312589
            }, { lng: -104.2609290137, lat: 20.8965970122 }, { lng: -104.2507086953, lat: 20.9086411714 }, {
                lng: -104.2489278864,
                lat: 20.923014103
            }, { lng: -104.2389934322, lat: 20.9279638837 }, { lng: -104.2278123157, lat: 20.9411754109 }, {
                lng: -104.223797561,
                lat: 20.9425855642
            }, { lng: -104.2073955348, lat: 20.9384520664 }, { lng: -104.2028953234, lat: 20.9611874288 }, {
                lng: -104.2101815162,
                lat: 20.9678256351
            }, { lng: -104.2217139971, lat: 20.9634648924 }, { lng: -104.2341901513, lat: 20.9671911514 }, {
                lng: -104.2407628919,
                lat: 20.9937441943
            }, { lng: -104.2337692333, lat: 20.9992068135 }, { lng: -104.2278936923, lat: 20.9962676425 }, {
                lng: -104.2254778164,
                lat: 21.0009943377
            }, { lng: -104.2317410668, lat: 21.0151788159 }, { lng: -104.2374104519, lat: 21.0219800794 }, {
                lng: -104.243158067,
                lat: 21.0235300444
            }, { lng: -104.2448837114, lat: 21.0296941832 }, { lng: -104.2383807611, lat: 21.0333598679 }, {
                lng: -104.2382222925,
                lat: 21.0419337203
            }, { lng: -104.2294717515, lat: 21.0447649816 }, { lng: -104.226994733, lat: 21.0499396636 }, {
                lng: -104.2408390014,
                lat: 21.0540611104
            }, { lng: -104.2396259986, lat: 21.0637598578 }, { lng: -104.2242494156, lat: 21.0718122895 }, {
                lng: -104.2191344682,
                lat: 21.086615421
            }, { lng: -104.2222874151, lat: 21.1002422386 }, { lng: -104.2187733515, lat: 21.1053615402 }, {
                lng: -104.2261622887,
                lat: 21.1142080934
            }, { lng: -104.2220545509, lat: 21.1368566589 }, { lng: -104.2263608306, lat: 21.1570108231 }, {
                lng: -104.230622463,
                lat: 21.1631775407
            }, { lng: -104.2247511665, lat: 21.1739196827 }, { lng: -104.2189213743, lat: 21.1777837677 }, {
                lng: -104.2127993558,
                lat: 21.1880821309
            }, { lng: -104.2036812799, lat: 21.1945204434 }, { lng: -104.1793718894, lat: 21.1891796852 }, {
                lng: -104.169381211,
                lat: 21.1901690972
            }, { lng: -104.161683538, lat: 21.185659782 }, { lng: -104.149239063, lat: 21.1924091468 }, {
                lng: -104.1411790178,
                lat: 21.1900457685
            }, { lng: -104.1312351119, lat: 21.1921846937 }, { lng: -104.125991839, lat: 21.1978750231 }, {
                lng: -104.1120097268,
                lat: 21.1899554826
            }, { lng: -104.1094392614, lat: 21.1976711188 }, { lng: -104.1013870409, lat: 21.2020398711 }, {
                lng: -104.0973063241,
                lat: 21.19725567
            }, { lng: -104.0914546911, lat: 21.1968563513 }, { lng: -104.0873288904, lat: 21.2061038449 }, {
                lng: -104.0827627479,
                lat: 21.2024580386
            }, { lng: -104.0823987429, lat: 21.190714232 }, { lng: -104.0755416727, lat: 21.1916257282 }, {
                lng: -104.073814361,
                lat: 21.1894162999
            }, { lng: -104.0692889366, lat: 21.189016466 }, { lng: -104.0713097966, lat: 21.1965177622 }, {
                lng: -104.0673818964,
                lat: 21.2016892372
            }, { lng: -104.0636979365, lat: 21.2006426426 }, { lng: -104.0615974234, lat: 21.195520171 }, {
                lng: -104.0576487039,
                lat: 21.1961469314
            }, { lng: -104.055594499, lat: 21.2062099598 }, { lng: -104.0476597341, lat: 21.2005432073 }, {
                lng: -104.0394236121,
                lat: 21.2050518176
            }, { lng: -104.0362018093, lat: 21.1973821596 }, { lng: -104.0302736221, lat: 21.1970269105 }, {
                lng: -104.0286507206,
                lat: 21.2017608876
            }, { lng: -104.0347709529, lat: 21.2045845743 }, { lng: -104.030643327, lat: 21.2107470197 }, {
                lng: -104.026608989,
                lat: 21.2141059556
            }, { lng: -104.0241653111, lat: 21.206659498 }, { lng: -104.018176029, lat: 21.2087301048 }, {
                lng: -104.0189832208,
                lat: 21.2285164023
            }, { lng: -104.0087247486, lat: 21.2293355054 }, { lng: -104.0048394464, lat: 21.2382714149 }, {
                lng: -103.9902215651,
                lat: 21.244881885
            }, { lng: -103.98701738, lat: 21.2501940739 }, { lng: -103.9776003261, lat: 21.2530695958 }, {
                lng: -103.9739307935,
                lat: 21.2583874874
            }, { lng: -103.9589759267, lat: 21.2526354642 }, { lng: -103.9494329715, lat: 21.2400544302 }, {
                lng: -103.9376329821,
                lat: 21.2394451784
            }, { lng: -103.9262341952, lat: 21.23503628 }, { lng: -103.9304984417, lat: 21.2517145388 }, {
                lng: -103.9373298753,
                lat: 21.2561941846
            }, { lng: -103.9338204197, lat: 21.2633492702 }, { lng: -103.9233339776, lat: 21.2517132174 }, {
                lng: -103.919666965,
                lat: 21.2313402571
            }, { lng: -103.905482921, lat: 21.2352984107 }, { lng: -103.8992324289, lat: 21.2286003052 }, {
                lng: -103.8946508594,
                lat: 21.2401830011
            }, { lng: -103.8837538011, lat: 21.243229751 }, { lng: -103.8775865146, lat: 21.240396066 }, {
                lng: -103.8764846085,
                lat: 21.24402168
            }, { lng: -103.8646074205, lat: 21.2497700007 }, { lng: -103.8553261918, lat: 21.2478874012 }, {
                lng: -103.8448533287,
                lat: 21.2409359945
            }, { lng: -103.8217143255, lat: 21.2501800681 }, { lng: -103.8196562232, lat: 21.2577055931 }, {
                lng: -103.8274354927,
                lat: 21.2731517779
            }, { lng: -103.8222845468, lat: 21.2782362422 }, { lng: -103.822726266, lat: 21.2822857514 }, {
                lng: -103.8169720561,
                lat: 21.2886432885
            }, { lng: -103.8098874271, lat: 21.290412377 }, { lng: -103.8089322476, lat: 21.2964932086 }, {
                lng: -103.8033070769,
                lat: 21.3031800335
            }, { lng: -103.7823145084, lat: 21.3102013579 }, { lng: -103.7774139765, lat: 21.3220682074 }, {
                lng: -103.7705521587,
                lat: 21.3232679349
            }, { lng: -103.7694357156, lat: 21.3275352018 }, { lng: -103.7598522008, lat: 21.3310301261 }, {
                lng: -103.759743286,
                lat: 21.3368242754
            }, { lng: -103.7518068221, lat: 21.3381465912 }, { lng: -103.7545672571, lat: 21.3440965179 }, {
                lng: -103.7495552268,
                lat: 21.3476000851
            }, { lng: -103.7477964492, lat: 21.3554709991 }, { lng: -103.7494973032, lat: 21.3603892721 }, {
                lng: -103.7435891746,
                lat: 21.375649916
            }, { lng: -103.7526504212, lat: 21.3839567051 }, { lng: -103.7694459676, lat: 21.3899803907 }, {
                lng: -103.769745222,
                lat: 21.3950893011
            }, { lng: -103.758931227, lat: 21.4012259668 }, { lng: -103.7668630783, lat: 21.4119184256 }, {
                lng: -103.7585141104,
                lat: 21.4116642066
            }, { lng: -103.7545682783, lat: 21.4190951254 }, { lng: -103.7341613959, lat: 21.4174171033 }, {
                lng: -103.7296544927,
                lat: 21.4227774105
            }, { lng: -103.7239366289, lat: 21.422891216 }, { lng: -103.7311253828, lat: 21.4332081293 }, {
                lng: -103.7439270484,
                lat: 21.441128837
            }, { lng: -103.7530574479, lat: 21.4656915923 }, { lng: -103.7519311165, lat: 21.4753303143 }, {
                lng: -103.7634314285,
                lat: 21.4827106645
            }, { lng: -103.7721260759, lat: 21.4845900135 }, { lng: -103.7733485297, lat: 21.4898156325 }, {
                lng: -103.7810945807,
                lat: 21.4940063647
            }, { lng: -103.7771168857, lat: 21.4998364065 }, { lng: -103.7918548729, lat: 21.4987268619 }, {
                lng: -103.7948777603,
                lat: 21.4911556754
            }, { lng: -103.8038147674, lat: 21.4871213671 }, { lng: -103.8131684633, lat: 21.4954262808 }, {
                lng: -103.8279606824,
                lat: 21.4955153467
            }, { lng: -103.8344050668, lat: 21.5151747151 }, { lng: -103.8442950958, lat: 21.5141357606 }, {
                lng: -103.8543717371,
                lat: 21.5168200687
            }, { lng: -103.8622639217, lat: 21.5264036834 }, { lng: -103.860292289, lat: 21.532597588 }, {
                lng: -103.8561304295,
                lat: 21.5347353334
            }, { lng: -103.8581832574, lat: 21.553545831 }, { lng: -103.8720948134, lat: 21.5498266253 }, {
                lng: -103.8881938242,
                lat: 21.5562187423
            }, { lng: -103.8941984476, lat: 21.5637225785 }, { lng: -103.8929061664, lat: 21.5719374662 }, {
                lng: -103.8955195563,
                lat: 21.5756090142
            }, { lng: -103.9058748504, lat: 21.5756247562 }, { lng: -103.9063153817, lat: 21.5793433092 }, {
                lng: -103.9196435497,
                lat: 21.5816112376
            }, { lng: -103.9254664004, lat: 21.5918281044 }, { lng: -103.9146582988, lat: 21.6099900259 }, {
                lng: -103.9213542596,
                lat: 21.6180518083
            }, { lng: -103.9127691503, lat: 21.6164425162 }, { lng: -103.9099719515, lat: 21.6204757043 }, {
                lng: -103.9141002202,
                lat: 21.6316286378
            }, { lng: -103.9321575539, lat: 21.6431097963 }, { lng: -103.9305125875, lat: 21.6509983485 }, {
                lng: -103.923599569,
                lat: 21.6701815437
            }, { lng: -103.9175255059, lat: 21.67262164 }, { lng: -103.9140747275, lat: 21.6710303603 }, {
                lng: -103.9052511487,
                lat: 21.6878989301
            }, { lng: -103.8899713293, lat: 21.6996217544 }, { lng: -103.8988162645, lat: 21.7145463753 }, {
                lng: -103.89821121,
                lat: 21.7295867119
            }, { lng: -103.9010083355, lat: 21.7295115524 }, { lng: -103.9050347164, lat: 21.7180648227 }, {
                lng: -103.9211092926,
                lat: 21.7335278533
            }, { lng: -103.9294273831, lat: 21.737686532 }, { lng: -103.9341049083, lat: 21.7447543743 }, {
                lng: -103.9347841339,
                lat: 21.7521603205
            }, { lng: -103.9235965874, lat: 21.7526582415 }, { lng: -103.920301109, lat: 21.7566798244 }, {
                lng: -103.9253424367,
                lat: 21.7729077362
            }, { lng: -103.9474746326, lat: 21.777764732 }, { lng: -103.9528028028, lat: 21.7752057295 }, {
                lng: -103.9546513858,
                lat: 21.7773566145
            }, { lng: -103.9601729622, lat: 21.7733991628 }, { lng: -103.9792875721, lat: 21.7725365391 }, {
                lng: -103.983176528,
                lat: 21.775278314
            }, { lng: -103.9864326428, lat: 21.7739656622 }, { lng: -103.9911266311, lat: 21.7812019299 }, {
                lng: -103.9990119306,
                lat: 21.7807213702
            }, { lng: -104.0036712946, lat: 21.7842470406 }, { lng: -104.0118566656, lat: 21.7830198082 }, {
                lng: -104.0230664279,
                lat: 21.7884024282
            }, { lng: -104.0360728587, lat: 21.7923240323 }, { lng: -104.0404305505, lat: 21.7905826967 }, {
                lng: -104.0534778774,
                lat: 21.7958685843
            }, { lng: -104.0578599534, lat: 21.7938200415 }, { lng: -104.0672686468, lat: 21.7956670285 }, {
                lng: -104.0678602639,
                lat: 21.7911290984
            }, { lng: -104.0781072569, lat: 21.7912325604 }, { lng: -104.0817342991, lat: 21.7837397255 }, {
                lng: -104.0862563355,
                lat: 21.7870355639
            }, { lng: -104.0952238803, lat: 21.7861360822 }, { lng: -104.0952417673, lat: 21.792309042 }, {
                lng: -104.0993019205,
                lat: 21.793990294
            }, { lng: -104.108185511, lat: 21.7926690629 }, { lng: -104.1117822852, lat: 21.7889433822 }, {
                lng: -104.1331502586,
                lat: 21.7921866183
            }, { lng: -104.1501026381, lat: 21.8086654612 }, { lng: -104.156114541, lat: 21.808904198 }, {
                lng: -104.1586664869,
                lat: 21.8122503544
            }, { lng: -104.1637525284, lat: 21.8111217813 }, { lng: -104.1792954716, lat: 21.8338791503 }, {
                lng: -104.1894921337,
                lat: 21.8390667485
            }, { lng: -104.193512108, lat: 21.8530906592 }, { lng: -104.1996250872, lat: 21.8522414243 }, {
                lng: -104.1825793207,
                lat: 21.8608074184
            }, { lng: -104.1744824734, lat: 21.8731818036 }, { lng: -104.177808775, lat: 21.8737751449 }, {
                lng: -104.1810564361,
                lat: 21.8694943305
            }, { lng: -104.1886393945, lat: 21.8698776874 }, { lng: -104.1924127038, lat: 21.8776410236 }, {
                lng: -104.1982402316,
                lat: 21.8812988779
            }, { lng: -104.2029187613, lat: 21.8979916321 }, { lng: -104.2019913191, lat: 21.9109237722 }, {
                lng: -104.1921889638,
                lat: 21.9178104201
            }, { lng: -104.1903050624, lat: 21.9288381871 }, { lng: -104.1805663612, lat: 21.9403874222 }, {
                lng: -104.1755126652,
                lat: 21.964360582
            }, { lng: -104.1755517922, lat: 21.9722268413 }, { lng: -104.1951944234, lat: 21.9866034148 }, {
                lng: -104.2142136815,
                lat: 21.9840838133
            }, { lng: -104.2350771356, lat: 21.9706973606 }, { lng: -104.2479014506, lat: 21.9680834306 }, {
                lng: -104.2595297891,
                lat: 21.9731325785
            }, { lng: -104.2632591749, lat: 21.977858267 }, { lng: -104.276922509, lat: 21.9816961753 }, {
                lng: -104.2829401461,
                lat: 22.0007984571
            }, { lng: -104.2915367118, lat: 21.9996412486 }, { lng: -104.2960294927, lat: 22.00449112 }, {
                lng: -104.3040476381,
                lat: 21.9996693045
            }, { lng: -104.3097908558, lat: 21.9899442403 }, { lng: -104.3170889444, lat: 21.9920257186 }, {
                lng: -104.3212047206,
                lat: 21.9856678828
            }, { lng: -104.3274412934, lat: 21.984904857 }, { lng: -104.3283143655, lat: 21.9768250506 }, {
                lng: -104.3382105059,
                lat: 21.9811203683
            }, { lng: -104.3469697478, lat: 21.975418102 }, { lng: -104.3686995589, lat: 21.9744999156 }, {
                lng: -104.3730234914,
                lat: 21.9812612702
            }, { lng: -104.3694210997, lat: 21.9884365977 }, { lng: -104.368905985, lat: 22.0017998107 }, {
                lng: -104.3626485388,
                lat: 22.014197441
            }, { lng: -104.3651697651, lat: 22.0208299299 }, { lng: -104.3705092992, lat: 22.0237990434 }, {
                lng: -104.3717136619,
                lat: 22.0297184201
            }, { lng: -104.3685904982, lat: 22.0326487665 }, { lng: -104.3676060059, lat: 22.041477422 }, {
                lng: -104.3701806514,
                lat: 22.046672288
            }, { lng: -104.3638235322, lat: 22.0546046232 }, { lng: -104.3653148722, lat: 22.0741182018 }, {
                lng: -104.3703584478,
                lat: 22.0850726151
            }, { lng: -104.3691168446, lat: 22.0942548782 }, { lng: -104.3754634598, lat: 22.1038954989 }, {
                lng: -104.3683900468,
                lat: 22.1127901246
            }, { lng: -104.3633185012, lat: 22.1292080376 }, { lng: -104.3644125586, lat: 22.1376942584 }, {
                lng: -104.3575671667,
                lat: 22.1508545638
            }, { lng: -104.3571276623, lat: 22.1658582424 }, { lng: -104.3516573569, lat: 22.1713457245 }, {
                lng: -104.3527287527,
                lat: 22.1802319475
            }, { lng: -104.34448863, lat: 22.1829010639 }, { lng: -104.3377021355, lat: 22.1895814424 }, {
                lng: -104.3388808459,
                lat: 22.1945824038
            }, { lng: -104.3340814477, lat: 22.2023245148 }, { lng: -104.3435879483, lat: 22.2090432726 }, {
                lng: -104.3440735865,
                lat: 22.2122977785
            }, { lng: -104.3317552981, lat: 22.2217329347 }, { lng: -104.3332416712, lat: 22.2287291361 }, {
                lng: -104.3285716828,
                lat: 22.2333253595
            }, { lng: -104.3300118282, lat: 22.246675758 }, { lng: -104.2977815363, lat: 22.2790318776 }, {
                lng: -104.2926962828,
                lat: 22.2880640325
            }, { lng: -104.2932615982, lat: 22.2937622604 }, { lng: -104.2868232319, lat: 22.2984355175 }, {
                lng: -104.2949214502,
                lat: 22.3104398402
            }, { lng: -104.2966343322, lat: 22.3227629512 }, { lng: -104.3002419925, lat: 22.327717095 }, {
                lng: -104.2946570673,
                lat: 22.3304349977
            }, { lng: -104.3002335034, lat: 22.3489343195 }, { lng: -104.2942366668, lat: 22.3458608704 }, {
                lng: -104.2691775227,
                lat: 22.3450935426
            }, { lng: -104.2678770652, lat: 22.348435692 }, { lng: -104.2654784712, lat: 22.3468499173 }, {
                lng: -104.2567358081,
                lat: 22.3505271905
            }, { lng: -104.2571405143, lat: 22.3752545398 }, { lng: -104.2614284168, lat: 22.3800227027 }, {
                lng: -104.2599659796,
                lat: 22.386542806
            }, { lng: -104.2550720677, lat: 22.3881551136 }, { lng: -104.2561499129, lat: 22.3942093235 }, {
                lng: -104.2472454834,
                lat: 22.399509132
            }, { lng: -104.2479883766, lat: 22.4130046031 }, { lng: -104.231873613, lat: 22.4158606357 }, {
                lng: -104.2281016969,
                lat: 22.4204409693
            }, { lng: -104.2103126843, lat: 22.4237136855 }, { lng: -104.2037986753, lat: 22.4177589375 }, {
                lng: -104.2007418755,
                lat: 22.4076010833
            }, { lng: -104.1951651919, lat: 22.4009676543 }, { lng: -104.1799339238, lat: 22.3908195645 }, {
                lng: -104.1684919119,
                lat: 22.3884780037
            }, { lng: -104.1683226545, lat: 22.4010058187 }, { lng: -104.1810136102, lat: 22.4291390997 }, {
                lng: -104.1723747049,
                lat: 22.442135041
            }, { lng: -104.1817762561, lat: 22.4496759587 }, { lng: -104.1967238405, lat: 22.4486122151 }, {
                lng: -104.2003463626,
                lat: 22.4586782358
            }, { lng: -104.1970000743, lat: 22.4649338335 }, { lng: -104.186920104, lat: 22.4644560727 }, {
                lng: -104.1810528699,
                lat: 22.4743536765
            }, { lng: -104.1814962432, lat: 22.4800064694 }, { lng: -104.1912240612, lat: 22.479188868 }, {
                lng: -104.2059809777,
                lat: 22.484176416
            }, { lng: -104.2126781001, lat: 22.4820520279 }, { lng: -104.2174381246, lat: 22.4857138614 }, {
                lng: -104.203872336,
                lat: 22.4878677348
            }, { lng: -104.1978756634, lat: 22.5035857704 }, { lng: -104.192478221, lat: 22.5087851833 }, {
                lng: -104.1729785092,
                lat: 22.5085682028
            }, { lng: -104.1659548815, lat: 22.5160252823 }, { lng: -104.1601327825, lat: 22.5119294174 }, {
                lng: -104.1577011588,
                lat: 22.5163055692
            }, { lng: -104.1389552258, lat: 22.5211449564 }, { lng: -104.1291019471, lat: 22.5167150897 }, {
                lng: -104.1180066715,
                lat: 22.5190160338
            }, { lng: -104.108297717, lat: 22.5249860972 }, { lng: -104.1062392375, lat: 22.5320916713 }, {
                lng: -104.0973461596,
                lat: 22.5340616941
            }, { lng: -104.0817704906, lat: 22.5343546439 }, { lng: -104.0711712047, lat: 22.5233073786 }, {
                lng: -104.0762364457,
                lat: 22.5158762288
            }, { lng: -104.0717135983, lat: 22.5109312365 }, { lng: -104.0739505865, lat: 22.5045320023 }, {
                lng: -104.0563892595,
                lat: 22.4904120993
            }, { lng: -104.0534051647, lat: 22.46774765 }, { lng: -104.0641655737, lat: 22.4521040273 }, {
                lng: -104.0597643307,
                lat: 22.4491910012
            }, { lng: -104.0613557755, lat: 22.4440399137 }, { lng: -104.0654450983, lat: 22.442548844 }, {
                lng: -104.0632546088,
                lat: 22.4277280987
            }, { lng: -104.0686489215, lat: 22.4279356915 }, { lng: -104.0737605139, lat: 22.4224698049 }, {
                lng: -104.0787913144,
                lat: 22.4080046251
            }, { lng: -104.0777798327, lat: 22.400677247 }, { lng: -104.0831152179, lat: 22.391464993 }, {
                lng: -104.0773207263,
                lat: 22.3835796437
            }, { lng: -104.0810962011, lat: 22.3777046211 }, { lng: -104.0867738908, lat: 22.3755357194 }, {
                lng: -104.089582896,
                lat: 22.3759928539
            }, { lng: -104.0904800666, lat: 22.3803299343 }, { lng: -104.096970711, lat: 22.3770783382 }, {
                lng: -104.099474562,
                lat: 22.3592122283
            }, { lng: -104.0958153249, lat: 22.3561631654 }, { lng: -104.085705241, lat: 22.3588572254 }, {
                lng: -104.0776729959,
                lat: 22.3652818298
            }, { lng: -104.0693541799, lat: 22.3626370634 }, { lng: -104.0508342557, lat: 22.3772620811 }, {
                lng: -104.031942016,
                lat: 22.3720100332
            }, { lng: -104.0240380133, lat: 22.3657528513 }, { lng: -104.0171325993, lat: 22.3661580564 }, {
                lng: -104.0138692484,
                lat: 22.3718432626
            }, { lng: -104.0146937614, lat: 22.3799723944 }, { lng: -104.0057990942, lat: 22.3917318388 }, {
                lng: -104.0072796146,
                lat: 22.4104847586
            }, { lng: -103.9967959986, lat: 22.410769444 }, { lng: -103.9878872787, lat: 22.4158681842 }, {
                lng: -103.9861553808,
                lat: 22.4242435103
            }, { lng: -103.9782465556, lat: 22.4283528739 }, { lng: -103.9774340024, lat: 22.4375290458 }, {
                lng: -103.9641418594,
                lat: 22.4342471037
            }, { lng: -103.9617127703, lat: 22.4364545671 }, { lng: -103.9609102039, lat: 22.4524311416 }, {
                lng: -103.9549786459,
                lat: 22.4549663177
            }, { lng: -103.9529390849, lat: 22.4638581515 }, { lng: -103.9401057632, lat: 22.4640798955 }, {
                lng: -103.9404480474,
                lat: 22.470880793
            }, { lng: -103.9351539481, lat: 22.4723086264 }, { lng: -103.9397148148, lat: 22.4762673298 }, {
                lng: -103.9312316622,
                lat: 22.4760686167
            }, { lng: -103.9408072619, lat: 22.4910466948 }, { lng: -103.9350604016, lat: 22.490262462 }, {
                lng: -103.9397608336,
                lat: 22.4957266667
            }, { lng: -103.9361019597, lat: 22.5015332323 }, { lng: -103.9423120927, lat: 22.5005297755 }, {
                lng: -103.9468047507,
                lat: 22.5057716527
            }, { lng: -103.952327932, lat: 22.5052326362 }, { lng: -103.9514410278, lat: 22.5107846169 }, {
                lng: -103.95769776,
                lat: 22.5062457039
            }, { lng: -103.96541483, lat: 22.51005957050001 }, { lng: -103.9649163077, lat: 22.5167416964 }, {
                lng: -103.9678993826,
                lat: 22.5189058562
            }, { lng: -103.9764091765, lat: 22.5174020947 }, { lng: -103.9776294168, lat: 22.5146490768 }, {
                lng: -103.9794439191,
                lat: 22.5184145283
            }, { lng: -103.9831162573, lat: 22.5169309478 }, { lng: -103.982464205, lat: 22.5210954829 }, {
                lng: -103.9932778946,
                lat: 22.52469603360001
            }, { lng: -103.9891678356, lat: 22.5309545672 }, { lng: -103.9924892894, lat: 22.5295206457 }, {
                lng: -104.0023211594,
                lat: 22.5327608713
            }, { lng: -104.007663626, lat: 22.5377336266 }, { lng: -104.0008012002, lat: 22.5462252294 }, {
                lng: -103.9815744021,
                lat: 22.5422965925
            }, { lng: -103.9776170715, lat: 22.5443898222 }, { lng: -103.9850723658, lat: 22.5468373197 }, {
                lng: -103.992107081,
                lat: 22.5551894085
            }, { lng: -103.9959364164, lat: 22.5662018088 }, { lng: -104.0034875212, lat: 22.5684134184 }, {
                lng: -103.9939593391,
                lat: 22.5746236392
            }, { lng: -103.9918300859, lat: 22.5846704047 }, { lng: -103.985291995, lat: 22.58688078180001 }, {
                lng: -103.9903120818,
                lat: 22.5937536941
            }, { lng: -103.998136617, lat: 22.5925526334 }, { lng: -104.0087140506, lat: 22.5969429221 }, {
                lng: -104.0184480179,
                lat: 22.5972143844
            }, { lng: -104.0257623446, lat: 22.6049871374 }, { lng: -104.0291681473, lat: 22.6148761662 }, {
                lng: -104.0242088356,
                lat: 22.6245652867
            }, { lng: -104.0326203423, lat: 22.6290933506 }, { lng: -104.0357525287, lat: 22.6350519893 }, {
                lng: -104.0299395851,
                lat: 22.6426459239
            }, { lng: -104.0277163757, lat: 22.6534912482 }, { lng: -104.0178490348, lat: 22.6595961005 }, {
                lng: -104.0174029177,
                lat: 22.6644187429
            }, { lng: -104.0247684186, lat: 22.6753485024 }, { lng: -104.0456660166, lat: 22.6732801724 }, {
                lng: -104.0516904842,
                lat: 22.6807918146
            }, { lng: -104.0488978734, lat: 22.6824606492 }, { lng: -104.0494803001, lat: 22.6872857771 }, {
                lng: -104.0720966301,
                lat: 22.6918718803
            }, { lng: -104.0757176336, lat: 22.6956895057 }, { lng: -104.075228231, lat: 22.7020179294 }, {
                lng: -104.0709384352,
                lat: 22.702438154
            }, { lng: -104.0615690947, lat: 22.6932735272 }, { lng: -104.0598628002, lat: 22.697509162 }, {
                lng: -104.066115263,
                lat: 22.7082678911
            }, { lng: -104.0525984288, lat: 22.7094792215 }, { lng: -104.0500598543, lat: 22.71244088870001 }, {
                lng: -104.0566119601,
                lat: 22.7204017183
            }, { lng: -104.0567618671, lat: 22.7263561827 }, { lng: -104.03925138, lat: 22.7315596314 }, {
                lng: -104.0283712654,
                lat: 22.7448424137
            }, { lng: -104.015043466, lat: 22.7491306111 }, { lng: -104.0102053978, lat: 22.7457358508 }, {
                lng: -103.9907051895,
                lat: 22.7484261301
            }, { lng: -103.9908256524, lat: 22.7433443917 }, { lng: -103.9775917778, lat: 22.7480957886 }, {
                lng: -103.9734749155,
                lat: 22.7430813483
            }, { lng: -103.9698204089, lat: 22.74821226770001 }, { lng: -103.9486988816, lat: 22.74719272800001 }, {
                lng: -103.9419191534,
                lat: 22.7515674984
            }, { lng: -103.9329211982, lat: 22.7467398012 }, { lng: -103.9118836033, lat: 22.7515752697 }, {
                lng: -103.9058828496,
                lat: 22.7440216382
            }, { lng: -103.9048001285, lat: 22.7325625112 }, { lng: -103.9002026464, lat: 22.7300172164 }, {
                lng: -103.8925143084,
                lat: 22.7366481424
            }, { lng: -103.8767131688, lat: 22.7386118641 }, { lng: -103.8693085046, lat: 22.7340905038 }, {
                lng: -103.8670767177,
                lat: 22.7369092654
            }, { lng: -103.8596498849, lat: 22.7349981536 }, { lng: -103.8565332903, lat: 22.7311831798 }, {
                lng: -103.8416134843,
                lat: 22.7338751236
            }, { lng: -103.8380919173, lat: 22.72975358640001 }, { lng: -103.8352487289, lat: 22.7344336282 }, {
                lng: -103.8314237404,
                lat: 22.73245379400001
            }, { lng: -103.8284222077, lat: 22.7363093097 }, { lng: -103.8233971625, lat: 22.7353375723 }, {
                lng: -103.8211030171,
                lat: 22.73001866830001
            }, { lng: -103.8075258888, lat: 22.7328732572 }, { lng: -103.7833095412, lat: 22.7314290836 }, {
                lng: -103.7754109844,
                lat: 22.7351828383
            }, { lng: -103.7701122505, lat: 22.7215780923 }, { lng: -103.7567729051, lat: 22.7209230663 }, {
                lng: -103.7574653798,
                lat: 22.7169951096
            }, { lng: -103.752880037, lat: 22.7128700487 }, { lng: -103.7551899308, lat: 22.7001461391 }, {
                lng: -103.7533129381,
                lat: 22.6965444601
            }, { lng: -103.7611391621, lat: 22.6866525022 }, { lng: -103.7653748047, lat: 22.674635334 }, {
                lng: -103.7652391677,
                lat: 22.6643087508
            }, { lng: -103.7606590139, lat: 22.6597140214 }, { lng: -103.7633857561, lat: 22.6520472188 }, {
                lng: -103.7715251152,
                lat: 22.6476126043
            }, { lng: -103.767341232, lat: 22.6314665438 }, { lng: -103.7628444085, lat: 22.6271796661 }, {
                lng: -103.7773158497,
                lat: 22.6120725317
            }, { lng: -103.8205128328, lat: 22.5976321582 }, { lng: -103.8271086931, lat: 22.5900869559 }, {
                lng: -103.8566601433,
                lat: 22.5774801257
            }, { lng: -103.8597614298, lat: 22.5684270421 }, { lng: -103.8624724863, lat: 22.5693457527 }, {
                lng: -103.8538235948,
                lat: 22.5554095012
            }, { lng: -103.8565391728, lat: 22.5510121301 }, { lng: -103.8687259688, lat: 22.5465740231 }, {
                lng: -103.8697633066,
                lat: 22.5438467647
            }, { lng: -103.8666010625, lat: 22.5413741696 }, { lng: -103.8713196425, lat: 22.54119044280001 }, {
                lng: -103.8780682544,
                lat: 22.5225845133
            }, { lng: -103.8666511699, lat: 22.5154013279 }, { lng: -103.8642046112, lat: 22.501756766 }, {
                lng: -103.8660255942,
                lat: 22.4935497157
            }, { lng: -103.8631211974, lat: 22.4877327095 }, { lng: -103.867319464, lat: 22.4889149729 }, {
                lng: -103.8734023641,
                lat: 22.4738674348
            }, { lng: -103.87813487, lat: 22.473451778 }, { lng: -103.8832173921, lat: 22.4771061992 }, {
                lng: -103.8834024871,
                lat: 22.4589176063
            }, { lng: -103.8778704973, lat: 22.4426026891 }, { lng: -103.8944761485, lat: 22.4426738642 }, {
                lng: -103.8954126657,
                lat: 22.4405106143
            }, { lng: -103.87258487, lat: 22.4249454417 }, { lng: -103.882164831, lat: 22.4193118252 }, {
                lng: -103.875781614,
                lat: 22.4202695984
            }, { lng: -103.8759402151, lat: 22.4176346359 }, { lng: -103.8674106642, lat: 22.4159258565 }, {
                lng: -103.8715165332,
                lat: 22.4021892392
            }, { lng: -103.887710449, lat: 22.4011083946 }, { lng: -103.8858532625, lat: 22.3919061793 }, {
                lng: -103.8935788946,
                lat: 22.3893064265
            }, { lng: -103.9006027564, lat: 22.380586229 }, { lng: -103.8976418028, lat: 22.3651464718 }, {
                lng: -103.9087999855,
                lat: 22.3637978639
            }, { lng: -103.9138788034, lat: 22.3536845406 }, { lng: -103.9227851971, lat: 22.349202967 }, {
                lng: -103.9213336171,
                lat: 22.3384481837
            }, { lng: -103.9270368677, lat: 22.3318677002 }, { lng: -103.9256823248, lat: 22.3251816186 }, {
                lng: -103.9223195442,
                lat: 22.3234141528
            }, { lng: -103.924449051, lat: 22.3201442103 }, { lng: -103.9221061332, lat: 22.3146120723 }, {
                lng: -103.9178391678,
                lat: 22.3123699442
            }, { lng: -103.9208541035, lat: 22.3055050621 }, { lng: -103.91611216, lat: 22.3014029573 }, {
                lng: -103.9173427642,
                lat: 22.2891443201
            }, { lng: -103.91191374, lat: 22.2833255126 }, { lng: -103.9163266883, lat: 22.2766955048 }, {
                lng: -103.9136501005,
                lat: 22.2716327248
            }, { lng: -103.9193802862, lat: 22.2623216543 }, { lng: -103.9094325022, lat: 22.2555552749 }, {
                lng: -103.903473037,
                lat: 22.2376083719
            }, { lng: -103.8945479644, lat: 22.2298707235 }, { lng: -103.8882548417, lat: 22.2282585796 }, {
                lng: -103.883380592,
                lat: 22.2088338579
            }, { lng: -103.8882120185, lat: 22.1980459691 }, { lng: -103.8796254449, lat: 22.1933585746 }, {
                lng: -103.8773082178,
                lat: 22.1802763895
            }, { lng: -103.8650150487, lat: 22.1682607838 }, { lng: -103.8598029671, lat: 22.1896749324 }, {
                lng: -103.8452298688,
                lat: 22.2247169631
            }, { lng: -103.8443417273, lat: 22.2517516251 }, { lng: -103.8472800697, lat: 22.2626117735 }, {
                lng: -103.8377474668,
                lat: 22.2738672129
            }, { lng: -103.8319465088, lat: 22.28990377 }, { lng: -103.8488722208, lat: 22.3345960255 }, {
                lng: -103.848154314,
                lat: 22.3427351073
            }, { lng: -103.8383160175, lat: 22.3527436358 }, { lng: -103.8285941546, lat: 22.357055145 }, {
                lng: -103.8222590048,
                lat: 22.372196681
            }, { lng: -103.8154875183, lat: 22.3782523385 }, { lng: -103.8120798065, lat: 22.3985300231 }, {
                lng: -103.8150148351,
                lat: 22.4091005762
            }, { lng: -103.8098628799, lat: 22.43772676 }, { lng: -103.7890502161, lat: 22.4796829776 }, {
                lng: -103.7859283272,
                lat: 22.4932767831
            }, { lng: -103.7868406845, lat: 22.50974111 }, { lng: -103.7788591293, lat: 22.5276601434 }, {
                lng: -103.77627405,
                lat: 22.547278782
            }, { lng: -103.7717031161, lat: 22.5564694144 }, { lng: -103.7623300839, lat: 22.55735202 }, {
                lng: -103.7602779839,
                lat: 22.5536775668
            }, { lng: -103.7546699097, lat: 22.5599035777 }, { lng: -103.7465163839, lat: 22.5598680732 }, {
                lng: -103.7403088614,
                lat: 22.5734796919
            }, { lng: -103.7290359439, lat: 22.5757434195 }, { lng: -103.7132379711, lat: 22.5666613153 }, {
                lng: -103.6837527031,
                lat: 22.5565140374
            }, { lng: -103.6754557151, lat: 22.5622055296 }, { lng: -103.6631558446, lat: 22.5486250009 }, {
                lng: -103.652741669,
                lat: 22.5578606973
            }, { lng: -103.6479369571, lat: 22.5558664341 }, { lng: -103.624778825, lat: 22.564766911 }, {
                lng: -103.6070026788,
                lat: 22.5595898263
            }, { lng: -103.6043653436, lat: 22.5540286021 }, { lng: -103.6095092373, lat: 22.5484824874 }, {
                lng: -103.6042821677,
                lat: 22.5331172495
            }, { lng: -103.60036844, lat: 22.5270107363 }, { lng: -103.5877761367, lat: 22.5258230723 }, {
                lng: -103.5860548855,
                lat: 22.5232370873
            }, { lng: -103.5916619975, lat: 22.5097945989 }, { lng: -103.5963137505, lat: 22.5065192735 }, {
                lng: -103.5826501525,
                lat: 22.4996539652
            }, { lng: -103.5824997909, lat: 22.4793858251 }, { lng: -103.5730410666, lat: 22.4708971426 }, {
                lng: -103.5759174195,
                lat: 22.4629100317
            }, { lng: -103.5708744255, lat: 22.4476373864 }, { lng: -103.5745439087, lat: 22.4390181184 }, {
                lng: -103.5698391325,
                lat: 22.4392653729
            }, { lng: -103.5658895595, lat: 22.4322255799 }, { lng: -103.5600191434, lat: 22.4304709315 }, {
                lng: -103.5627002038,
                lat: 22.4241770804
            }, { lng: -103.5724171756, lat: 22.4199912961 }, { lng: -103.580333264, lat: 22.4121801428 }, {
                lng: -103.5961758893,
                lat: 22.4083822465
            }, { lng: -103.5949632961, lat: 22.3876190959 }, { lng: -103.6046428489, lat: 22.3609265716 }, {
                lng: -103.6120192822,
                lat: 22.361483599
            }, { lng: -103.6111804025, lat: 22.3533709489 }, { lng: -103.6045020489, lat: 22.3441860132 }, {
                lng: -103.6087095496,
                lat: 22.3401749674
            }, { lng: -103.6145989655, lat: 22.3397167425 }, { lng: -103.6371608998, lat: 22.3451236614 }, {
                lng: -103.6440414155,
                lat: 22.3418915441
            }, { lng: -103.6397270326, lat: 22.3370388572 }, { lng: -103.646774487, lat: 22.3163615106 }, {
                lng: -103.6397216969,
                lat: 22.2965005216
            }, { lng: -103.6302700369, lat: 22.2950950254 }, { lng: -103.6212577432, lat: 22.2831549079 }, {
                lng: -103.6030007273,
                lat: 22.2795196209
            }, { lng: -103.5960333161, lat: 22.2744003417 }, { lng: -103.6065746881, lat: 22.2716270886 }, {
                lng: -103.6092212585,
                lat: 22.263707767
            }, { lng: -103.6321661162, lat: 22.2413861392 }, { lng: -103.6425442344, lat: 22.2110710517 }, {
                lng: -103.6514334166,
                lat: 22.2036410608
            }, { lng: -103.6519466091, lat: 22.1937985787 }, { lng: -103.6595160325, lat: 22.1854107162 }, {
                lng: -103.6609850509,
                lat: 22.1764568372
            }, { lng: -103.6553627789, lat: 22.1734663276 }, { lng: -103.6720795971, lat: 22.1584796749 }, {
                lng: -103.6846151605,
                lat: 22.1375128247
            }, { lng: -103.690617038, lat: 22.1343108828 }, { lng: -103.6927883349, lat: 22.1295049646 }, {
                lng: -103.6827177356,
                lat: 22.1252406724
            }, { lng: -103.6797723842, lat: 22.1211190037 }, { lng: -103.6799634597, lat: 22.1168998404 }, {
                lng: -103.6876333652,
                lat: 22.1154730294
            }, { lng: -103.6861719024, lat: 22.1107997136 }, { lng: -103.671864354, lat: 22.1096493177 }, {
                lng: -103.6651668306,
                lat: 22.1045872376
            }, { lng: -103.6563785513, lat: 22.105355313 }, { lng: -103.6517048606, lat: 22.1016079093 }, {
                lng: -103.6365794935,
                lat: 22.1076260836
            }, { lng: -103.6298042068, lat: 22.107300136 }, { lng: -103.6220117503, lat: 22.0993493242 }, {
                lng: -103.6126861628,
                lat: 22.0983524598
            }, { lng: -103.6065973073, lat: 22.0991759084 }, { lng: -103.6064169334, lat: 22.1028478363 }, {
                lng: -103.5954645246,
                lat: 22.1125909684
            }, { lng: -103.5825511459, lat: 22.1064723957 }, { lng: -103.5794356858, lat: 22.1208189558 }, {
                lng: -103.5824647041,
                lat: 22.1273543178
            }, { lng: -103.5683296095, lat: 22.1369168625 }, { lng: -103.5562762815, lat: 22.1353358148 }, {
                lng: -103.5529666826,
                lat: 22.1373480994
            }, { lng: -103.545664011, lat: 22.1225658762 }, { lng: -103.5372356839, lat: 22.1217280252 }, {
                lng: -103.5328689199,
                lat: 22.1276019715
            }, { lng: -103.5161752913, lat: 22.1300604401 }, { lng: -103.5197488291, lat: 22.1203022448 }, {
                lng: -103.5177703908,
                lat: 22.1115969884
            }, { lng: -103.503380022, lat: 22.1063714573 }, { lng: -103.498120229, lat: 22.1117559787 }, {
                lng: -103.4888786426,
                lat: 22.1077617201
            }, { lng: -103.4888414557, lat: 22.111457081 }, { lng: -103.4825954427, lat: 22.1158314468 }, {
                lng: -103.4762161248,
                lat: 22.1125081406
            }, { lng: -103.475183424, lat: 22.1062741266 }, { lng: -103.4629048739, lat: 22.1069236222 }, {
                lng: -103.4646924155,
                lat: 22.1118387364
            }, { lng: -103.4584468759, lat: 22.1163301407 }, { lng: -103.449329112, lat: 22.1156188279 }, {
                lng: -103.4413243212,
                lat: 22.1187573412
            }, { lng: -103.4384206983, lat: 22.1278992028 }, { lng: -103.4366676913, lat: 22.1334829054 }, {
                lng: -103.4282303348,
                lat: 22.1400746348
            }, { lng: -103.4314801771, lat: 22.1625712281 }, { lng: -103.4275192046, lat: 22.1787995795 }, {
                lng: -103.4139186253,
                lat: 22.1795208361
            }, { lng: -103.4034057968, lat: 22.1968975245 }, { lng: -103.3972812352, lat: 22.1929353493 }, {
                lng: -103.3952118139,
                lat: 22.1945654182
            }, { lng: -103.392399294, lat: 22.2082723464 }, { lng: -103.3836547684, lat: 22.2198055909 }, {
                lng: -103.387057464,
                lat: 22.223563402
            }, { lng: -103.3846390497, lat: 22.2283014041 }, { lng: -103.3735029135, lat: 22.2321406544 }, {
                lng: -103.3625276511,
                lat: 22.240383194
            }, { lng: -103.3397096788, lat: 22.2465326332 }, { lng: -103.3142099154, lat: 22.2339082658 }, {
                lng: -103.2993433445,
                lat: 22.2536683804
            }, { lng: -103.3000472676, lat: 22.2589032484 }, { lng: -103.3156443663, lat: 22.2600022673 }, {
                lng: -103.3072166856,
                lat: 22.2670027591
            }, { lng: -103.3098939714, lat: 22.2825436746 }, { lng: -103.3007340422, lat: 22.3007896673 }, {
                lng: -103.3084187325,
                lat: 22.307457239
            }, { lng: -103.3290643679, lat: 22.3093749267 }, { lng: -103.3405397028, lat: 22.2888352725 }, {
                lng: -103.3580609163,
                lat: 22.2810524613
            }, { lng: -103.3520221079, lat: 22.3092429251 }, { lng: -103.3659641155, lat: 22.3158599924 }, {
                lng: -103.3617608128,
                lat: 22.3218866914
            }, { lng: -103.3514299, lat: 22.3270632656 }, { lng: -103.3452672806, lat: 22.3363499955 }, {
                lng: -103.3648257771,
                lat: 22.3373939864
            }, { lng: -103.3686719288, lat: 22.3480598204 }, { lng: -103.366719936, lat: 22.3711649743 }, {
                lng: -103.3590252988,
                lat: 22.3728733927
            }, { lng: -103.3554419226, lat: 22.3708595843 }, { lng: -103.3499808592, lat: 22.3811595711 }, {
                lng: -103.3419901069,
                lat: 22.3875227309
            }, { lng: -103.3314500421, lat: 22.3859517745 }, { lng: -103.3252071595, lat: 22.3904696757 }, {
                lng: -103.316722943,
                lat: 22.4064595505
            }, { lng: -103.311016582, lat: 22.3940103695 }, { lng: -103.307075428, lat: 22.392336648 }, {
                lng: -103.2909301066,
                lat: 22.4028691589
            }, { lng: -103.287063545, lat: 22.4079831777 }, { lng: -103.2875329301, lat: 22.4152085079 }, {
                lng: -103.2846180107,
                lat: 22.4157137761
            }, { lng: -103.2819488767, lat: 22.412290267 }, { lng: -103.2755515341, lat: 22.4111103255 }, {
                lng: -103.2633457066,
                lat: 22.4131981571
            }, { lng: -103.2523777534, lat: 22.4003718204 }, { lng: -103.2370096896, lat: 22.3982794009 }, {
                lng: -103.2346402165,
                lat: 22.3954224291
            }, { lng: -103.2236798151, lat: 22.4109228776 }, { lng: -103.21578478, lat: 22.4114295964 }, {
                lng: -103.205917156,
                lat: 22.4053825297
            }, { lng: -103.2071059094, lat: 22.4018347713 }, { lng: -103.2000018004, lat: 22.3825536929 }, {
                lng: -103.1914241835,
                lat: 22.3918075074
            }, { lng: -103.1722543328, lat: 22.3856658321 }, { lng: -103.1729031632, lat: 22.3816934354 }, {
                lng: -103.1762238991,
                lat: 22.3807445965
            }, { lng: -103.169294651, lat: 22.3719811279 }, { lng: -103.1726086713, lat: 22.3635513661 }, {
                lng: -103.1707794578,
                lat: 22.3552374849
            }, { lng: -103.1954159642, lat: 22.3333084788 }, { lng: -103.2051667327, lat: 22.3356618805 }, {
                lng: -103.2094457569,
                lat: 22.333987671
            }, { lng: -103.2135698009, lat: 22.3194429426 }, { lng: -103.2112092194, lat: 22.316279186 }, {
                lng: -103.2216789544,
                lat: 22.2979283764
            }, { lng: -103.2199485973, lat: 22.2910738051 }, { lng: -103.2235217576, lat: 22.2838189888 }, {
                lng: -103.2170022611,
                lat: 22.2791763767
            }, { lng: -103.2028671857, lat: 22.2835579022 }, { lng: -103.1997668642, lat: 22.2914486464 }, {
                lng: -103.1884670002,
                lat: 22.300028628
            }, { lng: -103.1428275758, lat: 22.2956404835 }, { lng: -103.1329584878, lat: 22.2973059903 }, {
                lng: -103.1280678116,
                lat: 22.2946451197
            }, { lng: -103.1038122545, lat: 22.2956248254 }, { lng: -103.1013451196, lat: 22.2945755497 }, {
                lng: -103.1022276359,
                lat: 22.2903453953
            }, { lng: -103.0926136, lat: 22.2873763537 }, { lng: -103.0849550936, lat: 22.278841437 }, {
                lng: -103.0852397064,
                lat: 22.2657138606
            }, { lng: -103.0795057256, lat: 22.2573536692 }, { lng: -103.0704422145, lat: 22.2558002908 }, {
                lng: -103.0602878396,
                lat: 22.2469613662
            }, { lng: -103.0595600464, lat: 22.2399734746 }, { lng: -103.0653474044, lat: 22.2318720894 }, {
                lng: -103.0615289148,
                lat: 22.2249575704
            }, { lng: -103.0498098331, lat: 22.2189090385 }, { lng: -103.0498305566, lat: 22.215304686 }, {
                lng: -103.0559204091,
                lat: 22.2135294413
            }, { lng: -103.0619350212, lat: 22.2183228547 }, { lng: -103.0726025467, lat: 22.212232787 }, {
                lng: -103.0745043806,
                lat: 22.2049522261
            }, { lng: -103.0800023455, lat: 22.2011919096 }, { lng: -103.0902954454, lat: 22.2057433618 }, {
                lng: -103.0974602292,
                lat: 22.1983937552
            }, { lng: -103.1087903713, lat: 22.1938398897 }, { lng: -103.1039608322, lat: 22.1802541064 }, {
                lng: -103.1109091018,
                lat: 22.1646144568
            }, { lng: -103.1087086125, lat: 22.1601430999 }, { lng: -103.1136661692, lat: 22.1620981304 }, {
                lng: -103.1174054475,
                lat: 22.1569759683
            }, { lng: -103.1176222528, lat: 22.149021625 }, { lng: -103.1138615217, lat: 22.1420627125 }, {
                lng: -103.096302152,
                lat: 22.1434245037
            }, { lng: -103.0916679913, lat: 22.1391652678 }, { lng: -103.0830819336, lat: 22.1366334325 }, {
                lng: -103.0807385928,
                lat: 22.1384926738
            }, { lng: -103.0750638602, lat: 22.1344126747 }, { lng: -103.089299586, lat: 22.1161589295 }, {
                lng: -103.1034818294,
                lat: 22.1085260465
            }, { lng: -103.105475541, lat: 22.1021411014 }, { lng: -103.1288108794, lat: 22.1059632902 }, {
                lng: -103.1377595427,
                lat: 22.098465067
            }, { lng: -103.1386014757, lat: 22.0931752681 }, { lng: -103.1465295535, lat: 22.0883984676 }, {
                lng: -103.155294668,
                lat: 22.089302653
            }, { lng: -103.1573710826, lat: 22.0746982393 }, { lng: -103.1422437864, lat: 22.0665534512 }, {
                lng: -103.1347644168,
                lat: 22.0735940541
            }, { lng: -103.1251998123, lat: 22.0701139956 }, { lng: -103.1205978957, lat: 22.0777708003 }, {
                lng: -103.1135201042,
                lat: 22.0781984446
            }, { lng: -103.1072660895, lat: 22.0698025603 }, { lng: -103.1012630856, lat: 22.0670150652 }, {
                lng: -103.1029804612,
                lat: 22.051894318
            }, { lng: -103.1023339971, lat: 22.047856804 }, { lng: -103.1087740225, lat: 22.0482240266 }, {
                lng: -103.1109819108,
                lat: 22.0396020522
            }, { lng: -103.1168617992, lat: 22.0405766456 }, { lng: -103.111644952, lat: 22.0302376367 }, {
                lng: -103.1130850783,
                lat: 22.0159336692
            }, { lng: -103.1227051929, lat: 22.0160482471 }, { lng: -103.1355164536, lat: 22.0043009586 }, {
                lng: -103.1463213294,
                lat: 22.0087561192
            }, { lng: -103.1531321717, lat: 22.0048633407 }, { lng: -103.1620959756, lat: 22.0045922489 }, {
                lng: -103.1670812471,
                lat: 21.9979255085
            }, { lng: -103.1721483247, lat: 21.9985046517 }, { lng: -103.1929075102, lat: 21.9990319358 }, {
                lng: -103.1985185377,
                lat: 22.0016531726
            }, { lng: -103.2035733144, lat: 21.9997258015 }, { lng: -103.2027887232, lat: 21.9936041007 }, {
                lng: -103.1965617892,
                lat: 21.9917548809
            }, { lng: -103.2003429699, lat: 21.9867553901 }, { lng: -103.1943737197, lat: 21.9798793381 }, {
                lng: -103.1937324074,
                lat: 21.9711851485
            }, { lng: -103.2061038245, lat: 21.9691172879 }, { lng: -103.2079790539, lat: 21.9665835262 }, {
                lng: -103.2230289061,
                lat: 21.9691142101
            }, { lng: -103.2353685506, lat: 21.9764174469 }, { lng: -103.2472070168, lat: 21.9788396954 }, {
                lng: -103.2494704686,
                lat: 21.9773077066
            }, { lng: -103.2441413249, lat: 21.972530011 }, { lng: -103.2470285779, lat: 21.9679382622 }, {
                lng: -103.2590128704,
                lat: 21.9703992787
            }, { lng: -103.2750692988, lat: 21.9804334897 }, { lng: -103.279565894, lat: 21.9917124724 }, {
                lng: -103.3102491721,
                lat: 21.9686838185
            }, { lng: -103.3117870311, lat: 21.9606706902 }, { lng: -103.3208847533, lat: 21.9574978685 }, {
                lng: -103.33374021,
                lat: 21.9446376565
            }, { lng: -103.3426344993, lat: 21.9436758323 }, { lng: -103.3428248564, lat: 21.9344303907 }, {
                lng: -103.3462549983,
                lat: 21.9320108547
            }, { lng: -103.3439940569, lat: 21.9228434321 }, { lng: -103.3464957598, lat: 21.9151530439 }, {
                lng: -103.3778467458,
                lat: 21.9146485351
            }, { lng: -103.3920424634, lat: 21.906274373 }, { lng: -103.3909232292, lat: 21.89960751 }, {
                lng: -103.3974881022,
                lat: 21.8985340303
            }, { lng: -103.4112071767, lat: 21.909076538 }, { lng: -103.4153174552, lat: 21.9067536839 }, {
                lng: -103.4194479044,
                lat: 21.898025966
            }, { lng: -103.4276233764, lat: 21.8919775772 }, { lng: -103.4407158678, lat: 21.866381349 }, {
                lng: -103.454040071,
                lat: 21.8546598841
            }, { lng: -103.4521033095, lat: 21.8499847411 }, { lng: -103.4596403713, lat: 21.8401461268 }, {
                lng: -103.4582396369,
                lat: 21.8337820872
            }, { lng: -103.467388564, lat: 21.8409081522 }, { lng: -103.4738830826, lat: 21.8390468496 }, {
                lng: -103.4777232699,
                lat: 21.8283142612
            }, { lng: -103.4731182051, lat: 21.815242855 }, { lng: -103.4851020884, lat: 21.8149673691 }, {
                lng: -103.4851608675,
                lat: 21.8185502873
            }, { lng: -103.4967836366, lat: 21.8242732933 }, { lng: -103.5054374389, lat: 21.8348333321 }, {
                lng: -103.5116044918,
                lat: 21.8289725341
            }, { lng: -103.5344884142, lat: 21.81924086 }, { lng: -103.5285719993, lat: 21.811020297 }, {
                lng: -103.5298473872,
                lat: 21.8060285108
            }, { lng: -103.5572484943, lat: 21.8024126966 }, { lng: -103.567239236, lat: 21.805568672 }, {
                lng: -103.5752297547,
                lat: 21.8047137749
            }, { lng: -103.5699477247, lat: 21.798549037 }, { lng: -103.5714382347, lat: 21.7904614629 }, {
                lng: -103.5679848411,
                lat: 21.7860278883
            }, { lng: -103.5644900678, lat: 21.7864013589 }, { lng: -103.5626367421, lat: 21.7807827461 }, {
                lng: -103.5558530779,
                lat: 21.7808192335
            }, { lng: -103.5495041983, lat: 21.7738407694 }, { lng: -103.5422128027, lat: 21.7719345614 }, {
                lng: -103.5301249248,
                lat: 21.7738427145
            }, { lng: -103.5107941635, lat: 21.7407581591 }, { lng: -103.5125275868, lat: 21.7150244499 }, {
                lng: -103.5202480094,
                lat: 21.7130584687
            }, { lng: -103.5291918437, lat: 21.6887017188 }, { lng: -103.5293345858, lat: 21.6772627309 }, {
                lng: -103.5443765221,
                lat: 21.6643392546
            }, { lng: -103.5493658355, lat: 21.6522732392 }, { lng: -103.5571489929, lat: 21.6383862648 }, {
                lng: -103.5569990754,
                lat: 21.625345988
            }, { lng: -103.552979227, lat: 21.616819725 }, { lng: -103.5523697774, lat: 21.5975231954 }, {
                lng: -103.5475676338,
                lat: 21.5892362104
            }, { lng: -103.5544112053, lat: 21.5851078803 }, { lng: -103.5568953428, lat: 21.5783159305 }, {
                lng: -103.5611937197,
                lat: 21.5774012225
            }, { lng: -103.5682400913, lat: 21.5824971077 }, { lng: -103.581604533, lat: 21.5858693958 }, {
                lng: -103.5842194189,
                lat: 21.5903744101
            }, { lng: -103.5914532825, lat: 21.591468869 }, { lng: -103.5969399754, lat: 21.5834857271 }, {
                lng: -103.5991297687,
                lat: 21.5667385509
            }, { lng: -103.5961255691, lat: 21.5604905171 }, { lng: -103.621830695, lat: 21.5580991594 }, {
                lng: -103.6235632565,
                lat: 21.5658350745
            }, { lng: -103.6307572796, lat: 21.5733751056 }, { lng: -103.6454104792, lat: 21.5781238943 }, {
                lng: -103.6626976208,
                lat: 21.5664950932
            }, { lng: -103.6604718859, lat: 21.555914682 }, { lng: -103.6715741829, lat: 21.5592058351 }, {
                lng: -103.6778980632,
                lat: 21.55662983
            }, { lng: -103.6848532792, lat: 21.5595859888 }, { lng: -103.6883491943, lat: 21.5574624115 }, {
                lng: -103.6913679807,
                lat: 21.5528818127
            }, { lng: -103.6891746419, lat: 21.5357229215 }, { lng: -103.6956873386, lat: 21.534394495 }, {
                lng: -103.6964405328,
                lat: 21.5294619592
            }, { lng: -103.6917679155, lat: 21.5281833585 }, { lng: -103.6890945458, lat: 21.5222921181 }, {
                lng: -103.6835192638,
                lat: 21.5217288643
            }, { lng: -103.6815913823, lat: 21.5125548971 }, { lng: -103.677250049, lat: 21.5121209635 }, {
                lng: -103.6743170321,
                lat: 21.5079047523
            }, { lng: -103.6881596203, lat: 21.5025305113 }, { lng: -103.6934438631, lat: 21.4969403772 }, {
                lng: -103.6967105708,
                lat: 21.4898178123
            }, { lng: -103.6964774256, lat: 21.4797133279 }, { lng: -103.7027880632, lat: 21.4686950862 }, {
                lng: -103.6883016275,
                lat: 21.4648738039
            }, { lng: -103.6614286937, lat: 21.4653941116 }, { lng: -103.6673806259, lat: 21.4565687459 }, {
                lng: -103.6634748551,
                lat: 21.4432772106
            }, { lng: -103.6529964335, lat: 21.4362871675 }, { lng: -103.6516024094, lat: 21.4404319226 }, {
                lng: -103.6370141005,
                lat: 21.4406460989
            }, { lng: -103.6290462407, lat: 21.4359196816 }, { lng: -103.6289549145, lat: 21.4307379252 }, {
                lng: -103.6219213592,
                lat: 21.4246262276
            }, { lng: -103.6265970511, lat: 21.424091499 }, { lng: -103.627405047, lat: 21.4195288516 }, {
                lng: -103.6250983558,
                lat: 21.4179397738
            }, { lng: -103.6270407874, lat: 21.4150216673 }, { lng: -103.6224682606, lat: 21.4119996166 }, {
                lng: -103.6183217369,
                lat: 21.4129825051
            }, { lng: -103.618245724, lat: 21.4090486534 }, { lng: -103.6122875542, lat: 21.4084710346 }, {
                lng: -103.6022917863,
                lat: 21.3992194639
            }, { lng: -103.6029586348, lat: 21.394957988 }, { lng: -103.5969302319, lat: 21.3916485273 }, {
                lng: -103.5948360138,
                lat: 21.3948718453
            }, { lng: -103.5889245926, lat: 21.3932581473 }, { lng: -103.5891715179, lat: 21.4093730328 }, {
                lng: -103.58227434,
                lat: 21.4213498421
            }, { lng: -103.5825907542, lat: 21.4260368806 }, { lng: -103.5836646949, lat: 21.4283494675 }, {
                lng: -103.5778751039,
                lat: 21.4298223419
            }, { lng: -103.5796270277, lat: 21.4345832401 }, { lng: -103.5731757383, lat: 21.4408846157 }, {
                lng: -103.5672910965,
                lat: 21.439222113
            }, { lng: -103.5630769547, lat: 21.4327614461 }, { lng: -103.5606732906, lat: 21.4370199312 }, {
                lng: -103.5565673406,
                lat: 21.4391080881
            }, { lng: -103.5549183063, lat: 21.4373366062 }, { lng: -103.5512043892, lat: 21.4414992041 }, {
                lng: -103.544849006,
                lat: 21.4393413618
            }, { lng: -103.5403998233, lat: 21.4462340113 }, { lng: -103.5399570189, lat: 21.43285281 }, {
                lng: -103.5359596836,
                lat: 21.4222912531
            }, { lng: -103.5239918621, lat: 21.4070932575 }, { lng: -103.5240034426, lat: 21.4029475087 }, {
                lng: -103.5115555737,
                lat: 21.3939684506
            }, { lng: -103.5103483911, lat: 21.3821629167 }, { lng: -103.5063665448, lat: 21.3778905596 }, {
                lng: -103.5136616099,
                lat: 21.3673067299
            }, { lng: -103.5134176386, lat: 21.3558572453 }, { lng: -103.5224325946, lat: 21.3579741873 }, {
                lng: -103.5252384996,
                lat: 21.3533176695
            }, { lng: -103.5440937932, lat: 21.3542762441 }, { lng: -103.560301401, lat: 21.3490806751 }, {
                lng: -103.5644471936,
                lat: 21.353211519
            }, { lng: -103.5709067962, lat: 21.3538130729 }, { lng: -103.5695792453, lat: 21.341231125 }, {
                lng: -103.5760019027,
                lat: 21.3328588189
            }, { lng: -103.5788728267, lat: 21.3339935123 }, { lng: -103.5803552776, lat: 21.3315232675 }, {
                lng: -103.590991088,
                lat: 21.3438642718
            }, { lng: -103.5949659992, lat: 21.3432809834 }, { lng: -103.600622515, lat: 21.3431748289 }, {
                lng: -103.6016195405,
                lat: 21.3480293241
            }, { lng: -103.613587322, lat: 21.3498879348 }, { lng: -103.6190096236, lat: 21.3544895718 }, {
                lng: -103.6191971379,
                lat: 21.347469428
            }, { lng: -103.6219424176, lat: 21.3453304151 }, { lng: -103.6312488193, lat: 21.3466188132 }, {
                lng: -103.6368608619,
                lat: 21.3412090368
            }, { lng: -103.639194737, lat: 21.3459470201 }, { lng: -103.6518947962, lat: 21.342669102 }, {
                lng: -103.6507436218,
                lat: 21.3388262976
            }, { lng: -103.6657550549, lat: 21.3392505641 }, { lng: -103.6745704782, lat: 21.3235170225 }, {
                lng: -103.6783382973,
                lat: 21.3219286465
            }, { lng: -103.6850159392, lat: 21.3198818828 }, { lng: -103.7054072092, lat: 21.3269371406 }, {
                lng: -103.7095523532,
                lat: 21.3261016897
            }, { lng: -103.7073729203, lat: 21.3214901521 }, { lng: -103.7129720042, lat: 21.3192113068 }, {
                lng: -103.7141366597,
                lat: 21.3140249932
            }, { lng: -103.7230440964, lat: 21.3099233063 }, { lng: -103.7246925275, lat: 21.2856809292 }, {
                lng: -103.7227772024,
                lat: 21.2766898695
            }, { lng: -103.7159138757, lat: 21.2676654115 }, { lng: -103.7135978202, lat: 21.2751855775 }, {
                lng: -103.7058771569,
                lat: 21.2810978303
            }, { lng: -103.6924257162, lat: 21.2864599964 }, { lng: -103.6764833349, lat: 21.2831147058 }, {
                lng: -103.6673691574,
                lat: 21.2916404216
            }, { lng: -103.6597398346, lat: 21.2815008208 }, { lng: -103.6487236183, lat: 21.2849950849 }, {
                lng: -103.635956153,
                lat: 21.283844365
            }, { lng: -103.641576517, lat: 21.2785524532 }, { lng: -103.6388341231, lat: 21.2767822878 }, {
                lng: -103.6439265969,
                lat: 21.2551162959
            }, { lng: -103.6380367675, lat: 21.2427995586 }, { lng: -103.6417487482, lat: 21.2231316746 }, {
                lng: -103.6649082144,
                lat: 21.2252251212
            }, { lng: -103.6656561597, lat: 21.2191250163 }, { lng: -103.6688467109, lat: 21.2172595407 }, {
                lng: -103.6626914116,
                lat: 21.2165137041
            }, { lng: -103.6391665108, lat: 21.2008558545 }, { lng: -103.6338880127, lat: 21.1932747822 }, {
                lng: -103.6314222498,
                lat: 21.195047903
            }, { lng: -103.6242438643, lat: 21.1928071026 }, { lng: -103.6134538823, lat: 21.179781308 }, {
                lng: -103.6159384074,
                lat: 21.1576250283
            }, { lng: -103.6038049162, lat: 21.1525877929 }, { lng: -103.5970649924, lat: 21.1330960578 }, {
                lng: -103.5908294405,
                lat: 21.1284368663
            }, { lng: -103.5828990627, lat: 21.1285365978 }, { lng: -103.5710454284, lat: 21.1180898085 }, {
                lng: -103.5692408016,
                lat: 21.1217881293
            }, { lng: -103.5675852026, lat: 21.11912781 }, { lng: -103.5592796162, lat: 21.1210406236 }, {
                lng: -103.5561095069,
                lat: 21.1178645948
            }, { lng: -103.5565932701, lat: 21.1221023163 }, { lng: -103.5522309536, lat: 21.1263208233 }, {
                lng: -103.5430453675,
                lat: 21.1274566178
            }, { lng: -103.5318731574, lat: 21.1351388907 }, { lng: -103.5317291075, lat: 21.142956306 }, {
                lng: -103.5169453251,
                lat: 21.1435969728
            }, { lng: -103.5118220824, lat: 21.1474157311 }, { lng: -103.5109915551, lat: 21.1388432934 }, {
                lng: -103.5048924802,
                lat: 21.1287909544
            }, { lng: -103.4764022334, lat: 21.1381685737 }, { lng: -103.4698589198, lat: 21.1458292118 }, {
                lng: -103.4601177927,
                lat: 21.1431605919
            }, { lng: -103.4519588689, lat: 21.1454927611 }, { lng: -103.4370741058, lat: 21.1430411668 }, {
                lng: -103.4302720741,
                lat: 21.147492197
            }, { lng: -103.429267841, lat: 21.1412283228 }, { lng: -103.418876782, lat: 21.139200658 }, {
                lng: -103.4240742988,
                lat: 21.1219419345
            }, { lng: -103.4024962646, lat: 21.1032160716 }, { lng: -103.4025761418, lat: 21.1006471496 }, {
                lng: -103.3979323469,
                lat: 21.0995163763
            }, { lng: -103.3980091627, lat: 21.0947604484 }, { lng: -103.3949495586, lat: 21.0924990181 }, {
                lng: -103.398330879,
                lat: 21.0912523717
            }, { lng: -103.3963265503, lat: 21.0881669375 }, { lng: -103.3997642684, lat: 21.0858353104 }, {
                lng: -103.3981648793,
                lat: 21.0816912895
            }, { lng: -103.3899618426, lat: 21.0803928741 }, { lng: -103.3873342999, lat: 21.0683108187 }, {
                lng: -103.378375926,
                lat: 21.0668008046
            }, { lng: -103.3710301941, lat: 21.0583678492 }, { lng: -103.3708263229, lat: 21.0525278619 }, {
                lng: -103.3623819896,
                lat: 21.0520287284
            }, { lng: -103.3518201509, lat: 21.0456424182 }, { lng: -103.3453500283, lat: 21.0472734434 }, {
                lng: -103.3408851989,
                lat: 21.0434692519
            }, { lng: -103.3357212727, lat: 21.0442423033 }, { lng: -103.3353225629, lat: 21.0528620738 }, {
                lng: -103.3298149461,
                lat: 21.0560948553
            }, { lng: -103.3193569751, lat: 21.0553067128 }, { lng: -103.3088041086, lat: 21.0587088683 }, {
                lng: -103.303634223,
                lat: 21.0559123032
            }, { lng: -103.2983051008, lat: 21.065782811 }, { lng: -103.2817840529, lat: 21.0577311537 }, {
                lng: -103.2772695151,
                lat: 21.0525960953
            }, { lng: -103.271098006, lat: 21.0614834692 }, { lng: -103.2638513516, lat: 21.0640022444 }, {
                lng: -103.2594450785,
                lat: 21.0715543595
            }, { lng: -103.2637679624, lat: 21.0768798652 }, { lng: -103.2572941083, lat: 21.085701208 }, {
                lng: -103.2546875391,
                lat: 21.0819586912
            }, { lng: -103.2452200637, lat: 21.0849688095 }, { lng: -103.2409025961, lat: 21.0801849322 }, {
                lng: -103.2357836883,
                lat: 21.0797405307
            }, { lng: -103.2297784078, lat: 21.0860591433 }, { lng: -103.222308017, lat: 21.0865064607 }, {
                lng: -103.2113619601,
                lat: 21.0951570822
            }, { lng: -103.2031278728, lat: 21.0869476318 }, { lng: -103.1908520208, lat: 21.0863327869 }, {
                lng: -103.193923522,
                lat: 21.0804422621
            }, { lng: -103.1892620235, lat: 21.0758955681 }, { lng: -103.1902997176, lat: 21.0718357399 }, {
                lng: -103.1831889855,
                lat: 21.0757630448
            }, { lng: -103.1688898826, lat: 21.0702231066 }, { lng: -103.1635909576, lat: 21.0723957016 }, {
                lng: -103.1542073105,
                lat: 21.0694851908
            }, { lng: -103.1523436026, lat: 21.0663252883 }, { lng: -103.1443626426, lat: 21.0657381391 }, {
                lng: -103.140847741,
                lat: 21.0604737092
            }, { lng: -103.1291781025, lat: 21.0545295575 }, { lng: -103.1236909502, lat: 21.0643474324 }, {
                lng: -103.1270484638,
                lat: 21.0693547856
            }, { lng: -103.1168661714, lat: 21.0691384547 }, { lng: -103.1074788269, lat: 21.0632441498 }, {
                lng: -103.090860962,
                lat: 21.0669674189
            }, { lng: -103.0720920625, lat: 21.0812530681 }, { lng: -103.0527299999, lat: 21.1043702498 }, {
                lng: -103.0771525748,
                lat: 21.0988158591
            }, { lng: -103.078329969, lat: 21.1107182279 }, { lng: -103.0873158988, lat: 21.1121207503 }, {
                lng: -103.0894522781,
                lat: 21.1168336486
            }, { lng: -103.0941640439, lat: 21.117052139 }, { lng: -103.100683627, lat: 21.1315187218 }, {
                lng: -103.0936854799,
                lat: 21.1369226584
            }, { lng: -103.0813018254, lat: 21.1402791488 }, { lng: -103.0736790309, lat: 21.1537133694 }, {
                lng: -103.0793281248,
                lat: 21.1646116257
            }, { lng: -103.0778915916, lat: 21.1689073521 }, { lng: -103.0860180575, lat: 21.1833592022 }, {
                lng: -103.0862662442,
                lat: 21.1962577946
            }, { lng: -103.0715280167, lat: 21.2109991032 }, { lng: -103.0798628853, lat: 21.2136817729 }, {
                lng: -103.0795387856,
                lat: 21.216744676
            }, { lng: -103.0700663444, lat: 21.2367876663 }, { lng: -103.058785086, lat: 21.2486974604 }, {
                lng: -103.067573759,
                lat: 21.2571270497
            }, { lng: -103.0498841284, lat: 21.2656952911 }, { lng: -103.0516076418, lat: 21.2582008336 }, {
                lng: -103.0474362747,
                lat: 21.2508417606
            }, { lng: -103.0324943826, lat: 21.2515776339 }, { lng: -103.021437035, lat: 21.2423488587 }, {
                lng: -103.0153455912,
                lat: 21.2459057296
            }, { lng: -103.0116425604, lat: 21.2569385041 }, { lng: -103.002882037, lat: 21.2610341966 }, {
                lng: -102.9974349591,
                lat: 21.2602231738
            }, { lng: -102.9902997494, lat: 21.2562599999 }, { lng: -102.9884835165, lat: 21.2501343827 }, {
                lng: -102.9817564076,
                lat: 21.2476112128
            }, { lng: -102.9810015338, lat: 21.2409342676 }, { lng: -102.9706556236, lat: 21.2426127655 }, {
                lng: -102.9611224261,
                lat: 21.2346770005
            }, { lng: -102.9539751807, lat: 21.2327928004 }, { lng: -102.9507994564, lat: 21.2354487568 }, {
                lng: -102.9500899988,
                lat: 21.2156486164
            }, { lng: -102.922375518, lat: 21.2106187782 }, { lng: -102.9129864234, lat: 21.2060915971 }, {
                lng: -102.9117907793,
                lat: 21.2226291376
            }, { lng: -102.9043518226, lat: 21.2290754559 }, { lng: -102.9046095565, lat: 21.2372643929 }, {
                lng: -102.9003755968,
                lat: 21.2381512796
            }, { lng: -102.894668064, lat: 21.23429794 }, { lng: -102.893900821, lat: 21.2383295441 }, {
                lng: -102.8886152083,
                lat: 21.2368013517
            }, { lng: -102.8858343874, lat: 21.2423351085 }, { lng: -102.878509849, lat: 21.2383769852 }, {
                lng: -102.8738220966,
                lat: 21.2485180151
            }, { lng: -102.8750602009, lat: 21.2558802037 }, { lng: -102.8659757744, lat: 21.2538304314 }, {
                lng: -102.8645144844,
                lat: 21.2569650801
            }, { lng: -102.8653757578, lat: 21.2629931288 }, { lng: -102.8595295889, lat: 21.2724437822 }, {
                lng: -102.8470185864,
                lat: 21.2784618196
            }, { lng: -102.8530489901, lat: 21.282766736 }, { lng: -102.8519947101, lat: 21.2906841297 }, {
                lng: -102.8507305318,
                lat: 21.2944823993
            }, { lng: -102.8420355131, lat: 21.2993763555 }, { lng: -102.8418820464, lat: 21.3027442295 }, {
                lng: -102.8394026195,
                lat: 21.3042869485
            }, { lng: -102.8172226825, lat: 21.2959156009 }, { lng: -102.8196443643, lat: 21.3169105022 }, {
                lng: -102.8144015309,
                lat: 21.3228941017
            }, { lng: -102.8075239515, lat: 21.32118311 }, { lng: -102.8006274586, lat: 21.3080048708 }, {
                lng: -102.7919657294,
                lat: 21.3290505006
            }, { lng: -102.7859024122, lat: 21.3291245444 }, { lng: -102.7731950982, lat: 21.3157362269 }, {
                lng: -102.7605234714,
                lat: 21.3238695731
            }, { lng: -102.7570773364, lat: 21.3329508049 }, { lng: -102.7613565427, lat: 21.3359928445 }, {
                lng: -102.7598218412,
                lat: 21.3404497595
            }, { lng: -102.7525629235, lat: 21.3468859111 }, { lng: -102.7430704393, lat: 21.3471632373 }, {
                lng: -102.7297525737,
                lat: 21.3585214328
            }, { lng: -102.7343095131, lat: 21.3698990933 }, { lng: -102.7314120089, lat: 21.3752335371 }, {
                lng: -102.7311720854,
                lat: 21.3882789946
            }, { lng: -102.7265775438, lat: 21.3880646646 }, { lng: -102.7228466127, lat: 21.3825934872 }, {
                lng: -102.715430468,
                lat: 21.3820107961
            }, { lng: -102.7041403817, lat: 21.3649863815 }, { lng: -102.7011356629, lat: 21.3572515698 }, {
                lng: -102.702471067,
                lat: 21.3456852743
            }, { lng: -102.6970764297, lat: 21.3421746859 }, { lng: -102.6867307868, lat: 21.3441926568 }, {
                lng: -102.6838429803,
                lat: 21.3401554158
            }, { lng: -102.6445208929, lat: 21.3684613137 }, { lng: -102.6435417257, lat: 21.3888293296 }, {
                lng: -102.6404285368,
                lat: 21.3944806493
            }, { lng: -102.6481243169, lat: 21.3946959338 }, { lng: -102.651380294, lat: 21.4007154925 }, {
                lng: -102.6576156738,
                lat: 21.4034845195
            }, { lng: -102.6537117196, lat: 21.4078983639 }, { lng: -102.6617959197, lat: 21.4120866141 }, {
                lng: -102.6540366089,
                lat: 21.4129795452
            }, { lng: -102.6591758075, lat: 21.4234314754 }, { lng: -102.6554226465, lat: 21.4230389897 }, {
                lng: -102.6540602422,
                lat: 21.4279707791
            }, { lng: -102.6566388519, lat: 21.4340204122 }, { lng: -102.6534584132, lat: 21.4378844025 }, {
                lng: -102.6569642176,
                lat: 21.4411710006
            }, { lng: -102.6522992505, lat: 21.4427903915 }, { lng: -102.6562513995, lat: 21.4481444926 }, {
                lng: -102.6477467577,
                lat: 21.449727789
            }, { lng: -102.6383000148, lat: 21.4633903589 }, { lng: -102.6387280864, lat: 21.4657620221 }, {
                lng: -102.6456044939,
                lat: 21.4620531047
            }, { lng: -102.6498689526, lat: 21.4637120949 }, { lng: -102.6509922676, lat: 21.4755632038 }, {
                lng: -102.6443964013,
                lat: 21.4771972876
            }, { lng: -102.6416537433, lat: 21.4816469706 }, { lng: -102.6418986719, lat: 21.4780676362 }, {
                lng: -102.6368060295,
                lat: 21.4797836526
            }, { lng: -102.6363658062, lat: 21.4831051096 }, { lng: -102.6400655988, lat: 21.4841790176 }, {
                lng: -102.6346609799,
                lat: 21.4918276205
            }, { lng: -102.6341176865, lat: 21.4980221704 }, { lng: -102.628422001, lat: 21.5016464228 }, {
                lng: -102.6319305374,
                lat: 21.5094695941
            }, { lng: -102.6438325919, lat: 21.5199061033 }, { lng: -102.6334073503, lat: 21.5287418841 }, {
                lng: -102.6326106219,
                lat: 21.5347219958
            }, { lng: -102.6476578914, lat: 21.5369153325 }, { lng: -102.6618625915, lat: 21.53532364 }, {
                lng: -102.6668074101,
                lat: 21.5406825334
            }, { lng: -102.6914754706, lat: 21.5457843186 }, { lng: -102.6983244184, lat: 21.5437703715 }, {
                lng: -102.6993479958,
                lat: 21.5522568692
            }, { lng: -102.6946140543, lat: 21.5638077056 }, { lng: -102.6977465905, lat: 21.5729360647 }, {
                lng: -102.7169198796,
                lat: 21.5726170767
            }, { lng: -102.7216411389, lat: 21.5754134597 }, { lng: -102.7270508918, lat: 21.5907640862 }, {
                lng: -102.7320779537,
                lat: 21.5943189166
            }, { lng: -102.736942452, lat: 21.592909385 }, { lng: -102.7400093083, lat: 21.587559923 }, {
                lng: -102.7666849195,
                lat: 21.5972625903
            }, { lng: -102.7779457389, lat: 21.6230481331 }, { lng: -102.7800582703, lat: 21.6392896782 }, {
                lng: -102.7855329752,
                lat: 21.64749934
            }, { lng: -102.7762696234, lat: 21.6592621071 }, { lng: -102.805558819, lat: 21.6696374397 }, {
                lng: -102.8072048939,
                lat: 21.6720978295
            }, { lng: -102.8002460374, lat: 21.6711286322 }, { lng: -102.7977484254, lat: 21.677413745 }, {
                lng: -102.7879453267,
                lat: 21.6766855296
            }, { lng: -102.7685781211, lat: 21.6882153261 }, { lng: -102.7478601145, lat: 21.7213596827 }, {
                lng: -102.7403721919,
                lat: 21.7163940877
            }, { lng: -102.7361290717, lat: 21.7167637586 }, { lng: -102.7243942204, lat: 21.7203999621 }, {
                lng: -102.7179223034,
                lat: 21.7346994143
            }, { lng: -102.7156886281, lat: 21.731187777 }, { lng: -102.6983189965, lat: 21.729558168 }, {
                lng: -102.699703679,
                lat: 21.7418538313
            }, { lng: -102.6928351951, lat: 21.7534195862 }, { lng: -102.6793361377, lat: 21.7549021465 }, {
                lng: -102.6697869735,
                lat: 21.7652781613
            }, { lng: -102.6619264233, lat: 21.7635123178 }, { lng: -102.6535943296, lat: 21.7666951926 }, {
                lng: -102.6462583302,
                lat: 21.7628181405
            }, { lng: -102.6359533591, lat: 21.768107394 }, { lng: -102.6204490077, lat: 21.7565512293 }, {
                lng: -102.6086799754,
                lat: 21.7518549701
            }, { lng: -102.6035027494, lat: 21.7566316713 }, { lng: -102.5990486984, lat: 21.7558115503 }, {
                lng: -102.5982149148,
                lat: 21.7452148182
            }, { lng: -102.5901399558, lat: 21.7450460361 }, { lng: -102.5778674323, lat: 21.7425551361 }, {
                lng: -102.5696889016,
                lat: 21.7454446939
            }, { lng: -102.5568700285, lat: 21.7446901504 }, { lng: -102.5444177724, lat: 21.7335557639 }, {
                lng: -102.4798883858,
                lat: 21.7034034496
            }, { lng: -102.4776874474, lat: 21.6962393723 }, { lng: -102.471218267, lat: 21.6988960219 }, {
                lng: -102.4585319068,
                lat: 21.6985119251
            }, { lng: -102.4539208506, lat: 21.6876398615 }, { lng: -102.4629479052, lat: 21.6804060786 }, {
                lng: -102.4565062645,
                lat: 21.6795537649
            }, { lng: -102.4541474658, lat: 21.6827920863 }, { lng: -102.4423503239, lat: 21.6746432612 }, {
                lng: -102.4205446702,
                lat: 21.6701767269
            }, { lng: -102.4073232182, lat: 21.665260508 }, { lng: -102.4089797254, lat: 21.6607018177 }, {
                lng: -102.3862754312,
                lat: 21.6531671359
            }];
        this.obtenerDatosGraficasP();
        // Arreglo de colores y pin
        this._color = [
            '#FFFFFF',
            '#C1272D',
            '#0098DA',
            '#0838DD',
            '#EF63A0',
            '#900280',
            '#417505',
            '#91CA52',
            '#FF7404',
            '#FC187B',
        ];
        this._pin = [
            'assets/Images/Images/pines/pin_proquifa.png',
            'assets/Images/Images/pines/pin_rojo.png',
            'assets/Images/Images/pines/pin_azul.png',
            'assets/Images/Images/pines/pin_azul2.png',
            'assets/Images/Images/pines/pin_pink.png',
            'assets/Images/Images/pines/pin_morado.png',
            'assets/Images/Images/pines/pin_verde.png',
            'assets/Images/Images/pines/pin_verde2.png',
            'assets/Images/Images/pines/pin_orange.png',
            'assets/Images/Images/pines/pin_lila.png',
        ];
        this._pin2 = [
            'assets/Images/Images/pines2/pin_proquifa.png',
            'assets/Images/Images/pines2/pin_rojo.png',
            'assets/Images/Images/pines2/pin_azul.png',
            'assets/Images/Images/pines2/pin_azul2.png',
            'assets/Images/Images/pines2/pin_pink.png',
            'assets/Images/Images/pines2/pin_morado.png',
            'assets/Images/Images/pines2/pin_verde.png',
            'assets/Images/Images/pines2/pin_verde2.png',
            'assets/Images/Images/pines2/pin_orange.png',
            'assets/Images/Images/pines2/pin_lila.png',
        ];
        if (this.idEmpleado == 115) {
            this._proquifa = [19.2856554, -99.1595433];
            this._proquifaMap = '19.2856554, -99.1595433';
        }
        else {
            this._proquifa = [20.661904, -103.396110];
            this._proquifaMap = '20.661904, -103.396110';
        }
        // this.totales();
    };
    AsignarRutaComponent.prototype.inicarMenu = function () {
        var _this = this;
        this._asignarMensajeroService.obtenerTotales().subscribe(function (data) {
            _this.totCerrar = data.current.CerrarRuta;
            _this.totAsignar = data.current.AsignarRuta;
            _this.itemsMenu = [
                { rol: 'Gestor Entrega', active: true, menu: [
                        { nombre: 'Asignar Ruta', tipo: 'valor', valor: _this.totAsignar, url: 'gestorRuta', select: true },
                        { nombre: 'Carta Porte', tipo: '', valor: 0, url: 'cartaPorte', select: false }
                    ] }
            ];
            _this.activeMenu = true;
        }, function (error) {
        });
    };
    AsignarRutaComponent.prototype.recargar = function () {
        this.activeMenu = false;
        this.inicarMenu();
        this.itemsAux3 = [];
        this.arregloDistancias = [];
        this.arregloDistancias2 = [];
        this.marcadores = [];
        this.linea = [];
        this.positions = [];
        this.path = [];
        this.lstAux = [];
        this.itemsAux = [];
        this.items = [];
        this.itemsAgrupados = [];
        this.obtenerDatosGraficasP();
    };
    AsignarRutaComponent.prototype.obtenerDatosGraficasP = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this._asignarMensajeroService.datosGrafica().subscribe(function (data) {
            _this.graficaTipos_p = ['General', 'General', 'General', 'Prioridades', 'General'];
            // console.log(data);
            _this.lstAux = data.current;
            if (_this.lstAux.length === 0) {
                _this.limpiarGraficas();
                setTimeout(function () {
                    _this.hay = true;
                }, 10);
                _this.nohay = true;
            }
            else {
                _this.hay = true;
                _this.nohay = false;
                _this.getDatos(_this.lstAux['Mensajero']);
                _this.getDatos2(_this.lstAux['Zonas']);
                _this.getDatos3(_this.lstAux['Eventos']);
                _this.getDatos4(_this.lstAux['Prioridades']);
                _this.getDatos5(_this.lstAux['Clientes']);
                _this.totalesGraficas.push(_this.lstAux['Totales'][0].totalClientes);
                _this.totalesGraficas.push(_this.lstAux['Totales'][0].totalProveedores);
                _this.totalesGraficas.push(_this.lstAux['Totales'][0].totalEventos);
                /*Totales para la grafica zona*/
                _this.totalesGraficasZona.push(_this.lstAux['Totales'][0].totalClientes);
                _this.totalesGraficasZona.push(_this.lstAux['Totales'][0].totalProveedores);
                _this.totalesGraficasZona.push(_this.lstAux['Totales'][0].totalMensajeros);
                /*Totales para la grafica Eventos*/
                _this.totalesGraficasEvent.push(_this.lstAux['Totales'][0].totalClientes);
                _this.totalesGraficasEvent.push(_this.lstAux['Totales'][0].totalProveedores);
                _this.limpiarGraficas();
                // console.log(this.mensajeroG, this.graficaTipos_p);
                if (_this.totalesGraficas[2] > 0) {
                    _this.datosGrafica();
                    _this.activarBoton = true;
                }
                else {
                    _this.activarBoton = false;
                }
                _this.hay = false;
                setTimeout(function () {
                    _this.hay = true;
                }, 10);
                _this.graficasValores_p = [_this.mensajeroG, _this.zonaG, _this.eventosG, _this.prioridadesG, _this.clientesG];
                _this.graficas_p = [];
                _this.graficas_p = ['Mensajero', 'Zona', 'Evento', 'Prioridades', 'Clientes'];
                // console.log(this.graficasValores_p);
                // this.cargaDatos(); // Carga desde el principi los datos del mapa
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log(error);
            // terminar loading false
            _this.coreComponent.closeModal(0);
        });
    };
    AsignarRutaComponent.prototype.limpiarGraficas = function () {
        this.lstmensajeroG = [];
        this.lstzonaG = [];
        this.lsteventosG = [];
        this.lstprioridadesG = [];
        this.lstclientesG = [];
        var valoresM = [];
        var valuesExtraM = [];
        this.lstConsultaActual.forEach(function (temp) {
            valoresM.push(0);
            valuesExtraM.push([0, 0, 0]);
        });
        if (this.totalesGraficas[2] > 0) {
            this.mensajeroG = {
                titulo: 'Mensajero',
                labels: this.lstConsultaActual,
                valores: valoresM,
                labelsExtras: ['Clientes', 'Proveedores', 'Eventos'],
                labelsExtrasHover: ['Clientes', 'Proveedores', 'Eventos'],
                valuesExtras: this.totalesGraficas,
                valuesExtrasHover: valuesExtraM
            };
            this.graficaTipos_p[0] = 'General';
        }
        else {
            this.mensajeroG = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Clientes', 'Proveedores', 'Eventos'],
                labelsExtrasHover: ['Clientes', 'Proveedores', 'Eventos'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0, 0]],
            };
            this.graficaTipos_p[0] = 'Gris';
        }
        var valoresZ = [];
        var valuesExtraZ = [];
        this.lstConsultaActual2.forEach(function (temp) {
            valoresZ.push(0);
            valuesExtraZ.push([0, 0, 0]);
        });
        if (this.totalesGraficasZona[2] > 0) {
            this.zonaG = {
                titulo: 'Zonas',
                labels: this.lstConsultaActual2,
                valores: valoresZ,
                labelsExtras: ['Clientes', 'Proveedores', 'Mensajero'],
                labelsExtrasHover: ['Clientes', 'Proveedores', 'Mensajero'],
                valuesExtras: this.totalesGraficasZona,
                valuesExtrasHover: valuesExtraZ
            };
            this.graficaTipos_p[1] = 'General';
        }
        else {
            this.zonaG = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Clientes', 'Proveedores', 'Mensajero'],
                labelsExtrasHover: ['Clientes', 'Proveedores', 'Mensajero'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0, 0]],
            };
            this.graficaTipos_p[1] = 'Gris';
        }
        var valoresE = [];
        var valuesExtraE = [];
        this.lstConsultaActual3.forEach(function (temp) {
            valoresE.push(0);
            valuesExtraE.push([0, 0]);
        });
        if (this.totalesGraficasEvent[0] > 0 || this.totalesGraficasEvent[1] > 0) {
            this.eventosG = {
                titulo: 'EVENTOS',
                labels: this.lstConsultaActual3,
                valores: valoresE,
                labelsExtras: ['Clientes', 'Proveedores'],
                labelsExtrasHover: ['Clientes', 'Proveedores'],
                valuesExtras: this.totalesGraficasEvent,
                valuesExtrasHover: valuesExtraE
            };
            this.graficaTipos_p[2] = 'General';
        }
        else {
            this.eventosG = {
                titulo: 'EVENTOS',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Clientes', 'Proveedores'],
                labelsExtrasHover: ['Clientes', 'Proveedores'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.graficaTipos_p[2] = 'Gris';
        }
        var valoresP = [];
        var valuesExtraP = [];
        this.lstConsultaActual4.forEach(function (temp) {
            valoresP.push(0);
            valuesExtraP.push([0, 0, 0]);
        });
        if (this.totalesGraficas[2] > 0) {
            this.prioridadesG = {
                titulo: 'Prioridades',
                labels: this.lstConsultaActual4,
                valores: valoresP,
                labelsExtras: ['Clientes', 'Proveedores', 'Eventos'],
                labelsExtrasHover: ['Clientes', 'Proveedores', 'Eventos'],
                valuesExtras: this.totalesGraficas,
                valuesExtrasHover: valuesExtraP
            };
            this.graficaTipos_p[3] = 'Prioridades';
        }
        else {
            this.prioridadesG = {
                titulo: 'Prioridades',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Clientes', 'Proveedores', 'Eventos'],
                labelsExtrasHover: ['Clientes', 'Proveedores', 'Eventos'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0, 0]],
            };
            this.graficaTipos_p[3] = 'Gris';
        }
        var valoresC = [];
        var valuesExtraC = [];
        this.lstConsultaActual5.forEach(function (temp) {
            valoresC.push(0);
            valuesExtraC.push([0]);
        });
        if (this.totalesGraficas[2] > 0) {
            this.clientesG = {
                titulo: 'Clientes',
                labels: this.lstConsultaActual5,
                valores: valoresC,
                labelsExtras: ['Eventos'],
                labelsExtrasHover: ['Eventos'],
                valuesExtras: [0],
                valuesExtrasHover: valuesExtraC
            };
            this.graficaTipos_p[4] = 'General';
        }
        else {
            this.clientesG = {
                titulo: 'Clientes',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Eventos'],
                labelsExtrasHover: ['Eventos'],
                valuesExtras: [0],
                valuesExtrasHover: [[0]],
            };
            this.graficaTipos_p[4] = 'Gris';
        }
    };
    AsignarRutaComponent.prototype.mapaClick = function () {
        this.show = false;
    };
    AsignarRutaComponent.prototype.asignar = function ($event) {
        this.infoWindowX = ($event.pageX - $event.offsetX + 56) + 'px';
        this.infoWindowY = ($event.pageY - $event.offsetY - 8) + 'px';
        this.show = !this.show;
        var ayudita = [];
        ayudita = this.itemsAux.slice();
        ayudita.splice(this.colorPin, 1); // Borro el elemento que ya meti a la lista
        this.listaClientes = ayudita;
    };
    AsignarRutaComponent.prototype.moverAlmacen = function () {
        var i = this.clickPosItem;
        console.log('i', i);
        console.log('al almacen ->', Object.assign({}, this.itemsAux3[i]));
        this.show = false;
        this.itemAlmacen = Object.assign({}, this.itemsAux3[i]);
        this.lstAlmacen.push(Object.assign({}, this.itemsAux3[i]));
        console.log('lstAlmacen', this.lstAlmacen); // // Se agrego
        console.log('lstAlmacen', this.itemsAux3); // // Se agrego
        this.itemsAux3.splice(i, 1);
        this.modalConfirm = true;
        // this.cambioRuta({el: null, target, source: null, sourceModel: null, targetModel: null, item});
    };
    AsignarRutaComponent.prototype.moverMensajero = function (x) {
        var i = this.clickPosItem;
        console.log('moverMensajero', i, x);
        var item = Object.assign(this.itemsAux3[i]);
        var target = { id: 'mensajero' + x };
        this.itemsAux3.splice(i, 1);
        this.rutaPG = this.itemsAux3;
        this.show = false;
        this.cambioRuta({ el: null, target: target, source: null, sourceModel: null, targetModel: null, item: item });
    };
    AsignarRutaComponent.prototype.cambioRuta = function (src) {
        var folios = src.item.folios;
        var lstFolios = Object.assign([], this.itemsAux[this.colorPin].folio);
        var newPosition = 0;
        var aux;
        var auxCoordenada;
        var auxPrioridad;
        var auxEventos;
        console.log('targetID ->', src);
        if (src.target.id == 'clientes') {
            console.log('clientes');
            for (var i = 0; i < src.sourceModel.length; i++) {
                for (var _i = 0, _a = this.itemsAgrupados; _i < _a.length; _i++) {
                    var itemAgrupado = _a[_i];
                    if (itemAgrupado.cliente == src.sourceModel[i].cliente && itemAgrupado.coordenadas[0] == src.sourceModel[i].coordenada[0] && itemAgrupado.coordenadas[1] == src.sourceModel[i].coordenada[1]) {
                        itemAgrupado.orden = i + 1;
                    }
                }
            }
            this.itemsAgrupados.sort(function (a, b) { return (a.orden > b.orden) ? 1 : ((b.orden > a.orden) ? -1 : 0); });
        }
        else if (src.target.id == 'almacen') {
            console.log('almacen');
            for (var _b = 0, folios_1 = folios; _b < folios_1.length; _b++) {
                var item = folios_1[_b];
                var lengthlstFolios = lstFolios.length;
                for (var i = 0; i < lengthlstFolios; i++) {
                    var folio = this.itemsAux[this.colorPin].folio[i].folio;
                    if (item == folio) {
                        aux = this.itemsAux[this.colorPin].folio[i];
                        auxCoordenada = this.itemsAux[this.colorPin].coordenada[i];
                        auxPrioridad = this.itemsAux[this.colorPin].prioridad[i];
                        auxEventos = this.itemsAux[this.colorPin].eventos[i];
                        this.itemsAux[this.colorPin].folio.splice(i, 1);
                        this.itemsAux[this.colorPin].coordenada.splice(i, 1);
                        this.itemsAux[this.colorPin].prioridad.splice(i, 1);
                        this.itemsAux[this.colorPin].eventos.splice(i, 1);
                        for (var x = 0; x < this.dataEventos.length; x++) {
                            if (this.dataEventos[x].folio == aux.folio) {
                                this.dataEventos.splice(x, 1);
                            }
                        }
                        i = -1;
                        lengthlstFolios--;
                    }
                }
            }
        }
        else {
            console.log('mensajero', src);
            var indexDestino = +(src.target.id.replace('mensajero', ''));
            for (var _c = 0, _d = this.itemsAgrupados; _c < _d.length; _c++) {
                var itemAgrupado = _d[_c];
                if (itemAgrupado.cliente == src.item.cliente && itemAgrupado.coordenadas[0] == src.item.coordenada[0] && itemAgrupado.coordenadas[1] == src.item.coordenada[1]) {
                    itemAgrupado.idMensajero = this.pendientesAgrupados[indexDestino].idMensajero;
                    itemAgrupado.mensajero = this.pendientesAgrupados[indexDestino].mensajero;
                    itemAgrupado.orden = this.pendientesAgrupados[indexDestino].folio.length;
                }
            }
            this.itemsAgrupados.sort(function (a, b) { return (a.orden > b.orden) ? 1 : ((b.orden > a.orden) ? -1 : 0); });
        }
        this.agruparDatosMensajero();
        this.rutasMensajero(this.colorPin);
        // this.agruparDatos(this.dataEventos);
        console.log(this.itemsAux);
    };
    AsignarRutaComponent.prototype.todos = function () {
        this.clickMensajero = false;
        this.mostrarRutas = false;
        this._coordenadas = this._coordenadasAux;
        this.marcadores = [];
        this.linea = [];
        this.positions = [];
        this.path = [];
        this.totales();
    };
    AsignarRutaComponent.prototype.totales = function () {
        var _this = this;
        var ayudaCoor = [];
        this.montoTotal = 0;
        this.clientesTotales = 0;
        this.eventosTotales = 0;
        this.rutaTotal = 0;
        this._separadorColor = [];
        this._coordenadas = [];
        // console.log(this.itemsAux);
        for (var _i = 0, _a = this.itemsAux; _i < _a.length; _i++) {
            var suma = _a[_i];
            this.montoTotal = this.montoTotal + suma.monto;
            this.clientesTotales = this.clientesTotales + suma.cliente;
            this.eventosTotales = this.eventosTotales + suma.Cobro + suma.Entrega + suma.EntregaE + suma.RecoleccionM + suma.Revision + suma.RevisionE;
        }
        for (var a = 0; a < this.itemsAux.length; a++) {
            ayudaCoor.push(this.itemsAux[a].coordenada);
        }
        if (!this.clickMensajero) {
            for (var b = 0; b < ayudaCoor.length; b++) {
                for (var c = 0; c < ayudaCoor[b].length; c++) {
                    this._separadorColor.push(b + 1);
                    if (ayudaCoor[b][c][0] == 0) {
                    }
                    else {
                        this._coordenadas.push(ayudaCoor[b][c]);
                        // console.log('Todos', this._coordenadas);
                    }
                }
            }
        }
        setTimeout(function () {
            for (var z = 0; z < _this.arregloDistancias.length; z++) {
                _this.rutaTotal = +(_this.rutaTotal + +(_this.arregloDistancias[z].km));
            }
        }, 1000);
    };
    AsignarRutaComponent.prototype.rutasMensajero = function (i) {
        var _this = this;
        console.log(i);
        this.show = false;
        this.clickMensajero = true;
        this.colorPin = i; // Da color a el pin y me sirve para no perder el mensajero seleccionado
        this.seleccionado = [];
        this.itemsAux3 = [];
        this._coordenadas = [];
        this.total_TET = 0;
        this.pendientesAgrupados3 = [];
        this.nombreMensajero = this.itemsAux[i].mensajero;
        this.seleccionado = this.itemsAux[i].folio;
        var index = 0;
        if (this.seleccionado != undefined && this.seleccionado.length > 0) {
            for (var _i = 0, _a = this.seleccionado; _i < _a.length; _i++) {
                var item = _a[_i];
                var repetido = false;
                var itemPEndiente = {
                    activo: false,
                    dias: '',
                    cliente: '',
                    coordenada: {},
                    calle: '',
                    estado: '',
                    evento: '',
                    eventosJuntos: [],
                    folios: [],
                    foliosPL: [],
                    foliosPC: [],
                    foliosPR: [],
                    foliosES: [],
                    foliosRM: [],
                    foliosRE: [],
                    horarioA: '',
                    horarioDe: '',
                    idAsignarMensajero: [],
                    idCliente: 0,
                    idMensajero: 0,
                    orden: 0,
                    zona: '',
                    monto: 0,
                    TET: 0,
                    KM: 0, Entrega: 0, Cobro: 0, Revision: 0, EntregaE: 0, RecoleccionM: 0, RevisionE: 0,
                    prioridad: '',
                    fee: '',
                    fechas: []
                };
                index++;
                itemPEndiente.activo = item.activo;
                itemPEndiente.dias = item.dias;
                itemPEndiente.cliente = item.cliente;
                itemPEndiente.coordenada = item.coordenadas;
                itemPEndiente.horarioDe = item.horarioDe;
                itemPEndiente.horarioA = item.horarioA;
                itemPEndiente.zona = item.zonas;
                itemPEndiente.prioridad = item.prioridad.indexOf('P3') > -1 ? 'P3' : item.prioridad.indexOf('P2') > -1 ? 'P2' : 'P1';
                itemPEndiente.folios = item.folios; //
                itemPEndiente.foliosPL = item.folios.filter(function (elem, index, self) {
                    return elem.indexOf('PL') > -1;
                });
                itemPEndiente.foliosPC = item.folios.filter(function (elem, index, self) {
                    return elem.indexOf('PC') > -1;
                });
                itemPEndiente.foliosPR = item.folios.filter(function (elem, index, self) {
                    return elem.indexOf('PR') > -1;
                });
                itemPEndiente.foliosES = item.folios.filter(function (elem, index, self) {
                    return elem.indexOf('ES') > -1;
                });
                itemPEndiente.foliosRM = item.folios.filter(function (elem, index, self) {
                    return elem.indexOf('RM') > -1;
                });
                itemPEndiente.foliosRE = item.folios.filter(function (elem, index, self) {
                    return elem.indexOf('RE') > -1;
                });
                itemPEndiente.evento = item.evento; //
                itemPEndiente.estado = item.estado; //
                itemPEndiente.orden = index; //
                itemPEndiente.monto = item.monto; //
                itemPEndiente.idAsignarMensajero = item.idAsignarMensajero; //
                itemPEndiente.idMensajero = item.idMensajero; //
                itemPEndiente.idCliente = item.idCliente; //
                itemPEndiente.eventosJuntos = item.eventos;
                itemPEndiente.calle = item.calle;
                itemPEndiente.Entrega = item.Entrega;
                itemPEndiente.Cobro = item.Cobro;
                itemPEndiente.Revision = item.Revision;
                itemPEndiente.EntregaE = item.EntregaE;
                itemPEndiente.RecoleccionM = item.RecoleccionM;
                itemPEndiente.RevisionE = item.RevisionE;
                itemPEndiente.fee = item.fee;
                itemPEndiente.fechas = item.fechas;
                this.pendientesAgrupados3.push(itemPEndiente);
                // }
            }
        }
        this.itemsAux3 = this.itemsAux3.concat(this.pendientesAgrupados3);
        var _loop_1 = function (dt) {
            if (dt.TET > 0) {
                this_1._asignarMensajeroService.calculoDistancia(this_1._proquifa, dt.coordenada).subscribe(function (data) {
                    var min = data.rows[0].elements[0].duration['text'].split('');
                    var km = data.rows[0].elements[0].distance['text'].split('');
                    dt.TET = min[0];
                    dt.KM = km[0];
                });
            }
        };
        var this_1 = this;
        for (var _b = 0, _c = this.itemsAux3; _b < _c.length; _b++) {
            var dt = _c[_b];
            _loop_1(dt);
        }
        console.log('Select ->', this.itemsAux3);
        // console.log('itemsAux ->', this.itemsAux);
        if (this.otroMensajero.length > 0) {
            if (this.otroMensajero['idMensajero'] == this.itemsAux3['idMensajero']) {
                this.itemsAux3.push(this.otroMensajero[0]);
                this.otroMensajero = [];
            }
        }
        this.rutaPG = this.itemsAux3; // Para guardarla
        this.pendientesAgrupados3 = [];
        this.linea = [];
        this.marcadores = [];
        this.positions = [];
        this.path = [];
        this.rutaSeleccionada = [];
        for (var _d = 0, _e = this.itemsAux3; _d < _e.length; _d++) {
            var ruta = _e[_d];
            this.zoom = 10; // Zoom al hacer click
            this.rutaSeleccionada.push(ruta.coordenada);
        }
        setTimeout(function () {
            for (var _i = 0, _a = _this.itemsAux3; _i < _a.length; _i++) {
                var time = _a[_i];
                // console.log(time['TET']);
                _this.total_TET = _this.total_TET + +time['TET'];
            }
        }, 1000);
        this.rutaAux = this.rutaSeleccionada.slice(); // Copy
        console.log('rutaAux', this.rutaAux);
        this.linea.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la posición 0
        for (var j = 0; j < this.rutaSeleccionada.length; j++) {
            this.marcadores.push(this.rutaSeleccionada[j]);
            this.linea.push({ lat: this.marcadores[j][0], lng: this.marcadores[j][1] });
        }
        this.linea.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la posición 0
        // setTimeout(() => {
        this.marcadores.forEach(function (ma, index) {
            if (ma[0] > 0) {
                _this.positions.push([ma, index]);
            }
        });
        for (var _f = 0, _g = this.linea; _f < _g.length; _f++) {
            var li = _g[_f];
            if (li['lat'] > 0) {
                this.path.push(li);
            }
        }
        this.mostrarRutas = true;
    };
    AsignarRutaComponent.prototype.info = function (_a, num) {
        var marker = _a.target;
        if (marker.map != undefined) {
            this.show = false;
            marker.nguiMapComponent.openInfoWindow('iw', marker);
            this.nombreC = this.itemsAux3[num].cliente;
            this.zonaC = this.itemsAux3[num].zona;
            this.direccionC = this.itemsAux3[num].calle;
            this.totaEventosC = this.itemsAux3[num].eventosJuntos.length;
            this.eventosC = this.itemsAux3[num].eventosJuntos;
            this.montoC = this.itemsAux3[num].monto;
            this.idCliente = this.itemsAux3[num].idCliente;
            this.numAyuda = num;
            this.clickPosItem = num;
            // console.log(this.numAyuda);
        }
    };
    AsignarRutaComponent.prototype.infoWindows = function (target, num) {
        this.show = false;
    };
    AsignarRutaComponent.prototype.info1 = function (_a) {
        var marker = _a.target;
        marker.nguiMapComponent.openInfoWindow('iw2', marker);
    };
    AsignarRutaComponent.prototype.info2 = function (_a, num) {
        var marker = _a.target;
        marker.nguiMapComponent.openInfoWindow('iw3', marker);
        for (var _i = 0, _b = this.items; _i < _b.length; _i++) {
            var todos = _b[_i];
            this._todos.push(todos);
        }
        this.nombre_C = this._todos[num].cliente;
        this.zona_C = this._todos[num].zona;
        this.direccion_C = this._todos[num].calle;
        this.eventos_C = this._todos[num].evento;
        this.mensajero_C = this._todos[num].mensajero;
        this.monto_C = this._todos[num].monto;
        this.idCliente_C = this._todos[num].idCliente;
    };
    /****************Metodo que recibe confirmacion para guardar en almacen**************/
    AsignarRutaComponent.prototype.aceptModalConfirm = function () {
        var _this = this;
        var foliosAlmacen = [];
        var foliosNuevo = [];
        if (this.itemAlmacen.Entrega != null && this.itemAlmacen.Entrega > 0) {
            if (this.itemAlmacen.Revision > 0 || this.itemAlmacen.Cobro > 0 || this.itemAlmacen.RevisionE > 0 || this.itemAlmacen.RecoleccionM) {
                this.eliminarItemAlmacen();
                var listaAux = this.itemAuxiliar; // listaAux se utilizara para agregar a la lista de los que no van a almacen
                this.itemAuxiliar.Entrega = 0; // / Se cambia a 0 los que pertenecen a entrega
                for (var i = 0; i < listaAux.folios.length; i++) {
                    var inicalesFolio = listaAux.folios[i].split('-');
                    if (inicalesFolio[0] === 'PL' || inicalesFolio === 'ET') {
                        foliosAlmacen[foliosAlmacen.length] = listaAux.folios[i];
                    }
                    else {
                        foliosNuevo[foliosNuevo.length] = listaAux.folios[i];
                    }
                }
                this.itemAlmacen.folios = foliosAlmacen; // / Se agrega el que solo va a almacen.
                this.lstAlmacen.push(this.itemAlmacen);
            }
            var clientesAux_1 = [];
            console.log(this.lstAlmacen);
            this.eventosAlmacen = 0;
            this.clientesAlmacen = 0;
            this.lstAlmacen.forEach(function (item, index) {
                if (clientesAux_1.indexOf(item.cliente) == -1) {
                    clientesAux_1.push(item.cliente);
                    _this.clientesAlmacen += 1;
                }
                _this.eventosAlmacen += item.Entrega;
                _this.lstAlmacen[index].zona = null;
            });
            this.cambioRuta({
                el: null,
                target: { id: 'almacen' },
                source: null,
                sourceModel: null,
                targetModel: null,
                item: this.itemAlmacen
            });
        }
        else {
            this.itemsAux3.splice(this.itemAlmacen.orden - 1, 0, this.itemAlmacen);
            this.eliminarItemAlmacen();
            this.itemAlmacen = null;
            this.activarAlerta = true;
            this.mensaje = 'Es imposible reasignarlo en almacén. No es un evento de Entrega';
        }
        this.modalConfirm = false;
    };
    AsignarRutaComponent.prototype.closeModalConfirm = function () {
        this.mandarAlmacen = [];
        this.modalConfirm = false;
        this.itemsAux3.splice(this.itemAlmacen.orden - 1, 0, this.itemAlmacen);
        this.itemAlmacen = null;
        this.lstAlmacen.pop();
    };
    // Graficas
    AsignarRutaComponent.prototype.mostrarGraficas = function () {
        this.show_mapa = true;
        this.show_grafica = false;
        this.coreComponent.openModal(0);
        this.cargaDatos();
    };
    AsignarRutaComponent.prototype.cargaDatos = function () {
        var _this = this;
        console.log('CargaDatos Event');
        this.itemsAux = [];
        this.items = [];
        this.pendientesAgrupados = [];
        this.itemsAgrupados = [];
        this._asignarMensajeroService.obtenerDetalle().subscribe(function (data) {
            console.log('data', data.current);
            _this.dataEventos = data.current;
            _this.agruparDatos(_this.dataEventos);
        });
    };
    AsignarRutaComponent.prototype.agruparDatos = function (data) {
        console.log('data', data);
        this.items = Object.assign([], data);
        console.log('items', this.items);
        this.items.sort(function (a, b) { return (a.orden > b.orden) ? 1 : ((b.orden > a.orden) ? -1 : 0); });
        console.log('items.Order', this.items);
        /*Agrupar Items*/
        var itemsAlmacen = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            var itemAux = {};
            if (item.zona != null) {
                if (this.itemsAgrupados.length == 0) {
                    itemAux.activo = item.activo;
                    itemAux.calle = item.calle;
                    itemAux.cliente = item.cliente;
                    itemAux.idCliente = item.idCliente;
                    itemAux.estado = item.estado;
                    itemAux.horarioDe = item.horarioDe;
                    itemAux.horarioA = item.horarioA;
                    itemAux.prioridad = [item.prioridad];
                    itemAux.eventos = [[item.evento, item.prioridad]];
                    itemAux.folios = [item.folio];
                    itemAux.idAsignarMensajero = [item.idAsignarMensajero];
                    if (item.activo) {
                        itemAux.coordenadas = [item.latitud, item.longitud];
                    }
                    else {
                        itemAux.coordenadas = [0, 0];
                    }
                    itemAux.zonas = item.zona;
                    itemAux.mensajero = item.mensajero;
                    itemAux.idMensajero = item.idMensajero;
                    itemAux.usuario = item.usuario;
                    itemAux.monto = item.monto;
                    itemAux.Entrega = item.evento == 'Entrega' ? 1 : 0; // Tipo Evento
                    itemAux.Cobro = item.evento == 'Cobro' ? 1 : 0;
                    itemAux.Revision = item.evento == 'Revisiones' ? 1 : 0;
                    itemAux.EntregaE = item.evento == 'Entrega Especial' ? 1 : 0;
                    itemAux.RecoleccionM = item.evento == 'Recoleccion de Material' ? 1 : 0;
                    itemAux.RevisionE = item.evento == 'Revision Especial' ? 1 : 0;
                    itemAux.orden = item.orden;
                    itemAux.fee = item.fee;
                    itemAux.fechas = [item.fee];
                    this.itemsAgrupados.push(itemAux);
                }
                else {
                    var repetido = false;
                    for (var _b = 0, _c = this.itemsAgrupados; _b < _c.length; _b++) {
                        var itemAgrupado = _c[_b];
                        if (itemAgrupado.cliente == item.cliente && itemAgrupado.coordenadas[0] == item.latitud && itemAgrupado.coordenadas[1] == item.longitud) {
                            repetido = true;
                            itemAgrupado.prioridad.push(item.prioridad);
                            itemAgrupado.eventos.push([item.evento, item.prioridad]);
                            itemAgrupado.folios.push(item.folio);
                            itemAgrupado.idAsignarMensajero.push(item.idAsignarMensajero); //
                            itemAgrupado.fechas.push(item.fee);
                            var fechaForma = void 0;
                            var fechaAux = void 0;
                            var fechaComparar = void 0;
                            if (item.fee !== undefined && item.fee !== null) {
                                fechaForma = item.fee.split('/');
                                fechaAux = new Date(fechaForma[2] + ',' + fechaForma[1] + ',' + fechaForma[0]);
                            }
                            else {
                                fechaAux = '';
                            }
                            if (itemAgrupado.fee !== undefined && itemAgrupado.fee !== null) {
                                fechaForma = itemAgrupado.fee.split('/');
                                fechaComparar = new Date(fechaForma[2] + ',' + fechaForma[1] + ',' + fechaForma[0]);
                            }
                            else {
                                fechaComparar = '';
                            }
                            if (fechaAux < fechaComparar) {
                                itemAgrupado.fee = item.fee;
                            }
                            if (itemAgrupado.zonas == '') {
                                itemAgrupado.zonas += item.zona;
                            }
                            else if (itemAgrupado.zonas.indexOf(item.zona) == -1) {
                                itemAgrupado.zonas += ',' + item.zona;
                            }
                            itemAgrupado.monto += item.monto;
                            switch (item.evento) {
                                case 'Entrega':
                                    itemAgrupado.Entrega += 1;
                                    break;
                                case 'Cobro':
                                    itemAgrupado.Cobro += 1;
                                    break;
                                case 'Revisiones':
                                    itemAgrupado.Revision += 1;
                                    break;
                                case 'Entrega Especial':
                                    itemAgrupado.EntregaE += 1;
                                    break;
                                case 'Recoleccion de Material':
                                    itemAgrupado.RecoleccionM += 1;
                                    break;
                                case 'Revision Especial':
                                    itemAgrupado.RevisionE += 1;
                                    break;
                            }
                        }
                    }
                    if (!repetido) {
                        itemAux.activo = item.activo;
                        itemAux.dias = item.dias;
                        itemAux.calle = item.calle;
                        itemAux.cliente = item.cliente;
                        itemAux.idCliente = item.idCliente;
                        itemAux.horarioDe = item.horarioDe;
                        itemAux.horarioA = item.horarioA;
                        itemAux.estado = item.estado;
                        itemAux.prioridad = [item.prioridad];
                        itemAux.eventos = [[item.evento, item.prioridad]];
                        itemAux.folios = [item.folio];
                        itemAux.idAsignarMensajero = [item.idAsignarMensajero];
                        if (item.activo) {
                            itemAux.coordenadas = [item.latitud, item.longitud];
                        }
                        else {
                            itemAux.coordenadas = [0, 0];
                        }
                        itemAux.zonas = item.zona;
                        itemAux.mensajero = item.mensajero;
                        itemAux.idMensajero = item.idMensajero;
                        itemAux.usuario = item.usuario;
                        itemAux.monto = item.monto;
                        itemAux.Entrega = item.evento == 'Entrega' ? 1 : 0; // Tipo Evento
                        itemAux.Cobro = item.evento == 'Cobro' ? 1 : 0;
                        itemAux.Revision = item.evento == 'Revisiones' ? 1 : 0;
                        itemAux.EntregaE = item.evento == 'Entrega Especial' ? 1 : 0;
                        itemAux.RecoleccionM = item.evento == 'Recoleccion de Material' ? 1 : 0;
                        itemAux.RevisionE = item.evento == 'Revision Especial' ? 1 : 0;
                        itemAux.orden = item.orden;
                        itemAux.fee = item.fee;
                        itemAux.fechas = [item.fee];
                        this.itemsAgrupados.push(itemAux);
                    }
                }
            }
            else {
                itemsAlmacen.push(item);
            }
        }
        console.log('itemsAgrupados', this.itemsAgrupados);
        this.agruparDatosMensajero();
    };
    AsignarRutaComponent.prototype.agruparDatosMensajero = function () {
        var _this = this;
        this.pendientesAgrupados = [];
        this.itemsAux = [];
        var itemPEndiente = {
            activo: false,
            dias: '',
            mensajero: 'Sin Asignar',
            prioridad: [],
            cliente: 0,
            folio: [],
            eventos: [],
            evento: '',
            zona: '',
            color: 0,
            monto: 0,
            ruta: 0,
            coordenada: [],
            idMensajero: 0,
            Entrega: 0,
            Cobro: 0,
            Revision: 0,
            EntregaE: 0,
            RecoleccionM: 0,
            RevisionE: 0,
            nombreCliente: [],
            fechas: []
        };
        this.pendientesAgrupados.push(itemPEndiente);
        /*Crea la lista de mensajeros*/
        for (var _i = 0, _a = this.lstAux['Mensajero']; _i < _a.length; _i++) {
            var item = _a[_i];
            var itemPEndiente_1 = {
                activo: false,
                dias: '',
                mensajero: item.mensajero,
                prioridad: [],
                cliente: 0,
                folio: [],
                eventos: [],
                evento: '',
                zona: '',
                color: 0,
                monto: 0,
                ruta: 0,
                coordenada: [],
                idMensajero: item.totalMensajeros,
                Entrega: 0,
                Cobro: 0,
                Revision: 0,
                EntregaE: 0,
                RecoleccionM: 0,
                RevisionE: 0,
                nombreCliente: [],
                fee: '',
                fechas: []
            };
            this.pendientesAgrupados.push(itemPEndiente_1);
        }
        if (this.itemsAgrupados != undefined && this.itemsAgrupados.length > 0) {
            var i = 0;
            for (var _b = 0, _c = this.itemsAgrupados; _b < _c.length; _b++) {
                var item = _c[_b];
                var repetido = false;
                var itemPEndiente_2 = {
                    activo: false,
                    dias: '',
                    mensajero: '',
                    prioridad: [],
                    cliente: 0,
                    folio: [],
                    eventos: [],
                    evento: '',
                    zona: '',
                    color: 0,
                    monto: 0,
                    ruta: 0,
                    coordenada: [],
                    idMensajero: 0,
                    Entrega: 0,
                    Cobro: 0,
                    Revision: 0,
                    EntregaE: 0,
                    RecoleccionM: 0,
                    RevisionE: 0,
                    fee: '',
                    fechas: []
                };
                // if (item.zona != null) {
                if (this.pendientesAgrupados != undefined && this.pendientesAgrupados.length > 0) {
                    for (var _d = 0, _e = this.pendientesAgrupados; _d < _e.length; _d++) {
                        var itemPA = _e[_d];
                        if (itemPA.idMensajero == item.idMensajero) {
                            repetido = true;
                            itemPA.activo = item.activo;
                            itemPA.dias = item.dias;
                            itemPA.folio.push(item);
                            itemPA.eventos = itemPA.eventos.concat(item.eventos);
                            itemPA.coordenada.push(item.coordenadas);
                            itemPA.prioridad = itemPA.prioridad.concat(item.prioridad);
                            itemPA.monto = itemPA.monto + item.monto;
                            itemPA.cliente++;
                            itemPA.Entrega += item.Entrega; // Tipos evento
                            itemPA.Cobro += item.Cobro;
                            itemPA.Revision += item.Revision;
                            itemPA.EntregaE += item.EntregaE;
                            itemPA.RecoleccionM += item.RecoleccionM;
                            itemPA.RevisionE += item.RevisionE;
                            itemPA.fechas.push(item.fechas);
                            for (var _f = 0, _g = item.zonas.split(','); _f < _g.length; _f++) {
                                var zona = _g[_f];
                                if (itemPA.zona == '') {
                                    itemPA.zona += zona;
                                }
                                else if (itemPA.zona.indexOf(zona) == -1) {
                                    itemPA.zona += ',' + zona;
                                }
                            }
                        }
                    }
                }
                this.inicioVista = false;
            }
        }
        console.log('this.pendientesAgrupados', this.pendientesAgrupados);
        this.itemsAux = this.itemsAux.concat(this.pendientesAgrupados);
        setTimeout(function () {
            _this.calcular(_this.itemsAux);
            _this.separarEventos(_this.itemsAux);
        }, 2000);
        console.log(this.itemsAux);
        this.coreComponent.closeModal(0);
    };
    AsignarRutaComponent.prototype.separarEventos = function (lista) {
        var numEntrega = 0;
        var numCobro = 0;
        var numRevision = 0;
        var numEntregaE = 0;
        var numRecoleccionM = 0;
        this.arregloEventos = [];
        for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
            var eventos = lista_1[_i];
            for (var _a = 0, _b = eventos.eventos; _a < _b.length; _a++) {
                var tipo = _b[_a];
                if (tipo[0] == 'Entrega') {
                    numEntrega = numEntrega + 1;
                }
                else if (tipo[0] == 'Cobro') {
                    numCobro = numCobro + 1;
                }
                else if (tipo[0] == 'Revisiones') {
                    numRevision = numRevision + 1;
                }
                else if (tipo[0] == 'Entrega Especial') {
                    numEntregaE = numEntregaE + 1;
                }
                else if (tipo[0] == 'Recoleccion de Material') {
                    numRecoleccionM = numRecoleccionM + 1;
                }
                else if (tipo[0] == 'Revision Especial') {
                    numRecoleccionM = numRecoleccionM + 1;
                }
            }
        }
        this.arregloEventos.push({
            Entrega: numEntrega,
            Cobro: numCobro,
            Revision: numRevision,
            EntregaE: numEntregaE,
            RecoleccionM: numRecoleccionM
        });
    };
    AsignarRutaComponent.prototype.calcular = function (lista) {
        var _this = this;
        this.arregloDistancias = [];
        this.arregloDistancias2 = [];
        for (var a = 0; a < lista.length; a++) {
            var primero = true;
            for (var b = 0; b < lista[a].coordenada.length; b++) {
                if (lista[a].coordenada[b][0] != 0 && lista[a].coordenada[b][1] != 0) {
                    if (primero) {
                        primero = false;
                        this.dist_time(this._proquifa, lista[a].coordenada[b], a);
                    }
                    else if (!primero && lista[a].coordenada[b] != lista[a].coordenada[b - 1]) {
                        this.dist_time(lista[a].coordenada[b - 1], lista[a].coordenada[b], a);
                    }
                    if ((b + 1) == lista[a].coordenada.length) {
                        this.dist_time(lista[a].coordenada[b], this._proquifa, a);
                    }
                }
            }
        }
        setTimeout(function () {
            // console.log('Ya esta la suma');
            // console.log(this.arregloDistancias2);
            var pendientes = new Array(_this.itemsAux.length);
            for (var i = 0; i < pendientes.length; i++) {
                pendientes[i] = { orden: i, km: 0, kmT: [], min: 0, minT: [] };
            }
            if (_this.arregloDistancias2 != undefined && _this.arregloDistancias2.length > 0) {
                console.log('arregloDistancias2', _this.arregloDistancias2);
                for (var _i = 0, _a = _this.arregloDistancias2; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var repetido = false;
                    var items = { orden: 0, km: 0, kmT: [], min: 0, minT: [] };
                    if (pendientes != undefined && pendientes.length > 0) {
                        for (var _b = 0, pendientes_1 = pendientes; _b < pendientes_1.length; _b++) {
                            var itemPA = pendientes_1[_b];
                            if (itemPA.orden == item.orden) {
                                repetido = true;
                                itemPA.kmT.push(item.km); //
                                itemPA.minT.push(item.min); //
                                itemPA.min = itemPA.min + +item.min; //
                                itemPA.km = itemPA.km + +item.km; //
                            }
                        }
                        if (!repetido) {
                            items.orden = item.orden; //
                            items.min = items.min + +item.min;
                            items.minT.push(item['min']);
                            items.km = items.km + +item.km;
                            items.kmT.push(item['km']);
                            pendientes.splice(items.orden, 0, items);
                        }
                    }
                    else {
                        items.orden = item.orden; //
                        items.min = items.min + +item.min;
                        items.minT.push(item['min']);
                        items.km = items.km + +item.km;
                        items.kmT.push(item['km']);
                        pendientes.splice(items.orden, 0, items);
                    }
                }
            }
            _this.arregloDistancias = _this.arregloDistancias.concat(pendientes);
            _this.arregloDistancias2 = [];
            console.log(_this.arregloDistancias);
            _this.totales();
        }, 2000);
    };
    AsignarRutaComponent.prototype.dist_time = function (coord1, coord2, orden) {
        var _this = this;
        this._asignarMensajeroService.calculoDistancia(coord1, coord2).subscribe(function (data) {
            // console.log(data);
            var km = data.rows[0].elements[0].distance['text'].split('');
            var min = data.rows[0].elements[0].duration['text'].split('');
            _this.arregloDistancias2.push({ km: km[0], orden: orden, tiempo: min });
        }, function (error) {
            console.log('Error:', error);
        });
    };
    AsignarRutaComponent.prototype.calcularDistancia = function (lat1, lon1, lat2, lon2) {
        // *** Fórmula del Haversine ***
        // Calcula la polyline de punto a ---- b (No sirve para rutas)
        if (lat1 == null || lat1 == undefined) {
            lat1 = 0;
        }
        if (lon1 == null || lon1 == undefined) {
            lon1 = 0;
        }
        if (lat2 == null || lat2 == undefined) {
            lat2 = 0;
        }
        if (lon2 == null || lon2 == undefined) {
            lon2 = 0;
        }
        // console.log('lat1:_', lat1,'lng1:_', lon1,'lat2:_', lat2,'lng2:_', lon2 );
        var R = 6371; // Tierra
        var dLat = (lat2 - lat1) * Math.PI / 180; // Diferencia
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = 0.5 - Math.cos(dLat) / 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * (1 - Math.cos(dLon)) / 2; // Derivacion
        return R * 2 * Math.asin(Math.sqrt(a));
    };
    AsignarRutaComponent.prototype.guardarRuta = function () {
        var _this = this;
        var rutaGuardada = [];
        var posInicial = this.colorPin;
        console.log(' this.itemsAux', this.itemsAux);
        for (var i = 0; i < this.itemsAux.length; i++) {
            var item = {};
            this.rutasMensajero(i);
            for (var a = 0; a < this.itemsAux3.length; a++) {
                if (this.itemsAux3[a].activo) {
                    for (var b = 0; b < this.itemsAux3[a].idAsignarMensajero.length; b++) {
                        item.orden = a + 1;
                        item.idAsignarMensajero = this.itemsAux3[a].idAsignarMensajero[b];
                        item.folio = this.itemsAux3[a].folios[b];
                        item.zona = this.itemsAux3[a].zona;
                        item.idMensajero = this.itemsAux3[a].idMensajero;
                        item.idCliente = this.itemsAux3[a].idCliente;
                        rutaGuardada.push(Object.assign({}, item));
                    }
                }
            }
        }
        this.rutasMensajero(posInicial);
        // console.log(rutaGuardada);
        this.publicar = false;
        this._asignarMensajeroService.actualizarRuta(rutaGuardada).subscribe(function (data) {
            _this.publicarArr.push(rutaGuardada);
        });
    };
    AsignarRutaComponent.prototype.publicarA = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this.bloquearBtn = true;
        var listaMensajeros = new Array(this.itemsAux.length);
        var posInicial = this.colorPin;
        for (var i = 0; i < this.itemsAux.length - 1; i++) {
            listaMensajeros[i] = [];
            var item = {};
            this.rutasMensajero(i + 1);
            for (var a = 0; a < this.itemsAux3.length; a++) {
                item.folios = this.itemsAux3[a].folios;
                item.zona = this.itemsAux3[a].zona;
                item.idMensajero = this.itemsAux3[a].idMensajero;
                item.idCliente = this.itemsAux3[a].idCliente;
                listaMensajeros[i].push(Object.assign({}, item));
            }
        }
        console.log('listaMensajeros', listaMensajeros);
        this.rutasMensajero(posInicial);
        this._asignarMensajeroService.publicarRutas(listaMensajeros).subscribe(function (data) {
            _this.coreComponent.closeModal(0);
            _this.bloquearBtn = false;
            _this.show_mapa = false;
            _this.show_grafica = true;
            _this.itemsAux = [];
            _this.itemsAux3 = [];
            _this.arregloDistancias = [];
            _this.arregloDistancias2 = [];
            _this.mostrarRutas = false;
            _this.marcadores = [];
            _this.linea = [];
            _this.positions = [];
            _this.path = [];
            _this.lstAux = [];
            _this.obtenerDatosGraficasP();
        });
    };
    AsignarRutaComponent.prototype.publicarA2 = function () {
        var _this = this;
        var ayudita = [];
        ayudita = this.itemsAux.slice();
        ayudita.splice(this.colorPin, 1); // Borro el elemento que ya meti a la lista
        for (var _i = 0, ayudita_1 = ayudita; _i < ayudita_1.length; _i++) {
            var lista = ayudita_1[_i];
            var pendientes = [];
            if (lista.folio != undefined && lista.folio.length > 0) {
                for (var _a = 0, _b = lista.folio; _a < _b.length; _a++) {
                    var item = _b[_a];
                    var repetido = false;
                    var itemPEndiente = {
                        idAsignarMensajero: 0,
                        idCliente: 0,
                        idMensajero: 0,
                        orden: 0,
                        zona: '',
                        evento: '',
                        folio: ''
                    };
                    var i = 0;
                    if (pendientes != undefined && pendientes.length > 0) {
                        for (var _c = 0, pendientes_2 = pendientes; _c < pendientes_2.length; _c++) {
                            var itemPA = pendientes_2[_c];
                            if (itemPA.cliente == item.cliente) {
                                repetido = true;
                            }
                        }
                        if (!repetido) {
                            itemPEndiente.folio = item.folio; //
                            itemPEndiente.zona = item.zona;
                            itemPEndiente.orden = i++; //
                            itemPEndiente.evento = item.evento; //
                            itemPEndiente.idAsignarMensajero = item.idAsignarMensajero; //
                            itemPEndiente.idMensajero = item.idMensajero; //
                            itemPEndiente.idCliente = item.idCliente; //
                            pendientes.push(itemPEndiente);
                        }
                    }
                    else {
                        itemPEndiente.evento = item.folio; //
                        itemPEndiente.folio = item.folio; //
                        itemPEndiente.zona = item.zona;
                        itemPEndiente.orden = i++; //
                        itemPEndiente.evento = item.evento; //
                        itemPEndiente.idAsignarMensajero = item.idAsignarMensajero; //
                        itemPEndiente.idMensajero = item.idMensajero; //
                        itemPEndiente.idCliente = item.idCliente; //
                        pendientes.push(itemPEndiente);
                    }
                }
            }
            // console.log(pendientes);
            var rutaGuardada = [];
            for (var a = 0; a < pendientes.length; a++) {
                pendientes[a].orden = a;
                rutaGuardada.push(pendientes[a]);
            }
            // console.log(rutaGuardada);
            this.publicarArr.push(rutaGuardada);
        }
        // console.log(JSON.stringify(this.publicarArr));
        this._asignarMensajeroService.publicarRutas(this.publicarArr).subscribe(function (data) {
            _this.show_mapa = false;
            _this.show_grafica = true;
            _this.itemsAux3 = [];
            _this.arregloDistancias = [];
            _this.arregloDistancias2 = [];
            _this.mostrarRutas = false;
            _this.marcadores = [];
            _this.linea = [];
            _this.positions = [];
            _this.path = [];
            _this.lstAux = [];
        });
    };
    AsignarRutaComponent.prototype.regresar = function () {
        this.show_mapa = false;
        this.show_grafica = true;
        this.itemsAux3 = [];
        this.arregloDistancias = [];
        this.arregloDistancias2 = [];
        this.mostrarRutas = false;
        this.marcadores = [];
        this.linea = [];
        this.positions = [];
        this.path = [];
        this.lstAux = [];
        this.itemsAux = [];
        this.items = [];
        this.itemsAgrupados = [];
        this.obtenerDatosGraficasP();
    };
    AsignarRutaComponent.prototype.datosGrafica = function () {
        for (var _i = 0, _a = this.lstAux['Mensajero']; _i < _a.length; _i++) {
            var items = _a[_i];
            this.llenarGraficas(this.mensajeroG, items, 'Mensajeros');
        }
        for (var _b = 0, _c = this.lstAux['Zonas']; _b < _c.length; _b++) {
            var items = _c[_b];
            this.llenarGraficas(this.zonaG, items, 'Zona');
        }
        /*this.zonaG.valuesExtras[0] = Object.assign(this.mensajeroG.valuesExtras[1]);
        this.zonaG.valuesExtras[1] = Object.assign(this.mensajeroG.valuesExtras[0]);*/
        for (var _d = 0, _e = this.lstAux['Eventos']; _d < _e.length; _d++) {
            var items = _e[_d];
            this.llenarGraficas(this.eventosG, items, 'Eventos');
        }
        for (var _f = 0, _g = this.lstAux['Clientes']; _f < _g.length; _f++) {
            var items = _g[_f];
            this.llenarGraficas(this.clientesG, items, 'Clientes');
        }
        for (var _h = 0, _j = this.lstAux['Prioridades']; _h < _j.length; _h++) {
            var items = _j[_h];
            this.llenarGraficas(this.prioridadesG, items, 'Prioridades');
        }
    };
    AsignarRutaComponent.prototype.llenarGraficas = function (total, elemento, eleccion) {
        switch (eleccion) {
            case 'Mensajeros':
                var posicion1 = this.lstConsultaActual.indexOf(elemento.mensajero);
                if (this.lstmensajeroG.indexOf(elemento.mensajero) === -1 && (elemento.totalClientes > 0 && elemento.totalEventos > 0)) {
                    total.valores[posicion1] += elemento.totalEventos;
                }
                total.valuesExtrasHover[posicion1][0] += elemento.totalClientes;
                total.valuesExtrasHover[posicion1][1] += elemento.totalProveedores;
                total.valuesExtrasHover[posicion1][2] += elemento.totalEventos;
                break;
            case 'Zona':
                var posicion2 = this.lstConsultaActual2.indexOf(elemento.zona);
                if (this.lstzonaG.indexOf(elemento.zona) === -1) {
                    total.valores[posicion2] += elemento.totalEventos;
                }
                total.valuesExtrasHover[posicion2][0] += elemento.totalClientes;
                total.valuesExtrasHover[posicion2][1] += elemento.totalProveedores;
                total.valuesExtrasHover[posicion2][2] += elemento.totalMensajeros;
                break;
            case 'Eventos':
                var posicion3 = this.lstConsultaActual3.indexOf(elemento.evento);
                if (this.lsteventosG.indexOf(elemento.evento) === -1) {
                    total.valores[posicion3] += elemento.totalEventos;
                }
                total.valuesExtrasHover[posicion3][0] += elemento.totalClientes;
                total.valuesExtrasHover[posicion3][1] += elemento.totalProveedores;
                break;
            case 'Prioridades':
                var posicion4 = this.lstConsultaActual4.indexOf(elemento.prioridad);
                if (this.lstprioridadesG.indexOf(elemento.prioridad) === -1) {
                    total.valores[posicion4] += elemento.totalEventos;
                }
                total.valuesExtrasHover[posicion4][0] += elemento.totalClientes;
                total.valuesExtrasHover[posicion4][1] += elemento.totalProveedores;
                total.valuesExtrasHover[posicion4][2] += elemento.totalEventos;
                break;
            case 'Clientes':
                var posicion5 = this.lstConsultaActual5.indexOf(elemento.cliente);
                if (this.lstclientesG.indexOf(elemento.cliente) === -1) {
                    total.valores[posicion5] += elemento.totalEventos;
                }
                total.valuesExtras[0] += elemento.totalEventos;
                total.valuesExtrasHover[posicion5][0] += elemento.totalEventos;
                break;
        }
    };
    AsignarRutaComponent.prototype.getDatos = function (lstTemporal) {
        this.lstConsultaActual = [];
        var temporal = [];
        var tempoAux2 = [];
        if (lstTemporal.length > 0) {
            temporal.push(lstTemporal[0]);
        }
        lstTemporal.forEach(function (temp1) {
            var repetido = false;
            var contador = 0;
            temporal.forEach(function (temp) {
                if (temp.mensajero === temp1.mensajero) {
                    contador += 1;
                    if (contador > 0) {
                        repetido = true;
                    }
                }
            });
            if (!repetido) {
                temporal.push(temp1);
            }
        });
        temporal.forEach(function (temp) {
            tempoAux2.push(temp.mensajero);
        });
        this.lstConsultaActual = [];
        this.lstConsultaActual = tempoAux2;
        // console.log(this.lstConsultaActual);
        temporal = [];
        tempoAux2 = [];
        if (lstTemporal.length > 0) {
            temporal.push(lstTemporal[0]);
        }
        temporal.forEach(function (temp) {
            tempoAux2.push(temp.fpor);
        });
    };
    AsignarRutaComponent.prototype.getDatos2 = function (lstTemporal) {
        this.lstConsultaActual2 = [];
        var temporal = [];
        var tempoAux2 = [];
        if (lstTemporal.length > 0) {
            temporal.push(lstTemporal[0]);
        }
        lstTemporal.forEach(function (temp1) {
            var repetido = false;
            var contador = 0;
            temporal.forEach(function (temp) {
                if (temp.zona === temp1.zona) {
                    contador += 1;
                    if (contador > 0) {
                        repetido = true;
                    }
                }
            });
            if (!repetido) {
                temporal.push(temp1);
            }
        });
        temporal.forEach(function (temp) {
            tempoAux2.push(temp.zona);
        });
        this.lstConsultaActual2 = [];
        this.lstConsultaActual2 = tempoAux2;
        temporal = [];
        tempoAux2 = [];
        if (lstTemporal.length > 0) {
            temporal.push(lstTemporal[0]);
        }
        temporal.forEach(function (temp) {
            tempoAux2.push(temp.fpor);
        });
    };
    AsignarRutaComponent.prototype.getDatos3 = function (lstTemporal) {
        this.lstConsultaActual3 = [];
        var temporal = [];
        var tempoAux2 = [];
        if (lstTemporal.length > 0) {
            temporal.push(lstTemporal[0]);
        }
        lstTemporal.forEach(function (temp1) {
            var repetido = false;
            var contador = 0;
            temporal.forEach(function (temp) {
                if (temp.evento === temp1.evento) {
                    contador += 1;
                    if (contador > 0) {
                        repetido = true;
                    }
                }
            });
            if (!repetido) {
                temporal.push(temp1);
            }
        });
        temporal.forEach(function (temp) {
            tempoAux2.push(temp.evento);
        });
        this.lstConsultaActual3 = [];
        this.lstConsultaActual3 = tempoAux2;
        temporal = [];
        tempoAux2 = [];
        if (lstTemporal.length > 0) {
            temporal.push(lstTemporal[0]);
        }
        temporal.forEach(function (temp) {
            tempoAux2.push(temp.fpor);
        });
    };
    AsignarRutaComponent.prototype.getDatos4 = function (lstTemporal) {
        this.lstConsultaActual4 = [];
        var temporal = [];
        var tempoAux2 = [];
        if (lstTemporal.length > 0) {
            temporal.push(lstTemporal[0]);
        }
        lstTemporal.forEach(function (temp1) {
            var repetido = false;
            var contador = 0;
            temporal.forEach(function (temp) {
                if (temp.prioridad === temp1.prioridad) {
                    contador += 1;
                    if (contador > 0) {
                        repetido = true;
                    }
                }
            });
            if (!repetido) {
                temporal.push(temp1);
            }
        });
        temporal.forEach(function (temp) {
            tempoAux2.push(temp.prioridad);
        });
        this.lstConsultaActual4 = [];
        this.lstConsultaActual4 = tempoAux2;
        temporal = [];
        tempoAux2 = [];
        if (lstTemporal.length > 0) {
            temporal.push(lstTemporal[0]);
        }
        temporal.forEach(function (temp) {
            tempoAux2.push(temp.fpor);
        });
    };
    AsignarRutaComponent.prototype.getDatos5 = function (lstTemporal) {
        this.lstConsultaActual5 = [];
        var temporal = [];
        var tempoAux2 = [];
        if (lstTemporal.length > 0) {
            temporal.push(lstTemporal[0]);
        }
        lstTemporal.forEach(function (temp1) {
            var repetido = false;
            var contador = 0;
            temporal.forEach(function (temp) {
                if (temp.cliente === temp1.cliente) {
                    contador += 1;
                    if (contador > 0) {
                        repetido = true;
                    }
                }
            });
            if (!repetido) {
                temporal.push(temp1);
            }
        });
        temporal.forEach(function (temp) {
            tempoAux2.push(temp.cliente);
        });
        this.lstConsultaActual5 = [];
        this.lstConsultaActual5 = tempoAux2;
        temporal = [];
        tempoAux2 = [];
        if (lstTemporal.length > 0) {
            temporal.push(lstTemporal[0]);
        }
        temporal.forEach(function (temp) {
            tempoAux2.push(temp.fpor);
        });
    };
    AsignarRutaComponent.prototype.obtener = function ($val) {
        console.log($val);
    };
    AsignarRutaComponent.prototype.eliminarItemAlmacen = function () {
        var indexEliminar;
        /***********For para obtener la posicion del que se debe modificar***********/
        for (var j = 0; j < this.lstAlmacen.length; j++) {
            if (this.lstAlmacen[j].cliente === this.itemAlmacen.cliente) {
                indexEliminar = j;
                break;
            }
        }
        this.lstAlmacen.splice(indexEliminar, 1);
    };
    AsignarRutaComponent.prototype.cerrarAlerta = function ($event) {
        this.activarAlerta = false;
    };
    AsignarRutaComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    AsignarRutaComponent.prototype.mostrarDetalleEventos = function (i) {
        var _this = this;
        this.eventoNum = i;
        console.log(this.itemsAux3[this.eventoNum].foliosPL);
        this._asignarMensajeroService.obtenerFacturasFolio(this.itemsAux3[this.eventoNum].foliosPL).subscribe(function (data) {
            console.log(data);
            _this.facturas = data.current;
            _this.detalleEventos = true;
        });
    };
    AsignarRutaComponent.prototype.ocultarDetalleEventos = function () {
        this.detalleEventos = false;
    };
    AsignarRutaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-asignar-ruta',
            template: __webpack_require__("./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta.component.html"),
            styles: [__webpack_require__("./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('Animation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateX(100%)', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__["b" /* DragulaService */], __WEBPACK_IMPORTED_MODULE_3__services_despachos_gestorRuta_asignar_mensajero_service__["a" /* AsignarMensajeroService */], __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], AsignarRutaComponent);
    return AsignarRutaComponent;
}());



/***/ }),

/***/ "./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarRutaModule", function() { return AsignarRutaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asignar_ruta_component__ = __webpack_require__("./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asignar_ruta_routing_module__ = __webpack_require__("./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngui_map__ = __webpack_require__("./node_modules/@ngui/map/esm5/ngui-map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //La chida para el mapa






var AsignarRutaModule = /** @class */ (function () {
    function AsignarRutaModule() {
    }
    AsignarRutaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__asignar_ruta_routing_module__["a" /* AsignarRutaRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["a" /* DragulaModule */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyD_xQ31kAkk6Sjh3qmpx93q4ce9xJ80TSg' }),
                __WEBPACK_IMPORTED_MODULE_9__shared_alerta_alerta_module__["a" /* AlertaModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__asignar_ruta_component__["a" /* AsignarRutaComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__asignar_ruta_component__["a" /* AsignarRutaComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["b" /* DragulaService */]
            ]
        })
    ], AsignarRutaModule);
    return AsignarRutaModule;
}());



/***/ })

});
//# sourceMappingURL=asignar-ruta.module.chunk.js.map