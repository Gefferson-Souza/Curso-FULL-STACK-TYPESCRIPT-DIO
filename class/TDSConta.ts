export abstract class TDSConta {
    private nome: string
    private readonly numeroDaConta: number
    saldo: number = 0
    private status: boolean = false

    constructor(nome: string, numeroDaConta: number) {
        this.nome = nome
        this.numeroDaConta = numeroDaConta
    }

    depositar = (valor: number): void => {
        if (this.validarStatus()) {
            return console.log(`Você depositou ${valor}R$`)
        }else{
            return console.log(`A conta ${this.numeroDaConta} está inativa, por favor contatar o gerente de sua agência`)
        }
    }
    sacar = (valor: number): void => {
        return console.log(`O saque de ${valor}R$, foi efetuado com sucesso!`)
    }

    consultarSaldo = (): void => {
        return console.log(this.saldo)
    }

    pegarNome = (): string => {
        return this.nome
    }

    definirNome = (novoNome: string): void => {
        this.nome = novoNome
    }

    private validarStatus = (): boolean => {
        return this.status
    }
}