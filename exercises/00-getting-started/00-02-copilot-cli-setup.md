# Ejercicio: Configuración de GitHub Copilot CLI

## Objetivo

Configurar GitHub Copilot CLI en tu entorno de desarrollo y probar que funciona correctamente

## Requisitos previos

- Cuenta de GitHub con acceso a Copilot de pago
- GitHub Copilot CLI instalado y configurado
- Política de organización habilitada si se usa a través de una organización
- Conocimiento básico de la línea de comandos
- Terminal o línea de comandos

## Estimación de tiempo

Tiempo estimado en complentarse: 10-15 minutos

## Instrucciones

### Paso 1: Instalar y configurar GitHub Copilot CLI

Seguir las instrucciones oficiales de instalación y configuración de GitHub Copilot CLI

Existen diferentes métodos de instalación dependiendo del sistema operativo

```bash
# *** WINDOWS ***

# Stable version
winget install GitHub.Copilot

# Prerelease version
winget install GitHub.Copilot.Prerelease

# *** MACOS/Linux (Homebrew) ***

# Stable version
brew install copilot-cli

# Prerelease version
brew install copilot-cli@prerelease

# *** MACOS/Linux (Install Script) ***

# Standard installation
curl -fsSL https://gh.io/copilot-install | bash

# Or using wget
wget -qO- https://gh.io/copilot-install | bash

# Install as root to /usr/local/bin
curl -fsSL https://gh.io/copilot-install | sudo bash

# Custom directory installation
curl -fsSL https://gh.io/copilot-install | PREFIX="$HOME/.local" bash

# *** All Plataforms (npm - requires Node.js) ***

# Stable version
npm install -g @github/copilot

# Prerelease version
npm install -g @github/copilot@prerelease
```

### Paso 2: Iniciar la Autenticación en VS Code

Ejecutar los siguientes comandos:

```bash
copilot

/login
```

Seguir las instrucciones para completar el proceso de autenticación via navegador

* Se considera autenticación basada en dispositivo
* Existe la posibilidad de autenticarse mediante token personal

```bash
# Set the token in your environment (GH_TOKEN takes precedence over GITHUB_TOKEN)
export GH_TOKEN="your_token_here"
# Or use GITHUB_TOKEN
export GITHUB_TOKEN="your_token_here"

# Or add to your shell profile (.bashrc, .zshrc, etc.)
echo 'export GH_TOKEN="your_token_here"' >> ~/.bashrc
```

### Paso 3: Verificar la instalación

Ejecutar el siguiente comando:

```bash
copilot --version
```

Verificar que se muestra la versión instalada de GitHub Copilot CLI

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