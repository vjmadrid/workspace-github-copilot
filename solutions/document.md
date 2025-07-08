# Documentación del Proyecto: Calculadora Básica en JavaScript

## Descripción
Este proyecto implementa una calculadora básica en JavaScript que puede realizar operaciones aritméticas fundamentales: suma, resta, multiplicación y división. La aplicación interactúa con el usuario a través de la consola, solicitando entradas y mostrando los resultados de las operaciones.

## Funcionalidades
- Suma de dos números
- Resta de dos números
- Multiplicación de dos números
- División de dos números
- Interfaz de consola para interacción con el usuario

## Estructura del Código

### `calculator.js`
Archivo principal que contiene todas las funciones de la calculadora y la lógica de interacción con el usuario.

```javascript
// Funciones para operaciones matemáticas básicas

// Función para sumar dos números
function suma(a, b) {
    return a + b;
}

// Función para restar dos números
function resta(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicacion(a, b) {
    return a * b;
}

// Función para dividir dos números
function division(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

// Función principal para manejar la calculadora
function calculadora() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Calculadora Básica");
    console.log("Operaciones disponibles: suma (+), resta (-), multiplicación (*), división (/)");

    readline.question("Ingrese el primer número: ", (num1) => {
        readline.question("Ingrese la operación (+, -, *, /): ", (operacion) => {
            readline.question("Ingrese el segundo número: ", (num2) => {
                try {
                    const numero1 = parseFloat(num1);
                    const numero2 = parseFloat(num2);
                    
                    if (isNaN(numero1) || isNaN(numero2)) {
                        console.log("Por favor, ingrese números válidos");
                    } else {
                        let resultado;
                        
                        switch (operacion) {
                            case "+":
                                resultado = suma(numero1, numero2);
                                break;
                            case "-":
                                resultado = resta(numero1, numero2);
                                break;
                            case "*":
                                resultado = multiplicacion(numero1, numero2);
                                break;
                            case "/":
                                resultado = division(numero1, numero2);
                                break;
                            default:
                                console.log("Operación no válida");
                                readline.close();
                                return;
                        }
                        
                        console.log(`El resultado de ${numero1} ${operacion} ${numero2} = ${resultado}`);
                    }
                } catch (error) {
                    console.log(`Error: ${error.message}`);
                }
                
                readline.close();
            });
        });
    });
}

// Ejecutar la calculadora
calculadora();
```

## Uso
1. Asegúrate de tener Node.js instalado en tu sistema
2. Guarda el código en un archivo llamado `calculator.js`
3. Abre una terminal en la ubicación del archivo
4. Ejecuta el programa con el comando:
   ```
   node calculator.js
   ```
5. Sigue las instrucciones en pantalla para realizar operaciones

## Ejemplo de Uso
```
Calculadora Básica
Operaciones disponibles: suma (+), resta (-), multiplicación (*), división (/)
Ingrese el primer número: 10
Ingrese la operación (+, -, *, /): +
Ingrese el segundo número: 5
El resultado de 10 + 5 = 15
```

## Posibles Mejoras
- Agregar más operaciones matemáticas (potencia, raíz cuadrada, etc.)
- Implementar una interfaz gráfica
- Permitir operaciones con múltiples números
- Agregar historial de operaciones
- Manejar errores de manera más detallada

## Licencia
Este proyecto está bajo la Licencia MIT.