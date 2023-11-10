import { soma, multiplica } from './soma';

describe('Adicionar mais 1 ao número', () => {

    it('NÃO PODE PASSARH', () => {
        const value: number = soma(2);
        expect(value).toBe(3);
    })

    it('ESSA TEM QUE DAR CERTO', () => {
        const value: number = soma(5);
        expect(value).toBe(6);
    })

    it('Multiplica por 2, Falha', () => {
        const value: number = multiplica(5,5);
        expect(value).not.toBe(25);
    })
})
