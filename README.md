# Dr. Maya Reynolds, PsyD — Private Practice Website

A modern, high-end editorial website for **Dr. Maya Reynolds, PsyD**, a Licensed Clinical Psychologist based in Santa Monica, California, specializing in therapy for anxiety, trauma, and burnout.

Designed with an intentional, calming editorial aesthetic inspired by California's natural coastal landscape, combining warm neutral palettes, serene typography, and an intuitive user experience for prospective therapy clients.

---

## Key Features

- **Full-Bleed Atmospheric Hero**: An expansive, full-viewport California coastal landscape with layered editorial typography, a custom script ampersand, and direct consultation CTAs.
- **Thoughtful Editorial Typography**:
  - **Headlines**: Cormorant Garamond (refined serif)
  - **Accents**: PrintedMoments (bespoke handwritten script)
  - **Body & UI**: Plus Jakarta Sans (clean, highly legible modern sans-serif)
- **Calming Earth-Toned Palette**:
  - Forest Green (`#284338` / `#1E342B`)
  - Warm Ivory (`#FAF8F5`)
  - Sand Surface (`#F3EFEA` / `#ECE6DD`)
  - Soft Sage (`#8FA698` / `#E1E8E3`)
  - Muted Sage Green (`#658A77`)
- **Comprehensive Practice Sections**:
  - **Navbar**: Sticky header with doctor credentials, desktop navigation, and mobile drawer.
  - **Hero**: Atmospheric full-bleed coastal backdrop with Santa Monica practice focus.
  - **Introductory Overview**: Grounding clinical statement on therapy and self-reflection.
  - **Who I Help / Core Services**: Dedicated cards for Anxiety & Panic, Trauma & EMDR, and Burnout & High Achievers.
  - **Clinical Approach & Methods**: Explanation of CBT, EMDR, Somatic Regulation, and Mindfulness.
  - **About the Psychologist**: Biography of Dr. Maya Reynolds, credentials, verified photo, and practice format cards (In-Person Office & Telehealth).
  - **Office Environment**: Photo gallery showcasing the quiet, private Santa Monica office.
  - **Interactive FAQ**: Accordion addressing common questions regarding therapy, telehealth, insurance, and session structure.
  - **Appointment Request**: Interactive consultation request form with clear practice expectations.
  - **Footer**: Office location details, licensure disclosure, emergency crisis resources, and navigation.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables and custom theme tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Cormorant Garamond, Plus Jakarta Sans (via Google Fonts / Next Font), and PrintedMoments (local WOFF)

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd GrowMyTherapy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

- `npm run dev` — Starts the Next.js development server with Turbopack.
- `npm run build` — Builds the application for production.
- `npm run start` — Runs the compiled production build locally.
- `npx tsc --noEmit` — Performs TypeScript type checking.
- `npx eslint src` — Lints code across the `src/` directory.

---

## Project Structure

```
GrowMyTherapy/
├── public/
│   ├── fonts/
│   │   └── printedmoments.woff     # Custom script font
│   └── images/                     # Editorial lifestyle & coastal images
├── src/
│   ├── app/
│   │   ├── globals.css             # Theme tokens, font definitions, base styles
│   │   ├── layout.tsx              # Root layout, metadata, SEO
│   │   └── page.tsx                # Main single-page application
│   └── components/
│       ├── AboutMaya.tsx           # Biography, portrait, and office/telehealth cards
│       ├── AppointmentCTA.tsx      # Pre-form conversion banner
│       ├── AppointmentForm.tsx     # Consultation booking form
│       ├── Approach.tsx            # Therapeutic philosophy
│       ├── BannerPause.tsx         # Full-width photo pause banner
│       ├── Expertise.tsx           # Clinical specialty areas
│       ├── FAQ.tsx                 # Accordion questions & answers
│       ├── Footer.tsx              # Practice disclosures & footer navigation
│       ├── Hero.tsx                # Full-bleed coastal hero
│       ├── IntroSection.tsx        # Welcome & foundation statement
│       ├── Methods.tsx             # Evidence-based modalities (CBT, EMDR, etc.)
│       ├── Navbar.tsx              # Sticky brand header & navigation
│       ├── OurOffice.tsx           # Santa Monica physical office space
│       ├── StatementBanner.tsx     # Editorial pull quote
│       └── WhoIHelp.tsx            # Core clinical populations
└── README.md
```

---

## License

Private Practice Web Application — All rights reserved.
