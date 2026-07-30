/* ------------------------------------------------------------------
   /unitymarket — the page's original inline <style> block, byte for byte.

   Copied verbatim out of unitymarket/index.html. It stays inline
   (String.raw, so CSS escapes like content:"\2014" survive) rather
   than becoming a CSS Module or a global sheet: these pages share
   generic selectors (.hero, .section, .pcard) that would collide the
   moment they were globalised, and preserving the block unchanged is
   what guarantees pixel-identity. Do not reformat, minify or tidy it.
   ------------------------------------------------------------------ */

export const pageCss = String.raw`
    /* ============================================================
       UNITYMARKET — page styles (accent: gold --c-unity #f1a940)
       Tokens come from ../assets/design-system.css. Do not redefine.
       ============================================================ */
    :root{
      --um-ink:#0b0d1a;              /* deep gallery ink, darker than navy */
      --um-ink-2:#0e1120;
      --um-gold:#f1a940;
      --um-gold-2:#ffcf72;          /* lighter gold for gradients */
      --um-gold-deep:#d68a1f;
      --um-line:rgba(241,169,64,.20);
      --um-glass:rgba(255,255,255,.04);
    }

    /* --- selection + focus in brand gold --- */
    ::selection{background:rgba(241,169,64,.30);color:#1a1205}
    a:focus-visible,button:focus-visible{outline:2px solid var(--um-gold);outline-offset:3px;border-radius:10px}

    /* gold-accented buttons on top of shared .btn base */
    .btn-unity{background:linear-gradient(135deg,var(--um-gold) 0%,var(--um-gold-2) 100%);color:#231704;font-weight:600;box-shadow:0 8px 26px rgba(241,169,64,.38)}
    .btn-unity:hover{transform:translateY(-2px);box-shadow:0 14px 40px rgba(241,169,64,.52)}
    .btn-onlight{background:#fff;color:var(--navy);border:1px solid var(--gray-200)}
    .btn-onlight:hover{transform:translateY(-2px);box-shadow:var(--shadow);border-color:transparent}
    .btn-wire{background:transparent;border:1.5px solid rgba(255,255,255,.22);color:#fff}
    .btn-wire:hover{border-color:var(--um-gold);background:rgba(241,169,64,.08);color:#ffe9c2}

    /* ---------- NAV ---------- */
    .um-nav{position:sticky;top:0;z-index:60;background:rgba(11,13,26,.72);backdrop-filter:blur(14px) saturate(140%);border-bottom:1px solid rgba(255,255,255,.07)}
    .um-nav .nav-inner{display:flex;align-items:center;gap:20px;height:70px}
    .um-nav .brand{display:flex;align-items:center;gap:11px;flex-shrink:0}
    .um-nav .brand img{height:26px;width:auto;display:block}
    .um-nav .v1{font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#ffdca0;
      background:rgba(241,169,64,.14);border:1px solid var(--um-line);padding:3px 8px;border-radius:var(--r-pill)}
    .um-nav .backhub{font-size:.82rem;color:rgba(255,255,255,.55);display:inline-flex;align-items:center;gap:6px;padding-right:16px;border-right:1px solid rgba(255,255,255,.12)}
    .um-nav .backhub:hover{color:#fff}
    .um-nav .nlinks{display:flex;align-items:center;gap:26px;margin-left:auto}
    .um-nav .nlink{color:rgba(255,255,255,.68);font-weight:500;font-size:.92rem}
    .um-nav .nlink:hover{color:#fff}
    @media(max-width:900px){.um-nav .nlinks{gap:16px}.um-nav .backhub,.um-nav .nlink.collections{display:none}}
    @media(max-width:560px){.um-nav .nlink.drops{display:none}}

    /* ---------- HERO ---------- */
    .hero{position:relative;overflow:hidden;background:var(--um-ink);color:#fff;padding:104px 0 92px;isolation:isolate}
    .hero::before{content:"";position:absolute;inset:0;z-index:-2;
      background:
        radial-gradient(58rem 34rem at 82% -6%,rgba(241,169,64,.34),transparent 60%),
        radial-gradient(44rem 30rem at 6% 16%,rgba(255,207,114,.14),transparent 62%),
        radial-gradient(46rem 40rem at 50% 122%,rgba(214,138,31,.22),transparent 60%);}
    .hero::after{content:"";position:absolute;inset:0;z-index:-1;opacity:.5;
      background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);
      background-size:56px 56px;mask-image:radial-gradient(ellipse 90% 70% at 50% 30%,#000 40%,transparent 100%);
      -webkit-mask-image:radial-gradient(ellipse 90% 70% at 50% 30%,#000 40%,transparent 100%)}
    .hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:56px;align-items:center}
    @media(max-width:940px){.hero-grid{grid-template-columns:1fr;gap:48px}}
    .hero-badges{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:22px}
    .pill{display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:600;letter-spacing:.02em;
      padding:6px 13px;border-radius:var(--r-pill);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);color:#f6ecd9}
    .pill .dot{width:6px;height:6px;border-radius:50%;background:var(--c-aconomy-mint);box-shadow:0 0 10px var(--c-aconomy-mint)}
    .hero .eyebrow{color:#ffd79a}
    .hero h1{color:#fff;font-size:clamp(2.6rem,5.6vw,4.15rem);letter-spacing:-.03em;line-height:1.01;margin-bottom:20px;font-weight:700}
    .hero h1 .grad{background:linear-gradient(100deg,#ffcf72 0%,#f1a940 48%,#ffdca0 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
    .hero .lead{color:rgba(246,236,217,.82);max-width:46ch;font-size:clamp(1.05rem,1.7vw,1.24rem)}
    .hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:32px}
    .hero-stats{display:flex;flex-wrap:wrap;gap:30px;margin-top:38px}
    .hero-stats .st b{display:block;font-size:1.5rem;font-weight:700;color:#fff;letter-spacing:-.01em;line-height:1}
    .hero-stats .st span{font-size:.8rem;color:rgba(246,236,217,.58);margin-top:5px;display:block}

    /* ---------- HERO NFT GALLERY VISUAL ---------- */
    .gallery{position:relative}
    .gallery-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
    .nft{position:relative;border-radius:16px;overflow:hidden;background:#12152a;border:1px solid rgba(255,255,255,.08);
      box-shadow:0 24px 60px rgba(3,4,12,.55);transition:.35s cubic-bezier(.2,.7,.2,1)}
    .nft:hover{transform:translateY(-6px);border-color:var(--um-line);box-shadow:0 32px 72px rgba(3,4,12,.7)}
    .nft .art{aspect-ratio:1/1;position:relative;overflow:hidden}
    /* generic generative-art placeholder mark: soft ring + faceted diamond, blended into the tile's own palette */
    .nft .art::before{content:"";position:absolute;inset:0;z-index:1;background:
      radial-gradient(circle at 50% 50%,transparent 26%,rgba(255,255,255,.5) 27%,rgba(255,255,255,.5) 28%,transparent 29%),
      conic-gradient(from 45deg at 50% 50%,transparent 0deg,rgba(255,255,255,.35) 12deg,transparent 24deg,transparent 90deg,rgba(255,255,255,.35) 102deg,transparent 114deg,transparent 180deg,rgba(255,255,255,.35) 192deg,transparent 204deg,transparent 270deg,rgba(255,255,255,.35) 282deg,transparent 294deg);
      mix-blend-mode:overlay;opacity:.55}
    .nft .art::after{content:"";position:absolute;inset:0;z-index:2;background:
      radial-gradient(120% 90% at 20% 15%,rgba(255,255,255,.28),transparent 45%),
      radial-gradient(80% 80% at 85% 90%,rgba(0,0,0,.35),transparent 55%);mix-blend-mode:overlay}
    .nft .grain{position:absolute;inset:0;z-index:3;opacity:.5;background-image:
      radial-gradient(rgba(255,255,255,.16) .6px,transparent .6px);background-size:6px 6px}
    .nft .meta{padding:12px 13px 13px;display:flex;align-items:center;justify-content:space-between;gap:8px}
    .nft .meta .t{font-size:.82rem;font-weight:700;color:#fff;letter-spacing:-.01em}
    .nft .meta .c{font-size:.66rem;color:rgba(246,236,217,.5);margin-top:2px}
    .nft .price{text-align:right;flex-shrink:0}
    .nft .price .p{font-size:.82rem;font-weight:700;color:var(--um-gold-2)}
    .nft .price .l{font-size:.6rem;color:rgba(246,236,217,.45);letter-spacing:.06em;text-transform:uppercase}
    .nft.tall{grid-row:span 2}
    /* offset the second column for a masonry/gallery rhythm */
    .gallery-grid > .col{display:grid;gap:16px;align-content:start}
    .gallery-grid > .col.push{margin-top:34px}
    @media(max-width:940px){.gallery-grid > .col.push{margin-top:0}}
    /* art gradient palettes — layered radial + linear for a generative-art feel, not a flat swatch */
    .g1{background:radial-gradient(120% 140% at 15% 0%,rgba(255,255,255,.22),transparent 44%),linear-gradient(155deg,#ff8a00,#f1a940 42%,#7a4bff 78%,#4b2ea3)}
    .g2{background:radial-gradient(120% 140% at 15% 0%,rgba(255,255,255,.22),transparent 44%),linear-gradient(155deg,#00abbe,#00ffc2 55%,#0b6bff 82%,#062e8f)}
    .g3{background:radial-gradient(120% 140% at 15% 0%,rgba(255,255,255,.22),transparent 44%),linear-gradient(155deg,#7949e8,#c86bff 50%,#ff6bd0 82%,#8a1f6a)}
    .g4{background:radial-gradient(120% 140% at 85% 100%,rgba(241,169,64,.28),transparent 48%),linear-gradient(155deg,#0b1220,#2b3f7a 55%,#f1a940 100%)}
    .g5{background:radial-gradient(120% 140% at 15% 0%,rgba(255,255,255,.24),transparent 44%),linear-gradient(155deg,#ff5f6d,#ffc371 70%,#d6431f)}
    .float-badge{position:absolute;z-index:3;display:inline-flex;align-items:center;gap:7px;font-size:.72rem;font-weight:700;
      color:#231704;background:linear-gradient(135deg,var(--um-gold),var(--um-gold-2));padding:7px 12px;border-radius:var(--r-pill);
      box-shadow:0 10px 26px rgba(241,169,64,.45)}
    .float-badge.live{top:-14px;left:-10px}
    .float-badge .ld{width:7px;height:7px;border-radius:50%;background:#231704;animation:pulse 1.4s infinite}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}

    /* ---------- SECTIONS (light) ---------- */
    .sec-head{max-width:62ch}
    .sec-head .eyebrow{color:var(--um-gold-deep)}
    .sec-head h2{margin:14px 0 14px}
    .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
    .grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    @media(max-width:900px){.grid-3{grid-template-columns:1fr}.grid-2{grid-template-columns:1fr}}

    /* feature cards */
    .feat{display:flex;flex-direction:column;gap:13px}
    .feat .ic{width:48px;height:48px;border-radius:13px;display:grid;place-items:center;
      background:rgba(241,169,64,.12);border:1px solid var(--um-line);color:var(--um-gold-deep)}
    .feat .ic svg{width:23px;height:23px}
    .feat h3{font-size:1.18rem}
    .feat p{color:var(--slate);margin:0;font-size:.96rem}

    /* ---------- FEATURED DROPS (dark gallery band) ---------- */
    .drops{position:relative;overflow:hidden;background:var(--um-ink-2);color:#fff;isolation:isolate}
    .drops::before{content:"";position:absolute;inset:0;z-index:-1;
      background:radial-gradient(48rem 30rem at 90% -10%,rgba(241,169,64,.24),transparent 58%),radial-gradient(40rem 30rem at 0% 110%,rgba(122,75,255,.14),transparent 55%)}
    .drops .sec-head .eyebrow{color:#ffd79a}
    .drops h2{color:#fff}
    .drops .lead{color:rgba(246,236,217,.78)}
    .drops-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap}
    .drops .seeall{color:#ffdca0;font-weight:600;font-size:.92rem;display:inline-flex;align-items:center;gap:7px;white-space:nowrap}
    .drops .seeall:hover{color:#fff}
    .drops-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:40px}
    @media(max-width:940px){.drops-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:520px){.drops-grid{grid-template-columns:1fr}}
    .dcard{background:#12152a;border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;transition:.3s cubic-bezier(.2,.7,.2,1)}
    .dcard:hover{transform:translateY(-6px);border-color:var(--um-line);box-shadow:0 26px 60px rgba(3,4,12,.6)}
    .dcard .art{aspect-ratio:4/3;position:relative;overflow:hidden}
    /* same generic generative-art placeholder mark as the hero gallery, for a consistent framing across the page */
    .dcard .art::before{content:"";position:absolute;inset:0;z-index:1;background:
      radial-gradient(circle at 50% 50%,transparent 30%,rgba(255,255,255,.5) 31%,rgba(255,255,255,.5) 32%,transparent 33%),
      conic-gradient(from 45deg at 50% 50%,transparent 0deg,rgba(255,255,255,.32) 12deg,transparent 24deg,transparent 90deg,rgba(255,255,255,.32) 102deg,transparent 114deg,transparent 180deg,rgba(255,255,255,.32) 192deg,transparent 204deg,transparent 270deg,rgba(255,255,255,.32) 282deg,transparent 294deg);
      mix-blend-mode:overlay;opacity:.5}
    .dcard .art::after{content:"";position:absolute;inset:0;z-index:2;background:radial-gradient(120% 90% at 20% 12%,rgba(255,255,255,.24),transparent 46%),radial-gradient(80% 80% at 85% 92%,rgba(0,0,0,.4),transparent 55%);mix-blend-mode:overlay}
    .dcard .grain{position:absolute;inset:0;z-index:3;opacity:.5;background-image:radial-gradient(rgba(255,255,255,.16) .6px,transparent .6px);background-size:6px 6px}
    .dcard .tagline{position:absolute;top:12px;left:12px;z-index:4;font-size:.66rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
      color:#231704;background:rgba(255,255,255,.9);padding:4px 9px;border-radius:var(--r-pill)}
    .dcard .body{padding:15px 15px 17px}
    .dcard .cname{font-size:1rem;font-weight:700;color:#fff;letter-spacing:-.01em}
    .dcard .cby{font-size:.72rem;color:rgba(246,236,217,.5);margin:3px 0 12px}
    .dcard .row{display:flex;align-items:center;justify-content:space-between;padding-top:12px;border-top:1px solid rgba(255,255,255,.08)}
    .dcard .row .l{font-size:.62rem;color:rgba(246,236,217,.45);letter-spacing:.06em;text-transform:uppercase}
    .dcard .row .p{font-size:.92rem;font-weight:700;color:var(--um-gold-2)}
    .dcard .row .items{font-size:.78rem;color:rgba(246,236,217,.7);text-align:right}

    /* ---------- HOW IT WORKS ---------- */
    .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:44px}
    @media(max-width:900px){.steps{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:520px){.steps{grid-template-columns:1fr}}
    .step{position:relative;padding:26px 24px;background:#fff;border:1px solid var(--gray-200);border-radius:var(--r);transition:.25s}
    .step:hover{transform:translateY(-3px);box-shadow:var(--shadow);border-color:transparent}
    .step .n{font-family:'Figtree';font-weight:800;font-size:2.2rem;letter-spacing:-.02em;
      background:linear-gradient(135deg,var(--um-gold-deep),var(--um-gold));-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1}
    .step h4{font-size:1.06rem;margin:12px 0 6px}
    .step p{color:var(--slate);font-size:.9rem;margin:0}

    /* ---------- FOR CREATORS (dark strip) ---------- */
    .creators{position:relative;overflow:hidden;background:var(--um-ink);color:#fff;isolation:isolate}
    .creators::before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(46rem 28rem at 12% 0%,rgba(241,169,64,.26),transparent 58%),radial-gradient(38rem 30rem at 100% 100%,rgba(255,207,114,.10),transparent 55%)}
    .creators-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:52px;align-items:center}
    @media(max-width:940px){.creators-grid{grid-template-columns:1fr;gap:38px}}
    .creators .eyebrow{color:#ffd79a}
    .creators h2{color:#fff;margin:14px 0 16px}
    .creators .lead{color:rgba(246,236,217,.82)}
    .clist{list-style:none;padding:0;margin:26px 0 0;display:grid;gap:14px}
    .clist li{display:flex;gap:14px;align-items:flex-start}
    .clist .ck{flex-shrink:0;width:28px;height:28px;border-radius:9px;display:grid;place-items:center;color:var(--um-gold-2);
      background:rgba(241,169,64,.16);border:1px solid var(--um-line)}
    .clist .ck svg{width:16px;height:16px}
    .clist b{color:#fff;font-weight:600}
    .clist span{color:rgba(246,236,217,.68);font-size:.94rem}
    /* creator earnings panel */
    .earn{background:linear-gradient(180deg,#12152a 0%,#0e1120 100%);border:1px solid var(--um-line);border-radius:18px;
      padding:28px;box-shadow:0 30px 70px rgba(3,4,12,.55);position:relative;overflow:hidden}
    .earn::before{content:"";position:absolute;inset:0;border-radius:18px;padding:1px;pointer-events:none;
      background:linear-gradient(135deg,rgba(241,169,64,.55),transparent 42%,transparent 72%,rgba(255,207,114,.32));
      -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
    .earn .eh{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
    .earn .eh .lbl{font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(246,236,217,.55)}
    .earn .eh .roy{font-size:.72rem;font-weight:700;color:#231704;background:linear-gradient(135deg,var(--um-gold),var(--um-gold-2));padding:4px 10px;border-radius:var(--r-pill)}
    .earn .amt{font-size:2.4rem;font-weight:800;letter-spacing:-.02em;color:#fff;line-height:1}
    .earn .amt small{font-size:1rem;font-weight:600;color:var(--um-gold-2);margin-left:6px}
    .earn .sub{font-size:.82rem;color:rgba(246,236,217,.55);margin-top:6px}
    .earn .bar{height:8px;border-radius:var(--r-pill);background:rgba(255,255,255,.08);margin:22px 0 8px;overflow:hidden}
    .earn .bar i{display:block;height:100%;width:72%;background:linear-gradient(90deg,var(--um-gold-deep),var(--um-gold-2));border-radius:var(--r-pill)}
    .earn .barrow{display:flex;justify-content:space-between;font-size:.72rem;color:rgba(246,236,217,.5)}
    .earn .split{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px}
    .earn .split .cell{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:14px}
    .earn .split .cell b{display:block;font-size:1.2rem;color:#fff;font-weight:700}
    .earn .split .cell span{font-size:.72rem;color:rgba(246,236,217,.55)}

    /* ---------- CHAINS STRIP ---------- */
    .chains{background:var(--bg)}
    .chain-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:32px}
    .chip-chain{display:inline-flex;align-items:center;gap:9px;font-size:.88rem;font-weight:600;color:var(--navy);
      background:#fff;border:1px solid var(--gray-200);padding:11px 18px;border-radius:var(--r-pill);transition:.22s}
    .chip-chain:hover{border-color:var(--um-gold);box-shadow:var(--shadow);transform:translateY(-2px)}
    .chip-chain .cd{width:9px;height:9px;border-radius:50%}

    /* ---------- CTA BAND ---------- */
    .cta{position:relative;overflow:hidden;background:var(--um-ink);color:#fff;border-radius:var(--r-lg);padding:66px 56px;isolation:isolate;text-align:center}
    .cta::before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(42rem 24rem at 50% -20%,rgba(241,169,64,.42),transparent 60%),radial-gradient(30rem 20rem at 50% 120%,rgba(214,138,31,.28),transparent 60%)}
    .cta .eyebrow{color:#ffd79a}
    .cta h2{color:#fff;margin:14px 0 14px}
    .cta p{color:rgba(246,236,217,.82);max-width:54ch;margin:0 auto 28px}
    .cta .cta-btns{display:flex;flex-wrap:wrap;gap:14px;justify-content:center}
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
    .footer .f-bottom .rehab:hover{color:#fff}

    /* ---------- BUILT IN THE OPEN (modest single-link strip) ---------- */
    .oss{background:var(--bg)}
    .oss-strip{margin-top:8px}
    .repo{display:flex;gap:16px;align-items:center;max-width:640px;background:#fff;border:1px solid var(--gray-200);
      border-radius:var(--r-lg);padding:22px 24px;transition:.25s}
    .repo:hover{transform:translateY(-3px);box-shadow:var(--shadow);border-color:var(--um-gold)}
    .repo .gh{width:44px;height:44px;border-radius:12px;flex:0 0 auto;display:grid;place-items:center;
      background:rgba(241,169,64,.12);color:var(--um-gold-deep);border:1px solid var(--um-line)}
    .repo .gh svg{width:23px;height:23px}
    .repo .rpath{font-weight:700;font-size:1rem;letter-spacing:-.01em;color:var(--navy);display:inline-flex;align-items:center;gap:7px}
    .repo .rpath svg{width:14px;height:14px;color:var(--um-gold-deep);flex:none;transition:transform .25s}
    .repo:hover .rpath svg{transform:translate(2px,-2px)}
    .repo .rdesc{color:var(--slate);font-size:.92rem;margin:5px 0 0;line-height:1.5}

    /* ---------- AI CURATOR (light, product-led) ---------- */
    .curator-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:52px;align-items:center;margin-top:44px}
    @media(max-width:940px){.curator-grid{grid-template-columns:1fr;gap:40px}}
    .cur-steps{list-style:none;padding:0;margin:24px 0 0;display:grid;gap:12px}
    .cur-steps li{display:flex;gap:13px;align-items:flex-start}
    .cur-steps .sd{flex-shrink:0;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;font-family:'Figtree';font-weight:800;font-size:.9rem;
      color:var(--um-gold-deep);background:rgba(241,169,64,.12);border:1px solid var(--um-line)}
    .cur-steps b{color:var(--navy);font-weight:700}
    .cur-steps span{color:var(--slate);font-size:.94rem}
    /* mini agent-workspace preview panel */
    .cur-panel{background:linear-gradient(180deg,#12152a 0%,#0e1120 100%);border:1px solid var(--um-line);border-radius:18px;
      padding:20px;box-shadow:0 30px 70px rgba(3,4,12,.5);position:relative;overflow:hidden}
    .cur-panel .ph{display:flex;align-items:center;gap:9px;margin-bottom:14px;font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(246,236,217,.55)}
    .cur-panel .ph .pd{width:7px;height:7px;border-radius:50%;background:var(--um-gold);box-shadow:0 0 10px var(--um-gold)}
    .cur-line{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);margin-bottom:8px;font-family:'Figtree'}
    .cur-line .mk{width:17px;height:17px;border-radius:50%;flex:none;display:grid;place-items:center;font-size:11px;font-weight:900}
    .cur-line .mk.ok{background:var(--um-gold);color:#231704}
    .cur-line .mk.no{background:#d64216;color:#fff}
    .cur-line .fn{font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace;font-size:.82rem;color:#ffdca0}
    .cur-line .tag{margin-left:auto;font-size:.68rem;font-weight:700;padding:3px 8px;border-radius:999px}
    .cur-line .tag.g{background:rgba(0,255,194,.14);color:#7ff0d0}
    .cur-line .tag.r{background:rgba(214,66,22,.18);color:#ff9d7a}

    /* ---------- FAQ ---------- */
    .faqwrap{max-width:820px;margin:36px auto 0;display:grid;gap:12px}
    .faq{border:1px solid var(--gray-200);border-radius:var(--r);background:#fff;overflow:hidden;transition:.2s}
    .faq[open]{border-color:var(--um-gold);box-shadow:var(--shadow)}
    .faq summary{list-style:none;cursor:pointer;padding:18px 22px;font-weight:600;color:var(--navy);font-size:1.02rem;
      display:flex;align-items:center;justify-content:space-between;gap:16px}
    .faq summary::-webkit-details-marker{display:none}
    .faq summary::after{content:"+";font-size:1.4rem;font-weight:400;color:var(--um-gold-deep);line-height:1;flex:none;transition:transform .2s}
    .faq[open] summary::after{transform:rotate(45deg)}
    .faq p{margin:0;padding:0 22px 20px;color:var(--slate);font-size:.96rem;line-height:1.6}

    /* ---------- BOOK A DEMO ---------- */
    .btn-glow{background:linear-gradient(135deg,var(--um-gold) 0%,var(--um-gold-2) 100%);color:#231704;font-weight:600;box-shadow:0 8px 26px rgba(241,169,64,.38)}
    .btn-glow:hover{transform:translateY(-2px);box-shadow:0 14px 40px rgba(241,169,64,.52)}

    /* reveal stagger helper (base .reveal easing already in DS) */
    .reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}.reveal.d4{transition-delay:.32s}
    @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}}
  `;
