"use client";

import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider,
  ThemeProviderProps,
} from "@mui/material/styles";
import DeviceType from "types/DeviceType";
import theme from "@/app/styles/theme";

interface MUIThemeProviderProps extends Omit<ThemeProviderProps, "theme"> {
  children: React.ReactNode;
  deviceType?: DeviceType;
  // When true, disable ripples (useful for tests to avoid async ripple state updates)
  disableRipple?: boolean;
  forceThemeRerender?: boolean;
}

const MUIThemeProvider: React.FC<MUIThemeProviderProps> = ({
  children,
  deviceType = "desktop",
  disableRipple = false,
  defaultMode = "light",
  forceThemeRerender = true,
  ...props
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
    <ThemeProvider
      theme={appliedTheme}
      defaultMode={defaultMode}
      // https://mui.com/material-ui/customization/css-theme-variables/configuration/#force-theme-recalculation-between-modes
      // @ts-ignore -- forceThemeRerender is not yet in the @mui/material typings as of v5.13, but it is needed to ensure theme updates correctly when toggling color schemes
      forceThemeRerender={forceThemeRerender}
      {...props}
    >
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
