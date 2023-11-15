import React from 'react';

import NextLink from 'next/link';

import { HStack, VStack, Button, useToast } from '@chakra-ui/react';

import { FormInput } from '@/app/components/FormInput';
import { Logo } from '@/app/components/Logo';
import { Icon } from '@/app/components/Icon';

import { useAuth } from '@/app/hooks/useAuth';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const FormSchema = z.object({
  email: z.string().nonempty('Campo obrigatório.').email('Email inválido.'),
  password: z.string().nonempty('Campo obrigatório.'),
  rememberMe: z.boolean().default(true),
});

type FormData = z.infer<typeof FormSchema>;

const authErrorMessages: Record<
  string,
  { title: string; description: string }
> = {
  'auth/invalid-login-credentials': {
    title: 'Credenciais inválidas',
    description: 'Revise-as e tente novamente.',
  },
  'auth/user-not-found': {
    title: 'Conta não encontrada',
    description: 'Não encontramos seu perfil. Por favor, contate o suporte.',
  },
  'auth/unknown-error': {
    title: 'Erro desconhecido',
    description: 'Tente novamente mais tarde.',
  },
};

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const toast = useToast();

  const errorToast = (title: string, description: string) => {
    return toast({
      title,
      description,
      status: 'error',
      duration: 4000,
      containerStyle: {
        color: 'white',
        bgColor: 'red',
        borderRadius: 'md',
      },
    });
  };

  const onSubmit: SubmitHandler<FormData> = async ({
    email,
    password,
    rememberMe,
  }) => {
    const result = await signIn(email, password, rememberMe);

    if (result.success) return;

    if (result.error === null) {
      const message = authErrorMessages['auth/unknown-error'];
      return errorToast(message.title, message.description);
    }

    const message =
      authErrorMessages[result.error] ||
      authErrorMessages['auth/unknown-error'];

    methods.resetField('password');

    return errorToast(message.title, message.description);
  };

  return (
    <VStack
      w="100%"
      h="100%"
      minH="100vh"
      py={6}
      spacing={10}
      align="center"
      justify="center"
    >
      <Logo />

      <FormProvider {...methods}>
        <VStack
          as="form"
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
          w="fit-content"
          spacing={2.5}
        >
          <FormInput name="email" type="email" placeholder="E-mail" />
          <FormInput name="password" type="password" placeholder="Senha" />

          <HStack w="100%" mt={2.5} spacing={3}>
            <Button as={NextLink} href="/" variant="secondary">
              Voltar
            </Button>
            <Button type="submit" variant="primary">
              Entrar
            </Button>
          </HStack>

          <Button
            variant="default"
            leftIcon={<Icon name="google" />}
            iconSpacing={3}
            onClick={() => {
              /* sign in with google */
            }}
          >
            Entrar com Google
          </Button>
        </VStack>
      </FormProvider>
    </VStack>
  );
};

export default Login;
