'use client';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';

import NextLink from './NextLink';
import ImageContainer from './ImageContainer';
import Box from '@mui/material/Box';

const NotFound = () => {
  const pathname = usePathname();

  return (
    <ImageContainer>
      <Box sx={{ m: 2 }}>
        <Typography variant="h1" gutterBottom>
          Sorry
        </Typography>
        <Typography data-testid="not-found-copy">
          The page <strong>{pathname}</strong> could not be found. Would you
          like to go to the&nbsp;
          <NextLink href="/">Home Page</NextLink>?
        </Typography>
      </Box>
    </ImageContainer>
  );
};

export default NotFound;
