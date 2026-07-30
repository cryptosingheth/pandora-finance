/* ------------------------------------------------------------------
   propty/index.html's inline <style> block, copied byte-for-byte.
   String.raw keeps CSS backslash escapes intact. Do NOT reformat,
   minify, dedupe or "tidy" this — pixel-identity depends on it.
   ------------------------------------------------------------------ */

export const pageCss = String.raw`
  /* ===== Propty page-specific — deep-teal brand (logo #005843) ===== */
  :root{
    --teal:#005843;            /* PropTy logo — primary accent */
    --teal-dark:#00382b;       /* hover / deep */
    --teal-2:#0a7057;          /* lighter teal for gradients */
    --teal-soft:rgba(0,88,67,.09);
    --teal-line:rgba(0,88,67,.20);
    --teal-tint:#e7f1ee;       /* very light teal wash */
    --ink-2:#3d4b66;           /* mid text on light */
  }

  /* Brand logo in nav — tight-cropped hi-res SVG wordmark (fills its box) */
  .brandmark{display:inline-flex;align-items:center;gap:10px}
  .nav .brandmark img{height:34px;width:auto;display:block}
  .nav-cta{display:flex;align-items:center;gap:22px}
  .nav a.navlink:hover{color:var(--teal)}

  /* Verified chip */
  .vchip{display:inline-flex;align-items:center;gap:7px;font-size:.78rem;font-weight:700;letter-spacing:.02em;
    padding:6px 13px;border-radius:var(--r-pill);background:var(--teal-soft);color:var(--teal);border:1px solid var(--teal-line)}
  .vchip svg{width:14px;height:14px}

  /* Teal buttons */
  .btn-teal{background:var(--teal);color:#fff}
  .btn-teal:hover{background:var(--teal-dark);transform:translateY(-2px);box-shadow:0 12px 26px rgba(0,88,67,.28)}
  .btn-try{display:inline-flex;align-items:center;gap:9px}
  .btn-try svg{flex:0 0 auto}
  .btn-glow{background:var(--teal);color:#fff;box-shadow:0 8px 22px rgba(0,88,67,.26)}
  .btn-glow:hover{background:var(--teal-dark);transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,88,67,.32)}

  /* ===== Hero ===== */
  .hero{position:relative;overflow:hidden;padding:72px 0 60px}
  .hero::before{
    content:"";position:absolute;inset:0;z-index:-2;
    background:
      radial-gradient(60% 55% at 82% 8%, rgba(0,88,67,.10), transparent 60%),
      radial-gradient(50% 50% at 8% 92%, rgba(0,88,67,.07), transparent 60%),
      linear-gradient(180deg,#fff 0%, var(--bg) 100%);
  }
  .hero::after{
    content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:.5;
    background-image:linear-gradient(var(--gray-200) 1px,transparent 1px),linear-gradient(90deg,var(--gray-200) 1px,transparent 1px);
    background-size:46px 46px;
    -webkit-mask-image:radial-gradient(120% 90% at 70% 10%,#000,transparent 70%);
            mask-image:radial-gradient(120% 90% at 70% 10%,#000,transparent 70%);
  }
  .hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:56px;align-items:center}
  .hero h1{font-size:clamp(2.4rem,5.2vw,3.95rem);font-weight:800;letter-spacing:-.03em}
  .hero h1 .g{color:var(--teal)}
  .hero .lead{margin-top:20px;font-size:clamp(1.05rem,1.55vw,1.24rem);max-width:54ch}
  .hero .positioning{margin-top:16px;font-size:.98rem;color:var(--ink-2);max-width:52ch}
  .hero .positioning b{color:var(--teal);font-weight:700}
  .hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:30px}
  .hero-trust{display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:30px;color:var(--slate);font-size:.9rem}
  .hero-trust span{display:inline-flex;align-items:center;gap:8px;font-weight:500}
  .hero-trust .dot{width:7px;height:7px;border-radius:50%;background:var(--teal)}

  /* Hero visual — dual-sided protection card */
  .protect-card{
    position:relative;background:#fff;border:1px solid var(--gray-200);border-radius:var(--r-lg);
    box-shadow:var(--shadow-lg);padding:26px;overflow:hidden;
  }
  .protect-card .pc-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
  .pc-badge{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:.82rem;color:var(--teal)}
  .pc-badge .ring{width:22px;height:22px;border-radius:50%;background:var(--teal-soft);display:grid;place-items:center}
  .pc-badge .ring svg{width:13px;height:13px}
  .pc-live{font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--slate);display:inline-flex;align-items:center;gap:7px}
  .pc-live .pulse{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 0 rgba(0,88,67,.5);animation:pulse 2s infinite}
  @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,88,67,.45)}70%{box-shadow:0 0 0 9px rgba(0,88,67,0)}100%{box-shadow:0 0 0 0 rgba(0,88,67,0)}}

  .flow-rail{display:grid;grid-template-columns:1fr auto 1fr;gap:14px;align-items:stretch}
  .flow-side{background:var(--bg);border:1px solid var(--gray-200);border-radius:var(--r);padding:16px 15px}
  .flow-side h4{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--slate);margin-bottom:10px;font-weight:700}
  .flow-side .amt{font-size:1.32rem;font-weight:800;letter-spacing:-.02em;color:var(--navy);line-height:1.15}
  .flow-side .sub{font-size:.8rem;color:var(--slate);margin-top:2px}
  .flow-side.tenant{background:linear-gradient(180deg,var(--teal-tint),#fff)}
  .flow-side.owner{background:linear-gradient(180deg,var(--teal-soft),#fff)}
  .flow-mid{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;color:var(--teal)}
  .flow-mid .chip{writing-mode:vertical-rl;transform:rotate(180deg);font-size:.62rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--slate)}
  .flow-mid .arrow{width:26px;height:26px;border-radius:50%;background:var(--teal);display:grid;place-items:center}
  .flow-mid .arrow svg{width:14px;height:14px}
  .pc-foot{margin-top:18px;border-top:1px dashed var(--gray-200);padding-top:15px;display:flex;flex-direction:column;gap:9px}
  .pc-line{display:flex;align-items:center;gap:10px;font-size:.86rem;color:var(--ink-2)}
  .pc-line .tick{width:18px;height:18px;border-radius:50%;background:var(--teal-soft);color:var(--teal);display:grid;place-items:center;flex:0 0 auto}
  .pc-line .tick svg{width:11px;height:11px}
  .protect-card{overflow:visible}
  .pc-float{position:absolute;right:14px;bottom:-16px;background:var(--navy);color:#fff;border-radius:12px;padding:10px 15px;box-shadow:var(--shadow-lg);font-size:.78rem;font-weight:600;display:inline-flex;align-items:center;gap:8px;white-space:nowrap;z-index:4}
  .pc-float .up{color:var(--c-aconomy-mint);font-weight:800}

  /* ===== Section shared ===== */
  .sec-head{max-width:64ch}
  .sec-head h2{margin-top:12px}
  .sec-head p{margin-top:14px}

  /* ===== Problem — dual columns ===== */
  .prob-wrap{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:44px;position:relative}
  .prob-vs{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3;
    width:56px;height:56px;border-radius:50%;background:#fff;border:1px solid var(--gray-200);box-shadow:var(--shadow);
    display:grid;place-items:center;font-weight:800;color:var(--slate);font-size:.9rem}
  .prob-col{border-radius:var(--r-lg);padding:34px;border:1px solid var(--gray-200);background:#fff}
  .prob-col .head{display:flex;align-items:center;gap:12px;margin-bottom:8px}
  .prob-col .ic{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;flex:0 0 auto}
  .prob-col .ic svg{width:22px;height:22px}
  .prob-col h3{font-size:1.35rem;font-weight:800}
  .prob-col .who{font-size:.8rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--slate)}
  .prob-col.tenant .ic{background:var(--teal-tint);color:var(--teal)}
  .prob-col.owner .ic{background:var(--teal-soft);color:var(--teal)}
  .prob-list{list-style:none;padding:0;margin:18px 0 0;display:flex;flex-direction:column;gap:14px}
  .prob-list li{display:flex;gap:12px;font-size:.98rem;color:var(--ink-2)}
  .prob-list li b{color:var(--navy);font-weight:700}
  .prob-list .x{width:22px;height:22px;border-radius:6px;background:#fff0ef;color:#d64545;display:grid;place-items:center;flex:0 0 auto;margin-top:1px}
  .prob-list .x svg{width:12px;height:12px}

  /* ===== Participants (platform) — evenly-aligned cards ===== */
  .party-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px;align-items:stretch}
  .party{position:relative;background:#fff;border:1px solid var(--gray-200);border-radius:var(--r-lg);padding:30px;transition:.25s;display:flex;flex-direction:column;height:100%}
  .party:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:transparent}
  .party .ptop{display:flex;align-items:center;gap:14px;padding-bottom:18px;margin-bottom:18px;border-bottom:1px solid var(--gray-200)}
  .party .pic{width:52px;height:52px;border-radius:14px;display:grid;place-items:center;flex:0 0 auto;background:var(--teal-soft);color:var(--teal)}
  .party .pic svg{width:26px;height:26px}
  .party .role{display:block;font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--teal);margin-bottom:3px}
  .party h3{font-size:1.24rem;font-weight:800;line-height:1.1}
  .party .pdesc{font-size:.92rem;color:var(--slate);margin:0 0 18px;min-height:2.9em}
  .party ul{list-style:none;padding:0;margin:0 0 18px;display:flex;flex-direction:column;gap:12px}
  .party ul li{position:relative;padding-left:28px;font-size:.9rem;color:var(--ink-2);line-height:1.5}
  .party ul li b{color:var(--navy);font-weight:700}
  .party ul li .t{position:absolute;left:0;top:2px;width:18px;height:18px;border-radius:50%;background:var(--teal-soft);color:var(--teal);display:grid;place-items:center;flex:0 0 auto}
  .party ul li .t svg{width:11px;height:11px}
  .party .pnote{margin-top:auto;padding-top:16px;border-top:1px dashed var(--gray-200);font-size:.82rem;color:var(--slate);line-height:1.5}
  .party .pnote b{color:var(--teal);font-weight:700}
  .party.host{border-color:var(--teal-line);box-shadow:0 0 0 1px var(--teal-line)}

  /* ===== Lease lifecycle timeline ===== */
  .life{margin-top:48px;display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative}
  .life::before{content:"";position:absolute;top:26px;left:9%;right:9%;height:2px;
    background:repeating-linear-gradient(90deg,var(--teal-line) 0 8px,transparent 8px 16px);z-index:0}
  .life-step{position:relative;z-index:1;padding:0 12px;text-align:center}
  .life-step .lnum{width:54px;height:54px;border-radius:16px;background:#fff;border:1px solid var(--gray-200);
    box-shadow:var(--shadow);display:grid;place-items:center;margin:0 auto 16px;color:var(--teal)}
  .life-step .lnum svg{width:24px;height:24px}
  .life-step:last-child .lnum{background:var(--teal);border-color:var(--teal)}
  .life-step:last-child .lnum svg{stroke:#fff}
  .life-step h4{font-size:1rem;font-weight:700;margin-bottom:5px}
  .life-step p{font-size:.85rem;color:var(--slate);margin:0}
  .life-step .state{display:inline-block;margin-top:9px;font-size:.68rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;
    color:var(--teal);background:var(--teal-soft);padding:3px 9px;border-radius:var(--r-pill)}

  /* ===== Private by proof (ZK signature) ===== */
  .zk{background:linear-gradient(160deg,#04352a,#032a22 55%,#04231c);border-radius:var(--r-lg);padding:56px 46px;color:#fff;position:relative;overflow:hidden}
  .zk::before{content:"";position:absolute;right:-70px;top:-60px;width:300px;height:300px;border-radius:50%;
    background:radial-gradient(circle,rgba(0,255,194,.16),transparent 70%)}
  .zk::after{content:"";position:absolute;left:-50px;bottom:-80px;width:260px;height:260px;border-radius:50%;
    background:radial-gradient(circle,rgba(10,112,87,.4),transparent 70%)}
  .zk-inner{position:relative;z-index:1}
  .zk .eyebrow{color:var(--c-aconomy-mint)}
  .zk h2{color:#fff;margin-top:10px}
  .zk .lead{color:rgba(255,255,255,.80);max-width:62ch}
  .zk-dev{display:inline-flex;align-items:center;gap:8px;margin-top:16px;font-size:.76rem;font-weight:700;letter-spacing:.02em;
    color:#7ff0d3;background:rgba(0,255,194,.10);border:1px solid rgba(0,255,194,.28);padding:6px 13px;border-radius:var(--r-pill)}
  .zk-dev .pulse{width:8px;height:8px;border-radius:50%;background:var(--c-aconomy-mint)}

  /* 3-step proof visual */
  .proof-flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:14px;align-items:center;margin-top:40px}
  .proof-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);border-radius:16px;padding:22px 20px;text-align:center;backdrop-filter:blur(4px)}
  .proof-card .picon{width:56px;height:56px;margin:0 auto 14px;display:grid;place-items:center}
  .proof-card h4{color:#fff;font-size:1.02rem;font-weight:700;margin-bottom:6px}
  .proof-card p{color:rgba(255,255,255,.68);font-size:.85rem;margin:0}
  .proof-card .plabel{display:block;font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-bottom:12px}
  .proof-card.mid{border-color:rgba(0,255,194,.35);background:rgba(0,255,194,.06)}
  .proof-card.done{border-color:rgba(0,255,194,.3)}
  .proof-arrow{color:rgba(0,255,194,.65);display:grid;place-items:center}
  .proof-arrow svg{width:24px;height:24px}
  .zk-foot{margin-top:34px;display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .zk-foot .zf{display:flex;gap:12px;align-items:flex-start;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.10);border-radius:14px;padding:18px 18px}
  .zk-foot .zf .zic{width:38px;height:38px;border-radius:11px;background:rgba(0,255,194,.14);color:var(--c-aconomy-mint);display:grid;place-items:center;flex:0 0 auto}
  .zk-foot .zf .zic svg{width:19px;height:19px}
  .zk-foot .zf h4{color:#fff;font-size:.98rem;font-weight:700;margin-bottom:4px}
  .zk-foot .zf p{color:rgba(255,255,255,.66);font-size:.85rem;margin:0}

  /* ===== Feature grid (financial layer) ===== */
  .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px}
  .feat{position:relative;background:#fff;border:1px solid var(--gray-200);border-radius:var(--r-lg);padding:30px;transition:.25s;overflow:hidden}
  .feat:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg);border-color:transparent}
  .feat::after{content:"";position:absolute;left:0;top:0;height:3px;width:0;background:var(--teal);transition:.35s}
  .feat:hover::after{width:100%}
  .feat .fic{width:52px;height:52px;border-radius:14px;display:grid;place-items:center;margin-bottom:18px;background:var(--teal-soft);color:var(--teal)}
  .feat .fic svg{width:26px;height:26px}
  .feat h3{font-size:1.15rem;font-weight:700;margin-bottom:8px}
  .feat p{font-size:.95rem;color:var(--slate);margin:0}
  .feat .tag{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-size:.75rem;font-weight:700;color:var(--teal)}
  .feat .tag svg{width:12px;height:12px}

  /* ===== Compliance strip ===== */
  .compliance{background:linear-gradient(135deg,#0f2a22,#06463a);border-radius:var(--r-lg);padding:52px 44px;color:#fff;position:relative;overflow:hidden}
  .compliance::before{content:"";position:absolute;right:-60px;top:-60px;width:280px;height:280px;border-radius:50%;
    background:radial-gradient(circle,rgba(0,255,194,.28),transparent 70%)}
  .compliance::after{content:"";position:absolute;left:-40px;bottom:-70px;width:240px;height:240px;border-radius:50%;
    background:radial-gradient(circle,rgba(10,112,87,.4),transparent 70%)}
  .comp-inner{position:relative;z-index:1}
  .compliance .eyebrow{color:var(--c-aconomy-mint)}
  .compliance h2{color:#fff;margin-top:10px}
  .compliance .lead{color:rgba(255,255,255,.80);max-width:60ch}
  .comp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:34px}
  .comp-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:var(--r);padding:24px;backdrop-filter:blur(4px)}
  .comp-card .cic{width:44px;height:44px;border-radius:12px;background:rgba(0,255,194,.16);color:var(--c-aconomy-mint);display:grid;place-items:center;margin-bottom:14px}
  .comp-card .cic svg{width:22px;height:22px}
  .comp-card h3{color:#fff;font-size:1.05rem;font-weight:700;margin-bottom:6px}
  .comp-card p{color:rgba(255,255,255,.72);font-size:.9rem;margin:0}

  /* ===== Social proof ===== */
  .metrics{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:8px;max-width:760px;margin-left:auto;margin-right:auto}
  .metric{background:#fff;border:1px solid var(--gray-200);border-radius:var(--r-lg);padding:36px 32px;text-align:center;position:relative}
  .metric .big{font-size:clamp(2.6rem,5vw,3.4rem);font-weight:800;letter-spacing:-.03em;line-height:1;
    background:linear-gradient(120deg,var(--teal),var(--teal-2));-webkit-background-clip:text;background-clip:text;color:transparent}
  .metric .lbl{margin-top:12px;font-weight:600;color:var(--navy)}
  .metric .desc{margin-top:6px;font-size:.86rem;color:var(--slate)}
  .sample-note{margin-top:22px;text-align:center;font-size:.82rem;color:var(--slate);display:flex;align-items:center;justify-content:center;gap:8px}
  .sample-note svg{width:14px;height:14px;color:var(--slate)}

  /* ===== FAQ ===== */
  .faqs{max-width:820px;margin:44px auto 0;display:flex;flex-direction:column;gap:12px}
  details.faq{border:1px solid var(--gray-200);border-radius:var(--r);background:#fff;overflow:hidden}
  details.faq summary{cursor:pointer;list-style:none;padding:20px 24px;font-weight:700;color:var(--navy);font-size:1.02rem;
    display:flex;align-items:center;justify-content:space-between;gap:16px}
  details.faq summary::-webkit-details-marker{display:none}
  details.faq summary::after{content:"";width:11px;height:11px;flex:0 0 auto;border-right:2px solid var(--teal);border-bottom:2px solid var(--teal);
    transform:rotate(45deg);transition:.2s;margin-top:-4px}
  details.faq[open] summary::after{transform:rotate(225deg);margin-top:2px}
  details.faq p{margin:0;padding:0 24px 22px;color:var(--slate);font-size:.96rem;line-height:1.6}
  details.faq p b{color:var(--navy)}

  /* ===== CTA band ===== */
  .ctaband{position:relative;overflow:hidden;background:linear-gradient(135deg,var(--teal),var(--teal-dark));border-radius:var(--r-lg);
    padding:64px 48px;text-align:center;color:#fff}
  .ctaband::before{content:"";position:absolute;inset:0;opacity:.5;pointer-events:none;
    background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);
    background-size:40px 40px;-webkit-mask-image:radial-gradient(80% 100% at 50% 0%,#000,transparent 75%);mask-image:radial-gradient(80% 100% at 50% 0%,#000,transparent 75%)}
  .ctaband .inner{position:relative;z-index:1}
  .ctaband h2{color:#fff;font-size:clamp(2rem,4vw,3rem)}
  .ctaband p{color:rgba(255,255,255,.88);max-width:56ch;margin:16px auto 0;font-size:1.1rem}
  .ctaband .btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:32px}
  .btn-white{background:#fff;color:var(--teal-dark)}
  .btn-white:hover{transform:translateY(-2px);box-shadow:var(--shadow-lg)}
  .btn-outline-w{background:transparent;border:1.5px solid rgba(255,255,255,.55);color:#fff}
  .btn-outline-w:hover{border-color:#fff;background:rgba(255,255,255,.08)}

  /* ===== App preview (hero-adjacent product visual) ===== */
  .screens-slot{margin-top:56px}
  .app-preview{margin:0;border-radius:var(--r-lg);overflow:hidden;border:1px solid var(--gray-200);
    box-shadow:var(--shadow-lg);background:#fff}
  .ap-chrome{display:flex;align-items:center;gap:14px;padding:13px 20px;background:linear-gradient(180deg,#fbfdfc,#f4f7f6);border-bottom:1px solid var(--gray-200)}
  .ap-dots{display:inline-flex;gap:7px}
  .ap-dots i{width:11px;height:11px;border-radius:50%;background:var(--gray-200)}
  .ap-dots i:first-child{background:#ff5f57}.ap-dots i:nth-child(2){background:#febc2e}.ap-dots i:last-child{background:#28c840}
  .ap-url{display:inline-flex;align-items:center;gap:8px;font-size:.82rem;font-weight:600;color:var(--slate);
    background:#fff;border:1px solid var(--gray-200);border-radius:var(--r-pill);padding:6px 14px}
  .ap-url svg{width:13px;height:13px;color:var(--teal)}
  .ap-brand{margin-left:auto;display:inline-flex;align-items:center}
  .ap-brand img{height:30px;width:auto;display:block}

  /* Stage rail — reads as a real product pipeline across the top */
  .ap-stage{display:flex;align-items:center;gap:0;padding:16px 26px 4px;background:
    radial-gradient(70% 80% at 85% 0%,rgba(0,88,67,.05),transparent 60%),#fff}
  .ap-stage .st{display:flex;align-items:center;gap:10px}
  .ap-stage .st .sd{width:26px;height:26px;border-radius:50%;flex:0 0 auto;display:grid;place-items:center;
    font-size:.74rem;font-weight:800;background:var(--teal);color:#fff}
  .ap-stage .st.todo .sd{background:var(--teal-soft);color:var(--teal);border:1px solid var(--teal-line)}
  .ap-stage .st .sl{display:flex;flex-direction:column;line-height:1.15}
  .ap-stage .st .sl b{font-size:.82rem;font-weight:700;color:var(--navy)}
  .ap-stage .st .sl span{font-size:.68rem;color:var(--slate)}
  .ap-stage .sc-line{flex:1;height:2px;margin:0 12px;border-radius:2px;
    background:repeating-linear-gradient(90deg,var(--teal-line) 0 7px,transparent 7px 14px)}

  .ap-body{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;align-items:stretch;padding:20px 26px 26px;background:
    radial-gradient(60% 60% at 85% 0%,rgba(0,88,67,.05),transparent 60%),#fff}
  .ap-panel{position:relative;background:#fff;border:1px solid var(--gray-200);border-radius:var(--r);padding:18px;display:flex;flex-direction:column;gap:10px}
  .ap-panel.accent{background:linear-gradient(180deg,var(--teal-tint),#fff);border-color:var(--teal-line)}
  .ap-phead{display:flex;align-items:center;justify-content:space-between;gap:8px}
  .ap-tag{font-size:.64rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase;
    color:var(--slate);background:var(--bg);border:1px solid var(--gray-200);padding:4px 9px;border-radius:var(--r-pill)}
  .ap-tag.proof{color:var(--teal);background:var(--teal-soft);border-color:var(--teal-line)}
  .ap-step-no{font-size:.66rem;font-weight:800;color:var(--gray-300);letter-spacing:.04em}
  .ap-photo{height:96px;border-radius:10px;background:
    linear-gradient(135deg,#0a7057,#04352a);position:relative;overflow:hidden;display:grid;place-items:center}
  .ap-photo::after{content:"";position:absolute;inset:0;opacity:.5;
    background-image:linear-gradient(rgba(255,255,255,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.14) 1px,transparent 1px);background-size:22px 22px}
  .ap-photo .pin{position:relative;z-index:1;display:inline-flex;align-items:center;gap:6px;font-size:.68rem;font-weight:700;
    color:#eafff7;background:rgba(4,53,42,.5);border:1px solid rgba(255,255,255,.24);padding:5px 11px;border-radius:var(--r-pill)}
  .ap-photo .pin svg{width:12px;height:12px}
  .ap-panel h5{font-size:.94rem;font-weight:700;color:var(--navy);margin:2px 0 0;letter-spacing:-.01em}
  .ap-sub{font-size:.78rem;color:var(--slate);margin:0}
  .ap-row{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}
  .ap-chip{font-size:.68rem;font-weight:600;color:var(--ink-2);background:var(--bg);border:1px solid var(--gray-200);padding:3px 9px;border-radius:var(--r-pill)}
  .ap-cta-row{margin-top:auto;padding-top:4px}
  .ap-btn{display:inline-block;width:100%;text-align:center;font-size:.78rem;font-weight:700;color:#fff;background:var(--teal);border-radius:9px;padding:10px}
  /* verify panel — matched-height proof block so the row stays balanced */
  .ap-proofs{display:flex;flex-direction:column;gap:9px;background:#fff;border:1px solid var(--teal-line);
    border-radius:10px;padding:14px;min-height:96px;justify-content:center}
  .ap-proofline{display:flex;align-items:center;gap:9px;font-size:.8rem;color:var(--navy);font-weight:600}
  .ap-proofline.muted{color:var(--slate);font-weight:500}
  .ap-tick{width:18px;height:18px;border-radius:50%;background:var(--teal);color:#fff;display:grid;place-items:center;flex:0 0 auto}
  .ap-tick svg{width:10px;height:10px}
  .ap-lock{width:18px;height:18px;display:grid;place-items:center;color:var(--slate);flex:0 0 auto}
  .ap-lock svg{width:13px;height:13px}
  .ap-proofbadge{margin-top:auto;text-align:center;font-size:.76rem;font-weight:800;color:var(--teal);
    background:var(--teal-soft);border:1px dashed var(--teal-line);border-radius:9px;padding:9px}
  .ap-doc{height:96px;border-radius:10px;background:var(--bg);border:1px solid var(--gray-200);padding:14px;display:flex;flex-direction:column;justify-content:center;gap:9px}
  .ap-doc .dl{display:flex;align-items:center;gap:8px;font-size:.72rem;font-weight:700;color:var(--slate);margin-bottom:2px}
  .ap-doc .dl svg{width:13px;height:13px;color:var(--teal)}
  .ap-doc span{height:7px;border-radius:4px;background:var(--gray-200)}
  .ap-doc span.short{width:55%}
  .ap-signed{margin-top:auto;display:flex;align-items:center;gap:8px;font-size:.78rem;font-weight:700;color:var(--teal)}
  @media(max-width:760px){.ap-stage{flex-wrap:wrap;gap:12px}.ap-stage .sc-line{display:none}.ap-body{grid-template-columns:1fr;gap:14px}.ap-brand{display:none}}

  /* ===== See it in action (demo video) ===== */
  .see-cta-bottom{display:flex;justify-content:center;margin-top:30px}
  .demo-frame{margin:44px 0 0;border-radius:var(--r-lg);overflow:hidden;border:1px solid var(--gray-200);
    box-shadow:var(--shadow-lg);background:#fff}
  .demo-frame .df-chrome{display:flex;align-items:center;gap:14px;padding:12px 18px;
    background:linear-gradient(180deg,#fbfdfc,#f4f7f6);border-bottom:1px solid var(--gray-200)}
  .demo-frame .df-dots{display:inline-flex;gap:7px}
  .demo-frame .df-dots i{width:11px;height:11px;border-radius:50%;background:var(--gray-200)}
  .demo-frame .df-dots i:first-child{background:#ff5f57}.demo-frame .df-dots i:nth-child(2){background:#febc2e}.demo-frame .df-dots i:last-child{background:#28c840}
  .demo-frame .df-url{display:inline-flex;align-items:center;gap:8px;font-size:.82rem;font-weight:600;color:var(--slate);
    background:#fff;border:1px solid var(--gray-200);border-radius:var(--r-pill);padding:6px 14px}
  .demo-frame .df-url svg{width:13px;height:13px;color:var(--teal)}
  .demo-frame .df-live{margin-left:auto;display:inline-flex;align-items:center;gap:7px;font-size:.72rem;font-weight:700;
    letter-spacing:.06em;text-transform:uppercase;color:var(--teal)}
  .demo-frame .df-live .pulse{width:8px;height:8px;border-radius:50%;background:var(--teal);animation:pulse 2s infinite}
  .demo-frame img.df-gif,.demo-frame video.df-gif{display:block;width:100%;height:auto}
  .demo-cap{margin:14px 2px 0;font-size:.9rem;color:var(--slate);display:flex;align-items:center;gap:8px;flex-wrap:wrap}
  .demo-cap svg{width:15px;height:15px;color:var(--teal);flex:0 0 auto}
  .demo-cap b{color:var(--navy);font-weight:700}
  .demo-cap a{color:var(--teal);font-weight:700}

  /* ===== Footer (navy — matches site standard) ===== */
  .foot-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:40px;align-items:start}
  .footer .brandmark img{height:34px;width:auto;filter:none}
  .footer .fdesc{color:rgba(255,255,255,.66);max-width:40ch;margin-top:18px;font-size:.92rem;line-height:1.65}
  .fcol h4{font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:14px;font-weight:700}
  .fcol a{display:block;padding:6px 0;font-size:.94rem}
  /* Trust chip on navy — mint on translucent so it is clearly legible */
  .footer .vchip{background:rgba(0,255,194,.12);border:1px solid rgba(0,255,194,.34);color:#8ff3d9}
  .footer .vchip svg{color:var(--c-aconomy-mint)}
  .foot-bottom{margin-top:44px;padding-top:24px;border-top:1px solid rgba(255,255,255,.14);
    display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:rgba(255,255,255,.55);font-size:.85rem}
  .foot-bottom .disc{max-width:70ch}

  /* ===== Responsive ===== */
  @media(max-width:960px){
    .hero-grid{grid-template-columns:1fr;gap:40px}
    .feat-grid,.comp-grid,.party-grid{grid-template-columns:1fr 1fr}
    .life{grid-template-columns:1fr 1fr 1fr;row-gap:32px}
    .life::before{display:none}
    .proof-flow{grid-template-columns:1fr;gap:12px}
    .proof-arrow{transform:rotate(90deg)}
    .foot-grid{grid-template-columns:1fr 1fr}
  }
  @media(max-width:640px){
    .nav-cta .navlink{display:none}
    .hero{padding:48px 0 40px}
    .prob-wrap{grid-template-columns:1fr;gap:44px}
    .prob-vs{display:none}
    .feat-grid,.comp-grid,.party-grid,.metrics,.foot-grid{grid-template-columns:1fr}
    .life{grid-template-columns:1fr 1fr}
    .zk-foot{grid-template-columns:1fr}
    .compliance,.ctaband,.zk{padding:40px 24px}
    .pc-float{position:static;margin-top:14px}
    .foot-bottom{flex-direction:column}
  }
`;
