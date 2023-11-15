import React from 'react';

import NextLink from 'next/link';

import {
  Avatar,
  Button,
  HStack,
  Heading,
  Tag,
  TagLabel,
  VStack,
  Text,
} from '@chakra-ui/react';

interface PlayerProps {
  avatar: string;
  username: string;
  isLeader?: boolean;
}

const Player = ({ avatar, username, isLeader = false }: PlayerProps) => {
  return (
    <HStack spacing={3}>
      <Avatar w={10} h={10} src={avatar} />

      <Text ml={0.5} fontWeight="500">
        {username}
      </Text>

      {isLeader && (
        <Tag px={4} py={2} bgColor="#5712C8" rounded="2xl">
          <TagLabel
            color="white"
            fontSize="xs"
            fontWeight="700"
            textTransform="uppercase"
          >
            Você é o lider
          </TagLabel>
        </Tag>
      )}
    </HStack>
  );
};

interface RoomProps {}

export const Room: React.FC<RoomProps> = ({}) => {
  return (
    <VStack
      w="fit-content"
      h="100%"
      minH="100vh"
      mx="auto"
      py={12}
      spacing={4}
      align="center"
      justify="center"
    >
      <Heading fontSize="3xl">Sala</Heading>

      <Tag px={4} py={2} bgColor="purple.150" rounded="2xl">
        <TagLabel
          color="white"
          fontSize="xs"
          fontWeight="700"
          textTransform="uppercase"
        >
          05 Jogadores
        </TagLabel>
      </Tag>

      <VStack
        w="100%"
        px={6}
        py={9}
        pb={12}
        spacing={4}
        align="start"
        justify="center"
        bgColor="purple.100"
        rounded="20px"
      >
        <Player avatar="/assets/avatar/0.png" username="MikeSpike" isLeader />
        <Player avatar="/assets/avatar/1.png" username="MikeSpike" />
        <Player avatar="/assets/avatar/2.png" username="MikeSpike" />
        <Player avatar="/assets/avatar/0.png" username="MikeSpike" />
        <Player avatar="/assets/avatar/1.png" username="MikeSpike" />
      </VStack>

      <HStack w="100%" mt={4} spacing={3}>
        <Button as={NextLink} href="/" variant="secondary" onClick={() => {}}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Começar o jogo
        </Button>
      </HStack>
    </VStack>
  );
};
