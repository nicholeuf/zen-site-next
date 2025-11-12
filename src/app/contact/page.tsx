import type { Metadata } from 'next';
import { SMALLCHAT_ENABLED } from '@/app/lib/smallchat';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return <ContactPage chatEnabled={SMALLCHAT_ENABLED} />;
};

export default Contact;
