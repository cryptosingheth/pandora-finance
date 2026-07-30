'use client';

import { useEffect } from 'react';

/* ------------------------------------------------------------------
   RevealOnScroll — 1:1 port of the reveal-on-scroll IIFE that ships
   inline on / and /about/:

     var reduce = window.matchMedia && window.matchMedia(
       '(prefers-reduced-motion: reduce)').matches;
     var els = document.querySelectorAll('.reveal');
     if(!('IntersectionObserver' in window) || reduce){
       els.forEach(function(el){ el.classList.add('in'); }); return;
     }
     var io = new IntersectionObserver(..., {
       threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
     els.forEach(function(el){ io.observe(el); });

   The .reveal / .reveal.in transition itself lives in
   assets/design-system.css — this component only toggles the class.

   /trust/ ships a terser variant with NO reduced-motion guard, NO
   rootMargin and no no-IntersectionObserver fallback. Reproduce it
   with:  <RevealOnScroll rootMargin="0px" respectReducedMotion={false} />
   (in every browser that ships IntersectionObserver — i.e. all of
   them — the behaviour is then identical to the original.)

   Renders nothing. Safe to prerender: all DOM access is inside
   useEffect, which never runs during the static export.
   ------------------------------------------------------------------ */

export function RevealOnScroll({
  selector = '.reveal',
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
  respectReducedMotion = true,
}: {
  selector?: string;
  threshold?: number;
  rootMargin?: string;
  respectReducedMotion?: boolean;
} = {}) {
  useEffect(() => {
    const reduce =
      respectReducedMotion &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (!('IntersectionObserver' in window) || reduce) {
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
      { threshold, rootMargin }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [selector, threshold, rootMargin, respectReducedMotion]);

  return null;
}

export default RevealOnScroll;
