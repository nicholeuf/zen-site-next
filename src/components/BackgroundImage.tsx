import Box from "@mui/material/Box";
import { CldImage, CldImageProps } from "next-cloudinary";

import { getMainHeight } from "@/app/styles/styleUtils";
import { useCurrentMode } from "../app/hooks/useCurrentMode";

// https://next.cloudinary.dev/cldimage/examples#fill-parent

interface BackgroundImageProps {
  lightImageProps: CldImageProps;
  darkImageProps?: CldImageProps;
  wrapperTestId: string;
  imageTestId: string;
  centerContent: boolean;
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  lightImageProps,
  darkImageProps,
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

  const getCldImage = (cldImageProps: CldImageProps, dark = false) => {
    return (
      <CldImage
        data-testid={`${imageTestId}${dark ? "-dark" : ""}`}
        preload
        {...cldImageProps}
        style={{
          ...cldImageProps.style,
          // We use opacity to fade between the light and dark images when switching modes.
          // The non-active image will be fully transparent, while the active one will be fully opaque.
          transition: "opacity 400ms ease-in-out",
          willChange: "opacity",
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
        zIndex: 1,
      }}
    >
      {/* Light version */}
      {getCldImage(lightImageProps)}

      {/* Dark version */}
      {darkImageProps && getCldImage(darkImageProps, true)}

      {children}
    </Box>
  );
};

export default BackgroundImage;
