//Função logarítmica: f(x) = log_a (x). Obs.: O valores que x assume devem ser inteiros.
let baseA = 2;

let xMinimo = 1;
let xMaximo = 6;

function logaritmica(x, b) {
    return Math.log(x) / Math.log(b); //Fórmula para calcular logaritmos de qualquer base.
}

function calcularIntervaloLogaritmica(xMin, xMax, b){
    let resultados = [];

    for (let x = xMin; x <= xMax; x++) {
        let y = logaritmica(x, b);
        resultados.push({ x, y });
    }

    return resultados;
}

let valoresIntervalo = calcularIntervaloLogaritmica(xMinimo, xMaximo, baseA);
console.log(valoresIntervalo);
