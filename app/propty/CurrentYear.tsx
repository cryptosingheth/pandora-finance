'use client';

import { useEffect, useRef } from 'react';

/* ------------------------------------------------------------------
   CurrentYear — 1:1 port of propty/index.html's footer year script:

     (function(){
       var y = document.getElementById('yr');
       if(y) y.textContent = new Date().getFullYear();
     })();

   The original markup ships an EMPTY <span id="yr"></span> and fills it
   on the client, so the year tracks the visitor's clock rather than the
   build date. Rendering it during the static export would freeze it, so
   the span is emitted empty — byte-identical to the original — and the
   effect writes the year exactly as the inline script did.

   textContent, not innerHTML (project rule), and no setState in the
   effect, so nothing re-renders.
   ------------------------------------------------------------------ */

export function CurrentYear() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const y = ref.current;
    if (y) y.textContent = String(new Date().getFullYear());
  }, []);

  return <span id="yr" ref={ref} />;
}

export default CurrentYear;
