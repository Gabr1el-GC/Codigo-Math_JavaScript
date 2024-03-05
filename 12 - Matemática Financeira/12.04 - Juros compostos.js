const capitalInicial = 1250.50;
const taxaDeJuros = 20;
const periodoDeTempo = 8;
const unidadeDeTempo = 'meses';

function calcularJurosCompostos(c, tax, tempo, uT) {
    const taxaDecimal = tax / 100; // Conversão da taxa para decimal.

    let totalTempo;
    if (uT === 'dias') {
        totalTempo = tempo;
    } else if (uT === 'meses') {
        totalTempo = tempo; // Não é necessário multiplicar por 30.
    } else if (uT === 'anos') {
        totalTempo = tempo * 12;
    } else {
        console.log('Unidade de tempo inválida. Use "dias", "meses" ou "anos".');
        return null;
    }

    const montante = c * Math.pow((1 + taxaDecimal), totalTempo);
    const juros = montante - c;

    return {
        juros: juros,
        montante: montante,
    };
}

const resultadoJurosCompostos = calcularJurosCompostos(
    capitalInicial,
    taxaDeJuros,
    periodoDeTempo,
    unidadeDeTempo
);

console.log(`Capital Inicial: R$${capitalInicial.toFixed(2)}`);
console.log(`Taxa de Juros: ${taxaDeJuros}%`);
console.log(`Período de Tempo: ${periodoDeTempo} ${unidadeDeTempo}`);
console.log(`Juros Compostos: R$${resultadoJurosCompostos.juros.toFixed(2)}`);
console.log(`Montante: R$${resultadoJurosCompostos.montante.toFixed(2)}`);

