import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  colors: {
    brand: {
      green: '#06D444',
    },
  },
  styles: {
    global: {
      html: {
        fontSize: '75%' /* 12px */,
      },
      body: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '1rem' /* 12px */,
        bg: '#f5f5f5',
      },
      a: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
