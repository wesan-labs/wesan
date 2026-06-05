# Wesan — content + UI consistency pass

**Date:** 2026-06-05 · **Approach:** Hybrid · **Priority pages:** Home · Software · Now · Mission

## Goal
1. **Content** — polish voice, fix stale dates, close gaps/broken links, tighten IA. No ground-up rewrites; the copy is already strong.
2. **UI consistency** — pages must consume the local package (`app/_components/`) and design tokens (`app/globals.css`) consistently, not hand-roll duplicate markup or bypass tokens with inline values.

## Method (evidence → observation → inference → judgment)
Two read-only audits (UI + content) ran first. Findings were verified against the real files before any edit — e.g. the audit's "home should use `<Telemetry>`" was checked against the component API (it accepts `ReactNode` values, so a `<Counter>` fits → valid), and the "`.event-grid` exists but unused" claim was corrected (only its mobile override exists in CSS; the desktop grid is intentionally inline).

## Phases
- **Faz 0 — content integrity** (safe, fact-free or self-evident): broken links, internal self-contradictions.
- **Faz 1 — package foundation**: extract the genuinely-duplicated patterns the priority pages need; adopt existing primitives; kill token bypass. YAGNI — not all 5 table pages at once.
- **Faz 2 — vertical polish**: bring each priority page to full finish (voice + IA + token discipline), reviewed page by page.

## Done in this pass
- `globals.css`: added `.data-table` (+`.on-dark`) utility — one class for the table markup duplicated across software/studio/industries/reports/trust. Row status colours stay inline (data, not style).
- `software/page.tsx`: release-log `<table>` migrated to `.data-table on-dark` (killed ~20 lines of inline styling).
- `page.tsx` (home): manual `.telemetry` div → `<Telemetry>` (Counter passed as the value node — identical DOM).
- `now/page.tsx`: removed redundant inline `fontFamily/fontSize` on three `.h-3` headings (`.h-3` already supplies them).
- `en.json` — safe content fixes:
  - careers `industriesNote`: `href="#"` → working `mailto:hello@wesan.co?subject=Industries waiting list`.
  - newsroom `wesan-announces-itself` lede: removed the claim "Wesan A.Ş. is registered in İstanbul. Two desks…" which **contradicts the post's own body** ("one person, one desk in İzmir, registration to follow") and the investors page ("no formal entity registration yet"). Now: "Wesan starts in İzmir — one desk, three divisions, one mission. Entity registration to follow. Today is day one."
  - software telemetry `"03 IN BETA"` → `"03 · IN BUILD"` — the same page's product badges show BETA/TESTFLIGHT/**WIP**, so "all 3 in beta" was internally false.

## Round 2 — applied (user said "continue in order"; my flagged defaults, all reversible)
Each default leans on the dominant existing statement or the conservative non-fabricating option.
- **Dates** (`af75779`): bumped *as-of fact snapshots* (about numbers, cap table → JUNE 2026) and `_meta.updated` (today); undated the decorative hero caption. Kept historical authorship dates (mission/reports "WRITTEN MAY", legal "updated 05.23") and the `/now` "UPDATED · MAY" stamp (truthful last update) — only fixed the overdue promise "NEXT UPDATE · JUNE" → "LATE JUNE". Skipped trust "VERSION 2026.05" (reviewed quarterly, not monthly).
- **Notch status** (`b5268b3` + follow-up): all aggregate "3 in beta" → "in build" / precise (home, about, divisions, mission, software, press, about-timeline). Notch is in development, not beta. "in build" is the safe umbrella given the source itself disagrees (newsroom April said "early beta", software card says WIP).
- **Dead socials** (`1baab94`): removed the two `href="#"` entries (twitter/github), kept "reach me → /contact".
- **Metaphor trim** (`b10163e` + `cmdk`): de-metaphored sitemap group labels + cmdk palette sections (ROOF/ROOMS/BOOKS → COMPANY/DIVISIONS/REPORTING), "cathedral page" → "front door", about governance labels, and stray "roof" in investors/careers/industries. Kept the load-bearing uses (tagline, "Three divisions. One roof.", mission "the roof protects the rooms", manifesto "three rooms").
- **Global integrity** (`3b3c797`): trademark ® → ™ pending (conservative; legal contradicted press); Studio base TBD → İSTANBUL · FORMING (matches newsroom/careers); studio "Two projects, neither announced" → "both in formation" (self-contradiction); dropped the literal "this is a placeholder" calendar copy.

## Still genuinely open — need Bekircan
1. **`/now` June content** — I only fixed the overdue promise; the real June update needs your status (won't fabricate events).
2. **About socials** — give real Twitter/GitHub URLs to restore, or leave removed.
3. **Press kit assets** — `wesan-wordmark.svg`, `wesan-mark.svg`, the 14 MB ZIP **do not exist in `/public`** (only default CNA SVGs). Every "Download" CTA on /press is non-functional. Add the real files, or switch the copy to "assets on request"? — your call (didn't touch the press download copy).
4. **Entity "A.Ş." sweep** — fixed the newsroom lede + trademark line, but "Wesan A.Ş." still appears in legal terms/DPA. If truly in-formation, that suffix is premature there too — confirm before I sweep the legal pages.
5. **Verify my defaults** — trademark ™ (or is it really ® in TR?), Notch beta-vs-dev, Studio İstanbul. Veto any and I revert.
6. **Mission voice** — I re-read and judged the audit's "circular opener" and "redundant" flags as *defensible rhetoric* — left them. The one real item: the founder quote is verbatim on home + mission; want me to vary one?

## Known pre-existing issues (NOT introduced here)
- `bun run lint` was already red: 4 × `react-hooks/set-state-in-effect` (cmdk:87, lib:155/228, shared:39) + 3 × `<img>` warnings (divisions/industries/mission). All pre-date this pass. Offer to fix in a separate `chore(lint)` pass.

## Not doing (YAGNI)
Mass refactor of all 26 routes; rewriting Bekircan's literary voice unilaterally; the other 4 table pages until their slice comes up.
