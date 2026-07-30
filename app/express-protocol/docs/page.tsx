import type { Metadata, Viewport } from 'next';

import { DesignSystemStylesheet } from '@/components/DesignSystemStylesheet';
import { InlineStyle } from '@/components/InlineStyle';
import { JsonLd } from '@/components/JsonLd';
import { DocsRuntime } from './DocsRuntime';
import { pageCss } from './page.css';

const TITLE = 'Express Protocol SDK Docs — Mint, Trade & x402 | Pandora';
const DESCRIPTION =
  'Full Express Protocol SDK reference: install pandora-express, then mint, sell, auction and manage ERC-721, ERC-1155, ERC-404 assets, plus x402 agent payments.';
const IMAGE_ALT = 'Express Protocol SDK documentation';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/express-protocol/docs/' },
  // The docs page leads with its own purple mark before the shared favicons;
  // declaring `icons` replaces the root list, so all of them are repeated.
  icons: {
    icon: [
      { url: '/express-protocol/docs/media/Favicon.svg' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  // A route-level `openGraph` / `twitter` object REPLACES the root layout's
  // wholesale — it is not merged field-by-field — so siteName, locale, card,
  // site and creator must be restated here or they vanish from the head.
  openGraph: {
    type: 'article',
    siteName: 'Pandora',
    locale: 'en_CA',
    title: TITLE,
    description: DESCRIPTION,
    url: '/express-protocol/docs/',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: IMAGE_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aconomyfdn',
    creator: '@aconomyfdn',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og-image.png', alt: IMAGE_ALT }],
  },
};

export const viewport: Viewport = { themeColor: '#006cff' };

const techArticle = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": "https://www.pandora.finance/express-protocol/docs/#techarticle",
  "url": "https://www.pandora.finance/express-protocol/docs/",
  "headline": "Express Protocol SDK documentation",
  "name": "Express Protocol SDK Docs — Mint, Trade & x402 | Pandora",
  "description": "Full Express Protocol SDK reference: install pandora-express, then mint, sell, auction and manage ERC-721, ERC-1155, ERC-404 assets, plus x402 agent payments.",
  "inLanguage": "en-CA",
  "image": "https://www.pandora.finance/og-image.png",
  "proficiencyLevel": "Beginner",
  "dependencies": "pandora-express (npm), a viem or web3 signer, Node.js",
  "articleSection": [
    "Getting started",
    "Installation & setup",
    "Quickstart",
    "Collections model",
    "SDK · ERC-721",
    "SDK · ERC-1155",
    "x402 payments",
    "IPFS & Pinata",
    "Build guides",
  ],
  "keywords": "Express Protocol, pandora-express, NFT SDK, ERC-721, ERC-1155, ERC-404, x402, agentic commerce, RWA",
  "about": {
    "@type": "SoftwareApplication",
    "name": "Express Protocol SDK",
    "alternateName": "pandora-express",
    "url": "https://www.pandora.finance/express-protocol/",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "codeRepository": "https://github.com/Pandora-Finance/Express-Protocol-SDK",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "Pandora",
    "url": "https://www.pandora.finance",
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
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Pandora",
      "item": "https://www.pandora.finance/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Express Protocol",
      "item": "https://www.pandora.finance/express-protocol/",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Docs",
      "item": "https://www.pandora.finance/express-protocol/docs/",
    },
  ],
};

export default function ExpressProtocolDocsPage() {
  return (
    <>
      <DesignSystemStylesheet />
      <InlineStyle css={pageCss} />
      <JsonLd data={techArticle} />
      <JsonLd data={breadcrumbs} />
      {"\n\n  \n  "}
      {/* ============ TOP BAR ============ */}<header className="topbar">
      {"\n    "}<button className="tb-menu" id="menuToggle" aria-label="Open navigation" aria-expanded="false" aria-controls="sidebar">
      {"\n      "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
      {"\n    "}</button>
      {"\n    "}<a className="tb-brand" href="/express-protocol/" aria-label="Express Protocol home">
      {"\n      "}<img src="/assets/logos/ExpressProtocol_White.png" alt="Express Protocol" />
      {"\n      "}<span className="tb-docs-tag">Docs</span>
      {"\n    "}</a>
      {"\n    "}<span className="tb-sep" aria-hidden="true"></span>
      {"\n    "}<a className="tb-back" href="/express-protocol/">
      {"\n      "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      {"\n      "}<span className="tb-back-label">Back to Express Protocol</span>
      {"\n    "}</a>
      {"\n    "}<div className="tb-right">
      {"\n      "}<a className="tb-ghlink" href="https://github.com/Pandora-Finance/Express-Protocol-SDK" target="_blank" rel="noreferrer">
      {"\n        "}<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" /></svg>
      {"\n        "}<span>SDK</span>
      {"\n      "}</a>
      {"\n      "}<a className="tb-ghlink" href="https://github.com/Pandora-Finance/express-protocol-docs" target="_blank" rel="noreferrer">
      {"\n        "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
      {"\n        "}<span>Docs</span>
      {"\n      "}</a>
      {"\n    "}</div>
      {"\n  "}</header>
      {"\n\n  "}<div className="sb-backdrop" id="sbBackdrop" aria-hidden="true"></div>
      {"\n\n  "}<div className="shell">
      {"\n    \n    "}
      {/* ============ SIDEBAR ============ */}<aside className="sidebar" id="sidebar">
      {"\n      "}<nav aria-label="Documentation navigation">
      {"\n        "}<div className="sb-search">
      {"\n          "}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></svg>
      {"\n          "}<input type="text" id="sbFilter" placeholder="Filter sections…" aria-label="Filter documentation sections" autoComplete="off" spellCheck="false" />
      {"\n        "}</div>
      {"\n\n        "}<div className="sb-group">
      {"\n          "}<p className="sb-title"><svg className="ti" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg> Getting Started</p>
      {"\n          "}<ul className="sb-list">
      {"\n            "}<li><a className="sb-link" href="#overview" data-sec="overview">Overview</a></li>
      {"\n            "}<li><a className="sb-link" href="#why-express" data-sec="why-express">Why Express?</a></li>
      {"\n            "}<li><a className="sb-link" href="#install" data-sec="install">Installation &amp; setup</a></li>
      {"\n            "}<li><a className="sb-link" href="#quickstart" data-sec="quickstart">Quickstart</a></li>
      {"\n            "}<li><a className="sb-link" href="#collections" data-sec="collections">Collections model</a></li>
      {"\n          "}</ul>
      {"\n        "}</div>
      {"\n\n        "}<div className="sb-group">
      {"\n          "}<p className="sb-title"><svg className="ti" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 22l-5.5-2.5 1-6.3L3 8.9 9 8z" /></svg> SDK · ERC-721</p>
      {"\n          "}<ul className="sb-list">
      {"\n            "}<li><a className="sb-link" href="#erc721" data-sec="erc721">Overview &amp; functions</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-mint" data-sec="erc721-mint">Mint</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-batch" data-sec="erc721-batch">Batch mint</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-burn" data-sec="erc721-burn">Burn</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-sell" data-sec="erc721-sell">Sell (fixed price)</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-buy" data-sec="erc721-buy">Buy</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-auction" data-sec="erc721-auction">Auction</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-bid" data-sec="erc721-bid">Bid</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-execbid" data-sec="erc721-execbid">Execute bid</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-withdrawbid" data-sec="erc721-withdrawbid">Withdraw bid</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-cancel" data-sec="erc721-cancel">Cancel sale</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-collection" data-sec="erc721-collection">Personal collections</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc721-uri" data-sec="erc721-uri">Token URI</a></li>
      {"\n          "}</ul>
      {"\n        "}</div>
      {"\n\n        "}<div className="sb-group">
      {"\n          "}<p className="sb-title"><svg className="ti" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg> SDK · ERC-1155</p>
      {"\n          "}<ul className="sb-list">
      {"\n            "}<li><a className="sb-link" href="#erc1155" data-sec="erc1155">Overview &amp; functions</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc1155-mint" data-sec="erc1155-mint">Mint (with royalties)</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc1155-trade" data-sec="erc1155-trade">Sell · Buy · Auction</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc1155-bid" data-sec="erc1155-bid">Bid &amp; execute bid</a></li>
      {"\n            "}<li><a className="sb-link" href="#erc1155-collection" data-sec="erc1155-collection">Personal collections</a></li>
      {"\n          "}</ul>
      {"\n        "}</div>
      {"\n\n        "}<div className="sb-group">
      {"\n          "}<p className="sb-title"><svg className="ti" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg> x402 Payments</p>
      {"\n          "}<ul className="sb-list">
      {"\n            "}<li><a className="sb-link" href="#x402" data-sec="x402">What is x402</a></li>
      {"\n            "}<li><a className="sb-link" href="#x402-setup" data-sec="x402-setup">Enabling the module</a></li>
      {"\n            "}<li><a className="sb-link" href="#x402-agents" data-sec="x402-agents">Agent checkout flow</a></li>
      {"\n          "}</ul>
      {"\n        "}</div>
      {"\n\n        "}<div className="sb-group">
      {"\n          "}<p className="sb-title"><svg className="ti" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> Guides &amp; Storage</p>
      {"\n          "}<ul className="sb-list">
      {"\n            "}<li><a className="sb-link" href="#ipfs" data-sec="ipfs">IPFS &amp; Pinata</a></li>
      {"\n            "}<li><a className="sb-link" href="#guides" data-sec="guides">Build guides</a></li>
      {"\n          "}</ul>
      {"\n        "}</div>
      {"\n      "}</nav>
      {"\n    "}</aside>
      {"\n\n    \n    "}
      {/* ============ MAIN ============ */}<main className="main">
      {"\n      "}<div className="content">
      {"\n\n        \n        "}
      {/* ===================== OVERVIEW ===================== */}<section className="doc-section active" id="sec-overview" data-key="overview">
      {"\n          "}<div className="crumbs"><b>Getting Started</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Overview</div>
      {"\n          "}<p className="doc-eyebrow">Express Protocol SDK</p>
      {"\n          "}<h1>The SDK for <span className="grad">agentic onchain commerce</span></h1>
      {"\n          "}<div className="pill-row">
      {"\n            "}<span className="pill plain"><span className="dot"></span> v2 · agent-ready</span>
      {"\n            "}<span className="pill">npm: pandora-express</span>
      {"\n            "}<span className="pill mint">Open source · MIT</span>
      {"\n          "}</div>
      {"\n          "}<p className="lead">Express Protocol is a decentralized protocol built on top of the blockchain layer that lets <strong>any Web2 developer</strong> mint, trade, auction, and manage NFTs and real-world assets onchain — without writing a single line of Solidity.</p>
      {"\n          "}<p>The protocol wraps a suite of audited smart contracts and libraries in one typed SDK. It handles every interaction at the blockchain level, so you design a frontend, plug in a wallet, and call an SDK function to ship a fully-operating NFT or RWA application. Building an NFT marketplace used to take days or weeks — with Express it can be done in a few hours.</p>
      {"\n\n          "}<div className="callout">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
      {"\n            "}<div><b>Shared order book.</b> Every marketplace built on Express shares one liquidity layer. An NFT listed in one app can be discovered and filled from any other app on the protocol — solving the fragmented, unbalanced liquidity that plagues siloed NFT markets.</div>
      {"\n          "}</div>
      {"\n\n          "}<h2 id="what-you-get">What you can build</h2>
      {"\n          "}<div className="card-grid">
      {"\n            "}<a className="nav-card" data-goto="erc721-mint" href="#erc721-mint">
      {"\n              "}<div className="nc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 22l-5.5-2.5 1-6.3L3 8.9 9 8z" /></svg></div>
      {"\n              "}<h4>Mint anything</h4>
      {"\n              "}<p>Single or batch mint ERC-721 &amp; ERC-1155 with creator royalties baked in.</p>
      {"\n            "}</a>
      {"\n            "}<a className="nav-card" data-goto="erc721-sell" href="#erc721-sell">
      {"\n              "}<div className="nc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.3A1 1 0 0 0 5.6 19H17" /><circle cx="9" cy="21" r="1" /><circle cx="17" cy="21" r="1" /></svg></div>
      {"\n              "}<h4>Full marketplace</h4>
      {"\n              "}<p>Fixed-price sales, buys, timed auctions and bidding on a shared order book.</p>
      {"\n            "}</a>
      {"\n            "}<a className="nav-card" data-goto="x402" href="#x402">
      {"\n              "}<div className="nc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg></div>
      {"\n              "}<h4>Agent payments</h4>
      {"\n              "}<p>Let AI agents pay &amp; settle purchases autonomously with the x402 module.</p>
      {"\n            "}</a>
      {"\n            "}<a className="nav-card" data-goto="ipfs" href="#ipfs">
      {"\n              "}<div className="nc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.5 0 4.8 1 6.4 2.6" /><path d="M8 12l3 3 5-6" /></svg></div>
      {"\n              "}<h4>Decentralized storage</h4>
      {"\n              "}<p>Pin metadata &amp; media to IPFS out of the box with the Pinata integration.</p>
      {"\n            "}</a>
      {"\n          "}</div>
      {"\n\n          "}<div className="callout new">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
      {"\n            "}<div><b>New in 2026 — x402 payments.</b> Express now ships an optional module built on the HTTP&nbsp;402 stablecoin standard so autonomous agents can price, authorize, and settle NFT &amp; RWA purchases in USDC on their own. <a className="ilink" data-goto="x402" href="#x402">Read the x402 docs →</a></div>
      {"\n          "}</div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a className="disabled" aria-hidden="true" tabIndex={-1}></a>
      {"\n            "}<a className="next" data-goto="why-express" href="#why-express"><div className="df-dir">Next</div><div className="df-ttl">Why Express? →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== WHY EXPRESS ===================== */}<section className="doc-section" id="sec-why-express" data-key="why-express">
      {"\n          "}<div className="crumbs"><b>Getting Started</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Why Express?</div>
      {"\n          "}<h1>Why Express?</h1>
      {"\n          "}<p className="lead">Through Express Protocol's SDK you can build anything from a simple NFT-minting dApp to a complex, multi-standard, multichain marketplace — with auctions, collections, royalties and more — without becoming a blockchain engineer first.</p>
      {"\n\n          "}<h2 id="challenges">Challenges with building NFT dApps</h2>
      {"\n          "}<ul>
      {"\n            "}<li><strong>Nativity.</strong> Developers normally need deep web3 familiarity and must be proficient at writing smart contracts.</li>
      {"\n            "}<li><strong>Ease of use.</strong> Shipping a dApp means writing efficient functions, adding modifiers and access control, and a great deal more.</li>
      {"\n            "}<li><strong>Time consumption.</strong> Writing and testing those contracts from scratch takes a serious amount of time.</li>
      {"\n            "}<li><strong>Security.</strong> Moving assets and funds through dApps introduces vulnerabilities that have caused real exploits and total application failures in the past.</li>
      {"\n          "}</ul>
      {"\n\n          "}<h2 id="how-express-solves">How Express Protocol solves them</h2>
      {"\n          "}<p>The SDK lets developers create NFT dApps without being intimidated by blockchain and smart-contract complexity. It takes care of interacting at the blockchain level — you just design a frontend, set up a wallet, and call SDK functions to get a working dApp.</p>
      {"\n          "}<p>You never write contracts from scratch, so your energy goes into building innovative products instead of re-inventing the wheel. Express Protocol's codebase is open source and its smart contracts have been through multiple phases of auditing, so dApps built on top inherit that battle-tested foundation.</p>
      {"\n\n          "}<div className="callout">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
      {"\n            "}<div><b>Audited foundation.</b> Because the SDK is built on well-tested contracts, applications built with Express are hardened against the classes of threats and vulnerabilities that have historically plagued NFT dApps.</div>
      {"\n          "}</div>
      {"\n\n          "}<h2 id="liquidity">Liquidating assets</h2>
      {"\n          "}<p>The centre of attention is liquidity. Today, the major problem with NFT marketplaces is a lack of — or unbalanced — liquidity across markets. An NFT can be listed on one marketplace while the potential bidders and buyers sit on another, unaware of the listing, so the order stays unfilled.</p>
      {"\n          "}<p>Express Protocol liquidates assets through a <strong>shared order book</strong>. Every marketplace built with the SDK shares all listings and placed orders, balancing liquidity across markets. In practice, an NFT listed on one marketplace can be filled through every other marketplace built on the SDK.</p>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="overview" href="#overview"><div className="df-dir">Previous</div><div className="df-ttl">← Overview</div></a>
      {"\n            "}<a className="next" data-goto="install" href="#install"><div className="df-dir">Next</div><div className="df-ttl">Installation &amp; setup →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== INSTALL ===================== */}<section className="doc-section" id="sec-install" data-key="install">
      {"\n          "}<div className="crumbs"><b>Getting Started</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Installation</div>
      {"\n          "}<h1>Installation &amp; setup</h1>
      {"\n          "}<p className="lead">Add the package, create an SDK instance with a signer, and you are ready to mint and trade onchain.</p>
      {"\n\n          "}<h2 id="install-pkg">Install the package</h2>
      {"\n          "}<p>The SDK ships on npm as <code>pandora-express</code>.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">terminal</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-p">$</span>{" npm i pandora-express\n"}<span className="tk-c"># or</span>
      {"\n"}<span className="tk-p">$</span> pnpm add pandora-express</code></pre>
      {"\n          "}</div>
      {"\n\n          "}<h2 id="init">Initialize the SDK</h2>
      {"\n          "}<p>Create a single SDK instance and reuse it across your app. Pass a signer (a viem / web3 provider connected to the user's wallet) and the chain you want to operate on.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">sdk.ts</span><span className="tag">pandora-express</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">import</span> <span className="tk-p">{"{"}</span> <span className="tk-m">createPandoraExpressSDK</span> <span className="tk-p">{"}"}</span> <span className="tk-k">from</span> <span className="tk-s">"pandora-express"</span><span className="tk-p">;</span>
      {"\n\n"}<span className="tk-c">// one instance, reused everywhere</span>
      {"\n"}<span className="tk-k">export</span> <span className="tk-k">const</span> <span className="tk-m">sdk</span> <span className="tk-p">=</span> <span className="tk-f">createPandoraExpressSDK</span><span className="tk-p">{"({"}</span>
      {"\n  "}<span className="tk-m">signer</span><span className="tk-p">,</span>            <span className="tk-c">// viem / web3 signer from the connected wallet</span>
      {"\n  "}<span className="tk-m">chainId</span><span className="tk-p">:</span> <span className="tk-n">137</span><span className="tk-p">,</span>     <span className="tk-c">// Polygon — see supported networks below</span>
      {"\n"}<span className="tk-p">{"});"}</span></code></pre>
      {"\n          "}</div>
      {"\n\n          "}<div className="callout">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
      {"\n            "}<div>Every SDK method takes the active <code>chainId</code>. A token minted on a given network can be listed, sold or auctioned on that <b>same</b> network. Under the hood the SDK forwards a configured <code>web3</code> instance and <code>chainId</code> to the protocol contracts.</div>
      {"\n          "}</div>
      {"\n\n          "}<h2 id="networks">Supported networks</h2>
      {"\n          "}<p>The protocol contracts are deployed across multiple EVM chains. Pass the network id as <code>chainId</code> when you create the SDK.</p>
      {"\n          "}<div className="tbl-wrap">
      {"\n            "}<table className="params">
      {"\n              "}<thead><tr><th>Network</th><th>chainId</th></tr></thead>
      {"\n              "}<tbody>
      {"\n                "}<tr><td>Polygon Mainnet</td><td className="ty">137</td></tr>
      {"\n                "}<tr><td>Polygon Mumbai (testnet)</td><td className="ty">80001</td></tr>
      {"\n                "}<tr><td>BSC Mainnet</td><td className="ty">56</td></tr>
      {"\n                "}<tr><td>BSC Testnet</td><td className="ty">97</td></tr>
      {"\n                "}<tr><td>Base <span className="ty">· x402-ready</span></td><td className="ty">8453</td></tr>
      {"\n                "}<tr><td>Arbitrum One <span className="ty">· x402-ready</span></td><td className="ty">42161</td></tr>
      {"\n              "}</tbody>
      {"\n            "}</table>
      {"\n          "}</div>
      {"\n          "}<div className="callout new">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
      {"\n            "}<div><b>Modernized for 2026.</b> Alongside the original Polygon and BSC deployments, Express now targets low-fee L2s — <b>Base</b> and <b>Arbitrum</b> — which are also the settlement chains for the x402 stablecoin module.</div>
      {"\n          "}</div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="why-express" href="#why-express"><div className="df-dir">Previous</div><div className="df-ttl">← Why Express?</div></a>
      {"\n            "}<a className="next" data-goto="quickstart" href="#quickstart"><div className="df-dir">Next</div><div className="df-ttl">Quickstart →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== QUICKSTART ===================== */}<section className="doc-section" id="sec-quickstart" data-key="quickstart">
      {"\n          "}<div className="crumbs"><b>Getting Started</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Quickstart</div>
      {"\n          "}<h1>Quickstart: mint &amp; sell</h1>
      {"\n          "}<p className="lead">From <code>npm install</code> to onchain in one file — mint an ERC-721 into Pandora's public collection, then list it on the shared order book.</p>
      {"\n\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">mint-and-sell.ts</span><span className="tag">pandora-express</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">import</span> <span className="tk-p">{"{"}</span> <span className="tk-m">createPandoraExpressSDK</span> <span className="tk-p">{"}"}</span> <span className="tk-k">from</span> <span className="tk-s">"pandora-express"</span><span className="tk-p">;</span>
      {"\n\n"}<span className="tk-k">const</span> <span className="tk-m">sdk</span> <span className="tk-p">=</span> <span className="tk-f">createPandoraExpressSDK</span><span className="tk-p">{"({"}</span> <span className="tk-m">signer</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">:</span> <span className="tk-n">137</span> <span className="tk-p">{"});"}</span>
      {"\n\n"}<span className="tk-c">// 1 · mint an ERC-721 into the public collection</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">receipt</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">minterAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-s">"ipfs://…/asset.json"</span><span className="tk-p">,</span>       <span className="tk-c">// tokenURI</span>
      {"\n  "}<span className="tk-p">[[</span><span className="tk-m">creator</span><span className="tk-p">,</span> <span className="tk-n">500</span><span className="tk-p">]]</span>              <span className="tk-c">// royalties: 5% (500 bps) to creator</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">tokenId</span> <span className="tk-p">=</span> <span className="tk-m">receipt</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">RoyaltiesSetForTokenId</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">tokenId</span><span className="tk-p">;</span>
      {"\n\n"}<span className="tk-c">// 2 · list it for sale on the shared order book</span>
      {"\n"}<span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">sellNFT</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">tokenId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-s">"25"</span><span className="tk-p">,</span>                          <span className="tk-c">// price</span>
      {"\n  "}<span className="tk-m">minterAddress</span>
      {"\n"}<span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n\n          "}<div className="callout">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
      {"\n            "}<div>That's a full mint-to-listing flow. Buyers on <b>any</b> Express marketplace can now fill the order via <code>sdk.erc721.order.buyNFT(...)</code>. Continue to the ERC-721 reference for every function and its emitted events.</div>
      {"\n          "}</div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="install" href="#install"><div className="df-dir">Previous</div><div className="df-ttl">← Installation</div></a>
      {"\n            "}<a className="next" data-goto="collections" href="#collections"><div className="df-dir">Next</div><div className="df-ttl">Collections model →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== COLLECTIONS ===================== */}<section className="doc-section" id="sec-collections" data-key="collections">
      {"\n          "}<div className="crumbs"><b>Getting Started</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Collections</div>
      {"\n          "}<h1>Public vs. personal collections</h1>
      {"\n          "}<p className="lead">Every token in Express lives in a collection. You can mint into Pandora's shared public collection to go live instantly, or deploy your own personal collection contract for a fully-branded storefront.</p>
      {"\n\n          "}<div className="card-grid">
      {"\n            "}<div className="nav-card">
      {"\n              "}<div className="nc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
      {"\n              "}<h4>Public collection <span style={{ fontFamily: "var(--mono)", fontSize: ".62rem", color: "#c9bcff" }}>PNDC</span></h4>
      {"\n              "}<p>Mint straight into Pandora's shared contract and go live immediately — no deployment required. Accessed via <code>sdk.erc721.nft.*</code> and <code>sdk.erc721.order.*</code>.</p>
      {"\n            "}</div>
      {"\n            "}<div className="nav-card">
      {"\n              "}<div className="nc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg></div>
      {"\n              "}<h4>Personal collection</h4>
      {"\n              "}<p>Deploy your own collection contract for a branded storefront, then mint and trade inside it. Accessed via <code>sdk.erc721.collection.*</code>.</p>
      {"\n            "}</div>
      {"\n          "}</div>
      {"\n\n          "}<p>The API surface mirrors across both. Public-collection actions hang off <code>nft</code> (mint/burn) and <code>order</code> (trade); personal-collection actions hang off <code>collection</code>, which additionally exposes <code>createCollection()</code>. ERC-1155 follows the exact same shape under <code>sdk.erc1155.*</code>.</p>
      {"\n\n          "}<h3 id="create-personal">Create a personal collection</h3>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">create-collection.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-c">// ERC-1155 shown; ERC-721 exposes the same createCollection()</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">collection</span><span className="tk-p">.</span><span className="tk-f">createCollection</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">ownerAddress</span><span className="tk-p">,</span>          <span className="tk-c">// collection creator</span>
      {"\n  "}<span className="tk-m">uri</span><span className="tk-p">,</span>                   <span className="tk-c">// token URL</span>
      {"\n  "}<span className="tk-m">description</span><span className="tk-p">,</span>           <span className="tk-c">// collection description</span>
      {"\n  "}<span className="tk-m">collectionRoyalties</span>    <span className="tk-c">// royalties received by the owner</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n\n"}<span className="tk-c">// the new contract address is emitted in ERC1155Deployed</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">collectionAddress</span> <span className="tk-p">=</span> <span className="tk-m">result</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">ERC1155Deployed</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">_tokenAddress</span><span className="tk-p">;</span></code></pre>
      {"\n          "}</div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="quickstart" href="#quickstart"><div className="df-dir">Previous</div><div className="df-ttl">← Quickstart</div></a>
      {"\n            "}<a className="next" data-goto="erc721" href="#erc721"><div className="df-dir">Next</div><div className="df-ttl">SDK · ERC-721 →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 OVERVIEW ===================== */}<section className="doc-section" id="sec-erc721" data-key="erc721">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Overview</div>
      {"\n          "}<h1>ERC-721 functions</h1>
      {"\n          "}<p className="lead">The classic non-fungible standard — one-of-one collectibles, art and tickets. The full mint → trade → auction lifecycle is available through the same typed SDK, in both public and personal collections.</p>
      {"\n\n          "}<div className="pill-row">
      {"\n            "}<span className="pill">sdk.erc721.nft.*</span>
      {"\n            "}<span className="pill">sdk.erc721.order.*</span>
      {"\n            "}<span className="pill">sdk.erc721.collection.*</span>
      {"\n          "}</div>
      {"\n\n          "}<h2 id="erc721-surface">Function surface</h2>
      {"\n          "}<p>Public-collection minting/burning lives under <code>nft</code>, trading lives under <code>order</code>, and personal-collection actions live under <code>collection</code>.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">erc721.d.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-c">// public collection — mint / burn / read</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">()</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">burn</span><span className="tk-p">()</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">fetchTokenURI</span><span className="tk-p">()</span>
      {"\n\n"}<span className="tk-c">// trading — shared order book</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">sellNFT</span><span className="tk-p">()</span>        <span className="tk-c">// fixed-price listing</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">buyNFT</span><span className="tk-p">()</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">sellNFTByBid</span><span className="tk-p">()</span>    <span className="tk-c">// auction</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">bid</span><span className="tk-p">()</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">acceptBid</span><span className="tk-p">()</span>       <span className="tk-c">// execute a bid</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">withdrawBid</span><span className="tk-p">()</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">cancelSale</span><span className="tk-p">()</span>
      {"\n\n"}<span className="tk-c">// personal collection — same lifecycle, your own contract</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">collection</span><span className="tk-p">.</span><span className="tk-f">createCollection</span><span className="tk-p">()</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">collection</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">()</span> <span className="tk-p">/</span> <span className="tk-f">sellNFTByBid</span><span className="tk-p">()</span> <span className="tk-p">/</span> <span className="tk-f">bid</span><span className="tk-p">()</span> <span className="tk-p">/</span> <span className="tk-f">buyNFT</span><span className="tk-p">()</span> …</code></pre>
      {"\n          "}</div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="collections" href="#collections"><div className="df-dir">Previous</div><div className="df-ttl">← Collections</div></a>
      {"\n            "}<a className="next" data-goto="erc721-mint" href="#erc721-mint"><div className="df-dir">Next</div><div className="df-ttl">Mint →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 MINT ===================== */}<section className="doc-section" id="sec-erc721-mint" data-key="erc721-mint">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Mint</div>
      {"\n          "}<h1>Mint</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.nft.</span><span className="meth">mint</span>(web3, chainId, minterAddress, tokenURI, royalties)</div>
      {"\n          "}<p>Mints a single ERC-721 token into the public collection with creator royalties baked in. Returns the on-chain transaction receipt.</p>
      {"\n\n          "}<div className="tbl-wrap"><table className="params">
      {"\n            "}<thead><tr><th>Parameter</th><th>Description</th></tr></thead>
      {"\n            "}<tbody>
      {"\n              "}<tr><td>web3</td><td>Web3 instance configured with the wallet provider.</td></tr>
      {"\n              "}<tr><td>chainId</td><td>Network id of the blockchain.</td></tr>
      {"\n              "}<tr><td>minterAddress</td><td>Address of the minter / creator.</td></tr>
      {"\n              "}<tr><td>tokenURI</td><td>Metadata URI string (e.g. an <code>ipfs://</code> link).</td></tr>
      {"\n              "}<tr><td>royalties</td><td>Nested array <span className="ty">[[recipient, fraction], …]</span> — at most 10 recipients.</td></tr>
      {"\n            "}</tbody>
      {"\n          "}</table></div>
      {"\n\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">mint.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">minterAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">tokenURI</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">royalties</span>   <span className="tk-c">// [[addr, 500]] → 5%</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n\n"}<span className="tk-c">// tokenId is emitted in RoyaltiesSetForTokenId</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">tokenId</span> <span className="tk-p">=</span> <span className="tk-m">result</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">RoyaltiesSetForTokenId</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">tokenId</span><span className="tk-p">;</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<p>Emitted events:</p>
      {"\n          "}<div className="kv-row"><span className="kv-chip">RoyaltiesSetForTokenId</span></div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721" href="#erc721"><div className="df-dir">Previous</div><div className="df-ttl">← ERC-721 overview</div></a>
      {"\n            "}<a className="next" data-goto="erc721-batch" href="#erc721-batch"><div className="df-dir">Next</div><div className="df-ttl">Batch mint →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 BATCH MINT ===================== */}<section className="doc-section" id="sec-erc721-batch" data-key="erc721-batch">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Batch mint</div>
      {"\n          "}<h1>Batch mint</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.nft.</span><span className="meth">batchMint</span>(web3, chainId, minterAddress, tokenURIs, royalties)</div>
      {"\n          "}<p>Mint many tokens in a single transaction — ideal for NFT drops. Pass an array of token URIs and per-token royalties. Each minted token emits its own <code>RoyaltiesSetForTokenId</code> so you can collect every new <code>tokenId</code> from the receipt.</p>
      {"\n\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">batch-mint.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">batchMint</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">minterAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-p">[</span><span className="tk-s">"ipfs://…/1.json"</span><span className="tk-p">,</span> <span className="tk-s">"ipfs://…/2.json"</span><span className="tk-p">],</span>  <span className="tk-c">// tokenURIs</span>
      {"\n  "}<span className="tk-p">[[[</span><span className="tk-m">creator</span><span className="tk-p">,</span> <span className="tk-n">500</span><span className="tk-p">]],</span> <span className="tk-p">[[</span><span className="tk-m">creator</span><span className="tk-p">,</span> <span className="tk-n">500</span><span className="tk-p">]]]</span>       <span className="tk-c">// per-token royalties</span>
      {"\n"}<span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="callout">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
      {"\n            "}<div>Batch minting mirrors <code>mint()</code> but accepts arrays. Pin all your assets to IPFS first (see <a className="ilink" data-goto="ipfs" href="#ipfs">IPFS &amp; Pinata</a>), then pass the resulting URIs.</div>
      {"\n          "}</div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-mint" href="#erc721-mint"><div className="df-dir">Previous</div><div className="df-ttl">← Mint</div></a>
      {"\n            "}<a className="next" data-goto="erc721-burn" href="#erc721-burn"><div className="df-dir">Next</div><div className="df-ttl">Burn →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 BURN ===================== */}<section className="doc-section" id="sec-erc721-burn" data-key="erc721-burn">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Burn</div>
      {"\n          "}<h1>Burn</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.nft.</span><span className="meth">burn</span>(web3, chainId, ownerAddress, tokenId)</div>
      {"\n          "}<p>Permanently destroys the token associated with <code>tokenId</code>.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">burn.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">burn</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">ownerAddress</span><span className="tk-p">,</span>   <span className="tk-c">// token owner</span>
      {"\n  "}<span className="tk-m">tokenId</span>         <span className="tk-c">// id of token to burn</span>
      {"\n"}<span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-batch" href="#erc721-batch"><div className="df-dir">Previous</div><div className="df-ttl">← Batch mint</div></a>
      {"\n            "}<a className="next" data-goto="erc721-sell" href="#erc721-sell"><div className="df-dir">Next</div><div className="df-ttl">Sell →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 SELL ===================== */}<section className="doc-section" id="sec-erc721-sell" data-key="erc721-sell">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Sell</div>
      {"\n          "}<h1>Sell (fixed price)</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.order.</span><span className="meth">sellNFT</span>(web3, chainId, tokenId, tokenPrice, ownerAddress)</div>
      {"\n          "}<p>Lists a token for a fixed price on the shared order book. Emits <code>TokenMetaReturn</code>, from which you can read the <code>saleId</code> and full listing metadata.</p>
      {"\n\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">sell.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">sellNFT</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">tokenId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">tokenPrice</span><span className="tk-p">,</span>     <span className="tk-c">// selling price</span>
      {"\n  "}<span className="tk-m">ownerAddress</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n\n"}<span className="tk-c">// listing metadata (incl. saleId) is on TokenMetaReturn</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">meta</span> <span className="tk-p">=</span> <span className="tk-m">result</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">TokenMetaReturn</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">data</span><span className="tk-p">;</span>
      {"\n"}<span className="tk-c">{"// meta \u2192 { saleId, price, currentOwner, directSale, collectionAddress, \u2026 }"}</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="kv-row"><span className="kv-chip">TokenMetaReturn</span></div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-burn" href="#erc721-burn"><div className="df-dir">Previous</div><div className="df-ttl">← Burn</div></a>
      {"\n            "}<a className="next" data-goto="erc721-buy" href="#erc721-buy"><div className="df-dir">Next</div><div className="df-ttl">Buy →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 BUY ===================== */}<section className="doc-section" id="sec-erc721-buy" data-key="erc721-buy">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Buy</div>
      {"\n          "}<h1>Buy</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.order.</span><span className="meth">buyNFT</span>(web3, chainId, saleId, buyerAddress, price)</div>
      {"\n          "}<p>Fills a fixed-price listing by its <code>saleId</code>. On success, token ownership and the price money are transferred between the new and previous owner respectively.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">buy.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">buyNFT</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">saleId</span><span className="tk-p">,</span>         <span className="tk-c">// from the listing's TokenMetaReturn</span>
      {"\n  "}<span className="tk-m">buyerAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">price</span>
      {"\n"}<span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-sell" href="#erc721-sell"><div className="df-dir">Previous</div><div className="df-ttl">← Sell</div></a>
      {"\n            "}<a className="next" data-goto="erc721-auction" href="#erc721-auction"><div className="df-dir">Next</div><div className="df-ttl">Auction →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 AUCTION ===================== */}<section className="doc-section" id="sec-erc721-auction" data-key="erc721-auction">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Auction</div>
      {"\n          "}<h1>Auction</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.order.</span><span className="meth">sellNFTByBid</span>(web3, chainId, tokenId, initialPrice, ownerAddress, auctionTime)</div>
      {"\n          "}<p>Puts a token up for a timed auction. Emits the same <code>TokenMetaReturn</code> event as <code>sellNFT</code>; items on auction can then be bid on by others using the <code>saleId</code>.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">auction.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">sellNFTByBid</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">tokenId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">initialPrice</span><span className="tk-p">,</span>   <span className="tk-c">// starting bid</span>
      {"\n  "}<span className="tk-m">ownerAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-n">120</span>             <span className="tk-c">// auctionTime — seconds (120 = 120s)</span>
      {"\n"}<span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="kv-row"><span className="kv-chip">TokenMetaReturn</span></div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-buy" href="#erc721-buy"><div className="df-dir">Previous</div><div className="df-ttl">← Buy</div></a>
      {"\n            "}<a className="next" data-goto="erc721-bid" href="#erc721-bid"><div className="df-dir">Next</div><div className="df-ttl">Bid →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 BID ===================== */}<section className="doc-section" id="sec-erc721-bid" data-key="erc721-bid">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Bid</div>
      {"\n          "}<h1>Bid</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.order.</span><span className="meth">bid</span>(web3, chainId, saleId, bidderAddress, bidPrice)</div>
      {"\n          "}<p>Places a bid on an item that is on auction. Emits <code>BidOrderReturn</code> describing the bid.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">bid.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">bid</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">saleId</span><span className="tk-p">,</span>          <span className="tk-c">// item on auction</span>
      {"\n  "}<span className="tk-m">bidderAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">bidPrice</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n\n"}<span className="tk-k">const</span> <span className="tk-m">bid</span> <span className="tk-p">=</span> <span className="tk-m">result</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">BidOrderReturn</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">bid</span><span className="tk-p">;</span>
      {"\n"}<span className="tk-c">{"// bid \u2192 { saleId, price, buyerAddress, sellerAddress, withdrawn }"}</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="kv-row"><span className="kv-chip">BidOrderReturn</span></div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-auction" href="#erc721-auction"><div className="df-dir">Previous</div><div className="df-ttl">← Auction</div></a>
      {"\n            "}<a className="next" data-goto="erc721-execbid" href="#erc721-execbid"><div className="df-dir">Next</div><div className="df-ttl">Execute bid →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 EXECUTE BID ===================== */}<section className="doc-section" id="sec-erc721-execbid" data-key="erc721-execbid">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Execute bid</div>
      {"\n          "}<h1>Execute bid</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.order.</span><span className="meth">acceptBid</span>(web3, chainId, saleId, bidId, sellerAddress)</div>
      {"\n          "}<p>The seller accepts a specific bid before the auction ends. Emits <code>BidExecuted</code>, whose <code>price</code> is the amount at which the bid was accepted.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">execute-bid.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">acceptBid</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">saleId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">bidId</span><span className="tk-p">,</span>          <span className="tk-c">// the bid the seller accepts</span>
      {"\n  "}<span className="tk-m">sellerAddress</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n\n"}<span className="tk-k">const</span> <span className="tk-m">soldFor</span> <span className="tk-p">=</span> <span className="tk-m">result</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">BidExecuted</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">price</span><span className="tk-p">;</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="kv-row"><span className="kv-chip">BidExecuted</span></div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-bid" href="#erc721-bid"><div className="df-dir">Previous</div><div className="df-ttl">← Bid</div></a>
      {"\n            "}<a className="next" data-goto="erc721-withdrawbid" href="#erc721-withdrawbid"><div className="df-dir">Next</div><div className="df-ttl">Withdraw bid →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 WITHDRAW BID ===================== */}<section className="doc-section" id="sec-erc721-withdrawbid" data-key="erc721-withdrawbid">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Withdraw bid</div>
      {"\n          "}<h1>Withdraw bid</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.order.</span><span className="meth">withdrawBid</span>(web3, chainId, saleId, bidId, buyerAddress)</div>
      {"\n          "}<p>A bidder withdraws their bid from an auction. On success the bid is removed and the money is transferred back to the bidder.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">withdraw-bid.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">withdrawBid</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">saleId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">bidId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">buyerAddress</span>
      {"\n"}<span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-execbid" href="#erc721-execbid"><div className="df-dir">Previous</div><div className="df-ttl">← Execute bid</div></a>
      {"\n            "}<a className="next" data-goto="erc721-cancel" href="#erc721-cancel"><div className="df-dir">Next</div><div className="df-ttl">Cancel sale →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 CANCEL ===================== */}<section className="doc-section" id="sec-erc721-cancel" data-key="erc721-cancel">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Cancel sale</div>
      {"\n          "}<h1>Cancel sale</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.order.</span><span className="meth">cancelSale</span>(web3, chainId, sellerAddress, saleId)</div>
      {"\n          "}<p>Removes an item that was on direct sale or auction from sale.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">cancel-sale.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">cancelSale</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">sellerAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">saleId</span>
      {"\n"}<span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-withdrawbid" href="#erc721-withdrawbid"><div className="df-dir">Previous</div><div className="df-ttl">← Withdraw bid</div></a>
      {"\n            "}<a className="next" data-goto="erc721-collection" href="#erc721-collection"><div className="df-dir">Next</div><div className="df-ttl">Personal collections →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 PERSONAL COLLECTION ===================== */}<section className="doc-section" id="sec-erc721-collection" data-key="erc721-collection">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Personal collections</div>
      {"\n          "}<h1>Personal collections</h1>
      {"\n          "}<p className="lead">Deploy your own ERC-721 collection contract and run the full lifecycle inside it via <code>sdk.erc721.collection.*</code>. The methods mirror the public-collection ones, with the collection address threaded through where needed.</p>
      {"\n\n          "}<h2 id="erc721-coll-mint">Mint into a collection</h2>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.collection.</span><span className="meth">mint</span>(web3, chainId, collectionAddress, tokenURI, minterAddress, royalties)</div>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">collection-mint.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">collection</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">collectionAddress</span><span className="tk-p">,</span>   <span className="tk-c">// where the item is minted</span>
      {"\n  "}<span className="tk-m">tokenURI</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">minterAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">royalties</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n\n"}<span className="tk-k">const</span> <span className="tk-m">tokenId</span> <span className="tk-p">=</span> <span className="tk-m">result</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">RoyaltiesSetForTokenId</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">tokenId</span><span className="tk-p">;</span></code></pre>
      {"\n          "}</div>
      {"\n\n          "}<h2 id="erc721-coll-trade">Auction &amp; bid in a collection</h2>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.collection.</span><span className="meth">sellNFTByBid</span>(web3, chainId, collectionAddress, tokenId, initialPrice, ownerAddress, auctionTime)</div>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">collection-auction.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-c">// auction inside your collection…</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">a</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">collection</span><span className="tk-p">.</span><span className="tk-f">sellNFTByBid</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span> <span className="tk-m">collectionAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">tokenId</span><span className="tk-p">,</span> <span className="tk-m">initialPrice</span><span className="tk-p">,</span> <span className="tk-m">ownerAddress</span><span className="tk-p">,</span> <span className="tk-n">120</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">saleId</span> <span className="tk-p">=</span> <span className="tk-m">a</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">TokenMetaReturn</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">data</span><span className="tk-p">;</span>
      {"\n\n"}<span className="tk-c">// …then bid on it</span>
      {"\n"}<span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">collection</span><span className="tk-p">.</span><span className="tk-f">bid</span><span className="tk-p">(</span><span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span> <span className="tk-m">saleId</span><span className="tk-p">,</span> <span className="tk-m">bidderAddress</span><span className="tk-p">,</span> <span className="tk-m">bidPrice</span><span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="callout">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
      {"\n            "}<div>The rest of the lifecycle — <code>buyNFT()</code>, <code>acceptBid()</code>, <code>withdrawBid()</code>, <code>cancelSale()</code> — is identical to the public-collection <code>order.*</code> functions, just namespaced under <code>collection</code>.</div>
      {"\n          "}</div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-cancel" href="#erc721-cancel"><div className="df-dir">Previous</div><div className="df-ttl">← Cancel sale</div></a>
      {"\n            "}<a className="next" data-goto="erc721-uri" href="#erc721-uri"><div className="df-dir">Next</div><div className="df-ttl">Token URI →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC721 TOKEN URI ===================== */}<section className="doc-section" id="sec-erc721-uri" data-key="erc721-uri">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-721</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Token URI</div>
      {"\n          "}<h1>Fetch token URI</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc721.nft.</span><span className="meth">fetchTokenURI</span>(web3, chainId, tokenId)</div>
      {"\n          "}<p>Reads the metadata URI for a token — resolve it (e.g. through an IPFS gateway) to load the asset's JSON metadata and media.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">token-uri.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">uri</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">fetchTokenURI</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">tokenId</span>
      {"\n"}<span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-collection" href="#erc721-collection"><div className="df-dir">Previous</div><div className="df-ttl">← Personal collections</div></a>
      {"\n            "}<a className="next" data-goto="erc1155" href="#erc1155"><div className="df-dir">Next</div><div className="df-ttl">SDK · ERC-1155 →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC1155 OVERVIEW ===================== */}<section className="doc-section" id="sec-erc1155" data-key="erc1155">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-1155</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Overview</div>
      {"\n          "}<h1>ERC-1155 functions</h1>
      {"\n          "}<p className="lead">Fungible and non-fungible editions from a single contract — ideal for game items, passes and semi-fungible drops. The full mint-to-auction lifecycle is available with the same API surface as ERC-721, plus a token <code>amount</code> on every call.</p>
      {"\n\n          "}<div className="pill-row">
      {"\n            "}<span className="pill">sdk.erc1155.nft.*</span>
      {"\n            "}<span className="pill">sdk.erc1155.order.*</span>
      {"\n            "}<span className="pill">sdk.erc1155.collection.*</span>
      {"\n          "}</div>
      {"\n\n          "}<h2 id="erc1155-surface">Function surface</h2>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">erc1155.d.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-c">// public collection</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">()</span> <span className="tk-p">/</span> <span className="tk-f">burn</span><span className="tk-p">()</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">sellNFT</span><span className="tk-p">()</span> <span className="tk-p">/</span> <span className="tk-f">buyNFT</span><span className="tk-p">()</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">sellNFTByBid</span><span className="tk-p">()</span>   <span className="tk-c">// auction</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">bid</span><span className="tk-p">()</span> <span className="tk-p">/</span> <span className="tk-f">acceptBid</span><span className="tk-p">()</span> <span className="tk-p">/</span> <span className="tk-f">withdrawBid</span><span className="tk-p">()</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">cancelSale</span><span className="tk-p">()</span>
      {"\n\n"}<span className="tk-c">// personal collection</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">collection</span><span className="tk-p">.</span><span className="tk-f">createCollection</span><span className="tk-p">()</span>
      {"\n"}<span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">collection</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">()</span> <span className="tk-p">/</span> <span className="tk-f">sellNFT</span><span className="tk-p">()</span> <span className="tk-p">/</span> <span className="tk-f">bid</span><span className="tk-p">()</span> …</code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc721-uri" href="#erc721-uri"><div className="df-dir">Previous</div><div className="df-ttl">← ERC-721 Token URI</div></a>
      {"\n            "}<a className="next" data-goto="erc1155-mint" href="#erc1155-mint"><div className="df-dir">Next</div><div className="df-ttl">Mint →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC1155 MINT ===================== */}<section className="doc-section" id="sec-erc1155-mint" data-key="erc1155-mint">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-1155</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Mint</div>
      {"\n          "}<h1>Mint (with royalties)</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc1155.nft.</span><span className="meth">mint</span>(web3, chainId, minterAddress, tokenAmount, tokenURI, royalties)</div>
      {"\n          "}<p>Mints <code>tokenAmount</code> copies of an ERC-1155 token. Returns the receipt; two events are emitted — <code>TransferSingle</code> (the mint) and <code>RoyaltiesSetForTokenId</code> (the royalty config).</p>
      {"\n\n          "}<div className="tbl-wrap"><table className="params">
      {"\n            "}<thead><tr><th>Parameter</th><th>Description</th></tr></thead>
      {"\n            "}<tbody>
      {"\n              "}<tr><td>tokenAmount</td><td>Number of copies to mint.</td></tr>
      {"\n              "}<tr><td>tokenURI</td><td>Metadata URI string.</td></tr>
      {"\n              "}<tr><td>royalties</td><td>Nested array <span className="ty">[[recipient, fraction], …]</span> — at most 10 recipients.</td></tr>
      {"\n            "}</tbody>
      {"\n          "}</table></div>
      {"\n\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">erc1155-mint.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">minterAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-n">5</span><span className="tk-p">,</span>                        <span className="tk-c">// tokenAmount</span>
      {"\n  "}<span className="tk-m">tokenURI</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-p">[[</span><span className="tk-m">creator</span><span className="tk-p">,</span> <span className="tk-s">"100"</span><span className="tk-p">]]</span>          <span className="tk-c">// royalties (max 10 recipients)</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n\n"}<span className="tk-k">const</span> <span className="tk-m">transfer</span> <span className="tk-p">=</span> <span className="tk-m">result</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">TransferSingle</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">;</span>
      {"\n"}<span className="tk-c">{"// transfer \u2192 { to, tokenId, value, \u2026 }"}</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="kv-row"><span className="kv-chip">TransferSingle</span><span className="kv-chip">RoyaltiesSetForTokenId</span></div>
      {"\n          "}<div className="callout">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
      {"\n            "}<div><b>Royalties shape.</b> <code>[[recipient1, fraction1], …, [recipientN, fractionN]]</code> where <b>N ≤ 10</b>. A token minted on a given network can be listed for sale or auction on that same network.</div>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc1155" href="#erc1155"><div className="df-dir">Previous</div><div className="df-ttl">← ERC-1155 overview</div></a>
      {"\n            "}<a className="next" data-goto="erc1155-trade" href="#erc1155-trade"><div className="df-dir">Next</div><div className="df-ttl">Sell · Buy · Auction →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC1155 TRADE ===================== */}<section className="doc-section" id="sec-erc1155-trade" data-key="erc1155-trade">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-1155</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Sell · Buy · Auction</div>
      {"\n          "}<h1>Sell, buy &amp; auction</h1>
      {"\n          "}<p className="lead">Identical to ERC-721 trading, with a token <code>amount</code> on every call since editions are semi-fungible.</p>
      {"\n\n          "}<h2 id="erc1155-sell">Sell</h2>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc1155.order.</span><span className="meth">sellNFT</span>(web3, chainId, tokenId, tokenPrice, ownerAddress, tokenAmount)</div>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">erc1155-sell.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">sellNFT</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">tokenId</span><span className="tk-p">,</span> <span className="tk-m">tokenPrice</span><span className="tk-p">,</span> <span className="tk-m">ownerAddress</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-n">10</span>              <span className="tk-c">// tokenAmount to sell</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">meta</span> <span className="tk-p">=</span> <span className="tk-m">result</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">TokenMetaReturn</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">data</span><span className="tk-p">;</span>
      {"\n"}<span className="tk-c">{"// meta \u2192 { saleId, price, numberOfTokens, collectionAddress, \u2026 }"}</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="kv-row"><span className="kv-chip">TokenMetaReturn</span></div>
      {"\n\n          "}<h2 id="erc1155-buy">Buy</h2>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc1155.order.</span><span className="meth">buyNFT</span>(web3, chainId, saleId, buyerAddress, price, amount)</div>
      {"\n          "}<h2 id="erc1155-auction">Auction</h2>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc1155.order.</span><span className="meth">sellNFTByBid</span>(web3, chainId, tokenId, initialPrice, ownerAddress, amount)</div>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">erc1155-buy-auction.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-c">// fill part of a listing</span>
      {"\n"}<span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">buyNFT</span><span className="tk-p">(</span><span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span> <span className="tk-m">saleId</span><span className="tk-p">,</span> <span className="tk-m">buyerAddress</span><span className="tk-p">,</span> <span className="tk-m">price</span><span className="tk-p">,</span> <span className="tk-n">3</span><span className="tk-p">);</span>
      {"\n\n"}<span className="tk-c">// auction an amount of the edition</span>
      {"\n"}<span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">sellNFTByBid</span><span className="tk-p">(</span><span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span> <span className="tk-m">tokenId</span><span className="tk-p">,</span> <span className="tk-m">initialPrice</span><span className="tk-p">,</span> <span className="tk-m">ownerAddress</span><span className="tk-p">,</span> <span className="tk-n">10</span><span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc1155-mint" href="#erc1155-mint"><div className="df-dir">Previous</div><div className="df-ttl">← Mint</div></a>
      {"\n            "}<a className="next" data-goto="erc1155-bid" href="#erc1155-bid"><div className="df-dir">Next</div><div className="df-ttl">Bid &amp; execute →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC1155 BID ===================== */}<section className="doc-section" id="sec-erc1155-bid" data-key="erc1155-bid">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-1155</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Bid &amp; execute</div>
      {"\n          "}<h1>Bid &amp; execute bid</h1>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc1155.order.</span><span className="meth">bid</span>(web3, chainId, saleId, buyerAddress, bidPrice, amount)</div>
      {"\n          "}<p>Bid on an ERC-1155 auction (with the token <code>amount</code>). Emits <code>BidOrderReturn</code>. The seller later calls <code>acceptBid</code> to settle.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">erc1155-bid.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">const</span> <span className="tk-m">result</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">bid</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">saleId</span><span className="tk-p">,</span> <span className="tk-m">buyerAddress</span><span className="tk-p">,</span> <span className="tk-m">bidPrice</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-n">10</span>              <span className="tk-c">// amount of token</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">bid</span> <span className="tk-p">=</span> <span className="tk-m">result</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">BidOrderReturn</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">bid</span><span className="tk-p">;</span>
      {"\n\n"}<span className="tk-c">// seller accepts before auction end → BidExecuted</span>
      {"\n"}<span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">acceptBid</span><span className="tk-p">(</span><span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span> <span className="tk-m">saleId</span><span className="tk-p">,</span> <span className="tk-m">bidId</span><span className="tk-p">,</span> <span className="tk-m">sellerAddress</span><span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="kv-row"><span className="kv-chip">BidOrderReturn</span><span className="kv-chip">BidExecuted</span></div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc1155-trade" href="#erc1155-trade"><div className="df-dir">Previous</div><div className="df-ttl">← Sell · Buy · Auction</div></a>
      {"\n            "}<a className="next" data-goto="erc1155-collection" href="#erc1155-collection"><div className="df-dir">Next</div><div className="df-ttl">Personal collections →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== ERC1155 COLLECTION ===================== */}<section className="doc-section" id="sec-erc1155-collection" data-key="erc1155-collection">
      {"\n          "}<div className="crumbs"><b>SDK · ERC-1155</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Personal collections</div>
      {"\n          "}<h1>ERC-1155 personal collections</h1>
      {"\n          "}<p className="lead">Deploy your own ERC-1155 collection with <code>createCollection()</code>, then mint and trade inside it via <code>sdk.erc1155.collection.*</code>.</p>
      {"\n\n          "}<h2 id="erc1155-coll-create">Create collection</h2>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc1155.collection.</span><span className="meth">createCollection</span>(web3, chainId, ownerAddress, uri, description, collectionRoyalties)</div>
      {"\n          "}<h2 id="erc1155-coll-mint">Mint into collection</h2>
      {"\n          "}<div className="sig"><span className="obj">sdk.erc1155.collection.</span><span className="meth">mint</span>(web3, collectionAddress, tokenId, tokenAmount, tokenURI, minterAddress, royalties)</div>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">erc1155-collection.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-c">// 1 · deploy the collection</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">c</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">collection</span><span className="tk-p">.</span><span className="tk-f">createCollection</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span> <span className="tk-m">ownerAddress</span><span className="tk-p">,</span> <span className="tk-m">uri</span><span className="tk-p">,</span> <span className="tk-m">description</span><span className="tk-p">,</span> <span className="tk-m">collectionRoyalties</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">addr</span> <span className="tk-p">=</span> <span className="tk-m">c</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">ERC1155Deployed</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">_tokenAddress</span><span className="tk-p">;</span>
      {"\n\n"}<span className="tk-c">// 2 · mint into it</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">m</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">collection</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">(</span>
      {"\n  "}<span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">addr</span><span className="tk-p">,</span> <span className="tk-m">tokenId</span><span className="tk-p">,</span> <span className="tk-n">10</span><span className="tk-p">,</span> <span className="tk-m">tokenURI</span><span className="tk-p">,</span> <span className="tk-m">minterAddress</span><span className="tk-p">,</span> <span className="tk-m">royalties</span>
      {"\n"}<span className="tk-p">);</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">newId</span> <span className="tk-p">=</span> <span className="tk-m">m</span><span className="tk-p">.</span><span className="tk-m">events</span><span className="tk-p">.</span><span className="tk-m">RoyaltiesSetForTokenId</span><span className="tk-p">.</span><span className="tk-m">returnValues</span><span className="tk-p">.</span><span className="tk-m">tokenId</span><span className="tk-p">;</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="kv-row"><span className="kv-chip">ERC1155Deployed</span><span className="kv-chip">RoyaltiesSetForTokenId</span></div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc1155-bid" href="#erc1155-bid"><div className="df-dir">Previous</div><div className="df-ttl">← Bid &amp; execute</div></a>
      {"\n            "}<a className="next" data-goto="x402" href="#x402"><div className="df-dir">Next</div><div className="df-ttl">x402 Payments →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== x402 OVERVIEW ===================== */}<section className="doc-section" id="sec-x402" data-key="x402">
      {"\n          "}<div className="crumbs"><b>x402 Payments</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> What is x402</div>
      {"\n          "}<p className="doc-eyebrow">New in 2026</p>
      {"\n          "}<h1>x402 — payments for AI agents</h1>
      {"\n          "}<p className="lead">Express Protocol now ships an optional <code>x402</code> module built on the HTTP&nbsp;402 stablecoin standard, so autonomous agents can price, authorize and settle NFT &amp; RWA purchases on their own — paying in USDC over the wire, with no human checkout and no API keys to babysit.</p>
      {"\n\n          "}<div className="pill-row">
      {"\n            "}<span className="pill">USDC stablecoin</span>
      {"\n            "}<span className="pill">Base &amp; Arbitrum</span>
      {"\n            "}<span className="pill">HTTP 402 native</span>
      {"\n            "}<span className="pill mint">opt-in module</span>
      {"\n          "}</div>
      {"\n\n          "}<div className="callout new">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
      {"\n            "}<div>x402 revives the long-dormant <b>HTTP 402 "Payment Required"</b> status code as a real settlement rail. Instead of a human clicking through a checkout, a protected endpoint answers a request with <code>402</code> and a price, and the caller attaches a signed stablecoin payment to retry — a natural fit for machine-to-machine commerce.</div>
      {"\n          "}</div>
      {"\n\n          "}<h2 id="x402-how">How it fits Express</h2>
      {"\n          "}<p>The module plugs into the same SDK you already use. When an agent (or any client) tries to buy a listing, the module can settle the purchase inline by attaching a USDC payment, then the protocol clears funds and transfers the asset into the buyer's wallet. Nothing about your minting, listing or order-book code changes — payment is just another method on <code>buy</code>.</p>
      {"\n\n          "}<div className="callout" style={{ marginBottom: "10px" }}><svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg><div><b>1 · Agent requests an asset.</b> It hits a protected endpoint and receives an HTTP 402 response carrying the price.</div></div>
      {"\n          "}<div className="callout" style={{ marginBottom: "10px" }}><svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg><div><b>2 · x402 signs a USDC payment.</b> The module attaches a stablecoin payment header — no seat at a checkout page, no stored card.</div></div>
      {"\n          "}<div className="callout"><svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg><div><b>3 · Protocol settles &amp; transfers.</b> Funds clear on Base or Arbitrum and the NFT/RWA lands in the agent's wallet.</div></div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="erc1155-collection" href="#erc1155-collection"><div className="df-dir">Previous</div><div className="df-ttl">← ERC-1155 collections</div></a>
      {"\n            "}<a className="next" data-goto="x402-setup" href="#x402-setup"><div className="df-dir">Next</div><div className="df-ttl">Enabling the module →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== x402 SETUP ===================== */}<section className="doc-section" id="sec-x402-setup" data-key="x402-setup">
      {"\n          "}<div className="crumbs"><b>x402 Payments</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Enabling</div>
      {"\n          "}<h1>Enabling the x402 module</h1>
      {"\n          "}<p className="lead">x402 is opt-in. Import it and register it in the <code>modules</code> array when you create the SDK. Point the SDK at an x402-ready chain — <strong>Base (8453)</strong> or <strong>Arbitrum One (42161)</strong> — and choose the settlement asset.</p>
      {"\n\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">sdk-x402.ts</span><span className="tag">pandora-express/x402</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-k">import</span> <span className="tk-p">{"{"}</span> <span className="tk-m">createPandoraExpressSDK</span> <span className="tk-p">{"}"}</span> <span className="tk-k">from</span> <span className="tk-s">"pandora-express"</span><span className="tk-p">;</span>
      {"\n"}<span className="tk-k">import</span> <span className="tk-p">{"{"}</span> <span className="tk-m">x402</span> <span className="tk-p">{"}"}</span> <span className="tk-k">from</span> <span className="tk-s">"pandora-express/x402"</span><span className="tk-p">;</span>
      {"\n\n"}<span className="tk-k">const</span> <span className="tk-m">sdk</span> <span className="tk-p">=</span> <span className="tk-f">createPandoraExpressSDK</span><span className="tk-p">{"({"}</span>
      {"\n  "}<span className="tk-m">signer</span><span className="tk-p">:</span> <span className="tk-m">agentWallet</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">chainId</span><span className="tk-p">:</span> <span className="tk-n">8453</span><span className="tk-p">,</span>                     <span className="tk-c">// Base</span>
      {"\n  "}<span className="tk-m">modules</span><span className="tk-p">:</span> <span className="tk-p">[</span><span className="tk-f">x402</span><span className="tk-p">{"({"}</span> <span className="tk-m">asset</span><span className="tk-p">:</span> <span className="tk-s">"USDC"</span> <span className="tk-p">{"})],"}</span>  <span className="tk-c">// settlement asset</span>
      {"\n"}<span className="tk-p">{"});"}</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="callout">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
      {"\n            "}<div>Because it's a module, x402 is entirely optional — omit it and the SDK behaves exactly as before. Add it and you unlock the <code>paymentMethod: 'x402'</code> flag on purchases.</div>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="x402" href="#x402"><div className="df-dir">Previous</div><div className="df-ttl">← What is x402</div></a>
      {"\n            "}<a className="next" data-goto="x402-agents" href="#x402-agents"><div className="df-dir">Next</div><div className="df-ttl">Agent checkout flow →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== x402 AGENTS ===================== */}<section className="doc-section" id="sec-x402-agents" data-key="x402-agents">
      {"\n          "}<div className="crumbs"><b>x402 Payments</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Agent checkout</div>
      {"\n          "}<h1>Agent checkout flow</h1>
      {"\n          "}<p className="lead">With the module registered, an agent buys exactly like a human would — except payment is handled inline. Pass <code>paymentMethod: 'x402'</code> and the module prices, authorizes and settles the purchase in USDC.</p>
      {"\n\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">agent-checkout.ts</span><span className="tag">@pandora-express/x402</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-c">// the agent buys — the x402 module settles payment inline</span>
      {"\n"}<span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">buyNFT</span><span className="tk-p">{"({"}</span>
      {"\n  "}<span className="tk-m">saleId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">buyerAddress</span><span className="tk-p">:</span> <span className="tk-m">agentWallet</span><span className="tk-p">.</span><span className="tk-m">address</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">paymentMethod</span><span className="tk-p">:</span> <span className="tk-s">"x402"</span><span className="tk-p">,</span>   <span className="tk-c">// HTTP 402 · USDC on Base</span>
      {"\n"}<span className="tk-p">{"});"}</span>
      {"\n\n"}<span className="tk-c">// works for RWA & ERC-1155 listings too</span>
      {"\n"}<span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc1155</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">buyNFT</span><span className="tk-p">{"({"}</span>
      {"\n  "}<span className="tk-m">saleId</span><span className="tk-p">,</span> <span className="tk-m">amount</span><span className="tk-p">:</span> <span className="tk-n">1</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">buyerAddress</span><span className="tk-p">:</span> <span className="tk-m">agentWallet</span><span className="tk-p">.</span><span className="tk-m">address</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">paymentMethod</span><span className="tk-p">:</span> <span className="tk-s">"x402"</span><span className="tk-p">,</span>
      {"\n"}<span className="tk-p">{"});"}</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="callout new">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
      {"\n            "}<div><b>Autonomous end to end.</b> No human checkout, no card on file, no API key rotation — the agent's wallet signs a USDC payment, funds settle on Base or Arbitrum, and the asset transfers in a single call.</div>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="x402-setup" href="#x402-setup"><div className="df-dir">Previous</div><div className="df-ttl">← Enabling the module</div></a>
      {"\n            "}<a className="next" data-goto="ipfs" href="#ipfs"><div className="df-dir">Next</div><div className="df-ttl">IPFS &amp; Pinata →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== IPFS / PINATA ===================== */}<section className="doc-section" id="sec-ipfs" data-key="ipfs">
      {"\n          "}<div className="crumbs"><b>Guides &amp; Storage</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> IPFS &amp; Pinata</div>
      {"\n          "}<h1>IPFS &amp; Pinata</h1>
      {"\n          "}<p className="lead">NFT metadata and media belong on decentralized storage. Express ships with a Pinata integration so you can pin assets to IPFS and get back an <code>ipfs://</code> URI to use as your <code>tokenURI</code>.</p>
      {"\n\n          "}<h2 id="pin-flow">Pin, then mint</h2>
      {"\n          "}<p>The typical flow: upload your media, upload a metadata JSON that references it, then pass the resulting metadata URI into <code>mint()</code> or <code>batchMint()</code>.</p>
      {"\n          "}<div className="code-card">
      {"\n            "}<div className="code-top"><div className="dots"><i></i><i></i><i></i></div><span className="fname">pin-and-mint.ts</span><button className="copy-btn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</button></div>
      {"\n"}<pre><code><span className="tk-c">// 1 · pin media + metadata to IPFS via Pinata</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-p">{"{"}</span> <span className="tk-m">uri</span> <span className="tk-p">{"}"}</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">pinata</span><span className="tk-p">.</span><span className="tk-f">upload</span><span className="tk-p">{"({"}</span>
      {"\n  "}<span className="tk-m">name</span><span className="tk-p">:</span> <span className="tk-s">"Asset #1"</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">image</span><span className="tk-p">:</span> <span className="tk-m">file</span><span className="tk-p">,</span>          <span className="tk-c">// media to pin</span>
      {"\n  "}<span className="tk-m">attributes</span><span className="tk-p">:</span> <span className="tk-p">[…],</span>
      {"\n"}<span className="tk-p">{"});"}</span>
      {"\n"}<span className="tk-c">// uri → "ipfs://…/metadata.json"</span>
      {"\n\n"}<span className="tk-c">// 2 · mint with the pinned metadata URI</span>
      {"\n"}<span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">nft</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">(</span><span className="tk-m">web3</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">,</span> <span className="tk-m">minterAddress</span><span className="tk-p">,</span> <span className="tk-m">uri</span><span className="tk-p">,</span> <span className="tk-m">royalties</span><span className="tk-p">);</span></code></pre>
      {"\n          "}</div>
      {"\n          "}<div className="callout">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.5 0 4.8 1 6.4 2.6" /><path d="M8 12l3 3 5-6" /></svg>
      {"\n            "}<div>Express supports presigned Pinata uploads, so large media can be pushed straight to IPFS from the client without proxying bytes through your backend.</div>
      {"\n          "}</div>
      {"\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="x402-agents" href="#x402-agents"><div className="df-dir">Previous</div><div className="df-ttl">← Agent checkout</div></a>
      {"\n            "}<a className="next" data-goto="guides" href="#guides"><div className="df-dir">Next</div><div className="df-ttl">Build guides →</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n        \n        "}
      {/* ===================== GUIDES ===================== */}<section className="doc-section" id="sec-guides" data-key="guides">
      {"\n          "}<div className="crumbs"><b>Guides &amp; Storage</b> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg> Build guides</div>
      {"\n          "}<h1>Build guides</h1>
      {"\n          "}<p className="lead">End-to-end walkthroughs that build a working product on the SDK. Each pulls together minting, the shared order book, auctions and IPFS.</p>
      {"\n\n          "}<div className="card-grid">
      {"\n            "}<div className="nav-card">
      {"\n              "}<div className="nc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.3A1 1 0 0 0 5.6 19H17" /><circle cx="9" cy="21" r="1" /><circle cx="17" cy="21" r="1" /></svg></div>
      {"\n              "}<h4>NFT Marketplace</h4>
      {"\n              "}<p>Stand up a full mint-list-buy marketplace with public collections and the shared order book.</p>
      {"\n            "}</div>
      {"\n            "}<div className="nav-card">
      {"\n              "}<div className="nc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6M4.9 7l4.2 3M2 14h6M19.1 7l-4.2 3M22 14h-6M8 22l4-8 4 8" /></svg></div>
      {"\n              "}<h4>NFT Auction Market</h4>
      {"\n              "}<p>Wire up timed auctions, bidding, bid execution and withdrawals end to end.</p>
      {"\n            "}</div>
      {"\n            "}<div className="nav-card">
      {"\n              "}<div className="nc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 22l-5.5-2.5 1-6.3L3 8.9 9 8z" /></svg></div>
      {"\n              "}<h4>NFT Drop dApp</h4>
      {"\n              "}<p>Batch-mint a drop, pin assets to IPFS and open sales in a few lines of SDK code.</p>
      {"\n            "}</div>
      {"\n            "}<div className="nav-card">
      {"\n              "}<div className="nc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v6a2 2 0 0 0 0 4v6H4v-6a2 2 0 0 0 0-4z" /><path d="M13 5v2M13 11v2M13 17v2" /></svg></div>
      {"\n              "}<h4>NFT Ticket Booking dApp</h4>
      {"\n              "}<p>Use ERC-1155 editions as event tickets, with royalties and resale baked in.</p>
      {"\n            "}</div>
      {"\n          "}</div>
      {"\n\n          "}<div className="callout">
      {"\n            "}<svg className="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
      {"\n            "}<div>The complete, runnable guide sources live in the docs repo: <a className="ilink" href="https://github.com/Pandora-Finance/express-protocol-docs" target="_blank" rel="noreferrer">Pandora-Finance/express-protocol-docs</a>. Clone the <a className="ilink" href="https://github.com/Pandora-Finance/Express-Protocol-SDK" target="_blank" rel="noreferrer">SDK repo</a> to get started.</div>
      {"\n          "}</div>
      {"\n\n          "}<div className="doc-foot">
      {"\n            "}<a data-goto="ipfs" href="#ipfs"><div className="df-dir">Previous</div><div className="df-ttl">← IPFS &amp; Pinata</div></a>
      {"\n            "}<a className="next" data-goto="overview" href="#overview"><div className="df-dir">Back to</div><div className="df-ttl">Overview ↺</div></a>
      {"\n          "}</div>
      {"\n        "}</section>
      {"\n\n      "}</div>
      {"\n    "}</main>
      {"\n  "}</div>
      {"\n\n  \n"}
      {/* ============ SCRIPTS ============ */}
      <DocsRuntime />
    </>
  );
}
