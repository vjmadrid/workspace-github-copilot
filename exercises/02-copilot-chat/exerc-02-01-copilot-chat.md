# Ejercicio: Usar GitHub Copilot Chat

## Objetivo

Aprender a utilizar el Copilot Chat desde su panel

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- VS Code con extensión de GitHub Copilot
- Node.js instalado

## Estimación de tiempo

Tiempo estimado en complentarse: 5-10 minutos

## Instrucciones

### Caso de uso 1

Crear un API básico en Node.js utilizando el framework popular "Express"

Comentario que define los requerimientos

```bash
/*
Crea un API básico en Node.js utilizando el framework Express
- Define un endpoint que responda : "Hola mundo desde mi API"
- Muestra información por consola del arranque del API (como puede ser el puerto)
*/
```

Importante: Todo dependerá del nivel de detalle que se quiera alcanzar en la propuesta de solución

Nota: Se encuentra implementado en JavaScript

#### Paso 1: Abrir el panel de Copilot Chat

Pulsar sobre el icono de Copilot Chat desde la interfaz del editor o bien pulsar sobre atajo de teclado

#### Paso 2: Ejecutar el GitHub Copilot Chat

Revisar los aspectos de la configuración del chat

Pegar el comentario anterior

Ejecutar

Se procesará la petición de GitHub Copilot Chat en la ventana de chat

#### Paso 4: Guardar el nuevo fichero

Guardar el nuevo fichero de código creado por Copilot Chat

Se propondrá como nombre del fichero: api.js

#### Paso 5: Ejecutar la propuesta de instalación

Nota: Github Copilot Chat suele hacer propuestas sobre la instalación de dependencias, etc.

Revisar el comando o comandos de ejecución propuestos

Pulsar sobre continuar

Verificar que se ha ejecutado este comando en el terminal

Verificar que se han creado ficheros y proyectos de ejecución

#### Paso 6: Ejecutar la propuesta de ejecución

Revisar el comando propuesto

Pulsar sobre continuar

Verificar que se encuentra el API desplegado en el endpoint: //http://localhost:3000/

### Caso de uso 2

Otro uso que se puede utilizar es mediente el uso de participantes en el chat

Se aconseja probar con el siguiente prompt:

```bash
@workspace Conteneriza el proyecto anterior en un Dockerfile utilizando la última imagen base
```


## Consejos

- Verificar si la sugerencia propuesta se parece a la propuesta en el apartado de solución
- Pensar sobre las indicaciones o contexto que se pueden añadir para escribir código más preciso

## Desafio (Opcional)

- Añadir control de errores

## Solución

Fichero en el directorio /solutions

## Versionado

**Nota :** [SemVer](http://semver.org/) es usado para el versionado.

## Autor

* **knowmad mood**