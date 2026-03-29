import type { Metadata } from 'next';
import './globals.css';
import Layout from '@components/Layout';
import { LanguageProvider } from '@context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://streamarr.dev'),
  title: 'Streamarr - Unified Streaming Experience & Feature Rich Control',
  description:
    'Streamarr is an open-source media management and streaming platform that integrates with your Plex server and *arr services.',
  keywords: [
    'streaming',
    'media',
    'manager',
    'streamarr',
    'plex',
    'sonarr',
    'radarr',
    'lidarr',
    'bazarr',
    'seerr',
    'tautulli',
    'media server',
  ],
  openGraph: {
    title: 'Streamarr - Unified Streaming Experience & Feature Rich Control',
    description:
      'Streamarr is an open-source media management and streaming platform that integrates with your Plex server and *arr services.',
    url: 'https://streamarr.dev',
    siteName: 'Streamarr',
    images: ['/logo_sm.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Layout>{children}</Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}
