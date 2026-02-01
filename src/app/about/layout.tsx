import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Key Production - our story, team, values, and journey to becoming a premier event and commercial production company. Meet the creative minds behind your vision.',
  keywords: ['about key production', 'production company', 'our team', 'company history', 'creative agency', 'event planners'],
  openGraph: {
    title: 'About Us | Key Production',
    description: 'Learn about Key Production - our story, team, and values. Meet the creative minds behind your vision.',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Key Production',
    description: 'Learn about Key Production - our story, team, and values.',
  },
  alternates: {
    canonical: 'https://keyproduction.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
