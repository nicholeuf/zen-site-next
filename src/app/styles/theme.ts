'use client';
import { Inter, Sacramento } from 'next/font/google';
import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
import type { ButtonProps } from '@mui/material/Button';
import type { IconButtonProps } from '@mui/material/IconButton';
import type { LinkProps } from '@mui/material/Link';

// Helper for typing styleOverride callbacks: MUI passes an object containing
// the theme and (optionally) ownerState for the component. We declare a
// small generic alias so we can annotate the full `props` parameter clearly.
type OverrideProps<OwnerState = any> = {
  theme: Theme;
  ownerState?: OwnerState;
};
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
  } as const;

  // helper that returns the common interactive styles for many MUI components
  // returns both a `root` style (for component styleOverrides) and separate
  // hover/focus pieces for use in global baseline selectors.
  const buildInteractiveParts = (t: Theme) => {
    const transition = 'color 150ms ease, background-color 150ms ease';
    const hover = { backgroundColor: t.palette.action.hover };
    const focus = {
      backgroundColor: t.palette.action.focus,
      outline: `3px solid ${t.palette.primary.main}`,
      outlineOffset: 3,
    };

    const root = {
      transition,
      '&:hover': hover,
      '&:focus-visible, &.Mui-focusVisible': focus,
    };

    return {
      root,
      transitionRule: { transition },
      hoverRule: hover,
      focusRule: focus,
    };
  };

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
        // Make CssBaseline a theme-aware override so global <a> can use theme.palette.primary.main
        styleOverrides: (themeParam: Theme) => {
          const parts = buildInteractiveParts(themeParam);
          return {
            body: {
              overflowX: 'hidden',
              maxWidth: '100vw',
            },
            // transitions for native interactive elements (use the same transition string)
            'a, button, [role="button"], [role="link"]': {
              transition: parts.transitionRule.transition,
            },
            // base link styles
            a: {
              ...linkStyles,
              '&:focus-visible': parts.focusRule,
            },
            // hover for native elements
            'a:hover, button:hover, [role="button"]:hover, [role="link"]:hover':
              parts.hoverRule,
            // focus-visible for native elements
            'a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible, [role="button"]:focus-visible, [role="link"]:focus-visible, [tabindex]:focus-visible':
              parts.focusRule,
          };
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
        styleOverrides: {
          root: (props: OverrideProps<LinkProps>) => {
            const parts = buildInteractiveParts(props.theme);
            return {
              color: linkStyles.color,
              textDecoration: linkStyles.textDecoration,
              transition: parts.transitionRule.transition,
              '&:hover': {
                ...parts.hoverRule,
                ...linkStyles['&:hover'],
              },
              '&:focus-visible, &.Mui-focusVisible': parts.focusRule,
            };
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: (props: OverrideProps<ButtonProps>) =>
            buildInteractiveParts(props.theme).root,
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: (props: OverrideProps<IconButtonProps>) =>
            buildInteractiveParts(props.theme).root,
        },
      },
    },
  });

  return responsiveFontSizes(mainTheme);
};

export default theme;
