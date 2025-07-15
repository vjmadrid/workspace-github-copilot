# Ejercicio: Comentario a Código

## Objetivo

Aprender a utilizar la finalización de código basada en el texto expecífico proporcionado por el desarrollador como comentarios

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- VS Code con extensión de GitHub Copilot

## Estimación de tiempo

Tiempo estimado en complentarse: 10-20 minutos

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

Usar los comentarios con determinada estructura para ayudar con determinados desarrollos como pueden ser las expresiones regulares

Ejemplo 1: Expresion regular para extraer las letras mayúsculas de una cadena de texto

```bash
// Escribir una expresión regular
// - Input: "Hello World"
// - Output: ["H", "W"]
```

Ejemplo 2: Expresion regular para validar un email

```bash
// Expresión regular para validar un email
// - Debe comenzar con letras, números, puntos, guiones o guiones bajos
// - Debe contener un símbolo '@'
// - Debe contener un dominio con al menos un punto
// - El dominio debe tener al menos dos caracteres
```

> Importante: Este tipo de comentarios se suelen considerar otra técnica de prompting para GitHub Copilot, ya que permite a la IA entender mejor el contexto y generar código más preciso.

### Caso de uso 4

Usar los comentarios para refinar el código generado por GitHub Copilot

Escenarios de ejecución de este caso de uso:

* Establecer validaciones o condiciones sobre la entrada de datos dentro de las funciones generadas por GitHub Copilot
* Manejar errores de manera más efectiva
* Etc.

Para ello elegir la sección de código a refinar y escribir un comentario que explique lo que se espera

Por ejemplo, si se quiere validar que el array no esté vacío antes de calcular la media, se podría escribir un comentario como el siguiente:

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

### Caso de uso 5

Usar JSDoc para proporcionar información de tipo y documentación puede ser otra opción. Esta estrategia dependera del lenguaje de programación que se esté utilizando, ya que no todos los lenguajes soportan JSDoc de la misma manera.

```bash
// JSDoc para una función que filtra productos por categoría

/**
 * @typedef {Object} Product
 * @property {string} id - Unique product identifier
 * @property {string} name - Product name
 * @property {number} price - Product price
 * @property {string[]} categories - Product categories
 */

/**
 * Filters products by a specific category
 * @param {Product[]} products - Array of product objects
 * @param {string} category - Category to filter by
 * @returns {Product[]} Filtered product array
 */
```

## Consejos

- Utilizar comentarios claros y concisos que describan el problema o la tarea a realizar
- Utilizar un lenguaje natural
- Probar con diferentes tipos de prompts si no estamos contentos con el resultado
- Encontrar la forma de escribir comentarios de este tipo con la que nos sentimos más cómodos
- Dedicar tiempo a analizar y validar las sugerencias
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