import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Production',
  description: 'Award-winning commercial video production services. From product launches to brand campaigns, we create cinematic content that captivates audiences and drives results.',
  keywords: ['commercial production', 'video production', 'brand videos', 'product videos', 'advertising', 'film production', 'commercial filming'],
  openGraph: {
    title: 'Commercial Production | Key Production',
    description: 'Award-winning commercial video production services. Cinematic content that captivates audiences.',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Production | Key Production',
    description: 'Award-winning commercial video production services.',
  },
  alternates: {
    canonical: 'https://keyproduction.com/commercial',
  },
};

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
