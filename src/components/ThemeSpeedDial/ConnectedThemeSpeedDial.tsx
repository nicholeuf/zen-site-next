"use client";
import { useColorScheme } from "@mui/material/styles";
import ThemeSpeedDial from "@/components/ThemeSpeedDial";

const ConnectedThemeSpeedDial = () => {
  const { mode, setMode } = useColorScheme();
  return <ThemeSpeedDial mode={mode} setMode={setMode} />;
};

export default ConnectedThemeSpeedDial;
