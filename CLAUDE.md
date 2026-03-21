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
| Final domain (planned) | `libertas.tours` — owner needs to find out where this domain is registered |
| DNS provider for aicompetent.academy | mijndomein.nl (configured to point to GitHub Pages) |
| Contact email | info@libertas.tours |
| Planned hosting migration | Move from GitHub Pages to **Hostinger** — pending domain registration check for libertas.tours |

### DNS Configuration at mijndomein.nl (current — for aicompetent.academy)

| Type | Naam | Waarde |
|------|------|--------|
| A | aicompetent.academy | 185.199.108.153 |
| A | aicompetent.academy | 185.199.109.153 |
| A | aicompetent.academy | 185.199.110.153 |
| A | aicompetent.academy | 185.199.111.153 |
| CNAME | www.aicompetent.academy | albertmulder1954.github.io |
| CNAME | _dmarc.aicompetent.academy | dmarc-reject.mijndomein.nl. |
| TXT | aicompetent.academy | "v=spf1 a mx include:spf.mijndomeinhosting.nl -all" |

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
├── images/
│   ├── hero.jpg                # Hero background: De Libertas ship from above (REAL PHOTO)
│   ├── libertas-varend.jpg     # Libertas sailing (REAL PHOTO - used in "Waarom Libertas" section)
│   ├── ruth.jpg                # Ruth Lachaert portrait (REAL PHOTO)
│   ├── ijsbrand.jpg            # IJsbrand Overmaat at ECDIS zoom (REAL PHOTO)
│   ├── vergaderruimte.jpg      # Meeting room aboard ship (REAL PHOTO)
│   ├── brug.jpg                # Opening bridge (REAL PHOTO)
│   ├── hollands-diep.png       # Hollands Diep - Meren & Open Water (Gemini-generated)
│   ├── rivierengebied.png      # IJssel/Zwarte Water/Kampen - Rivierengebied (Gemini-generated)
│   ├── kanalen-sluizen.png     # Kanaal met sluis - Kanalen & Sluizen (Gemini-generated)
│   ├── hero-mockup.jpg         # OLD mockup from Ton (can be removed)
│   ├── filosofie-mockup.jpg    # OLD mockup from Ton
│   ├── drie-wegen-mockup.jpg   # OLD mockup from Ton
│   ├── over-ons-mockup.jpg     # OLD mockup from Ton
│   ├── bios-mockup.jpg         # OLD mockup from Ton
│   ├── waarom-mockup.jpg       # OLD mockup from Ton
│   ├── schip-mockup.jpg        # OLD mockup from Ton
│   └── diensten-mockup.jpg     # OLD mockup from Ton
├── CNAME                       # Custom domain for GitHub Pages (aicompetent.academy)
├── robots.txt                  # Search engine directives
├── sitemap.xml                 # XML sitemap
├── README.md                   # Repo readme
├── CLAUDE.md                   # This file
└── .gitignore
```

## Design System

### Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Navy | `#1B2A4A` | `--navy` | Primary brand color, headings, nav text |
| Navy Light | `#2C3E6B` | `--navy-light` | Hover states |
| Navy Dark | `#111D35` | `--navy-dark` | Footer background |
| Gold | `#C9A96E` | `--gold` | Accent, dividers, numbering |
| Gold Light | `#D4BA88` | `--gold-light` | Gold hover states |
| Orange | `#F57C00` | — | "Offerte Aanvragen" CTA button background |
| Off-white | `#F8F9FA` | `--off-white` | Subtle backgrounds |
| Text | `#333333` | `--text` | Body text |
| Text Light | `#666666` | `--text-light` | Secondary text |

### Typography

- **Font family:** Montserrat (Google Fonts), used for everything
- **Headings** (`.font-display`): Montserrat **Black Italic** (weight 900, italic). Specifically chosen to match Ton's mockup design.
- **Body text:** Montserrat regular (weight 400)
- **Quotes:** Montserrat Bold Italic (weight 700, italic)

### Buttons

- `.btn-gold` -- **Orange** CTA button (#F57C00) with white text, fully rounded (border-radius: 9999px)
- `.btn-primary` -- Navy button with white text, fully rounded (border-radius: 9999px)
- All buttons have hover lift effect and shadow

### Components (defined in style.css)

- `.card` -- White card with rounded corners, shadow, hover lift effect
- `.quote` -- Blockquote with gold left border, bold italic
- `.section-divider` -- 60px gold horizontal line (centered, used under section headings)
- `.fade-in` / `.fade-in.visible` -- Scroll-triggered fade-in + slide-up animation
- `.nav-link` -- Nav links with gold underline on hover
- `.hero-overlay` -- Navy gradient overlay on hero images

### Tailwind Config (inline in each HTML file)

Custom colors `navy` and `gold` (with variants) are defined via inline `tailwind.config` in each page's `<head>`. This config is duplicated across all 7 HTML files.

## Navigation

- **Style:** White background, navy text, fixed at top
- **Logo:** SVG Libertas Tours logo (inline SVG in nav) — ship silhouette with "LibertasTours" text
- Desktop: horizontal links
- Mobile: hamburger button opens full-screen overlay menu
- On homepage: nav starts transparent, turns white with shadow on scroll (via JS)
- On subpages: nav is always white with shadow
- Active page gets a gold underline via JS
- **Menu items:** HOME, AGENDA, BEMANNING, LOCATIES, SERVICE EN RATES, CONTACT

### Hero Section

- Full-screen hero with `hero.jpg` as background
- Dark navy overlay gradient
- Title text: "Game-based training in een historisch opleidingsschip te midden van schitterende locaties!" — positioned in upper portion
- 4 CTA buttons at bottom (~82% from top): OFFERTE AANVRAGEN (orange), FILOSOFIE, HISTORY, THE CAPTAIN (navy, rounded)

## Photo Sources

| Photo | Source | Location on PC |
|-------|--------|---------------|
| All real photos | `C:\Users\alber\OneDrive - WorldEmp India Private Limited\project libertas` | Various filenames |
| hero.jpg | `hero.jpg.jpeg` from project libertas folder | Ship from above |
| ruth.jpg | Ruth Lachaert portrait | Woman with plants |
| ijsbrand.jpg | `ijsbrandt met ecdis zoom.jpeg` | Man at ship controls |
| vergaderruimte.jpg | Meeting room photo | Interior with people at table |
| brug.jpg | `brug die open staat.jpeg` | Opening bridge |
| libertas-varend.jpg | `libertas.jpeg` | Ship sailing on water |
| hollands-diep.png | `hollands diep door gemini.png` | AI-generated landscape |
| rivierengebied.png | `ijssel zwarte water kampen door gemini.png` | AI-generated landscape |
| kanalen-sluizen.png | `kanaal met sluis door gemini.png` | AI-generated landscape |

### Image positioning notes

- **Ruth (Over ons):** `object-position: center 30%` — head centered vertically
- **IJsbrand (Over ons):** `object-position: center 25%` — head visible
- **Ruth (Drie wegen kaart 1):** `object-position: center 30%` — head centered
- **IJsbrand (Drie wegen kaart 3):** `object-position: center top`
- All card images: `height: 240px; object-fit: cover`

## Key People

- **Albert Mulder** -- Owner of Libertas Tours, website owner
- **Ruth Lachaert** -- Crew member, reflection & personal coaching expert
- **IJsbrand Overmaat** -- Crew member, 30 years of sailing expertise, ship handling masterclass
- **Ton** -- Original mockup designer (old mockup images still in images/ folder)

## Important Notes

- Old mockup images (`*-mockup.jpg`) are still in the images/ folder but most have been replaced with real photos. Can be cleaned up.
- The Tailwind config is duplicated in every HTML file's `<head>` section. When changing colors or Tailwind settings, update ALL 7 files.
- The CNAME file currently points to `aicompetent.academy` (try-out domain). Will be changed to `libertas.tours` when hosting migration to Hostinger is complete.
- The contact form references Formspree but the form ID still needs to be configured.
- The website language is Dutch (lang="nl").
- Some nav items use English labels mixed with Dutch (e.g., "Service en Rates", "History", "The Captain"). This inconsistency exists in the current build.
- The "Veilig transport" text on service page was updated to say "Wij vervoeren u" instead of "Uw lading vervoeren wij".

## Pending Tasks

- [ ] Determine where `libertas.tours` domain is registered
- [ ] Buy Hostinger hosting plan and migrate site from GitHub Pages to Hostinger
- [ ] Configure DNS for libertas.tours pointing to Hostinger
- [ ] Switch CNAME from `aicompetent.academy` to `libertas.tours`
- [ ] Configure Formspree form ID for the contact form
- [ ] Replace remaining placeholder images on locaties.html (Stadsvaarwater still has placeholder)
- [ ] Clean up old mockup images from images/ folder
- [ ] Fix mixed Dutch/English in navigation labels
- [ ] Add favicon
- [ ] Add Open Graph image (`og:image` meta tag)
- [ ] Set up info@libertas.tours email
