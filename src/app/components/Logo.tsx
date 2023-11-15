import { VStack, Heading, Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
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
        mt={-8}
        fontSize="94px"
        fontWeight="500"
        textTransform="uppercase"
      >
        Club
      </Heading>
      <Text mt={1.5} fontSize="xs" fontWeight="500">
        O jogo online multiplayer gratuito de memes
      </Text>
    </VStack>
  );
};
