import {
  Center,
  Input,
  Box,
} from '@chakra-ui/react'
import { useState } from 'react';

import { login } from '../services/login';
import { ButtonLogin } from './ButtonLogin'


export const Card = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');





  return (
    <Box margin='0 auto' maxWidth='768px' backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <ButtonLogin
        onClick={() => login(email)}
      />
    </Box>
  )
}