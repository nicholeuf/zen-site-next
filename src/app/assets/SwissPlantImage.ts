import { CldImageProps } from "next-cloudinary";

const imageProps: CldImageProps = {
  src: "zensite/lucila-naves-swiss-guava",
  alt: "",
  fill: true,
  aspectRatio: "0.77",
  sizes: "50vw",
  crop: "scale",
  style: {
    objectFit: "contain",
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: -1,
  },
};

export const lightImageProps: CldImageProps = {
  ...imageProps,
  opacity: "60",
};

export const darkImageProps: CldImageProps = {
  ...imageProps,
  brightness: "45",
  contrast: "20",
  tint: "equalize:55:rgb:f0e6d2",
};
