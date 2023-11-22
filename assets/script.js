var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Crea una classe astratta Tasse
var Tasse = /** @class */ (function () {
    function Tasse(_redditoAnnuoLordo) {
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
    }
    return Tasse;
}());
//Crea classe Lavoratore
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(_redditoAnnuoLordo) {
        var _this = _super.call(this, _redditoAnnuoLordo) || this;
        _this.redditoAnnuoLordo = _redditoAnnuoLordo;
        return _this;
    }
    Lavoratore.prototype.getCodRedd = function () {
        return this.redditoAnnuoLordo * 0.78;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return this.redditoAnnuoLordo * 0.5;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return this.redditoAnnuoLordo * 0.25;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.getCodRedd() - this.getTasseIrpef() - this.getTasseInps();
    };
    return Lavoratore;
}(Tasse));
//Crea sotto-classe Professionista
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(redditoAnnuoLordo) {
        return _super.call(this, redditoAnnuoLordo) || this;
    }
    Professionista.prototype.getTasseIrpef = function () {
        return this.getCodRedd() * 0.5;
    };
    Professionista.prototype.getTasseInps = function () {
        return this.getCodRedd() * 0.25;
    };
    return Professionista;
}(Lavoratore));
var professionista = new Professionista(30000);
console.log(professionista);
console.log("Utile Tasse Professionista: ", professionista.getCodRedd(), "€");
console.log("Tasse Irpef: ", professionista.getTasseIrpef(), "€");
console.log("Tasse Inps: ", professionista.getTasseInps(), "€");
console.log("Reddito Netto Professionista: ", professionista.getRedditoAnnuoNetto(), "€");
//Crea sotto-classe Artigiano
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(redditoAnnuoLordo) {
        return _super.call(this, redditoAnnuoLordo) || this;
    }
    Artigiano.prototype.getTasseIrpef = function () {
        return this.getCodRedd() * 0.15;
    };
    Artigiano.prototype.getTasseInps = function () {
        return this.getCodRedd() * 0.15;
    };
    return Artigiano;
}(Lavoratore));
var artigiano = new Artigiano(25000);
console.log(artigiano);
console.log("Utile Tasse Artigiano: ", artigiano.getCodRedd(), "€");
console.log("Tasse Irpef: ", artigiano.getTasseIrpef(), "€");
console.log("Tasse Inps: ", artigiano.getTasseInps(), "€");
console.log("Reddito Netto Artigiano: ", artigiano.getRedditoAnnuoNetto(), "€");
//Crea sotto-classe Commerciante
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(redditoAnnuoLordo) {
        return _super.call(this, redditoAnnuoLordo) || this;
    }
    Commerciante.prototype.getTasseIrpef = function () {
        return this.getCodRedd() * 0.15;
    };
    Commerciante.prototype.getTasseInps = function () {
        return this.getCodRedd() * 0.35;
    };
    return Commerciante;
}(Lavoratore));
var commerciante = new Commerciante(28000);
console.log(commerciante);
console.log("Utile Tasse Commerciante: ", commerciante.getCodRedd(), "€");
console.log("Tasse Irpef: ", commerciante.getTasseIrpef(), "€");
console.log("Tasse Inps: ", commerciante.getTasseInps(), "€");
console.log("Reddito Netto Commerciante: ", commerciante.getRedditoAnnuoNetto(), "€");
