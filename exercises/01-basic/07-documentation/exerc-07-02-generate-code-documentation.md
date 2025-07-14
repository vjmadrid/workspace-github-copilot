# Ejercicio: Usar GitHub Copilot Chat para crear documentación sobre el código

## Objetivo

Aprender a utilizar la funcionalidad de creación de documentación sobre el código

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- VS Code con extensión de GitHub Copilot

## Estimación de tiempo

Tiempo estimado en complentarse: 8-15 minutos

## Instrucciones

Se hará uso del fichero de código "refactoring.js"

Se trata de una pequeña funcionalidad de validación de condiciones de usuarios (mayoría de edad, email correcto y tipo de suscripción)

Nota: Ejemplo se encuentra implementado en JavaScript

Es importante definir el tipo y calidad de la documentación que se quiere generar, por ejemplo:

* Documentación de funciones
* Documentación de clases
* Documentación de módulos
* Documentación de variables
* ...


### Caso de uso 1

Generar la documentación completa de un fichero de código

Siguiendo alguna de las formas que hemos visto tenemos que hacer llegar el código del fichero "refactoring.js" al GitHub Copilot Chat

* Copy-Paste del código
* Cargar desde el fichero adjunto en el contexto
* Cargar desde la apertura del fichero en el editor

#### Paso 1: Ejecutar el GitHub Copilot Chat

Revisar los aspectos de la configuración del Chat

Cargar el prompt:

```bash
Documentar el código
```

Ejecutar

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 2: Verificar el código documentado

Revisar

Cerramos la venta de Chat

Esta sería una primera manera de conseguirlo

### Caso de uso 2

Generar la documentación completa de un fichero de código

Siguiendo alguna de las formas que hemos visto tenemos que hacer llegar el código del fichero "refactoring.js" al GitHub Copilot Chat

* Copy-Paste del código
* Cargar desde el fichero adjunto en el contexto
* Cargar desde la apertura del fichero en el editor

#### Paso 1: Ejecutar el GitHub Copilot Chat

Revisar los aspectos de la configuración del Chat

Cargar el prompt:

```bash
/doc
```

Ejecutar

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 2: Verificar el código documentado

Revisar

Cerramos la venta de Chat

Esta sería una segunda manera de conseguirlo

### Caso de uso 3

Generar la documentación sobre una selección de código específica

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "refactoring.js" y abrir el fichero

Seleccionar todo el código o parte del código que se quiere documentar

Pulsar sobre el botón derecho "Copilot" -> "Generate Docs"

Se procesará la petición de GitHub Copilot Chat en la ventana de Chat

#### Paso 2: Verificar el código documentado

Revisar

Cerramos la venta de Chat

Esta sería una tercera manera de conseguirlo

#### Caso de uso 4

Generar la documentación sobre una selección de código específica mediante el Chat Inline

#### Paso 1: Seleccionar el fichero de trabajo

Seleccionar el fichero de trabajo "refactoring.js" y abrir el fichero

Seleccionar todo el código o parte del código que se quiere documentar

#### Paso 2: Ejecutar el GitHub Copilot Chat Inline

Sobre el fichero ejecutar el comando de "Editor Inline Chat" (Cmd+I)

Cargar en el cuadro de chat un prompt como:

```bash
Documentar el código
```
Si se quiere documentar la función

Otra opcion sería:

```bash
Generate inline comments for the file xxx
```

Nota: El nivel de detalle de la documentación dependerá del prompt que se utilice

Revisar los aspectos de la configuración del chat

Ejecutar

#### Paso 3: Verificar el código documentado

Revisar

Cerramos la venta de Chat

Esta sería una cuarta manera de conseguirlo


## Consejos

- Verificar si la sugerencia propuesta se parece a la propuesta en el apartado de solución
- Pensar sobre las indicaciones o contexto que se puede añadir para escribir código más preciso

## Desafio (Opcional)

N/A

## Solución

N/A

## Versionado

**Nota :** [SemVer](http://semver.org/) es usado para el versionado.

## Autor

* **knowmad mood**