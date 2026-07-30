import type { Metadata, Viewport } from 'next';

/* ------------------------------------------------------------------
   ROOT LAYOUT — www.pandora.finance
   Pandora is the brand of Aconomy Labs Inc. (Toronto, Canada).

   NOTE ON CSS: `assets/design-system.css` is deliberately NOT imported
   here. /auri/ is a fully self-contained landing page that does NOT
   load the design system today; importing it globally would restyle
   that page. Every page that links design-system.css in the original
   HTML imports it itself:

       import '@/public/assets/design-system.css';

   Next scopes that stylesheet to the routes that import it.
   ------------------------------------------------------------------ */

const SITE = 'https://www.pandora.finance';

const DEFAULT_TITLE =
  'Pandora — AI-Native Product Studio Building Agentic Software';
const DEFAULT_DESCRIPTION =
  'Pandora is an AI-native product studio in Toronto — the brand of Aconomy Labs Inc. We build agentic products that do real work on verifiable infrastructure.';
const OG_IMAGE_ALT =
  'Pandora — an AI-native product studio by Aconomy Labs Inc.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    // Page routes MUST use `title: { absolute: '<exact original <title>>' }`
    // so the template never double-appends "| Pandora".
    default: DEFAULT_TITLE,
    template: '%s | Pandora',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: 'Pandora',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Pandora',
    locale: 'en_CA',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aconomyfdn',
    creator: '@aconomyfdn',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: '/og-image.png', alt: OG_IMAGE_ALT }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // The site is white. Deliberate product decision — do not set this to blue.
  // Individual routes whose source HTML declared a different theme-color may
  // re-export `viewport` to preserve it exactly.
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
