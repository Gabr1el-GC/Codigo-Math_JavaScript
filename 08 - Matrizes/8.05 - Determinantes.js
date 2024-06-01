// Por fins de praticidade, o código será para calcular uma matriz 2x2.
const matriz = [
    [2, 4],
    [6, 8]
];

function calcularDeterminante(m) {
    if (m.length !== 2 || m[0].length !== 2 || m[1].length !== 2) { // Verifica se a matriz é 2x2.
        console.error("A matriz não é 2x2, logo não é possível saber o determinante!");
        return null;
    }
  
    const determinante = m[0][0] * m[1][1] - m[0][1] * m[1][0]; // Calcula a determinante de uma 2x2.
  
    return determinante;
}

const resultadoDeterminante = calcularDeterminante(matriz);
console.log("A determinante da matriz",matriz,":");
console.log(resultadoDeterminante);
