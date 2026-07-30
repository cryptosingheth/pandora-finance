/* ------------------------------------------------------------------
   dpp/index.html's <script type="application/ld+json"> blocks,
   copied byte-for-byte in source order (String.raw preserves the JSON
   backslash escapes). Rendered via <JsonLd raw={…} /> on the page.
   ------------------------------------------------------------------ */

export const jsonLd0 = String.raw`
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.pandora.finance/dpp/#software",
  "name": "The DPP Company",
  "alternateName": "DPP by Pandora",
  "url": "https://www.pandora.finance/dpp/",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Digital Product Passport / product authentication",
  "operatingSystem": "Web",
  "inLanguage": "en-CA",
  "image": "https://www.pandora.finance/og-image.png",
  "description": "The DPP Company is an autonomous AI verification agent that authenticates a physical product, traces its provenance and supply chain, reads its materials and certifications, flags counterfeits, and issues and maintains its Digital Product Passport. Built for Canada first — the Combating Counterfeit Products Act, CBSA border detention of suspect imports, the Competition Act's June 2024 rules requiring environmental and product claims to be backed by adequate and proper testing, and Canadian textile and consumer labelling requirements — and aligned with the EU's incoming Digital Product Passport under the Ecodesign for Sustainable Products Regulation (ESPR) for brands expanding into Europe. Every passport is anchored on-chain via the Arianee protocol on Polygon, with documents pinned to IPFS.",
  "keywords": "Digital Product Passport, DPP, Canada, Combating Counterfeit Products Act, CBSA, Competition Act, product authentication, anti-counterfeit, provenance, supply chain traceability, EU ESPR, QR code, NFC, on-chain product records",
  "featureList": [
    "Authenticates a product against its issuer-signed identifier",
    "Traces provenance and supply-chain hops",
    "Reads and verifies materials, recycled content and certifications (GOTS, GRS, OEKO-TEX)",
    "Flags suspected counterfeits when no valid issuer signature resolves",
    "Issues and keeps a Digital Product Passport current for the product's life",
    "Binds each passport to a QR code or NFC tag for app-free consumer scanning",
    "Pins images and documents to IPFS and anchors a tamper-proof record on-chain",
    "Passport templates per product category, issued singly or in bulk"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Brands, manufacturers, retailers and rights holders"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "Place",
      "name": "European Union"
    }
  ],
  "provider": {
    "@type": "Organization",
    "name": "Pandora",
    "legalName": "Aconomy Labs Inc.",
    "url": "https://www.pandora.finance",
    "foundingDate": "2021",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://x.com/aconomyfdn",
      "https://github.com/Pandora-Finance",
      "https://www.linkedin.com/company/aconomyfoundation"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Pandora",
    "legalName": "Aconomy Labs Inc.",
    "url": "https://www.pandora.finance"
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "Pandora",
    "url": "https://www.pandora.finance"
  }
}
`;

export const jsonLd1 = String.raw`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.pandora.finance/dpp/#faq",
  "url": "https://www.pandora.finance/dpp/",
  "inLanguage": "en-CA",
  "publisher": {
    "@type": "Organization",
    "name": "Pandora",
    "legalName": "Aconomy Labs Inc.",
    "url": "https://www.pandora.finance"
  },
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly is a Digital Product Passport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Digital Product Passport (DPP) is a structured, machine-readable record of a physical item — its identity, origin, material composition, certifications, care and repair guidance, and end-of-life instructions. A data carrier on the product itself, a QR code or NFC tag, links the physical item to that record, so anyone can scan it and read the item's full story. The DPP travels with the product for its entire life: as it's resold, repaired or recycled, the passport stays attached and stays current."
      }
    },
    {
      "@type": "Question",
      "name": "What rules does this help me meet — in Canada and the EU?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're a Canadian company, so the agent is built for Canadian law first. Trafficking in counterfeit goods is a civil and criminal offence under the Combating Counterfeit Products Act, and the CBSA can detain suspect imports at the border for rights holders who file a Request for Assistance. Since June 2024 the Competition Act requires environmental and product claims to be backed by adequate and proper testing or substantiation — and the burden of proof sits with the seller. The Textile Labelling Act and Consumer Packaging and Labelling Act require accurate, verifiable product information, and 2024's right-to-repair bills (C-244 and C-294) push the market toward repairable, longer-lived products. A Digital Product Passport gives you one verifiable record behind all of it. It's also aligned with the EU's Digital Product Passport, mandated by the Ecodesign for Sustainable Products Regulation (ESPR) and phasing in by category — batteries first, then textiles, electronics and more — so when you expand into Europe the same passport carries over. The agent tracks these evolving specs rather than hard-coding a single fixed template."
      }
    },
    {
      "@type": "Question",
      "name": "How does the agent authenticate a product and issue its passport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It runs the product through a full pipeline. First it authenticates: it checks the item's unique tag and identifier against the issuer's signature to confirm it's the genuine article. Then it traces provenance across the supply chain, and reads the item's materials, recycled content and certifications — GOTS, GRS, OEKO-TEX and others — verifying each against the record. Finally it compiles those findings into a Digital Product Passport, pins the images and documents to content-addressed storage (IPFS), and mints a tamper-proof certificate anchored on-chain. The passport is bound to a QR or NFC tag, and the agent keeps it current as the item moves or changes hands. Every step is shown, so each finding is checkable rather than taken on trust."
      }
    },
    {
      "@type": "Question",
      "name": "How does it actually stop counterfeits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A plain QR code can be photographed and reprinted onto a fake, and it will still resolve to a page. This is different because the tag is only the doorway — behind it is a passport cryptographically bound to a specific, issuer-signed identifier and anchored on-chain. When someone scans a genuine item, the agent confirms the signature matches and the record checks out. When a cloned tag is scanned on a counterfeit, there's no valid issuer signature behind it and nothing legitimate to resolve to: the check fails and the item is flagged as suspected counterfeit instead of quietly passing. The proof lives in the signed, on-chain record, not in the printed square."
      }
    },
    {
      "@type": "Question",
      "name": "What does this look like for a brand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On the brand side you get a dashboard, but the agent does the heavy lifting. You define a passport template for a product category once — warranty period, carbon footprint, energy and water use, care and end-of-life instructions — and the agent populates, authenticates and issues passports across your catalogue, one product or in bulk. You get compliance with Canada's product-integrity and labelling rules — and EU-DPP alignment for export — without staffing a data-entry team, counterfeit protection that guards revenue, and a direct channel to customers after the sale, plus authenticated resale and take-back programs that extend the product's life and your relationship with the buyer."
      }
    },
    {
      "@type": "Question",
      "name": "And what does the buyer get?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The buyer just taps or scans the tag — no app, no account. In one scan they see whether the item is genuine, where it came from, what it's made of and how sustainable it is, plus care instructions and warranty details that stay attached for the product's life. They can claim verifiable ownership of the item, and when they resell or gift it, that ownership transfers with the passport — so the next owner gets the same proof. It turns a physical product into something a shopper, a reseller or an auditor can independently trust."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to understand blockchain to use it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The agent handles anchoring in the background — you work with products and passports, not wallets or gas. Records are written on-chain (via the Arianee protocol on Polygon) purely so the agent's findings are tamper-proof and independently verifiable: anyone can confirm a passport without trusting a single company's private database. You get that guarantee without touching the plumbing."
      }
    }
  ]
}
`;
