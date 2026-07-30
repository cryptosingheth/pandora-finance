'use client';

import { useEffect } from 'react';

/* ------------------------------------------------------------------
   Reveal — 1:1 port of the reveal-on-scroll IIFE at the bottom of
   dpp/index.html. This is NOT the shared components/RevealOnScroll:
   the DPP page staggers the first seven elements by setting an inline
   transitionDelay of Math.min(i,6)*60 ms as it observes them, which
   the shared component deliberately does not do.

     var els = document.querySelectorAll('.reveal');
     if(!('IntersectionObserver' in window) ||
        matchMedia('(prefers-reduced-motion: reduce)').matches){
       els.forEach(function(el){ el.classList.add('in'); }); return;
     }
     var io = new IntersectionObserver(..., {
       threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
     els.forEach(function(el, i){
       el.style.transitionDelay = (Math.min(i,6)*60) + 'ms';
       io.observe(el);
     });

   Note the reduced-motion branch sets no delay at all — the page's own
   @media(prefers-reduced-motion:reduce) rule kills transitions there.

   Renders nothing; every DOM access sits inside useEffect so the static
   export prerenders cleanly.
   ------------------------------------------------------------------ */

export function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
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

export default Reveal;
