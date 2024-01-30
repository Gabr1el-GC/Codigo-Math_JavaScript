const DiaDaSemana = 6;
/* Se a variável tiver o mesmo valor do rótulo do caso, é mostrado 
o texto no console do 'case' e a operação encerra. Senão atender nenhum, 
o case default é executado e a operação encerra. */
switch (DiaDaSemana) {
  case 1: 
    console.log("É domingo.");
    break;
  case 2:
    console.log("É segunda-feira.");
    break;
  case 3:
    console.log("É terça-feira.");
    break;
  case 4:
    console.log("É quarta-feira.");
    break;
  case 5:
    console.log("É quinta-feira.");
    break;
  case 6:
    console.log("É sexta-feira.");
    break;
  case 7:
    console.log("É sábado.");
    break;
  default:
    console.log("O dia é inválido...");
}
