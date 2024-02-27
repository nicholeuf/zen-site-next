import { Metadata } from 'next';

import ContactPage from './ContactPage';
import BackgroundImage from '@/components/BackgroundImage';

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return (
    <BackgroundImage
      wrapperTestId="contact-background-wrapper"
      imageTestId="contact-background-image"
      cldImageProps={{
        // getCldImageUrl uses the same API as CldImage and sizes
        // They're both wrappers around @cloudinary-util/url-loader which provide a simpler way to generate images and Cloudinary URLs.
        // https://next.cloudinary.dev/getcldimageurl/basic-usage#basic-usage
        // @ts-ignore
        sizes: '100vw',
        opacity: '20',
        src: 'zensite/faria-anzum-ONK9IlKizS4-unsplash',
        aspectRatio: '2:3',
        quality: '5',
        zoom: '0.1',
      }}
      backgroundPosition="50% 80%"
    >
      <ContactPage />
    </BackgroundImage>
  );
};

export default Contact;
