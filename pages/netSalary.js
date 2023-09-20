import { label, numericInput, submitButton, form } from "../components/index.js"
import { replaceContent } from '../utils.js'
import { context } from "../context.js"
import quotesView from './quotes.js'

export default function netSalaryView() {
    const formElements = [
        label('salaryInPesos', "Ingrese su sueldo neto para poder abrir una cuenta: "),
        numericInput('salaryInPesos', 'salaryInPesos'),
        submitButton('Aceptar')
    ]
    const netSalaryForm = form(formElements, async (formData) => {
        const salaryInPesos = parseInt(formData.salaryInPesos)
        if (isNaN(salaryInPesos) || salaryInPesos < 246000) {
            Swal.fire({
                title: `El monto ingresado debe ser mayor a $246.000`,
                icon: 'warning',
                confirmButton: 'OK'
            })
        } else {
            context.salaryInPesos = salaryInPesos;
            try {
                const components = await quotesView();
                replaceContent(components);
            } catch (error) {
                console.error('An error ocurred', error);
            }
        }
    })
    return [netSalaryForm]
}
