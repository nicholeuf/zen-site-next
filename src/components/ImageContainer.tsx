import { getMainHeight } from '@/app/styles/styleUtils';
import { Box, BoxProps } from '@mui/material';
import { CldImageProps, CldImage } from 'next-cloudinary';
import PageContainer, { PageContainerProps } from './PageContainer';
import SwissPlantImage from './SwissPlantImage';

interface ImageContainerProps extends PageContainerProps {
  children: React.ReactNode;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ children }) => {
  return (
    <PageContainer
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: getMainHeight(),
        width: 'auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        <SwissPlantImage />
      </Box>
      <Box
        data-testid="image-template-container"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: {
            xs: 'flex-end',
            md: 'center',
          },
          my: 4,
          mx: 2,
          maxWidth: '500px',
        }}
      >
        {children}
      </Box>
    </PageContainer>
  );
};

export default ImageContainer;
