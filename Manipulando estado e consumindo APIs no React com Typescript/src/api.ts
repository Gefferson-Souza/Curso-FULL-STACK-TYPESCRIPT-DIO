export interface IConta{
    email:string,
    password:string,
    name:string
}

const conta: IConta = {
    email: 'geff@dio.bank',
    password: '123456',
    name: 'Gefferson'
}

export const api = new Promise<IConta>((resolve) => {
    setTimeout(() => resolve(conta), 3000)
})