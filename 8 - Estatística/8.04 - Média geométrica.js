const dados = [8, 5, 6, 7];

function calcularMediaGeometrica(d) {
    if (d.length === 0) {
        console.error("O conjunto de dados não pode estar vazio!");
        return null;
    }

    const produto = d.reduce((acumulador, valor) => acumulador * valor, 1); // Começa em 1 para que funcione corretamente.

    return Math.pow(produto, 1 / d.length);
}

const mediaGeometrica = calcularMediaGeometrica(dados);
console.log("Média geométrica:", mediaGeometrica);
