const totalDeElementos = 5;
const elementosEscolhidos = 3;

function calcularFatorial(n) {
    let fatorial = 1;
  
    for (let i = 1; i <= n; i++) {
      fatorial *= i;
    }
  
    return fatorial;
}
  
function calcularPermutacao(t, e) {
    if (t < e) {
        console.error("O valor do total de elementos deve ser maior ou igual a elementos escolhidos para a permutação.");
        return null;
    }
  
    return calcularFatorial(t) / calcularFatorial(t - e);
}

const combinacao = calcularPermutacao(totalDeElementos, elementosEscolhidos);
console.log(`O número de permutações de ${totalDeElementos} elementos escolhendo ${elementosEscolhidos} é: ${combinacao}`);
