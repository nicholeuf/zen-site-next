import { useColorScheme } from "@mui/material/styles";
// @ts-ignore - MUI's Mode is exported but is not in the type definitions for some reason
import type { Mode } from "@mui/material/useColorScheme";
import { useEffect } from "react";

interface StorybookThemeProps {
  muiMode: Mode;
  children: React.ReactNode;
}

const StorybookTheme: React.FC<StorybookThemeProps> = ({
  muiMode,
  children,
}) => {
  const { mode, setMode } = useColorScheme();

  // Sync Storybook's muiMode global with MUI's color scheme mode
  useEffect(() => {
    if (mode !== muiMode) {
      setMode(muiMode);
    }
  }, [mode, muiMode, setMode]);

  return children;
};
export default StorybookTheme;
