import { api, IConta } from "../api"

export const login = async (email: string): Promise<IConta | void> => {
    const data: IConta = await api;

    if (email !== data.email) {
        alert(`Email inválido`);
        return;
    }
    alert(`Login efetuado com sucesso!\nBoas vindas ${email}`)
    return data;
}
