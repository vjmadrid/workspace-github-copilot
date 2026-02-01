# Documentación del Proyecto: Calculadora Básica en JavaScript

## Descripción General

Este proyecto consiste en una calculadora básica implementada en JavaScript. El programa permite realizar operaciones matemáticas simples: suma, resta, multiplicación y división. El usuario interactúa con la calculadora a través de la consola, ingresando los números y la operación deseada. El resultado se muestra también en la consola.

El stack tecnológico utilizado incluye Node.js para la ejecución del código JavaScript en un entorno de consola.

## Características Principales

- **Operaciones soportadas:**
	- Suma
	- Resta
	- Multiplicación
	- División
- **Interfaz de usuario:**
	- Solicita la entrada del usuario mediante la consola.
	- Muestra el resultado de la operación en la consola.
- **Validaciones:**
	- Verifica que las entradas sean números válidos.
	- Controla la división por cero.

## Estructura del Código

El programa está compuesto por las siguientes funciones principales:

- `sumar(a, b)`: Devuelve la suma de `a` y `b`.
- `restar(a, b)`: Devuelve la resta de `a` y `b`.
- `multiplicar(a, b)`: Devuelve el producto de `a` y `b`.
- `dividir(a, b)`: Devuelve el cociente de `a` y `b`. Si `b` es cero, muestra un mensaje de error.
- `main()`: Función principal que gestiona la interacción con el usuario y llama a las funciones correspondientes.

## Ejemplo de Uso

Al ejecutar el programa, el usuario verá mensajes en la consola solicitando:

1. El primer número.
2. El operador (+, -, *, /).
3. El segundo número.

Luego, el programa mostrará el resultado de la operación.

```
Ingrese el primer número: 8
Ingrese la operación (+, -, *, /): *
Ingrese el segundo número: 5
Resultado: 40
```

## Ejemplo de Código

```javascript
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
		console.log('Error: No se puede dividir por cero.');
		return null;
	}
	return a / b;
}

function main() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.question('Ingrese el primer número: ', (num1) => {
		rl.question('Ingrese la operación (+, -, *, /): ', (operador) => {
			rl.question('Ingrese el segundo número: ', (num2) => {
				const a = parseFloat(num1);
				const b = parseFloat(num2);
				let resultado;
				switch (operador) {
					case '+':
						resultado = sumar(a, b);
						break;
					case '-':
						resultado = restar(a, b);
						break;
					case '*':
						resultado = multiplicar(a, b);
						break;
					case '/':
						resultado = dividir(a, b);
						break;
					default:
						console.log('Operador no válido.');
						rl.close();
						return;
				}
				if (resultado !== null) {
					console.log('Resultado:', resultado);
				}
				rl.close();
			});
		});
	});
}

main();
```