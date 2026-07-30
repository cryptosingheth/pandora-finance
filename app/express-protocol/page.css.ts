/* ------------------------------------------------------------------
   /express-protocol — the page's original inline <style> block, byte for byte.

   Copied verbatim out of express-protocol/index.html. It stays inline
   (String.raw, so CSS escapes like content:"\2014" survive) rather
   than becoming a CSS Module or a global sheet: these pages share
   generic selectors (.hero, .section, .pcard) that would collide the
   moment they were globalised, and preserving the block unchanged is
   what guarantees pixel-identity. Do not reformat, minify or tidy it.
   ------------------------------------------------------------------ */

export const pageCss = String.raw`
    /* ============================================================
       EXPRESS PROTOCOL — page styles (accent: purple)
       Tokens come from ../assets/design-system.css. Do not redefine.
       ============================================================ */
    :root{
      --ep-ink:#0b1220;              /* deep hero ink, darker than navy */
      --ep-ink-2:#0e1730;
      --mono:'JetBrains Mono','SFMono-Regular',ui-monospace,'Menlo','Consolas',monospace;
      --ep-line:rgba(121,73,232,.18);
      --ep-glass:rgba(255,255,255,.04);
    }

    /* --- selection + focus in brand purple --- */
    ::selection{background:rgba(131,62,242,.28);color:#fff}
    a:focus-visible,button:focus-visible,.copy-pill:focus-visible{outline:2px solid var(--c-express-2);outline-offset:3px;border-radius:8px}

    /* purple-accented buttons on top of shared .btn base */
    .btn-express{background:linear-gradient(135deg,var(--c-express) 0%,var(--c-express-2) 100%);color:#fff;box-shadow:0 8px 24px rgba(121,73,232,.35)}
    .btn-express:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(121,73,232,.5)}
    .btn-onlight{background:#fff;color:var(--navy);border:1px solid var(--gray-200)}
    .btn-onlight:hover{transform:translateY(-2px);box-shadow:var(--shadow);border-color:transparent}
    .btn-wire{background:transparent;border:1.5px solid rgba(255,255,255,.22);color:#fff}
    .btn-wire:hover{border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.05)}

    /* ---------- NAV ---------- */
    .ep-nav{position:sticky;top:0;z-index:60;background:rgba(11,18,32,.72);backdrop-filter:blur(14px) saturate(140%);border-bottom:1px solid rgba(255,255,255,.07)}
    .ep-nav .nav-inner{display:flex;align-items:center;gap:20px;height:68px}
    .ep-nav .brand{display:flex;align-items:center;gap:11px;flex-shrink:0}
    .ep-nav .brand img{height:26px;width:auto;display:block}
    .ep-nav .backhub{font-size:.82rem;color:rgba(255,255,255,.55);display:inline-flex;align-items:center;gap:6px;padding-right:16px;border-right:1px solid rgba(255,255,255,.12)}
    .ep-nav .backhub:hover{color:#fff}
    .ep-nav .nlinks{display:flex;align-items:center;gap:26px;margin-left:auto}
    .ep-nav .nlink{color:rgba(255,255,255,.68);font-weight:500;font-size:.92rem;display:inline-flex;align-items:center;gap:7px}
    .ep-nav .nlink:hover{color:#fff}
    .ep-nav .nlink svg{width:15px;height:15px}
    /* lighter panel + brighter text so the install pill reads clearly on the dark nav */
    .copy-pill{display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:.82rem;color:#f2eeff;
      background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.22);padding:8px 12px;border-radius:var(--r-pill);cursor:pointer;transition:.2s}
    .copy-pill:hover{background:rgba(255,255,255,.15);border-color:rgba(201,188,255,.65)}
    .copy-pill .dollar{color:#c9bcff;opacity:1}
    .copy-pill .cicon{width:14px;height:14px;opacity:.85}
    .copy-pill.copied{background:rgba(0,171,110,.16);border-color:rgba(0,171,110,.5);color:#c9f7e3}
    @media(max-width:900px){.ep-nav .nlinks{gap:16px}.ep-nav .backhub,.ep-nav .nlink.docs{display:none}}
    @media(max-width:620px){.copy-pill{display:none}}

    /* ---------- HERO ---------- */
    .hero{position:relative;overflow:hidden;background:var(--ep-ink);color:#fff;padding:96px 0 88px;isolation:isolate}
    .hero::before{content:"";position:absolute;inset:0;z-index:-2;
      background:
        radial-gradient(60rem 34rem at 78% -8%,rgba(131,62,242,.42),transparent 60%),
        radial-gradient(48rem 30rem at 8% 12%,rgba(121,73,232,.24),transparent 62%),
        radial-gradient(40rem 40rem at 50% 118%,rgba(90,52,196,.28),transparent 60%);}
    .hero::after{content:"";position:absolute;inset:0;z-index:-1;opacity:.5;
      background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);
      background-size:56px 56px;mask-image:radial-gradient(ellipse 90% 70% at 50% 30%,#000 40%,transparent 100%);
      -webkit-mask-image:radial-gradient(ellipse 90% 70% at 50% 30%,#000 40%,transparent 100%)}
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
    @media(max-width:940px){.hero-grid{grid-template-columns:1fr;gap:40px}}
    .hero .eyebrow{color:#c9bcff}
    .hero-badges{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:22px}
    .pill{display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:600;letter-spacing:.02em;
      padding:6px 13px;border-radius:var(--r-pill);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);color:#e9e5ff}
    .pill .dot{width:6px;height:6px;border-radius:50%;background:var(--c-aconomy-mint);box-shadow:0 0 10px var(--c-aconomy-mint)}
    .hero h1{color:#fff;font-size:clamp(2.5rem,5.4vw,4.05rem);letter-spacing:-.03em;line-height:1.02;margin-bottom:20px}
    /* light, high-contrast gradient on the dark hero: sky -> mint (fallback solid for no-clip browsers) */
    .hero h1 .grad{color:#a5d0ff;background:linear-gradient(100deg,#7fb2ff 0%,#bfe0ff 42%,#5ff0d0 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 1px 24px rgba(127,178,255,.25)}
    @supports not ((-webkit-background-clip:text) or (background-clip:text)){.hero h1 .grad{color:#a5d0ff;-webkit-text-fill-color:currentColor}}
    .hero .lead{color:rgba(233,231,246,.82);max-width:44ch;font-size:clamp(1.05rem,1.7vw,1.24rem)}
    .hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:32px}
    .hero-meta{display:flex;flex-wrap:wrap;gap:22px;margin-top:34px;font-size:.84rem;color:rgba(233,231,246,.6)}
    .hero-meta span{display:inline-flex;align-items:center;gap:8px}
    .hero-meta svg{width:16px;height:16px;color:var(--c-express-2)}

    /* ---------- CODE CARD ---------- */
    .code-card{background:linear-gradient(180deg,#0c1428 0%,#0a1020 100%);border:1px solid var(--ep-line);border-radius:16px;
      box-shadow:0 30px 70px rgba(3,6,16,.6),0 0 0 1px rgba(255,255,255,.02) inset;overflow:hidden;position:relative}
    .code-card::before{content:"";position:absolute;inset:0;border-radius:16px;padding:1px;pointer-events:none;
      background:linear-gradient(135deg,rgba(131,62,242,.55),transparent 40%,transparent 70%,rgba(121,73,232,.35));
      -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
    .code-top{display:flex;align-items:center;gap:8px;padding:13px 16px;background:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.06)}
    .code-top .dots{display:flex;gap:7px}
    .code-top .dots i{width:11px;height:11px;border-radius:50%;display:block}
    .code-top .dots i:nth-child(1){background:#ff5f57}.code-top .dots i:nth-child(2){background:#febc2e}.code-top .dots i:nth-child(3){background:#28c840}
    .code-top .fname{margin-left:8px;font-family:var(--mono);font-size:.76rem;color:rgba(255,255,255,.45)}
    .code-top .tag{margin-left:auto;font-family:var(--mono);font-size:.68rem;color:#c9bcff;background:rgba(121,73,232,.16);padding:3px 9px;border-radius:6px;border:1px solid var(--ep-line)}
    pre{margin:0;padding:20px 20px 22px;overflow-x:auto;font-family:var(--mono);font-size:.83rem;line-height:1.75;color:#d7dbe8;-webkit-overflow-scrolling:touch}
    pre code{font-family:inherit}
    .tk-c{color:#5b6b8c;font-style:italic}     /* comment */
    .tk-k{color:#c792ea}                        /* keyword */
    .tk-f{color:#82aaff}                        /* function */
    .tk-s{color:#9be0a8}                        /* string */
    .tk-n{color:#f6b17a}                        /* number */
    .tk-p{color:#7f8db3}                        /* punctuation */
    .tk-m{color:#e6d3ff}                        /* method / property */

    /* ---------- SECTIONS (light) ---------- */
    .sec-head{max-width:60ch}
    .sec-head .eyebrow{color:var(--c-express)}
    .sec-head h2{margin:14px 0 14px}
    .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
    .grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
    @media(max-width:1040px){.grid-4{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:900px){.grid-3{grid-template-columns:1fr}.grid-2{grid-template-columns:1fr}}
    @media(max-width:560px){.grid-4{grid-template-columns:1fr}}

    /* token-standard cards */
    .std-card{position:relative;overflow:hidden}
    .std-card .std-tag{font-family:var(--mono);font-weight:700;font-size:1.5rem;letter-spacing:-.01em;color:var(--navy)}
    .std-card .std-tag b{color:var(--c-express)}
    .std-card .kv{display:inline-flex;align-items:center;gap:7px;margin-top:2px;margin-bottom:14px}
    .std-card .kv .badge{font-size:.68rem}
    .std-card p{color:var(--slate);font-size:.96rem;margin:0}
    .std-card .rail{position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(var(--c-express),var(--c-express-2))}

    /* feature grid */
    .feat{display:flex;flex-direction:column;gap:14px}
    .feat .ic{width:46px;height:46px;border-radius:12px;display:grid;place-items:center;
      background:rgba(121,73,232,.1);border:1px solid var(--ep-line);color:var(--c-express)}
    .feat .ic svg{width:23px;height:23px}
    .feat h3{font-size:1.18rem}
    .feat p{color:var(--slate);margin:0;font-size:.96rem}
    .feat .funcs{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}
    .feat .funcs code{font-family:var(--mono);font-size:.72rem;color:var(--c-express);background:rgba(121,73,232,.09);border:1px solid var(--ep-line);padding:3px 8px;border-radius:6px}

    /* ---------- x402 MODULE (dark feature band) ---------- */
    .x402{position:relative;overflow:hidden;background:var(--ep-ink-2);color:#fff;isolation:isolate}
    .x402::before{content:"";position:absolute;inset:0;z-index:-1;
      background:radial-gradient(50rem 30rem at 88% 0%,rgba(131,62,242,.34),transparent 58%),radial-gradient(40rem 30rem at 0% 100%,rgba(0,108,255,.16),transparent 55%)}
    .x402 .badge-new{display:inline-flex;align-items:center;gap:8px;font-size:.74rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
      color:#fff;background:linear-gradient(135deg,var(--c-express),var(--c-express-2));padding:6px 13px;border-radius:var(--r-pill);box-shadow:0 6px 20px rgba(121,73,232,.4)}
    .x402 h2{color:#fff;margin:18px 0 16px}
    .x402 .lead{color:rgba(233,231,246,.82)}
    .x402-grid{display:grid;grid-template-columns:1fr 1.02fr;gap:48px;align-items:center}
    @media(max-width:940px){.x402-grid{grid-template-columns:1fr;gap:34px}}
    .x402 .flow{list-style:none;padding:0;margin:26px 0 0;display:grid;gap:12px}
    .x402 .flow li{display:flex;gap:14px;align-items:flex-start}
    .x402 .flow .n{flex-shrink:0;width:27px;height:27px;border-radius:8px;display:grid;place-items:center;font-family:var(--mono);font-size:.78rem;font-weight:700;
      color:#e6d3ff;background:rgba(121,73,232,.2);border:1px solid var(--ep-line)}
    .x402 .flow b{color:#fff;font-weight:600}
    .x402 .flow span{color:rgba(233,231,246,.66);font-size:.92rem}
    .x402-chips{display:flex;flex-wrap:wrap;gap:9px;margin-top:26px}
    .x402-chips .chip{font-size:.76rem;font-weight:600;color:#e9e5ff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);padding:6px 12px;border-radius:var(--r-pill)}
    .x402-chips .chip b{color:#b9a6ff}

    /* ---------- MODERNIZED STRIP ---------- */
    .modern{background:var(--bg)}
    .modern-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    @media(max-width:900px){.modern-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:520px){.modern-grid{grid-template-columns:1fr}}
    .mcard{background:#fff;border:1px solid var(--gray-200);border-radius:var(--r);padding:24px;transition:.25s}
    .mcard:hover{transform:translateY(-3px);box-shadow:var(--shadow);border-color:transparent}
    .mcard .ic{width:40px;height:40px;border-radius:10px;display:grid;place-items:center;background:rgba(121,73,232,.1);color:var(--c-express);margin-bottom:14px}
    .mcard .ic svg{width:21px;height:21px}
    .mcard h4{font-size:1.02rem;margin-bottom:6px}
    .mcard p{color:var(--slate);font-size:.88rem;margin:0}

    /* ---------- GUIDES ---------- */
    .guide{display:flex;align-items:center;gap:18px;padding:22px 24px;background:#fff;border:1px solid var(--gray-200);border-radius:var(--r);transition:.22s}
    .guide:hover{border-color:transparent;box-shadow:var(--shadow);transform:translateX(4px)}
    .guide .gnum{font-family:var(--mono);font-size:.86rem;color:var(--c-express);font-weight:700;flex-shrink:0}
    .guide .gbody{flex:1;min-width:0}
    .guide h3{font-size:1.12rem;margin-bottom:3px}
    .guide p{margin:0;color:var(--slate);font-size:.9rem}
    .guide .garrow{flex-shrink:0;color:var(--gray-300);transition:.22s}
    .guide:hover .garrow{color:var(--c-express);transform:translateX(3px)}
    .guide .garrow svg{width:22px;height:22px;display:block}
    .guides-list{display:grid;gap:14px}

    /* ---------- DOCS CTA ---------- */
    .cta{position:relative;overflow:hidden;background:var(--ep-ink);color:#fff;border-radius:var(--r-lg);padding:64px 56px;isolation:isolate;text-align:center}
    .cta::before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(40rem 24rem at 50% -20%,rgba(131,62,242,.5),transparent 60%)}
    .cta h2{color:#fff;margin-bottom:14px}
    .cta p{color:rgba(233,231,246,.8);max-width:52ch;margin:0 auto 28px}
    .cta .cta-btns{display:flex;flex-wrap:wrap;gap:14px;justify-content:center}
    /* install line as a readable bordered chip, not dim text lost on the dark panel */
    .cta .install{display:inline-flex;align-items:center;gap:8px;margin-top:26px;font-family:var(--mono);font-size:.84rem;color:#f2eeff;
      background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);padding:9px 16px;border-radius:var(--r-pill)}
    .cta .install .p{color:#c9bcff}
    .cta .install b{color:#fff;font-weight:600}
    @media(max-width:600px){.cta{padding:48px 24px}}

    /* ---------- FOOTER extras ---------- */
    .footer .f-top{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:32px}
    @media(max-width:820px){.footer .f-top{grid-template-columns:1fr 1fr}}
    @media(max-width:520px){.footer .f-top{grid-template-columns:1fr}}
    .footer .flogo{height:26px;margin-bottom:16px}
    .footer .fabout{color:rgba(255,255,255,.62);font-size:.9rem;max-width:34ch}
    .footer h5{color:#fff;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;margin-bottom:14px;font-weight:700}
    .footer .fcol a{display:block;font-size:.92rem;padding:5px 0}
    .footer .f-bottom{display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;align-items:center;
      margin-top:44px;padding-top:24px;border-top:1px solid rgba(255,255,255,.12);font-size:.84rem;color:rgba(255,255,255,.5)}
    .footer .f-bottom .rehab{display:inline-flex;align-items:center;gap:8px}
    .footer .f-bottom code{font-family:var(--mono);color:#c9bcff}

    /* ---------- BUILT IN THE OPEN (GitHub proof-of-work) ---------- */
    .oss{background:var(--bg)}
    .oss-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:40px}
    @media(max-width:900px){.oss-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:520px){.oss-grid{grid-template-columns:1fr}}
    .repo{display:block;background:#fff;border:1px solid var(--gray-200);border-radius:var(--r);padding:24px;transition:.25s}
    .repo:hover{transform:translateY(-3px);box-shadow:var(--shadow);border-color:transparent}
    .repo .gh{width:40px;height:40px;border-radius:10px;display:grid;place-items:center;background:rgba(121,73,232,.1);
      border:1px solid var(--ep-line);color:var(--c-express);margin-bottom:14px}
    .repo .gh svg{width:21px;height:21px}
    .repo .rpath{font-family:var(--mono);font-weight:700;font-size:.9rem;letter-spacing:-.01em;color:var(--navy);
      display:inline-flex;align-items:center;gap:6px;word-break:break-word}
    .repo .rpath svg{width:13px;height:13px;color:var(--c-express);flex:none;transition:transform .25s}
    .repo:hover .rpath svg{transform:translate(2px,-2px)}
    .repo .rdesc{color:var(--slate);font-size:.88rem;margin:6px 0 0;line-height:1.5}

    /* ---------- ECOSYSTEM STRIP (Built on Express Protocol) ---------- */
    .eco{background:#fff;border-top:1px solid var(--gray-200);border-bottom:1px solid var(--gray-200)}
    .eco .eco-head{text-align:center;max-width:56ch;margin:0 auto}
    .eco .eco-head .eyebrow{color:var(--c-express)}
    .eco .eco-head h2{margin:12px 0 10px}
    .eco .eco-head p{color:var(--slate);margin:0}
    .eco-marks{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:14px 16px;margin-top:36px}
    .eco-mark{font-weight:700;font-size:1.02rem;letter-spacing:-.01em;color:var(--navy);
      padding:11px 18px;border:1px solid var(--gray-200);border-radius:var(--r-pill);background:var(--bg);
      transition:.22s;display:inline-flex;align-items:center;gap:9px;white-space:nowrap}
    .eco-mark:hover{border-color:var(--c-express);color:var(--c-express);transform:translateY(-2px);box-shadow:var(--shadow)}
    .eco-mark .edot{width:7px;height:7px;border-radius:50%;background:var(--c-express);opacity:.55;flex:none}
    .eco-mark:hover .edot{opacity:1}

    /* ---------- FAQ ---------- */
    .faqs{display:grid;gap:12px;margin-top:40px;max-width:60ch}
    details.faq{background:#fff;border:1px solid var(--gray-200);border-radius:var(--r);overflow:hidden;transition:border-color .2s}
    details.faq[open]{border-color:var(--c-express)}
    details.faq summary{list-style:none;cursor:pointer;padding:18px 20px;font-weight:600;color:var(--navy);font-size:1.02rem;
      display:flex;align-items:center;justify-content:space-between;gap:14px}
    details.faq summary::-webkit-details-marker{display:none}
    details.faq summary .fq-ic{flex:none;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;
      border:1.5px solid var(--gray-300);color:var(--slate);transition:.2s;font-size:1rem;line-height:1}
    details.faq[open] summary .fq-ic{background:var(--c-express);border-color:var(--c-express);color:#fff;transform:rotate(45deg)}
    details.faq .fq-body{padding:0 20px 18px;color:var(--slate);font-size:.95rem;line-height:1.62;margin:0}
    details.faq .fq-body code{font-family:var(--mono);font-size:.86em;color:var(--c-express);background:rgba(121,73,232,.09);border:1px solid var(--ep-line);padding:1px 6px;border-radius:5px}

    /* ---------- BOOK-A-DEMO CTA (light) ---------- */
    .book{background:var(--bg)}
    .book-inner{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;
      background:#fff;border:1px solid var(--gray-200);border-radius:var(--r-lg);padding:36px 40px}
    .book-inner .bk-copy{max-width:52ch}
    .book-inner h3{font-size:1.5rem;margin-bottom:8px}
    .book-inner p{color:var(--slate);margin:0;font-size:.98rem}
    .book-inner .bk-btns{display:flex;flex-wrap:wrap;gap:12px}
    .btn-glow{background:linear-gradient(135deg,var(--c-express),var(--c-express-2));color:#fff;box-shadow:0 8px 24px rgba(121,73,232,.35)}
    .btn-glow:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(121,73,232,.5)}
    @media(max-width:640px){.book-inner{padding:28px 24px}}

    /* reveal easing already in DS; add stagger helper */
    .reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}
    @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}}
  `;
