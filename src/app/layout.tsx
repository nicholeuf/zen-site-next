
import { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/app/styles/theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContainer from '@/components/MainContainer';

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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Header />
            <MainContainer>{children}</MainContainer>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
