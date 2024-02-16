import { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContainer from '@/components/MainContainer';
import GlobalStyles from '@/app/styles/GlobalStyles';

export const metadata: Metadata = {
  title: {
    template: '%s | Nichole Frey',
    // a default is required when creating a template
    default: 'Nichole Frey',
  },
  description: 'Full-Stack Web Developer located in Central Florida',

  generator: 'Next.js',
  applicationName: 'Nichole Frey | Full-Stack Developer',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Full-Stack Developer',
    'Web Developer',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'Material UI',
  ],
  authors: [{ name: 'Nichole Frey' }],
  creator: 'Nichole Frey',
  publisher: 'Nichole Frey',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <GlobalStyles>
          <Header />
          <MainContainer>{children}</MainContainer>
          <Footer />
        </GlobalStyles>
      </body>
    </html>
  );
};

export default RootLayout;
