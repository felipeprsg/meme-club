import React from 'react';

import NextLink from 'next/link';

import { VStack, Heading, Button, HStack } from '@chakra-ui/react';

import { FormMenu } from '@/app/components/FormMenu';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const FormSchema = z.object({
  players: z.number().default(2),
  rounds: z.number().default(3),
  time: z.number().default(2),
});

type FormData = z.infer<typeof FormSchema>;

interface CreateRoomProps {}

export const CreateRoom: React.FC<CreateRoomProps> = ({}) => {
  const playerOptions = {
    '2 jogadores': 2,
    '3 jogadores': 3,
    '4 jogadores': 4,
    '5 jogadores': 5,
  };

  const roundOptions = {
    '2 rodadas': 2,
    '3 rodadas': 3,
    '4 rodadas': 4,
    '5 rodadas': 5,
  };

  const timeOptions = {
    '2 minutos': 2,
    '3 minutos': 3,
    '4 minutos': 4,
    '5 minutos': 5,
  };

  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async ({
    players,
    rounds,
    time,
  }) => {};

  return (
    <VStack
      w="100%"
      h="100%"
      minH="100vh"
      py={12}
      spacing={20}
      align="center"
      justify="start"
    >
      <Heading fontSize="3xl">Crie sua sala!</Heading>

      <FormProvider {...methods}>
        <VStack spacing={7}>
          <FormMenu
            name="players"
            label="Jogadores"
            icon="chevron-up"
            options={playerOptions}
          />

          <FormMenu
            name="rounds"
            label="Rodadas"
            icon="chevron-up"
            options={roundOptions}
          />

          <FormMenu
            name="time"
            label="Duração da rodada"
            icon="chevron-up"
            options={timeOptions}
          />

          <HStack w="100%" spacing={3}>
            <Button as={NextLink} href="/" variant="secondary">
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Criar sala
            </Button>
          </HStack>
        </VStack>
      </FormProvider>
    </VStack>
  );
};
