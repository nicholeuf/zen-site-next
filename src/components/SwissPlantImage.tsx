/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

"use client";
import { css } from "@mui/material";
import Box from "@mui/material/Box";
import { CldImage, CldImageProps } from "next-cloudinary";
import * as SwissPlantAsset from "../app/assets/SwissPlantImage";
import { useCurrentMode } from "../app/hooks/useCurrentMode";

const SwissPlantImage = () => {
  const currentMode = useCurrentMode();
  const isDark = currentMode === "dark";

  const getCldImage = (cldImageProps: CldImageProps, dark = false) => {
    return (
      <CldImage
        data-testid={`${dark ? "bg-image-dark" : "bg-image"}`}
        {...cldImageProps}
        preload
        style={{
          ...cldImageProps.style,
          // We use opacity to fade between the light and dark images when switching modes.
          // The non-active image will be fully transparent, while the active one will be fully opaque.
          transition: "opacity 400ms ease-in-out", // was 700ms
          willChange: "opacity",
          opacity: dark ? (isDark ? 1 : 0) : isDark ? 0 : 1,
        }}
      />
    );
  };

  return (
    <Box
      data-testid="swiss-plant-image"
      sx={{
        position: "relative",
        maxHeight: "100%",
        aspectRatio: "0.77",
        overflow: "hidden",
      }}
      css={css`
        width: 175px;
        @media (min-width: 401px) {
          width: 300px;
        }
        @media (min-width: 600px) {
          width: 500px;
        }
        height: auto;
      `}
    >
      {/* Light version */}
      {getCldImage(SwissPlantAsset.lightImageProps)}

      {/* Dark version */}
      {getCldImage(SwissPlantAsset.darkImageProps, true)}
    </Box>
  );
};

export default SwissPlantImage;
