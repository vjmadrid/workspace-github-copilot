# Gestión de multiples cuentas de GitHub

En este documento se explica cómo gestionar múltiples cuentas de GitHub en un mismo equipo, utilizando diferentes métodos para mantener las credenciales separadas y evitar conflictos.

Facilita:

* Que un desarrollador pueda mantener sus proyectos personales y profesionales organizados, utilizando diferentes cuentas para cada ámbito
* Que desarrolladores / colaboradores que trabajan en diferentes organizaciones puedan gestionar sus contribuciones sin mezclar credenciales o configuraciones
* Que se cumplan las políticas de seguridad y privacidad, al mantener las credenciales de cada cuenta separadas y organizadas -> Cumplimiento de las políticas de la organización

Hay que tener en cuenta que existen 3 tipos de cuentas en GitHub: personales, organizacionales y de empresa. * Cada una tiene sus propias características y usos, por lo que es importante entender las diferencias para gestionar múltiples cuentas de manera efectiva.

Existen varias formas de gestionar múltiples cuentas de GitHub, como:

* Configuración de SSH para cada cuenta
* Uso de perfiles de Git para cada cuenta
* Archivos de configuración separados para cada cuenta
* Tokens de acceso personal para cada cuenta
* Uso de las funcionalidades de gestión de cuentas de GitHub CLI (gh)

Algunas formas de gestión como llaves SSH y tokens de acceso personal funcionan muy bien, pero añaden una carga de mantenimiento y son frágiles en todas las máquinas y entorno.

## Caso: Gestión de cuentas de GitHub con GitHub CLI

Se considera que la gestión de cuentas con [GitHub CLI](https://cli.github.com/) (gh) es una de las formas más sencillas y eficientes.

Esta herramienta facilita mucho la gestión de operaciones sobre repositorios, issues, pull requests, etc. desde la línea de comandos, y permite gestionar múltiples cuentas de GitHub de manera más sencilla y eficiente.

Características de GitHub CLI:

* Facilita autenticar una vez por cuenta (OAuth badado en navegador)
* Cambiar qué cuenta está "activa" con un solo comando
* Facilita configurar la identidad de autor por respoistiro con :  `git config --local`
* Facilita clonar el repositorio correcto desde la cuenta adecuada sin meterse en lios con tokens o SSH keys

### Instalación de GitHub CLI

Pasos a seguir:

1. Instalar GitHub CLI: `gh` se puede instalar desde la página oficial de GitHub CLI o utilizando un gestor de paquetes como Homebrew, apt, etc.
2. Verificar la instalación

```bash
gh --version
```

Visualizar la versión instalada para asegurarse de que se ha instalado correctamente

### Configuración de GitHub CLI para múltiples cuentas

Pasos a seguir:

1. Identificar las cuentas de GitHub que se quieren gestionar: personales, organizacionales, de empresa, etc.

2. Abrir el terminal

3. Autenticar cada cuenta: Para cada cuenta de GitHub que quieras gestionar, ejecuta el siguiente comando y sigue las instrucciones para autenticarte a través del navegador:

```bash
gh auth login
```

Elementos de la configuración:

* Elegir el modo: `GitHub.com`
* Elegir el protocolo de autenticación: `HTTPS`
* Elegir autenticar Git con credenciales de GitHub CLI: `Sí`
* Elegir el método de autenticación: `Login with a web browser`
* Abrir el navegador, iniciar sesión con la cuenta de GitHub correspondiente
* Aprobar el acceso a GitHub CLI
* Cargar el código de autenticación (one-time code) que se muestra en la terminal para completar el proceso
* Cargar el MFA si está habilitado para la cuenta (autenticación de dos factores)

Verificar que todo ha ido bien con un mensaje por consola

'''bash
✓ Authentication complete.
- gh config set -h github.com git_protocol https
✓ Configured git protocol
✓ Logged in as vjmadrid

4. Verificar las cuentas autenticadas: Para ver las cuentas de GitHub que has autenticado, puedes ejecutar el siguiente comando:

```bash
gh auth status
```

Se mostrará una lista de las cuentas autenticadas, indicando cuál es la cuenta activa actualmente y otra información como los scopes considerados


5. Activar que gh gestione las credenciales de Git para cada cuenta:

```bash
gh auth setup-git
```


## Configuración del repositorio para cada cuenta

Passos a seguir:

1. Abrir el terminal y navegar al directorio del repositorio local que quieres configurar para una cuenta específica de GitHub

2. Configurar la identidad de autor para el repositorio local utilizando el siguiente comando:

```bash
git config --local user.name "Tu Nombre"
git config --local user.email "Tu Correo Electrónico"
```

**Nota:** Es importante configurar la identidad de autor a nivel local para cada repositorio, ya que esto asegura que los commits realizados en ese repositorio se asocien con la cuenta de GitHub correcta. Si no se configura la identidad de autor a nivel local, Git utilizará la configuración global, lo que podría causar confusión si estás gestionando múltiples cuentas.

En los casos en los que se necesite clonar un repositorio de una cuenta específica, se requiere ejecutar este paso después de clonar el repositorio para asegurarse de que la identidad de autor esté correctamente configurada para ese repositorio en particular.


3. Verificar cual es la cuenta activa en GitHub CLI para asegurarte de que estás utilizando la cuenta correcta para el repositorio:

```bash
gh auth status
```

En caso de tener que cambiar de cuenta ejecuatar el siguiente comando para activar la cuenta deseada:

```bash
gh auth switch

gh auth switch -u other-username
```

