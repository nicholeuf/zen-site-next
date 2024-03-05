import { Metadata } from 'next';

import ContactPage from './ContactPage';
import ContactContent from './ContactContent';
import { SMALLCHAT_ENABLED } from '@/app/lib/smallchat';
import ImageDimensions from '@/types/ImageDimensions';

export const metadata: Metadata = {
  title: 'Contact',
};

const dimensions: ImageDimensions = {
  width: 368,
  height: 644,
};

const Contact: React.FC = () => {
  return (
    <ContactPage
      imageProps={{
        src: 'zensite/shine-stephania-plant-in-plant-pot',
        crop: 'fill',
        opacity: '30',
        alt: '',
      }}
      dimensions={dimensions}
    >
      <ContactContent chatEnabled={SMALLCHAT_ENABLED} />
    </ContactPage>
  );
};

export default Contact;
