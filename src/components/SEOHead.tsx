import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'product';
  productData?: {
    price?: string;
    availability?: 'InStock' | 'OutOfStock';
    brand?: string;
  };
}

export function SEOHead({ 
  title, 
  description, 
  keywords, 
  image = '/og-image.jpg',
  type = 'website',
  productData
}: SEOHeadProps) {
  const fullTitle = `${title} | Vaja`;
  const fullDescription = `${description} Available in Johannesburg, Cape Town, and Gauteng. Expert installation and premium quality guaranteed.`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={image} />

      {/* Product Schema */}
      {type === 'product' && productData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": title,
            "description": description,
            "image": image,
            "brand": {
              "@type": "Brand",
              "name": productData.brand || "Vaja"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "ZAR",
              "price": productData.price,
              "availability": `https://schema.org/${productData.availability || 'InStock'}`,
              "areaServed": {
                "@type": "Country",
                "name": "South Africa"
              },
              "availableAtOrFrom": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "ZA",
                  "addressRegion": "Gauteng"
                }
              }
            }
          })}
        </script>
      )}

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Vaja",
          "image": "/og-image.jpg",
          "description": "South Africa's leading supplier of luxury home saunas, infrared saunas, and steam rooms.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "ZA",
            "addressRegion": "Gauteng"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-26.2041",
            "longitude": "28.0473"
          },
          "url": "https://vaja.co.za",
          "priceRange": "$$$",
          "areaServed": [
            {
              "@type": "City",
              "name": "Johannesburg"
            },
            {
              "@type": "City",
              "name": "Cape Town"
            },
            {
              "@type": "State",
              "name": "Gauteng"
            }
          ]
        })}
      </script>
    </Helmet>
  );
} 