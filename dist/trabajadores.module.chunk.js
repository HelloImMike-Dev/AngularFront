webpackJsonp(["trabajadores.module"],{

/***/ "./src/app/class/catalogo/banco.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Banco; });
var Banco = /** @class */ (function () {
    function Banco() {
        this.idBanco = 0;
        this.codigo = null;
        this.banco = null;
        this.activo = true;
    }
    return Banco;
}());



/***/ }),

/***/ "./src/app/class/catalogo/codigoPostal.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodigoPostal; });
var CodigoPostal = /** @class */ (function () {
    function CodigoPostal() {
        this.idCodigoPostal = 0;
        this.codigoEstado = 0;
        this.estado = null;
        this.codigoMunicipio = 0;
        this.municipio = null;
        this.ciudad = null;
        this.zona = null;
        this.codigoPostal = 0;
        this.colonia = null;
        this.tipo = null;
        this.codigoPais = 0;
        this.pais = null;
        this.claveEntFed = null;
    }
    return CodigoPostal;
}());



/***/ }),

/***/ "./src/app/class/catalogo/datoFiscal.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatoFiscal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nominaCatalogo_class__ = __webpack_require__("./src/app/class/catalogo/nominaCatalogo.class.ts");

var DatoFiscal = /** @class */ (function () {
    function DatoFiscal() {
        this.idDatoFiscal = 0;
        this.razonSocial = null;
        this.rfc = null;
        this.regimenFiscal = new __WEBPACK_IMPORTED_MODULE_0__nominaCatalogo_class__["a" /* NominaCatalogo */]();
        this.curp = null;
        this.activo = true;
    }
    return DatoFiscal;
}());



/***/ }),

/***/ "./src/app/class/catalogo/trabajador.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trabajador; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__empresa_class__ = __webpack_require__("./src/app/class/catalogo/empresa.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banco_class__ = __webpack_require__("./src/app/class/catalogo/banco.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codigoPostal_class__ = __webpack_require__("./src/app/class/catalogo/codigoPostal.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nominaCatalogo_class__ = __webpack_require__("./src/app/class/catalogo/nominaCatalogo.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datoFiscal_class__ = __webpack_require__("./src/app/class/catalogo/datoFiscal.class.ts");





var Trabajador = /** @class */ (function () {
    function Trabajador() {
        this.idTrabajador = 0;
        this.nombre = null;
        this.apellidoPaterno = null;
        this.apellidoMaterno = null;
        this.email = null;
        this.departamento = null;
        this.puesto = null;
        this.calle = null;
        this.numExt = null;
        this.numInt = null;
        this.referencia = null;
        this.codigoPostal = new __WEBPACK_IMPORTED_MODULE_2__codigoPostal_class__["a" /* CodigoPostal */]();
        this.titulo = null;
        this.telefonoFijo = null;
        this.telefonoExt = null;
        this.telefonoMovil = null;
        this.asimilado = false;
        this.datoFiscal = new __WEBPACK_IMPORTED_MODULE_4__datoFiscal_class__["a" /* DatoFiscal */]();
        this.numSeguridadSocial = null;
        this.fechaInicioRelLaboral = new Date();
        this.antiguedad = null;
        this.contrato = new __WEBPACK_IMPORTED_MODULE_3__nominaCatalogo_class__["a" /* NominaCatalogo */]();
        this.sindicalizado = false;
        this.jornada = new __WEBPACK_IMPORTED_MODULE_3__nominaCatalogo_class__["a" /* NominaCatalogo */]();
        this.numEmpleado = null;
        this.riesgoPuesto = new __WEBPACK_IMPORTED_MODULE_3__nominaCatalogo_class__["a" /* NominaCatalogo */]();
        this.periodicidadPago = new __WEBPACK_IMPORTED_MODULE_3__nominaCatalogo_class__["a" /* NominaCatalogo */]();
        this.banco = new __WEBPACK_IMPORTED_MODULE_1__banco_class__["a" /* Banco */]();
        this.tipoCuentaBancaria = null;
        this.cuentaBancaria = null;
        this.salarioBaseCotApor = 0.0;
        this.salarioDiarioIntegrado = 0.0;
        this.activo = true;
        this.empresaSalarios = new __WEBPACK_IMPORTED_MODULE_0__empresa_class__["a" /* Empresa */]();
        this.empresaAsimilados = new __WEBPACK_IMPORTED_MODULE_0__empresa_class__["a" /* Empresa */]();
    }
    return Trabajador;
}());



/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/crear-trabajador/crear-trabajador.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"opcion\" [homePath]=\"homePath\"></pn-header-bc>\r\n\r\n<div class=\"container\">\r\n    <div class=\"containerTitle\">Datos Generales</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">ID</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:80px;\" placeholder=\"000\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Nombre</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:340px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Apellido Paterno</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:245px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Apellido Materno</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:245px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[0] }}</span>\r\n            <pq-drop-list style=\"width:265px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[0]\" [isSearch]=\"isSearchParent[0]\" [isCategory]=\"isCategoryParent[0]\" [size]=\"sizeParent[0]\" [align]=\"alignParent[0]\" [itemSelect]=\"itemSelectParent[0]\" [widthContent]=\"widthContentParent[0]\" [marginLeftContent]=\"marginLeftContentParent[0]\" [tooltip]=\"tooltipParent[0]\" [tipoDrop]=\"tipoDropParent[0]\" [campoLabel]=\"campoLabelParent[0]\" [heightDrop]=\"heightDropParent[0]\" [colorBorderDrop]=\"colorBorderDropParent[0]\" (valueDropList)=\"fnGetValueDropList($event, 0)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[1] }}</span>\r\n            <pq-drop-list style=\"width:155px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[1]\" [isSearch]=\"isSearchParent[1]\" [isCategory]=\"isCategoryParent[1]\" [size]=\"sizeParent[1]\" [align]=\"alignParent[1]\" [itemSelect]=\"itemSelectParent[1]\" [widthContent]=\"widthContentParent[1]\" [marginLeftContent]=\"marginLeftContentParent[1]\" [tooltip]=\"tooltipParent[1]\" [tipoDrop]=\"tipoDropParent[1]\" [campoLabel]=\"campoLabelParent[1]\" [heightDrop]=\"heightDropParent[1]\" [colorBorderDrop]=\"colorBorderDropParent[1]\" (valueDropList)=\"fnGetValueDropList($event, 1)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[2] }}</span>\r\n            <pq-drop-list style=\"width:200px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[2]\" [isSearch]=\"isSearchParent[2]\" [isCategory]=\"isCategoryParent[2]\" [size]=\"sizeParent[2]\" [align]=\"alignParent[2]\" [itemSelect]=\"itemSelectParent[2]\" [widthContent]=\"widthContentParent[2]\" [marginLeftContent]=\"marginLeftContentParent[2]\" [tooltip]=\"tooltipParent[2]\" [tipoDrop]=\"tipoDropParent[2]\" [campoLabel]=\"campoLabelParent[2]\" [heightDrop]=\"heightDropParent[2]\" [colorBorderDrop]=\"colorBorderDropParent[2]\" (valueDropList)=\"fnGetValueDropList($event, 2)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[3] }}</span>\r\n            <pq-drop-list style=\"width:209px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[3]\" [isSearch]=\"isSearchParent[3]\" [isCategory]=\"isCategoryParent[3]\" [size]=\"sizeParent[3]\" [align]=\"alignParent[3]\" [itemSelect]=\"itemSelectParent[3]\" [widthContent]=\"widthContentParent[3]\" [marginLeftContent]=\"marginLeftContentParent[3]\" [tooltip]=\"tooltipParent[3]\" [tipoDrop]=\"tipoDropParent[3]\" [campoLabel]=\"campoLabelParent[3]\" [heightDrop]=\"heightDropParent[3]\" [colorBorderDrop]=\"colorBorderDropParent[3]\" (valueDropList)=\"fnGetValueDropList($event, 3)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Calle</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:334px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:136px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Colonia</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:549px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Código Postal</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:136px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Estado</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:198px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Municipio/Delegación</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:332px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">País</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:200px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Nacionalidad</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:209px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Teléfono</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:334px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[4] }}</span>\r\n            <pq-drop-list style=\"width:241px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[4]\" [isSearch]=\"isSearchParent[4]\" [isCategory]=\"isCategoryParent[4]\" [size]=\"sizeParent[4]\" [align]=\"alignParent[4]\" [itemSelect]=\"itemSelectParent[4]\" [widthContent]=\"widthContentParent[4]\" [marginLeftContent]=\"marginLeftContentParent[4]\" [tooltip]=\"tooltipParent[4]\" [tipoDrop]=\"tipoDropParent[4]\" [campoLabel]=\"campoLabelParent[4]\" [heightDrop]=\"heightDropParent[4]\" [colorBorderDrop]=\"colorBorderDropParent[4]\" (valueDropList)=\"fnGetValueDropList($event, 4)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número de Cuenta</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:198px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Clave Interbancaria</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:330px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">Contratación</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Fecha de ingreso</label>\r\n            <pq-date-picker [style.margin-top]=\"'5px'\" [style.width]=\"'190px'\" [style.padding-right]=\"'20px'\" [borderInputColor]=\"'1px solid #D8D9DD'\" [fontColor]=\"'#424242'\" [backGroundColor]=\"white\" [disabled]=\"'false'\" [sizeInput]=\"'16px'\" [heightInput]=\"'35px'\" [(date)]=\"date[0]\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event, 0)\"></pq-date-picker>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[5] }}</span>\r\n            <pq-drop-list style=\"width:327px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[5]\" [isSearch]=\"isSearchParent[5]\" [isCategory]=\"isCategoryParent[5]\" [size]=\"sizeParent[5]\" [align]=\"alignParent[5]\" [itemSelect]=\"itemSelectParent[5]\" [widthContent]=\"widthContentParent[5]\" [marginLeftContent]=\"marginLeftContentParent[5]\" [tooltip]=\"tooltipParent[5]\" [tipoDrop]=\"tipoDropParent[5]\" [campoLabel]=\"campoLabelParent[5]\" [heightDrop]=\"heightDropParent[5]\" [colorBorderDrop]=\"colorBorderDropParent[5]\" (valueDropList)=\"fnGetValueDropList($event, 5)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Fecha de Inicio</label>\r\n            <pq-date-picker [style.margin-top]=\"'5px'\" [style.width]=\"'190px'\" [style.padding-right]=\"'20px'\" [borderInputColor]=\"'1px solid #D8D9DD'\" [fontColor]=\"'#424242'\" [backGroundColor]=\"white\" [disabled]=\"'false'\" [sizeInput]=\"'16px'\" [heightInput]=\"'35px'\" [(date)]=\"date[1]\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event, 1)\"></pq-date-picker>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Fecha de Termino</label>\r\n            <pq-date-picker [style.margin-top]=\"'5px'\" [style.width]=\"'190px'\" [style.padding-right]=\"'20px'\" [borderInputColor]=\"'1px solid #D8D9DD'\" [fontColor]=\"'#424242'\" [backGroundColor]=\"white\" [disabled]=\"'false'\" [sizeInput]=\"'16px'\" [heightInput]=\"'35px'\" [(date)]=\"date[2]\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event, 2)\"></pq-date-picker>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Salario Mensual Inicial</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:240px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número de Seguridad Social</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:400px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[6] }}</span>\r\n            <pq-drop-list style=\"width:175px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[6]\" [isSearch]=\"isSearchParent[6]\" [isCategory]=\"isCategoryParent[6]\" [size]=\"sizeParent[6]\" [align]=\"alignParent[6]\" [itemSelect]=\"itemSelectParent[6]\" [widthContent]=\"widthContentParent[6]\" [marginLeftContent]=\"marginLeftContentParent[6]\" [tooltip]=\"tooltipParent[6]\" [tipoDrop]=\"tipoDropParent[6]\" [campoLabel]=\"campoLabelParent[6]\" [heightDrop]=\"heightDropParent[6]\" [colorBorderDrop]=\"colorBorderDropParent[6]\" (valueDropList)=\"fnGetValueDropList($event, 6)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[7] }}</span>\r\n            <pq-drop-list style=\"width:175px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[7]\" [isSearch]=\"isSearchParent[7]\" [isCategory]=\"isCategoryParent[7]\" [size]=\"sizeParent[7]\" [align]=\"alignParent[7]\" [itemSelect]=\"itemSelectParent[7]\" [widthContent]=\"widthContentParent[7]\" [marginLeftContent]=\"marginLeftContentParent[7]\" [tooltip]=\"tooltipParent[7]\" [tipoDrop]=\"tipoDropParent[7]\" [campoLabel]=\"campoLabelParent[7]\" [heightDrop]=\"heightDropParent[7]\" [colorBorderDrop]=\"colorBorderDropParent[7]\" (valueDropList)=\"fnGetValueDropList($event, 7)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[8] }}</span>\r\n            <pq-drop-list style=\"width:175px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[8]\" [isSearch]=\"isSearchParent[8]\" [isCategory]=\"isCategoryParent[8]\" [size]=\"sizeParent[8]\" [align]=\"alignParent[8]\" [itemSelect]=\"itemSelectParent[8]\" [widthContent]=\"widthContentParent[8]\" [marginLeftContent]=\"marginLeftContentParent[8]\" [tooltip]=\"tooltipParent[8]\" [tipoDrop]=\"tipoDropParent[8]\" [campoLabel]=\"campoLabelParent[8]\" [heightDrop]=\"heightDropParent[8]\" [colorBorderDrop]=\"colorBorderDropParent[8]\" (valueDropList)=\"fnGetValueDropList($event, 8)\"></pq-drop-list>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <div class=\"containerFormsInputsChecks\">\r\n                <div class=\"containerFormsInputsChecksLabel\">&nbsp;</div>\r\n                <div class=\"containerFormsInputsChecksHoriz\" (click)=\"fnCheck(0)\">\r\n                    <div [ngClass]=\"checkBtn[0]\"></div>\r\n                    <span class=\"containerFormsInputsChecksSpan\" [style.font-weight]=\"'700'\">Infonavit</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div [ngClass]=\"formsInputs[0]\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Número de Infonavit</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:240px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div [ngClass]=\"formsInputs[0]\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Cuota Mensual Infonavit</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:240px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div [ngClass]=\"formsInputs[0]\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Inicio Infonavit</label>\r\n            <pq-date-picker [style.margin-top]=\"'5px'\" [style.width]=\"'190px'\" [style.padding-right]=\"'20px'\" [borderInputColor]=\"'1px solid #D8D9DD'\" [fontColor]=\"'#424242'\" [backGroundColor]=\"white\" [disabled]=\"'false'\" [sizeInput]=\"'16px'\" [heightInput]=\"'35px'\" [(date)]=\"date[3]\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event, 3)\"></pq-date-picker>\r\n        </div>\r\n        <div [ngClass]=\"formsInputs[0]\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Termino Infonavit</label>\r\n            <pq-date-picker [style.margin-top]=\"'5px'\" [style.width]=\"'190px'\" [style.padding-right]=\"'20px'\" [borderInputColor]=\"'1px solid #D8D9DD'\" [fontColor]=\"'#424242'\" [backGroundColor]=\"white\" [disabled]=\"'false'\" [sizeInput]=\"'16px'\" [heightInput]=\"'35px'\" [(date)]=\"date[4]\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event, 4)\"></pq-date-picker>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">Pagos</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">RFC</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:165px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">CURP</label>\r\n            <input class=\"containerFormsInputsInput\" style=\"width:165px;\" placeholder=\"Escribe Aquí\" type=\"text\">\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[9] }}</span>\r\n            <pq-drop-list style=\"width:170px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[9]\" [isSearch]=\"isSearchParent[9]\" [isCategory]=\"isCategoryParent[9]\" [size]=\"sizeParent[9]\" [align]=\"alignParent[9]\" [itemSelect]=\"itemSelectParent[9]\" [widthContent]=\"widthContentParent[9]\" [marginLeftContent]=\"marginLeftContentParent[9]\" [tooltip]=\"tooltipParent[9]\" [tipoDrop]=\"tipoDropParent[9]\" [campoLabel]=\"campoLabelParent[9]\" [heightDrop]=\"heightDropParent[9]\" [colorBorderDrop]=\"colorBorderDropParent[9]\" (valueDropList)=\"fnGetValueDropList($event, 9)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[10] }}</span>\r\n            <pq-drop-list style=\"width:175px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[10]\" [isSearch]=\"isSearchParent[10]\" [isCategory]=\"isCategoryParent[10]\" [size]=\"sizeParent[10]\" [align]=\"alignParent[10]\" [itemSelect]=\"itemSelectParent[10]\" [widthContent]=\"widthContentParent[10]\" [marginLeftContent]=\"marginLeftContentParent[10]\" [tooltip]=\"tooltipParent[10]\" [tipoDrop]=\"tipoDropParent[10]\" [campoLabel]=\"campoLabelParent[10]\" [heightDrop]=\"heightDropParent[10]\" [colorBorderDrop]=\"colorBorderDropParent[10]\" (valueDropList)=\"fnGetValueDropList($event, 10)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <div class=\"containerFormsInputsChecks\">\r\n                <div class=\"containerFormsInputsChecksLabel\" [style.font-weight]=\"'700'\">Métodos de Pago:</div>\r\n                <div class=\"containerFormsInputsChecksHoriz\" (click)=\"fnCheck(1)\">\r\n                    <div [ngClass]=\"checkBtn[1]\"></div>\r\n                    <span class=\"containerFormsInputsChecksSpan\">Sueldos y Salarios Régimen Tipo 2</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div [ngClass]=\"formsInputs[1]\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Salario Diario Base</label>\r\n            <input [(ngModel)]=\"trabajadorValor[1]\" class=\"containerFormsInputsInput\" style=\"width:137px;\" placeholder=\"Escribe Aquí\" type=\"number\">\r\n        </div>\r\n        <div [ngClass]=\"formsInputs[1]\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[11] }}</span>\r\n            <pq-drop-list style=\"width:250px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[11]\" [isSearch]=\"isSearchParent[11]\" [isCategory]=\"isCategoryParent[11]\" [size]=\"sizeParent[11]\" [align]=\"alignParent[11]\" [itemSelect]=\"itemSelectParent[11]\" [widthContent]=\"widthContentParent[11]\" [marginLeftContent]=\"marginLeftContentParent[11]\" [tooltip]=\"tooltipParent[11]\" [tipoDrop]=\"tipoDropParent[11]\" [campoLabel]=\"campoLabelParent[11]\" [heightDrop]=\"heightDropParent[11]\" [colorBorderDrop]=\"colorBorderDropParent[11]\" (valueDropList)=\"fnGetValueDropList($event, 11)\"></pq-drop-list>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <div class=\"containerFormsInputsChecks\">\r\n                <div class=\"containerFormsInputsChecksLabel\">&nbsp;</div>\r\n                <div class=\"containerFormsInputsChecksHoriz\" (click)=\"fnCheck(2)\">\r\n                    <div [ngClass]=\"checkBtn[2]\"></div>\r\n                    <span class=\"containerFormsInputsChecksSpan\">Asimilados a Salarios Régimen Tipo 8</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div [ngClass]=\"formsInputs[2]\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">Salario Diario Base</label>\r\n            <input [(ngModel)]=\"trabajadorValor[2]\" class=\"containerFormsInputsInput\" style=\"width:137px;\" placeholder=\"Escribe Aquí\" type=\"number\">\r\n        </div>\r\n        <div [ngClass]=\"formsInputs[2]\">\r\n            <span class=\"containerFormsInputsSpan\">{{ selectsLabels[12] }}</span>\r\n            <pq-drop-list style=\"width:250px;margin-right: 20px;margin-top: 5px;\" [items]=\"itemsParent[12]\" [isSearch]=\"isSearchParent[12]\" [isCategory]=\"isCategoryParent[12]\" [size]=\"sizeParent[12]\" [align]=\"alignParent[12]\" [itemSelect]=\"itemSelectParent[12]\" [widthContent]=\"widthContentParent[12]\" [marginLeftContent]=\"marginLeftContentParent[12]\" [tooltip]=\"tooltipParent[12]\" [tipoDrop]=\"tipoDropParent[12]\" [campoLabel]=\"campoLabelParent[12]\" [heightDrop]=\"heightDropParent[12]\" [colorBorderDrop]=\"colorBorderDropParent[12]\" (valueDropList)=\"fnGetValueDropList($event, 12)\"></pq-drop-list>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTotals\">\r\n        <div class=\"containerTotalsLabels\">\r\n            <span class=\"containerTotalsLabelsSpan\">Salario Diario Integrado:</span>\r\n            <span class=\"containerTotalsLabelsSpan\">Sueldos y Salarios Régimen Tipo 2:</span>\r\n            <span class=\"containerTotalsLabelsSpan\">Asimilados a Salarios Régimen Tipo 8:</span>\r\n        </div>\r\n        <div class=\"containerTotalsCants\">\r\n            <span class=\"containerTotalsCantsSpan\">$&nbsp;{{ (trabajadorValor[1] + trabajadorValor[2]) | number:'2.2-2' }}</span>\r\n            <span class=\"containerTotalsCantsSpan\">$&nbsp;{{ trabajadorValor[1] }}</span>\r\n            <span class=\"containerTotalsCantsSpan\">$&nbsp;{{ trabajadorValor[2] }}</span>\r\n        </div>\r\n        <div class=\"containerTotalsTotal\">\r\n            <span class=\"containerTotalsTotalSpan\">Salario Mensual Total</span>\r\n            <span class=\"containerTotalsTotalSpan\">$&nbsp;{{ ((trabajadorValor[1] + trabajadorValor[2]) * 30) | number:'2.2-2' }}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerTitle\">Carga de Documentación</div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">{{ fileEmpLabel[0] }}</label>\r\n            <input (change)=\"fnGetFile($event, 0)\" id=\"fileEmp0\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[0] }} </div>\r\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[0]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(0)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[0]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[0]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">{{ fileEmpLabel[1] }}</label>\r\n            <input (change)=\"fnGetFile($event, 1)\" id=\"fileEmp1\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[1] }} </div>\r\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[1]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(1)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[1]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[1]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">{{ fileEmpLabel[2] }}</label>\r\n            <input (change)=\"fnGetFile($event, 2)\" id=\"fileEmp2\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[2] }} </div>\r\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[2]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(2)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[2]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[2]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">{{ fileEmpLabel[3] }}</label>\r\n            <input (change)=\"fnGetFile($event, 3)\" id=\"fileEmp3\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[3] }} </div>\r\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[3]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(3)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[3]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[3]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">{{ fileEmpLabel[4] }}</label>\r\n            <input (change)=\"fnGetFile($event, 4)\" id=\"fileEmp4\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(4)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[4] }} </div>\r\n                <div (click)=\"fnClickFile(4)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[4]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(4)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[4]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[4]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">{{ fileEmpLabel[5] }}</label>\r\n            <input (change)=\"fnGetFile($event, 5)\" id=\"fileEmp5\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(5)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[5] }} </div>\r\n                <div (click)=\"fnClickFile(5)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[5]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(5)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[5]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[5]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerForms\">\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">{{ fileEmpLabel[6] }}</label>\r\n            <input (change)=\"fnGetFile($event, 6)\" id=\"fileEmp6\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(6)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[6] }} </div>\r\n                <div (click)=\"fnClickFile(6)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[6]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(6)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[6]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[6]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">{{ fileEmpLabel[7] }}</label>\r\n            <input (change)=\"fnGetFile($event, 7)\" id=\"fileEmp7\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(7)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[7] }} </div>\r\n                <div (click)=\"fnClickFile(7)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[7]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(7)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[7]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[7]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">{{ fileEmpLabel[8] }}</label>\r\n            <input (change)=\"fnGetFile($event, 8)\" id=\"fileEmp8\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(8)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[8] }} </div>\r\n                <div (click)=\"fnClickFile(8)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[8]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(8)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[8]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[8]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerFormsInputs\">\r\n            <label for=\"\" class=\"containerFormsInputsLabel\">{{ fileEmpLabel[9] }}</label>\r\n            <input (change)=\"fnGetFile($event, 9)\" id=\"fileEmp9\" class=\"containerFormsInputsFile\" type=\"file\" accept=\"application/pdf\">\r\n            <div class=\"containerFormsInputsFileBox\">\r\n                <div (click)=\"fnClickFile(9)\" class=\"containerFormsInputsFileBoxInput\"> {{ fileEmpName[9] }} </div>\r\n                <div (click)=\"fnClickFile(9)\" class=\"containerFormsInputsFileBoxUpload\" *ngIf=\"!fileEmpIsUp[9]\">\r\n                    <img src=\"./assets/Images/cargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxUploadImg\">\r\n                </div>\r\n                <div (click)=\"fnClickFile(9)\" class=\"containerFormsInputsFileBoxReload\" *ngIf=\"fileEmpIsUp[9]\">\r\n                    <img src=\"./assets/Images/recargar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxReloadImg\">\r\n                </div>\r\n                <div class=\"containerFormsInputsFileBoxView\" *ngIf=\"fileEmpIsUp[9]\">\r\n                    <img src=\"./assets/Images/visualizar_archivo.svg\" alt=\"Archivo\" class=\"containerFormsInputsFileBoxViewImg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerForms\" [style.height]=\"'50px'\"></div>\r\n    <div class=\"containerBtns\">\r\n        <div class=\"containerBtnsBtn\">\r\n            <div class=\"containerBtnsBtnCancel\" (click)=\"fnReturnView()\">CANCELAR</div>\r\n        </div>\r\n        <div class=\"containerBtnsBtn\">\r\n            <div class=\"containerBtnsBtnCancel\" [style.margin-right]=\"'20px'\" (click)=\"fnReturnView()\">FINIQUITAR</div>\r\n            <div [ngClass]=\"classBtnAccept\" (click)=\"fnReturnView()\">ACEPTAR</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/crear-trabajador/crear-trabajador.component.scss":
/***/ (function(module, exports) {

module.exports = "pn-header-bc{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:41px}.container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:25px}.container>.containerTitle{display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:10px;border-bottom:1px solid #424242;font-size:17px;color:#424242;font-weight:700;margin:17px 0px;font-family:Novecento;text-transform:uppercase;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.container>.containerTitle>.containerTitleItem1{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.containerTitle>.containerTitleItem2{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.containerTitle>.containerTitleItem2>img.containerTitleItem2Img{display:-webkit-box;display:-ms-flexbox;display:flex;width:30px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.container>.containerTitle>.containerTitleItem2>img.containerTitleItem2Img:hover{opacity:.5}.container>.containerTitle>.containerTitleItem2>img.containerTitleItem2Img:active{opacity:.75}.container>.containerTotals{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:95px;background:rgba(0,136,148,.05);margin:15px 0px;padding:10px 120px 10px 10px}.container>.containerTotals>.containerTotalsLabels{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:225px;margin:0px 20px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;height:80px;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly}.container>.containerTotals>.containerTotalsLabels>.containerTotalsLabelsSpan{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:13px;color:#424242;font-weight:400}.container>.containerTotals>.containerTotalsCants{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100px;padding:0px 20px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;border-right:1px solid #424242;height:80px;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly}.container>.containerTotals>.containerTotalsCants>.containerTotalsCantsSpan{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:13px;color:#008894;font-weight:400}.container>.containerTotals>.containerTotalsTotal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:150px;margin:0px 20px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;height:80px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.container>.containerTotals>.containerTotalsTotal>.containerTotalsTotalSpan:nth-of-type(1){display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;color:#424242;font-weight:700;padding:3px 0px}.container>.containerTotals>.containerTotalsTotal>.containerTotalsTotalSpan:nth-of-type(2){display:-webkit-box;display:-ms-flexbox;display:flex;font-size:20px;color:#4ba92b;font-weight:700;padding:3px 0px}.container>.containerForms{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin:17px 0px}.container>.containerForms>.containerFormsInputs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-item-align:baseline;align-self:baseline;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:20px}.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksLabel{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:30px;margin-top:5px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz>.containerFormsInputsChecksUncheck{display:-webkit-box;display:-ms-flexbox;display:flex;width:18px;height:18px;margin-right:10px;border:1px solid #424242;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz>.checked{content:url(\"/assets/Images/checked20px.svg\")}.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz>span.containerFormsInputsChecksSpan{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz:hover{opacity:.5}.container>.containerForms>.containerFormsInputs>.containerFormsInputsChecks>.containerFormsInputsChecksHoriz:active{opacity:.75}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFile{display:none}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox{display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:85px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxInput{display:-webkit-box;display:-ms-flexbox;display:flex;width:250px;height:28px;display:flex;border:1px solid #d8d8d8;font-size:16px;color:#424242;font-weight:400;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxInput:hover{opacity:.5}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxInput:active{opacity:.75}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload>.containerFormsInputsFileBoxUploadImg{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload:hover{opacity:.5}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxUpload:active{opacity:.75}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;margin-right:10px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload>.containerFormsInputsFileBoxReloadImg{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload:hover{opacity:.5}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxReload:active{opacity:.75}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView>.containerFormsInputsFileBoxViewImg{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView:hover{opacity:.5}.container>.containerForms>.containerFormsInputs>.containerFormsInputsFileBox>.containerFormsInputsFileBoxView:active{opacity:.75}.container>.containerForms>.containerFormsInputs>.containerFormsInputsSpan{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}.container>.containerForms>.containerFormsInputs>pq-drop-list{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.containerForms>.containerFormsInputs>label.containerFormsInputsLabel{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400}.container>.containerForms>.containerFormsInputs>input.containerFormsInputsInput{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:30px;margin-right:20px;margin-top:5px;border:1px solid #d8d8d8;font-size:16px;color:#424242;font-weight:400}.container>.containerForms>.inputsDisabled{pointer-events:none;opacity:.5}.container>.containerForms>.containerFormsInputLabel{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:55px}.container>.containerForms>.containerFormsInputLabel>.containerFormsInputLabelCheck{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.lstTrabajadores{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.lstTrabajadores>.lstTrabajadoresHeader{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.lstTrabajadores>.lstTrabajadoresHeader>.lstTrabajadoresHeaderCol{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.lstTrabajadores>.lstTrabajadoresItem{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.lstTrabajadoresVacia{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:120px;margin-bottom:104px}.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaLabel{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:36px;color:#d8d9dd;font-family:Novecento;font-weight:700;padding:25px 0px}.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtn{display:-webkit-box;display:-ms-flexbox;display:flex;background:#008894;width:293px;height:30px;font-size:21px;color:#fff;font-family:Novecento;font-weight:700;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtn:hover{opacity:.5}.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtn:active{opacity:.75}.container>.lstTrabajadoresVacia>.lstTrabajadoresVaciaBtnDisabled{display:-webkit-box;display:-ms-flexbox;display:flex;background:#c2c3c9;width:293px;height:30px;font-size:21px;color:#fff;font-family:Novecento;font-weight:700;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none}.container>.containerBtns{display:-webkit-box;display:-ms-flexbox;display:flex;border-top:2px solid #424242;padding-top:20px;height:48px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:21px;color:#fff;font-weight:700}.container>.containerBtns>.containerBtnsBtn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.container>.containerBtns>.containerBtnsBtn>.containerBtnsBtnCancel{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Novecento;background:#008894;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:170px;height:30px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container>.containerBtns>.containerBtnsBtn>.containerBtnsBtnCancel:hover{opacity:.5}.container>.containerBtns>.containerBtnsBtn>.containerBtnsBtnCancel:active{opacity:.75}.container>.containerBtns>.containerBtnsBtn>.containerBtnsBtnDisabled{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Novecento;background:#c2c3c9;pointer-events:none;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:170px;height:30px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container>.containerBtns>.containerBtnsBtn>.containerBtnsBtnActive{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Novecento;background:#4da72c;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:170px;height:30px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container>.containerBtns>.containerBtnsBtn>.containerBtnsBtnActive:hover{opacity:.5}.container>.containerBtns>.containerBtnsBtn>.containerBtnsBtnActive:active{opacity:.75}"

/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/crear-trabajador/crear-trabajador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearTrabajadorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_trabajador_class__ = __webpack_require__("./src/app/class/catalogo/trabajador.class.ts");
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





var CrearTrabajadorComponent = /** @class */ (function () {
    function CrearTrabajadorComponent(catalogoService, coreContainerComponent, router) {
        this.catalogoService = catalogoService;
        this.coreContainerComponent = coreContainerComponent;
        this.router = router;
        /* Inicio de variables para los SELECTS
        0.- Situación Familiar
        1.- Sexo
        2.- Departamento
        3.- Puesto
        4.- Nombre del Banco
        5.- Tipo de Contrato
        6.- Horario Inicial
        7.- Horario Final
        8.- Turno
        9.- Riesgo Puesto
        10.- Periodicidad de Pago
        11.- Patrón Salarios
        12.- Patrón Asimilados
        */
        this.cantSelects = 13; // Siempre más uno
        this.itemsParent = new Array(this.cantSelects).fill(null);
        this.isSearchParent = new Array(this.cantSelects).fill(false);
        this.isCategoryParent = new Array(this.cantSelects).fill(false);
        this.sizeParent = new Array(this.cantSelects).fill('');
        this.alignParent = new Array(this.cantSelects).fill('left');
        this.itemSelectParent = new Array(this.cantSelects).fill({ nombre: 'Seleccionar', id: -1 });
        this.widthContentParent = new Array(this.cantSelects).fill('100%');
        this.marginLeftContentParent = new Array(this.cantSelects).fill('0px');
        this.tooltipParent = new Array(this.cantSelects).fill(true);
        this.tipoDropParent = new Array(this.cantSelects).fill('');
        this.campoLabelParent = new Array(this.cantSelects).fill('');
        this.heightDropParent = new Array(this.cantSelects).fill('35px'); // sumar 5px no sé por qué jajaxD
        this.colorBorderDropParent = new Array(this.cantSelects).fill('#D8D9DD');
        this.selectsAux = new Array(this.cantSelects).fill(false);
        this.selectsLabels = [
            'Situación Familiar',
            'Sexo',
            'Departamento',
            'Puesto',
            'Nombre del Banco',
            'Tipo de Contrato',
            'Horario Inicial',
            'Horario Final',
            'Turno',
            'Riesgo Puesto',
            'Periodicidad de Pago',
            'Patrón Salarios',
            'Patrón Asimilados'
        ];
        this.lstHoras = [
            { nombre: '00:00', id: 0 },
            { nombre: '01:00', id: 1 },
            { nombre: '02:00', id: 2 },
            { nombre: '03:00', id: 3 },
            { nombre: '04:00', id: 4 },
            { nombre: '05:00', id: 5 },
            { nombre: '06:00', id: 6 },
            { nombre: '07:00', id: 7 },
            { nombre: '08:00', id: 8 },
            { nombre: '09:00', id: 9 },
            { nombre: '10:00', id: 10 },
            { nombre: '11:00', id: 11 },
            { nombre: '12:00', id: 12 },
            { nombre: '13:00', id: 13 },
            { nombre: '14:00', id: 14 },
            { nombre: '15:00', id: 15 },
            { nombre: '16:00', id: 16 },
            { nombre: '17:00', id: 17 },
            { nombre: '18:00', id: 18 },
            { nombre: '19:00', id: 19 },
            { nombre: '20:00', id: 20 },
            { nombre: '21:00', id: 21 },
            { nombre: '22:00', id: 22 },
            { nombre: '23:00', id: 23 },
        ];
        this.lstTipoCuenta = [
            { nombre: 'Celular', id: 1 },
            { nombre: 'CLABE', id: 2 },
            { nombre: 'Tarjeta Débito', id: 3 },
            { nombre: 'Número de Cuenta', id: 4 },
            { nombre: 'Monedero Electrónico', id: 5 }
        ];
        this.codigoPostal = null;
        this.pais = null;
        this.fileEmpCant = 10;
        this.fileEmpLabel = [
            'Cargar Comprobante de domicilio',
            'Cargar Identificación oficial',
            'Cargar Contrato Firmado',
            'Cargar Alta IMSS',
            'Cargar Infonavit',
            'Cargar Carta Patronal',
            'Cargar Carta de Renuncia y Finiquito Firmado',
            'Cargar Autorización Permanente',
            'Cargar Contrato Bancario',
            'Cargar Registro del Empleo'
        ];
        this.fileEmp = new Array(this.fileEmpCant).fill(null);
        this.fileEmpName = new Array(this.fileEmpCant).fill('.pdf');
        this.fileEmpIsUp = new Array(this.fileEmpCant).fill(false);
        this.trabajadorValor = new Array(4).fill(0);
        this.dateCant = 5;
        this.date = new Array(this.dateCant).fill(null);
        this.classBtnAccept = 'containerBtnsBtnActive'; // containerBtnsBtnDisabled
        this.checkBtnCant = 3;
        this.checkBtn = new Array(this.checkBtnCant).fill('containerFormsInputsChecksUncheck');
        this.formsInputs = new Array(this.checkBtnCant).fill('containerFormsInputs inputsDisabled');
    }
    CrearTrabajadorComponent.prototype.ngOnInit = function () {
        this.coreContainerComponent.openModal(0);
        this.trabajador = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_trabajador_class__["a" /* Trabajador */]();
        this.itemsParent[9] = [];
        for (var _i = 0, _a = this.lstTipoCuenta; _i < _a.length; _i++) {
            var it = _a[_i];
            var item = {
                nombre: it.nombre,
                id: it.id
            };
            this.itemsParent[9].push(Object.assign({}, item));
        }
        for (var x = 0; x < this.cantSelects; x++) {
            this.fnFillSelects(x);
        }
    };
    CrearTrabajadorComponent.prototype.fnCheck = function (opc) {
        this.checkBtn[opc] = (this.checkBtn[opc].match('checked')) ? 'containerFormsInputsChecksUncheck' : 'containerFormsInputsChecksUncheck checked';
        this.formsInputs[opc] = (this.formsInputs[opc].match('inputsDisabled')) ? 'containerFormsInputs' : 'containerFormsInputs inputsDisabled';
    };
    CrearTrabajadorComponent.prototype.getFechaImpl = function ($event, opc) {
        console.log('getFechaImpl: ', $event, opc);
    };
    CrearTrabajadorComponent.prototype.fnClickFile = function (opc) {
        document.getElementById('fileEmp' + opc).click();
    };
    CrearTrabajadorComponent.prototype.fnGetFile = function ($event, opc) {
        console.log(typeof $event, opc);
        if ($event.target.files !== undefined && $event.target.files !== null && $event.target.files.length > 0) {
            this.fileEmp[opc] = $event.target.files;
            this.fileEmpIsUp[opc] = true;
            this.fileEmpName[opc] = $event.target.files[0].name;
        }
        else {
            this.fileEmp[opc] = null;
            this.fileEmpIsUp[opc] = false;
            this.fileEmpName[opc] = (opc < 2) ? '.pdf' : (opc === 2) ? '.cer' : '.key';
        }
    };
    CrearTrabajadorComponent.prototype.fnGetValueDropList = function (value, index) {
        console.log(value, index);
        switch (index) {
            case 0:
                this.trabajador.empresaSalarios.idEmpresa = value.id;
                break;
            case 1:
                this.trabajador.banco.idBanco = value.id;
                break;
            case 2:
                this.trabajador.periodicidadPago.idNominaCatalogo = value.id;
                break;
            case 3:
                this.trabajador.riesgoPuesto.idNominaCatalogo = value.id;
                break;
            case 4:
                this.trabajador.datoFiscal.regimenFiscal.idNominaCatalogo = value.id;
                break;
            case 5:
                this.trabajador.jornada.idNominaCatalogo = value.id;
                break;
            case 6:
                this.trabajador.contrato.idNominaCatalogo = value.id;
                break;
            case 7:
                this.pais = value.id;
                this.fnGetColonies();
                break;
            case 8:
                this.trabajador.codigoPostal.idCodigoPostal = value.id;
                break;
            case 9:
                this.trabajador.tipoCuentaBancaria = value.nombre;
                break;
        }
    };
    CrearTrabajadorComponent.prototype.fnGetColonies = function () {
        var _this = this;
        if (this.codigoPostal !== undefined && this.codigoPostal !== null && this.codigoPostal !== 0) {
            if (this.pais !== undefined && this.pais !== null && this.pais !== 0) {
                this.catalogoService.obtenerColoniasPaisCodPost(this.pais, this.codigoPostal).subscribe(function (lstCol) {
                    console.log('obtenerColoniasPaisCodPost: ', lstCol.current);
                    _this.itemsParent[8] = [];
                    if (lstCol.current !== undefined && lstCol.current !== null && lstCol.current.length > 0) {
                        for (var _i = 0, _a = lstCol.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.claveEntFed + ' - ' + it.colonia,
                                id: it.idCodigoPostal
                            };
                            _this.itemsParent[8].push(Object.assign({}, item));
                        }
                        _this.coreContainerComponent.closeModal(0);
                    }
                    else {
                        _this.coreContainerComponent.closeModal(0);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    CrearTrabajadorComponent.prototype.fnSaveTrabajador = function () {
        var _this = this;
        this.coreContainerComponent.openModal(0);
        this.catalogoService.guardarTrabajadorNomina(this.trabajador).subscribe(function (trab) {
            console.log(trab.current);
            setTimeout(function () {
                _this.coreContainerComponent.closeModal(0);
                _this.fnReturnView();
            }, 1500);
        });
    };
    CrearTrabajadorComponent.prototype.fnReturnView = function () {
        this.router.navigate(['protected/catalogo/empresas/']);
    };
    CrearTrabajadorComponent.prototype.fnSelectsAux = function () {
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
            this.coreContainerComponent.closeModal(0);
        }
    };
    CrearTrabajadorComponent.prototype.fnFillSelects = function (opc) {
        var _this = this;
        switch (opc) {
            case 0:
                this.catalogoService.obtenerNominaCatalogo('EstadoCivil').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - EstadoCivil: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, function (error) {
                    console.log('Error obtenerNominaCatalogo - EstadoCivil: ', error);
                });
                break;
            case 1:
                this.catalogoService.obtenerNominaCatalogo('Sexo').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - Sexo: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, function (error) {
                    console.log('Error obtenerNominaCatalogo - Sexo: ', error);
                });
                break;
            case 2:
                this.catalogoService.obtenerNominaCatalogo('Departamento').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - Departamento: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, function (error) {
                    console.log('Error obtenerNominaCatalogo - Departamento: ', error);
                });
                break;
            case 3:
                this.catalogoService.obtenerNominaCatalogo('Puesto').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - Puesto: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, function (error) {
                    console.log('Error obtenerNominaCatalogo - Puesto: ', error);
                });
                break;
            case 4:
                this.catalogoService.obtenerBancosTrabajadorNomina().subscribe(function (lstBan) {
                    console.log('obtenerBancosTrabajadorNomina: ', lstBan.current);
                    _this.itemsParent[opc] = [];
                    if (lstBan.current !== undefined && lstBan.current !== null && lstBan.current.length > 0) {
                        for (var _i = 0, _a = lstBan.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.valor,
                                id: it.llave
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, function (error) {
                    console.log('Error obtenerBancosTrabajadorNomina: ', error);
                });
                break;
            case 5:
                this.catalogoService.obtenerNominaCatalogo('RegimenContratacion').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - RegimenContratacion: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, function (error) {
                    console.log('Error obtenerNominaCatalogo - RegimenContratacion: ', error);
                });
                break;
            case 6:
                this.itemsParent[opc] = [];
                this.itemsParent[opc] = Object.assign([], this.lstHoras);
                this.itemsParent[opc + 1] = [];
                this.itemsParent[opc + 1] = Object.assign([], this.lstHoras);
                break;
            case 8:
                this.catalogoService.obtenerNominaCatalogo('JornadaLaboral').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - JornadaLaboral: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, function (error) {
                    console.log('Error obtenerNominaCatalogo - JornadaLaboral: ', error);
                });
                break;
            case 9:
                this.catalogoService.obtenerNominaCatalogo('RiesgoPuesto').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - RiesgoPuesto: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, function (error) {
                    console.log('Error obtenerNominaCatalogo - RiesgoPuesto: ', error);
                });
                break;
            case 10:
                this.catalogoService.obtenerNominaCatalogo('PeriodicidadPago').subscribe(function (lstNomCat) {
                    console.log('obtenerNominaCatalogo - PeriodicidadPago: ', lstNomCat);
                    _this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (var _i = 0, _a = lstNomCat.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, function (error) {
                    console.log('Error obtenerNominaCatalogo - PeriodicidadPago: ', error);
                });
                break;
            case 11:
                this.catalogoService.obtenerEmpresas().subscribe(function (lstEmp) {
                    console.log('obtenerEmpresas: ', lstEmp.current);
                    _this.itemsParent[opc] = [];
                    _this.itemsParent[opc + 1] = [];
                    if (lstEmp.current !== undefined && lstEmp.current !== null && lstEmp.current.length > 0) {
                        for (var _i = 0, _a = lstEmp.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.valor,
                                id: it.llave
                            };
                            _this.itemsParent[opc].push(Object.assign({}, item));
                            _this.itemsParent[opc + 1].push(Object.assign({}, item));
                        }
                    }
                }, function (error) {
                    console.log('Error obtenerEmpresas: ', error);
                });
                break;
        }
        this.selectsAux[opc] = true;
        this.fnSelectsAux();
    };
    CrearTrabajadorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pn-crear-trabajador',
            template: __webpack_require__("./src/app/components/catalogo/trabajadores/crear-trabajador/crear-trabajador.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/trabajadores/crear-trabajador/crear-trabajador.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], CrearTrabajadorComponent);
    return CrearTrabajadorComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/editar-trabajador/editar-trabajador.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"containerTitle\">Editar Trabajador {{ trabajador.idTrabajador }}</div>\r\n    <div class=\"containerForms\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.nombre\" placeholder=\"nombre\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.apellidoPaterno\" placeholder=\"apellidoPaterno\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.apellidoMaterno\" placeholder=\"apellidoMaterno\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.email\" placeholder=\"email\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.departamento\" placeholder=\"departamento\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.puesto\" placeholder=\"puesto\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.calle\" placeholder=\"calle\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.numExt\" placeholder=\"numExt\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.numInt\" placeholder=\"numInt\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"codigoPostal\" placeholder=\"C.P.\" (blur)=\"fnGetColonies()\" >\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.referencia\" placeholder=\"referencia\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.titulo\" placeholder=\"titulo\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.telefonoFijo\" placeholder=\"telefonoFijo\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.telefonoExt\" placeholder=\"telefonoExt\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.telefonoMovil\" placeholder=\"telefonoMovil\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.numSeguridadSocial\" placeholder=\"numSeguridadSocial\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.datoFiscal.razonSocial\" placeholder=\"Razón Social\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.datoFiscal.rfc\" placeholder=\"RFC\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.datoFiscal.curp\" placeholder=\"CURP\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.antiguedad\" placeholder=\"antiguedad\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.numEmpleado\" placeholder=\"numEmpleado\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.cuentaBancaria\" placeholder=\"cuentaBancaria\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.salarioBaseCotApor\" placeholder=\"salarioBaseCotApor\">\r\n        <input class=\"containerFormsInputs\" style=\"width:80px\" type=\"text\" [(ngModel)]=\"trabajador.salarioDiarioIntegrado\" placeholder=\"salarioDiarioIntegrado\">\r\n        <label class=\"containerFormsInputLabel\" for=\"\">Asimilado<input [(ngModel)]=\"trabajador.asimilado\" class=\"containerFormsInputLabelCheck\" style=\"width:100px\" type=\"checkbox\"></label>\r\n        <label class=\"containerFormsInputLabel\" for=\"\">Sindicalizado<input [(ngModel)]=\"trabajador.sindicalizado\" class=\"containerFormsInputLabelCheck\" style=\"width:100px\" type=\"checkbox\"></label>\r\n        <!-- SELECTS -->\r\n        <div class=\"containerFormsInputSelect\" *ngFor=\"let item of itemsParent; let i = index\">\r\n            <span>{{ selectsLabels[i] }}</span>\r\n            <pq-drop-list [items]=\"itemsParent[i]\" [isSearch]=\"isSearchParent[i]\" [isCategory]=\"isCategoryParent[i]\" [size]=\"sizeParent[i]\" [align]=\"alignParent[i]\" [itemSelect]=\"itemSelectParent[i]\" [widthContent]=\"widthContentParent[i]\" [marginLeftContent]=\"marginLeftContentParent[i]\" [tooltip]=\"tooltipParent[i]\" [tipoDrop]=\"tipoDropParent[i]\" [campoLabel]=\"campoLabelParent[i]\" (valueDropList)=\"fnGetValueDropList($event, i)\"></pq-drop-list>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        {{ trabajador | json }}\r\n    </div>\r\n    <div class=\"containerBtns\">\r\n        <div class=\"containerBtnsBtn\">Cancelar</div>\r\n        <div class=\"containerBtnsBtn\" (click)=\"fnSaveTrabajador()\" >Guardar</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/editar-trabajador/editar-trabajador.component.scss":
/***/ (function(module, exports) {

module.exports = ".container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:25px}.container>.containerTitle{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.containerForms{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container>.containerForms>input.containerFormsInputs{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:30px;margin:10px;font-family:Roboto;font-size:15px;color:#4a4a4a;border:1px solid #d8d8d8}.container>.containerForms>.containerFormsInputLabel{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container>.containerForms>.containerFormsInputLabel>.containerFormsInputLabelCheck{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.containerForms>.containerFormsInputSelect{display:-webkit-box;display:-ms-flexbox;display:flex;width:250px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.container>.containerBtns{display:-webkit-box;display:-ms-flexbox;display:flex}.container>.containerBtns>.containerBtnsBtn{display:-webkit-box;display:-ms-flexbox;display:flex}"

/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/editar-trabajador/editar-trabajador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarTrabajadorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_trabajador_class__ = __webpack_require__("./src/app/class/catalogo/trabajador.class.ts");
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





var EditarTrabajadorComponent = /** @class */ (function () {
    function EditarTrabajadorComponent(catalogoService, coreContainerComponent, router, route) {
        var _this = this;
        this.catalogoService = catalogoService;
        this.coreContainerComponent = coreContainerComponent;
        this.router = router;
        this.route = route;
        /* Inicio de variables para los SELECTS
        0.- Empresas
        1.- Bancos
        2.- PeriodicidadPago
        3.- RiesgoPuesto
        4.- Regimen
        5.- Jornada
        6.- Contrato
        7.- Pais
        8.- CodigoPostal
        9.- TipoCuenta
        */
        this.cantSelects = 10;
        this.itemsParent = new Array(this.cantSelects).fill(null);
        this.isSearchParent = new Array(this.cantSelects).fill(true);
        this.isCategoryParent = new Array(this.cantSelects).fill(false);
        this.sizeParent = new Array(this.cantSelects).fill('');
        this.alignParent = new Array(this.cantSelects).fill('');
        this.itemSelectParent = new Array(this.cantSelects).fill(null);
        this.widthContentParent = new Array(this.cantSelects).fill('100%');
        this.marginLeftContentParent = new Array(this.cantSelects).fill('0px');
        this.tooltipParent = new Array(this.cantSelects).fill(true);
        this.tipoDropParent = new Array(this.cantSelects).fill('');
        this.campoLabelParent = new Array(this.cantSelects).fill('');
        this.selectsLabels = ['Empresas', 'Bancos', 'Periodicidad Pago', 'Riesgo Puesto', 'Regimen Fiscal', 'Jornada', 'Contrato', 'País', 'Codigo Postal', 'Tipo Cuenta Bancaria'];
        this.lstTipoCuenta = [
            { valor: 'Celular', llave: 1 },
            { valor: 'CLABE', llave: 2 },
            { valor: 'Tarjeta Débito', llave: 3 },
            { valor: 'Número de Cuenta', llave: 4 },
            { valor: 'Monedero Electrónico', llave: 5 }
        ];
        this.codigoPostal = null;
        this.pais = null;
        this.idTrabajador = 0;
        this.route.params.subscribe(function (params) {
            console.log('this.route.params.subscribe', params);
            _this.idTrabajador = Number(params['idTrabajador']);
        });
    }
    EditarTrabajadorComponent.prototype.ngOnInit = function () {
        this.coreContainerComponent.openModal(0);
        this.trabajador = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_trabajador_class__["a" /* Trabajador */]();
        this.itemsParent[9] = [];
        for (var _i = 0, _a = this.lstTipoCuenta; _i < _a.length; _i++) {
            var it = _a[_i];
            var item = {
                nombre: it.valor,
                id: it.llave
            };
            this.itemsParent[9].push(Object.assign({}, item));
        }
        this.fnFillSelects();
    };
    EditarTrabajadorComponent.prototype.fnGetValueDropList = function (value, index) {
        console.log(value, index);
        switch (index) {
            case 0:
                this.trabajador.empresaSalarios.idEmpresa = value.id;
                break;
            case 1:
                this.trabajador.banco.idBanco = value.id;
                break;
            case 2:
                this.trabajador.periodicidadPago.idNominaCatalogo = value.id;
                break;
            case 3:
                this.trabajador.riesgoPuesto.idNominaCatalogo = value.id;
                break;
            case 4:
                this.trabajador.datoFiscal.regimenFiscal.idNominaCatalogo = value.id;
                break;
            case 5:
                this.trabajador.jornada.idNominaCatalogo = value.id;
                break;
            case 6:
                this.trabajador.contrato.idNominaCatalogo = value.id;
                break;
            case 7:
                this.pais = value.id;
                this.fnGetColonies();
                break;
            case 8:
                this.trabajador.codigoPostal.idCodigoPostal = value.id;
                break;
            case 9:
                this.trabajador.tipoCuentaBancaria = value.nombre;
                break;
        }
    };
    EditarTrabajadorComponent.prototype.fnGetColonies = function () {
        var _this = this;
        if (this.codigoPostal !== undefined && this.codigoPostal !== null && this.codigoPostal !== 0) {
            if (this.pais !== undefined && this.pais !== null && this.pais !== 0) {
                this.catalogoService.obtenerColoniasPaisCodPost(this.pais, this.codigoPostal).subscribe(function (lstCol) {
                    console.log('obtenerColoniasPaisCodPost: ', lstCol.current);
                    _this.itemsParent[8] = [];
                    if (lstCol.current !== undefined && lstCol.current !== null && lstCol.current.length > 0) {
                        for (var _i = 0, _a = lstCol.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.claveEntFed + ' - ' + it.colonia,
                                id: it.idCodigoPostal
                            };
                            _this.itemsParent[8].push(Object.assign({}, item));
                        }
                        _this.coreContainerComponent.closeModal(0);
                    }
                    else {
                        _this.coreContainerComponent.closeModal(0);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    EditarTrabajadorComponent.prototype.fnSaveTrabajador = function () {
        var _this = this;
        this.coreContainerComponent.openModal(0);
        this.catalogoService.guardarTrabajadorNomina(this.trabajador).subscribe(function (trab) {
            console.log(trab.current);
            setTimeout(function () {
                _this.coreContainerComponent.closeModal(0);
                _this.fnReturnView();
            }, 1500);
        });
    };
    EditarTrabajadorComponent.prototype.fnReturnView = function () {
        this.router.navigate(['protected/catalogo/empresas/']);
    };
    EditarTrabajadorComponent.prototype.fnFillSelects = function () {
        var _this = this;
        this.catalogoService.obtenerEmpresas().subscribe(function (lstEmp) {
            console.log('obtenerEmpresas: ', lstEmp.current);
            _this.itemsParent[0] = [];
            if (lstEmp.current !== undefined && lstEmp.current !== null && lstEmp.current.length > 0) {
                for (var _i = 0, _a = lstEmp.current; _i < _a.length; _i++) {
                    var it = _a[_i];
                    var item = {
                        nombre: it.valor,
                        id: it.llave
                    };
                    _this.itemsParent[0].push(Object.assign({}, item));
                }
                _this.catalogoService.obtenerBancosTrabajadorNomina().subscribe(function (lstBan) {
                    console.log('obtenerBancosTrabajadorNomina: ', lstBan.current);
                    _this.itemsParent[1] = [];
                    if (lstBan.current !== undefined && lstBan.current !== null && lstBan.current.length > 0) {
                        for (var _i = 0, _a = lstBan.current; _i < _a.length; _i++) {
                            var it = _a[_i];
                            var item = {
                                nombre: it.valor,
                                id: it.llave
                            };
                            _this.itemsParent[1].push(Object.assign({}, item));
                        }
                        _this.catalogoService.obtenerNominaCatalogo('PeriodicidadPago').subscribe(function (lstPerPag) {
                            console.log('obtenerNominaCatalogo - PeriodicidadPago: ', lstPerPag);
                            _this.itemsParent[2] = [];
                            if (lstPerPag.current !== undefined && lstPerPag.current !== null && lstPerPag.current.length > 0) {
                                for (var _i = 0, _a = lstPerPag.current; _i < _a.length; _i++) {
                                    var it = _a[_i];
                                    var item = {
                                        nombre: it.codigoSAT + ' - ' + it.descripcion,
                                        id: it.idNominaCatalogo
                                    };
                                    _this.itemsParent[2].push(Object.assign({}, item));
                                }
                                _this.catalogoService.obtenerNominaCatalogo('RiesgoPuesto').subscribe(function (lstRiesgo) {
                                    console.log('obtenerNominaCatalogo - RiesgoPuesto: ', lstRiesgo);
                                    _this.itemsParent[3] = [];
                                    if (lstRiesgo.current !== undefined && lstRiesgo.current !== null && lstRiesgo.current.length > 0) {
                                        for (var _i = 0, _a = lstRiesgo.current; _i < _a.length; _i++) {
                                            var it = _a[_i];
                                            var item = {
                                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                                id: it.idNominaCatalogo
                                            };
                                            _this.itemsParent[3].push(Object.assign({}, item));
                                        }
                                        _this.catalogoService.obtenerNominaCatalogo('RegimenFiscal').subscribe(function (lstRegFis) {
                                            console.log('obtenerNominaCatalogo - RegimenFiscal: ', lstRegFis);
                                            _this.itemsParent[4] = [];
                                            if (lstRegFis.current !== undefined && lstRegFis.current !== null && lstRegFis.current.length > 0) {
                                                for (var _i = 0, _a = lstRegFis.current; _i < _a.length; _i++) {
                                                    var it = _a[_i];
                                                    var item = {
                                                        nombre: it.codigoSAT + ' - ' + it.descripcion,
                                                        id: it.idNominaCatalogo
                                                    };
                                                    _this.itemsParent[4].push(Object.assign({}, item));
                                                }
                                                _this.catalogoService.obtenerNominaCatalogo('JornadaLaboral').subscribe(function (lstJornada) {
                                                    console.log('obtenerNominaCatalogo - JornadaLaboral: ', lstJornada);
                                                    _this.itemsParent[5] = [];
                                                    if (lstJornada.current !== undefined && lstJornada.current !== null && lstJornada.current.length > 0) {
                                                        for (var _i = 0, _a = lstJornada.current; _i < _a.length; _i++) {
                                                            var it = _a[_i];
                                                            var item = {
                                                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                                                id: it.idNominaCatalogo
                                                            };
                                                            _this.itemsParent[5].push(Object.assign({}, item));
                                                        }
                                                        _this.catalogoService.obtenerNominaCatalogo('RegimenContratacion').subscribe(function (lstRegContra) {
                                                            console.log('obtenerNominaCatalogo - RegimenContratacion: ', lstRegContra);
                                                            _this.itemsParent[6] = [];
                                                            if (lstRegContra.current !== undefined && lstRegContra.current !== null && lstRegContra.current.length > 0) {
                                                                for (var _i = 0, _a = lstRegContra.current; _i < _a.length; _i++) {
                                                                    var it = _a[_i];
                                                                    var item = {
                                                                        nombre: it.codigoSAT + ' - ' + it.descripcion,
                                                                        id: it.idNominaCatalogo
                                                                    };
                                                                    _this.itemsParent[6].push(Object.assign({}, item));
                                                                }
                                                                _this.catalogoService.obtenerPaisesCodPost().subscribe(function (lstPaises) {
                                                                    console.log('obtenerPaisesCodPost: ', lstPaises);
                                                                    _this.itemsParent[7] = [];
                                                                    if (lstPaises.current !== undefined && lstPaises.current !== null && lstPaises.current.length > 0) {
                                                                        for (var _i = 0, _a = lstPaises.current; _i < _a.length; _i++) {
                                                                            var it = _a[_i];
                                                                            var item = {
                                                                                nombre: it.valor,
                                                                                id: it.llave
                                                                            };
                                                                            _this.itemsParent[7].push(Object.assign({}, item));
                                                                        }
                                                                        _this.catalogoService.obtenerTrabajadorNominaID(_this.idTrabajador).subscribe(function (trab) {
                                                                            console.log('obtenerTrabajadorNominaID: ' + _this.idTrabajador, trab);
                                                                            if (trab.current !== undefined && trab.current !== null && trab.current.idTrabajador > 0) {
                                                                                setTimeout(function () {
                                                                                    _this.coreContainerComponent.closeModal(0);
                                                                                    _this.trabajador = trab.current;
                                                                                }, 1500);
                                                                            }
                                                                            else {
                                                                                setTimeout(function () {
                                                                                    _this.coreContainerComponent.closeModal(0);
                                                                                    _this.trabajador = trab.current;
                                                                                }, 1500);
                                                                            }
                                                                        }, function (error) {
                                                                            _this.coreContainerComponent.closeModal(0);
                                                                            console.log(error);
                                                                        });
                                                                    }
                                                                    else {
                                                                        _this.coreContainerComponent.closeModal(0);
                                                                    }
                                                                }, function (error) {
                                                                    _this.coreContainerComponent.closeModal(0);
                                                                    console.log(error);
                                                                });
                                                            }
                                                            else {
                                                                _this.coreContainerComponent.closeModal(0);
                                                            }
                                                        }, function (error) {
                                                            _this.coreContainerComponent.closeModal(0);
                                                            console.log(error);
                                                        });
                                                    }
                                                    else {
                                                        _this.coreContainerComponent.closeModal(0);
                                                    }
                                                }, function (error) {
                                                    _this.coreContainerComponent.closeModal(0);
                                                    console.log(error);
                                                });
                                            }
                                            else {
                                                _this.coreContainerComponent.closeModal(0);
                                            }
                                        }, function (error) {
                                            _this.coreContainerComponent.closeModal(0);
                                            console.log(error);
                                        });
                                    }
                                    else {
                                        _this.coreContainerComponent.closeModal(0);
                                    }
                                }, function (error) {
                                    _this.coreContainerComponent.closeModal(0);
                                    console.log(error);
                                });
                            }
                            else {
                                _this.coreContainerComponent.closeModal(0);
                            }
                        }, function (error) {
                            _this.coreContainerComponent.closeModal(0);
                            console.log(error);
                        });
                    }
                    else {
                        _this.coreContainerComponent.closeModal(0);
                    }
                }, function (error) {
                    _this.coreContainerComponent.closeModal(0);
                    console.log(error);
                });
            }
            else {
                _this.coreContainerComponent.closeModal(0);
            }
        }, function (error) {
            _this.coreContainerComponent.closeModal(0);
            console.log(error);
        });
    };
    EditarTrabajadorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pn-editar-trabajador',
            template: __webpack_require__("./src/app/components/catalogo/trabajadores/editar-trabajador/editar-trabajador.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/trabajadores/editar-trabajador/editar-trabajador.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], EditarTrabajadorComponent);
    return EditarTrabajadorComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/trabajadores-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajadoresRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajadores_component__ = __webpack_require__("./src/app/components/catalogo/trabajadores/trabajadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crear_trabajador_crear_trabajador_component__ = __webpack_require__("./src/app/components/catalogo/trabajadores/crear-trabajador/crear-trabajador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_trabajador_editar_trabajador_component__ = __webpack_require__("./src/app/components/catalogo/trabajadores/editar-trabajador/editar-trabajador.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TrabajadoresRoutingModule = /** @class */ (function () {
    function TrabajadoresRoutingModule() {
    }
    TrabajadoresRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_2__trabajadores_component__["a" /* TrabajadoresComponent */],
                    },
                    {
                        path: 'crear/nuevo',
                        component: __WEBPACK_IMPORTED_MODULE_3__crear_trabajador_crear_trabajador_component__["a" /* CrearTrabajadorComponent */]
                    },
                    {
                        path: 'editar/:idTrabajador',
                        component: __WEBPACK_IMPORTED_MODULE_4__editar_trabajador_editar_trabajador_component__["a" /* EditarTrabajadorComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], TrabajadoresRoutingModule);
    return TrabajadoresRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/trabajadores.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"opcion\" [homePath]=\"homePath\"></pn-header-bc>\r\n\r\n<div class=\"trabContainer\">\r\n    <div class=\"trabContainerHeader\">\r\n        <div class=\"trabContainerHeaderTitle\">TRABAJADORES</div>\r\n        <div class=\"trabContainerHeaderSearch\">\r\n            <app-pn-search [searchPlaceholder]=\"searchPlaceholder\" (searchEmitter)=\"fnGetEmitSearch($event)\" ></app-pn-search>\r\n        </div>\r\n        <div class=\"trabContainerHeaderActions\">\r\n            <div class=\"trabContainerHeaderActionsFilter\">\r\n                <pq-drop-list style=\"width:307px;margin-right: 25px;height: 30px;\" [items]=\"itemsParent[0]\" [isSearch]=\"isSearchParent[0]\" [isCategory]=\"isCategoryParent[0]\" [size]=\"sizeParent[0]\" [align]=\"alignParent[0]\" [itemSelect]=\"itemSelectParent[0]\" [widthContent]=\"widthContentParent[0]\" [marginLeftContent]=\"marginLeftContentParent[0]\" [tooltip]=\"tooltipParent[0]\" [tipoDrop]=\"tipoDropParent[0]\" [campoLabel]=\"campoLabelParent[0]\" [heightDrop]=\"heightDropParent[0]\" [colorBorderDrop]=\"colorBorderDropParent[0]\" (valueDropList)=\"fnGetValueDropList($event)\"></pq-drop-list>\r\n            </div>\r\n            <div class=\"trabContainerHeaderActionsBtn\" (click)=\"fnCrearTrabajador()\" >AGREGAR TRABAJADOR</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"lstTrabajadores\">\r\n        <div class=\"lstTrabajadoresHeader\">\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 20px;max-width: 20px;justify-content: center;\">#</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 115px;max-width: 340px;\" >Nombre</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 100px;max-width: 190px;\" >Departamento</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 90px;max-width: 190px;\" >Puesto</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 95px;max-width: 130px;\" >RFC</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 100px;max-width: 150px;\" >Teléfono</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 130px;max-width: 240px;\" >Correo Electrónico</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 120px;max-width: 200px;\" >Fecha de Ingreso</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 115px;max-width: 160px;\" >Tipo de Contrato</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 80px;max-width: 150px;\">Estado</div>\r\n            <div class=\"lstTrabajadoresHeaderCol\" style=\"min-width: 15px;max-width: 15px;\">&nbsp;</div>\r\n        </div>\r\n        <div class=\"lstTrabajadoresItem\" *ngFor=\"let item of lstTrabajadores; let i = index\">\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 20px;max-width: 20px;justify-content: center;\">{{i + 1}}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 115px;max-width: 340px;\" >{{ item.nombre + ' ' + item.apellidoPaterno + ' ' + item.apellidoMaterno }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 100px;max-width: 190px;font-weight: 400;font-size: 16px;color: #008894;\">{{ item.departamento }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 90px;max-width: 190px;\" >{{ item.puesto }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 95px;max-width: 130px;\" >{{ item.datoFiscal.rfc }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 100px;max-width: 150px;\" >{{ item.telefonoFijo }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 130px;max-width: 240px;\" >{{ item.email }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 120px;max-width: 200px;\" >{{ item.fechaInicioRelLaboral }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 115px;max-width: 160px;\" >{{ item.contrato.descripcion }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 80px;max-width: 150px;\" [ngStyle]=\"{'color': (item.activo) ? '#4DA72C' : '#C1272D' }\">{{ (item.activo) ? 'Activo' : 'Finiquitado' }}</div>\r\n            <div class=\"lstTrabajadoresItemCol\" style=\"min-width: 15px;max-width: 15px;\" (click)=\"fnVerTrabajador(item.idTrabajador)\"><img class=\"lstTrabajadoresItemColImg\" src=\"./assets/Images/ir.svg\" alt=\"Ir\"></div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/trabajadores.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:calc(100vh - 130px)}:host pn-header-bc{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:41px}:host .trabContainer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:calc(100vh - 170px);padding:0px 20px}:host .trabContainer>.trabContainerHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:90px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .trabContainer>.trabContainerHeader>.trabContainerHeaderTitle{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:24px;color:#424242;font-family:Novecento;font-weight:700}:host .trabContainer>.trabContainerHeader>.trabContainerHeaderSearch{display:-webkit-box;display:-ms-flexbox;display:flex;min-width:235px;width:430px;padding:0px 10px}:host .trabContainer>.trabContainerHeader>.trabContainerHeaderSearch>app-pn-search{width:100%}:host .trabContainer>.trabContainerHeader>.trabContainerHeaderActions{display:-webkit-box;display:-ms-flexbox;display:flex}:host .trabContainer>.trabContainerHeader>.trabContainerHeaderActions>.trabContainerHeaderActionsFilter{display:-webkit-box;display:-ms-flexbox;display:flex}:host .trabContainer>.trabContainerHeader>.trabContainerHeaderActions>.trabContainerHeaderActionsBtn{display:-webkit-box;display:-ms-flexbox;display:flex;width:293px;height:34px;background:#008894;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:21px;color:#fff;font-weight:700;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host .trabContainer>.trabContainerHeader>.trabContainerHeaderActions>.trabContainerHeaderActionsBtn:hover{opacity:.5}:host .trabContainer>.trabContainerHeader>.trabContainerHeaderActions>.trabContainerHeaderActionsBtn:active{opacity:.75}:host .trabContainer>.lstTrabajadores{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;height:100%}:host .trabContainer>.lstTrabajadores>.lstTrabajadoresHeader{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:15px;color:#424242;font-weight:700;padding-bottom:4px;border-bottom:1px solid #424242;min-height:30px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host .trabContainer>.lstTrabajadores>.lstTrabajadoresHeader>.lstTrabajadoresHeaderCol{display:-webkit-box;display:-ms-flexbox;display:flex;width:calc(100% - 10px);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px 5px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .trabContainer>.lstTrabajadores>.lstTrabajadoresItem{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;color:#424242;font-weight:400;padding-bottom:4px;border-bottom:1px solid #424242;background:#fff;min-height:43px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #eceef0;cursor:pointer;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host .trabContainer>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol{display:-webkit-box;display:-ms-flexbox;display:flex;width:calc(100% - 10px);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px 5px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .trabContainer>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol>img.lstTrabajadoresItemColImg{display:-webkit-box;display:-ms-flexbox;display:flex;width:14px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host .trabContainer>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol>img.lstTrabajadoresItemColImg:hover{opacity:.5}:host .trabContainer>.lstTrabajadores>.lstTrabajadoresItem>.lstTrabajadoresItemCol>img.lstTrabajadoresItemColImg:active{opacity:.75}:host .trabContainer>.lstTrabajadores>.lstTrabajadoresItem:hover{background:#eceef0}"

/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/trabajadores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_catalogo_trabajador_class__ = __webpack_require__("./src/app/class/catalogo/trabajador.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrabajadoresComponent = /** @class */ (function () {
    function TrabajadoresComponent(router, route, coreComponent, catalogoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.coreComponent = coreComponent;
        this.catalogoService = catalogoService;
        this.searchPlaceholder = 'Trabajador, Puesto, RFC';
        this.homePath = '/protected/catalogo/';
        this.idEmpresa = 0;
        this.opcion = [
            {
                label: 'Patrones',
                path: '/protected/catalogo/empresas/',
            }
        ];
        /* Inicio de variables para los SELECTS
        0.- Todos Los Estados, Activos, Finiquitados
        */
        this.cantSelects = 1; // Siempre más uno
        this.itemsParent = new Array(this.cantSelects).fill(null);
        this.isSearchParent = new Array(this.cantSelects).fill(false);
        this.isCategoryParent = new Array(this.cantSelects).fill(false);
        this.sizeParent = new Array(this.cantSelects).fill('');
        this.alignParent = new Array(this.cantSelects).fill('left');
        this.itemSelectParent = new Array(this.cantSelects).fill({ nombre: 'Todos los Estados', id: 0 });
        this.widthContentParent = new Array(this.cantSelects).fill('100%');
        this.marginLeftContentParent = new Array(this.cantSelects).fill('0px');
        this.tooltipParent = new Array(this.cantSelects).fill(false);
        this.tipoDropParent = new Array(this.cantSelects).fill('');
        this.campoLabelParent = new Array(this.cantSelects).fill('');
        this.heightDropParent = new Array(this.cantSelects).fill('35px'); // sumar 5px no sé por qué jajaxD
        this.colorBorderDropParent = new Array(this.cantSelects).fill('#D8D9DD');
        this.lstTrabajadores = [];
        this.lstTrabajadoresAux = [];
        this.lstTrabajadoresActives = [];
        this.lstTrabajadoresFinalized = [];
        this.route.params.subscribe(function (params) {
            _this.idEmpresa = params['id'];
            var item = {
                label: 'Ver Patrón',
                path: '/protected/catalogo/empresas/editar',
                id: _this.idEmpresa
            };
            _this.opcion.push(item);
            item = {
                label: 'Trabajadores',
                path: '/protected/catalogo/trabajadores',
                id: _this.idEmpresa
            };
            _this.opcion.push(item);
        });
    }
    TrabajadoresComponent.prototype.fnGetValueDropList = function (value) {
        console.log(value);
        switch (value.id) {
            case 0:
                this.lstTrabajadores = Object.assign([], this.lstTrabajadoresAux);
                break;
            case 1:
                this.lstTrabajadores = Object.assign([], this.lstTrabajadoresActives);
                break;
            case 2:
                this.lstTrabajadores = Object.assign([], this.lstTrabajadoresFinalized);
                break;
        }
    };
    TrabajadoresComponent.prototype.fnVerTrabajador = function (id) {
        this.router.navigate(['/protected/catalogo/trabajadores/editar', id]);
    };
    TrabajadoresComponent.prototype.fnGetEmitSearch = function ($event) {
        console.log($event);
        var searchArrayAux = [];
        var searchTerm = $event;
        if (searchTerm === '') {
            this.lstTrabajadores = Object.assign([], this.lstTrabajadoresAux);
        }
        else {
            this.lstTrabajadores.forEach(function (trab) {
                if (trab.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                    trab.puesto.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                    trab.datoFiscal.rfc.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(trab);
                }
            });
            this.lstTrabajadores = Object.assign([], searchArrayAux);
        }
    };
    TrabajadoresComponent.prototype.ngOnInit = function () {
        this.coreComponent.openModal(0);
        this.obtenertrabajadors();
    };
    TrabajadoresComponent.prototype.obtenertrabajadors = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this.itemsParent[0] = [];
        this.itemsParent[0] = [{ nombre: 'Todos los Estados', id: 0 }, { nombre: 'Activos', id: 1 }, { nombre: 'Finiquitados', id: 2 }];
        this.catalogoService.obtenerTrabajadoresNominaEmpresaID(this.idEmpresa).subscribe(function (res) {
            setTimeout(function () {
                _this.coreComponent.closeModal(0);
                console.log(res.current);
                if (res.current !== undefined && res.current !== null && res.current.length > 0) {
                    _this.lstTrabajadores = Object.assign([], res.current);
                    _this.lstTrabajadoresAux = Object.assign([], res.current);
                    _this.lstTrabajadoresActives = [];
                    _this.lstTrabajadoresFinalized = [];
                    for (var _i = 0, _a = res.current; _i < _a.length; _i++) {
                        var trab = _a[_i];
                        if (trab.activo) {
                            _this.lstTrabajadoresActives.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_4__class_catalogo_trabajador_class__["a" /* Trabajador */](), trab));
                        }
                        else {
                            _this.lstTrabajadoresFinalized.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_4__class_catalogo_trabajador_class__["a" /* Trabajador */](), trab));
                        }
                    }
                }
            }, 1500);
        }, function (error) {
            setTimeout(function () {
                _this.coreComponent.closeModal(0);
                console.log(error);
            }, 1500);
        });
    };
    TrabajadoresComponent.prototype.fnCrearTrabajador = function () {
        this.router.navigate(['protected/catalogo/trabajadores/crear/nuevo']);
    };
    TrabajadoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pn-trabajadores',
            template: __webpack_require__("./src/app/components/catalogo/trabajadores/trabajadores.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/trabajadores/trabajadores.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__components_core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__["a" /* CatalogoService */]])
    ], TrabajadoresComponent);
    return TrabajadoresComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/trabajadores/trabajadores.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajadoresModule", function() { return TrabajadoresModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trabajadores_routing_module__ = __webpack_require__("./src/app/components/catalogo/trabajadores/trabajadores-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trabajadores_component__ = __webpack_require__("./src/app/components/catalogo/trabajadores/trabajadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__crear_trabajador_crear_trabajador_component__ = __webpack_require__("./src/app/components/catalogo/trabajadores/crear-trabajador/crear-trabajador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editar_trabajador_editar_trabajador_component__ = __webpack_require__("./src/app/components/catalogo/trabajadores/editar-trabajador/editar-trabajador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TrabajadoresModule = /** @class */ (function () {
    function TrabajadoresModule() {
    }
    TrabajadoresModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__trabajadores_routing_module__["a" /* TrabajadoresRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_date_picker_date_picker_module__["a" /* DatePickerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__trabajadores_component__["a" /* TrabajadoresComponent */],
                __WEBPACK_IMPORTED_MODULE_9__crear_trabajador_crear_trabajador_component__["a" /* CrearTrabajadorComponent */],
                __WEBPACK_IMPORTED_MODULE_10__editar_trabajador_editar_trabajador_component__["a" /* EditarTrabajadorComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_catalogo_catalogo_service__["a" /* CatalogoService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__trabajadores_component__["a" /* TrabajadoresComponent */]
            ]
        })
    ], TrabajadoresModule);
    return TrabajadoresModule;
}());



/***/ })

});
//# sourceMappingURL=trabajadores.module.chunk.js.map