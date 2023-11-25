import {
  Heading,
  Box,
} from '@chakra-ui/react'

import { useContext } from 'react'

import { AppContext } from '../../App'

export const Header = () => {
  const context = useContext(AppContext);
  console.log('HEADER',context.user = 'babac')
  return (
    <Box backgroundColor='orange' >
      <Heading marginLeft='30px' color='white' >Dio Bank</Heading>
    </Box>
  )
}
