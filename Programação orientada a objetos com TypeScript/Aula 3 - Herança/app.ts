/* //Abstração

//Abstração é a capacidade de conseguir pensar no objeto que 
//iremos criar e como implementar seus métodos e atributos

//TS Bank

//conta
//nome, número da conta
//depositar, sacar

abstract class Conta {
    nome: string
    numeroDaConta: number
    saldo: number = 0

    constructor(nome: string, numeroDaConta: number) {
        this.nome = nome
        this.numeroDaConta = numeroDaConta
    }

    depositar = (valor: number) => {
        console.log(`Você depositou ${valor}R$`)
    }
    sacar = (valor: number) => {
        console.log(`O saque de ${valor}R$, foi efetuado com sucesso!`)
    }

    consultarSaldo = () => {
        console.log(this.saldo)
    }
}

class ContaPF extends Conta{
    cpf: number

    constructor(nome:string, numeroDaConta:number, cpf: number) {
        super(nome, numeroDaConta)
        this.cpf = cpf
    }
}


const contaAdmin: ContaPF = new ContaPF('Gefferson', 1, 123456789);

console.log(contaAdmin)

//const outraConta: Conta = new Conta('Isabella', 2);
 */