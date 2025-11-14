"use client";

import { CldImage, CldImageProps } from "next-cloudinary";

export type ProfileImageProps = CldImageProps;

const ProfileImage: React.FC<ProfileImageProps> = (props) => {
  return <CldImage {...props} />;
};

export default ProfileImage;
