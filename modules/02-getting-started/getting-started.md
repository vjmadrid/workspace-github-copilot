# Primeros pasos

Introduction to GitHub Copilot
Using GitHub Copilot for Code Suggestions
Advanced GitHub Copilot Features
Real-world Examples with GitHub Copilot
Automating Workflows with GitHub Actions
GitHub Packages and Security Features
GitHub API and CLI
Review and Q&A


## Pre-Requisitos

### 1. Configuración de cuenta de Github

* Crear o realizar un login de la cuenta de Github
  * Sign up [aquí](https://github.com/)
* Habilitar la subscripción de Github Copilot
* Verificar la autenticación
* Verificar el estado de la subscripción

### 2. Configuración de IDE

* Instalar el IDE Visual Studio Code
  * [Download](https://code.visualstudio.com/)
* Verificar que VS Code se encuentra actualizado
* Instalar extensiones de GitHub Copilot
  * GitHub Copilot
  * GitHub Copilot Chat
  * GitHub Pull Requests and Issues (recomendada)
  * Git History (recomendada)
* Verificar que las extensiones se encuentran actualizadas
* Configurar opciones de Copilot

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

### 3. Configuración de cliente Git

* Instalar un cliente Git
* Configuración básica de opciones de Git
* Crear un repositorio

### 4. Verificar las instalaciones

* Probar sugerencias de Copilot
* Probar Chat de Copilot
* Verificar el acceso a las características


```bash
# 1. Create a new file

# 2. Type a comment describing what you want to do

# 3. Wait for Copilot suggestions

# 4. Accept or modify suggestions using:
#       - Tab to accept
#       - Alt+] or Alt+[ to cycle through suggestions
#       - Ctrl+Enter to see all suggestions

```

    




## Resources

* [GitHub Docs](https://docs.github.com/)
* [Git Official Documentation](https://git-scm.com/doc)
* [GitHub Copilot](https://github.com/features/copilot)
