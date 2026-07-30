import type { Metadata, Viewport } from 'next';

import { DesignSystemStylesheet } from '@/components/DesignSystemStylesheet';
import { InlineStyle } from '@/components/InlineStyle';
import { JsonLd } from '@/components/JsonLd';
import { RevealOnScroll } from '@/components/RevealOnScroll';

import { pageCss } from './page.css';

/* ------------------------------------------------------------------
   /trust/  <- trust/index.html

   NOT a SiteNav/SiteFooter page: the Trust Center ships its own
   <nav class="navbar"> bar and a one-line <footer class="foot">.
   Both are reproduced inline below, verbatim.
   ------------------------------------------------------------------ */

const TITLE = 'Trust Center — Audits, On-Chain & Open Source | Pandora';
const DESCRIPTION =
  'Verify Pandora yourself: two independent smart-contract audits (QuillAudits, Zokyo), live contracts on BNB Chain mainnet, and open-source code on GitHub.';
const OG_IMAGE_ALT = 'Pandora Trust Center — audited, on-chain, open-source';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/trust/' },
  openGraph: {
    type: 'website',
    // siteName / locale are re-declared because a route-level `openGraph`
    // REPLACES the root layout's object outright — it is not deep-merged.
    // Without these, og:site_name and og:locale vanish from this page.
    siteName: 'Pandora',
    locale: 'en_CA',
    title: TITLE,
    description: DESCRIPTION,
    url: '/trust/',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: OG_IMAGE_ALT },
    ],
  },
  twitter: {
    // Same replacement rule as openGraph above: without card/site/creator
    // the root layout's twitter:card, twitter:site and twitter:creator are
    // dropped from this page.
    card: 'summary_large_image',
    site: '@aconomyfdn',
    creator: '@aconomyfdn',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og-image.png', alt: OG_IMAGE_ALT }],
  },
};

/* Source declares <meta name="theme-color" content="#006cff">, which
   differs from the root layout's #ffffff — preserve it exactly. */
export const viewport: Viewport = { themeColor: '#006cff' };

/* ---- JSON-LD block 1: WebPage + the two audit Reports ---- */
const trustPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.pandora.finance/trust/#webpage',
  url: 'https://www.pandora.finance/trust/',
  name: 'Trust Center — Audits, On-Chain & Open Source | Pandora',
  headline: 'Audited. On-chain. Open-source.',
  description:
    'Verify Pandora yourself: two independent smart-contract audits (QuillAudits, Zokyo), live contracts on BNB Chain mainnet, and open-source code on GitHub.',
  inLanguage: 'en-CA',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Pandora',
    url: 'https://www.pandora.finance',
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.pandora.finance/og-image.png',
    width: 1200,
    height: 630,
  },
  about: {
    '@type': 'Organization',
    name: 'Pandora',
    legalName: 'Aconomy Labs Inc.',
    url: 'https://www.pandora.finance',
    logo: 'https://www.pandora.finance/assets/logos/Pandora_Dark.png',
    sameAs: [
      'https://x.com/aconomyfdn',
      'https://github.com/Pandora-Finance',
      'https://www.linkedin.com/company/aconomyfoundation',
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Pandora',
    legalName: 'Aconomy Labs Inc.',
    url: 'https://www.pandora.finance',
  },
  significantLink: [
    'https://github.com/Pandora-Finance/audit-report',
    'https://github.com/Pandora-Finance/Modular-contract',
    'https://github.com/Pandora-Finance/Express-Protocol-SDK',
    'https://github.com/Pandora-Finance/aconomy-contract',
  ],
  mainEntity: {
    '@type': 'ItemList',
    name: 'Independent smart-contract audits of the Pandora / Express Protocol contracts',
    numberOfItems: 2,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Report',
          name: 'QuillAudits — Express Protocol smart-contract audit',
          author: {
            '@type': 'Organization',
            name: 'QuillAudits',
          },
          about:
            'Express Protocol (Modular-contract) — 11 contracts, ERC-721 and ERC-1155 marketplace',
          temporalCoverage: '2022-02/2022-04',
          url: 'https://www.pandora.finance/audits/QuillAudits-Pandora-Finance-Audit.pdf',
          encodingFormat: 'application/pdf',
          description:
            'Audit of 11 Express Protocol contracts covering the ERC-721 and ERC-1155 marketplace. All high-severity findings resolved; 0 open findings.',
          publisher: {
            '@type': 'Organization',
            name: 'Pandora',
            legalName: 'Aconomy Labs Inc.',
            url: 'https://www.pandora.finance',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Report',
          name: 'Zokyo — Pandora TokenContract security audit',
          author: {
            '@type': 'Organization',
            name: 'Zokyo',
          },
          about: 'Pandora TokenContract',
          temporalCoverage: '2021-05',
          url: 'https://www.pandora.finance/audits/Zokyo-Pandora-Finance-Audit.pdf',
          encodingFormat: 'application/pdf',
          description:
            'Audit of the Pandora TokenContract. Passed with a 100/100 security score, low risk, no critical issues and 100% test coverage.',
          publisher: {
            '@type': 'Organization',
            name: 'Pandora',
            legalName: 'Aconomy Labs Inc.',
            url: 'https://www.pandora.finance',
          },
        },
      },
    ],
  },
};

/* ---- JSON-LD block 2: BreadcrumbList ---- */
const breadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Pandora',
      item: 'https://www.pandora.finance/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Trust Center',
      item: 'https://www.pandora.finance/trust/',
    },
  ],
};

/* The GitHub octocat path, repeated once per repo card in the source. */
const GH_PATH =
  'M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z';

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ArrowOut() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function ContractRow({
  name,
  sub,
  address,
  scanHref,
}: {
  name: string;
  sub: string;
  address: string;
  scanHref: string;
}) {
  return (
    <div className="crow">
      <div className="cname">
        {/* `${name} ` as ONE expression: `{name} <span>` would emit two
            adjacent text nodes (React separates them with <!-- -->), which
            re-shapes the run and shifts pixels. */}
        {`${name} `}
        <span>{sub}</span>
      </div>
      <div className="addr">{address}</div>
      <a className="scan" href={scanHref} target="_blank" rel="noopener">
        Verify on BscScan <ArrowOut />
      </a>
    </div>
  );
}

function RepoCard({
  href,
  name,
  children,
}: {
  href: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <a className="repo reveal" href={href} target="_blank" rel="noopener">
      <span className="gh">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d={GH_PATH} />
        </svg>
      </span>
      <div>
        <div className="rn">{name}</div>
        <div className="rd">{children}</div>
      </div>
    </a>
  );
}

export default function TrustPage() {
  return (
    <>
      {/* React hoists these into <head>, preserving the original
          font-preconnect chain that sits above design-system.css. */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <DesignSystemStylesheet />
      <InlineStyle css={pageCss} />
      <JsonLd data={trustPage} />
      <JsonLd data={breadcrumbs} />

      <nav className="navbar">
        <div className="wrap navbar-in">
          <a href="/">
            <img src="/assets/logos/Pandora_Dark.svg" alt="Pandora" />
          </a>
          <span className="sep"></span>
          <span className="tc">Trust Center</span>
          <div className="links">
            <a href="#audits">Audits</a>
            <a href="#onchain">On-chain</a>
            <a href="#source">Open source</a>
            <a href="#docs">Docs</a>
            <a href="/">← Back to Pandora</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <span className="kicker">Trust &amp; Transparency</span>
          <h1>Audited. On-chain. Open&#8209;source.</h1>
          <p className="lead muted">
            Our smart contracts have been independently audited, deployed live
            on a public blockchain, and open-sourced. Here is the evidence —
            verify any of it yourself.
          </p>
          <div className="hero-stats">
            <div className="hstat">
              <span className="v"></span>2 independent audits
            </div>
            <div className="hstat">
              <span className="v"></span>Live on BNB Chain mainnet
            </div>
            <div className="hstat">
              <span className="v"></span>Open-source on GitHub
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* AUDITS */}
        <section id="audits">
          <div className="wrap">
            <span className="kicker">Security</span>
            <h2 style={{ marginTop: '12px' }}>
              Independent smart-contract audits
            </h2>
            <p className="sub">
              Two separate security firms reviewed the Pandora / Express
              Protocol contracts. Both reports are published in full.
            </p>
            <div className="audit-grid">
              <div className="audit reveal">
                <div className="top">
                  <span className="auditor">QuillAudits</span>
                  <span className="verified">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    0 open findings
                  </span>
                </div>
                <dl>
                  <dt>Scope</dt>
                  <dd>Express Protocol (Modular-contract) · 11 contracts</dd>
                  <dt>Standards</dt>
                  <dd>ERC-721 &amp; ERC-1155 marketplace</dd>
                  <dt>Date</dt>
                  <dd>February–April 2022</dd>
                  <dt>Result</dt>
                  <dd>All high-severity resolved</dd>
                </dl>
                <div className="findings">
                  <span className="tag ok">High: resolved</span>
                  <span className="tag ok">Medium: resolved</span>
                  <span className="tag">Low/Info: ack.</span>
                </div>
                <a
                  className="readbtn"
                  href="/audits/QuillAudits-Pandora-Finance-Audit.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  Read the full report (PDF) <ArrowRight />
                </a>
              </div>
              <div className="audit reveal">
                <div className="top">
                  <span className="auditor">Zokyo</span>
                  <span className="verified">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Passed · 100/100
                  </span>
                </div>
                <dl>
                  <dt>Scope</dt>
                  <dd>Pandora TokenContract</dd>
                  <dt>Security score</dt>
                  <dd>100 / 100</dd>
                  <dt>Date</dt>
                  <dd>May 2021</dd>
                  <dt>Result</dt>
                  <dd>Low risk · no critical issues</dd>
                </dl>
                <div className="findings">
                  <span className="tag ok">Pass</span>
                  <span className="tag ok">No critical issues</span>
                  <span className="tag ok">100% test coverage</span>
                </div>
                <a
                  className="readbtn"
                  href="/audits/Zokyo-Pandora-Finance-Audit.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  Read the full report (PDF) <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ON-CHAIN */}
        <section id="onchain">
          <div className="wrap">
            <span className="kicker">On-chain</span>
            <h2 style={{ marginTop: '12px' }}>Live, verifiable contracts</h2>
            <p className="sub">
              The Express Protocol marketplace contracts are deployed and
              running on BNB Chain mainnet. Click through to verify the bytecode
              yourself on BscScan.
            </p>
            <div className="chain">
              <div className="chain-head">
                <span className="net">● BNB Chain · Mainnet</span> Express Protocol marketplace
              </div>
              <ContractRow
                name="PNDC"
                sub="ERC-721 marketplace token"
                address="0x29F346F06b063dCE2E9D03095bF36096216dD103"
                scanHref="https://bscscan.com/address/0x29F346F06b063dCE2E9D03095bF36096216dD103"
              />
              <ContractRow
                name="TokenFactory"
                sub="ERC-721 collection factory"
                address="0x8E25e9af9D9531567bc7b09bE2E8f1fD3D490761"
                scanHref="https://bscscan.com/address/0x8E25e9af9D9531567bc7b09bE2E8f1fD3D490761"
              />
              <ContractRow
                name="PNDC-1155"
                sub="ERC-1155 marketplace token"
                address="0xB567c935629B847781Db8865961bAf2049EfABE6"
                scanHref="https://bscscan.com/address/0xB567c935629B847781Db8865961bAf2049EfABE6"
              />
              <ContractRow
                name="TokenFactory-1155"
                sub="ERC-1155 collection factory"
                address="0x36F891d3A6108f40f8eA3679356942C75925f28B"
                scanHref="https://bscscan.com/address/0x36F891d3A6108f40f8eA3679356942C75925f28B"
              />
            </div>
            <div className="chain" style={{ marginTop: '16px' }}>
              <div className="chain-head">
                <span className="net">● BNB Chain · Mainnet</span> Pandora token
              </div>
              <ContractRow
                name="PNDR"
                sub="Pandora token"
                address="0x6c1efbed2f57dd486ec091dffd08ee5235a570b1"
                scanHref="https://bscscan.com/token/0x6c1efbed2f57dd486ec091dffd08ee5235a570b1"
              />
            </div>
          </div>
        </section>

        {/* SOURCE */}
        <section id="source">
          <div className="wrap">
            <span className="kicker">Open source</span>
            <h2 style={{ marginTop: '12px' }}>Read the code</h2>
            <p className="sub">
              The contracts, SDK and documentation are public on the Pandora
              GitHub organization.
            </p>
            <div className="repos">
              <RepoCard
                href="https://github.com/Pandora-Finance/aconomy-contract"
                name="Pandora-Finance/aconomy-contract"
              >
                Aconomy piNFT, pools &amp; lending contracts (Solidity)
              </RepoCard>
              <RepoCard
                href="https://github.com/Pandora-Finance/Modular-contract"
                name="Pandora-Finance/Modular-contract"
              >
                Express Protocol marketplace contracts (audited)
              </RepoCard>
              <RepoCard
                href="https://github.com/Pandora-Finance/Express-Protocol-SDK"
                name="Pandora-Finance/Express-Protocol-SDK"
              >
                The JavaScript SDK — npm <b>pandora-express</b>
              </RepoCard>
              <RepoCard
                href="https://github.com/Pandora-Finance/audit-report"
                name="Pandora-Finance/audit-report"
              >
                The two audit reports, in full
              </RepoCard>
            </div>
          </div>
        </section>

        {/* DOCS */}
        <section id="docs">
          <div className="wrap">
            <span className="kicker">Documentation</span>
            <h2 style={{ marginTop: '12px' }}>Developer documentation</h2>
            <p className="sub">
              Full SDK reference for building on Express Protocol.
            </p>
            <div className="docs-cta">
              <a className="btn btn-primary" href="/express-protocol/docs/">
                Read the Express Protocol docs
              </a>
              <a className="btn btn-ghost" href="/express-protocol/">
                Express Protocol overview
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          {/* Single source line on purpose: JSX trims the leading space of a
              multi-line text node, which would eat the space after </b>. */}
          <b style={{ color: '#fff' }}>Pandora</b> · Trust Center — audited, on-chain, open-source. &nbsp;·&nbsp; <a href="/">Back to all products</a>
        </div>
      </footer>

      {/* The Trust Center ships the terser reveal IIFE: no
          prefers-reduced-motion branch and no rootMargin. */}
      <RevealOnScroll rootMargin="0px" respectReducedMotion={false} />
    </>
  );
}
