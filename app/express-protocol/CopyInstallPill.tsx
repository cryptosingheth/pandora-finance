'use client';

import { useEffect } from 'react';

/* ------------------------------------------------------------------
   CopyInstallPill — 1:1 port of the copy-to-clipboard IIFE that
   shipped inline at the bottom of express-protocol/index.html.

   It drives the nav's `npm i pandora-express` pill, which is plain
   server-rendered markup: <button class="copy-pill" data-copy="…">
   with a <span class="ctext"> label. The script only attaches a click
   handler and swaps that label's text, so this component renders
   null and mutates the existing DOM exactly as before — no markup
   moves into React, so there is nothing to hydrate-mismatch.

   Behaviour preserved verbatim: writes the data-copy value to the
   clipboard, adds .copied, swaps the label to "copied ✓", and
   restores both after 1400 ms — on failure *and* on browsers with no
   Clipboard API, the original still flashes, so this does too.

   Label text is set with textContent (no innerHTML — project rule).
   ------------------------------------------------------------------ */

export function CopyInstallPill() {
  useEffect(() => {
    const timers: number[] = [];
    const detachers: Array<() => void> = [];

    function flash(btn: Element, label: Element | null, original: string) {
      btn.classList.add('copied');
      if (label) label.textContent = 'copied ✓';
      timers.push(
        window.setTimeout(() => {
          btn.classList.remove('copied');
          if (label) label.textContent = original;
        }, 1400)
      );
    }

    document.querySelectorAll<HTMLElement>('[data-copy]').forEach((btn) => {
      const onClick = () => {
        const val = btn.getAttribute('data-copy') ?? '';
        const label = btn.querySelector('.ctext');
        const original = label ? (label.textContent ?? '') : '';
        const done = () => flash(btn, label, original);

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(val).then(done, done);
        } else {
          done();
        }
      };

      btn.addEventListener('click', onClick);
      detachers.push(() => btn.removeEventListener('click', onClick));
    });

    return () => {
      detachers.forEach((off) => off());
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return null;
}

export default CopyInstallPill;
