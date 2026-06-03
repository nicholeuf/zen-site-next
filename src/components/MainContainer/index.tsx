"use client";

import Container from "@mui/material/Container";

import constants from "@/app/styles/constants";
import { getMainHeight } from "@/app/styles/styleUtils";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Container
      // maxWidth="lg"
      component="main"
      sx={{
        mt: constants.header.height,
        minHeight: getMainHeight(),
        p: "0 !important",
        maxWidth: "100% !important",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
