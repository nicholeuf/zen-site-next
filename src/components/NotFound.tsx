"use client";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";
import ImageContainer from "./ImageContainer";
import NextLink from "./NextLink";

const NotFound = () => {
  const pathname = usePathname();

  return (
    <ImageContainer>
      <Typography variant="h1" gutterBottom>
        Sorry
      </Typography>
      <Typography data-testid="not-found-copy">
        The page <strong>{pathname}</strong> could not be found. Would you like
        to go to the&nbsp;
        <NextLink href="/">Home Page</NextLink>?
      </Typography>
    </ImageContainer>
  );
};

export default NotFound;
