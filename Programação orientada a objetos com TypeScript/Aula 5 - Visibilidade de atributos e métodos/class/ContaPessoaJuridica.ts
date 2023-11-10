import { TDSConta } from "./TDSConta"

export class ContaPessoaJuridica extends TDSConta {
    cnpj: number

    constructor(nome: string, numeroDaConta: number, cnpj: number) {
        super(nome, numeroDaConta)
        this.cnpj = cnpj
    }

    emprestimo = (): void => {
        console.log('Você pegou um empréstimo')
    }

    depositar = (valor:number): void => {
        console.log(`A empresa depositou ${valor}`)
    }
}

