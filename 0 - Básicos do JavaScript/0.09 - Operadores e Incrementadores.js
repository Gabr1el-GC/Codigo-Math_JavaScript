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

let incremento = valor1++; //Incrementa por 1.
let decremento = valor2--; //Decrementa por 1.

console.log(
    comparacao1,
    comparacao2,
    comparacao3,
    comparacao4,
    comparacao5,
    comparacao6,
    valor1, //Valor já incrementado
    valor2, //Valor já decrementado
)
