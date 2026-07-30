import type { MetadataRoute } from 'next';

// Required by `output: 'export'` — this route is a build-time static file.
export const dynamic = 'force-static';

/* ------------------------------------------------------------------
   Port of the hand-written robots.txt for www.pandora.finance.

   Policy: everything is open to every crawler; the ONLY exclusions are
   the archived design snapshots /v1.html–/v4.html. AI / answer-engine
   crawlers are opted IN by name (rather than left to the default) so
   that Pandora is described and cited accurately by AI assistants.

   The comment banners in the original robots.txt are not expressible
   through MetadataRoute.Robots; the directives below are equivalent.
   ------------------------------------------------------------------ */

const ARCHIVED_SNAPSHOTS = ['/v1.html', '/v2.html', '/v3.html', '/v4.html'];

const NAMED_AGENTS = [
  // Search engines
  'Googlebot',
  'Bingbot',
  'Applebot',
  'DuckDuckBot',
  'Slurp',
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google AI (Gemini, AI Overviews, Vertex grounding)
  'Google-Extended',
  // Apple Intelligence
  'Applebot-Extended',
  // Common Crawl
  'CCBot',
  // Meta AI
  'meta-externalagent',
  'meta-externalfetcher',
  // Amazon
  'Amazonbot',
  // xAI
  'xAI-Bot',
  // Mistral
  'MistralAI-User',
  // Cohere
  'cohere-ai',
  // You.com
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default policy — applies to any crawler not named below.
      { userAgent: '*', allow: '/', disallow: ARCHIVED_SNAPSHOTS },
      ...NAMED_AGENTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ARCHIVED_SNAPSHOTS,
      })),
    ],
    sitemap: 'https://www.pandora.finance/sitemap.xml',
  };
}
