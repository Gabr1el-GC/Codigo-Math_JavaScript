const valorInicial1 = 150;
const valorInicial2 = 200;
const percentualAumento = 10;
const percentualDesconto = 15;

function aumento(i, percentual) {
    const aumento = (percentual / 100) * i;
    const valorNovo = i + aumento;
    return valorNovo;
}

function desconto(i, percentual) {
    const desconto = (percentual / 100) * i;
    const valorNovo = i - desconto;
    return valorNovo;
}

const valorAumento = aumento(valorInicial1, percentualAumento);
const valorDesconto = desconto(valorInicial2, percentualDesconto);

console.log(`Novo valor de ${valorInicial1} depois do aumento de ${percentualAumento}%: ${valorAumento}`);
console.log(`Novo valor de ${valorInicial2} depois do desconto de ${percentualDesconto}%: ${valorDesconto}`);
