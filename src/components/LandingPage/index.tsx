'use client';

import { Metadata } from 'next';

import Content from './Content';
import BackgroundImage from '@/components/BackgroundImage';

export const metadata: Metadata = {
  title: "Nichole Frey's Portfolio",
};

const LandingPage: React.FC = () => {
  return (
    <BackgroundImage
      wrapperTestId="landing"
      imageTestId="landing-background-image"
      cldImageProps={{
        // getCldImageUrl uses the same API as CldImage and sizes
        // They're both wrappers around @cloudinary-util/url-loader which provide a simpler way to generate images and Cloudinary URLs.
        // https://next.cloudinary.dev/getcldimageurl/basic-usage#basic-usage
        // @ts-ignore
        sizes: '100vw',
        opacity: '20',
        src: 'zensite/andrei-slobtsov-Med3Kuxz97c-unsplash',
        aspectRatio: '2:3',
        quality: '5',
      }}
    >
      <Content />
    </BackgroundImage>
  );
};

export default LandingPage;
