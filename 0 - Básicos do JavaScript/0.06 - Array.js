var MateriaisEscolares = ["Lápis", "Caneta", "Caderno", "Borracha"];
console.log("Os materiais escolares são: " + MateriaisEscolares);

var arrayNumeros = [5, 7, 12]; // Serve para reduzir os elementos de um array a um único valor. 
var somaValoresNoArray = arrayNumeros.reduce((acumulador, valorAtual) => //Soma os valores da array.
    acumulador + valorAtual, 0
);
console.log(somaValoresNoArray);
