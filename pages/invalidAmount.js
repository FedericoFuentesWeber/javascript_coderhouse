import { form, label, submitButton } from "../components/index.js";
import { replaceContent } from "../utils.js";
import quotesView from "./quotes.js";

export default function invalidAmountView() {
    const formElements = [
        label('invalidAmount', "El monto a comprar no es valido, ingrese un número mayor a cero."),
        submitButton('Aceptar')
    ]

    const invalidAmountForm = form(formElements, (formData) => {
        replaceContent(quotesView());
    })
    return [invalidAmountForm]
}