# Dante — Competitive Landscape & GTM Research

**Hazırlayan:** Dante product audit  
**Tarih:** Mayıs 2026  
**Konu:** All-in-one daily tracker pazarındaki Dante'nin yeri, differansiyatör, fiyatlama, hedef pazar, GTM.

---

## TL;DR (3 cümlede)

All-in-one daily tracker pazarı **2026'da büyük bir parçalanmışlıkta**: tek-konu uzmanları (MyFitnessPal nutrition, Habitica/HabitMinder habit, Todoist task), birkaç-konu agregatörleri (TickTick: task+habit+pomodoro+calendar), ve DIY platformlar (Notion). **Dante'nin altı modüllü (tasks + workouts + nutrition + supplements + spending + habits) yaklaşımını birebir yapan kimse yok** — bu özgün ama riskli, çünkü kullanıcılar genelde tek-konu tracker'a alışkın ve consolidation talebi var ama henüz alışkanlık değil. Apple Health'in spring 2026 nutrition + AI Health Agent güncellemesi yakın bir tehdit; **Dante'nin Türkçe reference data avantajı (251 curated Turkish foods + TR supplement brands)** ve **local-first/iOS-native pozisyonu** kısa vade differansiyatörü, uzun vadede ise "consolidation" mesajını net taşıyabilmesi belirleyici.

---

## 1. Pazar haritası — 2026 itibariyle

### 1.1 Segmentasyon

| Segment | Kategori liderleri | Yıllık subscription | Dante ile ilişki |
|---|---|---|---|
| **Tek-konu nutrition** | MyFitnessPal ($79.99), Cronometer ($59.88), Lose It ($39.99) | $40-80 | Dante nutrition modülü onlardan az derin; ama tek başına satmıyor |
| **Tek-konu fitness/workout** | Strong, Hevy, Strava | $25-60 | Dante workout modülü 2,200+ exercise referans; tek başına Strong/Hevy ile yarışmaz |
| **Tek-konu habit** | Streaks, HabitMinder, Way of Life, Habitify | $10-30 | Dante habit modülü minimal; Notch ayrı ürün olarak bu segmenti hedefliyor |
| **Tek-konu task** | Todoist, Things 3, TickTick, Apple Reminders | $0-50 | Dante task modülü basit; Todoist/Things derinliğine girmiyor |
| **Tek-konu spending** | YNAB, Copilot Money, Monarch | $99-150 | Dante spending modülü çok hafif (bank linking yok) |
| **Tek-konu macro/AI** | MacroFactor ($71.99), Cal AI, Vora ($89.99) | $70-90 | Cal AI/Vora photo-log ile UX devrimi yapıyor; Dante manual entry |
| **All-in-one productivity** | **TickTick** (task+habit+pomodoro+calendar) | $35.99 | **En yakın felsefe paydaşı** ama health/nutrition yok |
| **DIY platform** | **Notion** (habit tracker template) | $96+ | Dante'nin tam tersi: Notion DIY, Dante opinionated |
| **Health platform (built-in)** | **Apple Health** (free) — spring 2026'dan itibaren nutrition + AI Health Agent | Free + Health+ premium (yakında) | Apple platform avantajı çok büyük; Dante onun ÜZERINDE konum almalı |
| **Ultra all-in-one (6 modül)** | **boş veya yeni** | — | **Dante burada** |

### 1.2 Dante'nin özgün pozisyonu

Dante 6 modülü tek surface'te birleştiriyor: **tasks + workouts + nutrition + supplements + spending + habits**.

| Rakip | Modül sayısı | Dante ile karşılaştırma |
|---|---|---|
| TickTick | 4 (task, habit, pomodoro, calendar) | Dante daha geniş ama productivity-only değil, health/finance dahil |
| Notion | DIY (sınırsız ama template'siz boş) | Dante opinionated, kullanıma hazır |
| Apple Health (spring 2026) | 3+ (activity, nutrition, AI agent) | Dante daha kapsamlı (spending+habits+tasks), ama Apple platform avantajı eziyor |
| MyFitnessPal | 2-3 (nutrition, basic workout) | Dante daha geniş, ama nutrition derinliğinde geride |

**Mental model:** *"TickTick + Cronometer + Streaks + basit bir spending tracker = Dante."*

---

## 2. Önemli rakipler — derin analiz

### 2.1 TickTick (en yakın felsefe paydaşı)

| Boyut | TickTick | Dante |
|---|---|---|
| Form factor | Cross-platform (iOS, Android, Web, Mac, Windows) | iOS-only (şimdilik) |
| Modules | Task + habit + pomodoro + calendar | Task + workout + nutrition + supplement + spending + habit |
| Pricing | $27.99/yıl Premium | TBD (4-tier RevenueCat) |
| UI | Productivity-first, dense | Tracker-first, opinionated |
| Sync | Cloud sync built-in | Local-first |
| AI | Limited | Roadmap |
| Strong points | Mature, cross-platform, productivity guru'lar öneriyor | Ultra-broad, Turkish-friendly, iOS native |

**Dante TickTick'e karşı:** "We add health and money. Same one-app discipline, broader life."

### 2.2 MyFitnessPal (nutrition kategorisi lideri)

| Boyut | MyFitnessPal | Dante |
|---|---|---|
| Database | Massive crowd-sourced food DB | 1,369 curated foods (251 TR + 1,118 USDA SR Legacy) |
| Pricing | $79.99/yıl Premium | TBD daha düşük |
| User base | 200M+ all-time | 0 |
| UX | Cluttered, ad-heavy in free, paywall agresif | Clean, no ads, no paywall friction |
| Specialty | Pure nutrition + basic exercise | All-in-one |

**Dante MFP'ye karşı:** "MyFitnessPal'ı bırakmana gerek yok — Dante zaten tasks, habits, money'yi de takip ediyor. Sırf nutrition için 6 app yerine 1." Risk: nutrition derinliği geride.

### 2.3 Cronometer (data-quality nutrition)

| Boyut | Cronometer | Dante |
|---|---|---|
| Database | NCCDB (en doğru ABD veritabanı), 84+ nutrient | USDA SR Legacy (orta-derin) + TR curated |
| Pricing | $59.88/yıl Gold | TBD |
| User | Quantified-self, dietitian, biohacker | General population, TR + EN |
| Strong points | Best-in-class data accuracy | Local TR data + broader life tracking |

**Dante Cronometer'a karşı:** Sığ rakip değil. Cronometer'ın hedef kitlesi (nutrition obsessives) Dante'nin hedefi değil. Coexist.

### 2.4 Apple Health (en büyük risk)

Apple Health spring 2026 update:
- Built-in nutrition tracking (artık 3rd party gerekmiyor)
- AI Health Agent (biometric analysis, personalized recommendations)
- Health+ premium tier (henüz fiyat yok)

| Boyut | Apple Health | Dante |
|---|---|---|
| Distribution | Pre-installed on every iPhone | App Store download |
| Price | Free + Health+ TBD | Paid subscription |
| Modüller | Activity + sleep + nutrition + AI agent | Task + workout + nutrition + supplement + spending + habit |
| Eksikleri | Task management yok, spending yok, habit tracker primitive | Sleep/biometrics Apple kadar derin değil |

**Dante Apple Health'e karşı:** "Apple Health is your body. Dante is your day." Kategorisi farklı — Apple body/medical, Dante daily life/discipline. **Yapması gereken:** HealthKit integration'ı agresif yap, Apple Health'in nutrition log'unu okuyup yazsın. Apple Health'i tehdit değil, complement haline getir.

### 2.5 Notion + DIY templates

Notion'da "all-in-one daily tracker" template'leri popüler. Ama:
- DIY = setup yükü
- Mobile UX zayıf
- Subscription pahalı ($96+)

**Dante Notion'a karşı:** "Stop building your tracker. Use one." Notion power-user'lar için kayıp olmayabilir, ama "ben sadece çalışan bir şey istiyorum" kesimi tam Dante hedefi.

### 2.6 Cal AI / Vora (AI photo-log devrimi)

2026'da nutrition tracking'in UX'i değişti — manual entry yerine **photo + AI**.

| Boyut | Cal AI / Vora | Dante |
|---|---|---|
| Logging UX | Take photo → AI macros | Manual barcode/search |
| Pricing | $89.99/yıl Vora Pro | TBD |
| Accuracy | Improving but variable | Depends on database quality |
| Friction | Çok düşük (photo+tap) | Yüksek (search+select) |

**Risk:** Manual entry "ölmek üzere" — Dante AI photo-log eklemezse nutrition modülü 6-12 ay içinde uncompetitive olur. **Eylem:** Photo-log v1.1 roadmap'ine ekle. Anthropic/OpenAI vision API'sı ile ilk pass kolay.

---

## 3. Türkiye pazarı — Dante'nin öncelikli vatanı

### 3.1 TR app pazarı gerçeklik

- **Düşük willingness-to-pay**: TR subscription fiyatları Almanya'nın 1/4'ü. App Store Türkiye için lokalize price şart.
- **iOS payı yüksek**: Türkiye genel olarak Android dominant ama gelir-üst dilim iOS (Dante hedefi)
- **Health/fitness apps revenue**: 2025'te küresel $6B, %17 büyüme, %80 subscription
- **Yerel rakip yok**: TR pazarına özel all-in-one daily tracker minimal

### 3.2 Dante'nin TR avantajı

- **251 curated Turkish foods** (sucuk, mercimek çorbası, lahmacun, kuru fasulye, vb. — App Store'da ilk)
- **66 TR exercise aliases** (calisthenics, koşu, mekik vs.)
- **TR supplement brands** (Proteinocean, Hardline, BigJoy, Eczacıbaşı/Selfit, Bayer/Supradyn, Suda Collagen, vb.)
- Bekircan native TR speaker → app copy + customer support TR'de doğal

**Strateji:** Önce TR App Store'da viral ol, sonra EN/EU pazara genişle. Bu sırayla yapan iOS app'ler (Vivino early Italy, Headway early Ukraine) başarılı oldu.

### 3.3 TR pricing önerisi

Apple App Store TR pricing tier'ları (2026):
- Tier 1: ₺34.99 / ay
- Tier 2: ₺54.99 / ay
- Tier 3: ₺84.99 / ay
- Tier 4: ₺164.99 / ay

| Dante tier | TR aylık | TR yıllık | USD eşdeğer |
|---|---|---|---|
| Free | ₺0 | ₺0 | $0 |
| Plus | ₺34.99 | ₺249.99 | ~$7/yr (EUR ₺ tier) |
| Pro | ₺54.99 | ₺399.99 | ~$11/yr |
| Elite | ₺99.99 | ₺699.99 | ~$20/yr |

EU/US pricing 3-4x yukarıda:
- Plus: $4.99/ay or $29.99/yr
- Pro: $7.99/ay or $49.99/yr
- Elite: $14.99/ay or $89.99/yr

---

## 4. Differansiyator mesajları

### 4.1 Headline alternatifleri (Wesan tone)

> **One app, six trackers. The day, without seven open tabs.**  
> *Dante is a daily tracker that consolidates the basics — tasks, workouts, nutrition, supplements, spending, habits — into one quiet surface.*

veya

> **Stop juggling six apps.**  
> *Tasks. Workouts. Nutrition. Supplements. Spending. Habits. One screen, one tap, one place.*

### 4.2 "Why Dante vs X?" FAQ

| Soru | Cevap |
|---|---|
| Why not MyFitnessPal? | Because nutrition is one of six things in your day, not the only one. |
| Why not TickTick? | Because tasks and habits don't show you what you ate or how much you spent. |
| Why not Notion? | Because building your own tracker takes weeks. Dante is ready in 30 seconds. |
| Why not Apple Health? | Apple Health tracks your body. Dante tracks your day — and writes back to HealthKit for the nutrition Apple wants. |
| Will the data leave my phone? | No. Local-first by design. Sync coming for those who opt in. |
| Why iOS only? | Solo developer, picking depth over breadth. Android in time, not soon. |
| Why Turkish first? | Because the reference data — foods, exercises, supplement brands — should match where the user actually lives. Turkish data first, then English. |

### 4.3 Mesaj-pozisyon matrisi

| Kullanıcı tipi | Dante mesajı |
|---|---|
| Quantified-self obsessive (Cronometer kullanıcısı) | "If nutrition is your only obsession, stay where you are. If your day is bigger than that, come over." |
| Productivity all-in-one (TickTick kullanıcısı) | "TickTick is great for tasks. Dante is great for everything else around them." |
| Indie hacker / dev (Notion kullanıcısı) | "Stop maintaining your own tracker. Use one that just works." |
| Casual fitness (MyFitnessPal Free kullanıcısı) | "Free MFP has gotten worse. Dante has a real free tier and doesn't ask for your card." |
| Türk Apple user | "Türk yemekleri, Türk markaları, Türkçe arayüz. Bir uygulama, bir gün." |

---

## 5. Differansiyator + risk matrisi

| Differansiyator | Güç | Risk |
|---|---|---|
| 6 modüllü ultra all-in-one | Pazarda boş alan | Kullanıcı "all-in-one"a hazır mı? Onboarding ağır mı? |
| TR reference data | TR pazarda eşsiz, lokal sevgi | Sadece TR pazarı küçük; EN'e geçmek zor değil ama farklılaştırıcı azalır |
| Local-first, no cloud | Privacy mesajı güçlü | Multi-device kullanıcı için sınırlama |
| iOS native + RevenueCat | Apple ecosystem'de güçlü | Android'siz pazarın %50'sini görmüyorsun |
| Apple Health complement | Conflict yerine sinerji | Apple Health'in spring 2026 update'i Dante'yi kısmen geçersiz kılabilir |
| Subscription 4-tier (RevenueCat zaten aktif) | Monetization hazır | Free tier ne kadar cömert? Plus/Pro/Elite differansiyation yeterli mi? |
| Solo dev / indie cred | Build-in-public + community | Yavaş tempo, kullanıcı güveni geç oluşur |

---

## 6. Go-to-market — kanallar ve playbook

### 6.1 Öncelikli kanallar

| # | Kanal | Neden | İlk adım |
|---|---|---|---|
| 1 | **Product Hunt launch** | iOS app + indie + design-led → PH'in tam audience'ı | TestFlight beta sonrası App Store launch ile birlikte PH submit |
| 2 | **App Store TR optimization** | Türkçe screenshots, TR keywords, TR yorum talebi | ASO için TR-spesifik anahtar kelimeler: "günlük takip", "kalori sayar", "alışkanlık", "egzersiz" |
| 3 | **TR developer + indie hacker topluluğu** | Webrazzi, KodGemisi, Türkçe Hacker News | Webrazzi'ye launch PR |
| 4 | **Twitter/X (TR + EN)** | Build-in-public, screenshots, "today's stats" | Bekircan personal account → daily screenshot share |
| 5 | **Reddit r/iosgaming r/iosapps r/QuantifiedSelf** | Dante target audience burada | "I built X" tarzı post — saygılı, value-first |
| 6 | **App review siteler (TR)** | Tamindir, Mobilim, App Store TR feature | Outreach |
| 7 | **YouTube/TikTok demo** | iOS app demo görsel olarak güçlü | 60-sec walkthrough video |
| 8 | **Yerel TR podcaster outreach** | Türkçe productivity/health podcast'leri | İçeriği TR olan podcast'lere sponsor değil, konuk |

### 6.2 Launch playbook (önerilen)

**T-30 gün:**
- TestFlight 100 kullanıcı toplama
- App Store assets hazırla (TR + EN screenshots, video, copy)
- Privacy policy + Terms + Subscription disclosure
- RevenueCat configure final

**T-7 gün:**
- App Store submit
- Product Hunt scheduled launch
- Twitter "launch day countdown" thread

**Launch day:**
- App Store live
- PH live, sabah 5 AM PT (PH peak)
- Twitter announcement
- Türkiye'de Webrazzi'ye PR
- Reddit r/QuantifiedSelf "Built this in 6 months" post

**T+7 gün:**
- Review için outreach (5-10 publication)
- Free tier kullanıcı verilerine bakıp Plus convert oranı ölç

**T+30 gün:**
- ASO iterate (App Store keywords A/B test)
- TR vs EN download oranı analiz
- Roadmap update post

### 6.3 Free tier strategy

| Tier | Limit | Convert mantığı |
|---|---|---|
| **Free** | Tasks + habits + workouts (limited library) | Daily use hook |
| **Plus** | + Full nutrition (Turkish + USDA), supplements | "I'm tracking macros" trigger |
| **Pro** | + Spending + advanced analytics + export | "I want to see patterns" trigger |
| **Elite** | + Future AI features (photo-log, coach) | "I want the latest" — Apple Health Health+ competitive tier |

**Conversion benchmark:** Health & fitness apps tipik free→paid %2-5. Lokalize fiyat ile %5-7 mümkün.

---

## 7. Roadmap önerileri (kritik özellikler)

### Q3 2026 (App Store launch öncesi)
1. **AI photo-log** (nutrition için) — Cal AI/Vora UX devrimini kaçırma
2. **HealthKit two-way sync** — Apple Health complement pozisyonu
3. **iOS widget** (zaten var, optimize et) — günlük focus tek bakışta
4. **Apple Watch companion** — quick log, basic tracking

### Q4 2026
5. **iPad layout** (multi-column, drag-to-reorder)
6. **iCloud sync** (opt-in, end-to-end encrypted)
7. **TR brand expansion** — daha fazla TR supplement brand, TR food chains

### 2027
8. **macOS companion** — desktop equivalent
9. **Coach AI** — Elite tier feature, personalized insights
10. **Android** (eğer demand güçlüyse)

---

## 8. Risks ve mitigation

| Risk | Olasılık | Etki | Mitigation |
|---|---|---|---|
| Apple Health spring 2026 update Dante'yi gereksiz kılar | Orta | Yüksek | Apple Health'i complement, kategorize farklılaş: "body vs. day" |
| AI photo-log olmadan nutrition modülü zayıf | Yüksek | Orta | v1.0'da basit version (OpenAI Vision API) shipping |
| All-in-one yerine kullanıcı tek-konu uzmanı tercih eder | Orta | Yüksek | Ultra-net "consolidate" mesajı + ücretsiz tier ile deneme bariyeri düşür |
| TR pazarı küçük, EU/US geçişi yavaş | Orta | Orta | TR sırf launch market, EN paralel hazır olmalı |
| Notion all-in-one template'leri Dante use-case'i karşılar | Düşük-orta | Düşük | Notion DIY, Dante opinionated; ayrı kitle |
| RevenueCat subscriber spike App Store review | Düşük | Düşük | Subscription disclosure compliant |
| Bekircan tek başına 6 modülü maintain edemez | Yüksek | Yüksek | Modülleri prioritize et (tasks/habits/nutrition core), spending/supplements/workouts feature-frozen launch |

---

## 9. Bir cümlede final pozisyon

> **Dante, iOS'a özgü tek bir surface'te altı günlük takip modülü birleştirerek "1 app, 1 day" mesajı taşıyan; TR pazarında derin yerel veri (251 TR food + TR supplement brands) ile farklılaşan; Apple Health'in tehdidini complement haline çeviren ve solo developer indie cred'i ile büyüyebilecek bir all-in-one daily tracker.**

Doğru execute edilirse TickTick'in productivity-only pozisyonunu daha geniş bir "günlük disiplin" pozisyonuyla aşar. Apple Health AI Health Agent çıktıktan sonra UX olarak hızla AI photo-log'a geçmek gerekir, yoksa yarış zor.

---

## Kaynaklar

- [8 Best MyFitnessPal Alternatives 2026 — AskVora](https://askvora.com/blog/best-myfitnesspal-alternatives-2026)
- [Cronometer vs MyFitnessPal — Gemma Sampson](https://www.gemmasampson.com/blog/cronometer-vs-myfitnesspal)
- [5 Best Calorie Counter Apps 2026 — Fortune](https://fortune.com/article/best-calorie-counter-apps/)
- [Cronometer Alternatives 2026 — Hoot Fitness](https://www.hootfitness.com/blog/cronometer-alternatives-find-the-best-fit-for-your-tracking-style)
- [Best Free MyFitnessPal Alternatives — Hoot Fitness](https://www.hootfitness.com/blog/free-alternatives-to-myfitnesspal)
- [Best Macro Tracking Apps 2026 — Fuel Nutrition](https://fuelnutrition.app/blog/best-macro-tracking-apps)
- [Apple Health overhaul + nutrition tracking — Wareable](https://www.wareable.com/health-and-wellbeing/apple-health-ios-26-4-update-nutrition-tracking-health-plus-tier)
- [Apple Health vs Calorie Tracker Apps 2026 — Calorie Tracker Lab](https://calorietrackerlab.com/articles/apple-health-vs-calorie-tracker-apps-2026/)
- [10 Best Habit Tracker Apps 2026 — Reclaim](https://reclaim.ai/blog/habit-tracker-apps)
- [Health & Fitness App Subscription Benchmarks 2026 — Adapty](https://adapty.io/blog/health-fitness-app-subscription-benchmarks/)
- [State of Subscription Apps 2026 — RevenueCat](https://www.revenuecat.com/state-of-subscription-apps/)
- [Subscription App Trends 2026 — RevenueCat](https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026/)
- [Health & Fitness App Report 2026 — Business of Apps](https://www.businessofapps.com/data/health-fitness-app-report/)
- [Fitness App Revenue & Usage Statistics 2026 — Business of Apps](https://www.businessofapps.com/data/fitness-app-market/)
- [26 Best Productivity Apps 2026 — Reclaim](https://reclaim.ai/blog/productivity-apps)
- [Trends in Corporate Wellness Apps 2026 — TechTimes](https://www.techtimes.com/articles/314669/20260216/trends-corporate-wellness-apps-2026-analytical-perspective.htm)
