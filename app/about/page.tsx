import type { Metadata } from 'next';

import { DesignSystemStylesheet } from '@/components/DesignSystemStylesheet';
import { InlineStyle } from '@/components/InlineStyle';
import { JsonLd } from '@/components/JsonLd';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter, FooterColumn } from '@/components/SiteFooter';

import { pageCss } from './page.css';

/* ------------------------------------------------------------------
   /about/  <- about/index.html

   theme-color is #ffffff in the source, which is the root layout's
   default — no route-level `viewport` export needed.
   ------------------------------------------------------------------ */

const TITLE = 'About Pandora — AI-Native Product Studio in Toronto';
const DESCRIPTION =
  "Pandora is the brand of Aconomy Labs Inc. — a Toronto AI-native product studio building agentic software on verifiable infrastructure since 2021. Meet the team.";
const OG_IMAGE_ALT = 'Pandora — the brand of Aconomy Labs Inc., Toronto';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/about/' },
  openGraph: {
    type: 'website',
    // siteName / locale are re-declared because a route-level `openGraph`
    // REPLACES the root layout's object outright — it is not deep-merged.
    // Without these, og:site_name and og:locale vanish from this page.
    siteName: 'Pandora',
    locale: 'en_CA',
    title: TITLE,
    description: DESCRIPTION,
    url: '/about/',
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

/* ---- JSON-LD block 1: AboutPage + Organization + the four People ---- */
const aboutGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.pandora.finance/about/#webpage',
      url: 'https://www.pandora.finance/about/',
      name: 'About Pandora — AI-Native Product Studio in Toronto',
      description:
        'Pandora is the brand of Aconomy Labs Inc. — a Toronto AI-native product studio building agentic software on verifiable infrastructure since 2021. Meet the team.',
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
        '@id': 'https://www.pandora.finance/#organization',
      },
      mainEntity: {
        '@id': 'https://www.pandora.finance/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.pandora.finance/#organization',
      name: 'Pandora',
      legalName: 'Aconomy Labs Inc.',
      alternateName: 'Aconomy Labs',
      url: 'https://www.pandora.finance',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.pandora.finance/assets/logos/Pandora_Dark.png',
      },
      image: 'https://www.pandora.finance/og-image.png',
      slogan: 'Agentic products, built for the real world',
      description:
        'Pandora is the brand of Aconomy Labs Inc., an AI-native product studio in Toronto, Canada building agentic software on verifiable infrastructure since 2021.',
      foundingDate: '2021',
      foundingLocation: {
        '@type': 'Place',
        name: 'Toronto, Canada',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '111 Peter Street, 9th Floor, Suite 902',
        addressLocality: 'Toronto',
        addressRegion: 'ON',
        postalCode: 'M5V 2H1',
        addressCountry: 'CA',
      },
      sameAs: [
        'https://x.com/aconomyfdn',
        'https://github.com/Pandora-Finance',
        'https://www.linkedin.com/company/aconomyfoundation',
      ],
      founder: [
        { '@id': 'https://www.pandora.finance/about/#pushkar-vohra' },
        {
          '@id':
            'https://www.pandora.finance/about/#opinder-preet-singh-narang',
        },
        { '@id': 'https://www.pandora.finance/about/#har-rhythm-kaur' },
      ],
      employee: [
        { '@id': 'https://www.pandora.finance/about/#pushkar-vohra' },
        {
          '@id':
            'https://www.pandora.finance/about/#opinder-preet-singh-narang',
        },
        { '@id': 'https://www.pandora.finance/about/#har-rhythm-kaur' },
        { '@id': 'https://www.pandora.finance/about/#tamur-shah' },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.pandora.finance/about/#pushkar-vohra',
      name: 'Pushkar Vohra',
      jobTitle: 'Founder & CEO',
      description:
        'Architect of the stack: smart contracts, marketplaces and the agentic systems on top. Previously co-founded Blockslab; TEDx speaker.',
      worksFor: { '@id': 'https://www.pandora.finance/#organization' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.pandora.finance/about/#opinder-preet-singh-narang',
      name: 'Opinder Preet Singh Narang',
      jobTitle: 'Co-Founder, Execution',
      description:
        'Turns products into companies: operations, partnerships and capital. Founding partner at Chain Assets Capital; previously at Aave.',
      worksFor: { '@id': 'https://www.pandora.finance/#organization' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.pandora.finance/about/#har-rhythm-kaur',
      name: 'Har Rhythm Kaur',
      jobTitle: 'Co-Founder, Research & Analytics',
      description:
        'Data science and ML with 5+ years at IBM. Designs the research, dashboards and models behind the agents.',
      worksFor: { '@id': 'https://www.pandora.finance/#organization' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.pandora.finance/about/#tamur-shah',
      name: 'Tamur Shah',
      jobTitle: 'Head of Compliance & Licensing',
      description:
        'Leads licensing, compliance and risk across jurisdictions.',
      worksFor: { '@id': 'https://www.pandora.finance/#organization' },
    },
  ],
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
      name: 'About',
      item: 'https://www.pandora.finance/about/',
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <DesignSystemStylesheet />
      <InlineStyle css={pageCss} />
      <JsonLd data={aboutGraph} />
      <JsonLd data={breadcrumbs} />

      {/* NAV */}
      <SiteNav
        productsHref="/#products"
        links={[
          { href: '/#proof', label: 'Proof' },
          { href: '/#products', label: 'Products' },
          { href: '/#partners', label: 'Partners' },
          { href: '/about/', label: 'About', active: true },
          { href: '/#contact', label: 'Contact' },
        ]}
      />

      <main>
        {/* ABOUT HERO */}
        <section className="about-hero">
          <div className="wrap">
            <span className="kicker">About</span>
            <h1 className="reveal">
              An AI-native product studio, <span className="grad">building in Canada.</span>
            </h1>
            <p className="lead reveal">
              Pandora is the brand of <b>Aconomy Labs Inc.</b>, incorporated in
              Toronto. Since 2021 we&apos;ve built <b>agentic software</b> that
              autonomously does real work — validating assets, screening
              tenants, passporting products, managing risk and settling payments
              — on <b>verifiable infrastructure</b> that keeps every action
              provable.
            </p>
            <div className="about-meta reveal">
              <span>
                <span className="d"></span>Founded 2021
              </span>
              <span>
                <span className="d"></span>Toronto, Canada
              </span>
              <span>
                <span className="d"></span>7 products, one team
              </span>
              <span>
                <span className="d"></span>Incubated by TBDC, BHive &amp; OCI
              </span>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section id="story" className="section">
          <div className="wrap">
            <div className="story-grid">
              <div className="reveal">
                <span className="kicker">Why we exist</span>
                <p className="story-lead" style={{ marginTop: '20px' }}>
                  We build where <span className="hl">artificial intelligence meets real-world value.</span>
                </p>
              </div>
              <div className="reveal">
                <div className="story-body">
                  <p>
                    For decades, the hardest parts of commerce — proving an
                    asset is genuine, deciding who to trust, moving value safely
                    — needed a human in the loop. AI changes that. Agents can
                    now <b>reason, decide and act</b>, not just answer.
                  </p>
                  <p>
                    So we build products where an agent carries the whole task,
                    end to end, autonomously. And because these actions touch
                    real assets and real money, we anchor them to <b>verifiable infrastructure</b> — so
                    every step is provable rather than promised.
                  </p>
                  <p>
                    We&apos;re a small, senior team that has been shipping
                    since 2021: a $2.4M seed round, two independent audits, a
                    live app on Google Play, and a family of seven products on
                    one foundation. We build in the open and let the work speak.
                  </p>
                  <div className="story-facts">
                    <span className="fact">
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
                      $2.4M seed, 5× oversubscribed
                    </span>
                    <span className="fact">
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
                      2 independent audits
                    </span>
                    <span className="fact">
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
                      </svg>
                      Incorporated in Toronto, Canada
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="section">
          <div className="wrap">
            <div className="team-head reveal">
              <span className="kicker">Who&apos;s behind it</span>
              <h2 style={{ marginTop: '16px' }}>
                The team behind the products.
              </h2>
              <p>
                A small, senior team — smart contracts and agents, operations
                and capital, research and analytics, compliance and licensing.
              </p>
            </div>

            <div className="team-grid">
              <article className="mcard reveal">
                <img
                  className="photo"
                  src="/assets/team/pushkar.png"
                  alt="Pushkar Vohra"
                  loading="lazy"
                  width="96"
                  height="96"
                />
                <div className="nm">Pushkar Vohra</div>
                <div className="rl">Founder &amp; CEO</div>
                <p className="bio">
                  Architect of the stack: smart contracts, marketplaces and the
                  agentic systems on top. Previously co-founded Blockslab; TEDx
                  speaker.
                </p>
              </article>

              <article className="mcard reveal">
                <img
                  className="photo"
                  src="/assets/team/opinder.png"
                  alt="Opinder Preet Singh Narang"
                  loading="lazy"
                  width="96"
                  height="96"
                />
                <div className="nm">Opinder Preet Singh Narang</div>
                <div className="rl">Co-Founder, Execution</div>
                <p className="bio">
                  Turns products into companies: operations, partnerships and
                  capital. Founding partner at Chain Assets Capital; previously
                  at Aave; 50+ early-stage investments.
                </p>
              </article>

              <article className="mcard reveal">
                <img
                  className="photo"
                  src="/assets/team/harrhythm.png"
                  alt="Har Rhythm Kaur"
                  loading="lazy"
                  width="96"
                  height="96"
                />
                <div className="nm">Har Rhythm Kaur</div>
                <div className="rl">Co-Founder, Research &amp; Analytics</div>
                <p className="bio">
                  Data science and ML — 5+ years at IBM. Designs the research,
                  dashboards and models that keep the agents honest.
                </p>
              </article>
            </div>

            <div className="team-slim reveal">
              <img
                className="photo"
                src="/assets/team/tamur.png"
                alt="Tamur Shah"
                loading="lazy"
                width="80"
                height="80"
              />
              <div className="ts-meta">
                <div className="nm">Tamur Shah</div>
                <div className="rl">Head of Compliance &amp; Licensing</div>
                <p className="bio">
                  Keeps every product inside the regulatory lines — licensing,
                  compliance and risk across jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="about-cta" className="section">
          <div className="wrap">
            <span className="kicker on-navy">Work with us</span>
            <h2 style={{ marginTop: '16px' }}>See what the agents can do.</h2>
            <p>
              Explore the seven products, or book a walkthrough with the team —
              the agent, the SDK, or the roadmap.
            </p>
            <div className="cta-row">
              <a
                className="btn btn-glow"
                href="https://calendly.com/rhythm-pandora/30min"
                target="_blank"
                rel="noopener"
                title="Booking opens shortly"
              >
                Book a demo
              </a>
              <a className="btn btn-wire-d" href="/#products">
                Explore the products
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <SiteFooter>
        <FooterColumn heading="Products">
          <a href="/express-protocol/">Express Protocol</a>
          <a href="/aconomy/">Aconomy</a>
          <a href="/propty/">Propty</a>
          <a href="/dpp/">The DPP Company</a>
          <a href="/vanna/">Vanna Protocol</a>
          <a href="/auri/">Auri</a>
          <a href="/unitymarket/">UnityMarket</a>
        </FooterColumn>
        <FooterColumn heading="Company">
          <a href="/#proof">Proof of work</a>
          <a href="/#partners">Partners</a>
          <a href="/about/">About</a>
          <a href="/trust/">Trust &amp; audits</a>
          <a
            href="https://calendly.com/rhythm-pandora/30min"
            target="_blank"
            rel="noopener"
            title="Booking opens shortly"
          >
            Book a demo
          </a>
          <a href="/#contact">Contact</a>
        </FooterColumn>
      </SiteFooter>

      <RevealOnScroll />
    </>
  );
}
