# Wesan Holdings — Project Dashboard

> Date: 2026-05-24
> Founder: Bekircan Akyuz
> Wesan status: forming (yarı-gerçek, henüz aktif tüzel kişilik değil)
> Structure: Wesan parent · Friday + Dante divisions · Studio + Industries planned

---

## 1. Project map — overview

| # | Project | Type | Path | Status | Lines |
|---|---------|------|------|--------|-------|
| 1 | **Wesan corporate site** | Marketing site | `priv/wesan-site/` | ✓ Built · content/en.json | 22 pages |
| 2 | **Friday marketing site** | Marketing site | `priv/friday/web/` | ✓ Built · port edildi | 10 pages |
| 3 | **Friday app** (daemon+desktop+mobile) | Real product | `priv/friday/` | ✓ Real, in development | ~10k+ LOC Rust+TS |
| 4 | **Dante app** (monorepo) | Real product | `priv/notes/dante/` | ✓ Real, RevenueCat live | ~50k+ LOC |
| 5 | **Legacy designs dir** | Source / archive | `priv/wesan/` | ⚠ Cleanable | n/a |
| 6 | Friday private docs | Backup | `priv/friday-private-docs/` | Reference only | n/a |

---

## 2. Wesan corporate site — `priv/wesan-site/`

**Purpose:** wesan.com — parent brand site, mission/divisions/about/etc.
**Status:** ✓ Build clean (34 routes), content/en.json refactor tamamlandı
**Stack:** Next.js 16 + React 19 + TypeScript + Turbopack + bun · no Tailwind · App Router · SSG
**Fonts:** Inter, Inter Tight (display), Newsreader (serif), JetBrains Mono — `next/font/google`
**Aesthetic:** Architectural / draftsman — paper + ink + steel-blue accent + ruler marks + title blocks

### Routes (22 statik + 11 SSG = 34)

| Route | İçerik kaynağı | Notes |
|---|---|---|
| `/` | `pages.home` | Hero · marquee · manifesto · bento · newsroom strip · founder letter |
| `/about` | `pages.about` | Founder · story timeline · governance · numbers |
| `/mission` | `pages.mission` | TracingBeam essay · Pantheon SVG · three commitments |
| `/now` | `pages.now` | Monthly note — what I'm doing · divisions stand · one thing on mind |
| `/divisions` | `pages.divisions` | 3 div-rows (Software · Studio · Industries) |
| `/software` | `pages.software` | Hero · 3 products · release log · principles |
| `/studio` | `pages.studio` | Hero · 2 projects (Studio-01/02) · principles |
| `/studio-01` | `pages.studio01` | Narrative game · answers · library · timeline |
| `/studio-02` | `pages.studio02` | Short-film series · 6 shorts · format · timeline |
| `/industries` | `pages.industries` | Hero · 3 sectors · 6-step roadmap |
| `/careers` | `pages.careers` + `collections.careers` | 5 role list |
| `/careers/[slug]` | `getRole(slug)` | 5 SSG: staff-engineer, senior-designer, founding-engineer, game-director, technical-artist |
| `/contact` | `pages.contact` | 3 emails · 2 offices |
| `/newsroom` | `pages.newsroomIndex` + `collections.newsroom` | 6 release list |
| `/newsroom/[slug]` | `getNewsItem(slug)` | 6 SSG: friday-v018, wesan-studio-forming, notch-public-beta, dante-v06, industries-announced, wesan-announces-itself |
| `/reports` | `pages.reports` | Annual field reports schedule |
| `/trust` | `pages.trust` | Today + gaps + subprocessors + vuln contact |
| `/legal` | `pages.legal` | 5-tab (privacy/terms/cookies/trademark/dpa) |
| `/investors` | `pages.investors` | No outside investors · cap table · principles · FAQ |
| `/press` | `pages.press` | Logos · colors · typography · boilerplate · fast facts |
| `/calendar` | `pages.calendar` | 4 events · speak-at-event CTA |
| `/sitemap` | `pages.sitemap` | 5 groups · cards + tree pre |

### Components

| File | Purpose |
|---|---|
| `app/_components/lib.tsx` | Photo, Counter, Marquee, TracingBeam, SectionHead, SpotlightCard, Telemetry, DraftingFrame, useReveal |
| `app/_components/shared.tsx` | Wordmark, Nav (hamburger + drawer), Footer |
| `app/_components/icons.tsx` | 16-icon SVG library |
| `app/_components/cmdk.tsx` | ⌘K command palette |

### Content / data layer

| File | Purpose |
|---|---|
| `content/en.json` | **1246 satır** — tüm site content (CMS-ready) |
| `lib/content.ts` | Typed loader: `getContent()`, `getRole(slug)`, `getNewsItem(slug)`, `getRoles()`, `getNewsItems()` |

### Yapılması gerekenler (TODO)

- [ ] **CMS entegrasyonu** — `lib/content.ts:getContent()` switch from JSON to CMS fetch (Strapi/Sanity/Payload/custom)
- [ ] **i18n** — `content/tr.json` ekle, `getContent(lang)` parametresi aktif olsun, Next.js i18n routing veya middleware
- [ ] **Founder gerçek bilgileri** — S. YILDIZ → Bekircan Akyuz (interview answers incoming)
- [ ] **Friday/Dante gerçek rakamlar** — site'deki user count, revenue rakamları placeholder
- [ ] **Wesan tüzel kişilik tamamlanınca** — kayıt no, tax id, gerçek office adres, real cap table
- [ ] **Studio + Industries** — şu an placeholder/aspirational, real plan oluşunca güncellenecek
- [ ] **Press kit ZIP** — gerçek logo SVG dosyaları, founder fotoğrafları
- [ ] **Photo gerçek görseller** — şu an Unsplash CDN hot-link (legal risk; eventually upload to own CDN)
- [ ] **Domain + deploy** — wesan.com domain, Vercel/Cloudflare Pages deploy
- [ ] **SEO** — sitemap.xml, robots.txt, OG images per page, Schema.org markup
- [ ] **Analytics** — placeholder (Plausible/Fathom — site'de "no third-party analytics" diyor; karar)

---

## 3. Friday marketing site — `priv/friday/web/`

**Purpose:** friday.run — coding agent landing page, downloads, docs preview, pricing
**Status:** ✓ Build clean (11 routes), React+Babel mock'tan Next.js'e port edildi
**Stack:** Next.js 16 + React 19 + TypeScript + Turbopack + bun · no Tailwind · App Router · SSG
**Fonts:** Geist + Geist Mono — `next/font/google`
**Aesthetic:** Liquid Glass — translucent panels, backdrop blur, mono ink palette
**Special:** WebGL **silk shader** background (vanilla WebGL, `app/_components/silk-background.tsx`)

### Routes (11)

| Route | Content |
|---|---|
| `/` | Hero · agent product mock · stat strip · features grid · workflow showcase · install terminal · testimonial · CTA |
| `/features` | 4 grup (Agent · Context · Models · Control) · specs tablosu |
| `/pricing` | 4 plan (Hobby/Pro/Team/Enterprise) · token table · FAQ |
| `/customers` | Logo wall · 1.2M PR stat · 3 case study (Linear, Supabase, Plausible) |
| `/changelog` | Timeline · 5 release (v0.18, 0.17.4, 0.17.0, 0.16.0, 0.15.0) |
| `/blog` | Featured + grid · article view (client-side state) |
| `/docs` | Sidebar nav · content · TOC · code blocks |
| `/download` | Platform tabs (macOS/Linux/Windows) · past releases |
| `/enterprise` | Form (5 fields) · 8 compliance cards |
| `/auth` | Sign in / sign up · GitHub/Google · terminal art panel |

### Components

| File | Purpose |
|---|---|
| `app/_components/silk-background.tsx` | WebGL shader, 30FPS mobile / 60 desktop, pauses off-screen |
| `app/_components/shared.tsx` | Nav (hamburger + drawer) · Footer · SectionHead · FeatureCard · TerminalBlock · CTABlock · StatStrip · FloatingChip |
| `app/_components/icons.tsx` | 40 icon SVG library |

### Yapılması gerekenler

- [ ] **Content/en.json refactor** — Wesan gibi tüm content JSON'a alınmalı (şu an inline)
- [ ] **CMS entegrasyonu** — Wesan ile aynı pattern
- [ ] **Gerçek content** — şu anki "Linear, Supabase, Plausible" customer stories kurgusal; gerçek müşteri toplandığında değiştir
- [ ] **Gerçek pricing** — şu anki rakamlar ($0/$12/$30/Custom) aspirational
- [ ] **Gerçek download binary** — friday.run/install henüz yok; daemon+desktop GA'a kadar placeholder
- [ ] **Domain + deploy** — friday.run satın alma + deploy
- [ ] **Docs syncing** — şu an placeholder Quickstart; gerçek docs friday-private-docs'tan publish ile sync
- [ ] **Auth flow** — şu an mock form; daemon'a connect olacak gerçek device-link OAuth gerek
- [ ] **Blog system** — şu an in-page state; MDX veya CMS'e bağlanmalı

---

## 4. Friday actual product — `priv/friday/`

**Purpose:** Agent-native development OS. Daemon + thin clients (desktop/CLI/mobile)
**Status:** Real, in active development (v0.18 working name in marketing site)
**Architecture:**
```
Thin Clients (desktop/mobile/CLI/TUI/web)
    ↓ gRPC
Friday Daemon (Rust)
    ↓ subprocess (stream-json)
Claude Code CLI / Agent CLIs
```

### Stack

| Layer | Tech |
|---|---|
| Daemon | Rust · Tokio · Tonic (gRPC) · libsql |
| Desktop | Tauri 2 · **SolidJS** · Vite · TypeScript · @tauri-apps/* plugins · CodeMirror 6 (inferred) |
| Mobile | Expo · React Native (planned) |
| Terminal | xterm.js (desktop), portable-pty (daemon) |
| Git | gitoxide (read), subprocess git (write) |
| Agent runtime | Claude Code CLI subprocess |
| Protocol | gRPC + protobuf · ACP · MCP |

### Directories

- `daemon/` — Rust gRPC server (Tokio + Tonic)
- `desktop/` — Tauri 2 + SolidJS · React Scan dev mode flag · clipboard/dialog/deep-link/fs plugins
- `proto/` — `friday.proto` protobuf schema
- `docs/` — Architecture, roadmap, research
- `web/` — Marketing site (Next.js, item #3 yukarıda)
- `friday-private-docs/` (separate dir) — Private architecture docs, full backup bundle

### Yapılması gerekenler

- [ ] v1.0 agent loop (yeniden tasarım sürüyor)
- [ ] Multi-agent runtime (v0.18 said shipped — verify in code)
- [ ] PTY sandbox primitives
- [ ] gRPC v1.0 protocol RFC
- [ ] Mobile client (Expo) — başla
- [ ] Code signing (macOS · Windows)
- [ ] Install script · friday.run/install
- [ ] Linux/aarch64 binary
- [ ] Background sessions (`friday detach`)
- [ ] Public release · GA target Q3 2026 (per marketing site)

---

## 5. Dante actual product — `priv/notes/dante/`

**Purpose:** All-in-one daily tracker (tasks, workouts, nutrition, spending, habits)
**Status:** ✓ Real, RevenueCat 4-tier abonelik aktif, Apple Team ID `AZPJSKX9C9`, Bundle `com.dante.os`, Domain `danteapp.co`
**Architecture:** Bun workspaces monorepo

### Apps

| App | Stack | Purpose |
|---|---|---|
| `apps/api/` | Bun + Elysia 1.2 + Anthropic SDK | REST API |
| `apps/mobile/` | Expo 54 + RN 0.81 + RevenueCat + Sentry + Skia + better-auth + HealthKit | iOS/Android |
| `apps/web/` | Next.js + TanStack Query + Table | Landing/privacy/terms web |
| `apps/mobile-task/` | (sub-product?) | TBD |

### Packages

- `packages/contracts/` — TypeScript shared types
- `packages/core/` — Business logic
- `packages/knowledge/` — Shared MD knowledge base (AI agents)
- `packages/ui/` — Shared UI components

### Native + infra

- `ios/` — Native Xcode project (DanteWidgetExtension included)
- `supabase/` — DB migrations
- `deploy/` — Deployment scripts
- `scripts/` — Build scripts (DSLD supplement fetcher, USDA food DB build)
- Reference DB: SQLite ~3.7MB bundled (foods/exercises/supplements FTS5)

### Yapılması gerekenler (genel — kullanıcının kendi todo'su var)

- Site refactor: Wesan/Friday pattern ile `apps/web/` Next.js'e content/en.json kur (planlandı, beklemede — Dante UI tasarımı bitmemiş, transkriptte konuştuğumuz)
- Health app pozisyonlama: General health + mental + earthy/clinical/performance mix paleti üzerinde çalışma

---

## 6. Legacy designs dir — `priv/wesan/`

**Status:** ⚠ Temizlik bekliyor. Friday & Dante tasarımları zaten port edildi/silindi.

| Kalan | Ne | Aksiyon |
|---|---|---|
| `wesan-main/` | Wesan corporate site React+Babel kaynağı | Silinebilir — `priv/wesan-site/`'e port edildi |
| `wesan/` (alt-klasör) + `wesan.html` | Eski v0.1 sketch, 1355 satır designer's document | Arşivle (`_archive/wesan-sketch-v0.1/`) |
| `dante/` + `dante.html` | Dante landing mock | Dante UI tamamlanınca port edilecek; şimdilik tut |
| `screens/` + `app.jsx` + `friday.css` + `index.html` | Friday ürün UI mock'u (React) | Arşivle veya sil — Friday gerçek desktop SolidJS, port edilmeyecek |
| `uploads/` | İçerik bilinmiyor | İçerik kontrol et |
| `cd.md` | CLAUDE.md kopyası | Sil veya repo'nun CLAUDE.md'si olarak rename |
| `design-canvas.jsx` + `tweaks-panel.jsx` + `i18n.jsx` + `icons.jsx` | Designer's tooling | Arşivle |

---

## 7. Diğer priv/ projeleri (referans, bu görevin scope'u dışında)

| Dir | Tahmin |
|---|---|
| `priv/agent-team/` | Bağımsız agent ekibi projesi |
| `priv/begahome/` | Levios Fullstack Template tabanlı |
| `priv/block-forge/` | Audio/data/scenes — multimedia? |
| `priv/canakyuz.co/` | Kişisel portfolio site |
| `priv/Empire-Inc/` | empireinc-app + web alt klasörler |
| `priv/helm/` | Bilinmiyor |
| `priv/levios/` | Fullstack template |
| `priv/lib/` | company-office, Maestro, medusa-template |
| `priv/wops/` | Bilinmiyor |

---

## 8. Bu seansta yapılanlar — özet

### Wesan corporate site (priv/wesan-site/)
1. Next.js 16 bootstrap (TypeScript + App Router + Turbopack, no Tailwind)
2. 1058 satır custom CSS port (drafting frame, glass aesthetic, bento, tracing beam, marquee, cmdk)
3. 4 font ailesi (Inter, Inter Tight, Newsreader, JetBrains Mono) — next/font
4. 20 sayfa port (home, about, mission, now, divisions, software, studio, studio-01/02, industries, careers, contact, newsroom, reports, trust, legal, investors, press, sitemap, calendar)
5. ⌘K command palette
6. DraftingFrame (corner title blocks + ruler marks)
7. Mobile responsive (hamburger nav, breakpoint overrides)
8. SpotlightCard `href` prop ile broken `display:contents` bug fix
9. Lightning CSS backdrop-filter dedupe bug fix
10. `/careers/[slug]` + `/newsroom/[slug]` dynamic detail pages (SSG via generateStaticParams, async params)
11. **content/en.json refactor** — tüm site content (1246 satır) JSON'da
12. **lib/content.ts** — typed loader, CMS-ready

### Friday marketing site (priv/friday/web/)
1. Next.js 16 bootstrap (aynı stack)
2. React+Babel mock'tan port (10 sayfa)
3. Silk shader WebGL background (`silk-background.tsx`)
4. Liquid Glass design system
5. Mobile responsive (hamburger nav)
6. Lightning CSS backdrop-filter bug fix

### Çapraz
- Hem Wesan hem Friday: `-webkit-backdrop-filter` Lightning CSS dedupe bug fix
- Hem Wesan hem Friday: hamburger menu + mobile drawer
- Friday tasarım dosyaları priv/friday/web/'e taşındı (web-old/ silindi)

---

## 9. CMS dashboard için hazır şema

`content/en.json` yapısı — CMS'in bunu birebir karşılaması yeterli:

```ts
{
  _meta: { lang, version, updated },
  common: { brand, tagline, founded, location, year, footerCopyright, footerEst, footerStatus },
  nav:    { links: NavLink[], search, searchPlaceholder, contact },
  footer: { blurb, columns: FooterColumn[] },
  pages: {
    home, mission, now, careers, contact,
    newsroomIndex, newsroomDetail,
    about, divisions, software, studio, industries,
    studio01, studio02, calendar, reports, trust,
    legal, investors, press, sitemap
  },
  collections: {
    careers: Role[],      // 5 item, slug + 11 alan
    newsroom: NewsItem[]  // 6 item, slug + body blocks (p/h/list/quote)
  }
}
```

CMS modeli (Strapi/Sanity/Payload):
- **Singletons (page documents):** home, mission, now, careers (head + whatYouGet + detail labels), contact, newsroomIndex, newsroomDetail, about, divisions, software, studio, industries, studio01, studio02, calendar, reports, trust, legal, investors, press, sitemap
- **Collections:**
  - `careers` — Role schema (slug, div, team, product, name, desc, where, type, lede, responsibilities[], firstSixMonths[], requirements[], niceToHave[], comp, reportingTo, teamMeta)
  - `newsroom` — NewsItem schema (slug, date, who, what, lede, featured, body[blocks], links[], contact)
- **Globals:** common, nav, footer
- **i18n:** locale switch (en şu an; tr eklenecek)

`lib/content.ts:getContent()` içindeki tek satır değişikliği ile CMS fetch'e geçer.

---

## 10. Hemen sırada — öncelik sırası

### Yüksek öncelik
1. **Founder profile interview tamamlama** (devam ediyor) — S. YILDIZ → Bekircan Akyuz, gerçek background/projeler/vizyon
2. **Wesan content gerçekleme** — en.json'daki founder, about, mission, now, contact bilgilerini gerçek bilgilerle güncelle
3. **CMS seçimi + entegrasyonu** — Sanity / Strapi / Payload / custom karar

### Orta öncelik
4. Friday web için aynı content/en.json refactor pattern
5. Domain + deploy (wesan.com, friday.run)
6. i18n (Türkçe destek — content/tr.json)
7. SEO baseline (OG images, structured data, sitemap.xml, robots.txt)

### Düşük öncelik / planlama
8. Wesan tüzel kişilik tamamlama (kayıt sonrası site'ye legal info)
9. Press kit gerçek dosyalar (logo SVG, founder photo)
10. Photo asset migration (Unsplash hot-link → own CDN)
11. Legacy `priv/wesan/` dir temizlik (arşivleme)
12. Friday product GA (v1.0)
13. Dante UI tamamlama → marketing site refactor
