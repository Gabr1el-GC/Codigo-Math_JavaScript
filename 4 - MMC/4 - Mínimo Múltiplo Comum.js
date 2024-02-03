let num1 = 80;
let num2 = 15;

function buscarMDC(n1, n2) { //Mesma função do tópico anterior.
    while (n2 !== 0) {
        let i = n2;
        n2 = n1 % n2;
        n1 = i;
    }
    return n1;
}

function buscarMMC(n1, n2) { //Usa-se a relação do MDC e MMC.
    return Math.abs(n1 * n2) / buscarMDC(n1, n2); //Math.abs retorna o valor absoluto, sem considerar o sinal.
}

const MMC = buscarMMC(num1, num2);

console.log(`O Mínimo Múltiplo Comum de ${num1} e ${num2} é ${MMC}.`);
