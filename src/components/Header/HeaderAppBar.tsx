"use client";
import AppBar from "@mui/material/AppBar";

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
      sx={(theme) => ({
        // 85% opacity background, robust to rgb/variable palette values
        backgroundColor: theme.alpha(theme.palette.background.default, 0.85),
        backdropFilter: "blur(8px)",
        minHeight: height,
        height,
        fontWeight: 700,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "none",
        ...(hasBottomBorder && {
          borderBottomColor: color,
          borderBottomWidth: "3px",
          borderBottomStyle: "solid",
        }),
      })}
    >
      {children}
    </AppBar>
  );
};

export default HeaderAppBar;
