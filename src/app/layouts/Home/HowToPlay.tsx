import React from 'react';

import NextLink from 'next/link';

import { ListItem, UnorderedList, VStack, Text } from '@chakra-ui/react';

import { Icon } from '@/app/components/Icon';

export const HowToPlay: React.FC = () => {
  return (
    <VStack w="100%" h="100%" minH="100vh" py={6} spacing={8} align="center">
      <VStack
        as={NextLink}
        href="/"
        _hover={{ textDecoration: 'none', opacity: 0.75 }}
      >
        <Icon name="chevron-up" boxSize="15" transform="rotate(180deg)" />
        <Text>Como jogar?</Text>
      </VStack>

      <UnorderedList
        w={['75vw', '50vw', '50vw', '25vw']}
        spacing={4}
        fontSize="sm"
        fontWeight="500"
      >
        <ListItem>
          Maecenas semper aliquam urna nibh adipiscing ut vel. Nunc arcu eu leo
          risus enim congue. Congue venenatis tristique accumsan eget sed morbi.
        </ListItem>
        <ListItem>
          Ornare tempor tincidunt cursus morbi. Egestas consectetur etiam eget
          pharetra. Pellentesque massa risus amet viverra mi hendrerit lectus.
          Sit interdum nibh ac etiam vel non.
        </ListItem>
        <ListItem>
          Massa leo adipiscing turpis mattis senectus felis dignissim hendrerit
          amet. Praesent mauris nisl odio condimentum diam morbi. Nunc purus
          tincidunt ut in.
        </ListItem>
        <ListItem>
          Turpis amet lectus cras tellus mus varius augue. Purus congue felis
          leo elit. Faucibus nunc nisi nisl non. Adipiscing maecenas.
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};
