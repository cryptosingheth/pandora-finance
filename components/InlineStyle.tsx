/* ------------------------------------------------------------------
   InlineStyle — renders a page's ORIGINAL, UNMODIFIED <style> block.

   Every ported page keeps its exact inline CSS. The pages use
   overlapping generic selectors (.hero, .section, .pcard, .card) that
   would collide if globalised, so nothing here becomes a CSS Module or
   a shared global sheet. Preserving the inline block verbatim is what
   guarantees pixel-identity.

   SECURITY NOTE: the `css` value is ALWAYS an author-written literal
   copied out of this repository's own HTML at build time. It is never
   user input, never fetched, never derived from a request. This is the
   sanctioned exception to the project's no-innerHTML rule (see the
   migration brief); do not pass anything dynamic through it.

   Usage (first child of the page component, so it lands after any
   <link rel="stylesheet"> Next emits for imported CSS — the same
   cascade order as the original HTML head):

       import { InlineStyle } from '@/components/InlineStyle';
       import { pageCss } from './page.css';   // exact <style> contents

       <InlineStyle css={pageCss} />
   ------------------------------------------------------------------ */

export function InlineStyle({ css }: { css: string }) {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

export default InlineStyle;
