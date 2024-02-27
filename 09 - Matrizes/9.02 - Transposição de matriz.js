const matrizOriginal = [ //Matriz 2x3
    [1, 3, 5],
    [7, 9, 11]
];

/* 'map()' serve para criar um novo array, aplicando uma função a cada elemento do array, não 
modificando o array original, mas cria um novo array com os resultados da função aplicada a cada
elemento.
Neste caso, usa-se 'map()' para percorrer as colunas da matriz original, e vai criando novas
linhas para a matriz transposta.
'matrizOriginal[0]' começa no primeiro elemento da matriz e '(_, i)' tem como o espaço reservado
para o elemento atual da linha que não é usado e em seguida o índice. */
const matrizTransposta = matrizOriginal[0].map((_, i) =>  
    matrizOriginal.map(linha => linha[i]) /* Para cada linha da matriz original,
    é acessado o elemento de índice 'i'. Sendo assim, map() percorre todas as linhas,
    e vai criando uma nova matriz transposta. */
);

console.log("Matriz original:",matrizOriginal);
console.log("Matriz transposta:",matrizTransposta); //Agora é matriz 3x2.
