export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Key Production',
    description: 'World-class event and commercial production company',
    url: 'https://keyproduction.com',
    logo: 'https://keyproduction.com/logo.png',
    sameAs: [
      'https://instagram.com/keyproduction',
      'https://youtube.com/keyproduction',
      'https://facebook.com/keyproduction',
      'https://twitter.com/keyproduction',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94-76-923-8423',
      contactType: 'customer service',
      email: 'slkeyproduction@gmail.com',
      availableLanguage: ['English', 'Sinhala'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '70A, Yahampath Mawatha',
      addressLocality: 'Maharagama',
      addressRegion: 'Western Province',
      postalCode: '10280',
      addressCountry: 'LK',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Key Production',
    image: 'https://keyproduction.com/logo.png',
    '@id': 'https://keyproduction.com',
    url: 'https://keyproduction.com',
    telephone: '+94-76-923-8423',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '70A, Yahampath Mawatha',
      addressLocality: 'Maharagama',
      addressRegion: 'Western Province',
      postalCode: '10280',
      addressCountry: 'LK',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Event Production',
    provider: {
      '@type': 'Organization',
      name: 'Key Production',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Production Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Event Production',
            description: 'Full-scale event production for concerts, festivals, and corporate events',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Video Production',
            description: 'Cinematic commercial and brand video production',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Live Streaming',
            description: 'Professional live streaming and broadcast services',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
