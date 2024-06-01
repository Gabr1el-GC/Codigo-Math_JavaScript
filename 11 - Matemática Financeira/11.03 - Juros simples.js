const capitalInicial = 1000;
const taxaDeJuros = 15;
const periodoDeTempo = 6;
const unidadeDeTempo = 'meses';

function calcularJurosSimples(c, tax, tempo, uT) {
    const taxaDecimal = tax / 100; // Conversão da taxa para decimal.

    let totalTempo;
    if (uT === 'dias') {
        totalTempo = tempo;
    } else if (uT === 'meses') {
        totalTempo = tempo * 30; // Assumindo 30 dias por mês.
    } else if (uT === 'anos') {
        totalTempo = tempo * 365; // Assumindo 365 dias por ano.
    } else {
        console.log('Unidade de tempo inválida. Use "dias", "meses" ou "anos".');
        return null;
    }
    
    const juros = (c * taxaDecimal * tempo) / 100;
    const montante = c + juros;
  
    return {
        juros: juros,
        montante: montante,
    };
}
 
const resultadoJurosSimples = calcularJurosSimples(
    capitalInicial,
    taxaDeJuros,
    periodoDeTempo,
    unidadeDeTempo
);

console.log(`Capital Inicial: R$${capitalInicial.toFixed(2)}`);
console.log(`Taxa de Juros: ${taxaDeJuros}%`);
console.log(`Período de Tempo: ${periodoDeTempo} ${unidadeDeTempo}`);
console.log(`Juros Simples: R$${resultadoJurosSimples.juros.toFixed(2)}`);
console.log(`Montante: R$${resultadoJurosSimples.montante.toFixed(2)}`);
