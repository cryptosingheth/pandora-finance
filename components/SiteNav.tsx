/* ------------------------------------------------------------------
   SiteNav — the Pandora <header class="nav"> chrome.

   SHARED BY EXACTLY TWO PAGES: / (index.html) and /about/.
   Their markup is structurally byte-identical; only the link list
   differs (about/ carries an extra "Contact" entry and marks "About"
   active) and the "See the products" / menu-toggle target differs
   (same-document "#products" on the hub vs "/#products" on /about/).
   Both differences are props — nothing is merged away.

   NOT USED BY /trust/, which ships an entirely different
   <nav class="navbar"> Trust-Center bar. NOT USED BY any product page
   (dpp, propty, unitymarket, vanna, auri, express-protocol) — each has
   its own brand-specific nav. Do not force those through this
   component; it would change how they look.

   Styling comes from assets/design-system.css (.nav, .nav-inner,
   .navlink) plus the hub/about inline <style> blocks (.brand, .logo,
   .wrap, .btn-wire, .btn-glow, .nav-toggle, .hide-m, .navlink.active).
   Server component — no client JS.
   ------------------------------------------------------------------ */

export type NavLink = {
  href: string;
  label: string;
  active?: boolean;
};

export function SiteNav({
  links,
  productsHref,
  brandHref = '/',
}: {
  /** Ordered <a class="navlink"> entries, left to right. */
  links: NavLink[];
  /** Target for "See the products" and the mobile menu toggle. */
  productsHref: string;
  /** Logo link target. Both current pages use "/". */
  brandHref?: string;
}) {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href={brandHref} aria-label="Pandora home">
          <img
            className="logo"
            src="/assets/logos/Pandora_Dark.png"
            alt="Pandora"
          />
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              className={l.active ? 'navlink active' : 'navlink'}
              href={l.href}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-wire hide-m" href={productsHref}>
            See the products
          </a>
          <a
            className="btn btn-glow"
            href="https://calendly.com/rhythm-pandora/30min"
            target="_blank"
            rel="noopener"
            title="Booking opens shortly"
          >
            Book a demo
          </a>
          <a
            className="btn btn-wire nav-toggle"
            href={productsHref}
            aria-label="Menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteNav;
