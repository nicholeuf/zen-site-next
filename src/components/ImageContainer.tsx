import { getMainHeight } from '@/app/styles/styleUtils';
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
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
          position: 'relative',
          zIndex: 1,
          minHeight: { xs: getMainHeight(), md: getMainHeight() },
          // Allow content to grow beyond minHeight without forcing a fixed height
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: {
            xs: 'flex-end',
            md: 'center',
          },
          maxWidth: '500px',
        }}
      >
        <Box
          sx={(theme) => ({
            // Add padding so the content is not flush with the box border
            py: 2,
            pr: 1,
            // 90% opacity background, robust to rgb/variable palette values
            backgroundColor: alpha(theme.palette.background.default, 0.9),
            borderRadius: '20px',
          })}
        >
          {children}
        </Box>
      </Box>
    </PageContainer>
  );
};

export default ImageContainer;
