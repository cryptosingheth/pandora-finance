/* ------------------------------------------------------------------
   SiteFooter — the Pandora <footer class="footer"> chrome.

   SHARED BY EXACTLY TWO PAGES: / (index.html) and /about/.
   Diffing the two footers, only three things are GENUINELY identical
   and are therefore hard-coded here:

     1. .foot-brand   — white logo, studio blurb, X / GitHub / LinkedIn
     2. .foot-col     — "Registered office" address
                        (index.html has ONE extra trailing <br>; that is
                         the `addressTrailingBreak` prop, not a merge)
     3. .foot-bar     — copyright + "Agentic products…" globe mark

   The two middle columns DIFFER materially between the pages:
     • index.html "Products" lists Vanna and Auri as
       <span class="soon">…· soon</span>; /about/ links them.
     • index.html heads its third column "Studio"; /about/ heads it
       "Company" and carries two extra links (Book a demo, Contact).

   So those two columns are passed in as `children` by each page,
   verbatim. Nothing is forced into a shared shape.

   NOT USED BY /trust/ (a one-line <footer class="foot">) and NOT USED
   BY any product page — each has its own brand-specific footer.
   Server component — no client JS.
   ------------------------------------------------------------------ */

export function FooterColumn({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="foot-col">
      <h4>{heading}</h4>
      {children}
    </div>
  );
}

export function SiteFooter({
  children,
  addressTrailingBreak = false,
}: {
  /** The two page-specific middle columns, in order. */
  children: React.ReactNode;
  /** index.html closes its address with an extra <br>; /about/ does not. */
  addressTrailingBreak?: boolean;
}) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <img
              className="logo"
              src="/assets/logos/Pandora_White.png"
              alt="Pandora"
            />
            <p>
              Pandora is the brand of Aconomy Labs Inc. — an AI-native product
              studio building agentic software for the real world since 2021.
            </p>
            <div className="socials">
              <a
                href="https://x.com/aconomyfdn"
                target="_blank"
                rel="noopener"
                aria-label="X (Twitter)"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
              <a
                href="https://github.com/Pandora-Finance"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/aconomyglobal"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.25 8.25h4.5V24h-4.5zM8.5 8.25h4.31v2.15h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V24h-4.5z" />
                </svg>
              </a>
            </div>
          </div>

          {children}

          <div className="foot-col">
            <h4>Registered office</h4>
            <address className="foot-addr">
              {/* The space after </b> is significant: the original HTML has a
                  newline there, which renders as a space. JSX would swallow it. */}
              <b>Aconomy Labs Inc.</b>{' '}
              111 Peter Street, 9th Floor,<br />Suite 902, Toronto, ON&nbsp; M5V 2H1{addressTrailingBreak ? <br /> : null}
            </address>
          </div>
        </div>

        <div className="foot-bar">
          <span>© 2021–2026 Aconomy Labs Inc. All rights reserved.</span>
          <span className="made">
            Agentic products, built for the real world{' '}
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                d="M2 12h20M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
