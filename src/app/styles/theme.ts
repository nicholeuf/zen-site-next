'use client';
import { Inter, Sacramento } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const sacramento = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sacramento',
  display: 'swap',
});

export const constants = {
  header: {
    height: '60px',
  },
  footer: {
    height: '175px',
  },
  colors: {
    guava: '#FA2742',
    carob: '#373833',
    cream: '#E8EAE3',
    gunmetal: '#2b303aff',
  },
};

// Default theme https://mui.com/material-ui/customization/default-them
// light: will be calculated from palette.primary.main,
// dark: will be calculated from palette.primary.main,
// contrastText: will be calculated to contrast with palette.primary.main
const theme = createTheme({
  spacing: 8,
  palette: {
    mode: 'light',
    primary: {
      main: constants.colors.guava,
    },
    secondary: {
      main: constants.colors.carob,
    },
    background: {
      default: constants.colors.cream,
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    fontSize: 14,
    sacramento: {
      fontFamily: sacramento.style.fontFamily,
      fontSize: '26px',
    },
    body2: {
      // default is 0.875rem
      fontSize: '0.9rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowX: 'hidden',
          maxWidth: '100vw',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },
});

export default responsiveFontSizes(theme);
