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

  const getCdlImage = (dark = false) => {
    return (
      <CldImage
        data-testid={`${imageTestId}${dark ? "-dark" : ""}`}
        sizes="100vw"
        fill
        {...imageProps}
        {...(dark && isDark ? darkImageProps : {})}
        style={{
          ...imageProps.style,
          ...(dark && isDark && darkImageProps.style),
          objectFit: "cover",
          zIndex: -1,
          // We use opacity to fade between the light and dark images when switching modes.
          // The non-active image will be fully transparent, while the active one will be fully opaque.
          transition: "opacity 700ms ease-in-out",
          opacity: dark ? (isDark ? 1 : 0) : isDark ? 0 : 1,
        }}
      />
    );
  };

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
      {getCdlImage()}

      {/* Dark version */}
      {getCdlImage(true)}

      {children}
    </Box>
  );
};

export default BackgroundImage;
