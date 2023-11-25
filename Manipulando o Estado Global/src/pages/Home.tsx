
import {
    Box, Center, Input
} from '@chakra-ui/react'
import { Card } from '../components/Card';
import { ButtonLogin } from '../components/ButtonLogin';
import { useState } from 'react';
import { login } from '../services/login';




const Home = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <Box minHeight='90vh' backgroundColor='#9413dc' padding='25px'>
            <Card>
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
            </Card >
        </Box>
    )
}


export default Home;