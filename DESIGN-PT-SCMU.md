# DESIGN SYSTEM — PT. SCMU

**Versi:** 1.0  
**Status:** Ready for Development  
**Brand:** PT. SCMU  
**Industry:** Logistics / Freight / Goods Transportation  
**Target:** Codex / VS Code

---

# 1. Design Direction

Website PT. SCMU menggunakan arah visual:

> **Modern Corporate Logistics**

Karakter:

- Professional
- Reliable
- Established
- Clean
- Strong
- Connected
- Efficient
- Trustworthy

Website harus terasa seperti website perusahaan logistik profesional, bukan:

- startup SaaS;
- marketplace;
- aplikasi tracking;
- landing page AI;
- website template generik.

---

# 2. Brand Source

Logo resmi PT. SCMU menjadi sumber utama identitas visual.

Logo memiliki tiga warna utama:

- Merah
- Biru
- Kuning

Logo juga menggunakan bentuk geometris menyerupai jalur/pergerakan.

Interpretasi visual:

```text
ORIGIN
  ↓
MOVEMENT
  ↓
DESTINATION
```

Bahasa visual website harus mengambil inspirasi dari:

- movement;
- route;
- connection;
- transportation;
- direction.

Jangan menduplikasi logo secara berlebihan.

---

# 3. Brand Color System

## 3.1 Primary Blue

```css
--scmu-blue: #0057D9;
--scmu-blue-dark: #003B95;
--scmu-blue-light: #EAF2FF;
```

Usage:

- primary navigation accent;
- links;
- secondary CTA;
- icons;
- process connectors;
- informational elements.

---

## 3.2 Secondary Red

```css
--scmu-red: #E30613;
--scmu-red-dark: #B8000A;
--scmu-red-light: #FFE8EA;
```

Usage:

- primary CTA;
- important actions;
- highlights;
- active states;
- decorative accents.

Red adalah warna action.

Jangan menggunakan merah sebagai background seluruh halaman.

---

## 3.3 Accent Yellow

```css
--scmu-yellow: #FFC800;
--scmu-yellow-dark: #D9A900;
--scmu-yellow-light: #FFF7D6;
```

Usage:

- small highlights;
- badges;
- decorative details;
- selected indicators;
- statistics jika data statistik benar-benar tersedia.

Kuning harus digunakan secara hemat.

---

# 4. Neutral System

```css
--neutral-0: #FFFFFF;
--neutral-50: #F8FAFC;
--neutral-100: #F1F5F9;
--neutral-200: #E2E8F0;
--neutral-300: #CBD5E1;
--neutral-400: #94A3B8;
--neutral-500: #64748B;
--neutral-600: #475569;
--neutral-700: #334155;
--neutral-800: #1E293B;
--neutral-900: #0F172A;
```

Recommended page balance:

```text
70% Neutral / White
15% Blue
10% Red
5% Yellow
```

Tujuan:

Brand colors tetap terlihat kuat tanpa membuat website terlalu ramai.

---

# 5. WhatsApp Color Rule

WhatsApp green hanya digunakan untuk elemen yang secara langsung membuka WhatsApp.

```css
--whatsapp-green: #25D366;
```

Jangan memasukkan WhatsApp green ke:

- brand palette;
- hero;
- cards;
- navbar;
- footer;
- general buttons.

---

# 6. Typography

## Primary Font

Gunakan:

**Inter**

Fallback:

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

---

# 7. Typography Scale

Desktop:

```text
Display:
56–64px
font-weight: 700–800
line-height: 1.05–1.1

H1:
48–56px
700–800
1.1

H2:
40–48px
700
1.15

H3:
28–32px
700
1.2

H4:
20–24px
600–700
1.3

Body Large:
18px
400–500
1.6

Body:
16px
400–500
1.6

Small:
14px
400–500
1.5
```

Mobile:

```text
H1: 36–42px
H2: 30–34px
H3: 24–28px
Body: 16px
Small: 14px
```

---

# 8. Typography Rules

Headline:

- short;
- strong;
- clear;
- benefit-oriented.

Avoid:

```text
❌ excessive uppercase
❌ 3+ font families
❌ decorative fonts
❌ giant text covering entire viewport
```

Uppercase dapat digunakan untuk:

- labels;
- eyebrow text;
- small category indicators.

---

# 9. Spacing System

Use an 8px-based spacing system.

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px
120px
```

Common section padding:

Desktop:

```text
80–120px vertical
```

Mobile:

```text
56–72px vertical
```

---

# 10. Container

Desktop max width:

```css
max-width: 1200px;
```

Large display may use:

```css
max-width: 1280px;
```

Default horizontal padding:

```text
Desktop: 24–32px
Tablet: 24px
Mobile: 20px
```

Content should never touch viewport edges.

---

# 11. Grid System

Desktop:

```text
12-column conceptual grid
```

Services:

```text
3 columns
```

Two-column content:

```text
6 + 6
```

Hero:

```text
5 + 7
```

or:

```text
6 + 6
```

Mobile:

```text
1 column
```

---

# 12. Border Radius

Use moderate radius.

```css
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
```

Default card:

```text
12px
```

Button:

```text
8px
```

Avoid:

```text
❌ 32px cards
❌ everything pill-shaped
❌ excessive rounded UI
```

---

# 13. Shadows

Use subtle shadows only.

```css
shadow-sm:
0 1px 3px rgba(15, 23, 42, 0.08);

shadow-md:
0 8px 24px rgba(15, 23, 42, 0.10);

shadow-lg:
0 16px 40px rgba(15, 23, 42, 0.12);
```

Cards should not look like floating glass panels.

---

# 14. Borders

Default:

```css
border: 1px solid var(--neutral-200);
```

Hover:

```text
border → SCMU Blue
```

Use borders to create structure instead of heavy shadows.

---

# 15. Navbar

Desktop:

```text
┌───────────────────────────────────────────────────────────┐
│ LOGO   Beranda  Tentang  Layanan  Area  FAQ  Kontak      │
│                                               [Penawaran] │
└───────────────────────────────────────────────────────────┘
```

Height:

```text
72–80px
```

Background:

```text
White
```

Border bottom:

```text
neutral-200
```

Sticky:

```text
top: 0
z-index: 50
```

On scroll:

- maintain white background;
- subtle shadow/border;
- no dramatic animation.

---

# 16. Logo Usage

Use the supplied official logo asset.

Preferred:

```text
Original logo
transparent background
```

Do not:

```text
❌ recolor logo arbitrarily
❌ stretch logo
❌ rotate logo
❌ add shadow
❌ add glow
❌ crop logo
❌ change proportions
```

Maintain aspect ratio.

For dark backgrounds, only use an official alternate logo if one exists.

Do not automatically create a white logo by applying CSS filters.

---

# 17. Hero

Hero should feel premium and corporate.

Recommended composition:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  SOLUSI PENGIRIMAN BARANG        [CARGO IMAGE]             │
│                                                             │
│  Headline                                                   │
│  Supporting copy                                            │
│                                                             │
│  [Minta Penawaran] [Lihat Layanan]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Alternative full-image hero:

```text
Full width logistics image
+
dark overlay
+
left aligned content
```

Use only if text contrast remains excellent.

---

# 18. Hero Image Direction

Preferred subjects:

- cargo ship;
- container port;
- cargo airplane;
- logistics truck;
- warehouse;
- loading/unloading;
- real company operations.

Avoid generic corporate stock photos.

Do not use AI-generated logistics images unless explicitly requested by the owner.

---

# 19. CTA System

## Primary

```text
Background: SCMU Red
Text: White
```

Example:

```text
[Minta Penawaran]
```

Height:

```text
48px minimum
```

Touch target:

```text
44px minimum
```

Radius:

```text
8px
```

---

## Secondary

```text
Background: SCMU Blue
Text: White
```

or outline blue.

---

## Outline

```text
Background: transparent
Border: SCMU Blue
Text: SCMU Blue
```

---

# 20. Button Interaction

Default:

```text
transition: 200ms ease
```

Hover:

- slightly darker background;
- subtle translateY(-1px);
- no bounce.

Active:

```text
translateY(0)
```

Focus:

```text
visible focus ring
```

Never remove keyboard focus indicators.

---

# 21. Service Cards

Three primary service cards.

```text
┌─────────────────────┐
│      SHIP ICON      │
│                     │
│ Pengiriman Laut     │
│                     │
│ Description...      │
│                     │
│ Lihat Detail →      │
└─────────────────────┘
```

Color strategy:

Do not make:

```text
Sea = blue entire card
Air = red entire card
Land = yellow entire card
```

Instead:

- white/neutral card;
- brand-color icon;
- subtle accent line;
- brand-color CTA.

This keeps the interface corporate.

---

# 22. Service Icon Mapping

Use Lucide React.

```text
Pengiriman Laut → Ship
Pengiriman Udara → Plane
Pengiriman Darat → Truck
```

Other icons:

```text
Package
Warehouse
MapPin
Route
Clock
ShieldCheck
Phone
Mail
MessageCircle
ArrowRight
CheckCircle
```

No emoji.

---

# 23. Route / Movement Visual Language

Use thin lines inspired by the geometry of the logo.

Example:

```text
●──────────────●
Origin       Destination
```

or:

```text
01 ───────── 02 ───────── 03
```

Use:

```text
SCMU Blue
```

for connectors.

Red can indicate active/current point.

Yellow can highlight a special point.

Do not create complex decorative diagrams that look like a tracking system.

---

# 24. Process Section

Recommended:

```text
01
Konsultasi
      │
      ▼
02
Detail Pengiriman
      │
      ▼
03
Solusi Transportasi
      │
      ▼
04
Pengiriman
      │
      ▼
05
Penerimaan
```

Desktop:

horizontal.

Mobile:

vertical.

Connector line:

```text
SCMU Blue
```

Number:

```text
SCMU Red
```

---

# 25. Coverage Section

Possible visual:

```text
┌─────────────────────────────────────────┐
│                                         │
│        MAP / ROUTE VISUAL               │
│                                         │
│   ●──────●────────●                     │
│                                         │
└─────────────────────────────────────────┘
```

But only display actual coverage information.

Do not fabricate routes.

If data unavailable, use a clean text-based CTA.

---

# 26. Why Choose Us

Use compact cards.

Example:

```text
[icon]

Multi-Moda
Transportasi

Description
```

Recommended 4 items.

Avoid excessive statistics.

Only use real numbers.

---

# 27. FAQ

Style:

```text
┌───────────────────────────────────────────────┐
│ Apa saja layanan PT. SCMU?                +  │
├───────────────────────────────────────────────┤
│ Bagaimana cara meminta penawaran?          +  │
├───────────────────────────────────────────────┤
│ Area mana saja yang dilayani?              +  │
└───────────────────────────────────────────────┘
```

Open state:

- question remains strong;
- answer appears below;
- subtle blue accent.

Do not use huge cards.

---

# 28. Quotation Form

Layout:

Desktop:

```text
┌──────────────────────────────┬─────────────────────────┐
│ Form                         │ CTA / Information       │
│                              │                         │
│ Nama                         │ Butuh pengiriman?       │
│ WhatsApp                     │                         │
│ Barang                       │ Hubungi PT. SCMU        │
│ Berat                        │                         │
│ Asal                         │                         │
│ Tujuan                       │                         │
│ Moda                         │                         │
│ Catatan                      │                         │
│                              │                         │
│ [Minta Penawaran]            │                         │
└──────────────────────────────┴─────────────────────────┘
```

Mobile:

```text
Form
↓
CTA
```

---

# 29. Form Input

Height:

```text
48–52px
```

Radius:

```text
8px
```

Border:

```text
neutral-300
```

Focus:

```text
SCMU Blue
```

Error:

```text
SCMU Red
```

Labels harus selalu terlihat.

Jangan mengandalkan placeholder sebagai label.

---

# 30. WhatsApp CTA

Floating button:

```text
bottom: 24px
right: 24px
```

Mobile:

```text
bottom: 16px
right: 16px
```

Style:

```text
WhatsApp Green
white icon
rounded
shadow
```

Label opsional:

```text
Chat via WhatsApp
```

Desktop dapat menggunakan icon + label.

Mobile dapat menggunakan icon saja dengan aria-label.

---

# 31. Contact Section

Visual harus sederhana.

```text
Alamat
WhatsApp
Email
Jam Operasional
```

Gunakan icon Lucide.

Jangan menggunakan map besar apabila lokasi resmi belum diberikan.

---

# 32. Footer

Recommended background:

```text
SCMU Blue Dark
#003B95
```

Text:

```text
White / neutral
```

Accent:

```text
SCMU Yellow
```

Footer harus terasa kuat tetapi tidak terlalu berat.

---

# 33. Image Treatment

Image:

```css
object-fit: cover;
```

Radius:

```text
12–16px
```

Aspect ratio:

```text
16:9
4:3
```

Gunakan `next/image` untuk image optimization.

Hero image boleh menggunakan `priority`.

---

# 34. Motion System

Motion harus subtle.

Duration:

```text
fast: 150ms
normal: 250ms
slow: 400ms
```

Easing:

```text
ease-out
```

Allowed:

- fade in;
- translateY;
- slight scale;
- hover elevation;
- menu open/close.

Avoid:

- bounce;
- excessive parallax;
- spinning;
- large zoom;
- continuous floating;
- decorative animations everywhere.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 35. Responsive Rules

## Mobile < 768px

- 1-column layout;
- hamburger navigation;
- buttons full-width where appropriate;
- service cards stacked;
- process vertical;
- form one column;
- hero text left aligned;
- reduced spacing.

## Tablet 768–1023px

- 2-column where useful;
- compact navbar;
- service cards can use 2+1 arrangement.

## Desktop ≥ 1024px

- full navbar;
- 3-column service cards;
- large hero;
- horizontal process;
- generous whitespace.

---

# 36. Accessibility

Required:

- semantic HTML;
- proper heading hierarchy;
- keyboard navigation;
- visible focus;
- alt text;
- aria-label;
- sufficient color contrast;
- buttons must have clear labels;
- form fields must have labels;
- accordion must be keyboard accessible.

Do not use color alone to communicate status.

---

# 37. SEO Visual / Content Rules

Every page must have:

```text
title
meta description
H1
semantic sections
descriptive links
image alt
```

Avoid:

```text
Click here
Learn more
```

when a more descriptive label is possible.

Prefer:

```text
Lihat Pengiriman Laut
Lihat Pengiriman Udara
Lihat Pengiriman Darat
```

---

# 38. Data Integrity Rules

This is mandatory.

Never invent:

- company statistics;
- number of clients;
- years of experience;
- office locations;
- branches;
- routes;
- fleet count;
- certifications;
- awards;
- customer logos;
- testimonials;
- operational guarantees.

Use placeholders:

```text
[ISI ALAMAT RESMI]
[ISI NOMOR WHATSAPP]
[ISI EMAIL]
[ISI AREA PENGIRIMAN]
[ISI DESKRIPSI PERUSAHAAN]
```

---

# 39. Explicitly Prohibited UI

Never create:

```text
❌ Tracking page
❌ Tracking input
❌ Nomor resi checker
❌ Shipment status
❌ Live map tracking
❌ Delivery timeline pretending to be real-time
❌ Customer dashboard
❌ Admin dashboard
❌ Login
❌ Fake statistics
❌ Fake testimonials
```

The process section is informational only.

It must not look like live shipment tracking.

---

# 40. Anti-Generic Design Rules

Codex must avoid producing a generic AI-generated website.

Do not use:

```text
❌ huge purple/blue gradients
❌ glassmorphism
❌ excessive rounded cards
❌ random blobs
❌ glowing borders
❌ neon effects
❌ giant centered text everywhere
❌ excessive shadows
❌ emoji icons
❌ random abstract 3D objects
❌ excessive animated backgrounds
```

PT. SCMU should look like:

```text
Corporate
Logistics
Professional
Established
Practical
Trustworthy
```

---

# 41. Component Naming

Recommended:

```text
Navbar
MobileMenu
HeroSection
CompanyIntro
ServiceCard
ServicesSection
WhyChooseUs
ProcessTimeline
CoverageSection
GallerySection
FaqAccordion
QuotationForm
ContactSection
Footer
WhatsAppButton
SectionHeading
Container
Button
```

---

# 42. Component Rules

Components should be:

- reusable;
- focused;
- typed;
- accessible;
- responsive.

Avoid a single massive `page.tsx`.

Do not duplicate the same UI markup for all services if a reusable `ServiceCard` or `ServiceDetail` pattern is appropriate.

---

# 43. Content Rules

Language:

**Bahasa Indonesia.**

Tone:

- professional;
- clear;
- confident;
- human;
- not overly formal;
- not salesy.

Avoid:

```text
"Revolusi solusi logistik masa depan..."
"AI-powered logistics..."
"Best-in-class..."
```

unless specifically supported by the business.

Prefer:

> Solusi pengiriman barang melalui jalur laut, udara, dan darat sesuai kebutuhan Anda.

---

# 44. Page Visual Hierarchy

Every page should follow:

```text
Eyebrow
↓
H1
↓
Supporting paragraph
↓
Primary CTA
↓
Main visual
↓
Content sections
↓
Supporting CTA
```

Do not make every section visually equally loud.

---

# 45. Section Rhythm

Recommended:

```text
Hero
        ↓
White section
        ↓
Light neutral section
        ↓
White section
        ↓
Blue CTA section
        ↓
White contact
        ↓
Dark footer
```

Use background changes to separate sections rather than excessive cards.

---

# 46. Recommended Homepage Visual Flow

```text
NAVBAR
│
├── Logo
├── Navigation
└── Minta Penawaran

HERO
│
├── Strong headline
├── Description
├── CTA
└── Logistics image

INTRO
│
└── PT. SCMU overview

SERVICES
│
├── SEA
├── AIR
└── LAND

WHY SCMU
│
├── Value 01
├── Value 02
├── Value 03
└── Value 04

PROCESS
│
01 → 02 → 03 → 04 → 05

COVERAGE
│
└── Actual service areas

GALLERY
│
└── Real company photos

FAQ
│
└── Accordion

CTA
│
└── Minta Penawaran

CONTACT
│
├── Address
├── WhatsApp
└── Email

FOOTER
```

---

# 47. Final Brand Impression

When a visitor opens the website, the intended impression is:

> "Ini perusahaan logistik yang serius dan profesional."

Not:

> "Ini aplikasi ekspedisi."

Not:

> "Ini startup teknologi."

Not:

> "Ini template website AI."

Visual keywords:

```text
SCMU
│
├── BLUE
│   └── TRUST
│
├── RED
│   └── ACTION
│
├── YELLOW
│   └── HIGHLIGHT
│
└── ROUTE
    └── MOVEMENT
```

---

# 48. Development Source of Truth

When implementing the website:

```text
PRD.md
    ↓
Business requirements

DESIGN.md
    ↓
Visual requirements

Code
    ↓
Implementation
```

If code conflicts with `DESIGN.md`, update the code to follow the design system.

If requested content conflicts with the business scope, ask for clarification rather than inventing data.

---

# 49. Final Checklist

Before delivery:

- [ ] Brand colors correct.
- [ ] Logo correct.
- [ ] Typography consistent.
- [ ] Navbar responsive.
- [ ] Hero professional.
- [ ] Sea/Air/Land clearly differentiated.
- [ ] Process section does not look like tracking.
- [ ] Coverage contains only verified data.
- [ ] No fake statistics.
- [ ] No fake testimonials.
- [ ] No fake clients.
- [ ] No tracking UI.
- [ ] Quotation form works.
- [ ] WhatsApp CTA works.
- [ ] FAQ works.
- [ ] Mobile layout works.
- [ ] Keyboard navigation works.
- [ ] Images optimized.
- [ ] SEO metadata exists.
- [ ] Reduced motion supported.
- [ ] Production build passes.
