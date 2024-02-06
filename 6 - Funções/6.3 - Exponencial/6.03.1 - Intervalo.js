// Função exponencial: f(x) = a^x. Obs.: O valores que x assume devem ser inteiros.
let cA = 1/3;

let xMinimo = -1;
let xMaximo = 2;

function exponencial(x, a) {
    return Math.pow(a, x);
}

function calcularIntervaloExponencial(xMin, xMax, a) {
    let resultados = [];
  
    for (let x = xMin; x <= xMax; x++) {
      let y = exponencial(x, a);
      resultados.push({ x, y });
    }
  
    return resultados;
}

let valoresIntervalo = calcularIntervaloExponencial(xMinimo, xMaximo, cA);
console.log(valoresIntervalo);
