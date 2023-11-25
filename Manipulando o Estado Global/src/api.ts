export interface IConta {
    email: string,
    password: string,
    name: string,
    balance: number,
    id:string
}

const conta: IConta = {
    email: 'geff@dio.bank',
    password: '123456',
    name: 'Gefferson',
    balance: 2000.00,
    id:'1'
}

export const api = new Promise<IConta>((resolve) => {
    setTimeout(() => resolve(conta), 3000)
})