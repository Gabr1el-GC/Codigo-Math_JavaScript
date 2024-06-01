const conjuntoDeDados = [7, 8, 6, 8, 10, 6, 12];

function calcularMediaAritmetica(d) {
    if (d.length === 0) { 
      return 0;
    }

    let soma = d.reduce((total, valor) => total + valor, 0);   
    let media = soma / d.length;
  
    return media;
}

function calcularDesvioMedio(d) {
    if (d.length === 0) {
        console.error("O conjunto de dados não pode estar vazio!");
        return null;
    }
  
    const media = calcularMediaAritmetica(d);
  
    const desviosAbsolutos = d.map(valor => Math.abs(valor - media));
    const desvioMedio = calcularMediaAritmetica(desviosAbsolutos);
  
    return desvioMedio;
}

const desvioMedio = calcularDesvioMedio(conjuntoDeDados);
console.log("Desvio Médio:", desvioMedio);
