import { label, numericInput, select, submitButton, form, table, addRow } from "../components/index.js"
import { DOLLAR_TYPES, dollarQuotes } from '../quotes/index.js'
import { addContent, replaceContent } from '../utils.js'
import invalidAmountView from "./invalidAmount.js"

export function recoverQuotes() {
    const tableHtmlString = localStorage.getItem('quotes');

    if(tableHtmlString) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = tableHtmlString;

        const restoredTable = tempDiv.querySelector('table');

        return restoredTable;
    }
}

export default function quotesView() {
    const formElements = [
        label('amountOfDollarsToBuy', "¿Cuántos dólares desea comprar?"),
        numericInput('amountOfDollarsToBuy', 'amountOfDollarsToBuy'),
        label('dollarType', "Elija cotización"),
        select('dollarType', 'dollarType', DOLLAR_TYPES),
        submitButton('Aceptar')
    ]
    
    const amountToExchangeForm = form(formElements, (formData, form) => {
        const amountOfDollarsToBuy = parseInt(formData.amountOfDollarsToBuy)
        const dollarType = formData.dollarType

        if (isNaN(amountOfDollarsToBuy) || amountOfDollarsToBuy < 0) {
            replaceContent(invalidAmountView());
        } else {
        const dollarQuote = dollarQuotes.find(dollarQuote => dollarQuote.dollarType === dollarType);
        if (!dollarQuote) console.log('La cotización seleccionada no es valida, por favor elija otra.')
        const amountOfPesos = dollarQuote.amountOfPesosToBuy(amountOfDollarsToBuy);

        let quotes = document.getElementById('quotes');

        if(!quotes && localStorage.length !== 0) {
            quotes = recoverQuotes()
            addContent(quotes);
        } else if (!quotes) {
            quotes = table('quotes', ['USD', 'Dollar Type','ARS']);
            addContent(quotes);
        }

        addRow(quotes, 'td', [amountOfDollarsToBuy, dollarType, amountOfPesos]);
        localStorage.setItem('quotes', quotes.outerHTML);
        }
        
        form.reset();
    })

    window.addEventListener('beforeunload', function() {
        localStorage.clear();
    })

    return [amountToExchangeForm]
}
