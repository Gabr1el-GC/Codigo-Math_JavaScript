let passo = 0.5; //Determina o quanto o valor de x aumenta a cada iteração do laço. No caso, x aumenta 0.5 a mais.

let xMinimo = -3;
let xMaximo = 2;

function exponencialE(x) {
    return Math.exp(x); //Potência de base e.
}

for (let x = xMinimo; x <= xMaximo; x += passo) {
    let resultado = exponencialE(x);
    console.log(`Para x = ${x}, o valor de e^x será: ${resultado}`);
}
