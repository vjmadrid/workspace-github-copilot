# Ejercicio: Usar GitHub Copilot Chat para crear test unitarios

## Objetivo

Aprender a utilizar la funcionalidad de creación de test unitarios del Copilot Chat

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- VS Code con extensión de GitHub Copilot

## Estimación de tiempo

Tiempo estimado en complentarse: 5-15 minutos

## Instrucciones

Se utilizará una descripción completa de lo que se quiere hacer incluyendo los test

```bash
Crea un programa JavaScript completo para construir una calculadora básica. Este programa debe tener múltiples funciones para realizar las tareas de: suma, resta, multiplicación y división. El programa debe solicitar la entrada del usuario, y proporcionando la salida por consola
```

Crea el código usando alguna de las estrategias que ya has visto:

* Crear el código a partir de un comentario
* Solicitud a GitHub Copilot Chat
* ...

Crear el fichero "calculadora.js"

Una vez tengamos el código aprenderemos a crear los test unitarios

Se pueden crear todos los test unitarios de un repositorio, un fichero o sobre un código determinado

### Caso de uso 1

Siguiendo alguna de las formas que hemos visto tenemos que hacer llegar el código del fichero "calculadora.js" al GitHub Copilot Chat

* Crear el código a partir de un comentario
* Solicitud a GitHub Copilot Chat
* Solicitud desde GitHub Copilot Chat InLine
* ...

#### Paso 1: Ejecutar el GitHub Copilot Chat

Revisar los aspectos de la configuración del Chat

Cargar el prompt:

```bash
"Generar test unitarios"
```

**Importante:** El nivel de detalle determinará la calidad de los test generados

Ejecutar

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 2: Verificar los test generados

Revisar

Cerramos la venta de Chat

Esta sería una primera manera de conseguirlo

### Caso de uso 2

Siguiendo alguna de las formas que hemos visto tenemos que hacer llegar el código del fichero "calculadora.js" al GitHub Copilot Chat

* Crear el código a partir de un comentario
* Solicitud a GitHub Copilot Chat
* Solicitud desde GitHub Copilot Chat InLine
* ...

#### Paso 1: Ejecutar el GitHub Copilot Chat

Ejecutar el prompt de:

```bash
/tests
```

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 2: Verificar los test generados

Ir tomando decisiones sobre las propuestas que realiza GitHub Copilot

Por ejemplo: elegir el framework de testing, la forma de instalarlo, etc.

Revisar

Cerramos la venta de Chat

Esta sería una segunda manera de conseguirlo

### Caso de uso 3

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "calculadora.js" y abrir el fichero

Seleccionar todo el código

Pulsar sobre el botón derecho "Copilot" -> "Generate Test"

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 2: Verificar los test generados

Revisar

Cerramos la venta de Chat

Esta sería una primera manera de conseguirlo

### Forma 4

Seleccionar el código o bien utilizar un código recien generado por el Chat

#### Paso 1: Ejecutar el GitHub Copilot Chat

Ejecutar el prompt de:

```bash
Generate unit test for the method
```

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 2: Verificar los test generados

Revisar

Cerramos la venta de Chat

Esta sería una tercera manera de conseguirlo




## Consejos

- Verificar si la sugerencia propuesta se parece a la propuesta en el apartado de solución
- Verificar cómo de robusto es el código de salida (falta de gestión de errores)
- Pensar sobre las indicaciones o contexto que se puede añadir para escribir código más preciso

## Desafio (Opcional)

N/A

## Solución

N/A

## Versionado

**Nota :** [SemVer](http://semver.org/) es usado para el versionado.

## Autor

* **knowmad mood**