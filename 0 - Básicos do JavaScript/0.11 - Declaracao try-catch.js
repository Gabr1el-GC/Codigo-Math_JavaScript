/* Serve para exceções e garante que o código continue sendo executado. 
Serve principalmente para erros.*/
try {
    const valor = 100;
    valor.naoExiste(); //Método não existe

  } catch (erro) { //Executa quando um erro acontece.
    console.error("Ocorreu um erro:", erro);
  }
  
  console.log("Este código continua sendo executado mesmo sem o erro.");
  