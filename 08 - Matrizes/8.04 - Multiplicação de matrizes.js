const matrizA = [
    [1, 3],
    [5, 7],
    [9, 11]
];
  
const matrizB = [
    [2, 4, 6],
    [8, 10, 12]
];

function multiplicacaoDeMatrizes(m1, m2) {
    const resultado = [];
  
    if (m1[0].length !== m2.length) { // Verifica se as matrizes podem ser multiplicadas.
        console.error(`O nº de colunas de uma matriz é diferente do nº de linhas da outra matriz!`);
        return resultado;
    }

    for (let i = 0; i < m1.length; i++) { // Inicializando a matriz de resultado
        resultado[i] = [];
    }
  
    for (let i = 0; i < m1.length; i++) { // Realizando a multiplicação das matrizes
        for (let j = 0; j < m2[0].length; j++) {
            let soma = 0;
            for (let k = 0; k < m2.length; k++) {
                soma += m1[i][k] * m2[k][j];
            }
        resultado[i][j] = soma;
      }
    }

    return resultado;
}

const matrizResultadoMultiplicacao = multiplicacaoDeMatrizes(matrizA, matrizB);
console.log("Resultado da multiplicação das matrizes:",matrizResultadoMultiplicacao);
