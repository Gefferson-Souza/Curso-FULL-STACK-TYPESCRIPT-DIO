class User {
    nome: string = 'Gefferson'
    idade: number = 25

    constructor(nome: string, idade: number) {
        this.nome = nome,
            this.idade = idade
    }

    mostrarNome = () => console.log(this.nome);
}

const usuario = new User('Isabella', 30);

usuario.mostrarNome()


const outroUsuario = new User('Maria', 12);
outroUsuario.mostrarNome()