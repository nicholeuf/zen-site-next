import { Metadata } from 'next';

import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: "Nichole Frey's Portfolio",
};

const Home: React.FC = () => {
  return <LandingPage />;
};

export default Home;
