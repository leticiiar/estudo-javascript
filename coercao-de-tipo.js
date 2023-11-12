// Coerção Explicita (manual)

const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number("12345"));
console.log(Number("123456.36"));
console.log(parseInt("45678.78"));
console.log(Boolean(0)); //só o 0 é falso

console.clear();

//Coerção Implicita (Automática)

console.log(10 + "1"); // junta os dois
console.log("10" - 1); //aqui ele entende que é numero e faz a operação de fato. Só na soma que ele junta
console.log(10 - "x"); //retorna o NaN not a number
