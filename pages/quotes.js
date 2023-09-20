import { label, numericInput, select, submitButton, form, table, addRow } from "../components/index.js"
import { DOLLAR_TYPES } from '../quotes/dollarTypes.js'
import { addContent } from '../utils.js'

async function fetchDollarQuotes() {
    try {
        const response = await fetch('dollarQuotes.json');
        if(!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation.', error);
        return [];
    }
}

export function recoverQuotes() {
    const tableHtmlString = localStorage.getItem('quotes');

    if(tableHtmlString) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = tableHtmlString;

        const restoredTable = tempDiv.querySelector('table');

        return restoredTable;
    }
}

export default async function quotesView() {

    return new Promise(async (resolve, reject) => {
        try {
            const dollarQuotes = await fetchDollarQuotes();

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
                    Swal.fire({
                        title: `El monto a comprar no es valido, ingrese un número mayor a cero`,
                        icon: 'warning',
                        confirmButton: 'OK'
                    })
                } else {
                const dollarQuote = dollarQuotes.find(dollarQuote => dollarQuote.dollarType === dollarType);
                if (!dollarQuote) {
                    Swal.fire({
                        title: `La cotización seleccionada no es valida, por favor elija otra`,
                        icon: 'warning',
                        confirmButton: 'OK'
                    })
                }
                const amountOfPesos = dollarQuote.equivalentInPesos * amountOfDollarsToBuy;
            
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
            });

            window.addEventListener('beforeunload', function() {
                localStorage.clear();
            });

            resolve([amountToExchangeForm]);

        } catch (error) {
            console.error('An error ocurred', error);
            reject(error);
        }
    });
}
