'use client';
import { Inter, Sacramento } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import mediaQuery from 'css-mediaquery';

import constants from './constants';
import DeviceType from '@/types/DeviceType';

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
  const getWidthByDeviceType = () => {
    switch (deviceType) {
      case 'mobile':
        return '0px';
      case 'tablet':
        return '768px';
      default:
        return '1024px';
    }
  };
  return {
    matches: mediaQuery.match(query, {
      width: getWidthByDeviceType(),
    }),
  };
};

// Default theme https://mui.com/material-ui/customization/default-them
// light: will be calculated from palette.primary.main,
// dark: will be calculated from palette.primary.main,
// contrastText: will be calculated to contrast with palette.primary.main
const theme = (deviceType: DeviceType) => {
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
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
  });

  return responsiveFontSizes(mainTheme);
};

export default theme;
