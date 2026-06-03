/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

"use client";
import { css } from "@mui/material";
import Box from "@mui/material/Box";
import { CldImage } from "next-cloudinary";
import { useCurrentMode } from "../app/hooks/useCurrentMode";

const SwissPlantImage = () => {
  const currentMode = useCurrentMode();
  const isDark = currentMode === "dark";

  const darkImageProps = {
    brightness: "45",
    contrast: "20",
    tint: "equalize:55:rgb:f0e6d2",
    opacity: "100",
  };

  const getCdlImage = (dark = false) => {
    return (
      <CldImage
        data-testid={`${dark ? "bg-image-dark" : "bg-image"}`}
        src="zensite/lucila-naves-swiss-guava"
        alt=""
        fill={true}
        aspectRatio="0.77"
        sizes="50vw"
        crop="scale"
        opacity="60"
        {...(dark && isDark ? darkImageProps : {})}
        style={{
          objectFit: "contain",
          position: "absolute",
          top: "0",
          right: "0",
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
      {getCdlImage()}

      {/* Dark version */}
      {getCdlImage(true)}
    </Box>
  );
};

export default SwissPlantImage;
