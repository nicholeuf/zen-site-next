// must declare "use client" because sx is a function
"use client";

import Typography from "@mui/material/Typography";
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}
const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <Typography
      variant="h1"
      gutterBottom
      sx={(theme) => ({
        fontSize: {
          xs: "2.75rem",
          sm: theme.typography.h1.fontSize,
        },
      })}
    >
      {children}
    </Typography>
  );
};

export default Heading;
