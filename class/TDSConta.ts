export abstract class TDSConta {
    private nome: string
    numeroDaConta: number
    saldo: number = 0

    constructor(nome: string, numeroDaConta: number) {
        this.nome = nome
        this.numeroDaConta = numeroDaConta
    }

    depositar = (valor: number): void => {
        console.log(`Você depositou ${valor}R$`)
    }
    sacar = (valor: number): void => {
        console.log(`O saque de ${valor}R$, foi efetuado com sucesso!`)
    }

    consultarSaldo = (): void => {
        console.log(this.saldo)
    }

    alterarNome = (novoNome: string): void => {
        this.nome = novoNome
    }
}