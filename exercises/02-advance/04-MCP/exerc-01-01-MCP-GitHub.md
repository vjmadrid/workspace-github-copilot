# Ejercicio: Usar MCP para la integración de GitHub

## Objetivo

Aprender a utilizar servidores de MCP

En este caso se utilizará uno relacionado con la plataforma GitHub

## Caso de uso: GitHub MCP Server

### Requisitos previos

- Cuenta de GitHub con acceso a Copilot
- VS Code con extensión de GitHub Copilot
- Node.js instalado
- Un GitHub personal access token (para GitHub MCP server)

### Estimación de tiempo

Tiempo estimado en complentarse: 15-25 minutos

### Instrucciones

https://github.com/modelcontextprotocol/servers-archived/tree/main/src/github


#### Paso 1: Instalar el servidor MCP de GitHub

```bash
# Install the GitHub MCP server globally
npm install -g @modelcontextprotocol/server-github

# Or install it locally in your project
npm install @modelcontextprotocol/server-github
```

#### Paso 2: Configurar la variable de entorno para el token de acceso personal de GitHub

Crear un fichero `.env` en la raíz de tu proyecto y añadir la siguiente línea, reemplazando

```bash
GITHUB_PERSONAL_ACCESS_TOKEN=your_github_token_here
```

Para crear un token de GitHub:

* Ir a Configuración de GitHub → Configuración de desarrollador → Tokens de acceso personal
* Generar un nuevo token con permisos de repo y read:org
  * IMPORTANTE: Tener mucho cuidado con los permisos que se le dan al token, ya que puede tener acceso a información sensible de tu cuenta de GitHub
* Copiar el token en tu archivo .env


#### Paso 3: Configurar Visual Studio Code para usar el servidor MCP de GitHub

Se puede plantear de dos formas:

#### Opción A: Configuración de usuario (Recomendado para principiantes)

Abrir la configuración de Visual Studio Code (Ctrl+, o Cmd+,) y añadir esto a tu settings.json:

```json
{
  "github.copilot.advanced": {
    "debug": true
  },
  "mcp.servers": {
    "github": {
      "command": "node",
      "args": ["./node_modules/@modelcontextprotocol/server-github/dist/index.js"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${env:GITHUB_PERSONAL_ACCESS_TOKEN}"
      }
    }
  }
}
```

Truco Visual Studio Code : Accede rápidamente a tu settings.json presionando Ctrl+Shift+P (o Cmd+Shift+P en Mac), luego escribe "Preferences: Open User Settings (JSON)"



#### Opción B: Workspace Settings (Para configuración específica del proyecto)

Crear un archivo .vscode/settings.json en la raíz de tu proyecto con la misma configuración. Esto mantiene la configuración del servidor MCP vinculada a tu proyecto específico.

⚠️ Nota de seguridad de Visual Studio Code: Visual Studio Code puede mostrar un aviso de seguridad al cargar por primera vez los servidores MCP. Esto es normal: haz clic en "Permitir" para habilitar la funcionalidad del servidor.


Pasos a seguir:

* Abrir el Copilot Chat
* Seleccionar el modo Agente
* Acceder al apartado de herramientas
* Visualizar las herramientas disponibles con las que puedes interactuar
* Localizar en la lista la opción "Add More Tools..."
  * Se abrirá una ventana emergente con una lista de opciones disponibles
  * Elegir la opción "Add MCP Server"
  * Se abrirá una ventana emergente con una lista de opciones disponibles
  * Elegir la opción "NPX Package"

Proporcionar la localización del paquete del servidor MCP

```bash
@modelcontextprotocol/server-github
```

Seguir las instrucciones para instalar el paquete, proporcionando un nombre/identificador, etc.

Visualizar la configuración del servidor MCP en el fichero de configuración de VS Code (settings.json)

```json
...
"mcp": {
        "servers": {
            "github": {
                "command": "npx",
                "args": [
                    "-y",
                    "@modelcontextprotocol/server-github"
                ],
                "env": {
                    "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
                }
            }
        },
        "inputs": []
    },
...
```


#### Paso 3:  Verificar la instalación en Visual Studio Code

Despues de la configuración, verificar que todo esté funcionando:

* Check the Output Panel:
  * Open View → Output (or Ctrl+Shift+U)
  * Select "GitHub Copilot" from the dropdown
  * Look for MCP server connection messages

* Test with Copilot Chat:
  * Open Copilot Chat (Ctrl+Alt+I or click the chat icon)
  * Try asking: "What repositories do I have access to?"

* Enable Debug Mode (if needed):
  * The "debug": true setting in your configuration will show detailed logs
  * Check the Visual Studio Code Developer Console (Help → Toggle Developer Tools) for detailed MCP messages

#### Paso 5: Arrancar el servidor MCP

Pulsar sobre el botón "Start" que aparece en el fichero de configuración de VS Code (settings.json) en el apartado de "mcp" del servidor que acabamos de crear

#### Paso 6: Visualizar las herramientas del servidor MCP

En el Copilot Chat

Acceder al apartado de herramientas

Visualizar las herramientas disponibles relacionadas con el servidor MCP de GitHub

Conveniene identificar que operaciones estan asociadas a la integración de GitHub y configurar su disponibilidad para su uso en el chat

**IMPORTANTE**: Recordar que estas operaciones estarán vinculdas con los permisos establecidos sobre el token de acceso personal de GitHub que se ha configurado previamente. Por lo tanto, es fundamental revisar y ajustar los permisos del token para garantizar que solo se otorgue el acceso necesario para las operaciones que se desean realizar a través del servidor MCP.


### Uso de herramientas del servidor MCP de GitHub

Una vez configurado, puedes aprovechar el servidor MCP de GitHub directamente dentro de tu flujo de trabajo en Visual Studio Code:
Integración de Visual Studio Code Copilot Chat

El servidor MCP de GitHub funciona perfectamente con el panel de Copilot Chat de Visual Studio Code:

Consejo de Visual Studio Code: Usa el contexto #github en tu Copilot Chat para referenciar explícitamente los datos de GitHub:

```markdown
#github What repositories do I have access to?
"#github What are the recent issues in the microsoft/vscode repository?"
"#github Show me the latest pull requests for my organization's main project"
"#github What's the current status of issue #1234 in my repository?"
```

Ejemplo de uso en la version inline del chat:

```bash
"Help me write a commit message based on the current GitHub issue I'm working on"
"Generate code comments that reference the GitHub issue this fixes"
"Create a PR description template for this type of change"
```

## Soporte a Troubleshooting

### MCP Server no conecta

Síntomas: Copilot no reconoce las solicitudes relacionadas con GitHub

Soluciones en Visual Studio Code:

* Verificar el estado de la extensión: Asegúrate de que la extensión GitHub Copilot esté activa en el panel de Extensiones
* Recargar ventana: Presiona Ctrl+Shift+P → "Developer: Reload Window"
* Verificar el panel de salida: Vista → Salida → Selecciona "GitHub Copilot" para mensajes de error
* Verificar configuración: Abre settings.json y confirma que la configuración de MCP es correcta

### Errores de permisos en Visual Studio Code

Síntomas: "Permiso denegado" al intentar crear problemas o acceder a repositorios

Soluciones en Visual Studio Code:

* Verificación del token:
    * Abre la terminal de Visual Studio Code (Ctrl+` o Vista → Terminal)
    * Ejecuta: echo $GITHUB_PERSONAL_ACCESS_TOKEN para verificar que el token está configurado
    * Si está vacío, verifica que tu archivo .env esté en la ubicación correcta

* Permisos de la extensión:
    * Ve a Extensiones → GitHub Copilot → Configuración
    * Asegúrate de que todos los permisos necesarios estén habilitados

* Confianza en el espacio de trabajo:
    * Visual Studio Code puede requerir que confíes en el espacio de trabajo
    * Haz clic en "Confiar" cuando se te solicite, o ve a Archivo → Confiar en el espacio de trabajo

#### Visual Studio Code Incidencias de rendimiento

Síntomas: Respuestas lentas al usar el servidor MCP de GitHub

Optimización de Visual Studio Code:

* Deshabilitar extensiones innecesarias: Apaga las extensiones que no necesitas
* Aumentar memoria: Agrega a settings.json: "github.copilot.advanced.length": 2000
* Verificar uso de CPU: Abre el monitor de rendimiento integrado de Visual Studio Code (Ayuda → Rendimiento)

Consejo de depuración de Visual Studio Code: Habilita el registro detallado agregando "mcp.debug": true a tu settings.json para obtener información detallada de solución de problemas.
Próximos pasos

Una vez que te sientas cómodo con el servidor MCP de GitHub:

* Explorar más servidores: Prueba servidores MCP de base de datos o sistema de archivos
* Combinar servidores: Usa múltiples servidores MCP juntos para flujos de trabajo complejos
* Aprender características avanzadas: Explora capacidades avanzadas específicas del servidor
* Crear servidores personalizados: Crea tus propios servidores MCP para necesidades únicas (cubierto en futuros consejos)

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