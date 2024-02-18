/* istanbul ignore file */

import { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { getCldOgImageUrl } from 'next-cloudinary';

import AppLayout from '@/components/AppLayout';
import getBaseUrl from '@/app/lib/getBaseUrl';

export const metadata: Metadata = {
  title: {
    template: '%s | Nichole Frey',
    // a default is required when creating a template
    default: 'Nichole Frey',
  },
  description:
    'Portfolio website for Nichole Frey, a Full-Stack Developer based in Orlando, FL',

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
  openGraph: {
    url: getBaseUrl(),
    images: [
      {
        width: 1200,
        height: 627,
        url: getCldOgImageUrl({
          src: 'zensite/og-image',
          crop: 'scale',
        }),
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppLayout>{children}</AppLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
