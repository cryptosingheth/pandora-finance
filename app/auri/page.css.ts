/* ------------------------------------------------------------------
   /auri — the page's original inline <style> block, byte for byte.

   Copied verbatim out of auri/index.html. It stays inline
   (String.raw, so CSS escapes like content:"\2014" survive) rather
   than becoming a CSS Module or a global sheet: these pages share
   generic selectors (.hero, .section, .pcard) that would collide the
   moment they were globalised, and preserving the block unchanged is
   what guarantees pixel-identity. Do not reformat, minify or tidy it.
   ------------------------------------------------------------------ */

export const pageCss = String.raw`
  /* ============================================================
     AURI — programmable-gold neobank (self-contained landing)
     Own brand feel (Wise/Mercury minimalism); coheres with the
     Pandora site via shared minimalism + system font.
     Tokens converted from auri-site.tsx.
     ============================================================ */
  :root{
    --ink:#0F1115;          /* primary text */
    --bg:#F7F8FB;           /* page background */
    --surf:#FFFFFF;         /* surfaces */
    --mute:#5B636E;         /* secondary text */
    --faint:#9AA1AC;        /* tertiary text */
    --line:rgba(15,17,21,.07);
    --teal:#10B981;         /* action / accent */
    --teal-strong:#0E9F6E;
    --teal-soft:rgba(16,185,129,.10);
    --gold:linear-gradient(135deg,#EBC97C,#C99A4E);
    --dark:linear-gradient(158deg,#11182B,#0A0D16);
    --grad:linear-gradient(120deg,#10B981,#3B82F6 55%,#8B5CF6);
    --font:system-ui,-apple-system,"SF Pro Display","Segoe UI",Roboto,sans-serif;
    --mono:"SF Mono",ui-monospace,Menlo,monospace;
    --shadow:0 8px 30px -16px rgba(20,30,60,.16);
    --maxw:1080px;
  }
  *{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}
  html{scroll-behavior:smooth}
  body{
    font-family:var(--font);background:var(--bg);color:var(--ink);
    line-height:1.6;text-rendering:optimizeLegibility;position:relative;overflow-x:hidden;
  }
  a{color:inherit;text-decoration:none}
  img,svg{max-width:100%;display:block}

  /* ambient background blobs (behind everything) */
  .bgfx{position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none}
  .bgfx span{position:absolute;border-radius:50%;filter:blur(24px)}
  .bgfx .b1{top:-12%;left:-8%;width:min(480px,60vw);aspect-ratio:1;background:radial-gradient(circle,rgba(16,185,129,.10),transparent 70%)}
  .bgfx .b2{top:32%;right:-12%;width:min(520px,64vw);aspect-ratio:1;background:radial-gradient(circle,rgba(59,130,246,.10),transparent 70%)}
  .bgfx .b3{bottom:-14%;left:28%;width:min(500px,62vw);aspect-ratio:1;background:radial-gradient(circle,rgba(124,92,245,.09),transparent 70%)}

  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 22px;position:relative;z-index:1}

  /* frosted card */
  .glass{
    background:rgba(255,255,255,.7);
    -webkit-backdrop-filter:blur(18px) saturate(150%);backdrop-filter:blur(18px) saturate(150%);
    border:1px solid var(--line);box-shadow:var(--shadow);
  }

  /* ---------- nav ---------- */
  .navwrap{position:sticky;top:12px;z-index:40;padding-top:12px}
  .nav{border-radius:16px;padding:11px 18px;display:flex;align-items:center;justify-content:space-between;gap:14px}
  .brand{display:inline-flex;align-items:center;gap:9px;font-size:21px;font-weight:700;letter-spacing:-.6px;color:var(--ink)}
  .coin{width:27px;height:27px;flex:0 0 auto}
  .nav-right{display:flex;align-items:center;gap:8px}
  .navlink{color:var(--ink);font-weight:600;font-size:14.5px;padding:8px 10px;border-radius:11px;white-space:nowrap}
  .navlink:hover{background:rgba(15,17,21,.05)}

  /* ---------- buttons ---------- */
  .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:var(--font);
    font-weight:600;font-size:14.5px;height:50px;padding:0 22px;border-radius:13px;border:0;cursor:pointer;
    transition:transform .12s ease, box-shadow .15s ease;white-space:nowrap}
  .btn:active{transform:scale(.97)}
  .btn-lg{height:54px;font-size:16px}
  .btn-sm{height:40px;font-size:14px;padding:0 16px}
  .btn-dark{background:var(--ink);color:#fff;box-shadow:0 10px 24px -12px rgba(15,17,21,.5)}
  .btn-dark:hover{box-shadow:0 14px 30px -12px rgba(15,17,21,.55)}
  .btn-glass{background:rgba(255,255,255,.7);color:var(--ink);border:1px solid var(--line);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
  .btn-glass:hover{border-color:rgba(15,17,21,.16)}
  .btn-white{background:#fff;color:var(--ink)}
  .btn-white:hover{box-shadow:0 12px 26px -14px rgba(20,30,60,.4)}
  .btn-ghost-d{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.28)}
  .btn-ghost-d:hover{background:rgba(255,255,255,.14)}
  /* Book-a-demo glow (adapts site's btn-glow name; teal on light) */
  .btn-glow{background:var(--teal);color:#06130E;box-shadow:0 10px 26px -10px rgba(16,185,129,.55)}
  .btn-glow:hover{transform:translateY(-1px);box-shadow:0 16px 34px -12px rgba(16,185,129,.6)}

  /* ---------- status / eyebrow pills ---------- */
  .pill{display:inline-flex;align-items:center;gap:6px;border-radius:20px;padding:6px 13px;font-size:12.5px;font-weight:600}
  .pill-teal{color:var(--teal);background:rgba(255,255,255,.7);border:1px solid var(--line)}
  .pill-soon{color:#7a5b12;background:linear-gradient(135deg,rgba(235,201,124,.34),rgba(201,154,78,.28));border:1px solid rgba(201,154,78,.4);font-weight:700;letter-spacing:.2px}
  .pill-soon .dot{width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,#EBC97C,#C99A4E)}
  .grad-text{background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}

  /* ---------- hero ---------- */
  .hero{padding:56px 0 40px}
  .heroGrid{display:grid;gap:36px;grid-template-columns:1fr;align-items:center}
  .hero h1{font-size:clamp(46px,8vw,80px);line-height:.98;letter-spacing:-2.5px;font-weight:700;color:var(--ink)}
  .hero .lead{font-size:clamp(16px,2.4vw,19px);color:var(--mute);line-height:1.5;margin-top:20px;max-width:440px}
  .hero-cta{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}

  /* hero card */
  .hcard-wrap{position:relative;max-width:380px;margin-inline:auto;width:100%}
  .hcard-glow{position:absolute;inset:-24px;background:radial-gradient(circle,rgba(59,130,246,.16),transparent 70%);filter:blur(24px);z-index:0}
  .hcard{border-radius:24px;padding:22px;position:relative;z-index:1;background:rgba(255,255,255,.82)}
  .hcard .row1{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
  .hcard .asset{font-size:13px;color:var(--mute);display:flex;align-items:center;gap:6px}
  .gdot{width:8px;height:8px;border-radius:4px;background:linear-gradient(135deg,#EBC97C,#C99A4E)}
  .hcard .cur{border-radius:9px;padding:4px 9px;font-size:12px;font-weight:600;color:var(--ink);background:rgba(255,255,255,.6);border:1px solid var(--line)}
  .hcard .big{font-size:40px;font-weight:700;color:var(--ink);letter-spacing:-1.5px}
  .hcard .sub{display:flex;gap:8px;align-items:center;margin-top:6px;font-size:12.5px}
  .chg{display:inline-flex;align-items:center;gap:3px;color:var(--teal-strong);font-weight:600;background:var(--teal-soft);padding:3px 8px;border-radius:8px}
  .hcard .actions{display:flex;gap:9px;margin-top:14px}
  .hcard .act{flex:1;border-radius:13px;padding:11px 0;text-align:center;background:rgba(255,255,255,.6);border:1px solid var(--line)}
  .hcard .act .lbl{font-size:11.5px;font-weight:600;color:var(--ink);margin-top:3px}
  .spark{width:100%;height:52px;display:block;margin:12px 0}

  /* ---------- feature tiles ---------- */
  .section{padding:20px 0 50px}
  .tiles{display:grid;gap:14px;grid-template-columns:1fr 1fr}
  .tile{border-radius:18px;padding:22px;height:100%}
  .tile .ic{color:var(--teal);margin-bottom:14px}
  .tile h3{font-size:17px;font-weight:700;color:var(--ink);letter-spacing:-.3px;line-height:1.2}
  .tile p{font-size:13.5px;color:var(--mute);margin-top:5px}
  .tile .note{font-size:12px;color:var(--faint);margin-top:8px;font-weight:600}

  /* ---------- dark automate block ---------- */
  .darkblock{border-radius:28px;overflow:hidden;position:relative;background:var(--dark);
    padding:clamp(30px,5vw,56px);box-shadow:0 40px 90px -40px rgba(10,15,30,.55);color:#ECEEF5}
  .darkblock .glowA{position:absolute;right:-80px;top:-80px;width:280px;height:280px;border-radius:50%;
    background:radial-gradient(circle,rgba(60,224,166,.32),transparent 70%);filter:blur(30px)}
  .darkblock .glowB{position:absolute;left:-60px;bottom:-90px;width:260px;height:260px;border-radius:50%;
    background:radial-gradient(circle,rgba(154,107,245,.32),transparent 70%);filter:blur(40px)}
  .devGrid{display:grid;gap:28px;grid-template-columns:1fr;position:relative}
  .pill-d{display:inline-flex;align-items:center;gap:6px;border-radius:20px;padding:6px 13px;font-size:12.5px;font-weight:600;
    color:#9FE7C8;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1)}
  .darkblock h2{font-size:clamp(28px,4.4vw,42px);letter-spacing:-1.2px;font-weight:700;line-height:1.05;margin-top:16px}
  .agent-grad{background:linear-gradient(120deg,#5BE8B6,#7BA8FF,#B79BFF);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}
  .darkblock .dlead{font-size:clamp(15px,2.2vw,17px);color:#9AA1B3;line-height:1.55;margin-top:16px;max-width:440px}
  .dfeats{display:grid;gap:14px;margin-top:22px}
  .dfeat{display:flex;gap:12px;align-items:center}
  .dfeat .ic{width:36px;height:36px;border-radius:11px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);
    display:flex;align-items:center;justify-content:center;flex:0 0 auto;color:#3CE0A6}
  .dfeat span{font-size:14.5px;font-weight:600}

  /* terminal */
  .term{border-radius:16px;overflow:hidden;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.08);
    font-family:var(--mono);font-size:12.5px}
  .term .bar{display:flex;gap:7px;align-items:center;padding:11px 14px;border-bottom:1px solid rgba(255,255,255,.06)}
  .tdot{width:10px;height:10px;border-radius:5px}
  .term .title{margin-left:6px;color:rgba(255,255,255,.4);font-size:11.5px}
  .term .body{padding:14px 16px;line-height:1.85;color:#C9D2DE;white-space:pre-wrap;word-break:break-word}
  .tp{color:#3CE0A6}.tf{color:#7DD3B0}.tok{color:rgba(255,255,255,.45)}.tc{color:rgba(255,255,255,.35)}
  .tm{color:#9FB8AC}.tfn{color:#E6C778}

  /* ---------- trust strip ---------- */
  .trust{border-radius:22px;padding:clamp(24px,4vw,36px);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px}
  .trust h2{font-size:clamp(22px,3.4vw,30px);font-weight:700;letter-spacing:-.6px;color:var(--ink);line-height:1.1}
  .trust p{font-size:14.5px;color:var(--mute);margin-top:8px;max-width:440px;line-height:1.5}
  .chips{display:flex;gap:10px;flex-wrap:wrap}
  .chip{display:inline-flex;align-items:center;gap:7px;border-radius:12px;padding:10px 14px;font-size:13.5px;font-weight:600;
    color:var(--ink);background:rgba(255,255,255,.6);border:1px solid var(--line)}
  .chip .ic{color:var(--teal)}

  /* ---------- FAQ ---------- */
  .faqwrap{max-width:760px}
  .eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;
    background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;display:inline-block}
  .faqwrap h2{font-size:clamp(26px,4vw,36px);letter-spacing:-1px;font-weight:700;color:var(--ink);margin:14px 0 22px}
  .faq-list{display:flex;flex-direction:column;gap:10px}
  details.faq{border-radius:14px;overflow:hidden;background:rgba(255,255,255,.7);border:1px solid var(--line)}
  details.faq summary{list-style:none;cursor:pointer;padding:16px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px;
    font-size:15px;font-weight:600;color:var(--ink)}
  details.faq summary::-webkit-details-marker{display:none}
  details.faq summary .chev{flex:0 0 auto;color:var(--mute);transition:transform .25s}
  details.faq[open] summary .chev{transform:rotate(180deg)}
  details.faq .ans{padding:0 18px 16px;font-size:14px;color:var(--mute);line-height:1.55}

  /* ---------- closing CTA (dark) ---------- */
  .cta{border-radius:30px;padding:clamp(40px,6vw,72px) 28px;text-align:center;position:relative;overflow:hidden;
    background:var(--dark);box-shadow:0 40px 90px -40px rgba(10,15,30,.55);color:#ECEEF5}
  .cta .glow{position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(77,138,240,.3),transparent 55%)}
  .cta .inner{position:relative}
  .cta h2{font-size:clamp(30px,5.2vw,52px);letter-spacing:-1.6px;font-weight:700;line-height:1.03}
  .cta .lead-d{color:#9AA1B3;font-size:clamp(15px,2vw,17px);margin-top:16px;max-width:480px;margin-inline:auto;line-height:1.55}
  .cta .row{display:flex;gap:12px;justify-content:center;margin-top:28px;flex-wrap:wrap}

  /* ---------- footer ---------- */
  .foot{padding:10px 0 50px}
  .foot .inner{border-top:1px solid var(--line);padding-top:24px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px;align-items:flex-start}
  .foot .about{max-width:340px}
  .foot .about p{font-size:12px;color:var(--faint);line-height:1.6;margin-top:10px}
  .foot .cols{display:flex;gap:36px;flex-wrap:wrap}
  .foot .col h4{font-size:12.5px;font-weight:700;color:var(--ink);margin-bottom:10px}
  .foot .col span, .foot .col a{display:block;font-size:13px;color:var(--mute);margin-bottom:8px}
  .foot .col a:hover{color:var(--ink)}

  /* reveal-on-scroll */
  .reveal{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)}
  .reveal.in{opacity:1;transform:none}

  @media (min-width:720px){
    .tiles{grid-template-columns:repeat(4,1fr)}
    .devGrid{grid-template-columns:1.05fr .95fr;align-items:center}
  }
  @media (min-width:980px){
    .heroGrid{grid-template-columns:1.05fr .95fr}
    .hero{padding:60px 0 40px}
  }
  @media (max-width:520px){
    .navlink.hide-s{display:none}
    .nav{padding:10px 14px}
  }
  @media (prefers-reduced-motion:reduce){
    .reveal{opacity:1;transform:none;transition:none}
    html{scroll-behavior:auto}
  }
`;
