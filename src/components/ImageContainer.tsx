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
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        <SwissPlantImage />
      </Box>
      <Box
        sx={{
          minHeight: getMainHeight(),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: {
            xs: 'flex-end',
            md: 'center',
          },
          maxWidth: '500px',
        }}
      >
        {children}
      </Box>
    </PageContainer>
  );
};

export default ImageContainer;
