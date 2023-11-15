import React from 'react';

import NextLink from 'next/link';

import { HStack, VStack, Button, Text, Link } from '@chakra-ui/react';

import { FormInput } from '@/app/components/FormInput';
import { Logo } from '@/app/components/Logo';
import { Icon } from '@/app/components/Icon';

import { Avatar } from '../components/Avatar';

import { useAuth } from '@/app/hooks/useAuth';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const FormSchema = z.object({
  username: z.string().nonempty('Campo obrigatório.'),
  room: z.string().nonempty('Campo obrigatório'),
});

type FormData = z.infer<typeof FormSchema>;

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { user } = useAuth();

  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async ({ username, room }) => {};

  return (
    <VStack w="100%" h="100%" minH="100vh" py={6} spacing={7} align="center">
      <Logo />

      <Avatar mb={-1} />

      <FormProvider {...methods}>
        <VStack
          as="form"
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
          w="fit-content"
          spacing={2.5}
        >
          <FormInput name="username" placeholder="Nome de usuário" />
          <FormInput name="room" placeholder="Código da sala" />

          <HStack w="100%" mt={2.5} spacing={3}>
            <Button type="submit" variant="primary">
              Jogar agora
            </Button>
            <Button as={NextLink} href="/sala/criar" variant="secondary">
              Criar sala
            </Button>
          </HStack>

          <HStack w="100%" spacing={3}>
            <Button as={NextLink} href="/auth/login" variant="default">
              Entrar
            </Button>

            <Button as={NextLink} href="/auth/cadastro" variant="default">
              Cadastrar-se
            </Button>
          </HStack>
        </VStack>
      </FormProvider>

      <VStack
        as={NextLink}
        mt={8}
        pb={6}
        href="/como-jogar"
        _hover={{ textDecoration: 'none', opacity: 0.75 }}
      >
        <Icon name="chevron-up" boxSize="15" />
        <Text>Como jogar?</Text>
      </VStack>
    </VStack>
  );
};
