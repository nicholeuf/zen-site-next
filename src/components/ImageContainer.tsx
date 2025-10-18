import { getMainHeight } from '@/app/styles/styleUtils';
import { Box } from '@mui/material';
import PageContainer, { PageContainerProps } from './PageContainer';
import SwissPlantImage from './SwissPlantImage';

interface ImageContainerProps extends PageContainerProps {
  children: React.ReactNode;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ children }) => {
  return (
    <PageContainer
      data-testid="image-container"
      hasPadding={false}
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: getMainHeight(),
        width: 'auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        data-testid="image-background-container"
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <SwissPlantImage />
      </Box>
      <Box
        data-testid="image-container-content"
        sx={{
          minHeight: getMainHeight(),
          height: { md: getMainHeight() },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: {
            xs: 'flex-end',
            md: 'center',
          },
          maxWidth: '500px',
        }}
      >
        <Box sx={{ m: 2 }}>{children}</Box>
      </Box>
    </PageContainer>
  );
};

export default ImageContainer;
