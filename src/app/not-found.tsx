import { Metadata } from 'next';

import NotFoundComponent from '@/components/NotFound';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
};

const NotFound = () => {
  return <NotFoundComponent />;
};

export default NotFound;
