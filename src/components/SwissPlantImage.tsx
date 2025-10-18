/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import Box from '@mui/material/Box';
import { CldImage } from 'next-cloudinary';

const SwissPlantImage = () => {
  return (
    <Box
      data-testid="image-container"
      sx={{
        position: 'relative',
        height: 'auto',
        aspectRatio: '0.77',
        overflow: 'hidden',
      }}
      css={(theme) => `
        width: 250px;
        @media (min-width: 401px) {
          width: 375px;
        }
        @media (min-width: ${theme.breakpoints.values.sm}px) {
          width: 500px;
        }
      `}
    >
      <CldImage
        src="zensite/lucila-naves-swiss-guava"
        opacity="50"
        alt=""
        fill={true}
        aspectRatio="0.77"
        sizes="50vw"
        data-testid="bg-image"
        crop="scale"
        style={{
          objectFit: 'contain',
          position: 'absolute',
          top: '0',
          right: '0',
          overflow: 'hidden',
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default SwissPlantImage;
