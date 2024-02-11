//Lei dos Senos: a/sen(A) = b/sen(B) = c/sen(C). Queremos descobrir o valor do lado desconhecido.
let lado = 3;
let aAngulo = Math.PI / 2;
let bAngulo = Math.PI / 4;

function leiDosSenos(l, aA, aB) { 
    return (l / Math.sin(aA)) * Math.sin(aB);
}

let ladoDescoberto = leiDosSenos(lado, aAngulo, bAngulo);
console.log("O lado descoberto do triângulo pela Lei dos Senos é:",ladoDescoberto);
