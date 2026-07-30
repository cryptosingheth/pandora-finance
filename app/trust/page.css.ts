export const pageCss = String.raw`
  :root{ --ok:#12805c; --ok-soft:rgba(18,128,92,.10); --ok-line:rgba(18,128,92,.24); --mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace; }
  .wrap{max-width:1040px;margin:0 auto;padding:0 clamp(20px,4vw,32px)}
  .kicker{font-weight:700;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--pan-blue);display:inline-flex;align-items:center;gap:10px}
  .kicker::before{content:"";width:22px;height:1.5px;background:var(--pan-blue)}
  .navbar{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.86);backdrop-filter:blur(10px);border-bottom:1px solid var(--gray-200)}
  .navbar-in{display:flex;align-items:center;gap:20px;height:66px}
  .navbar img{height:24px}
  .navbar .sep{width:1px;height:22px;background:var(--gray-200)}
  .navbar .tc{font-weight:700;letter-spacing:-.01em}
  .navbar .links{display:flex;gap:26px;margin-left:auto}
  .navbar .links a{color:var(--slate);font-weight:500;font-size:.92rem}
  .navbar .links a:hover{color:var(--navy)}
  @media(max-width:760px){.navbar .links{display:none}}

  .hero{padding:72px 0 40px;background:radial-gradient(60% 60% at 85% -10%,rgba(0,108,255,.12),transparent 60%),radial-gradient(40% 50% at 5% 10%,rgba(18,128,92,.08),transparent 60%)}
  .hero h1{font-size:clamp(2.3rem,5vw,3.4rem);letter-spacing:-.03em;margin:16px 0 0}
  .hero .lead{margin-top:18px;max-width:60ch}
  .hero-stats{display:flex;flex-wrap:wrap;gap:14px;margin-top:30px}
  .hstat{border:1px solid var(--gray-200);border-radius:var(--r);padding:12px 18px;background:#fff;display:flex;align-items:center;gap:10px;font-weight:600;font-size:.92rem;box-shadow:var(--shadow)}
  .hstat .v{width:9px;height:9px;border-radius:50%;background:var(--ok)}

  section{padding:56px 0;border-top:1px solid var(--gray-200)}
  section h2{font-size:clamp(1.5rem,3vw,2rem);letter-spacing:-.02em}
  section .sub{color:var(--slate);margin-top:10px;max-width:62ch}

  .verified{display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;padding:5px 11px;border-radius:999px;background:var(--ok-soft);color:var(--ok);border:1px solid var(--ok-line)}
  .verified svg{width:13px;height:13px}

  .audit-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:30px}
  @media(max-width:760px){.audit-grid{grid-template-columns:1fr}}
  .audit{border:1px solid var(--gray-200);border-radius:var(--r-lg);padding:26px;background:#fff;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:14px}
  .audit .top{display:flex;align-items:center;justify-content:space-between;gap:12px}
  .audit .auditor{font-size:1.35rem;font-weight:800;letter-spacing:-.02em}
  .audit dl{display:grid;grid-template-columns:auto 1fr;gap:8px 16px;margin:0;font-size:.9rem}
  .audit dt{color:var(--slate)}
  .audit dd{margin:0;font-weight:600;text-align:right}
  .audit .findings{display:flex;flex-wrap:wrap;gap:7px}
  .tag{font-size:.72rem;font-weight:700;padding:4px 9px;border-radius:8px;background:var(--gray-200);color:var(--slate)}
  .tag.ok{background:var(--ok-soft);color:var(--ok)}
  .audit a.readbtn{margin-top:auto;display:inline-flex;align-items:center;gap:8px;font-weight:600;color:var(--pan-blue)}

  .chain{margin-top:28px;border:1px solid var(--gray-200);border-radius:var(--r-lg);overflow:hidden;box-shadow:var(--shadow)}
  .chain-head{display:flex;align-items:center;gap:12px;padding:16px 22px;background:var(--bg);border-bottom:1px solid var(--gray-200);font-weight:700}
  .chain-head .net{display:inline-flex;align-items:center;gap:8px;font-size:.8rem;font-weight:700;color:#a86400;background:rgba(240,185,11,.14);padding:5px 11px;border-radius:999px}
  .crow{display:grid;grid-template-columns:1.1fr 1.4fr auto;gap:14px;align-items:center;padding:16px 22px;border-top:1px solid var(--gray-200)}
  .crow:first-of-type{border-top:0}
  .crow .cname{font-weight:700}.crow .cname span{display:block;color:var(--slate);font-weight:500;font-size:.82rem}
  .crow .addr{font-family:var(--mono);font-size:.82rem;color:var(--slate);word-break:break-all}
  .crow a.scan{display:inline-flex;align-items:center;gap:7px;font-weight:600;color:var(--pan-blue);white-space:nowrap}
  @media(max-width:680px){.crow{grid-template-columns:1fr}}

  .repos{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:28px}
  @media(max-width:760px){.repos{grid-template-columns:1fr}}
  .repo{display:flex;align-items:flex-start;gap:14px;border:1px solid var(--gray-200);border-radius:var(--r);padding:18px 20px;background:#fff;transition:.2s}
  .repo:hover{border-color:var(--navy);transform:translateY(-2px);box-shadow:var(--shadow)}
  .repo .gh{width:38px;height:38px;border-radius:10px;background:var(--navy);color:#fff;display:grid;place-items:center;flex:none}
  .repo .gh svg{width:20px;height:20px}
  .repo .rn{font-family:var(--mono);font-weight:700;font-size:.9rem}
  .repo .rd{color:var(--slate);font-size:.86rem;margin-top:3px}

  .docs-cta{margin-top:28px;display:flex;flex-wrap:wrap;gap:14px}
  .foot{background:var(--navy);color:rgba(255,255,255,.72);padding:40px 0;font-size:.88rem}
  .foot a{color:#fff}
  .reveal{opacity:0;transform:translateY(18px);transition:.6s cubic-bezier(.2,.7,.2,1)}
  .reveal.in{opacity:1;transform:none}
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}}
`;
