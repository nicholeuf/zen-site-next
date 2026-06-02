"use client";

import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import React from "react";
import DeviceType from "types/DeviceType";
import MUIThemeProvider from "./MUIThemeProvider";

interface AppThemeRegistryProps {
  children: React.ReactNode;
  deviceType: DeviceType;
  // When true, disable ripples (useful for tests to avoid async ripple state updates)
  disableRipple?: boolean;
  defaultMode?: "light" | "dark" | "system";
}

const AppThemeRegistry: React.FC<AppThemeRegistryProps> = ({
  children,
  deviceType,
  disableRipple = false,
  defaultMode = "light",
}) => {
  return (
    <>
      <InitColorSchemeScript defaultMode={defaultMode} attribute="class" />
      <MUIThemeProvider
        deviceType={deviceType}
        disableRipple={disableRipple}
        defaultMode={defaultMode}
      >
        {children}
      </MUIThemeProvider>
    </>
  );
};

export default AppThemeRegistry;
