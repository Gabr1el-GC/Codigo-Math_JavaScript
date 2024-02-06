//Função Afim: f(x) = a*x + b. Obs.: O valores que x deve assumir devem ser inteiros.
let cA = 3;
let cB = 5;

let xMinimo = -2;
let xMaximo = 2;

function afim(x, a, b) {
    return a * x + b;
}

function calcularIntervaloAfim(xMin, xMax, a, b) {
    let resultados = []; //Declaração da variável com um array vazio.
  
    for (let x = xMin; x <= xMax; x++) { 
        /* Variável declarada x que assume o valor de xMinimo; 
        Enquanto x for menor ou igual a xMaximo, o código dentro de 'for'
        continuará sendo executado. E 'x++' incrementará um valor de x em 1.*/
        let y = afim(x, a, b); //Calcula a função afim com o valor de x incluído.
        resultados.push({ x, y }); //push() adiciona o resultado a um array, sendo a coordenada (x,y).
    }
  
    return resultados;
}

let valoresIntervalo = calcularIntervaloAfim(xMinimo, xMaximo, cA, cB);
console.log(valoresIntervalo);
