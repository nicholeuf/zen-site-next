'use client';
import { Inter, Sacramento } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import mediaQuery from 'css-mediaquery';

import constants from './constants';
import DeviceType from 'types/DeviceType';
import getWidthByDeviceType from '../ssrMediaQueries/getWidthByDeviceType';

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

const ssrMatchMedia = (deviceType: DeviceType) => (query: string) => {
  return {
    matches: mediaQuery.match(query, {
      width: getWidthByDeviceType(deviceType),
    }),
  };
};

// Default theme https://mui.com/material-ui/customization/default-them
// light: will be calculated from palette.primary.main,
// dark: will be calculated from palette.primary.main,
// contrastText: will be calculated to contrast with palette.primary.main
const theme = (deviceType: DeviceType) => {
  // Shared link styles used for both MUI Link and global <a> elements.
  const linkStyles = {
    color: constants.colors.guava,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus-visible': {
      outline: 'auto 5px -webkit-focus-ring-color',
      outlineOffset: '3px',
    },
  } as const;

  const mainTheme = createTheme({
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
      MuiUseMediaQuery: {
        defaultProps: {
          ssrMatchMedia: ssrMatchMedia(deviceType),
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            overflowX: 'hidden',
            maxWidth: '100vw',
          },
          a: linkStyles,
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
        styleOverrides: {
          root: linkStyles,
        },
      },
    },
  });

  return responsiveFontSizes(mainTheme);
};

export default theme;
