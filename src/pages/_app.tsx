import type { AppProps } from 'next/app';

import { AuthProvider } from '@/app/contexts/AuthContext';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/app/styles/theme';

import '@/app/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
