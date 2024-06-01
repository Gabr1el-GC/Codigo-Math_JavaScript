const opcaoA = ['A1', 'A2', 'A3'];
const opcaoB = ['B1', 'B2'];
const opcaoC = ['C1', 'C2', 'C3', 'C4'];

function PFC(...conjuntos) {
    let totalDeResultados = 1;
  
    for (let x = 0; x < conjuntos.length; x++) {
        const conjunto = conjuntos[x];
        totalDeResultados *= conjunto.length;
    }

    return totalDeResultados;
}

const resultados = PFC(opcaoA, opcaoB, opcaoC);
console.log("Total de resultados possíveis:",resultados);
