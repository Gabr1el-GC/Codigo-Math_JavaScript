// Função modular deste exemplo: f(x) = |a*x + b|
let xMinimo = -10;
let xMaximo = 10;
let cA = 2;
let cB = 5;

function modular(x, a, b) {
    return Math.abs(a*x + b);
}

let valorMinimo = Infinity; //Garante que qualquer valor encontrado na função será menor do que o valor inicial, tornando o primeiro valor encontrado automaticamente o novo mínimo.
let pontoMinimo = null; //Valor nulo pois ainda não foi encontrado o ponto onde a função atinge um valor mínimo.0
let valorMaximo = -Infinity; //Análogo à 'valorMinimo'.
let pontoMaximo = null; //Análogo à 'pontoMinimo'.

for (let x = xMinimo; x <= xMaximo; x++) {
    let resultado = modular(x, cA, cB);

    if (resultado < valorMinimo) { // Verifica o valor mínimo.
      valorMinimo = resultado;
      pontoMinimo = x;
    }

    if (resultado > valorMaximo) { // Verifica o valor máximo.
      valorMaximo = resultado;
      pontoMaximo = x;
    }
}

console.log(`-> Valor mínimo da função: x = ${pontoMinimo}; f(x) = ${valorMinimo}`);
console.log(`-> Valor máximo da função: x = ${pontoMaximo}; f(x) = ${valorMaximo}`);
