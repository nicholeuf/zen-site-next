/* istanbul ignore file */

import { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { getCldOgImageUrl } from 'next-cloudinary';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import AppLayout from '@/components/AppLayout';
import getBaseUrl from '@/app/lib/getBaseUrl';
import { SMALLCHAT_ENABLED } from '@/app/lib/smallchat';
import getDeviceType from './ssrMediaQueries/getDeviceType';

import '@/app/styles/mobileFix.css';

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

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  // Parse deviceType from user agent header on server
  const deviceType = await getDeviceType();

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATION}
        />
        {(process.env.NODE_ENV === 'development' ||
          process.env.VERCEL_ENV === 'preview') && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-recording-token="T86sC1LMCwAHgHYlQ4lEOy9jKn8djK4LpTfdwgv5"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
      </head>
      <body>
        <AppRouterCacheProvider options={{ key: 'mui' }}>
          <AppLayout deviceType={deviceType}>{children}</AppLayout>
        </AppRouterCacheProvider>
        <Analytics />
        <SpeedInsights />
        {SMALLCHAT_ENABLED && (
          <script
            src="https://embed.small.chat/T06KQEC9PRRC06L3A025MX.js"
            async
          ></script>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
