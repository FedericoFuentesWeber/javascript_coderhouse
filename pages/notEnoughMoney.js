import { form, label, submitButton } from "../components/index.js";
import { replaceContent } from "../utils.js";
import netSalaryView from "./netSalary.js";

export default function notEnoughMoneyView() {
    const formElements = [
        label('invalidSalary', "La cantidad ingresada no es suficiente, el monto debe ser al menos $246.000."),
        submitButton('Aceptar')
    ]

    const notEnoughMoneyForm = form(formElements, (formData) => {
        replaceContent(netSalaryView());
    })
    return [notEnoughMoneyForm]
}