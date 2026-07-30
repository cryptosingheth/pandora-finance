import type { CSSProperties } from 'react';
import type { Metadata } from 'next';

import { DesignSystemStylesheet } from '@/components/DesignSystemStylesheet';
import { InlineStyle } from '@/components/InlineStyle';
import { JsonLd } from '@/components/JsonLd';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter, FooterColumn } from '@/components/SiteFooter';

import { AgentConsole } from './AgentConsole';
import { pageCss } from './page.css';
import { hubJsonLd } from './page.jsonld';

/* ------------------------------------------------------------------
   / — the hub (ported from index.html).

   Two notes on the JS that used to ship inline here:

   1. The count-up IIFE is deliberately NOT ported. It targets
      `.pw-n[data-count]` and NOT ONE `.pw-n` on this page carries a
      data-count attribute — it is a provable no-op today. The proof
      metrics ("2" independent audits, "7" products) are literal text
      and must stay literal: a count-up bug previously shipped
      "0 audits" on this page. Do not reintroduce it.

   2. The proof ticker used to be built client-side with createElement.
      It is plain static markup, so it is rendered as JSX below —
      same 2x7 items, same order, same seamless -50% loop.

   The reveal-on-scroll observer and the streaming agent console are
   real behaviour and are ported into client components.
   ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: {
    absolute: 'Pandora — AI-Native Product Studio Building Agentic Software',
  },
  description:
    'Pandora is an AI-native product studio in Toronto — the brand of Aconomy Labs Inc. We build agentic products that do real work on verifiable infrastructure.',
  alternates: { canonical: '/' },
  // NOTE: a route-level `openGraph` / `twitter` object REPLACES the root
  // layout's wholesale — it does not merge key-by-key. Verified against the
  // emitted <head>: omitting siteName/locale/site/creator here silently drops
  // og:site_name, og:locale, twitter:site and twitter:creator from this page.
  // They are re-declared below with the source HTML's exact values.
  openGraph: {
    type: 'website',
    siteName: 'Pandora',
    locale: 'en_CA',
    title: 'Pandora — AI-Native Product Studio Building Agentic Software',
    description:
      'Pandora is an AI-native product studio in Toronto — the brand of Aconomy Labs Inc. We build agentic products that do real work on verifiable infrastructure.',
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pandora — an AI-native product studio by Aconomy Labs Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aconomyfdn',
    creator: '@aconomyfdn',
    title: 'Pandora — AI-Native Product Studio Building Agentic Software',
    description:
      'Pandora is an AI-native product studio in Toronto — the brand of Aconomy Labs Inc. We build agentic products that do real work on verifiable infrastructure.',
    images: [
      {
        url: '/og-image.png',
        alt: 'Pandora — an AI-native product studio by Aconomy Labs Inc.',
      },
    ],
  },
};

const TICKER_ITEMS = [
  'Agentic software in production',
  '$2.4M seed, 5× oversubscribed',
  'Live app on Google Play',
  'Audited smart contracts',
  'First-ever ERC-404 marketplace',
  '7 products, one team',
  'Built in Canada',
];

function TickerDot() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function ProofCheck() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
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

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <DesignSystemStylesheet />
      <InlineStyle css={pageCss} />
      <JsonLd raw={hubJsonLd} />

      {/* ============================== NAV ============================== */}
      <SiteNav
        productsHref="#products"
        links={[
          { href: '#proof', label: 'Proof' },
          { href: '#products', label: 'Products' },
          { href: '#partners', label: 'Partners' },
          { href: '/about/', label: 'About' },
        ]}
      />

      <main>
        {/* ============================== HERO ============================== */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="hero-badge reveal">
                <span className="pulse"></span>AI-native product studio ·
                Aconomy Labs Inc., Canada
              </span>
              <h1 className="reveal">
                We build agentic products that <span className="grad">do real work.</span>
              </h1>
              <p className="lead reveal">
                Pandora is an AI-native product studio. We ship <b>agentic software</b> that autonomously gets things done in
                the real world — validating assets, screening tenants,
                passporting products, managing risk, settling payments — on <b>verifiable infrastructure</b> that keeps every action
                provable. This page is our proof of work.
              </p>
              <div className="hero-cta reveal">
                <a
                  className="btn btn-glow"
                  href="https://calendly.com/rhythm-pandora/30min"
                  target="_blank"
                  rel="noopener"
                  title="Booking opens shortly"
                >
                  Book a demo
                </a>
                <a className="btn btn-wire-d" href="#products">
                  Explore the products
                </a>
              </div>
              <p className="hero-aside reveal">
                Building something ambitious of your own? <a
                  href="https://calendly.com/rhythm-pandora/30min"
                  target="_blank"
                  rel="noopener"
                >
                  Talk to the studio →
                </a>
              </p>
              <div className="hero-meta reveal">
                <span>
                  <span className="d"></span>Building since 2021
                </span>
                <span>
                  <span className="d"></span>2 independent audits
                </span>
                <span>
                  <span className="d"></span>Shipped mobile app
                </span>
                <span>
                  <span className="d"></span>Built in the open
                </span>
              </div>
            </div>

            {/* LIVE AGENT CONSOLE — signature motion, DARK */}
            <AgentConsole />
          </div>
        </section>

        {/* ============================== TICKER ============================== */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-row" id="ticker">
            {/* two passes for a seamless -50% loop */}
            {[0, 1].map((pass) =>
              TICKER_ITEMS.map((t) => (
                <span className="ticker-item" key={`${pass}-${t}`}>
                  <TickerDot />
                  {t}
                </span>
              ))
            )}
          </div>
        </div>

        {/* ============================== THESIS (+ engineering) ============================== */}
        <section id="thesis" className="section">
          <div className="wrap">
            <div className="thesis-grid">
              <div className="reveal">
                <span className="kicker">What Pandora is all about</span>
                <p className="thesis-lead" style={{ marginTop: '20px' }}>
                  We build where <span className="hl">
                    artificial intelligence meets real-world value
                  </span> — and let software do the work.
                </p>
              </div>
              <div className="reveal">
                <div className="thesis-body">
                  <p>
                    For decades, the hardest parts of commerce — proving an
                    asset is genuine, deciding who to trust, moving value safely
                    — needed a human in the loop. AI changes that. Agents can
                    now <b>reason, decide and act</b>, not just answer.
                  </p>
                  <p>
                    So we build products where an agent carries the whole task:
                    it authenticates a watch, screens a newcomer with no credit
                    file, passports a physical good, manages a risk position, or
                    settles a payment — end to end, autonomously. And because
                    these actions touch real assets and real money, we anchor
                    them to <b>verifiable infrastructure</b>, so every step is
                    provable rather than promised.
                  </p>
                  <p>
                    That is the seam we work in: <b>
                      intelligence that does real work, on rails you can verify.
                    </b>
                  </p>
                </div>
              </div>
            </div>

            <div className="eng-grid">
              {/* AGENTIC AI */}
              <article
                className="ecard reveal"
                style={{ '--acc': 'var(--pan-blue)' } as CSSProperties}
              >
                <div className="eh">
                  <span className="eg">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="4" y="7" width="16" height="12" rx="3" />
                      <path d="M12 7V4M8 3h8" />
                      <circle cx="9" cy="13" r="1.3" />
                      <circle cx="15" cy="13" r="1.3" />
                    </svg>
                  </span>
                  <h3>Agentic AI systems</h3>
                </div>
                <p>
                  Conversational agents that <b>autonomously execute real tasks</b> — planning, calling
                  tools, and finishing the job with a visible, replayable trail
                  of every tool call and decision.
                </p>
                <ul className="eproof">
                  <li>
                    <span className="ck">
                      <ProofCheck />
                    </span>
                    <span>
                      Orchestrated tool-calling with transparent execution logs
                    </span>
                  </li>
                  <li>
                    <span className="ck">
                      <ProofCheck />
                    </span>
                    <span>
                      Agents that do real work — asset validation, tenant
                      screening, product verification
                    </span>
                  </li>
                  <li>
                    <span className="ck">
                      <ProofCheck />
                    </span>
                    <span>
                      Grounded in real data and on-chain state, not just prompts
                    </span>
                  </li>
                </ul>
              </article>

              {/* VERIFIABLE INFRA */}
              <article
                className="ecard reveal"
                style={{ '--acc': 'var(--c-express)' } as CSSProperties}
              >
                <div className="eh">
                  <span className="eg">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2 3 7v10l9 5 9-5V7z" />
                      <path d="m3 7 9 5 9-5M12 12v10" />
                    </svg>
                  </span>
                  <h3>Verifiable infrastructure</h3>
                </div>
                <p>
                  Production smart contracts and a typed <b>SDK</b> that
                  abstracts the chain away — so products ship features, not
                  ABIs. Independently audited, deployed, and open.
                </p>
                <ul className="eproof">
                  <li>
                    <span className="ck">
                      <ProofCheck />
                    </span>
                    <span>
                      Install it: <code>npm i pandora-express</code>
                    </span>
                  </li>
                  <li>
                    <span className="ck">
                      <ProofCheck />
                    </span>
                    <span>
                      First-ever ERC-404 marketplace — Ethereum + Polygon,
                      expanding to Base
                    </span>
                  </li>
                  <li>
                    <span className="ck">
                      <ProofCheck />
                    </span>
                    <span>
                      Audited by <a href="/trust/">QuillAudits &amp; Zokyo</a> —
                      reports public
                    </span>
                  </li>
                </ul>
              </article>

              {/* FULL-STACK PRODUCTS */}
              <article
                className="ecard reveal"
                style={{ '--acc': 'var(--c-aconomy)' } as CSSProperties}
              >
                <div className="eh">
                  <span className="eg">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="13" rx="2" />
                      <path d="M3 9h18M8 21h8M12 17v4" />
                    </svg>
                  </span>
                  <h3>Full-stack products</h3>
                </div>
                <p>
                  From mobile apps to marketplaces to developer docs, we ship
                  the <b>whole product</b> — design, frontend, backend,
                  contracts and the agent layer that ties them together.
                </p>
                <ul className="eproof">
                  <li>
                    <span className="ck">
                      <ProofCheck />
                    </span>
                    <span>A live app on Google Play, with a brand film</span>
                  </li>
                  <li>
                    <span className="ck">
                      <ProofCheck />
                    </span>
                    <span>
                      Written developer docs — <a href="/express-protocol/docs/">Express Protocol</a>
                    </span>
                  </li>
                  <li>
                    <span className="ck">
                      <ProofCheck />
                    </span>
                    <span>
                      Built in the open at <a
                        href="https://github.com/Pandora-Finance"
                        target="_blank"
                        rel="noopener"
                      >
                        github.com/Pandora-Finance
                      </a>
                    </span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ============================== PRODUCTS ============================== */}
        <section id="products" className="section">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="kicker">The products we&apos;ve built</span>
                <h2>The products we&apos;re proud of.</h2>
              </div>
              <p className="muted">
                Each pairs an AI agent that does the work with infrastructure
                that makes it verifiable. Open any card to read more — or book a
                demo to see it live.
              </p>
            </div>

            <div className="prod-grid">
              <div
                className="pcard reveal"
                style={{ '--acc': 'var(--c-express)' } as CSSProperties}
              >
                <a
                  className="pcard-link"
                  href="/express-protocol/"
                  aria-label="Express Protocol — view page"
                ></a>
                <div className="pcard-top">
                  <div className="pmark">
                    <div className="pmeta">
                      <span className="plogo-box">
                        <img
                          className="plogo plogo-express"
                          src="/assets/logos/ExpressProtocol_Dark-tile.svg"
                          alt="Express Protocol"
                        />
                      </span>
                      <div className="psub">Agentic commerce SDK</div>
                    </div>
                  </div>
                  <span className="pnum">01</span>
                </div>
                <span className="pstatus live">
                  <span className="lv"></span>Live in production
                </span>
                <p className="desc">
                  The open-source SDK that gives AI agents the primitives to <b>discover, transact and settle on their own</b> — one typed
                  interface over mint, trade and payments, with an x402 module
                  for autonomous settlement.
                </p>
                <div className="ptags">
                  <span className="ptag">AI agents</span>
                  <span className="ptag">x402 payments</span>
                  <span className="ptag">Audited</span>
                </div>
                <div className="pactions">
                  <a
                    className="btn btn-glow small"
                    href="https://calendly.com/rhythm-pandora/30min"
                    target="_blank"
                    rel="noopener"
                  >
                    Book a demo
                  </a>
                  <span className="pgo">
                    View page <ArrowRight />
                  </span>
                </div>
              </div>

              <div
                className="pcard reveal"
                style={{ '--acc': 'var(--c-aconomy)' } as CSSProperties}
              >
                <a
                  className="pcard-link"
                  href="/aconomy/"
                  aria-label="Aconomy — view page"
                ></a>
                <div className="pcard-top">
                  <div className="pmark">
                    <div className="pmeta">
                      <span className="plogo-box">
                        <img
                          className="plogo plogo-aconomy"
                          src="/assets/logos/Aconomy_Dark-tile.png"
                          alt="Aconomy"
                        />
                      </span>
                      <div className="psub">Agentic RWA marketplace</div>
                    </div>
                  </div>
                  <span className="pnum">02</span>
                </div>
                <span className="pstatus live">
                  <span className="lv"></span>Live · Google Play
                </span>
                <p className="desc">
                  An AI-assisted marketplace for <b>real-world assets</b> —
                  tokenize, validate and trade watches, real estate, gold and
                  art, with an AI agent guiding discovery and validation and
                  on-chain records keeping provenance verifiable.
                </p>
                <div className="ptags">
                  <span className="ptag">Applied AI</span>
                  <span className="ptag">Real-world assets</span>
                  <span className="ptag">Live app</span>
                </div>
                <div className="pactions">
                  <a
                    className="btn btn-glow small"
                    href="https://calendly.com/rhythm-pandora/30min"
                    target="_blank"
                    rel="noopener"
                  >
                    Book a demo
                  </a>
                  <span className="pgo">
                    View page <ArrowRight />
                  </span>
                </div>
              </div>

              <div
                className="pcard reveal"
                style={{ '--acc': 'var(--c-unity)' } as CSSProperties}
              >
                <a
                  className="pcard-link"
                  href="/unitymarket/"
                  aria-label="UnityMarket — view page"
                ></a>
                <div className="pcard-top">
                  <div className="pmark">
                    <div className="pmeta">
                      <span className="plogo-box">
                        <img
                          className="plogo plogo-unity"
                          src="/assets/logos/UnityMarket_Dark-tile.svg"
                          alt="UnityMarket"
                        />
                      </span>
                      <div className="psub">NFT marketplace</div>
                    </div>
                  </div>
                  <span className="pnum">03</span>
                </div>
                <span className="pstatus">
                  <span className="lv"></span>On Express Protocol
                </span>
                <p className="desc">
                  A creator-first NFT marketplace to mint, discover, buy, sell
                  and auction digital collectibles — <b>one of the earliest products we built</b>, and a proof
                  point for the Express Protocol rails that now power agentic
                  commerce.
                </p>
                <div className="ptags">
                  <span className="ptag">NFTs</span>
                  <span className="ptag">Marketplace</span>
                  <span className="ptag">On Express</span>
                </div>
                <div className="pactions">
                  <a
                    className="btn btn-glow small"
                    href="https://calendly.com/rhythm-pandora/30min"
                    target="_blank"
                    rel="noopener"
                  >
                    Book a demo
                  </a>
                  <span className="pgo">
                    View page <ArrowRight />
                  </span>
                </div>
              </div>

              <div
                className="pcard reveal"
                style={{ '--acc': '#1a6b5a' } as CSSProperties}
              >
                <a
                  className="pcard-link"
                  href="/propty/"
                  aria-label="Propty — view page"
                ></a>
                <div className="pcard-top">
                  <div className="pmark">
                    <div className="pmeta">
                      <span className="plogo-box">
                        <img
                          className="plogo plogo-propty"
                          src="/assets/logos/propty-horizontal-tile.svg"
                          alt="Propty"
                        />
                      </span>
                      <div className="psub">Agentic leasing · private by ZK</div>
                    </div>
                  </div>
                  <span className="pnum">04</span>
                </div>
                <span className="pstatus">
                  <span className="lv"></span>In development
                </span>
                <p className="desc">
                  The AI leasing agent — <b>private by zero-knowledge</b>. It
                  screens newcomers with no credit file, drafts the lease and
                  guarantees the owner&apos;s payout, proving eligibility
                  without over-sharing a tenant&apos;s personal data.
                </p>
                <div className="ptags">
                  <span className="ptag">AI screening</span>
                  <span className="ptag">Zero-knowledge</span>
                  <span className="ptag">Guaranteed rent</span>
                </div>
                <div className="pactions">
                  <a
                    className="btn btn-glow small"
                    href="https://calendly.com/rhythm-pandora/30min"
                    target="_blank"
                    rel="noopener"
                  >
                    Book a demo
                  </a>
                  <span className="pgo">
                    View page <ArrowRight />
                  </span>
                </div>
              </div>

              <div
                className="pcard reveal"
                style={{ '--acc': '#6941C6' } as CSSProperties}
              >
                <a
                  className="pcard-link"
                  href="/dpp/"
                  aria-label="The DPP Company — view page"
                ></a>
                <div className="pcard-top">
                  <div className="pmark">
                    <div className="pmeta">
                      <span className="plogo-box">
                        <img
                          className="plogo plogo-dpp"
                          src="/assets/logos/dpp-horizontal-tile.svg"
                          alt="The DPP Company"
                        />
                      </span>
                      <div className="psub">Agentic product passports</div>
                    </div>
                  </div>
                  <span className="pnum">05</span>
                </div>
                <span className="pstatus">
                  <span className="lv"></span>In development
                </span>
                <p className="desc">
                  An <b>AI agent that verifies and passports physical products</b>
                  . From one scan it authenticates an item, traces provenance,
                  reads certifications, flags counterfeits, and issues its
                  Digital Product Passport — anchored on-chain, EU-DPP aligned.
                </p>
                <div className="ptags">
                  <span className="ptag">AI verification</span>
                  <span className="ptag">Provenance</span>
                  <span className="ptag">EU DPP-aligned</span>
                </div>
                <div className="pactions">
                  <a
                    className="btn btn-glow small"
                    href="https://calendly.com/rhythm-pandora/30min"
                    target="_blank"
                    rel="noopener"
                  >
                    Book a demo
                  </a>
                  <span className="pgo">
                    View page <ArrowRight />
                  </span>
                </div>
              </div>

              <div
                className="pcard pcard-soon reveal"
                style={{ '--acc': '#C99A4E' } as CSSProperties}
              >
                <div className="pcard-top">
                  <div className="pmark">
                    <div className="pmeta">
                      <span className="plogo-box">
                        <span className="pname-text">Auri</span>
                      </span>
                      <div className="psub">
                        Programmable-gold neobank · Canada
                      </div>
                    </div>
                  </div>
                  <span className="pnum">06</span>
                </div>
                <span className="pstatus">
                  <span className="lv"></span>Coming soon
                </span>
                <p className="desc">
                  A <b>programmable-gold neobank for Canada</b> — own real,
                  audited gold, then borrow against it, spend it, send it
                  worldwide, or let your AI agent manage it via MCP.
                </p>
                <div className="ptags">
                  <span className="ptag">Programmable gold</span>
                  <span className="ptag">Neobank</span>
                  <span className="ptag">Canada</span>
                </div>
              </div>

              <div
                className="pcard pcard-soon reveal"
                style={{ '--acc': '#6c5ce7' } as CSSProperties}
              >
                <div className="pcard-top">
                  <div className="pmark">
                    <div className="pmeta">
                      <span className="plogo-box">
                        <span className="pname-text">Vanna Protocol</span>
                      </span>
                      <div className="psub">Agentic composable credit infra</div>
                    </div>
                  </div>
                  <span className="pnum">07</span>
                </div>
                <span className="pstatus">
                  <span className="lv"></span>Coming soon
                </span>
                <p className="desc">
                  Risk-margin infrastructure <b>built to keep you out of liquidation</b> —
                  under-collateralized positions steered by trading agents
                  through Vanna MCPs.
                </p>
                <div className="ptags">
                  <span className="ptag">Risk engine</span>
                  <span className="ptag">Trading agents</span>
                  <span className="ptag">MCP</span>
                </div>
              </div>

              <div
                className="pcard pcard-soon reveal"
                style={{ '--acc': '#35618e' } as CSSProperties}
              >
                <div className="pcard-top">
                  <div className="pmark">
                    <div className="pmeta">
                      <span className="plogo-box">
                        <span className="pname-text">Keel</span>
                      </span>
                      <div className="psub">Agentic AI governance</div>
                    </div>
                  </div>
                  <span className="pnum">08</span>
                </div>
                <span className="pstatus">
                  <span className="lv"></span>Coming soon
                </span>
                <p className="desc">
                  AI governance for regulated finance — model-risk oversight,
                  approvals and audit trails that keep AI accountable and <b>OSFI E-23-ready</b>.
                </p>
                <div className="ptags">
                  <span className="ptag">AI governance</span>
                  <span className="ptag">OSFI E-23</span>
                  <span className="ptag">Model risk</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== WORK WITH THE STUDIO ============================== */}
        <section id="build" className="section">
          <div className="wrap">
            <div className="build-card reveal">
              <span className="kicker">Work with the studio</span>
              <h2 style={{ marginTop: '16px' }}>
                Building something ambitious? We&apos;ve shipped the hard
                version before.
              </h2>
              <p>
                An RWA marketplace, an agentic-commerce SDK, an AI leasing
                agent, digital product passports, a risk-margin engine —
                we&apos;ve taken products that touch real assets, real money and
                real regulation from zero to shipped. If you&apos;re building at
                the seam of AI and real-world value, the fastest way to de-risk
                it is to talk to a team that has already done it.
              </p>
              <div className="build-cta">
                <a
                  className="btn btn-glow"
                  href="https://calendly.com/rhythm-pandora/30min"
                  target="_blank"
                  rel="noopener"
                >
                  Book a demo
                </a>
                <a className="btn btn-wire-d" href="#products">
                  See what we&apos;ve built
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== PROOF OF WORK ============================== */}
        <section id="proof" className="section">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="kicker on-dark">
                  What we&apos;ve shipped to date
                </span>
                <h2>Credibility measured in artifacts, not adjectives.</h2>
              </div>
              <p className="muted">
                Real products in real hands, code independently audited,
                infrastructure verifiable on a public chain. Every number below
                points to something you can open and check.
              </p>
            </div>

            <div className="pw-grid">
              <div className="pw reveal">
                <span className="pw-tag">Raised</span>
                <span className="pw-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <div className="pw-n">$2.4M</div>
                <div className="pw-k">Seed round</div>
                <div className="pw-s">Raised in 2021 — 5× oversubscribed.</div>
              </div>
              <div className="pw reveal">
                <span className="pw-tag">Verified</span>
                <span className="pw-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                {/* STATIC by design — this must never animate from 0. */}
                <div className="pw-n">2</div>
                <div className="pw-k">Independent audits</div>
                <div className="pw-s">
                  QuillAudits · 0 open findings. Zokyo · 100/100.
                </div>
              </div>
              <div className="pw reveal">
                <span className="pw-tag">Built</span>
                <span className="pw-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 7h8M8 12h8M8 17h5" />
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                  </svg>
                </span>
                {/* STATIC by design — this must never animate from 0. */}
                <div className="pw-n">7</div>
                <div className="pw-k">Products</div>
                <div className="pw-s">
                  One team, one foundation — agents plus verifiable rails.
                </div>
              </div>
              <div className="pw reveal">
                <span className="pw-tag">First</span>
                <span className="pw-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 20.8l1.2-6.6L2.5 9l6.6-.9z" />
                  </svg>
                </span>
                <div className="pw-n">1st</div>
                <div className="pw-k">ERC-404 marketplace</div>
                <div className="pw-s">
                  First-ever, shipped Mar 2024 — Ethereum &amp; Polygon.
                </div>
              </div>
            </div>

            <div className="pw-rail reveal">
              <div className="pw-rail-head">
                <span className="net">● Track record</span> A studio that keeps
                shipping — 2021 to today
              </div>
              <ul className="pw-tl">
                <li>
                  <span className="yr">2021</span>
                  <span className="ev">Seed + first audit</span>
                  <span className="de">
                    $2.4M seed (5× oversubscribed). Zokyo reviews the contracts
                    — 100/100 (May 2021).
                  </span>
                </li>
                <li>
                  <span className="yr">2022</span>
                  <span className="ev">SDK on npm</span>
                  <span className="de">
                    <span className="mono">pandora-express</span> ships to npm
                    (Feb 2022). QuillAudits audit closes with 0 open findings
                    (Apr 2022).
                  </span>
                </li>
                <li>
                  <span className="yr">Nov 2023</span>
                  <span className="ev">Aconomy open testnet</span>
                  <span className="de">
                    The AI-assisted RWA marketplace opens its public testnet.
                  </span>
                </li>
                <li>
                  <span className="yr">Mar 2024</span>
                  <span className="ev">First-ever ERC-404 marketplace</span>
                  <span className="de">
                    First-ever ERC-404 marketplace ships (Mar 26) — Ethereum +
                    Polygon, expanding to Base.
                  </span>
                </li>
                <li>
                  <span className="yr">Aug 2024</span>
                  <span className="ev">Foundation era + app</span>
                  <span className="de">
                    The Aconomy Foundation era begins; the Aconomy app lands
                    live on Google Play.
                  </span>
                </li>
                <li>
                  <span className="yr">Now</span>
                  <span className="ev">The agentic era</span>
                  <span className="de">
                    7 products on one foundation — a family of agents that do
                    real work on verifiable rails.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================== ACONOMY IS LIVE (DARK) ============================== */}
        <section id="live" className="section">
          <div className="wrap live-grid">
            <div className="reveal">
              <span className="kicker on-navy">Aconomy is live</span>
              <h2 style={{ marginTop: '16px' }}>
                A real product you can download today.
              </h2>
              <p className="live-lead">
                Aconomy — our AI-assisted marketplace for real-world assets —
                ships as a mobile app. Tokenize, validate and trade real-world
                assets from your phone, on infrastructure that keeps provenance
                verifiable.
              </p>
              <p className="live-note">
                Watch the brand film, or get the app on Google Play.
              </p>
              <div className="live-cta">
                <a
                  className="gplay"
                  href="https://play.google.com/store/apps/details?id=com.aconomyfoundation.aconomy"
                  target="_blank"
                  rel="noopener"
                  aria-label="Get Aconomy on Google Play"
                >
                  <svg className="gp-ic" viewBox="0 0 512 512" aria-hidden="true">
                    <path
                      fill="#00d3ff"
                      d="M47 24 279 256 47 488c-9-5-15-15-15-27V51c0-12 6-22 15-27z"
                    />
                    <path
                      fill="#00f076"
                      d="m47 24c9-5 20-4 30 2l253 146-63 63L47 24z"
                    />
                    <path
                      fill="#ffce00"
                      d="m267 237 63-63 89 51c20 12 20 40 0 52l-89 51-63-63 32-14z"
                    />
                    <path
                      fill="#ff3a44"
                      d="m267 275 63 63L77 484c-10 6-21 7-30 2l220-211z"
                    />
                  </svg>
                  <span className="gp-txt">
                    <span className="s">Get it on</span>
                    <span className="b">Google Play</span>
                  </span>
                </a>
                <a className="btn btn-wire-d" href="/aconomy/">
                  Explore Aconomy
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
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/_Kahfb18HE4"
                  title="Aconomy — the RWA marketplace"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== PARTNERS (DARK) ============================== */}
        <section id="partners" className="section">
          <div className="wrap">
            <div className="part-head reveal">
              <span className="kicker on-navy">Backed &amp; connected</span>
              <h2 style={{ marginTop: '16px' }}>
                Investors &amp; client ecosystem.
              </h2>
              <p>
                The capital that funded the work, the clients and partners who
                put it to use, the press that covered it, and the Canadian
                programs that incubated us — since 2021.
              </p>
            </div>

            <div className="logo-row reveal">
              <div className="lr-label">Investors</div>
              <div className="logo-wall">
                <span className="logo-chip">
                  <img
                    src="/assets/partners/au21Capital.png"
                    alt="AU21 Capital"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/ngcVentures.png"
                    alt="NGC Ventures"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/masterVentures.png"
                    alt="Master Ventures"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/magnusCapital.png"
                    alt="Magnus Capital"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/exNetwork.png"
                    alt="Exnetwork Capital"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/genBlock.png"
                    alt="Genesis Block Ventures"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/zokyo.png"
                    alt="Zokyo"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/spark.png"
                    alt="Spark Digital Assets"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img src="/assets/partners/x21.png" alt="x21" loading="lazy" />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/protocol.png"
                    alt="Protocol Ventures"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/chainAssets.png"
                    alt="Chain Asset Capital"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/gbv.png"
                    alt="GBV Capital"
                    loading="lazy"
                  />
                </span>
              </div>
            </div>

            <div className="logo-row reveal">
              <div className="lr-label">Clients &amp; ecosystem</div>
              <div className="logo-wall">
                <span className="logo-chip txt">Tempho Inc.</span>
                <span className="logo-chip txt">Shah &amp; Shah Lawyers</span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/forward.png"
                    alt="Forward Protocol"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/livwell.png"
                    alt="LivWell"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/metastarter.png"
                    alt="Metastarter"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/soccerHub.png"
                    alt="Soccer Hub"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/cloutLanders.png"
                    alt="Cloutlanders"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/cryptoPirates.png"
                    alt="Cryptopirates"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/h3ro3s.png"
                    alt="H3ROES"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/biconomy.png"
                    alt="Biconomy"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/unmarshal.png"
                    alt="Unmarshal"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/partners/oroPocket.png"
                    alt="OroPocket"
                    loading="lazy"
                  />
                </span>
              </div>
            </div>

            <div className="logo-row reveal">
              <div className="lr-label">Featured in</div>
              <div className="logo-wall press">
                <a
                  className="logo-chip"
                  href="https://news.bitcoin.com/pandora-raises-2-4m-from-industry-heavyweights-to-bridge-off-chain-assets-to-open-finance-via-nfts/"
                  target="_blank"
                  rel="noopener"
                  title="Bitcoin.com — Pandora raises $2.4M"
                >
                  <img
                    src="/assets/press/bitcoin-com.png"
                    alt="Bitcoin.com"
                    loading="lazy"
                  />
                </a>
                <a
                  className="logo-chip"
                  href="https://web.archive.org/web/20240120030836/https://cointelegraph.com/news/pandora-finance-s-2-4m-raise-helps-spearhead-open-finance-protocol"
                  target="_blank"
                  rel="noopener"
                  title="Cointelegraph — Pandora Finance's $2.4M raise"
                >
                  <img
                    src="/assets/press/cointelegraph.png"
                    alt="Cointelegraph"
                    loading="lazy"
                  />
                </a>
                <a
                  className="logo-chip"
                  href="https://blocktelegraph.io/pandora-raises-2-4m-from-industry-heavyweights-to-bridge-off-chain-assets-to-open-finance-via-nfts/"
                  target="_blank"
                  rel="noopener"
                  title="Block Telegraph — Pandora raises $2.4M"
                >
                  <img
                    src="/assets/press/block-telegraph.png"
                    alt="Block Telegraph"
                    loading="lazy"
                  />
                </a>
                <span className="logo-chip">
                  <img
                    src="/assets/press/apple-news.png"
                    alt="Apple News"
                    loading="lazy"
                  />
                </span>
                <span className="logo-chip">
                  <img
                    src="/assets/press/lofficiel.png"
                    alt="L'Officiel"
                    loading="lazy"
                  />
                </span>
              </div>
            </div>

            {/* INVESTOR NETWORK · INCUBATED IN CANADA (highlighted) */}
            <div className="incu-block reveal">
              <div className="lr-label">Investor network &amp; incubators</div>
              <div className="incu-row">
                <a
                  className="incu-card"
                  href="https://tbdc.com"
                  target="_blank"
                  rel="noopener"
                  aria-label="Toronto Business Development Centre (TBDC)"
                >
                  <div className="incu-logo">
                    <img
                      src="/assets/incubators/tbdc.svg"
                      alt="Toronto Business Development Centre (TBDC)"
                      loading="lazy"
                    />
                  </div>
                  <div className="incu-meta">
                    <span className="nm">
                      TBDC
                      <ArrowUpRight />
                    </span>
                    <span className="ds">
                      Toronto Business Development Centre — startup incubator,
                      Toronto
                    </span>
                  </div>
                </a>

                <a
                  className="incu-card"
                  href="https://thebhive.ca"
                  target="_blank"
                  rel="noopener"
                  aria-label="BHive, Brampton"
                >
                  <div className="incu-logo bhive">
                    <img
                      src="/assets/incubators/bhive.svg"
                      alt="BHive — Brampton"
                      loading="lazy"
                    />
                  </div>
                  <div className="incu-meta">
                    <span className="nm">
                      BHive
                      <ArrowUpRight />
                    </span>
                    <span className="ds">
                      BHive, Brampton — launched in partnership with TBDC
                    </span>
                  </div>
                </a>

                <a
                  className="incu-card"
                  href="https://oc-innovation.ca"
                  target="_blank"
                  rel="noopener"
                  aria-label="Ontario Centre of Innovation (OCI)"
                >
                  <div className="incu-logo">
                    <img
                      src="/assets/incubators/oci.svg"
                      alt="Ontario Centre of Innovation (OCI)"
                      loading="lazy"
                    />
                  </div>
                  <div className="incu-meta">
                    <span className="nm">
                      OCI
                      <ArrowUpRight />
                    </span>
                    <span className="ds">
                      Ontario Centre of Innovation — Ontario&apos;s innovation
                      agency
                    </span>
                  </div>
                </a>
              </div>

              <div className="incu-badges">
                <span className="incu-badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg> IRCC-designated Startup Visa organizations
                </span>
                <span className="incu-badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 21V11l8-4 8 4v10" />
                    <path d="M9 21v-5h6v5" />
                  </svg> Incorporated &amp; headquartered in Toronto, Canada
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== CASE STUDIES ============================== */}
        <section id="cases" className="section">
          <div className="wrap">
            <div className="block-head reveal">
              <span className="kicker">In practice</span>
              <h2 style={{ marginTop: '16px' }}>Where the work applies.</h2>
              <p>
                Four cases showing how these products land in the real world —
                Canadian markets first.
              </p>
            </div>
            <div className="cases-grid">
              <a className="ccard reveal" href="/cases/dpp-canada.html">
                <div className="ck-tag">Case study · DPP</div>
                <h3>Digital Product Passports: the Canadian opportunity</h3>
                <span className="cgo">
                  Read the case <ArrowUpRight />
                </span>
              </a>
              <a className="ccard reveal" href="/cases/agentic-commerce.html">
                <div className="ck-tag">Case study · Express Protocol</div>
                <h3>Agentic commerce: when software becomes the buyer</h3>
                <span className="cgo">
                  Read the case <ArrowUpRight />
                </span>
              </a>
              <a className="ccard reveal" href="/cases/rental-data-privacy.html">
                <div className="ck-tag">Case study · Propty</div>
                <h3>
                  Rental applications over-share: fixing tenant privacy with ZK
                  + AI
                </h3>
                <span className="cgo">
                  Read the case <ArrowUpRight />
                </span>
              </a>
              <a className="ccard reveal" href="/cases/ai-governance-e23.html">
                <div className="ck-tag">Case study · Governance</div>
                <h3>AI governance in Canadian finance: meeting OSFI E-23</h3>
                <span className="cgo">
                  Read the case <ArrowUpRight />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================== SEEN AT ============================== */}
        <section id="seen" className="section">
          <div className="wrap">
            <div className="block-head reveal">
              <span className="kicker on-navy">On the ground</span>
              <h2 style={{ marginTop: '16px' }}>
                Seen at the events that matter.
              </h2>
              <p>
                We show up where the industry gathers — talks, booths and demos
                across the world&apos;s biggest Web3 and finance stages.
              </p>
            </div>
            <div className="seen-collage">
              <article className="ev-card reveal">
                <div className="ev-logo">
                  <img
                    src="/assets/events/collision.png"
                    alt="Collision"
                    loading="lazy"
                  />
                </div>
                <div className="ev-cap">
                  <b>Collision</b>
                  <span>Toronto</span>
                </div>
              </article>
              <article className="ev-card reveal">
                <div className="ev-logo">
                  <img
                    src="/assets/events/consensus.svg"
                    alt="CoinDesk Consensus"
                    loading="lazy"
                  />
                </div>
                <div className="ev-cap">
                  <b>CoinDesk Consensus</b>
                  <span>Toronto</span>
                </div>
              </article>
              <article className="ev-card reveal">
                <div className="ev-logo">
                  <img
                    src="/assets/events/futurist.svg"
                    alt="Blockchain Futurist Conference"
                    loading="lazy"
                  />
                </div>
                <div className="ev-cap">
                  <b>Blockchain Futurist</b>
                  <span>Toronto</span>
                </div>
              </article>
              <article className="ev-card reveal">
                <div className="ev-logo">
                  <img
                    src="/assets/events/nftnyc.svg"
                    alt="NFT NYC"
                    loading="lazy"
                  />
                </div>
                <div className="ev-cap">
                  <b>NFT NYC</b>
                  <span>New York</span>
                </div>
              </article>
              <article className="ev-card reveal">
                <div className="ev-logo">
                  <img
                    src="/assets/events/token2049.svg"
                    alt="TOKEN2049"
                    loading="lazy"
                  />
                </div>
                <div className="ev-cap">
                  <b>TOKEN2049</b>
                  <span>Singapore</span>
                </div>
              </article>
              <article className="ev-card reveal">
                <div className="ev-logo">
                  <img
                    src="/assets/events/adfw.svg"
                    alt="Abu Dhabi Finance Week"
                    loading="lazy"
                  />
                </div>
                <div className="ev-cap">
                  <b>Abu Dhabi Finance Week</b>
                  <span>Abu Dhabi</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============================== CONTACT (+ FAQ) ============================== */}
        <section id="contact" className="section">
          <div className="wrap">
            {/* FAQ accordion */}
            <div className="faq-wrap reveal">
              <div className="faq-head">
                <span className="kicker">Questions</span>
                <h2>Frequently asked.</h2>
              </div>
              <details className="faq">
                <summary>What is Pandora — a studio, or a company?</summary>
                <p>
                  Both. Pandora is the brand of Aconomy Labs Inc., a Toronto
                  company, run as an AI-native product studio: we design, build
                  and own our products rather than consult on other
                  people&apos;s. Each one pairs an autonomous AI agent with
                  infrastructure that makes its work verifiable.
                </p>
              </details>
              <details className="faq">
                <summary>Is Pandora a crypto company?</summary>
                <p>
                  No — we&apos;re an AI company first. Our products are led by
                  agents that do real work; where trust or settlement matters,
                  we anchor to public infrastructure so every action is
                  provable. The chain is plumbing, not the pitch.
                </p>
              </details>
              <details className="faq">
                <summary>Which products can I actually use today?</summary>
                <p>
                  Aconomy is live on Google Play, and Express Protocol is in
                  production with the <code>pandora-express</code> SDK on npm.
                  Propty and The DPP Company are in active development; Vanna
                  and Auri are coming. Book a demo to see any of them run end to
                  end.
                </p>
              </details>
              <details className="faq">
                <summary>What makes a product &quot;agentic&quot;?</summary>
                <p>
                  Each product hands an entire real-world task to an AI agent
                  that reasons, decides and acts — validating an asset,
                  screening a tenant, passporting a product, settling a payment
                  — start to finish, not just answering questions about it.
                </p>
              </details>
              <details className="faq">
                <summary>How is Pandora funded, and who backs it?</summary>
                <p>
                  A $2.4M seed round, 5× oversubscribed — backed by AU21
                  Capital, NGC Ventures, Master Ventures, Magnus, Exnetwork and
                  others, with press in Cointelegraph, Bitcoin.com and Apple
                  News. Incorporated in Toronto and incubated by TBDC, BHive and
                  OCI.
                </p>
              </details>
              <details className="faq">
                <summary>Who&apos;s on the team?</summary>
                <p>
                  A small, senior team: Pushkar Vohra (Founder &amp; CEO),
                  Opinder Preet Singh Narang (Co-Founder, Execution), Har Rhythm
                  Kaur (Co-Founder, Research &amp; Analytics) and Tamur Shah
                  (Head of Compliance &amp; Licensing). Read more on the <a href="/about/">About page</a>.
                </p>
              </details>
            </div>

            <div className="faq-cta reveal">
              <p>
                Still have a question — or want to watch a product run end to
                end?
              </p>
              <a
                className="btn btn-glow"
                href="https://calendly.com/rhythm-pandora/30min"
                target="_blank"
                rel="noopener"
              >
                Book a demo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ============================== FOOTER ============================== */}
      <SiteFooter addressTrailingBreak>
        <FooterColumn heading="Products">
          <a href="/express-protocol/">Express Protocol</a>
          <a href="/aconomy/">Aconomy</a>
          <a href="/propty/">Propty</a>
          <a href="/dpp/">The DPP Company</a>
          <span className="soon">Vanna Protocol · soon</span>
          <span className="soon">Auri · soon</span>
          <a href="/unitymarket/">UnityMarket</a>
        </FooterColumn>
        <FooterColumn heading="Studio">
          <a href="#proof">Proof of work</a>
          <a href="#partners">Partners</a>
          <a href="/about/">About</a>
          <a href="/trust/">Trust &amp; audits</a>
          <a
            href="https://calendly.com/rhythm-pandora/30min"
            target="_blank"
            rel="noopener"
          >
            Contact
          </a>
        </FooterColumn>
      </SiteFooter>

      <RevealOnScroll />
    </>
  );
}
