'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

/* ------------------------------------------------------------------
   AgentConsole — 1:1 port of the hub's signature "live agent console".

   The original ships as an inline IIFE that owns four pieces of DOM:
   #console-body (empty in the HTML, filled by JS), #agent-tag,
   #agent-model and #agent-run. Because the script BUILDS markup rather
   than merely toggling a class, the whole `.console` card is rendered
   here as JSX and driven by state — per the porting contract.

   Everything below is behaviour-preserving, deliberately:

   • Initial render is exactly what the hand-written HTML shipped —
     tag "RUN", model "pandora-orchestrator", run "#1", EMPTY body —
     so hydration matches the prerendered export byte-for-byte.
   • Timing constants are untouched: first line at 260ms, a "thinking"
     caret held 520ms before every tool call / result, +360ms after it,
     +420ms after a plain sys line, then a 2100ms hold before the next
     scenario. Do not round these.
   • prefers-reduced-motion keeps the original's distinct static
     fallback: scenario 0 rendered in full, opacity/transform forced,
     no looping — and note it does NOT touch the run counter, matching
     the original exactly.
   • Playback starts only when the body scrolls into view at threshold
     0.35, same as the original IntersectionObserver.
   • No innerHTML anywhere (project rule) — this is plain JSX.
   ------------------------------------------------------------------ */

type Kind = 'sys' | 'call' | 'ok';

type Scenario = {
  tag: string;
  model: string;
  lines: [Kind, string, string?][];
};

// Each scenario = one product's agent doing a real end-to-end job.
const SCENARIOS: Scenario[] = [
  {
    tag: 'AUTHENTICATE',
    model: 'aconomy-validator',
    lines: [
      ['sys', 'Task: validate a luxury asset for listing'],
      ['call', 'authenticate_asset', 'serial + reference photos'],
      ['call', 'check_provenance', 'custody chain'],
      ['call', 'anchor_record', 'write hash on-chain'],
      ['ok', 'Asset verified — passport issued', '0x8f…3aD1'],
    ],
  },
  {
    tag: 'LEASE',
    model: 'propty-agent',
    lines: [
      ['sys', 'Task: place a newcomer tenant, guarantee rent'],
      ['call', 'screen_tenant', 'ZK proof, no data shared'],
      ['call', 'match_listing', 'transparent terms'],
      ['call', 'draft_lease', 'Ontario RTA standard form'],
      ['ok', 'Lease signed — payout guaranteed', 'eligibility proven'],
    ],
  },
  {
    tag: 'PASSPORT',
    model: 'dpp-agent',
    lines: [
      ['sys', 'Task: verify + passport a physical product'],
      ['call', 'read_tag', 'NFC / QR signature'],
      ['call', 'trace_supply_chain', 'provenance + materials'],
      ['call', 'flag_counterfeit', 'issuer signature check'],
      ['ok', 'Genuine — Digital Product Passport live', 'EU-DPP'],
    ],
  },
  {
    tag: 'SETTLE',
    model: 'express-agent',
    lines: [
      ['sys', 'Task: agent-to-agent purchase + settlement'],
      ['call', 'discover_listing', 'on-chain marketplace'],
      ['call', 'x402_pay', 'autonomous settlement'],
      ['call', 'transfer_asset', 'ERC-721 order fill'],
      ['ok', 'Trade settled autonomously', 'tx confirmed'],
    ],
  },
];

type RenderedLine = { key: string; kind: Kind; a: string; b?: string };

function Tick() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ConsoleLine({
  line,
  frozen,
}: {
  line: RenderedLine;
  frozen: boolean;
}) {
  const style = frozen ? { opacity: 1, transform: 'none' } : undefined;

  if (line.kind === 'sys') {
    return (
      <div className="cl sys" style={style}>
        <span className="gut">›</span>
        <span className="txt">{line.a}</span>
      </div>
    );
  }

  if (line.kind === 'call') {
    return (
      <div className="cl call" style={style}>
        <span className="gut">→</span>
        <span className="txt">
          <b>{line.a + '()'}</b>
          {line.b ? <span className="ms">{'· ' + line.b}</span> : null}
        </span>
      </div>
    );
  }

  return (
    <div className="cl ok" style={style}>
      <span className="gut">
        <Tick />
      </span>
      <span className="txt">
        <b>{line.a}</b>
        {line.b ? <span className="ms">{'· ' + line.b}</span> : null}
      </span>
    </div>
  );
}

/* prefers-reduced-motion, read the React-19 way. Deriving it during render
   (rather than setting state from an effect) is what lets the static
   reduced-motion fallback be pure output instead of a cascading update.
   The server snapshot is `false`, so the prerendered HTML is the motion
   version — identical to the hand-written HTML, which also shipped an
   empty console body and only branched once JS ran. */
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(onChange: () => void) {
  if (typeof window.matchMedia !== 'function') return () => {};
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getReducedMotion() {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function AgentConsole() {
  const bodyRef = useRef<HTMLDivElement>(null);

  const reduce = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionServerSnapshot
  );

  // Initial values mirror the static HTML so hydration is a no-op.
  const [tag, setTag] = useState('RUN');
  const [model, setModel] = useState('pandora-orchestrator');
  const [run, setRun] = useState('#1');
  const [lines, setLines] = useState<RenderedLine[]>([]);
  const [caret, setCaret] = useState(false);

  useEffect(() => {
    // Static fallback for reduced-motion: one full scenario, no looping.
    // Rendered below, straight from SCENARIOS[0]; nothing to schedule.
    if (reduce) return;

    let timers: number[] = [];
    const schedule = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timers.push(id);
      return id;
    };
    const clearAll = () => {
      timers.forEach((id) => window.clearTimeout(id));
      timers = [];
    };

    let si = 0;
    let cancelled = false;

    function play() {
      if (cancelled) return;
      clearAll();
      setLines([]);
      setCaret(false);

      const sc = SCENARIOS[si % SCENARIOS.length];
      const runIndex = si;
      setTag(sc.tag);
      setModel(sc.model);
      setRun('#' + (runIndex + 1));

      let t = 260;
      sc.lines.forEach(([kind, a, b], idx) => {
        const line: RenderedLine = { key: `${runIndex}-${idx}`, kind, a, b };
        // show a "thinking" caret before each tool call / result
        if (kind === 'call' || kind === 'ok') {
          schedule(() => {
            setCaret(true);
            schedule(() => {
              setCaret(false);
              setLines((prev) => [...prev, line]);
            }, 520);
          }, t);
          t += 520 + 360;
        } else {
          schedule(() => {
            setLines((prev) => [...prev, line]);
          }, t);
          t += 420;
        }
      });

      // hold, then advance
      schedule(() => {
        si++;
        play();
      }, t + 2100);
    }

    // Start only when the console is visible; pause when scrolled away.
    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      let started = false;
      io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting && !started) {
              started = true;
              play();
            }
          });
        },
        { threshold: 0.35 }
      );
      if (bodyRef.current) io.observe(bodyRef.current);
    } else {
      play();
    }

    return () => {
      cancelled = true;
      clearAll();
      io?.disconnect();
    };
  }, [reduce]);

  // Reduced motion renders scenario 0 in full, frozen, and — exactly like
  // the original script — leaves the run counter at its initial "#1".
  const staticScenario = reduce ? SCENARIOS[0] : null;
  const shownTag = staticScenario ? staticScenario.tag : tag;
  const shownModel = staticScenario ? staticScenario.model : model;
  const shownLines: RenderedLine[] = staticScenario
    ? staticScenario.lines.map(([kind, a, b], i) => ({
        key: `static-${i}`,
        kind,
        a,
        b,
      }))
    : lines;
  const shownCaret = staticScenario ? false : caret;

  return (
    <div
      className="console reveal"
      role="img"
      aria-label="A live console showing an autonomous AI agent streaming tool calls: authenticating an asset, checking provenance on-chain, and issuing a verified passport."
    >
      <div className="console-bar">
        <span className="dots" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="console-title">
          pandora-agent <span className="tag" id="agent-tag">
            {shownTag}
          </span>
        </span>
        <span className="console-live">
          <span className="rec"></span>live
        </span>
      </div>
      <div
        className="console-body"
        id="console-body"
        aria-hidden="true"
        ref={bodyRef}
      >
        {shownLines.map((line) => (
          <ConsoleLine key={line.key} line={line} frozen={reduce} />
        ))}
        {shownCaret ? (
          <div className="console-caret">
            <span className="bl"></span>
            <span>thinking</span>
          </div>
        ) : null}
      </div>
      <div className="console-foot">
        <span className="chip">
          model <b id="agent-model">{shownModel}</b>
        </span>
        <span className="chip">
          tools <b>7</b>
        </span>
        <span className="console-cycle">
          run <b id="agent-run">{run}</b> · autonomous
        </span>
      </div>
    </div>
  );
}

export default AgentConsole;
