import { login } from './login'

describe('login', () => {
    beforeEach(() => {
        // Limpar mocks antes de cada teste
        jest.clearAllMocks();
    });

    it('deve exibir alerta de boas-vindas', () => {
        // Substituir a função nativa de alerta por um mock
        
        jest.spyOn(window, 'alert').mockImplementation(() => {});

        // Chamar a função login
        login();

        // Verificar se a função de alerta foi chamada
        expect(window.alert).toHaveBeenCalledWith('Bem Vindo!');
    });
});