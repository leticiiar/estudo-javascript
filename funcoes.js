// FUNÇÕES

//Definição da função
function saudacao() {
  console.log("Ola, seja bem vindo ao curso de JavaScript!");
}

saudacao();

console.clear();

// Como enviar parametros para as funções

function saudacao(nome, curso = "JavaScript") {
  console.log(`Ola, ${nome}! Seja bem vinda ao curso de ${curso}!`);
}

saudacao("Leticia");

console.clear();

// Retorno da função

function soma(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = soma(10, 20);

console.log(resultado);

console.clear();

function maiorDoQue50(numero) {
  if (numero > 50) {
    return true;
  }

  return false;
}
