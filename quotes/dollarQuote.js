export default class DollarQuote {
    constructor(dollarType, equivalentInPesos) {
        this.dollarType = dollarType;
        this.equivalentInPesos = equivalentInPesos;
    }

    amountOfPesosToBuy(amountOfDollars) {
        return amountOfDollars * this.equivalentInPesos
    }
}
