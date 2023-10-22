import { TDSConta } from "./TDSConta"

export class ContaPessoaFisica extends TDSConta {
    cpf: number

    constructor(nome: string, numeroDaConta: number, cpf: number) {
        super(nome, numeroDaConta)
        this.cpf = cpf
    }
}


