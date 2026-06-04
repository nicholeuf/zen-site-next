"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
// @ts-ignore - MUI's Mode is exported but is not in the type definitions for some reason
import type { Mode } from "@mui/material/useColorScheme";
import { useState } from "react";

interface ThemeSpeedDialProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const actions = [
  { icon: <LightModeIcon />, name: "Light", mode: "light" as const },
  { icon: <DarkModeIcon />, name: "Dark", mode: "dark" as const },
  { icon: <SettingsBrightnessIcon />, name: "System", mode: "system" as const },
];

const ThemeSpeedDial: React.FC<ThemeSpeedDialProps> = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getMainIcon = () => {
    switch (mode) {
      case "light":
        return <LightModeIcon />;
      case "dark":
        return <DarkModeIcon />;
      case "system":
      default:
        return <SettingsBrightnessIcon />;
    }
  };

  return (
    <Box sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 100 }}>
      <SpeedDial
        ariaLabel="Theme Switcher"
        icon={<SpeedDialIcon icon={getMainIcon()} />}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        direction="up" // opens upward
        FabProps={{ color: "primary", size: "medium" }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            slotProps={{
              tooltip: {
                title: action.name,
              },
              fab: {
                size: "small",
                // Improve accessibility
                "aria-label": `${action.name} Mode`,
              },
            }}
            onClick={() => {
              setMode(action.mode);
              handleClose();
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ThemeSpeedDial;
