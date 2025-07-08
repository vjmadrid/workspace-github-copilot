# Ejercicio: Comentario a Código

## Objetivo

Aprender a utilizar la finalización de código basada en el texto expecífico proporcionado por el desarrollador como comentarios

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- VS Code con extensión de GitHub Copilot

## Estimación de tiempo

Tiempo estimado en complentarse: 5-10 minutos

## Instrucciones

Propuesta de comentarios

Comentario 1

Escribir un único comentario que explique el problema

```bash
// Una función que calcule la resta de dos números
```

Comentario 2

Escribir los comentarios necesarios para crea una función

Por ejemplo: calcular la media entre los números de un array

```bash
// Function name: calculateAverage
// Function arguments: numbers (array)
// Return type of the function: number
```

Nota: Ejemplo de JavaScript

### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "example.js"

### Paso 2: Escribir el comentario "1"

Escribir el comentario y esperar la sugerencia

### Paso 3: Aceptar la sugerencia

Pulsar sobre Tab para aceptar la sugerencia y ver qué pasa

Revisar

Salvar el fichero

### Paso 4: Probar la sugerencia

Probar la funcion generada con diferentes conjuntos de números y verificar si esta bien

### Paso 5: Escribir el comentario "2"

Escribir el comentario y esperar la sugerencia

### Paso 6: Aceptar la sugerencia

Pulsar sobre Tab para aceptar la sugerencia y ver qué pasa

Revisar

Salvar el fichero

### Paso 7: Probar la sugerencia

Probar la funcion generada con diferentes conjuntos de números y verificar si esta bien

## Consejos

- Verificar si la sugerencia propuesta se parece a la propuesta en el apartado de solución
- Verificar cómo de robusto es el código de salida (falta de gestión de errores)
- Pensar sobre las indicaciones o contexto que se puede añadir para escribir código más preciso
- Pensar sobre la mejor forma de escribir comentarios para las definiciones de condiciones más complejas

## Desafio (Opcional)

- Realizar lo mismo para una función que calcule el valor máximo de un array

## Solución

Propuesta generada

```bash
function calculateAverage(numbers: number[]): number {
    // calculate the average of the array
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}
```

## Versionado

**Nota :** [SemVer](http://semver.org/) es usado para el versionado.

## Autor

* **knowmad mood**