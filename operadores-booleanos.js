// Operadores booleanos

// Igualdade: == (===)
// Desigualdade: != (!==)
// Maior que: >
// Maior ou igual >=
// Menor que: <
// Menor ou igual: <=

const numero = 10;

console.log(numero == 10);
console.log(numero > 20);

console.log(numero == 10); //compara apenas o conteúdo
console.log(numero === "10"); //compara conteudo e tipo de variavel

console.log(10 !== "10");

console.clear();

// Conjunções Logicas

// AND &&

let idade = 26;
let cnh = true;

const possoDirigir = idade >= 18 && cnh === true;

console.log("Posso dirigir?", possoDirigir);

console.clear();

// OR ||

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70;

console.log("Voto Facultativo?", votoFacultativo);

console.clear();

// NOT !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso);
