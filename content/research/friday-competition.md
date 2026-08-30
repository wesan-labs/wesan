# Friday - Competitive Landscape & GTM Research

**Hazırlayan:** Friday product audit  
**Tarih:** Mayıs 2026  
**Konu:** Coding agent pazarındaki Friday'in yeri, differansiyator, fiyatlama benchmark, go-to-market kanalları.

---

## TL;DR (3 cümlede)

Coding agent pazarı **2025'ten 2026'ya kalabalıklaştı, ama segmentlere bölündü**: IDE-integrated (Cursor/Windsurf), terminal-native (Claude Code/Codex), BYOM-CLI (Cline/Aider/OpenCode), ve background/cloud agents (Devin, Builder.io). Friday'in mimari pozisyonu - **Rust daemon + multi-surface clients (desktop/mobile/CLI) + Claude Code subprocess runtime** - bu segmentlerin **hiçbirinde tam yerleşmiyor**; daha çok onların **üzerinde bir orchestration katmanı**. Bu **"agent-native dev OS"** pozisyonu özgün ve savunulabilir - ama Claude Code'un altyapısına bağımlılık + Cognition/Cursor/Anthropic'in bu yöne genişleme riski + indie founder olarak distribution dezavantajı, üçü birlikte hızlı hareket gerektiriyor.

---

## 1. Pazar haritası - 2026 Q2 itibariyle

### 1.1 Dört ana kategori

| Kategori | Örnekler | Pricing | Friday'e yakınlık |
|---|---|---|---|
| **IDE-integrated agents** | Cursor, Windsurf, Antigravity 2.0, Copilot | $10-40/ay + Max tier $200 | ⛔ Farklı kategori (IDE değiliz) |
| **Terminal-native agents** | Claude Code, OpenAI Codex, Gemini CLI | $20+/ay (Claude Code), heavy: $100-200 | ✓ Yakın - Friday Claude Code'u wrap ediyor |
| **BYOM CLI agents** | Cline, Aider, OpenCode, Kilo Code | Free + API rates | ⚠️ Felsefe yakın (BYOM-friendly) |
| **Background/cloud agents** | Devin (Cognition), Builder.io agents, Sculptor (Imbue) | $500+/ay enterprise | ⚠️ Friday'in detach/background pozisyonu burayla kesişir |
| **Spec-driven IDEs** | Kiro (event-driven hooks) | New, pricing TBD | Ayrı segment |

### 1.2 Friday'in özgün konumu

Friday **kategori değil, orkestrasyon katmanı**:

```
                    [ FRIDAY DAEMON (Rust + gRPC) ]
                            ↓ subprocess
                    [ Claude Code CLI ]
                       ↑ aux runtime
                    [ other agent CLIs (planned) ]
                       ↓ orchestrates
                    [ Multiple thin clients ]
                    desktop · mobile · CLI · web
```

**Bu pozisyon kimseyle 1:1 eşleşmiyor:**
- Cursor: IDE-first, agent ikincil. Friday tersi.
- Claude Code: Tek surface (terminal), tek backend (Anthropic). Friday multi-surface + multi-backend planı var.
- Cline/Aider: IDE-extension olarak çalışır. Friday standalone daemon.
- Devin: Cloud-only, fully autonomous. Friday local-first, human-in-the-loop.

**En yakın mental model:** *"Coding agent için bir tmux + supervisor + protocol"* - yani agents'in **runtime'ı**, kendi başına agent değil.

---

## 2. Komparatif analiz - kritik rakipler

### 2.1 Claude Code (Anthropic)

**Friday'in en kritik referansı**, çünkü Friday onu subprocess olarak çalıştırıyor.

| Boyut | Claude Code | Friday |
|---|---|---|
| Surface | Terminal | Terminal + Desktop (Tauri) + Mobile (Expo) |
| Backend | Anthropic only | Pluggable (Claude Code subprocess + planned others) |
| Background | Built-in detach (May 2026) | Daemon-native, OS-level |
| Pricing | $20/ay Pro, Max $100/200, heavy $100-200/ay | Free beta, BYOM yol açık |
| Distribution | Anthropic brand, "we're the model maker" | İndie, build-in-public |
| Lock-in | Yüksek (Anthropic only) | Düşük (model-agnostic vizyon) |

**Risk:** Anthropic Claude Code'a daemon mode, mobile companion, multi-backend support eklerse Friday'in differansiyatörü zayıflar. **Olasılık:** orta-yüksek (May 2026'da Claude Code zaten background work eklendi).

**Fırsat:** Anthropic kendi platformunu açmaz (lock-in için). Friday "Claude Code'un Tauri/mobile sürümü" niş'inde uzun süre kalabilir - özellikle non-Anthropic backend desteği eklerse.

### 2.2 Cursor (en büyük yarış)

| Boyut | Cursor | Friday |
|---|---|---|
| Form factor | VS Code fork | Standalone daemon + clients |
| Yaş | 2 yıl, $500M+ valuation, milyonlarca kullanıcı | 0 yıl, indie beta |
| Pricing | $20 Pro, $40 Business | TBD |
| Agent mode | Var (2025'ten beri) | Core proposition |

**Friday Cursor'a alternatif değil - alternatif kategori.** Cursor IDE arar, Friday daemon arar. Aynı kullanıcı her ikisini kullanabilir.

**Distribution dezavantajı kritik:** Cursor'un milyonlarca kullanıcısı, Anthropic/OpenAI ortaklıkları, ve $50M+ marketing bütçesi var. Friday'in tek silahı: **özgün mimari + indie hikâye + Hacker News audience**.

### 2.3 Cline / Aider / OpenCode (BYOM CLI'lar)

| Boyut | Cline | Friday |
|---|---|---|
| Form factor | VS Code extension | Standalone |
| Pricing | Free + user pays API | Free beta |
| Background | None | Daemon |
| Mobile | None | Yes |
| Felsefe | "Your IDE, your keys" | "Your daemon, your keys" |

**En yakın felsefe paydaşları** - Friday onlardan öğrenebilir (community building, BYOM economics). Rakip değil, mütemmim.

### 2.4 Devin / Cognition (background/autonomous)

| Boyut | Devin | Friday |
|---|---|---|
| Surface | Web dashboard | Desktop/mobile/CLI |
| Autonomy | Full (you assign task, walk away) | Human-in-the-loop |
| Pricing | $500+/ay enterprise | Free → TBD |
| Target | Enterprise teams | Individual devs + small teams |

**Friday "halfway Devin"** - background work yapar ama mutlaka diff review'a getirir. Bu pozisyon, Devin'in trust sorunlarından (autonomous = riskli) kaçınıp Cursor'un sürekli baş başa olma yorgunluğundan da kurtulur.

---

## 3. Pricing benchmark ve önerilen tier yapısı

### 3.1 2026 pricing referansları

| Ürün | Free | Entry | Pro | Max/Enterprise |
|---|---|---|---|---|
| GitHub Copilot | Limited | $10 | $19 Business | $39 Enterprise |
| Cursor | Trial | $20 Pro | $40 Business | Custom |
| Windsurf | - | $20 Pro | $40 Team | $200 Max |
| Claude Code | - | $20 Pro | $100 Max5 | $200 Max20 |
| Cline | Free | - | - | - (BYOM) |
| Aider | Free | - | - | - (BYOM) |
| Devin | - | - | - | $500+ |

**Sweet spot:** $15-25/ay individual tier, $40-60 team tier - Cursor/Claude Code aralığı.

### 3.2 Friday için önerilen tier yapısı (v1.0'da)

| Tier | Hedef | Fiyat | Ne içerir |
|---|---|---|---|
| **Beta** (şu an) | Early adopters | $0 | Tüm features, davetli, BYOM (kullanıcı kendi Anthropic key'i) |
| **BYOM** (v1.0) | Indie devs, OSS contributors | $0 | Daemon + tüm clients, kullanıcı kendi key'i, community support |
| **Pro** | Solo professionals | $20-25/ay | BYOM dahil, premium features (background queues, multi-project, priority cloud sync), email support |
| **Team** | 2-10 dev teams | $40-60/seat/ay | Pro + shared workspaces, SSO, audit logs |
| **Enterprise** | 10+ teams | Custom | Self-hosted daemon, SLA, dedicated engineer |

**Strateji notu:** **BYOM-free her zaman kalsın.** Bu Cline'ın güç noktası, indie community için kritik. Pro tier'ı BYOM **üzerine** premium katman olarak satın (Pro = BYOM + extras), Cursor pattern'i değil (Pro = bundled API access).

### 3.3 Pricing pozisyonlama mesajı

> "Free forever with your own key. Pro adds the things solo devs actually need: background queues, multi-project memory, mobile companion."

---

## 4. Go-to-market - kanallar ve strateji

### 4.1 Friday'in distribution avantajları/dezavantajları

**Avantajlar:**
- ✓ Solo founder build-in-public uygun (transparent, indie cred)
- ✓ Rust + Tauri + gRPC = HN audience'ın sevdiği stack
- ✓ Mobile companion = press-worthy (kimsede yok)
- ✓ Claude Code'a complement = Anthropic community içine sızabilir
- ✓ Can'ın İstanbul→London geçişi narrative değerli

**Dezavantajlar:**
- ✗ 0 Twitter audience (Can)
- ✗ Cursor/Anthropic gibi devler aynı pazarda
- ✗ "Why Friday and not Claude Code?" sorusu her ziyaretçide
- ✗ Tek geliştirici → release tempo yavaş, kullanıcı güveni yavaş kurulur

### 4.2 Öncelikli kanallar (rank order)

| # | Kanal | Neden | İlk adım |
|---|---|---|---|
| 1 | **Hacker News (Show HN)** | Friday'in mimari hikâyesi (Rust daemon + Tauri + gRPC + Claude Code wrap) tam HN audience. Tek launch = $0, 24 saat içinde sinyal. | v0.x BETA stabil olur olmaz "Show HN: Friday, a daemon-first coding agent" - mimari diagram, neden Cursor/Claude Code değil, kim için. |
| 2 | **Twitter/X build-in-public** | Pieter Levels 10 yıl bu kanalla 600K audience. Friday weekly progress log Twitter'da → Hacker News'a yönlendirir. | Can personal account aktif et, haftalık "Friday weekly" thread, screenshot+code+lesson. |
| 3 | **Claude Code community** | Anthropic Discord, Reddit r/ClaudeAI, official forums. Friday Claude Code'un üst katmanı → bu community'de "Claude Code'u nasıl daha güçlü kullanabilirim" sorusunun cevabı olarak konumlan. | Discord'da haftalık tips/use cases paylaş, sonra Friday'i feature olarak tanıt. |
| 4 | **Indie Hackers** | Solo founder + bootstrapping topluluğu | Can'ın "5 yıl self-taught, ilk venture Wesan" hikâyesi IH topluluğunda güçlü |
| 5 | **Engineering blog (kendi)** | Friday'in nasıl çalıştığını detayda göstermek (Rust daemon design, gRPC protocol, Tauri integration) | Friday docs ile birlikte ayrı bir engineering blog (friday.run/blog veya wesan.co/blog/friday) |
| 6 | **dev.to / Lobsters / Reddit r/programming** | Mimari deep-dives için ikincil kanal | HN launch sonrası repurpose |
| 7 | **Sponsorluklar** | Bytes/JS Party gibi developer newsletter'lar | Revenue gelene kadar pahalı |

### 4.3 Launch playbook (önerilen)

**T-30 gün (şimdi):**
- Friday landing sayfası ayrı domain'de (friday.run veya wesan.co/friday)
- TestFlight equivalent: cloud waitlist + GitHub repo public (kismi)
- Can'ın engineering blog'unda 3 yazı: "Why daemon-first", "Rust + Tauri lessons", "How Friday uses Claude Code"

**T-7 gün:**
- HN için draft hazır
- Demo video (90 saniye, no music, just terminal+desktop+mobile in sequence)
- 5-10 friendly tester'a invite

**Launch day:**
- HN Show post, 8am PT (HN traffic peak)
- Twitter thread synchronously
- Indie Hackers post
- Claude Code Discord'da mütemmim ton

**T+7 gün:**
- Yorum cevapla, feedback'i public roadmap'e dök
- "What we learned launching" post - meta-launch

**T+30 gün:**
- 100 kullanıcıya ulaşıldıysa Pro tier hazırla
- 1000+ ise Twitter'da paid acquisition test

---

## 5. Differansiyatör mesajları (öneri)

### 5.1 Headline (Wesan tonuna uygun)

> **The agent runtime, not another agent.**  
> *Friday is a daemon that runs your coding agents - Claude Code today, others tomorrow. Detach, attach, ship from anywhere.*

veya

> **Plans, edits, runs. From your terminal, your desktop, or your phone.**  
> *Friday is a coding agent daemon. One backend, three surfaces, your own keys.*

### 5.2 Tagline alternatifleri

- "The agent that lives in the background." (mevcut)
- "Your coding agent, on a daemon, on every screen."
- "Run Claude Code like infrastructure."
- "Coding agents need a runtime. Friday is it."

### 5.3 "Why Friday vs X?" tablosu (FAQ veya features sayfası)

| Soru | Cevap (önerilen) |
|---|---|
| Why not just use Claude Code? | Claude Code is the engine; Friday is the chassis. Detach, multiple sessions, mobile companion, no model lock-in. |
| Why not Cursor? | Cursor is an IDE with an agent inside. Friday is an agent with an IDE plug-in optional. Different center of gravity. |
| Why not Cline? | Cline is brilliant inside VS Code. Friday runs even when VS Code is closed. |
| Why not Devin? | Devin is autonomous. Friday is *attended* - every diff gets your review. Trust by design. |
| Are you bundling someone else's model? | Subprocess today (Claude Code). Multi-backend on the roadmap. BYOM always free. |
| Solo founder. Why trust the daemon? | Open source the protocol, BYOM keeps data on your machine, build-in-public lets you audit every release. |

---

## 6. Risks ve mitigation

| Risk | Olasılık | Etki | Mitigation |
|---|---|---|---|
| Anthropic Claude Code'a daemon + mobile ekler | Orta-yüksek | Friday'in mimari moat zayıflar | Multi-backend hızla ekle (Codex, Aider integration), BYOM/open-source angle artır |
| Cursor IDE-less agent çıkarır | Düşük-orta | Daha doğrudan rakip | Indie/build-in-public hikâyesi cursor'un kapatamayacağı bir avantaj |
| Claude Code pricing ve API erişimi değişir | Orta | Friday subprocess wrapping kırılır | Plugin architecture'ı abstract tut, başka backend eklenmesi 1-haftalık iş olsun |
| Can tek başına 3 ürünü yürütemez | Yüksek | Friday yavaş yetişir, momentum kaybeder | Ya Notch/Dante backburner, ya da ilk hire Friday için |
| HN launch flop olur | Düşük | Yeniden launch deneyebilirsin | A/B test başlık + timing, ikinci launch v1.0'da |

---

## 7. Eylem listesi (1-90 gün)

### Hemen (1-2 hafta)
1. Friday landing sayfası **friday.run** veya **wesan.co/friday** subdomain - tek sayfa, demo gif, beta waitlist
2. GitHub repo public (kısmen, lisans Wesan)
3. Can Twitter/X aktif et - ilk thread: "Building a coding agent daemon. 30-day journey. Here's why."

### 30 gün
4. 3 engineering deep-dive post yaz
5. 10-20 beta tester'a invite, structured feedback
6. Pro tier UI mockup hazırla (henüz live yapma)

### 60 gün
7. HN Show launch (architecture-led story)
8. Twitter momentum'una göre paid acquisition test (küçük bütçe)
9. Multi-backend support - Codex veya Aider integration

### 90 gün
10. Pro tier live ($20/ay), first paying customers
11. v1.0 announcement
12. "What we learned" engineering writeup

---

## Kaynaklar

- [AI Coding Agents 2026 Comparison - Lushbinary](https://lushbinary.com/blog/ai-coding-agents-comparison-cursor-windsurf-claude-copilot-kiro-2026/)
- [Coding Agents Benchmark - Artificial Analysis](https://artificialanalysis.ai/agents/coding)
- [Cursor vs Claude Code vs Windsurf 2026 - ShareuHack](https://www.shareuhack.com/en/posts/cursor-vs-claude-code-vs-windsurf-2026)
- [AI Coding Tools Pricing 2026 - Developers Digest](https://www.developersdigest.tech/blog/ai-coding-tools-pricing-2026)
- [Every AI Coding CLI in 2026 - dev.to](https://dev.to/soulentheo/every-ai-coding-cli-in-2026-the-complete-map-30-tools-compared-4gob)
- [Best AI Coding Agents 2026 - Codersera](https://codersera.com/blog/ai-coding-agents-complete-guide-2026/)
- [Best Background Agents for Developers 2026 - Builder.io](https://www.builder.io/blog/best-ai-background-agents-for-developers-2026)
- [The State of AI Coding Agents 2026 - Medium (Dave Patten)](https://medium.com/@dave-patten/the-state-of-ai-coding-agents-2026-from-pair-programming-to-autonomous-ai-teams-b11f2b39232a)
- [10 Things Developers Want from Agentic IDEs - RedMonk](https://redmonk.com/kholterhoff/2025/12/22/10-things-developers-want-from-their-agentic-ides-in-2025/)
- [Best AI Coding Agents in 2026 - Vellum](https://www.vellum.ai/blog/best-ai-coding-agents)
- [Best AI Coding Agent Desktop Apps 2026 - Augment Code](https://www.augmentcode.com/tools/best-ai-coding-agent-desktop-apps)
- [Show HN: Broccoli, cloud coding agent](https://news.ycombinator.com/item?id=47865642)
