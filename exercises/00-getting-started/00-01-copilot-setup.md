# Ejercicio: Configuración de GitHub Copilot

## Objetivo

Configurar GitHub Copilot en tu entorno de desarrollo y probar que funciona correctamente

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- VS Code con extensión de GitHub Copilot

## Estimación de tiempo

Tiempo estimado en complentarse: 10-15 minutos

## Instrucciones

### Paso 1: Verificar el acceso a GitHub

Iniciar la sesión en la cuenta de GitHub

Ir a https://github.com/features/copilot (Sign up [aquí](https://github.com/))

Verificar que se tiene acceso a GitHub Copilot

Nota: Si no, considerar registrarse para una prueba o suscripción

Habilitar la subscripción de Github Copilot

Verificar la autenticación

Verificar el estado de la subscripción

### Paso 2: Instalar Visual Studio Code

Instalar el IDE Visual Studio Code

* [Download](https://code.visualstudio.com/)

Verificar que VS Code se encuentra actualizado

### Paso 3: Instalar Copilot en VS Code

Abrir VS Code
Ir a Extensiones (Ctrl+Shift+X o Cmd+Shift+X)

Buscar "GitHub Copilot"

Hacer clic en "Instalar"

Después de la instalación, hacer clic en "Iniciar sesión en GitHub"

Completar el proceso de autenticación

Instalar las extensiones recomendadas y revisar sus configuraciones:

* GitHub Copilot Chat
* GitHub Pull Requests and Issues (recomendada)
* Git History (recomendada)

Verificar que las extensiones se encuentran actualizadas

Configurar opciones de Copilot

```bash
{
    "github.copilot.enable": {
        "*": true,
        "plaintext": true,
        "markdown": true,
        "scminput": false
    },
    "github.copilot.editor.enableAutoCompletions": true
}
```

> Eliminar la cache de VS Code si fuera necesaria

### Paso 3: Probar Copilot

Crear un nuevo archivo llamado `test.js`

Escribir el siguiente comentario y presionar Enter:

```bash
// Función para calcular la secuencia de Fibonacci hasta n términos
```

Esperar a que Copilot sugiera código

Presionar Tab para aceptar la sugerencia

## Consejos

N/A

## Desafio (Opcional)

N/A

## Solución

Fichero en el directorio /solutions

## Versionado

**Nota :** [SemVer](http://semver.org/) es usado para el versionado.

## Autor

* **knowmad mood**