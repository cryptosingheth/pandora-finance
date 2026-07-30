# Off-site GEO playbook — actions only the founder can take

**For:** Pushkar Vohra / Opinder Preet Singh Narang
**Scope:** Aconomy Labs Inc. (brand: Pandora) — `www.pandora.finance`
**Written:** 30 July 2026 · **Internal document — not published, excluded from sitemap, disallowed in robots.txt**

---

## 0. Read this first: what this can and cannot do

There are exactly two ways an AI assistant ends up describing your company.

**Path 1 — training data.** The model absorbed the web at some point in the past and froze. Every model in production today learned about you from the 2021–2024 web, where you were a Singapore-registered crypto/NFT project called Pandora Finance. **You cannot change this. Nothing in this document changes it.** It only decays as models retrain, and it only decays *correctly* if the open web has been fixed by the time the next crawl happens. That is the real argument for doing the work now rather than later — you are writing the input to a training run that happens 6–18 months from now.

**Path 2 — live retrieval.** The model runs a web search mid-answer and reads what it finds. This is fully influenceable and it is where the near-term wins are. Everything in Tier 0 and Tier 1 below moves Path 2 within days to weeks.

**The decisive lever is neither of those — it is corroboration.** An assistant weights a claim by how many independent sources agree. Your own site saying "Toronto" is one source. Your site *plus* GitHub *plus* Crunchbase *plus* Wikidata *plus* LinkedIn *plus* PitchBook all saying "Toronto" is a fact. This is slow, unglamorous, and it is the only thing that actually works. The on-site work (schema, `llms.txt`, the new `/studio/` and `/guides/` pages) is done and is necessary — but on its own it is a single uncorroborated source.

**Honest expectation setting.** Tier 0 changes show up in AI answers in roughly one to four weeks. Crunchbase and Wikidata take one to six weeks to propagate. Directory listings, one to three months. Genuine third-party editorial coverage, three to twelve months. A visible shift in how ChatGPT or Claude describes you *without* searching — realistically not before models trained on the post-fix web ship.

---

## 1. The single most important finding

> **You are publicly telling the world you are in Singapore.**

Recon flagged that the most damaging retrieved answer anywhere is *"Aconomy Labs… privately held and venture capital-backed, based in Singapore"* — and that a query containing the word "Toronto" still fails to produce a Toronto answer. The natural assumption is that this is a stale third-party database problem you can't control.

It isn't. I checked the primary surfaces. **Three properties you own and can edit yourself right now say Singapore, or say nothing:**

| Surface | What it says today | Who controls it |
|---|---|---|
| `github.com/Pandora-Finance` | Location: **Singapore**. Bio: *"A decentralised liquidity induction ecosystem for multi-asset classes."* Social: `@PandoraProtocol` (the retired handle). No org README. | You. Free. Instant. |
| `linkedin.com/company/aconomyglobal` | Renders on the **`sg.` (Singapore) country subdomain** | You. Free. |
| `linkedin.com/company/aconomyfoundation` | HQ field **empty**, founded year **empty**, industry "Blockchain Services", website points to `aconomy.foundation` not `pandora.finance` | You. Free. |

PitchBook and Crunchbase almost certainly harvested Singapore *from these*. This is not an external data problem being done to you. It is a self-inflicted one, and it is the cheapest fix in this entire document.

Fix the sources first, then correct the aggregators. Correcting Crunchbase while GitHub still says Singapore just means it gets re-harvested.

---

## TIER 0 — Do this week. Roughly 2 hours total. Highest impact per minute in the document.

### 0.1 — GitHub organisation profile

**Effort:** 30–40 min · **Cost:** free · **Impact:** very high

GitHub is one of the most heavily and frequently crawled surfaces on the web, it is in every major training corpus, and org profile READMEs are rendered as plain markdown — which is exactly the format retrieval systems parse best. Right now yours is a 2021 crypto artifact that contradicts your entire current positioning.

**Go to:** https://github.com/organizations/Pandora-Finance/settings/profile

Change:

- **Location:** `Singapore` → `Toronto, Ontario, Canada`
- **Description:** → `AI-native product studio. Toronto, Canada. Pandora is the brand of Aconomy Labs Inc.`
- **URL:** confirm `https://www.pandora.finance`
- **X/Twitter:** `@PandoraProtocol` → `@AconomyFdn`
- **Email:** confirm `hello@pandora.finance` still routes to someone

**Then create the org profile README** — this is the high-value half. Create a public repo literally named `.github` in the org, add `profile/README.md`, and GitHub renders it at the top of `github.com/Pandora-Finance`.

**Go to:** https://github.com/organizations/Pandora-Finance/repositories/new → name it `.github` → public → then add the file at `profile/README.md`.

Content should be short, factual, and quotable. Cover, in this order: what Aconomy Labs Inc. is (AI-native product studio, Toronto, founded 2021, builds and owns its own products, not an agency); the name history (Pandora Finance → Aconomy Foundation → Aconomy Labs, one company); the explicit disambiguation (not Pandora A/S, not Pandora Media, not the third-party PANDORA ERC-404 token); the eight products with honest status labels; and links to `pandora.finance`, `/studio/`, `/trust/` and `llms.txt`. Lift the wording from `llms.txt` — it is already written for exactly this job.

**Done looks like:** loading `github.com/Pandora-Finance` in a logged-out browser shows Toronto in the sidebar and a README that names Aconomy Labs Inc. above the repo list.

### 0.2 — Fix the `pandora-express` npm package metadata

**Effort:** 20 min · **Cost:** free · **Impact:** very high

Recon called this "the single highest-leverage fix in this entire recon" and I confirmed why. The live registry manifest for `pandora-express@1.1.3` reads:

```
description: "Express Protocol SDK is used to build applications for minting,
              trading, auctioning NFTs on multiple blockchains."
keywords:     (none)
homepage:     (none)
repository:   (none)
```

No keywords, no homepage, no repository link. So: any assistant asked "what is Express Protocol" correctly answers "a 2022 NFT minting SDK", and there is nothing in the package metadata pointing back to `pandora.finance` to correct it. npm is ranked #1 for the term and is mirrored into essentially every code-aware training corpus.

In `package.json`, set:

- `description` — lead with agentic commerce, keep NFT/multi-chain as the *mechanism*, e.g. *"SDK for agentic on-chain commerce — one typed interface over mint, trade and payments across ERC-721, ERC-1155 and ERC-404, with an x402 module for autonomous agent settlement."*
- `keywords` — `agentic-commerce`, `x402`, `ai-agents`, `erc-404`, `erc-721`, `erc-1155`, `web3`, `sdk`, `tokenization`, `rwa`
- `homepage` — `https://www.pandora.finance/express-protocol/`
- `repository` — the GitHub URL
- `author` — `Aconomy Labs Inc.`
- `license` — currently ISC; confirm that is intended

Then `npm publish` as `1.1.4`. **Also update the GitHub repo README** — recon flagged it still references Rinkeby and Ropsten, testnets that have been dead since 2022. Nothing signals "abandoned project" to a retrieval system more loudly than a README naming dead testnets.

**Done looks like:** `npmjs.com/package/pandora-express` shows the new description, a working homepage link, and a repo link; the GitHub README no longer mentions Rinkeby or Ropsten.

### 0.3 — LinkedIn company page completeness

**Effort:** 30 min · **Cost:** free · **Impact:** high

LinkedIn is a top-tier entity-resolution source and is retrieved constantly. Your main page has empty HQ and founded fields, which is why aggregators fall back to whatever they scraped in 2021.

**Go to:** https://www.linkedin.com/company/aconomyfoundation/admin/ → Edit page

- **Name:** consider `Aconomy Labs (Pandora)` so the legal name and the brand both resolve. Note: renaming affects the merge in 1.2 below — LinkedIn requires names to match to merge, so decide the final name *before* filing the merge request.
- **Tagline:** replace "Real-World-Asset P2P Marketplace" with the studio line.
- **About:** rewrite from `llms.txt`. Must contain the literal strings `Aconomy Labs Inc.`, `Toronto`, `AI-native product studio`, `founded 2021`, and the name-history sentence.
- **Industry:** `Blockchain Services` → `Software Development` (the blockchain tag actively fights the de-crypto'd positioning).
- **Headquarters:** add `111 Peter Street, 9th Floor, Suite 902, Toronto, ON M5V 2H1, Canada`. **This is the field that matters most.**
- **Founded:** `2021`
- **Website:** `aconomy.foundation` → `https://www.pandora.finance`
- **Company size:** currently 11–50. Only claim what is true.

**Done looks like:** the public page shows Toronto, Ontario as HQ and 2021 as founded, to a logged-out visitor.

---

## TIER 1 — Do this month. The corroboration layer.

### 1.1 — Crunchbase: claim and correct the *existing* profile

**Effort:** 45 min + 1–3 weeks review · **Cost:** free tier is sufficient · **Impact:** very high

Crunchbase is one of the most heavily weighted sources for company entity resolution — it feeds aggregators, news tooling, and gets retrieved directly.

**Critical: do NOT create a new "Aconomy Labs" profile.** A profile already exists at **https://www.crunchbase.com/organization/pandora-finance** and currently says: headquartered in **Singapore**, described as an ERC-404 minting/trading platform, 16 investors. Creating a second entity would split your history, your funding record and your investor graph across two records and make entity resolution *worse*. Claim and rename the one that exists — it already carries the $2.4M round, which is your strongest verifiable proof point.

1. Claim it — you need a work email on the company domain. https://www.crunchbase.com/organization/pandora-finance → "Claim this profile" (or https://www.crunchbase.com/edit/claim).
2. Once verified, edit: **Legal name** `Aconomy Labs Inc.` · **Also known as** Pandora, Pandora Finance, Aconomy Foundation · **HQ** Toronto, Ontario, Canada · **Founded** 2021 · **Industries** drop the crypto-only tags, add Artificial Intelligence, Software, SaaS · **Website** `www.pandora.finance` · **Description** the studio paragraph.
3. Fix the funding round: 2021, $2.4M seed, and check the investor list against your own — Crunchbase shows 16, your site lists 12, and PitchBook shows a partly different set (A195 Capital, Amesten Capital). Reconcile to one true list and use it everywhere.
4. Add the team as people, linked to their LinkedIn profiles.

**Done looks like:** the profile is marked claimed, headquarters reads Toronto, and searching "Aconomy Labs" on Crunchbase lands on it.

### 1.2 — LinkedIn: merge the duplicate page and align the founders

**Effort:** 30 min + 1–3 weeks for LinkedIn · **Cost:** free · **Impact:** high

Two company pages exist: `linkedin.com/company/aconomyfoundation` and `linkedin.com/company/aconomyglobal` (the latter serving from the Singapore country subdomain). Duplicates are pure entity fragmentation: employee associations, followers and mentions split across two records, and neither reaches critical mass.

**Merge requirements** (per https://www.linkedin.com/help/linkedin/answer/a554310): you must be **super admin of both** pages, the names must match, at least one employee must be associated with the page being merged, and **the merge is irreversible**. Decide which URL survives first — keep `aconomyfoundation` (it has the history) unless `aconomyglobal` has meaningfully more followers.

Request the merge via LinkedIn Page support with: both company names exactly as shown, both page URLs, and an explicit statement of which is retained.

**Then the founders' own profiles** — these matter as much as the company page, because "who founded Aconomy Labs" is a distinct query and person-entity resolution runs largely through LinkedIn:

- All four (Pushkar, Opinder, Har Rhythm, Tamur) must list the **identical company entity** in their current role, selected from the LinkedIn dropdown so it *links* to the page rather than existing as free text. Free-text company names do not create the graph edge.
- **Pushkar's headline** currently resolves as ex-EthLend/Aave crypto with no AI, no studio, no Toronto. It should read something like `Founder & CEO, Aconomy Labs (Pandora) — AI-native product studio, Toronto`.
- **Name consistency:** recon found "Pushkar Vohra" vs "Pushkarr Vohra" across sources. Pick one spelling and use it on LinkedIn, Crunchbase, Medium, the site and Wikidata. The schema already carries the variant as an alias, but the canonical form must be consistent going forward.
- Opinder: same treatment — Aconomy Labs as current, Toronto, and keep Vanna framed as a Pandora product rather than an unconnected venture. Recon found **no source anywhere links Vanna to the studio**; your LinkedIn is the fastest place to fix that.

**Done looks like:** one company page, four employee profiles linked to it, all showing Toronto.

### 1.3 — Wikidata item

**Effort:** 60–90 min · **Cost:** free · **Impact:** high, and it compounds

**There is currently no Wikidata item for Aconomy, Aconomy Labs, Pandora Finance, or Pandora Protocol.** I checked all four; every search returns "no results matching the query."

Why it matters disproportionately: Wikidata is a structured, machine-readable, openly licensed knowledge graph that is ingested wholesale into training corpora and queried live by several assistant stacks. It is also the substrate other knowledge graphs reconcile against. One well-sourced item does more for entity resolution than a dozen directory listings.

**On the notability bar — the honest answer.** Wikidata's bar is far lower than Wikipedia's and they are routinely confused. Wikidata requires meeting **one** of three criteria; the relevant one is criterion 2: an item is acceptable if it *"refers to a clearly identifiable conceptual or material entity"* that *"can be described using serious and publicly available references."*

You plausibly clear this. Aconomy Labs is a registered Canadian corporation with a recorded $2.4M funding round on both PitchBook and Crunchbase, coverage in Bitcoin.com News, BlockTelegraph and Cointelegraph, a published Google Play application, and a public npm package. That is comfortably "serious and publicly available references." Wikidata contains millions of company items with weaker sourcing.

**Do not attempt a Wikipedia article.** That is a different, much higher bar (WP:NCORP), which requires significant, in-depth, *independent secondary* coverage — and explicitly discounts funding announcements and press releases, which is what most of your coverage is (AlexaBlockchain is labelled "Press Release" on its face). An attempted article would very likely be deleted, and a deletion discussion creates a durable, indexed, negative public record about your company. Not worth it. Revisit only if you land genuine independent editorial coverage in a mainstream outlet.

**How to do it:** create an account at https://www.wikidata.org, then https://www.wikidata.org/wiki/Special:NewItem

- **Label:** `Aconomy Labs`
- **Description:** `software company based in Toronto, Canada` — keep it short, flat and non-promotional. Do **not** write "AI-native product studio building agentic products"; promotional descriptions get reverted and draw scrutiny.
- **Aliases:** Aconomy Labs Inc., Pandora, Pandora Finance, Aconomy Foundation, Pandora Protocol
- **Statements:** `P31` instance of → business/enterprise · `P17` country → Canada (Q16) · `P159` headquarters location → Toronto (Q172) · `P571` inception → 2021 · `P856` official website → `https://www.pandora.finance` · `P1448` official name → Aconomy Labs Inc. · `P112` founded by → Pushkar Vohra · `P452` industry → software. Confirm each Q-ID in the entity picker rather than trusting a number from a document.

**Two rules that determine whether the item survives:** (a) put a **reference on every single statement** — `P854` reference URL pointing to Crunchbase, PitchBook, the press articles or your own site; unsourced items about small companies are the ones that get nominated for deletion. (b) **Declare the conflict of interest on your user page.** Wikidata is far more tolerant of self-created company items than Wikipedia is, but only if you are transparent. Being caught undeclared is worse than not doing it.

**Done looks like:** a Q-ID exists, every statement has a reference, and it survives 30 days without a deletion nomination. Add the Q-ID to the site's `sameAs` array afterwards — tell whoever maintains the JSON-LD.

### 1.4 — PitchBook profile correction

**Effort:** 20 min · **Cost:** free · **Impact:** medium-high

PitchBook profile **465678-01** outranks everything for "Aconomy Labs Toronto" and asserts Singapore + "Financial Software". It is the highest-ranking wrong answer about your location.

Profile updates are free and unlimited — you do not need a subscription. Go to https://pitchbook.com/profiles/company/465678-01, click **Update Profile** top-right, which opens the Profile Review Tool. Fix HQ to Toronto, founded 2021, industry to software/AI rather than Financial Software, description, website, and the investor list.

**Done looks like:** the public profile preview shows Toronto.

---

## TIER 2 — Directory listings that LLMs actually retrieve

Recon's clearest structural finding: for most of your target queries, **assistants retrieve listicles and directories, not company homepages.** You cannot win those queries with your own site alone. But be selective — most directories are worthless and some are actively harmful.

### 2.1 — dppindex.eu (do this one first)

**Effort:** 20 min · **Cost:** likely free · **Impact:** high for its niche

The dedicated DPP provider directory, ~80 vendors, and it ranks for exactly the queries The DPP Company needs. Neither The DPP Company nor Aconomy is on it. It has an open submission form.

**Go to:** https://dppindex.eu/submit-dpp-provider

Submit The DPP Company. Set country to **Canada** — there is currently almost no Canadian representation (Optel Group in Quebec is the only Canadian name recon surfaced), so you'd be one of a very small set and the Canada-first angle is genuinely differentiated. Be honest about product-category coverage; don't tick every box.

**Done looks like:** The DPP Company appears at dppindex.eu/dpp-providers with Canada as its country.

### 2.2 — Tokeny RWA Ecosystem Map

**Effort:** 20 min · **Impact:** high for its niche

Recon identified the RWA-in-Canada query as **the biggest open lane in the whole recon** — the search engine literally could not find Canada-based RWA companies. Tokeny's ecosystem map is the format that ranks for it. Find the submission or contact route on Tokeny's ecosystem map page and submit Aconomy as a Canadian RWA marketplace.

Serve this from the Aconomy product page, not the corporate homepage — tokenization language is honest there and doesn't undercut the de-crypto'd positioning.

### 2.3 — StartupHub.ai — "AI Startups in Toronto"

**Effort:** 30 min · **Impact:** medium-high

StartupHub.ai maintains https://www.startuphub.ai/lists/ai-startups-in-toronto-2026-f1ca928c — 55 entries, Pandora is **not** among them. This is precisely the listicle format that gets retrieved for the recon's #1 target query. I couldn't find a public submit link on the list page itself, so route via their main site (https://www.startuphub.ai/) contact or submission path.

### 2.4 — Tracxn and Dealroom

**Effort:** 30 min each · **Impact:** medium

Both maintain Toronto/Canada AI company sets and both feed downstream aggregators. Dealroom already has some record of you (recon surfaced it). Both accept company-submitted corrections. Lower priority than the above but cheap.

### 2.5 — Do NOT do these

**Clutch, GoodFirms, DesignRush.** Recon flagged this and it is correct: these are **agency and services directories**. Listing there would categorise Aconomy Labs as a development services vendor, which (a) directly contradicts the product-studio positioning you locked, and (b) is potentially harmful to the IRCC case, which rests on building and owning your own products. They rank well, but ranking for the wrong category is worse than not ranking. Win those queries through the `/studio/` page and genuine editorial coverage instead.

---

## TIER 3 — Name-collision defence

You have a genuinely hard naming problem: **Pandora A/S** (Danish jeweller, enormous search footprint), **Pandora Media**, and the third-party **PANDORA ERC-404 token** — plus "DPP" being an overloaded acronym and "Vanna Labs" being a separate entity.

The site's structured data and `llms.txt` now carry explicit disambiguation. That is one source. Collision defence only works when the *third-party* record agrees.

**What to do:**

1. **Always pair the names off-site.** Never write "Pandora" alone in a bio, directory entry, or byline. Use `Pandora (Aconomy Labs Inc.)` or `Aconomy Labs`. Every unqualified "Pandora" is a token that resolves to the jeweller.
2. **Lead with "Aconomy Labs" in structured/directory contexts** and treat Pandora as the brand. The unique string is the one that retrieves; "Aconomy" has near-zero collision.
3. **Give the ERC-404 denial a permanent home.** The clearest existing statement is a March 2024 tweet from @AconomyFdn (`x.com/AconomyFdn/status/1767999105777733740`) explaining that @PandoraProtocol and @Pandora_ERC404 are separate teams. That is good content sitting on the worst possible surface — tweets are poorly indexed and poorly retrieved. Ask whoever owns the site to give this a short, permanent, crawlable page (a `/trust/` sub-section or a journal post), then link the tweet to it. A dated, on-domain statement is what a retrieval system can actually cite.
4. **Consolidate the X accounts.** Four exist in your orbit: `@PandoraProtocol` (retired), `@AconomyFdn` (current), `@0xAconomy`, `@UnityMarket_io`. Keep the product accounts if they're active, but `@PandoraProtocol`'s bio should point unambiguously at `@AconomyFdn` and `pandora.finance`, and every bio should say Toronto.
5. **Wikidata is your best collision weapon.** A Wikidata item with the right aliases and a distinct Q-ID from Pandora A/S is precisely the mechanism knowledge graphs use to keep same-named entities apart. This is a second reason to do 1.3.

---

## TIER 4 — Getting cited by third parties (slow, decisive)

This is the lever that actually moves the needle long-term, and the one that can't be shortcut. Everything above makes you *findable and correctly described*. This makes you *citable*.

**The principle:** assistants cite sources that other sources cite. A guest post on a domain that already ranks for your target query is worth more than ten pages on your own site.

**Prioritised, realistically:**

1. **Re-activate the existing press relationships.** You have real, published relationships with Bitcoin.com News, BlockTelegraph, Cointelegraph and AlexaBlockchain — but every piece is from 2021–2023 and describes a crypto project. A single new piece from any of them, framed as *"Toronto AI product studio"*, is the highest-leverage outreach you can do, because the relationship already exists and the domain is already trusted. Pitch the studio repositioning itself as the story.
2. **Reclaim the Medium equity.** Recon found the *only* unbranded query where you surface at all (luxury watch tokenization) surfaces via `medium.com/pandoraprotocol` — not your own domain. That proves the content works and that the equity is parked on someone else's property. Add canonical tags on the Medium posts pointing at the equivalent pages on `pandora.finance`, update the publication bio to name Aconomy Labs and Toronto, and add footer links to `/studio/`. Also fix the "Pushkarr" spelling there.
3. **Podcasts over guest posts.** Canadian tech and AI podcasts are far easier to land than editorial placements, they produce transcripts (highly retrievable text), and they naturally surface founder-attributed statements about location and category. Target Canadian ecosystem shows rather than crypto shows — the point is to be described as a Toronto AI studio by someone who isn't you.
4. **Use the incubators.** TBDC, BHive and OCI all publish portfolio pages and founder stories. These are trusted third-party Canadian domains explicitly asserting a Toronto connection — exactly the corroboration the Singapore problem needs. Ask each for a portfolio listing and a founder profile. Cheap, high-trust, under-used.
5. **Copy Spherity's move.** Recon noted Spherity ranks for DPP queries by publishing a listicle of DPP providers **including its own competitors**. It's a legitimate, proven format: genuinely useful, gets cited by others, and puts you in the consideration set. The `/guides/` infrastructure already exists — a "DPP providers serving the Canadian market" roundup that honestly includes Spherity, Kezzler, Circulor and Optel is a real contribution and would be the only Canada-framed one.

**What not to do:** paid guest-post networks, link schemes, syndicated press-release blasts to low-quality aggregators. These get penalised, and for a company with an active immigration case resting on legitimacy, the downside is not just SEO.

---

## TIER 5 — Measurement

Without measurement you cannot tell whether any of this worked, and it is very easy to spend months on GEO with no signal. Three things to track. Budget about an hour a month total.

### 5.1 — The query log (the important one)

Build a simple spreadsheet. **Rows:** the ~20 recon queries — "AI product studios in Canada building their own products Toronto", "real-world asset tokenization companies Canada", "agentic AI startup Toronto", "digital product passport providers Canada", "what is Aconomy Foundation / who owns it", "Aconomy Labs Toronto", and the rest. **Columns:** ChatGPT, Claude, Perplexity, Gemini, Copilot, Google AI Overviews.

Run it monthly. For each cell log three things:

1. **Did Pandora/Aconomy surface?** (yes/no)
2. **What was it described as?** — verbatim. Watch specifically for "Singapore", "crypto", "NFT", "agency".
3. **Which sources were cited?** — **this is the most valuable column in the whole exercise.** It tells you exactly which third-party pages the assistants trust for your queries, which converts Tier 2 and Tier 4 from guesswork into a target list.

Practical notes: use logged-out / temporary-chat sessions so personalisation and memory don't contaminate results. Run each query the same way every month. Don't chase individual answers — look at the trend across months.

**Baseline is already captured** in the recon findings. Re-run in 30 days and diff.

### 5.2 — Search Console and Bing Webmaster Tools

- **Google Search Console** — https://search.google.com/search-console. Verify a *domain* property (DNS TXT), not a URL-prefix one, so subdomains are covered. Submit `sitemap.xml`. Watch: whether `/studio/` and the two `/guides/` pages get indexed at all (if they don't, nothing else matters), impressions on non-brand queries, and whether "Toronto" queries start showing.
- **Bing Webmaster Tools** — https://www.bing.com/webmasters. **Do not skip this.** It matters disproportionately for GEO because ChatGPT search and Microsoft Copilot are Bing-backed. Bing indexing is the gate for a large share of AI-assistant retrieval. It can import directly from Search Console.

### 5.3 — Confirm AI crawlers are actually fetching the site

`robots.txt` explicitly welcomes every major AI crawler. Verify they're taking you up on it — otherwise the whole on-site effort is invisible.

**On Vercel:** Observability → Logs, filter on user agent. Or add a log drain if you want to retain history beyond the dashboard window.

**User agents worth counting:**

| Bot | Belongs to | What a hit means |
|---|---|---|
| `GPTBot` | OpenAI | Crawling for training |
| `OAI-SearchBot` | OpenAI | Indexing for ChatGPT search |
| `ChatGPT-User` | OpenAI | A user's live query fetched your page **— the strongest possible signal** |
| `ClaudeBot` | Anthropic | Crawling for training |
| `Claude-User` / `Claude-SearchBot` | Anthropic | Live retrieval |
| `PerplexityBot` / `Perplexity-User` | Perplexity | Index / live retrieval |
| `CCBot` | Common Crawl | Common Crawl is a major training input — the closest proxy for "this page may reach future training data" |
| `Bytespider`, `Amazonbot`, `meta-externalagent`, `MistralAI-User` | various | Secondary |

**One honest caveat so you don't chase a ghost:** `Google-Extended` and `Applebot-Extended` are **not crawlers** and will never appear as user agents in your logs. They are opt-out control tokens — Googlebot and Applebot do the actual fetching, and those tokens only govern whether the content may be used for AI training. Your `robots.txt` handles them correctly; just don't expect log hits.

**What good looks like after 30 days:** regular `GPTBot` / `ClaudeBot` / `PerplexityBot` hits across the site, and at least occasional `ChatGPT-User` or `Claude-User` hits — the latter means real people's questions are pulling your pages into real answers. That is the actual objective, measured directly.

---

## Sequencing summary

| When | Do | Why now |
|---|---|---|
| **This week** | GitHub org profile + README · npm metadata · LinkedIn HQ/founded fields | Free, instant, fully controlled, and they are the *source* of the Singapore error |
| **Weeks 2–4** | Claim Crunchbase · merge LinkedIn duplicate · founders' profiles · PitchBook correction | Fixes the aggregators — but only after the sources above stop feeding them Singapore |
| **Weeks 3–6** | Wikidata item · dppindex.eu · Tokeny map | Structured corroboration and the two highest-value niche directories |
| **Month 2–3** | StartupHub.ai · Tracxn/Dealroom · Medium canonicals · incubator portfolio pages | Reaches the listicle layer that assistants actually retrieve |
| **Month 2–6** | Press re-activation · podcasts · the DPP provider roundup | Slow, decisive, compounding |
| **Monthly, ongoing** | Query log · Search Console · crawler log check | The only way to know any of it worked |

**If you only do three things:** the GitHub org profile, the npm package metadata, and the LinkedIn headquarters field. Together they are about ninety minutes, they cost nothing, and they remove the primary public evidence for the single most damaging thing assistants currently say about your company.
