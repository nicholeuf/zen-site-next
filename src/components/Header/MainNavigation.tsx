"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";

import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

interface MainNavigationProps {
  color: string;
  activeColor: string;
}

const MainNavigation: React.FC<MainNavigationProps> = ({
  color,
  activeColor,
}) => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return isMobile ? (
    <MobileNavigation activeColor={activeColor} />
  ) : (
    <Navigation color={color} activeColor={activeColor} />
  );
};

export default MainNavigation;
