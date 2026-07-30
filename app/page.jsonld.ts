/* ------------------------------------------------------------------
   app/page.jsonld — the hub's single <script type="application/ld+json">
   block, kept as the EXACT source bytes.

   The Metadata API cannot express this @graph (Organization + WebSite +
   WebPage + BreadcrumbList + ItemList + FAQPage, cross-linked by @id),
   so it stays a literal script tag, emitted by <JsonLd raw={...} />.

   String.raw so nothing in the payload is reinterpreted. Verified: the
   block contains no backtick and no `${` sequence.
   ------------------------------------------------------------------ */

export const hubJsonLd = String.raw`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.pandora.finance/#organization",
      "name": "Pandora",
      "legalName": "Aconomy Labs Inc.",
      "alternateName": [
        "Aconomy Labs",
        "Pandora Finance"
      ],
      "url": "https://www.pandora.finance",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.pandora.finance/assets/logos/Pandora_Dark.png",
        "caption": "Pandora"
      },
      "image": "https://www.pandora.finance/og-image.png",
      "description": "Pandora is the brand of Aconomy Labs Inc., a Toronto-based AI-native product studio founded in 2021. It designs, builds and owns agentic products — an RWA marketplace live on Google Play, an open-source agentic-commerce SDK, an AI leasing agent, digital product passports, a programmable-gold neobank, composable credit infrastructure and AI governance — pairing autonomous AI agents with independently audited, verifiable infrastructure.",
      "slogan": "We build agentic products that do real work.",
      "foundingDate": "2021",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressRegion": "ON",
          "addressCountry": "CA"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "111 Peter Street, 9th Floor, Suite 902",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "M5V 2H1",
        "addressCountry": "CA"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "founder": [
        {
          "@type": "Person",
          "name": "Pushkar Vohra",
          "jobTitle": "Founder & CEO"
        },
        {
          "@type": "Person",
          "name": "Opinder Preet Singh Narang",
          "jobTitle": "Co-Founder, Execution"
        },
        {
          "@type": "Person",
          "name": "Har Rhythm Kaur",
          "jobTitle": "Co-Founder, Research & Analytics"
        }
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Tamur Shah",
          "jobTitle": "Head of Compliance & Licensing"
        }
      ],
      "funding": {
        "@type": "MonetaryGrant",
        "name": "$2.4M seed round (2021) — 5x oversubscribed",
        "funder": [
          {
            "@type": "Organization",
            "name": "AU21 Capital"
          },
          {
            "@type": "Organization",
            "name": "NGC Ventures"
          },
          {
            "@type": "Organization",
            "name": "Master Ventures"
          },
          {
            "@type": "Organization",
            "name": "Magnus Capital"
          },
          {
            "@type": "Organization",
            "name": "Exnetwork Capital"
          }
        ]
      },
      "knowsAbout": [
        "Agentic AI",
        "AI agents",
        "Autonomous software agents",
        "Real-world asset tokenization",
        "Digital Product Passports",
        "Agentic commerce",
        "x402 payments",
        "Zero-knowledge proofs",
        "Smart contracts",
        "ERC-404",
        "AI governance",
        "OSFI E-23"
      ],
      "sameAs": [
        "https://x.com/aconomyfdn",
        "https://github.com/Pandora-Finance",
        "https://www.linkedin.com/company/aconomyfoundation"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.pandora.finance/#website",
      "url": "https://www.pandora.finance/",
      "name": "Pandora",
      "alternateName": "Aconomy Labs Inc.",
      "description": "Pandora is an AI-native product studio in Toronto — the brand of Aconomy Labs Inc. We build agentic products that do real work on verifiable infrastructure.",
      "inLanguage": "en-CA",
      "publisher": {
        "@id": "https://www.pandora.finance/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pandora.finance/#webpage",
      "url": "https://www.pandora.finance/",
      "name": "Pandora — AI-Native Product Studio Building Agentic Software",
      "description": "Pandora is an AI-native product studio in Toronto — the brand of Aconomy Labs Inc. We build agentic products that do real work on verifiable infrastructure.",
      "isPartOf": {
        "@id": "https://www.pandora.finance/#website"
      },
      "about": {
        "@id": "https://www.pandora.finance/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.pandora.finance/og-image.png"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pandora.finance/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.pandora.finance/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.pandora.finance/#products",
      "name": "Pandora products",
      "description": "The eight agentic products designed, built and owned by Pandora (Aconomy Labs Inc.).",
      "numberOfItems": 8,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Express Protocol",
          "description": "Open-source agentic-commerce SDK that gives AI agents the primitives to discover, transact and settle on their own — one typed interface over mint, trade and payments, with an x402 module for autonomous settlement. Live in production; install with npm i pandora-express.",
          "url": "https://www.pandora.finance/express-protocol/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Aconomy",
          "description": "AI-assisted marketplace for real-world assets — tokenize, validate and trade watches, real estate, gold and art, with an AI agent guiding discovery and validation and on-chain records keeping provenance verifiable. Live on Google Play.",
          "url": "https://www.pandora.finance/aconomy/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "UnityMarket",
          "description": "Creator-first NFT marketplace to mint, discover, buy, sell and auction digital collectibles — one of the earliest Pandora products, built on the Express Protocol rails that now power agentic commerce.",
          "url": "https://www.pandora.finance/unitymarket/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Propty",
          "description": "The AI leasing agent, private by zero-knowledge. It screens newcomers with no credit file, drafts the lease and guarantees the owner's payout, proving eligibility without over-sharing a tenant's personal data. In development.",
          "url": "https://www.pandora.finance/propty/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "The DPP Company",
          "description": "An AI agent that verifies and passports physical products. From one scan it authenticates an item, traces provenance, reads certifications, flags counterfeits and issues its Digital Product Passport — anchored on-chain and EU-DPP aligned. In development.",
          "url": "https://www.pandora.finance/dpp/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Auri",
          "description": "A programmable-gold neobank for Canada — own real, audited gold, then borrow against it, spend it, send it worldwide, or let your AI agent manage it via MCP. Coming soon.",
          "url": "https://www.pandora.finance/auri/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Vanna Protocol",
          "description": "Agentic composable credit infrastructure — risk-margin infrastructure built to keep you out of liquidation, with under-collateralized positions steered by trading agents through Vanna MCPs. Coming soon.",
          "url": "https://www.pandora.finance/vanna/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Keel",
          "description": "Agentic AI governance for regulated finance — model-risk oversight, approvals and audit trails that keep AI accountable and OSFI E-23-ready. Coming soon.",
          "url": "https://www.pandora.finance/#products"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pandora.finance/#faq",
      "name": "Pandora — frequently asked questions",
      "isPartOf": {
        "@id": "https://www.pandora.finance/#webpage"
      },
      "about": {
        "@id": "https://www.pandora.finance/#organization"
      },
      "inLanguage": "en-CA",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Pandora — a studio, or a company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. Pandora is the brand of Aconomy Labs Inc., a Toronto company, run as an AI-native product studio: we design, build and own our products rather than consult on other people's. Each one pairs an autonomous AI agent with infrastructure that makes its work verifiable."
          }
        },
        {
          "@type": "Question",
          "name": "Is Pandora a crypto company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No — we're an AI company first. Our products are led by agents that do real work; where trust or settlement matters, we anchor to public infrastructure so every action is provable. The chain is plumbing, not the pitch."
          }
        },
        {
          "@type": "Question",
          "name": "Which products can I actually use today?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aconomy is live on Google Play, and Express Protocol is in production with the pandora-express SDK on npm. Propty and The DPP Company are in active development; Vanna and Auri are coming. Book a demo to see any of them run end to end."
          }
        },
        {
          "@type": "Question",
          "name": "What makes a product “agentic”?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each product hands an entire real-world task to an AI agent that reasons, decides and acts — validating an asset, screening a tenant, passporting a product, settling a payment — start to finish, not just answering questions about it."
          }
        },
        {
          "@type": "Question",
          "name": "How is Pandora funded, and who backs it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A $2.4M seed round, 5x oversubscribed — backed by AU21 Capital, NGC Ventures, Master Ventures, Magnus, Exnetwork and others, with press in Cointelegraph, Bitcoin.com and Apple News. Incorporated in Toronto and incubated by TBDC, BHive and OCI."
          }
        },
        {
          "@type": "Question",
          "name": "Who's on the team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A small, senior team: Pushkar Vohra (Founder & CEO), Opinder Preet Singh Narang (Co-Founder, Execution), Har Rhythm Kaur (Co-Founder, Research & Analytics) and Tamur Shah (Head of Compliance & Licensing). Read more on the About page."
          }
        }
      ]
    }
  ]
}
`;
