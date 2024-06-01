const nomePessoa = "Fulano";

function bemVindo(nome) { //Temos 'bemVindo' o nome da função e 'nome' sendo parâmetro.
    return "Seja bem-vindo, "+nome+"!"; //'return' é usado para citar o valor que deverá ser retornado quando a função é chamada.
}
//Observação: é possível 
const saudacao = bemVindo(nomePessoa); //Variável que chama a função com o valor de 'nomePessoa'.

console.log(saudacao);
