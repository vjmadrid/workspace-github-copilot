# workspace-github-copilot

<p align="center">
<a href="https://github.com/psf/black"><img alt="Code style: black" src="https://img.shields.io/badge/code%20style-black-000000.svg"></a>
</p>

Este proyecto contiene ejemplos, soluciones y recursos para el uso avanzado de GitHub Copilot y prácticas modernas de desarrollo.

## Características

* Ejemplos de integración y uso de GitHub Copilot
* Soluciones a ejercicios prácticos
* Buenas prácticas de desarrollo y automatización
* Scripts y utilidades para flujos de trabajo
* Ejemplos de configuración y personalización
* Despliegue en contenedor (Docker)

## Stack Tecnológico

### General

* [Node.js](https://nodejs.org/) 18.x+
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

### Dependencias principales

* **Jest** : Framework de testing para JavaScript
  * [Pypi](https://www.npmjs.com/package/jest)
  * [Repositorio](https://github.com/facebook/jest)
  * [Documentación](https://jestjs.io/)
* **ESLint** : Linter para mantener la calidad del código
  * [Npm](https://www.npmjs.com/package/eslint)
  * [Repositorio](https://github.com/eslint/eslint)
  * [Documentación](https://eslint.org/)
* **Prettier** : Formateador de código
  * [Npm](https://www.npmjs.com/package/prettier)
  * [Repositorio](https://github.com/prettier/prettier)
  * [Documentación](https://prettier.io/)

### Dependencias de desarrollo

* **nodemon** : Recarga automática en desarrollo
* **cross-env** : Configuración de variables de entorno multiplataforma

## Pre-Requisitos

* Node.js 18.x o superior
* Docker instalado (opcional para despliegue)

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

## Testing

1. Ejecutar los tests:

```bash
npm test
```

## Despliegue

En construcción

## Dockerize

1. Construir la imagen Docker:

```bash
docker build -t workspace-github-copilot .
```

2. Ejecutar el contenedor:

```bash
docker run -p 3000:3000 workspace-github-copilot
```

## Uso

Consultar los ejemplos y scripts en la carpeta `examples/` y `solutions/`.

## Versionado

**Nota:** [SemVer](http://semver.org/) es utilizado para el versionado.

## Autores

* **Víctor Madrid**
* **GitHub Copilot**
