import { writeFile } from 'node:fs/promises';
import { createClient } from '@sanity/client';

const SITE_URL = 'https://www.vaja.co.za';
const OUTPUT_PATH = new URL('../public/sitemap.xml', import.meta.url);

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/products', changefreq: 'weekly', priority: '0.9' },
  { path: '/products/aurora', changefreq: 'monthly', priority: '0.8' },
  { path: '/products/elysium', changefreq: 'monthly', priority: '0.8' },
  { path: '/products/loyly', changefreq: 'monthly', priority: '0.8' },
  { path: '/products/kaelis', changefreq: 'monthly', priority: '0.8' },
  { path: '/products/vakio', changefreq: 'monthly', priority: '0.8' },
  { path: '/products/auroma-concentrates', changefreq: 'monthly', priority: '0.7' },
  { path: '/products/diy-sauna-kits', changefreq: 'monthly', priority: '0.7' },
  { path: '/products/accessories', changefreq: 'monthly', priority: '0.8' },
  { path: '/products/equipment', changefreq: 'monthly', priority: '0.8' },
  { path: '/products/icebath/premiumicebath', changefreq: 'monthly', priority: '0.8' },
  { path: '/steam-rooms', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/gallery', changefreq: 'weekly', priority: '0.8' },
  { path: '/gallery/category/client-3d-renderings', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
];

const sanityClient = createClient({
  projectId: 'hvchy05w',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-03-03',
});

const toDate = (dateString) => {
  if (!dateString) {
    return new Date().toISOString().slice(0, 10);
  }
  return new Date(dateString).toISOString().slice(0, 10);
};

const xmlEscape = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

async function getBlogRoutes() {
  try {
    const posts = await sanityClient.fetch(`
      *[_type == "post" && defined(slug.current)]{
        "slug": slug.current,
        "lastmod": coalesce(_updatedAt, publishedAt, _createdAt)
      }
    `);

    return posts.map((post) => ({
      path: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: toDate(post.lastmod),
    }));
  } catch (error) {
    console.warn('[sitemap] Failed to fetch blog posts from Sanity:', error.message);
    return [];
  }
}

async function generateSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const blogRoutes = await getBlogRoutes();

  const allRoutes = [
    ...staticRoutes.map((route) => ({ ...route, lastmod: today })),
    ...blogRoutes,
  ];

  const uniqueRoutes = Array.from(
    allRoutes.reduce((acc, route) => {
      const loc = `${SITE_URL}${route.path}`;
      const current = acc.get(loc);
      if (!current || route.lastmod > current.lastmod) {
        acc.set(loc, { ...route, loc });
      }
      return acc;
    }, new Map()).values(),
  );

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueRoutes
    .map(
      (route) => `  <url>
    <loc>${xmlEscape(route.loc)}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join('\n')}\n</urlset>\n`;

  await writeFile(OUTPUT_PATH, sitemapXml, 'utf8');
  console.log(`[sitemap] Generated ${uniqueRoutes.length} URLs in public/sitemap.xml`);
}

generateSitemap().catch((error) => {
  console.error('[sitemap] Failed to generate sitemap:', error);
  process.exit(1);
});
