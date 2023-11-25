import { Box, Center, Grid, GridItem, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo";

import { IConta, api } from "../api";
import { useEffect, useState } from "react";

import { Params, useParams, useNavigate } from "react-router-dom";

const Conta = () => {

    const [userData, setUserData] = useState<IConta | undefined>();

    const { id }: Params<string> = useParams();

    useEffect(() => {
        const getData = async (): Promise<void> => {
            const data: IConta = await api;
            setUserData(data);
        }
        getData();
    }, [])

    const greetingTitle: string = `Bem vindo ${userData?.name}`

    const currentDate = new Date().toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric' })

    const navigate = useNavigate();

    if ((!userData || !id) || (id !== userData.id)) {
        navigate('/')
    }

    return (
        <Box backgroundColor={"#333"} height={"50vh"} >
            <Center>
                {userData ?
                    <Grid templateColumns={"1fr 1fr"} gap={"2rem"} paddingTop={12} >
                        <GridItem
                            width={'30vw'}
                            backgroundColor={"white"}
                            borderRadius={"0.3rem"}>
                            <CardInfo
                                title={greetingTitle}
                                content={`${currentDate}`}
                            />
                        </GridItem>
                        <GridItem
                            width={'30vw'}
                            backgroundColor={"white"}
                            borderRadius={"0.3rem"}>
                            <CardInfo
                                title="Informações da conta"
                                balance={`R$ ${userData.balance}`}
                                content={`status: Ativo`}
                            />
                        </GridItem>
                    </Grid> :

                    <Spinner
                        color="white"
                        size="xl"
                    />}
            </Center>
        </Box>
    )
}

export default Conta;