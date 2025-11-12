'use client';
import type { ButtonProps } from '@mui/material/Button';
import type { IconButtonProps } from '@mui/material/IconButton';
import type { LinkProps } from '@mui/material/Link';
import {
  createTheme,
  responsiveFontSizes,
  type Theme,
} from '@mui/material/styles';
import { Inter, Sacramento } from 'next/font/google';

// Helper for typing styleOverride callbacks: MUI passes an object containing
// the theme and (optionally) ownerState for the component. We declare a
// small generic alias so we can annotate the full `props` parameter clearly.
type OverrideProps<OwnerState = any> = {
  theme: Theme;
  ownerState?: OwnerState;
};

import mediaQuery from 'css-mediaquery';
import type DeviceType from 'types/DeviceType';
import getWidthByDeviceType from '../ssrMediaQueries/getWidthByDeviceType';
import constants from './constants';

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
  // Note: link styles are applied inline in CssBaseline below so MUI Link can inherit.

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
        contrastText: constants.colors.cream,
      },
      // ensure text uses the project's carob color by default
      text: {
        primary: constants.colors.carob,
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
              color: themeParam.palette.text.primary,
            },
            // transitions for native interactive elements (use the same transition string)
            'a, button, [role="button"], [role="link"]': {
              transition: parts.transitionRule.transition,
            },
            // base link styles (inline so components can inherit)
            a: {
              // base link color should be the dark `carob` for good contrast;
              // links are underlined by default so they remain visible when
              // their color matches body text. Hover uses guava as the accent.
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: constants.fontWeights.semiBold,
              '&:hover': {
                color: themeParam.palette.primary.main,
              },
              '&:focus-visible': parts.focusRule,
            },
            // hover for native elements
            'a:hover, button:hover, [role="button"]:hover, [role="link"]:hover':
              parts.hoverRule,
            // focus-visible for native interactive elements only.
            // NOTE: removed the overly-broad `[tabindex]:focus-visible` selector
            // to avoid applying focus styles to non-interactive elements that
            // may carry tabindex for other reasons.
            'a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible, [role="button"]:focus-visible, [role="link"]:focus-visible':
              parts.focusRule,
          };
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'always',
          // let links inherit color so global `a` styles
          // control the default color (carob) and hover accent (guava)
          color: 'inherit',
        },
        styleOverrides: {
          root: (props: OverrideProps<LinkProps>) => {
            const parts = buildInteractiveParts(props.theme);
            return {
              transition: parts.transitionRule.transition,
              fontWeight: constants.fontWeights.semiBold,
              '&:hover': parts.hoverRule,
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
          root: (props: OverrideProps<IconButtonProps>) => {
            const parts = buildInteractiveParts(props.theme);
            return {
              ...parts.root,
              // default icon buttons are round in this project (e.g. footer nav)
              borderRadius: '50%',
              // ensure focus-visible state keeps the round shape too
              '&:focus-visible, &.Mui-focusVisible': {
                ...parts.focusRule,
                borderRadius: '50%',
              },
            };
          },
        },
      },
    },
  });

  return responsiveFontSizes(mainTheme);
};

export default theme;
