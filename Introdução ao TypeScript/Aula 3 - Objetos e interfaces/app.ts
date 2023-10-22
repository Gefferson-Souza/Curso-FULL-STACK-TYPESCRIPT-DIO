interface Pessoa {
    nome: string,
    idade: number,
    profissao?:string //Propriedade opcional
}

const pessoa: Pessoa = {
    nome: 'Gefferson',
    idade: 25
}

const outraPessoa: Pessoa = {
    nome: 'Paulo',
    idade: 37,
    profissao: 'Desenvolvedor'
}

//Tipos de Arrays

const arrayPessoa: Pessoa[] = [
    pessoa,
    outraPessoa
]

const outroArrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [1,2,3,4];

const arrayString: Array<string> = ['1','2','abc'];

