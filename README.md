# Sightsavers Clone — Next.js Reproduction

Faithful reproduction of [Sightsavers](https://www.sightsavers.org/) built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 📋 Scanned & Implemented Pages (Exact 15 Pages)

| # | Route | Original Sightsavers URL | Purpose & Template |
|---|---|---|---|
| 1 | `/` | `https://www.sightsavers.org/` | Home Page with 75-year impact, core pillars & stories |
| 2 | `/about-us` | `https://www.sightsavers.org/about-us/` | About Sightsavers, governance, royal patronage & accreditations |
| 3 | `/programmes` | `https://www.sightsavers.org/programmes/` | Programmes index & health initiative catalogue |
| 4 | `/programmes/accelerate` | `https://www.sightsavers.org/programmes/accelerate/` | Flagship programme template: Accelerate trachoma elimination |
| 5 | `/stories-news-blogs` | `https://www.sightsavers.org/stories-news-blogs/` | Stories, news & blogs index with format categorisation |
| 6 | `/news/2026/11/...` | `https://www.sightsavers.org/news/2026/11/...` | Single article template: Five eye health commitments |
| 7 | `/how-to-help` | `https://www.sightsavers.org/how-to-help/` | Ways to support, individual donations, legacy, payroll giving |
| 8 | `/how-to-help/why-donate-to-sightsavers` | `https://www.sightsavers.org/how-to-help/why-donate-to-sightsavers/` | Why donate: 92% efficiency, £10/£33/£72 impact tiers |
| 9 | `/contact-us` | `https://www.sightsavers.org/contact-us/` | Contact us, supporter care team, interactive form & offices |
| 10 | `/media-centre` | `https://www.sightsavers.org/media-centre/` | Media centre, press team contacts, b-roll, factsheets |
| 11 | `/where-we-work` | `https://www.sightsavers.org/where-we-work/` | 30+ countries directory grouped by African & Asian regions |
| 12 | `/about-us/our-history` | `https://www.sightsavers.org/about-us/our-history/` | 75-year history timeline from Sir John Wilson (1931) to 2026 |
| 13 | `/appeals/make-extraordinary-change` | `https://www.sightsavers.org/appeals/make-extraordinary-change/` | Appeal template: ending trachoma with the WHO SAFE strategy |
| 14 | `/contact-us/frequently-asked-questions` | `https://www.sightsavers.org/contact-us/frequently-asked-questions/` | FAQ template with searchable accordions & Gift Aid details |
| 15 | `/_not-found` (`not-found.tsx`) | `https://www.sightsavers.org/404/` | Custom 404 page: "Looking for something?" |

---

## 🎨 Design Tokens & Brand System

Defined centrally in `lib/tokens.ts` and extended in `tailwind.config.ts`:
- **Brand Yellow (`#ffbb22` / `#e5a71a`)**: Primary CTA buttons & prominent accents.
- **Brand Navy (`#403a60` / `#312c4b`)**: Header, primary headings, dark heroes, footer.
- **Brand Plum (`#960051` / `#75003f`)**: Secondary badges, featured tags, appeal elements.
- **Brand Teal (`#006f62`)**: Health & environmental highlights.
- **Brand Text (`#373737` / `#686c74`)**: High contrast accessible typography.
- **Brand Gray (`#f0f1f2` / `#ebebef`)**: Background containers and borders.
- **Typography**: Google Font **Lato** (`300`, `400`, `700`, `900`).

---

## 🧱 Architecture & Component Breakdown

```
├── app/
│   ├── layout.tsx                              # Shared layout (Header + Footer)
│   ├── page.tsx                                # Home Page
│   ├── globals.css                             # Lato font import & Tailwind directives
│   ├── not-found.tsx                           # Page 15: Custom 404
│   ├── about-us/
│   │   ├── page.tsx                            # Page 2: About Us
│   │   └── our-history/page.tsx                # Page 12: Our History Timeline
│   ├── programmes/
│   │   ├── page.tsx                            # Page 3: Programmes index
│   │   └── accelerate/page.tsx                 # Page 4: Accelerate programme
│   ├── stories-news-blogs/
│   │   └── page.tsx                            # Page 5: Stories & News index
│   ├── news/2026/11/.../page.tsx               # Page 6: Single article
│   ├── how-to-help/
│   │   ├── page.tsx                            # Page 7: How to help
│   │   └── why-donate-to-sightsavers/page.tsx  # Page 8: Why donate
│   ├── contact-us/
│   │   ├── page.tsx                            # Page 9: Contact us
│   │   └── frequently-asked-questions/page.tsx # Page 14: FAQ
│   ├── media-centre/page.tsx                   # Page 10: Media centre
│   ├── where-we-work/page.tsx                  # Page 11: Where we work
│   └── appeals/make-extraordinary-change/      # Page 13: Appeal campaign
├── components/
│   ├── layout/
│   │   ├── Header.tsx                          # Shared sticky Header with mobile drawer & regional links
│   │   └── Footer.tsx                          # Shared Footer with charity registration & socials
│   └── ui/
│       ├── Button.tsx                          # Reusable brand button variants
│       ├── Card.tsx                            # Reusable article/programme cards
│       ├── Hero.tsx                            # Reusable hero banner
│       ├── DonateCTA.tsx                       # Interactive donation block (single/monthly, £10/25/50/100)
│       ├── StatsGrid.tsx                       # Impact figures grid
│       ├── Accordion.tsx                       # Accessible FAQ accordion
│       ├── Breadcrumbs.tsx                     # Semantic breadcrumb trail
│       └── NewsletterSignup.tsx                # Interactive newsletter subscription
├── data/                                       # Raw JSON extractions from live site
├── public/images/                              # Downloaded SVG/JPG/PNG assets
├── lib/
│   ├── tokens.ts                               # Centralized design tokens
│   └── utils.ts                                # cn() Tailwind utility
└── package.json
```

---

## 🚀 Running the Project

```bash
# Development mode
npm run dev

# Production build test
npm run build

# Start production server
npm run start
```
