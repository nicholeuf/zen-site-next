"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "@/app/styles/theme";
import DeviceType from "types/DeviceType";

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
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyles;
