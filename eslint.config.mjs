import coreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  {
    // Everything under public/ is untouched hand-written HTML or built
    // third-party output that is served verbatim — never lint or fix it.
    ignores: ['node_modules/**', '.next/**', 'out/**', 'public/**'],
  },
  ...coreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // This is a pixel-for-pixel port of hand-written HTML. Plain <img> is
      // intentional everywhere: next/image would change the emitted markup
      // and layout, and `images: { unoptimized: true }` means it would buy
      // nothing anyway.
      '@next/next/no-img-element': 'off',
    },
  },
  {
    // The ported route files are transcriptions of hand-written HTML, so three
    // more defaults fight the one rule that outranks them: reproduce the
    // original page exactly. Scoped to the ported pages so genuinely new code
    // elsewhere still gets the full ruleset.
    files: ['app/**/page.tsx'],
    rules: {
      // Every internal link is a plain <a href>, deliberately. next/link would
      // turn a full navigation into a client-side one, changing scroll
      // restoration and re-running each page's IntersectionObserver and
      // console animations — visible behaviour drift, for no gain on a static
      // export.
      '@next/next/no-html-link-for-pages': 'off',
      // Apostrophes and quotes in the source copy are kept as typed. Swapping
      // them for &apos;/&quot; renders identically but would churn hundreds of
      // lines of prose that was signed off character by character.
      'react/no-unescaped-entities': 'off',
      // The Express Protocol pages render TypeScript samples, so "// …" and
      // "/* … */" appear as literal text inside <span>s. The rule reads those
      // as stray JS comments; they are page content.
      'react/jsx-no-comment-textnodes': 'off',
    },
  },
];

export default config;
