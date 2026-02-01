import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore our portfolio of stunning event productions, commercial shoots, and behind-the-scenes moments. Key Production delivers excellence in every frame.',
  keywords: ['gallery', 'portfolio', 'event photos', 'production gallery', 'behind the scenes', 'event photography'],
  openGraph: {
    title: 'Gallery | Key Production',
    description: 'Explore our portfolio of stunning event productions and commercial shoots.',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://keyproduction.com/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
