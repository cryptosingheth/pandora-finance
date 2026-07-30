import type { Metadata, Viewport } from 'next';

import { DesignSystemStylesheet } from '@/components/DesignSystemStylesheet';
import { InlineStyle } from '@/components/InlineStyle';
import { JsonLd } from '@/components/JsonLd';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { pageCss } from './page.css';

const TITLE = 'UnityMarket — NFT marketplace with an AI curator | Pandora';
const DESCRIPTION =
  'UnityMarket is an NFT marketplace with an AI curator that scans live collections, scores rarity, screens out wash-trading and builds a fair-value shortlist.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/unitymarket/' },
  // A route-level `openGraph` / `twitter` object REPLACES the root layout's
  // wholesale — it is not merged field-by-field — so siteName, locale, card
  // and site must be restated here or they vanish from the emitted head.
  openGraph: {
    type: 'website',
    siteName: 'Pandora',
    locale: 'en_CA',
    title: TITLE,
    description: DESCRIPTION,
    url: '/unitymarket/',
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

// The source page declares <meta name="theme-color" content="#006cff">,
// overriding the root layout's white default. Keep it.
export const viewport: Viewport = { themeColor: '#006cff' };

const unityMarketGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://www.pandora.finance/unitymarket/#webpage",
      "url": "https://www.pandora.finance/unitymarket/",
      "name": "UnityMarket — NFT marketplace with an AI curator",
      "description": "UnityMarket is an NFT marketplace with an AI curator that scans live collections, scores rarity, screens out wash-trading and builds a fair-value shortlist.",
      "inLanguage": "en-CA",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pandora",
        "url": "https://www.pandora.finance",
      },
      "about": {
        "@id": "https://www.pandora.finance/unitymarket/#app",
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
          "name": "What does the AI curator actually do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You give it a theme and a budget in plain language. It scans live collections, scores each piece on trait rarity, checks provenance and trade history for wash-trading, compares prices against the real floor, and assembles a shortlist of fair-value pieces — then places bids, buys, or lists on your behalf.",
          },
        },
        {
          "@type": "Question",
          "name": "How does it detect wash-trading?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It reconstructs a collection's trade graph and looks for the tells: a handful of wallets driving most of the volume, circular self-trades where the same NFT loops between related addresses, brand-new anonymous deployer wallets, and floors that only hold up on those internal trades. When enough line up, it treats the volume as manufactured, strips it out to find the real floor, and excludes the collection rather than buying in.",
          },
        },
        {
          "@type": "Question",
          "name": "Does the agent move funds on its own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only within the limits you set, and every trade settles through Express Protocol's audited on-chain contracts — the same escrow, bidding and royalty logic the whole marketplace uses.",
          },
        },
        {
          "@type": "Question",
          "name": "What is UnityMarket's relationship to Express Protocol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UnityMarket is a marketplace front-end built on Express Protocol. The curator agent and the gallery are the experience layer; Express Protocol is the settlement layer that makes mints, bids, sales and creator royalties real and enforceable on-chain.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.pandora.finance/unitymarket/#app",
      "name": "UnityMarket",
      "url": "https://www.pandora.finance/unitymarket/",
      "description": "UnityMarket is an NFT marketplace with an AI curator. Mint, trade and auction NFTs with creator royalties enforced on-chain; the curator agent scores rarity, checks provenance and screens out wash-trading. Settlement runs on Express Protocol.",
      "applicationCategory": "BusinessApplication",
      "browserRequirements": "Requires JavaScript.",
      "operatingSystem": "Any",
      "image": "https://www.pandora.finance/og-image.png",
      "inLanguage": "en-CA",
      "isBasedOn": {
        "@type": "SoftwareApplication",
        "name": "Express Protocol",
        "url": "https://www.pandora.finance/express-protocol/",
      },
      "author": {
        "@type": "Organization",
        "name": "Pandora",
        "legalName": "Aconomy Labs Inc.",
        "url": "https://www.pandora.finance",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Pandora",
        "legalName": "Aconomy Labs Inc.",
        "url": "https://www.pandora.finance",
      },
    },
  ],
};

export default function UnityMarketPage() {
  return (
    <>
      <DesignSystemStylesheet />
      <InlineStyle css={pageCss} />
      <JsonLd data={unityMarketGraph} />
      {"\n\n  \n  "}
      {/* ============ NAV ============ */}<nav className="um-nav">
      {"\n    "}<div className="container nav-inner">
      {"\n      "}<a className="brand" href="#top" aria-label="UnityMarket home">
      {"\n        "}<img src="/assets/logos/UnityMarket_White.png" alt="UnityMarket" />
      {"\n        "}<span className="v1">Legacy · v1</span>
      {"\n      "}</a>
      {"\n      "}<a className="backhub" href="/" title="Back to Pandora hub">
      {"\n        "}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      {"\n        Pandora\n      "}</a>
      {"\n      "}<div className="nlinks">
      {"\n        "}<a className="nlink drops" href="#curator">The curator</a>
      {"\n        "}<a className="nlink collections" href="#drops">Drops</a>
      {"\n        "}<a className="nlink" href="#creators">For creators</a>
      {"\n        "}<a className="btn btn-unity" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener" style={{ padding: "10px 20px", fontSize: ".92rem" }}>Book a demo</a>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</nav>
      {"\n\n  \n  "}
      {/* ============ HERO ============ */}<header className="hero" id="top">
      {"\n    "}<div className="container hero-grid">
      {"\n      "}<div>
      {"\n        "}<div className="hero-badges reveal">
      {"\n          "}<span className="pill"><span className="dot"></span> AI curator agent</span>
      {"\n          "}<span className="pill">Built on Express Protocol</span>
      {"\n          "}<span className="pill">Multi-chain</span>
      {"\n        "}</div>
      {"\n        "}<p className="eyebrow reveal">UnityMarket · the curated NFT marketplace</p>
      {"\n        "}<h1 className="reveal d1">The NFT marketplace with an <span className="grad">AI curator</span></h1>
      {"\n        "}<p className="lead reveal d2">
      {"\n          Tell the curator a theme and a budget. It scans live collections, scores rarity,\n          screens out wash-trading, and assembles a fair-value shortlist \u2014 then bids, buys or\n          lists on your behalf. Mint, trade and auction still live here too, with creator\n          royalties baked in across every major chain.\n        "}</p>
      {"\n        "}<div className="hero-cta reveal d3">
      {"\n          "}<a className="btn btn-unity" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">{"Book a demo\n            "}<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      {"\n          "}</a>
      {"\n          "}<a className="btn btn-wire" href="#drops">Browse the gallery</a>
      {"\n        "}</div>
      {"\n        "}<div className="hero-stats reveal d3">
      {"\n          "}<div className="st"><b>Live</b><span>Collection scans</span></div>
      {"\n          "}<div className="st"><b>Rarity</b><span>+ provenance scored</span></div>
      {"\n          "}<div className="st"><b>Wash-trade</b><span>screening built in</span></div>
      {"\n          "}<div className="st"><b>5</b><span>Chains</span></div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n\n      \n      "}
      {/* HERO NFT GALLERY */}<div className="gallery reveal d2" aria-hidden="false">
      {"\n        "}<span className="float-badge live"><span className="ld"></span> Curator's picks</span>
      {"\n        "}<div className="gallery-grid">
      {"\n          "}<div className="col">
      {"\n            "}<div className="nft tall">
      {"\n              "}<div className="art"><div className="g1" style={{ position: "absolute", inset: "0" }}></div><div className="grain"></div></div>
      {"\n              "}<div className="meta">
      {"\n                "}<div><div className="t">Aurum Genesis #017</div><div className="c">Unity Originals</div></div>
      {"\n                "}<div className="price"><div className="p">3.2 ETH</div><div className="l">Top bid</div></div>
      {"\n              "}</div>
      {"\n            "}</div>
      {"\n            "}<div className="nft">
      {"\n              "}<div className="art"><div className="g2" style={{ position: "absolute", inset: "0" }}></div><div className="grain"></div></div>
      {"\n              "}<div className="meta">
      {"\n                "}<div><div className="t">Tidal Form #204</div><div className="c">Mint Editions</div></div>
      {"\n                "}<div className="price"><div className="p">0.8 ETH</div><div className="l">Buy now</div></div>
      {"\n              "}</div>
      {"\n            "}</div>
      {"\n          "}</div>
      {"\n          "}<div className="col push">
      {"\n            "}<div className="nft">
      {"\n              "}<div className="art"><div className="g3" style={{ position: "absolute", inset: "0" }}></div><div className="grain"></div></div>
      {"\n              "}<div className="meta">
      {"\n                "}<div><div className="t">Neon Relic #88</div><div className="c">Prism Vault</div></div>
      {"\n                "}<div className="price"><div className="p">1.5 ETH</div><div className="l">Buy now</div></div>
      {"\n              "}</div>
      {"\n            "}</div>
      {"\n            "}<div className="nft tall">
      {"\n              "}<div className="art"><div className="g4" style={{ position: "absolute", inset: "0" }}></div><div className="grain"></div></div>
      {"\n              "}<div className="meta">
      {"\n                "}<div><div className="t">Nightshade #001</div><div className="c">Curated Drop</div></div>
      {"\n                "}<div className="price"><div className="p">2.1 ETH</div><div className="l">On auction</div></div>
      {"\n              "}</div>
      {"\n            "}</div>
      {"\n          "}</div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</header>
      {"\n\n  \n  "}
      {/* ============ THE AI CURATOR ============ */}<section className="section" id="curator">
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal">
      {"\n        "}<p className="eyebrow">The AI curator</p>
      {"\n        "}<h2>A curator that works for you</h2>
      {"\n        "}<p className="lead">Most marketplaces hand you an infinite grid and wish you luck. UnityMarket gives you an agent. Describe what you want — a theme, a budget, a vibe — and it does the research, screens for fakes, and comes back with a shortlist you can actually trust.</p>
      {"\n      "}</div>
      {"\n      "}<div className="curator-grid">
      {"\n        "}<div className="reveal">
      {"\n          "}<ul className="cur-steps">
      {"\n            "}<li><span className="sd">1</span><div><b>Scans live collections.</b> <span>Indexes what's actually trading right now against your theme and budget — no stale listings.</span></div></li>
      {"\n            "}<li><span className="sd">2</span><div><b>Scores rarity &amp; checks provenance.</b> <span>Ranks pieces on trait rarity, then traces mint history and holder patterns for wash-trade flags.</span></div></li>
      {"\n            "}<li><span className="sd">3</span><div><b>Compares against the real floor.</b> <span>Strips out manufactured volume so you pay a fair price, not an inflated one.</span></div></li>
      {"\n            "}<li><span className="sd">4</span><div><b>Assembles a shortlist &amp; acts.</b> <span>Hands you a curated set, then bids, buys or lists on your behalf — settling through Express Protocol.</span></div></li>
      {"\n          "}</ul>
      {"\n          "}<div className="hero-cta reveal d2" style={{ marginTop: "30px" }}>
      {"\n            "}<a className="btn btn-unity" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">{"Book a demo\n              "}<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      {"\n            "}</a>
      {"\n          "}</div>
      {"\n        "}</div>
      {"\n        \n        "}
      {/* mini workspace preview (static illustration of the live demo) */}<div className="cur-panel reveal d1" aria-hidden="true">
      {"\n          "}<div className="ph"><span className="pd"></span> Agent workspace</div>
      {"\n          "}<div className="cur-line"><span className="mk ok">✓</span><span className="fn">scan_collections()</span><span className="tag g">37 live</span></div>
      {"\n          "}<div className="cur-line"><span className="mk ok">✓</span><span className="fn">score_rarity()</span><span className="tag g">Top 2–7%</span></div>
      {"\n          "}<div className="cur-line"><span className="mk ok">✓</span><span className="fn">check_provenance()</span><span className="tag g">Clean</span></div>
      {"\n          "}<div className="cur-line"><span className="mk ok">✓</span><span className="fn">compare_floor()</span><span className="tag g">Fair value</span></div>
      {"\n          "}<div className="cur-line"><span className="mk no">✕</span><span className="fn">wash_trade_scan()</span><span className="tag r">Excluded</span></div>
      {"\n          "}<div className="cur-line" style={{ marginBottom: "0" }}><span className="mk ok">✓</span><span className="fn">assemble_shortlist()</span><span className="tag g">3 picks</span></div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ WHAT YOU CAN DO ============ */}<section className="section" id="features" style={{ background: "var(--bg)" }}>
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal">
      {"\n        "}<p className="eyebrow">What you can do</p>
      {"\n        "}<h2>Everything an NFT marketplace should be</h2>
      {"\n        "}<p className="lead">The curator does the heavy lifting, but the full marketplace is here too — from a first mint to a headline auction, UnityMarket covers the whole lifecycle of onchain collectibles for collectors and creators alike.</p>
      {"\n      "}</div>
      {"\n      "}<div className="grid-3" style={{ marginTop: "44px" }}>
      {"\n        "}<div className="card feat reveal">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 18l-5.5 1.5 1-6.3L4 8.9 10 8z" /></svg></div>
      {"\n          "}<h3>Mint NFTs</h3>
      {"\n          "}<p>Turn any artwork, media or asset into an NFT in a few clicks. Metadata and media are pinned to decentralized storage, with royalties set at mint time.</p>
      {"\n        "}</div>
      {"\n        "}<div className="card feat reveal d1">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.3A1 1 0 0 0 5.6 19H17" /><circle cx="9" cy="21" r="1" /><circle cx="17" cy="21" r="1" /></svg></div>
      {"\n          "}<h3>Buy &amp; sell</h3>
      {"\n          "}<p>List one-of-ones or whole editions at a fixed price and settle instantly against a shared orderbook. Browse, offer and own — all in a clean gallery view.</p>
      {"\n        "}</div>
      {"\n        "}<div className="card feat reveal d2">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M6 21V10M10 21V6M14 21V13M18 21V8M4 6l6-3 5 4 5-3" /></svg></div>
      {"\n          "}<h3>Live auctions &amp; bidding</h3>
      {"\n          "}<p>Run timed auctions, place and raise bids, and let the smart contract handle settlement and withdrawals when the clock hits zero. No middleman.</p>
      {"\n        "}</div>
      {"\n        "}<div className="card feat reveal">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg></div>
      {"\n          "}<h3>Curated collections</h3>
      {"\n          "}<p>Discover work grouped into hand-picked and creator-owned collections — go live instantly in the public collection or spin up a branded storefront of your own.</p>
      {"\n        "}</div>
      {"\n        "}<div className="card feat reveal d1">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
      {"\n          "}<h3>Creator royalties</h3>
      {"\n          "}<p>Set a royalty once and earn on every resale, forever. UnityMarket honours a single royalty standard across the whole marketplace and the wider protocol.</p>
      {"\n        "}</div>
      {"\n        "}<div className="card feat reveal d2">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5v11L12 22 3 17.5v-11z" /><path d="M12 22V12M3 6.5L12 12l9-5.5" /></svg></div>
      {"\n          "}<h3>Multi-chain</h3>
      {"\n          "}<p>Trade where your community already is. UnityMarket indexes and settles NFTs across multiple chains through one unified, Pandora-powered marketplace.</p>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ FEATURED DROPS ============ */}<section className="section drops" id="drops">
      {"\n    "}<div className="container">
      {"\n      "}<div className="drops-head reveal">
      {"\n        "}<div className="sec-head">
      {"\n          "}<p className="eyebrow">Featured drops</p>
      {"\n          "}<h2>Fresh from the gallery</h2>
      {"\n          "}<p className="lead">A rotating selection of the newest collections and one-of-one drops going live on UnityMarket right now.</p>
      {"\n        "}</div>
      {"\n        "}<a className="seeall" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">{"Book a demo\n          "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      {"\n        "}</a>
      {"\n      "}</div>
      {"\n      "}<div className="drops-grid">
      {"\n        "}<div className="dcard reveal">
      {"\n          "}<div className="art"><span className="tagline">New drop</span><div className="g1" style={{ position: "absolute", inset: "0" }}></div><div className="grain"></div></div>
      {"\n          "}<div className="body">
      {"\n            "}<div className="cname">Aurum Genesis</div>
      {"\n            "}<div className="cby">by Unity Originals</div>
      {"\n            "}<div className="row"><div><div className="l">Floor</div><div className="p">1.8 ETH</div></div><div className="items">88 items</div></div>
      {"\n          "}</div>
      {"\n        "}</div>
      {"\n        "}<div className="dcard reveal d1">
      {"\n          "}<div className="art"><span className="tagline">Auction</span><div className="g3" style={{ position: "absolute", inset: "0" }}></div><div className="grain"></div></div>
      {"\n          "}<div className="body">
      {"\n            "}<div className="cname">Prism Vault</div>
      {"\n            "}<div className="cby">by Kaleido Studio</div>
      {"\n            "}<div className="row"><div><div className="l">Top bid</div><div className="p">2.4 ETH</div></div><div className="items">Ends 6h</div></div>
      {"\n          "}</div>
      {"\n        "}</div>
      {"\n        "}<div className="dcard reveal d2">
      {"\n          "}<div className="art"><span className="tagline">Trending</span><div className="g2" style={{ position: "absolute", inset: "0" }}></div><div className="grain"></div></div>
      {"\n          "}<div className="body">
      {"\n            "}<div className="cname">Tidal Forms</div>
      {"\n            "}<div className="cby">by Marisol.eth</div>
      {"\n            "}<div className="row"><div><div className="l">Floor</div><div className="p">0.6 ETH</div></div><div className="items">240 items</div></div>
      {"\n          "}</div>
      {"\n        "}</div>
      {"\n        "}<div className="dcard reveal d3">
      {"\n          "}<div className="art"><span className="tagline">Curated</span><div className="g4" style={{ position: "absolute", inset: "0" }}></div><div className="grain"></div></div>
      {"\n          "}<div className="body">
      {"\n            "}<div className="cname">Nightshade</div>
      {"\n            "}<div className="cby">by Pandora Curated</div>
      {"\n            "}<div className="row"><div><div className="l">Floor</div><div className="p">1.1 ETH</div></div><div className="items">50 items</div></div>
      {"\n          "}</div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ HOW IT WORKS / COLLECTIONS ============ */}<section className="section" id="collections">
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal">
      {"\n        "}<p className="eyebrow">How it works</p>
      {"\n        "}<h2>From wallet to gallery in four steps</h2>
      {"\n        "}<p className="lead">Connect, create and collect — UnityMarket keeps the onchain plumbing out of your way so you can focus on the art.</p>
      {"\n      "}</div>
      {"\n      "}<div className="steps">
      {"\n        "}<div className="step reveal">
      {"\n          "}<div className="n">01</div>
      {"\n          "}<h4>Connect a wallet</h4>
      {"\n          "}<p>Link your Web3 wallet to browse, bid and manage everything you own in one place.</p>
      {"\n        "}</div>
      {"\n        "}<div className="step reveal d1">
      {"\n          "}<div className="n">02</div>
      {"\n          "}<h4>Mint or list</h4>
      {"\n          "}<p>Upload your work to mint a fresh NFT, or list an existing one for sale or auction.</p>
      {"\n        "}</div>
      {"\n        "}<div className="step reveal d2">
      {"\n          "}<div className="n">03</div>
      {"\n          "}<h4>Trade &amp; bid</h4>
      {"\n          "}<p>Buy instantly at a fixed price or place a bid in a live, on-chain timed auction.</p>
      {"\n        "}</div>
      {"\n        "}<div className="step reveal d3">
      {"\n          "}<div className="n">04</div>
      {"\n          "}<h4>Earn royalties</h4>
      {"\n          "}<p>Collect your sale, and keep earning a set royalty every time the piece resells.</p>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ FOR CREATORS ============ */}<section className="section creators" id="creators">
      {"\n    "}<div className="container creators-grid">
      {"\n      "}<div>
      {"\n        "}<p className="eyebrow reveal">For creators</p>
      {"\n        "}<h2 className="reveal d1">Built for the people who make the art</h2>
      {"\n        "}<p className="lead reveal d2">
      {"\n          UnityMarket puts creators first. Mint in minutes, launch a branded collection, and\n          set royalties that follow your work across every resale \u2014 no gatekeepers, no lost upside.\n        "}</p>
      {"\n        "}<ul className="clist reveal d2">
      {"\n          "}<li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span><div><b>Royalties that last.</b> <span>Set your percentage once and earn on every secondary sale, forever.</span></div></li>
      {"\n          "}<li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span><div><b>Your own collection.</b> <span>Launch a personal, fully branded storefront — or go live instantly in the public collection.</span></div></li>
      {"\n          "}<li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span><div><b>Batch drops.</b> <span>Mint whole editions at once and open sales to your community in a single flow.</span></div></li>
      {"\n          "}<li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span><div><b>Own your assets.</b> <span>Media pinned to decentralized storage; the NFT lives on-chain, always yours.</span></div></li>
      {"\n        "}</ul>
      {"\n        "}<div className="hero-cta reveal d3">
      {"\n          "}<a className="btn btn-unity" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">{"Book a demo\n            "}<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      {"\n          "}</a>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n\n      \n      "}
      {/* Creator earnings panel */}<div className="earn reveal d2">
      {"\n        "}<div className="eh">
      {"\n          "}<span className="lbl">Creator earnings · lifetime</span>
      {"\n          "}<span className="roy">7.5% royalty</span>
      {"\n        "}</div>
      {"\n        "}<div className="amt">42.6<small>ETH</small></div>
      {"\n        "}<div className="sub">across primary sales + secondary royalties</div>
      {"\n        "}<div className="bar"><i></i></div>
      {"\n        "}<div className="barrow"><span>Secondary royalties</span><span>72%</span></div>
      {"\n        "}<div className="split">
      {"\n          "}<div className="cell"><b>1,284</b><span>Editions sold</span></div>
      {"\n          "}<div className="cell"><b>936</b><span>Unique collectors</span></div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ CHAINS STRIP ============ */}<section className="section chains">
      {"\n    "}<div className="container center">
      {"\n      "}<div className="sec-head reveal" style={{ margin: "0 auto" }}>
      {"\n        "}<p className="eyebrow" style={{ color: "var(--um-gold-deep)" }}>Multi-chain by design</p>
      {"\n        "}<h2>Your collectors, wherever they are</h2>
      {"\n        "}<p className="lead" style={{ margin: "14px auto 0" }}>One marketplace, indexed and settling across the chains your community already calls home.</p>
      {"\n      "}</div>
      {"\n      "}<div className="chain-row reveal d1">
      {"\n        "}<span className="chip-chain"><span className="cd" style={{ background: "#627eea" }}></span>Ethereum</span>
      {"\n        "}<span className="chip-chain"><span className="cd" style={{ background: "#0052ff" }}></span>Base</span>
      {"\n        "}<span className="chip-chain"><span className="cd" style={{ background: "#28a0f0" }}></span>Arbitrum</span>
      {"\n        "}<span className="chip-chain"><span className="cd" style={{ background: "#ff0420" }}></span>Optimism</span>
      {"\n        "}<span className="chip-chain"><span className="cd" style={{ background: "#8247e5" }}></span>Polygon</span>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ CTA BAND ============ */}<section className="section" style={{ paddingTop: "0" }}>
      {"\n    "}<div className="container">
      {"\n      "}<div className="cta reveal">
      {"\n        "}<p className="eyebrow">Put a curator to work</p>
      {"\n        "}<h2>Let the agent build your next collection</h2>
      {"\n        "}<p>Give the curator a theme and a budget and watch it scan, score, screen out wash-trading, and assemble a fair-value shortlist — then bid, buy or list on your behalf. Or book a walkthrough with the team.</p>
      {"\n        "}<div className="cta-btns">
      {"\n          "}<a className="btn btn-glow" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ BUILT ON EXPRESS PROTOCOL ============ */}<section className="section oss" id="protocol">
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal">
      {"\n        "}<p className="eyebrow">Built on Express Protocol</p>
      {"\n        "}<h2>The curator you see, the rails you trust</h2>
      {"\n        "}<p className="lead">UnityMarket is a marketplace front-end for Express Protocol — the audited on-chain contracts that settle every mint, bid, sale and royalty. The agent decides what to buy; the protocol makes sure the trade is real, atomic and enforced.</p>
      {"\n      "}</div>
      {"\n      "}<div className="oss-strip reveal d1" style={{ display: "grid", gap: "16px", maxWidth: "none" }}>
      {"\n        "}<a className="repo" href="/express-protocol/">
      {"\n          "}<span className="gh"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5v11L12 22 3 17.5v-11z" /><path d="M12 22V12M3 6.5L12 12l9-5.5" /></svg></span>
      {"\n          "}<div>
      {"\n            "}<span className="rpath">Express Protocol <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg></span>
      {"\n            "}<p className="rdesc">The SDK and on-chain contracts powering UnityMarket — listings, bids, escrow and royalties.</p>
      {"\n          "}</div>
      {"\n        "}</a>
      {"\n        "}<a className="repo" href="https://github.com/Pandora-Finance" target="_blank" rel="noopener">
      {"\n          "}<span className="gh"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" /></svg></span>
      {"\n          "}<div>
      {"\n            "}<span className="rpath">Pandora-Finance <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg></span>
      {"\n            "}<p className="rdesc">Built in the open by the Pandora team.</p>
      {"\n          "}</div>
      {"\n        "}</a>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ FAQ ============ */}<section className="section chains" id="faq">
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal" style={{ margin: "0 auto", textAlign: "center" }}>
      {"\n        "}<p className="eyebrow" style={{ color: "var(--um-gold-deep)" }}>Questions</p>
      {"\n        "}<h2>How the curator works</h2>
      {"\n        "}<p className="lead" style={{ margin: "14px auto 0" }}>The short version of what the agent does, what it won't do, and what's under the hood.</p>
      {"\n      "}</div>
      {"\n      "}<div className="faqwrap reveal d1">
      {"\n        "}<details className="faq">
      {"\n          "}<summary>What does the AI curator actually do?</summary>
      {"\n          "}<p>You give it a theme and a budget in plain language. It scans live collections, scores each piece on trait rarity, checks provenance and trade history for wash-trading, compares prices against the real floor, and assembles a shortlist of fair-value pieces — then places bids, buys, or lists on your behalf. Book a walkthrough with the team to see every step in action.</p>
      {"\n        "}</details>
      {"\n        "}<details className="faq">
      {"\n          "}<summary>How does it detect wash-trading?</summary>
      {"\n          "}<p>It reconstructs a collection's trade graph and looks for the tells: a handful of wallets driving most of the volume, circular self-trades where the same NFT loops between related addresses, brand-new anonymous deployer wallets, and floors that only hold up on those internal trades. When enough line up, it treats the volume as manufactured, strips it out to find the real floor, and excludes the collection rather than buying in.</p>
      {"\n        "}</details>
      {"\n        "}<details className="faq">
      {"\n          "}<summary>Does the agent move funds on its own?</summary>
      {"\n          "}<p>Only within the limits you set, and every trade settles through Express Protocol's audited on-chain contracts — the same escrow, bidding and royalty logic the whole marketplace uses.</p>
      {"\n        "}</details>
      {"\n        "}<details className="faq">
      {"\n          "}<summary>What is UnityMarket's relationship to Express Protocol?</summary>
      {"\n          "}<p>UnityMarket is a marketplace front-end built on <a href="/express-protocol/">Express Protocol</a>. The curator agent and the gallery are the experience layer; Express Protocol is the settlement layer that makes mints, bids, sales and creator royalties real and enforceable on-chain.</p>
      {"\n        "}</details>
      {"\n      "}</div>
      {"\n      "}<div className="reveal d2" style={{ textAlign: "center", marginTop: "34px" }}>
      {"\n        "}<a className="btn btn-glow" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ FOOTER ============ */}<footer className="footer">
      {"\n    "}<div className="container">
      {"\n      "}<div className="f-top">
      {"\n        "}<div>
      {"\n          "}<img className="flogo" src="/assets/logos/UnityMarket_White.png" alt="UnityMarket" />
      {"\n          "}<p className="fabout">A next-gen NFT marketplace from the Pandora family — mint, buy, sell and auction NFTs across curated collections, with creator royalties and multi-chain support.</p>
      {"\n        "}</div>
      {"\n        "}<div className="fcol">
      {"\n          "}<h5>Curator</h5>
      {"\n          "}<a href="#curator">How the curator works</a>
      {"\n          "}<a href="#faq">FAQ</a>
      {"\n          "}<a href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n        "}</div>
      {"\n        "}<div className="fcol">
      {"\n          "}<h5>Marketplace</h5>
      {"\n          "}<a href="#drops">Featured drops</a>
      {"\n          "}<a href="#features">What you can do</a>
      {"\n          "}<a href="#creators">For creators</a>
      {"\n          "}<a href="#protocol">Built on Express Protocol</a>
      {"\n        "}</div>
      {"\n        "}<div className="fcol">
      {"\n          "}<h5>Ecosystem</h5>
      {"\n          "}<a href="/">Pandora Hub</a>
      {"\n          "}<a href="/express-protocol/">Express Protocol</a>
      {"\n          "}<a href="/aconomy/">Aconomy</a>
      {"\n          "}<a href="/propty/">Propty</a>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n      "}<div className="f-bottom">
      {"\n        "}<div>© 2026 UnityMarket · Legacy v1 · Part of the Pandora ecosystem</div>
      {"\n        "}<a className="rehab" href="/">
      {"\n          "}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      {"\n          Back to Pandora hub\n        "}</a>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</footer>
      {"\n\n  \n"}
      {/* ============ SCRIPTS ============ */}
      {/* Byte-equivalent to the page's inline reveal IIFE: threshold .12 and
          rootMargin '0px 0px -8% 0px' are this component's defaults, and the
          original has no prefers-reduced-motion branch (the stylesheet handles
          it), so the guard is switched off here too. */}
      <RevealOnScroll respectReducedMotion={false} />
    </>
  );
}
