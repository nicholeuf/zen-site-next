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
      id="main-content"
      tabIndex={-1}
      sx={{
        mt: constants.header.height,
        minHeight: getMainHeight(),
        p: "0 !important",
        maxWidth: "100% !important",
        outline: "none", // To hide the focus ring on the container
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
