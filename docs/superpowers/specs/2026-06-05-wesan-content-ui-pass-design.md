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

## Open decisions — need Bekircan (facts/voice only he owns; NOT auto-applied)
These were **not** committed; they are proposals awaiting a yes/no:

1. **Stale "as-of" dates** (today is June 5; site is stamped May): `/now` "UPDATED · MAY 2026 / NEXT UPDATE · JUNE" (the promise is now overdue), about "BY THE NUMBERS · MAY 2026", trust "VERSION 2026.05", investors "CAPITAL TABLE · MAY 2026", home hero photo caption "İZMİR, MAY 2026". *Historical* authorship dates (mission "WRITTEN MAY 2026", legal "updated 2026.05.23") should stay — bumping them would falsify history.
2. **`/now` June refresh** — the page promises monthly updates; June's content needs your real status (I won't fabricate events).
3. **Notch aggregate status** — many pages say "3 products in beta" but Notch is WIP/in-dev (home telemetry "3 PRODUCTS SHIPPING", about "3 IN BETA", divisions "3 PRODUCTS · BETA", mission "Three products in beta", press boilerplate/facts). Recommend "2 in beta + 1 in development" framing.
4. **About socials** — `@bekircan` / `github` are `href="#"` (broken). Give real URLs to wire, or drop them.
5. **Architectural metaphor** — roof/rooms/house/cathedral appears 30+ times; proposal is to cut ~50% (esp. sitemap group labels, investors, careers) and keep it in the tagline + mission.
6. **Mission body** — circular opener ("a company that is good at being a company"), the "Some of it might not pay back at all" redundancy, and the founder quote duplicated verbatim on home + mission + newsroom.
7. **Lower-priority global** (outside the 4 pages, batch later): trademark ® vs ™ (legal vs press contradict), Studio base TBD vs İstanbul (telemetry vs newsroom/careers), calendar placeholder events, press kit "Download ZIP · 14 MB" with no asset.

## Not doing (YAGNI)
Mass refactor of all 26 routes; rewriting Bekircan's literary voice unilaterally; the other 4 table pages until their slice comes up.
