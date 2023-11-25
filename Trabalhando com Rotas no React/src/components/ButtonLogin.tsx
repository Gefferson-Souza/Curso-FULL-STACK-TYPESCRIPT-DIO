import {
    Button,
    Center
} from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface IButtonLoggin {
    onClick: MouseEventHandler,
}


export const ButtonLogin = ({ onClick }: IButtonLoggin) => {

    return (
        <Center>
            <Button onClick={onClick} colorScheme='blue' size='sm' width='100%' marginTop='10px'>
                LOGIN
            </Button>
        </Center>
    )
}