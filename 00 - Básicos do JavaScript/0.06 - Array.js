var MateriaisEscolares = ["Lápis", "Caneta", "Caderno", "Borracha"];
console.log("Os materiais escolares são: " + MateriaisEscolares);
 
MateriaisEscolares.forEach(function(MaterialEscolar) { // Itera cada elemento do array.
    console.log("->", MaterialEscolar); 
});

var arrayNumeros = [7, 12, 15, 9]; // Serve para reduzir os elementos de um array a um único valor.
var somaValoresNoArray = arrayNumeros.reduce((acumulador, valorAtual) => //Soma os valores da array.
    acumulador + valorAtual, 0 //Neste caso deve-se iniciar o valor acumulado como 1.
);
var unirValoresEmArray = console.log(`${arrayNumeros.join('º, ')}º.`); // Une todos os elementos de um array em uma única string.
var ordenarValoresdoArray = arrayNumeros.sort((a, b) => //Ordena os valores do array.
    a - b // Neste caso, estamos ordenando em ordem crescente.
);

console.log(somaValoresNoArray);
console.log(ordenarValoresdoArray);
