import type { MetadataRoute } from 'next';

// Required by `output: 'export'` — this route is a build-time static file.
export const dynamic = 'force-static';

/* ------------------------------------------------------------------
   Port of the hand-written sitemap.xml — 28 URLs.
   Archived design snapshots /v1.html–/v4.html are intentionally
   excluded (they are also Disallow-ed in robots).
   `lastmod` values are each page's git last-commit date at the time
   the sitemap was authored; keep them stable unless a page changes.
   ------------------------------------------------------------------ */

const SITE = 'https://www.pandora.finance';

type Entry = {
  path: string;
  lastModified: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
};

const ENTRIES: Entry[] = [
  { path: '/', lastModified: '2026-07-08', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/trust/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/express-protocol/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/express-protocol/docs/', lastModified: '2026-07-03', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/aconomy/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/aconomy/agent/', lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/unitymarket/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/unitymarket/agent/', lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/propty/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/propty/product/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/propty/agent/', lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/dpp/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/dpp/product/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/dpp/scan/', lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/dpp/agent/', lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/vanna/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/auri/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/cases/dpp-canada.html', lastModified: '2026-07-08', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/cases/agentic-commerce.html', lastModified: '2026-07-08', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/cases/rental-data-privacy.html', lastModified: '2026-07-08', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/cases/ai-governance-e23.html', lastModified: '2026-07-08', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/aconomy/journal/', lastModified: '2026-07-08', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/aconomy/journal/luxury-memorabilia-scams.html', lastModified: '2026-07-08', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/aconomy/journal/next-rwa-validator.html', lastModified: '2026-07-08', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/aconomy/journal/rwa-at-token2049-dubai.html', lastModified: '2026-07-08', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/aconomy/journal/tiktok-luxury-lie.html', lastModified: '2026-07-08', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/aconomy/journal/why-luxury-buyers-need-authenticators.html', lastModified: '2026-07-08', changeFrequency: 'yearly', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ENTRIES.map((e) => ({
    url: `${SITE}${e.path}`,
    lastModified: e.lastModified,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
