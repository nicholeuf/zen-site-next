import { CldImageProps } from 'next-cloudinary';
import BackgroundImage from '@/components/BackgroundImage';
import Content from './Content';
import { ProfileImageProps } from './ProfileImage';

export interface LandingPageProps {
  profileImageProps: ProfileImageProps;
  backgroundImageProps: CldImageProps;
}

const LandingPage: React.FC<LandingPageProps> = ({
  profileImageProps,
  backgroundImageProps,
}) => {
  return (
    <BackgroundImage
      wrapperTestId="landing"
      imageTestId="landing-background-image"
      imageProps={backgroundImageProps}
      centerContent
    >
      <Content profileImageProps={profileImageProps} />
    </BackgroundImage>
  );
};

export default LandingPage;
