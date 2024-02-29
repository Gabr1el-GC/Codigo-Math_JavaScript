const antigoValor = 110;
const novoValor = 250;

function variacaoPercentual(av, nv){
    const variacaoAbsoluta = nv - av;
    const resultadoVariacaoPercentual = (variacaoAbsoluta / Math.abs(av)) * 100;
    return resultadoVariacaoPercentual;
}

const vp = variacaoPercentual(antigoValor, novoValor);

console.log("Valor antigo:",antigoValor);
console.log("Valor novo:",novoValor);
console.log("Variação percentual:",vp.toFixed(2),"%");
