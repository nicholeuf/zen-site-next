import Image, { ImageProps } from "next/image";

interface SimpleIconProps extends ImageProps {
  slug: string;
}

const DEFAULT_SIZE = 24;

const SimpleIcon: React.FC<SimpleIconProps> = ({
  height = DEFAULT_SIZE,
  width = DEFAULT_SIZE,
  alt = "",
  slug,
  ...props
}) => {
  return (
    <Image
      {...props}
      height={height}
      width={width}
      src={`https://unpkg.com/simple-icons@v11/icons/${slug}.svg`}
      alt={alt}
    />
  );
};

export default SimpleIcon;
