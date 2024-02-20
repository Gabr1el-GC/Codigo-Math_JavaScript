const conjuntoDeDados = [2, 5, 1, 6, 9, 7, 3, 11];

function calcularMediana(d) {
    if (d.length === 0) {
        console.error("O conjunto de dados não pode estar vazio!");
        return null;
    }
  
    const dadosOrdenados = [...d].sort((a, b) => a - b); // Ordena os dados em ordem crescente.
  
    const tamanho = dadosOrdenados.length;
  
    if (tamanho % 2 === 0) { // Calcula a mediana
        const meio1 = dadosOrdenados[tamanho / 2 - 1];
        const meio2 = dadosOrdenados[tamanho / 2];
        return Math.floor((meio1 + meio2) / 2); // Caso o tamanho for par, a mediana é a média dos dois valores centrais.
    } else { // Se for ímpar, a mediana é o valor central.
        return dadosOrdenados[Math.floor(tamanho / 2)]; // Math.floor arredonda para um valor inteiro.
    }
}

const mediana = calcularMediana(conjuntoDeDados);
console.log("Mediana dos dados:", mediana);
