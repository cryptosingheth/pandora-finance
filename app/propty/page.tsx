import type { Metadata, Viewport } from 'next';

import { DesignSystemStylesheet } from '@/components/DesignSystemStylesheet';
import { InlineStyle } from '@/components/InlineStyle';
import { JsonLd } from '@/components/JsonLd';
import { RevealOnScroll } from '@/components/RevealOnScroll';

import { pageCss } from './page.css';
import { jsonLd0, jsonLd1 } from './jsonld';
import { CurrentYear } from './CurrentYear';

/* ------------------------------------------------------------------
   /propty/ — Propty. Ported 1:1 from propty/index.html.

   Brand chrome is page-local: the deep-teal (#005843) PropTy wordmark
   header and the navy footer are nothing like the Pandora
   SiteNav/SiteFooter, so they are reproduced inline.

   DELIBERATE OMISSION: this page does NOT link to /propty/product/.
   The product demo is gated; the only public CTAs are the Calendly
   "Book a demo" links and the in-page demo video. Do not add one.
   ------------------------------------------------------------------ */

const TITLE = 'Propty — AI Leasing Agent, Rent Guaranteed | Pandora';
const DESCRIPTION =
  'Propty is the complete lease platform run by an AI agent — listings, viewings, zero-knowledge tenant verification, e-signed Ontario leases and guaranteed rent.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/propty/' },
  // NOTE: a route-level `openGraph` / `twitter` object REPLACES the root
  // layout's wholesale — it is not merged field-by-field. So siteName,
  // locale, card and site have to be restated here or they vanish from
  // the emitted head. Verified against out/propty/index.html.
  openGraph: {
    type: 'website',
    siteName: 'Pandora',
    locale: 'en_CA',
    title: TITLE,
    description: DESCRIPTION,
    url: '/propty/',
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

// propty/index.html declares <meta name="theme-color" content="#006cff">,
// overriding the root layout's #ffffff.
export const viewport: Viewport = { themeColor: '#006cff' };

export default function ProptyPage() {
  return (
    <>
      <DesignSystemStylesheet />
      <InlineStyle css={pageCss} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <JsonLd raw={jsonLd0} />
      <JsonLd raw={jsonLd1} />
      {/* Propty's reveal IIFE has no prefers-reduced-motion branch and no
          per-element delay — otherwise identical to the shared observer. */}
      <RevealOnScroll respectReducedMotion={false} />

      {/* ===================== NAV ===================== */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="brandmark" aria-label="Propty home">
            <img src="/propty/assets/PropTy-Horizontal-tight.svg" alt="Propty" height="34" />
          </a>
          <nav className="nav-cta">
            <a href="/" className="navlink">← Pandora hub</a>
            <a href="#platform" className="navlink">The platform</a>
            <a href="#private" className="navlink">Private by proof</a>
            <a href="#see-it" className="navlink">See it in action</a>
            <a className="btn btn-teal" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
          </nav>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="vchip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              The lease platform, run by an AI agent
            </span>
            <h1 style={{ marginTop: '20px' }}>The AI agent that<br />rents you a home —<br /><span className="g">and guarantees the rent.</span></h1>
            <p className="lead">Propty is the complete lease platform — listings, viewings, verification and e-signed leases — operated end to end by an AI agent. It searches rooms, screens a newcomer with no Canadian credit, drafts the lease, and guarantees the rent to the owner. One agent that protects both sides.</p>
            <p className="positioning">The complete lease platform, <b>operated by an AI agent</b>, <b>private by zero-knowledge</b> — a tenant&apos;s documents are proven, never shared.</p>
            <div className="hero-cta">
              <a href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener" className="btn btn-teal btn-try">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '17px', height: '17px' }}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                Book a demo
              </a>
              <a href="#see-it" className="btn btn-ghost">See it in action</a>
            </div>
            <div className="hero-trust">
              <span><i className="dot"></i> Screens tenants with no Canadian credit</span>
              <span><i className="dot"></i> Documents proven by zero-knowledge</span>
              <span><i className="dot"></i> Every lease hash-anchored</span>
            </div>
          </div>

          {/* Dual-sided protection visual */}
          <div className="reveal protect-card" aria-hidden="true">
            <div className="pc-top">
              <span className="pc-badge"><span className="ring"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Agent · lease live</span>
              <span className="pc-live"><i className="pulse"></i> On-time</span>
            </div>
            <div className="flow-rail">
              <div className="flow-side tenant">
                <h4>Tenant</h4>
                <div className="amt">Verified</div>
                <div className="sub">By proof · docs never shared</div>
              </div>
              <div className="flow-mid">
                <span className="chip">Propty agent</span>
                <span className="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
              <div className="flow-side owner">
                <h4>Owner</h4>
                <div className="amt">Paid on time</div>
                <div className="sub">Guaranteed by the 5th</div>
              </div>
            </div>
            <div className="pc-foot">
              <div className="pc-line"><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Eligibility proven — income &amp; identity, yes/no only</div>
              <div className="pc-line"><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Agent drafted RTA lease · e-signed &amp; on file</div>
              <div className="pc-line"><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Lease hash anchored · tamper-proof history</div>
            </div>
            <div className="pc-float"><span className="up">+42 pts</span> credit this year</div>
          </div>
        </div>

        {/* APP-PREVIEW SLOT — polished, on-message product preview of the lease flow */}
        <div className="container screens-slot reveal">
          <figure className="app-preview" aria-label="Propty app preview — browse listings, get verified by zero-knowledge proof, and e-sign the lease">
            <div className="ap-chrome">
              <span className="ap-dots"><i></i><i></i><i></i></span>
              <span className="ap-url"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> app.propty.finance</span>
              <span className="ap-brand"><img src="/propty/assets/PropTy-Horizontal-tight.svg" alt="Propty" height="30" /></span>
            </div>
            {/* Stage rail: the lease pipeline, one screen */}
            <div className="ap-stage" aria-hidden="true">
              <div className="st"><span className="sd">1</span><span className="sl"><b>Browse</b><span>Find a home</span></span></div>
              <span className="sc-line"></span>
              <div className="st"><span className="sd">2</span><span className="sl"><b>Verify</b><span>By ZK proof</span></span></div>
              <span className="sc-line"></span>
              <div className="st todo"><span className="sd">3</span><span className="sl"><b>E-sign</b><span>Lease on file</span></span></div>
            </div>

            <div className="ap-body">
              {/* Panel 1: listing */}
              <div className="ap-panel">
                <div className="ap-phead"><span className="ap-tag">Listing</span><span className="ap-step-no">01</span></div>
                <div className="ap-photo"><span className="pin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> East York, Toronto</span></div>
                <h5>2BR + den · long term</h5>
                <p className="ap-sub">$2,150 / mo · available Aug 1</p>
                <div className="ap-row"><span className="ap-chip">Room or whole unit</span><span className="ap-chip">Verified host</span></div>
                <div className="ap-cta-row"><span className="ap-btn">Request a viewing</span></div>
              </div>
              {/* Panel 2: verify by proof */}
              <div className="ap-panel accent">
                <div className="ap-phead"><span className="ap-tag proof">Verify by proof</span><span className="ap-step-no">02</span></div>
                <div className="ap-proofs">
                  <div className="ap-proofline"><span className="ap-tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Income clears the threshold</div>
                  <div className="ap-proofline"><span className="ap-tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Identity valid</div>
                  <div className="ap-proofline muted"><span className="ap-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span> Documents never shared</div>
                </div>
                <p className="ap-sub">Checked against the host&apos;s criteria — a yes/no, nothing more.</p>
                <div className="ap-proofbadge">ZK eligibility proof · verified</div>
              </div>
              {/* Panel 3: e-sign */}
              <div className="ap-panel">
                <div className="ap-phead"><span className="ap-tag">Lease</span><span className="ap-step-no">03</span></div>
                <div className="ap-doc"><span className="dl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg> Residential Tenancy Agreement</span><span></span><span></span><span className="short"></span></div>
                <h5>Ontario standard lease</h5>
                <p className="ap-sub">Prefilled &amp; e-signed by both parties</p>
                <div className="ap-signed"><span className="ap-tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span> Signed · hash anchored</div>
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* ===================== SEE IT IN ACTION ===================== */}
      <section className="section" id="see-it">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">See it in action</span>
            <h2>Watch the agent run a whole tenancy — across all three roles</h2>
            <p className="lead">This is the actual Propty product. In a single take it walks all three sides — the <b>tenant&apos;s</b> verified lease and application, the <b>host&apos;s</b> listings and ZK-proof review, and the <b>agent</b> running the flow end to end: scheduling the viewing, ZK-verifying documents, checking candidacy, collecting the booking, generating and e-signing the Ontario lease, then guaranteeing the host.</p>
          </div>

          {/* Demo GIF in a browser frame */}
          <figure className="demo-frame reveal">
            <div className="df-chrome">
              <span className="df-dots"><i></i><i></i><i></i></span>
              <span className="df-url"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> app.propty.finance</span>
              <span className="df-live"><span className="pulse"></span> Live demo</span>
            </div>
            <video className="df-gif" autoPlay muted loop playsInline preload="metadata" poster="/propty/media/propty-demo-poster.png" width="1280" height="800" aria-label="Propty product demo — the leasing agent schedules a viewing, ZK-verifies the tenant's documents, checks candidacy, collects the booking, generates and e-signs the Ontario lease, then guarantees the host's payout by the 5th.">
              <source src="/propty/media/propty-demo.webm" type="video/webm" />
              <source src="/propty/media/propty-demo.mp4" type="video/mp4" />
              <img className="df-gif" src="/propty/media/propty-demo-poster.png" alt="Propty product demo — the leasing agent schedules a viewing, ZK-verifies the tenant's documents, checks candidacy, collects the booking, generates and e-signs the Ontario lease, then guarantees the host's payout." loading="lazy" width="1280" height="800" />
            </video>
          </figure>
          <div className="demo-cap reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <span>Recorded from the live product · <b>tenant</b>, <b>host</b> and <b>agent</b> shown end to end. Actions and data are simulated.</span>
          </div>

          {/* Single Book-a-demo CTA (static product screens removed — the video is the product showcase) */}
          <div className="see-cta-bottom reveal">
            <a href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener" className="btn btn-teal btn-try">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '17px', height: '17px' }}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              Book a demo
            </a>
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM ===================== */}
      <section className="section" id="problem" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Why an agent</span>
            <h2>Ontario&apos;s rental market fails both sides at once</h2>
            <p className="lead">Newcomers can&apos;t prove they&apos;re reliable, and owners can&apos;t be sure they&apos;ll get paid. The gap between them is filled with cash deposits, guesswork, and risk — the manual work no one does well. The Propty agent closes it.</p>
          </div>

          <div className="prob-wrap">
            <div className="prob-vs reveal">VS</div>

            {/* Tenants */}
            <div className="prob-col tenant reveal">
              <div className="head">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                <div>
                  <span className="who">For tenants</span>
                  <h3>Newcomers get locked out</h3>
                </div>
              </div>
              <ul className="prob-list">
                <li><span className="x"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></span><span><b>No Canadian credit history.</b> A landlord&apos;s credit check returns nothing, so a qualified newcomer looks like a risk on paper.</span></li>
                <li><span className="x"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></span><span><b>Documents over-shared.</b> To prove income and identity you hand raw pay stubs, bank statements and passports to a stranger — with no control over where they end up.</span></li>
                <li><span className="x"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></span><span><b>No rental history to show.</b> First home in Canada means no references, no track record, no way to prove reliability.</span></li>
                <li><span className="x"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></span><span><b>Unfair, opaque screening.</b> Decisions made behind closed doors, with no clear criteria and no way to build a case for yourself.</span></li>
              </ul>
            </div>

            {/* Owners */}
            <div className="prob-col owner reveal">
              <div className="head">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg></span>
                <div>
                  <span className="who">For hosts &amp; operators</span>
                  <h3>Housing newcomers feels risky</h3>
                </div>
              </div>
              <ul className="prob-list">
                <li><span className="x"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></span><span><b>Payment risk.</b> With no credit signal to lean on, owners can&apos;t tell a reliable tenant from a costly one — so many won&apos;t rent to newcomers at all.</span></li>
                <li><span className="x"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></span><span><b>Sublet fraud.</b> A &quot;property manager&quot; may not actually hold the lease — leaving everyone exposed when the real owner surfaces.</span></li>
                <li><span className="x"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></span><span><b>Disputes with no record.</b> When a tenancy goes wrong there&apos;s rarely a clean, tamper-proof paper trail to lean on.</span></li>
                <li><span className="x"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></span><span><b>Grey-market rent-to-rent.</b> Room rentals often happen off the books, with handshake deals that protect nobody when something breaks.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PLATFORM — participants ===================== */}
      <section className="section" id="platform">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">The platform</span>
            <h2>A full lease platform, operated by the agent</h2>
            <p className="lead">Propty is more than a search box. It&apos;s a three-sided platform — Tenants, Property Hosts and a Platform layer — with a real listing-to-lease lifecycle. The AI agent runs the flows between them; you supply the intent.</p>
          </div>

          <div className="party-grid">
            {/* Tenant */}
            <div className="party reveal">
              <div className="ptop">
                <span className="pic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                <div><span className="role">Participant 01</span><h3>Tenant</h3></div>
              </div>
              <p className="pdesc">A person looking to lease a room or a full home, short or long term.</p>
              <ul>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Browse listings and <b>request a viewing</b> via a calendar slot (Calendly / Cal)</li>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Get verified by uploading documents once the host starts the process</li>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Confirm the booking, review the draft lease and <b>e-sign</b></li>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>View &amp; download the signed contract any time from a dashboard</li>
              </ul>
              <div className="pnote">Documents are turned into a <b>proof</b> — the raw files never reach the host.</div>
            </div>

            {/* Property Host */}
            <div className="party host reveal">
              <div className="ptop">
                <span className="pic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg></span>
                <div><span className="role">Participant 02</span><h3>Property Host</h3></div>
              </div>
              <p className="pdesc">A landlord, property manager or management firm listing a room or whole unit.</p>
              <ul>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Set <b>tenant qualification criteria</b> once on the profile — applied to every listing</li>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>List each room or unit separately; receive viewing requests on a calendar</li>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Review the tenant&apos;s <b>ZK proofs</b>, then initiate booking and sign the lease</li>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Mark a listing <b>Booked / Rented</b>, or renew it when a tenant gives notice</li>
              </ul>
              <div className="pnote"><b>Property manager?</b> The platform requires you to upload the signed landlord lease before listing — cutting sublet fraud.</div>
            </div>

            {/* Platform */}
            <div className="party reveal">
              <div className="ptop">
                <span className="pic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg></span>
                <div><span className="role">Participant 03</span><h3>Platform</h3></div>
              </div>
              <p className="pdesc">The layer that keeps listings and leases compliant, high-quality and fraud-free.</p>
              <ul>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Verify tenants and hosts; flag, suspend or trigger re-verification when needed</li>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Moderate listings — approve or take down non-compliant content</li>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Maintain contract templates by jurisdiction and tenancy type; set e-signature policy</li>
                <li><span className="t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Anchor every signed lease&apos;s hash to build a public <b>property history</b> for disputes</li>
              </ul>
              <div className="pnote">Landlords get the <b>government standard lease</b>; managers get a Propty-provided template.</div>
            </div>
          </div>

          {/* Lease lifecycle */}
          <div className="sec-head reveal" style={{ marginTop: '76px' }}>
            <span className="eyebrow">Listing to lease</span>
            <h2>One lifecycle, from viewing request to signed lease</h2>
            <p className="lead">The same flow the docs specify — request a viewing on a calendar, qualify against the host&apos;s criteria, e-sign the standard lease, then keep the listing accurate as it books, rents and renews.</p>
          </div>

          <div className="life reveal">
            <div className="life-step">
              <div className="lnum"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg></div>
              <h4>List &amp; browse</h4>
              <p>Host lists a room or unit with criteria set at profile level; tenants browse what&apos;s live.</p>
              <span className="state">Listed</span>
            </div>
            <div className="life-step">
              <div className="lnum"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
              <h4>Request a viewing</h4>
              <p>Tenant books a calendar slot; the host confirms and they meet at the property.</p>
              <span className="state">Viewing</span>
            </div>
            <div className="life-step">
              <div className="lnum"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg></div>
              <h4>Verify &amp; qualify</h4>
              <p>Host starts verification; the tenant is tested against the host&apos;s criteria — by proof.</p>
              <span className="state">Verified</span>
            </div>
            <div className="life-step">
              <div className="lnum"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/></svg></div>
              <h4>Draft &amp; e-sign</h4>
              <p>The lease is prefilled from the tenant&apos;s details, edited if needed, then both parties e-sign.</p>
              <span className="state">Booked</span>
            </div>
            <div className="life-step">
              <div className="lnum"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"/></svg></div>
              <h4>Rent &amp; renew</h4>
              <p>Listing is marked Rented, auto-expires from public view, and renews when notice is given.</p>
              <span className="state">Rented</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRIVATE BY PROOF (ZK signature) ===================== */}
      <section className="section" id="private">
        <div className="container">
          <div className="zk reveal">
            <div className="zk-inner">
              <span className="eyebrow">Private by proof · ZK + AI</span>
              <h2>Your documents are proven — never shared</h2>
              <p className="lead">A tenant&apos;s most sensitive papers — pay stubs, bank statements, passport — should never sit in a stranger&apos;s inbox. On Propty they don&apos;t. The agent reads the documents, checks them against the host&apos;s criteria, and generates a <b style={{ color: '#fff' }}>zero-knowledge eligibility proof</b>: a simple yes/no that income clears the threshold and identity is valid. The host verifies the proof. Nothing about the underlying documents is disclosed.</p>
              <span className="zk-dev"><span className="pulse"></span> Proof system in active development</span>

              {/* 3-step proof visual */}
              <div className="proof-flow" aria-hidden="true">
                <div className="proof-card">
                  <span className="plabel">Step 01 · tenant</span>
                  <div className="picon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14" y="8" width="30" height="40" rx="4" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.5)" strokeWidth="2"/>
                      <rect x="22" y="6" width="30" height="40" rx="4" fill="rgba(0,255,194,.10)" stroke="#7ff0d3" strokeWidth="2"/>
                      <line x1="28" y1="16" x2="46" y2="16" stroke="#7ff0d3" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="28" y1="23" x2="46" y2="23" stroke="rgba(255,255,255,.55)" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="28" y1="30" x2="40" y2="30" stroke="rgba(255,255,255,.55)" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4>Documents in</h4>
                  <p>Income, identity and bank statements — held privately, seen only by the agent.</p>
                </div>

                <div className="proof-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>

                <div className="proof-card mid">
                  <span className="plabel">Step 02 · agent</span>
                  <div className="picon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="12" y="16" width="40" height="32" rx="7" fill="rgba(0,255,194,.10)" stroke="#00ffc2" strokeWidth="2"/>
                      <circle cx="24" cy="32" r="3.5" fill="#00ffc2"/>
                      <circle cx="40" cy="32" r="3.5" fill="#00ffc2"/>
                      <path d="M32 16V8" stroke="#00ffc2" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="32" cy="6" r="3" fill="#00ffc2"/>
                      <path d="M20 42h24" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4>Proof generated</h4>
                  <p>A zero-knowledge proof: income&nbsp;≥&nbsp;threshold and identity valid — a yes, nothing more.</p>
                </div>

                <div className="proof-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>

                <div className="proof-card done">
                  <span className="plabel">Step 03 · host</span>
                  <div className="picon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 6l20 8v12c0 13-9 20-20 24-11-4-20-11-20-24V14z" fill="rgba(0,255,194,.10)" stroke="#00ffc2" strokeWidth="2"/>
                      <path d="M23 31l6 6 12-13" stroke="#00ffc2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4>Verified ✓</h4>
                  <p>The host confirms the proof is valid and approves — without ever seeing the raw documents.</p>
                </div>
              </div>

              <div className="zk-foot">
                <div className="zf">
                  <span className="zic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
                  <div>
                    <h4>Data minimisation by design</h4>
                    <p>The host learns only that the tenant qualifies — never the salary figure, account balance or ID number behind it.</p>
                  </div>
                </div>
                <div className="zf">
                  <span className="zic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M8 12l2.5 2.5L16 9"/></svg></span>
                  <div>
                    <h4>Tamper-proof property history</h4>
                    <p>Every signed lease is hash-anchored, so its existence and integrity can be checked later — verifiable infrastructure for disputes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===================== FINANCIAL LAYER (features) ===================== */}
      <section className="section" id="features" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">The financial layer</span>
            <h2>The agent makes the tenancy pay off — for both sides</h2>
            <p className="lead">On top of the lease platform, the agent turns rent into credit for tenants and certainty for owners — screening newcomers, guaranteeing payouts, and handling arrears fairly.</p>
          </div>

          <div className="feat-grid">
            <div className="feat reveal">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11h-6M19 8v6"/></svg></div>
              <h3>Screens newcomers with no Canadian credit</h3>
              <p>The agent verifies a newcomer&apos;s identity, income and standing from documents they already have — building a reliability signal where a local credit file doesn&apos;t exist, so they get approved and housed.</p>
              <span className="tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Built for newcomers</span>
            </div>

            <div className="feat reveal">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <h3>Guarantees the rent to owners by the 5th</h3>
              <p>The agent stands behind every payment and delivers a dependable payout on schedule — so a slow month for a tenant is never a slow month for the owner.</p>
              <span className="tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Paid on time, every time</span>
            </div>

            <div className="feat reveal">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></div>
              <h3>Reports rent to build credit</h3>
              <p>The agent reports every on-time payment to <b>Equifax and TransUnion</b>, turning the rent a tenant already pays into a growing Canadian credit history — automatically, with consent.</p>
              <span className="tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Equifax + TransUnion</span>
            </div>

            <div className="feat reveal">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg></div>
              <h3>Handles arrears and escalation</h3>
              <p>If a payment slips, the agent manages arrears by clear rules and documented communication, following a structured resolution path — so problems get handled fairly for both sides, not left to escalate.</p>
              <span className="tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Fair for both sides</span>
            </div>

            <div className="feat reveal">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg></div>
              <h3>Drafts the RTA-compliant lease</h3>
              <p>The agent drafts the Ontario standard lease for digital signing and collects rent through a <b>licensed payment processor</b> — a real paper trail that protects both parties.</p>
              <span className="tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Licensed processing</span>
            </div>

            <div className="feat reveal">
              <div className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
              <h3>Resolves arrears without the drama</h3>
              <p>A clear grace window, an agreed plan and documented steps mean a late month is worked out on record — the owner stays covered while the tenant catches up.</p>
              <span className="tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Owner stays covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== COMPLIANCE ===================== */}
      <section className="section" id="compliance" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="compliance reveal">
            <div className="comp-inner">
              <span className="eyebrow">Built for compliance</span>
              <h2>Compliance isn&apos;t the fine print — it&apos;s the product</h2>
              <p className="lead">Trust between strangers only works when the rules are real. The Propty platform runs on licensed infrastructure and Ontario law from day one, so every action the agent takes is one both sides can rely on.</p>

              <div className="comp-grid">
                <div className="comp-card">
                  <div className="cic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg></div>
                  <h3>Licensed payment processing</h3>
                  <p>The agent moves every dollar of rent through a regulated, licensed payment processor — never informal transfers or cash.</p>
                </div>
                <div className="comp-card">
                  <div className="cic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg></div>
                  <h3>RTA-compliant leases</h3>
                  <p>The leases the agent drafts follow Ontario&apos;s Residential Tenancies Act and standard form — enforceable protection, not a handshake.</p>
                </div>
                <div className="comp-card">
                  <div className="cic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M12 8v4M12 15h.01"/></svg></div>
                  <h3>Privacy-first (PIPEDA)</h3>
                  <p>Personal and financial data is handled under Canadian privacy law (PIPEDA) — minimised by zero-knowledge proofs, with consent-based credit reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SOCIAL PROOF ===================== */}
      <section className="section" id="proof">
        <div className="container">
          <div className="sec-head reveal center" style={{ margin: '0 auto' }}>
            <span className="eyebrow">From the pilot</span>
            <h2>Early traction in Ontario</h2>
            <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>A small, honest snapshot from Propty&apos;s pilot — the numbers we can stand behind.</p>
          </div>

          <div className="metrics">
            <div className="metric reveal">
              <div className="big">100+</div>
              <div className="lbl">Tenants served</div>
              <div className="desc">Newcomers and renters matched and housed through the platform.</div>
            </div>
            <div className="metric reveal">
              <div className="big">98%</div>
              <div className="lbl">Pilot occupancy</div>
              <div className="desc">Of listings in the pilot filled and kept occupied.</div>
            </div>
          </div>

          <div className="sample-note reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            Pilot figures from Propty&apos;s Ontario rollout.
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="section" id="faq" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="sec-head reveal center" style={{ margin: '0 auto' }}>
            <span className="eyebrow">Questions</span>
            <h2>How Propty works, in short</h2>
          </div>

          <div className="faqs">
            <details className="faq reveal">
              <summary>What actually happens between browsing a listing and signing a lease?</summary>
              <p>A tenant browses live listings and <b>requests a viewing</b> through a calendar link (Calendly / Cal); the host confirms and they meet at the property. If the tenant wants to proceed, the <b>host initiates verification</b> and the tenant uploads their documents. Those documents are checked against the host&apos;s criteria and turned into a proof — not shared as files. Once the tenant qualifies, Propty prefills the lease from the tenant&apos;s details, both sides review and <b>e-sign</b>, and the signed contract lives in each party&apos;s dashboard to view or download anytime. The host then marks the listing <b>Booked</b>, and later <b>Rented</b>.</p>
            </details>
            <details className="faq reveal">
              <summary>What exactly does the zero-knowledge proof reveal — and what does it hide?</summary>
              <p>The agent reads the tenant&apos;s pay stubs, bank statements and ID privately and produces a <b>zero-knowledge eligibility proof</b>: a yes/no that income clears the host&apos;s threshold and identity is valid. The host verifies that result and <b>never sees the salary figure, account balance or ID number</b> behind it — data minimisation by design. The tenant&apos;s documents contain PII and are kept secure; they are not exposed to the host or the public. The proof system is in active development.</p>
            </details>
            <details className="faq reveal">
              <summary>Who can list, and why must some hosts upload a lease first?</summary>
              <p>A <b>Property Host</b> is a landlord, property manager or management firm, and you declare which you are at sign-up. If you&apos;re a manager or firm rather than the landlord, the platform makes <b>uploading the signed landlord lease a mandatory step before you can list</b> — that&apos;s the guard against sublet and rent-to-rent fraud. That uploaded landlord agreement stays private; it is never shown to the public.</p>
            </details>
            <details className="faq reveal">
              <summary>How do a host&apos;s tenant criteria get applied?</summary>
              <p>The host sets <b>tenant candidacy criteria once on their profile</b> — income, tenancy terms and the conditions they need — and the platform applies them to every property they list, now and in future. During verification the tenant is tested against those exact criteria to be treated as an authenticated, authorized candidate. You set the rules once instead of re-screening from scratch for every listing.</p>
            </details>
            <details className="faq reveal">
              <summary>Which lease template gets used — and can it be edited?</summary>
              <p>It depends on the host type. <b>Landlords get the government standard lease</b> (Ontario&apos;s standard form); <b>managers and firms get a Propty-provided template</b>. The correct template is enabled only after the tenant clears verification. Propty prefills it from the tenant&apos;s documents, the host can adjust the terms and clauses for their property, and the tenant can leave feedback before the final version is e-signed by both parties.</p>
            </details>
            <details className="faq reveal">
              <summary>How does the rent guarantee — and a missed payment — actually work?</summary>
              <p>Once a lease is signed, the agent collects rent through a <b>licensed payment processor</b> and delivers the owner&apos;s payout <b>on time by the 5th</b>, even if the tenant is late. If a payment slips, the tenant gets a grace window and an agreed plan while the owner stays covered; arrears are handled by clear rules and documented communication, worked out on record rather than left to escalate.</p>
            </details>
            <details className="faq reveal">
              <summary>What is the &quot;property history,&quot; and how does it help in a dispute?</summary>
              <p>Every signed tenant contract is hashed and its <b>proof and hash are published under the property</b>, building a verifiable property history over time. The full contract stays private — visible only to the parties who signed it — but its existence and integrity can be checked later. That gives both sides tamper-proof evidence to lean on if a tenancy is ever disputed, instead of a he-said-she-said paper trail.</p>
            </details>
            <details className="faq reveal">
              <summary>Is Propty Ontario-only right now?</summary>
              <p>Today, yes. Propty is built around Ontario&apos;s Residential Tenancies Act and its standard lease, and the pilot ran in Ontario. The platform keeps contract templates by <b>jurisdiction and tenancy type</b>, so it is designed to extend to other regions and to room-versus-whole-unit rentals over time — but Ontario is where it operates now.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ===================== CTA BAND ===================== */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="ctaband reveal">
            <div className="inner">
              <h2>Let the agent run your next lease</h2>
              <p>Whether you host homes or you&apos;re looking for one, Propty gives you a lease that&apos;s guaranteed, private, and on record. Book a demo to see the agent work end to end.</p>
              <div className="btns">
                <a className="btn btn-white" href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
                <a className="btn btn-outline-w" href="#platform">See how the platform works</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="container">
          <div className="foot-grid">
            <div>
              <span className="brandmark"><img src="/propty/assets/PropTy-Horizontal-white.svg" alt="Propty" width="129" height="34" /></span>
              <p className="fdesc">The lease platform, operated by an AI agent, private by zero-knowledge — making rent-to-rent and room rentals legitimate and safe for hosts and newcomer tenants across Ontario, Canada. Part of the Pandora ecosystem.</p>
              <span className="vchip" style={{ marginTop: '18px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                Guaranteed · Private · Verifiable
              </span>
            </div>
            <div className="fcol">
              <h4>The platform</h4>
              <a href="#platform">The three participants</a>
              <a href="#platform">Lease lifecycle</a>
              <a href="#private">Private by proof</a>
              <a href="#features">The financial layer</a>
            </div>
            <div className="fcol">
              <h4>Ecosystem</h4>
              <a href="/">Pandora hub</a>
              <a href="https://calendly.com/rhythm-pandora/30min" target="_blank" rel="noopener">Book a demo</a>
              <a href="#features">The financial layer</a>
              <a href="#compliance">Privacy &amp; PIPEDA</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© <CurrentYear /> Propty · Aconomy Labs Inc.</span>
            <span className="disc">Product page. The rent guarantee, credit reporting and arrears handling are described as platform capabilities; the zero-knowledge proof system is in active development. Pilot figures are from Propty&apos;s Ontario rollout.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
