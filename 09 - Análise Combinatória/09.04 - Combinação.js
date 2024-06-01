const totalDeElementos = 5;
const elementosEscolhidos = 3;

function calcularFatorial(n) {
    let fatorial = 1;
  
    for (let i = 1; i <= n; i++) {
      fatorial *= i;
    }
  
    return fatorial;
}
  
function calcularCombinacao(t, e) {
    if (t < e) {
        console.error("O valor do total de elementos deve ser maior ou igual a elementos escolhidos para a combinação.");
        return null;
    }
  
    return calcularFatorial(t) / (calcularFatorial(e) * calcularFatorial(t - e));
}

const combinacao = calcularCombinacao(totalDeElementos, elementosEscolhidos);
console.log(`O número de combinações de ${totalDeElementos} elementos escolhendo ${elementosEscolhidos} é: ${combinacao}`);
