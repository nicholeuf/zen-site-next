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
    // getCldImageUrl uses the same API as CldImage and sizes
    // They're both wrappers around @cloudinary-util/url-loader which provide a simpler way to generate images and Cloudinary URLs.
    // https://next.cloudinary.dev/getcldimageurl/basic-usage#basic-usage
    // @ts-ignore
    sizes: '100vw',
    opacity: '30',
    src: 'zensite/scott-webb-5mIcH3q7tIk-unsplash',
    aspectRatio: '2:3',
    crop: 'auto',
    quality: '5',
  });
  return (
    <Box
      sx={{
        minHeight: getMainHeight(),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pl: 3,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          background: `url(${url}) no-repeat`,
          backgroundPosition: '50% 25%',
          backgroundSize: 'cover',
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: -1,
        }}
      ></Box>
      <Content />
    </Box>
  );
};

export default LandingPage;
