"use client";

import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

export function useCurrentMode() {
  const { mode, systemMode } = useColorScheme();

  const [currentMode, setCurrentMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    // https://mui.com/material-ui/customization/css-theme-variables/configuration/#determining-the-system-mode
    const actualMode = mode === "system" ? systemMode : mode;
    setCurrentMode(actualMode || "light");
  }, [mode, systemMode]);

  return currentMode;
}
