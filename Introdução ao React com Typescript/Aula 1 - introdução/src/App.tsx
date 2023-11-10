import './App.css'
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Container,
  Input,

} from '@chakra-ui/react'


function App() {

  return (
    <ChakraProvider>
      <Container>
        <Box marginTop='40%' >
          <Center>
            <h1>Faça login</h1>
          </Center>
          <Input size='sm' margin='0.5rem' placeholder='email' />
          <Input size='sm' margin='0.5rem' placeholder='password' />
          <Button colorScheme='green' margin='0.5rem'  width='100%' size='sm' >Entrar</Button>
        </Box>
      </Container>
    </ChakraProvider>
  )
}

export default App
