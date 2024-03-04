'use client';
import Box from '@mui/material/Box';
import { CldImage, CldImageProps } from 'next-cloudinary';

import PageContainer, { PageContainerProps } from '@/components/PageContainer';
import { getMainHeight } from '@/app/styles/styleUtils';

interface ImageTemplateProps extends PageContainerProps {
  imageProps: CldImageProps;
  imageTestId?: string;
  children: React.ReactNode;
}

const ImageTemplate: React.FC<ImageTemplateProps> = ({
  imageProps,
  imageTestId,
  children,
  ...props
}) => {
  return (
    <PageContainer
      {...props}
      sx={{
        ...props.sx,
        display: 'flex',
        alignItems: 'center',
        minHeight: getMainHeight(),
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CldImage
        {...imageProps}
        data-testid={imageTestId}
        style={{
          ...imageProps.style,
          position: 'absolute',
          top: '10px',
          right: '10px',
          overflow: 'hidden',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          ml: {
            md: 10,
          },
        }}
      >
        {children}
      </Box>
    </PageContainer>
  );
};

export default ImageTemplate;
