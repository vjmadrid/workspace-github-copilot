# Ejercicio: Usar GitHub Copilot Chat para explicar código

## Objetivo

Aprender a utilizar la funcionalidad de explicación de código del Copilot Chat

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- VS Code con extensión de GitHub Copilot

## Estimación de tiempo

Tiempo estimado en complentarse: 5-10 minutos

## Instrucciones

Se hará uso del fichero de código "refactoring-orig.js"

Se trata de una pequeña funcionalidad de validación de condiciones de usuarios (mayoría de edad, email correcto y tipo de suscripción) y se ha implementado con malas prácticas (mal estructurado, código con duplicados, etc.)

Nota: Se encuentra implementado en JavaScript

La idea es que el código tenga cierta dificultad para que se vea mucho más clara la funcionalidad de explicación de código

### Forma 1

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "refactoring-orig.js" y abrir el fichero

Seleccionar todo el código y copiarlo

Cerrar la pestaña del fichero

#### Paso 2: Abrir el panel de Copilot Chat

Pulsar sobre el icono de Copilot Chat desde la interfaz del editor o bien pulsar sobre atajo de teclado

#### Paso 3: Ejecutar el GitHub Copilot Chat

Revisar los aspectos de la configuración del Chat

Pegar el código anterior y añadir "Explicar el código" al final del código

Ejecutar

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 4: Verificar la explicación

Revisar

Cerramos la venta de Chat

Esta sería una primera manera de conseguirlo

### Forma 2

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "refactoring-orig.js" y abrir el fichero

Seleccionar todo el código

Pulsar botón derecho "Copilot" -> "Explain"

#### Paso 2: Verificar la explicacion

Se mostrara el resultado en la venta de Chat (normalmente se hara´en Inglés)

Revisar

Cerramos la venta de Chat

Esta sería una segunda manera de conseguirlo

### Forma 3

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "refactoring-orig.js"

Pulsar sobre el botón derecho "Copilot" -> "Add File to Chat"

#### Paso 2: Abrir el panel de Copilot Chat

Pulsar sobre el icono de Copilot Chat desde la interfaz del editor o bien pulsar sobre atajo de teclado

#### Paso 3: Verificar el contexto

Verificar que el contexto incluye el fichero con el que se quiere trabajar (modo adjunto)

#### Paso 4: Ejecutar el GitHub Copilot Chat

Ejecutar el prompt de:

```bash
Explicar el código del fichero refactoring-orig.js
```

Nota: Todo dependerá del nivel de detalle que se quiera alcanzar en el prompt

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 5: Verificar la explicación

Se mostrara el resultado en la venta de Chat

Revisar

Cerramos la venta de Chat

Esta sería una tercera manera de conseguirlo

### Forma 4

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "refactoring-orig.js" y abrir el fichero

#### Paso 2: Abrir el panel de Copilot Chat

Pulsar sobre el icono de Copilot Chat desde la interfaz del editor o bien pulsar sobre atajo de teclado

#### Paso 3: Verificar el contexto

Verificar que el contexto incluye el fichero con el que se quiere trabajar (modo observación)

#### Paso 4: Ejecutar el GitHub Copilot Chat

Ejecutar el prompt de:

```bash
Explicar el código del fichero refactoring-orig.js
```

Nota: Todo dependerá del nivel de detalle que se quiera alcanzar en el prompt

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 5: Verificar la explicación

Se mostrará el resultado en la ventana de Chat

Revisar

Cerramos la venta de Chat

Esta sería una cuarta manera de conseguirlo

### Forma 5

#### Paso 1: Abrir el panel de Copilot Chat

Pulsar sobre el icono de Copilot Chat desde la interfaz del editor o bien pulsar sobre atajo de teclado

#### Paso 2: Verificar el contexto

Añadir el fichero de código "refactoring-orig.js" al contexto del Chat

#### Paso 3: Ejecutar el GitHub Copilot Chat

Ejecutar el prompt de:

```bash
Explicar el código del fichero refactoring-orig.js
```

Nota: Todo dependerá del nivel de detalle que se quiera alcanzar en el prompt

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 4: Verificar la explicación

Se mostrará el resultado en la ventana de Chat

Revisar

Cerramos la ventana de Chat

Esta sería una quinta manera de conseguirlo

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