/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import Box from '@mui/material/Box';
// import styled from '@emotion/styled';
import { CldImage } from 'next-cloudinary';
import { Theme, styled } from '@mui/material/styles';

// In order to use both sx and css on the same component, make it styled
const StyledBox = styled(Box)``;

const SwissPlantImage = () => {
  return (
    <StyledBox
      data-testid="image-container"
      sx={{
        position: 'relative',
        height: 'auto',
        aspectRatio: '0.77',
        overflow: 'hidden',
      }}
      css={(theme: Theme) => `
        width: 175px;
        @media (min-width: 401px) {
          width: 300px;
        }
        @media (min-width: ${theme.breakpoints.values.sm}px) {
          width: 500px;
        }
      `}
    >
      <CldImage
        src="zensite/lucila-naves-swiss-guava"
        opacity="30"
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
    </StyledBox>
  );
};

export default SwissPlantImage;
