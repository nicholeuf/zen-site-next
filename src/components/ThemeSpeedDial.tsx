"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { useColorScheme } from "@mui/material/styles";
import { useState } from "react";

const actions = [
  { icon: <LightModeIcon />, name: "Light", mode: "light" as const },
  { icon: <DarkModeIcon />, name: "Dark", mode: "dark" as const },
  { icon: <SettingsBrightnessIcon />, name: "System", mode: "system" as const },
];

const ThemeSpeedDial: React.FC = () => {
  const { mode, setMode } = useColorScheme();
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
        ariaLabel="Theme options"
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
