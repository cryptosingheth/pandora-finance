/* ------------------------------------------------------------------
   /express-protocol/docs — the page's original inline <style> block, byte for byte.

   Copied verbatim out of express-protocol/docs/index.html. It stays inline
   (String.raw, so CSS escapes like content:"\2014" survive) rather
   than becoming a CSS Module or a global sheet: these pages share
   generic selectors (.hero, .section, .pcard) that would collide the
   moment they were globalised, and preserving the block unchanged is
   what guarantees pixel-identity. Do not reformat, minify or tidy it.
   ------------------------------------------------------------------ */

export const pageCss = String.raw`
    /* ============================================================
       EXPRESS PROTOCOL — DOCS
       Shared tokens come from ../../assets/design-system.css.
       This <style> only adds docs-specific layout (sidebar app shell).
       Accent: purple (--c-express #7949e8 / --c-express-2 #833ef2).
       ============================================================ */
    :root{
      --ep-ink:#0b1220;
      --ep-ink-2:#0e1730;
      --mono:'JetBrains Mono','SFMono-Regular',ui-monospace,'Menlo','Consolas',monospace;
      --ep-line:rgba(121,73,232,.18);
      --sidebar-w:288px;
      --topbar-h:60px;
      --content-max:74ch;
    }

    html{scroll-behavior:smooth}
    body{background:var(--ep-ink);color:#dfe3ee}
    ::selection{background:rgba(131,62,242,.28);color:#fff}

    /* accessible focus ring everywhere */
    a:focus-visible,button:focus-visible,summary:focus-visible,.copy-btn:focus-visible,.sb-link:focus-visible,input:focus-visible{
      outline:2px solid var(--c-express-2);outline-offset:3px;border-radius:8px}

    /* subtle purple aura behind the whole doc */
    body::before{content:"";position:fixed;inset:0;z-index:-2;pointer-events:none;
      background:
        radial-gradient(52rem 30rem at 82% -6%,rgba(131,62,242,.20),transparent 60%),
        radial-gradient(40rem 26rem at -6% 8%,rgba(121,73,232,.14),transparent 62%);}
    body::after{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;opacity:.35;
      background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
      background-size:60px 60px;
      mask-image:radial-gradient(ellipse 80% 60% at 50% 0%,#000 30%,transparent 90%);
      -webkit-mask-image:radial-gradient(ellipse 80% 60% at 50% 0%,#000 30%,transparent 90%)}

    /* ---------------- TOP BAR ---------------- */
    .topbar{position:sticky;top:0;z-index:70;height:var(--topbar-h);
      background:rgba(11,18,32,.82);backdrop-filter:blur(14px) saturate(140%);
      border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;gap:16px;padding:0 20px}
    .tb-brand{display:flex;align-items:center;gap:10px;flex-shrink:0}
    .tb-brand img{height:23px;width:auto;display:block}
    .tb-docs-tag{font-family:var(--mono);font-size:.64rem;letter-spacing:.06em;text-transform:uppercase;
      color:#c9bcff;background:rgba(121,73,232,.16);border:1px solid var(--ep-line);padding:3px 8px;border-radius:6px}
    .tb-sep{width:1px;height:22px;background:rgba(255,255,255,.12);flex-shrink:0}
    .tb-back{font-size:.85rem;color:rgba(255,255,255,.6);display:inline-flex;align-items:center;gap:6px}
    .tb-back:hover{color:#fff}
    .tb-back svg{width:14px;height:14px}
    .tb-right{margin-left:auto;display:flex;align-items:center;gap:10px}
    .tb-ghlink{color:rgba(255,255,255,.66);display:inline-flex;align-items:center;gap:7px;font-size:.86rem;font-weight:500;
      padding:7px 12px;border-radius:var(--r-pill);border:1px solid rgba(255,255,255,.12);transition:.18s}
    .tb-ghlink:hover{color:#fff;border-color:rgba(131,62,242,.5);background:rgba(121,73,232,.14)}
    .tb-ghlink svg{width:16px;height:16px}
    /* mobile menu toggle */
    .tb-menu{display:none;align-items:center;justify-content:center;width:38px;height:38px;flex-shrink:0;
      background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#fff;cursor:pointer}
    .tb-menu svg{width:20px;height:20px}

    /* ---------------- APP SHELL ---------------- */
    .shell{display:grid;grid-template-columns:var(--sidebar-w) minmax(0,1fr);gap:0;max-width:1400px;margin:0 auto}

    /* ---------------- SIDEBAR ---------------- */
    .sidebar{position:sticky;top:var(--topbar-h);align-self:start;height:calc(100vh - var(--topbar-h));
      overflow-y:auto;padding:26px 14px 60px 24px;border-right:1px solid rgba(255,255,255,.07);scrollbar-width:thin}
    .sidebar::-webkit-scrollbar{width:8px}
    .sidebar::-webkit-scrollbar-thumb{background:rgba(121,73,232,.28);border-radius:8px}
    .sb-search{position:relative;margin-bottom:22px}
    .sb-search input{width:100%;font-family:var(--font);font-size:.86rem;color:#e8e9f2;
      background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:9px 12px 9px 34px}
    .sb-search input::placeholder{color:rgba(255,255,255,.4)}
    .sb-search input:focus{outline:none;border-color:rgba(131,62,242,.55);background:rgba(121,73,232,.08)}
    .sb-search svg{position:absolute;left:11px;top:50%;transform:translateY(-50%);width:15px;height:15px;color:rgba(255,255,255,.4);pointer-events:none}
    .sb-group{margin-bottom:22px}
    .sb-title{font-size:.7rem;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:#8b93ad;
      display:flex;align-items:center;gap:8px;margin:0 0 9px;padding-left:2px}
    .sb-title .ti{width:15px;height:15px;color:var(--c-express-2);opacity:.9;flex-shrink:0}
    .sb-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1px}
    .sb-link{display:block;font-size:.88rem;color:rgba(223,227,238,.72);padding:6px 12px;border-radius:8px;
      border-left:2px solid transparent;transition:.15s;line-height:1.35}
    .sb-link:hover{color:#fff;background:rgba(255,255,255,.04)}
    .sb-link.active{color:#fff;background:rgba(121,73,232,.16);border-left-color:var(--c-express-2);font-weight:500}
    .sb-link code{font-family:var(--mono);font-size:.82em;opacity:.85}

    /* ---------------- MAIN CONTENT ---------------- */
    .main{padding:0;min-width:0}
    .content{max-width:calc(var(--content-max) + 64px);margin:0 auto;padding:44px 32px 120px}
    .doc-section{display:none;animation:fade .4s ease}
    .doc-section.active{display:block}
    @keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}

    .crumbs{display:flex;align-items:center;gap:8px;font-size:.78rem;color:#7f88a3;margin-bottom:18px;flex-wrap:wrap}
    .crumbs b{color:#c9bcff;font-weight:600}
    .crumbs svg{width:12px;height:12px;opacity:.6;flex-shrink:0}

    .content h1{font-size:clamp(2rem,4vw,2.7rem);letter-spacing:-.03em;color:#fff;margin:0 0 16px;line-height:1.05}
    .content h1 .grad{background:linear-gradient(100deg,#a98bff,#d7c6ff 55%,#8f6bff);-webkit-background-clip:text;background-clip:text;color:transparent}
    .content h2{font-size:1.55rem;color:#fff;margin:52px 0 16px;letter-spacing:-.02em;scroll-margin-top:calc(var(--topbar-h) + 20px);
      padding-top:8px;position:relative}
    .content h2::before{content:"";position:absolute;top:-8px;left:0;width:34px;height:3px;border-radius:3px;
      background:linear-gradient(90deg,var(--c-express),var(--c-express-2))}
    .content h3{font-size:1.15rem;color:#eef0f6;margin:34px 0 12px;letter-spacing:-.01em;scroll-margin-top:calc(var(--topbar-h) + 20px)}
    .content p{color:#c2c8d6;font-size:1rem;line-height:1.72;margin:0 0 16px;max-width:var(--content-max)}
    .content .lead{font-size:1.14rem;color:#d3d8e6;line-height:1.62;max-width:var(--content-max)}
    .content a.ilink{color:#b9a6ff;text-decoration:underline;text-decoration-color:rgba(185,166,255,.35);text-underline-offset:3px}
    .content a.ilink:hover{text-decoration-color:#b9a6ff}
    .content ul,.content ol{color:#c2c8d6;font-size:1rem;line-height:1.7;margin:0 0 18px;padding-left:22px;max-width:var(--content-max)}
    .content li{margin:6px 0}
    .content li::marker{color:var(--c-express-2)}
    .content strong{color:#eef0f6}
    .content hr{border:0;border-top:1px solid rgba(255,255,255,.08);margin:40px 0}

    /* inline code */
    .content :not(pre) > code{font-family:var(--mono);font-size:.84em;color:#e6d3ff;
      background:rgba(121,73,232,.14);border:1px solid var(--ep-line);padding:2px 7px;border-radius:6px}

    /* eyebrow */
    .doc-eyebrow{font-weight:700;font-size:.74rem;letter-spacing:.13em;text-transform:uppercase;color:#c9bcff;margin:0 0 12px}

    /* ---------------- CODE CARD (terminal chrome) ---------------- */
    .code-card{background:linear-gradient(180deg,#0c1428,#0a1020);border:1px solid var(--ep-line);border-radius:14px;
      box-shadow:0 24px 54px rgba(3,6,16,.5);overflow:hidden;position:relative;margin:0 0 22px}
    .code-card::before{content:"";position:absolute;inset:0;border-radius:14px;padding:1px;pointer-events:none;
      background:linear-gradient(135deg,rgba(131,62,242,.5),transparent 42%,transparent 72%,rgba(121,73,232,.3));
      -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
    .code-top{display:flex;align-items:center;gap:8px;padding:11px 14px;background:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.06)}
    .code-top .dots{display:flex;gap:6px}
    .code-top .dots i{width:10px;height:10px;border-radius:50%;display:block}
    .code-top .dots i:nth-child(1){background:#ff5f57}.code-top .dots i:nth-child(2){background:#febc2e}.code-top .dots i:nth-child(3){background:#28c840}
    .code-top .fname{margin-left:8px;font-family:var(--mono);font-size:.74rem;color:rgba(255,255,255,.46)}
    .code-top .tag{margin-left:auto;font-family:var(--mono);font-size:.66rem;color:#c9bcff;background:rgba(121,73,232,.16);padding:3px 8px;border-radius:6px;border:1px solid var(--ep-line)}
    .copy-btn{margin-left:8px;display:inline-flex;align-items:center;gap:6px;font-family:var(--font);font-size:.7rem;font-weight:600;
      color:rgba(255,255,255,.6);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);
      padding:4px 9px;border-radius:7px;cursor:pointer;transition:.16s;flex-shrink:0}
    .code-top .tag + .copy-btn{margin-left:8px}
    .code-top:not(:has(.tag)) .copy-btn{margin-left:auto}
    .copy-btn:hover{color:#fff;border-color:rgba(131,62,242,.5);background:rgba(121,73,232,.16)}
    .copy-btn.copied{color:#c9f7e3;border-color:rgba(0,171,110,.5);background:rgba(0,171,110,.16)}
    .copy-btn svg{width:12px;height:12px}
    .code-card pre{margin:0;padding:18px 18px 20px;overflow-x:auto;font-family:var(--mono);font-size:.82rem;line-height:1.72;color:#d7dbe8;-webkit-overflow-scrolling:touch}
    .code-card pre code{font-family:inherit;white-space:pre;background:none;border:0;padding:0;color:inherit;font-size:inherit}
    /* syntax accents */
    .tk-c{color:#5b6b8c;font-style:italic}
    .tk-k{color:#c792ea}
    .tk-f{color:#82aaff}
    .tk-s{color:#9be0a8}
    .tk-n{color:#f6b17a}
    .tk-p{color:#7f8db3}
    .tk-m{color:#e6d3ff}

    /* ---------------- CALLOUTS ---------------- */
    .callout{display:flex;gap:13px;padding:15px 17px;border-radius:12px;margin:0 0 22px;font-size:.94rem;line-height:1.6;
      background:rgba(121,73,232,.09);border:1px solid var(--ep-line);color:#d0cfe6;max-width:var(--content-max)}
    .callout .ci{flex-shrink:0;width:20px;height:20px;color:var(--c-express-2);margin-top:1px}
    .callout.new{background:linear-gradient(120deg,rgba(131,62,242,.16),rgba(0,108,255,.07));border-color:rgba(131,62,242,.35)}
    .callout.new .ci{color:#c9bcff}
    .callout b{color:#eef0f6}

    /* ---------------- PILL BADGES ---------------- */
    .pill-row{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 22px}
    .pill{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:.74rem;font-weight:500;letter-spacing:.01em;
      padding:5px 12px;border-radius:var(--r-pill);background:rgba(121,73,232,.12);border:1px solid var(--ep-line);color:#e2ddff}
    .pill.plain{font-family:var(--font);font-weight:600;background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12)}
    .pill.mint{font-family:var(--font);font-weight:600;background:rgba(0,171,110,.12);border-color:rgba(0,171,110,.32);color:#8ef0c4}
    .pill .dot{width:6px;height:6px;border-radius:50%;background:var(--c-aconomy-mint);box-shadow:0 0 8px var(--c-aconomy-mint)}

    /* ---------------- CARDS GRID (getting started) ---------------- */
    .card-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin:0 0 24px}
    @media(max-width:640px){.card-grid{grid-template-columns:1fr}}
    .nav-card{display:block;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;padding:20px;transition:.2s}
    a.nav-card{cursor:pointer}
    a.nav-card:hover{transform:translateY(-3px);border-color:rgba(131,62,242,.45);background:rgba(121,73,232,.09)}
    .nav-card .nc-ic{width:38px;height:38px;border-radius:10px;display:grid;place-items:center;background:rgba(121,73,232,.14);border:1px solid var(--ep-line);color:var(--c-express-2);margin-bottom:13px}
    .nav-card .nc-ic svg{width:20px;height:20px}
    .nav-card h4{font-size:1.04rem;color:#fff;margin:0 0 5px}
    .nav-card p{font-size:.88rem;color:#aab1c4;margin:0;line-height:1.5}

    /* ---------------- PARAM TABLE ---------------- */
    .tbl-wrap{overflow-x:auto;margin:0 0 22px;border:1px solid rgba(255,255,255,.09);border-radius:12px;max-width:var(--content-max)}
    table.params{width:100%;border-collapse:collapse;font-size:.86rem;min-width:440px}
    table.params th{text-align:left;font-weight:600;color:#c9bcff;background:rgba(121,73,232,.1);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.09);font-size:.78rem;letter-spacing:.02em}
    table.params td{padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.06);color:#c2c8d6;vertical-align:top}
    table.params tr:last-child td{border-bottom:0}
    table.params td:first-child{font-family:var(--mono);font-size:.82rem;color:#e6d3ff;white-space:nowrap}
    table.params .ty{font-family:var(--mono);font-size:.78rem;color:#82aaff}

    /* ---------------- METHOD SIGNATURE CHIP ---------------- */
    .sig{display:block;font-family:var(--mono);font-size:.88rem;color:#e6d3ff;
      background:rgba(121,73,232,.12);border:1px solid var(--ep-line);border-radius:8px;padding:9px 13px;margin:0 0 16px;overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch}
    .sig .obj{color:#82aaff}.sig .meth{color:#e6d3ff;font-weight:600}

    /* returns / events strip */
    .kv-row{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 22px}
    .kv-chip{font-family:var(--mono);font-size:.74rem;color:#8ef0c4;background:rgba(0,171,110,.09);border:1px solid rgba(0,171,110,.24);padding:4px 10px;border-radius:7px}
    .kv-chip::before{content:"event · ";color:rgba(142,240,196,.55)}

    /* prev / next footer */
    .doc-foot{display:flex;justify-content:space-between;gap:14px;margin-top:56px;padding-top:26px;border-top:1px solid rgba(255,255,255,.08)}
    .doc-foot a{flex:1;max-width:48%;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:14px 18px;transition:.2s;cursor:pointer}
    .doc-foot a:hover{border-color:rgba(131,62,242,.45);background:rgba(121,73,232,.09)}
    .doc-foot .df-dir{font-size:.72rem;color:#8b93ad;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px}
    .doc-foot .df-ttl{font-size:.98rem;color:#fff;font-weight:500}
    .doc-foot a.next{text-align:right}
    .doc-foot a.disabled{visibility:hidden;pointer-events:none}

    /* backdrop for mobile sidebar */
    .sb-backdrop{display:none;position:fixed;inset:0;z-index:65;background:rgba(4,7,16,.6);backdrop-filter:blur(2px)}

    /* ---------------- RESPONSIVE ---------------- */
    @media(max-width:960px){
      .shell{grid-template-columns:1fr}
      .tb-menu{display:inline-flex}
      .tb-back-label{display:none}
      .sidebar{position:fixed;top:0;left:0;z-index:66;width:min(320px,86vw);height:100vh;
        background:#0a1122;border-right:1px solid rgba(255,255,255,.1);padding-top:22px;
        transform:translateX(-102%);transition:transform .28s cubic-bezier(.4,0,.2,1);box-shadow:0 0 60px rgba(0,0,0,.5)}
      body.nav-open .sidebar{transform:translateX(0)}
      body.nav-open .sb-backdrop{display:block}
      .content{padding:34px 22px 100px}
    }
    @media(max-width:520px){
      .tb-docs-tag{display:none}
      .tb-ghlink span{display:none}
      .content{padding:28px 18px 90px}
      .doc-foot{flex-direction:column}
      .doc-foot a{max-width:100%}
      .doc-foot a.next{text-align:left}
    }
    @media(prefers-reduced-motion:reduce){
      html{scroll-behavior:auto}
      .doc-section.active{animation:none}
      .sidebar{transition:none}
      a.nav-card:hover,.doc-foot a:hover{transform:none}
    }
  `;
