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
  const normalizedDescription = description.replace(/\s+/g, ' ').trim();
  const fullDescription = appendLocationSuffix
    ? `${normalizedDescription} Available in Johannesburg, Cape Town, and Gauteng. Expert installation and premium quality guaranteed.`
    : normalizedDescription;
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const resolvedUrl = canonicalUrl
    ? new URL(canonicalUrl, siteUrl).toString()
    : `${siteUrl}${currentPath}`;
  const resolvedImage = image.startsWith('http') ? image : new URL(image, siteUrl).toString();
  const robotsContent = noindex ? 'noindex,nofollow' : 'index,follow';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={resolvedUrl} />
      <meta name="robots" content={robotsContent} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Vaja" />
      <meta property="og:url" content={resolvedUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={resolvedImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={resolvedUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={resolvedImage} />

      {/* Product Schema */}
      {type === 'product' && productData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": title,
            "description": normalizedDescription,
            "image": resolvedImage,
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
          "image": `${siteUrl}/og-image.jpg`,
          "description": "South Africa's leading sauna and steam room supplier since 1970.",
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
          "url": siteUrl,
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
              "@type": "City",
              "name": "Pretoria"
            }
          ]
        })}
      </script>
    </Helmet>
  );
} 
