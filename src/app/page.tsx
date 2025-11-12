import type { Metadata } from 'next';
import type { CldImageProps } from 'next-cloudinary';

import LandingPage, { type LandingPageProps } from '@/components/LandingPage';
import type { ProfileImageProps } from '@/components/LandingPage/ProfileImage';
import getPlaceholderImage from './lib/getPlaceholderImage';

export const metadata: Metadata = {
  title: 'The Coding Yogi | Nichole Frey',
};

const profileImageProps: ProfileImageProps = {
  width: 200,
  height: 200,
  crop: 'thumb',
  gravity: 'face',
  zoom: '0.6',
  src: 'zensite/Nichole-Pink-BG',
  alt: 'Photo of website author',
  style: {
    borderRadius: '50%',
  },
};

const backgroundImageProps: CldImageProps = {
  opacity: 8,
  src: 'zensite/lucila-naves-fMEFsbfHWw4-unsplash',
  quality: 5,
  alt: '',
  style: {
    objectPosition: 'center bottom',
  },
};

const getServerSideProps = async (): Promise<LandingPageProps> => {
  const getProfileBlurDataUrl = getPlaceholderImage({
    src: profileImageProps.src,
    width: profileImageProps.width as number,
    height: profileImageProps.height as number,
  });

  const getBackgroundBlurDataUrl = getPlaceholderImage({
    src: backgroundImageProps.src,
    opacity: '5',
  });

  const [profileBlurDataURL, backgroundBlurDataUrl] = await Promise.all([
    getProfileBlurDataUrl,
    getBackgroundBlurDataUrl,
  ]);

  return {
    backgroundImageProps: {
      ...backgroundImageProps,
      placeholder: 'blur',
      blurDataURL: backgroundBlurDataUrl,
    },
    profileImageProps: {
      ...profileImageProps,
      placeholder: 'blur',
      blurDataURL: profileBlurDataURL,
    },
  };
};

const Home: React.FC = async () => {
  const props = await getServerSideProps();
  return <LandingPage {...props} />;
};

export default Home;
