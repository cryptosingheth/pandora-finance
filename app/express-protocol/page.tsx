import type { Metadata, Viewport } from 'next';

import { DesignSystemStylesheet } from '@/components/DesignSystemStylesheet';
import { InlineStyle } from '@/components/InlineStyle';
import { JsonLd } from '@/components/JsonLd';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { CopyInstallPill } from './CopyInstallPill';
import { pageCss } from './page.css';

const TITLE = 'Express Protocol — Agentic Onchain Commerce SDK | Pandora';
const DESCRIPTION =
  "Express Protocol is Pandora's open-source SDK for agentic onchain commerce — mint, trade and auction NFTs and RWAs across ERC-721, ERC-1155, ERC-404 and x402.";
const IMAGE_ALT = 'Express Protocol — the SDK for agentic onchain commerce';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/express-protocol/' },
  // A route-level `openGraph` / `twitter` object REPLACES the root layout's
  // wholesale — it is not merged field-by-field — so siteName, locale, card,
  // site and creator must be restated here or they vanish from the head.
  openGraph: {
    type: 'website',
    siteName: 'Pandora',
    locale: 'en_CA',
    title: TITLE,
    description: DESCRIPTION,
    url: '/express-protocol/',
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

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.pandora.finance/express-protocol/#software",
  "name": "Express Protocol SDK",
  "alternateName": "pandora-express",
  "url": "https://www.pandora.finance/express-protocol/",
  "description": "An open-source, MIT-licensed TypeScript SDK to mint, trade, auction and manage NFTs and real-world assets onchain without writing Solidity. Supports ERC-721, ERC-1155, ERC-404 and x402 agent payments through one interface, on a shared order book.",
  "applicationCategory": "DeveloperApplication",
  "applicationSubCategory": "Blockchain SDK",
  "operatingSystem": "Any",
  "softwareVersion": "2",
  "programmingLanguage": "TypeScript",
  "license": "https://opensource.org/licenses/MIT",
  "isAccessibleForFree": true,
  "downloadUrl": "https://www.npmjs.com/package/pandora-express",
  "installUrl": "https://www.npmjs.com/package/pandora-express",
  "codeRepository": "https://github.com/Pandora-Finance/Express-Protocol-SDK",
  "softwareHelp": {
    "@type": "CreativeWork",
    "name": "Express Protocol SDK documentation",
    "url": "https://www.pandora.finance/express-protocol/docs/",
  },
  "image": "https://www.pandora.finance/og-image.png",
  "featureList": [
    "Mint single or batch ERC-721 and ERC-1155 tokens with creator royalties",
    "Fixed-price sales, buys, timed auctions and bidding on a shared order book",
    "ERC-404 fractional NFT / ERC-20 hybrid tokens",
    "x402 agent payments: autonomous USDC settlement over HTTP 402",
    "Public and personal collection contracts",
    "IPFS metadata and media pinning via Pinata",
    "Multichain NFT indexer and unified data API",
    "ERC-4337 account abstraction and gas sponsorship",
  ],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
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
  "maintainer": {
    "@type": "Organization",
    "name": "Pandora",
    "legalName": "Aconomy Labs Inc.",
    "url": "https://www.pandora.finance",
  },
};

const softwareSourceCode = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": "pandora-express",
  "description": "Source code for the Express Protocol SDK — the open-source JavaScript/TypeScript SDK for agentic onchain commerce.",
  "codeRepository": "https://github.com/Pandora-Finance/Express-Protocol-SDK",
  "programmingLanguage": {
    "@type": "ComputerLanguage",
    "name": "TypeScript",
  },
  "license": "https://opensource.org/licenses/MIT",
  "runtimePlatform": "Node.js",
  "targetProduct": {
    "@id": "https://www.pandora.finance/express-protocol/#software",
  },
  "author": {
    "@type": "Organization",
    "name": "Pandora",
    "legalName": "Aconomy Labs Inc.",
    "url": "https://www.pandora.finance",
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.pandora.finance/express-protocol/#faq",
  "url": "https://www.pandora.finance/express-protocol/",
  "name": "Express Protocol — frequently asked questions",
  "inLanguage": "en-CA",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is x402?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "x402 is a payment standard for autonomous agents, built on the HTTP 402 Payment Required status code. When an agent requests a paid resource, the server answers 402 with a price and terms; the agent signs a stablecoin (USDC) payment, re-sends it as a payment header, and receives a 200 OK with the asset. In Express Protocol, x402 is a first-class standard alongside ERC-721, ERC-1155, and ERC-404 — so agents can quote, pay, and settle onchain without a human at a checkout.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need to write Solidity to use Express Protocol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Express wraps a suite of audited smart contracts behind a fully typed TypeScript SDK. You plug in a viem/web3 signer and call methods like mint(), sellNFT(), and buy() — the SDK handles the ABIs, encoding, and onchain calls for you.",
      },
    },
    {
      "@type": "Question",
      "name": "Which token standards are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Four: ERC-721 (unique NFTs), ERC-1155 (multi-token editions), ERC-404 (fractional NFT/ERC-20 hybrids), and x402 (agent-to-agent payments). All four are reached through the same interface, so the API surface stays consistent as you move between them.",
      },
    },
    {
      "@type": "Question",
      "name": "Which chains does it run on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Express is rebuilt for today's onchain stack and targets low-fee L2s — Base, Arbitrum, and Optimism — with first-class viem support and ERC-4337 account abstraction for gasless, agent-friendly flows. x402 settlements clear in USDC on Base or Arbitrum.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Express Protocol open source?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — end to end and MIT-licensed. The SDK ships as pandora-express on npm, and the SDK, its docs, and the smart contracts underneath are all public on GitHub. Inspect every line, open an issue, or send a PR.",
      },
    },
  ],
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
  ],
};

export default function ExpressProtocolPage() {
  return (
    <>
      <DesignSystemStylesheet />
      <InlineStyle css={pageCss} />
      <JsonLd data={softwareApplication} />
      <JsonLd data={softwareSourceCode} />
      <JsonLd data={faqPage} />
      <JsonLd data={breadcrumbs} />
      {"\n\n  \n  "}
      {/* ============ NAV ============ */}<nav className="ep-nav">
      {"\n    "}<div className="container nav-inner">
      {"\n      "}<a className="brand" href="#top" aria-label="Express Protocol home">
      {"\n        "}<img src="/assets/logos/ExpressProtocol_White.png" alt="Express Protocol" />
      {"\n      "}</a>
      {"\n      "}<a className="backhub" href="/" title="Back to Pandora hub">
      {"\n        "}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      {"\n        Pandora\n      "}</a>
      {"\n      "}<div className="nlinks">
      {"\n        "}<a className="nlink docs" href="/express-protocol/docs/">Docs</a>
      {"\n        "}<a className="nlink" href="https://github.com/Pandora-Finance/Express-Protocol-SDK" target="_blank" rel="noreferrer">
      {"\n          "}<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" /></svg>
      {"\n          GitHub\n        "}</a>
      {"\n        "}<button className="copy-pill" data-copy="npm i pandora-express" aria-label="Copy install command">
      {"\n          "}<span className="dollar">$</span><span className="ctext">npm i pandora-express</span>
      {"\n          "}<svg className="cicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
      {"\n        "}</button>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</nav>
      {"\n\n  \n  "}
      {/* ============ HERO ============ */}<header className="hero" id="top">
      {"\n    "}<div className="container hero-grid">
      {"\n      "}<div>
      {"\n        "}<div className="hero-badges reveal">
      {"\n          "}<span className="pill"><span className="dot"></span> v2 · agent-ready</span>
      {"\n          "}<span className="pill">Open source · MIT</span>
      {"\n          "}<span className="pill">npm: pandora-express</span>
      {"\n        "}</div>
      {"\n        "}<p className="eyebrow reveal">Express Protocol SDK</p>
      {"\n        "}<h1 className="reveal d1">The SDK for <span className="grad">agentic onchain commerce</span></h1>
      {"\n        "}<p className="lead reveal d2">
      {"\n          One open-source SDK to mint, trade, and manage NFTs and real-world assets onchain \u2014\n          without touching Solidity. Built for the AI-agent era, with\n          "}<b style={{ color: "#d7c6ff" }}>x402</b>{" as a first-class standard so autonomous agents pay and settle on their own.\n        "}</p>
      {"\n        "}<div className="hero-cta reveal d3">
      {"\n          "}<a className="btn btn-express" href="/express-protocol/docs/">{"Read the docs\n            "}<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      {"\n          "}</a>
      {"\n          "}<a className="btn btn-wire" href="https://github.com/Pandora-Finance/Express-Protocol-SDK" target="_blank" rel="noreferrer">
      {"\n            "}<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" /></svg>
      {"\n            GitHub\n          "}</a>
      {"\n        "}</div>
      {"\n        "}<div className="hero-meta reveal d3">
      {"\n          "}<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> ERC-721 · 1155 · 404 · x402</span>
      {"\n          "}<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Mint · trade · auction</span>
      {"\n          "}<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Agents pay &amp; settle</span>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n\n      \n      "}
      {/* CODE CARD */}<div className="code-card reveal d2" aria-hidden="false">
      {"\n        "}<div className="code-top">
      {"\n          "}<div className="dots"><i></i><i></i><i></i></div>
      {"\n          "}<span className="fname">mint-and-sell.ts</span>
      {"\n          "}<span className="tag">pandora-express</span>
      {"\n        "}</div>
      {"\n        "}<pre><code><span className="tk-k">import</span> <span className="tk-p">{"{"}</span> <span className="tk-m">createPandoraExpressSDK</span> <span className="tk-p">{"}"}</span> <span className="tk-k">from</span> <span className="tk-s">"pandora-express"</span><span className="tk-p">;</span>
      {"\n\n"}<span className="tk-c">// wire up the SDK with a viem/web3 signer</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-m">sdk</span> <span className="tk-p">=</span> <span className="tk-f">createPandoraExpressSDK</span><span className="tk-p">{"({"}</span> <span className="tk-m">signer</span><span className="tk-p">,</span> <span className="tk-m">chainId</span><span className="tk-p">:</span> <span className="tk-n">8453</span> <span className="tk-p">{"});"}</span>
      {"\n\n"}<span className="tk-c">// 1 · mint an ERC-721 into the public collection</span>
      {"\n"}<span className="tk-k">const</span> <span className="tk-p">{"{"}</span> <span className="tk-m">tokenId</span> <span className="tk-p">{"}"}</span> <span className="tk-p">=</span> <span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-f">mint</span><span className="tk-p">{"({"}</span>
      {"\n  "}<span className="tk-m">tokenURI</span><span className="tk-p">:</span> <span className="tk-s">"ipfs://…/asset.json"</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">royalty</span><span className="tk-p">:</span> <span className="tk-n">5</span><span className="tk-p">,</span> <span className="tk-c">// % to the creator, forever</span>
      {"\n"}<span className="tk-p">{"});"}</span>
      {"\n\n"}<span className="tk-c">// 2 · list it for sale on the shared orderbook</span>
      {"\n"}<span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-m">order</span><span className="tk-p">.</span><span className="tk-f">sellNFT</span><span className="tk-p">{"({"}</span>
      {"\n  "}<span className="tk-m">tokenId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">price</span><span className="tk-p">:</span> <span className="tk-s">"25.0"</span><span className="tk-p">,</span> <span className="tk-c">// USDC</span>
      {"\n"}<span className="tk-p">{"});"}</span></code></pre>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</header>
      {"\n\n  \n  "}
      {/* ============ TOKEN STANDARDS ============ */}<section className="section">
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal">
      {"\n        "}<p className="eyebrow">Token &amp; payment standards</p>
      {"\n        "}<h2>Four standards, one interface</h2>
      {"\n        "}<p className="lead">Deploy and manage any token type — and settle agent payments — through the same typed SDK. Express abstracts the contract calls so you ship features, not ABIs.</p>
      {"\n      "}</div>
      {"\n      "}<div className="grid-4" style={{ marginTop: "44px" }}>
      {"\n        "}<div className="card std-card reveal">
      {"\n          "}<span className="rail"></span>
      {"\n          "}<div className="std-tag">ERC&#8209;<b>721</b></div>
      {"\n          "}<div className="kv"><span className="badge badge-purple">Unique NFTs</span></div>
      {"\n          "}<p>The classic non-fungible standard — one-of-one collectibles, art, and tickets. Mint, batch-mint, sell, buy, auction, and bid, in personal or public collections.</p>
      {"\n        "}</div>
      {"\n        "}<div className="card std-card reveal d1">
      {"\n          "}<span className="rail"></span>
      {"\n          "}<div className="std-tag">ERC&#8209;<b>1155</b></div>
      {"\n          "}<div className="kv"><span className="badge badge-purple">Multi-token</span></div>
      {"\n          "}<p>Fungible and non-fungible editions from a single contract — ideal for game items, passes, and semi-fungible drops. Full mint-to-auction lifecycle, same API surface.</p>
      {"\n        "}</div>
      {"\n        "}<div className="card std-card reveal d2">
      {"\n          "}<span className="rail"></span>
      {"\n          "}<div className="std-tag">ERC&#8209;<b>404</b></div>
      {"\n          "}<div className="kv"><span className="badge badge-purple">Fractional</span></div>
      {"\n          "}<p>The experimental hybrid: an NFT and its ERC-20 fraction move together. Transfer the token, the fungible units follow — native fractional ownership and liquidity.</p>
      {"\n        "}</div>
      {"\n        "}<div className="card std-card reveal d3">
      {"\n          "}<span className="rail"></span>
      {"\n          "}<div className="std-tag"><b>x402</b></div>
      {"\n          "}<div className="kv"><span className="badge badge-purple">Agent payments</span></div>
      {"\n          "}<p>A first-class payment standard for autonomous agents — settle agent-to-agent purchases over HTTP 402 in USDC. Quote, authorize, and clear on their own, no human checkout.</p>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ FEATURE GRID ============ */}<section className="section" style={{ background: "var(--bg)" }}>
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal">
      {"\n        "}<p className="eyebrow">Everything to trade onchain</p>
      {"\n        "}<h2>A protocol toolkit that lets you focus on your product</h2>
      {"\n        "}<p className="lead">Express Protocol wraps a suite of audited smart contracts and libraries in a Software Development Kit — so any Web2 developer can build NFT and RWA applications without diving into the chain.</p>
      {"\n      "}</div>
      {"\n      "}<div className="grid-3" style={{ marginTop: "44px" }}>
      {"\n        "}<div className="card feat reveal">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 22l-5.5-2.5 1-6.3L3 8.9 9 8z" /></svg></div>
      {"\n          "}<h3>Minting</h3>
      {"\n          "}<p>Mint single assets or thousands at once into a personal or public collection, each with creator royalties baked in.</p>
      {"\n          "}<div className="funcs"><code>mint()</code><code>batchMint()</code><code>burn()</code></div>
      {"\n        "}</div>
      {"\n        "}<div className="card feat reveal d1">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.3A1 1 0 0 0 5.6 19H17" /><circle cx="9" cy="21" r="1" /><circle cx="17" cy="21" r="1" /></svg></div>
      {"\n          "}<h3>Marketplace</h3>
      {"\n          "}<p>A complete trading lifecycle — fixed-price sales, buys, timed auctions and bids — all settling against a shared orderbook across every app on the protocol.</p>
      {"\n          "}<div className="funcs"><code>sellNFT()</code><code>buy()</code><code>auction()</code><code>bid()</code></div>
      {"\n        "}</div>
      {"\n        "}<div className="card feat reveal d2">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
      {"\n          "}<h3>Royalties</h3>
      {"\n          "}<p>A single royalty standard for protocol-minted and externally minted NFTs. Creators keep earning on every resale across all protocol applications.</p>
      {"\n          "}<div className="funcs"><code>setRoyalties()</code><code>RoyaltiesSet</code></div>
      {"\n        "}</div>
      {"\n        "}<div className="card feat reveal">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18M3 12h18M3 17h18" /><rect x="3" y="3" width="18" height="18" rx="2" /></svg></div>
      {"\n          "}<h3>Collections</h3>
      {"\n          "}<p>Mint into Pandora's public collection to go live instantly, or spin up your own personal collection contract for a fully branded storefront.</p>
      {"\n          "}<div className="funcs"><code>createCollection()</code><code>public</code><code>personal</code></div>
      {"\n        "}</div>
      {"\n        "}<div className="card feat reveal d1">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.5 0 4.8 1 6.4 2.6" /><path d="M8 12l3 3 5-6" /></svg></div>
      {"\n          "}<h3>IPFS storage</h3>
      {"\n          "}<p>Pin metadata and media to decentralized storage out of the box — Express ships with Pinata integration and presigned uploads for your assets.</p>
      {"\n          "}<div className="funcs"><code>pinata.upload()</code><code>ipfs://</code></div>
      {"\n        "}</div>
      {"\n        "}<div className="card feat reveal d2">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V5a2 2 0 0 1 2-2h2M4 17v2a2 2 0 0 0 2 2h2M20 7V5a2 2 0 0 0-2-2h-2M20 17v2a2 2 0 0 1-2 2h-2" /><path d="M9 9h6v6H9z" /></svg></div>
      {"\n          "}<h3>NFT indexer &amp; data</h3>
      {"\n          "}<p>Query rich, multichain data on NFTs and their creators through one unified API — as an open-source storehouse for indexing and analytics.</p>
      {"\n          "}<div className="funcs"><code>index()</code><code>unified API</code></div>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ x402 MODULE ============ */}<section className="section x402" id="x402">
      {"\n    "}<div className="container x402-grid">
      {"\n      "}<div>
      {"\n        "}<span className="badge-new reveal">
      {"\n          "}<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
      {"\n          New in 2026\n        "}</span>
      {"\n        "}<p className="eyebrow reveal d1" style={{ color: "#c9bcff", marginTop: "14px" }}>x402 · payments for AI agents</p>
      {"\n        "}<h2 className="reveal d1">Let agents pay for and settle assets on their own</h2>
      {"\n        "}<p className="lead reveal d2">
      {"\n          Express Protocol treats "}<b>x402</b>{" as a first-class standard \u2014 built on Coinbase's HTTP\u00a0402 stablecoin\n          rail and sitting right alongside ERC-721, ERC-1155, and ERC-404. Point an agent at a listing and it can\n          price, authorize, and settle the purchase autonomously \u2014 paying in USDC over the wire, no human checkout,\n          no API keys to babysit.\n        "}</p>
      {"\n        "}<ol className="flow reveal d2">
      {"\n          "}<li><span className="n">1</span><div><b>Agent requests an asset</b> <span>— hits a protected endpoint and gets back an HTTP 402 with the price.</span></div></li>
      {"\n          "}<li><span className="n">2</span><div><b>x402 signs a USDC payment</b> <span>— the SDK attaches a stablecoin payment header, no seat at a checkout page.</span></div></li>
      {"\n          "}<li><span className="n">3</span><div><b>Protocol settles &amp; transfers</b> <span>— funds clear on Base or Arbitrum and the NFT/RWA lands in the agent's wallet.</span></div></li>
      {"\n        "}</ol>
      {"\n        "}<div className="x402-chips reveal d3">
      {"\n          "}<span className="chip"><b>USDC</b> stablecoin</span>
      {"\n          "}<span className="chip">Base &amp; Arbitrum</span>
      {"\n          "}<span className="chip">HTTP <b>402</b> native</span>
      {"\n          "}<span className="chip">agent-to-agent</span>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n\n      "}<div className="code-card reveal d2">
      {"\n        "}<div className="code-top">
      {"\n          "}<div className="dots"><i></i><i></i><i></i></div>
      {"\n          "}<span className="fname">agent-checkout.ts</span>
      {"\n          "}<span className="tag">@pandora-express/x402</span>
      {"\n        "}</div>
      {"\n        "}<pre><code><span className="tk-k">import</span> <span className="tk-p">{"{"}</span> <span className="tk-m">createPandoraExpressSDK</span> <span className="tk-p">{"}"}</span> <span className="tk-k">from</span> <span className="tk-s">"pandora-express"</span><span className="tk-p">;</span>
      {"\n"}<span className="tk-k">import</span> <span className="tk-p">{"{"}</span> <span className="tk-m">x402</span> <span className="tk-p">{"}"}</span> <span className="tk-k">from</span> <span className="tk-s">"pandora-express/x402"</span><span className="tk-p">;</span>
      {"\n\n"}<span className="tk-k">const</span> <span className="tk-m">sdk</span> <span className="tk-p">=</span> <span className="tk-f">createPandoraExpressSDK</span><span className="tk-p">{"({"}</span>
      {"\n  "}<span className="tk-m">signer</span><span className="tk-p">:</span> <span className="tk-m">agentWallet</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">chainId</span><span className="tk-p">:</span> <span className="tk-n">8453</span><span className="tk-p">,</span> <span className="tk-c">// Base</span>
      {"\n  "}<span className="tk-m">modules</span><span className="tk-p">:</span> <span className="tk-p">[</span><span className="tk-f">x402</span><span className="tk-p">{"({"}</span> <span className="tk-m">asset</span><span className="tk-p">:</span> <span className="tk-s">"USDC"</span> <span className="tk-p">{"})]"}</span><span className="tk-p">,</span>
      {"\n"}<span className="tk-p">{"});"}</span>
      {"\n\n"}<span className="tk-c">// the agent buys — payment is handled inline</span>
      {"\n"}<span className="tk-k">await</span> <span className="tk-m">sdk</span><span className="tk-p">.</span><span className="tk-m">erc721</span><span className="tk-p">.</span><span className="tk-f">buy</span><span className="tk-p">{"({"}</span>
      {"\n  "}<span className="tk-m">tokenId</span><span className="tk-p">,</span>
      {"\n  "}<span className="tk-m">paymentMethod</span><span className="tk-p">:</span> <span className="tk-s">"x402"</span><span className="tk-p">,</span> <span className="tk-c">// HTTP 402 · USDC</span>
      {"\n"}<span className="tk-p">{"});"}</span></code></pre>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ MODERNIZED FOR 2026 ============ */}<section className="section modern">
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal">
      {"\n        "}<p className="eyebrow">Modernized for 2026</p>
      {"\n        "}<h2>Rebuilt on today's onchain stack</h2>
      {"\n      "}</div>
      {"\n      "}<div className="modern-grid" style={{ marginTop: "40px" }}>
      {"\n        "}<div className="mcard reveal">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6-6-6M12 19h8" /></svg></div>
      {"\n          "}<h4>TypeScript + viem</h4>
      {"\n          "}<p>Fully typed SDK with first-class viem support and modern async ergonomics.</p>
      {"\n        "}</div>
      {"\n        "}<div className="mcard reveal d1">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5v11L12 22 3 17.5v-11z" /><path d="M12 22V12M3 6.5L12 12l9-5.5" /></svg></div>
      {"\n          "}<h4>Built for L2s</h4>
      {"\n          "}<p>Deploy to Base, Arbitrum, and Optimism — low-fee settlement where users are.</p>
      {"\n        "}</div>
      {"\n        "}<div className="mcard reveal d2">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg></div>
      {"\n          "}<h4>Account abstraction</h4>
      {"\n          "}<p>ERC-4337 smart accounts and gas sponsorship for frictionless agent flows.</p>
      {"\n        "}</div>
      {"\n        "}<div className="mcard reveal d3">
      {"\n          "}<div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg></div>
      {"\n          "}<h4>Open source &amp; audited</h4>
      {"\n          "}<p>MIT-licensed, community-driven, and audited — inspect every line on GitHub.</p>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ GUIDES ============ */}<section className="section">
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal">
      {"\n        "}<p className="eyebrow">Guides</p>
      {"\n        "}<h2>Ship a real dapp in an afternoon</h2>
      {"\n        "}<p className="lead">Step-by-step walkthroughs, straight from the Express Protocol docs — each one builds a working product on the SDK.</p>
      {"\n      "}</div>
      {"\n      "}<div className="guides-list" style={{ marginTop: "40px" }}>
      {"\n        "}<a className="guide reveal" href="/express-protocol/docs/">
      {"\n          "}<span className="gnum">01</span>
      {"\n          "}<div className="gbody">
      {"\n            "}<h3>Create an NFT Marketplace using Express Protocol</h3>
      {"\n            "}<p>Stand up a full mint-list-buy marketplace with public collections and the shared orderbook.</p>
      {"\n          "}</div>
      {"\n          "}<span className="garrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
      {"\n        "}</a>
      {"\n        "}<a className="guide reveal d1" href="/express-protocol/docs/">
      {"\n          "}<span className="gnum">02</span>
      {"\n          "}<div className="gbody">
      {"\n            "}<h3>Create an NFT Auction Marketplace</h3>
      {"\n            "}<p>Wire up timed auctions, bidding, bid execution, and withdrawals end to end.</p>
      {"\n          "}</div>
      {"\n          "}<span className="garrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
      {"\n        "}</a>
      {"\n        "}<a className="guide reveal d2" href="/express-protocol/docs/">
      {"\n          "}<span className="gnum">03</span>
      {"\n          "}<div className="gbody">
      {"\n            "}<h3>Create an NFT Drop Dapp in a matter of minutes</h3>
      {"\n            "}<p>Batch-mint a drop, pin assets to IPFS, and open sales with a few lines of SDK code.</p>
      {"\n          "}</div>
      {"\n          "}<span className="garrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
      {"\n        "}</a>
      {"\n        "}<a className="guide reveal d3" href="/express-protocol/docs/">
      {"\n          "}<span className="gnum">04</span>
      {"\n          "}<div className="gbody">
      {"\n            "}<h3>Guide to creating an NFT Ticket Booking Dapp</h3>
      {"\n            "}<p>Use ERC-1155 editions as event tickets, with royalties and resale baked in.</p>
      {"\n          "}</div>
      {"\n          "}<span className="garrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
      {"\n        "}</a>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ DOCS CTA ============ */}<section className="section" style={{ paddingTop: "0" }}>
      {"\n    "}<div className="container">
      {"\n      "}<div className="cta reveal">
      {"\n        "}<p className="eyebrow" style={{ color: "#c9bcff" }}>Start building</p>
      {"\n        "}<h2>From <code style={{ fontFamily: "var(--mono)", fontSize: ".85em", color: "#d7c6ff" }}>npm install</code> to onchain in minutes</h2>
      {"\n        "}<p>Install the package, plug in a signer, and mint your first asset. The docs cover every function across all four standards — ERC-721, ERC-1155, ERC-404, and x402 agent payments.</p>
      {"\n        "}<div className="cta-btns">
      {"\n          "}<a className="btn btn-onlight" href="/express-protocol/docs/">{"Read the docs\n            "}<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      {"\n          "}</a>
      {"\n          "}<a className="btn btn-express" href="https://github.com/Pandora-Finance/Express-Protocol-SDK" target="_blank" rel="noreferrer">
      {"\n            "}<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" /></svg>
      {"\n            View on GitHub\n          "}</a>
      {"\n        "}</div>
      {"\n        "}<div className="install"><span className="p">$</span> <b>npm i pandora-express</b></div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ BUILT IN THE OPEN ============ */}<section className="section oss">
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal">
      {"\n        "}<p className="eyebrow">Open source</p>
      {"\n        "}<h2>Read the code, fork the SDK</h2>
      {"\n        "}<p className="lead">Express Protocol is open source end to end — the SDK, its documentation, and the smart contracts underneath. Inspect every line, open an issue, or ship a PR.</p>
      {"\n      "}</div>
      {"\n      "}<div className="oss-grid">
      {"\n        "}<a className="repo reveal" href="https://github.com/Pandora-Finance/Express-Protocol-SDK" target="_blank" rel="noopener">
      {"\n          "}<span className="gh"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" /></svg></span>
      {"\n          "}<span className="rpath">Pandora-Finance/Express-Protocol-SDK <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg></span>
      {"\n          "}<p className="rdesc">The SDK (JavaScript)</p>
      {"\n        "}</a>
      {"\n        "}<a className="repo reveal d1" href="https://github.com/Pandora-Finance/express-protocol-docs" target="_blank" rel="noopener">
      {"\n          "}<span className="gh"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" /></svg></span>
      {"\n          "}<span className="rpath">Pandora-Finance/express-protocol-docs <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg></span>
      {"\n          "}<p className="rdesc">Documentation source</p>
      {"\n        "}</a>
      {"\n        "}<a className="repo reveal d2" href="https://github.com/Pandora-Finance/Modular-contract" target="_blank" rel="noopener">
      {"\n          "}<span className="gh"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" /></svg></span>
      {"\n          "}<span className="rpath">Pandora-Finance/Modular-contract <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg></span>
      {"\n          "}<p className="rdesc">Express smart contracts</p>
      {"\n        "}</a>
      {"\n        "}<a className="repo reveal d3" href="https://www.npmjs.com/package/pandora-express" target="_blank" rel="noopener">
      {"\n          "}<span className="gh"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 4h20v16H12v-3H8v3H2V4zm2 2v12h2V8h2v10h2V6H4zm10 0v12h4V8h2v10h-2V6h-4z" opacity=".92" /></svg></span>
      {"\n          "}<span className="rpath">npm: pandora-express <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg></span>
      {"\n          "}<p className="rdesc">npm: pandora-express</p>
      {"\n        "}</a>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ ECOSYSTEM STRIP ============ */}<section className="section eco">
      {"\n    "}<div className="container">
      {"\n      "}<div className="eco-head reveal">
      {"\n        "}<p className="eyebrow">Built on Express Protocol</p>
      {"\n        "}<h2>Powering onchain products across the ecosystem</h2>
      {"\n        "}<p>Real platforms that shipped on the Express Protocol SDK — marketplaces, games, and asset apps, all trading against the same shared orderbook.</p>
      {"\n      "}</div>
      {"\n      "}<div className="eco-marks reveal d1">
      {"\n        "}<span className="eco-mark"><span className="edot"></span>LivWell</span>
      {"\n        "}<span className="eco-mark"><span className="edot"></span>Forward Protocol</span>
      {"\n        "}<span className="eco-mark"><span className="edot"></span>Metastarter</span>
      {"\n        "}<span className="eco-mark"><span className="edot"></span>Soccer Hub</span>
      {"\n        "}<span className="eco-mark"><span className="edot"></span>Cloutlanders</span>
      {"\n        "}<span className="eco-mark"><span className="edot"></span>Metawood</span>
      {"\n        "}<span className="eco-mark"><span className="edot"></span>Cryptopirates</span>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ FAQ + BOOK A DEMO ============ */}<section className="section">
      {"\n    "}<div className="container">
      {"\n      "}<div className="sec-head reveal">
      {"\n        "}<p className="eyebrow">FAQ</p>
      {"\n        "}<h2>Questions, answered</h2>
      {"\n        "}<p className="lead">The essentials on Express Protocol, x402 agent payments, and shipping on the SDK.</p>
      {"\n      "}</div>
      {"\n      "}<div className="faqs reveal d1">
      {"\n        "}<details className="faq">
      {"\n          "}<summary>What is x402?<span className="fq-ic">+</span></summary>
      {"\n          "}<p className="fq-body">x402 is a payment standard for autonomous agents, built on the HTTP <code>402 Payment Required</code> status code. When an agent requests a paid resource, the server answers <code>402</code> with a price and terms; the agent signs a stablecoin (USDC) payment, re-sends it as a payment header, and receives a <code>200 OK</code> with the asset. In Express Protocol, x402 is a first-class standard alongside ERC-721, ERC-1155, and ERC-404 — so agents can quote, pay, and settle onchain without a human at a checkout.</p>
      {"\n        "}</details>
      {"\n        "}<details className="faq">
      {"\n          "}<summary>Do I need to write Solidity to use Express Protocol?<span className="fq-ic">+</span></summary>
      {"\n          "}<p className="fq-body">No. Express wraps a suite of audited smart contracts behind a fully typed TypeScript SDK. You plug in a viem/web3 signer and call methods like <code>mint()</code>, <code>sellNFT()</code>, and <code>buy()</code> — the SDK handles the ABIs, encoding, and onchain calls for you.</p>
      {"\n        "}</details>
      {"\n        "}<details className="faq">
      {"\n          "}<summary>Which token standards are supported?<span className="fq-ic">+</span></summary>
      {"\n          "}<p className="fq-body">Four: <code>ERC-721</code> (unique NFTs), <code>ERC-1155</code> (multi-token editions), <code>ERC-404</code> (fractional NFT/ERC-20 hybrids), and <code>x402</code> (agent-to-agent payments). All four are reached through the same interface, so the API surface stays consistent as you move between them.</p>
      {"\n        "}</details>
      {"\n        "}<details className="faq">
      {"\n          "}<summary>Which chains does it run on?<span className="fq-ic">+</span></summary>
      {"\n          "}<p className="fq-body">Express is rebuilt for today's onchain stack and targets low-fee L2s — Base, Arbitrum, and Optimism — with first-class viem support and ERC-4337 account abstraction for gasless, agent-friendly flows. x402 settlements clear in USDC on Base or Arbitrum.</p>
      {"\n        "}</details>
      {"\n        "}<details className="faq">
      {"\n          "}<summary>Is Express Protocol open source?<span className="fq-ic">+</span></summary>
      {"\n          "}<p className="fq-body">Yes — end to end and MIT-licensed. The SDK ships as <code>pandora-express</code> on npm, and the SDK, its docs, and the smart contracts underneath are all public on GitHub. Inspect every line, open an issue, or send a PR.</p>
      {"\n        "}</details>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ BOOK A DEMO ============ */}<section className="section book" style={{ paddingTop: "0" }}>
      {"\n    "}<div className="container">
      {"\n      "}<div className="book-inner reveal">
      {"\n        "}<div className="bk-copy">
      {"\n          "}<p className="eyebrow" style={{ color: "var(--c-express)" }}>Talk to us</p>
      {"\n          "}<h3>See Express Protocol on your stack</h3>
      {"\n          "}<p>Walk through the SDK, the x402 agent flow, and how to ship a marketplace or agent-commerce app on top of it — with the team that built it.</p>
      {"\n        "}</div>
      {"\n        "}<div className="bk-btns">
      {"\n          "}<a className="btn btn-glow" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</section>
      {"\n\n  \n  "}
      {/* ============ FOOTER ============ */}<footer className="footer">
      {"\n    "}<div className="container">
      {"\n      "}<div className="f-top">
      {"\n        "}<div>
      {"\n          "}<img className="flogo" src="/assets/logos/ExpressProtocol_White.png" alt="Express Protocol" />
      {"\n          "}<p className="fabout">An open-source, decentralized, interoperable SDK to mint, trade, and manage NFTs and real-world assets onchain — built for developers and, now, for AI agents.</p>
      {"\n        "}</div>
      {"\n        "}<div className="fcol">
      {"\n          "}<h5>Build</h5>
      {"\n          "}<a href="/express-protocol/docs/">Documentation</a>
      {"\n          "}<a href="https://github.com/Pandora-Finance/Express-Protocol-SDK" target="_blank" rel="noreferrer">GitHub</a>
      {"\n          "}<a href="https://www.npmjs.com/package/pandora-express" target="_blank" rel="noreferrer">npm package</a>
      {"\n          "}<a href="#x402">x402 standard</a>
      {"\n        "}</div>
      {"\n        "}<div className="fcol">
      {"\n          "}<h5>Standards</h5>
      {"\n          "}<a href="/express-protocol/docs/">ERC-721</a>
      {"\n          "}<a href="/express-protocol/docs/">ERC-1155</a>
      {"\n          "}<a href="/express-protocol/docs/">ERC-404</a>
      {"\n          "}<a href="#x402">x402</a>
      {"\n        "}</div>
      {"\n        "}<div className="fcol">
      {"\n          "}<h5>Ecosystem</h5>
      {"\n          "}<a href="/">Pandora Hub</a>
      {"\n          "}<a href="/express-protocol/docs/">Guides</a>
      {"\n          "}<a href="/express-protocol/docs/">Smart contracts</a>
      {"\n          "}<a href="/express-protocol/docs/">IPFS / Pinata</a>
      {"\n        "}</div>
      {"\n      "}</div>
      {"\n      "}<div className="f-bottom">
      {"\n        "}<div>© 2026 Express Protocol · Part of the Pandora ecosystem</div>
      {"\n        "}<a className="rehab" href="/">
      {"\n          "}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      {"\n          Back to Pandora hub \u00b7 "}<code>npm i pandora-express</code>
      {"\n        "}</a>
      {"\n      "}</div>
      {"\n    "}</div>
      {"\n  "}</footer>
      {"\n\n  \n"}
      {/* ============ SCRIPTS ============ */}
      <RevealOnScroll respectReducedMotion={false} />
      <CopyInstallPill />
    </>
  );
}
