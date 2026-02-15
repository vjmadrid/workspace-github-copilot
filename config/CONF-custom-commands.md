# Comandos Personalizados

En este documento se describe la buena práctica de crear comandos personalizados para tareas repetitivas o complejas, utilizando el terminal ,herramientas de automatización como Makefile, scripts de shell, o alias de Git. Estos comandos personalizados pueden ayudar a mejorar la eficiencia y la consistencia en el trabajo diario, especialmente cuando se gestionan múltiples cuentas de GitHub o se realizan tareas comunes en proyectos de desarrollo.

## Crear un comando personalizado para "Oh My Zsh"

## Caso de uso: Sobre el fichero de configuración de Oh My Zsh

Pasos a seguir:

1. Abrir el archivo de configuración de Oh My Zsh, que generalmente se encuentra en `~/.zshrc`
2. Añadir el alias personalizado al final del archivo.

Por ejemplo, para crear un comando personalizado llamado `gh-switch` que permita cambiar rápidamente entre cuentas de GitHub, puedes añadir la siguiente línea:

```bash
alias gh-switch='gh auth switch'
```

3. Guardar los cambios y cerrar el archivo.
4. Recargar la configuración de Oh My Zsh para que los cambios surtan efecto:

```bash
source ~/.zshrc
```

5. Verificar que el comando personalizado funciona correctamente


## Caso de uso: Sobre el directorio de comandos personalizados de Oh My Zsh

Se creará un fichero con la personalización de los comandos

Pasos a seguir:

1. Crear el fichero para los comandos personalizados si este no existe, por ejemplo `~/.oh-my-zsh/custom/my-commands.zsh`

```bash
nano ~/.oh-my-zsh/custom/my-commands.zsh
```

Pulsar `Ctrl + O` para guardar el archivo y `Ctrl + X` para salir del editor

**Nota:** Si te sientes mas comodo con tu Editor puesdes abrirlo desde ahí y guardar los cambios desde el editor

2. Abrir el fichero para editar los comandos personalizados

3. Añadir los comandos personalizados al fichero

4. Por ejemplo, para crear un comando personalizado llamado `gh-switch` que permita cambiar rápidamente entre cuentas de GitHub, puedes añadir la siguiente función:

```bash
function gh-switch() {
  gh auth switch
}
```

5. Guardar los cambios y cerrar el archivo

6. Recargar el nuevo fichero

```bash
source ~/.oh-my-zsh/custom/my-commands.zsh
```

7. Recargar la configuración de Oh My Zsh para que los cambios surtan efecto:

```bash
source ~/.zshrc
```

8. Verificar que el comando personalizado funciona correctamente

Utilizar la consola y verificar que lo reconoce como un comando válido
