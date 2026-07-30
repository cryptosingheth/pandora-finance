import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site. `next build` emits ./out — no server runtime.
  output: 'export',

  // Today's live URLs are directory-style with a trailing slash
  // (/about/, /dpp/, ...) and every canonical depends on it. Do not change.
  //
  // Note: Next's generated trailing-slash redirect deliberately EXCLUDES
  // any path whose last segment contains a dot, so extension URLs such as
  // /cases/dpp-canada.html, /aconomy/journal/tiktok-luxury-lie.html,
  // /v1.html and /llms.txt are served straight from public/ with no
  // redirect. That is what keeps those URLs byte-for-byte identical.
  trailingSlash: true,

  // No Image Optimization server in a static export.
  images: { unoptimized: true },

  // A stray lockfile above this directory makes Turbopack infer the wrong
  // workspace root; pin it to the repo.
  turbopack: { root: __dirname },
};

export default nextConfig;
