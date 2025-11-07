'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiGlobalStyles from '@mui/material/GlobalStyles';

import theme from '@/app/styles/theme';
import DeviceType from 'types/DeviceType';

interface GlobalStylesProps {
  children: React.ReactNode;
  deviceType: DeviceType;
  // When true, disable ripples (useful for tests to avoid async ripple state updates)
  disableRipple?: boolean;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({
  children,
  deviceType,
  disableRipple = false,
}) => {
  const baseTheme = theme(deviceType);

  const appliedTheme = disableRipple
    ? createTheme(baseTheme, {
        components: {
          MuiButtonBase: {
            defaultProps: {
              disableRipple: true,
            },
          },
        },
      })
    : baseTheme;

  return (
    <ThemeProvider theme={appliedTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {/* Global project-wide pseudo styles for hover + focus-visible */}
      <MuiGlobalStyles
        styles={(theme) => ({
          // add gentle transitions for interactive elements
          'a, button, [role="button"], [role="link"]': {
            transition:
              'color 150ms ease, background-color 150ms ease, box-shadow 150ms ease',
          },

          // global hover styles (can be overridden by component-level styles)
          'a:hover, button:hover, [role="button"]:hover, [role="link"]:hover, .MuiButton-root:hover, .MuiIconButton-root:hover, .MuiLink-root:hover, .MuiListItemButton-root:hover, .MuiMenuItem-root:hover':
            {
              // use the theme palette by default; components can override
              backgroundColor: theme.palette.action.hover,
            },

          // global focus-visible styles for keyboard focus accessibility
          // include common MUI root classes so MUI components pick up the same focus style
          'a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible, [role="button"]:focus-visible, [role="link"]:focus-visible, [tabindex]:focus-visible, button.MuiButton-root:focus-visible, .MuiIconButton-root:focus-visible, a.MuiLink-root:focus-visible, .MuiTypography-root.MuiLink-root:focus-visible, .MuiListItemButton-root:focus-visible, .MuiMenuItem-root:focus-visible':
            {
              backgroundColor: theme.palette.action.focus,
              // use a slightly thicker outline for visibility and ensure it overrides MUI defaults
              outline: `3px solid ${theme.palette.primary.main} !important`,
              outlineOffset: 2,
              borderRadius: 4,
            },
        })}
      />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyles;
