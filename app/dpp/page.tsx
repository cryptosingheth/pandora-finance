import type { Metadata, Viewport } from 'next';

import { DesignSystemStylesheet } from '@/components/DesignSystemStylesheet';
import { InlineStyle } from '@/components/InlineStyle';
import { JsonLd } from '@/components/JsonLd';

import { pageCss } from './page.css';
import { jsonLd0, jsonLd1 } from './jsonld';
import { Reveal } from './Reveal';

/* ------------------------------------------------------------------
   /dpp/ — The DPP Company. Ported 1:1 from dpp/index.html.

   Brand chrome is page-local on purpose: the DPP violet (#6941C6)
   header with the dpp-logo2 wordmark and the navy footer with the full
   dpp-logo are nothing like the Pandora SiteNav/SiteFooter, so they are
   reproduced inline rather than forced through the shared components.

   Positioning is Canada-first — Combating Counterfeit Products Act,
   CBSA, Competition Act — with the EU (ESPR) framed as the expansion
   market. That wording is deliberate; do not soften or reorder it.
   ------------------------------------------------------------------ */

const TITLE = 'The DPP Company — AI Digital Product Passports | Pandora';
const DESCRIPTION =
  'An AI agent that authenticates products, traces provenance and issues Digital Product Passports — built for Canadian law, EU-DPP ready, anchored on-chain.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/dpp/' },
  // NOTE: a route-level `openGraph` / `twitter` object REPLACES the root
  // layout's wholesale — it is not merged field-by-field. So siteName,
  // locale, card and site have to be restated here or they vanish from
  // the emitted head. Verified against out/dpp/index.html.
  openGraph: {
    type: 'website',
    siteName: 'Pandora',
    locale: 'en_CA',
    title: TITLE,
    description: DESCRIPTION,
    url: '/dpp/',
    // The source page declares og:image with width/height and no alt.
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

// dpp/index.html declares <meta name="theme-color" content="#006cff">,
// overriding the root layout's #ffffff.
export const viewport: Viewport = { themeColor: '#006cff' };

export default function DppPage() {
  return (
    <>
      <DesignSystemStylesheet />
      <InlineStyle css={pageCss} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <JsonLd raw={jsonLd0} />
      <JsonLd raw={jsonLd1} />
      <Reveal />

      {/* ===================== NAV ===================== */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="/dpp/" aria-label="The DPP Company home">
            <img className="brand-logo" src="/dpp/assets/dpp-logo2.svg" alt="The DPP Company" width="82" height="37" />
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a className="navlink" href="#how">What the agent does</a>
            <a className="navlink" href="#whyagent">Why an agent</a>
            <a className="navlink" href="#builtfor">For brands &amp; buyers</a>
            <a className="navlink" href="#faq">FAQ</a>
            <a className="navlink backhub" href="/" aria-label="Back to Pandora">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
              Pandora
            </a>
          </nav>
          <div className="nav-cta">
            <a className="btn btn-outline hide-mobile" href="#try">See it work</a>
            <a className="btn btn-dpp" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="btn btn-outline nav-toggle" href="#how" aria-label="Menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ===================== HERO ===================== */}
        {/* SCREENS-GIF-SLOT */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="reveal">
              <span className="kicker">Agentic product intelligence</span>
              <h1>An AI agent that verifies and <span className="grad">passports physical products.</span></h1>
              <p className="lead">Every other passport tool hands you a dashboard and leaves the work to your team. The DPP Company is an <b>autonomous verification agent</b> instead: point it at a product and it authenticates the item, traces its provenance and supply chain, reads its materials and certifications, flags counterfeits, then issues and keeps its Digital Product Passport current — ready for Canada&apos;s product-integrity rules today and the EU&apos;s incoming passport standard tomorrow — from a single scan, with every finding checkable and anchored on-chain.</p>
              <div className="hero-cta">
                <a className="btn btn-dpp" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
                <a className="btn btn-outline" href="#how">What the agent does</a>
              </div>
              <div className="hero-trust">
                <span className="ti"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 12 3 4 7v6c0 5 3.4 7.4 8 9 4.6-1.6 8-4 8-9V7z"/><path d="m9 12 2 2 4-4"/></svg>Autonomous verification</span>
                <span className="sep" aria-hidden="true"></span>
                <span className="ti"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3 8-8"/><path d="M21 12a9 9 0 1 1-6.2-8.6"/></svg>Canada-first, EU-ready</span>
                <span className="sep" aria-hidden="true"></span>
                <span className="ti"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M20 20h.01M20 14h.01M14 20h.01"/></svg>Scan to verify</span>
              </div>
            </div>

            {/* passport card visual */}
            <div className="pp-stage reveal" aria-hidden="true">
              <div className="pp-glow"></div>
              <div className="passport">
                <div className="pp-head">
                  <div className="pp-brand">
                    <span className="g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 12 3 4 7v6c0 5 3.4 7.4 8 9 4.6-1.6 8-4 8-9V7z"/></svg></span>
                    <div><div className="pp-t">Meridian Field Jacket</div><div className="pp-s">Atelier Nord · No. 0042 / 500</div></div>
                  </div>
                  <span className="pp-verif"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg>Verified</span>
                </div>
                <div className="pp-body">
                  <div className="pp-prod">Digital Product Passport</div>
                  <div className="pp-meta">Issued by the DPP agent · 14 Mar 2026 · 0x8f…3aD1</div>
                  <div className="pp-rows">
                    <div className="pp-row"><span className="k">Authenticity</span><span className="v" style={{ color: 'var(--dpp-deep)' }}>✓ Genuine — agent verified</span></div>
                    <div className="pp-row"><span className="k">Provenance</span><span className="v">Québec → Canada · 3 hops</span></div>
                    <div className="pp-row"><span className="k">Materials</span>
                      <span className="pp-chiprow"><span className="pp-chip">82% Organic cotton</span><span className="pp-chip">18% Recycled</span></span>
                    </div>
                    <div className="pp-row"><span className="k">Certifications</span>
                      <span className="pp-chiprow"><span className="pp-chip">GOTS</span><span className="pp-chip">GRS</span><span className="pp-chip">OEKO-TEX</span></span>
                    </div>
                  </div>
                </div>
                <div className="pp-foot">
                  <svg className="pp-qr" viewBox="0 0 100 100" role="img" aria-label="QR code">
                    <rect width="100" height="100" fill="#fff"/>
                    <g fill="#271454">
                      <rect x="8" y="8" width="26" height="26"/><rect x="14" y="14" width="14" height="14" fill="#fff"/><rect x="18" y="18" width="6" height="6" fill="#271454"/>
                      <rect x="66" y="8" width="26" height="26"/><rect x="72" y="14" width="14" height="14" fill="#fff"/><rect x="76" y="18" width="6" height="6" fill="#271454"/>
                      <rect x="8" y="66" width="26" height="26"/><rect x="14" y="72" width="14" height="14" fill="#fff"/><rect x="18" y="76" width="6" height="6" fill="#271454"/>
                      <rect x="42" y="10" width="6" height="6"/><rect x="52" y="10" width="6" height="6"/><rect x="42" y="20" width="6" height="6"/><rect x="42" y="42" width="6" height="6"/><rect x="52" y="42" width="6" height="6"/><rect x="62" y="42" width="6" height="6"/><rect x="72" y="42" width="6" height="6"/><rect x="84" y="42" width="6" height="6"/><rect x="42" y="52" width="6" height="6"/><rect x="62" y="52" width="6" height="6"/><rect x="84" y="52" width="6" height="6"/><rect x="42" y="62" width="6" height="6"/><rect x="52" y="62" width="6" height="6"/><rect x="72" y="62" width="6" height="6"/><rect x="52" y="72" width="6" height="6"/><rect x="62" y="72" width="6" height="6"/><rect x="84" y="72" width="6" height="6"/><rect x="52" y="84" width="6" height="6"/><rect x="72" y="84" width="6" height="6"/><rect x="84" y="84" width="6" height="6"/>
                    </g>
                  </svg>
                  <div className="pp-anchor">
                    <div className="a1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 12 3 4 7v6c0 5 3.4 7.4 8 9 4.6-1.6 8-4 8-9V7z"/></svg>Anchored on Polygon</div>
                    <div className="a2">token 0x7c9e…a04f · Arianee</div>
                  </div>
                </div>
              </div>
              <div className="scan-tag">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2M4 12h16"/></svg></span>
                <div><div className="st">Tap or scan</div><div className="ss">NFC + QR enabled</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SEE IT WORK (demo video) ===================== */}
        <section id="try" className="section">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="kicker">See it work</span>
                <h2>See the passport in action.</h2>
              </div>
              <p className="muted">Watch the verification agent issue a Digital Product Passport for a brand, then a shopper scan it to verify authenticity on a phone — the whole product in one short tour. Then book a live walkthrough with our team.</p>
            </div>
            <figure className="reveal" style={{ margin: '0 0 clamp(24px,3vw,34px)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--gray-200)', boxShadow: '0 24px 60px rgba(16,32,64,.12)' }}>
              <video autoPlay muted loop playsInline preload="metadata" poster="/dpp/media/dpp-demo-poster.png" aria-label="The DPP Company product tour — the brand's My Passports dashboard, issuing a Digital Product Passport with sustainability and material data, the consumer-facing verified public passport, and a shopper scanning to verify authenticity on a phone" style={{ width: '100%', display: 'block' }}>
                <source src="/dpp/media/dpp-demo.webm" type="video/webm" />
                <source src="/dpp/media/dpp-demo.mp4" type="video/mp4" />
                <img src="/dpp/media/dpp-demo-poster.png" alt="The DPP Company product tour — the brand's My Passports dashboard, issuing a Digital Product Passport, the verified public passport, and a shopper scanning to verify authenticity on a phone" loading="lazy" decoding="async" style={{ width: '100%', display: 'block' }} />
              </video>
            </figure>
            <div className="reveal" style={{ maxWidth: '560px', margin: '0 auto' }}>
              <a className="try-card" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">
                <span className="ti"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span>
                <div>
                  <h3>Book a demo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
                  </h3>
                  <p>See the verification agent authenticate, trace provenance, check materials and issue a passport on a live product — walked through with our team.</p>
                  <div className="tmeta">30-minute walkthrough</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== WHY NOW (Canada-first) ===================== */}
        <section className="whynow section">
          <div className="wrap">
            <div className="reveal">
              <span className="eu-badge"><span className="stars">🍁</span> Canada · product-integrity law</span>
              <h2 style={{ marginTop: '18px' }}>In Canada, product integrity is already the law.</h2>
              <p className="eu-lead">We&apos;re a Canadian company, built for the Canadian market first. Here, authenticity, honest sustainability claims and truthful labelling aren&apos;t nice-to-haves — they&apos;re enforced. The <strong>Combating Counterfeit Products Act</strong> makes trafficking in counterfeit goods a civil and criminal offence, and the <strong>CBSA</strong> can detain suspect shipments at the border. Since June 2024 the <strong>Competition Act</strong> requires environmental and product claims to be backed by proper testing — with the burden on the seller.</p>
              <p className="eu-note">The DPP agent turns each of those obligations into one verifiable record — and it travels. A passport issued in Canada is already aligned with the EU&apos;s incoming <strong>Digital Product Passport</strong> rules (ESPR), so when you expand into Europe you&apos;re compliant before the deadlines land, not scrambling after.</p>
            </div>
            <div className="eu-panel reveal">
              <ul className="eu-list">
                <li><span className="yr">Fakes</span><span className="ev"><strong>Combating Counterfeit Products Act</strong><span>Trafficking counterfeit goods is a civil and criminal offence — and CBSA can detain suspect imports at the border.</span></span></li>
                <li><span className="yr">Claims</span><span className="ev"><strong>Competition Act — honest claims</strong><span>Since June 2024, environmental and product claims must be backed by adequate and proper testing, or they&apos;re deceptive marketing.</span></span></li>
                <li><span className="yr">Labels</span><span className="ev"><strong>Textile &amp; consumer labelling</strong><span>The Textile Labelling and Consumer Packaging &amp; Labelling Acts require accurate, verifiable product information.</span></span></li>
                <li><span className="yr">Repair</span><span className="ev"><strong>Right to repair — C-244 &amp; C-294</strong><span>Federal law now backs repair and interoperability, pushing brands toward longer-lived, traceable products.</span></span></li>
                <li><span className="yr">EU →</span><span className="ev"><strong>Then the EU, when you expand</strong><span>The same passport is already aligned with the EU&apos;s incoming Digital Product Passport (ESPR) rules.</span></span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== HOW IT WORKS ===================== */}
        <section id="how" className="section">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="kicker">What the agent does</span>
                <h2>The agent works a product end to end.</h2>
              </div>
              <p className="muted">No blockchain expertise required. Point the DPP agent at a product and it authenticates, traces, verifies and issues the passport autonomously.</p>
            </div>

            <div className="steps">
              <div className="step reveal">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 12 3 4 7v6c0 5 3.4 7.4 8 9 4.6-1.6 8-4 8-9V7z"/><path d="m9 12 2 2 4-4"/></svg></span>
                <h3>Authenticates the product</h3>
                <p>The agent checks the item against issuer signatures and its unique tag, confirms it&apos;s genuine — not a replica — and flags anything that doesn&apos;t add up as a suspected counterfeit.</p>
                <div className="step-flow">Authenticate &amp; flag <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
              </div>
              <div className="step reveal">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h13l3 3v7H3z"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/><path d="M3 11h13"/></svg></span>
                <h3>Traces provenance &amp; reads certs</h3>
                <p>It maps the supply chain from origin to shelf, then reads the item&apos;s materials, recycled content and certifications — GOTS, GRS, OEKO-TEX and more — verifying each against the record.</p>
                <div className="step-flow">Trace &amp; verify <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
              </div>
              <div className="step reveal">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 12 3 4 7v6c0 5 3.4 7.4 8 9 4.6-1.6 8-4 8-9V7z"/><path d="m9 12 2 2 4-4"/></svg></span>
                <h3>Issues &amp; updates the passport</h3>
                <p>The agent compiles its findings into a Digital Product Passport, links it to a QR or NFC tag, and keeps it current as the item moves or ownership changes — one tap or scan opens the live record.</p>
                <div className="step-flow">Issue &amp; keep current <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== WHY AN AGENT (vs dashboard) ===================== */}
        <section id="whyagent" className="section">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="kicker">Why an agent, not another dashboard</span>
                <h2>Most passport tools give you software. We give you the work done.</h2>
              </div>
              <p className="muted wa-kicker-line">The hard part of a Digital Product Passport was never hosting it — it&apos;s collecting, standardising and verifying product data across a messy, multi-tier supply chain. Platforms hand that job back to you. Our agent does it.</p>
            </div>

            <div className="wa-grid">
              {/* THEM */}
              <div className="wa-col them reveal">
                <div className="wa-tag">A passport platform</div>
                <h3>A dashboard you have to run.</h3>
                <p className="wa-sub">You buy the software, then staff it — chasing suppliers, importing spreadsheets, mapping fields and clearing compliance gaps by hand, catalogue after catalogue.</p>
                <ul className="wa-list">
                  <li><span className="wa-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg></span><span>Integrations to configure and data to reconcile before a single passport ships.</span></li>
                  <li><span className="wa-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg></span><span>Authenticity and provenance are fields you populate — not checks the tool performs.</span></li>
                  <li><span className="wa-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg></span><span>Keeping every record current as products move or resell becomes ongoing manual work.</span></li>
                </ul>
              </div>

              {/* US */}
              <div className="wa-col us reveal">
                <div className="wa-tag">The DPP agent</div>
                <h3>An agent that does the work.</h3>
                <p className="wa-sub">Point it at a product or a catalogue. It authenticates, traces, reads the certs and issues the passport itself — and shows its working so every finding is checkable.</p>
                <ul className="wa-list">
                  <li><span className="wa-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Autonomous, not administrative</b> — it authenticates and traces provenance, it doesn&apos;t just store what you type in.</span></li>
                  <li><span className="wa-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Compliance as an outcome</b> — Canada-ready, EU-aligned passports fall out of the run, not a separate project.</span></li>
                  <li><span className="wa-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Verifiable by design</b> — every finding is anchored on-chain and open to inspection, not locked inside one vendor&apos;s dashboard.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FEATURES ===================== */}
        <section id="features" className="section" style={{ background: 'var(--white)' }}>
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="kicker">Agent capabilities</span>
                <h2>What the verification agent can do.</h2>
              </div>
              <p className="muted">A full agentic workflow — authenticate, trace, verify, passport — grounded in open standards so every finding is checkable.</p>
            </div>

            <div className="feat-grid">
              <div className="feat reveal">
                <span className="ftag">01</span>
                <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 12 3 4 7v6c0 5 3.4 7.4 8 9 4.6-1.6 8-4 8-9V7z"/><path d="m9 12 2 2 4-4"/></svg></span>
                <h3>Authenticates instantly</h3>
                <p>Checks issuer signatures and the item&apos;s tag to confirm it&apos;s genuine — not a replica — in a single scan.</p>
              </div>
              <div className="feat reveal">
                <span className="ftag">02</span>
                <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h13l3 3v7H3z"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/><path d="M3 11h13"/></svg></span>
                <h3>Traces the supply chain</h3>
                <p>Reconstructs a product&apos;s journey from origin to shelf, recording each verified step against its passport.</p>
              </div>
              <div className="feat reveal">
                <span className="ftag">03</span>
                <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5 1.5 5 .5 8"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg></span>
                <h3>Reads materials &amp; sustainability</h3>
                <p>Parses material composition, recycled content and environmental data, then verifies it buyers can trust.</p>
              </div>
              <div className="feat reveal">
                <span className="ftag">04</span>
                <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6"/><path d="m9 13.5-1.5 7L12 18l4.5 2.5L15 13.5"/></svg></span>
                <h3>Verifies certifications</h3>
                <p>Reads and validates credentials — GOTS, GRS, OEKO-TEX and more — attaching each to the passport.</p>
              </div>
              <div className="feat reveal">
                <span className="ftag">05</span>
                <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3h4v4M21 3l-7 7M7 21H3v-4M3 21l7-7"/><circle cx="12" cy="12" r="2.4"/></svg></span>
                <h3>Issues &amp; updates passports</h3>
                <p>Compiles its findings into a Digital Product Passport and keeps it current as the item moves or resells.</p>
              </div>
              <div className="feat reveal">
                <span className="ftag">06</span>
                <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 7v5c0 4.5 3.2 7.3 8 9 4.8-1.7 8-4.5 8-9V7z"/><path d="M15 9.5 10.5 14 9 12.5"/><path d="m8.5 9.5 1.5 1.5"/></svg></span>
                <h3>Flags counterfeits</h3>
                <p>Cross-checks tags and records to spot fakes and clones, raising a flag the moment something doesn&apos;t add up.</p>
              </div>
              <div className="feat reveal">
                <span className="ftag">07</span>
                <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3h4v4M21 3l-7 7M7 21H3v-4M3 21l7-7"/><circle cx="12" cy="12" r="2.4"/></svg></span>
                <h3>Transfers ownership</h3>
                <p>Moves verifiable ownership with the item on resale or gifting — powering authenticated second-hand markets.</p>
              </div>
              <div className="feat reveal">
                <span className="ftag">08</span>
                <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 12 3 4 7v6c0 5 3.4 7.4 8 9 4.6-1.6 8-4 8-9V7z"/><path d="m9 12 2 2 4-4"/></svg></span>
                <h3>Anchors it tamper-proof</h3>
                <p>Every passport the agent issues is written to tamper-proof, on-chain records with content-addressed media — so its findings can&apos;t be quietly altered.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== BUILT FOR ===================== */}
        <section id="builtfor" className="section">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="kicker">Built for both sides</span>
                <h2>Value for the brand — and the buyer.</h2>
              </div>
              <p className="muted">One agent, two audiences. Brands get compliance and trust on autopilot; buyers get an instant, verifiable answer.</p>
            </div>

            <div className="bf-grid">
              {/* BRANDS */}
              <div className="bf-card for-brands reveal">
                <span className="bf-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6"/></svg></span>
                <div className="bf-eyebrow">For brands</div>
                <h3>Compliance and trust, handled by the agent.</h3>
                <p className="bf-sub">Turn a regulatory requirement into a brand advantage — without the manual work.</p>
                <ul className="bf-list">
                  <li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Compliance, built in</b> — passports that satisfy Canada&apos;s product-integrity rules and align with the EU DPP, issued across your catalog.</span></li>
                  <li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Fight counterfeits</b> — automated authentication flags fakes and protects revenue.</span></li>
                  <li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Own the relationship</b> — connect with customers after the sale, not just at checkout.</span></li>
                  <li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Circularity &amp; resale</b> — enable authenticated second-hand and take-back programs.</span></li>
                </ul>
              </div>

              {/* CONSUMERS */}
              <div className="bf-card for-buyers reveal">
                <span className="bf-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg></span>
                <div className="bf-eyebrow">For consumers</div>
                <h3>Ask the agent — get the whole story.</h3>
                <p className="bf-sub">One scan and the agent tells you everything about a product.</p>
                <ul className="bf-list">
                  <li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Prove it&apos;s real</b> — the agent verifies authenticity before you buy, at the shelf or resale.</span></li>
                  <li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Know its story</b> — see traced origin, materials and sustainability at a glance.</span></li>
                  <li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Care &amp; repair</b> — keep instructions and warranty details attached for the item&apos;s life.</span></li>
                  <li><span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10"/></svg></span><span><b>Own with proof</b> — hold verifiable ownership and pass it on when you resell.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CTA BAND ===================== */}
        <section id="demo" className="cta section">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker on-dark" style={{ justifyContent: 'center' }}>See the agent work</span>
              <h2 style={{ marginTop: '16px' }}>Put an AI agent on every product you make.</h2>
              <p>Book a walkthrough and watch the agent work a live product end to end — authenticate, trace, verify and issue the passport — built for Canada, aligned with the EU DPP, tamper-proof, all from a single scan.</p>
              <div className="cta-cta">
                <a className="btn btn-glow" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
                <a className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }} href="#try">See it work</a>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== FAQ ===================== */}
        <section id="faq" className="section">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="kicker">Questions</span>
                <h2>What people ask about the agent.</h2>
              </div>
              <p className="muted">Straight answers on how the DPP agent works, where it fits, and what it means for compliance.</p>
            </div>
            <div className="faq-wrap reveal">
              <details className="faq">
                <summary>What exactly is a Digital Product Passport?<span className="qmark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary>
                <p>A Digital Product Passport (DPP) is a structured, machine-readable record of a physical item — its identity, origin, material composition, certifications, care and repair guidance, and end-of-life instructions. A data carrier on the product itself, a QR code or NFC tag, links the physical item to that record, so anyone can scan it and read the item&apos;s full story. The DPP travels with the product for its entire life: as it&apos;s resold, repaired or recycled, the passport stays attached and stays current.</p>
              </details>
              <details className="faq">
                <summary>What rules does this help me meet — in Canada and the EU?<span className="qmark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary>
                <p>We&apos;re a Canadian company, so the agent is built for Canadian law first. Trafficking in counterfeit goods is a civil and criminal offence under the Combating Counterfeit Products Act, and the CBSA can detain suspect imports at the border for rights holders who file a Request for Assistance. Since June 2024 the Competition Act requires environmental and product claims to be backed by adequate and proper testing or substantiation — and the burden of proof sits with the seller. The Textile Labelling Act and Consumer Packaging and Labelling Act require accurate, verifiable product information, and 2024&apos;s right-to-repair bills (C-244 and C-294) push the market toward repairable, longer-lived products. A Digital Product Passport gives you one verifiable record behind all of it. It&apos;s also aligned with the EU&apos;s Digital Product Passport, mandated by the Ecodesign for Sustainable Products Regulation (ESPR) and phasing in by category — batteries first, then textiles, electronics and more — so when you expand into Europe the same passport carries over. The agent tracks these evolving specs rather than hard-coding a single fixed template.</p>
              </details>
              <details className="faq">
                <summary>How does the agent authenticate a product and issue its passport?<span className="qmark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary>
                <p>It runs the product through a full pipeline. First it authenticates: it checks the item&apos;s unique tag and identifier against the issuer&apos;s signature to confirm it&apos;s the genuine article. Then it traces provenance across the supply chain, and reads the item&apos;s materials, recycled content and certifications — GOTS, GRS, OEKO-TEX and others — verifying each against the record. Finally it compiles those findings into a Digital Product Passport, pins the images and documents to content-addressed storage (IPFS), and mints a tamper-proof certificate anchored on-chain. The passport is bound to a QR or NFC tag, and the agent keeps it current as the item moves or changes hands. Every step is shown, so each finding is checkable rather than taken on trust.</p>
              </details>
              <details className="faq">
                <summary>How does it actually stop counterfeits?<span className="qmark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary>
                <p>A plain QR code can be photographed and reprinted onto a fake, and it will still resolve to a page. This is different because the tag is only the doorway — behind it is a passport cryptographically bound to a specific, issuer-signed identifier and anchored on-chain. When someone scans a genuine item, the agent confirms the signature matches and the record checks out. When a cloned tag is scanned on a counterfeit, there&apos;s no valid issuer signature behind it and nothing legitimate to resolve to: the check fails and the item is flagged as suspected counterfeit instead of quietly passing. The proof lives in the signed, on-chain record, not in the printed square.</p>
              </details>
              <details className="faq">
                <summary>What does this look like for a brand?<span className="qmark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary>
                <p>On the brand side you get a dashboard, but the agent does the heavy lifting. You define a passport template for a product category once — warranty period, carbon footprint, energy and water use, care and end-of-life instructions — and the agent populates, authenticates and issues passports across your catalogue, one product or in bulk. You get compliance with Canada&apos;s product-integrity and labelling rules — and EU-DPP alignment for export — without staffing a data-entry team, counterfeit protection that guards revenue, and a direct channel to customers after the sale, plus authenticated resale and take-back programs that extend the product&apos;s life and your relationship with the buyer.</p>
              </details>
              <details className="faq">
                <summary>And what does the buyer get?<span className="qmark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary>
                <p>The buyer just taps or scans the tag — no app, no account. In one scan they see whether the item is genuine, where it came from, what it&apos;s made of and how sustainable it is, plus care instructions and warranty details that stay attached for the product&apos;s life. They can claim verifiable ownership of the item, and when they resell or gift it, that ownership transfers with the passport — so the next owner gets the same proof. It turns a physical product into something a shopper, a reseller or an auditor can independently trust.</p>
              </details>
              <details className="faq">
                <summary>Do I need to understand blockchain to use it?<span className="qmark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span></summary>
                <p>No. The agent handles anchoring in the background — you work with products and passports, not wallets or gas. Records are written on-chain (via the Arianee protocol on Polygon) purely so the agent&apos;s findings are tamper-proof and independently verifiable: anyone can confirm a passport without trusting a single company&apos;s private database. You get that guarantee without touching the plumbing.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ===================== BUILT IN THE OPEN ===================== */}
        <section id="oss" className="section">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="kicker">Built in the open</span>
                <h2>From a team that builds in public.</h2>
              </div>
              <p className="muted">The DPP agent is in active development, but it&apos;s built by a team with a track record of open-source work across the Pandora ecosystem.</p>
            </div>
            <div className="oss-strip reveal">
              <a className="repo" href="https://github.com/Pandora-Finance" target="_blank" rel="noopener">
                <span className="gh"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg></span>
                <div>
                  <span className="rpath">Pandora-Finance <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg></span>
                  <p className="rdesc">Built by the Pandora team</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <span className="brand">
                <img className="brand-logo" src="/dpp/assets/dpp-logo.svg" alt="The DPP Company" width="200" height="41" />
              </span>
              <p>An AI agent that authenticates, traces, verifies and passports physical products — built for Canada&apos;s product-integrity rules and the EU&apos;s Digital Product Passport, with every record anchored on-chain. A Pandora product.</p>
            </div>

            <div className="foot-col">
              <h4>Agent</h4>
              <a href="#how">What the agent does</a>
              <a href="#whyagent">Why an agent</a>
              <a href="#builtfor">For brands &amp; buyers</a>
              <a href="#faq">FAQ</a>
            </div>

            <div className="foot-col">
              <h4>Get started</h4>
              <a href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
              <a href="/dpp/product/">See the product</a>
              <a href="#try">See it work</a>
              <a href="/">Pandora</a>
            </div>
          </div>

          <div className="foot-bar">
            <span>© 2021–2026 Aconomy Labs Inc. The DPP Company, a Pandora product. All rights reserved.</span>
            <span className="made">Verifiable by design
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 12 3 4 7v6c0 5 3.4 7.4 8 9 4.6-1.6 8-4 8-9V7z"/><path d="m9 12 2 2 4-4"/></svg>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
