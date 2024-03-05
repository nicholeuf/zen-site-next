import { Metadata } from 'next';

import getPlaceholderImage from './lib/getPlaceholderImage';

import LandingPage from '@/components/LandingPage';
import { ProfileImageProps } from '@/components/LandingPage/ProfileImage';

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

interface LandingPageServerSideProps {
  blurDataURL: string;
}

const getServerSideProps = async (): Promise<LandingPageServerSideProps> => {
  const blurDataURL = await getPlaceholderImage({
    src: profileImageProps.src,
    width: profileImageProps.width as number,
    height: profileImageProps.height as number,
  });

  return { blurDataURL };
};

const Home: React.FC = async () => {
  const { blurDataURL } = await getServerSideProps();
  return (
    <LandingPage
      profileImageProps={{
        ...profileImageProps,
        placeholder: 'blur',
        blurDataURL,
      }}
    />
  );
};

export default Home;
