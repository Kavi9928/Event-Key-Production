import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Key Production for your next event or commercial project. Request a quote, schedule a consultation, or learn more about our production services.',
  keywords: ['contact key production', 'get a quote', 'event production inquiry', 'commercial video quote', 'production consultation'],
  openGraph: {
    title: 'Contact Us | Key Production',
    description: 'Get in touch with Key Production for your next event or commercial project.',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Key Production',
    description: 'Get in touch with Key Production for your next event or commercial project.',
  },
  alternates: {
    canonical: 'https://keyproduction.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
