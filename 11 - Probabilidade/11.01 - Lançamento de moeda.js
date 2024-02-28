function lanceMoeda() {
    const resultado = Math.random();

    const lado = resultado < 0.5 ? 'Cara' : 'Coroa'; // Caso o resultado < 0.5, é considerado cara. Senão, coroa.
  
    return lado;
}

for (let i = 1; i <= 5; i++) { // Será simulado 5 lançamentos.
    const resultadoDoLancamento = lanceMoeda();
    console.log(`${i}º lançamento: ${resultadoDoLancamento}`);
}
