import React, { useState } from 'react';

import {
  VStack,
  Avatar as ChakraAvatar,
  StackProps,
  Circle,
  Button,
} from '@chakra-ui/react';

import { Icon } from '@/app/components/Icon';

export const Avatar: React.FC<StackProps> = (props) => {
  const [avatar, setAvatar] = useState(0);

  return (
    <VStack spacing={0} {...props}>
      <ChakraAvatar w="110px" h="110px" src={`/assets/avatar/${avatar}.png`} />

      <Button
        zIndex={1}
        w="auto"
        h="auto"
        size="xs"
        mt={-3}
        p="7px"
        bgColor="white"
        borderRadius="full"
        onClick={() => setAvatar((prev) => (prev + 1) % 3)}
        _hover={{ cursor: 'pointer', opacity: 0.9 }}
        _active={{ opacity: 0.8 }}
      >
        <Icon name="arrows-clockwise" boxSize="17px" color="#3A55DB" />
      </Button>
    </VStack>
  );
};
