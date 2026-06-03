import { CldImageProps } from "next-cloudinary";
import * as MonsteraAsset from "../../app/assets/MonsteraImage";
import * as ProfileImageAsset from "../../app/assets/ProfileImage";
import getPlaceholderImage from "../../app/lib/getPlaceholderImage";
import { LandingPageProps } from ".";
import { ProfileImageProps } from "./ProfileImage";

const profileImageProps: ProfileImageProps = ProfileImageAsset.lightImageProps;
const backgroundImageProps: CldImageProps = MonsteraAsset.lightImageProps;

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
      ...(!!backgroundBlurDataUrl && {
        placeholder: "blur",
        blurDataURL: backgroundBlurDataUrl,
      }),
    },
    backgroundDarkImageProps: MonsteraAsset.darkImageProps, // No blur for dark image to save processing time
    profileImageProps: {
      ...profileImageProps,
      ...(!!profileBlurDataURL && {
        placeholder: "blur",
        blurDataURL: profileBlurDataURL,
      }),
    },
  };
};
