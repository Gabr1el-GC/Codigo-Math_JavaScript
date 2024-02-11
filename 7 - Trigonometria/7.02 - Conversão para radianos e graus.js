// Converte o valor de radianos para graus e graus para radianos.
let rad = 3 * (Math.PI / 2);
let graus = 60;

let radianosParaGraus = rad * (180 / Math.PI);

let grausParaRadianos = graus * (Math.PI / 180);

console.log(`${rad} rad para graus: ${radianosParaGraus}°`);
console.log(`${graus}° para radianos: ${grausParaRadianos} rad`);
