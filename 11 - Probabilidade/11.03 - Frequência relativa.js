const conjuntoDeDados = [1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6];

function calcularFrequenciaRelativa(d) {
    const frequenciaRelativa = {};
  
    d.forEach((elemento) => { // Serve para contar a frequência de cada elemento.
        frequenciaRelativa[elemento] = (frequenciaRelativa[elemento] || 0) + 1;
    });
  
    for (const elemento in frequenciaRelativa) {  // Calcula a frequência relativa.
        frequenciaRelativa[elemento] /= d.length * 100;
    }
  
    return frequenciaRelativa;
}

const resultadoFR = calcularFrequenciaRelativa(conjuntoDeDados);
console.log("Resultado (frequência relativa):",resultadoFR);
