/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@mui/material";
import Box from "@mui/material/Box";
import { CldImage } from "next-cloudinary";

const SwissPlantImage = () => {
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
          overflow: "hidden",
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default SwissPlantImage;
