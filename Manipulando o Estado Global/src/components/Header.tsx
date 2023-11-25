import {
  Heading,
  Box,
} from '@chakra-ui/react'

import { useContext } from 'react'

import { AppContext } from './AppContext'

export const Header = () => {
  const context = useContext(AppContext);
  
  return (
    <Box backgroundColor='orange' >
      <Heading marginLeft='30px' color='white' >Dio Bank</Heading>
    </Box>
  )
}
