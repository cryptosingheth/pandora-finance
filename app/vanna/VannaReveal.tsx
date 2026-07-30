'use client';

import { useEffect } from 'react';

/* ------------------------------------------------------------------
   VannaReveal — 1:1 port of the reveal-on-scroll IIFE that shipped
   inline at the bottom of vanna/index.html.

   It is deliberately NOT the shared <RevealOnScroll>: this variant
   also stamps a staggered `transition-delay` onto each element as it
   registers it —

     els.forEach(function(el, i){
       el.style.transitionDelay = (Math.min(i,6)*60) + 'ms';
       io.observe(el);
     });

   — so the first seven .reveal elements fade in 60 ms apart. Dropping
   that would change the page's entrance timing.

   Everything else matches the original exactly: the combined
   no-IntersectionObserver / prefers-reduced-motion bail-out that just
   adds .in to everything, threshold 0.12 and rootMargin
   '0px 0px -8% 0px'. Note the reduced-motion branch never sets a
   delay — the original doesn't either, and vanna's stylesheet kills
   transitions under that media query anyway.

   Renders nothing; all DOM access is inside useEffect so the static
   export can prerender the page on the server.
   ------------------------------------------------------------------ */

export function VannaReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (
      !('IntersectionObserver' in window) ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i, 6) * 60 + 'ms';
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}

export default VannaReveal;
