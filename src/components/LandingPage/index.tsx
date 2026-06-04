"use client";
import { CldImageProps } from "next-cloudinary";
import BackgroundImage from "@/components/BackgroundImage";
import Content from "./Content";
import { ProfileImageProps } from "./ProfileImage";

export interface LandingPageProps {
  profileImageProps: ProfileImageProps;
  backgroundImageProps: CldImageProps;
  backgroundDarkImageProps?: CldImageProps;
}

const LandingPage: React.FC<LandingPageProps> = ({
  profileImageProps,
  backgroundImageProps,
  backgroundDarkImageProps,
}) => {
  return (
    <BackgroundImage
      wrapperTestId="landing"
      imageTestId="landing-background-image"
      lightImageProps={backgroundImageProps}
      darkImageProps={backgroundDarkImageProps}
      centerContent
    >
      <Content profileImageProps={profileImageProps} />
    </BackgroundImage>
  );
};

export default LandingPage;
