import Image, { ImageProps } from "next/image";

interface IconProps {
  slug: string;
  color?: string;
  darkModeColor?: string;
}

type SimpleIconProps = IconProps &
  Omit<ImageProps, "src" | "alt"> & {
    alt?: string;
  };

const DEFAULT_SIZE = 24;

const SimpleIcon: React.FC<SimpleIconProps> = ({
  height = DEFAULT_SIZE,
  width = DEFAULT_SIZE,
  alt = "",
  slug,
  color,
  darkModeColor,
  ...props
}) => {
  const imageSrc = getUnpkgImageSrc({ slug, color, darkModeColor });
  return (
    <Image {...props} height={height} width={width} src={imageSrc} alt={alt} />
  );
};

const getUnpkgImageSrc = ({
  slug,
  color,
  darkModeColor,
}: IconProps): string => {
  // https://github.com/simple-icons/simple-icons?tab=readme-ov-file#cdn-usage
  /* 
    <img height="32" width="32" src="https://cdn.simpleicons.org/[ICON SLUG]" />
    <img height="32" width="32" src="https://cdn.simpleicons.org/[ICON SLUG]/[COLOR]" />
    <img height="32" width="32" src="https://cdn.simpleicons.org/[ICON SLUG]/[COLOR]/[DARK_MODE_COLOR]" />
  */

  let imageSrc = `https://cdn.simpleicons.org/${slug}`;
  if (color) {
    imageSrc = imageSrc.concat(`/${color}`);
  }
  if (darkModeColor) {
    imageSrc = imageSrc.concat(`/${darkModeColor}`);
  }

  return imageSrc;
};

export default SimpleIcon;
