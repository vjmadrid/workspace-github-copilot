# *** Git ****

# Comando personalizado para configurar la identidad de autor en un repositorio local de Git con valores fijos pasados por parámetro
function git-local-set-author() {
    if [ "$#" -ne 2 ]; then
        echo "Usage: git-local-set-author <name> <email>"
        return 1
    fi

    git config --local user.name "$1"
    git config --local user.email "$2"

    echo "Git author set to: $1 <$2>"
}

# Comando personalizado para configurar la identidad de autor en un repositorio local de Git con valores fijos para la cuenta vjmadrid
function git-local-set-author-vjmadrid() {
    git-local-set-author "vjmadrid" "victor.j.madrid@gmail.com"
}

# Comando personalizado para configurar la identidad de autor en un repositorio local de Git con valores fijos para la cuenta vjmadrid-knm
function git-local-set-author-vjmadrid-knm() {
    git-local-set-author "vjmadrid-knm" "vjmadrid@knowmadmood.com"
}