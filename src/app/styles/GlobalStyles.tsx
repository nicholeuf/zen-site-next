"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeviceType from "types/DeviceType";
import theme from "@/app/styles/theme";

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
    // https://mui.com/material-ui/customization/css-theme-variables/configuration/#force-theme-recalculation-between-modes
    // @ts-ignore -- forceThemeRerender is not yet in the @mui/material typings as of v5.13, but it is needed to ensure theme updates correctly when toggling color schemes
    <ThemeProvider theme={appliedTheme} defaultMode="light" forceThemeRerender>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyles;
