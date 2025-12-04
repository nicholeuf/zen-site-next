import AppBar from "@mui/material/AppBar";
import { alpha } from "@mui/material/styles";
import constants from "@/app/styles/constants";

interface HeaderAppBarProps {
  color: string;
  height: string;
  children?: React.ReactNode;
  hasBottomBorder?: boolean;
}

const HeaderAppBar = ({
  color,
  height,
  children,
  hasBottomBorder = true,
}: HeaderAppBarProps) => {
  return (
    <AppBar
      data-testid="header"
      position="fixed"
      color="transparent"
      sx={{
        backgroundColor: alpha(constants.colors.cream, 0.85),
        backdropFilter: "blur(8px)",
        minHeight: height,
        height,
        fontWeight: 700,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "none",
        borderBottom: !!hasBottomBorder ? `3px solid ${color}` : "none",
      }}
    >
      {children}
    </AppBar>
  );
};

export default HeaderAppBar;
