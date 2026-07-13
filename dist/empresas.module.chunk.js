webpackJsonp(["empresas.module"],{

/***/ "./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"opcion\" [homePath]=\"homePath\"></pn-header-bc>\r\n<div class=\"container\">\r\n    <div class=\"containerTitle\">Datos Generales</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">ID</label>\r\n            <input [(ngModel)]=\"empresa.nomenclaturaEmpresa\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Nombre</label>\r\n            <input [(ngModel)]=\"empresa.alias\" class=\"containerFormsInputsInput\" style=\"width:337px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[0] }}</span><!-- Factor Riesgo -->\r\n            <pq-drop-list style=\"width:307px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[0]\" [isSearch]=\"isSearchParent[0]\" [isCategory]=\"isCategoryParent[0]\" [size]=\"sizeParent[0]\" [align]=\"alignParent[0]\" [itemSelect]=\"itemSelectParent[0]\" [widthContent]=\"widthContentParent[0]\" [marginLeftContent]=\"marginLeftContentParent[0]\" [tooltip]=\"tooltipParent[0]\" [tipoDrop]=\"tipoDropParent[0]\" [campoLabel]=\"campoLabelParent[0]\" [heightDrop]=\"heightDropParent[0]\" [colorBorderDrop]=\"colorBorderDropParent[0]\" (valueDropList)=\"fnGetValueDropList($event, 0)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Registro Patronal</label>\r\n            <input [(ngModel)]=\"empresa.registroPatronal\" class=\"containerFormsInputsInput\" style=\"width:240px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Sitio Web</label>\r\n            <input [(ngModel)]=\"empresa.sitioWeb\" class=\"containerFormsInputsInput\" style=\"width:390px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[1] }}</span><!-- Sector Empresarial -->\r\n            <pq-drop-list style=\"width:330px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[1]\" [isSearch]=\"isSearchParent[1]\" [isCategory]=\"isCategoryParent[1]\" [size]=\"sizeParent[1]\" [align]=\"alignParent[1]\" [itemSelect]=\"itemSelectParent[1]\" [widthContent]=\"widthContentParent[1]\" [marginLeftContent]=\"marginLeftContentParent[1]\" [tooltip]=\"tooltipParent[1]\" [tipoDrop]=\"tipoDropParent[1]\" [campoLabel]=\"campoLabelParent[1]\" [heightDrop]=\"heightDropParent[1]\" [colorBorderDrop]=\"colorBorderDropParent[1]\" (valueDropList)=\"fnGetValueDropList($event, 1)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Calle</label>\r\n            <input [(ngModel)]=\"empresa.calle\" class=\"containerFormsInputsInput\" style=\"width:385px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número</label>\r\n            <input [(ngModel)]=\"empresa.numero\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Colonia</label>\r\n            <input [(ngModel)]=\"empresa.colonia\" class=\"containerFormsInputsInput\" style=\"width:539px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Código Postal</label>\r\n            <input [(ngModel)]=\"empresa.cp\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Estado</label>\r\n            <input [(ngModel)]=\"empresa.estado\" class=\"containerFormsInputsInput\" style=\"width:198px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Municipio/Delegación</label>\r\n            <input [(ngModel)]=\"empresa.delegacion\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">Datos Fiscales</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Razón Social</label>\r\n            <input [(ngModel)]=\"empresa.razonSocial\" class=\"containerFormsInputsInput\" style=\"width:400px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[2] }}</span><!-- Regimen Fiscal -->\r\n            <pq-drop-list style=\"width:400px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[2]\" [isSearch]=\"isSearchParent[2]\" [isCategory]=\"isCategoryParent[2]\" [size]=\"sizeParent[2]\" [align]=\"alignParent[2]\" [itemSelect]=\"itemSelectParent[2]\" [widthContent]=\"widthContentParent[2]\" [marginLeftContent]=\"marginLeftContentParent[2]\" [tooltip]=\"tooltipParent[2]\" [tipoDrop]=\"tipoDropParent[2]\" [campoLabel]=\"campoLabelParent[2]\" [heightDrop]=\"heightDropParent[2]\" [colorBorderDrop]=\"colorBorderDropParent[2]\" (valueDropList)=\"fnGetValueDropList($event, 2)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">RFC</label>\r\n            <input [(ngModel)]=\"empresa.rfcEmpresa\" class=\"containerFormsInputsInput\" style=\"width:275px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Contraseña SAT</label>\r\n            <input [(ngModel)]=\"empresa.contraseniaSAT\" class=\"containerFormsInputsInput\" style=\"width:340px\" placeholder=\"Escribe Aquí\" type=\"password\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Serie</label>\r\n            <input [(ngModel)]=\"empresa.serie\" class=\"containerFormsInputsInput\" style=\"width:345px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Calle</label>\r\n            <input [(ngModel)]=\"empresa.calle2\" class=\"containerFormsInputsInput\" style=\"width:385px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número</label>\r\n            <input [(ngModel)]=\"empresa.numero2\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Colonia</label>\r\n            <input [(ngModel)]=\"empresa.colonia2\" class=\"containerFormsInputsInput\" style=\"width:539px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Código Postal</label>\r\n            <input [(ngModel)]=\"empresa.cp2\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Estado</label>\r\n            <input [(ngModel)]=\"empresa.estado2\" class=\"containerFormsInputsInput\" style=\"width:198px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Municipio/Delegación</label>\r\n            <input [(ngModel)]=\"empresa.delegacion2\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[3] }}</span><!-- Periodicidad de Pago -->\r\n            <pq-drop-list style=\"width:330px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[3]\" [isSearch]=\"isSearchParent[3]\" [isCategory]=\"isCategoryParent[3]\" [size]=\"sizeParent[3]\" [align]=\"alignParent[3]\" [itemSelect]=\"itemSelectParent[3]\" [widthContent]=\"widthContentParent[3]\" [marginLeftContent]=\"marginLeftContentParent[3]\" [tooltip]=\"tooltipParent[3]\" [tipoDrop]=\"tipoDropParent[3]\" [campoLabel]=\"campoLabelParent[3]\" [heightDrop]=\"heightDropParent[3]\" [colorBorderDrop]=\"colorBorderDropParent[3]\" (valueDropList)=\"fnGetValueDropList($event, 3)\"></pq-drop-list>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">Contacto</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Nombre</label>\r\n            <input [(ngModel)]=\"empresa.nombre\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Apellido Paterno</label>\r\n            <input [(ngModel)]=\"empresa.apellidoPaterno\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Apellido Materno</label>\r\n            <input [(ngModel)]=\"empresa.apellidoMaterno\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Correo Electrónico</label>\r\n            <input [(ngModel)]=\"empresa.correoElectronico\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Lada</label>\r\n            <input [(ngModel)]=\"empresa.lada1\" class=\"containerFormsInputsInput\" style=\"width:75px\" placeholder=\"000\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Teléfono 1</label>\r\n            <input [(ngModel)]=\"empresa.telefono1\" class=\"containerFormsInputsInput\" style=\"width:145px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Lada</label>\r\n            <input [(ngModel)]=\"empresa.lada2\" class=\"containerFormsInputsInput\" style=\"width:75px\" placeholder=\"000\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Teléfono 2</label>\r\n            <input [(ngModel)]=\"empresa.telefono2\" class=\"containerFormsInputsInput\" style=\"width:145px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">Carga de Documentación</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Logotipo</label>\r\n            <input (change)=\"fnGetFile($event, 0)\" id=\"fileEmp0\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"image/*\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[0] }} </div>\r\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[0]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[0]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[0]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Registro Patronal</label>\r\n            <input (change)=\"fnGetFile($event, 1)\" id=\"fileEmp1\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[1] }} </div>\r\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[1]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[1]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[1]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Certificado SAT</label>\r\n            <input (change)=\"fnGetFile($event, 2)\" id=\"fileEmp2\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pkix-cert\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[2] }} </div>\r\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[2]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[2]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Llave SAT</label>\r\n            <input (change)=\"fnGetFile($event, 3)\" id=\"fileEmp3\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pkcs8\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[3] }} </div>\r\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[3]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[3]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">\r\n        <div class=\"containerTitleItem1\">Trabajadores</div>\r\n        <div class=\"containerTitleItem2\" *ngIf=\"lstTrabajadores.length > 0\">\r\n            <img src=\"./assets/Images/maximinar.svg\" alt=\"Maximizar\" class=\"containerTitleItem2Img\">\r\n        </div>\r\n    </div>\r\n    <div class=\"lstTrabajadores\" *ngIf=\"lstTrabajadores.length > 0\">\r\n        <div class=\"lstTrabajadoresHeader\">\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 20px;max-width: 20px;justify-content: center;\">#</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 115px;max-width: 340px;\">Nombre</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 100px;max-width: 190px;\">Departamento</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 90px;max-width: 190px;\">Puesto</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 95px;max-width: 130px;\">RFC</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 100px;max-width: 150px;\">Teléfono</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 130px;max-width: 240px;\">Correo Electrónico</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 120px;max-width: 200px;\">Fecha de Ingreso</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 115px;max-width: 160px;\">Tipo de Contrato</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 80px;max-width: 150px;\">Estado</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 15px;max-width: 15px;\">&nbsp;</div>\r\n        </div>\r\n        <div class=\"lstTrabajadoresItem\" *ngFor=\"let item of lstTrabajadores; let i = index\">\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 20px;max-width: 20px;justify-content: center;\">{{i + 1}}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 115px;max-width: 340px;\">{{ item.nombre + ' ' + item.apellidoPaterno + ' ' + item.apellidoMaterno }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 100px;max-width: 190px;font-weight: 400;font-size: 16px;color: #008894;\">{{ item.departamento }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 90px;max-width: 190px;\">{{ item.puesto }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 95px;max-width: 130px;\">{{ item.datoFiscal.rfc }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 100px;max-width: 150px;\">{{ item.telefonoFijo }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 130px;max-width: 240px;\">{{ item.email }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 120px;max-width: 200px;\">{{ item.fechaInicioRelLaboral }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 115px;max-width: 160px;\">{{ item.contrato.descripcion }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 80px;max-width: 150px;\" [ngStyle]=\"{'color': (item.activo) ? '#4DA72C' : '#C1272D' }\">{{ (item.activo) ? 'Activo' : 'Finiquitado' }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 15px;max-width: 15px;\" (click)=\"fnVerTrabajador(item.idTrabajador)\"><img class=\"lstTrabajadoresItemColImg\" src=\"./assets/Images/ir.svg\" alt=\"Ir\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"lstTrabajadoresVacia\" *ngIf=\"lstTrabajadores.length === 0\">\r\n        <div class=\"lstTrabajadoresVaciaLabel\">NO HAS AGREGADO TRABAJADORES</div>\r\n        <div [ngClass]=\"classBtnAcceptTrab\">AGREGAR TRABAJADOR</div>\r\n        <div style=\"display: none;\">{{ empresa | json }}</div>\r\n    </div>\r\n    <div class=\"containerBtns\">\r\n        <div class=\"containerBtnsBtnCancel\" (click)=\"fnReturnView()\">CANCELAR</div>\r\n        <div [ngClass]=\"classBtnAccept\" (click)=\"fnSaveCompany()\">ACEPTAR</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:calc(100vh - 130px)}:host pn-header-bc{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:41px}:host>.container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0px 20px;height:calc(100vh - 170px);overflow:scroll}:host>.container>.containerTitle{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:44px;border-bottom:1px solid #424242;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding-bottom:5px;font-size:17px;color:#424242;font-weight:700;font-family:Novecento;text-transform:uppercase;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>.container>.containerTitle>.containerTitleItem1{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerTitle>.containerTitleItem2{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerTitle>.containerTitleItem2>img.containerTitleItem2Img{display:-webkit-box;display:-ms-flexbox;display:flex;width:30px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerTitle>.containerTitleItem2>img.containerTitleItem2Img:hover{opacity:.5}:host>.container>.containerTitle>.containerTitleItem2>img.containerTitleItem2Img:active{opacity:.75}:host>.container>.containerForms{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:-webkit-max-content;min-height:-moz-max-content;min-height:max-content;width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:15px 0px}:host>.container>.containerForms>.containerFormsInputs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:85px}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:20px}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksLabel{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:30px;margin-top:5px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz>.containerFormsInputsChecksUncheck{display:-webkit-box;display:-ms-flexbox;display:flex;width:18px;height:18px;margin-right:10px;border:1px solid #424242;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz>.checked{content:url(\"/assets/Images/checked20px.svg\")}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz>span.containerFormsInputsChecksSpan{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz:hover{opacity:.5}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz:active{opacity:.75}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFile{display:none}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox{display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:90px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxInput{display:-webkit-box;display:-ms-flexbox;display:flex;width:250px;height:28px;display:flex;border:1px solid #d8d8d8;font-size:16px;color:#424242;font-weight:400;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxInput:hover{opacity:.5}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxInput:active{opacity:.75}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload>.containerFormsInputsFileBoxUploadImg{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload:hover{opacity:.5}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload:active{opacity:.75}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;margin-right:10px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload>.containerFormsInputsFileBoxReloadImg{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload:hover{opacity:.5}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload:active{opacity:.75}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView>.containerFormsInputsFileBoxViewImg{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView:hover{opacity:.5}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView:active{opacity:.75}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsSpan{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}:host>.container>.containerForms>.containerFormsInputs>pq-drop-list{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerForms>.containerFormsInputs>label.containerFormsInputsLabel{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}:host>.container>.containerForms>.containerFormsInputs>input.containerFormsInputsInput{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:30px;margin-right:20px;margin-top:5px;border:1px solid #d8d8d8;font-size:16px;color:#424242;font-weight:400}:host>.container>.containerForms>.containerFormsInputLabel{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:55px}:host>.container>.containerForms>.containerFormsInputLabel>.containerFormsInputLabelCheck{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.lstTrabajadores{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:320px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host>.container>.lstTrabajadores>.lstTrabajadoresHeader{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:15px;color:#424242;font-weight:700;padding-bottom:4px;border-bottom:1px solid #424242;min-height:49px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>.container>.lstTrabajadores>.lstTrabajadoresHeader>.lstTrabajadoresHeaderCol{display:-webkit-box;display:-ms-flexbox;display:flex;width:calc(100% - 10px);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px 5px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.container>.lstTrabajadores>.lstTrabajadoresItem{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400;padding-bottom:4px;border-bottom:1px solid #424242;background:#fff;min-height:43px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #eceef0;cursor:pointer;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol{display:-webkit-box;display:-ms-flexbox;display:flex;width:calc(100% - 10px);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px 5px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host>.container>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol>img.lstTrabajadoresItemColImg{display:-webkit-box;display:-ms-flexbox;display:flex;width:14px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol>img.lstTrabajadoresItemColImg:hover{opacity:.5}:host>.container>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol>img.lstTrabajadoresItemColImg:active{opacity:.75}:host>.container>.lstTrabajadores>.lstTrabajadoresItem:hover{background:#eceef0}:host>.container>.lstTrabajadoresVacia{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:396px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaLabel{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:36px;color:#d8d9dd;font-family:Novecento;font-weight:700;padding:25px 0px}:host>.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtn{display:-webkit-box;display:-ms-flexbox;display:flex;background:#008894;width:293px;height:30px;font-size:21px;color:#fff;font-family:Novecento;font-weight:700;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtn:hover{opacity:.5}:host>.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtn:active{opacity:.75}:host>.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtnDisabled{display:-webkit-box;display:-ms-flexbox;display:flex;background:#c2c3c9;width:293px;height:30px;font-size:21px;color:#fff;font-family:Novecento;font-weight:700;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none}:host>.container>.containerBtns{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:68px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top:2px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:21px;color:#fff;font-weight:700}:host>.container>.containerBtns>.containerBtnsBtnCancel{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Novecento;background:#008894;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:170px;height:30px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerBtns>.containerBtnsBtnCancel:hover{opacity:.5}:host>.container>.containerBtns>.containerBtnsBtnCancel:active{opacity:.75}:host>.container>.containerBtns>.containerBtnsBtnDisabled{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Novecento;background:#c2c3c9;pointer-events:none;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:170px;height:30px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerBtns>.containerBtnsBtnActive{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Novecento;background:#4da72c;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:170px;height:30px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerBtns>.containerBtnsBtnActive:hover{opacity:.5}:host>.container>.containerBtns>.containerBtnsBtnActive:active{opacity:.75}"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearEmpresaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__ = __webpack_require__("./src/app/class/catalogo/empresa.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CrearEmpresaComponent = /** @class */ (function () {
    function CrearEmpresaComponent(catalogoService, coreComponent, router) {
        this.catalogoService = catalogoService;
        this.coreComponent = coreComponent;
        this.router = router;
        this.empresa = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__["a" /* Empresa */]();
        this.homePath = '/protected/catalogo/';
        this.opcion = [
            {
                label: 'Patrones',
                path: '/protected/catalogo/empresas',
            },
            {
                label: 'Agregar Patrón',
                path: '/protected/catalogo/empresas/crear/',
            },
        ];
        this.classBtnAccept = 'containerBtnsBtnDisabled';
        this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtnDisabled';
        this.lstTrabajadores = [];
        /* Inicio de variables para los SELECTS
        0.- Factor Riesgo
        1.- Sector Empresarial
        2.- Regimen Fiscal
        3.- Periodicidad de Pago
        */
        this.cantSelects = 4; // Siempre más uno
        this.itemsParent = new Array(this.cantSelects).fill(null);
        this.isSearchParent = new Array(this.cantSelects).fill(false);
        this.isCategoryParent = new Array(this.cantSelects).fill(false);
        this.sizeParent = new Array(this.cantSelects).fill('');
        this.alignParent = new Array(this.cantSelects).fill('left');
        this.itemSelectParent = new Array(this.cantSelects).fill({ nombre: 'Escribe Aquí', id: -1 });
        this.widthContentParent = new Array(this.cantSelects).fill('100%');
        this.marginLeftContentParent = new Array(this.cantSelects).fill('0px');
        this.tooltipParent = new Array(this.cantSelects).fill(false);
        this.tipoDropParent = new Array(this.cantSelects).fill('');
        this.campoLabelParent = new Array(this.cantSelects).fill('');
        this.heightDropParent = new Array(this.cantSelects).fill('35px'); // sumar 5px no sé por qué jajaxD
        this.colorBorderDropParent = new Array(this.cantSelects).fill('#D8D9DD');
        this.selectsLabels = ['Factor Riesgo', 'Sector Empresarial', 'Regimen Fiscal', 'Periodicidad de Pago'];
        this.selectsAux = new Array(this.cantSelects).fill(false);
        this.lstSectores = [
            { nombre: 'Comerciales', id: 0 },
            { nombre: 'Industriales', id: 0 },
            { nombre: 'Autotransporte', id: 0 },
            { nombre: 'Agrícolas', id: 0 },
            { nombre: 'Ganaderas', id: 0 },
            { nombre: 'Pesca', id: 0 },
            { nombre: 'Silvícolas', id: 0 }
        ];
        this.fileEmp = new Array(4).fill(null);
        this.fileEmpName = ['.png/.jpg', '.pdf', '.cer', '.key'];
        this.fileEmpIsUp = new Array(4).fill(false);
        this.validSections = new Array(4).fill(false);
        this.idEmpresa = 0;
    }
    CrearEmpresaComponent.prototype.ngDoCheck = function () {
        if (this.empresa.nomenclaturaEmpresa !== undefined && this.empresa.nomenclaturaEmpresa !== null && this.empresa.nomenclaturaEmpresa !== '' &&
            this.empresa.alias !== undefined && this.empresa.alias !== null && this.empresa.alias !== '' &&
            this.empresa.registroPatronal !== undefined && this.empresa.registroPatronal !== null && this.empresa.registroPatronal !== '' &&
            this.empresa.sitioWeb !== undefined && this.empresa.sitioWeb !== null && this.empresa.sitioWeb !== '' &&
            this.empresa.calle !== undefined && this.empresa.calle !== null && this.empresa.calle !== '' &&
            this.empresa.numero !== undefined && this.empresa.numero !== null && this.empresa.numero !== '' &&
            this.empresa.colonia !== undefined && this.empresa.colonia !== null && this.empresa.colonia !== '' &&
            this.empresa.cp !== undefined && this.empresa.cp !== null && this.empresa.cp !== '' &&
            this.empresa.estado !== undefined && this.empresa.estado !== null && this.empresa.estado !== '' &&
            this.empresa.delegacion !== undefined && this.empresa.delegacion !== null && this.empresa.delegacion !== '' &&
            this.empresa.factorRiesgo.idNominaCatalogo > 0 &&
            this.empresa.sectorEmpresarial !== undefined && this.empresa.sectorEmpresarial !== null && this.empresa.sectorEmpresarial !== '') {
            this.validSections[0] = true;
        }
        else {
            this.validSections[0] = false;
        }
        if (this.empresa.razonSocial !== undefined && this.empresa.razonSocial !== null && this.empresa.razonSocial !== '' &&
            this.empresa.regimenFiscal !== undefined && this.empresa.regimenFiscal !== null && this.empresa.regimenFiscal !== '' &&
            this.empresa.rfcEmpresa !== undefined && this.empresa.rfcEmpresa !== null && this.empresa.rfcEmpresa !== '' &&
            this.empresa.contraseniaSAT !== undefined && this.empresa.contraseniaSAT !== null && this.empresa.contraseniaSAT !== '' &&
            this.empresa.serie !== undefined && this.empresa.serie !== null && this.empresa.serie !== '' &&
            this.empresa.calle2 !== undefined && this.empresa.calle2 !== null && this.empresa.calle2 !== '' &&
            this.empresa.numero2 !== undefined && this.empresa.numero2 !== null && this.empresa.numero2 !== '' &&
            this.empresa.colonia2 !== undefined && this.empresa.colonia2 !== null && this.empresa.colonia2 !== '' &&
            this.empresa.cp2 !== undefined && this.empresa.cp2 !== null && this.empresa.cp2 !== '' &&
            this.empresa.estado2 !== undefined && this.empresa.estado2 !== null && this.empresa.estado2 !== '' &&
            this.empresa.delegacion2 !== undefined && this.empresa.delegacion2 !== null && this.empresa.delegacion2 !== '' &&
            this.empresa.periodicidadPago.idNominaCatalogo > 0) {
            this.validSections[1] = true;
        }
        else {
            this.validSections[1] = false;
        }
        if (this.empresa.nombre !== undefined && this.empresa.nombre !== null && this.empresa.nombre !== '' &&
            this.empresa.apellidoPaterno !== undefined && this.empresa.apellidoPaterno !== null && this.empresa.apellidoPaterno !== '' &&
            this.empresa.apellidoMaterno !== undefined && this.empresa.apellidoMaterno !== null && this.empresa.apellidoMaterno !== '' &&
            this.empresa.correoElectronico !== undefined && this.empresa.correoElectronico !== null && this.empresa.correoElectronico !== '' &&
            this.empresa.lada1 !== undefined && this.empresa.lada1 !== null && this.empresa.lada1 !== '' &&
            this.empresa.telefono1 !== undefined && this.empresa.telefono1 !== null && this.empresa.telefono1 !== '' &&
            this.empresa.lada2 !== undefined && this.empresa.lada2 !== null && this.empresa.lada2 !== '' &&
            this.empresa.telefono2 !== undefined && this.empresa.telefono2 !== null && this.empresa.telefono2 !== '') {
            this.validSections[2] = true;
            this.empresa.telefono = this.empresa.lada1 + this.empresa.telefono1;
        }
        else {
            this.validSections[2] = false;
        }
        if (this.fileEmpIsUp[0] && this.fileEmpIsUp[1] && this.fileEmpIsUp[2] && this.fileEmpIsUp[3]) {
            this.validSections[3] = true;
        }
        else {
            this.validSections[3] = false;
        }
        if (this.validSections[0] && this.validSections[1] && this.validSections[2] && this.validSections[3]) {
            this.classBtnAccept = 'containerBtnsBtnActive';
        }
        else {
            this.classBtnAccept = 'containerBtnsBtnDisabled';
        }
    };
    CrearEmpresaComponent.prototype.ngOnInit = function () {
        this.coreComponent.openModal(0);
        for (var x = 0; x < this.cantSelects; x++) {
            this.fnFillSelects(x);
        }
    };
    CrearEmpresaComponent.prototype.fnSaveCompany = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this.catalogoService.guardarEmpresa(this.empresa).subscribe(function (emp) {
            console.log(emp);
            if (emp.current !== undefined && emp.current !== null && emp.current > 0) {
                var idEmpresa = emp.current.idEmpresa;
                _this.empresa.idEmpresa = idEmpresa;
                /* this.catalogoService.subirArchivosEmpresa('logo', this.fileEmp[0], idEmpresa).subscribe(resLogo => {
                    console.log('subirArchivosEmpresa LOGO: ', resLogo);
                    this.catalogoService.subirArchivosEmpresa('registroPatronal', this.fileEmp[1], idEmpresa).subscribe(resRegistro => {
                        console.log('subirArchivosEmpresa resRegistro: ', resRegistro);
                        this.catalogoService.subirArchivosEmpresa('cer', this.fileEmp[2], idEmpresa).subscribe(resCer => {
                            console.log('subirArchivosEmpresa resCer: ', resCer);
                            this.catalogoService.subirArchivosEmpresa('key', this.fileEmp[3], idEmpresa).subscribe(resKey => {
                                setTimeout(() => {
                                    console.log('subirArchivosEmpresa resKey: ', resKey);
                                    this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtn';
                                    this.coreComponent.closeModal(0);
                                }, 1500);
                            }, error => {
                                setTimeout(() => {
                                    console.log('ERROR subirArchivosEmpresa resKey: ', error);
                                    this.coreComponent.closeModal(0);
                                }, 1500);
                            });
                        }, error => {
                            setTimeout(() => {
                                console.log('ERROR subirArchivosEmpresa resCer: ', error);
                                this.coreComponent.closeModal(0);
                            }, 1500);
                        });
                    }, error => {
                        setTimeout(() => {
                            console.log('ERROR subirArchivosEmpresa resRegistro: ', error);
                            this.coreComponent.closeModal(0);
                        }, 1500);
                    });
                }, error => {
                    setTimeout(() => {
                        console.log('ERROR subirArchivosEmpresa LOGO: ', error);
                        this.coreComponent.closeModal(0);
                    }, 1500);
                }); */
                setTimeout(function () {
                    _this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtn';
                    _this.coreComponent.closeModal(0);
                }, 1500);
            }
            else {
                _this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtnDisabled';
            }
        }, function (error) {
            setTimeout(function () {
                console.log('Error: guardarEmpresa', error);
                _this.coreComponent.closeModal(0);
            }, 1500);
        });
    };
    CrearEmpresaComponent.prototype.fnGetValueDropList = function (value, index) {
        console.log(value, index);
        switch (index) {
            case 0:
                this.empresa.factorRiesgo.idNominaCatalogo = value.id;
                break;
            case 1:
                this.empresa.sectorEmpresarial = value.nombre;
                break;
            case 2:
                this.empresa.regimenFiscal = value.nombre.split(' - ')[0];
                break;
            case 3:
                this.empresa.periodicidadPago.idNominaCatalogo = value.id;
                break;
        }
    };
    CrearEmpresaComponent.prototype.fnSelectsAux = function () {
        var _this = this;
        var x = 0;
        for (var _i = 0, _a = this.selectsAux; _i < _a.length; _i++) {
            var sAux = _a[_i];
            if (sAux) {
                x++;
            }
            else {
                break;
            }
        }
        if (this.selectsAux.length === x) {
            setTimeout(function () {
                _this.coreComponent.closeModal(0);
            }, 1500);
        }
    };
    CrearEmpresaComponent.prototype.fnFillSelects = function (opc) {
        var _this = this;
        switch (opc) {
            case 0:
                this.catalogoService.obtenerNominaCatalogo('RiesgoPuesto').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - RiesgoPuesto: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                    console.log('obtenerNominaCatalogo - RiesgoPuesto Values: ', _this.itemsParent[opc]);
                }, function (error) {
                    console.log('ERROR obtenerNominaCatalogo - RiesgoPuesto: ', error);
                });
                break;
            case 1:
                this.itemsParent[opc] = [];
                for (var _i = 0, _a = this.lstSectores; _i < _a.length; _i++) {
                    var it = _a[_i];
                    this.itemsParent[opc].push(Object.assign({}, it));
                }
                break;
            case 2:
                this.catalogoService.obtenerNominaCatalogo('RegimenFiscal').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - RegimenFiscal: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                    console.log('obtenerNominaCatalogo - RegimenFiscal Values: ', _this.itemsParent[opc]);
                }, function (error) {
                    console.log('ERROR obtenerNominaCatalogo - RegimenFiscal: ', error);
                });
                break;
            case 3:
                this.catalogoService.obtenerNominaCatalogo('PeriodicidadPago').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - PeriodicidadPago: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                    console.log('obtenerNominaCatalogo - PeriodicidadPago Values: ', _this.itemsParent[opc]);
                }, function (error) {
                    console.log('ERROR obtenerNominaCatalogo - PeriodicidadPago: ', error);
                });
                break;
        }
        this.selectsAux[opc] = true;
        this.fnSelectsAux();
    };
    CrearEmpresaComponent.prototype.fnClickFile = function (opc) {
        document.getElementById('fileEmp' + opc).click();
    };
    CrearEmpresaComponent.prototype.fnGetFile = function ($event, opc) {
        console.log($event, opc);
        if ($event.target.files !== undefined && $event.target.files !== null && $event.target.files.length > 0) {
            this.fileEmp[opc] = $event.target.files;
            this.fileEmpIsUp[opc] = true;
            this.fileEmpName[opc] = (opc === 0) ? 'Logo.' + $event.target.files[0].type.split('/')[1] : $event.target.files[0].name;
        }
        else {
            this.fileEmp[opc] = null;
            this.fileEmpIsUp[opc] = false;
            this.fileEmpName[opc] = (opc === 0) ? '.png/.jpg' : (opc === 1) ? '.pdf' : (opc === 2) ? '.cer' : '.key';
        }
    };
    CrearEmpresaComponent.prototype.fnReturnView = function () {
        this.router.navigate(['/protected/catalogo/empresas']);
    };
    CrearEmpresaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pn-crear-empresa',
            template: __webpack_require__("./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], CrearEmpresaComponent);
    return CrearEmpresaComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"opcion\" [homePath]=\"homePath\"></pn-header-bc>\r\n<div class=\"container\">\r\n    <div class=\"containerTitle\">Datos Generales</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <div class=\"containerFormsInputsChecks\" style=\"width: 170px;\">\r\n                <div class=\"containerFormsInputsChecksLabel\">&nbsp;</div>\r\n                <div class=\"containerFormsInputsChecksHoriz\" (click)=\"fnCheck(0)\">\r\n                    <div [ngClass]=\"checkBtn[0]\"></div>\r\n                    <span class=\"containerFormsInputsChecksSpan\" [style.font-weight]=\"'700'\">{{checkBtnLabel[0]}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">ID</label>\r\n            <input [(ngModel)]=\"empresa.nomenclaturaEmpresa\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Nombre</label>\r\n            <input [(ngModel)]=\"empresa.alias\" class=\"containerFormsInputsInput\" style=\"width:337px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[0] }}</span><!-- Factor Riesgo -->\r\n            <pq-drop-list style=\"width:307px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[0]\" [isSearch]=\"isSearchParent[0]\" [isCategory]=\"isCategoryParent[0]\" [size]=\"sizeParent[0]\" [align]=\"alignParent[0]\" [itemSelect]=\"itemSelectParent[0]\" [widthContent]=\"widthContentParent[0]\" [marginLeftContent]=\"marginLeftContentParent[0]\" [tooltip]=\"tooltipParent[0]\" [tipoDrop]=\"tipoDropParent[0]\" [campoLabel]=\"campoLabelParent[0]\" [heightDrop]=\"heightDropParent[0]\" [colorBorderDrop]=\"colorBorderDropParent[0]\" (valueDropList)=\"fnGetValueDropList($event, 0)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Registro Patronal</label>\r\n            <input [(ngModel)]=\"empresa.registroPatronal\" class=\"containerFormsInputsInput\" style=\"width:240px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Sitio Web</label>\r\n            <input [(ngModel)]=\"empresa.sitioWeb\" class=\"containerFormsInputsInput\" style=\"width:390px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[1] }}</span><!-- Sector Empresarial -->\r\n            <pq-drop-list style=\"width:330px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[1]\" [isSearch]=\"isSearchParent[1]\" [isCategory]=\"isCategoryParent[1]\" [size]=\"sizeParent[1]\" [align]=\"alignParent[1]\" [itemSelect]=\"itemSelectParent[1]\" [widthContent]=\"widthContentParent[1]\" [marginLeftContent]=\"marginLeftContentParent[1]\" [tooltip]=\"tooltipParent[1]\" [tipoDrop]=\"tipoDropParent[1]\" [campoLabel]=\"campoLabelParent[1]\" [heightDrop]=\"heightDropParent[1]\" [colorBorderDrop]=\"colorBorderDropParent[1]\" (valueDropList)=\"fnGetValueDropList($event, 1)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Calle</label>\r\n            <input [(ngModel)]=\"empresa.calle\" class=\"containerFormsInputsInput\" style=\"width:385px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número</label>\r\n            <input [(ngModel)]=\"empresa.numero\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Colonia</label>\r\n            <input [(ngModel)]=\"empresa.colonia\" class=\"containerFormsInputsInput\" style=\"width:539px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Código Postal</label>\r\n            <input [(ngModel)]=\"empresa.cp\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Estado</label>\r\n            <input [(ngModel)]=\"empresa.estado\" class=\"containerFormsInputsInput\" style=\"width:198px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Municipio/Delegación</label>\r\n            <input [(ngModel)]=\"empresa.delegacion\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">Datos Fiscales</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Razón Social</label>\r\n            <input [(ngModel)]=\"empresa.razonSocial\" class=\"containerFormsInputsInput\" style=\"width:400px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[2] }}</span><!-- Regimen Fiscal -->\r\n            <pq-drop-list style=\"width:400px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[2]\" [isSearch]=\"isSearchParent[2]\" [isCategory]=\"isCategoryParent[2]\" [size]=\"sizeParent[2]\" [align]=\"alignParent[2]\" [itemSelect]=\"itemSelectParent[2]\" [widthContent]=\"widthContentParent[2]\" [marginLeftContent]=\"marginLeftContentParent[2]\" [tooltip]=\"tooltipParent[2]\" [tipoDrop]=\"tipoDropParent[2]\" [campoLabel]=\"campoLabelParent[2]\" [heightDrop]=\"heightDropParent[2]\" [colorBorderDrop]=\"colorBorderDropParent[2]\" (valueDropList)=\"fnGetValueDropList($event, 2)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">RFC</label>\r\n            <input [(ngModel)]=\"empresa.rfcEmpresa\" class=\"containerFormsInputsInput\" style=\"width:275px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Contraseña SAT</label>\r\n            <input [(ngModel)]=\"empresa.contraseniaSAT\" class=\"containerFormsInputsInput\" style=\"width:340px\" placeholder=\"Escribe Aquí\" type=\"password\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Serie</label>\r\n            <input [(ngModel)]=\"empresa.serie\" class=\"containerFormsInputsInput\" style=\"width:345px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Calle</label>\r\n            <input [(ngModel)]=\"empresa.calle2\" class=\"containerFormsInputsInput\" style=\"width:385px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número</label>\r\n            <input [(ngModel)]=\"empresa.numero2\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Colonia</label>\r\n            <input [(ngModel)]=\"empresa.colonia2\" class=\"containerFormsInputsInput\" style=\"width:539px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Código Postal</label>\r\n            <input [(ngModel)]=\"empresa.cp2\" class=\"containerFormsInputsInput\" style=\"width:136px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Estado</label>\r\n            <input [(ngModel)]=\"empresa.estado2\" class=\"containerFormsInputsInput\" style=\"width:198px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Municipio/Delegación</label>\r\n            <input [(ngModel)]=\"empresa.delegacion2\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[3] }}</span><!-- Periodicidad de Pago -->\r\n            <pq-drop-list style=\"width:330px;margin-right: 20px;margin-top: 5px;height: 35px;\" [items]=\"itemsParent[3]\" [isSearch]=\"isSearchParent[3]\" [isCategory]=\"isCategoryParent[3]\" [size]=\"sizeParent[3]\" [align]=\"alignParent[3]\" [itemSelect]=\"itemSelectParent[3]\" [widthContent]=\"widthContentParent[3]\" [marginLeftContent]=\"marginLeftContentParent[3]\" [tooltip]=\"tooltipParent[3]\" [tipoDrop]=\"tipoDropParent[3]\" [campoLabel]=\"campoLabelParent[3]\" [heightDrop]=\"heightDropParent[3]\" [colorBorderDrop]=\"colorBorderDropParent[3]\" (valueDropList)=\"fnGetValueDropList($event, 3)\"></pq-drop-list>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">Contacto</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Nombre</label>\r\n            <input [(ngModel)]=\"empresa.nombre\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Apellido Paterno</label>\r\n            <input [(ngModel)]=\"empresa.apellidoPaterno\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Apellido Materno</label>\r\n            <input [(ngModel)]=\"empresa.apellidoMaterno\" class=\"containerFormsInputsInput\" style=\"width:355px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Correo Electrónico</label>\r\n            <input [(ngModel)]=\"empresa.correoElectronico\" class=\"containerFormsInputsInput\" style=\"width:330px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Lada</label>\r\n            <input [(ngModel)]=\"empresa.lada1\" class=\"containerFormsInputsInput\" style=\"width:75px\" placeholder=\"000\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Teléfono 1</label>\r\n            <input [(ngModel)]=\"empresa.telefono1\" class=\"containerFormsInputsInput\" style=\"width:145px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Lada</label>\r\n            <input [(ngModel)]=\"empresa.lada2\" class=\"containerFormsInputsInput\" style=\"width:75px\" placeholder=\"000\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Teléfono 2</label>\r\n            <input [(ngModel)]=\"empresa.telefono2\" class=\"containerFormsInputsInput\" style=\"width:145px\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">Carga de Documentación</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Logotipo</label>\r\n            <input (change)=\"fnGetFile($event, 0)\" id=\"fileEmp0\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"image/*\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[0] }} </div>\r\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[0]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[0]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[0]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Registro Patronal</label>\r\n            <input (change)=\"fnGetFile($event, 1)\" id=\"fileEmp1\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[1] }} </div>\r\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[1]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[1]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[1]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Certificado SAT</label>\r\n            <input (change)=\"fnGetFile($event, 2)\" id=\"fileEmp2\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pkix-cert\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[2] }} </div>\r\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[2]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[2]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cargar Llave SAT</label>\r\n            <input (change)=\"fnGetFile($event, 3)\" id=\"fileEmp3\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pkcs8\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[3] }} </div>\r\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[3]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[3]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">\r\n        <div class=\"containerTitleItem1\">Trabajadores</div>\r\n        <div class=\"containerTitleItem2\" *ngIf=\"lstTrabajadores.length > 0\">\r\n            <img src=\"./assets/Images/maximinar.svg\" alt=\"Maximizar\" class=\"containerTitleItem2Img\">\r\n        </div>\r\n    </div>\r\n    <div class=\"lstTrabajadores\" *ngIf=\"lstTrabajadores.length > 0\">\r\n        <div class=\"lstTrabajadoresHeader\">\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 20px;max-width: 20px;justify-content: center;\">#</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 115px;max-width: 340px;\">Nombre</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 100px;max-width: 190px;\">Departamento</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 90px;max-width: 190px;\">Puesto</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 95px;max-width: 130px;\">RFC</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 100px;max-width: 150px;\">Teléfono</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 130px;max-width: 240px;\">Correo Electrónico</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 120px;max-width: 200px;\">Fecha de Ingreso</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 115px;max-width: 160px;\">Tipo de Contrato</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 80px;max-width: 150px;\">Estado</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 15px;max-width: 15px;\">&nbsp;</div>\r\n        </div>\r\n        <div class=\"lstTrabajadoresItem\" *ngFor=\"let item of lstTrabajadores; let i = index\">\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 20px;max-width: 20px;justify-content: center;\">{{i + 1}}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 115px;max-width: 340px;\">{{ item.nombre + ' ' + item.apellidoPaterno + ' ' + item.apellidoMaterno }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 100px;max-width: 190px;font-weight: 400;font-size: 16px;color: #008894;\">{{ item.departamento }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 90px;max-width: 190px;\">{{ item.puesto }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 95px;max-width: 130px;\">{{ item.datoFiscal.rfc }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 100px;max-width: 150px;\">{{ item.telefonoFijo }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 130px;max-width: 240px;\">{{ item.email }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 120px;max-width: 200px;\">{{ item.fechaInicioRelLaboral }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 115px;max-width: 160px;\">{{ item.contrato.descripcion }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 80px;max-width: 150px;\" [ngStyle]=\"{'color': (item.activo) ? '#4DA72C' : '#C1272D' }\">{{ (item.activo) ? 'Activo' : 'Finiquitado' }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 15px;max-width: 15px;\" (click)=\"fnVerTrabajador(item.idTrabajador)\"><img class=\"lstTrabajadoresItemColImg\" src=\"./assets/Images/ir.svg\" alt=\"Ir\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"lstTrabajadoresVacia\" *ngIf=\"lstTrabajadores.length === 0\">\r\n        <div class=\"lstTrabajadoresVaciaLabel\">NO HAS AGREGADO TRABAJADORES</div>\r\n        <div [ngClass]=\"classBtnAcceptTrab\">AGREGAR TRABAJADOR</div>\r\n        <div style=\"display: none;\">{{ empresa | json }}</div>\r\n    </div>\r\n    <div class=\"containerBtns\">\r\n        <div class=\"containerBtnsBtnCancel\" (click)=\"fnReturnView()\">CANCELAR</div>\r\n        <div [ngClass]=\"classBtnAccept\" (click)=\"fnSaveCompany()\">ACEPTAR</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:calc(100vh - 130px)}:host pn-header-bc{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:41px}:host>.container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0px 20px;height:calc(100vh - 170px);overflow:scroll}:host>.container>.containerTitle{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:44px;border-bottom:1px solid #424242;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding-bottom:5px;font-size:17px;color:#424242;font-weight:700;font-family:Novecento;text-transform:uppercase;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>.container>.containerTitle>.containerTitleItem1{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerTitle>.containerTitleItem2{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerTitle>.containerTitleItem2>img.containerTitleItem2Img{display:-webkit-box;display:-ms-flexbox;display:flex;width:30px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerTitle>.containerTitleItem2>img.containerTitleItem2Img:hover{opacity:.5}:host>.container>.containerTitle>.containerTitleItem2>img.containerTitleItem2Img:active{opacity:.75}:host>.container>.containerForms{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:-webkit-max-content;min-height:-moz-max-content;min-height:max-content;width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:15px 0px}:host>.container>.containerForms>.containerFormsInputs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:85px}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:20px}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksLabel{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:30px;margin-top:5px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz>.containerFormsInputsChecksUncheck{display:-webkit-box;display:-ms-flexbox;display:flex;width:18px;height:18px;margin-right:10px;border:1px solid #424242;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz>.checked{content:url(\"/assets/Images/checked20px.svg\")}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz>span.containerFormsInputsChecksSpan{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz:hover{opacity:.5}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz:active{opacity:.75}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFile{display:none}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox{display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:90px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxInput{display:-webkit-box;display:-ms-flexbox;display:flex;width:250px;height:28px;display:flex;border:1px solid #d8d8d8;font-size:16px;color:#424242;font-weight:400;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxInput:hover{opacity:.5}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxInput:active{opacity:.75}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload>.containerFormsInputsFileBoxUploadImg{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload:hover{opacity:.5}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload:active{opacity:.75}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;margin-right:10px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload>.containerFormsInputsFileBoxReloadImg{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload:hover{opacity:.5}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload:active{opacity:.75}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView>.containerFormsInputsFileBoxViewImg{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView:hover{opacity:.5}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView:active{opacity:.75}:host>.container>.containerForms>.containerFormsInputs>.containerFormsInputsSpan{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}:host>.container>.containerForms>.containerFormsInputs>pq-drop-list{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerForms>.containerFormsInputs>label.containerFormsInputsLabel{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}:host>.container>.containerForms>.containerFormsInputs>input.containerFormsInputsInput{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:30px;margin-right:20px;margin-top:5px;border:1px solid #d8d8d8;font-size:16px;color:#424242;font-weight:400}:host>.container>.containerForms>.containerFormsInputLabel{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:55px}:host>.container>.containerForms>.containerFormsInputLabel>.containerFormsInputLabelCheck{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.lstTrabajadores{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:320px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host>.container>.lstTrabajadores>.lstTrabajadoresHeader{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:15px;color:#424242;font-weight:700;padding-bottom:4px;border-bottom:1px solid #424242;min-height:49px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>.container>.lstTrabajadores>.lstTrabajadoresHeader>.lstTrabajadoresHeaderCol{display:-webkit-box;display:-ms-flexbox;display:flex;width:calc(100% - 10px);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px 5px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.container>.lstTrabajadores>.lstTrabajadoresItem{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400;padding-bottom:4px;border-bottom:1px solid #424242;background:#fff;min-height:43px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #eceef0;cursor:pointer;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol{display:-webkit-box;display:-ms-flexbox;display:flex;width:calc(100% - 10px);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px 5px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host>.container>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol>img.lstTrabajadoresItemColImg{display:-webkit-box;display:-ms-flexbox;display:flex;width:14px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol>img.lstTrabajadoresItemColImg:hover{opacity:.5}:host>.container>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol>img.lstTrabajadoresItemColImg:active{opacity:.75}:host>.container>.lstTrabajadores>.lstTrabajadoresItem:hover{background:#eceef0}:host>.container>.lstTrabajadoresVacia{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:396px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaLabel{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:36px;color:#d8d9dd;font-family:Novecento;font-weight:700;padding:25px 0px}:host>.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtn{display:-webkit-box;display:-ms-flexbox;display:flex;background:#008894;width:293px;height:30px;font-size:21px;color:#fff;font-family:Novecento;font-weight:700;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtn:hover{opacity:.5}:host>.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtn:active{opacity:.75}:host>.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtnDisabled{display:-webkit-box;display:-ms-flexbox;display:flex;background:#c2c3c9;width:293px;height:30px;font-size:21px;color:#fff;font-family:Novecento;font-weight:700;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none}:host>.container>.containerBtns{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:68px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top:2px solid #424242;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:21px;color:#fff;font-weight:700}:host>.container>.containerBtns>.containerBtnsBtnCancel{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Novecento;background:#008894;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:170px;height:30px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerBtns>.containerBtnsBtnCancel:hover{opacity:.5}:host>.container>.containerBtns>.containerBtnsBtnCancel:active{opacity:.75}:host>.container>.containerBtns>.containerBtnsBtnDisabled{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Novecento;background:#c2c3c9;pointer-events:none;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:170px;height:30px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerBtns>.containerBtnsBtnActive{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Novecento;background:#4da72c;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:170px;height:30px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerBtns>.containerBtnsBtnActive:hover{opacity:.5}:host>.container>.containerBtns>.containerBtnsBtnActive:active{opacity:.75}"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarEmpresaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__ = __webpack_require__("./src/app/class/catalogo/empresa.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarEmpresaComponent = /** @class */ (function () {
    function EditarEmpresaComponent(router, route, catalogoService, coreComponent) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.catalogoService = catalogoService;
        this.coreComponent = coreComponent;
        this.empresa = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__["a" /* Empresa */]();
        this.homePath = '/protected/catalogo/';
        this.idEmpresa = 0;
        this.opcion = [
            {
                label: 'Patrones',
                path: '/protected/catalogo/empresas/',
            }
        ];
        this.classBtnAccept = 'containerBtnsBtnDisabled';
        this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtnDisabled';
        this.lstTrabajadores = [];
        /* Inicio de variables para los SELECTS
        0.- Factor Riesgo
        1.- Sector Empresarial
        2.- Regimen Fiscal
        3.- Periodicidad de Pago
        */
        this.cantSelects = 4; // Siempre más uno
        this.itemsParent = new Array(this.cantSelects).fill(null);
        this.isSearchParent = new Array(this.cantSelects).fill(false);
        this.isCategoryParent = new Array(this.cantSelects).fill(false);
        this.sizeParent = new Array(this.cantSelects).fill('');
        this.alignParent = new Array(this.cantSelects).fill('left');
        this.itemSelectParent = new Array(this.cantSelects).fill({ nombre: 'Escribe Aquí', id: -1 });
        this.widthContentParent = new Array(this.cantSelects).fill('100%');
        this.marginLeftContentParent = new Array(this.cantSelects).fill('0px');
        this.tooltipParent = new Array(this.cantSelects).fill(false);
        this.tipoDropParent = new Array(this.cantSelects).fill('');
        this.campoLabelParent = new Array(this.cantSelects).fill('');
        this.heightDropParent = new Array(this.cantSelects).fill('35px'); // sumar 5px no sé por qué jajaxD
        this.colorBorderDropParent = new Array(this.cantSelects).fill('#D8D9DD');
        this.selectsLabels = ['Factor Riesgo', 'Sector Empresarial', 'Regimen Fiscal', 'Periodicidad de Pago'];
        this.lstSectores = [
            { nombre: 'Comerciales', id: 0 },
            { nombre: 'Industriales', id: 0 },
            { nombre: 'Autotransporte', id: 0 },
            { nombre: 'Agrícolas', id: 0 },
            { nombre: 'Ganaderas', id: 0 },
            { nombre: 'Pesca', id: 0 },
            { nombre: 'Silvícolas', id: 0 }
        ];
        this.fileEmp = new Array(4).fill(null);
        this.fileEmpName = ['.png/.jpg', '.pdf', '.cer', '.key'];
        this.fileEmpIsUp = new Array(4).fill(true);
        this.fileEmpIsUpUpdate = new Array(4).fill(false);
        this.validSections = new Array(4).fill(false);
        this.checkBtnCant = 1;
        this.checkBtn = new Array(this.checkBtnCant).fill('containerFormsInputsChecksUncheck checked');
        this.checkBtnLabel = new Array(this.checkBtnCant).fill('Deshabilitar Patrón');
        this.route.params.subscribe(function (params) {
            _this.idEmpresa = params['id'];
        });
    }
    EditarEmpresaComponent.prototype.ngDoCheck = function () {
        if (this.empresa.nomenclaturaEmpresa !== undefined && this.empresa.nomenclaturaEmpresa !== null && this.empresa.nomenclaturaEmpresa !== '' &&
            this.empresa.alias !== undefined && this.empresa.alias !== null && this.empresa.alias !== '' &&
            this.empresa.registroPatronal !== undefined && this.empresa.registroPatronal !== null && this.empresa.registroPatronal !== '' &&
            this.empresa.sitioWeb !== undefined && this.empresa.sitioWeb !== null && this.empresa.sitioWeb !== '' &&
            this.empresa.calle !== undefined && this.empresa.calle !== null && this.empresa.calle !== '' &&
            this.empresa.numero !== undefined && this.empresa.numero !== null && this.empresa.numero !== '' &&
            this.empresa.colonia !== undefined && this.empresa.colonia !== null && this.empresa.colonia !== '' &&
            this.empresa.cp !== undefined && this.empresa.cp !== null && this.empresa.cp !== '' &&
            this.empresa.estado !== undefined && this.empresa.estado !== null && this.empresa.estado !== '' &&
            this.empresa.delegacion !== undefined && this.empresa.delegacion !== null && this.empresa.delegacion !== '' &&
            this.empresa.factorRiesgo.idNominaCatalogo > 0 &&
            this.empresa.sectorEmpresarial !== undefined && this.empresa.sectorEmpresarial !== null && this.empresa.sectorEmpresarial !== '') {
            this.validSections[0] = true;
        }
        else {
            this.validSections[0] = false;
        }
        if (this.empresa.razonSocial !== undefined && this.empresa.razonSocial !== null && this.empresa.razonSocial !== '' &&
            this.empresa.regimenFiscal !== undefined && this.empresa.regimenFiscal !== null && this.empresa.regimenFiscal !== '' &&
            this.empresa.rfcEmpresa !== undefined && this.empresa.rfcEmpresa !== null && this.empresa.rfcEmpresa !== '' &&
            this.empresa.contraseniaSAT !== undefined && this.empresa.contraseniaSAT !== null && this.empresa.contraseniaSAT !== '' &&
            this.empresa.serie !== undefined && this.empresa.serie !== null && this.empresa.serie !== '' &&
            this.empresa.calle2 !== undefined && this.empresa.calle2 !== null && this.empresa.calle2 !== '' &&
            this.empresa.numero2 !== undefined && this.empresa.numero2 !== null && this.empresa.numero2 !== '' &&
            this.empresa.colonia2 !== undefined && this.empresa.colonia2 !== null && this.empresa.colonia2 !== '' &&
            this.empresa.cp2 !== undefined && this.empresa.cp2 !== null && this.empresa.cp2 !== '' &&
            this.empresa.estado2 !== undefined && this.empresa.estado2 !== null && this.empresa.estado2 !== '' &&
            this.empresa.delegacion2 !== undefined && this.empresa.delegacion2 !== null && this.empresa.delegacion2 !== '' &&
            this.empresa.periodicidadPago.idNominaCatalogo > 0) {
            this.validSections[1] = true;
        }
        else {
            this.validSections[1] = false;
        }
        if (this.empresa.nombre !== undefined && this.empresa.nombre !== null && this.empresa.nombre !== '' &&
            this.empresa.apellidoPaterno !== undefined && this.empresa.apellidoPaterno !== null && this.empresa.apellidoPaterno !== '' &&
            this.empresa.apellidoMaterno !== undefined && this.empresa.apellidoMaterno !== null && this.empresa.apellidoMaterno !== '' &&
            this.empresa.correoElectronico !== undefined && this.empresa.correoElectronico !== null && this.empresa.correoElectronico !== '' &&
            this.empresa.lada1 !== undefined && this.empresa.lada1 !== null && this.empresa.lada1 !== '' &&
            this.empresa.telefono1 !== undefined && this.empresa.telefono1 !== null && this.empresa.telefono1 !== '' &&
            this.empresa.lada2 !== undefined && this.empresa.lada2 !== null && this.empresa.lada2 !== '' &&
            this.empresa.telefono2 !== undefined && this.empresa.telefono2 !== null && this.empresa.telefono2 !== '') {
            this.validSections[2] = true;
            this.empresa.telefono = this.empresa.lada1 + this.empresa.telefono1;
        }
        else {
            this.validSections[2] = false;
        }
        if (this.fileEmpIsUp[0] && this.fileEmpIsUp[1] && this.fileEmpIsUp[2] && this.fileEmpIsUp[3]) {
            this.validSections[3] = true;
        }
        else {
            this.validSections[3] = false;
        }
        if (this.validSections[0] && this.validSections[1] && this.validSections[2] && this.validSections[3]) {
            this.classBtnAccept = 'containerBtnsBtnActive';
        }
        else {
            this.classBtnAccept = 'containerBtnsBtnDisabled';
        }
    };
    EditarEmpresaComponent.prototype.fnCheck = function (opc) {
        this.checkBtn[opc] = (this.checkBtn[opc].match('checked')) ? 'containerFormsInputsChecksUncheck' : 'containerFormsInputsChecksUncheck checked';
    };
    EditarEmpresaComponent.prototype.ngOnInit = function () {
        this.fnFillSelects();
        this.fnObtenerEmpresaID();
    };
    EditarEmpresaComponent.prototype.fnSaveCompany = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this.catalogoService.guardarEmpresa(this.empresa).subscribe(function (emp) {
            setTimeout(function () {
                console.log(emp);
                if (emp.current.idEmpresa > 0) {
                    _this.catalogoService.subirArchivosEmpresa('logo', _this.fileEmp[0], emp.current.idEmpresa).subscribe(function (resLogo) {
                        console.log('Respuesta Logo', resLogo);
                    });
                    _this.empresa.idEmpresa = emp.current.idEmpresa;
                    _this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtn';
                }
                else {
                    _this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtnDisabled';
                }
                _this.coreComponent.closeModal(0);
            }, 1500);
        }, function (error) {
            setTimeout(function () {
                console.log(error);
                _this.coreComponent.closeModal(0);
            }, 1500);
        });
    };
    EditarEmpresaComponent.prototype.fnGetValueDropList = function (value, index) {
        console.log(value, index);
        switch (index) {
            case 0:
                this.empresa.factorRiesgo.idNominaCatalogo = value.id;
                break;
            case 1:
                this.empresa.sectorEmpresarial = value.nombre;
                break;
            case 2:
                this.empresa.regimenFiscal = value.nombre;
                break;
        }
    };
    EditarEmpresaComponent.prototype.fnFillSelects = function () {
        var _this = this;
        this.itemsParent[1] = [];
        for (var _i = 0, _a = this.lstSectores; _i < _a.length; _i++) {
            var it = _a[_i];
            this.itemsParent[1].push(Object.assign({}, it));
        }
        this.catalogoService.obtenerNominaCatalogo('RiesgoPuesto').subscribe(function (lstRiesgo) {
            console.log('obtenerNominaCatalogo - RiesgoPuesto: ', lstRiesgo);
            _this.itemsParent[0] = [];
            if (lstRiesgo.current !== undefined && lstRiesgo.current !== null && lstRiesgo.current.length > 0) {
                for (var _i = 0, _a = lstRiesgo.current; _i < _a.length; _i++) {
                    var it = _a[_i];
                    var item = {
                        nombre: it.codigoSAT + ' - ' + it.descripcion,
                        id: it.idNominaCatalogo
                    };
                    _this.itemsParent[0].push(Object.assign({}, item));
                }
                _this.catalogoService.obtenerNominaCatalogo('RegimenFiscal').subscribe(function (lstRegFis) {
                    console.log('obtenerNominaCatalogo - RegimenFiscal: ', lstRegFis);
                    _this.itemsParent[2] = [];
                    if (lstRegFis.current !== undefined && lstRegFis.current !== null && lstRegFis.current.length > 0) {
                        for (var _i = 0, _a = lstRegFis.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[2].push(Object.assign({}, item));
                        }
                    }
                });
            }
        }, function (error) { });
    };
    EditarEmpresaComponent.prototype.fnClickFile = function (opc) {
        document.getElementById('fileEmp' + opc).click();
    };
    EditarEmpresaComponent.prototype.fnGetFile = function ($event, opc) {
        console.log($event, opc);
        if ($event.target.files !== undefined && $event.target.files !== null && $event.target.files.length > 0) {
            this.fileEmp[opc] = $event.target.files;
            this.fileEmpIsUp[opc] = true;
            this.fileEmpIsUpUpdate[opc] = true;
            this.fileEmpName[opc] = $event.target.files[0].name;
        }
        else {
            this.fileEmp[opc] = null;
            this.fileEmpIsUp[opc] = false;
            this.fileEmpIsUpUpdate[opc] = false;
            this.fileEmpName[opc] = (opc < 2) ? '.pdf' : (opc === 2) ? '.cer' : '.key';
        }
    };
    EditarEmpresaComponent.prototype.fnReturnView = function () {
        this.router.navigate(['/protected/catalogo/empresas']);
    };
    EditarEmpresaComponent.prototype.fnVerTrabajadores = function () {
        this.router.navigate(['/protected/catalogo/trabajadores', this.idEmpresa]);
    };
    EditarEmpresaComponent.prototype.fnVerTrabajador = function (id) {
        this.router.navigate(['/protected/catalogo/trabajadores/editar', id]);
    };
    EditarEmpresaComponent.prototype.fnObtenerEmpresaID = function () {
        var _this = this;
        this.lstTrabajadores = [];
        this.catalogoService.obtenerEmpresaID(this.idEmpresa).subscribe(function (emp) {
            console.log(emp.current);
            if (emp.current !== undefined && emp.current !== null) {
                _this.empresa = Object.assign(__WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__["a" /* Empresa */], emp.current);
                if (_this.empresa.activo) {
                    var item = {
                        label: 'Ver Patrón Habilitado',
                        path: '/protected/catalogo/empresas/editar',
                        id: _this.idEmpresa
                    };
                    _this.checkBtnLabel[0] = 'Deshabilitar Patrón';
                    _this.checkBtn[0] = 'containerFormsInputsChecksUncheck';
                    _this.opcion.push(item);
                }
                else {
                    var item = {
                        label: 'Ver Patrón Deshabilitado',
                        path: '/protected/catalogo/empresas/editar',
                        id: _this.idEmpresa
                    };
                    _this.checkBtnLabel[0] = 'Habilitar Patrón';
                    _this.checkBtn[0] = 'containerFormsInputsChecksUncheck';
                    _this.opcion.push(item);
                }
                // this.empresa.periodicidadPago
                _this.catalogoService.obtenerTrabajadoresNominaEmpresaID(_this.idEmpresa).subscribe(function (res) {
                    console.log('Trabajadores: ', res.current);
                    if (res.current !== undefined && res.current !== null && res.current.length > 0) {
                        _this.lstTrabajadores = res.current;
                    }
                    else {
                        _this.lstTrabajadores = [];
                    }
                    setTimeout(function () {
                        _this.coreComponent.closeModal(0);
                        console.log(res.current);
                    }, 1500);
                }, function (error) {
                    setTimeout(function () {
                        _this.coreComponent.closeModal(0);
                        console.log(error);
                    }, 1500);
                });
            }
            else {
                _this.empresa = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_empresa_class__["a" /* Empresa */]();
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditarEmpresaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pn-editar-empresa',
            template: __webpack_require__("./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], EditarEmpresaComponent);
    return EditarEmpresaComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/empresas/empresas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empresas_component__ = __webpack_require__("./src/app/components/catalogo/empresas/empresas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crear_empresa_crear_empresa_component__ = __webpack_require__("./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_empresa_editar_empresa_component__ = __webpack_require__("./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EmpresasRoutingModule = /** @class */ (function () {
    function EmpresasRoutingModule() {
    }
    EmpresasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__empresas_component__["a" /* EmpresasComponent */],
                    },
                    {
                        path: 'crear',
                        component: __WEBPACK_IMPORTED_MODULE_3__crear_empresa_crear_empresa_component__["a" /* CrearEmpresaComponent */],
                    },
                    {
                        path: 'editar/:id',
                        component: __WEBPACK_IMPORTED_MODULE_4__editar_empresa_editar_empresa_component__["a" /* EditarEmpresaComponent */],
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], EmpresasRoutingModule);
    return EmpresasRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/empresas/empresas.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"opcion\" [homePath]=\"homePath\"></pn-header-bc>\r\n<div class=\"catalogo\">\r\n    <div class=\"catalogoHeader\">\r\n        <div class=\"catalogoHeaderChecks\">\r\n            <div class=\"catalogoHeaderChecksItem\" (click)=\"fnToogleHeaderChecks()\">\r\n                <img class=\"catalogoHeaderChecksItemImg\" [src]=\"habilitadosSelected ? './assets/Images/radio_selected.svg' : './assets/Images/radio_unselected.svg' \" alt=\"Habilidar\">\r\n                <span class=\"catalogoHeaderChecksItemSpan\">Habilitados</span>\r\n            </div>\r\n            <div class=\"catalogoHeaderChecksItem\" (click)=\"fnToogleHeaderChecks()\">\r\n                <img class=\"catalogoHeaderChecksItemImg\" [src]=\"!habilitadosSelected ? './assets/Images/radio_selected.svg' : './assets/Images/radio_unselected.svg' \" alt=\"Deshabilitar\">\r\n                <span class=\"catalogoHeaderChecksItemSpan\">Deshabilitados</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"catalogoHeaderBtn\" (click)=\"fnCreateCompany()\">AGREGAR PATRÓN</div>\r\n    </div>\r\n    <div class=\"catalogoSearch\">\r\n        <app-pn-search [searchPlaceholder]=\"searchPlaceholder\" (searchEmitter)=\"fnGetEmitSearch($event)\" ></app-pn-search>\r\n    </div>\r\n    <div class=\"catalogoLst\">\r\n        <app-pn-flip-card\r\n        [inpLogo]=\"item.parentLogo\"\r\n        [inpFrontValue]=\"item.parentFrontValue\"\r\n        [inpBackTitle]=\"item.parentBackTitle\"\r\n        [inpBackSubtitle]=\"item.parentBackSubtitle\"\r\n        [inpLstItemsBackBody]=\"item.parentLstItemsBackBody\"\r\n        [inpPath]=\"item.parentPath\"\r\n        [id]=\"item.id\"\r\n        *ngFor=\"let item of empresaSearched; let i = index\" ></app-pn-flip-card>\r\n    </div>\r\n    <div class=\"catalogoFooter\">\r\n        {{ (empresaSearched.length === 0 ) ? 'Sin Patrones' : '#' + empresaSearched.length + ' Patrones' }}\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- <div class=\"header-menu\">\r\n    <div class=\"white_space\"></div>\r\n    <div class=\"radiop\">\r\n        <img class=\"animationZoom\" (click)=\"Habilitar(0)\" [src]=\"habilidatosSelected ? 'assets/Images/radio_selected.svg ' : 'assets/Images/radio_unselected.svg' \" (click)=\"Habilitar(1)\" style=\" cursor:pointer\" width=\"14px\" height=\"14px\" alt=\"radioInactive\">\r\n        <p style=\"cursor: pointer; margin-left: 10px\" (click)=\"Habilitar(1)\">Habilitados</p>\r\n        <img class=\" animationZoom\" (click)=\"Habilitar(0)\" [src]=\"!habilidatosSelected ?'assets/Images/radio_selected.svg' : 'assets/Images/radio_unselected.svg' \" (click)=\"Habilitar(2)\" style=\"margin-left: 40px; cursor:pointer\" width=\"14px\" height=\"14px\" alt=\"radioInactive\">\r\n        <p style=\"cursor: pointer; margin-left: 10px\" (click)=\"Habilitar(0)\">Deshabilitados</p>\r\n    </div>\r\n    <div class=\"espacio_bco\"></div>\r\n    <div class=\"exportar\" (click)=\"fnCreateCompany()\" >AGREGAR PATRÓN</div>\r\n</div>\r\n<div class=\"container\" style=\"height: calc(80vh);\">\r\n    <div class=\"buscar\">\r\n        <div>\r\n            <div class=\"lupa\">\r\n                <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n            </div>\r\n            <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Patrones, RFC\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"footer\" style=\"margin-top:10px\">\r\n    <div style=\"width: 100%;height: 90%;display: flex; justify-content: space-between; align-content: center;align-items: center; \">\r\n        <div style=\"width: 10%; text-align: left;\">&nbsp;</div>\r\n        <div style=\"width: 20%;\">\r\n            <div class=\"total\">\r\n                <p>Total: {{empresaSearched.length}} Empresas</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"container\" style=\"height: calc(80vh);\">\r\n    \r\n    \r\n    <div *ngIf=\"empresaSearched.length>0; else cargando\">\r\n        <div class=\"tabla-clientes \">\r\n            <div style=\"margin-top:5px;width: 100%; display: flex; flex-direction: row; flex-wrap: wrap; margin-left: 2.5%;\">\r\n                <div *ngFor=\"let empresa of empresaSearched; let i = index\" style=\"display: flex; flex-wrap: wrap\">\r\n                    <div class=\"cliente\">\r\n                        <div class=\"flip-container\" onclick=\"this.classList.toggle('hover');\">\r\n                            <div class=\"flipper\">\r\n                                <div class=\"front\">\r\n                                    <div class=\"headerContentFront\">\r\n                                    </div>\r\n                                    <div class=\"centerPagination\">\r\n                                        <img class=\" ima animationZoom\" src=\"assets/Images/clientes/default.png\" />\r\n                                    </div>\r\n                                    <div class=\"footContent\">\r\n                                        <span>{{empresa.valor}}</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"back\">\r\n                                    <div class=\"backContent\">\r\n                                        <div class=\"crossContent\" style=\"width: 100%;display: flex; justify-content: flex-end; align-content: center;align-items: center;\">\r\n                                            <img src=\"assets/Images/tachecito.png \" height=\"20px\" width=\"20px\" alt=\"Cerrar\">\r\n                                        </div>\r\n                                        <div class=\"headerBackCartera CVerde\">\r\n                                            {{empresa.valor}}\r\n                                        </div>\r\n                                        <hr>\r\n                                        <div class=\"backCenterContent\">\r\n                                            <p style=\"width:100%;font-weight: 100\">RFC: {{empresa.valor1}}</p>\r\n                                            <p style=\"width:100%;font-weight: 100\">Razón Social: {{empresa.valor2}}</p>\r\n                                            <p style=\"width:100%;font-weight: 100\">{{ (empresa.valor3 === 1) ? 'Trabajador: 1' : 'Trabajadores: ' + empresa.valor3 }}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"footContentBack\">\r\n                                        <div class=\"iconsContent\">&nbsp;</div>\r\n                                    </div>\r\n                                    <a (click)=\"Entrar($event, empresa.llave)\">\r\n                                        <div class=\"buttonCardContent\">\r\n                                            <div class=\"buttonCardBtn\">\r\n                                                <h4>Entrar</h4>\r\n                                            </div>\r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"display: flex; justify-content: center;align-content: center;align-items: center; \">\r\n                        <hr [ngClass]=\"'v' + (i !== 0 && (i+1) % carterasPorFila === 0  ?' final': '')\" />\r\n                    </div>\r\n                    <hr [ngClass]=\"'h'\" />\r\n                    <ng-template #cargando>\r\n                        <div class=\"tabla-clientes\">\r\n                        </div>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/empresas.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:calc(100vh - 130px)}:host>pn-header-bc{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:41px}:host>.catalogo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0px 20px;height:calc(100vh - 170px)}:host>.catalogo>.catalogoHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:2px solid #424242;min-height:58px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.catalogo>.catalogoHeader>.catalogoHeaderChecks{display:-webkit-box;display:-ms-flexbox;display:flex;width:350px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:21px;color:#424242;font-weight:400;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.catalogo>.catalogoHeader>.catalogoHeaderChecks>.catalogoHeaderChecksItem{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.catalogo>.catalogoHeader>.catalogoHeaderChecks>.catalogoHeaderChecksItem>img.catalogoHeaderChecksItemImg{width:20px;height:21px}:host>.catalogo>.catalogoHeader>.catalogoHeaderChecks>.catalogoHeaderChecksItem>.catalogoHeaderChecksItemSpan{padding:0px 5px}:host>.catalogo>.catalogoHeader>.catalogoHeaderChecks>.catalogoHeaderChecksItem:hover{opacity:.5}:host>.catalogo>.catalogoHeader>.catalogoHeaderChecks>.catalogoHeaderChecksItem:active{opacity:.75}:host>.catalogo>.catalogoHeader>.catalogoHeaderBtn{display:-webkit-box;display:-ms-flexbox;display:flex;width:231px;height:30px;color:#fff;background:#008894;font-weight:700;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;font-family:Novecento;font-size:21px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.catalogo>.catalogoHeader>.catalogoHeaderBtn:hover{opacity:.5}:host>.catalogo>.catalogoHeader>.catalogoHeaderBtn:active{opacity:.75}:host>.catalogo>.catalogoSearch{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:110px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.catalogo>.catalogoSearch>app-pn-search{width:430px}:host>.catalogo>.catalogoLst{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;border-bottom:1px solid #424242;height:100%;-ms-flex-line-pack:start;align-content:flex-start;overflow:scroll;padding-bottom:74px}@media only screen and (min-width: 1368px)and (max-width: 2316px){:host>.catalogo>.catalogoLst>app-pn-flip-card{width:100%;height:100%;max-width:276px;max-height:245px}}@media only screen and (min-width: 2317px)and (max-width: 2559px){:host>.catalogo>.catalogoLst>app-pn-flip-card{width:100%;height:100%;max-width:342px;max-height:245px}}@media only screen and (min-width: 2560px){:host>.catalogo>.catalogoLst>app-pn-flip-card{width:100%;height:100%;max-width:382px;max-height:245px}}:host>.catalogo>.catalogoFooter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:51px;font-size:14px;color:#424242;font-weight:400}"

/***/ }),

/***/ "./src/app/components/catalogo/empresas/empresas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmpresasComponent = /** @class */ (function () {
    function EmpresasComponent(router, coreComponent, catalogoService) {
        this.router = router;
        this.coreComponent = coreComponent;
        this.catalogoService = catalogoService;
        this.habilitadosSelected = true;
        this.empresaSearched = [];
        this.empresaDisplay = [];
        this.empresaDisplayAux = [];
        this.empresaDisplayI = [];
        this.searchPlaceholder = 'Patrones, RFC';
        this.homePath = '/protected/catalogo/';
        this.opcion = [
            {
                label: 'Patrones',
                path: '/protected/catalogo/empresas',
            }
        ];
    }
    EmpresasComponent.prototype.fnGetEmitSearch = function ($event) {
        var searchArrayAux = [];
        var searchTerm = $event;
        if (searchTerm === '') {
            this.empresaSearched = (this.habilitadosSelected) ? this.empresaDisplayAux : this.empresaDisplayI;
        }
        else {
            this.empresaSearched.forEach(function (empresa) {
                if (empresa.valor.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || empresa.valor1.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(empresa);
                }
            });
            this.empresaSearched = searchArrayAux;
        }
    };
    EmpresasComponent.prototype.ngOnInit = function () {
        this.coreComponent.openModal(0);
        this.obtenerEmpresas();
    };
    EmpresasComponent.prototype.Habilitar = function (opc) {
        switch (opc) {
            case 1:
                this.habilitadosSelected = true;
                this.empresaSearched = this.empresaDisplayAux;
                this.empresaDisplay = this.empresaDisplayAux;
                break;
            case 0:
                this.habilitadosSelected = false;
                this.empresaSearched = this.empresaDisplayI;
                this.empresaDisplay = this.empresaDisplayI;
                break;
        }
    };
    EmpresasComponent.prototype.fnToogleHeaderChecks = function () {
        if (this.habilitadosSelected) {
            this.empresaSearched = this.empresaDisplayI;
            this.empresaDisplay = this.empresaDisplayI;
        }
        else {
            this.empresaSearched = this.empresaDisplayAux;
            this.empresaDisplay = this.empresaDisplayAux;
        }
        this.habilitadosSelected = !this.habilitadosSelected;
    };
    EmpresasComponent.prototype.obtenerEmpresas = function () {
        var _this = this;
        this.catalogoService.obtenerEmpresas().subscribe(function (empresas) {
            console.log(empresas.current);
            var lstH = [];
            var lstI = [];
            for (var _i = 0, _a = empresas.current; _i < _a.length; _i++) {
                var emp = _a[_i];
                emp.parentLogo = (emp.logo !== undefined && emp.logo !== null && emp.logo !== '') ? emp.logo : './assets/Images/logo_hover_proquifa.svg';
                emp.parentFrontValue = emp.valor;
                emp.parentBackTitle = emp.valor;
                emp.parentBackSubtitle = emp.valor1;
                emp.parentLstItemsBackBody = emp.lstValores;
                emp.parentPath = '/protected/catalogo/empresas/editar';
                emp.id = emp.llave;
                if (emp.activo) {
                    lstH.push(Object.assign({}, emp));
                }
                else {
                    lstI.push(Object.assign({}, emp));
                }
            }
            _this.empresaSearched = [];
            _this.empresaSearched = Object.assign([], lstH);
            _this.empresaDisplayI = [];
            _this.empresaDisplayI = Object.assign([], lstI);
            _this.empresaDisplayAux = [];
            _this.empresaDisplayAux = Object.assign([], lstH);
            setTimeout(function () {
                _this.coreComponent.closeModal(0);
            }, 1500);
        }, function (error) {
            setTimeout(function () {
                _this.coreComponent.closeModal(0);
            }, 1500);
        });
    };
    EmpresasComponent.prototype.fnCreateCompany = function () {
        this.router.navigate(['/protected/catalogo/empresas/crear']);
    };
    EmpresasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pn-empresas',
            template: __webpack_require__("./src/app/components/catalogo/empresas/empresas.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/empresas/empresas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__components_core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__["a" /* CatalogoService */]])
    ], EmpresasComponent);
    return EmpresasComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/empresas/empresas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasModule", function() { return EmpresasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__empresas_routing_module__ = __webpack_require__("./src/app/components/catalogo/empresas/empresas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__empresas_component__ = __webpack_require__("./src/app/components/catalogo/empresas/empresas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__crear_empresa_crear_empresa_component__ = __webpack_require__("./src/app/components/catalogo/empresas/crear-empresa/crear-empresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editar_empresa_editar_empresa_component__ = __webpack_require__("./src/app/components/catalogo/empresas/editar-empresa/editar-empresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var EmpresasModule = /** @class */ (function () {
    function EmpresasModule() {
    }
    EmpresasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__empresas_routing_module__["a" /* EmpresasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_drop_list_drop_list_module__["a" /* DropListModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__empresas_component__["a" /* EmpresasComponent */],
                __WEBPACK_IMPORTED_MODULE_9__crear_empresa_crear_empresa_component__["a" /* CrearEmpresaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__editar_empresa_editar_empresa_component__["a" /* EditarEmpresaComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_catalogo_catalogo_service__["a" /* CatalogoService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__empresas_component__["a" /* EmpresasComponent */]
            ]
        })
    ], EmpresasModule);
    return EmpresasModule;
}());



/***/ })

});
//# sourceMappingURL=empresas.module.chunk.js.map