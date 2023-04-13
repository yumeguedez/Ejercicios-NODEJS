const calculadora = require("./calculadora");

const a = 20;
const b = 12;

const resultadoSuma = calculadora.suma(a, b);
const resultadoMultiplicacion = calculadora.multiplicacion(a, b);

console.log(`La Suma de ${a} y ${b} es: ${resultadoSuma}`);

console.log(`La Multiplicacion de ${a} y ${b} es: ${resultadoMultiplicacion}`);
