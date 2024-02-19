const conjuntoDeDados = [5, 10, 15, 20, 25, 21, 22, 18, 26, 16];

function calcularAmplitude(d) {
    if (d.length === 0) {
      console.error("O conjunto de dados não pode estar vazio!");
      return null;
    }
    //'...d' passa cada elemento do array 'd' como argumento separado para as funções.
    const maiorValor = Math.max(...d); //Função que retorna o máximo.
    const menorValor = Math.min(...d); //Função que retorna o mínimo.
  
    return maiorValor - menorValor;
}

const amplitude = calcularAmplitude(conjuntoDeDados);
console.log("Amplitude dos dados apresentados:",amplitude);
