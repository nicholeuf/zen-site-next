'use client';

import Box from '@mui/material/Box';
import { getCldImageUrl, GetCldImageUrlOptions } from 'next-cloudinary';

import { getMainHeight } from '@/app/styles/styleUtils';
import React from 'react';

interface BackgroundImageProps {
  cldImageProps: GetCldImageUrlOptions;
  backgroundPosition?: string;
  wrapperTestId: string;
  imageTestId: string;
  centerContent: boolean;
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  cldImageProps,
  backgroundPosition,
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
      <Box
        data-testid={imageTestId}
        sx={{
          height: '100%',
          width: '100%',
          background: `url(${getCldImageUrl(cldImageProps)}) no-repeat`,
          backgroundPosition,
          backgroundSize: 'cover',
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: -1,
        }}
      ></Box>
      {children}
    </Box>
  );
};

export default BackgroundImage;
