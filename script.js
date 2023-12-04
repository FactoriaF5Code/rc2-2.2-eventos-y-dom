const button = document.querySelector("#button");
const fondoDeLaPantalla = document.querySelector("#background");

function colorAleatorio() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

function cambiarColorDelFondo() {
    let color = colorAleatorio();
    fondoDeLaPantalla.style = "background-color: #" + color;
}


button.onclick = cambiarColorDelFondo;