function criarNumeroComplexo(real, imaginario) {
    return {
        real: real,
        imaginario: imaginario
    };
}

function calcularModuloComplexo(complexo) {
    return Math.sqrt(complexo.real ** 2 + complexo.imaginario ** 2);
}

const numComplexo = criarNumeroComplexo(3, 3);
const modulo = calcularModuloComplexo(numComplexo);

console.log(`Número Complexo: (${numComplexo.real}) + (${numComplexo.imaginario})i`);
console.log("Módulo: ", modulo);
