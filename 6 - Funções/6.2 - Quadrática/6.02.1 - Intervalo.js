//Função Quadrática: f(x) = a*x^2 + b*x + c. Obs.: O valores que x assume devem ser inteiros.
let cA = 1;
let cB = 3;
let cC = 5;

let xMinimo = -1;
let xMaximo = 3;

function quadratica(x, a, b, c) {
    return a * x * x + b * x + c;
}

function calcularIntervaloQuadratica(xMin, xMax, a, b, c) {
    let resultados = [];
  
    for (let x = xMin; x <= xMax; x++) {
      let y = quadratica(x, a, b, c);
      resultados.push({ x, y });
    }

    return resultados;
}

let valoresIntervalo = calcularIntervaloQuadratica(xMinimo, xMaximo, cA, cB, cC);
console.log(valoresIntervalo);
