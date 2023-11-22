//Crea una classe astratta Tasse
abstract class Tasse {
    redditoAnnuoLordo: number;
    constructor(_redditoAnnuoLordo:number){
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
    }
    abstract getCodRedd():number;
    abstract getTasseIrpef():number;
    abstract getTasseInps():number;
}

//Crea classe Lavoratore
class Lavoratore extends Tasse{
    redditoAnnuoLordo: number;
    constructor(_redditoAnnuoLordo:number){
        super(_redditoAnnuoLordo)
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
    }
    getCodRedd(): number {
        return this.redditoAnnuoLordo *0.78
    }
    getTasseIrpef(): number {
        return this.redditoAnnuoLordo *0.05
    }
    getTasseInps(): number {
        return this.redditoAnnuoLordo *0.25
    }
    getRedditoAnnuoNetto():number{
        return this.getCodRedd() - this.getTasseIrpef() - this.getTasseInps()
    }
}

//Crea sotto-classe Professionista
class Professionista extends Lavoratore{
    constructor(redditoAnnuoLordo:number){
        super(redditoAnnuoLordo)
    }
    getTasseIrpef(): number {
        return this.getCodRedd() *0.05
    }
    getTasseInps(): number {
        return this.getCodRedd() *0.25
    }
}
let professionista = new Professionista(30000)
console.log(professionista)
console.log("Utile Tasse Professionista: ", professionista.getCodRedd(), "€")
console.log("Tasse Irpef: ", professionista.getTasseIrpef(), "€")
console.log("Tasse Inps: ", professionista.getTasseInps(), "€")
console.log("Reddito Netto Professionista: ", professionista.getRedditoAnnuoNetto(), "€")

//Crea sotto-classe Artigiano
class Artigiano extends Lavoratore{
    constructor(redditoAnnuoLordo:number){
        super(redditoAnnuoLordo)
    }
    getTasseIrpef(): number {
        return this.getCodRedd() *0.15
    }
    getTasseInps(): number {
        return this.getCodRedd() *0.15
    }
}
let artigiano = new Artigiano(25000)
console.log(artigiano)
console.log("Utile Tasse Artigiano: ", artigiano.getCodRedd(), "€")
console.log("Tasse Irpef: ", artigiano.getTasseIrpef(), "€")
console.log("Tasse Inps: ", artigiano.getTasseInps(), "€")
console.log("Reddito Netto Artigiano: ", artigiano.getRedditoAnnuoNetto(), "€")

//Crea sotto-classe Commerciante
class Commerciante extends Lavoratore{
    constructor(redditoAnnuoLordo:number){
        super(redditoAnnuoLordo)
    }
    getTasseIrpef(): number {
        return this.getCodRedd() *0.15
    }
    getTasseInps(): number {
        return this.getCodRedd() *0.35
    }
}
let commerciante = new Commerciante(28000)
console.log(commerciante)
console.log("Utile Tasse Commerciante: ", commerciante.getCodRedd(), "€")
console.log("Tasse Irpef: ", commerciante.getTasseIrpef(), "€")
console.log("Tasse Inps: ", commerciante.getTasseInps(), "€")
console.log("Reddito Netto Commerciante: ", commerciante.getRedditoAnnuoNetto(), "€")