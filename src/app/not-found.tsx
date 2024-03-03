'use client';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import { CldImage } from 'next-cloudinary';

import NextLink from '@/components/NextLink';
import PageContainer from '@/components/PageContainer';
import { getMainHeight } from '@/app/styles/styleUtils';

const NotFound = () => {
  const pathname = usePathname();
  return (
    <PageContainer
      sx={{
        height: getMainHeight(),
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
        }}
      >
        <CldImage
          width={184}
          height={322}
          src="zensite/shine-stephania-plant-in-plant-pot"
          crop="fill"
          opacity="30"
          alt=""
        />
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
        <Typography variant="h1" gutterBottom>
          Not Found
        </Typography>
        <Typography>
          Could not find the page <strong>{pathname}</strong>. Would you like to
          go to the&nbsp;
          <NextLink href="/">Home Page</NextLink>?
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default NotFound;
