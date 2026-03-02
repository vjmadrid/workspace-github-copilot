# Configuración de ficheros de Instrucciones

En esta sección, se muestra cómo configurar los ficheros de instrucciones para que el ejercicio funcione correctamente.

Pasos a seguir:

* Crear una carpeta .github en la raíz de tu proyecto si no existe
* Crear un nuevo archivo copilot-instructions.md dentro de la carpeta .github
* Agrega estos comentarios clave para guiar a Copilot:


* Overview del proyecto



```markdown
# Project Instructions for GitHub Copilot
// This file provides instructions for GitHub Copilot AI
// Project: [Your Project Name]
// Tech Stack: [List your main technologies]
````

* Personaliza las instrucciones con detalles específicos de tu proyecto, como el propósito, las tecnologías utilizadas y cualquier convención de codificación que quieras que Copilot siga.

```markdown
## Coding Patterns
// Document our standard patterns for:
// - Error handling
// - Dependency injection
// - Database access
// - API endpoints
```

Copilot will often suggest common patterns based on your existing codebase.

* Documentar la estructura del proyecto

Copilot puede ayudar a entender la estructura de un proyecto

```markdown
## Project Structure
// Key directories and their purposes:
/src
  /components    # React components
  /hooks        # Custom React hooks
  /utils        # Utility functions
  /api          # API integration
  /types        # TypeScript types

```

* Enseñar las convenciones de codificación propias

```markdown
## Naming Conventions
// Examples of our naming patterns:
// Components: UserProfile.tsx, ProductCard.tsx
// Hooks: useAuthentication.ts, useTheme.ts
// Utils: formatDate.ts, validateInput.ts
// Types: UserTypes.ts, ApiResponse.ts
```

# Trucos de pro

* Evitar configuraciones del tipo rol prompting.
* Usar cabeceras de seccion claras para organizar tus instrucciones
* Incluir casos de uso y patrones comunes
* Listar anti-patrones a evitar
* Documentar decisiones arquitectónicas
* Mantener las instrucciones en sincronía con tus reglas de linting
* Actualizar el documento con cierta frecuencia
* Incluir ejemplos de código para ilustrar tus puntos
