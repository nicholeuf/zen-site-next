import { Metadata } from 'next';

import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'The Coding Yogi | Nichole Frey',
};

const Home: React.FC = () => {
  return <LandingPage />;
};

export default Home;
