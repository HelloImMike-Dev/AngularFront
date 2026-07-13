webpackJsonp(["controlar-cobro.module"],{

/***/ "./src/app/components/controlar-cobro/atender-cobro-deposito/atender-cobro-deposito.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaPrincipal\">\r\n  <div class=\"botonera\">\r\n    <pn-botonera [lista]=\"listaEmpresas\" *ngIf=\"activarBotonera\" class=\"componmentBtn\"></pn-botonera>\r\n  </div>\r\n  <div class=\"seccion\">\r\n    <div class=\"primerSeccion\">\r\n      <div class=\"titulosLista\">\r\n        <div  class=\"tituloCliente\">\r\n          <label class=\"tituloLista\">DEPÓSITOS</label>\r\n        </div>\r\n        <div style=\"height: 33%;width: 100%;padding-bottom: 5px\">\r\n          <pn-combo-flecha-verde  [title]=\"'Seleccionar'\"  [itemSelect]=\"selectedTipoCuenta\" (valueDropList)=\"recibeValosCombo($event,'tipoCuenta')\"  id=\"cmbUnidad\" [items]=\"listaTipoCuenta\" [heightLi]=\"'35px'\" ></pn-combo-flecha-verde>\r\n        </div>\r\n        <div class=\"organizarLista\">\r\n          <div style=\"width: 10%; height: 100%;    display: flex;align-items: center;\">\r\n            <div class=\"menu\" (click)=\"abreCombo()\">\r\n              <div>\r\n              </div>\r\n              <div>\r\n              </div>\r\n              <div>\r\n              </div>\r\n              <section id=\"section\">\r\n                <ul class=\"listaHamburguesa\">\r\n                  <li (click)=\"ordenamientoCliente()\">Alfabético (A-Z)</li>\r\n                  <li (click)=\"ordenamientoFechaTramNue()\">Trámites Más Nuevos</li>\r\n                  <li (click)=\"ordenamientoFechaTramAnt()\">Trámites Más Antiguos</li>\r\n                </ul>\r\n              </section>\r\n            </div>\r\n          </div>\r\n          <div style=\"width: 38%; height: 100%;    display: flex;align-items: center;\">\r\n            <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\r\n          </div>\r\n          <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n            <div class=\"buscar\" style=\"padding-left: 236px;\">\r\n              <div>\r\n                <div class=\"lupa\">\r\n                  <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                </div>\r\n                <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Banco, rdf, método de pago\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Lista total-->\r\n      <div class=\"segundaSeccionList\" style=\"height: 79.5%\">\r\n        <div style=\"width: 97%;display: flex;overflow: auto;position: relative;height: 100%;\">\r\n          <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n            <div [ngClass]=\"listaFD[i]\" *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n              <div class=\"dfSelect\"></div>\r\n              <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(item, i)\">\r\n                <div class=\"informacionList\">\r\n                  <label> #{{i +1}} · {{item.cliente}} · <span class=\"tipoBanco\">{{item.ft}}</span></label>\r\n                  <span class=\"rfc\">Monto Depositado {{item.monto}} <span class=\"tipoBanco\" style=\"font-weight: 300;font-size: 18px\"> M.Pago: </span></span>\r\n                  <h3>{{item.piezas}} Facturas · Monto Por Cobrar: {{item.monto}}</h3>\r\n                </div>\r\n                <div class=\"numeroIndex\" style=\"width: 10%\">\r\n                  <label class=\"index\" style=\"font-family: Roboto-Regular\">{{item.depositado}}</label>\r\n                  <label style=\"color: #848387\">M.Depositado</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"totales\">\r\n        <label># {{total}}</label>\r\n        <label>{{totPiezas}} Cheques</label>\r\n        <label>{{montoTot}} Transferencias</label>\r\n      </div>\r\n    </div>\r\n    <!--linea degradada-->\r\n    <div class=\"borderLine\"></div>\r\n    <div class=\"segundaSeccion\">\r\n      <div class=\"tituloBanco\">\r\n        <div class=\"tituloBlanSeccion\">\r\n          <label class=\"cabeceraRb\">{{rb}} <p class=\"cabeceraRb\" style=\"color: #008894;\"> {{banco}}</p></label>\r\n        </div>\r\n        <div class=\"tituloBlanSeccion\">\r\n          <label class=\"tipoBanco\" style=\"font-weight: 300;font-size: 17px;display: flex;padding-left: 5px;\"> M.Pago: <span class=\"espacio\"> F.Deposito <h3 class=\"espacio\" style=\"color:#424242\"> M.Depositado</h3></span></label>\r\n        </div>\r\n      </div>\r\n      <div class=\"facturas\">\r\n        <div class=\"secciones\" style=\"justify-content: space-between;align-items: center;\">\r\n          <label class=\"cabeceraRb\" style=\"font-size: 20px\">FACTURAS</label>\r\n          <label class=\"monto\">Monto Por Cobrar: <label class=\"cant\">$1234567</label></label>\r\n        </div>\r\n        <div class=\"secciones\">\r\n          <div class=\"barraBusqueda\" style=\"height: 100%;width: 100%;\">\r\n            <div class=\"buscar\" style=\"justify-content: center;\">\r\n              <div style=\"    width: 500px;justify-content: center;justify-items: center;\">\r\n                <div class=\"lupa\">\r\n                  <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                </div>\r\n                <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Banco, rdf, método de pago\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style=\"height: 72%; width: 100%;\">\r\n        <div class=\"segundaSeccionList\" style=\"width: 100%;border-top:0px\">\r\n          <div style=\"width: 97%;display: flex;overflow: auto;position: relative;height: 100%;\">\r\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n              <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                <div class=\"dfSelect\"></div>\r\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItemFac(item, i)\">\r\n                  <div class=\"numeroIndex\" (click)=\"item.itemSelect = !item.itemSelect\">\r\n                    <img class=\"img\" src=\"./assets/Images/check1.svg\" *ngIf=\"!item.itemSelect\">\r\n                    <img class=\"img\" src=\"./assets/Images/check2.svg\" *ngIf=\"item.itemSelect\">\r\n                  </div>\r\n                  <div class=\"informacionList\">\r\n                    <h1 class=\"facList\"> #{{i +1}} · {{item.cliente}} · P.Interno · C.Pago></h1>\r\n                    <span class=\"facFechas\">F.F: {{item.monto}} · F.Revisión · C.Recibo</span>\r\n                    <h3 style=\"font-size: 15px\">FPC: {{item.piezas}} · M.Pago: {{item.monto}} · DRC</h3>\r\n                    <div class=\"totalesFacturas\">\r\n                     <div>\r\n                       <label>1234567</label>\r\n                       <label>Saldo Anterior</label>\r\n                     </div>\r\n                     <div>\r\n                       <label>$123456</label>\r\n                       <label>Monto Pagado</label>\r\n                     </div>\r\n                      <div>\r\n                        <label>23456789</label>\r\n                        <label>S.Insoluto</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"totales\">\r\n          <label>8 Facturas</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--linea degradada-->\r\n    <div class=\"borderLine\"></div>\r\n    <!--ULTIMA SECCIÓN-->\r\n    <div class=\"segundaSeccion\">\r\n      <div class=\"tituloBanco\">\r\n        <div class=\"tituloBlanSeccion\">\r\n          <label class=\"cabeceraRb\">NOTAS DE CRÉDITO</label>\r\n        </div>\r\n        <div class=\"tituloBlanSeccion\">\r\n          <label class=\"tipoBanco\" style=\"font-family:Novecento;font-size: 18px;font-weight: 300;padding-left: 5px\"> Total:</label>\r\n        </div>\r\n      </div>\r\n      <div style=\"height: 25%\">\r\n        <div class=\"segundaSeccionList\" style=\"width: 100%;border-top:0px\">\r\n          <div style=\"width: 97%;display: flex;overflow: auto;position: relative;height: 100%;\">\r\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n              <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                <div class=\"dfSelect\"></div>\r\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItemFac(item, i)\">\r\n                  <div class=\"numeroIndex\">\r\n                    <img class=\"img\" src=\"./assets/Images/check1.svg\" *ngIf=\"!item.itemSelect\">\r\n                    <img class=\"img\" src=\"./assets/Images/check2.svg\" *ngIf=\"item.itemSelect\">\r\n                  </div>\r\n                  <div class=\"informacionList\">\r\n                    <label> #{{i +1}} · {{item.cliente}} · <span class=\"tipoBanco\">{{item.precio}}</span></label>\r\n                    <span class=\"rfc\">Monto Depositado {{item.monto}} </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"totales\">\r\n          <label>7 Notas de Crédito</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"tituloBanco\">\r\n        <div class=\"tituloBlanSeccion\">\r\n          <label class=\"cabeceraRb\">EXCEDENTES</label>\r\n        </div>\r\n        <div class=\"tituloBlanSeccion\">\r\n          <label class=\"tipoBanco\" style=\"font-family:Novecento;font-size: 18px;font-weight: 300;padding-left: 5px\"> Total: </label>\r\n        </div>\r\n      </div>\r\n      <div style=\"height: 23%;width: 100%\">\r\n        <div class=\"segundaSeccionList\">\r\n          <div style=\"width: 97%;display: flex;overflow: auto;position: relative;height: 100%;\">\r\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n              <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                <div class=\"dfSelect\"></div>\r\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItemFac(item, i)\">\r\n                  <div class=\"numeroIndex\">\r\n                    <img class=\"img\" src=\"./assets/Images/check1.svg\" *ngIf=\"!item.itemSelect\">\r\n                    <img class=\"img\" src=\"./assets/Images/check2.svg\" *ngIf=\"item.itemSelect\">\r\n                  </div>\r\n                  <div class=\"informacionList\">\r\n                    <label> #{{i +1}} · {{item.cliente}} · <span class=\"tipoBanco\">{{item.precio}}</span></label>\r\n                    <span class=\"rfc\">Monto Depositado {{item.monto}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"totales\">\r\n          <label>3 Excedentes</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"totalesFinales\">\r\n        <div>\r\n          <label>TOTALES</label>\r\n        </div>\r\n        <div>\r\n          <label>NC</label>\r\n          <label>$123456</label>\r\n        </div>\r\n        <div>\r\n          <label>Excedente</label>\r\n          <label>$1000</label>\r\n        </div>\r\n        <div>\r\n          <label>Pago</label>\r\n          <label style=\"color: #008894\">$2000</label>\r\n        </div>\r\n        <div>\r\n           <label>Conciliado</label>\r\n          <label style=\"color: #4BA92B\">$$2100.00</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"btn\">\r\n        <div>\r\n          <label>CANCELAR</label>\r\n        </div>\r\n        <div style=\"background: #4BA92B\">\r\n          <label>ACEPTAR</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/controlar-cobro/atender-cobro-deposito/atender-cobro-deposito.component.scss":
/***/ (function(module, exports) {

module.exports = ".areaPrincipal{height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:22px;padding-right:22px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:1431px;min-height:988px}.botonera{height:15%;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.seccion{height:85%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.primerSeccion{width:40%;height:100%}.segundaSeccion{width:30%;height:100%;padding-left:5px;padding-right:5px}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:33.3%}.subtitulo{font-size:18px;font-family:Roboto;font-weight:300}.tituloLista{font-size:24px;font-family:Novecento;font-weight:bold}.numeroIndex{font-size:28px;font-family:Roboto-Regular;text-align:left;width:10%;padding-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.numeroIndex label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.informacionList{font-family:Roboto;width:80%;padding-top:8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.informacionList label{color:#42423e;font-weight:bold;font-size:20px;font-family:Roboto;line-height:1}.informacionList h3{line-height:1.5;margin-top:4px;font-weight:400;font-family:Roboto-Regular;font-size:17px;color:#848387;text-align:left}.imgFlecha{width:17.9px;height:27.4px}.listaProd{width:30%;background:#fff;height:100%;min-width:396px;padding-left:20px;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.infoLista{height:10%;padding-top:15px;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.totales{height:5%;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:distribute;justify-content:space-around;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:5px}.titulosLista{height:15%;padding-top:15px;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:15px;min-height:90px}.abreviaciones{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-top:2px solid #424242}.menu{position:relative}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:120px;overflow:auto;width:219px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}.segundaSeccionList{height:80%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid;width:95%;border-top:1px solid;overflow:auto}.tituloCliente{width:100%;height:33%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:5px}.cabeceraCliente{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:55%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;color:#008894;font-family:Roboto;font-weight:bold;font-size:28px;padding-right:19.2px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:249px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.borderLine{width:1.1px;height:100%;background:-webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;background:linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%}.tituloBanco{width:100%;height:8.5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #424242;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.lista{width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst h3{line-height:1.5;margin-top:4px;font-weight:400;font-family:Roboto-Regular;font-size:17px;color:#848387;text-align:left}.rfc{font-family:Roboto;color:#424242;font-size:18px;font-weight:400}.tipoBanco{font-family:Roboto;font-size:20px;color:#008894;text-align:left;font-weight:bold}.cabeceraRb{font-family:Novecento;font-weight:bold;font-size:24px;color:#424242;text-align:left;display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:5px}.tituloBlanSeccion{height:50%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.espacio{display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:5px;font-weight:400;font-family:Roboto-Regular;font-size:17px;color:#848387;text-align:left}.secciones{height:50%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.facturas{height:15%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.facList{font-family:Roboto;font-weight:bold;font-size:17px;color:#424242;text-align:left}.facFechas{font-family:Roboto;font-weight:300;font-size:16px;color:#424242;text-align:left;line-height:1.5}.monto{font-family:Roboto;font-weight:300;font-size:18px;color:#424242;text-align:left}.monto .cant{font-weight:bold;font-size:19px;color:#008894}.totalesFacturas{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-family:Roboto;font-weight:300;font-size:17px;color:#424242;text-align:left}.totalesFacturas div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:Roboto;font-weight:300;font-size:15px;color:#848387;text-align:right}.totalesFinales{height:25%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1.6}.totalesFinales div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.totalesFinales div>label{font-family:Roboto;font-weight:400;font-size:21px;color:#424242;text-align:left}.btn{height:10%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.btn div{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#008894;width:170px;height:30px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btn div>label{ont-family:Novecento;font-weight:bold;font-size:21px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.img{width:23px;height:23px}.componmentBtn{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}"

/***/ }),

/***/ "./src/app/components/controlar-cobro/atender-cobro-deposito/atender-cobro-deposito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtenderCobroDepositoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AtenderCobroDepositoComponent = /** @class */ (function () {
    function AtenderCobroDepositoComponent() {
        this.listaTipoCuenta = [
            /* { nombre: '--NINGUNO--', key: 0 }, */
            { nombre: 'Congelación', key: 0 },
            { nombre: 'Ambiente', key: 1 },
            { nombre: 'Refrigeración', key: 2 }
        ];
        /*****PRUEBA DE LISTA*****/
        this.listaAux = [{ 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5, depositado: '$12,765', itemSelect: false },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, depositado: '$12,765', itemSelect: false },
            { 'cliente': "PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3, depositado: '$12,765', itemSelect: false },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, depositado: '$12,765', itemSelect: false },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2, depositado: '$12,765', itemSelect: false },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, depositado: '$12,765', itemSelect: false },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, depositado: '$12,765', itemSelect: false },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21, depositado: '$12,765', itemSelect: false },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, depositado: '$12,765', itemSelect: false },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4, depositado: '$12,765', itemSelect: false },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6, depositado: '$12,765', itemSelect: false }];
        /**************************/
        this.clientes = [];
        this.lista = [];
        this.listaFD = [];
        this.listaEmpresas = [{ nombre: 'Proquifa', total: 12 },
            { nombre: 'Proveedora', total: 15 }];
    }
    AtenderCobroDepositoComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object;
        obj.nombre = 'Todas las Cuentas Bancarias';
        this.selectedTipoCuenta = obj;
        this.clientes = this.listaAux;
        this.lista = this.listaAux;
        this.activarBotonera = true;
    };
    AtenderCobroDepositoComponent.prototype.recibeValosCombo = function (index, tipo) {
        var obj;
        obj = new Object;
        obj.tipo = tipo;
        obj.item = index;
    };
    AtenderCobroDepositoComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    AtenderCobroDepositoComponent.prototype.seleccionarItem = function (item, i) {
        this.listaFD = [];
        this.listaFD = new Array(this.lista.length).fill('');
        this.listaFD[i] = 'divActive';
        this.rb = '#' + (i + 1) + ' · ' + ' ' + item.cliente;
        this.banco = item.nombre;
    };
    AtenderCobroDepositoComponent.prototype.seleccionarItemFac = function (item, i) {
    };
    AtenderCobroDepositoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-atender-cobro-deposito',
            template: __webpack_require__("./src/app/components/controlar-cobro/atender-cobro-deposito/atender-cobro-deposito.component.html"),
            styles: [__webpack_require__("./src/app/components/controlar-cobro/atender-cobro-deposito/atender-cobro-deposito.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AtenderCobroDepositoComponent);
    return AtenderCobroDepositoComponent;
}());



/***/ }),

/***/ "./src/app/components/controlar-cobro/controlar-cobro-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlarCobroRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controlar_cobro_component__ = __webpack_require__("./src/app/components/controlar-cobro/controlar-cobro.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ControlarCobroRoutingModule = /** @class */ (function () {
    function ControlarCobroRoutingModule() {
    }
    ControlarCobroRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__controlar_cobro_component__["a" /* ControlarCobroComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ControlarCobroRoutingModule);
    return ControlarCobroRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/controlar-cobro/controlar-cobro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion [items]=\"itemsMenu\" [titulo]=\"'MONITOREO COBRO MOROSO'\"  style=\"width: 100%;\"></pn-menu-seccion>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n    <!--Termina seccion de menu-->\r\n    <!--Empieza el area de trabajo-->\r\n    <div class=\"area\">\r\n      <!--Empieza la cabezera-->\r\n      <div class=\"cabezera\">\r\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaPrincipal\" (click)=\"regresarVistaP()\">\r\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\r\n        </div>\r\n        <label class=\"etiqueta\" style=\"width: 45%\">ATENDER COBRO</label>\r\n        <span class=\"cabeceraCliente\">{{cabeceraClient}}</span>\r\n      </div>\r\n      <!--Termina la cabezera--><!--Empiezan los componentes-->\r\n      <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 120px)'}\">\r\n        <div style=\"width: 100%; height: 100%\" *ngIf=\"vistaPrincipal\">\r\n          <div style=\"height: 100%; width: 100%; display: -webkit-box\">\r\n            <div class=\"listaProd\">\r\n              <div class=\"titulosLista\">\r\n                <div  class=\"tituloCliente\">\r\n                  <label class=\"tituloLista\">CLIENTES</label>\r\n                </div>\r\n                <div class=\"organizarLista\">\r\n                  <div style=\"width: 10%; height: 100%;    display: flex;align-items: center;\">\r\n                    <div class=\"menu\" (click)=\"abreCombo()\">\r\n                      <div>\r\n                      </div>\r\n                      <div>\r\n                      </div>\r\n                      <div>\r\n                      </div>\r\n                      <section id=\"section\">\r\n                        <ul class=\"listaHamburguesa\">\r\n                          <li (click)=\"ordenamientoCliente()\">Alfabético (A-Z)</li>\r\n                          <li (click)=\"ordenamientoFechaTramNue()\">Trámites Más Nuevos</li>\r\n                          <li (click)=\"ordenamientoFechaTramAnt()\">Trámites Más Antiguos</li>\r\n                        </ul>\r\n                      </section>\r\n                    </div>\r\n                  </div>\r\n                  <div style=\"width: 38%; height: 100%;    display: flex;align-items: center;\">\r\n                    <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\r\n                  </div>\r\n                  <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n                    <div class=\"buscar\" style=\"padding-left: 236px;\">\r\n                      <div>\r\n                        <div class=\"lupa\">\r\n                          <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                        </div>\r\n                        <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Cliente\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!--Lista total-->\r\n              <div class=\"segundaSeccionList\">\r\n                <div style=\"width: 97%;\">\r\n                  <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n                    <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                      <div class=\"dfSelect\"></div>\r\n                      <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(item)\">\r\n                        <div class=\"numeroIndex\">\r\n                          <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\r\n                        </div>\r\n                        <div style=\"width: 5%; padding-right: 2px; text-align: left;padding-top: 10px;\">\r\n                          <img src=\"./assets/Images/bandera_verde.svg\" *ngIf=\"item.pagado\">\r\n                        </div>\r\n                        <div class=\"informacionList\">\r\n                          <label>{{item.cliente}}</label>\r\n                          <span>Monto Depositado {{item.monto}}</span>\r\n                          <h3>{{item.piezas}} Facturas · Monto Por Cobrar: {{item.monto}}</h3>\r\n                          <h3 style=\"color: #4BA92B;\">FPC: {{item.ft}}</h3>\r\n                        </div>\r\n                        <div style=\"position: absolute; position: absolute; padding-top: 43px;right:0; width: 5%\">\r\n                          <img src=\"./assets/Images/FlechaDerVerde.svg\" class=\"imgFlecha\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"totales\">\r\n                <label># {{total}}</label>\r\n                <label>{{totPiezas}} Clientes</label>\r\n                <label>{{montoTot}} Depositos</label>\r\n                <label>{{montoTot}} Facturas</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"contenidoGrafica\">\r\n\r\n              <div class=\"grafica\"  style=\"padding-right: 10px;\">\r\n                <label class=\"tituloGrafica\">CLIENTES</label>\r\n                <pn-donut-chart *ngIf=\"clienteData\" [data]=\"dataFacturacion\" [tipoGrafica]=\"tipoGraficaCliente\" [height]=\"'auto'\"></pn-donut-chart>\r\n              </div>\r\n\r\n              <div  id=\"donaProducto\" class=\"grafica\" style=\"    padding-left: 10px;\">\r\n                <label class=\"tituloGrafica\">PRODUCTOS</label>\r\n                <pn-donut-chart *ngIf=\"ProductoData\" [idGrafica]=\"'producto'\" [data]=\"dataFacturacion2\" [tipoGrafica]=\"tipoGraficaProducto\" [height]=\"'auto'\"> </pn-donut-chart>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <pn-atender-cobro-deposito *ngIf=\"deposito\"></pn-atender-cobro-deposito>\r\n      </div>\r\n      <!--Termina area de trabajo-->\r\n      <div style=\"width: 100%;height: 50px\">\r\n        <footer class=\"footer\">\r\n          <div class=\"abreviaciones\">\r\n            <div class=\"Prioridad1\">\r\n              <img class=\"p1\" src=\"./assets/Images/bandera_verde.svg\" style=\"padding-right: 5px\"> <span class=\"texto\"> Montos Depositados</span>\r\n            </div>\r\n            <div class=\"Prioridad2\">\r\n              <label class=\"p2\">FPC: <span class=\"texto\">Fecha Próxima de Cobro</span></label>\r\n            </div>\r\n\r\n          </div>\r\n        </footer>\r\n      </div>\r\n\r\n    </div>\r\n</div>\r\n<pn-pop-up-editar-monto *ngIf=\"pop\"></pn-pop-up-editar-monto>\r\n"

/***/ }),

/***/ "./src/app/components/controlar-cobro/controlar-cobro.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{height:100%;width:100%;overflow:auto}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;border-bottom:2px solid #000}.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento}.img{cursor:pointer}.tituloGrafica{font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}.grafica{height:80%;width:70%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.grafica label{text-align:center}.contenidoGrafica{width:70%;background:#eceef0;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px}.lista{width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst label{color:#008895;padding-left:-2px;font-family:\"Roboto-Bold\";font-size:28px}.lista>.divActive .datosLst p{font-family:\"Roboto-Bold\";font-size:24px;color:#000;line-height:26px}.lista>.divActive .datosLst h3{font-family:\"Roboto-regular\";font-size:21px}.textoPiezas{font-family:\"Roboto-regular\";font-size:21px}.titulo{padding-left:30px;font-family:Novecentowide;font-weight:Bold;font-size:24px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:249px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.footer{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.linea{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;text-align:center}.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px}.Prioridad1,.Prioridad2{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%;font-family:Roboto;font-weight:300}.p1{color:#424242;font-weight:bold}.p2{color:#424242;font-weight:bold}.p3{color:#424242;font-weight:bold}.datosC{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:1608px;margin-left:20px;margin-right:20px;width:98%}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:50%}.subtitulo{font-size:18px;font-family:Roboto;font-weight:300}.tituloLista{font-size:24px;font-family:Novecento;font-weight:bold}.numeroIndex{font-size:28px;font-family:Roboto-Regular;text-align:left;width:10%;padding-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px}.informacionList{font-family:Roboto;width:85%;padding-top:8px}.informacionList label{color:#008894;font-weight:bold;font-size:24px;font-family:Roboto;line-height:1}.informacionList span{min-height:23px;max-height:46px;font-weight:bold;font-size:20px;color:#424242;font-family:Roboto}@supports(-webkit-line-clamp: 2){.informacionList span{display:block;display:-webkit-box !important;line-height:1.1;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 2){.informacionList span{position:relative;line-height:1.1;overflow:hidden;width:100%}.informacionList span:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.informacionList h3{font-size:17px;font-family:Roboto;color:#424242;line-height:1.5;margin-top:4px;font-weight:400}.imgFlecha{width:17.9px;height:27.4px}.listaProd{width:30%;background:#fff;height:100%;min-width:396px;padding-left:20px;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.infoLista{height:10%;padding-top:15px;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.totales{height:5%;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:distribute;justify-content:space-around;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:5px}.titulosLista{height:10%;padding-top:15px;width:95%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:15px;min-height:90px}.abreviaciones{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-top:2px solid #424242}.menu{position:relative}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:120px;overflow:auto;width:219px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}.segundaSeccionList{height:85%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid;width:95%;border-top:1px solid;overflow:auto}.tituloCliente{width:50%;height:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.cabeceraCliente{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:55%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;color:#008894;font-family:Roboto;font-weight:bold;font-size:28px;padding-right:19.2px}@media all and (min-width: 1300px)and (max-width: 1509px){.informacionList>label{font-size:18px}.informacionList>span{font-size:16px;min-height:17px;max-height:34px}.informacionList>h3{font-size:15px}.numeroIndex{font-size:22px}.cabeceraCliente{font-size:25px}.informacionList{padding-top:4px}}.select{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;position:relative;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0}.texto{font-family:Roboto;font-weight:300}"

/***/ }),

/***/ "./src/app/components/controlar-cobro/controlar-cobro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlarCobroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlarCobroComponent = /** @class */ (function () {
    function ControlarCobroComponent() {
        this.classAsideMenu = 'asideNormalMenu';
        this.itemsMenu = [
            { nombre: 'Atender Cobro', url: '', disable: true },
        ];
        this.vistaPrincipal = true;
        /**********DATOS DE EJEMPLO GRAFICAS****/
        this.dataFacturacion = {
            titulo: 'Clientes',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
            valuesExtras: [6, 324, 157, 5000],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
        };
        this.dataFacturacion2 = {
            titulo: 'Productos',
            labels: ['Totales'],
            valores: [6],
            labelsExtras: [['clientes'], ['Ordenes de compra']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra'],
            valuesExtras: [6, 324],
            valuesExtrasHover: [[6, 3], [324, 157]]
        };
        /*************************/
        /*****PRUEBA DE LISTA*****/
        this.listaAux = [{ 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5, pagado: true },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true },
            { 'cliente': "PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3, pagado: true },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2, pagado: true },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, pagado: true },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21, pagado: true },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, pagado: true },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4, pagado: true },
            { 'cliente': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6, pagado: true }];
        /**************************/
        this.tipoGraficaProducto = 'General';
        this.tipoGraficaCliente = 'General';
        this.clientes = [];
        this.lista = [];
    }
    ControlarCobroComponent.prototype.ngOnInit = function () {
        this.ProductoData = true;
        this.clienteData = true;
        this.clientes = this.listaAux;
        this.lista = this.listaAux;
    };
    ControlarCobroComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    ControlarCobroComponent.prototype.regresarVistaP = function () {
        this.deposito = false;
        this.vistaPrincipal = true;
    };
    /// Funcion de buscar en facturacion
    ControlarCobroComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            this.lista = this.clientes.slice();
        }
        else {
            this.clientes.forEach(function (folio) {
                if (folio.cliente.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
    };
    /*****/
    ControlarCobroComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    ControlarCobroComponent.prototype.seleccionarItem = function (item) {
        this.deposito = true;
        this.vistaPrincipal = false;
        this.cabeceraClient = item.cliente;
        this.pop = true;
    };
    ControlarCobroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-controlar-cobro',
            template: __webpack_require__("./src/app/components/controlar-cobro/controlar-cobro.component.html"),
            styles: [__webpack_require__("./src/app/components/controlar-cobro/controlar-cobro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlarCobroComponent);
    return ControlarCobroComponent;
}());



/***/ }),

/***/ "./src/app/components/controlar-cobro/controlar-cobro.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlarCobroModule", function() { return ControlarCobroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controlar_cobro_component__ = __webpack_require__("./src/app/components/controlar-cobro/controlar-cobro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controlar_cobro_routing_module__ = __webpack_require__("./src/app/components/controlar-cobro/controlar-cobro-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__atender_cobro_deposito_atender_cobro_deposito_component__ = __webpack_require__("./src/app/components/controlar-cobro/atender-cobro-deposito/atender-cobro-deposito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_botonera_botonera_module__ = __webpack_require__("./src/app/components/shared/botonera/botonera.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pop_up_po_up_editar_monto_po_up_editar_monto_component__ = __webpack_require__("./src/app/components/controlar-cobro/pop-up/po-up-editar-monto/po-up-editar-monto.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ControlarCobroModule = /** @class */ (function () {
    function ControlarCobroModule() {
    }
    ControlarCobroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__controlar_cobro_routing_module__["a" /* ControlarCobroRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_botonera_botonera_module__["a" /* BotoneraModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__controlar_cobro_component__["a" /* ControlarCobroComponent */],
                __WEBPACK_IMPORTED_MODULE_7__atender_cobro_deposito_atender_cobro_deposito_component__["a" /* AtenderCobroDepositoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pop_up_po_up_editar_monto_po_up_editar_monto_component__["a" /* PoUpEditarMontoComponent */]
            ]
        })
    ], ControlarCobroModule);
    return ControlarCobroModule;
}());



/***/ }),

/***/ "./src/app/components/controlar-cobro/pop-up/po-up-editar-monto/po-up-editar-monto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div id=\"pop-up-facturacion\" class=\"modal\" #pop>\r\n    <div class=\"modal-content\">\r\n      <header class=\"header\" >\r\n        EDITAR MONTO PAGADO\r\n      </header>\r\n      <div class=\"contenido\">\r\n        <div class=\"titulos\">\r\n          <div>\r\n            <label>AXIS CLINICAL LATINA</label>\r\n            <label style=\"font-size: 20px;font-family: Roboto\">$2,000.00 USD</label>\r\n          </div>\r\n          <div>\r\n            <label style=\"font-size: 17px\">Proquifa · <span>Factura</span></label>\r\n            <span style=\"font-weight: 300; font-size: 16px\">Por cobrar</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"tipoPago\">\r\n          <label>Realizar Pago en: </label>\r\n          <pn-combo-flecha-verde [title]=\"'Seleccionar'\" [itemSelect]=\"tipoMonto\" [items]=\"tiposMontos\" (valueDropList)=\"recibeValosCombo($event,'monto')\"  id=\"cmbLote\" class=\"inputs\"></pn-combo-flecha-verde>\r\n        </div>\r\n        <div class=\"cantidades\">\r\n          <div *ngIf=\"usd\">\r\n            <label>$2123</label>\r\n            <h3>Saldo Anterior</h3>\r\n          </div>\r\n          <div *ngIf=\"!usd\" style=\"width: 33%\">\r\n            <label>$2123</label>\r\n            <h3>Saldo Anterior</h3>\r\n          </div>\r\n          <div *ngIf=\"usd\">\r\n            <label><input type=\"text\" class=\"input\"><br> MXN</label>\r\n            <h3 style=\"padding-right: 21px;\">Tipo de Cambio</h3>\r\n          </div>\r\n          <div *ngIf=\"!usd\" style=\"width: 97%\">\r\n            <div style=\"display: flex;height: 50%; flex-direction: row;justify-content: center;align-items: center;width: 100%;\">\r\n              <input type=\"text\" class=\"input\">\r\n              <label style=\"padding-left: 5px\">MXN</label>\r\n            </div>\r\n            <h3 style=\"padding-right: 21px;justify-content: center\">Tipo de Cambio</h3>\r\n          </div>\r\n          <div *ngIf=\"usd\">\r\n            <label><input type=\"text\" class=\"input\" style=\"color:#008894\"><br> USD</label>\r\n            <h3>Monto Pagado</h3>\r\n          </div>\r\n          <div *ngIf=\"usd\">\r\n            <label>$2123</label>\r\n            <h3>Saldo Insoluto</h3>\r\n          </div>\r\n          <div *ngIf=\"!usd\"   style=\"width: 33%\">\r\n            <label>$2123</label>\r\n            <h3>Saldo Insoluto</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"porcentaje\">\r\n          <label *ngIf=\"porcentaje\"> Porcentaje Pagado: <span> 10% = $1000 MXN</span></label>\r\n        </div>\r\n        <div class=\"btn\">\r\n          <div>\r\n            <label>CANCELAR</label>\r\n          </div>\r\n          <div>\r\n            <label>ACEPTAR</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/controlar-cobro/pop-up/po-up-editar-monto/po-up-editar-monto.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal{z-index:3;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(255,255,255,.7);font-family:\"Roboto\",sans-serif}.modal-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:auto;top:0%;background-color:#fff;position:relative;padding:0;outline:0;width:795px;height:567px;color:#000;border:1px solid #008894;font-family:\"Roboto\",sans-serif;border-radius:11px 11px 11px 11px}.header{width:100%;height:55px;color:#fff;font-family:\"Novecento\";font-weight:bold;font-size:26px;background:#008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:10px 10px 0px 0px}.contenido{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:stretch;align-self:stretch;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0px 30px 30px 30px;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.cantidades{height:135px;width:100%;background:#f3f9f9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:22px 0}.cantidades>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left;width:25%;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cantidades>div>h3{font-size:15px;color:#848387;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;font-weight:400;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.cantidades>div>label{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:3px}.btn{height:148px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.btn>div{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#008894;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btn>div>label{ont-family:Novecento;font-weight:bold;font-size:22px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.titulos{height:85px;width:100%;padding-top:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid #424242}.titulos>div{height:50%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.titulos>div>label{font-family:Novecento;font-weight:bold;font-size:22px;color:#008894;text-align:left}.titulos>div>span{font-family:Roboto;font-weight:300;font-size:16px;color:#424242;text-align:left}.tipoPago{height:160px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.tipoPago>label{font-family:Roboto;font-weight:400;font-size:16px;color:#424242;text-align:left;padding-right:10px}.inputs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:159px;height:30px}.input{width:128px;height:29px}.porcentaje{height:50px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:25px}.porcentaje>label{font-family:Roboto;font-weight:300;font-size:16px;color:#848387;text-align:right}.porcentaje>label>span{font-family:Roboto;font-weight:bold;font-size:19px;color:#008894}"

/***/ }),

/***/ "./src/app/components/controlar-cobro/pop-up/po-up-editar-monto/po-up-editar-monto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoUpEditarMontoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PoUpEditarMontoComponent = /** @class */ (function () {
    function PoUpEditarMontoComponent() {
        this.tiposMontos = [
            /*  { nombre: '--NINGUNO--', key: 0 }, */
            { nombre: 'Monto', key: 0 },
            { nombre: 'Porcentaje', key: 1 }
        ];
        this.porcentaje = true;
    }
    PoUpEditarMontoComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object;
        obj.nombre = 'Seleccionar';
        this.tipoMonto = obj;
    };
    PoUpEditarMontoComponent.prototype.recibeValosCombo = function ($event, tipos) {
    };
    PoUpEditarMontoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-editar-monto',
            template: __webpack_require__("./src/app/components/controlar-cobro/pop-up/po-up-editar-monto/po-up-editar-monto.component.html"),
            styles: [__webpack_require__("./src/app/components/controlar-cobro/pop-up/po-up-editar-monto/po-up-editar-monto.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PoUpEditarMontoComponent);
    return PoUpEditarMontoComponent;
}());



/***/ })

});
//# sourceMappingURL=controlar-cobro.module.chunk.js.map