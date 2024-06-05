// Declarando duas matrizes 2x2
const matrizA = [
    [1, 3],
    [5, 7]
];
  
const matrizB = [
    [2, 4],
    [6, 8]
];

function saoDeMesmaOrdem(m1, m2) {  // Verifica se o nº de linhas e colunas é o mesmo para as duas matrizes.
    return m1.length === m2.length && m1[0].length === m2[0].length;
}

// A ideia é receber duas matrizes como parâmetro e usar dois laços para percorrer cada elemento das matrizes.  
function adicaoDeMatrizes(m1, m2) {
    if (!saoDeMesmaOrdem(m1, m2)) {
        console.error("As matrizes não são de mesma ordem, logo não é possível fazer a adição!");
        return null;
    }

    const resultado = [];
    
    for (let i = 0; i < m1.length; i++) { // i: Índice das linhas
        const linhaDeResultado = [];
      
        for (let j = 0; j < m1[i].length; j++) { //j: índice das colunas
            linhaDeResultado.push(m1[i][j] + m2[i][j]);
        }
    
        resultado.push(linhaDeResultado);
    }
  
    return resultado;
}

function subtracaoDeMatrizes(m1, m2) {
    if (!saoDeMesmaOrdem(m1, m2)) {
        console.error("As matrizes não são de mesma ordem, logo não é possível fazer a subtração!");
        return null;
    }

    const resultado = [];
    
    for (let i = 0; i < m1.length; i++) {
      const linhaDeResultado = [];
      
        for (let j = 0; j < m1[i].length; j++) {
            linhaDeResultado.push(m1[i][j] - m2[i][j]);
        }
      
        resultado.push(linhaDeResultado);
    }
  
    return resultado;
}

const resultadoAdicao = adicaoDeMatrizes(matrizA, matrizB);
const resultadoSubtracao = subtracaoDeMatrizes(matrizB, matrizA);
console.log("Resultado da adição das matrizes:",resultadoAdicao);
console.log("Resultado da subtração das matrizes:",resultadoSubtracao);
