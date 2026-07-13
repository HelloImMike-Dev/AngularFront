webpackJsonp(["polizas.module"],{

/***/ "./src/app/class/catalogo/centroCosto.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CentroCosto; });
var CentroCosto = /** @class */ (function () {
    function CentroCosto() {
        this.idCentroCosto = 0;
        this.tipo = '';
        this.descripcion = '';
        this.activo = true;
    }
    return CentroCosto;
}());



/***/ }),

/***/ "./src/app/class/catalogo/cuentaContable.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuentaContable; });
var CuentaContable = /** @class */ (function () {
    function CuentaContable() {
    }
    return CuentaContable;
}());



/***/ }),

/***/ "./src/app/class/catalogo/poliza.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Poliza; });
var Poliza = /** @class */ (function () {
    function Poliza() {
        this.idPoliza = 0;
        this.tipo = 0;
        this.folio = 'N/D';
        this.referencia = '';
        this.descripcion = '';
        this.fecha = null;
        this.empresa = null;
        this.cliente = null;
        this.proveedor = null;
        this.monto = 0;
        this.iva = 0;
        this.total = 0;
        this.aplicada = false;
        this.activa = true;
        this.lstPPoliza = new Array();
        this.fechaDate = new Date();
    }
    return Poliza;
}());

// Ingreso = 1, Egreso = 2, Diario = 3


/***/ }),

/***/ "./src/app/class/catalogo/ppoliza.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PPoliza; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cuentaContable_class__ = __webpack_require__("./src/app/class/catalogo/cuentaContable.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__centroCosto_class__ = __webpack_require__("./src/app/class/catalogo/centroCosto.class.ts");


var PPoliza = /** @class */ (function () {
    function PPoliza() {
        this.idPPoliza = 0;
        this.poliza = null;
        this.cuentaContable = new __WEBPACK_IMPORTED_MODULE_0__cuentaContable_class__["a" /* CuentaContable */]();
        this.centroCosto = new __WEBPACK_IMPORTED_MODULE_1__centroCosto_class__["a" /* CentroCosto */]();
        this.descripcion = null;
        this.monto = 0;
        this.montoIVA = 0;
        this.tipoIVA = false;
        this.tipo = false;
    }
    return PPoliza;
}());

// 0% = false, 16% = true;
// Cargo = false, Abono = true;


/***/ }),

/***/ "./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"containerHeader\">NUEVA PÓLIZA</div>\r\n    <div class=\"containerBody\">\r\n        <div class=\"containerBodyTitle\">DATOS DE PÓLIZA</div>\r\n        <div class=\"containerBodyForm\">\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\r\n                <div class=\"containerBodyFormColLabel\">Tipo de Póliza</div>\r\n                <div class=\"containerBodyFormColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[0]\" [lstItems]=\"lstItems[0]\" (outPutItem)=\"fnOutPutItem($event, 0)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\r\n                <div class=\"containerBodyFormColLabel\">Referencia</div>\r\n                <div class=\"containerBodyFormColInputs\">\r\n                    <input [(ngModel)]=\"poliza.referencia\" class=\"containerBodyFormColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPoliza()\">\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 15%;\">\r\n                <div class=\"containerBodyFormColLabel\">Descripción</div>\r\n                <div class=\"containerBodyFormColInputs\">\r\n                    <input [(ngModel)]=\"poliza.descripcion\" class=\"containerBodyFormColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPoliza()\">\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 170px;\">\r\n                <div class=\"containerBodyFormColLabel\">Fecha</div>\r\n                <div class=\"containerBodyFormColDate\">\r\n                    <pq-date-picker [borderInputColor]=\"'1px solid #D8D9DD'\" [fontColor]=\"'#424242'\" [backGroundColor]=\"white\" [disabled]=\"'false'\" [sizeInput]=\"'16px'\" [heightInput]=\"'30px'\" [(date)]=\"poliza.fecha\" dateFormat=\"YYYYMMDD\" (fecha)=\"fnGetFechaImpl($event)\"></pq-date-picker>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 10%;\">\r\n                <div class=\"containerBodyFormColLabel\">Empresas del Grupo</div>\r\n                <div class=\"containerBodyFormColSelect\">\r\n                    <app-pf-selector [colorSelectedSimple]=\"'#008894'\" [inputHeight]=\"'30px'\" [viewSearch]=\"true\" [defaultItem]=\"defaultItem[1]\" [lstItems]=\"lstItems[1]\" (outPutItem)=\"fnOutPutItem($event, 1)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 10%;\">\r\n                <div class=\"containerBodyFormColLabel\">&nbsp;</div>\r\n                <div class=\"containerBodyFormColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[7]\" [lstItems]=\"lstItems[7]\" (outPutItem)=\"fnOutPutItem($event, 7)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 15%;max-width: 15%;\">\r\n                <div class=\"containerBodyFormColLabel\">{{ labelSelect2 }}</div>\r\n                <div class=\"containerBodyFormColSelect\">\r\n                    <app-pf-selector [isDisabled]=\"(lstItems[2] !== undefined && lstItems[2] !== null && lstItems[2].length > 0) ? false : true\" [isOpaque]=\"(lstItems[2] !== undefined && lstItems[2] !== null && lstItems[2].length > 0) ? false : true\"  [inputHeight]=\"'30px'\" [viewSearch]=\"true\" [defaultItem]=\"defaultItem[2]\" [lstItems]=\"lstItems[2]\" (outPutItem)=\"fnOutPutItem($event, 2)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\r\n                <div class=\"containerBodyFormColLabel\">Folio</div>\r\n                <div class=\"containerBodyFormColLabelValue\">{{ poliza.folio }}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerBodySubtitle\">AGREGAR CUENTA CONTABLE</div>\r\n        <div class=\"containerBodyFormColor\">\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 20%;max-width: 20%;\">\r\n                <div class=\"containerBodyFormColorColLabel\">Cuenta</div>\r\n                <div class=\"containerBodyFormColorColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[3]\" [isSimpleValue]=\"false\" [placeholder]=\"'Folio, Cuenta'\" [lstItems]=\"lstItems[3]\" [viewSearch]=\"true\" (outPutItem)=\"fnOutPutItem($event, 3)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 20%\">\r\n                <div class=\"containerBodyFormColorColLabel\">Descripción</div>\r\n                <div class=\"containerBodyFormColorColInputs\">\r\n                    <input [(ngModel)]=\"itemDescripcion\" class=\"containerBodyFormColorColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPPoliza()\">\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%\">\r\n                <div class=\"containerBodyFormColorColLabel\">Monto</div>\r\n                <div class=\"containerBodyFormColorColInputs\">\r\n                    <input [(ngModel)]=\"itemMonto\" class=\"containerBodyFormColorColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPPoliza()\" (focus)=\"fnFocusMonto()\" (blur)=\"fnBlurMonto()\" [ngStyle]=\"{'text-align': 'right', 'color': '#008894'}\">\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%;max-width: 10%;\">\r\n                <div class=\"containerBodyFormColorColLabel\">IVA</div>\r\n                <div class=\"containerBodyFormColorColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[4]\" [lstItems]=\"lstItems[4]\" (outPutItem)=\"fnOutPutItem($event, 4)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%;max-width: 10%;\">\r\n                <div class=\"containerBodyFormColorColLabel\">Tipo</div>\r\n                <div class=\"containerBodyFormColorColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[5]\" [lstItems]=\"lstItems[5]\" (outPutItem)=\"fnOutPutItem($event, 5)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 15%;max-width: 15%;\">\r\n                <div class=\"containerBodyFormColorColLabel\">Centro de Costos</div>\r\n                <div class=\"containerBodyFormColorColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[6]\" [lstItems]=\"lstItems[6]\" (outPutItem)=\"fnOutPutItem($event, 6)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 5%\">\r\n                <div class=\"containerBodyFormColorColLabel\">&nbsp;</div>\r\n                <div [ngClass]=\"classBtnAdd\" (click)=\"fnAddPPoliza()\">AGREGAR</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerBodyTable\">\r\n            <div class=\"containerBodyTableHeader\">\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\">#</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 20%;text-align: left;\">Cuenta</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 20%;text-align: left;\">Descripción</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;text-align: left;\">Tipo</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 15%;text-align: left;\">Centro de Costos</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">Monto MXN</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">IVA</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">Total</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\">&nbsp;</div>\r\n            </div>\r\n            <div class=\"containerBodyTableBody\">\r\n                <div class=\"containerBodyTableBodyEmpty\" *ngIf=\"poliza.lstPPoliza.length === 0\">NO HAS GENERADO CUENTAS CONTABLES</div>\r\n                <div class=\"containerBodyTableBodyLst\" *ngIf=\"poliza.lstPPoliza.length > 0\">\r\n                    <div class=\"containerBodyTableBodyLstRow\" *ngFor=\"let item of poliza.lstPPoliza; let i = index\">\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;\">{{ i + 1 }}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 20%;text-align: left;\"><span class=\"containerBodyTableBodyLstRowColSpan\">{{ item.cuentaContable.descripcionAux + ' ' + item.cuentaContable.descripcionAuxSep + ' '}}</span><span class=\"containerBodyTableBodyLstRowColSpan\">{{ item.cuentaContable.descripcion }}</span></div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 20%;text-align: left;\">{{item.descripcion}}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;text-align: left;\">{{(item.tipo) ? 'Abono' : 'Cargo'}}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 15%;text-align: left;\">{{ item.centroCosto.descripcion }}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ item.monto | acFormatMoney }}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ (item.tipoIVA) ? '16%' : '0%'}}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ (item.monto + item.montoIVA) | acFormatMoney }}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;\" (click)=\"fnDeleteItem(i)\"><img src=\"./assets/Images/polizasEliminar.svg\" alt=\"\" class=\"containerBodyTableBodyLstRowColImg\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyTableFooter\">\r\n                {{ (poliza.lstPPoliza.length === 1) ? '#1 Cuenta Contable' : '#' + poliza.lstPPoliza.length + ' Cuentas Contables' }}\r\n            </div>\r\n        </div>\r\n        <div class=\"containerBodySummary\">\r\n            <div class=\"containerBodySummaryTitle\">\r\n                <span class=\"containerBodySummaryTitleSpan\">Totales</span>\r\n            </div>\r\n            <div class=\"containerBodySummaryTitle\">\r\n                <div class=\"containerBodySummarySubtitle\">Subtotal</div>\r\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 23px;color: #424242;font-weight: 400;\">{{ poliza.monto | acFormatMoney }}</div>\r\n            </div>\r\n            <div class=\"containerBodySummaryTitle\">\r\n                <div class=\"containerBodySummarySubtitle\">IVA</div>\r\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 23px;color: #008894;font-weight: 400;\">{{ poliza.iva | acFormatMoney }}</div>\r\n            </div>\r\n            <div class=\"containerBodySummaryTitle\">\r\n                <div class=\"containerBodySummarySubtitle\">Total</div>\r\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 27px;color: #4BA92B;font-weight: 700;\">{{ poliza.total | acFormatMoney }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerFooter\">\r\n        <div class=\"containerFooterBtnAcepted\" (click)=\"fnCancel()\">Cancelar</div>\r\n        <div [ngClass]=\"classBtnAcept\" (click)=\"fnSave()\">Guardar</div>\r\n    </div>\r\n</div>\r\n\r\n<div [ngClass]=\"modalPromt\">\r\n    <div class=\"modalPromtContainer\">\r\n        <div class=\"modalPromtContainerHeader\">PROQUIFA NET</div>\r\n        <div class=\"modalPromtContainerBody\">\r\n            <img src=\"./assets/Images/polizasAlerta.svg\" alt=\"Alerta!\" class=\"modalPromtContainerBodyImg\">\r\n            <span class=\"modalPromtContainerBodySpan\">¿Estás seguro que deseas salir sin guardar los cambios?</span>\r\n        </div>\r\n        <div class=\"modalPromtContainerFooter\">\r\n            <div class=\"modalPromtContainerFooterBtn\" (click)=\"fnClosePrompt()\">CANCELAR</div>\r\n            <div class=\"modalPromtContainerFooterBtn\" (click)=\"fnViewReturn()\">ACEPTAR</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div [ngClass]=\"modalSuccess\">\r\n    <div class=\"modalPromtContainer\">\r\n        <div class=\"modalPromtContainerHeader\">PROQUIFA NET</div>\r\n        <div class=\"modalPromtContainerBody\">\r\n            <img src=\"./assets/Images/polizasExito.svg\" alt=\"Alerta!\" class=\"modalPromtContainerBodyImg\">\r\n            <span class=\"modalPromtContainerBodySpan\"><span style=\"font-weight: 700;font-size: 29px;color: #008894;\" >¡Has guardado exitosamente </span><br /> una nueva póliza!</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host>.container{overflow:scroll;height:calc(100vh - 130px)}:host>.container>.containerHeader{font-family:Novecento;font-size:25px;color:#424242;font-weight:400;border-bottom:2px solid #424242;height:58px;line-height:58px;vertical-align:middle;text-indent:20px}:host>.container>.containerBody{padding:20px;min-height:calc(100vh - 300px);overflow:scroll}:host>.container>.containerBody>.containerBodyTitle{font-family:Novecento;font-size:20px;color:#424242;font-weight:700;border-bottom:1px solid #424242;height:39px;line-height:39px;vertical-align:middle}:host>.container>.containerBody>.containerBodyForm{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:80px;margin:20px 0px}:host>.container>.containerBody>.containerBodyForm>.containerBodyFormCol{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.container>.containerBody>.containerBodyForm>.containerBodyFormCol>.containerBodyFormColInputs>input.containerBodyFormColInput{width:100%;background:#fff;border:1px solid #d8d9dd;height:30px;font-size:16px;color:#424242;font-weight:400;padding:0 5px;outline:none}:host>.container>.containerBody>.containerBodyForm>.containerBodyFormCol>.containerBodyFormColLabelValue{font-size:23px;color:#008894;font-weight:700}:host>.container>.containerBody>.containerBodyForm>.containerBodyFormCol>.containerBodyFormColLabel{width:100%;font-size:16px;height:16px;color:#424242;font-weight:400;padding-bottom:5px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host>.container>.containerBody>.containerBodyForm>.containerBodyFormCol>.containerBodyFormColSelect{width:100%;position:relative}:host>.container>.containerBody>.containerBodySubtitle{font-size:20px;color:#424242;font-weight:700;font-family:Novecento;margin:30px 0px 10px 0px}:host>.container>.containerBody>.containerBodyFormColor{background:rgba(0,136,148,.07);height:113px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;padding:0px 15px;margin:15px 0px}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px 10px}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColInputs>.containerBodyFormColorColInput{width:100%;background:#fff;border:1px solid #d8d9dd;height:30px;font-size:16px;color:#424242;font-weight:400;padding:0 5px;outline:none}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColLabel{width:100%;font-size:16px;color:#424242;font-weight:400;padding-bottom:5px}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColSelect{width:100%;position:relative}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColBtnDisabled{width:170px;height:30px;background:#c2c3c9;font-family:Novecento;font-size:21px;color:#fff;font-weight:700;line-height:30px;vertical-align:middle;text-align:center;pointer-events:none;padding-bottom:3px}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColBtnEnabled{width:170px;height:30px;background:#4ba92b;font-family:Novecento;font-size:21px;color:#fff;font-weight:700;line-height:30px;vertical-align:middle;text-align:center;cursor:pointer;-webkit-transition:all .2 ease-in-out;transition:all .2 ease-in-out;padding-bottom:3px}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColBtnEnabled:hover{opacity:.5}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColBtnEnabled:active{opacity:.75}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;border-bottom:1px solid #424242;padding-bottom:5px;height:25px}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableHeader>.containerBodyTableHeaderCol{font-weight:700;font-size:15px;color:#424242;text-align:center}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyEmpty{font-family:Novecento;font-size:36px;color:#d8d9dd;font-weight:700;text-align:center;min-height:calc(100vh - 876px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:15px 0px}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst{min-height:calc(100vh - 876px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;border-bottom:1px solid #eceef0;height:49px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow>.containerBodyTableBodyLstRowCol{font-size:16px;color:#424242;font-weight:400;text-align:center}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow>.containerBodyTableBodyLstRowCol>.containerBodyTableBodyLstRowColImg{width:15px;height:15px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow>.containerBodyTableBodyLstRowCol>.containerBodyTableBodyLstRowColImg:hover{opacity:.5}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow>.containerBodyTableBodyLstRowCol>.containerBodyTableBodyLstRowColImg:active{opacity:.75}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow>.containerBodyTableBodyLstRowCol>.containerBodyTableBodyLstRowColSpan:nth-of-type(1){font-size:16px;color:#008894;font-weight:400}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow:hover{background:#eceef0}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableFooter{font-size:14px;color:#424242;font-weight:400;text-align:center;height:45px;line-height:45px;vertical-align:middle;border-top:1px solid #424242}:host>.container>.containerBody>.containerBodySummary{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}:host>.container>.containerBody>.containerBodySummary>.containerBodySummaryTitle{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:25%;padding:5px 0px;max-width:400px}:host>.container>.containerBody>.containerBodySummary>.containerBodySummaryTitle>.containerBodySummaryTitleSpan{width:100%;font-family:Novecento;font-weight:700;font-size:23px;color:#424242;text-align:right}:host>.container>.containerBody>.containerBodySummary>.containerBodySummaryTitle>.containerBodySummarySubtitle{width:100%;font-size:23px;color:#424242;font-weight:400}:host>.container>.containerBody>.containerBodySummary>.containerBodySummaryTitle>.containerBodySummaryAmount{width:100%;text-align:right}:host>.container>.containerFooter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:68px;margin:0px 20px;border-top:2px solid #424242}:host>.container>.containerFooter>.containerFooterBtnDisabled{width:170px;height:30px;background:#c2c3c9;font-family:Novecento;font-size:21px;color:#fff;font-weight:700;line-height:30px;vertical-align:middle;text-align:center;pointer-events:none;padding-bottom:3px}:host>.container>.containerFooter>.containerFooterBtnAcepted{width:170px;height:30px;background:#008894;font-family:Novecento;font-size:21px;color:#fff;font-weight:700;line-height:30px;vertical-align:middle;text-align:center;cursor:pointer;-webkit-transition:all .2 ease-in-out;transition:all .2 ease-in-out;padding-bottom:3px}:host>.container>.containerFooter>.containerFooterBtnAcepted:hover{opacity:.5}:host>.container>.containerFooter>.containerFooterBtnAcepted:active{opacity:.75}:host>.modalPromt{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background:rgba(255,255,255,.9);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.modalPromt>.modalPromtContainer{margin:auto;background-color:#fff;position:absolute;outline:0;width:580px;height:320px;background:#fff;border:1px solid #008894;border-radius:22px;top:0;bottom:0;left:0;right:0;padding:20px;overflow:hidden}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerHeader{background:#008894;margin:-20px;height:55px;font-family:Novecento;font-size:26px;color:#fff;font-weight:700;text-align:center;line-height:55px}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerBody{height:245px;margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerBody>.modalPromtContainerBodySpan{padding:15px 100px 0px 100px;text-align:center;font-size:29px;color:#001615}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerFooter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerFooter>.modalPromtContainerFooterBtn{background:#008894;width:170px;height:30px;line-height:30px;text-align:center;font-family:Novecento;font-size:21px;color:#fff;font-weight:700;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerFooter>.modalPromtContainerFooterBtn:hover{opacity:.5}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerFooter>.modalPromtContainerFooterBtn:active{opacity:.75}:host>.openModal{display:block}"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarPolizaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_poliza_class__ = __webpack_require__("./src/app/class/catalogo/poliza.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_option_class__ = __webpack_require__("./src/app/class/option.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__ = __webpack_require__("./src/app/class/catalogo/ppoliza.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_accounting__ = __webpack_require__("./node_modules/accounting/accounting.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_accounting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_accounting__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AgregarPolizaComponent = /** @class */ (function () {
    function AgregarPolizaComponent(router, serviceCatalogo, coreContainer) {
        this.router = router;
        this.serviceCatalogo = serviceCatalogo;
        this.coreContainer = coreContainer;
        /*
    
        Ingreso =   Emite: Grupo Proquifa, Recibe: Clientes;
        Egreso  =   Emite: Proveedores, Recibo Grupo Proquifa
        Diario  =   Emite: Grupo Proquifa, Recibe, Cliente/Proveedor/Ninguno
    
        */
        this.poliza = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_poliza_class__["a" /* Poliza */]();
        this.polizaAux = null;
        this.isPolizaValid = new Array(6).fill(false);
        this.lstCuentaCont = [];
        this.classBtnAcept = 'containerFooterBtnDisabled';
        this.classBtnAdd = 'containerBodyFormColorColBtnDisabled';
        this.itemDescripcion = '';
        this.itemMonto = '';
        this.cantSelects = 8;
        this.lstItems = new Array(this.cantSelects).fill(null);
        this.defaultItem = new Array(this.cantSelects).fill({ id: 0, texto: 'Seleccionar' });
        this.lstEmpresas = new Array();
        this.lstProveedores = new Array();
        this.lstClientes = new Array();
        this.ppoliza = new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */]();
        this.isPPolizaValid = new Array(6).fill(false);
        this.lstTipo = [
            { id: 1, texto: 'Ingreso' },
            { id: 2, texto: 'Engreso' },
            { id: 3, texto: 'Diario' }
        ];
        this.lstTipoPP = [
            { id: 0, texto: 'Cargo' },
            { id: 1, texto: 'Abono' }
        ];
        this.lstIVA = [
            { id: 0, texto: '0%' },
            { id: 1, texto: '16%' }
        ];
        this.lstNCliProv = [
            { id: 1, texto: 'Ninguno' },
            { id: 2, texto: 'Clientes' },
            { id: 3, texto: 'Proveedores' }
        ];
        this.labelSelect2 = null;
        this.isDiff = true;
        this.modalPromt = 'modalPromt';
        this.modalSuccess = 'modalPromt';
        /*
    
        Prefijo
        Tipo
        Año
        XXXXX
    
        */
        this.folio = new Array(4).fill('');
    }
    AgregarPolizaComponent.prototype.ngOnInit = function () {
        this.coreContainer.openModal(2);
        this.folio[2] = this.poliza.fechaDate.getFullYear().toString();
        this.lstItems[0] = this.lstTipo;
        this.lstItems[4] = this.lstIVA;
        this.lstItems[5] = this.lstTipoPP;
        this.lstItems[7] = this.lstNCliProv;
        this.fnGetInfo(0);
        this.polizaAux = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_poliza_class__["a" /* Poliza */](), this.poliza);
    };
    AgregarPolizaComponent.prototype.fnGetFolio = function (lstFolios) {
        console.log('fnGetFolio', lstFolios);
        if (lstFolios !== undefined && lstFolios !== null && lstFolios.length > 0) {
            for (var _i = 0, lstFolios_1 = lstFolios; _i < lstFolios_1.length; _i++) {
                var item = lstFolios_1[_i];
                if (item.nombre === this.folio[1]) {
                    var nFolio = Object.assign(item.valor3 + 1);
                    if (nFolio < 10) {
                        this.folio[3] = '0000' + nFolio;
                    }
                    if (nFolio > 9 && nFolio < 100) {
                        this.folio[3] = '000' + nFolio;
                    }
                    if (nFolio > 99 && nFolio < 1000) {
                        this.folio[3] = '00' + nFolio;
                    }
                    if (nFolio > 9999 && nFolio < 10000) {
                        this.folio[3] = '0' + nFolio;
                    }
                    if (nFolio > 99999) {
                        this.folio[3] = nFolio;
                    }
                }
                break;
            }
            this.poliza.folio = this.folio[0] + '-' + this.folio[1] + '-' + this.folio[2] + '-' + this.folio[3];
        }
        else {
            this.poliza.folio = 'N/D';
        }
    };
    AgregarPolizaComponent.prototype.fnCancel = function () {
        if (this.isDiff) {
            this.fnOpenPrompt();
        }
        else {
            this.fnViewReturn();
        }
    };
    AgregarPolizaComponent.prototype.fnOpenPrompt = function () {
        this.modalPromt = 'modalPromt openModal';
    };
    AgregarPolizaComponent.prototype.fnClosePrompt = function () {
        this.modalPromt = 'modalPromt';
    };
    AgregarPolizaComponent.prototype.ngDoCheck = function () {
        if (JSON.stringify(this.poliza) !== JSON.stringify(this.polizaAux)) {
            this.isDiff = true;
        }
        else {
            this.isDiff = false;
        }
    };
    AgregarPolizaComponent.prototype.fnUpdateAmounts = function () {
        this.poliza.monto = 0;
        this.poliza.iva = 0;
        this.poliza.total = 0;
        for (var _i = 0, _a = this.poliza.lstPPoliza; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.tipo) {
                this.poliza.monto += item.monto;
                this.poliza.iva += item.montoIVA;
            }
            else {
                this.poliza.monto -= item.monto;
                this.poliza.iva -= item.montoIVA;
            }
        }
        this.poliza.total = this.poliza.monto + this.poliza.iva;
        this.fnValidPoliza();
    };
    AgregarPolizaComponent.prototype.fnDeleteItem = function (i) {
        this.poliza.lstPPoliza.splice(i, 1);
        this.fnUpdateAmounts();
    };
    AgregarPolizaComponent.prototype.fnValidPoliza = function () {
        console.log('fnValidPoliza');
        if (this.poliza.referencia !== '' && this.poliza.descripcion !== '' && this.poliza.fecha !== null) {
            this.isPolizaValid[1] = true;
            this.isPolizaValid[2] = true;
            this.isPolizaValid[3] = true;
        }
        else {
            this.isPolizaValid[1] = false;
            this.isPolizaValid[2] = false;
            this.isPolizaValid[3] = false;
        }
        var x = 0;
        for (var _i = 0, _a = this.isPolizaValid; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                x++;
            }
            else {
                break;
            }
        }
        console.log('x ==>', x);
        if (x === 6) {
            this.poliza.folio = this.folio[0] + '-' + this.folio[1] + '-' + this.folio[2] + '-' + this.folio[3];
            console.log('lstPPoliza ==>', this.poliza.lstPPoliza);
            console.log('total ==>', this.poliza.total);
            this.classBtnAcept = (this.poliza.lstPPoliza !== undefined && this.poliza.lstPPoliza !== null && this.poliza.lstPPoliza.length > 0 && this.poliza.total === 0) ? 'containerFooterBtnAcepted' : 'containerFooterBtnDisabled';
        }
        else {
            this.classBtnAcept = 'containerFooterBtnDisabled';
        }
    };
    AgregarPolizaComponent.prototype.fnValidPPoliza = function () {
        this.isPPolizaValid[0] = (this.itemDescripcion !== '') ? true : false;
        this.isPPolizaValid[1] = (__WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto) > 0) ? true : false;
        var x = 0;
        for (var _i = 0, _a = this.isPPolizaValid; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                x++;
            }
            else {
                break;
            }
        }
        this.classBtnAdd = (x === 6) ? 'containerBodyFormColorColBtnEnabled' : 'containerBodyFormColorColBtnDisabled';
        this.fnValidPoliza();
    };
    AgregarPolizaComponent.prototype.fnBlurMonto = function () {
        this.itemMonto = __WEBPACK_IMPORTED_MODULE_7_accounting__["formatMoney"](this.itemMonto);
    };
    AgregarPolizaComponent.prototype.fnFocusMonto = function () {
        if (this.itemMonto !== '') {
            this.itemMonto = __WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto);
        }
    };
    AgregarPolizaComponent.prototype.fnAddPPoliza = function () {
        if (this.poliza.lstPPoliza !== undefined && this.poliza.lstPPoliza !== null) {
            this.ppoliza.monto = __WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto);
            this.ppoliza.montoIVA = (this.ppoliza.tipoIVA) ? this.ppoliza.monto * 0.16 : 0;
            this.ppoliza.descripcion = this.itemDescripcion;
            this.poliza.lstPPoliza.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */](), this.ppoliza));
            this.ppoliza = new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */]();
            this.itemDescripcion = '';
            this.itemMonto = '';
            this.isPPolizaValid.fill(false);
            var lstAux = Object.assign([], [this.lstItems[3], this.lstItems[4], this.lstItems[5], this.lstItems[6]]);
            this.lstItems[3] = null;
            this.lstItems[4] = null;
            this.lstItems[5] = null;
            this.lstItems[6] = null;
            this.lstItems[3] = Object.assign([], lstAux[0]);
            this.lstItems[4] = Object.assign([], lstAux[1]);
            this.lstItems[5] = Object.assign([], lstAux[2]);
            this.lstItems[6] = Object.assign([], lstAux[3]);
            this.classBtnAdd = 'containerBodyFormColorColBtnDisabled';
        }
        else {
            this.poliza.lstPPoliza = [];
            this.fnAddPPoliza();
        }
        this.fnUpdateAmounts();
    };
    AgregarPolizaComponent.prototype.fnGetInfo = function (opc) {
        var _this = this;
        switch (opc) {
            case 0:
                this.serviceCatalogo.obtenerEmpresasContabilidad().subscribe(function (resp) {
                    console.log('obtenerEmpresasContabilidad', resp);
                    _this.lstEmpresas = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (item.activo) {
                                var opt = {
                                    id: item.llave,
                                    texto: item.valor,
                                    texto1: item.valor,
                                    aux: item
                                };
                                _this.lstEmpresas.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                            }
                        }
                    }
                    _this.lstItems[1] = Object.assign([], _this.lstEmpresas);
                    _this.fnGetInfo(1);
                }, function (error) {
                    _this.fnGetInfo(1);
                    console.log('Error obtenerEmpresas', error);
                });
                break;
            case 1:
                this.serviceCatalogo.obtenerProveedoresCuentasContables('').subscribe(function (resp) {
                    console.log('obtenerProveedoresCuentasContables', resp);
                    _this.lstProveedores = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.llave,
                                texto: item.nombre
                            };
                            _this.lstProveedores.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    _this.fnGetInfo(2);
                }, function (error) {
                    _this.fnGetInfo(2);
                    console.log('Error obtenerProveedoresCuentasContables', error);
                });
                break;
            case 2:
                this.serviceCatalogo.obtenerClientesCuentasContables('').subscribe(function (resp) {
                    console.log('obtenerClientesCuentasContables', resp);
                    _this.lstClientes = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.llave,
                                texto: item.nombre
                            };
                            _this.lstClientes.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    _this.fnGetInfo(4);
                }, function (error) {
                    _this.fnGetInfo(4);
                    console.log('Error obtenerClientesCuentasContables', error);
                });
                break;
            case 3:
                this.serviceCatalogo.obtenerCuentasContablesEmpresa(this.poliza.empresa.idEmpresa).subscribe(function (resp) {
                    console.log('obtenerCuentasContables', resp);
                    _this.lstItems[3] = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        var lstAux1 = [];
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var nivel = null;
                            var nivel2 = null;
                            var nivel3 = null;
                            switch (item.nivel) {
                                case 1:
                                    nivel = item.nivel1 + '';
                                    break;
                                case 2:
                                    nivel2 = null;
                                    if (item.nivel2 < 10) {
                                        nivel2 = '00' + item.nivel2;
                                    }
                                    else if (item.nivel2 > 9 && item.nivel2 < 100) {
                                        nivel2 = '0' + item.nivel2;
                                    }
                                    else {
                                        nivel2 = item.nivel2;
                                    }
                                    nivel = item.nivel1 + '.' + nivel2;
                                    break;
                                case 3:
                                    nivel2 = null;
                                    if (item.nivel2 < 10) {
                                        nivel2 = '00' + item.nivel2;
                                    }
                                    else if (item.nivel2 > 9 && item.nivel2 < 100) {
                                        nivel2 = '0' + item.nivel2;
                                    }
                                    else {
                                        nivel2 = item.nivel2;
                                    }
                                    nivel3 = null;
                                    if (item.nivel3 < 10) {
                                        nivel3 = '00' + item.nivel3;
                                    }
                                    else if (item.nivel3 > 9 && item.nivel3 < 100) {
                                        nivel3 = '0' + item.nivel3;
                                    }
                                    else {
                                        nivel3 = item.nivel3;
                                    }
                                    nivel = item.nivel1 + '.' + nivel2 + '.' + nivel3;
                                    break;
                            }
                            var opt = {
                                id: item.idCuentaContable,
                                texto: nivel,
                                texto1: item.descripcion,
                                separador: '\u00B7',
                                aux: (item.nivel === 1) ? true : false
                            };
                            lstAux1.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                        _this.lstItems[3] = Object.assign(new Array(), lstAux1);
                    }
                }, function (error) {
                    console.log('Error obtenerCuentasContables', error);
                });
                break;
            case 4:
                this.serviceCatalogo.obtenerLstCentroCostos().subscribe(function (resp) {
                    console.log('obtenerLstCentroCostos', resp);
                    _this.lstItems[6] = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.idCentroCosto,
                                texto: item.descripcion
                            };
                            _this.lstItems[6].push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    setTimeout(function () {
                        _this.coreContainer.closeModal(2);
                    }, 1500);
                }, function (error) {
                    setTimeout(function () {
                        _this.coreContainer.closeModal(2);
                    }, 1500);
                    console.log('Error obtenerLstCentroCostos', error);
                });
                break;
        }
    };
    AgregarPolizaComponent.prototype.fnGetFechaImpl = function ($event) {
        this.fnValidPoliza();
    };
    AgregarPolizaComponent.prototype.fnOutPutItem = function ($event, opc) {
        console.log('fnOutPutItem', $event, opc);
        switch (opc) {
            case 0:
                this.poliza.proveedor = null;
                this.poliza.cliente = null;
                this.poliza.empresa = null;
                this.poliza.folio = 'N/D';
                this.poliza.tipo = $event.id;
                this.defaultItem[1] = { id: 0, texto: 'Seleccionar' };
                this.defaultItem[2] = { id: 0, texto: 'Seleccionar' };
                this.lstItems[2] = null;
                this.defaultItem[7] = { id: 0, texto: 'Seleccionar' };
                this.folio[1] = ($event.id === 1) ? 'I' : ($event.id === 2) ? 'E' : 'D';
                this.isPolizaValid[0] = true;
                this.isPolizaValid[4] = false;
                this.isPolizaValid[5] = false;
                this.fnValidPoliza();
                break;
            case 1:
                this.isPolizaValid[4] = ($event.texto !== 'Seleccionar') ? true : false;
                if ($event.id > 0) {
                    this.poliza.empresa = {
                        idEmpresa: $event.id
                    };
                    this.folio[0] = $event.aux.nombre;
                    this.fnGetFolio($event.aux.lstFoliosPoliza);
                    this.fnGetInfo(3);
                }
                this.fnValidPoliza();
                break;
            case 2:
                this.isPolizaValid[5] = ($event.texto !== 'Seleccionar') ? true : false;
                if ($event.id > 0) {
                    switch (this.tipoObjeto.id) {
                        case 1:
                            this.poliza.proveedor = null;
                            this.poliza.cliente = null;
                            break;
                        case 2:
                            this.poliza.cliente = {
                                idCliente: $event.id
                            };
                            break;
                        case 3:
                            this.poliza.proveedor = {
                                idProveedor: $event.id
                            };
                            break;
                    }
                    this.fnValidPoliza();
                }
                break;
            case 3:
                this.ppoliza.cuentaContable.idCuentaContable = $event.id;
                this.ppoliza.cuentaContable.descripcionAux = $event.texto;
                this.ppoliza.cuentaContable.descripcion = $event.texto1;
                this.ppoliza.cuentaContable.descripcionAuxSep = $event.separador;
                this.isPPolizaValid[2] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 4:
                this.ppoliza.tipoIVA = ($event.id === 0) ? false : true;
                this.isPPolizaValid[3] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 5:
                this.ppoliza.tipo = ($event.id === 0) ? false : true;
                this.isPPolizaValid[4] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 6:
                this.ppoliza.centroCosto.idCentroCosto = $event.id;
                this.ppoliza.centroCosto.descripcion = $event.texto;
                this.isPPolizaValid[5] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 7:
                if ($event.id > 0) {
                    this.tipoObjeto = $event;
                    switch ($event.id) {
                        case 1:
                            this.labelSelect2 = null;
                            this.lstItems[2] = null;
                            break;
                        case 2:
                            this.labelSelect2 = 'Clientes';
                            this.lstItems[2] = Object.assign([], this.lstClientes);
                            break;
                        case 3:
                            this.labelSelect2 = 'Proveedores';
                            this.lstItems[2] = Object.assign([], this.lstProveedores);
                            break;
                    }
                }
                break;
        }
    };
    AgregarPolizaComponent.prototype.fnViewReturn = function () {
        this.router.navigate(['/protected/contabilidad/polizas']);
    };
    AgregarPolizaComponent.prototype.fnSave = function () {
        var _this = this;
        console.log('Poliza:', JSON.stringify(this.poliza));
        this.coreContainer.openModal(2);
        this.serviceCatalogo.agregarPoliza(this.poliza).subscribe(function (resp) {
            console.log('agregarPoliza', resp.current);
            if (resp.current.idPoliza > 0) {
                setTimeout(function () {
                    _this.coreContainer.closeModal(2);
                    _this.modalSuccess = 'modalPromt openModal';
                }, 500);
                setTimeout(function () {
                    _this.modalSuccess = 'modalPromt';
                    _this.fnViewReturn();
                }, 3500);
            }
        }, function (error) {
            console.log('Error agregarPoliza', error);
            setTimeout(function () {
                _this.coreContainer.closeModal(2);
            }, 1500);
        });
    };
    AgregarPolizaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-agregar-poliza',
            template: __webpack_require__("./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.html"),
            styles: [__webpack_require__("./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], AgregarPolizaComponent);
    return AgregarPolizaComponent;
}());



/***/ }),

/***/ "./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"containerHeader\">EDITAR PÓLIZA</div>\r\n    <div class=\"containerBody\">\r\n        <div class=\"containerBodyGralData\">\r\n            <div class=\"containerBodyGralDataTitle\">{{title}}</div>\r\n            <div class=\"containerBodyGralDataSubtitles\">\r\n                <span class=\"containerBodyGralDataSubtitlesSpan\">{{poliza.folio}}&nbsp;&middot;&nbsp;</span>\r\n                <span class=\"containerBodyGralDataSubtitlesSpan\">Fecha de Referencia:&nbsp;{{poliza.fecha}}&nbsp;&middot;&nbsp;</span>\r\n                <span class=\"containerBodyGralDataSubtitlesSpan\">Tipo:&nbsp;{{(poliza.tipo === 1) ? 'Ingreso' : (poliza.tipo === 2) ? 'Egreso' : 'Diario'}}&nbsp;&middot;&nbsp;</span>\r\n                <span class=\"containerBodyGralDataSubtitlesSpan\">{{poliza.total | acFormatMoney}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerBodyTitle\">DATOS DE PÓLIZA</div>\r\n        <div class=\"containerBodyForm\">\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\r\n                <div class=\"containerBodyFormColLabel\">Tipo de Póliza</div>\r\n                <div class=\"containerBodyFormColSelect\">\r\n                    <app-pf-selector [defaultItem]=\"defaultItem[0]\" [lstItems]=\"lstItems[0]\" (outPutItem)=\"fnOutPutItem($event, 0)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\r\n                <div class=\"containerBodyFormColLabel\">Referencia</div>\r\n                <div class=\"containerBodyFormColInputs\">\r\n                    <input [(ngModel)]=\"poliza.referencia\" class=\"containerBodyFormColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPoliza()\">\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 15%;\">\r\n                <div class=\"containerBodyFormColLabel\">Descripción</div>\r\n                <div class=\"containerBodyFormColInputs\">\r\n                    <input [(ngModel)]=\"poliza.descripcion\" class=\"containerBodyFormColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPoliza()\">\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 170px;\">\r\n                <div class=\"containerBodyFormColLabel\">Fecha</div>\r\n                <div class=\"containerBodyFormColDate\">\r\n                    <pq-date-picker [borderInputColor]=\"'1px solid #D8D9DD'\" [fontColor]=\"'#424242'\" [backGroundColor]=\"white\" [disabled]=\"'false'\" [sizeInput]=\"'16px'\" [heightInput]=\"'30px'\" [(date)]=\"poliza.fecha\" dateFormat=\"YYYYMMDD\" (fecha)=\"fnGetFechaImpl($event)\"></pq-date-picker>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 10%;\">\r\n                <div class=\"containerBodyFormColLabel\">Empresas del Grupo</div>\r\n                <div class=\"containerBodyFormColSelect\">\r\n                    <app-pf-selector [colorSelectedSimple]=\"'#008894'\" [inputHeight]=\"'30px'\" [viewSearch]=\"true\" [defaultItem]=\"defaultItem[1]\" [lstItems]=\"lstItems[1]\" (outPutItem)=\"fnOutPutItem($event, 1)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;max-width: 10%;\">\r\n                <div class=\"containerBodyFormColLabel\">&nbsp;</div>\r\n                <div class=\"containerBodyFormColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[7]\" [lstItems]=\"lstItems[7]\" (outPutItem)=\"fnOutPutItem($event, 7)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 15%;max-width: 15%;\">\r\n                <div class=\"containerBodyFormColLabel\">{{ labelSelect2 }}</div>\r\n                <div class=\"containerBodyFormColSelect\">\r\n                    <app-pf-selector [isDisabled]=\"(lstItems[2] !== undefined && lstItems[2] !== null && lstItems[2].length > 0) ? false : true\" [isOpaque]=\"(lstItems[2] !== undefined && lstItems[2] !== null && lstItems[2].length > 0) ? false : true\" [inputHeight]=\"'30px'\" [viewSearch]=\"true\" [defaultItem]=\"defaultItem[2]\" [lstItems]=\"lstItems[2]\" (outPutItem)=\"fnOutPutItem($event, 2)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormCol\" style=\"flex-basis: 10%;\">\r\n                <div class=\"containerBodyFormColLabel\">Folio</div>\r\n                <div class=\"containerBodyFormColLabelValue\">{{ poliza.folio }}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerBodySubtitle\">AGREGAR CUENTA CONTABLE</div>\r\n        <div class=\"containerBodyFormColor\">\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 20%;max-width: 20%;\">\r\n                <div class=\"containerBodyFormColorColLabel\">Cuenta</div>\r\n                <div class=\"containerBodyFormColorColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[3]\" [isSimpleValue]=\"false\" [placeholder]=\"'Folio, Cuenta'\" [lstItems]=\"lstItems[3]\" [viewSearch]=\"true\" (outPutItem)=\"fnOutPutItem($event, 3)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 20%\">\r\n                <div class=\"containerBodyFormColorColLabel\">Descripción</div>\r\n                <div class=\"containerBodyFormColorColInputs\">\r\n                    <input [(ngModel)]=\"itemDescripcion\" class=\"containerBodyFormColorColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPPoliza()\">\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%\">\r\n                <div class=\"containerBodyFormColorColLabel\">Monto</div>\r\n                <div class=\"containerBodyFormColorColInputs\">\r\n                    <input [(ngModel)]=\"itemMonto\" class=\"containerBodyFormColorColInput\" placeholder=\"Escribe Aquí\" (keypress)=\"fnValidPPoliza()\" (focus)=\"fnFocusMonto()\" (blur)=\"fnBlurMonto()\">\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%;max-width: 10%;\">\r\n                <div class=\"containerBodyFormColorColLabel\">IVA</div>\r\n                <div class=\"containerBodyFormColorColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[4]\" [lstItems]=\"lstItems[4]\" (outPutItem)=\"fnOutPutItem($event, 4)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 10%;max-width: 10%;\">\r\n                <div class=\"containerBodyFormColorColLabel\">Tipo</div>\r\n                <div class=\"containerBodyFormColorColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[5]\" [lstItems]=\"lstItems[5]\" (outPutItem)=\"fnOutPutItem($event, 5)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 15%;max-width: 15%;\">\r\n                <div class=\"containerBodyFormColorColLabel\">Centro de Costos</div>\r\n                <div class=\"containerBodyFormColorColSelect\">\r\n                    <app-pf-selector [inputHeight]=\"'30px'\" [defaultItem]=\"defaultItem[6]\" [lstItems]=\"lstItems[6]\" (outPutItem)=\"fnOutPutItem($event, 6)\"></app-pf-selector>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyFormColorCol\" style=\"flex-basis: 5%\">\r\n                <div class=\"containerBodyFormColorColLabel\">&nbsp;</div>\r\n                <div [ngClass]=\"classBtnAdd\" (click)=\"fnAddPPoliza()\">AGREGAR</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"containerBodyTable\">\r\n            <div class=\"containerBodyTableHeader\">\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\">#</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 20%;text-align: left;\">Cuenta</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 20%;text-align: left;\">Descripción</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;text-align: left;\">Tipo</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 15%;text-align: left;\">Centro de Costos</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">Monto MXN</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">IVA</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;text-align: right;\">Total</div>\r\n                <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\">&nbsp;</div>\r\n            </div>\r\n            <div class=\"containerBodyTableBody\">\r\n                <div class=\"containerBodyTableBodyEmpty\" *ngIf=\"poliza.lstPPoliza.length === 0\">NO HAS GENERADO CUENTAS CONTABLES</div>\r\n                <div class=\"containerBodyTableBodyLst\" *ngIf=\"poliza.lstPPoliza.length > 0\">\r\n                    <div class=\"containerBodyTableBodyLstRow\" *ngFor=\"let item of poliza.lstPPoliza; let i = index\">\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;\">{{ i + 1 }}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 20%;text-align: left;\"><span class=\"containerBodyTableBodyLstRowColSpan\">{{ item.cuentaContable.descripcionAux + ' ' + item.cuentaContable.descripcionAuxSep + ' '}}</span><span class=\"containerBodyTableBodyLstRowColSpan\">{{ item.cuentaContable.descripcion }}</span></div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 20%;text-align: left;\">{{item.descripcion}}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;text-align: left;\">{{(item.tipo) ? 'Abono' : 'Cargo'}}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 15%;text-align: left;\">{{ item.centroCosto.descripcion }}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ item.monto | acFormatMoney }}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ (item.tipoIVA) ? '16%' : '0%'}}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 10%;text-align: right;;font-size: 17px;color: #008894;font-weight: 400;\">{{ (item.monto + item.montoIVA) | acFormatMoney }}</div>\r\n                        <div class=\"containerBodyTableBodyLstRowCol\" style=\"flex-basis: 5%;\" (click)=\"fnDeleteItem(i)\"><img src=\"./assets/Images/polizasEliminar.svg\" alt=\"\" class=\"containerBodyTableBodyLstRowColImg\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"containerBodyTableFooter\">\r\n                {{ (poliza.lstPPoliza.length === 1) ? '#1 Cuenta Contable' : '#' + poliza.lstPPoliza.length + ' Cuentas Contables' }}\r\n            </div>\r\n        </div>\r\n        <div class=\"containerBodySummary\">\r\n            <div class=\"containerBodySummaryTitle\">\r\n                <span class=\"containerBodySummaryTitleSpan\">Totales</span>\r\n            </div>\r\n            <div class=\"containerBodySummaryTitle\">\r\n                <div class=\"containerBodySummarySubtitle\">Subtotal</div>\r\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 23px;color: #424242;font-weight: 400;\">{{ poliza.monto | acFormatMoney }}</div>\r\n            </div>\r\n            <div class=\"containerBodySummaryTitle\">\r\n                <div class=\"containerBodySummarySubtitle\">IVA</div>\r\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 23px;color: #008894;font-weight: 400;\">{{ poliza.iva | acFormatMoney }}</div>\r\n            </div>\r\n            <div class=\"containerBodySummaryTitle\">\r\n                <div class=\"containerBodySummarySubtitle\">Total</div>\r\n                <div class=\"containerBodySummaryAmount\" style=\"font-size: 27px;color: #4BA92B;font-weight: 700;\">{{ poliza.total | acFormatMoney }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"containerFooter\">\r\n        <div class=\"containerFooterBtnAcepted\" (click)=\"fnCancel()\">Cancelar</div>\r\n        <div [ngClass]=\"classBtnAcept\" (click)=\"fnSave()\">Guardar</div>\r\n    </div>\r\n</div>\r\n\r\n<div [ngClass]=\"modalPromt\">\r\n    <div class=\"modalPromtContainer\">\r\n        <div class=\"modalPromtContainerHeader\">PROQUIFA NET</div>\r\n        <div class=\"modalPromtContainerBody\">\r\n            <img src=\"./assets/Images/polizasAlerta.svg\" alt=\"Alerta!\" class=\"modalPromtContainerBodyImg\">\r\n            <span class=\"modalPromtContainerBodySpan\">¿Estás seguro que deseas salir sin guardar los cambios?</span>\r\n        </div>\r\n        <div class=\"modalPromtContainerFooter\">\r\n            <div class=\"modalPromtContainerFooterBtn\" (click)=\"fnClosePrompt()\">CANCELAR</div>\r\n            <div class=\"modalPromtContainerFooterBtn\" (click)=\"fnViewReturn()\">ACEPTAR</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div [ngClass]=\"modalSuccess\">\r\n    <div class=\"modalPromtContainer\">\r\n        <div class=\"modalPromtContainerHeader\">PROQUIFA NET</div>\r\n        <div class=\"modalPromtContainerBody\">\r\n            <img src=\"./assets/Images/polizasExito.svg\" alt=\"Alerta!\" class=\"modalPromtContainerBodyImg\">\r\n            <span class=\"modalPromtContainerBodySpan\"><span style=\"font-weight: 700;font-size: 29px;color: #008894;\">¡Has guardado exitosamente </span><br /> una nueva póliza!</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.scss":
/***/ (function(module, exports) {

module.exports = ":host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host>.container{overflow:scroll;height:calc(100vh - 130px)}:host>.container>.containerHeader{font-family:Novecento;font-size:25px;color:#424242;font-weight:400;border-bottom:2px solid #424242;height:58px;line-height:58px;vertical-align:middle;text-indent:20px}:host>.container>.containerBody{padding:20px;min-height:calc(100vh - 300px);overflow:scroll}:host>.container>.containerBody>.containerBodyGralData{padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #424242}:host>.container>.containerBody>.containerBodyGralData>.containerBodyGralDataTitle{font-family:Novecento;font-weight:700;font-size:24px;color:#424242;margin-bottom:10px}:host>.container>.containerBody>.containerBodyGralData>.containerBodyGralDataSubtitles>.containerBodyGralDataSubtitlesSpan{font-size:16px;color:#008894}:host>.container>.containerBody>.containerBodyGralData>.containerBodyGralDataSubtitles>.containerBodyGralDataSubtitlesSpan:nth-child(2n){color:#424242}:host>.container>.containerBody>.containerBodyTitle{font-family:Novecento;font-size:20px;color:#424242;font-weight:700;border-bottom:1px solid #424242;height:39px;line-height:39px;vertical-align:middle}:host>.container>.containerBody>.containerBodyForm{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:80px;margin:20px 0px}:host>.container>.containerBody>.containerBodyForm>.containerBodyFormCol{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.container>.containerBody>.containerBodyForm>.containerBodyFormCol>.containerBodyFormColInputs>input.containerBodyFormColInput{width:100%;background:#fff;border:1px solid #d8d9dd;height:30px;font-size:16px;color:#424242;font-weight:400;padding:0 5px;outline:none}:host>.container>.containerBody>.containerBodyForm>.containerBodyFormCol>.containerBodyFormColLabelValue{font-size:23px;color:#008894;font-weight:700}:host>.container>.containerBody>.containerBodyForm>.containerBodyFormCol>.containerBodyFormColLabel{width:100%;font-size:16px;color:#424242;font-weight:400;padding-bottom:5px}:host>.container>.containerBody>.containerBodyForm>.containerBodyFormCol>.containerBodyFormColSelect{width:100%;position:relative}:host>.container>.containerBody>.containerBodySubtitle{font-size:20px;color:#424242;font-weight:700;font-family:Novecento;margin:30px 0px 10px 0px}:host>.container>.containerBody>.containerBodyFormColor{background:rgba(0,136,148,.07);height:113px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;padding:0px 15px;margin:15px 0px}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px 10px}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColInputs>.containerBodyFormColorColInput{width:100%;background:#fff;border:1px solid #d8d9dd;height:30px;font-size:16px;color:#424242;font-weight:400;padding:0 5px;outline:none}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColLabel{width:100%;font-size:16px;color:#424242;font-weight:400;padding-bottom:5px}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColSelect{width:100%;position:relative}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColBtnDisabled{width:170px;height:30px;background:#c2c3c9;font-family:Novecento;font-size:21px;color:#fff;font-weight:700;line-height:30px;vertical-align:middle;text-align:center;pointer-events:none;padding-bottom:3px}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColBtnEnabled{width:170px;height:30px;background:#4ba92b;font-family:Novecento;font-size:21px;color:#fff;font-weight:700;line-height:30px;vertical-align:middle;text-align:center;cursor:pointer;-webkit-transition:all .2 ease-in-out;transition:all .2 ease-in-out;padding-bottom:3px}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColBtnEnabled:hover{opacity:.5}:host>.container>.containerBody>.containerBodyFormColor>.containerBodyFormColorCol>.containerBodyFormColorColBtnEnabled:active{opacity:.75}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;border-bottom:1px solid #424242;padding-bottom:5px;height:25px}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableHeader>.containerBodyTableHeaderCol{font-weight:700;font-size:15px;color:#424242;text-align:center}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyEmpty{font-family:Novecento;font-size:36px;color:#d8d9dd;font-weight:700;text-align:center;min-height:calc(100vh - 940px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:15px 0px}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst{min-height:calc(100vh - 940px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;border-bottom:1px solid #eceef0;height:49px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow>.containerBodyTableBodyLstRowCol{font-size:16px;color:#424242;font-weight:400;text-align:center}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow>.containerBodyTableBodyLstRowCol>.containerBodyTableBodyLstRowColImg{width:15px;height:15px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow>.containerBodyTableBodyLstRowCol>.containerBodyTableBodyLstRowColImg:hover{opacity:.5}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow>.containerBodyTableBodyLstRowCol>.containerBodyTableBodyLstRowColImg:active{opacity:.75}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow>.containerBodyTableBodyLstRowCol>.containerBodyTableBodyLstRowColSpan:nth-of-type(1){font-size:16px;color:#008894;font-weight:400}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyLst>.containerBodyTableBodyLstRow:hover{background:#eceef0}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableFooter{font-size:14px;color:#424242;font-weight:400;text-align:center;height:45px;line-height:45px;vertical-align:middle;border-top:1px solid #424242}:host>.container>.containerBody>.containerBodySummary{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}:host>.container>.containerBody>.containerBodySummary>.containerBodySummaryTitle{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:25%;padding:5px 0px;max-width:400px}:host>.container>.containerBody>.containerBodySummary>.containerBodySummaryTitle>.containerBodySummaryTitleSpan{width:100%;font-family:Novecento;font-weight:700;font-size:23px;color:#424242;text-align:right}:host>.container>.containerBody>.containerBodySummary>.containerBodySummaryTitle>.containerBodySummarySubtitle{width:100%;font-size:23px;color:#424242;font-weight:400}:host>.container>.containerBody>.containerBodySummary>.containerBodySummaryTitle>.containerBodySummaryAmount{width:100%;text-align:right}:host>.container>.containerFooter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:68px;margin:0px 20px;border-top:2px solid #424242}:host>.container>.containerFooter>.containerFooterBtnDisabled{width:170px;height:30px;background:#c2c3c9;font-family:Novecento;font-size:21px;color:#fff;font-weight:700;line-height:30px;vertical-align:middle;text-align:center;pointer-events:none;padding-bottom:3px}:host>.container>.containerFooter>.containerFooterBtnAcepted{width:170px;height:30px;background:#008894;font-family:Novecento;font-size:21px;color:#fff;font-weight:700;line-height:30px;vertical-align:middle;text-align:center;cursor:pointer;-webkit-transition:all .2 ease-in-out;transition:all .2 ease-in-out;padding-bottom:3px}:host>.container>.containerFooter>.containerFooterBtnAcepted:hover{opacity:.5}:host>.container>.containerFooter>.containerFooterBtnAcepted:active{opacity:.75}:host>.modalPromt{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background:rgba(255,255,255,.9);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.modalPromt>.modalPromtContainer{margin:auto;background-color:#fff;position:absolute;outline:0;width:580px;height:320px;background:#fff;border:1px solid #008894;border-radius:22px;top:0;bottom:0;left:0;right:0;padding:20px;overflow:hidden}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerHeader{background:#008894;margin:-20px;height:55px;font-family:Novecento;font-size:26px;color:#fff;font-weight:700;text-align:center;line-height:55px}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerBody{height:245px;margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerBody>.modalPromtContainerBodySpan{padding:15px 100px 0px 100px;text-align:center;font-size:29px;color:#001615}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerFooter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerFooter>.modalPromtContainerFooterBtn{background:#008894;width:170px;height:30px;line-height:30px;text-align:center;font-family:Novecento;font-size:21px;color:#fff;font-weight:700;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;padding-bottom:3px !important}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerFooter>.modalPromtContainerFooterBtn:hover{opacity:.5}:host>.modalPromt>.modalPromtContainer>.modalPromtContainerFooter>.modalPromtContainerFooterBtn:active{opacity:.75}:host>.openModal{display:block}"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPolizaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_poliza_class__ = __webpack_require__("./src/app/class/catalogo/poliza.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_option_class__ = __webpack_require__("./src/app/class/option.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__ = __webpack_require__("./src/app/class/catalogo/ppoliza.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_accounting__ = __webpack_require__("./node_modules/accounting/accounting.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_accounting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_accounting__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditarPolizaComponent = /** @class */ (function () {
    function EditarPolizaComponent(router, route, serviceCatalogo, coreContainer) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.serviceCatalogo = serviceCatalogo;
        this.coreContainer = coreContainer;
        /*
    
        Ingreso =   Emite: Grupo Proquifa, Recibe: Clientes;
        Egreso  =   Emite: Proveedores, Recibo Grupo Proquifa
        Diario  =   Emite: Grupo Proquifa, Recibe, Cliente/Proveedor/Ninguno
    
        */
        this.poliza = new __WEBPACK_IMPORTED_MODULE_1__class_catalogo_poliza_class__["a" /* Poliza */]();
        this.polizaAux = null;
        this.isPolizaValid = new Array(6).fill(false);
        this.lstCuentaCont = [];
        this.classBtnAcept = 'containerFooterBtnDisabled';
        this.classBtnAdd = 'containerBodyFormColorColBtnDisabled';
        this.itemDescripcion = '';
        this.itemMonto = '';
        this.cantSelects = 8;
        this.lstItems = new Array(this.cantSelects).fill(null);
        this.defaultItem = new Array(this.cantSelects).fill({ id: 0, texto: 'Seleccionar' });
        this.lstEmpresas = new Array();
        this.lstProveedores = new Array();
        this.lstClientes = new Array();
        this.ppoliza = new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */]();
        this.isPPolizaValid = new Array(6).fill(false);
        this.lstTipo = [
            { id: 1, texto: 'Ingreso' },
            { id: 2, texto: 'Engreso' },
            { id: 3, texto: 'Diario' },
        ];
        this.lstTipoPP = [
            { id: 0, texto: 'Cargo' },
            { id: 1, texto: 'Abono' }
        ];
        this.lstIVA = [
            { id: 0, texto: '0%' },
            { id: 1, texto: '16%' }
        ];
        this.lstNCliProv = [
            { id: 1, texto: 'Ninguno' },
            { id: 2, texto: 'Clientes' },
            { id: 3, texto: 'Proveedores' }
        ];
        this.labelSelect2 = null;
        this.isDiff = true;
        this.modalPromt = 'modalPromt';
        this.modalSuccess = 'modalPromt';
        /*
    
        Prefijo
        Tipo
        Año
        XXXXX
    
        */
        // public folio = new Array<string>(4).fill('');
        /*EDITAR PÓLIZA*/
        this.idPoliza = 0;
        this.isFirstTime = true;
        this.title = 'Ejemplo de Nombre de Empresa - Cliente - Proveedor';
        this.route.params.subscribe(function (params) {
            _this.idPoliza = params['id'];
        });
    }
    EditarPolizaComponent.prototype.ngOnInit = function () {
        this.coreContainer.openModal(2);
        // this.folio[2] = this.poliza.fechaDate.getFullYear().toString();
        this.lstItems[0] = this.lstTipo;
        this.lstItems[4] = this.lstIVA;
        this.lstItems[5] = this.lstTipoPP;
        this.lstItems[7] = this.lstNCliProv;
        this.fnGetInfo(0);
    };
    EditarPolizaComponent.prototype.fnFillSelects = function (opc) {
        var _this = this;
        console.log('fnFillSelects: ', opc);
        switch (opc) {
            case 0:
                this.lstItems[1] = Object.assign([], this.lstEmpresas);
                var tipoOpt = {
                    id: this.polizaAux.tipo,
                    texto: (this.polizaAux.tipo === 1) ? 'Ingreso' : (this.polizaAux.tipo === 2) ? 'Egreso' : 'Diario'
                };
                this.defaultItem[0] = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), tipoOpt);
                break;
            case 1:
                var empresaOpt = null;
                empresaOpt = {
                    id: this.polizaAux.empresa.idEmpresa,
                    texto: this.polizaAux.empresa.alias
                };
                this.defaultItem[1] = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), empresaOpt);
                break;
            case 2:
                var tipoObjetoOpt = (this.polizaAux.tipo === 1) ? this.lstNCliProv[1] :
                    (this.polizaAux.tipo === 2) ? this.lstNCliProv[2] :
                        (this.polizaAux.tipo === 3 && ((this.polizaAux.cliente === undefined || this.polizaAux.cliente === null) && (this.polizaAux.proveedor === undefined || this.polizaAux.proveedor === null))) ? this.lstNCliProv[3] :
                            (this.polizaAux.cliente !== undefined || this.polizaAux.cliente !== null) ? this.lstNCliProv[1] :
                                (this.polizaAux.proveedor !== undefined || this.polizaAux.proveedor !== null) ? this.lstNCliProv[2] : this.lstNCliProv[0];
                this.defaultItem[7] = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), tipoObjetoOpt);
                break;
            case 3:
                switch (this.polizaAux.tipo) {
                    case 1:
                        this.lstItems[2] = Object.assign([], this.lstClientes);
                        break;
                    case 2:
                        this.lstItems[2] = Object.assign([], this.lstProveedores);
                        break;
                    case 3:
                        if ((this.polizaAux.cliente === undefined || this.polizaAux.cliente === null) && (this.polizaAux.proveedor === undefined || this.polizaAux.proveedor === null)) {
                            this.lstItems[2] = null;
                        }
                        else if (this.polizaAux.cliente !== undefined || this.polizaAux.cliente !== null) {
                            this.lstItems[2] = Object.assign([], this.lstClientes);
                        }
                        else if (this.polizaAux.proveedor !== undefined || this.polizaAux.proveedor !== null) {
                            this.lstItems[2] = Object.assign([], this.lstProveedores);
                        }
                        break;
                }
                break;
            case 4:
                var defItem2 = null;
                switch (this.polizaAux.tipo) {
                    case 1:
                        defItem2 = {
                            id: this.polizaAux.empresa.idEmpresa,
                            texto: this.polizaAux.cliente.nombre
                        };
                        break;
                    case 2:
                        defItem2 = {
                            id: this.polizaAux.proveedor.idProveedor,
                            texto: this.polizaAux.proveedor.nombre
                        };
                        break;
                    case 3:
                        if ((this.polizaAux.cliente === undefined || this.polizaAux.cliente === null) && (this.polizaAux.proveedor === undefined || this.polizaAux.proveedor === null)) {
                            defItem2 = null;
                        }
                        else if (this.polizaAux.cliente !== undefined || this.polizaAux.cliente !== null) {
                            defItem2 = {
                                id: this.polizaAux.empresa.idEmpresa,
                                texto: this.polizaAux.cliente.nombre
                            };
                        }
                        else if (this.polizaAux.proveedor !== undefined || this.polizaAux.proveedor !== null) {
                            defItem2 = {
                                id: this.polizaAux.proveedor.idProveedor,
                                texto: this.polizaAux.proveedor.nombre
                            };
                        }
                        break;
                }
                this.defaultItem[2] = Object.assign({}, defItem2);
                break;
        }
        if (opc === 4) {
            setTimeout(function () {
                _this.coreContainer.closeModal(2);
            }, 1500);
        }
        else {
            setTimeout(function () {
                opc++;
                _this.fnFillSelects(opc);
            }, 500);
        }
    };
    EditarPolizaComponent.prototype.fnGetPoliza = function () {
        var _this = this;
        this.serviceCatalogo.obtenerPoliza(this.idPoliza).subscribe(function (resp) {
            console.log('obtenerPoliza', resp.current);
            if (resp.current.idPoliza > 0) {
                var pol = resp.current;
                var fechaAux = pol.fecha.split('-');
                pol.fecha = new Date(Number(fechaAux[0]), Number(fechaAux[1]) - 1, Number(fechaAux[2]));
                switch (pol.tipo) {
                    case 1:
                        _this.title = pol.cliente.razonSocial;
                        break;
                    case 2:
                        _this.title = pol.proveedor.razonSocial;
                        break;
                    case 3:
                        _this.title =
                            (pol.proveedor !== undefined && pol.proveedor !== null && pol.proveedor) ? pol.proveedor.razonSocial :
                                (pol.cliente !== undefined && pol.cliente !== null && pol.cliente) ? pol.cliente.razonSocial :
                                    pol.empresa.razonSocial;
                        break;
                }
                for (var _i = 0, _a = pol.lstPPoliza; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var nivel = null;
                    var nivel2 = null;
                    var nivel3 = null;
                    switch (item.cuentaContable.nivel) {
                        case 1:
                            nivel = item.cuentaContable.nivel1 + '';
                            break;
                        case 2:
                            nivel2 = null;
                            if (item.cuentaContable.nivel2 < 10) {
                                nivel2 = '00' + item.cuentaContable.nivel2;
                            }
                            else if (item.cuentaContable.nivel2 > 9 && item.cuentaContable.nivel2 < 100) {
                                nivel2 = '0' + item.cuentaContable.nivel2;
                            }
                            else {
                                nivel2 = item.cuentaContable.nivel2;
                            }
                            nivel = item.cuentaContable.nivel1 + '.' + nivel2;
                            break;
                        case 3:
                            nivel2 = null;
                            if (item.cuentaContable.nivel2 < 10) {
                                nivel2 = '00' + item.cuentaContable.nivel2;
                            }
                            else if (item.cuentaContable.nivel2 > 9 && item.cuentaContable.nivel2 < 100) {
                                nivel2 = '0' + item.cuentaContable.nivel2;
                            }
                            else {
                                nivel2 = item.cuentaContable.nivel2;
                            }
                            nivel3 = null;
                            if (item.cuentaContable.nivel3 < 10) {
                                nivel3 = '00' + item.cuentaContable.nivel3;
                            }
                            else if (item.cuentaContable.nivel3 > 9 && item.cuentaContable.nivel3 < 100) {
                                nivel3 = '0' + item.cuentaContable.nivel3;
                            }
                            else {
                                nivel3 = item.cuentaContable.nivel3;
                            }
                            nivel = item.cuentaContable.nivel1 + '.' + nivel2 + '.' + nivel3;
                            break;
                    }
                    item.cuentaContable.descripcionAux = nivel;
                    item.cuentaContable.descripcionAuxSep = '\u00B7';
                }
                _this.poliza = Object.assign({}, pol);
                _this.polizaAux = Object.assign({}, pol);
            }
            _this.fnFillSelects(0);
        }, function (error) {
            _this.fnFillSelects(0);
            console.log('Error obtenerPoliza', error);
        });
    };
    /*fnGetFolio(lstFolios: Array<any>) {
        console.log('fnGetFolio', lstFolios);
        if (lstFolios !== undefined && lstFolios !== null && lstFolios.length > 0) {
            for (let item of lstFolios) {
                if (item.nombre === this.folio[1]) {
                    let nFolio = Object.assign(item.valor3 + 1);
                    if (nFolio < 10) {
                        this.folio[3] = '0000' + nFolio;
                    }
                    if (nFolio > 9 && nFolio < 100) {
                        this.folio[3] = '000' + nFolio;
                    }
                    if (nFolio > 99 && nFolio < 1000) {
                        this.folio[3] = '00' + nFolio;
                    }
                    if (nFolio > 9999 && nFolio < 10000) {
                        this.folio[3] = '0' + nFolio;
                    }
                    if (nFolio > 99999) {
                        this.folio[3] = nFolio;
                    }
                }
                break;
            }
            this.poliza.folio = this.folio[0] + '-' + this.folio[1] + '-' + this.folio[2] + '-' + this.folio[3];
        } else {
            this.poliza.folio = 'N/D';
        }
    }*/
    EditarPolizaComponent.prototype.fnCancel = function () {
        if (this.isDiff) {
            this.fnOpenPrompt();
        }
        else {
            this.fnViewReturn();
        }
    };
    EditarPolizaComponent.prototype.fnOpenPrompt = function () {
        this.modalPromt = 'modalPromt openModal';
    };
    EditarPolizaComponent.prototype.fnClosePrompt = function () {
        this.modalPromt = 'modalPromt';
    };
    EditarPolizaComponent.prototype.ngDoCheck = function () {
        if (JSON.stringify(this.poliza) !== JSON.stringify(this.polizaAux)) {
            this.isDiff = true;
        }
        else {
            this.isDiff = false;
        }
    };
    EditarPolizaComponent.prototype.fnUpdateAmounts = function () {
        this.poliza.monto = 0;
        this.poliza.iva = 0;
        this.poliza.total = 0;
        for (var _i = 0, _a = this.poliza.lstPPoliza; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.tipo) {
                this.poliza.monto += item.monto;
                this.poliza.iva += item.montoIVA;
            }
            else {
                this.poliza.monto -= item.monto;
                this.poliza.iva -= item.montoIVA;
            }
        }
        this.poliza.total = this.poliza.monto + this.poliza.iva;
    };
    EditarPolizaComponent.prototype.fnDeleteItem = function (i) {
        this.poliza.lstPPoliza.splice(i, 1);
        this.fnUpdateAmounts();
    };
    EditarPolizaComponent.prototype.fnValidPoliza = function () {
        console.log('fnValidPoliza');
        if (this.poliza.referencia !== '' && this.poliza.descripcion !== '' && this.poliza.fecha !== null) {
            this.isPolizaValid[1] = true;
            this.isPolizaValid[2] = true;
            this.isPolizaValid[3] = true;
        }
        else {
            this.isPolizaValid[1] = false;
            this.isPolizaValid[2] = false;
            this.isPolizaValid[3] = false;
        }
        var x = 0;
        for (var _i = 0, _a = this.isPolizaValid; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                x++;
            }
            else {
                break;
            }
        }
        if (x === 6) {
            // this.poliza.folio = this.folio[0] + '-' + this.folio[1] + '-' + this.folio[2] + '-' + this.folio[3];
            this.classBtnAcept = (this.poliza.lstPPoliza !== undefined && this.poliza.lstPPoliza !== null && this.poliza.lstPPoliza.length > 0 && this.poliza.total === 0) ? 'containerFooterBtnAcepted' : 'containerFooterBtnDisabled';
        }
        else {
            this.classBtnAcept = 'containerFooterBtnDisabled';
        }
    };
    EditarPolizaComponent.prototype.fnValidPPoliza = function () {
        this.isPPolizaValid[0] = (this.itemDescripcion !== '') ? true : false;
        this.isPPolizaValid[1] = (__WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto) > 0) ? true : false;
        var x = 0;
        for (var _i = 0, _a = this.isPPolizaValid; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                x++;
            }
            else {
                break;
            }
        }
        this.classBtnAdd = (x === 6) ? 'containerBodyFormColorColBtnEnabled' : 'containerBodyFormColorColBtnDisabled';
        this.fnValidPoliza();
    };
    EditarPolizaComponent.prototype.fnBlurMonto = function () {
        this.itemMonto = __WEBPACK_IMPORTED_MODULE_7_accounting__["formatMoney"](this.itemMonto);
    };
    EditarPolizaComponent.prototype.fnFocusMonto = function () {
        if (this.itemMonto !== '') {
            this.itemMonto = __WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto);
        }
    };
    EditarPolizaComponent.prototype.fnAddPPoliza = function () {
        if (this.poliza.lstPPoliza !== undefined && this.poliza.lstPPoliza !== null) {
            this.ppoliza.monto = __WEBPACK_IMPORTED_MODULE_7_accounting__["unformat"](this.itemMonto);
            this.ppoliza.montoIVA = (this.ppoliza.tipoIVA) ? this.ppoliza.monto * 0.16 : 0;
            this.ppoliza.descripcion = this.itemDescripcion;
            this.poliza.lstPPoliza.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */](), this.ppoliza));
            this.ppoliza = new __WEBPACK_IMPORTED_MODULE_6__class_catalogo_ppoliza_class__["a" /* PPoliza */]();
            this.itemDescripcion = '';
            this.itemMonto = '';
            this.isPPolizaValid.fill(false);
            var lstAux = Object.assign([], [this.lstItems[3], this.lstItems[4], this.lstItems[5], this.lstItems[6]]);
            this.lstItems[3] = null;
            this.lstItems[4] = null;
            this.lstItems[5] = null;
            this.lstItems[6] = null;
            this.lstItems[3] = Object.assign([], lstAux[0]);
            this.lstItems[4] = Object.assign([], lstAux[1]);
            this.lstItems[5] = Object.assign([], lstAux[2]);
            this.lstItems[6] = Object.assign([], lstAux[3]);
            this.classBtnAdd = 'containerBodyFormColorColBtnDisabled';
        }
        else {
            this.poliza.lstPPoliza = [];
            this.fnAddPPoliza();
        }
        this.fnUpdateAmounts();
    };
    EditarPolizaComponent.prototype.fnGetInfo = function (opc) {
        var _this = this;
        switch (opc) {
            case 0:
                this.serviceCatalogo.obtenerEmpresasContabilidad().subscribe(function (resp) {
                    console.log('obtenerEmpresas', resp);
                    _this.lstEmpresas = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (item.activo) {
                                var opt = {
                                    id: item.llave,
                                    texto: item.valor
                                };
                                _this.lstEmpresas.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                            }
                        }
                    }
                    _this.fnGetInfo(1);
                }, function (error) {
                    _this.fnGetInfo(1);
                    console.log('Error obtenerEmpresas', error);
                });
                break;
            case 1:
                this.serviceCatalogo.obtenerProveedoresCuentasContables('').subscribe(function (resp) {
                    console.log('obtenerProveedoresCuentasContables', resp);
                    _this.lstProveedores = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.llave,
                                texto: item.nombre
                            };
                            _this.lstProveedores.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    _this.fnGetInfo(2);
                }, function (error) {
                    _this.fnGetInfo(2);
                    console.log('Error obtenerProveedoresCuentasContables', error);
                });
                break;
            case 2:
                this.serviceCatalogo.obtenerClientesCuentasContables('').subscribe(function (resp) {
                    console.log('obtenerClientesCuentasContables', resp);
                    _this.lstClientes = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.llave,
                                texto: item.nombre
                            };
                            _this.lstClientes.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    _this.fnGetInfo(4);
                }, function (error) {
                    _this.fnGetInfo(4);
                    console.log('Error obtenerClientesCuentasContables', error);
                });
                break;
            case 3:
                this.serviceCatalogo.obtenerCuentasContablesEmpresa(this.poliza.empresa.idEmpresa).subscribe(function (resp) {
                    console.log('obtenerCuentasContables', resp);
                    _this.lstItems[3] = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        var lstAux1 = [];
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var nivel = null;
                            var nivel2 = null;
                            var nivel3 = null;
                            switch (item.nivel) {
                                case 1:
                                    nivel = item.nivel1 + '';
                                    break;
                                case 2:
                                    nivel2 = null;
                                    if (item.nivel2 < 10) {
                                        nivel2 = '00' + item.nivel2;
                                    }
                                    else if (item.nivel2 > 9 && item.nivel2 < 100) {
                                        nivel2 = '0' + item.nivel2;
                                    }
                                    else {
                                        nivel2 = item.nivel2;
                                    }
                                    nivel = item.nivel1 + '.' + nivel2;
                                    break;
                                case 3:
                                    nivel2 = null;
                                    if (item.nivel2 < 10) {
                                        nivel2 = '00' + item.nivel2;
                                    }
                                    else if (item.nivel2 > 9 && item.nivel2 < 100) {
                                        nivel2 = '0' + item.nivel2;
                                    }
                                    else {
                                        nivel2 = item.nivel2;
                                    }
                                    nivel3 = null;
                                    if (item.nivel3 < 10) {
                                        nivel3 = '00' + item.nivel3;
                                    }
                                    else if (item.nivel3 > 9 && item.nivel3 < 100) {
                                        nivel3 = '0' + item.nivel3;
                                    }
                                    else {
                                        nivel3 = item.nivel3;
                                    }
                                    nivel = item.nivel1 + '.' + nivel2 + '.' + nivel3;
                                    break;
                            }
                            var opt = {
                                id: item.idCuentaContable,
                                texto: nivel,
                                texto1: item.descripcion,
                                separador: '\u00B7',
                                aux: (item.nivel === 1) ? true : false
                            };
                            lstAux1.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                        _this.lstItems[3] = Object.assign(new Array(), lstAux1);
                    }
                }, function (error) {
                    console.log('Error obtenerCuentasContables', error);
                });
                break;
            case 4:
                this.serviceCatalogo.obtenerLstCentroCostos().subscribe(function (resp) {
                    console.log('obtenerLstCentroCostos', resp);
                    _this.lstItems[6] = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var opt = {
                                id: item.idCentroCosto,
                                texto: item.descripcion
                            };
                            _this.lstItems[6].push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                        }
                    }
                    _this.fnGetPoliza();
                }, function (error) {
                    _this.fnGetPoliza();
                    console.log('Error obtenerLstCentroCostos', error);
                });
                break;
        }
    };
    EditarPolizaComponent.prototype.fnGetFechaImpl = function ($event) {
        this.fnValidPoliza();
    };
    EditarPolizaComponent.prototype.fnOutPutItem = function ($event, opc) {
        console.log('fnOutPutItem', $event, opc);
        switch (opc) {
            case 0:
                this.poliza.proveedor = null;
                this.poliza.cliente = null;
                this.poliza.empresa = null;
                // this.poliza.folio = 'N/D';
                this.poliza.tipo = $event.id;
                this.defaultItem[1] = { id: 0, texto: 'Seleccionar' };
                this.defaultItem[2] = { id: 0, texto: 'Seleccionar' };
                this.lstItems[2] = null;
                this.defaultItem[7] = { id: 0, texto: 'Seleccionar' };
                // this.folio[1] = ($event.id === 1) ? 'I' : ($event.id === 2) ? 'E' : 'D';
                this.isPolizaValid[0] = true;
                this.isPolizaValid[4] = false;
                this.isPolizaValid[5] = false;
                this.fnValidPoliza();
                break;
            case 1:
                this.isPolizaValid[4] = ($event.texto !== 'Seleccionar') ? true : false;
                if ($event.id > 0) {
                    this.poliza.empresa = {
                        idEmpresa: $event.id
                    };
                    // this.folio[0] = $event.aux.nombre;
                    // this.fnGetFolio($event.aux.lstFoliosPoliza);
                    this.fnGetInfo(3);
                }
                this.fnValidPoliza();
                break;
            case 2:
                this.isPolizaValid[5] = ($event.texto !== 'Seleccionar') ? true : false;
                if ($event.id > 0) {
                    switch (this.tipoObjeto.id) {
                        case 1:
                            this.poliza.proveedor = null;
                            this.poliza.cliente = null;
                            break;
                        case 2:
                            this.poliza.cliente = {
                                idCliente: $event.id
                            };
                            break;
                        case 3:
                            this.poliza.proveedor = {
                                idProveedor: $event.id
                            };
                            break;
                    }
                    this.fnValidPoliza();
                }
                break;
            case 3:
                this.ppoliza.cuentaContable.idCuentaContable = $event.id;
                this.ppoliza.cuentaContable.descripcionAux = $event.texto;
                this.ppoliza.cuentaContable.descripcion = $event.texto1;
                this.ppoliza.cuentaContable.descripcionAuxSep = $event.separador;
                this.isPPolizaValid[2] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 4:
                this.ppoliza.tipoIVA = ($event.id === 0) ? false : true;
                this.isPPolizaValid[3] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 5:
                this.ppoliza.tipo = ($event.id === 0) ? false : true;
                this.isPPolizaValid[4] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 6:
                this.ppoliza.centroCosto.idCentroCosto = $event.id;
                this.ppoliza.centroCosto.descripcion = $event.texto;
                this.isPPolizaValid[5] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 7:
                if ($event.id > 0) {
                    this.tipoObjeto = $event;
                    switch ($event.id) {
                        case 1:
                            this.labelSelect2 = null;
                            this.lstItems[2] = null;
                            break;
                        case 2:
                            this.labelSelect2 = 'Clientes';
                            this.lstItems[2] = Object.assign([], this.lstClientes);
                            break;
                        case 3:
                            this.labelSelect2 = 'Proveedores';
                            this.lstItems[2] = Object.assign([], this.lstProveedores);
                            break;
                    }
                }
                break;
        }
    };
    EditarPolizaComponent.prototype.fnViewReturn = function () {
        this.router.navigate(['/protected/contabilidad/polizas']);
    };
    EditarPolizaComponent.prototype.fnSave = function () {
        var _this = this;
        console.log('Poliza:', JSON.stringify(this.poliza));
        this.coreContainer.openModal(2);
        this.serviceCatalogo.agregarPoliza(this.poliza).subscribe(function (resp) {
            console.log('agregarPoliza', resp.current);
            if (resp.current.idPoliza > 0) {
                setTimeout(function () {
                    _this.coreContainer.closeModal(2);
                    _this.modalSuccess = 'modalPromt openModal';
                }, 500);
                setTimeout(function () {
                    _this.modalSuccess = 'modalPromt';
                    _this.fnViewReturn();
                }, 3500);
            }
        }, function (error) {
            console.log('Error agregarPoliza', error);
            setTimeout(function () {
                _this.coreContainer.closeModal(2);
            }, 1500);
        });
    };
    EditarPolizaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-editar-poliza',
            template: __webpack_require__("./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.html"),
            styles: [__webpack_require__("./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], EditarPolizaComponent);
    return EditarPolizaComponent;
}());



/***/ }),

/***/ "./src/app/components/contabilidad/polizas/polizas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolizasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polizas_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/polizas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agregar_poliza_agregar_poliza_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_poliza_editar_poliza_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PolizasRoutingModule = /** @class */ (function () {
    function PolizasRoutingModule() {
    }
    PolizasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__polizas_component__["a" /* PolizasComponent */] },
                    { path: 'agregar', component: __WEBPACK_IMPORTED_MODULE_3__agregar_poliza_agregar_poliza_component__["a" /* AgregarPolizaComponent */] },
                    { path: 'editar/:id', component: __WEBPACK_IMPORTED_MODULE_4__editar_poliza_editar_poliza_component__["a" /* EditarPolizaComponent */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], PolizasRoutingModule);
    return PolizasRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/contabilidad/polizas/polizas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div [ngClass]=\"classBar\">\r\n    <div class=\"containerLateralBarItems\">\r\n      <img src=\"./assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\" class=\"containerLateralBarItemsImg\">\r\n      <div class=\"containerLateralBarItemsTitle\">CONSULTA</div>\r\n    </div>\r\n    <div class=\"containerLateralBarItems\">\r\n        <div style=\"min-width:20px\" ></div>\r\n      <div class=\"containerLateralBarItemsTitle\">PÓLIZAS</div>\r\n    </div>\r\n    <div class=\"containerLateralBarDates\">\r\n      <div class=\"containerLateralBarDate\">\r\n        <div class=\"containerLateralBarDateLabel\">Del</div>\r\n        <pq-date-picker [sizeInput]=\"'14px'\" [heightInput]=\"'30px'\" [(date)]=\"fechaInicio\" dateFormat=\"YYYYMMDD\" (fecha)=\"fnGetFechaImpl($event, 0)\"></pq-date-picker>\r\n      </div>\r\n      <div style=\"min-width:20px\" ></div>\r\n      <div class=\"containerLateralBarDate\">\r\n        <div class=\"containerLateralBarDateLabel\">Al</div>\r\n        <pq-date-picker [sizeInput]=\"'14px'\" [heightInput]=\"'30px'\" [(date)]=\"fechaFin\" dateFormat=\"YYYYMMDD\" (fecha)=\"fnGetFechaImpl($event, 1)\"></pq-date-picker>\r\n      </div>\r\n    </div>\r\n    <div class=\"containerLateralBarSelects\">\r\n      <div class=\"containerLateralBarSelectsLabel\">Empresas del Grupo</div>\r\n      <app-pf-selector [defaultItem]=\"defaultItem[3]\" [lstItems]=\"lstItems[3]\" (outPutItem)=\"fnOutPutItem($event, 3)\"></app-pf-selector>\r\n    </div>\r\n    <div class=\"containerLateralBarSelects\">\r\n      <div class=\"containerLateralBarSelectsLabel\">Tipo</div>\r\n      <app-pf-selector [defaultItem]=\"defaultItem[0]\" [lstItems]=\"lstItems[0]\" (outPutItem)=\"fnOutPutItem($event, 0)\"></app-pf-selector>\r\n    </div>\r\n    <div class=\"containerLateralBarSelects\">\r\n      <div class=\"containerLateralBarSelectsLabel\">Empresa que Emitió</div>\r\n      <app-pf-selector [defaultItem]=\"defaultItem[1]\" [lstItems]=\"lstItems[1]\" (outPutItem)=\"fnOutPutItem($event, 1)\"></app-pf-selector>\r\n    </div>\r\n    <div class=\"containerLateralBarSelects\">\r\n      <div class=\"containerLateralBarSelectsLabel\">Empresa que Recibió</div>\r\n      <app-pf-selector [defaultItem]=\"defaultItem[2]\" [lstItems]=\"lstItems[2]\" (outPutItem)=\"fnOutPutItem($event, 2)\"></app-pf-selector>\r\n    </div>\r\n    <div class=\"containerLateralBarBtns\">\r\n      <div class=\"containerLateralBarBtn\" (click)=\"fnFiltar()\" >\r\n        <img src=\"./assets/Images/actualizar.svg\" alt=\"\" class=\"containerLateralBarBtnImg\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"containerBtn\">\r\n    <img src=\"./assets/Images/flecha_cuadro.svg\" alt=\"\" [ngClass]=\"classBtn\" (click)=\"fnHideBar()\" >\r\n  </div>\r\n  <div class=\"containerBody\" [ngStyle]=\"{'width': (classBar.indexOf('closed') !== -1) ? '100%' : 'calc(100% - 321px)' }\" >\r\n    <div class=\"containerBodyHeader\">\r\n      <div class=\"containerBodyHeaderTitle\">RESULTADOS&nbsp;&middot;&nbsp;CARGAR INGRESOS&nbsp;&middot;&nbsp;EGRESOS</div>\r\n      <div class=\"containerBodyHeaderBtn\" (click)=\"fnAgregarPoliza()\" >NUEVA PÓLIZA</div>\r\n    </div>\r\n    <div class=\"containerBodyTable\">\r\n      <div class=\"containerBodyTableHeader\">\r\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\" >#</div>\r\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;justify-content: flex-start;\" >Folio</div>\r\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 15%;justify-content: flex-start;\" >Empresa</div>\r\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;justify-content: flex-start;\" >Tipo</div>\r\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 20%;\" >Fecha Referencia</div>\r\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;justify-content: flex-end;\" >Subtotal</div>\r\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 15%;justify-content: flex-end;\" >IVA</div>\r\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 10%;justify-content: flex-end;\" >Total</div>\r\n        <div class=\"containerBodyTableHeaderCol\" style=\"flex-basis: 5%;\" >\r\n          <img src=\"./assets/Images/IngresosEgresosExportar.svg\" alt=\"\" class=\"containerBodyTableHeaderColImg\">\r\n        </div>\r\n      </div>\r\n      <div class=\"containerBodyTableBody\">\r\n        <div class=\"containerBodyTableBodyRow\" *ngFor=\"let item of lstPolizas; let i = index\">\r\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 5%;\" > {{ (i + 1) }} </div>\r\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 10%;justify-content: flex-start;\" > {{ item.folio }} </div>\r\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 15%;justify-content: flex-start;color: #008894;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;\" > {{ item.empresa }} </div>\r\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 10%;justify-content: flex-start;\" > {{ item.tipoTexto }} </div>\r\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 20%;\" > {{ item.fechaView | dateFormatSlash }} </div>\r\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 10%;justify-content: flex-end;\" > {{ item.monto | acFormatMoney }} </div>\r\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 15%;justify-content: flex-end;\" >\r\n            <span class=\"containerBodyTableBodyRowColSpan\" *ngIf=\"item.iva > 0\">{{ item.iva | acFormatMoney }}</span>\r\n            <span class=\"containerBodyTableBodyRowColSpan\" *ngIf=\"item.iva > 0\" >&nbsp;&middot;&nbsp;16%</span>\r\n            <span class=\"containerBodyTableBodyRowColSpan\" *ngIf=\"item.iva === 0\" >0%</span>\r\n          </div>\r\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 10%;justify-content: flex-end;color: #008894;\" > {{ item.total | acFormatMoney }} </div>\r\n          <div class=\"containerBodyTableBodyRowCol\" style=\"flex-basis: 5%;\" >\r\n            <img [src]=\"item.imgSrc\" alt=\"\" [ngClass]=\"item.imgClass\" (click)=\"fnEditarPoliza(item.idPoliza)\" >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"containerBodyFooter\">\r\n      {{ (lstPolizas.length === 1) ? '#1 Poliza' : '#' + lstPolizas.length + ' Polizas' }}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/polizas.component.scss":
/***/ (function(module, exports) {

module.exports = ":host>.container{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerLateralBar{padding:15px 20px;width:281px;background:#e6e6e6;height:calc(100vh - 160px);overflow:scroll;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerLateralBar>.containerLateralBarItems{border-bottom:1px solid #424242;height:49px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;margin:10px 0px 15px 0px}:host>.container>.containerLateralBar>.containerLateralBarItems>.containerLateralBarItemsImg{width:20px;height:30px}:host>.container>.containerLateralBar>.containerLateralBarItems>.containerLateralBarItemsTitle{font-size:27px;color:#424242;font-weight:500;font-family:Bank Gothic;width:100%;text-align:center}:host>.container>.containerLateralBar>.containerLateralBarDates{display:-webkit-box;display:-ms-flexbox;display:flex}:host>.container>.containerLateralBar>.containerLateralBarDates>.containerLateralBarDate{width:100%}:host>.container>.containerLateralBar>.containerLateralBarDates>.containerLateralBarDate>.containerLateralBarDateLabel{font-size:15px;color:#424242;font-display:700}:host>.container>.containerLateralBar>.containerLateralBarSelects{margin:15px 0px}:host>.container>.containerLateralBar>.containerLateralBarSelects>.containerLateralBarSelectsLabel{font-size:15px;color:#424242;font-weight:700}:host>.container>.containerLateralBar>.containerLateralBarBtns{border-bottom:1px solid #424242;padding:15px 0px 35px 0px}:host>.container>.containerLateralBar>.containerLateralBarBtns>.containerLateralBarBtn{background:#0f0f0f;border-radius:17px;width:281px;height:45px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerLateralBar>.containerLateralBarBtns>.containerLateralBarBtn>.containerLateralBarBtnImg{height:46px;width:20px;margin:auto;display:block}:host>.container>.containerLateralBar>.containerLateralBarBtns>.containerLateralBarBtn:hover{opacity:.5}:host>.container>.containerLateralBar>.containerLateralBarBtns>.containerLateralBarBtn:active{opacity:.75}:host>.container>.closed{width:0px !important;padding:15px 0px}:host>.container>.containerBtn{z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host>.container>.containerBtn>.containerBtnImg{width:18px;height:32px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;margin-left:-17px}:host>.container>.containerBtn>.containerBtnImg:hover{opacity:.5}:host>.container>.containerBtn>.containerBtnImg:active{opacity:.75}:host>.container>.containerBtn>.rotated{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host>.container>.containerBody{padding:0px 15px;background:#fff;height:calc(100vh - 130px);overflow:scroll}:host>.container>.containerBody>.containerBodyHeader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:58px;border-bottom:2px solid #424242}:host>.container>.containerBody>.containerBodyHeader>.containerBodyHeaderTitle{font-family:Novecento;font-size:25px;color:#424242;font-weight:400}:host>.container>.containerBody>.containerBodyHeader>.containerBodyHeaderBtn{height:30px;width:200px;background:#008894;line-height:30px;font-size:21px;color:#fff;font-family:Novecento;font-weight:900;vertical-align:middle;text-align:center;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;padding-bottom:3px}:host>.container>.containerBody>.containerBodyHeader>.containerBodyHeaderBtn:hover{opacity:.5}:host>.container>.containerBody>.containerBodyHeader>.containerBodyHeaderBtn:active{opacity:.75}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableHeader{height:54px;border-bottom:1px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:5px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableHeader>.containerBodyTableHeaderCol{margin:5px;font-size:15px;color:#424242;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableHeader>.containerBodyTableHeaderCol>.containerBodyTableHeaderColImg{width:30px;height:30px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableHeader>.containerBodyTableHeaderCol>.containerBodyTableHeaderColImg:hover{opacity:.5}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableHeader>.containerBodyTableHeaderCol>.containerBodyTableHeaderColImg:active{opacity:.75}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody{height:calc(100vh - 300px);border-bottom:1px solid #424242;overflow:scroll}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyRow{height:54px;border-bottom:1px solid #eceef0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyRow>.containerBodyTableBodyRowCol{margin:5px;font-size:16px;color:#424242;font-weight:400;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyRow>.containerBodyTableBodyRowCol>.containerBodyTableBodyRowColSpan:nth-of-type(2){font-size:16px;color:#008894;font-weight:700}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyRow>.containerBodyTableBodyRowCol>.containerBodyTableBodyRowColImg{width:13px;cursor:pointer;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyRow>.containerBodyTableBodyRowCol>.containerBodyTableBodyRowColImg:hover{opacity:.5}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyRow>.containerBodyTableBodyRowCol>.containerBodyTableBodyRowColImg:active{opacity:.75}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyRow>.containerBodyTableBodyRowCol>.imgDisabled{pointer-events:none}:host>.container>.containerBody>.containerBodyTable>.containerBodyTableBody>.containerBodyTableBodyRow:hover{background:#eceef0}:host>.container>.containerBody>.containerBodyFooter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:49px;font-size:14px;color:#424242;font-weight:400}"

/***/ }),

/***/ "./src/app/components/contabilidad/polizas/polizas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolizasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_option_class__ = __webpack_require__("./src/app/class/option.class.ts");
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





var PolizasComponent = /** @class */ (function () {
    function PolizasComponent(router, catalogoService, coreContainer) {
        this.router = router;
        this.catalogoService = catalogoService;
        this.coreContainer = coreContainer;
        /*Variables para Contenedor Tabla*/
        this.lstPolizas = new Array();
        this.lstPolizasAux = new Array();
        /*Variables para Contenedor Filtros*/
        this.fechaInicio = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        this.fechaFin = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
        this.cantSelects = 4;
        this.lstEmpresaEmite = [];
        this.lstEmpresaRecibe = [];
        this.lstEmpresaEmiteAux = [];
        this.lstEmpresaRecibeAux = [];
        this.lstItems = new Array(this.cantSelects).fill(null);
        this.defaultItem = new Array(this.cantSelects).fill({ id: 0, texto: 'Seleccionar' });
        this.lstTipo = [
            { id: 0, texto: 'Todos' },
            { id: 1, texto: 'Ingreso' },
            { id: 2, texto: 'Engreso' },
            { id: 3, texto: 'Diario' },
        ];
        this.empresaEmite = null;
        this.empresaRecibe = null;
        this.tipo = null;
        this.classBar = 'containerLateralBar';
        this.classBtn = 'containerBtnImg';
        this.idEmpresa = 0;
    }
    PolizasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coreContainer.openModal(2);
        // this.fnObtenerLstPolizas();
        this.catalogoService.obtenerEmpresasContabilidad().subscribe(function (resp) {
            console.log('obtenerEmpresasContabilidad', resp);
            _this.lstItems[3] = new Array();
            if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                for (var _i = 0, _a = resp.current; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var opt = new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */]();
                    opt.id = item.llave;
                    opt.texto = item.valor;
                    _this.lstItems[3].push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                }
                if (_this.lstItems[3].length > 0) {
                    _this.defaultItem[3] = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), _this.lstItems[3][0]);
                }
            }
        }, function (error) {
            console.log('Error obtenerEmpresasContabilidad', error);
        });
    };
    PolizasComponent.prototype.fnHideBar = function () {
        if (this.classBar.indexOf('closed') !== -1) {
            this.classBar = 'containerLateralBar';
            this.classBtn = 'containerBtnImg';
        }
        else {
            this.classBar = 'containerLateralBar closed';
            this.classBtn = 'containerBtnImg rotated';
        }
    };
    PolizasComponent.prototype.fnFiltar = function () {
        var _this = this;
        this.coreContainer.openModal(2);
        var lstAux = [];
        var lstAux1 = [];
        console.log(this.tipo, this.empresaEmite, this.empresaRecibe);
        for (var _i = 0, _a = this.lstPolizasAux; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.fechaDate.getTime() >= this.fechaInicio.getTime() && item.fechaDate.getTime() <= this.fechaFin.getTime()) {
                console.log('Encontró coincidencia entre fechas', item);
                lstAux.push(Object.assign({}, item));
            }
        }
        if (this.tipo !== null && this.tipo.texto !== 'Seleccionar') {
            if (this.tipo.id > 0) {
                for (var _b = 0, lstAux_1 = lstAux; _b < lstAux_1.length; _b++) {
                    var item = lstAux_1[_b];
                    if (item.tipo === this.tipo.id) {
                        console.log('Encontró coincidencia tipo', item);
                        lstAux1.push(Object.assign({}, item));
                    }
                }
                lstAux = Object.assign([], lstAux1);
                lstAux1 = [];
            }
        }
        if (this.empresaEmite !== null && this.empresaEmite.texto !== 'Seleccionar') {
            for (var _c = 0, lstAux_2 = lstAux; _c < lstAux_2.length; _c++) {
                var item = lstAux_2[_c];
                if (this.empresaEmite.texto === item.empresa) {
                    console.log('Encontró coincidencia empresa emite', item);
                    lstAux1.push(Object.assign({}, item));
                }
            }
            lstAux = Object.assign([], lstAux1);
            lstAux1 = [];
        }
        if (this.empresaRecibe !== null && this.empresaRecibe.texto !== 'Seleccionar') {
            for (var _d = 0, lstAux_3 = lstAux; _d < lstAux_3.length; _d++) {
                var item = lstAux_3[_d];
                if (this.empresaRecibe.texto === item.empresaRecibe) {
                    console.log('Encontró coincidencia empresa recibe', item);
                    lstAux1.push(Object.assign({}, item));
                }
            }
            lstAux = Object.assign([], lstAux1);
            lstAux1 = [];
        }
        this.lstPolizas = Object.assign([], lstAux);
        setTimeout(function () {
            _this.coreContainer.closeModal(2);
        }, 1500);
    };
    PolizasComponent.prototype.fnAgregarPoliza = function () {
        console.log('fnAgregarPoliza');
        this.router.navigate(['/protected/contabilidad/polizas/agregar']);
    };
    PolizasComponent.prototype.fnEditarPoliza = function (id) {
        console.log('fnEditarPoliza', id);
        this.router.navigate(['/protected/contabilidad/polizas/editar', id]);
    };
    PolizasComponent.prototype.fnOutPutItem = function ($event, opc) {
        console.log('fnOutPutItem', $event, opc);
        switch (opc) {
            case 0:
                this.lstItems[1] = new Array();
                this.lstItems[2] = new Array();
                this.empresaEmite = null;
                this.empresaRecibe = null;
                this.tipo = ($event.texto !== '' && $event.texto !== 'Selecionar') ? Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), $event) : null;
                switch ($event.id) {
                    case 0: break;
                    case 1:
                        this.lstItems[1] = Object.assign(this.lstEmpresaEmite);
                        this.lstItems[2] = Object.assign(this.lstEmpresaRecibe);
                        break;
                    case 2:
                        this.lstItems[1] = Object.assign(this.lstEmpresaRecibe);
                        this.lstItems[2] = Object.assign(this.lstEmpresaEmite);
                        break;
                    case 3:
                        this.lstItems[1] = Object.assign(this.lstEmpresaEmite);
                        this.lstItems[2] = Object.assign(this.lstEmpresaRecibe);
                        break;
                }
                break;
            case 1:
                this.empresaEmite = ($event.texto !== '' && $event.texto !== 'Selecionar') ? Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), $event) : null;
                break;
            case 2:
                this.empresaRecibe = ($event.texto !== '' && $event.texto !== 'Selecionar') ? Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), $event) : null;
                break;
            case 3:
                this.idEmpresa = $event.id;
                this.fnObtenerLstPolizasEmpresa();
                break;
        }
    };
    PolizasComponent.prototype.fnGetFechaImpl = function ($event, opc) {
        // console.log('fnGetFechaImpl', $event, typeof $event, opc);
    };
    PolizasComponent.prototype.fnObtenerLstPolizasEmpresa = function () {
        var _this = this;
        this.lstItems[0] = Object.assign(new Array(), this.lstTipo);
        this.lstPolizas.length = 0;
        this.lstPolizasAux.length = 0;
        this.lstEmpresaEmite = [];
        this.lstEmpresaRecibe = [];
        this.lstEmpresaEmiteAux = [];
        this.lstEmpresaRecibeAux = [];
        this.catalogoService.obtenerLstPolizasEmpresa(this.idEmpresa).subscribe(function (resLst) {
            console.log('obtenerLstPolizas', resLst.current);
            if (resLst.current !== undefined && resLst.current !== null && resLst.current.length > 0) {
                var x = 0;
                var lstAuxE = [];
                var lstAuxR = [];
                for (var _i = 0, _a = resLst.current; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var fechaAux = item.fecha.split('-');
                    item.fechaDate = new Date(Number(fechaAux[0]), Number(fechaAux[1]) - 1, Number(fechaAux[2]));
                    item.fechaView = fechaAux[0] + '/' + fechaAux[1] + '/' + fechaAux[2];
                    item.imgSrc = (item.aplicada) ? './assets/Images/IngresosEgresosEditar.svg' : './assets/Images/IngresosEgresosEditar.svg';
                    item.imgClass = (item.aplicada) ? 'containerBodyTableBodyRowColImg imgDisabled' : 'containerBodyTableBodyRowColImg';
                    item.tipoTexto = (item.tipo === 1) ? 'Ingreso' : (item.tipo === 2) ? 'Egreso' : 'Diario';
                    item.empresa = (item.tipo === 1) ? item.empresa.alias : (item.tipo === 2) ? item.proveedor.nombre : 'N/A';
                    item.empresaRecibe = (item.tipo === 1) ? item.cliente.nombre : (item.tipo === 2) ? item.empresa.alias : 'N/A';
                    lstAuxE.push(item.empresa);
                    lstAuxR.push(item.empresaRecibe);
                    _this.lstPolizas.push(Object.assign({}, item));
                    _this.lstPolizasAux.push(Object.assign({}, item));
                    x++;
                }
                _this.lstEmpresaEmiteAux = lstAuxE.filter(function (elem, index, self) {
                    return index === self.indexOf(elem);
                });
                _this.lstEmpresaRecibeAux = lstAuxR.filter(function (elem, index, self) {
                    return index === self.indexOf(elem);
                });
                x = 0;
                for (var _b = 0, _c = _this.lstEmpresaEmiteAux; _b < _c.length; _b++) {
                    var ee = _c[_b];
                    var opt = {
                        id: 0,
                        texto: ee
                    };
                    _this.lstEmpresaEmite.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                    x++;
                }
                x = 0;
                for (var _d = 0, _e = _this.lstEmpresaRecibeAux; _d < _e.length; _d++) {
                    var ee = _e[_d];
                    var opt = {
                        id: 0,
                        texto: ee
                    };
                    _this.lstEmpresaRecibe.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__class_option_class__["a" /* OptionClass */](), opt));
                    x++;
                }
            }
            setTimeout(function () {
                _this.coreContainer.closeModal(2);
            }, 1500);
        }, function (error) {
            console.log('Error obtenerLstPolizas', error);
            setTimeout(function () {
                _this.coreContainer.closeModal(2);
            }, 1500);
        });
    };
    PolizasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-polizas',
            template: __webpack_require__("./src/app/components/contabilidad/polizas/polizas.component.html"),
            styles: [__webpack_require__("./src/app/components/contabilidad/polizas/polizas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_catalogo_catalogo_service__["a" /* CatalogoService */],
            __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], PolizasComponent);
    return PolizasComponent;
}());



/***/ }),

/***/ "./src/app/components/contabilidad/polizas/polizas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolizasModule", function() { return PolizasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__polizas_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/polizas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__polizas_routing_module__ = __webpack_require__("./src/app/components/contabilidad/polizas/polizas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agregar_poliza_agregar_poliza_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/agregar-poliza/agregar-poliza.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editar_poliza_editar_poliza_component__ = __webpack_require__("./src/app/components/contabilidad/polizas/editar-poliza/editar-poliza.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PolizasModule = /** @class */ (function () {
    function PolizasModule() {
    }
    PolizasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__polizas_routing_module__["a" /* PolizasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__polizas_component__["a" /* PolizasComponent */],
                __WEBPACK_IMPORTED_MODULE_10__agregar_poliza_agregar_poliza_component__["a" /* AgregarPolizaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__editar_poliza_editar_poliza_component__["a" /* EditarPolizaComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_catalogo_catalogo_service__["a" /* CatalogoService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__polizas_component__["a" /* PolizasComponent */]
            ]
        })
    ], PolizasModule);
    return PolizasModule;
}());



/***/ })

});
//# sourceMappingURL=polizas.module.chunk.js.map