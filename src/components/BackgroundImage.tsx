"use client";

import Box from "@mui/material/Box";
import { CldImage, CldImageProps } from "next-cloudinary";

import { getMainHeight } from "@/app/styles/styleUtils";
import { useCurrentMode } from "../app/hooks/useCurrentMode";

// https://next.cloudinary.dev/cldimage/examples#fill-parent

interface BackgroundImageProps {
  imageProps: CldImageProps;
  darkImageProps?: Partial<CldImageProps>;
  wrapperTestId: string;
  imageTestId: string;
  centerContent: boolean;
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageProps,
  darkImageProps = {},
  wrapperTestId,
  imageTestId,
  centerContent,
  children,
}) => {
  const centerSx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  // The darkImageProps are applied on top of the base imageProps, so they can override or add to them as needed.
  // This allows for flexible adjustments specific to dark mode without affecting the light mode configuration.
  // The opacity is handled via CSS to allow for smooth transitions between modes.
  const currentMode = useCurrentMode();
  const isDark = currentMode === "dark";
  return (
    <Box
      data-testid={wrapperTestId}
      sx={{
        ...(centerContent && centerSx),
        minHeight: getMainHeight(),
        position: "relative",
      }}
    >
      {/* Light version */}
      <CldImage
        data-testid={imageTestId}
        sizes="100vw"
        fill
        {...imageProps}
        style={{
          ...imageProps.style,
          objectFit: "cover",
          zIndex: -1,
          transition: "opacity 700ms ease-in-out",
          opacity: isDark ? 0 : 1,
        }}
      />

      {/* Dark version */}
      <CldImage
        data-testid={`${imageTestId}-dark`}
        sizes="100vw"
        fill
        {...imageProps}
        {...darkImageProps}
        style={{
          ...imageProps.style,
          ...darkImageProps.style,
          objectFit: "cover",
          zIndex: -1,
          transition: "opacity 700ms ease-in-out",
          opacity: isDark ? 1 : 0,
        }}
      />
      {children}
    </Box>
  );
};

export default BackgroundImage;
