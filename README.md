# Formación de Github Copilot

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- Login en la cuenta de GitHub con acceso a Copilot

## ¿Cómo empezar este curso?

<!-- For start course, run in JavaScript:
'https://github.com/new?' + new URLSearchParams({
  template_owner: 'skills',
  template_name: 'copilot-codespaces-vscode',
  owner: '@me',
  name: 'for-github-copilot',
  description: 'My github copilot training repository',
  visibility: 'public',
}).toString()
-->

[![Empezar-Curso](https://user-images.githubusercontent.com/1221423/235727646-4a590299-ffe5-480d-8cd5-8194ea184546.svg)](https://github.com/new?template_owner=skills&template_name=copilot-codespaces-vscode&owner=%40me&name=for-github-copilot&description=My+github+copilot+training+repository&visibility=public)

Pasos a seguir:

* Pulsar con el botón derecho sobre el botón **Start course** y abrir en enlace una pestaña nueva

* Verificar que se ha cargado la pantalla de creación de un repositorio de Github para la cuenta de GitHub con acceso a Copilot

* Verificar que se han rellenado la mayoría de los campos automáticamente

  * Para el propietario, elige tu cuenta personal o una organización para alojar el repositorio
  * Se aconseja crear un repositorio público, ya que los repositorios privados [utilizan minutos de Actions](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions)
* Crear el repositorio desde la parte inferior del formulario
* Una vez creado el repositorio hay que esperar unos 30 segundos y actualizar la página
* Clona el repositorio
* Crea un fichero README.md
* Realizar el commit inicial con mensaje de "Initial Commit"
* Verificar que se ha subido el fichero correctamente

## Habilitar Copilot dentro de Codespace

>Se recomienda abrir otra pestaña en el navegador para poder trabajar de forma más cómoda

Antes de crear un codespace en un repositorio se puede crear un contenedor de desarrollo y definir extensiones o configuraciones específicas que serán utilizadas o instaladas en el codespace.

Vamos a crear este contenedor de desarrollo y añadir copilot a la lista de extensiones.

    Navegando de nuevo a la pestaña Código de tu repositorio, haz clic en el botón desplegable Añadir archivo, y luego haz clic en Crear nuevo archivo.

Pongamos en marcha nuestro entorno de desarrollo, utilicemos copilot para aprender un poco sobre el proyecto y, a continuación, probémoslo.

1. Haga clic en el botón de abajo para abrir la página **Crear Codespace** en una nueva pestaña. Utilice la configuración por defecto.

 [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

 1. Confirme que el campo **Repositorio** es su copia del ejercicio, no el original, y luego haga clic en el botón verde **Crear espacio de código**.

   - Su copia: `/{{{full_repo_name}}}`
   - ❌ Original: `/skills/getting-started-with-github-copilot`

1. Espera un momento a que Visual Studio Code se cargue en tu navegador.

## Preparar un ejercicio

https://github.com/skills/getting-started-with-github-copilot/tree/main

[![](https://img.shields.io/badge/Copy%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/new?template_owner=skills&template_name=getting-started-with-github-copilot&owner=%40me&name=skills-getting-started-with-github-copilot&description=Exercise:+Get+started+using+GitHub+Copilot&visibility=public)
