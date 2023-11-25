import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
    return (

        <>
            <Link to={'/conta/1'}>
                <Text>
                    Página da conta
                </Text>
            </Link>
        </>

    )
}

export default ContaInfo;