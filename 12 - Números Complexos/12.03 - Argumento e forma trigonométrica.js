function criarNumeroComplexo(real, imaginario) {
    return {
        real: real,
        imaginario: imaginario
    };
}

function calcularModulo(complexo) {
    return Math.sqrt(complexo.real ** 2 + complexo.imaginario ** 2);
}

function calcularArgumento(complexo) {
    return Math.atan2(complexo.imaginario, complexo.real);
    /* atan2 é uma função trigonométrica que retorna a arcotangente do quociente de seus argumentos, 
    fornecendo o sinal correto para cada quadrante. */
}

function exibirFormaPolar(complexo) {
    const modulo = calcularModulo(complexo);
    let argumento = calcularArgumento(complexo);
    argumento = (argumento * 180) / Math.PI;

    return {
        modulo: modulo,
        argumento: argumento
    };
}

const numComplexo = criarNumeroComplexo(3, 3);
const formaTrigonometrica = exibirFormaPolar(numComplexo);

console.log(`Número Complexo: (${numComplexo.real}) + (${numComplexo.imaginario})i`);
console.log("Módulo: ", formaTrigonometrica.modulo.toFixed(2));
console.log(`Argumento: ${formaTrigonometrica.argumento.toFixed(2)}°`);
console.log(
    `Forma Trigonométrica: ${formaTrigonometrica.modulo.toFixed(2)} * (cos(${formaTrigonometrica.argumento.toFixed(2)}°) + i * sin(${formaTrigonometrica.argumento.toFixed(2)}°))`
);
