import { Box, Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex justify="center" align="center">
        <Text fontSize="sm">
          Feito com ❤️ by {'GTS DEV '}
          <Link href="https://github.com/Gefferson-Souza" isExternal color="teal.300">
            | GitHub
          </Link>
        </Text>
      </Flex>
    </Box>
  );
}
