'use client';

import ImageList from '@mui/material/ImageList';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface PhotosProps {
  children: NonNullable<React.ReactNode>;
}

const Photos: React.FC<PhotosProps> = ({ children }) => {
  const isSmSize = useMediaQuery<Theme>((theme) => theme.breakpoints.up('sm'));
  const isMdSize = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));

  const getCols = () => {
    if (isMdSize) {
      return 3;
    }
    if (isSmSize) {
      return 2;
    }

    return 1;
  };

  const cols = getCols();

  return (
    <ImageList
      sx={{ width: '100%', height: '100%' }}
      cols={cols}
      rowHeight="auto"
      data-testid={`about-photos-${cols}-column-layout`}
    >
      {children}
    </ImageList>
  );
};

export default Photos;
