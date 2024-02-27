let notas = [7.5, 8.0, 8.3, 7.0];

function calcularMediaAritmetica(dados) {
    if (dados.length === 0) { // Verifica se o array de dados não está vazio
      return 0; // Se array for vazio, a média é 0.
    }

    let soma = dados.reduce((total, valor) => total + valor, 0);   
    let media = soma / dados.length;
  
    return media;
}

let mediaAritmetica = calcularMediaAritmetica(notas);
console.log(`A média das notas é ${mediaAritmetica}`);
