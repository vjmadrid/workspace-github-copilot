# Ejercicio: Comentario a Código

## Objetivo

Aprender a utilizar la finalización de código basada en el texto expecífico proporcionado por el desarrollador como comentarios

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- VS Code con extensión de GitHub Copilot

## Estimación de tiempo

Tiempo estimado en complentarse: 5-15 minutos

## Instrucciones

Se establecerán varias propuestas de formas de crear comentario que sean utiles para que GitHub Copilot pueda generar el código correspondiente

**Importante:** Cada tipo de lenguaje de programación tiene su propia forma de escribir comentarios, por lo que es importante que el comentario se adapte al lenguaje de programación que se está utilizando

### Caso de uso 1

Escribir un único comentario que explique el problema y proporcione todos los detalles necesarios para que GitHub Copilot pueda generar el código

```bash
// Una función que calcule la resta de dos números
```

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "example.js"

#### Paso 2: Escribir el comentario

Escribir el comentario y esperar la sugerencia

#### Paso 3: Aceptar la sugerencia

Pulsar sobre Tab para aceptar la sugerencia y ver qué pasa

Revisar

Guardar el fichero

#### Paso 4: Probar la sugerencia

Probar la funcion generada con diferentes conjuntos de números y verificar si esta bien

### Caso de uso 2

Escribir un comentario siguiendo una determinada estructura que permita a GitHub Copilot entender mejor lo que se espera

Por ejemplo: calcular la media entre los números de un array

```bash
// Function name: calculateAverage
// Function arguments: numbers (array)
// Return type of the function: number
```

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "example.js"

#### Paso 2: Escribir el comentario

Escribir el comentario y esperar la sugerencia

#### Paso 3: Aceptar la sugerencia

Pulsar sobre Tab para aceptar la sugerencia y ver qué pasa

Revisar

Guardar el fichero

### Paso 5: Probar la sugerencia

Probar la funcion generada con diferentes conjuntos de números y verificar si esta bien

### Caso de uso 3

Usar los comentarios para refinar el código generado por GitHub Copilot

Uno de los usos más comunes de este caso de uso es establecer validaciones o condiciones sobre la entrada de datos dentro de las funciones generadas por GitHub Copilot

Para ello elegir la sección de código a refinar y escribir un comentario que explique lo que se espera

```bash
// Validar que el array no esté vacío antes de calcular la media
```

Se debería de llegar a algo como lo siguiente:

```bash
// Validar que el array no esté vacío antes de calcular la media
if (numbers.length === 0) {
    throw new Error('El array está vacío');
}
```


## Consejos

- Verificar si la sugerencia propuesta se parece a la propuesta en el apartado de solución
- Verificar cómo de robusto es el código de salida (falta de gestión de errores)
- Pensar sobre las indicaciones o contexto que se puede añadir para escribir código más preciso
- Pensar sobre la mejor forma de escribir comentarios para las definiciones de condiciones más complejas

## Desafio (Opcional)

- Realizar lo mismo para una función que calcule el valor máximo de un array

## Solución

Fichero en el directorio /solutions

## Versionado

**Nota :** [SemVer](http://semver.org/) es usado para el versionado.

## Autor

* **knowmad mood**