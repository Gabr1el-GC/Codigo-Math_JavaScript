const notas = [4.5, 8.5, 8.0, 7.8];
const pesoNotas = [0.5, 0.3, 0.4, 0.3];

function calcularMediaPonderada(n, p) { // n: Nota; p: peso
    if (n.length !== p.length || n.length === 0) {
        console.error("Notas e pesos devem ter a mesma quantidade e não devem ser vazios!");
        return null;
    }
  
    const somaProdutos = n.reduce((acumulador, n, indice) => { // Soma dos produtos das notas pelos pesos.
        return acumulador + n * p[indice];
    }, 0); //O acumulador inicia com 0.

    const somaPesos = p.reduce((acumulador, p) => acumulador + p, 0);

    return somaProdutos / somaPesos; //Fórmula da média ponderada.
}

const mediaPonderada = calcularMediaPonderada(notas, pesoNotas);
console.log("Média ponderada:", mediaPonderada);
