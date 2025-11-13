import React from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

// Use MUI Box rendered as an anchor so `sx` and theme tokens (like color)
// are applied, but avoid MUI Link/Typography composition that caused
// compound selectors to override IconButton styles.
const ExternalLink = React.forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  (
    { children, target = "_blank", rel = "noopener", className, sx, ...props },
    ref
  ) => {
    // No local visual defaults here — rely on theme (MuiLink / CssBaseline)
    // so callers and global styles remain consistent.

    return (
      <Box
        component="a"
        {...props}
        className={className}
        target={target}
        rel={rel}
        ref={ref}
        sx={sx}
      >
        {children}
      </Box>
    );
  }
);

ExternalLink.displayName = "ExternalLink";

export default ExternalLink;
