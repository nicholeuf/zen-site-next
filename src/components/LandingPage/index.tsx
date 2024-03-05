import BackgroundImage from '@/components/BackgroundImage';
import { ProfileImageProps } from './ProfileImage';
import Content from './Content';

export interface LandingPageProps {
  profileImageProps: ProfileImageProps;
}

const LandingPage: React.FC<LandingPageProps> = ({ profileImageProps }) => {
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
      <Content profileImageProps={profileImageProps} />
    </BackgroundImage>
  );
};

export default LandingPage;
