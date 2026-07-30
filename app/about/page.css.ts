export const pageCss = String.raw`
  :root{
    --mono:'Figtree', ui-monospace, 'SF Mono', Menlo, monospace;
    --edge:1px solid var(--gray-200);
    --card-shadow:0 12px 34px rgba(16,32,64,.08);
    --ease:cubic-bezier(.2,.7,.2,1);
    --maxw2:1240px;
    --d-bg:#0a1631;
    --d-panel:linear-gradient(180deg,rgba(20,34,66,.94),rgba(10,20,44,.96));
    --d-line:rgba(255,255,255,.10);
    --d-line-2:rgba(255,255,255,.16);
    --d-body:rgba(255,255,255,.72);
    --d-dim:rgba(255,255,255,.52);
    --d-sky:#7fb2ff;
  }
  .wrap{max-width:var(--maxw2);margin:0 auto;padding:0 clamp(20px,4vw,44px)}
  .kicker{font-weight:700;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--pan-blue);
    display:inline-flex;align-items:center;gap:10px}
  .kicker::before{content:"";width:22px;height:1.5px;background:var(--pan-blue);display:inline-block}
  .kicker.on-navy{color:var(--d-sky)}
  .kicker.on-navy::before{background:var(--d-sky)}
  .reveal{opacity:0;transform:translateY(22px);transition:opacity .8s var(--ease),transform .8s var(--ease)}
  .reveal.in{opacity:1;transform:none}
  .btn-glow{background:var(--pan-blue);color:#fff;box-shadow:0 10px 26px rgba(0,108,255,.28)}
  .btn-glow:hover{background:var(--pan-blue-dark);transform:translateY(-2px);box-shadow:0 16px 34px rgba(0,108,255,.34)}
  .btn-wire-d{background:#fff;border:1.5px solid var(--gray-200);color:var(--navy)}
  .btn-wire-d:hover{border-color:var(--navy);background:#fff;transform:translateY(-2px);box-shadow:var(--shadow)}

  /* NAV */
  .nav{background:rgba(255,255,255,.85);border-bottom:1px solid var(--gray-200);backdrop-filter:blur(14px) saturate(1.2);position:sticky;top:0;z-index:50}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;height:68px;gap:20px}
  .brand{display:flex;align-items:center;gap:12px}
  .brand .logo{height:26px;width:auto;display:block}
  .nav-links{display:flex;align-items:center;gap:clamp(16px,2.2vw,30px)}
  .nav a.navlink{color:var(--slate);font-weight:500;font-size:.95rem;position:relative;white-space:nowrap}
  .nav a.navlink:hover{color:var(--navy)}
  .nav a.navlink.active{color:var(--navy);font-weight:700}
  .nav-cta{display:flex;align-items:center;gap:12px}
  .nav .btn-wire{background:transparent;border:1.5px solid var(--gray-200);color:var(--navy)}
  .nav .btn-wire:hover{border-color:var(--navy);transform:translateY(-1px)}
  .nav-toggle{display:none}

  /* ABOUT HERO */
  .about-hero{position:relative;overflow:hidden;background:#fff;color:var(--navy);
    padding:clamp(56px,7vw,96px) 0 clamp(30px,4vw,48px)}
  .about-hero::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
    background:radial-gradient(60% 55% at 88% 0%, rgba(0,108,255,.08), transparent 60%),
      radial-gradient(52% 52% at 2% 40%, rgba(0,171,190,.06), transparent 62%),
      linear-gradient(180deg,#fff 0%, var(--bg) 100%)}
  .about-hero .wrap{position:relative;z-index:2}
  .about-hero h1{font-size:clamp(2.3rem,5vw,3.7rem);line-height:1.04;letter-spacing:-.035em;margin:20px 0 0;color:var(--navy);font-weight:700;max-width:18ch}
  .about-hero h1 .grad{background:linear-gradient(100deg,var(--pan-blue),var(--c-aconomy) 96%);
    -webkit-background-clip:text;background-clip:text;color:transparent}
  .about-hero .lead{margin-top:22px;font-size:clamp(1.06rem,1.5vw,1.28rem);color:var(--slate);max-width:60ch;line-height:1.62}
  .about-hero .lead b{color:var(--navy);font-weight:600}
  .about-meta{display:flex;flex-wrap:wrap;gap:10px 26px;margin-top:30px;color:var(--slate);font-size:.86rem}
  .about-meta span{display:inline-flex;align-items:center;gap:9px;font-weight:500}
  .about-meta .d{width:6px;height:6px;border-radius:50%;background:var(--pan-blue)}

  /* STORY */
  .section{padding:clamp(52px,7vw,88px) 0}
  #story{background:#fff}
  .story-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(34px,5vw,72px);align-items:start}
  .story-lead{font-size:clamp(1.3rem,2.2vw,1.85rem);line-height:1.32;letter-spacing:-.02em;color:var(--navy);font-weight:600;max-width:22ch}
  .story-lead .hl{background:linear-gradient(100deg,var(--pan-blue),var(--c-aconomy) 96%);
    -webkit-background-clip:text;background-clip:text;color:transparent}
  .story-body{color:var(--slate);font-size:1.06rem;line-height:1.7;max-width:56ch}
  .story-body p{margin:0 0 1rem}
  .story-body b{color:var(--navy);font-weight:600}
  .story-facts{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
  .fact{display:inline-flex;align-items:center;gap:8px;font-size:.84rem;font-weight:600;color:var(--slate);
    background:var(--bg);border:1px solid var(--gray-200);padding:8px 14px;border-radius:var(--r-pill)}
  .fact svg{width:14px;height:14px;color:var(--pan-blue)}

  /* TEAM */
  #team{background:#f6f8fc}
  .team-head{max-width:60ch;margin-bottom:clamp(30px,4vw,46px)}
  .team-head h2{margin-top:16px}
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

  /* CTA band */
  #about-cta{background:var(--d-bg);color:#fff;position:relative;overflow:hidden}
  #about-cta::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.72;
    background:radial-gradient(720px 460px at 12% 6%, rgba(0,171,190,.2), transparent 60%),
              radial-gradient(640px 440px at 94% 96%, rgba(0,108,255,.2), transparent 62%)}
  #about-cta .wrap{position:relative;text-align:center}
  #about-cta h2{color:#fff;font-size:clamp(1.7rem,3vw,2.4rem);letter-spacing:-.025em;max-width:20ch;margin:0 auto}
  #about-cta p{color:var(--d-body);margin:16px auto 0;max-width:52ch;font-size:1.05rem;line-height:1.6}
  #about-cta .cta-row{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:28px}
  #about-cta .btn-wire-d{background:rgba(255,255,255,.04);border:1.5px solid var(--d-line-2);color:#fff}
  #about-cta .btn-wire-d:hover{border-color:#fff;background:rgba(255,255,255,.08);box-shadow:none}

  /* FOOTER */
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

  @media(max-width:960px){
    .story-grid,.foot-grid{grid-template-columns:1fr}
    .foot-grid{grid-template-columns:1fr 1fr}
    .nav-links,.nav-cta .hide-m{display:none}
    .nav-toggle{display:inline-flex}
  }
  @media(max-width:900px){.team-grid{grid-template-columns:1fr}}
  @media(max-width:640px){.foot-grid{grid-template-columns:1fr}}
  @media(max-width:560px){.team-slim{flex-direction:column;align-items:flex-start;gap:16px}}
  @media(prefers-reduced-motion:reduce){
    *{animation:none!important;transition:none!important}
    .reveal{opacity:1!important;transform:none!important}
  }
`;
