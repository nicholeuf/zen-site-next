'use client';

import Box from '@mui/material/Box';
import { getCldImageUrl, GetCldImageUrlOptions } from 'next-cloudinary';

import { getMainHeight } from '@/app/styles/styleUtils';
import React from 'react';

interface BackgroundImageProps {
  cldImageProps: GetCldImageUrlOptions;
  wrapperTestId: string;
  imageTestId: string;
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  cldImageProps,
  wrapperTestId,
  imageTestId,
  children,
}) => {
  return (
    <Box
      data-testid={wrapperTestId}
      sx={{
        minHeight: getMainHeight(),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pl: 3,
        position: 'relative',
      }}
    >
      <Box
        data-testid={imageTestId}
        sx={{
          height: '100%',
          width: '100%',
          background: `url(${getCldImageUrl(cldImageProps)}) no-repeat`,
          backgroundPosition: '50% 25%',
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
