//Lei dos Cossenos: a^2 = b^2 + c^2 - 2bc * cos(A)
let bLado = 3;
let cLado = 4;
let aAngulo = Math.PI / 6;

function leiDosCossenos(b, c, aA) {
    return Math.sqrt(b**2 + c**2 - 2*b*c*Math.cos(aA));
}

let aLado = leiDosCossenos(bLado, cLado, aAngulo);
console.log("O lado descoberto do triângulo pela Lei dos Cossenos é:",aLado);
