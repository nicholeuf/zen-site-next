import { CldImageProps } from "next-cloudinary";
import { LandingPageProps } from ".";
import { ProfileImageProps } from "./ProfileImage";
import getPlaceholderImage from "../../app/lib/getPlaceholderImage";

const profileImageProps: ProfileImageProps = {
  width: 200,
  height: 200,
  crop: "thumb",
  gravity: "face",
  zoom: "0.6",
  src: "zensite/Nichole-Pink-BG",
  alt: "Photo of website author",
  style: {
    borderRadius: "50%",
  },
};

const backgroundImageProps: CldImageProps = {
  opacity: 8,
  src: "zensite/lucila-naves-fMEFsbfHWw4-unsplash",
  quality: 5,
  alt: "",
  style: {
    objectPosition: "center bottom",
  },
};

export const getLandingPageProps = async (): Promise<LandingPageProps> => {
  const getProfileBlurDataUrl = getPlaceholderImage({
    src: profileImageProps.src,
    width: profileImageProps.width as number,
    height: profileImageProps.height as number,
  });

  const getBackgroundBlurDataUrl = getPlaceholderImage({
    src: backgroundImageProps.src,
    opacity: "5",
  });

  const [profileBlurDataURL, backgroundBlurDataUrl] = await Promise.all([
    getProfileBlurDataUrl,
    getBackgroundBlurDataUrl,
  ]);

  return {
    backgroundImageProps: {
      ...backgroundImageProps,
      placeholder: "blur",
      blurDataURL: backgroundBlurDataUrl,
    },
    profileImageProps: {
      ...profileImageProps,
      placeholder: "blur",
      blurDataURL: profileBlurDataURL,
    },
  };
};
