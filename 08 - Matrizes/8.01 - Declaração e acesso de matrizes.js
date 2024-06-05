const matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/* Cada array dentro dos colchetes de'matrizExemplo' é uma linha da matriz. 
Observe que é uma matriz 3x3. */
console.log(matrizExemplo);

const acessoMatriz = matrizExemplo[0][2];
/* Observe que a primeira linha e coluna sempre começam na posição 0.
Neste exemplo, queremos o elemento a_13 que é 3, ou seja, pelo JavaScript é a_02. */
console.log(acessoMatriz);
