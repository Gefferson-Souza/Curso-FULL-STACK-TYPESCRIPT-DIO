import {
  Box,
} from '@chakra-ui/react'
import { ReactNode } from 'react';


interface CardProps {
  children: ReactNode
}


export const Card = ({ children }: CardProps) => {

  return (
    <Box margin='0 auto' maxWidth='768px' backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      {children}
    </Box>
  )
}