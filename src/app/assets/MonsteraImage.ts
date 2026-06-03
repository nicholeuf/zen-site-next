import { CldImageProps } from "next-cloudinary";

const imageProps: CldImageProps = {
  opacity: 8,
  src: "zensite/lucila-naves-fMEFsbfHWw4-unsplash",
  alt: "Decorative light monstera leaf pattern background",
  quality: 5,
  sizes: "100vw",
  fill: true,
  style: {
    objectPosition: "center bottom",
    objectFit: "cover",
    zIndex: -1,
  },
};

export const lightImageProps: CldImageProps = imageProps;

export const darkImageProps: CldImageProps = {
  ...imageProps,
  alt: "Decorative dark monstera leaf pattern background with warm lighting",
  brightness: "35",
  tint: "equalize:65:rgb:f0e6d2", // Warm cream tint – adjust as needed
  contrast: "20",
};
