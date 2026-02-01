import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events Portfolio',
  description: 'Explore our world-class event productions including music festivals, corporate conferences, product launches, and exclusive galas. Key Production delivers unforgettable experiences.',
  keywords: ['event production', 'music festivals', 'corporate events', 'product launches', 'gala events', 'concert production', 'event management'],
  openGraph: {
    title: 'Events Portfolio | Key Production',
    description: 'Explore our world-class event productions including music festivals, corporate conferences, and exclusive galas.',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events Portfolio | Key Production',
    description: 'Explore our world-class event productions.',
  },
  alternates: {
    canonical: 'https://keyproduction.com/events',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
