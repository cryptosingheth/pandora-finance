/* ------------------------------------------------------------------
   /vanna — the page's original inline <style> block, byte for byte.

   Copied verbatim out of vanna/index.html. It stays inline
   (String.raw, so CSS escapes like content:"\2014" survive) rather
   than becoming a CSS Module or a global sheet: these pages share
   generic selectors (.hero, .section, .pcard) that would collide the
   moment they were globalised, and preserving the block unchanged is
   what guarantees pixel-identity. Do not reformat, minify or tidy it.
   ------------------------------------------------------------------ */

export const pageCss = String.raw`
/* ============================================================
   VANNA PROTOCOL — risk & margin infrastructure
   Composable credit / margin layer: lending pools + isolated
   margin accounts + a risk engine, with an agentic management
   layer (Vanna MCPs) coming. Page-specific styles.
   Tokens (navy, slate, gray, radius, shadow, font) come from
   design-system.css. Product accent = deep violet / indigo.
   ============================================================ */
:root{
  --vanna:#6c5ce7;         /* deep violet — the Vanna accent */
  --vanna-deep:#4b3fca;    /* pressed / darker violet */
  --vanna-bright:#8f7bff;  /* lively accent for gradients */
  --vanna-ink:#120f2e;     /* deep indigo-black for dark sections */
  --lilac:#ece9ff;         /* pale violet wash */
  --edge:1px solid var(--gray-200);
  --mono:'Figtree', ui-monospace, monospace;
}

/* ---------- shared refinements ---------- */
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 clamp(20px,4vw,40px)}
.kicker{font-weight:700;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--vanna);
  display:inline-flex;align-items:center;gap:10px}
.kicker::before{content:"";width:22px;height:1.5px;background:var(--vanna);display:inline-block}
.kicker.on-dark{color:#b7a9ff}
.kicker.on-dark::before{background:#b7a9ff}

/* violet button variants (extend design-system .btn) */
.btn-vanna{background:var(--vanna);color:#fff}
.btn-vanna:hover{background:var(--vanna-deep);transform:translateY(-2px);box-shadow:0 12px 26px rgba(108,92,231,.30)}
.btn-outline{background:transparent;border:1.5px solid var(--gray-200);color:var(--navy)}
.btn-outline:hover{border-color:var(--vanna);color:var(--vanna-deep)}
.btn-light{background:#fff;color:var(--vanna-deep)}
.btn-light:hover{transform:translateY(-2px);box-shadow:var(--shadow-lg)}
/* the exact book-a-demo snippet uses .btn-glow — scope a violet glow to this page */
.btn-glow{background:var(--vanna);color:#fff;box-shadow:0 10px 26px rgba(108,92,231,.28)}
.btn-glow:hover{background:var(--vanna-deep);transform:translateY(-2px);box-shadow:0 16px 34px rgba(108,92,231,.34)}

/* ---------- NAV ---------- */
.nav-inner{gap:20px}
.brand{display:flex;align-items:center;gap:11px;font-weight:800;letter-spacing:-.03em;color:var(--navy)}
.brand .mark{width:36px;height:36px;border-radius:11px;flex:none;display:grid;place-items:center;color:#fff;
  background:linear-gradient(150deg,var(--vanna-bright),var(--vanna-deep));box-shadow:0 6px 16px rgba(108,92,231,.34)}
.brand .mark svg{width:20px;height:20px}
.brand .wm{font-size:1.18rem;line-height:1}
.brand .wm small{display:block;font-size:.6rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--slate)}
.nav-links{display:flex;align-items:center;gap:32px}
.navlink{position:relative}
.navlink::after{content:"";position:absolute;left:0;right:100%;bottom:-6px;height:1.5px;background:var(--vanna);transition:right .28s cubic-bezier(.2,.7,.2,1)}
.navlink:hover::after{right:0}
.nav-cta{display:flex;align-items:center;gap:12px}
.nav-toggle{display:none}
.backhub{display:inline-flex;align-items:center;gap:7px;color:var(--slate);font-weight:600;font-size:.9rem}
.backhub:hover{color:var(--navy)}
.backhub svg{transition:transform .25s}
.backhub:hover svg{transform:translateX(-3px)}

/* ---------- HERO ---------- */
.hero{position:relative;overflow:hidden;padding:clamp(66px,10vw,128px) 0 clamp(58px,8vw,104px)}
.hero::before{content:"";position:absolute;inset:0;z-index:-2;
  background:
    radial-gradient(1100px 620px at 82% -10%, rgba(143,123,255,.20), transparent 60%),
    radial-gradient(720px 520px at 2% 30%, rgba(108,92,231,.10), transparent 62%),
    linear-gradient(180deg,#f8f7ff 0%,var(--white) 48%)}
.hero::after{content:"";position:absolute;inset:0;z-index:-1;opacity:.55;
  background-image:linear-gradient(var(--gray-200) 1px,transparent 1px),linear-gradient(90deg,var(--gray-200) 1px,transparent 1px);
  background-size:60px 60px;
  -webkit-mask-image:radial-gradient(760px 520px at 82% 4%, #000 0%, transparent 72%);
          mask-image:radial-gradient(760px 520px at 82% 4%, #000 0%, transparent 72%)}
.hero-grid{display:grid;grid-template-columns:1.25fr .92fr;gap:clamp(30px,5vw,72px);align-items:center}
.hero h1{font-size:clamp(2.5rem,6vw,4.5rem);letter-spacing:-.035em;margin:22px 0 0}
.hero h1 .grad{background:linear-gradient(100deg,var(--vanna-deep),var(--vanna-bright) 94%);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero .lead{margin-top:24px;font-size:clamp(1.06rem,1.7vw,1.28rem);max-width:54ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:36px}
.hero-trust{display:flex;align-items:center;gap:22px;margin-top:40px;flex-wrap:wrap;color:var(--slate);font-size:.86rem;font-weight:600}
.hero-trust .ti{display:inline-flex;align-items:center;gap:8px}
.hero-trust .ti svg{color:var(--vanna);flex:none}
.hero-trust .sep{width:1px;height:20px;background:var(--gray-200)}

/* --- margin-account card visual --- */
.mc-stage{position:relative;min-height:380px;display:grid;place-items:center}
.mc-glow{position:absolute;width:78%;aspect-ratio:1;border-radius:50%;filter:blur(46px);opacity:.5;
  background:radial-gradient(circle,var(--vanna-bright),transparent 66%);z-index:-1}
.acct{width:min(100%,368px);background:#fff;border:var(--edge);border-radius:var(--r-lg);
  box-shadow:var(--shadow-lg);overflow:hidden;animation:mcfloat 7s ease-in-out infinite}
.acct-head{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;
  background:linear-gradient(120deg,var(--vanna-ink),var(--vanna-deep));color:#fff}
.acct-head .ab{display:flex;align-items:center;gap:10px}
.acct-head .ab .g{width:30px;height:30px;border-radius:8px;background:rgba(255,255,255,.16);display:grid;place-items:center}
.acct-head .ab .g svg{width:16px;height:16px}
.acct-head .at{font-weight:800;font-size:.98rem;line-height:1.1;letter-spacing:-.01em}
.acct-head .as{font-size:.68rem;opacity:.72;letter-spacing:.04em}
.acct-tag{display:inline-flex;align-items:center;gap:6px;font-size:.68rem;font-weight:800;letter-spacing:.03em;
  padding:6px 10px;border-radius:var(--r-pill);background:rgba(143,123,255,.22);color:#dcd4ff;
  border:1px solid rgba(143,123,255,.5)}
.acct-tag svg{width:13px;height:13px}
.acct-body{padding:20px}
.acct-rows{border-top:var(--edge)}
.acct-row{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:11px 0;border-bottom:var(--edge)}
.acct-row .k{font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--slate);font-weight:700}
.acct-row .v{font-size:.9rem;font-weight:800;color:var(--navy);text-align:right}
.acct-chiprow{display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-end}
.acct-chip{font-size:.68rem;font-weight:700;padding:3px 8px;border-radius:var(--r-pill);
  background:var(--lilac);color:var(--vanna-deep)}
/* health-factor meter */
.hf{margin-top:16px;padding-top:16px;border-top:var(--edge)}
.hf-top{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
.hf-lab{font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--slate);font-weight:700}
.hf-val{font-family:var(--mono);font-weight:800;font-size:1.15rem;color:var(--vanna-deep);letter-spacing:-.01em}
.hf-bar{position:relative;height:8px;border-radius:var(--r-pill);margin-top:9px;overflow:hidden;
  background:linear-gradient(90deg,#f0a5b8 0%,#f2d08a 34%,#9be0b0 62%,#8f7bff 100%)}
.hf-marker{position:absolute;top:-3px;bottom:-3px;width:3px;border-radius:2px;background:var(--navy);left:78%;
  box-shadow:0 0 0 3px rgba(255,255,255,.85)}
.hf-scale{display:flex;justify-content:space-between;margin-top:6px;font-family:var(--mono);font-size:.62rem;color:var(--slate)}
.acct-foot{display:flex;align-items:center;gap:11px;padding:14px 20px;border-top:var(--edge);background:#fbfaff}
.acct-foot .ic{width:34px;height:34px;border-radius:9px;flex:none;display:grid;place-items:center;color:#fff;
  background:linear-gradient(150deg,var(--vanna-bright),var(--vanna-deep))}
.acct-foot .ic svg{width:18px;height:18px}
.acct-foot .ft{font-weight:800;font-size:.82rem;letter-spacing:-.01em}
.acct-foot .fs{font-size:.68rem;color:var(--slate)}
/* floating agent tag */
.agent-tag{position:absolute;right:-6px;bottom:20px;background:#fff;border:var(--edge);border-radius:var(--r);
  box-shadow:var(--shadow);padding:10px 14px;display:flex;align-items:center;gap:10px;
  animation:mcfloat 6s ease-in-out .8s infinite}
.agent-tag .ic{width:34px;height:34px;border-radius:9px;flex:none;display:grid;place-items:center;color:#fff;
  background:linear-gradient(150deg,var(--vanna-bright),var(--vanna-deep))}
.agent-tag .ic svg{width:18px;height:18px}
.agent-tag .st{font-weight:800;font-size:.82rem;letter-spacing:-.01em}
.agent-tag .ss{font-size:.68rem;color:var(--slate)}
.agent-tag .soon{font-size:.56rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--vanna-deep);
  background:var(--lilac);border-radius:var(--r-pill);padding:2px 7px;margin-left:2px}
@keyframes mcfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-11px)}}

/* ---------- THESIS STRIP (dark) ---------- */
.thesis{background:linear-gradient(150deg,var(--vanna-ink),#1c1740);color:#fff;position:relative;overflow:hidden}
.thesis::before{content:"";position:absolute;inset:0;opacity:.55;
  background:radial-gradient(680px 420px at 90% -10%, rgba(143,123,255,.32), transparent 60%),
            radial-gradient(560px 400px at 0% 110%, rgba(108,92,231,.24), transparent 62%)}
.thesis .wrap{position:relative;display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(32px,5vw,72px);align-items:center}
.thesis h2{color:#fff;max-width:18ch}
.thesis .th-lead{font-size:clamp(1.08rem,1.6vw,1.32rem);color:rgba(255,255,255,.86);line-height:1.6;max-width:48ch;margin-top:18px}
.thesis .th-note{margin-top:20px;color:rgba(255,255,255,.62);max-width:50ch;font-size:.98rem}
.th-badge{display:inline-flex;align-items:center;gap:9px;padding:8px 14px;border-radius:var(--r-pill);
  background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:#fff;font-weight:700;font-size:.82rem}
.th-badge .dot{width:8px;height:8px;border-radius:50%;background:#b7a9ff;box-shadow:0 0 0 4px rgba(183,169,255,.25)}
.th-panel{border:1px solid rgba(255,255,255,.16);border-radius:var(--r-lg);padding:8px;
  background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.02))}
.th-list{list-style:none;margin:0;padding:0}
.th-list li{display:grid;grid-template-columns:44px 1fr;gap:16px;padding:16px 18px;align-items:start}
.th-list li+li{border-top:1px solid rgba(255,255,255,.1)}
.th-list .ti{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;color:#dcd4ff;
  background:rgba(143,123,255,.16);border:1px solid rgba(143,123,255,.3)}
.th-list .ti svg{width:22px;height:22px}
.th-list .tx strong{display:block;color:#fff;font-weight:700;font-size:1rem;margin-bottom:2px}
.th-list .tx span{color:rgba(255,255,255,.6);font-size:.9rem;line-height:1.5}

/* ---------- SECTION HEADS ---------- */
.sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:52px}
.sec-head h2{max-width:20ch;margin-top:16px}
.sec-head p{margin:0;max-width:40ch}

/* ---------- HOW IT WORKS ---------- */
#how{background:linear-gradient(180deg,var(--bg),#fff)}
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;counter-reset:step}
.step{position:relative;background:#fff;border:var(--edge);border-radius:var(--r-lg);padding:32px 26px 28px;
  overflow:hidden;transition:transform .3s cubic-bezier(.2,.7,.2,1),box-shadow .3s,border-color .3s}
.step:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:transparent}
.step::before{counter-increment:step;content:"0" counter(step);position:absolute;top:20px;right:22px;
  font-family:var(--mono);font-weight:800;font-size:1.05rem;color:var(--vanna);opacity:.34;letter-spacing:.04em}
.step .ic{width:50px;height:50px;border-radius:14px;display:grid;place-items:center;margin-bottom:20px;
  background:var(--lilac);color:var(--vanna-deep);border:1px solid rgba(108,92,231,.2)}
.step .ic svg{width:25px;height:25px}
.step h3{font-size:1.16rem;letter-spacing:-.02em}
.step p{color:var(--slate);margin:10px 0 0;font-size:.94rem;line-height:1.55}
.step-flow{display:flex;align-items:center;gap:9px;margin-top:16px;color:var(--vanna-deep);font-weight:700;font-size:.8rem}
.step-flow svg{width:15px;height:15px}

/* ---------- RISK ENGINE (feature grid) ---------- */
.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.feat{position:relative;background:#fff;border:var(--edge);border-radius:var(--r-lg);padding:28px 26px;
  transition:transform .28s cubic-bezier(.2,.7,.2,1),box-shadow .28s,border-color .28s}
.feat:hover{transform:translateY(-5px);box-shadow:var(--shadow);border-color:color-mix(in srgb,var(--vanna) 30%,transparent)}
.feat .fi{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;margin-bottom:16px;
  background:color-mix(in srgb,var(--vanna) 12%,#fff);color:var(--vanna-deep);border:1px solid color-mix(in srgb,var(--vanna) 22%,transparent)}
.feat .fi svg{width:22px;height:22px}
.feat h3{font-size:1.08rem;letter-spacing:-.015em}
.feat p{color:var(--slate);font-size:.92rem;margin:8px 0 0;line-height:1.55}
.feat .ftag{position:absolute;top:24px;right:24px;font-family:var(--mono);font-size:.64rem;font-weight:700;
  letter-spacing:.1em;text-transform:uppercase;color:var(--vanna);opacity:.7}

/* ---------- AGENTS ON VANNA (dark two-panel) ---------- */
#agents{background:linear-gradient(165deg,var(--vanna-ink),#1a1538);color:#fff;position:relative;overflow:hidden}
#agents::before{content:"";position:absolute;inset:0;opacity:.5;
  background:radial-gradient(640px 440px at 88% -10%, rgba(143,123,255,.3), transparent 60%),
            radial-gradient(560px 420px at 4% 116%, rgba(108,92,231,.24), transparent 62%)}
#agents .wrap{position:relative}
#agents .sec-head h2{color:#fff}
#agents .sec-head p{color:rgba(255,255,255,.66)}
.ag-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:26px;align-items:stretch}
.ag-card{border:1px solid rgba(255,255,255,.16);border-radius:var(--r-lg);
  padding:clamp(28px,3.4vw,40px);background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))}
.ag-eyebrow{display:inline-flex;align-items:center;gap:9px;font-weight:800;font-size:.74rem;letter-spacing:.14em;
  text-transform:uppercase;margin-bottom:14px;color:#b7a9ff}
.ag-card h3{font-size:1.5rem;letter-spacing:-.02em;margin:6px 0 8px;color:#fff}
.ag-card .ag-sub{font-size:.98rem;color:rgba(255,255,255,.72);margin-bottom:22px;line-height:1.6}
.ag-list{list-style:none;margin:0;padding:0}
.ag-list li{display:flex;gap:12px;padding:12px 0;font-size:.98rem;line-height:1.5;color:rgba(255,255,255,.82)}
.ag-list li+li{border-top:1px solid rgba(255,255,255,.12)}
.ag-list .ck{width:22px;height:22px;border-radius:50%;flex:none;display:grid;place-items:center;margin-top:1px;
  background:rgba(143,123,255,.24);color:#dcd4ff}
.ag-list .ck svg{width:13px;height:13px}
.ag-list b{font-weight:700;color:#fff}
.ag-soon{display:inline-flex;align-items:center;gap:8px;margin-top:26px;font-size:.82rem;font-weight:700;color:#b7a9ff;
  padding:8px 14px;border-radius:var(--r-pill);background:rgba(143,123,255,.12);border:1px solid rgba(143,123,255,.3)}
.ag-soon .dot{width:7px;height:7px;border-radius:50%;background:#b7a9ff}
/* right visual: mcp loop */
.ag-loop{display:flex;flex-direction:column;justify-content:center;gap:14px}
.loop-node{display:flex;align-items:center;gap:16px;border:1px solid rgba(255,255,255,.14);border-radius:var(--r);
  padding:18px 20px;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.015))}
.loop-node .ln-ic{width:46px;height:46px;border-radius:12px;flex:none;display:grid;place-items:center;color:#dcd4ff;
  background:rgba(143,123,255,.18);border:1px solid rgba(143,123,255,.32)}
.loop-node .ln-ic svg{width:23px;height:23px}
.loop-node .ln-t{font-weight:800;font-size:1rem;color:#fff;letter-spacing:-.01em}
.loop-node .ln-s{font-size:.86rem;color:rgba(255,255,255,.6);margin-top:2px;line-height:1.45}
.loop-arrow{display:grid;place-items:center;color:rgba(183,169,255,.6)}
.loop-arrow svg{width:20px;height:20px}

/* ---------- TRUST & VERIFICATION ---------- */
#trust{background:linear-gradient(180deg,#fff,var(--bg))}
.doc-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.doc{position:relative;display:flex;flex-direction:column;gap:16px;border:var(--edge);border-radius:var(--r-lg);
  padding:clamp(26px,3vw,34px);background:#fff;box-shadow:var(--shadow);
  transition:transform .28s cubic-bezier(.2,.7,.2,1),box-shadow .28s,border-color .28s}
.doc:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg);border-color:color-mix(in srgb,var(--vanna) 30%,transparent)}
.doc .doc-top{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}
.doc .doc-ic{width:50px;height:50px;border-radius:13px;flex:none;display:grid;place-items:center;
  background:color-mix(in srgb,var(--vanna) 12%,#fff);color:var(--vanna-deep);border:1px solid color-mix(in srgb,var(--vanna) 22%,transparent)}
.doc .doc-ic svg{width:24px;height:24px}
.doc .doc-kind{font-family:var(--mono);font-size:.64rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
  color:var(--vanna);opacity:.85}
.doc h3{font-size:1.24rem;letter-spacing:-.02em;margin:2px 0 0}
.doc p{color:var(--slate);font-size:.95rem;margin:0;line-height:1.55}
.doc .dl{margin-top:auto;display:inline-flex;align-items:center;gap:9px;font-weight:700;font-size:.94rem;color:var(--vanna-deep)}
.doc .dl svg{width:17px;height:17px;transition:transform .25s}
.doc:hover .dl svg{transform:translateY(2px)}
.trust-note{margin-top:26px;color:var(--slate);font-size:.9rem;max-width:70ch}

/* ---------- FAQ ---------- */
#faq{background:var(--white)}
.faq-wrap{max-width:820px;margin:0 auto}
.faq{border:var(--edge);border-radius:var(--r);background:#fff;margin-bottom:14px;overflow:hidden;transition:border-color .2s}
.faq[open]{border-color:color-mix(in srgb,var(--vanna) 34%,transparent);box-shadow:var(--shadow)}
.faq summary{list-style:none;cursor:pointer;padding:22px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;
  font-weight:700;font-size:1.06rem;letter-spacing:-.01em;color:var(--navy)}
.faq summary::-webkit-details-marker{display:none}
.faq summary .chev{width:22px;height:22px;flex:none;color:var(--vanna);transition:transform .25s}
.faq[open] summary .chev{transform:rotate(180deg)}
.faq p{padding:0 24px 22px;margin:0;color:var(--slate);font-size:.98rem;line-height:1.65;max-width:66ch}

/* ---------- CTA BAND ---------- */
.cta{position:relative;overflow:hidden;background:linear-gradient(130deg,var(--vanna-deep),var(--vanna-ink));color:#fff}
.cta::before{content:"";position:absolute;inset:0;opacity:.6;
  background:radial-gradient(620px 420px at 12% -20%, rgba(143,123,255,.4), transparent 60%),
            radial-gradient(560px 420px at 100% 120%, rgba(255,255,255,.08), transparent 60%)}
.cta::after{content:"";position:absolute;inset:0;opacity:.3;
  background-image:linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px);
  background-size:56px 56px;
  -webkit-mask-image:radial-gradient(600px 300px at 80% 100%, #000, transparent 72%);
          mask-image:radial-gradient(600px 300px at 80% 100%, #000, transparent 72%)}
.cta .wrap{position:relative;text-align:center;max-width:820px}
.cta h2{color:#fff;font-size:clamp(2rem,4vw,3rem)}
.cta p{color:rgba(255,255,255,.82);font-size:clamp(1.05rem,1.6vw,1.25rem);max-width:54ch;margin:18px auto 0}
.cta-cta{display:flex;justify-content:center;flex-wrap:wrap;gap:14px;margin-top:34px}

/* ---------- FOOTER ---------- */
.footer{padding-top:70px}
.foot-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:40px;padding-bottom:48px}
.foot-brand .brand{color:#fff;margin-bottom:18px}
.foot-brand .brand .wm small{color:rgba(255,255,255,.55)}
.foot-brand p{color:rgba(255,255,255,.6);max-width:40ch;font-size:.96rem}
.foot-col h4{font-size:.76rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:16px;font-weight:700}
.foot-col a{display:block;padding:7px 0;font-size:.98rem}
.foot-col span.static{display:block;padding:7px 0;font-size:.98rem;color:rgba(255,255,255,.7)}
.foot-bar{border-top:1px solid rgba(255,255,255,.12);padding:24px 0;display:flex;justify-content:space-between;
  align-items:center;gap:16px;flex-wrap:wrap;color:rgba(255,255,255,.55);font-size:.9rem}
.foot-bar .made{display:inline-flex;align-items:center;gap:8px}
.foot-bar .made svg{color:#b7a9ff}

/* ---------- RESPONSIVE ---------- */
@media(max-width:1040px){
  .steps{grid-template-columns:1fr 1fr}
  .feat-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:960px){
  .hero-grid,.thesis .wrap,.ag-grid{grid-template-columns:1fr}
  .mc-stage{order:-1;min-height:0;margin-bottom:6px}
  .doc-grid{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr 1fr}
  .sec-head{flex-direction:column;align-items:flex-start}
}
@media(max-width:640px){
  .nav-links,.nav-cta .btn-outline{display:none}
  .nav-toggle{display:inline-flex}
  .steps,.feat-grid{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr}
  .th-list li{grid-template-columns:40px 1fr;gap:12px;padding:14px 14px}
}
@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important}
  .reveal{opacity:1;transform:none}
}
`;
