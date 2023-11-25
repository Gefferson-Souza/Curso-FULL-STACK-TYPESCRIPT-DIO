import { Center, Heading, Stack, Text } from "@chakra-ui/react"

interface CardInfoProps {
    title: string,
    content: string,
    balance?: string,

}

const CardInfo = ({ title, content, balance }: CardInfoProps) => {

    return (
        <Center>
            <Stack>
                <Heading size={'sm'}>
                    {title}
                </Heading>
                <Text>
                    {content}
                </Text>
                {balance ?
                    <Text>
                        {balance}
                    </Text> :
                    ''
                }
            </Stack>
        </Center>
    )
}

export default CardInfo;