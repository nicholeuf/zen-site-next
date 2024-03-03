'use client';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CldImage, CldImageProps } from 'next-cloudinary';

import NextLink from '@/components/NextLink';
import PageContainer, { PageContainerProps } from '@/components/PageContainer';
import { getMainHeight } from '@/app/styles/styleUtils';

interface ImageTemplateProps extends PageContainerProps {
  imageProps: CldImageProps;
  children: React.ReactNode;
}

const ImageTemplate: React.FC<ImageTemplateProps> = ({
  imageProps,
  children,
  ...props
}) => {
  return (
    <PageContainer
      {...props}
      sx={{
        ...props.sx,
        height: getMainHeight(),
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        <CldImage {...imageProps} />
      </Box>
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
