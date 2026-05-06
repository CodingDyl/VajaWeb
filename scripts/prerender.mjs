import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import { getSeoForRoute } from '../src/lib/seo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');
const SITE_URL = 'https://www.vaja.co.za';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const staticRoutes = [
  '/',
  '/products',
  '/products/aurora',
  '/products/elysium',
  '/products/loyly',
  '/products/kaelis',
  '/products/vakio',
  '/products/auroma-concentrates',
  '/products/diy-sauna-kits',
  '/products/accessories',
  '/products/equipment',
  '/steam-rooms',
  '/contact',
  '/contact/thank-you',
  '/about',
  '/gallery',
  '/gallery/category/kaelis',
  '/gallery/category/aurora',
  '/gallery/category/loyly',
  '/gallery/category/elysium',
  '/gallery/category/standard',
  '/gallery/category/client-3d-renderings',
  '/blog',
];

const sanityClient = createClient({
  projectId: 'hvchy05w',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-03-03',
});

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildCanonical(route) {
  return route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
}

function buildHeadMarkup(route) {
  const seo = getSeoForRoute(route);
  const title = seo.title;
  const description = seo.description;
  const canonical = buildCanonical(route);
  const robots = seo.noindex ? 'noindex,nofollow' : 'index,follow';
  const type = seo.type || 'website';

  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="title" content="${escapeHtml(title)}">`,
    `<meta name="description" content="${escapeHtml(description)}">`,
    '<meta name="author" content="Vaja">',
    `<meta name="robots" content="${robots}">`,
    '<meta name="language" content="English">',
    '<meta name="revisit-after" content="7 days">',
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="${type}">`,
    '<meta property="og:site_name" content="Vaja">',
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:image" content="${DEFAULT_IMAGE}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:url" content="${canonical}">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${DEFAULT_IMAGE}">`,
    '<script type="application/ld+json">',
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Vaja',
      image: DEFAULT_IMAGE,
      description: "South Africa's leading sauna and steam room supplier since 1970.",
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ZA',
        addressRegion: 'Gauteng',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-26.2041',
        longitude: '28.0473',
      },
      url: SITE_URL,
      priceRange: '$$$',
      areaServed: [
        { '@type': 'City', name: 'Johannesburg' },
        { '@type': 'City', name: 'Cape Town' },
        { '@type': 'City', name: 'Pretoria' },
      ],
    }),
    '</script>',
  ].join('');
}

function injectHead(template, route) {
  const headMarkup = buildHeadMarkup(route);

  return template
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta name="title"[\s\S]*?>/gi, '')
    .replace(/<meta name="description"[\s\S]*?>/gi, '')
    .replace(/<meta name="robots"[\s\S]*?>/gi, '')
    .replace(/<meta property="og:[\s\S]*?>/gi, '')
    .replace(/<meta name="twitter:[\s\S]*?>/gi, '')
    .replace(/<link rel="canonical"[\s\S]*?>/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '')
    .replace('</head>', `${headMarkup}</head>`);
}

async function getBlogRoutes() {
  try {
    const posts = await sanityClient.fetch(`
      *[_type == "post" && defined(slug.current)]{
        "slug": slug.current
      }
    `);

    return posts.map((post) => `/blog/${post.slug}`);
  } catch (error) {
    console.warn('[prerender] Failed to fetch blog routes from Sanity:', error.message);
    return [];
  }
}

async function writeRouteHtml(route, html) {
  const cleanRoute = route === '/' ? '' : route.replace(/^\/+/, '');
  const outputDir = path.join(DIST_DIR, cleanRoute);
  const outputPath = route === '/' ? path.join(DIST_DIR, 'index.html') : path.join(outputDir, 'index.html');

  if (route !== '/') {
    await mkdir(outputDir, { recursive: true });
  }

  await writeFile(outputPath, html, 'utf8');
}

async function run() {
  const template = await readFile(TEMPLATE_PATH, 'utf8');
  const blogRoutes = await getBlogRoutes();
  const routes = Array.from(new Set([...staticRoutes, ...blogRoutes]));

  for (const route of routes) {
    const html = injectHead(template, route);
    await writeRouteHtml(route, html);
    console.log(`[prerender] ${route}`);
  }
}

run().catch((error) => {
  console.error('[prerender] Failed:', error);
  process.exit(1);
});
