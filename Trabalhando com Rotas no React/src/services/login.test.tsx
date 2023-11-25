import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;

    const mockEmail: string = 'geff@dio.bank';

    const mockMessage: string = 'Login efetuado com sucesso!\nBoas vindas'

    it('Deve exibir um alert com boas vindas, Email correto', async () => {
        await login(mockEmail);
        expect(mockAlert).toHaveBeenCalledWith(`${mockMessage} ${mockEmail}`);
    })

    it('Deve exibir mensagem de erro, Email incorreto', async () => {
        await login('Outro nome');
        expect(mockAlert).toHaveBeenCalledWith(`Email inválido`);
    })

    it('Deve retornar "abc"', async () => {
        await login('abc')
        expect(mockAlert).not.toHaveBeenCalledWith(`${mockMessage} ${mockEmail}`);
    })
})