import React from 'react';

import { Heading, VStack, Text, Spinner } from '@chakra-ui/react';

interface VoteProps {}

export const Vote: React.FC<VoteProps> = ({}) => {
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
      <Heading fontSize="3xl" textAlign="center">
        Vote no meme!
      </Heading>

      <Text
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
  );
};
