const dolarBlue = 574;
const dolarOficial = 291;
const dolarMep = 552;

const calcular = (dinero, valorDolar) => dinero * valorDolar;

let sueldo = parseInt(prompt("Ingrese su sueldo neto."));

if(sueldo < 246000) {
    alert("Sueldo insuficiente, debe ser mayor a $246.000 para abrír una cuenta.");
} else {
    alert("Felicitaciones, pudo abrír una cuenta.");
    let cantidadParaCambiar = parseInt(prompt("Cuanto dinero desea cambiar a dolares?"));

    
    let cotización = prompt("Elija la cotización que desea conocer: Blue, Oficial, Mep");
    
    for(let cantidadDeCotizaciones = 1; cantidadDeCotizaciones<=5; cantidadDeCotizaciones++) {
        switch(cotización) {
            case "Blue":
                alert(`Su cotización es de ${calcular(cantidadParaCambiar, dolarBlue)}`);
                break;
            case "Oficial":
                alert(`Su cotización es de ${calcular(cantidadParaCambiar, dolarOficial)}`);
                break;
            case "Mep":
                alert(`Su cotización es de ${calcular(cantidadParaCambiar, dolarMep)}`);
                break;
            default:
                alert("Seleccione una de las cotizaciones antes mencionadas");
                break;
        }
        cotización = prompt("Elija la cotización que desea conocer: Blue, Oficial, Mep");     
    }
    
    alert("Ya llegó al límite de cotizaciones diarias, vuelva mañana.")
}
