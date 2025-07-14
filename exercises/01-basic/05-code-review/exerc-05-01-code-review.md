# Ejercicio: Revisar el código con GitHub Copilot Chat

## Objetivo

Aprender a utilizar la funcionalidad de code review de GitHub Copilot Chat para mejorar el código existente

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- VS Code con extensión de GitHub Copilot

## Estimación de tiempo

Tiempo estimado en complentarse: 5-10 minutos

## Instrucciones de Refactoring General

Se hará uso del fichero de código "refactoring-orig.js"

Se trata de una pequeña funcionalidad de validación de condiciones de usuarios (mayoría de edad, email correcto y tipo de suscripción) y se ha implementado con malas prácticas (mal estructurado, código con duplicados, etc.)

Nota: Se encuentra implementado en JavaScript

La idea es aplicar técnicas de refactoring: nombres descriptivos, extracción de funciones, eliminación de duplicados, reemplazo de estructuras condicionales, etc.

### Caso de uso 1

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "refactoring-orig.js" y abrir el fichero

Seleccionar todo el código y copiar

Cerrar la pestaña del fichero

#### Paso 2: Abrir el panel de Copilot Chat

Pulsar sobre el icono de Copilot Chat desde la interfaz del editor o bien pulsar sobre atajo de teclado

#### Paso 3: Ejecutar el GitHub Copilot Chat

Revisar los aspectos de la configuración del Chat

Pegar el código anterior y añadir "Revisar el código" al final del código

Ejecutar

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 4: Verificar la revisión

Revisar la respuesta

Cerramos la ventana de Chat

Esta sería una primera manera de conseguirlo

### Caso de uso 2

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "refactoring-orig.js" y abrir el fichero

#### Paso 2: Abrir el panel de Copilot Chat

Pulsar sobre el icono de Copilot Chat desde la interfaz del editor o bien pulsar sobre atajo de teclado

#### Paso 3: Verificar el contexto

Verificar que el contexto incluye el fichero con el que se quiere trabajar (modo adjunto)

#### Paso 4: Ejecutar el GitHub Copilot Chat

Ejecutar el prompt de:

```bash
Revisar el código del fichero refactoring-orig.js
```

Nota: Todo dependerá del nivel de detalle que se quiera alcanzar en el prompt

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 4: Verificar la revisión

Revisar la respuesta

Cerramos la ventana de Chat

Esta sería una segunda manera de conseguirlo

### Caso de uso 3

#### Paso 1: Abrir el panel de Copilot Chat

Pulsar sobre el icono de Copilot Chat desde la interfaz del editor o bien pulsar sobre atajo de teclado

#### Paso 2: Verificar el contexto

Verificar que el contexto incluye al fichero con el que se quiere trabajar (modo observación)

#### Paso 3: Ejecutar el GitHub Copilot Chat

Ejecutar el prompt de:

```bash
Revisar el código del fichero refactoring-orig.js
```

Nota: Todo dependerá del nivel de detalle que se quiera alcanzar en el prompt

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 4: Verificar la explicación

Se mostrará el resultado en la ventana de Chat

Revisar

Cerramos la ventana de Chat

Esta sería una tercera manera de conseguirlo

### Caso de uso 4

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "refactoring-orig.js" y abrir el fichero

Seleccionar todo el código

#### Paso 2: Abrir el panel de Copilot Chat

Pulsar sobre el botón derecho del ratón y seleccionar "Copilot" -> "Review and Comment"

#### Paso 3: Verificar la revisión

Revisar la respuesta

Cerramos la ventana de Chat

Esta sería una cuarta manera de conseguirlo


## Desafio (Opcional)

N/A

## Solución

N/A

## Versionado

**Nota :** [SemVer](http://semver.org/) es usado para el versionado.

## Autor

* **knowmad mood**