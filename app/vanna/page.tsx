import type { Metadata, Viewport } from 'next';

import { DesignSystemStylesheet } from '@/components/DesignSystemStylesheet';
import { InlineStyle } from '@/components/InlineStyle';
import { JsonLd } from '@/components/JsonLd';
import { pageCss } from './page.css';
import { VannaReveal } from './VannaReveal';

const TITLE = 'Vanna Protocol — DeFi margin infrastructure | Pandora';
const DESCRIPTION =
  'Composable risk and margin infrastructure for DeFi: isolated margin accounts, lending pools and a continuous health check built to keep you out of liquidation.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/vanna/' },
  // A route-level `openGraph` / `twitter` object REPLACES the root layout's
  // wholesale — it is not merged field-by-field — so siteName, locale, card
  // and site must be restated here or they vanish from the emitted head.
  openGraph: {
    type: 'website',
    siteName: 'Pandora',
    locale: 'en_CA',
    title: TITLE,
    description: DESCRIPTION,
    url: '/vanna/',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aconomyfdn',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og-image.png' }],
  },
};

export const viewport: Viewport = { themeColor: '#006cff' };

const vannaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://www.pandora.finance/vanna/#webpage",
      "url": "https://www.pandora.finance/vanna/",
      "name": "Vanna Protocol — DeFi risk and margin infrastructure",
      "description": "Composable risk and margin infrastructure for DeFi: isolated margin accounts, lending pools and a continuous health check built to keep you out of liquidation.",
      "inLanguage": "en-CA",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pandora",
        "url": "https://www.pandora.finance",
      },
      "about": {
        "@id": "https://www.pandora.finance/vanna/#product",
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.pandora.finance/og-image.png",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "Pandora",
        "legalName": "Aconomy Labs Inc.",
        "url": "https://www.pandora.finance",
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Vanna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vanna is composable risk and margin infrastructure for DeFi. Liquidity providers supply lending pools and earn yield from borrower interest; traders open isolated margin accounts, borrow against collateral, and deploy that capital across markets under one unified health check. It's a credit and margin layer other applications can build on — not a standalone app.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Vanna keep you out of liquidation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The foundation is isolation and continuous monitoring: each account is its own contract, and the risk engine checks its health before every action, so risk is contained and always visible rather than shared across the system. On top of that, Vanna's direction is a management layer — trading agents (via Vanna MCPs, coming) that hedge and de-risk a position before it ever nears the floor.",
          },
        },
        {
          "@type": "Question",
          "name": "What are Vanna MCPs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vanna MCPs are an interface that will expose margin accounts to trading agents as tools they can read and act on — monitoring health and exposure, then hedging or de-risking autonomously to keep under-collateralized positions healthy. They're in development and not yet live.",
          },
        },
        {
          "@type": "Question",
          "name": "Is it live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The V1 protocol — lending pools, isolated margin accounts and the risk engine — is built and deployed on Soroban, and has been through an independent security audit and an independent economic risk assessment. The agentic management layer, Vanna MCPs, is still coming.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      "@id": "https://www.pandora.finance/vanna/#product",
      "name": "Vanna Protocol",
      "url": "https://www.pandora.finance/vanna/",
      "category": "DeFi risk and margin infrastructure",
      "description": "Vanna Protocol is composable risk and margin infrastructure for DeFi. Liquidity providers supply lending pools; traders open isolated margin accounts and deploy borrowed capital under one continuous health check. The V1 protocol is deployed on Soroban and has had an independent security audit and an independent economic risk assessment. The agentic management layer, Vanna MCPs, is not yet live.",
      "image": "https://www.pandora.finance/og-image.png",
      "brand": {
        "@type": "Organization",
        "name": "Pandora",
        "legalName": "Aconomy Labs Inc.",
        "url": "https://www.pandora.finance",
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Pandora",
        "legalName": "Aconomy Labs Inc.",
        "url": "https://www.pandora.finance",
      },
    },
  ],
};

export default function VannaPage() {
  return (
    <>
      {/* The source page warms up the Google Fonts origins before the design
          system's @import fires. React hoists these into <head>. */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <DesignSystemStylesheet />
      <InlineStyle css={pageCss} />
      <JsonLd data={vannaGraph} />
      {"\n\n\n"}
      {/* ===================== NAV ===================== */}<header className="nav">
      {"\n  "}<div className="wrap nav-inner">
      {"\n    "}<a className="brand" href="/vanna/" aria-label="Vanna Protocol home">
      {"\n      "}<span className="mark" aria-hidden="true">
      {"\n        "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5 12 20 20 5" /></svg>
      {"\n      "}</span>
      {"\n      "}<span className="wm">Vanna<small>Protocol</small></span>
      {"\n    "}</a>
      {"\n    "}<nav className="nav-links" aria-label="Primary">
      {"\n      "}<a className="navlink" href="#how">How it works</a>
      {"\n      "}<a className="navlink" href="#engine">Risk engine</a>
      {"\n      "}<a className="navlink" href="#agents">Agents</a>
      {"\n      "}<a className="navlink" href="#trust">Trust</a>
      {"\n      "}<a className="navlink backhub" href="/" aria-label="Back to Pandora">
      {"\n        "}<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
      {"\n        Pandora\n      "}</a>
      {"\n    "}</nav>
      {"\n    "}<div className="nav-cta">
      {"\n      "}<a className="btn btn-outline hide-mobile" href="/">All products</a>
      {"\n      "}<a className="btn btn-glow" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n      "}<a className="btn btn-outline nav-toggle" href="#how" aria-label="Menu">
      {"\n        "}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      {"\n      "}</a>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</header>
      {"\n\n"}<main>
      {"\n\n"}
      {/* ===================== HERO ===================== */}<section className="hero">
      {"\n  "}<div className="wrap hero-grid">
      {"\n    "}<div className="reveal">
      {"\n      "}<span className="kicker">Risk &amp; margin infrastructure</span>
      {"\n      "}<h1>Risk infrastructure <span className="grad">built to keep you out of liquidation.</span></h1>
      {"\n      "}<p className="lead">Vanna is composable margin infrastructure for DeFi. Traders open isolated margin accounts to hold under-collateralized positions; liquidity providers supply the pools those positions borrow from. Every account runs under one continuous health check — so risk is isolated, monitored and managed, not amputated.</p>
      {"\n      "}<div className="hero-cta">
      {"\n        "}<a className="btn btn-glow" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n        "}<a className="btn btn-outline" href="#how">How it works</a>
      {"\n      "}</div>
      {"\n      "}<div className="hero-trust">
      {"\n        "}<span className="ti"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v5c0 4.5 3.2 7.3 8 9 4.8-1.7 8-4.5 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>Isolated per-account risk</span>
      {"\n        "}<span className="sep" aria-hidden="true"></span>
      {"\n        "}<span className="ti"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17V9m5 8V5m5 12v-6m5 6V8" /></svg>Liquidity to markets</span>
      {"\n        "}<span className="sep" aria-hidden="true"></span>
      {"\n        "}<span className="ti"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="9" cy="10" r="1.4" /><circle cx="15" cy="10" r="1.4" /><path d="M8 15h8" /></svg>Agent-managed (coming)</span>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n\n    \n    "}
      {/* margin-account card visual */}<div className="mc-stage reveal" aria-hidden="true">
      {"\n      "}<div className="mc-glow"></div>
      {"\n      "}<div className="acct">
      {"\n        "}<div className="acct-head">
      {"\n          "}<div className="ab">
      {"\n            "}<span className="g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5 12 20 20 5" /></svg></span>
      {"\n            "}<div><div className="at">Margin Account</div><div className="as">Isolated smart contract · 0x9c…4Ae2</div></div>
      {"\n          "}</div>
      {"\n          "}<span className="acct-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v5c0 4.5 3.2 7.3 8 9 4.8-1.7 8-4.5 8-9V6z" /></svg>Isolated</span>
      {"\n        "}</div>
      {"\n        "}<div className="acct-body">
      {"\n          "}<div className="acct-rows">
      {"\n            "}<div className="acct-row"><span className="k">Collateral</span><span className="v">USDC · XLM</span></div>
      {"\n            "}<div className="acct-row"><span className="k">Borrowed</span><span className="v">Deployed to markets</span></div>
      {"\n            "}<div className="acct-row"><span className="k">Positions</span>
      {"\n              "}<span className="acct-chiprow"><span className="acct-chip">Spot</span><span className="acct-chip">LP pool</span><span className="acct-chip">Yield</span></span>
      {"\n            "}</div>
      {"\n          "}</div>
      {"\n          "}<div className="hf">
      {"\n            "}<div className="hf-top"><span className="hf-lab">Health factor</span><span className="hf-val">1.94×</span></div>
      {"\n            "}<div className="hf-bar"><span className="hf-marker"></span></div>
      {"\n            "}<div className="hf-scale"><span>1.0×</span><span>safe →</span></div>
      {"\n          "}</div>
      {"\n        "}</div>
      {"\n        "}<div className="acct-foot">
      {"\n          "}<span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></span>
      {"\n          "}<div><div className="ft">Health checked continuously</div><div className="fs">Risk engine · one unified check</div></div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n      "}<div className="agent-tag">
      {"\n        "}<span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="9" cy="10" r="1.4" /><circle cx="15" cy="10" r="1.4" /><path d="M8 15h8" /></svg></span>
      {"\n        "}<div><div className="st">Agent managing<span className="soon">soon</span></div><div className="ss">Monitor · hedge · de-risk</div></div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== THESIS STRIP (dark) ===================== */}<section className="thesis section">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="reveal">
      {"\n      "}<span className="th-badge"><span className="dot"></span> The Vanna thesis</span>
      {"\n      "}<h2 style={{ marginTop: "18px" }}>Liquidation is a failure mode, not a feature.</h2>
      {"\n      "}<p className="th-lead">Most margin systems protect lenders by force-closing a borrower the moment a position dips — the user is amputated to save the pool. Vanna treats that as the last resort it's built to avoid.</p>
      {"\n      "}<p className="th-note">Risk is isolated to each account and watched continuously. The direction of the protocol is a management layer — trading agents via Vanna MCPs (coming) — that hedges and de-risks a position long before it ever approaches the floor, so capital stays working instead of being wiped.</p>
      {"\n    "}</div>
      {"\n    "}<div className="th-panel reveal">
      {"\n      "}<ul className="th-list">
      {"\n        "}<li>
      {"\n          "}<span className="ti"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v5c0 4.5 3.2 7.3 8 9 4.8-1.7 8-4.5 8-9V6z" /></svg></span>
      {"\n          "}<span className="tx"><strong>Managed, not amputated</strong><span>Risk is actively steered — the goal is to keep positions alive, not close them out.</span></span>
      {"\n        "}</li>
      {"\n        "}<li>
      {"\n          "}<span className="ti"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.4" /><rect x="14" y="3" width="7" height="7" rx="1.4" /><rect x="3" y="14" width="7" height="7" rx="1.4" /><rect x="14" y="14" width="7" height="7" rx="1.4" /></svg></span>
      {"\n          "}<span className="tx"><strong>Isolated by design</strong><span>Every account is its own contract, so the blast radius of any single position stays bounded to that account.</span></span>
      {"\n        "}</li>
      {"\n        "}<li>
      {"\n          "}<span className="ti"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17V9m5 8V5m5 12v-6m5 6V8" /></svg></span>
      {"\n          "}<span className="tx"><strong>Liquidity to markets</strong><span>Lending pools supply the credit that under-collateralized positions draw on — a composable margin layer.</span></span>
      {"\n        "}</li>
      {"\n      "}</ul>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== HOW IT WORKS ===================== */}<section id="how" className="section">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="sec-head reveal">
      {"\n      "}<div>
      {"\n        "}<span className="kicker">How it works</span>
      {"\n        "}<h2>Two sides, one credit layer.</h2>
      {"\n      "}</div>
      {"\n      "}<p className="muted">Liquidity providers supply the pools; traders borrow against isolated collateral and deploy it across markets. Interest flows back to the suppliers — both sides stay economically connected.</p>
      {"\n    "}</div>
      {"\n\n    "}<div className="steps">
      {"\n      "}<div className="step reveal">
      {"\n        "}<span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4" /><path d="M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" /></svg></span>
      {"\n        "}<h3>Supply liquidity</h3>
      {"\n        "}<p>Liquidity providers deposit into a lending pool and receive vTokens. Traders borrow from the pool and pay interest — which accrues back to suppliers passively, with no positions to manage.</p>
      {"\n        "}<div className="step-flow">Earn yield <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
      {"\n      "}</div>
      {"\n      "}<div className="step reveal">
      {"\n        "}<span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h4" /></svg></span>
      {"\n        "}<h3>Open a margin account</h3>
      {"\n        "}<p>A trader opens a margin account — their own isolated smart contract — and deposits collateral into it. The account borrows against that collateral to take under-collateralized, leveraged exposure.</p>
      {"\n        "}<div className="step-flow">Deposit &amp; borrow <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
      {"\n      "}</div>
      {"\n      "}<div className="step reveal">
      {"\n        "}<span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 7l3 3m7-3-3 3m-4 4-3 3m10 0-3-3" /></svg></span>
      {"\n        "}<h3>Deploy across markets</h3>
      {"\n        "}<p>Borrowed capital stays inside the account and is deployed composably — spot swaps, liquidity pools and yield strategies — all held under a single unified position, not scattered across wallets.</p>
      {"\n        "}<div className="step-flow">Compose positions <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
      {"\n      "}</div>
      {"\n      "}<div className="step reveal">
      {"\n        "}<span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></span>
      {"\n        "}<h3>Stay under one health check</h3>
      {"\n        "}<p>The risk engine evaluates the account's health before every borrow, withdrawal or settlement, pricing all collateral and debt together. Repay to close, and the interest paid returns to the pool.</p>
      {"\n        "}<div className="step-flow">Monitor &amp; settle <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== RISK ENGINE ===================== */}<section id="engine" className="section" style={{ background: "var(--white)" }}>
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="sec-head reveal">
      {"\n      "}<div>
      {"\n        "}<span className="kicker">The risk engine</span>
      {"\n        "}<h2>What keeps you out of liquidation.</h2>
      {"\n      "}</div>
      {"\n      "}<p className="muted">Vanna's architecture is built so risk can be contained and steered per account rather than dumped on the whole system. These are the primitives that make that possible.</p>
      {"\n    "}</div>
      {"\n\n    "}<div className="feat-grid">
      {"\n      "}<div className="feat reveal">
      {"\n        "}<span className="ftag">01</span>
      {"\n        "}<span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v5c0 4.5 3.2 7.3 8 9 4.8-1.7 8-4.5 8-9V6z" /><path d="M9 12h6" /></svg></span>
      {"\n        "}<h3>The gatekeeper</h3>
      {"\n        "}<p>The risk engine is the protocol's gatekeeper — it's called before every borrow, withdrawal or settlement, computes the account's health, and approves the action only if the account stays sound.</p>
      {"\n      "}</div>
      {"\n      "}<div className="feat reveal">
      {"\n        "}<span className="ftag">02</span>
      {"\n        "}<span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.4" /><rect x="14" y="3" width="7" height="7" rx="1.4" /><rect x="3" y="14" width="7" height="7" rx="1.4" /><rect x="14" y="14" width="7" height="7" rx="1.4" /></svg></span>
      {"\n        "}<h3>Isolated accounts</h3>
      {"\n        "}<p>Every margin account is a separately deployed contract with its own collateral, borrow list and positions. No two accounts share state, so a single account's trouble can't propagate to anyone else.</p>
      {"\n      "}</div>
      {"\n      "}<div className="feat reveal">
      {"\n        "}<span className="ftag">03</span>
      {"\n        "}<span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17V9m5 8V5m5 12v-6m5 6V8" /></svg></span>
      {"\n        "}<h3>Isolated lending pools</h3>
      {"\n        "}<p>Liquidity sits in separate per-asset pools, each accruing interest through its own rate model. Pool isolation keeps one market's stress from becoming cross-asset contagion.</p>
      {"\n      "}</div>
      {"\n      "}<div className="feat reveal">
      {"\n        "}<span className="ftag">04</span>
      {"\n        "}<span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></span>
      {"\n        "}<h3>Continuous health</h3>
      {"\n        "}<p>Position health — collateral value against debt value — is monitored continuously and priced from a live oracle, so the account's true state is always known, not sampled after the fact.</p>
      {"\n      "}</div>
      {"\n      "}<div className="feat reveal">
      {"\n        "}<span className="ftag">05</span>
      {"\n        "}<span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><path d="M14 10l3-2M10 14l-3 2" /></svg></span>
      {"\n        "}<h3>Composable by construction</h3>
      {"\n        "}<p>Accounts deploy into external DeFi through a controlled execute path, and the engine tracks those external positions — so composed strategies stay inside one health check instead of escaping it.</p>
      {"\n      "}</div>
      {"\n      "}<div className="feat reveal">
      {"\n        "}<span className="ftag">06</span>
      {"\n        "}<span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V5a2 2 0 0 1 2-2h2M16 3h2a2 2 0 0 1 2 2v2M20 17v2a2 2 0 0 1-2 2h-2M8 21H6a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="3" /></svg></span>
      {"\n        "}<h3>Upgradeable address book</h3>
      {"\n        "}<p>Contracts resolve each other through an on-chain registry at runtime, so risk logic can evolve — including the agentic layer below — without forcing users to migrate accounts.</p>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== AGENTS ON VANNA (dark) ===================== */}<section id="agents" className="section">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="sec-head reveal">
      {"\n      "}<div>
      {"\n        "}<span className="kicker on-dark">Agents on Vanna</span>
      {"\n        "}<h2>Trading agents that manage risk for you.</h2>
      {"\n      "}</div>
      {"\n      "}<p>The management layer of the thesis: autonomous agents that watch a position and act on it — via Vanna MCPs, coming.</p>
      {"\n    "}</div>
      {"\n\n    "}<div className="ag-grid">
      {"\n      "}<div className="ag-card reveal">
      {"\n        "}<div className="ag-eyebrow">Vanna MCPs · coming</div>
      {"\n        "}<h3>Under-collateralized risk, managed autonomously.</h3>
      {"\n        "}<p className="ag-sub">Vanna MCPs will expose margin accounts to trading agents as tools they can reason over and act on. Instead of a keeper waiting to close a failing position, an agent works to keep it healthy.</p>
      {"\n        "}<ul className="ag-list">
      {"\n          "}<li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10" /></svg></span><span><b>Monitor</b> — track health, exposure and market conditions across the account in real time.</span></li>
      {"\n          "}<li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10" /></svg></span><span><b>Hedge</b> — open offsetting positions to neutralize risk as conditions move against the account.</span></li>
      {"\n          "}<li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10" /></svg></span><span><b>De-risk</b> — rebalance or trim exposure before health approaches the floor — not after.</span></li>
      {"\n          "}<li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10" /></svg></span><span><b>Manage, don't amputate</b> — the objective is a surviving, steered position, not a forced close-out.</span></li>
      {"\n        "}</ul>
      {"\n        "}<span className="ag-soon"><span className="dot"></span> Vanna MCPs — in development</span>
      {"\n      "}</div>
      {"\n\n      "}<div className="ag-loop reveal" aria-hidden="true">
      {"\n        "}<div className="loop-node">
      {"\n          "}<span className="ln-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="9" cy="10" r="1.5" /><circle cx="15" cy="10" r="1.5" /><path d="M8 15h8" /></svg></span>
      {"\n          "}<div><div className="ln-t">Trading agent</div><div className="ln-s">Reasons over the account via Vanna MCPs</div></div>
      {"\n        "}</div>
      {"\n        "}<div className="loop-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14m0 0-5-5m5 5 5-5" /></svg></div>
      {"\n        "}<div className="loop-node">
      {"\n          "}<span className="ln-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></span>
      {"\n          "}<div><div className="ln-t">Reads health &amp; exposure</div><div className="ln-s">Live risk-engine state for the margin account</div></div>
      {"\n        "}</div>
      {"\n        "}<div className="loop-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14m0 0-5-5m5 5 5-5" /></svg></div>
      {"\n        "}<div className="loop-node">
      {"\n          "}<span className="ln-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 4 7m0 0 4-4M4 7l4 4M4 17h16m0 0-4-4m4 4-4 4" /></svg></span>
      {"\n          "}<div><div className="ln-t">Hedges &amp; de-risks</div><div className="ln-s">Acts to keep the position alive and healthy</div></div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== TRUST & VERIFICATION ===================== */}<section id="trust" className="section">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="sec-head reveal">
      {"\n      "}<div>
      {"\n        "}<span className="kicker">Trust &amp; verification</span>
      {"\n        "}<h2>Independently reviewed.</h2>
      {"\n      "}</div>
      {"\n      "}<p className="muted">Risk infrastructure only earns trust if it's examined from the outside. Vanna's economics and its V1 contracts have both been put under independent review.</p>
      {"\n    "}</div>
      {"\n\n    "}<div className="doc-grid">
      {"\n      "}<a className="doc reveal" href="/vanna/reports/Vanna_Protocol_Economic_Risk_Assessment.pdf" target="_blank" rel="noopener">
      {"\n        "}<div className="doc-top">
      {"\n          "}<span className="doc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17V9m5 8V5m5 12v-6m5 6V8" /><path d="M3 21h18" /></svg></span>
      {"\n          "}<span className="doc-kind">Economic analysis</span>
      {"\n        "}</div>
      {"\n        "}<h3>Economic risk assessment</h3>
      {"\n        "}<p>An independent analysis of the protocol's economic design and risk parameters — the incentives, collateral and solvency assumptions behind the margin system.</p>
      {"\n        "}<span className="dl">{"Download PDF\n          "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" /></svg>
      {"\n        "}</span>
      {"\n      "}</a>
      {"\n\n      "}<a className="doc reveal" href="/vanna/reports/Vanna_Protocol_V1_Soroban_Audit_Report.pdf" target="_blank" rel="noopener">
      {"\n        "}<div className="doc-top">
      {"\n          "}<span className="doc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v5c0 4.5 3.2 7.3 8 9 4.8-1.7 8-4.5 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg></span>
      {"\n          "}<span className="doc-kind">Security audit</span>
      {"\n        "}</div>
      {"\n        "}<h3>V1 security audit — Soroban</h3>
      {"\n        "}<p>An independent security audit of the V1 smart contracts, deployed on Soroban. Covers the account, pool and risk-engine contracts that hold and check user funds.</p>
      {"\n        "}<span className="dl">{"Download PDF\n          "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" /></svg>
      {"\n        "}</span>
      {"\n      "}</a>
      {"\n    "}</div>
      {"\n    "}<p className="trust-note">Both documents are published in full. Read the reports directly for methodology and findings, and the technical documentation for how each contract behaves on-chain.</p>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== FAQ ===================== */}<section id="faq" className="section">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="sec-head reveal" style={{ justifyContent: "flex-start" }}>
      {"\n      "}<div>
      {"\n        "}<span className="kicker">FAQ</span>
      {"\n        "}<h2>Questions, answered.</h2>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n    "}<div className="faq-wrap">
      {"\n      "}<details className="faq reveal">
      {"\n        "}<summary>{"What is Vanna?\n          "}<svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      {"\n        "}</summary>
      {"\n        "}<p>Vanna is composable risk and margin infrastructure for DeFi. Liquidity providers supply lending pools and earn yield from borrower interest; traders open isolated margin accounts, borrow against collateral, and deploy that capital across markets under one unified health check. It's a credit and margin layer other applications can build on — not a standalone app.</p>
      {"\n      "}</details>
      {"\n      "}<details className="faq reveal">
      {"\n        "}<summary>{"How does Vanna keep you out of liquidation?\n          "}<svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      {"\n        "}</summary>
      {"\n        "}<p>The foundation is isolation and continuous monitoring: each account is its own contract, and the risk engine checks its health before every action, so risk is contained and always visible rather than shared across the system. On top of that, Vanna's direction is a management layer — trading agents (via Vanna MCPs, coming) that hedge and de-risk a position before it ever nears the floor. The aim is to steer risk instead of force-closing users; managed, not amputated.</p>
      {"\n      "}</details>
      {"\n      "}<details className="faq reveal">
      {"\n        "}<summary>{"What are Vanna MCPs?\n          "}<svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      {"\n        "}</summary>
      {"\n        "}<p>Vanna MCPs are an interface that will expose margin accounts to trading agents as tools they can read and act on — monitoring health and exposure, then hedging or de-risking autonomously to keep under-collateralized positions healthy. They're in development and not yet live.</p>
      {"\n      "}</details>
      {"\n      "}<details className="faq reveal">
      {"\n        "}<summary>{"Is it live?\n          "}<svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      {"\n        "}</summary>
      {"\n        "}<p>The V1 protocol — lending pools, isolated margin accounts and the risk engine — is built and deployed on Soroban, and has been through an independent security audit and an independent economic risk assessment (both linked above). The agentic management layer, Vanna MCPs, is still coming. For the current mechanics in detail, read the documentation.</p>
      {"\n      "}</details>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== CTA BAND ===================== */}<section id="demo" className="cta section">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="reveal">
      {"\n      "}<span className="kicker on-dark" style={{ justifyContent: "center" }}>See it in action</span>
      {"\n      "}<h2 style={{ marginTop: "16px" }}>Build on margin infrastructure that keeps positions alive.</h2>
      {"\n      "}<p>Walk through how Vanna isolates risk, supplies liquidity to markets, and — with agents via Vanna MCPs — manages under-collateralized positions instead of liquidating them.</p>
      {"\n      "}<div className="cta-cta">
      {"\n        "}<a className="btn btn-light" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n        "}<a className="btn btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,.4)" }} href="https://vannafinance.mintlify.app/home" target="_blank" rel="noopener">{"Read the docs\n          "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
      {"\n        "}</a>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n"}</main>
      {"\n\n\n"}
      {/* ===================== FOOTER ===================== */}<footer className="footer">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="foot-grid">
      {"\n      "}<div className="foot-brand">
      {"\n        "}<span className="brand">
      {"\n          "}<span className="mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5 12 20 20 5" /></svg></span>
      {"\n          "}<span className="wm">Vanna<small>Protocol</small></span>
      {"\n        "}</span>
      {"\n        "}<p>Composable risk and margin infrastructure for DeFi — isolated margin accounts, lending pools that supply liquidity to markets, and an agentic management layer that manages risk instead of amputating it. A Pandora product.</p>
      {"\n      "}</div>
      {"\n\n      "}<div className="foot-col">
      {"\n        "}<h4>Protocol</h4>
      {"\n        "}<a href="#how">How it works</a>
      {"\n        "}<a href="#engine">Risk engine</a>
      {"\n        "}<a href="#agents">Agents on Vanna</a>
      {"\n        "}<a href="#trust">Trust &amp; verification</a>
      {"\n      "}</div>
      {"\n\n      "}<div className="foot-col">
      {"\n        "}<h4>Resources</h4>
      {"\n        "}<a href="https://vannafinance.mintlify.app/home" target="_blank" rel="noopener">Documentation</a>
      {"\n        "}<a href="/vanna/reports/Vanna_Protocol_Economic_Risk_Assessment.pdf" target="_blank" rel="noopener">Economic risk assessment</a>
      {"\n        "}<a href="/vanna/reports/Vanna_Protocol_V1_Soroban_Audit_Report.pdf" target="_blank" rel="noopener">V1 security audit</a>
      {"\n        "}<a href="/">Pandora</a>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n\n    "}<div className="foot-bar">
      {"\n      "}<span>© 2021–2026 Pandora. Vanna Protocol. All rights reserved.</span>
      {"\n      "}<span className="made">{"Risk managed, not amputated\n        "}<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5 12 20 20 5" /></svg>
      {"\n      "}</span>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</footer>
      {"\n\n"}
      <VannaReveal />
    </>
  );
}
