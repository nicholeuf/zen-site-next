/* istanbul ignore file */

import { getCldImageUrl } from 'next-cloudinary';

interface GetPlaceholderImageProps {
  src: string;
  width?: number;
  height?: number;
}

// https://next.cloudinary.dev/guides/placeholders#blurred-images

const getPlaceholderImage = async ({
  src,
  width = 100,
  height = 100,
}: GetPlaceholderImageProps) => {
  const imageUrl = getCldImageUrl({
    src,
    // lqip is a named transformation in cloudinary
    transformations: 'lqip',
    width,
    height,
  });
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString('base64');
  return `data:${response.type};base64,${base64}`;
};

export default getPlaceholderImage;
