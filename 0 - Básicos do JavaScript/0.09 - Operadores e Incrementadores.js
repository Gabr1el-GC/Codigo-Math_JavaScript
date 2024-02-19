let valor1 = 2;
let valor2 = 4;
const comparacao1 = valor1 > 1; //Irá retornar 'true'
const comparacao2 = valor1 < 1; //Irá retornar 'false'
const comparacao3 = valor1 <= 2;
const comparacao4 = valor1 >= 1;
const comparacao5 = valor1 == valor2; /* Compara os valores. Se forem iguais, retorna 'true'.
Se forem diferentes, retorna 'false'. */
const comparacao6 = valor1 !== valor2; /* Inverso da anterior. Se iguais, 'false'.
Diferentes, 'true'. */
const comparacao7 = valor1 += valor2; // Incrementa o valor2 ao valor1, e depois atribui o resultado ao valor1.
const comparacao8 = valor2 -= valor1; // Subtrai o valor1 do valor2, e depois atribui o resultado ao valor2.
const ouLogico = comparacao1 || comparacao2;  // Tem o mesmo sentido de 'ou' lógico.

let incremento = valor1--; //Decrementa por 1.
let decremento = valor2++; //Incrementa por 1.

console.log(
    comparacao1,
    comparacao2,
    comparacao3,
    comparacao4,
    comparacao5,
    comparacao6,
    comparacao7,
    comparacao8,
    ouLogico,
    valor1, //Valor já incrementado
    valor2, //Valor já decrementado
)
