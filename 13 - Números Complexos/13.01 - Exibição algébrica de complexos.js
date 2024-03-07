function criarNumeroComplexo(real, imaginario) { // Função para criar um número complexo (retorna um objeto).
    return {
        real: real,
        imaginario: imaginario
    };
}

const numComplexo1 = criarNumeroComplexo(1, 3);
const numComplexo2 = criarNumeroComplexo(-2, 5);

function mostrarNumeroComplexo(complexo) { // Exibe um número complexo em forma algébrica.
    return `(${complexo.real}) + (${complexo.imaginario})i`;
}

console.log(mostrarNumeroComplexo(numComplexo1));
console.log(mostrarNumeroComplexo(numComplexo2));
