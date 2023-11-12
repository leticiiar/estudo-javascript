// Laços numericos = FOR

const input = require("readline-sync");

// O Problema
// const nota1 = Number(input.question("Informe a nota 1: "));
// const nota2 = Number(input.question("Informe a nota 2: "));
// const nota3 = Number(input.question("Informe a nota 3: "));

// Acumulador

let acumulador = 0;

acumulador += 10;
acumulador += 2;

acumulador++;

console.log(acumulador);

console.clear();

// Estrutura For

for (let i = 10; i <= 12; i++) {
  console.log("Repetição", i);
}

for (let i = 12; i > 8; i--) {
  console.log("Repetição", i);
}

console.clear();

// Resolvendo Problema inicial

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
  nota = Number(input.question(`Informe a nota ${i} do aluno: `));

  soma += nota;
}

console.log(`A media do aluno eh ${soma / 3}`);
