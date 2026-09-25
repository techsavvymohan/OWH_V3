<div align="center">

# OnlyWayOnline (OWH)

**There's only one way to be seen.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20All%20Rights%20Reserved-FF3366?style=for-the-badge)](./LICENSE)

*The official web flagship for OnlyWayOnline — uniting high-speed web engineering, performance marketing, brand strategy, and creator culture under one unified roof.*

</div>

---

> [!IMPORTANT]
> ### 🔒 Intellectual Property & Proprietary Rights Notice
> **Copyright &copy; 2026 OnlyWayOnline (techsavvymohan). All Rights Reserved.**
> 
> This repository and its entire codebase, design language, custom neo-brutalist styling system, brand identity, layout choreography, and case study documentation are the **proprietary intellectual property of OnlyWayOnline**.
> 
> - **No commercial reuse or distribution allowed.**
> - **No copying, cloning, or scraping for agency or commercial use.**
> - **No redistribution as templates, boilerplates, or themes.**
>
> Published for portfolio display, code review, and authorized development only. Unauthorized duplication or commercial imitation will result in immediate legal takedown and statutory copyright enforcement under international IP and DMCA laws. See [LICENSE](./LICENSE) for terms.

---

## ⚡ Overview

Most agencies operate in disconnected silos — dev shops that don't understand paid acquisition, ad agencies running traffic to sluggish pages, or branding studios that ignore technical conversion infrastructure.

**OnlyWayOnline** was engineered to solve this. When engineering, creative direction, and media spend share the exact same brain, being noticed isn't luck — **it's the only way**.

### Core Disciplines
1. **Performance Marketing & Paid Acquisition**: High-intent Meta, Google, and TikTok buys built around real unit economics and automated attribution.
2. **Web Development & Digital Flagships**: Sub-second load times, 100/100 Core Web Vitals, and frictionless conversion funnels engineered with React 19, TypeScript, and Vite.
3. **Brand Strategy & Visual Identity**: Distinctive design tokens, neo-brutalist aesthetics, and messaging playbooks that make brands instantly recognizable.
4. **Influencer Marketing & Creator Culture**: High-engagement creator sourcing, contracted deliverables, and organic distribution that reads as authentic culture.
5. **Content Systems & SEO**: Programmatic search dominance and high-volume asset engines that compound organic traffic over time.

---

## 🏆 Featured Works & Case Studies

Real problems solved for high-growth brands:

| Brand | Domain | Type | Highlights & Outcomes |
|---|---|---|---|
| **GoCoupon** | `gocoupon.io` | Coupon & Deal Aggregator | Automated merchant scrapers, real-time affiliate discount sync, lightning-fast search index. |
| **MatchingProp** | `matchingprop.com` | Prop Firm Comparison Platform | Interactive dark-theme UI, real-time discount comparison, dynamic filtering matrix for traders. |
| **CiteRush** | `citerush.com` | Full Custom Multi-Tool SaaS | Complete custom SaaS suite: web scrapers, lead discovery, SEO / GEO / AEO / EEAT analysis engines, Stripe checkout & custom admin panel ($5K+ budget architecture). |
| **MoneyMoksh** | `moneymoksh.com` | Financial Literacy & Advisory Hub | High-converting educational funnels, vernacular trust-building architecture, automated lead generation. |
| **BTV Affiliates** | `btvaffiliates.com` | Affiliate Marketing Network | High-ticket conversion funnel, real-time payout tracking, automated partner onboarding. |

---

## 🎨 Design & Engineering Highlights

- **Neo-Brutalist Architecture**: High-contrast borders, bold geometry, bespoke badge tags, paper-tinted palettes, and dynamic sticker accents.
- **Dynamic Dual Theme**: Instant toggle between Dark Mode (`#0D0D0D`) and Light Mode (`#F5F4EE`) with seamless CSS variable switching and persistent local state.
- **GSAP 3 Scroll Choreography**: Hardware-accelerated tweens, ScrollTrigger batch reveals, timeline sequences, and responsive media query cleanup via `@gsap/react`.
- **Interactive Engagement Scope Estimator**: Multi-step quote builder allowing prospective clients to customize disciplines and directly submit requirements to `info@onlywayonline.com`.
- **Zero-Bloat Production Bundle**: Built with modern Vite ES modules, weighing in at under 25KB CSS and ~150KB gzip JS for instant sub-second initial paint.
- **Accessibility & Motion Preference**: Built-in support for `prefers-reduced-motion` with safe fallbacks and keyboard-accessible modal dialogs.

---

## 🛠️ Tech Stack

- **Runtime & Framework**: [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/) + [Oxlint](https://oxc.rs/)
- **Animation Suite**: [GSAP 3](https://gsap.com/) (`gsap`, `@gsap/react`, `ScrollTrigger`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Micro-Interactions**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Form Ingestion**: Formspree (configured for `info@onlywayonline.com`)

---

## 📂 Project Structure

```text
OWH_V3/
├── public/
│   ├── owh_logo.webp              # Brand favicon & logo mark
│   └── robots.txt
├── src/
│   ├── components/                # Modular UI components
│   │   ├── CtaSection.tsx         # Bottom conversion banners
│   │   ├── Footer.tsx             # Global footer with live status & links
│   │   ├── Marquee.tsx            # Neo-brutalist continuous infinite ticker
│   │   ├── Navbar.tsx             # Navigation with theme switch & mobile drawer
│   │   ├── ServiceEstimator.tsx   # Interactive Scope Estimator & Quote Request
│   │   └── WorkModal.tsx          # Full-screen architectural case study reader
│   ├── context/
│   │   └── ThemeContext.tsx       # Dark / Light theme provider & persistence
│   ├── data/                      # Structured content & case study models
│   │   ├── faqData.ts             # Domain-specific FAQ listings
│   │   ├── servicesData.ts        # Service disciplines & comparison matrix
│   │   └── workData.ts            # Detailed client case studies & outcomes
│   ├── hooks/
│   │   └── usePageAnimations.ts   # Unified GSAP ScrollTrigger orchestration
│   ├── pages/                     # Routed pages
│   │   ├── AboutPage.tsx          # Agency doctrine, principles & timeline
│   │   ├── ContactPage.tsx        # Direct contact form & studio information
│   │   ├── HomePage.tsx           # Digital flagship homepage & interactive proof
│   │   ├── ServicesPage.tsx       # Full disciplines breakdown & comparison table
│   │   └── WorkPage.tsx           # Filterable portfolio & case study explorer
│   ├── styles/
│   │   └── index.css              # Custom Neo-Brutalist CSS design system & tokens
│   ├── App.tsx                    # Root application router
│   └── main.tsx                   # React 19 entrypoint
├── LICENSE                        # Strict Proprietary All Rights Reserved License
├── README.md                      # Repository documentation
├── index.html                     # HTML5 shell with Google Fonts & metadata
├── package.json                   # Dependencies and npm scripts
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🚀 Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### Installation
```bash
# Clone the repository (for authorized team members)
git clone https://github.com/techsavvymohan/OWH_V3.git

# Navigate to project directory
cd OWH_V3

# Install dependencies
npm install
```

### Run Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Generates an optimized, tree-shaken static production bundle in `/dist`.

### Preview Production Build
```bash
npm run preview
```

---

## 📧 Quote & Contact Form Setup

The **Interactive Engagement Scope Estimator** and **Contact Form** are pre-wired to submit to:
- **Email**: `info@onlywayonline.com`
- **Provider**: Formspree (configured in `src/components/ServiceEstimator.tsx` and `src/pages/ContactPage.tsx`).

To point submissions to your live Formspree endpoint:
1. Create a free form at [formspree.io](https://formspree.io) set to deliver to `info@onlywayonline.com`.
2. Replace `YOUR_FORM_ID` in `ServiceEstimator.tsx` and `ContactPage.tsx` with your assigned Form ID.

---

## ⚖️ Legal & Copyright

```text
Copyright (c) 2026 OnlyWayOnline (techsavvymohan).
All Rights Reserved.

Unauthorized copying, cloning, public hosting, reverse engineering, 
or commercial use of this software, code, assets, or design system 
is strictly prohibited under international copyright law.
```

**Official Website**: [https://onlywayonline.com](https://onlywayonline.com)  
**General Inquiries**: [info@onlywayonline.com](mailto:info@onlywayonline.com)
