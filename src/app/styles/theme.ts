import { extendTheme } from '@chakra-ui/react';

import { Asap } from 'next/font/google';

const Font = Asap({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        bg: 'radial-gradient(50% 50% at 50% 50%, #3042E2 0%, #5812C9 100%)',
      },
    },
  },
  fonts: {
    heading: Font.style.fontFamily,
    body: Font.style.fontFamily,
  },
  colors: {
    gray: 'rgba(255, 255, 255, 0.50)', // for border color
    red: '#E63946',
    purple: {
      100: 'rgba(255, 255, 255, 0.10)',
      150: 'rgba(255, 255, 255, 0.20)',
      200: 'rgba(255, 255, 255, 0.25)',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '600',
      },
    },
    Text: {
      baseStyle: {
        fontSize: 'sm',
        textAlign: ['center', 'center', 'start', 'start'],
      },
    },
    Button: {
      baseStyle: {
        h: 10,
        w: '100%',
        rounded: '3xl',
        color: 'white',
        fontSize: 'xs',
        _hover: {
          opacity: 0.75,
        },
        _active: {
          opacity: 0.5,
        },
      },
      variants: {
        primary: {
          bgColor: '#28AA2E',
          textTransform: 'uppercase',
          fontSize: 'xs',
        },
        secondary: {
          bgColor: 'red',
          textTransform: 'uppercase',
          fontSize: 'xs',
        },
        default: {
          fontWeight: '500',
          bgColor: 'transparent',
          border: 'solid 1px',
          borderColor: 'gray',
          fontSize: 'xs',
        },
      },
    },
  },
});
