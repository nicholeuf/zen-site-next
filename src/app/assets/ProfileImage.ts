import { CldImageProps } from "next-cloudinary";

const imageProps: CldImageProps = {
  width: 200,
  height: 200,
  crop: "thumb",
  gravity: "face",
  zoom: "0.6",
  src: "zensite/Nichole-Pink-BG",
  alt: "Portrait of Nichole Frey smiling, wearing black sunglasses",
  style: {
    borderRadius: "50%",
  },
};

export const lightImageProps: CldImageProps = imageProps;

// No dark image for the profile, but we can export the same props for consistency.
export const darkImageProps: CldImageProps = imageProps;
