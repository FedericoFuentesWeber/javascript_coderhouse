class Cotizacion {
    constructor(nombre, valorActual) {
        this.nombre = nombre;
        this.valorActual = valorActual;
    }

    calcularCotizacion(dineroACambiar) {
        var conversión = dineroACambiar / this.valorActual;
        return conversión.toFixed(3);
    }
}

const dolarBlue = new Cotizacion("Blue", 760);
const dolarOficial = new Cotizacion("Oficial", 365);
const dolarMep = new Cotizacion("Mep", 700);
const dolarTurista = new Cotizacion("Turista", 657);

var cotizacionesDeDolares = [dolarBlue, dolarOficial, dolarMep, dolarTurista];

function encontrarElemento(nombre, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].nombre === nombre) {
            return array[i];
        }
    }
    return null;
}

function mostrarCotizacionesPorPantalla(dolar, dinero) {
    contenedor.innerHTML = "";

    let div = document.createElement("div");
    div.innerHTML = `
            <p>Cotización: ${dolar.nombre}</p>
            <b>&nbsp;$${dolar.calcularCotizacion(dinero)}</b>
        `;

    contenedor.append(div);
}

let sueldo = parseInt(prompt("Ingrese su sueldo neto. Debe ser como mínimo $246.000"));

if(sueldo < 246000) {
    alert("Sueldo insuficiente, debe ser mayor a $246.000 para abrír una cuenta.");
} else {
    alert("Felicitaciones, pudo abrír una cuenta.");

    let cantidadParaCambiar = parseInt(prompt("Cuanto dinero desea cambiar a dolares?"));   
    let cotización = prompt("Elija la cotización que desea conocer: Blue, Oficial, Mep, Turista.");

    for(let cantidadDeCotizaciones=1; cantidadDeCotizaciones<=10; cantidadDeCotizaciones++){
        var dolar = encontrarElemento(cotización, cotizacionesDeDolares);

        mostrarCotizacionesPorPantalla(dolar, cantidadParaCambiar);

        setTimeout(function () {
            cantidadParaCambiar = parseInt(prompt("Cuanto dinero desea cambiar a dolares?"));
            cotización = prompt("Elija la cotización que desea conocer: Blue, Oficial, Mep, Turista.");
            if (cantidadParaCambiar > 0) {
                mostrarCotizacionesPorPantalla(dolar, cantidadParaCambiar);
            } else {
                alert("Introduzca un valor mayor a cero.");
                cantidadParaCambiar = parseInt(prompt("Cuanto dinero desea cambiar a dolares?"));
                cotización = prompt("Elija la cotización que desea conocer: Blue, Oficial, Mep, Turista.");
                mostrarCotizacionesPorPantalla(dolar, cantidadParaCambiar);
            }
        }, 2000);
    }
}
