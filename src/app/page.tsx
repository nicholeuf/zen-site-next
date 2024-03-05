import { Metadata } from 'next';

import getPlaceholderImage from './lib/getPlaceholderImage';

import LandingPage, { LandingPageProps } from '@/components/LandingPage';
import { ProfileImageProps } from '@/components/LandingPage/ProfileImage';
import { CldImageProps } from 'next-cloudinary';

export const metadata: Metadata = {
  title: 'The Coding Yogi | Nichole Frey',
};

const profileImageProps: ProfileImageProps = {
  width: 200,
  height: 200,
  crop: 'thumb',
  zoom: '0.5',
  src: 'zensite/nf-profile-c-hibiscus',
  alt: 'Photo of website author',
  style: {
    border: '1px solid white',
    borderRadius: '20px',
  },
};

const backgroundImageProps: CldImageProps = {
  opacity: '20',
  src: 'zensite/andrei-slobtsov-Med3Kuxz97c-unsplash',
  quality: '5',
  alt: '',
  style: {
    objectPosition: '50% 25%',
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
