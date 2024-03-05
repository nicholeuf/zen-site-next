'use client';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';

import ImageTemplate from '@/components/ImageTemplate';
import ImageDimensions from '@/types/ImageDimensions';
import { CldImageProps } from 'next-cloudinary';

interface ContactPageProps {
  imageProps: CldImageProps;
  dimensions: ImageDimensions;
  children: React.ReactNode;
}

const ContactPage: React.FC<ContactPageProps> = ({
  imageProps,
  dimensions,
  children,
}) => {
  const isFactor3 = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down(401)
  );
  const isFactor2 = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down(769)
  );

  const getFactor = (): number => {
    if (isFactor3) {
      return 3;
    } else if (isFactor2) {
      return 2;
    }

    return 1;
  };

  const factor = getFactor();

  return (
    <ImageTemplate
      data-testid="contact-page"
      imageTestId={`plant-image-factor-${factor}`}
      imageProps={{
        ...imageProps,
        width: Math.ceil(dimensions.width / factor),
        height: Math.ceil(dimensions.height / factor),
      }}
    >
      {children}
    </ImageTemplate>
  );
};

export default ContactPage;
