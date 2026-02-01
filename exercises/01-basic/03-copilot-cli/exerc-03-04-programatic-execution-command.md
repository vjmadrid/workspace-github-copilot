# Ejercicio: Ejecución de un comando de terminal desde GitHub Copilot CLI en modo programático

## Objetivo

Aprender a utilizar GitHub Copilot CLI en modo programático para ejecutar comandos de terminal basados en descripciones en lenguaje natural

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot de pago
- GitHub Copilot CLI instalado y configurado
- Conocimiento básico de la línea de comandos
- Terminal o línea de comandos

## Estimación de tiempo

Tiempo estimado en complentarse: 5-10 minutos

## Instrucciones

### Caso de uso 1

Ejecutar una funcionalidad desde la línea de comandos (CLI) utilizando GitHub Copilot CLI en modo programático

#### Paso 1: Arrancar la terminal

Abrir la terminal con la que se va a trabajar

#### Paso 2: Localizar el directorio de trabajo

Ubicarse en el directorio de trabajo donde se quiere utilizar GitHub Copilot CLI

#### Paso 3: Arrancar el modo programático

Ejecutar el siguiente comando:

```bash

# Ejemplo 1
copilot -p "Encuentra todos los archivos modificados en los últimos 7 días"
```

Verificar que se ejecuta la consulta en modo programático

En caso de que sea la primera vez que se utiliza, se pedirá iniciar sesión en GitHub y autorizar el acceso a Copilot CLI

Se mostrará la explicación en la línea de comandos

Verificar que se muestran las estadísticas de uso

#### Otras propuetas

Algunos ejemplos adicionales de comandos que se pueden ejecutar en modo programático:

```bash
# ***Analisis de codigo y documentacion***
copilot -p "Muestrame los últimos 5 cambios hechos en el fichero README.md"
copilot -p "Analiza el fichero refactoring-orig.js y sugiere mejoras de rendimiento"
copilot -p "Genera un resumen de las funcionalidades implementadas en el fichero api.py"
copilot -p "Muestrame los ultimos 10 commits realizados en este repositorio"

# ***Automatización de tareas***
copilot -p "Crea un script bash que haga una copia de seguridad de todos los ficheros .txt en el directorio actual"
copilot -p "Genera un script Python que renombre todos los ficheros en el directorio actual añadiendo el prefijo 'backup_'"
copilot -p "Crea un script que limpie los ficheros temporales en el directorio /tmp"

# ***Consultas del sistema***
copilot -p "Muestrame el uso de disco del sistema"
copilot -p "Genera un informe del uso de memoria del sistema"

# *** Operaciones del control de versiones ***
copilot -p "Crea una nueva rama llamada 'feature-x' y haz checkout a ella"
copilot -p "Comitea todos los cambios con el mensaje 'Actualización de documentación'"
copilot -p "Revierte el último commit sin perder los cambios en el working directory"
copilot -p "Lista todos los issues abiertos asignados a mi usuario en OWNER/REPO"

```


### Caso de uso 2

Ejecutar un comando desde la línea de comandos (CLI) utilizando GitHub Copilot CLI en modo programático

#### Paso 1: Arrancar la terminal

Abrir la terminal con la que se va a trabajar

#### Paso 2: Localizar el directorio de trabajo

Ubicarse en el directorio de trabajo donde se quiere utilizar GitHub Copilot CLI

#### Paso 3: Arrancar el modo programático

Ejecutar el siguiente comando:

```bash
# Ejemplo 1
copilot -p "Ejecutar 'find . -type f -mtime -7'"
```

Verificar que se ejecuta la consulta en modo programático

En caso de que sea la primera vez que se utiliza, se pedirá iniciar sesión en GitHub y autorizar el acceso a Copilot CLI

Se mostrará el resultado

Verificar que se muestran las estadísticas de uso

## Consejos

N/A

## Desafio (Opcional)

N/A

## Solución

N/A

## Versionado

**Nota :** [SemVer](http://semver.org/) es usado para el versionado.

## Autor

* **knowmad mood**