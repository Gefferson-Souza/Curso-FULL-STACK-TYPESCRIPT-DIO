import { ReactNode, createContext } from 'react';

interface IAppContext {
    user: string,
    isLoggedIn: boolean
}

interface AppContextProviderProps {
    children: ReactNode
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: AppContextProviderProps) => {

    const user = 'Gefferson'
    const isLoggedIn = true;

    return (
        <AppContext.Provider value={{ user, isLoggedIn }} >
            {children}
        </AppContext.Provider>
    )
}