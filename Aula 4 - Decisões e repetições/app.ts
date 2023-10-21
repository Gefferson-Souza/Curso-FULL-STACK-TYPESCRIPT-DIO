const num: number = 15;

if (num > 15) {
  console.log('Num maior que 15')  // código a ser executado se a condição for verdadeira
} else if (num === 15) {
  console.log('Num é igual a 15')
} else {
  console.log('Num menor que 15')  // código a ser executado se a condição for falsa
}


const tiposUsuario = {
  admin: 'Seja bem vindo ADMIN',
  estudante: 'Você é um estudante',
  visitante: 'Você é um visitante'
}

function validarUsuario(usuario: string) {
  console.log(tiposUsuario[usuario as keyof typeof tiposUsuario])
}

const usuarios: string[] = ['admin', 'estudante', 'visitante'];

usuarios.map((usuario: string) => validarUsuario(usuario));