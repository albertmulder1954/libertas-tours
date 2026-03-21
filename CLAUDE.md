# Libertas Tours Website

## Project Overview

Website for **Libertas Tours** -- a historic training ship ("De Libertas", 38-meter Kempenaar) that can be rented for game-based training, coaching, reflective learning, and leadership programs on the water. The website is in Dutch.

**Owner:** Albert Mulder
**Note:** The owner does not code. Claude makes all code changes directly.

## Hosting & Domains

| Item | Value |
|------|-------|
| GitHub repo | `albertmulder1954/libertas-tours` (PUBLIC) |
| GitHub Pages URL | `albertmulder1954.github.io/libertas-tours` |
| Current domain (try-out) | `aicompetent.academy` (set in CNAME file) |
| Final domain (planned) | `libertas.tours` |
| DNS provider | mijndomein.nl (configured to point to GitHub Pages) |
| Contact email | info@libertas.tours |

## Tech Stack

- **Static HTML** -- no build step, no framework
- **Tailwind CSS** via CDN (`https://cdn.tailwindcss.com`) with inline config in each HTML file
- **Custom CSS** in `css/style.css` (CSS variables, buttons, cards, animations, nav)
- **JavaScript** in `js/main.js` (mobile menu, fade-in animations, scroll-based nav, active page highlighting)
- **Google Fonts** -- Montserrat (all weights 300-900, normal + italic)
- **Contact form** -- Formspree (form ID needs to be configured)

## Folder Structure

```
libertas-tours/
├── index.html                  # Homepage (hero, philosophy, three paths, why Libertas, CTA)
├── het-schip.html              # "The Ship" -- history and specs of De Libertas
├── bemanning.html              # "Crew" -- Ruth Lachaert & IJsbrand Overmaat bios
├── locaties.html               # "Locations" -- sailing routes across the Netherlands
├── agenda.html                 # "Agenda" -- upcoming trainings and voyages
├── service-en-tarieven.html    # "Services & Rates" -- day/multi-day programs, pricing
├── contact.html                # "Contact" -- contact form (Formspree), quote request
├── css/
│   └── style.css               # Custom CSS on top of Tailwind
├── js/
│   └── main.js                 # All client-side JavaScript
├── images/                     # Mockup screenshots from original design by "Ton"
│   ├── hero-mockup.jpg         # Hero section background (668 KB)
│   ├── filosofie-mockup.jpg    # Philosophy section image
│   ├── drie-wegen-mockup.jpg   # "Three paths" card image
│   ├── over-ons-mockup.jpg     # "About us" / team card image
│   ├── bios-mockup.jpg         # Bios / crew card image
│   ├── waarom-mockup.jpg       # "Why Libertas" section image
│   ├── schip-mockup.jpg        # Ship detail image
│   └── diensten-mockup.jpg     # Services image
├── projectgeheugen/
│   └── PROJECT-OVERZICHT.md    # Dutch project overview (legacy)
├── CNAME                       # Custom domain for GitHub Pages (aicompetent.academy)
├── robots.txt                  # Search engine directives
├── sitemap.xml                 # XML sitemap
├── README.md                   # Repo readme
└── .gitignore
```

## Design System

### Colors

| Name | Hex | CSS Variable | Tailwind Class | Usage |
|------|-----|-------------|----------------|-------|
| Navy | `#1B2A4A` | `--navy` | `navy` | Primary brand color, headings, nav, footer |
| Navy Light | `#2C3E6B` | `--navy-light` | `navy-light` | Hover states |
| Navy Dark | `#111D35` | `--navy-dark` | `navy-dark` | Footer background |
| Gold | `#C9A96E` | `--gold` | `gold` | Accent, CTAs, icons, dividers |
| Gold Light | `#D4BA88` | `--gold-light` | `gold-light` | Gold hover states |
| Off-white | `#F8F9FA` | `--off-white` | -- | Subtle backgrounds |
| Text | `#333333` | `--text` | -- | Body text |
| Text Light | `#666666` | `--text-light` | -- | Secondary text |

### Typography

- **Font family:** Montserrat (Google Fonts), used for everything
- **Headings** (`.font-display`): Montserrat **Black Italic** (weight 900, italic). This was specifically chosen to match Ton's mockup design.
- **Body text:** Montserrat regular (weight 400)
- **Quotes:** Montserrat Bold Italic (weight 700, italic)

### Components (defined in style.css)

- `.btn-gold` -- Gold CTA button (primary action, e.g., "Offerte aanvragen")
- `.btn-primary` -- Navy button with white text
- `.card` -- White card with rounded corners, shadow, hover lift effect
- `.quote` -- Blockquote with gold left border, bold italic
- `.section-divider` -- 60px gold horizontal line (centered, used under section headings)
- `.fade-in` / `.fade-in.visible` -- Scroll-triggered fade-in + slide-up animation
- `.nav-link` -- Uppercase nav links with gold underline on hover
- `.hero-overlay` -- Navy gradient overlay on hero images

### Tailwind Config (inline in each HTML file)

Custom colors `navy` and `gold` (with variants) are defined via inline `tailwind.config` in each page's `<head>`. This config is duplicated across all 7 HTML files.

## Page Details

| Page | Title | Key Sections |
|------|-------|-------------|
| `index.html` | Homepage | Hero (full-screen with background image), USP strip, Philosophy ("Aan de kade regeert de waan van de dag"), Three paths (Reflectie, Teamdynamiek, Vakmanschap), Why Libertas (three pillars), Quote, CTA, Footer |
| `het-schip.html` | Het Schip | Ship history, specs (38m Kempenaar), photos |
| `bemanning.html` | Bemanning | Crew profiles: Ruth Lachaert (reflection/coaching), IJsbrand Overmaat (30yr sailing expertise) |
| `locaties.html` | Locaties | Sailing locations across the Netherlands |
| `agenda.html` | Agenda | Upcoming training events and voyages |
| `service-en-tarieven.html` | Service en Tarieven | Day trainings, multi-day programs, pricing |
| `contact.html` | Contact | Contact/quote request form (Formspree) |

## Navigation

- Desktop: fixed top nav, horizontal links (uppercase, tracking-wider)
- Mobile: hamburger button opens full-screen overlay menu
- On homepage: nav starts transparent with white text, turns white with shadow on scroll
- On subpages: nav is always white with shadow (`bg-white shadow-md`)
- Active page gets a gold underline via JS

## JavaScript Features (js/main.js)

1. **Mobile menu** -- hamburger open/close with body scroll lock
2. **Fade-in animations** -- IntersectionObserver adds `.visible` class to `.fade-in` elements
3. **Active page marking** -- compares current URL to nav link hrefs
4. **Scroll-aware nav** -- transparent-to-white nav transition (homepage only)
5. **Smooth scroll** -- for anchor links (`href="#..."`)

## Key People

- **Albert Mulder** -- Owner of Libertas Tours, website owner
- **Ruth Lachaert** -- Crew member, reflection & personal coaching expert
- **IJsbrand Overmaat** -- Crew member, 30 years of sailing expertise, ship handling masterclass
- **Ton** -- Original mockup designer (images in `images/` folder are screenshots from his design)

## Important Notes

- All images are mockup screenshots from the original design, stored as `*-mockup.jpg`. These will eventually be replaced with real photography.
- The Tailwind config is duplicated in every HTML file's `<head>` section. When changing colors or Tailwind settings, update ALL 7 files.
- The CNAME file currently points to `aicompetent.academy` (try-out domain). It will be changed to `libertas.tours` when that domain is ready.
- The contact form references Formspree but the form ID still needs to be configured with a real Formspree endpoint.
- The website language is Dutch (lang="nl").
- Some nav items use English labels mixed with Dutch (e.g., "Service en Rates" instead of "Service en Tarieven", "History", "The Captain"). This inconsistency exists in the current build.

## Pending Tasks

- [ ] Configure Formspree form ID for the contact form
- [ ] Replace mockup images with real photography
- [ ] Switch CNAME from `aicompetent.academy` to `libertas.tours` when domain is ready
- [ ] Fix mixed Dutch/English in navigation labels (e.g., "Service en Rates" vs "Service en Tarieven")
- [ ] Add favicon
- [ ] Add Open Graph image (`og:image` meta tag)
