// const calculadora = require("./calculadora");

// const a = 20;
// const b = 12;

// const resultadoSuma = calculadora.suma(a, b);
// const resultadoMultiplicacion = calculadora.multiplicacion(a, b);

// console.log(`La Suma de ${a} y ${b} es: ${resultadoSuma}`);

// console.log(`La Multiplicacion de ${a} y ${b} es: ${resultadoMultiplicacion}`);

const { multiplicacion } = require("./calculadora");
const division = require("./operaciones/division");
const resta = require("./operaciones/resta");
const suma = require("./operaciones/suma");

const a = 10;
const b = 5;

const resultadoSuma = suma(a, b);
const resultadoResta = resta(a, b);
const resultadoMultiplicacion = multiplicacion(a, b);
const resultadoDivision = division(a, b);

console.log(`La Suma de ${a} y ${b} es: ${resultadoSuma}`);
console.log(`La Resta de ${a} y ${b} es: ${resultadoResta}`);
console.log(`La Multiplicacion de ${a} y ${b} es: ${resultadoMultiplicacion}`);
console.log(`La Division de ${a} y ${b} es: ${resultadoDivision}`);
