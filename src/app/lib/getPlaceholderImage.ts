/* v8 ignore file -- @preserve */

import { getCldImageUrl } from "next-cloudinary";

interface GetPlaceholderImageProps {
  src: string;
  width?: number;
  height?: number;
  opacity?: any;
}

// https://next.cloudinary.dev/guides/placeholders#blurred-images

const getPlaceholderImage = async ({
  src,
  width = 100,
  height = 100,
  opacity = "100",
}: GetPlaceholderImageProps) => {
  const imageUrl = getCldImageUrl({
    src,
    opacity,
    // lqip is a named transformation in cloudinary
    namedTransformations: "lqip",
    width,
    height,
  });
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  let base64: string;

  if (typeof Buffer !== "undefined") {
    base64 = Buffer.from(arrayBuffer).toString("base64");
  } else {
    const bytes = new Uint8Array(arrayBuffer);
    let binary = "";
    const chunkSize = 0x8000;

    for (let index = 0; index < bytes.length; index += chunkSize) {
      binary += String.fromCharCode(
        ...bytes.subarray(index, index + chunkSize)
      );
    }

    base64 = btoa(binary);
  }
  return `data:${response.type};base64,${base64}`;
};

export default getPlaceholderImage;
