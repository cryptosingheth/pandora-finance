/* ------------------------------------------------------------------
   dpp/index.html's inline <style> block, copied byte-for-byte.
   String.raw keeps CSS backslash escapes intact. Do NOT reformat,
   minify, dedupe or "tidy" this — pixel-identity depends on it.
   ------------------------------------------------------------------ */

export const pageCss = String.raw`
/* ============================================================
   THE DPP COMPANY — agentic product intelligence
   AI verification agent that authenticates, traces, verifies
   and passports physical products. page-specific styles.
   Tokens (navy, slate, gray, radius, shadow, font) come from
   design-system.css. Product accent = the real DPP violet
   (#6941C6, primary-600 from the product's own design system).
   ============================================================ */
:root{
  --dpp:#6941C6;           /* primary-600 — the real DPP brand violet */
  --dpp-deep:#5a2db8;      /* primary-700 — pressed / darker violet */
  --dpp-bright:#8b5cf6;    /* accent violet — lively accent for gradients */
  --dpp-ink:#271454;       /* primary-950 — deep violet-black for dark sections */
  --dpp-deepest:#1c0f3a;   /* even deeper violet-black to pair in gradients */
  --leaf:#f4f1ff;          /* primary-50 — pale violet wash */
  --leaf-200:#ebe5ff;      /* primary-100/200 — slightly deeper wash */
  --violet-soft:#c4b5fd;   /* accent-300 — soft tint for on-dark accents */
  --edge:1px solid var(--gray-200);
  --mono:'Figtree', ui-monospace, monospace;
}

/* ---------- shared refinements ---------- */
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 clamp(20px,4vw,40px)}
.kicker{font-weight:700;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--dpp);
  display:inline-flex;align-items:center;gap:10px}
.kicker::before{content:"";width:22px;height:1.5px;background:var(--dpp);display:inline-block}
.kicker.on-dark{color:var(--violet-soft)}
.kicker.on-dark::before{background:var(--violet-soft)}

/* violet button variants (extend design-system .btn) */
.btn-dpp{background:var(--dpp);color:#fff}
.btn-dpp:hover{background:var(--dpp-deep);transform:translateY(-2px);box-shadow:0 12px 26px rgba(105,65,198,.30)}
.btn-outline{background:transparent;border:1.5px solid var(--gray-200);color:var(--navy)}
.btn-outline:hover{border-color:var(--dpp);color:var(--dpp-deep)}
.btn-light{background:#fff;color:var(--dpp-deep)}
.btn-light:hover{transform:translateY(-2px);box-shadow:var(--shadow-lg)}
.btn-glow{background:linear-gradient(120deg,var(--dpp-bright),var(--dpp-deep));color:#fff;
  box-shadow:0 10px 26px rgba(139,92,246,.38)}
.btn-glow:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(139,92,246,.50)}

/* ---------- NAV ---------- */
.nav-inner{gap:20px}
.brand{display:flex;align-items:center;gap:11px;font-weight:800;letter-spacing:-.03em;color:var(--navy)}
.brand .brand-logo{height:34px;width:auto;display:block}
.brand .mark{width:36px;height:36px;border-radius:11px;flex:none;display:grid;place-items:center;color:#fff;
  background:linear-gradient(150deg,var(--dpp-bright),var(--dpp-deep));box-shadow:0 6px 16px rgba(105,65,198,.34)}
.brand .mark svg{width:19px;height:19px}
.brand .wm{font-size:1.18rem;line-height:1}
.brand .wm small{display:block;font-size:.6rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--slate)}
.nav-links{display:flex;align-items:center;gap:28px}
.navlink{position:relative;white-space:nowrap}
.navlink::after{content:"";position:absolute;left:0;right:100%;bottom:-6px;height:1.5px;background:var(--dpp);transition:right .28s cubic-bezier(.2,.7,.2,1)}
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
    radial-gradient(1100px 620px at 82% -10%, rgba(139,92,246,.20), transparent 60%),
    radial-gradient(720px 520px at 2% 30%, rgba(105,65,198,.10), transparent 62%),
    linear-gradient(180deg,#faf8ff 0%,var(--white) 48%)}
.hero::after{content:"";position:absolute;inset:0;z-index:-1;opacity:.55;
  background-image:linear-gradient(var(--gray-200) 1px,transparent 1px),linear-gradient(90deg,var(--gray-200) 1px,transparent 1px);
  background-size:60px 60px;
  -webkit-mask-image:radial-gradient(760px 520px at 82% 4%, #000 0%, transparent 72%);
          mask-image:radial-gradient(760px 520px at 82% 4%, #000 0%, transparent 72%)}
.hero-grid{display:grid;grid-template-columns:1.25fr .9fr;gap:clamp(30px,5vw,72px);align-items:center}
.hero h1{font-size:clamp(2.5rem,6vw,4.6rem);letter-spacing:-.035em;margin:22px 0 0}
.hero h1 .grad{background:linear-gradient(100deg,var(--dpp-deep),var(--dpp-bright) 94%);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero .lead{margin-top:24px;font-size:clamp(1.06rem,1.7vw,1.28rem);max-width:52ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:36px}
.hero-trust{display:flex;align-items:center;gap:22px;margin-top:40px;flex-wrap:wrap;color:var(--slate);font-size:.86rem;font-weight:600}
.hero-trust .ti{display:inline-flex;align-items:center;gap:8px}
.hero-trust .ti svg{color:var(--dpp);flex:none}
.hero-trust .sep{width:1px;height:20px;background:var(--gray-200)}

/* --- passport card visual --- */
.pp-stage{position:relative;min-height:380px;display:grid;place-items:center}
.pp-glow{position:absolute;width:78%;aspect-ratio:1;border-radius:50%;filter:blur(46px);opacity:.45;
  background:radial-gradient(circle,var(--dpp-bright),transparent 66%);z-index:-1}
.passport{width:min(100%,360px);background:#fff;border:var(--edge);border-radius:var(--r-lg);
  box-shadow:var(--shadow-lg);overflow:hidden;animation:ppfloat 7s ease-in-out infinite}
.pp-head{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;
  background:linear-gradient(120deg,var(--dpp-ink),var(--dpp-deep));color:#fff}
.pp-head .pp-brand{display:flex;align-items:center;gap:10px}
.pp-head .pp-brand .g{width:30px;height:30px;border-radius:8px;background:rgba(255,255,255,.16);display:grid;place-items:center}
.pp-head .pp-brand .g svg{width:16px;height:16px}
.pp-head .pp-t{font-weight:800;font-size:.98rem;line-height:1.1;letter-spacing:-.01em}
.pp-head .pp-s{font-size:.68rem;opacity:.72;letter-spacing:.04em}
.pp-verif{display:inline-flex;align-items:center;gap:6px;font-size:.68rem;font-weight:800;letter-spacing:.03em;
  padding:6px 10px;border-radius:var(--r-pill);background:rgba(139,92,246,.26);color:#ede9fe;
  border:1px solid rgba(139,92,246,.55)}
.pp-verif svg{width:13px;height:13px}
.pp-body{padding:20px}
.pp-prod{font-size:1.16rem;font-weight:800;letter-spacing:-.02em;line-height:1.15}
.pp-meta{font-size:.78rem;color:var(--slate);margin-top:3px}
.pp-rows{margin:18px 0 4px;border-top:var(--edge)}
.pp-row{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:11px 0;border-bottom:var(--edge)}
.pp-row .k{font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--slate);font-weight:700}
.pp-row .v{font-size:.86rem;font-weight:700;color:var(--navy);text-align:right}
.pp-chiprow{display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-end}
.pp-chip{font-size:.68rem;font-weight:700;padding:3px 8px;border-radius:var(--r-pill);
  background:var(--leaf);color:var(--dpp-deep)}
.pp-foot{display:flex;align-items:center;gap:12px;padding:14px 20px;border-top:var(--edge);background:#fcfbff}
.pp-qr{width:52px;height:52px;border-radius:10px;flex:none;padding:5px;background:#fff;border:var(--edge)}
.pp-anchor .a1{font-size:.72rem;font-weight:800;color:var(--navy);display:flex;align-items:center;gap:6px}
.pp-anchor .a1 svg{width:13px;height:13px;color:var(--dpp)}
.pp-anchor .a2{font-family:var(--mono);font-size:.66rem;color:var(--slate);margin-top:2px;letter-spacing:.02em}
/* floating scan tag */
.scan-tag{position:absolute;right:-6px;bottom:22px;background:#fff;border:var(--edge);border-radius:var(--r);
  box-shadow:var(--shadow);padding:10px 14px;display:flex;align-items:center;gap:10px;
  animation:ppfloat 6s ease-in-out .8s infinite}
.scan-tag .ic{width:34px;height:34px;border-radius:9px;flex:none;display:grid;place-items:center;color:#fff;
  background:linear-gradient(150deg,var(--dpp-bright),var(--dpp-deep))}
.scan-tag .ic svg{width:18px;height:18px}
.scan-tag .st{font-weight:800;font-size:.82rem;letter-spacing:-.01em}
.scan-tag .ss{font-size:.68rem;color:var(--slate)}
@keyframes ppfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-11px)}}

/* ---------- WHY NOW (regulation strip) ---------- */
.whynow{background:linear-gradient(150deg,var(--dpp-ink),var(--dpp-deepest));color:#fff;position:relative;overflow:hidden}
.whynow::before{content:"";position:absolute;inset:0;opacity:.6;
  background:radial-gradient(680px 420px at 90% -10%, rgba(139,92,246,.32), transparent 60%),
            radial-gradient(560px 400px at 0% 110%, rgba(105,65,198,.24), transparent 62%)}
.whynow .wrap{position:relative;display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(32px,5vw,72px);align-items:center}
.whynow h2{color:#fff;max-width:18ch}
.whynow .eu-lead{font-size:clamp(1.08rem,1.6vw,1.32rem);color:rgba(255,255,255,.86);line-height:1.6;max-width:48ch;margin-top:18px}
.whynow .eu-note{margin-top:20px;color:rgba(255,255,255,.62);max-width:50ch;font-size:.98rem}
.eu-badge{display:inline-flex;align-items:center;gap:9px;padding:8px 14px;border-radius:var(--r-pill);
  background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:#fff;font-weight:700;font-size:.82rem}
.eu-badge .stars{color:#ffd34d}
.eu-panel{border:1px solid rgba(255,255,255,.16);border-radius:var(--r-lg);padding:8px;
  background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.02))}
.eu-list{list-style:none;margin:0;padding:0}
.eu-list li{display:grid;grid-template-columns:64px 1fr;gap:16px;padding:16px 18px;align-items:start}
.eu-list li+li{border-top:1px solid rgba(255,255,255,.1)}
.eu-list .yr{font-family:var(--mono);font-weight:800;font-size:.92rem;color:var(--violet-soft)}
.eu-list .ev strong{display:block;color:#fff;font-weight:700;font-size:1rem;margin-bottom:2px}
.eu-list .ev span{color:rgba(255,255,255,.6);font-size:.9rem}

/* ---------- SECTION HEADS ---------- */
.sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:52px}
.sec-head h2{max-width:20ch;margin-top:16px}
.sec-head p{margin:0;max-width:40ch}

/* ---------- HOW IT WORKS ---------- */
#how{background:linear-gradient(180deg,var(--bg),#fff)}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;counter-reset:step}
.step{position:relative;background:#fff;border:var(--edge);border-radius:var(--r-lg);padding:34px 30px 30px;
  overflow:hidden;transition:transform .3s cubic-bezier(.2,.7,.2,1),box-shadow .3s,border-color .3s}
.step:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:transparent}
.step::before{counter-increment:step;content:"0" counter(step);position:absolute;top:20px;right:24px;
  font-family:var(--mono);font-weight:800;font-size:1.05rem;color:var(--dpp);opacity:.32;letter-spacing:.04em}
.step .ic{width:52px;height:52px;border-radius:14px;display:grid;place-items:center;margin-bottom:20px;
  background:var(--leaf);color:var(--dpp-deep);border:1px solid rgba(105,65,198,.2)}
.step .ic svg{width:26px;height:26px}
.step h3{font-size:1.24rem;letter-spacing:-.02em}
.step p{color:var(--slate);margin:10px 0 0;font-size:.98rem}
.step-flow{display:flex;align-items:center;gap:10px;margin-top:16px;color:var(--dpp-deep);font-weight:700;font-size:.82rem}
.step-flow svg{width:16px;height:16px}

/* ---------- FEATURE GRID ---------- */
.feat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.feat{position:relative;background:#fff;border:var(--edge);border-radius:var(--r-lg);padding:26px 24px;
  transition:transform .28s cubic-bezier(.2,.7,.2,1),box-shadow .28s,border-color .28s}
.feat:hover{transform:translateY(-5px);box-shadow:var(--shadow);border-color:color-mix(in srgb,var(--dpp) 30%,transparent)}
.feat .fi{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;margin-bottom:16px;
  background:color-mix(in srgb,var(--dpp) 12%,#fff);color:var(--dpp-deep);border:1px solid color-mix(in srgb,var(--dpp) 22%,transparent)}
.feat .fi svg{width:22px;height:22px}
.feat h3{font-size:1.06rem;letter-spacing:-.015em}
.feat p{color:var(--slate);font-size:.9rem;margin:8px 0 0;line-height:1.55}
.feat .ftag{position:absolute;top:22px;right:22px;font-family:var(--mono);font-size:.64rem;font-weight:700;
  letter-spacing:.1em;text-transform:uppercase;color:var(--dpp);opacity:.7}

/* ---------- BUILT FOR (two-column) ---------- */
#builtfor{background:linear-gradient(180deg,#fff,var(--bg))}
.bf-grid{display:grid;grid-template-columns:1fr 1fr;gap:26px}
.bf-card{border:var(--edge);border-radius:var(--r-lg);padding:clamp(28px,3.4vw,40px);background:#fff;position:relative;overflow:hidden}
.bf-card.for-brands{background:linear-gradient(165deg,#fff,var(--leaf))}
.bf-card.for-buyers{background:linear-gradient(165deg,var(--dpp-ink),var(--dpp-deepest));color:#fff}
.bf-eyebrow{display:inline-flex;align-items:center;gap:9px;font-weight:800;font-size:.74rem;letter-spacing:.14em;
  text-transform:uppercase;margin-bottom:14px}
.bf-card.for-brands .bf-eyebrow{color:var(--dpp-deep)}
.bf-card.for-buyers .bf-eyebrow{color:var(--violet-soft)}
.bf-card .bf-ic{width:46px;height:46px;border-radius:12px;display:grid;place-items:center}
.bf-card.for-brands .bf-ic{background:var(--dpp);color:#fff}
.bf-card.for-buyers .bf-ic{background:rgba(255,255,255,.14);color:#fff}
.bf-card h3{font-size:1.5rem;letter-spacing:-.02em;margin:14px 0 6px}
.bf-card.for-buyers h3{color:#fff}
.bf-card .bf-sub{font-size:.95rem;margin-bottom:22px}
.bf-card.for-brands .bf-sub{color:var(--slate)}
.bf-card.for-buyers .bf-sub{color:rgba(255,255,255,.72)}
.bf-list{list-style:none;margin:0;padding:0}
.bf-list li{display:flex;gap:12px;padding:11px 0;font-size:.98rem;line-height:1.5}
.bf-list li+li{border-top:var(--edge)}
.bf-card.for-buyers .bf-list li+li{border-top:1px solid rgba(255,255,255,.12)}
.bf-list .ck{width:22px;height:22px;border-radius:50%;flex:none;display:grid;place-items:center;margin-top:1px}
.bf-card.for-brands .ck{background:var(--leaf);color:var(--dpp-deep)}
.bf-card.for-buyers .ck{background:rgba(139,92,246,.28);color:#ede9fe}
.bf-list .ck svg{width:13px;height:13px}
.bf-list b{font-weight:700}
.bf-card.for-brands .bf-list b{color:var(--navy)}
.bf-card.for-buyers .bf-list b{color:#fff}
.bf-card.for-buyers .bf-list li{color:rgba(255,255,255,.82)}

/* ---------- WHY AN AGENT (vs dashboard) ---------- */
#whyagent{background:var(--white)}
.wa-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:clamp(24px,3vw,40px);align-items:stretch}
.wa-col{border:var(--edge);border-radius:var(--r-lg);padding:clamp(26px,3vw,38px);position:relative;overflow:hidden}
.wa-col.them{background:#fff}
.wa-col.us{background:linear-gradient(165deg,var(--dpp-ink),var(--dpp-deepest));color:#fff;border-color:transparent}
.wa-tag{display:inline-flex;align-items:center;gap:8px;font-weight:800;font-size:.72rem;letter-spacing:.14em;
  text-transform:uppercase;margin-bottom:14px}
.wa-col.them .wa-tag{color:var(--slate)}
.wa-col.us .wa-tag{color:var(--violet-soft)}
.wa-col h3{font-size:1.32rem;letter-spacing:-.02em;margin-bottom:6px}
.wa-col.us h3{color:#fff}
.wa-col .wa-sub{font-size:.94rem;margin-bottom:20px}
.wa-col.them .wa-sub{color:var(--slate)}
.wa-col.us .wa-sub{color:rgba(255,255,255,.72)}
.wa-list{list-style:none;margin:0;padding:0}
.wa-list li{display:flex;gap:12px;padding:12px 0;font-size:.96rem;line-height:1.5}
.wa-list li+li{border-top:var(--edge)}
.wa-col.us .wa-list li+li{border-top:1px solid rgba(255,255,255,.12)}
.wa-col.us .wa-list li{color:rgba(255,255,255,.84)}
.wa-mark{width:20px;height:20px;border-radius:50%;flex:none;display:grid;place-items:center;margin-top:1px}
.wa-mark svg{width:12px;height:12px}
.wa-col.them .wa-mark{background:var(--gray-200);color:var(--slate)}
.wa-col.us .wa-mark{background:rgba(139,92,246,.28);color:#ede9fe}
.wa-kicker-line{max-width:52ch}

/* ---------- CTA BAND ---------- */
.cta{position:relative;overflow:hidden;background:linear-gradient(130deg,var(--dpp-deep),var(--dpp-ink));color:#fff}
.cta::before{content:"";position:absolute;inset:0;opacity:.6;
  background:radial-gradient(620px 420px at 12% -20%, rgba(139,92,246,.42), transparent 60%),
            radial-gradient(560px 420px at 100% 120%, rgba(255,255,255,.08), transparent 60%)}
.cta::after{content:"";position:absolute;inset:0;opacity:.3;
  background-image:linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px);
  background-size:56px 56px;
  -webkit-mask-image:radial-gradient(600px 300px at 80% 100%, #000, transparent 72%);
          mask-image:radial-gradient(600px 300px at 80% 100%, #000, transparent 72%)}
.cta .wrap{position:relative;text-align:center;max-width:820px}
.cta h2{color:#fff;font-size:clamp(2rem,4vw,3rem)}
.cta p{color:rgba(255,255,255,.82);font-size:clamp(1.05rem,1.6vw,1.25rem);max-width:52ch;margin:18px auto 0}
.cta-cta{display:flex;justify-content:center;flex-wrap:wrap;gap:14px;margin-top:34px}

/* ---------- TRY IT (dual demo launcher) ---------- */
#try{background:linear-gradient(180deg,#fff,var(--bg))}
.try-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.try-card{display:flex;gap:18px;align-items:flex-start;background:#fff;border:var(--edge);border-radius:var(--r-lg);
  padding:clamp(24px,2.6vw,32px);transition:transform .28s cubic-bezier(.2,.7,.2,1),box-shadow .28s,border-color .28s}
.try-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg);border-color:color-mix(in srgb,var(--dpp) 30%,transparent)}
.try-card .ti{width:50px;height:50px;border-radius:14px;flex:none;display:grid;place-items:center;color:#fff;
  background:linear-gradient(150deg,var(--dpp-bright),var(--dpp-deep));box-shadow:0 8px 20px rgba(105,65,198,.30)}
.try-card .ti svg{width:25px;height:25px}
.try-card h3{font-size:1.16rem;letter-spacing:-.015em;display:inline-flex;align-items:center;gap:8px}
.try-card h3 svg{width:15px;height:15px;color:var(--dpp);flex:none;transition:transform .25s}
.try-card:hover h3 svg{transform:translate(3px,-3px)}
.try-card p{color:var(--slate);font-size:.94rem;margin:7px 0 0;line-height:1.55}
.try-card .tmeta{margin-top:12px;font-family:var(--mono);font-size:.68rem;font-weight:700;letter-spacing:.1em;
  text-transform:uppercase;color:var(--dpp);opacity:.75}
/* static product screens */
.prod-screens{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:clamp(28px,4vw,44px)}
.prod-shot{margin:0}
.prod-shot img{width:100%;display:block;border-radius:16px;border:1px solid var(--gray-200);
  box-shadow:0 18px 44px rgba(16,32,64,.12);background:var(--leaf)}
.prod-shot figcaption{margin-top:14px;color:var(--slate);font-size:.92rem;line-height:1.5}
.prod-shot figcaption b{color:var(--navy);font-weight:700}
@media(max-width:820px){.prod-screens{grid-template-columns:1fr;gap:28px}}

/* ---------- FAQ ---------- */
#faq{background:var(--white)}
.faq-wrap{max-width:820px}
.faq{border:1px solid var(--gray-200);border-radius:var(--r);margin-bottom:12px;background:#fff;overflow:hidden;
  transition:border-color .2s,box-shadow .2s}
.faq[open]{border-color:color-mix(in srgb,var(--dpp) 34%,transparent);box-shadow:var(--shadow)}
.faq summary{list-style:none;cursor:pointer;padding:20px 24px;font-weight:700;font-size:1.04rem;color:var(--navy);
  display:flex;align-items:center;justify-content:space-between;gap:16px}
.faq summary::-webkit-details-marker{display:none}
.faq summary .qmark{width:24px;height:24px;border-radius:50%;flex:none;display:grid;place-items:center;
  background:var(--leaf);color:var(--dpp-deep);transition:transform .25s}
.faq summary .qmark svg{width:14px;height:14px}
.faq[open] summary .qmark{transform:rotate(45deg)}
.faq p{color:var(--slate);margin:0;padding:0 24px 22px;font-size:.98rem;line-height:1.6;max-width:70ch}

/* ---------- FOOTER ---------- */
.footer{padding-top:70px}
.foot-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:40px;padding-bottom:48px}
.foot-brand .brand{color:#fff;margin-bottom:18px}
.foot-brand .brand .brand-logo{height:40px}
.foot-brand .brand .wm small{color:rgba(255,255,255,.55)}
.foot-brand p{color:rgba(255,255,255,.6);max-width:38ch;font-size:.96rem}
.foot-col h4{font-size:.76rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:16px;font-weight:700}
.foot-col a{display:block;padding:7px 0;font-size:.98rem}
.foot-col span.static{display:block;padding:7px 0;font-size:.98rem;color:rgba(255,255,255,.7)}
.foot-bar{border-top:1px solid rgba(255,255,255,.12);padding:24px 0;display:flex;justify-content:space-between;
  align-items:center;gap:16px;flex-wrap:wrap;color:rgba(255,255,255,.55);font-size:.9rem}
.foot-bar .made{display:inline-flex;align-items:center;gap:8px}
.foot-bar .made svg{color:var(--violet-soft)}

/* ---------- BUILT IN THE OPEN (modest single-link strip) ---------- */
#oss{background:linear-gradient(180deg,var(--bg),#fff)}
.oss-strip{margin-top:8px}
.repo{display:flex;gap:16px;align-items:center;max-width:640px;background:#fff;border:var(--edge);border-radius:var(--r-lg);
  padding:22px 24px;transition:transform .28s cubic-bezier(.2,.7,.2,1),box-shadow .28s,border-color .28s}
.repo:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:color-mix(in srgb,var(--dpp) 30%,transparent)}
.repo .gh{width:44px;height:44px;border-radius:12px;flex:0 0 auto;display:grid;place-items:center;
  background:color-mix(in srgb,var(--dpp) 12%,#fff);color:var(--dpp-deep);border:1px solid color-mix(in srgb,var(--dpp) 22%,transparent)}
.repo .gh svg{width:23px;height:23px}
.repo .rpath{font-weight:800;font-size:1rem;letter-spacing:-.015em;color:var(--navy);display:inline-flex;align-items:center;gap:7px}
.repo .rpath svg{width:14px;height:14px;color:var(--dpp);flex:none;transition:transform .25s}
.repo:hover .rpath svg{transform:translate(2px,-2px)}
.repo .rdesc{color:var(--slate);font-size:.92rem;margin:5px 0 0;line-height:1.5}

/* ---------- RESPONSIVE ---------- */
@media(max-width:960px){
  .hero-grid,.whynow .wrap{grid-template-columns:1fr}
  .pp-stage{order:-1;min-height:0;margin-bottom:6px}
  .steps,.feat-grid{grid-template-columns:1fr 1fr}
  .bf-grid,.wa-grid{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr 1fr}
  .sec-head{flex-direction:column;align-items:flex-start}
}
@media(max-width:640px){
  .nav-links,.nav-cta .btn-outline{display:none}
  .nav-toggle{display:inline-flex}
  .steps,.feat-grid{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr}
  .eu-list li{grid-template-columns:56px 1fr;gap:12px;padding:14px 14px}
}
@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important}
  .reveal{opacity:1;transform:none}
}
`;
