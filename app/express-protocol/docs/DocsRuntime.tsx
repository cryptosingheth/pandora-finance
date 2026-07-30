'use client';

import { useEffect } from 'react';

/* ------------------------------------------------------------------
   DocsRuntime — 1:1 port of the IIFE that shipped inline at the
   bottom of express-protocol/docs/index.html.

   The docs page is a single HTML document containing every section;
   only the one carrying `.doc-section.active` is displayed. This
   script is what swaps that class, mirrors it onto the sidebar, keeps
   the URL hash in sync, drives the mobile drawer, filters the sidebar
   and powers the per-snippet Copy buttons.

   It is a pure DOM driver: every element it touches is server-
   rendered by page.tsx, so this component renders null and there is
   no hydration surface at all. The server HTML ships with
   #sec-overview already `.active` — exactly as the original file did
   — so the first paint is identical before this ever runs.

   Preserved exactly: the 'overview' fallback for an unknown hash, the
   instant (non-smooth) scroll on first load vs. smooth afterwards,
   history.replaceState rather than pushState, the document.title
   rewrite to "Docs · <h1>", the 960px mobile breakpoint, the .35
   dimming of non-matching sidebar groups and the 1400 ms Copy flash.

   No innerHTML anywhere (project rule) — labels are swapped through
   nodeValue/textContent, same as the original.
   ------------------------------------------------------------------ */

export function DocsRuntime() {
  useEffect(() => {
    const sections = Array.prototype.slice.call(
      document.querySelectorAll('.doc-section')
    ) as HTMLElement[];
    const links = Array.prototype.slice.call(
      document.querySelectorAll('.sb-link')
    ) as HTMLElement[];
    const body = document.body;
    const backdrop = document.getElementById('sbBackdrop');
    const menuToggle = document.getElementById('menuToggle');

    const byKey: Record<string, HTMLElement> = {};
    sections.forEach((s) => {
      const k = s.getAttribute('data-key');
      if (k) byKey[k] = s;
    });

    const timers: number[] = [];
    const detachers: Array<() => void> = [];

    /* The original page rewrote document.title to "Docs · <section h1>" as it
       activated a section, and that is still what the tab should read. Under
       Next, the Metadata API's <title> commits during hydration — after this
       effect — and would clobber the very first rewrite (later ones, driven by
       clicks, land well after the commit and stick on their own).

       So the title we set is remembered and re-asserted if anything overwrites
       it. The observer watches <head> rather than the <title> node because
       React may swap the element wholesale, and it is disconnected after two
       seconds: by then metadata has long committed, and a static export never
       navigates client-side, so there is nothing left to fight. */
    let desiredTitle = '';
    function setDocumentTitle(next: string) {
      desiredTitle = next;
      document.title = next;
    }
    if ('MutationObserver' in window) {
      const keeper = new MutationObserver(() => {
        if (desiredTitle && document.title !== desiredTitle) {
          document.title = desiredTitle;
        }
      });
      keeper.observe(document.head, {
        childList: true,
        characterData: true,
        subtree: true,
      });
      timers.push(window.setTimeout(() => keeper.disconnect(), 2000));
      detachers.push(() => keeper.disconnect());
    }
    function on<K extends keyof DocumentEventMap>(
      target: EventTarget,
      type: K | string,
      handler: EventListener
    ) {
      target.addEventListener(type, handler);
      detachers.push(() => target.removeEventListener(type, handler));
    }

    function closeMobileNav() {
      body.classList.remove('nav-open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }
    function isMobile() {
      return window.matchMedia('(max-width:960px)').matches;
    }

    function activate(
      key: string,
      opts: { noScroll?: boolean; instant?: boolean; pushHash?: boolean } = {}
    ) {
      let target = byKey[key];
      if (!target) {
        key = 'overview';
        target = byKey.overview;
      }
      sections.forEach((s) => s.classList.toggle('active', s === target));
      links.forEach((l) => {
        const isOn = l.getAttribute('data-sec') === key;
        l.classList.toggle('active', isOn);
        if (isOn) {
          l.setAttribute('aria-current', 'page');
        } else {
          l.removeAttribute('aria-current');
        }
      });

      const activeLink = document.querySelector('.sb-link.active');
      if (activeLink && activeLink.scrollIntoView) {
        try {
          activeLink.scrollIntoView({ block: 'nearest' });
        } catch {
          /* older browsers reject the options object — ignore, as before */
        }
      }

      if (!opts.noScroll) {
        window.scrollTo({ top: 0, behavior: opts.instant ? 'auto' : 'smooth' });
      }
      if (opts.pushHash !== false) {
        if (history.replaceState) {
          history.replaceState(null, '', '#' + key);
        } else {
          location.hash = key;
        }
      }

      const h1 = target.querySelector('h1');
      setDocumentTitle(
        'Docs · ' + (h1 ? (h1.textContent ?? '').trim() : 'Express Protocol SDK')
      );
      if (isMobile()) closeMobileNav();
    }

    // sidebar link clicks
    links.forEach((l) => {
      on(l, 'click', (e) => {
        e.preventDefault();
        activate(l.getAttribute('data-sec') ?? '');
      });
    });

    // any element with data-goto (cards, footer prev/next, inline links)
    on(document, 'click', (e) => {
      const t = e.target as Element | null;
      const el = t && t.closest ? t.closest('[data-goto]') : null;
      if (el) {
        e.preventDefault();
        activate(el.getAttribute('data-goto') ?? '');
      }
    });

    // hash navigation (back/forward + initial load)
    function fromHash(instant: boolean) {
      const key = (location.hash || '').replace('#', '');
      activate(byKey[key] ? key : 'overview', {
        instant: !!instant,
        pushHash: false,
      });
    }
    on(window, 'hashchange', () => fromHash(false));

    // mobile menu toggle
    if (menuToggle) {
      on(menuToggle, 'click', () => {
        const open = body.classList.toggle('nav-open');
        menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    if (backdrop) on(backdrop, 'click', closeMobileNav);
    on(document, 'keydown', (e) => {
      if (
        (e as KeyboardEvent).key === 'Escape' &&
        body.classList.contains('nav-open')
      ) {
        closeMobileNav();
      }
    });

    // sidebar filter
    const filter = document.getElementById('sbFilter') as HTMLInputElement | null;
    if (filter) {
      on(filter, 'input', () => {
        const q = filter.value.trim().toLowerCase();
        links.forEach((l) => {
          const match = (l.textContent ?? '').toLowerCase().indexOf(q) !== -1;
          l.style.display = match ? '' : 'none';
        });
        document.querySelectorAll('.sb-group').forEach((g) => {
          const vis = Array.prototype.some.call(
            g.querySelectorAll('.sb-link'),
            (l: HTMLElement) => l.style.display !== 'none'
          );
          const title = g.querySelector('.sb-title') as HTMLElement | null;
          if (title) title.style.opacity = vis ? '' : '.35';
        });
      });
    }

    // copy buttons
    document.querySelectorAll<HTMLElement>('.copy-btn').forEach((btn) => {
      on(btn, 'click', () => {
        const card = btn.closest('.code-card');
        const code = card ? card.querySelector('pre code') : null;
        if (!code) return;
        const text = (code as HTMLElement).innerText;
        const label = btn.childNodes[btn.childNodes.length - 1];
        const prev = label && label.nodeType === 3 ? label.nodeValue : null;
        const done = () => {
          btn.classList.add('copied');
          if (label && label.nodeType === 3) label.nodeValue = 'Copied';
          timers.push(
            window.setTimeout(() => {
              btn.classList.remove('copied');
              if (label && label.nodeType === 3 && prev != null) {
                label.nodeValue = prev;
              }
            }, 1400)
          );
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, done);
        } else {
          try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            done();
          } catch {
            done();
          }
        }
      });
    });

    // initial load
    fromHash(true);

    return () => {
      detachers.forEach((off) => off());
      timers.forEach((t) => clearTimeout(t));
      body.classList.remove('nav-open');
    };
  }, []);

  return null;
}

export default DocsRuntime;
