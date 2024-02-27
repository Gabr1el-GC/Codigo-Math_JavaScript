//Função modular: f(x) = |a*x + b|. Obs.: O valores que x assume devem ser inteiros
let cA = 2;
let cB = 5;

let xMinimo = -10;
let xMaximo = 10;

function modular(x, a, b) {
    return Math.abs(a * x + b);
}

function calcularIntervaloModular(xMin, xMax, a, b) {
    let resultados = [];
  
    for (let x = xMin; x <= xMax; x++) {
        let y = modular(x, a, b);
        resultados.push({ x, y });
    }

    return resultados;
}

let valoresIntervalo = calcularIntervaloModular(xMinimo, xMaximo, cA, cB);
console.log(valoresIntervalo);
