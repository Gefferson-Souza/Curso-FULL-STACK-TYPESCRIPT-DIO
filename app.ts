//Abstração

//Abstração é a capacidade de conseguir pensar no objeto que 
//iremos criar e como implementar seus métodos e atributos

//TDS Bank

//conta
//nome, número da conta
//depositar, sacar

import {ContaPessoaFisica} from './class/ContaPessoaFisica';
import { ContaPessoaJuridica } from './class/ContaPessoaJuridica';

const contaPF: ContaPessoaFisica = new ContaPessoaFisica('Gefferson', 1, 123456789);

console.log(contaPF)

contaPF.alterarNome('abc')
console.log(contaPF)


const contaPJ: ContaPessoaJuridica = new ContaPessoaJuridica('Gts Desenvolvimento', 2, 374928349000159)
console.log(contaPJ);
contaPJ.emprestimo();
contaPJ.depositar(123);




