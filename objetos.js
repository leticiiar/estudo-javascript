// Como criar um objeto no JS?

let pessoa = {
  nome: "Leticia",
  idade: 26,
};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.idade);

// Como adicionar um par de chave-valor?

pessoa.altura = 1.77;

console.log(pessoa);

// Como remover uma chave-valor?

delete pessoa.altura;

console.log(pessoa);

// Como percorrer um objeto?

for (let chave in pessoa) {
  console.log(chave);
}
