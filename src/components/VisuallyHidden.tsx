import Box, { BoxProps } from "@mui/material/Box";

interface VisuallyHidden extends Omit<BoxProps, "sx"> {
  children?: React.ReactNode;
}

// https://bootcamp.uxdesign.cc/when-to-use-aria-label-or-screen-reader-only-text-cd778627b43b
const VisuallyHidden = ({
  children,
  component = "span",
  ...props
}: VisuallyHidden) => {
  return (
    <Box
      {...props}
      component={component}
      data-testid="visually-hidden"
      sx={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        border: 0,
      }}
    >
      {children}
    </Box>
  );
};

export default VisuallyHidden;
