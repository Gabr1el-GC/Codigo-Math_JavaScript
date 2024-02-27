let num1 = 108;
let num2 = 90;

function buscarMDC(n1, n2) { //Esta função é o algoritmo de Euclides para descobrir o MDC.
    while (n2 !== 0) {
        let i = n2;
        n2 = n1 % n2;
        n1 = i;
        /* 'i' é um valor temporário que admite os valores de n1 e n2 de
        forma que continuará iterando enquanto n2 não for 0. Cada vez que itera, 
        o valor n1 ficará igual ao de n2. Sendo assim, qunado n2
        for 0, o MDC será o valor final de n1.*/
    }
    return n1;
}

const MDC = buscarMDC(num1, num2);

console.log(`O Máximo Divisor Comum de ${num1} e ${num2} é ${MDC}.`);
