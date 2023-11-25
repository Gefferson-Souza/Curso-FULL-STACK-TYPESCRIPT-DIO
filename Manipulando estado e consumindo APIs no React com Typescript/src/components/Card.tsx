import {
  Center,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';

import { login } from '../services/login';
import { ButtonLogin } from './ButtonLogin'
import { api, IConta } from '../api';


export const Card = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [userData, setUserData] = useState<IConta | undefined>();

  console.log(api)

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const data: IConta = await api;
      setUserData(data);
    }
    getData();
  }, [])

  console.log(userData)

  function Loading(): JSX.Element {
    return (
      <Button
        size='4'
        isLoading
        loadingText='Loading'
        colorScheme='teal'
        variant='outline'
        border='none'
        spinnerPlacement='start'
      >
      </Button>
    )
  }


  return (
    <Box margin='0 auto' maxWidth='768px' backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Center>
        <h2>
          {userData ? userData.name : <Loading />}
        </h2>
      </Center>
      <Input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <ButtonLogin
        onClick={() => login(email)}
      />
    </Box>
  )
}