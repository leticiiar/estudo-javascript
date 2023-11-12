// LAÇOS CONDICIONAIS

const input = require("readline-sync");

const numeroSorteado = 5;

let numero = Number(input.question("Qual numero voce escolhe?")); // essa função sempre lê como texto

while (numero !== numeroSorteado) {
  console.log("Você errou o numero, tente novamente:");
  numero = Number(input.question("Qual numero voce escolhe?"));
}

console.log("Você acertou! Parabéns!");
