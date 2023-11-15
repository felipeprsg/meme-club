import React from 'react';

import { Heading, VStack, Text, Spinner } from '@chakra-ui/react';

interface MemeSentProps {}

export const MemeSent: React.FC<MemeSentProps> = ({}) => {
  return (
    <VStack
      w="100%"
      h="100%"
      minH="100vh"
      p={12}
      spacing={8}
      align="center"
      justify="center"
    >
      <VStack spacing={0}>
        <Heading
          fontFamily="'A little sunshine', sans-serif"
          fontSize="120px"
          fontWeight="500"
          textTransform="uppercase"
        >
          Meme
        </Heading>
        <Heading
          mt={-6}
          fontSize="54px"
          fontWeight="500"
          textTransform="uppercase"
        >
          Enviado
        </Heading>
      </VStack>

      <Text fontSize="xs" fontWeight="500">
        Espere outros participantes enviarem...
      </Text>

      <VStack mt={3} p={0} spacing={6} align="center" justify="center">
        <Spinner w={12} h={12} speed="0.75s" />

        <Text
          w="100%"
          fontSize="xs"
          fontWeight="700"
          textTransform="uppercase"
          textAlign="center"
        >
          Tempo restante
          <br />
          <Text as="span" fontSize="sm" fontWeight="500">
            0:59
          </Text>
        </Text>
      </VStack>
    </VStack>
  );
};
