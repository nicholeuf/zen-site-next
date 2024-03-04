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
      imageProps={{
        opacity: '20',
        src: 'zensite/andrei-slobtsov-Med3Kuxz97c-unsplash',
        quality: '5',
        alt: '',
        style: {
          objectPosition: '50% 25%',
        },
      }}
      centerContent
    >
      <Content />
    </BackgroundImage>
  );
};

export default LandingPage;
