
import { Metadata } from "next";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContainer from '@/components/MainContainer';
import GlobalStyles from "./GlobalStyles";

export const metadata: Metadata = {
  title: {
    template: "%s | Nichole Frey",
    default: "Nichole Frey", // a default is required when creating a template
  },
  description: "Full-Stack Web Developer located in Central Florida",

  generator: "Next.js",
  applicationName: "Nichole Frey's Portfolio",
  // referrer: 'origin-when-cross-origin',
  keywords: [
    "Full-Stack",
    "Web Developer",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
  ],
  // authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: "Nichole Frey",
  publisher: "Nichole Frey",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
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
