/* ------------------------------------------------------------------
   propty/index.html's <script type="application/ld+json"> blocks,
   copied byte-for-byte in source order (String.raw preserves the JSON
   backslash escapes). Rendered via <JsonLd raw={…} /> on the page.
   ------------------------------------------------------------------ */

export const jsonLd0 = String.raw`
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.pandora.finance/propty/#software",
  "name": "Propty",
  "alternateName": "Propty by Pandora",
  "url": "https://www.pandora.finance/propty/",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Agentic residential leasing platform",
  "operatingSystem": "Web",
  "inLanguage": "en-CA",
  "image": "https://www.pandora.finance/og-image.png",
  "description": "Propty is the complete lease platform — listings, viewings, tenant verification and e-signed leases — operated end to end by an AI agent and made private by zero-knowledge. The agent searches listings, books viewings, screens a tenant who may have no Canadian credit history, produces a zero-knowledge eligibility proof so the host learns only that income clears their threshold and identity is valid, prefills and e-signs the lease, and guarantees the owner's rent on time by the 5th. Every signed contract is hashed and its proof published under the property to build a verifiable property history, while the contract itself stays private. Built around Ontario's Residential Tenancies Act and standard lease.",
  "keywords": "agentic leasing, AI leasing agent, rent guarantee, zero-knowledge tenant verification, Ontario standard lease, Residential Tenancies Act, tenant screening without Canadian credit, e-signed lease, property host, privacy",
  "featureList": [
    "AI agent operates the full lease: listings, viewings, verification, e-signing",
    "Zero-knowledge eligibility proof — income and identity proven, documents never shared",
    "Screens newcomers with no Canadian credit history",
    "Host sets tenant candidacy criteria once and they apply to every listing",
    "Ontario government standard lease for landlords, Propty template for managers and firms",
    "Mandatory landlord-lease upload for managers and firms, guarding against sublet fraud",
    "Rent collected via a licensed payment processor, owner paid on time by the 5th",
    "Signed contracts hashed and published as a verifiable property history"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Landlords, property managers and tenants"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Ontario, Canada"
  },
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
  "@id": "https://www.pandora.finance/propty/#faq",
  "url": "https://www.pandora.finance/propty/",
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
      "name": "What actually happens between browsing a listing and signing a lease?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A tenant browses live listings and requests a viewing through a calendar link (Calendly / Cal); the host confirms and they meet at the property. If the tenant wants to proceed, the host initiates verification and the tenant uploads their documents. Those documents are checked against the host's criteria and turned into a proof — not shared as files. Once the tenant qualifies, Propty prefills the lease from the tenant's details, both sides review and e-sign, and the signed contract lives in each party's dashboard to view or download anytime. The host then marks the listing Booked, and later Rented."
      }
    },
    {
      "@type": "Question",
      "name": "What exactly does the zero-knowledge proof reveal — and what does it hide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The agent reads the tenant's pay stubs, bank statements and ID privately and produces a zero-knowledge eligibility proof: a yes/no that income clears the host's threshold and identity is valid. The host verifies that result and never sees the salary figure, account balance or ID number behind it — data minimisation by design. The tenant's documents contain PII and are kept secure; they are not exposed to the host or the public. The proof system is in active development."
      }
    },
    {
      "@type": "Question",
      "name": "Who can list, and why must some hosts upload a lease first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Property Host is a landlord, property manager or management firm, and you declare which you are at sign-up. If you're a manager or firm rather than the landlord, the platform makes uploading the signed landlord lease a mandatory step before you can list — that's the guard against sublet and rent-to-rent fraud. That uploaded landlord agreement stays private; it is never shown to the public."
      }
    },
    {
      "@type": "Question",
      "name": "How do a host's tenant criteria get applied?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The host sets tenant candidacy criteria once on their profile — income, tenancy terms and the conditions they need — and the platform applies them to every property they list, now and in future. During verification the tenant is tested against those exact criteria to be treated as an authenticated, authorized candidate. You set the rules once instead of re-screening from scratch for every listing."
      }
    },
    {
      "@type": "Question",
      "name": "Which lease template gets used — and can it be edited?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the host type. Landlords get the government standard lease (Ontario's standard form); managers and firms get a Propty-provided template. The correct template is enabled only after the tenant clears verification. Propty prefills it from the tenant's documents, the host can adjust the terms and clauses for their property, and the tenant can leave feedback before the final version is e-signed by both parties."
      }
    },
    {
      "@type": "Question",
      "name": "How does the rent guarantee — and a missed payment — actually work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once a lease is signed, the agent collects rent through a licensed payment processor and delivers the owner's payout on time by the 5th, even if the tenant is late. If a payment slips, the tenant gets a grace window and an agreed plan while the owner stays covered; arrears are handled by clear rules and documented communication, worked out on record rather than left to escalate."
      }
    },
    {
      "@type": "Question",
      "name": "What is the \"property history,\" and how does it help in a dispute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every signed tenant contract is hashed and its proof and hash are published under the property, building a verifiable property history over time. The full contract stays private — visible only to the parties who signed it — but its existence and integrity can be checked later. That gives both sides tamper-proof evidence to lean on if a tenancy is ever disputed, instead of a he-said-she-said paper trail."
      }
    },
    {
      "@type": "Question",
      "name": "Is Propty Ontario-only right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Today, yes. Propty is built around Ontario's Residential Tenancies Act and its standard lease, and the pilot ran in Ontario. The platform keeps contract templates by jurisdiction and tenancy type, so it is designed to extend to other regions and to room-versus-whole-unit rentals over time — but Ontario is where it operates now."
      }
    }
  ]
}
`;
