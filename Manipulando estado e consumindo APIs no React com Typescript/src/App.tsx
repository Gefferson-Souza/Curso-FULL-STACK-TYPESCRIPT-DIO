import {
  ChakraProvider,
  Box,
  Stack,
  Center,
} from '@chakra-ui/react'

import { useState } from 'react';

import { Card } from './components/Card';
import { Layout } from './components/Layout';

function App() {

  const [value, setValue] = useState(0);

  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Card />
          <Center>
            <Stack>
              <span>{value}</span>
              <button onClick={() => setValue(newValue => newValue += 1)} > + </button>
              <button onClick={() => setValue(newValue => newValue -= 1)} > - </button>
            </Stack>
          </Center>
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
