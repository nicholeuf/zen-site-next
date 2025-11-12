/* v8 ignore file -- @preserve */

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import * as Sentry from '@sentry/nextjs';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { getCldOgImageUrl } from 'next-cloudinary';
import { SMALLCHAT_ENABLED } from '@/app/lib/smallchat';
import AppLayout from '@/components/AppLayout';
import getServerPath from './lib/getServerPath';
import getDeviceType from './ssrMediaQueries/getDeviceType';

import '@/app/styles/mobileFix.css';
import getBaseUrl from './lib/getBaseUrl';

export async function generateMetadata(): Promise<Metadata> {
  const pathname = await getServerPath();

  return {
    metadataBase: new URL(getBaseUrl()),
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
      siteName: "The Coding Yogi | Nichole Frey's Portfolio Site",
      type: 'website',
      locale: 'en_US',
      url: pathname,
      images: [
        {
          url: getCldOgImageUrl({
            src: 'zensite/nf-og-pink',
            crop: 'scale',
          }),
        },
      ],
    },
    ...Sentry.getTraceData(),
  };
}

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
        <AppRouterCacheProvider>
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
