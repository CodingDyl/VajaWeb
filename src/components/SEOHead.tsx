import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  appendBrand?: boolean;
  appendLocationSuffix?: boolean;
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
  canonicalUrl,
  noindex = false,
  appendBrand = false,
  appendLocationSuffix = false,
  type = 'website',
  productData
}: SEOHeadProps) {
  const siteUrl = 'https://www.vaja.co.za';
  const fullTitle = appendBrand && !/\|\s*Vaja$/i.test(title) ? `${title} | Vaja` : title;
  const fullDescription = appendLocationSuffix
    ? `${description} Available in Johannesburg, Cape Town, and Gauteng. Expert installation and premium quality guaranteed.`
    : description;
  const currentPath = typeof window !== 'undefined' ? `${window.location.pathname}${window.location.search}` : '';
  const resolvedUrl = canonicalUrl
    ? new URL(canonicalUrl, siteUrl).toString()
    : `${siteUrl}${currentPath}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={resolvedUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={resolvedUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={resolvedUrl} />
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
