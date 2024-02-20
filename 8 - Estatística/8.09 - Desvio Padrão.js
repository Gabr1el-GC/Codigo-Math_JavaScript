const conjuntoDeDados = [2, 5, 1, 6, 9, 7, 3, 11];

function calcularMedia(d) {
    if (d.length === 0) {
      console.error("O conjunto de dados não pode estar vazio!");
      return null;
    }
  
    const soma = d.reduce((acumulador, valor) => acumulador + valor, 0);
    return soma / d.length;
}

function calcularVariancia(d) {
    if (d.length === 0) {
        console.error("O conjunto de dados não pode estar vazio!");
        return null;
    }
  
    const media = calcularMedia(d);
  
    const somaQuadradosDasDiferencas = d.reduce((acumulador, valor) => {
      const diferenca = valor - media;
      return acumulador + diferenca * diferenca;
    }, 0);
  
    return somaQuadradosDasDiferencas / d.length;
}

function calcularDesvioPadrao(d) {
    if (d.length === 0) {
      console.error("O conjunto de dados não pode estar vazio!");
      return null;
    }
  
    const variancia = calcularVariancia(d);
    const desvioPadrao = Math.sqrt(variancia);
  
    return desvioPadrao;
}

const desvioPadrao = calcularDesvioPadrao(conjuntoDeDados);  
console.log("Desvio Padrão:",desvioPadrao);
