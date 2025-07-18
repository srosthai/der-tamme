import { Metadata } from 'next';

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
};
