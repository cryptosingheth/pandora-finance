import type { Metadata, Viewport } from 'next';

import { InlineStyle } from '@/components/InlineStyle';
import { JsonLd } from '@/components/JsonLd';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { pageCss } from './page.css';

const TITLE = 'Auri — Programmable gold-backed neobank | Pandora';
const DESCRIPTION =
  'Auri is a programmable-gold neobank, coming soon: own real, audited 1:1-backed gold, borrow, send and spend it — and automate it all via your AI agent.';

// Auri ships its own inline data-URI coin favicon ahead of the shared set.
// Declaring `icons` here replaces the root layout's list, so the standard
// favicons are repeated below to keep the page's full original head.
const AURI_COIN_FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23EBC97C'/%3E%3Cstop offset='1' stop-color='%23C99A4E'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='16' cy='16' r='14' fill='url(%23g)'/%3E%3Ccircle cx='16' cy='16' r='9' fill='none' stroke='%23fff' stroke-opacity='.6' stroke-width='1.5'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/auri/' },
  icons: {
    icon: [
      { url: AURI_COIN_FAVICON },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  // A route-level `openGraph` / `twitter` object REPLACES the root layout's
  // wholesale — it is not merged field-by-field — so siteName, locale, card
  // and site must be restated here or they vanish from the emitted head.
  openGraph: {
    type: 'website',
    siteName: 'Pandora',
    locale: 'en_CA',
    title: TITLE,
    description: DESCRIPTION,
    url: '/auri/',
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

const auriGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://www.pandora.finance/auri/#webpage",
      "url": "https://www.pandora.finance/auri/",
      "name": "Auri — a programmable gold-backed neobank",
      "description": "Auri is a programmable-gold neobank, coming soon: own real, audited 1:1-backed gold, borrow, send and spend it — and automate it all via your AI agent.",
      "inLanguage": "en-CA",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pandora",
        "url": "https://www.pandora.finance",
      },
      "about": {
        "@id": "https://www.pandora.finance/auri/#product",
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
          "name": "Is Auri gold real gold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Each unit equals one troy ounce of allocated bullion, held as a 1:1-backed gold token and independently audited.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I actually own it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Always. You hold it in your own self-custody account — Auri never holds your assets.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I borrow without selling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — unlock cash against your gold up to ~77% LTV at ~3.75% APR, and keep the gold. KYC is required to buy with CAD, via regulated on/off-ramp partners.",
          },
        },
        {
          "@type": "Question",
          "name": "Can an AI agent use Auri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — connect over MCP, or script it from the CLI/API. Agents can own, accumulate and borrow gold on your behalf, within scoped, revocable limits you set.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      "@id": "https://www.pandora.finance/auri/#product",
      "name": "Auri",
      "url": "https://www.pandora.finance/auri/",
      "category": "Gold-backed neobank",
      "description": "Auri is a programmable-gold neobank. Each unit equals one troy ounce of allocated, independently audited bullion held 1:1, in a self-custody account. Borrow against it, send and spend it, and automate it via MCP, CLI or API — by you or your AI agent. Auri is coming soon in Canada and is not yet available.",
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

export default function AuriPage() {
  return (
    <>
      {/* No <DesignSystemStylesheet /> here — on purpose. auri/index.html is a
          fully self-contained landing page: system font, its own reset, its own
          tokens. Loading the design system would restyle the whole page. */}
      <InlineStyle css={pageCss} />
      <JsonLd data={auriGraph} />
      {"\n\n"}<div className="bgfx" aria-hidden="true"><span className="b1"></span><span className="b2"></span><span className="b3"></span></div>
      {"\n\n\n"}
      {/* ===================== NAV ===================== */}<div className="navwrap">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="nav glass">
      {"\n      "}<a className="brand" href="/auri/" aria-label="Auri home">
      {"\n        "}<svg className="coin" viewBox="0 0 32 32" aria-hidden="true">
      {"\n          "}<defs>
      {"\n            "}<linearGradient id="coinG" x1="0" y1="0" x2="1" y2="1">
      {"\n              "}<stop offset="0" stopColor="#EBC97C" /><stop offset="1" stopColor="#C99A4E" />
      {"\n            "}</linearGradient>
      {"\n          "}</defs>
      {"\n          "}<circle cx="16" cy="16" r="14" fill="url(#coinG)" />
      {"\n          "}<circle cx="16" cy="16" r="9" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.6" />
      {"\n          "}<path d="M16 11.5v9M12.4 14h7.2" stroke="#fff" strokeOpacity=".8" strokeWidth="1.4" strokeLinecap="round" />
      {"\n        "}</svg>
      {"\n        auri\n      "}</a>
      {"\n      "}<div className="nav-right">
      {"\n        "}<a className="navlink hide-s" href="/">&larr; Pandora</a>
      {"\n        "}<a className="btn btn-glow btn-sm" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</div>
      {"\n\n\n"}
      {/* ===================== HERO ===================== */}<section className="hero">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="heroGrid">
      {"\n      "}<div>
      {"\n        "}<span className="pill pill-soon" style={{ marginBottom: "18px" }}>
      {"\n          "}<span className="dot"></span>{" Coming soon \u00b7 Canada\n        "}</span>
      {"\n        "}<h1>Gold, <span className="grad-text">programmable.</span></h1>
      {"\n        "}<p className="lead">Own real gold. Borrow, send and spend it — and automate it all. By you, or your AI agent.</p>
      {"\n        "}<div className="hero-cta">
      {"\n          "}<a className="btn btn-glow btn-lg" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n          "}<a className="btn btn-glass btn-lg" href="#automate">See it work</a>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n\n      \n      "}
      {/* hero preview card */}<div className="reveal">
      {"\n        "}<div className="hcard-wrap">
      {"\n          "}<div className="hcard-glow" aria-hidden="true"></div>
      {"\n          "}<div className="hcard glass">
      {"\n            "}<div className="row1">
      {"\n              "}<span className="asset"><span className="gdot"></span> Gold &middot; XAUT</span>
      {"\n              "}<span className="cur">CAD &#9662;</span>
      {"\n            "}</div>
      {"\n            "}<div className="big">$2,552.48</div>
      {"\n            "}<div className="sub">
      {"\n              "}<span className="chg">
      {"\n                "}<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
      {"\n                1.2%\n              "}</span>
      {"\n              "}<span style={{ color: "var(--faint)" }}>0.412 oz &middot; 12.82 g</span>
      {"\n            "}</div>
      {"\n            "}<svg className="spark" viewBox="0 0 320 52" preserveAspectRatio="none" aria-hidden="true">
      {"\n              "}<defs><linearGradient id="sp" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10B981" stopOpacity=".22" /><stop offset="100%" stopColor="#10B981" stopOpacity="0" /></linearGradient></defs>
      {"\n              "}<path d="M0 40 L27 34 L53 37 L80 30 L107 33 L133 27 L160 30 L187 22 L213 25 L240 17 L267 20 L293 12 L320 15 L320 52 L0 52 Z" fill="url(#sp)" />
      {"\n              "}<path d="M0 40 L27 34 L53 37 L80 30 L107 33 L133 27 L160 30 L187 22 L213 25 L240 17 L267 20 L293 12 L320 15" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
      {"\n            "}</svg>
      {"\n            "}<div className="actions">
      {"\n              "}<div className="act">
      {"\n                "}<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" style={{ margin: "0 auto" }}><path d="M12 5v14M5 12h14" /></svg>
      {"\n                "}<div className="lbl">Buy</div>
      {"\n              "}</div>
      {"\n              "}<div className="act">
      {"\n                "}<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto" }}><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" /></svg>
      {"\n                "}<div className="lbl">Borrow</div>
      {"\n              "}</div>
      {"\n              "}<div className="act">
      {"\n                "}<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto" }}><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
      {"\n                "}<div className="lbl">Send</div>
      {"\n              "}</div>
      {"\n            "}</div>
      {"\n          "}</div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== FEATURE TILES ===================== */}<section className="section">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="tiles">
      {"\n      "}<div className="reveal">
      {"\n        "}<div className="tile glass">
      {"\n          "}<svg className="ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4M16.71 13.88l.7.71-2.82 2.82" /></svg>
      {"\n          "}<h3>Buy</h3>
      {"\n          "}<p>Real, audited gold in seconds — straight from CAD.</p>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n      "}<div className="reveal">
      {"\n        "}<div className="tile glass">
      {"\n          "}<svg className="ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" /></svg>
      {"\n          "}<h3>Borrow</h3>
      {"\n          "}<p>Unlock cash against your gold — keep the gold.</p>
      {"\n          "}<div className="note">Up to ~77% LTV &middot; ~3.75% APR</div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n      "}<div className="reveal">
      {"\n        "}<div className="tile glass">
      {"\n          "}<svg className="ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7ZM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z" /></svg>
      {"\n          "}<h3>Send &amp; gift</h3>
      {"\n          "}<p>Global, instant. Recipients claim by a link.</p>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n      "}<div className="reveal">
      {"\n        "}<div className="tile glass">
      {"\n          "}<svg className="ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>
      {"\n          "}<h3>Spend</h3>
      {"\n          "}<p>A gold-backed card — we convert just enough at checkout.</p>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== AUTOMATE (DARK, agentic signature) ===================== */}<section className="section" id="automate">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="reveal">
      {"\n      "}<div className="darkblock">
      {"\n        "}<span className="glowA" aria-hidden="true"></span>
      {"\n        "}<span className="glowB" aria-hidden="true"></span>
      {"\n        "}<div className="devGrid">
      {"\n          "}<div>
      {"\n            "}<span className="pill-d">
      {"\n              "}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></svg>
      {"\n              Built for agents\n            "}</span>
      {"\n            "}<h2>Gold your <span className="agent-grad">agent</span> can own.</h2>
      {"\n            "}<p className="dlead">Your AI agent can own, trade and manage gold via MCP, CLI or API — so buying, accumulating and borrowing run on autopilot. By you, or on your behalf.</p>
      {"\n            "}<div className="dfeats">
      {"\n              "}<div className="dfeat">
      {"\n                "}<span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M2 14h2M20 14h2M15 13v2M9 13v2" /></svg></span>
      {"\n                "}<span>Connect via MCP</span>
      {"\n              "}</div>
      {"\n              "}<div className="dfeat">
      {"\n                "}<span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 17 6-6-6-6M12 19h8" /></svg></span>
      {"\n                "}<span>Automate recurring buys from the CLI</span>
      {"\n              "}</div>
      {"\n              "}<div className="dfeat">
      {"\n                "}<span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3" /></svg></span>
      {"\n                "}<span>Strategy-ready for pros, via API</span>
      {"\n              "}</div>
      {"\n            "}</div>
      {"\n          "}</div>
      {"\n\n          "}<div className="term">
      {"\n            "}<div className="bar">
      {"\n              "}<span className="tdot" style={{ background: "#FF5F57" }}></span>
      {"\n              "}<span className="tdot" style={{ background: "#FEBC2E" }}></span>
      {"\n              "}<span className="tdot" style={{ background: "#28C840" }}></span>
      {"\n              "}<span className="title">auri — cli</span>
      {"\n            "}</div>
      {"\n            "}<div className="body"><span className="tp">$</span> auri buy <span className="tf">--cad</span> 200 <span className="tf">--every</span>{" week\n"}<span className="tok">&#10003; recurring buy set &middot; CA$200 &rarr; gold weekly</span>
      {"\n\n"}<span className="tc"># or let an agent do it, via MCP</span>
      {"\n"}<span className="tm">agent &#9656; </span><span className="tfn">auri.buy_gold</span>{"({ cad: 200 })"}</div>
      {"\n          "}</div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== TRUST STRIP ===================== */}<section className="section">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="reveal">
      {"\n      "}<div className="trust glass">
      {"\n        "}<div>
      {"\n          "}<h2>Real gold. Audited. Yours.</h2>
      {"\n          "}<p>Each unit is one ounce of allocated bullion, held 1:1 and independently attested — in your own self-custody account. Auri never holds your assets.</p>
      {"\n        "}</div>
      {"\n        "}<div className="chips">
      {"\n          "}<span className="chip">
      {"\n            "}<svg className="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg>
      {"\n            1:1 backed\n          "}</span>
      {"\n          "}<span className="chip">
      {"\n            "}<svg className="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" /></svg>
      {"\n            Self-custody\n          "}</span>
      {"\n          "}<span className="chip">
      {"\n            "}<svg className="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
      {"\n            Independently audited\n          "}</span>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== FAQ ===================== */}<section className="section" id="faq">
      {"\n  "}<div className="wrap faqwrap">
      {"\n    "}<div className="reveal">
      {"\n      "}<span className="eyebrow">Good to know</span>
      {"\n      "}<h2>Questions, answered.</h2>
      {"\n    "}</div>
      {"\n    "}<div className="faq-list">
      {"\n      "}<details className="faq">
      {"\n        "}<summary>{"Is Auri gold real gold?\n          "}<svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      {"\n        "}</summary>
      {"\n        "}<p className="ans">Yes. Each unit equals one troy ounce of allocated bullion, held as a 1:1-backed gold token and independently audited.</p>
      {"\n      "}</details>
      {"\n      "}<details className="faq">
      {"\n        "}<summary>{"Do I actually own it?\n          "}<svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      {"\n        "}</summary>
      {"\n        "}<p className="ans">Always. You hold it in your own self-custody account — Auri never holds your assets.</p>
      {"\n      "}</details>
      {"\n      "}<details className="faq">
      {"\n        "}<summary>{"Can I borrow without selling?\n          "}<svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      {"\n        "}</summary>
      {"\n        "}<p className="ans">Yes — unlock cash against your gold up to ~77% LTV at ~3.75% APR, and keep the gold. KYC is required to buy with CAD, via regulated on/off-ramp partners.</p>
      {"\n      "}</details>
      {"\n      "}<details className="faq">
      {"\n        "}<summary>{"Can an AI agent use Auri?\n          "}<svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      {"\n        "}</summary>
      {"\n        "}<p className="ans">Yes — connect over MCP, or script it from the CLI/API. Agents can own, accumulate and borrow gold on your behalf, within scoped, revocable limits you set.</p>
      {"\n      "}</details>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== CLOSING CTA (DARK) ===================== */}<section className="section">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="reveal">
      {"\n      "}<div className="cta">
      {"\n        "}<span className="glow" aria-hidden="true"></span>
      {"\n        "}<div className="inner">
      {"\n          "}<h2>Put your gold<br />to work.</h2>
      {"\n          "}<p className="lead-d">Auri is coming soon. Want a walkthrough of programmable, agent-owned gold? Book a demo with the team.</p>
      {"\n          "}<div className="row">
      {"\n            "}<a className="btn btn-glow btn-lg" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n            "}<a className="btn btn-ghost-d btn-lg" href="/">Back to Pandora</a>
      {"\n          "}</div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</section>
      {"\n\n\n"}
      {/* ===================== FOOTER ===================== */}<footer className="foot">
      {"\n  "}<div className="wrap">
      {"\n    "}<div className="inner">
      {"\n      "}<div className="about">
      {"\n        "}<a className="brand" href="/auri/" aria-label="Auri home">
      {"\n          "}<svg className="coin" viewBox="0 0 32 32" aria-hidden="true">
      {"\n            "}<circle cx="16" cy="16" r="14" fill="url(#coinG)" />
      {"\n            "}<circle cx="16" cy="16" r="9" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.6" />
      {"\n            "}<path d="M16 11.5v9M12.4 14h7.2" stroke="#fff" strokeOpacity=".8" strokeWidth="1.4" strokeLinecap="round" />
      {"\n          "}</svg>
      {"\n          auri\n        "}</a>
      {"\n        "}<p>Auri is a financial technology product, not a bank. Gold is held 1:1 and independently audited; you keep self-custody. KYC required; cash on/off-ramps via regulated CAD partners. A Pandora product.</p>
      {"\n      "}</div>
      {"\n      "}<div className="cols">
      {"\n        "}<div className="col">
      {"\n          "}<h4>Product</h4>
      {"\n          "}<span>Buy</span>
      {"\n          "}<span>Borrow</span>
      {"\n          "}<span>Send &amp; gift</span>
      {"\n          "}<span>Spend</span>
      {"\n        "}</div>
      {"\n        "}<div className="col">
      {"\n          "}<h4>Build</h4>
      {"\n          "}<span>Agents (MCP)</span>
      {"\n          "}<span>CLI &amp; API</span>
      {"\n          "}<span>Automate</span>
      {"\n        "}</div>
      {"\n        "}<div className="col">
      {"\n          "}<h4>Pandora</h4>
      {"\n          "}<a href="/">Pandora</a>
      {"\n          "}<a href="/trust/">Trust &amp; audits</a>
      {"\n          "}<a href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</div>
      {"\n"}</footer>
      {"\n\n\n"}
      {/* The page's own IIFE observes with { threshold: 0.1 } and no
          rootMargin, and bails out to a static layout under
          prefers-reduced-motion. */}
      <RevealOnScroll threshold={0.1} rootMargin="0px" />
    </>
  );
}
