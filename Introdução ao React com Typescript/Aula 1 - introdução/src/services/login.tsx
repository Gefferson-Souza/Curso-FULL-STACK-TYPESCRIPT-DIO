export const login = (): void => {
    alert("Bem Vindo!")
}


function executarOperacao(numero: number, operacao: (x: number) => number): number {
    return operacao(numero);
}

const quadrado = (x: number): number => x * x;

const resultado = executarOperacao(5, quadrado); // Retorna 25 