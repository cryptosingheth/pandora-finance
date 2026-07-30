/* ------------------------------------------------------------------
   app/page.css — the EXACT contents of index.html's single <style>
   block, copied byte-for-byte and rendered through <InlineStyle>.

   Do not reformat, minify, dedupe or "tidy" this. The hub's layout was
   hand-tuned across many rounds of review (product-tile logo bands,
   baseline alignment, contrast) and the selectors here are generic
   (.hero, .section, .pcard) so they must stay page-scoped, not global.

   String.raw is required: the CSS contains backslash escapes that a
   normal template literal would eat.
   ------------------------------------------------------------------ */

export const pageCss = String.raw`
/* ============================================================
   PANDORA FINANCE — HUB v4 (page-only styles)
   Tokens come from design-system.css. Font: Figtree (brand).
   Aesthetic: clean, light, product-grade surfaces throughout —
   navy ink on white / very-light grounds, Pandora-blue accents.
   Dark rhythm: dark agent console (hero) -> #partners -> #live ->
   navy footer. Everything else light.
   ============================================================ */
  :root{
    /* Light grounds (repurposed names so downstream rules stay valid) */
    --ink:#ffffff;                 /* base section ground */
    --ink-2:#f6f8fc;               /* alt / very-light panel ground */
    --ink-line:#e6eaf2;            /* hairline border on light */
    --ink-line-2:#dfe4ee;          /* slightly stronger border on light */
    --on-dark:#5a6a85;             /* body text (slate) on light */
    --on-dark-dim:#7d8aa3;         /* dim/muted text on light */
    --mono:'Figtree', ui-monospace, 'SF Mono', Menlo, monospace;
    --edge:1px solid var(--gray-200);
    --sky:#006cff;                 /* Pandora-blue accent (was light-blue) */
    --mint:#12b886;                /* success green (was neon mint) */
    --ok:#12b886;
    --ink-text:#172b4d;            /* primary heading ink */
    --card-shadow:0 12px 34px rgba(16,32,64,.08);
    --ease:cubic-bezier(.2,.7,.2,1);
    --maxw2:1240px;
    /* dark-section literals (brief tokens) — used ONLY inside .console,
       #partners, #live via explicit selectors below. NEVER change :root. */
    --d-bg:#0a1631;
    --d-panel:linear-gradient(180deg,rgba(20,34,66,.94),rgba(10,20,44,.96));
    --d-line:rgba(255,255,255,.10);
    --d-line-2:rgba(255,255,255,.16);
    --d-body:rgba(255,255,255,.72);
    --d-dim:rgba(255,255,255,.52);
    --d-sky:#7fb2ff;
    --d-mint:#00ffc2;
  }

  /* ---------- shared refinements ---------- */
  .wrap{max-width:var(--maxw2);margin:0 auto;padding:0 clamp(20px,4vw,44px)}
  .kicker{font-weight:700;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--pan-blue);
    display:inline-flex;align-items:center;gap:10px}
  .kicker::before{content:"";width:22px;height:1.5px;background:var(--pan-blue);display:inline-block}
  .kicker.on-dark{color:var(--pan-blue)}
  .kicker.on-dark::before{background:var(--pan-blue)}
  /* kicker for the genuinely-dark sections */
  .kicker.on-navy{color:var(--d-sky)}
  .kicker.on-navy::before{background:var(--d-sky)}
  .mono{font-family:var(--mono);font-variant-numeric:tabular-nums}

  /* reveal-on-scroll (self-contained; JS toggles .in) */
  .reveal{opacity:0;transform:translateY(22px);transition:opacity .8s var(--ease),transform .8s var(--ease)}
  .reveal.in{opacity:1;transform:none}

  /* small button variant for compact product-card CTAs */
  .btn.small{font-size:.86rem;padding:9px 16px}
  .btn-glow{background:var(--pan-blue);color:#fff;box-shadow:0 10px 26px rgba(0,108,255,.28)}
  .btn-glow:hover{background:var(--pan-blue-dark);transform:translateY(-2px);box-shadow:0 16px 34px rgba(0,108,255,.34)}
  .btn-wire-d{background:#fff;border:1.5px solid var(--gray-200);color:var(--navy)}
  .btn-wire-d:hover{border-color:var(--navy);background:#fff;transform:translateY(-2px);box-shadow:var(--shadow)}

  /* ============================================================
     NAV
     ============================================================ */
  .nav{background:rgba(255,255,255,.85);border-bottom:1px solid var(--gray-200);backdrop-filter:blur(14px) saturate(1.2);position:sticky;top:0;z-index:50}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;height:68px;gap:20px}
  .brand{display:flex;align-items:center;gap:12px}
  .brand .logo{height:26px;width:auto;display:block}
  .nav-links{display:flex;align-items:center;gap:clamp(16px,2.2vw,30px)}
  .nav a.navlink{color:var(--slate);font-weight:500;font-size:.95rem;position:relative;white-space:nowrap}
  .nav a.navlink:hover{color:var(--navy)}
  .navlink::after{content:"";position:absolute;left:0;right:100%;bottom:-6px;height:1.5px;
    background:linear-gradient(90deg,var(--pan-blue),var(--c-aconomy));transition:right .3s var(--ease)}
  .navlink:hover::after{right:0}
  .nav-cta{display:flex;align-items:center;gap:12px}
  .nav .btn-wire{background:transparent;border:1.5px solid var(--gray-200);color:var(--navy)}
  .nav .btn-wire:hover{border-color:var(--navy);transform:translateY(-1px)}
  .nav-toggle{display:none}

  /* ============================================================
     HERO — clean light hero + live agent console (DARK card).
     ============================================================ */
  .hero{position:relative;overflow:hidden;background:#fff;color:var(--navy);
    padding:clamp(60px,8vw,108px) 0 clamp(56px,7vw,92px)}
  .hero::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
    background:
      radial-gradient(60% 55% at 84% 4%, rgba(0,108,255,.08), transparent 60%),
      radial-gradient(52% 52% at 4% 34%, rgba(0,171,190,.06), transparent 62%),
      linear-gradient(180deg,#fff 0%, var(--bg) 100%)}
  .hero .wrap{position:relative;z-index:2}
  .hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:clamp(30px,4.5vw,66px);align-items:center}

  .hero-badge{display:inline-flex;align-items:center;gap:9px;font-size:.76rem;font-weight:600;
    letter-spacing:.02em;color:var(--slate);background:#fff;border:1px solid var(--gray-200);
    padding:7px 14px;border-radius:var(--r-pill);box-shadow:0 2px 8px rgba(16,32,64,.05)}
  .hero-badge .pulse{width:8px;height:8px;border-radius:50%;background:var(--pan-blue);
    box-shadow:0 0 0 0 rgba(0,108,255,.5);animation:pulse 2.4s infinite}
  @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,108,255,.45)}70%{box-shadow:0 0 0 10px rgba(0,108,255,0)}100%{box-shadow:0 0 0 0 rgba(0,108,255,0)}}

  .hero h1{font-size:clamp(2.6rem,6vw,4.9rem);line-height:1.02;letter-spacing:-.038em;margin:22px 0 0;color:var(--navy);font-weight:700}
  .hero h1 .grad{background:linear-gradient(100deg,var(--pan-blue),var(--c-aconomy) 96%);
    -webkit-background-clip:text;background-clip:text;color:transparent}
  .hero .lead{margin-top:24px;font-size:clamp(1.08rem,1.55vw,1.32rem);color:var(--slate);max-width:50ch;line-height:1.62}
  .hero .lead b{color:var(--navy);font-weight:600}
  .hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:36px}

  .hero-meta{display:flex;flex-wrap:wrap;gap:10px 26px;margin-top:34px;color:var(--slate);font-size:.86rem}
  .hero-meta span{display:inline-flex;align-items:center;gap:9px;font-weight:500}
  .hero-meta .d{width:6px;height:6px;border-radius:50%;background:var(--pan-blue)}

  /* ---------- AGENT CONSOLE — DARK re-skin (v2 style, scoped) ---------- */
  .console{position:relative;border-radius:var(--r-lg);overflow:hidden;
    background:var(--d-panel);
    border:1px solid var(--d-line-2);box-shadow:0 40px 90px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.06)}
  .console::before{content:"";position:absolute;inset:0;pointer-events:none;
    background:radial-gradient(500px 240px at 80% -10%, rgba(0,108,255,.22), transparent 60%)}
  .console-bar{position:relative;display:flex;align-items:center;gap:14px;padding:14px 18px;
    border-bottom:1px solid var(--d-line)}
  .console .dots{display:flex;gap:7px}
  .console .dots i{width:11px;height:11px;border-radius:50%;display:block;opacity:.9}
  .console .dots i:nth-child(1){background:#ff5f57}.console .dots i:nth-child(2){background:#febc2e}.console .dots i:nth-child(3){background:#28c840}
  .console-title{font-family:var(--mono);font-size:.8rem;color:var(--d-body);font-weight:600;letter-spacing:.01em;display:flex;align-items:center;gap:9px}
  .console-title .tag{font-size:.66rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--d-mint);
    background:rgba(0,255,194,.1);border:1px solid rgba(0,255,194,.24);padding:2px 8px;border-radius:var(--r-pill)}
  .console-live{margin-left:auto;font-family:var(--mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;
    color:var(--d-dim);display:inline-flex;align-items:center;gap:7px}
  .console-live .rec{width:7px;height:7px;border-radius:50%;background:var(--d-mint);animation:pulse-ok 2.4s infinite}
  @keyframes pulse-ok{0%{box-shadow:0 0 0 0 rgba(0,255,194,.5)}70%{box-shadow:0 0 0 8px rgba(0,255,194,0)}100%{box-shadow:0 0 0 0 rgba(0,255,194,0)}}

  .console-body{position:relative;padding:18px 20px 20px;min-height:328px;font-family:var(--mono);font-size:.86rem;line-height:1.85}
  .cl{display:flex;gap:11px;align-items:flex-start;opacity:0;transform:translateY(6px);
    animation:clin .34s var(--ease) forwards}
  @keyframes clin{to{opacity:1;transform:none}}
  .cl .gut{flex:none;width:16px;text-align:center;user-select:none}
  .cl .txt{min-width:0;color:var(--d-body);word-break:break-word}
  .cl .txt b{color:#fff;font-weight:600}
  .cl.sys .gut{color:var(--d-sky)}       .cl.sys .txt{color:var(--d-sky)}
  .cl.call .gut{color:var(--d-dim)} .cl.call .txt{color:#dbe6ff}
  .cl.ok .gut{color:var(--d-mint)}        .cl.ok .txt{color:#c8fff0}
  .cl.ok .txt b{color:var(--d-mint)}
  .cl .ms{color:var(--d-dim);font-size:.74rem;margin-left:6px}
  /* caret line while "thinking" */
  .console-caret{display:inline-flex;align-items:center;gap:10px;color:var(--d-dim);margin-top:2px}
  .console-caret .bl{width:9px;height:16px;background:var(--d-sky);border-radius:1px;animation:blink 1s steps(1) infinite}
  @keyframes blink{50%{opacity:0}}
  .console-foot{position:relative;display:flex;align-items:center;gap:14px;flex-wrap:wrap;
    border-top:1px solid var(--d-line);padding:13px 20px;font-family:var(--mono);font-size:.72rem;color:var(--d-dim)}
  .console-foot .chip{display:inline-flex;align-items:center;gap:7px}
  .console-foot .chip b{color:var(--d-sky);font-weight:600}
  .console-cycle{margin-left:auto;color:var(--d-dim)}
  .console-cycle b{color:#fff}

  /* ============================================================
     LOGO/PROOF TICKER
     ============================================================ */
  .ticker{border-bottom:var(--edge);background:#fff;overflow:hidden;padding:16px 0}
  .ticker-row{display:flex;gap:52px;white-space:nowrap;width:max-content;animation:slide 40s linear infinite}
  .ticker-item{display:inline-flex;align-items:center;gap:11px;color:var(--slate);font-weight:600;font-size:.94rem}
  .ticker-item svg{color:var(--pan-blue);flex:none}
  @keyframes slide{to{transform:translateX(-50%)}}

  /* ============================================================
     SECTION HEADS
     ============================================================ */
  .sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:26px;margin-bottom:clamp(36px,5vw,54px)}
  .sec-head h2{max-width:22ch;margin-top:16px}
  .sec-head p{margin:0;max-width:42ch}

  /* ============================================================
     PROOF OF WORK
     ============================================================ */
  #proof{background:#f6f8fc;color:var(--navy);position:relative;overflow:hidden}
  #proof::before{content:"";position:absolute;inset:0;pointer-events:none;
    background:radial-gradient(760px 480px at 90% 6%, rgba(0,108,255,.05), transparent 60%),
              radial-gradient(640px 460px at 4% 96%, rgba(0,171,190,.045), transparent 62%)}
  #proof .wrap{position:relative}
  #proof h2,#proof h3{color:var(--navy)}
  #proof .sec-head p{color:var(--slate)}
  .pw-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:26px}
  .pw{position:relative;background:#fff;
    border:1px solid var(--gray-200);border-radius:var(--r-lg);padding:24px 22px;overflow:hidden;
    transition:transform .3s var(--ease),border-color .3s,box-shadow .3s}
  .pw:hover{transform:translateY(-5px);border-color:color-mix(in srgb,var(--pan-blue) 26%,transparent);box-shadow:var(--shadow)}
  .pw .pw-ic{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;margin-bottom:16px;
    background:rgba(0,108,255,.1);color:var(--pan-blue);border:1px solid rgba(0,108,255,.2)}
  .pw .pw-ic svg{width:22px;height:22px}
  .pw .pw-n{font-size:clamp(1.7rem,2.6vw,2.15rem);font-weight:800;letter-spacing:-.03em;line-height:1;color:var(--navy)}
  .pw .pw-k{margin-top:8px;font-weight:700;font-size:.98rem;color:var(--navy)}
  .pw .pw-s{margin-top:4px;font-size:.86rem;color:var(--slate);line-height:1.5}
  .pw .pw-tag{position:absolute;top:16px;right:16px;font-family:var(--mono);font-size:.64rem;font-weight:700;
    letter-spacing:.08em;text-transform:uppercase;color:var(--ok);background:rgba(18,184,134,.1);
    border:1px solid rgba(18,184,134,.22);padding:3px 8px;border-radius:var(--r-pill)}
  @media(max-width:960px){.pw-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:520px){.pw-grid{grid-template-columns:1fr}}

  /* proof timeline rail — now 6 stops */
  .pw-rail{border:1px solid var(--gray-200);border-radius:var(--r-lg);overflow:hidden;background:#fff}
  .pw-rail-head{display:flex;align-items:center;gap:12px;padding:15px 22px;border-bottom:1px solid var(--gray-200);
    font-family:var(--mono);font-size:.76rem;letter-spacing:.06em;color:var(--slate)}
  .pw-rail-head .net{display:inline-flex;align-items:center;gap:8px;font-weight:700;color:var(--pan-blue);
    background:rgba(0,108,255,.1);border:1px solid rgba(0,108,255,.2);padding:4px 11px;border-radius:var(--r-pill)}
  .pw-tl{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,1fr)}
  .pw-tl li{padding:22px;position:relative}
  .pw-tl li+li{border-left:1px solid var(--gray-200)}
  .pw-tl li:nth-child(4){border-left:0}
  .pw-tl li:nth-child(n+4){border-top:1px solid var(--gray-200)}
  .pw-tl .yr{font-family:var(--mono);font-weight:700;font-size:.82rem;color:var(--pan-blue);letter-spacing:.04em}
  .pw-tl .ev{display:block;color:var(--navy);font-weight:700;font-size:1rem;margin:9px 0 4px}
  .pw-tl .de{color:var(--slate);font-size:.86rem;line-height:1.5}
  @media(max-width:1080px){.pw-tl{grid-template-columns:1fr 1fr 1fr}.pw-tl li:nth-child(n+4){border-top:1px solid var(--gray-200)}.pw-tl li:nth-child(4){border-left:0}}
  @media(max-width:720px){.pw-tl{grid-template-columns:1fr 1fr}.pw-tl li+li{border-left:0}.pw-tl li{border-top:1px solid var(--gray-200)}.pw-tl li:nth-child(-n+2){border-top:0}.pw-tl li:nth-child(odd){border-left:0}}
  @media(max-width:460px){.pw-tl{grid-template-columns:1fr}.pw-tl li{border-left:0}.pw-tl li:nth-child(n+2){border-top:1px solid var(--gray-200)}}

  /* ============================================================
     PARTNERS — DARK (investors / clients / ecosystem + cases)
     ============================================================ */
  #partners{background:var(--d-bg);color:#fff;position:relative;overflow:hidden}
  #partners::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.75;
    background:radial-gradient(780px 480px at 88% -6%, rgba(0,108,255,.24), transparent 58%),
              radial-gradient(680px 480px at 4% 104%, rgba(121,73,232,.18), transparent 60%)}
  #partners .wrap{position:relative}
  #partners h2{color:#fff}
  .part-head{max-width:64ch;margin-bottom:clamp(30px,4vw,46px)}
  .part-head p{color:var(--d-body);margin-top:14px;max-width:56ch}
  .logo-row{margin-bottom:30px}
  .logo-row .lr-label{font-family:var(--mono);font-size:.7rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;
    color:var(--d-sky);margin-bottom:14px;display:flex;align-items:center;gap:10px}
  .logo-row .lr-label::before{content:"";width:20px;height:1.5px;background:var(--d-sky)}
  .logos{display:flex;flex-wrap:wrap;gap:10px 12px}
  .wm{display:inline-flex;align-items:center;font-family:var(--mono);font-weight:700;font-size:.9rem;letter-spacing:-.01em;
    color:rgba(255,255,255,.82);background:rgba(255,255,255,.05);border:1px solid var(--d-line-2);
    padding:9px 16px;border-radius:var(--r-pill);transition:background .25s,border-color .25s,transform .25s}
  .wm:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.34);transform:translateY(-2px)}

  .cases-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:clamp(30px,4vw,44px)}
  .ccard{position:relative;display:flex;flex-direction:column;background:var(--d-panel);
    border:1px solid var(--d-line-2);border-radius:var(--r-lg);padding:26px 26px 22px;overflow:hidden;
    transition:transform .3s var(--ease),border-color .3s,box-shadow .3s;color:#fff}
  .ccard::after{content:"";position:absolute;left:0;top:0;height:3px;width:100%;transform:scaleX(0);transform-origin:left;
    background:linear-gradient(90deg,var(--d-sky),transparent);transition:transform .4s var(--ease)}
  .ccard:hover{transform:translateY(-5px);border-color:rgba(127,178,255,.5);box-shadow:0 30px 70px rgba(0,0,0,.45)}
  .ccard:hover::after{transform:scaleX(1)}
  .ccard .ck-tag{font-family:var(--mono);font-size:.66rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
    color:var(--d-sky);margin-bottom:12px}
  .ccard h3{font-size:1.18rem;font-weight:700;letter-spacing:-.02em;line-height:1.22;color:#fff;margin:0 0 auto}
  .ccard .cgo{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:.9rem;color:var(--d-sky);margin-top:18px}
  .ccard .cgo svg{width:15px;height:15px;transition:transform .25s}
  .ccard:hover .cgo svg{transform:translate(3px,-3px)}
  @media(max-width:820px){.cases-grid{grid-template-columns:1fr}}

  .seen-row{margin-top:clamp(30px,4vw,44px);padding-top:26px;border-top:1px solid var(--d-line)}
  .seen-row .sr-label{font-family:var(--mono);font-size:.68rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;
    color:var(--d-dim);margin-bottom:12px}
  .seen-items{display:flex;flex-wrap:wrap;gap:8px 22px;color:var(--d-body);font-weight:600;font-size:.92rem}
  .seen-items span{display:inline-flex;align-items:center;gap:9px}
  .seen-items .sd{width:5px;height:5px;border-radius:50%;background:var(--d-sky);flex:none}

  /* ============================================================
     THESIS (merged with engineering cards)
     ============================================================ */
  #thesis{background:#fff}
  .thesis-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(34px,5vw,72px);align-items:center}
  .thesis-lead{font-size:clamp(1.35rem,2.4vw,2rem);line-height:1.32;letter-spacing:-.02em;color:var(--navy);font-weight:600;max-width:20ch}
  .thesis-lead .hl{background:linear-gradient(100deg,var(--pan-blue),var(--c-aconomy) 96%);
    -webkit-background-clip:text;background-clip:text;color:transparent}
  .thesis-body{color:var(--slate);font-size:1.06rem;line-height:1.7;max-width:52ch}
  .thesis-body p{margin:0 0 1rem}
  .thesis-body b{color:var(--navy);font-weight:600}

  .eng-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:clamp(40px,5vw,60px)}
  .ecard{position:relative;background:#fff;border:var(--edge);border-radius:var(--r-lg);padding:30px 28px;overflow:hidden;
    transition:transform .3s var(--ease),box-shadow .3s,border-color .3s}
  .ecard::after{content:"";position:absolute;left:0;top:0;height:3px;width:100%;transform:scaleX(0);transform-origin:left;
    background:linear-gradient(90deg,var(--acc),transparent);transition:transform .4s var(--ease)}
  .ecard:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:transparent}
  .ecard:hover::after{transform:scaleX(1)}
  .ecard .eh{display:flex;align-items:center;gap:13px;margin-bottom:16px}
  .ecard .eg{width:46px;height:46px;border-radius:12px;display:grid;place-items:center;flex:none;
    background:color-mix(in srgb,var(--acc) 12%,#fff);color:var(--acc);border:1px solid color-mix(in srgb,var(--acc) 24%,transparent)}
  .ecard .eg svg{width:23px;height:23px}
  .ecard h3{font-size:1.22rem;font-weight:700;letter-spacing:-.02em;line-height:1.1}
  .ecard>p{color:var(--slate);font-size:.98rem;line-height:1.62;margin:0 0 18px}
  .ecard>p b{color:var(--navy);font-weight:600}
  .eproof{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px}
  .eproof li{display:flex;gap:10px;align-items:flex-start;font-size:.86rem;color:#3d4b66}
  .eproof .ck{width:18px;height:18px;border-radius:6px;flex:none;display:grid;place-items:center;margin-top:1px;
    background:color-mix(in srgb,var(--acc) 12%,#fff);color:var(--acc)}
  .eproof .ck svg{width:11px;height:11px}
  .eproof code{font-family:var(--mono);font-size:.82rem;background:var(--bg);border:var(--edge);
    padding:1px 6px;border-radius:6px;color:var(--navy)}
  .eproof a{color:var(--acc);font-weight:600;text-decoration:underline;text-decoration-color:color-mix(in srgb,var(--acc) 40%,transparent);text-underline-offset:2px}
  .eproof a:hover{text-decoration-color:var(--acc)}
  @media(max-width:960px){.eng-grid{grid-template-columns:1fr}}

  /* ============================================================
     PRODUCTS — 7 compact cards, 3-col grid
     ============================================================ */
  #products{background:#f6f8fc}
  .prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
  .pcard{position:relative;display:flex;flex-direction:column;background:#fff;border:var(--edge);
    border-radius:var(--r-lg);padding:26px 26px 22px;overflow:hidden;
    transition:transform .32s var(--ease),box-shadow .32s,border-color .32s}
  .pcard::before{content:"";position:absolute;left:0;top:0;height:100%;width:4px;background:var(--acc);
    transform:scaleY(0);transform-origin:top;transition:transform .38s var(--ease)}
  .pcard::after{content:"";position:absolute;right:-38%;top:-58%;width:66%;aspect-ratio:1;border-radius:50%;
    background:radial-gradient(circle,var(--acc),transparent 68%);opacity:0;transition:opacity .38s;pointer-events:none;filter:blur(10px)}
  .pcard:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:transparent}
  .pcard:hover::before{transform:scaleY(1)}
  .pcard:hover::after{opacity:.1}
  .pcard-top{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;margin-bottom:14px}
  .pmark{display:flex;align-items:center;gap:12px}
  .pmark .glyph{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;flex:none;
    background:color-mix(in srgb,var(--acc) 14%,#fff);color:var(--acc);border:1px solid color-mix(in srgb,var(--acc) 26%,transparent)}
  .pmark .glyph svg{width:20px;height:20px}
  .pmark .glyph.grad-glyph{background:linear-gradient(150deg,#EBC97C,#C99A4E);color:#fff;border:0}
  .pname{font-size:1.24rem;font-weight:800;letter-spacing:-.025em;line-height:1.04}
  .psub{font-size:.76rem;font-weight:600;letter-spacing:.01em;color:var(--acc);margin-top:2px}
  .pnum{font-family:var(--mono);font-size:.72rem;font-weight:700;letter-spacing:.14em;color:var(--slate);opacity:.7}
  .pstatus{display:inline-flex;align-items:center;gap:7px;font-size:.7rem;font-weight:700;letter-spacing:.02em;
    padding:4px 10px;border-radius:var(--r-pill);margin-bottom:13px;width:fit-content;
    background:color-mix(in srgb,var(--acc) 10%,#fff);color:color-mix(in srgb,var(--acc) 74%,var(--navy));
    border:1px solid color-mix(in srgb,var(--acc) 20%,transparent)}
  .pstatus .lv{width:7px;height:7px;border-radius:50%;background:var(--acc)}
  .pstatus.live .lv{animation:pulse 2.4s infinite;box-shadow:0 0 0 0 color-mix(in srgb,var(--acc) 50%,transparent)}
  .pcard .desc{color:var(--slate);font-size:.92rem;line-height:1.56;margin:0 0 14px;flex:1}
  .pcard .desc b{color:var(--navy);font-weight:600}
  .ptags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:18px}
  .ptag{font-size:.72rem;font-weight:600;padding:4px 10px;border-radius:var(--r-pill);
    background:color-mix(in srgb,var(--acc) 9%,#fff);color:color-mix(in srgb,var(--acc) 72%,var(--navy));
    border:1px solid color-mix(in srgb,var(--acc) 18%,transparent)}
  .pactions{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:auto}
  .pactions .btn.small.btn-glow{background:var(--acc);box-shadow:0 8px 20px color-mix(in srgb,var(--acc) 30%,transparent)}
  .pactions .btn.small.btn-glow:hover{background:color-mix(in srgb,var(--acc) 84%,#000);box-shadow:0 12px 26px color-mix(in srgb,var(--acc) 40%,transparent)}
  .pgo{display:inline-flex;align-items:center;gap:7px;font-weight:700;font-size:.88rem;color:var(--navy)}
  .pgo svg{width:16px;height:16px;transition:transform .25s}
  .pcard:hover .pgo svg{transform:translateX(4px)}
  .plaunch{display:inline-flex;align-items:center;gap:7px;font-weight:600;font-size:.84rem;color:var(--acc)}
  .plaunch svg{width:14px;height:14px}
  .plaunch:hover{text-decoration:underline;text-underline-offset:2px}
  @media(max-width:1080px){.prod-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:680px){.prod-grid{grid-template-columns:1fr}}

  /* ============================================================
     ACONOMY IS LIVE — DARK (brand film + Play badge)
     ============================================================ */
  #live{background:var(--d-bg);color:#fff;position:relative;overflow:hidden}
  #live::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.72;
    background:radial-gradient(720px 460px at 10% 8%, rgba(0,171,190,.2), transparent 60%),
              radial-gradient(640px 440px at 96% 92%, rgba(0,108,255,.2), transparent 62%)}
  #live .wrap{position:relative}
  #live h2{color:#fff}
  .live-grid{display:grid;grid-template-columns:1fr 1.12fr;gap:clamp(30px,5vw,68px);align-items:center}
  .live-lead{font-size:clamp(1.08rem,1.55vw,1.3rem);color:var(--d-body);line-height:1.62;max-width:44ch}
  .live-note{margin-top:16px;color:var(--d-dim);font-size:1rem;max-width:46ch}
  .live-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:28px;align-items:center}
  .live-cta .btn-wire-d{background:rgba(255,255,255,.04);border:1.5px solid var(--d-line-2);color:#fff}
  .live-cta .btn-wire-d:hover{border-color:#fff;background:rgba(255,255,255,.08);box-shadow:none}
  .gplay{display:inline-flex;align-items:center;gap:12px;background:#000;color:#fff;border:1px solid var(--d-line-2);
    border-radius:12px;padding:10px 20px;transition:transform .2s,border-color .2s,box-shadow .2s}
  .gplay:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.5);box-shadow:var(--shadow)}
  .gplay .gp-ic{width:26px;height:26px;flex:none}
  .gplay .gp-txt{display:flex;flex-direction:column;line-height:1.1;text-align:left}
  .gplay .gp-txt .s{font-size:.62rem;letter-spacing:.06em;text-transform:uppercase;opacity:.85}
  .gplay .gp-txt .b{font-size:1.12rem;font-weight:700;letter-spacing:.01em}
  .video-wrap{position:relative;width:100%;padding-bottom:56.25%;height:0;overflow:hidden;
    border-radius:var(--r-lg);border:1px solid var(--d-line-2);box-shadow:var(--shadow-lg);background:rgba(255,255,255,.04)}
  .video-wrap iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
  @media(max-width:960px){.live-grid{grid-template-columns:1fr}}

  /* ============================================================
     TEAM
     ============================================================ */
  #team{background:#fff}
  .team-head{max-width:60ch;margin-bottom:clamp(30px,4vw,46px)}
  .team-head p{color:var(--slate);margin-top:14px;max-width:52ch}
  .team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
  .mcard{background:#fff;border:var(--edge);border-radius:var(--r-lg);padding:28px;
    transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
  .mcard:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:color-mix(in srgb,var(--pan-blue) 26%,transparent)}
  .mcard .photo{width:96px;height:96px;border-radius:50%;object-fit:cover;object-position:top center;
    border:1px solid var(--gray-200);background:var(--bg);display:block}
  .mcard .nm{margin-top:18px;font-size:1.14rem;font-weight:800;letter-spacing:-.02em;color:var(--navy)}
  .mcard .rl{font-size:.82rem;font-weight:700;color:var(--pan-blue);margin-top:3px;letter-spacing:.01em}
  .mcard .bio{color:var(--slate);font-size:.92rem;line-height:1.58;margin-top:12px}
  .team-slim{display:flex;align-items:center;gap:22px;margin-top:22px;background:#fff;border:var(--edge);
    border-radius:var(--r-lg);padding:24px 28px;
    transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
  .team-slim:hover{transform:translateY(-3px);box-shadow:var(--shadow);border-color:color-mix(in srgb,var(--pan-blue) 26%,transparent)}
  .team-slim .photo{width:80px;height:80px;border-radius:50%;object-fit:cover;object-position:top center;flex:none;
    border:1px solid var(--gray-200);background:var(--bg)}
  .team-slim .ts-meta .nm{font-size:1.1rem;font-weight:800;letter-spacing:-.02em;color:var(--navy)}
  .team-slim .ts-meta .rl{font-size:.82rem;font-weight:700;color:var(--pan-blue);margin-top:2px}
  .team-slim .ts-meta .bio{color:var(--slate);font-size:.92rem;line-height:1.55;margin-top:8px;max-width:80ch}
  @media(max-width:900px){.team-grid{grid-template-columns:1fr}}
  @media(max-width:560px){.team-slim{flex-direction:column;align-items:flex-start;gap:16px}}

  /* ============================================================
     TRUST STRIP — audits / open / incubated
     ============================================================ */
  #trust{background:#f6f8fc}
  .trust-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-top:8px}
  .tcard{position:relative;background:#fff;border:var(--edge);border-radius:var(--r-lg);padding:28px;overflow:hidden;
    transition:transform .28s var(--ease),box-shadow .28s,border-color .28s;display:flex;flex-direction:column}
  .tcard:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:color-mix(in srgb,var(--pan-blue) 26%,transparent)}
  .tcard .th{display:flex;align-items:center;gap:12px;margin-bottom:14px}
  .tcard .tic{width:44px;height:44px;border-radius:12px;flex:none;display:grid;place-items:center;
    background:color-mix(in srgb,var(--pan-blue) 10%,#fff);color:var(--pan-blue);border:1px solid color-mix(in srgb,var(--pan-blue) 20%,transparent)}
  .tcard .tic svg{width:22px;height:22px}
  .tcard h3{font-size:1.16rem;font-weight:800;letter-spacing:-.02em}
  .tcard .tsub{font-size:.84rem;color:var(--slate);font-weight:600}
  .tcard>p{color:var(--slate);font-size:.94rem;line-height:1.58;margin:0 0 16px}
  .trow{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px}
  .verified{display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;padding:5px 11px;border-radius:var(--r-pill);
    background:rgba(0,145,94,.1);color:#00915e;border:1px solid rgba(0,145,94,.22)}
  .verified svg{width:13px;height:13px}
  .tgo{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:.9rem;color:var(--pan-blue);margin-top:auto}
  .tgo svg{width:15px;height:15px;transition:transform .25s}
  .tcard:hover .tgo svg{transform:translate(2px,-2px)}

  /* incubator row (widened to 3) */
  .incu-row{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:24px}
  .incu-card{display:flex;flex-direction:column;align-items:flex-start;gap:18px;background:#fff;
    border:1px solid var(--gray-200);border-radius:var(--r-lg);padding:clamp(22px,2.6vw,28px);
    transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
  .incu-card:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:color-mix(in srgb,var(--pan-blue) 26%,transparent)}
  .incu-logo{width:100%;min-height:82px;display:grid;place-items:center;background:#fff;
    border:1px solid var(--gray-200);border-radius:var(--r);padding:22px 26px}
  .incu-logo img{max-height:40px;width:auto;max-width:100%;height:auto}
  .incu-logo.bhive img{max-height:32px}
  .incu-meta{display:flex;flex-direction:column;gap:3px}
  .incu-meta .nm{font-weight:800;font-size:1.08rem;letter-spacing:-.02em;color:var(--navy);display:inline-flex;align-items:center;gap:8px}
  .incu-meta .nm svg{width:15px;height:15px;color:var(--pan-blue);transition:transform .25s}
  .incu-card:hover .nm svg{transform:translate(2px,-2px)}
  .incu-meta .ds{font-size:.9rem;color:var(--slate);line-height:1.5}
  .incu-badges{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:24px}
  .incu-badge{display:inline-flex;align-items:center;gap:8px;font-size:.82rem;font-weight:600;color:var(--slate);
    background:var(--bg);border:1px solid var(--gray-200);padding:8px 15px;border-radius:var(--r-pill)}
  .incu-badge svg{width:14px;height:14px;color:var(--pan-blue)}
  @media(max-width:820px){.trust-grid{grid-template-columns:1fr}.incu-row{grid-template-columns:1fr}}

  /* ============================================================
     CONTACT / CTA  (+ FAQ accordion)
     ============================================================ */
  #contact{background:#f6f8fc;color:var(--navy);position:relative;overflow:hidden}
  #contact::before{content:"";position:absolute;inset:0;pointer-events:none;
    background:radial-gradient(820px 520px at 80% -10%, rgba(0,108,255,.06), transparent 58%),
              radial-gradient(680px 480px at 0% 110%, rgba(121,73,232,.045), transparent 60%)}
  #contact .wrap{position:relative}
  #contact h2{color:var(--navy)}
  #contact .lead{color:var(--slate);font-size:clamp(1.08rem,1.5vw,1.28rem);max-width:44ch}

  /* FAQ accordion */
  .faq-wrap{max-width:var(--maxw2);margin-bottom:clamp(40px,5vw,60px)}
  .faq-head{margin-bottom:clamp(22px,3vw,32px)}
  .faq-head h2{margin-top:14px}
  .faq{border:1px solid var(--gray-200);border-radius:var(--r);background:#fff;margin-bottom:12px;overflow:hidden}
  .faq summary{list-style:none;cursor:pointer;padding:18px 22px;font-weight:700;font-size:1.02rem;color:var(--navy);
    display:flex;align-items:center;justify-content:space-between;gap:16px}
  .faq summary::-webkit-details-marker{display:none}
  .faq summary::after{content:"";flex:none;width:11px;height:11px;border-right:2px solid var(--slate);border-bottom:2px solid var(--slate);
    transform:rotate(45deg);transition:transform .25s var(--ease);margin-top:-4px}
  .faq[open] summary::after{transform:rotate(-135deg);margin-top:2px}
  .faq p{margin:0;padding:0 22px 20px;color:var(--slate);font-size:.98rem;line-height:1.62;max-width:76ch}
  .faq p code{font-family:var(--mono);font-size:.86rem;background:var(--bg);border:var(--edge);padding:1px 6px;border-radius:6px;color:var(--navy)}

  .contact-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:clamp(32px,5vw,68px);align-items:center}
  .contact-card{border:1px solid var(--gray-200);border-radius:var(--r-lg);padding:clamp(26px,3.5vw,38px);
    background:#fff;box-shadow:var(--card-shadow)}
  .crow{display:flex;align-items:flex-start;gap:15px;padding:16px 0}
  .crow+.crow{border-top:1px solid var(--gray-200)}
  .crow .ic{width:44px;height:44px;border-radius:12px;flex:none;display:grid;place-items:center;
    background:rgba(0,108,255,.1);color:var(--pan-blue);border:1px solid rgba(0,108,255,.2)}
  .crow .ic svg{width:20px;height:20px}
  .crow .k{font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--slate);font-weight:700}
  .crow .v{font-weight:700;color:var(--navy);font-size:1.02rem}
  .crow a.v:hover{color:var(--pan-blue)}
  .crow address{font-style:normal;color:var(--slate);font-weight:500;line-height:1.55;font-size:.98rem}
  @media(max-width:960px){.contact-grid{grid-template-columns:1fr}}

  /* ============================================================
     FOOTER — brand navy
     ============================================================ */
  .footer{background:var(--navy);color:#fff;padding:72px 0 40px}
  .footer a{color:rgba(255,255,255,.72)}.footer a:hover{color:#fff}
  .foot-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1.3fr;gap:40px;padding-bottom:48px}
  .foot-brand .logo{height:30px;width:auto;margin-bottom:18px}
  .foot-brand p{color:rgba(255,255,255,.55);max-width:34ch;font-size:.96rem;line-height:1.6}
  .socials{display:flex;gap:12px;margin-top:20px}
  .socials a{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;
    border:1px solid rgba(255,255,255,.16);color:rgba(255,255,255,.72);transition:.2s}
  .socials a:hover{background:#fff;color:var(--navy);transform:translateY(-3px);border-color:#fff}
  .foot-col h4{font-size:.74rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:16px;font-weight:700}
  .foot-col a{display:block;padding:7px 0;font-size:.96rem}
  .foot-addr{color:rgba(255,255,255,.72);font-style:normal;line-height:1.6;font-size:.94rem}
  .foot-addr b{display:block;color:#fff;font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px}
  .foot-bar{border-top:1px solid rgba(255,255,255,.12);padding:26px 0 0;display:flex;justify-content:space-between;
    align-items:center;gap:16px;flex-wrap:wrap;color:rgba(255,255,255,.55);font-size:.9rem}
  .foot-bar .made{display:inline-flex;align-items:center;gap:8px}

  /* ============================================================
     RESPONSIVE + MOTION SAFETY
     ============================================================ */
  @media(max-width:960px){
    .hero-grid,.thesis-grid,.foot-grid{grid-template-columns:1fr}
    .console{order:-1}
    .foot-grid{grid-template-columns:1fr 1fr}
    .sec-head{flex-direction:column;align-items:flex-start}
    /* collapse nav to the mobile toggle so links never wrap (<960px) */
    .nav-links,.nav-cta .hide-m{display:none}
    .nav-toggle{display:inline-flex}
  }
  @media(max-width:640px){
    .hero-meta{gap:8px 18px}
    .foot-grid{grid-template-columns:1fr}
    .pcard{padding:24px 22px 20px}
    .console-body{min-height:300px}
  }
  @media(prefers-reduced-motion:reduce){
    *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
    .reveal{opacity:1!important;transform:none!important}
    .cl{opacity:1!important;transform:none!important}
  }

  /* ============================================================
     v5 ADDITIONS — reordered layout, split cases/seen, incubators-in-partners
     ============================================================ */
  .block-head{max-width:62ch;margin-bottom:clamp(30px,4vw,46px)}
  .block-head h2{margin-top:16px}
  .block-head p{margin-top:14px;max-width:58ch;color:var(--slate)}

  .incu-block{margin-top:clamp(30px,4vw,44px);padding-top:28px;border-top:1px solid var(--d-line)}
  #partners .incu-block .lr-label{font-family:var(--mono);font-size:.7rem;font-weight:700;letter-spacing:.16em;
    text-transform:uppercase;color:var(--d-sky);margin-bottom:16px;display:flex;align-items:center;gap:10px}
  #partners .incu-block .lr-label::before{content:"";width:20px;height:1.5px;background:var(--d-sky)}
  #partners .incu-badge{background:rgba(255,255,255,.06);border-color:var(--d-line-2);color:var(--d-body)}
  #partners .incu-badge svg{color:var(--d-sky)}

  /* CASE STUDIES — own light section */
  #cases{background:#fff}
  #cases .ccard{background:#fff;border:var(--edge);color:var(--navy);box-shadow:var(--card-shadow)}
  #cases .ccard h3{color:var(--navy)}
  #cases .ccard .ck-tag{color:var(--pan-blue)}
  #cases .ccard .cgo{color:var(--pan-blue)}
  #cases .ccard::after{background:linear-gradient(90deg,var(--pan-blue),transparent)}
  #cases .ccard:hover{border-color:color-mix(in srgb,var(--pan-blue) 30%,transparent);box-shadow:var(--shadow-lg)}
  #cases .cases-grid{margin-top:0}

  /* SEEN AT — own dark section with an event collage */
  #seen{background:var(--d-bg);color:#fff;position:relative;overflow:hidden}
  #seen::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.7;
    background:radial-gradient(680px 460px at 6% -6%, rgba(0,171,190,.2), transparent 58%),
              radial-gradient(680px 480px at 96% 104%, rgba(0,108,255,.2), transparent 60%)}
  #seen .wrap{position:relative}
  #seen h2{color:#fff}
  #seen .block-head p{color:var(--d-body)}
  .seen-collage{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .ev-card{border:1px solid var(--d-line-2);border-radius:var(--r-lg);overflow:hidden;background:var(--d-panel);
    transition:transform .3s var(--ease),border-color .3s,box-shadow .3s}
  .ev-card:hover{transform:translateY(-5px);border-color:rgba(127,178,255,.5);box-shadow:0 26px 60px rgba(0,0,0,.45)}
  .ev-logo{aspect-ratio:16/9;display:grid;place-items:center;padding:22px 26px;
    background:radial-gradient(120% 130% at 50% 0%, rgba(127,178,255,.10), transparent 62%)}
  .ev-logo img{max-height:44px;max-width:78%;width:auto;height:auto;object-fit:contain;
    opacity:.92;transition:opacity .25s,transform .25s}
  .ev-card:hover .ev-logo img{opacity:1;transform:scale(1.04)}
  .ev-cap{padding:12px 14px;display:flex;flex-direction:column;gap:2px}
  .ev-cap b{color:#fff;font-size:.9rem;font-weight:700;letter-spacing:-.01em}
  .ev-cap span{color:var(--d-dim);font-size:.78rem}
  @media(max-width:900px){.seen-collage{grid-template-columns:repeat(3,1fr)}}
  @media(max-width:560px){.seen-collage{grid-template-columns:repeat(2,1fr)}}

  /* ============================================================
     v6 — product cards: real logos, whole-card link, gated CTAs
     ============================================================ */
  .pcard .pcard-link{position:absolute;inset:0;z-index:1;border-radius:var(--r-lg)}
  .pcard .pmark{flex-direction:row;align-items:center;gap:0}
  .pcard .pmeta{display:flex;flex-direction:column;gap:0;min-width:0}
  /* Fixed-height brand-logo band: every mark shares ONE 46px zone and is
     baseline-aligned (flex-end), so the subtitle, status pill, tags and CTA
     line up across tiles. The *-tile assets are pre-cropped to their ink bounds
     (zero internal padding); per-logo heights are then tuned so the wordmarks
     read at one consistent visual size — the 2-line lockups (Express, Unity)
     sit taller than the 1-line marks by design, not by accident. */
  .pcard .plogo-box{display:flex;align-items:flex-end;height:46px}
  .pcard .plogo{width:auto;max-width:100%;object-fit:contain;object-position:left bottom;display:block}
  .pcard .plogo-express{height:44px}
  .pcard .plogo-unity{height:44px}
  .pcard .plogo-dpp{height:42px}
  .pcard .plogo-propty{height:28px}
  .pcard .plogo-aconomy{height:26px}
  /* coming-soon products have no usable brand logo -> typographic name, set to
     match the wordmarks' visual size and weight */
  .pcard .pname-text{font-size:1.5rem;font-weight:800;letter-spacing:-.025em;line-height:1;color:var(--navy)}
  .pcard .psub{margin-top:8px}
  .pcard .pactions{position:relative;z-index:2;justify-content:space-between;pointer-events:none}
  .pcard .pactions .btn{pointer-events:auto}
  .pcard .pactions .pgo{color:var(--navy);opacity:.82}
  .pcard:hover .pactions .pgo{opacity:1}

  /* v6b — partner/press logo walls, coming-soon tiles, faq cta */
  .logo-wall{display:flex;flex-wrap:wrap;gap:12px}
  .logo-chip{background:#fff;border-radius:12px;height:62px;min-width:122px;padding:11px 20px;display:grid;place-items:center;
    transition:transform .25s var(--ease),box-shadow .25s}
  .logo-chip:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(0,0,0,.34)}
  .logo-chip img{max-height:34px;max-width:140px;width:auto;height:auto;object-fit:contain;display:block}
  .logo-chip.txt{font-family:var(--mono);font-weight:800;font-size:.84rem;color:var(--navy);letter-spacing:-.01em;text-align:center;line-height:1.15}
  .logo-wall.press{gap:14px;margin-top:6px}
  .logo-wall.press .logo-chip{height:76px;min-width:158px;padding:14px 26px}
  .logo-wall.press .logo-chip img{max-height:46px;max-width:180px}
  .pcard-soon{border-style:dashed}
  .pcard-soon:hover{transform:none;box-shadow:none;border-color:var(--gray-200)}
  .pcard-soon:hover::before{transform:scaleY(0)}
  .pcard-soon:hover::after{opacity:0}
  /* v8 — work-with-the-studio band + hero aside */
  #build{background:#f6f8fc}
  .build-card{position:relative;background:linear-gradient(120deg,#fff,#eef3ff);border:1px solid var(--gray-200);
    border-radius:var(--r-lg);padding:clamp(30px,5vw,56px);box-shadow:var(--card-shadow);overflow:hidden}
  .build-card::before{content:"";position:absolute;right:-6%;top:-46%;width:42%;aspect-ratio:1;border-radius:50%;
    background:radial-gradient(circle,rgba(0,108,255,.12),transparent 70%);pointer-events:none}
  .build-card>*{position:relative}
  .build-card h2{max-width:24ch}
  .build-card p{color:var(--slate);font-size:1.06rem;line-height:1.7;max-width:66ch;margin:16px 0 0}
  .build-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:26px}
  .hero-aside{margin-top:20px;font-size:.95rem;color:var(--slate)}
  .hero-aside a{color:var(--pan-blue);font-weight:700;white-space:nowrap}
  .hero-aside a:hover{text-decoration:underline}
  .foot-col .soon{display:block;padding:7px 0;font-size:.96rem;color:rgba(255,255,255,.4)}
  .faq-cta{display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;margin-top:4px}
  .faq-cta p{color:var(--slate);font-size:1.1rem;font-weight:500;max-width:42ch;margin:0}
`;
