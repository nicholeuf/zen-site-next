"use client";

import Box from "@mui/material/Box";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { ItemDataPlaceholder } from "./constants";
import { CldImage } from "next-cloudinary";

const Photo: React.FC<ItemDataPlaceholder> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <CldImage
          src={props.src}
          width={props.width}
          height={props.height}
          crop="thumb"
          zoom="0.1"
          gravity="faces"
          alt={`${props.title} in ${props.location}`}
          placeholder="blur"
          blurDataURL={props.blurDataURL}
          style={{
            borderRadius: "20px",
          }}
        />
        <ImageListItemBar
          title={props.title}
          subtitle={props.location}
          position="below"
        />
      </Box>
    </Box>
  );
};

export default Photo;
