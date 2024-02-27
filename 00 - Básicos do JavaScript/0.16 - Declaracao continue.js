let valor = 0;
while (valor < 11) {
  valor++;

  if (valor % 2 === 0) { //Operador módulo (%)
    console.log("Nº par: ", valor);
    continue;
  } // Caso for par, pula para a próxima iteração 'if'.


  console.log("Nº ímpar: ", valor);
}
