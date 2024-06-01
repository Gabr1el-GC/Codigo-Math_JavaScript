const dado = [1, 2, 3, 4, 5, 6]; //Exemplo de um array de um dado (6 lados)

function espacoAmostralDoisDados(d) {
    const espacoAmostral = [];
  
    for (const resultado1 of d) {
        for (const resultado2 of d) { // Cada par de resultados forma um elemento do espaço amostral.
            espacoAmostral.push([resultado1, resultado2]);
        }
    }
  
    return espacoAmostral;
}

const resultadoEspacoAmostral = espacoAmostralDoisDados(dado);
console.log("Espaço Amostral de dois dados:",resultadoEspacoAmostral);
