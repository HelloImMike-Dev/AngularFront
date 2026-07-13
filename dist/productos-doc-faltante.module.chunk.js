webpackJsonp(["productos-doc-faltante.module"],{

/***/ "./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaSeccion\">\r\n  <div>\r\n    <div class=\"datos\">\r\n      <div>\r\n        <div>\r\n          <img src=\"./assets/Images/contacto.svg\" class=\"icono\">\r\n          <pn-combo-flecha-verde *ngIf=\"activarCombo\" [items]=\"listaContacto\" [itemSelect]=\"selectedTipoContac\" [heightLi]=\"'35px'\" [widthBorder] = 'false' (valueDropList)=\"recibirItem($event)\" style=\"width: 250px;\"></pn-combo-flecha-verde>\r\n        </div>\r\n        <div>\r\n          <img src=\"./assets/Images/mail.svg\" class=\"icono\">\r\n          <label>{{itemContacto.email}}</label>\r\n        </div>\r\n        <div>\r\n          <img src=\"./assets/Images/telefono.svg\" class=\"icono\">\r\n          <label>{{itemContacto.tel}}</label>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <label>{{itemContacto.titulo}}</label>\r\n        <span>Título de Contacto</span>\r\n      </div>\r\n      <div>\r\n        <label>{{itemContacto.puesto}}</label>\r\n        <span>Puesto</span>\r\n      </div>\r\n      <div>\r\n        <label>{{itemContacto.departament}}</label>\r\n        <span>Departamento</span>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div style=\"width: 40%;flex-direction: column;padding-right: 20px\">\r\n        <div class=\"titulosLista\">\r\n          <div  class=\"tituloCliente\">\r\n            <label class=\"tituloLista\">PRODUCTOS</label>\r\n          </div>\r\n          <div class=\"organizarLista\">\r\n            <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n              <div class=\"buscar\">\r\n                <div>\r\n                  <div class=\"lupa\">\r\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                  </div>\r\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"OC, Producto, Inspector, tipo , lote\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--Lista total-->\r\n        <div class=\"segundaSeccionList\">\r\n          <div style=\"width: 99%;display: flex;overflow: auto;position: relative;height: 100%;\">\r\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\">\r\n              <div [ngClass]=\"item.identificador === folio? 'divActive': ''\" *ngFor=\"let item of lista; let i = index;\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                <div class=\"dfSelect\"></div>\r\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(item, i)\">\r\n                  <div class=\"informacionList\">\r\n                    <label> #{{i +1}} · <span class=\"producto\">{{item.folio}}</span> · {{item.producto}}</label>\r\n                    <span class=\"tooltip\"> <label class=\"descarga\" (click)=\"visualizarDoc('OC', item.oc)\">OC-{{item.oc}}</label> · <label class=\"descarga\" (click)=\"visualizarDoc('PEDIDO', item.pedidoI)\">Pedido Interno: {{item.pedidoI}}</label> <span class=\"tooltiptext\" *ngIf=\"item.listaRechazos.length > 0\"><label *ngFor=\"let itemR of item.listaRechazos\"><label (click)=\"visualizarDoc('OC', itemR.compra)\" class=\"descargaToltip\">OC-{{itemR.compra}}</label> · <label (click)=\"visualizarDoc('PEDIDO', itemR.cpedido)\" class=\"descargaToltip\">Pedido Internio: {{itemR.cpedido}}</label></label></span></span>\r\n                    <h1>Fecha de Inspección: {{item.fechaI}}· Inpector: {{item.inspector}}</h1>\r\n                    <h3> FEE: {{item.FEE}} · DRE: {{item.DRE}} · Tipo:{{item.tipo}} · Lote: {{item.lote}}</h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"totales\">\r\n          <label>#{{listaUniveso.length}}</label>\r\n          <label>{{datosProveedor.totalOc}} OC</label>\r\n          <label>{{listaUniveso.length}} Productos</label>\r\n        </div>\r\n      </div>\r\n      <!--linea degradada-->\r\n      <div class=\"borderLine\"></div>\r\n      <!---->\r\n      <div style=\"padding-left: 20px\" class=\"cargaDocument\">\r\n        <div *ngIf=\"seleccionado\" style=\"height: 94%; width: 100%\">\r\n          <div class=\"infoProducto\">\r\n            <div *ngIf=\"seleccionado\" class=\"selectedData\">\r\n              <label> #{{indice}} · <span class=\"producto\">{{itemSelect.folio}}</span> · {{itemSelect.producto}}</label>\r\n              <span style=\"font-weight: 400; font-size: 18px;display:flex;height: 22px;\"><label class=\"descarga\" (click)=\"visualizarDoc('OC', itemSelect.oc)\" style=\"font-size: 18px;\">{{itemSelect.oc}} · </label>\r\n                <label class=\"descarga\" (click)=\"visualizarDoc('PEDIDO', itemSelect.pedidoI)\" style=\"font-size: 18px;\"> Pedido Interno: {{itemSelect.pedidoI}}</label>\r\n              </span>\r\n              <h1>  Fecha de Inspección: {{itemSelect.fechaI}}· Inpector: {{itemSelect.inspector}}</h1>\r\n            </div>\r\n          </div>\r\n          <div class=\"documentoCarga\">\r\n            <div class=\"seccionDocument\">\r\n              <div class=\"cargaDoc\">\r\n                <input type=\"file\" class=\"carga\"  (change)=\"fileChange2($event)\" id=\"cargarDocumento\">\r\n                <label for=\"cargarDocumento\" style=\"display: flex\" *ngIf=\"primerCarga\" class=\"cargarDocumento\"><img src=\"./assets/Images/cargar_permiso.svg\" class=\"imgeArchivo\">\r\n                  <p class=\"extension\">.pdf</p>\r\n                  <p class=\"textoImagen\">Certificado (carga obligatoria)</p></label>\r\n                <div *ngIf=\"!primerCarga\" class=\"vistDoc\">\r\n                  <div style=\"width: 100%;height: 95%; justify-content: center;display: flex\">\r\n                    <div class=\"contentRefuse\" id=\"preview\" [innerHtml] = \"htmlToAdd\" [style.height]=\"'100%'\"\r\n                         [style.overflow]=\"'auto'\">\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"!primerCarga\" class=\"recargar\">\r\n                    <label for=\"cargarDocumento\" style=\"display: flex\"><img src=\"./assets/Images/editar-pieza/cargar.svg\"></label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"hojaSeguridad\">\r\n              <div>\r\n                <label>Hoja de Seguridad (carga opcional)</label>\r\n              </div>\r\n                <pq-file-upload [disabled]=\"true\" [docR]=\"cargarGuia\" style=\"min-width: 260px;height: 100%;display: flex;justify-content: center;align-items: center;\"\r\n                                (enviarDocumento)=\"recibeDocumentacion($event)\" [fileName]=\"deshabilitar\" *ngIf=\"hojaS\"></pq-file-upload>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!seleccionado\" class=\"bloqueoCarga\">\r\n            <label>SELECCIONA UN PRODUCTO PARA VISUALIZAR ESTA SECCIÓN</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"btn\">\r\n      <div [style.background-color]=\"activarBtn? '#4BA92B': '#C2C3C9'\" [style.pointer-events]=\"activarBtn? 'auto':'none'\" (click)=\"finalizar()\">\r\n        <label>ACEPTAR</label>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.scss":
/***/ (function(module, exports) {

module.exports = ".areaSeccion{min-width:1175px;min-height:822px;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 20px 20px 20px}.areaSeccion>div{width:100%;height:calc(100% - 50px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.areaSeccion>div>div{width:100%;height:calc(100% - 124px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.areaSeccion>div>div>div{width:60%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box}.areaSeccion>div>div>.cargaDocument{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.areaSeccion>div>div>.cargaDocument>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.areaSeccion>div>div>.cargaDocument>div>label{font-family:Novecento;font-weight:bold;font-size:40px;color:#d8d9dd;text-align:center;line-height:55px;max-width:677px}.areaSeccion>div>div>.borderLine{width:1.1px;height:100%;background:-webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;background:linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%}.areaSeccion>div>.datos{height:153px;max-height:124px;border-bottom:1px solid;line-height:1.2}.areaSeccion>div>.datos>div{height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:10px}.areaSeccion>div>.datos>div>label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.areaSeccion>div>.datos>div>span{font-family:Roboto;font-weight:400;font-size:17px;color:#848387;text-align:left}.areaSeccion>div>.datos>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.areaSeccion>div>.datos>div>div>label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.areaSeccion>.btn{height:50px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:5px}.areaSeccion>.btn div{display:-webkit-box;display:-ms-flexbox;display:flex;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#c2c3c9;cursor:pointer}.areaSeccion>.btn div>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.titleData{font-family:Roboto;font-weight:bold;font-size:24px;color:#008895;text-align:left}.icono{width:16px;margin-right:5px}.tituloLista{font-size:24px;font-family:Novecento;font-weight:bold}.numeroIndex{font-size:28px;font-family:Roboto-Regular;text-align:left;width:10%;padding-right:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.numeroIndex label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.informacionList{font-family:Roboto;width:95%;padding-top:8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.informacionList>label{color:#424242;font-weight:bold;font-size:20px;font-family:Roboto;line-height:1;overflow:hidden}@supports(-webkit-line-clamp: 3){.informacionList>label{display:block;display:-webkit-box !important;line-height:1.1;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 3){.informacionList>label{position:relative;line-height:1.1;overflow:hidden;width:100%}.informacionList>label:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.informacionList h3{line-height:1.5;margin-top:4px;font-weight:400;font-family:Roboto-Regular;font-size:17px;color:#848387;text-align:left}.informacionList span{font-family:Roboto;font-weight:bold;font-size:20px;color:#008894;text-align:left}.informacionList h1{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.informacionList .tooltip{font-family:Roboto;font-weight:400;font-size:18px;position:relative;display:inline-block;cursor:pointer}.informacionList .tooltip>.tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.informacionList .tooltip:hover>.tooltiptext{visibility:visible;opacity:1;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.informacionList .tooltip>.tooltiptext{visibility:hidden;width:initial;background-color:#424242;color:#fff;font-family:\"Roboto\";text-align:left;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;margin-top:0px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}.informacionList .tooltip>label{color:#fff}.segundaSeccionList{height:82%;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid;width:100%;border-top:1px solid;overflow:auto}.tituloCliente{width:100%;height:50%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lista{width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.titulosLista{height:15%;padding-top:15px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:15px;min-height:90px}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:50%}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:650px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cargaDoc{width:100%;height:100%;background-color:#eceef0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.carga{display:none}.carga::-webkit-file-upload-button{opacity:0}.titulo{width:100%;height:5%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #424242;padding:5px;min-height:40px}.titulo label{font-family:novecento;font-weight:bold;font-size:24px;justify-items:center}.recargar{width:100%;height:5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.contentRefuse{height:100%;overflow:auto;width:69%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.vistDoc{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:20px;padding-bottom:10px;padding-right:30px;padding-left:30px}.textoImagen{color:#424242;font-size:32px;text-align:center;position:relative;font-family:Roboto;font-weight:bold;opacity:.5;margin-top:5px}.imgeArchivo{height:265px;width:204px;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;text-align:center}.cargarDocumento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.documento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:10px;width:100%;height:80%}.documentoCarga{height:90%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:10px}.seccionDocument{height:calc(100% - 99px);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:20px}.hojaSeguridad{height:98px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:67px;background:#eceef0}.hojaSeguridad>div{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.hojaSeguridad>div>label{font-family:Roboto;font-weight:bold;font-size:18px;color:#424242;padding-right:5px}.extension{opacity:.3;font-family:Roboto;font-weight:bold;font-size:24px;color:#424242}.totales{height:25px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px}.totales>label{font-family:Roboto;font-weight:400;font-size:14px;color:#424242;text-align:left;padding-right:60px}.selectedData{line-height:1.2}.selectedData label{color:#424242;font-weight:bold;font-size:20px;font-family:Roboto;overflow:hidden}@supports(-webkit-line-clamp: 2){.selectedData label{display:block;display:-webkit-box !important;line-height:1.1;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}}@supports not (-webkit-line-clamp: 2){.selectedData label{position:relative;line-height:1.1;overflow:hidden;width:100%}.selectedData label:before{content:\"        \";position:absolute;bottom:0;right:0;background:transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;background:transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%}}.selectedData h3{line-height:1.5;margin-top:4px;font-weight:400;font-family:Roboto-Regular;font-size:17px;color:#848387;text-align:left}.selectedData span{font-family:Roboto;font-weight:bold;font-size:20px;color:#008894;text-align:left}.selectedData h1{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.bloqueoCarga{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}::ng-deep .dropListSelect .container-drop .Title>p{font-weight:bold !important;color:#008894}::ng-deep .dropList .container-drop .Title>p{font-weight:400 !important}.infoProducto{height:10%;width:100%}.descarga{font-family:Roboto;font-weight:bold;font-size:20px;color:#008894 !important;text-align:left}label.descarga:hover{border-bottom:1px solid;border-bottom:1px solid}.descargaToltip{font-size:12px}label.descargaToltip:hover{border-bottom:1px solid}@media all and (min-height: 770px)and (max-height: 1090px){.textoImagen{font-size:28px}.extension{font-size:20px}.imgeArchivo{height:247px;width:114px;-webkit-transition:width .8s;transition:width .8s}.infoProducto{height:15%}.selectedData>label{font-size:18px}.selectedData>span{font-size:18px}}"

/***/ }),

/***/ "./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargarDocumentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CargarDocumentoComponent = /** @class */ (function () {
    function CargarDocumentoComponent(_trabjarArribo, coreContainer, comunService) {
        this._trabjarArribo = _trabjarArribo;
        this.coreContainer = coreContainer;
        this.comunService = comunService;
        this.regreVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.val = 1;
        this.listaFD = [];
        /*****PRUEBA DE LISTA*****/
        this.lista = [];
        this.listaUniveso = [];
        this.pdf = '';
        this.htmlToAdd = '';
        this.folio = '';
        this.deshabilitar = '';
        this.pathProd = 'http://proquifa.com.mx:51725/SAP/';
        this.listaContacto = [];
    }
    CargarDocumentoComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object;
        obj.nombre = 'Seleccionar';
        this.selectedTipoContac = obj;
        this.activbarCargdaDoc = true;
        this.primerCarga = true;
        this.usuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.obtenerDatosContacto();
        var datos = { responsable: this.usuario, idProveedor: this.datosProveedor.idProveedor };
        this.obtenerProdutos(datos);
        // console.log('=====', this.datosProveedor);
    };
    CargarDocumentoComponent.prototype.obtenerDatosContacto = function () {
        var _this = this;
        this._trabjarArribo.contactoProveedor(this.datosProveedor.idProveedor).subscribe(function (data) {
            var listaContacto = data.current;
            for (var i = 0; i < listaContacto.length; i++) {
                _this.listaContacto.push({ nombre: listaContacto[i].nombre, key: i, departament: listaContacto[i].departamento,
                    puesto: listaContacto[i].puesto, email: listaContacto[i].email, titulo: listaContacto[i].titulo, tel: listaContacto[i].telefono });
            }
            _this.activarCombo = true;
        }, function (error) {
            console.log('Error -->', error);
        });
    };
    CargarDocumentoComponent.prototype.obtenerProdutos = function (datos) {
        var _this = this;
        this.lista = [];
        this.listaUniveso = [];
        this.coreContainer.openModal(0);
        this._trabjarArribo.obtenerProductosFaltantesPorProveedor(datos).subscribe(function (data) {
            // console.log('Soy datos:::', data.current);
            var listaProd = data.current;
            var fechaInsp;
            var feeAux;
            for (var i = 0; i < listaProd.length; i++) {
                feeAux = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaProd[i].fee);
                if (listaProd[i].fechaInspeccion !== null) {
                    fechaInsp = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaProd[i].fechaInspeccion);
                }
                else {
                    fechaInsp = 'ND';
                }
                _this.lista.push({ folio: listaProd[i].codigo, inspector: listaProd[i].inspector, pedidoI: listaProd[i].cpedido,
                    tipo: listaProd[i].tipo, lote: listaProd[i].lote, oc: listaProd[i].compra,
                    producto: listaProd[i].concepto, DRE: listaProd[i].dre, fechaI: fechaInsp, FEE: feeAux,
                    listaRechazos: listaProd[i].lstRechazos, idFabrica: listaProd[i].idFabrica, identificador: listaProd[i].identificador });
                _this.listaUniveso.push({ folio: listaProd[i].codigo, inspector: listaProd[i].inspector, pedidoI: listaProd[i].cpedido,
                    tipo: listaProd[i].tipo, lote: listaProd[i].lote, oc: listaProd[i].compra,
                    producto: listaProd[i].concepto, DRE: listaProd[i].dre, fechaI: fechaInsp, FEE: feeAux,
                    listaRechazos: listaProd[i].lstRechazos, idFabrica: listaProd[i].idFabrica, identificador: listaProd[i].identificador });
            }
            _this.seleccionarItem(_this.lista[0], 0);
            _this.coreContainer.closeModal(0);
        }, function (error) {
            _this.coreContainer.closeModal(0);
        });
    };
    CargarDocumentoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.lista = this.listaUniveso.slice();
        }
        else {
            this.listaUniveso.forEach(function (folio) {
                if (folio.oc.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 || folio.producto.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 ||
                    folio.inspector.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 || folio.tipo.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 ||
                    folio.lote.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        this.buscarIndice();
    };
    CargarDocumentoComponent.prototype.buscarIndice = function () {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.folio === this.lista[i].folio) {
                this.indice = i + 1;
            }
        }
        return false;
    };
    CargarDocumentoComponent.prototype.fileChange2 = function ($event) {
        if (this.val === 1) {
            this.primerCarga = false;
            this.val = 2;
        }
        console.log($event);
        this.fileCertificado = $event.target.files;
        this.valitarBtn();
        this.mostrarDocumento(this.fileCertificado);
    };
    CargarDocumentoComponent.prototype.mostrarDocumento = function (fileInput) {
        var doc = document.querySelector('#preview');
        var $img = document.querySelector('#preview');
        var reader = new FileReader();
        /*Validación para eliminar si ya existe un elemento*/
        if (document.querySelector('#preview')) {
            document.querySelector('#preview').children[0].remove();
        }
        /******************/
        reader.onload = function (e) {
            document.querySelector('#preview').insertAdjacentHTML('afterbegin', '<iframe id="pdf" src="' + e.target.result + '" width="100%" height="100%" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">');
        };
        reader.readAsDataURL(fileInput[0]);
    };
    CargarDocumentoComponent.prototype.recibeDocumentacion = function (archivo) {
        console.log('archivo:::', archivo);
        this.fileHojaS = archivo;
        this.valitarBtn();
    };
    CargarDocumentoComponent.prototype.recibirItem = function (item) {
        // console.log('Soy item contacto', item);
        if (item.nombre !== 'Seleccionar') {
            this.itemContacto = item;
            this.nombreContacto = item.nombre;
        }
        else {
            this.nombreContacto = 'Seleccionar';
            this.itemContacto = { email: '' };
        }
        this.valitarBtn();
    };
    CargarDocumentoComponent.prototype.seleccionarItem = function (item, i) {
        var _this = this;
        setTimeout(function () {
            _this.hojaS = false;
        }, 200);
        this.deshabilitar = '';
        setTimeout(function () {
            _this.hojaS = true;
        }, 200);
        this.primerCarga = true;
        this.val = 1;
        this.seleccionado = true;
        this.listaFD = [];
        this.fileCertificado = null;
        /*this.listaFD = new Array(this.lista.length).fill('');
        this.listaFD[i] = 'divActive';*/
        this.itemSelect = item;
        this.folio = item.identificador;
        this.indice = i + 1;
        this.valitarBtn();
    };
    CargarDocumentoComponent.prototype.valitarBtn = function () {
        if (this.fileCertificado !== undefined && this.fileCertificado !== null && this.seleccionado === true) {
            this.activarBtn = true;
        }
        else {
            this.activarBtn = false;
        }
    };
    CargarDocumentoComponent.prototype.finalizar = function () {
        var _this = this;
        var conHoja;
        if (this.fileHojaS !== undefined && this.fileHojaS !== null) {
            conHoja = 'S';
        }
        else {
            conHoja = 'N';
        }
        var nameFile;
        var datos = { responsable: this.usuario, idProveedor: this.datosProveedor.idProveedor };
        this.datosEnviar = { codigo: this.itemSelect.folio,
            lote: this.itemSelect.lote,
            hoja: conHoja };
        console.log('Soy datos a enviar ::', this.datosEnviar);
        this._trabjarArribo.finalizarDocumentacionFaltante(this.datosEnviar).subscribe(function (data) {
            if (data.current === true) {
                nameFile = _this.itemSelect.folio + '-' + _this.itemSelect.lote + '.pdf';
                _this.guardarDocumentos(_this.fileCertificado, nameFile, 'certificados');
                if (_this.fileHojaS !== undefined && _this.fileHojaS !== null) {
                    nameFile = _this.itemSelect.folio + '.pdf';
                    _this.guardarDocumentos(_this.fileHojaS, nameFile, 'hojasseguridad');
                }
                if (_this.listaUniveso.length > 1) {
                    _this.regreVista.emit(false);
                    _this.obtenerProdutos(datos);
                }
                else {
                    _this.regreVista.emit(true);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    CargarDocumentoComponent.prototype.guardarDocumentos = function (archivo, nombre, tipo) {
        this._trabjarArribo.uploadFile(archivo, nombre, tipo, this.itemSelect.idFabrica).subscribe(function (data) {
            console.log('Entre a data archivo :::', data.current);
        }, function (error) {
        });
    };
    CargarDocumentoComponent.prototype.visualizarDoc = function (tipo, dato) {
        var _this = this;
        var tipoArchivo;
        if (tipo === 'PEDIDO') {
            tipoArchivo = 'Pedidos';
        }
        else if (tipo === 'OC') {
            // his.pathVisualizar = this.pathProd + 'Ordenes de compra/' + dato + '-P.pdf';
            tipoArchivo = 'Compra';
        }
        this.comunService.obtenerRuta(dato, tipoArchivo, '').then(function (data) {
            _this.pathVisualizar = data;
            _this.openNewBrowser(_this.pathVisualizar);
        });
    };
    CargarDocumentoComponent.prototype.openNewBrowser = function (path) {
        console.log('Entre ');
        var shell = electron.shell;
        shell.openExternal(path);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CargarDocumentoComponent.prototype, "datosProveedor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CargarDocumentoComponent.prototype, "regreVista", void 0);
    CargarDocumentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-cargar-documento',
            template: __webpack_require__("./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.html"),
            styles: [__webpack_require__("./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */], __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */]])
    ], CargarDocumentoComponent);
    return CargarDocumentoComponent;
}());



/***/ }),

/***/ "./src/app/components/productos-doc-faltante/productos-doc-faltante-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosDocFaltanteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos_doc_faltante_component__ = __webpack_require__("./src/app/components/productos-doc-faltante/productos-doc-faltante.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductosDocFaltanteRoutingModule = /** @class */ (function () {
    function ProductosDocFaltanteRoutingModule() {
    }
    ProductosDocFaltanteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__productos_doc_faltante_component__["a" /* ProductosDocFaltanteComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ProductosDocFaltanteRoutingModule);
    return ProductosDocFaltanteRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/productos-doc-faltante/productos-doc-faltante.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\r\n  <!--Seccion de menu-->\r\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\r\n    <aside [ngClass]=\"classAsideMenu\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\" style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\r\n    </div>\r\n  </div>\r\n  <!--Termina seccion de menu-->\r\n  <!--Empieza el area de trabajo-->\r\n  <div class=\"area\">\r\n    <!--Empieza la cabezera-->\r\n    <div class=\"cabezera\">\r\n      <div>\r\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaP\" (click)=\"regresarVistaP()\">\r\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\r\n        </div>\r\n        <label class=\"etiqueta\">PRODUCTOS CON DOCUMENTACIÓN FALTANTE</label>\r\n      </div>\r\n      <div *ngIf=\"!vistaP\">\r\n        <label class=\"title\">{{cliente}}</label>\r\n      </div>\r\n    </div>\r\n    <!--Termina la cabezera-->\r\n    <!--Empiezan los componentes-->\r\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\r\n        <div style=\"height: 100%; width: 100%;display: flex\" *ngIf=\"vistaP\">\r\n          <div class=\"primeraSec\">\r\n            <div class=\"titulosLista\">\r\n              <div  class=\"tituloCliente\">\r\n                <label class=\"tituloLista\">PROVEEDORES</label>\r\n              </div>\r\n              <div class=\"organizarLista\">\r\n                <div style=\"width: 10%; height: 100%;    display: flex;align-items: center;\">\r\n                  <div class=\"menu\" (click)=\"abreCombo()\">\r\n                    <div>\r\n                    </div>\r\n                    <div>\r\n                    </div>\r\n                    <div>\r\n                    </div>\r\n                    <section id=\"section\">\r\n                      <ul class=\"listaHamburguesa\">\r\n                        <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\r\n                        <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\r\n                      </ul>\r\n                    </section>\r\n                  </div>\r\n                </div>\r\n                <div style=\"width: 30%; height: 100%;    display: flex;align-items: center;\">\r\n                  <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\r\n                </div>\r\n                <div class=\"barraBusqueda\" style=\"height: 100%\">\r\n                  <div class=\"buscar\">\r\n                    <div>\r\n                      <div class=\"lupa\">\r\n                        <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                      </div>\r\n                      <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Proveedor\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Lista total-->\r\n            <div class=\"listaSeccionUno\">\r\n              <div>\r\n                <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\r\n                  <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                    <div class=\"imagenFlecha\">\r\n                      <img src=\"./assets/Images/regresarAzul.svg\" class=\"flechaInicio\" (click)=\"seleccionarItem(i, item)\">\r\n                    </div>\r\n                    <div class=\"dfSelect\"></div>\r\n                    <div class=\"datosLst\" style=\"padding-top: 10px;padding-left: 15px; display: flex\">\r\n                      <div class=\"numeroIndex\">\r\n                        <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\r\n                      </div>\r\n                      <div class=\"informacionList\">\r\n                        <label style=\"color: #008894\">{{item.nombreProv}} </label>\r\n                        <p>{{item.cantidad}} {{item.totalOc}} OC · {{item.totalProd}} Productos</p>\r\n                        <h3 class=\"textoPiezas\">Fecha de Inspección: {{item.fecha}} </h3>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"totales\">\r\n                <label>#{{lista.length}}</label>\r\n                <label>{{totalesGrafica.totalProveedores}} Proveedores</label>\r\n                <label>{{totalesGrafica.totalOC}} OC</label>\r\n                <label>{{totalesGrafica.totalProducto}} Productos</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"contenidoGrafica\">\r\n            <div class=\"grafica\">\r\n              <pn-donut-chart *ngIf=\"activarGrafica\" [data]=\"dataProveedores\" [tipoGrafica]=\"tipoGrafica\" [height]=\"'auto'\"></pn-donut-chart>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <pn-cargar-documento *ngIf=\"!vistaP\" [datosProveedor]=\"itemProveedor\" (regreVista)=\"cargarVista($event)\"></pn-cargar-documento>\r\n    </div>\r\n    <!--Terminan los componentes-->\r\n    <div style=\"width: 100%;height: 55px\">\r\n      <footer class=\"footer\">\r\n        <div class=\"datosFooter\">\r\n          <div class=\"Prioridad1\" *ngIf=\"vistaP\">\r\n            <label class=\"p1\">OC: </label> Orden de Compra\r\n          </div>\r\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\r\n            <label class=\"p1\">FEE: </label> Fecha Estimada de Entrega\r\n          </div>\r\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\r\n            <label class=\"p1\">DRE: </label> Días Restantes de Entrega\r\n          </div>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n  <!--Termina area de trabajo-->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/productos-doc-faltante/productos-doc-faltante.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.area{width:100%;height:100%;overflow:auto}.cabezera{width:100%;height:64px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:13px;padding-right:13px;border-bottom:2px solid #000;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cabezera>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cabezera>div>.title{font-family:Novecento;font-weight:bold;font-size:24px;color:#008894;text-align:right}.etiqueta{color:#5b5b5b;font-size:25px;font-family:Novecento;margin-bottom:5px}.img{cursor:pointer}.lista{border-bottom:solid 1px #eceef0;border-bottom:solid 1px #eceef0;width:100%;min-height:80px;font-size:20px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst label{color:#008895;padding-left:-2px;font-family:\"Roboto-Bold\";font-size:28px}.lista>.divActive .datosLst p{font-family:\"Roboto-Bold\";font-size:24px;color:#000;line-height:26px}.lista>.divActive .datosLst h3{font-family:\"Roboto-regular\";font-size:21px}.textoPiezas{font-family:\"Roboto-regular\";font-size:21px}.titulo{padding-left:30px;font-family:Novecentowide;font-weight:Bold;font-size:24px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:50px;width:100%;border-style:solid;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.footer{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-webkit-box-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;min-width:759px;-webkit-box-sizing:border-box;box-sizing:border-box}.linea{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;text-align:center}.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px}.Prioridad1,.Prioridad2,.Prioridad3,.Ambiente,.Congelación,.Refrigeración,.Pedimento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.p1{color:#424242;font-weight:bold}.p2{color:#424242;font-weight:bold}.p3{color:#424242;font-weight:bold}.p1,.p2,.p3{margin-right:6px}.datosC{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:1608px;margin-left:20px;margin-right:20px;width:98%}.tituloGrafica{font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}.grafica{height:80%;width:70%;display:-webkit-box;display:-ms-flexbox;display:flex}.contenidoGrafica{width:70%;background:#eceef0;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-ms-flexbox;display:flex}.menu{position:relative}.menu:HOVER{cursor:pointer}.menu>div{width:20px;height:2px;background:#000;margin:5px}section{position:absolute;visibility:hidden;height:0}section.visible{visibility:visible;height:74px;overflow:auto;width:219px;background:#fff;z-index:2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;border-left:1px solid #eceef0;border-right:1px solid #eceef0}.listaHamburguesa{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:15px;padding-right:15px}.listaHamburguesa>li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:.5px solid #eceef0;padding-bottom:5px;padding-top:5px}.listaHamburguesa>li:hover{background-color:#eceef0}.tituloCliente{width:50%;height:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.titulosLista{height:10%;padding-top:15px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:15px;min-height:90px}.tituloLista{font-size:24px;font-family:Novecento;font-weight:bold}.organizarLista{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:10px;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:50%}.primeraSec{width:30%;background:#fff;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:20px;margin-right:20px;min-width:350px}.primeraSec>.listaSeccionUno{height:90%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.primeraSec>.listaSeccionUno>div{height:calc(100% - 30px);border-bottom:1px solid;width:100%;border-top:1px solid;overflow:scroll}.primeraSec>.listaSeccionUno>.totales{height:30px;width:100%;border-bottom:0;border-top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.informacionList{font-family:Roboto;width:85%;padding-top:8px}.informacionList label{color:#008894;font-weight:bold;font-size:24px;font-family:Roboto;line-height:1}.informacionList span{min-height:23px;max-height:46px;font-weight:bold;font-size:20px;color:#424242;font-family:Roboto}.informacionList h3{font-size:17px;font-family:Roboto;color:#424242;line-height:1.5;margin-top:4px;font-weight:400}.informacionList p{font-family:Roboto;font-weight:bold;font-size:24px;color:#424242}.numeroIndex{font-size:28px;font-family:Roboto;font-weight:400;color:#242424;text-align:left;padding-right:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px}.subtitulo{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;text-align:left}.imagenFlecha{position:absolute;right:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;height:100%}.flechaInicio{width:100%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}"

/***/ }),

/***/ "./src/app/components/productos-doc-faltante/productos-doc-faltante.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosDocFaltanteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductosDocFaltanteComponent = /** @class */ (function () {
    function ProductosDocFaltanteComponent(comunService, _trabajarArribo, coreContainer) {
        this.comunService = comunService;
        this._trabajarArribo = _trabajarArribo;
        this.coreContainer = coreContainer;
        this.classAsideMenu = 'asideNormalMenu';
        this.lista = [];
        this.listaUniveso = [];
        this.dataFacturacion = {
            titulo: 'Totales',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['Proveedores'], ['Productos'], ['OC']],
            labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
            valuesExtras: [6, 324, 15],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50], [324, 157, 50]]
        };
        this.filtroProveedores = [];
    }
    ProductosDocFaltanteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'docFaltante') {
                _this.activeMenu = false;
                _this.usuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
                _this.obtenerDatos(_this.usuario);
                _this.obtenerValoresMenu(_this.usuario);
            }
        });
        this.tipoOrden = 'Todos';
        this.vistaP = true;
        this.usuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.obtenerDatos(this.usuario);
        this.obtenerValoresMenu(this.usuario);
    };
    /*Metodos para el menu de secciones*/
    ProductosDocFaltanteComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = "asideOcultarMenu";
        }
        else {
            this.classAsideMenu = "asideMostrarMenu";
        }
    };
    /*****/
    ProductosDocFaltanteComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    ProductosDocFaltanteComponent.prototype.regresarVistaP = function () {
        this.vistaP = true;
    };
    ProductosDocFaltanteComponent.prototype.obtenerValoresMenu = function (idUsuario) {
        var _this = this;
        this.rolMaster = false;
        var roles = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        this._trabajarArribo.obtenerTotales(idUsuario).subscribe(function (data) {
            for (var i = 0; i < roles.length; i++) {
                if (roles[i] === 'Comprador_Master') {
                    _this.rolMaster = true;
                }
            }
            console.log(data);
            if (_this.usuario === 'LRosas') {
                _this.itemsMenu = [
                    { rol: 'GESTOR DE COMPRAS', active: true, menu: [{ nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', disable: true, tipo: 'valor', valor: data.current.ArriboDocumentos, select: true },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: false },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false },
                                    { nombre: 'Saldo', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }] },
                    { rol: 'GESTOR DE OPERACIONES', active: false, menu: [
                            { nombre: 'Consola de Prioridades', url: 'consolaPrioridades', tipo: 'flecha' },
                            { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                            { nombre: 'Material en Stock', url: 'stock', select: false },
                            { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }
                        ] }
                ];
            }
            else {
                _this.itemsMenu = [
                    { rol: 'GESTOR DE COMPRAS', active: true, menu: [
                            { nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', disable: true, tipo: 'valor', valor: data.current.ArriboDocumentos, select: true },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: false },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false },
                                    { nombre: 'Saldo', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }
                        ] }
                ];
            }
            _this.activeMenu = true;
        }, function (error) {
        });
    };
    ProductosDocFaltanteComponent.prototype.obtenerDatos = function (usuario) {
        var _this = this;
        this.lista = [];
        this.listaUniveso = [];
        this.coreContainer.openModal(0);
        this._trabajarArribo.documentacionFaltante(usuario).subscribe(function (data) {
            var listaGnr = data.current.lista;
            if (data.current.grafica && data.current.grafica !== undefined && data.current.grafica !== null) {
                _this.listaProveedores = data.current.grafica;
                _this.totalesGrafica = data.current.totales;
                _this.llenarValoresData();
                _this.calcularDatosParaGraficas();
            }
            else {
                _this.listaProveedores = [];
                _this.llenarValoresData();
            }
            var fechaFormat;
            var fecha;
            /*LLenado de lista*/
            for (var i = 0; i < listaGnr.length; i++) {
                fecha = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaGnr[i].fechaInspeccion);
                _this.lista.push({ nombreProv: listaGnr[i].proveedor, fecha: fecha,
                    fechaInspeccion: listaGnr[i].fechaInspeccion,
                    totalOc: listaGnr[i].totalOC, totalProd: listaGnr[i].totalProducto,
                    idProveedor: listaGnr[i].idProveedor });
                _this.listaUniveso.push({ nombreProv: listaGnr[i].proveedor, fecha: fecha,
                    fechaInspeccion: listaGnr[i].fechaInspeccion,
                    totalOc: listaGnr[i].totalOC, totalProd: listaGnr[i].totalProducto,
                    idProveedor: listaGnr[i].idProveedor });
            }
            _this.coreContainer.closeModal(0);
        }, function (error) {
            _this.coreContainer.closeModal(0);
        });
    };
    ProductosDocFaltanteComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.lista = this.listaUniveso.slice();
        }
        else {
            this.listaUniveso.forEach(function (folio) {
                if (folio.nombreProv.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        if (this.lista.length > 0) {
            if (this.tipoOrden === 'Más Recientes') {
                this.ordenamientoFechaTramNue();
            }
            else if (this.tipoOrden === 'Más Antiguos') {
                this.ordenamientoFechaTramAnt();
            }
        }
    };
    ProductosDocFaltanteComponent.prototype.ordenamientoFechaTramNue = function () {
        this.tipoOrden = 'Más Recientes';
        this.lista.sort(function (a, b) {
            if (a.fechaInspeccion < b.fechaInspeccion) {
                return 1;
            }
            if (a.fechaInspeccion > b.fechaInspeccion) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    ProductosDocFaltanteComponent.prototype.ordenamientoFechaTramAnt = function () {
        this.tipoOrden = 'Más Antiguos';
        this.lista.sort(function (a, b) {
            if (a.fechaInspeccion > b.fechaInspeccion) {
                return 1;
            }
            if (a.fechaInspeccion < b.fechaInspeccion) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    ProductosDocFaltanteComponent.prototype.llenarValoresData = function () {
        var _this = this;
        this.filtroProveedores = [];
        for (var _i = 0, _a = this.listaProveedores; _i < _a.length; _i++) {
            var valor = _a[_i];
            this.filtroProveedores.push(valor.proveedor);
        }
        var valoresP = [];
        var valoresProv = [];
        for (var _b = 0, _c = this.listaProveedores; _b < _c.length; _b++) {
            var nombre = _c[_b];
            valoresProv.push([0, 0, 0]);
            valoresP.push(0);
        }
        if (this.listaProveedores.length > 0) {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: this.filtroProveedores,
                valores: valoresP,
                labelsExtras: ['Proveedores', 'Productos', 'OC'],
                labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
                valuesExtras: [this.totalesGrafica.totalProveedores, this.totalesGrafica.totalProducto, this.totalesGrafica.totalOC],
                valuesExtrasHover: valoresProv
            };
            this.tipoGrafica = 'General';
        }
        else {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: [""],
                valores: [1],
                labelsExtras: ['Proveedores', 'Productos', 'OC'],
                labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0, 0]]
            };
            this.tipoGrafica = 'Gris';
            setTimeout(function () {
                _this.activarGrafica = true;
            }, 5);
        }
    };
    ProductosDocFaltanteComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.listaProveedores; _i < _a.length; _i++) {
            var productos = _a[_i];
            this.llenarTotalesGraficas(this.dataProveedores, productos, 'PROVEEDORES');
        }
    };
    ProductosDocFaltanteComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida) {
        var _this = this;
        switch (graficaElegida) {
            case 'PROVEEDORES':
                var valuesExtraAux = total.valuesExtras;
                var posicion1 = this.filtroProveedores.indexOf(elemento.proveedor);
                total.valuesExtrasHover[posicion1][0] += elemento.totalProveedores;
                total.valuesExtrasHover[posicion1][1] += +(elemento.totalProducto);
                total.valuesExtrasHover[posicion1][2] += elemento.totalOC;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*total.valuesExtras[1] = elemento.totalProducto;
                total.valuesExtras[0] += elemento.totalProveedores; // Total de Partidas
                total.valuesExtras[2] += elemento.totalOC;*/
                total.valores[posicion1] += elemento.totalProducto; // +(elemento.monto.toFixed(2)); //Monto total
                setTimeout(function () {
                    _this.activarGrafica = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    ProductosDocFaltanteComponent.prototype.seleccionarItem = function (i, item) {
        this.cliente = item.nombreProv;
        this.itemProveedor = item;
        this.vistaP = false;
    };
    ProductosDocFaltanteComponent.prototype.cargarVista = function (valor) {
        var _this = this;
        this.obtenerDatos(this.usuario);
        this.obtenerValoresMenu(this.usuario);
        if (valor === true) {
            this.regresarVistaP();
        }
        setTimeout(function () {
            _this.activarGrafica = false;
        }, 5);
    };
    ProductosDocFaltanteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-productos-doc-faltante',
            template: __webpack_require__("./src/app/components/productos-doc-faltante/productos-doc-faltante.component.html"),
            styles: [__webpack_require__("./src/app/components/productos-doc-faltante/productos-doc-faltante.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */], __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], ProductosDocFaltanteComponent);
    return ProductosDocFaltanteComponent;
}());



/***/ }),

/***/ "./src/app/components/productos-doc-faltante/productos-doc-faltante.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosDocFaltanteModule", function() { return ProductosDocFaltanteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productos_doc_faltante_component__ = __webpack_require__("./src/app/components/productos-doc-faltante/productos-doc-faltante.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productos_doc_faltante_routing_module__ = __webpack_require__("./src/app/components/productos-doc-faltante/productos-doc-faltante-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cargar_documento_cargar_documento_component__ = __webpack_require__("./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_combo_sin_border_combo_sin_border_module__ = __webpack_require__("./src/app/components/shared/combo-sin-border/combo-sin-border.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ProductosDocFaltanteModule = /** @class */ (function () {
    function ProductosDocFaltanteModule() {
    }
    ProductosDocFaltanteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__productos_doc_faltante_routing_module__["a" /* ProductosDocFaltanteRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_combo_sin_border_combo_sin_border_module__["a" /* ComboSinBorderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__productos_doc_faltante_component__["a" /* ProductosDocFaltanteComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cargar_documento_cargar_documento_component__["a" /* CargarDocumentoComponent */]
            ]
        })
    ], ProductosDocFaltanteModule);
    return ProductosDocFaltanteModule;
}());



/***/ })

});
//# sourceMappingURL=productos-doc-faltante.module.chunk.js.map