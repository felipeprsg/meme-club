import React, { useState } from 'react';

import {
  HStack,
  Heading,
  VStack,
  Text,
  Input,
  Button,
  Image,
  Stack,
} from '@chakra-ui/react';

import { Icon } from '@/app/components/Icon';

interface MemeProps {}

export const Meme: React.FC<MemeProps> = ({}) => {
  const [subtitle, setSubtitle] = useState<string | null>(null);

  return (
    <VStack
      w="100%"
      h="100%"
      minH="100vh"
      px={6}
      py={12}
      spacing={[6, 6, 20, 20]}
      align="center"
      justify="center"
    >
      <Heading fontSize="3xl" textAlign="center">
        Legende o seu meme!
      </Heading>

      <Stack
        w="100%"
        direction={['column-reverse', 'column-reverse', 'row', 'row']}
        spacing={[8, 8, 24, 24]}
        align={['center', 'center', 'start', 'start']}
        justify="center"
      >
        <VStack spacing={7}>
          <Image src="/assets/meme.png" alt="meme" />

          <Button
            w="fit-content"
            px={6}
            leftIcon={
              <Icon name="arrows-clockwise" boxSize="17px" color="white" />
            }
            variant="secondary"
            // isDisabled
            _hover={{ opacity: 0.75 }}
            _active={{ opacity: 0.75 }}
            onClick={() => {}}
          >
            Trocar meme
          </Button>
        </VStack>

        <VStack
          w="100%"
          maxW="20rem"
          spacing={4}
          align={['center', 'center', 'start', 'start']}
        >
          <Text ml={3} fontSize="xs" fontWeight="700" textTransform="uppercase">
            Tempo restante
            <br />
            <Text as="span" fontSize="sm" fontWeight="500">
              0:59
            </Text>
          </Text>

          <Stack
            w="100%"
            direction={['column', 'column', 'row', 'row']}
            spacing={2}
          >
            <Input
              w="100%"
              h={10}
              placeholder="Legenda"
              _placeholder={{ color: 'white', fontSize: 'xs' }}
              color="white"
              rounded="3xl"
              bgColor="purple.200"
              border="none"
              focusBorderColor="transparent"
              onChange={(event) => setSubtitle(event.target.value)}
              _hover={{ opacity: 0.9 }}
              _active={{ opacity: 0.75 }}
            />

            <Button
              w={['100%', '100%', 'fit-content', 'fit-content']}
              px={6}
              variant="primary"
              isDisabled={!subtitle}
              _hover={{ opacity: 0.75 }}
              onClick={() => {}}
            >
              Enviar meme
            </Button>
          </Stack>
        </VStack>
      </Stack>
    </VStack>
  );
};
