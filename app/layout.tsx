import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { PlaceFiltersProvider } from '@/components/place-filters';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

export const metadata: Metadata = {
  title: 'Siem Reap Guide - Gateway to Angkor Wat',
  description: 'Discover Siem Reap, the gateway to Angkor Wat. Explore ancient temples, local markets, traditional cuisine, and the heart of Cambodia\'s cultural heritage.',
  keywords: 'Siem Reap, Angkor Wat, Cambodia, temples, travel, tourism, culture, heritage, markets, cuisine',
  authors: [{ name: 'Siem Reap Guide' }],
  creator: 'Siem Reap Guide',
  publisher: 'Siem Reap Guide',
  icons : {
    icon: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://siemreap-guide.com',
    title: 'Siem Reap Guide - Gateway to Angkor Wat',
    description: 'Discover Siem Reap, the gateway to Angkor Wat and Cambodia\'s ancient temple complexes.',
    siteName: 'Siem Reap Guide',
    images: [
      {
        url: 'https://globalcastaway.com/wp-content/uploads/2019/11/the-ultimate-guide-for-visiting-Angkor-Wat.jpg',
        width: 1200,
        height: 630,
        alt: 'Siem Reap Guide - Gateway to Angkor Wat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siem Reap Guide - Gateway to Angkor Wat',
    description: 'Discover Siem Reap, the gateway to Angkor Wat and Cambodia\'s ancient temple complexes.',
    creator: '@siemreapguide',
    images: ['https://globalcastaway.com/wp-content/uploads/2019/11/the-ultimate-guide-for-visiting-Angkor-Wat.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PlaceFiltersProvider>{children}</PlaceFiltersProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
