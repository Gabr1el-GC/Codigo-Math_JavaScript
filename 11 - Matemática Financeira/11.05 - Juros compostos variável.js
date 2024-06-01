//O tempo neste exemplo será em anos.
const capitalInicial = 1200;
const taxasDeJuros = [5, 8, 10, 12]; // Taxas de juros em percentagem.
const tempos = [2, 3, 5, 6];

function calcularJurosCompostosVariavel(c, taxaJuro, ts) {
    if (taxaJuro.length !== ts.length) {
        console.error('Os arrays de taxas de juros e tempos devem ter o mesmo comprimento!');
        return null;
    }

    const montantes = [];

    for (let i = 0; i < taxaJuro.length; i++) {
        const taxaDecimal = taxaJuro[i] / 100;
        const tempo = ts[i];

        const montante = c * Math.pow(1 + taxaDecimal, tempo);
        montantes.push(montante);
    }

    return montantes;
}

const montantes = calcularJurosCompostosVariavel(capitalInicial, taxasDeJuros, tempos);

console.log(`-> Capital Inicial: R$${capitalInicial.toFixed(2)}.`);
if (montantes !== null) {
    for (let i = 0; i < montantes.length; i++) {
        console.log(`Montante após ${tempos[i]} anos com taxa de juros de ${taxasDeJuros[i]}%: R$${montantes[i].toFixed(2)}`);
    }
}
