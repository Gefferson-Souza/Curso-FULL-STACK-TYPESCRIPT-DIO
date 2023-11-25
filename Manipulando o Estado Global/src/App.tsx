import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Conta from './pages/Conta';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import ContaInfo from './pages/ContaInfo';
import { ReactNode, createContext } from 'react';

interface IAppContext {
  user: string
}

interface AppContextProviderProps {
  children: ReactNode
}

export const AppContext = createContext({} as IAppContext)

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const user = 'Gefferson'
  return (
    <AppContext.Provider value={{ user }} >
      {children}
    </AppContext.Provider>
  )
}

function App() {



  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/conta/:id' element={<Conta />} />
              <Route path='/contaInfo' element={<ContaInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
