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
    <ThemeProvider theme={appliedTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyles;
