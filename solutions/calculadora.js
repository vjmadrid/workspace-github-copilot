const readline = require('readline');

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return 'Error: No se puede dividir por cero';
  }
  return a / b;
}



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Calculadora básica');
console.log('Operaciones disponibles: suma, resta, multiplicacion, division');

rl.question('Introduce la operación: ', (operacion) => {
  rl.question('Introduce el primer número: ', (num1) => {
    rl.question('Introduce el segundo número: ', (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let resultado;

      if (operacion === 'suma') {
        resultado = sumar(a, b);
      } else if (operacion === 'resta') {
        resultado = restar(a, b);
      } else if (operacion === 'multiplicacion') {
        resultado = multiplicar(a, b);
      } else if (operacion === 'division') {
        resultado = dividir(a, b);
      } else {
        resultado = 'Operación no válida';
      }

      console.log('Resultado:', resultado);
      rl.close();
    });
  });
});