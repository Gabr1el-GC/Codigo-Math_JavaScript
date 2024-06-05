let conjuntoDeDados = [
    "Lápis", 
    "Caneta", 
    "Caderno", 
    "Borracha", 
    "Livro", 
    "Livro", 
    "Lápis", 
    "Lápis", 
    "Caneta", 
    "Lápis", 
    "Caneta", 
    "Borracha"
];

function calcularFrequencia(dados) {
    let frequencia = {}; // Objeto para armazenar as frequências.
  
    
    for (let i = 0; i < dados.length; i++) { // Iteração sobre o array.
        let elemento = dados[i]; // É obtido o elemento atual.
  
        if (frequencia[elemento]) { // Se o elemento já estiver no objeto de frequências, incrementa a contagem.
            frequencia[elemento]++;
        } else { // Senão, é adicionado com contagem 1.
            frequencia[elemento] = 1;
        }
    }

    return frequencia;
}

let frequencias = calcularFrequencia(conjuntoDeDados);

console.log("-> Frequência dos elementos no conjunto de dados <-");

for (let elemento in frequencias) {
    console.log(`${elemento}: ${frequencias[elemento]} vezes.`);
}
