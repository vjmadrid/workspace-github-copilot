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

# Comando personalizado para configurar la identidad de autor en un repositorio local de Git con valores fijos para la cuenta personal-username
function git-local-set-author-personal-username() {
    git-local-set-author "personal-username" "personal-username@gmail.com"
}

# Comando personalizado para configurar la identidad de autor en un repositorio local de Git con valores fijos para la cuenta corporate-username
function git-local-set-author-corporate-username() {
    git-local-set-author "corporate-username" "corporate-username@acme.com"
}