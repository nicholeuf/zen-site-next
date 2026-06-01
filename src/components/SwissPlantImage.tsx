"use client";
/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@mui/material";
import Box from "@mui/material/Box";
import { CldImage } from "next-cloudinary";
import { useCurrentMode } from "../app/hooks/useCurrentMode";

const SwissPlantImage = () => {
  const currentMode = useCurrentMode();
  const isDark = currentMode === "dark";

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
      <CldImage
        src="zensite/lucila-naves-swiss-guava"
        opacity="60"
        alt=""
        fill={true}
        aspectRatio="0.77"
        sizes="50vw"
        data-testid="bg-image"
        crop="scale"
        style={{
          objectFit: "contain",
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: -1,
          transition: "opacity 700ms ease-in-out",
          opacity: isDark ? 0 : 1,
        }}
      />

      {/* Dark version */}
      <CldImage
        src="zensite/lucila-naves-swiss-guava"
        alt=""
        fill={true}
        aspectRatio="0.77"
        sizes="50vw"
        data-testid="bg-image-dark"
        crop="scale"
        brightness="45"
        contrast="20"
        tint="equalize:55:rgb:f0e6d2"
        style={{
          objectFit: "contain",
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: -1,
          transition: "opacity 700ms ease-in-out",
          opacity: isDark ? 1 : 0,
        }}
      />
    </Box>
  );
};

export default SwissPlantImage;
