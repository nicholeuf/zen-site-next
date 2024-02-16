'use client';

import { Metadata } from 'next';
import Box from '@mui/material/Box';
import { getCldImageUrl } from 'next-cloudinary';

import Content from './Content';
import { getMainHeight } from '@/app/styles/styleUtils';

export const metadata: Metadata = {
  title: "Nichole Frey's Portfolio",
};

const LandingPage: React.FC = () => {
  // Generate responsive url to use as a background image
  // Otherwise a width is required
  const url = getCldImageUrl({
    sizes: '100vw',
    src: 'zensite/cleo-stracuzza-avA-YuEe2ZA-unsplash_tzotoy',
  });
  return (
    <Box
      sx={{
        minHeight: getMainHeight(),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        pl: 3,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          background: `url(${url}) no-repeat center`,
          backgroundSize: 'cover',
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: -1,
          opacity: 0.3,
        }}
      ></Box>
      <Content />
    </Box>
  );
};

export default LandingPage;
