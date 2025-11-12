'use client';

import Box from '@mui/material/Box';
import { CldImage, type CldImageProps } from 'next-cloudinary';

import { getMainHeight } from '@/app/styles/styleUtils';

// https://next.cloudinary.dev/cldimage/examples#fill-parent

interface BackgroundImageProps {
  imageProps: CldImageProps;
  wrapperTestId: string;
  imageTestId: string;
  centerContent: boolean;
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageProps,
  wrapperTestId,
  imageTestId,
  centerContent,
  children,
}) => {
  const centerSx = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <Box
      data-testid={wrapperTestId}
      sx={{
        ...(centerContent && centerSx),
        minHeight: getMainHeight(),
        position: 'relative',
      }}
    >
      <CldImage
        data-testid={imageTestId}
        sizes="100vw"
        fill
        {...imageProps}
        style={{
          ...imageProps.style,
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      {children}
    </Box>
  );
};

export default BackgroundImage;
