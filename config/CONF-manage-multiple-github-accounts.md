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

** SSH es más seguro que utilizar HTTPS ya que no pide cada vez el ingreso de credenciaels
** SSH es más difícil de configurar y mantener, especialmente cuando se gestionan múltiples cuentas, ya que requiere generar y gestionar múltiples pares de claves SSH, configurar el archivo `~/.ssh/config` para cada cuenta, y asegurarse de que las claves SSH estén correctamente asociadas con las cuentas de GitHub correspondientes


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

Elige la siguiente configuración:

* Elegir el modo: `GitHub.com`
* Elegir el protocolo de autenticación: `HTTPS`
* Elegir autenticar Git con credenciales de GitHub CLI: `Sí`
* Elegir el método de autenticación: `Login with a web browser`
* Abrir el navegador, iniciar sesión con la cuenta de GitHub correspondiente
* Aprobar el acceso a GitHub CLI
* Cargar el código de autenticación (one-time code) que se muestra en la terminal para completar el proceso
* Cargar el MFA si está habilitado para la cuenta (autenticación de dos factores)

Verificar que todo ha ido bien con un mensaje por consola

```bash
✓ Authentication complete.
- gh config set -h github.com git_protocol https
✓ Configured git protocol
✓ Logged in as <username>
```

**Nota:** Repetir este proceso para cada cuenta de GitHub que quieras gestionar, asegurándote de iniciar sesión con la cuenta correcta en el navegador para cada autenticación.

4. Verificar las cuentas autenticadas: Para ver las cuentas de GitHub que has autenticado, puedes ejecutar el siguiente comando:

```bash
# Mostrar todas la cuentas autenticadas y cuál es la cuenta activa actualmente
gh auth status

# Con este flag se muestra el token de acceso personal asociado a cada cuenta, lo que puede ser útil para verificar que las cuentas están correctamente autenticadas y para gestionar los tokens si es necesario
# IMPORTANTE: Ten cuidado al mostrar los tokens de acceso personal, ya que son sensibles y pueden ser utilizados para acceder a tu cuenta de GitHub. Asegúrate de no compartir esta información con nadie y de mantenerla segura.
gh auth status --show-token


# Mostrar solo la cuenta activa actualmente
gh auth status -a
```

Se mostrará una lista de las cuentas autenticadas en github.com, indicando cuál es la cuenta activa actualmente y otra información como los scopes considerados


5. Activar que gh gestione las credenciales de Git para cada cuenta:

```bash
gh auth setup-git
```

Configura el ayudante de credenciales de Git para que las operaciones HTTPS de GitHub deleguen en `gh`


## Configuración del repositorio para cada cuenta

**Importante 1:** La identidad del autor de Git determina a qué cuenta de GitHub se asocian los commits realizados en un repositorio. Por lo tanto, es crucial configurar la identidad del autor correctamente para cada repositorio local, especialmente cuando se gestionan múltiples cuentas de GitHub.

**Importante 2:** Se aconseja que la identidad sea local a cada repositorio para evitar confusiones y asegurar que los commits se asocien con la cuenta de GitHub correcta. Configurar la identidad a nivel global puede causar problemas si estás trabajando con múltiples cuentas, ya que todos los repositorios usarían la misma identidad, lo que podría no ser deseable.


Pasos a seguir:

1. Abrir el terminal y navegar al directorio del repositorio local que quieres configurar para una cuenta específica de GitHub

```bashbash
cd /ruta/al/repositorio
```

2. Configurar la identidad de autor para el repositorio local utilizando el siguiente comando:

```bash
git config --local user.name "Tu Nombre"
git config --local user.email "Tu Correo Electrónico"
```

**Nota:** Es importante configurar la identidad de autor a nivel local para cada repositorio, ya que esto asegura que los commits realizados en ese repositorio se asocien con la cuenta de GitHub correcta. Si no se configura la identidad de autor a nivel local, Git utilizará la configuración global, lo que podría causar confusión si estás gestionando múltiples cuentas.

En los casos en los que se necesite clonar un repositorio de una cuenta específica, se requiere ejecutar este paso después de clonar el repositorio para asegurarse de que la identidad de autor esté correctamente configurada para ese repositorio en particular.

Estos comandos no cambian la cuenta activa en GitHub CLI

3. Verificar la configuración de la identidad de autor para el repositorio local con el siguiente comando:

```bash
git config --local user.name
git config --local user.email
```

4. Verificar cual es la cuenta activa en GitHub CLI para asegurarte de que estás utilizando la cuenta correcta para el repositorio:

```bash
gh auth status
```

En caso de tener que cambiar de cuenta ejecutará el siguiente comando para activar la cuenta deseada:

```bash
# Modo interactivo
gh auth switch

# Modo directo (sin preguntar, activando la cuenta de usuario especificada)
gh auth switch -u other-username
```

Cuando se ejecuta este comando, GitHub CLI cambiará la cuenta activa a la cuenta especificada, lo que afectará las operaciones de Git y GitHub realizadas desde la línea de comandos.

Gracias a el comando `gh auth setup-git` que se ejecutó previamente, las operaciones de Git que interactúan con GitHub (como push, pull, etc.) delegarán en GitHub CLI para la autenticación, lo que significa que se utilizará la cuenta activa en GitHub CLI para esas operaciones. 

* Utiliza el token de la cuenta seleccionada

