const formulario = document.getElementById("formulario");
form.addEventListener("submit", test);

let montoTotal = 0;
let montoPersona = 0;
let cantidadPersonas = 0;

function test(e) {
    e.preventDefault();

    let formulario = document.getElementById("formulario");
    let nombre = formulario.elements["Nombre"].value;
    let monto = parseInt(formulario.elements["Monto"].value);
    
    if (nombre && monto) {
        calcularMontos(monto);
        let montos = document.getElementById("montos");
        let nuevoMonto = document.createElement("p");
        nuevoMonto.appendChild(document.createTextNode(nombre + ": $" + amount));
        montos.appendChild(newMonto);

        document.getElementById("monto-total").remove();
        let nuevoMontoTotal = document.createElement("p");
        nuevoMontoTotal.setAttribute("id", "monto-total");
        nuevoMontoTotal.appendChild(document.createTextNode("Monto total: $" + montoTotal));
        document.getElementById("monto-persona").appendChild(nuevoMontoTotal);

        document.getElementById("monto").remove();
        let monto = document.createElement("p");
        monto.setAttribute("id", "monto");
        monto.appendChild(document.createTextNode("Cada uno debe pagar: $" + montoPersona));
        document.getElementById("monto-persona").appendChild(monto);
    };
}

function calcularMontos(monto) {
    cantidadPersonas += 1;
    montoTotal +=monto;
    montoPersona = montoTotal / cantidadPersonas;
}
