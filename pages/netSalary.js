import { label, numericInput, submitButton, form } from "../components/index.js"
import { replaceContent } from '../utils.js'
import { context } from "../context.js"
import quotesView from './quotes.js'
import notEnoughMoneyView from "./notEnoughMoney.js"

export default function netSalaryView() {
    const formElements = [
        label('salaryInPesos', "Ingrese su sueldo neto para poder abrir una cuenta: "),
        numericInput('salaryInPesos', 'salaryInPesos'),
        submitButton('Aceptar')
    ]
    const netSalaryForm = form(formElements, (formData) => {
        const salaryInPesos = parseInt(formData.salaryInPesos)
        if (isNaN(salaryInPesos) || salaryInPesos < 246000) {
            replaceContent(notEnoughMoneyView());
        } else {
            context.salaryInPesos = salaryInPesos;
            replaceContent(quotesView());
        }
    })
    return [netSalaryForm]
}
