import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cambodia Explore - Discover the Kingdom of Wonder',
  description: 'Explore Cambodia\'s ancient temples, pristine beaches, lush jungles, and vibrant culture. Your ultimate guide to discovering the Kingdom of Wonder.',
  keywords: 'Cambodia, travel, tourism, Angkor Wat, temples, beaches, nature, culture, adventure',
  authors: [{ name: 'Cambodia Explore' }],
  creator: 'Cambodia Explore',
  publisher: 'Cambodia Explore',
  icons : {
    icon: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cambodia-explore.com',
    title: 'Cambodia Explore - Discover the Kingdom of Wonder',
    description: 'Explore Cambodia\'s ancient temples, pristine beaches, lush jungles, and vibrant culture.',
    siteName: 'Cambodia Explore',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cambodia Explore - Discover the Kingdom of Wonder',
    description: 'Explore Cambodia\'s ancient temples, pristine beaches, lush jungles, and vibrant culture.',
    creator: '@cambodiaexplore',
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}