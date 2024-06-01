const conjuntoDeDados = [2, 2, 3, 3, 4, 5, 5, 5, 6, 6];

function calcularModa(d) {
    if (d.length === 0) {
        console.error("O conjunto de dados não pode estar vazio!");
        return null;
    }

    const frequencia = {}; // Objeto que conta a frequência de cada valor.
    for (const valor of d) {
        frequencia[valor] = (frequencia[valor] || 0) + 1;
    }

    let moda = null;
    let maxFrequencia = 0;
  
    for (const valor in frequencia) { // Serve para encontrar valor com a maior frequência.
        if (frequencia[valor] > maxFrequencia) {
            moda = valor;
            maxFrequencia = frequencia[valor];
        }
    }

    return moda;
}

const moda = calcularModa(conjuntoDeDados);
console.log("Moda do conjunto de dados:",moda);
