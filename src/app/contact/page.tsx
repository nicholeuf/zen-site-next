import { Metadata } from 'next';

import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return <ContactPage />;
};

export default Contact;
