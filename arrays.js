// ARRAYS

// Como criar um array?

let arr = ["Leticia", 26, 1.65, true];

console.log(arr);

// Como acessar os elementos do array

console.log("Primeiro elemento", arr[0]);

// Como obter o tamanho do array?

console.log(arr.length);

console.clear();

// Percorrendo arrays

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.clear();

for (let elemento of arr) {
  // aqui vc percorre cada elemento
  console.log(elemento);
}

console.clear();

for (let variavel in arr) {
  // aqui vc percorre os índices do array
  console.log(variavel);
}
