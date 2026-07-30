/* ------------------------------------------------------------------
   DesignSystemStylesheet — the shared Pandora design system.

   Renders the SAME <link> the hand-written HTML has today, pointing at
   the SAME untouched file now living in public/:

       <link rel="stylesheet" href="/assets/design-system.css" />

   WHY A LINK AND NOT `import '.../design-system.css'`:
   the file's very first rule is

       @import url('https://fonts.googleapis.com/css2?family=Figtree…')

   and Turbopack's CSS pipeline SILENTLY DROPS that external @import
   when the sheet is bundled — verified against the emitted chunk.
   Bundling it would strip Figtree, the brand typeface, from every
   page. Linking the raw file preserves the exact bytes, the exact
   font-loading chain and the exact cascade order.

   `precedence` makes React 19 hoist this <link> into <head> (and
   dedupe it if a page renders it more than once), reproducing the
   original head ordering: design system first, then the page's own
   inline <style>, which has no precedence and therefore stays exactly
   where the page puts it.

   WHERE TO USE IT: on every route whose source HTML linked
   design-system.css — i.e. all of them EXCEPT /auri/, which is a
   fully self-contained landing page that deliberately does not load
   the design system. This is also why the stylesheet is not in the
   root layout.
   ------------------------------------------------------------------ */

export function DesignSystemStylesheet() {
  return (
    /* Deliberate: bundling this sheet drops its Google Fonts @import — see note above. */
    // eslint-disable-next-line @next/next/no-css-tags
    <link
      rel="stylesheet"
      href="/assets/design-system.css"
      precedence="design-system"
    />
  );
}

export default DesignSystemStylesheet;
