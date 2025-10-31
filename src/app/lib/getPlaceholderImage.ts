/* v8 ignore file -- @preserve */

import { getCldImageUrl } from 'next-cloudinary';

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
  opacity = '100',
}: GetPlaceholderImageProps) => {
  const imageUrl = getCldImageUrl({
    src,
    opacity,
    // lqip is a named transformation in cloudinary
    namedTransformations: 'lqip',
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
