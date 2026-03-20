# Projectgeheugen: Libertas Tours Website

## Projectomschrijving
Website voor **Libertas Tours** — een historisch opleidingsschip (De Libertas, 38 meter Kempenaar) dat game-based trainingen, reflectie-coaching en leiderschapsprogramma's aanbiedt op het water.

## Stakeholders
- **Albert Mulder** — opdrachtgever, projectcoördinator
- **"Ton"** — maker van de originele mockup-screenshots (8 schermen)
- **Ruth Lachaert** — psycholoog, reflectie-coach, onderdeel van de bemanning
- **IJsbrand Overmaat** — kapitein (30+ jaar ervaring), oprichter Marquise Management

## Technische keuzes

| Keuze | Beslissing | Reden |
|-------|-----------|-------|
| Framework | Statische HTML + Tailwind CSS (CDN) | Hostinger shared hosting, geen build-stappen |
| Hosting | Hostinger | Bestaand account van Albert |
| Domein | libertas.tours | Reeds in bezit, nog niet gekoppeld |
| Contactformulier | Formspree.io | Geen backend nodig |
| Contact e-mail | info@libertas.tours | In te stellen via Hostinger |
| Taal | Alleen Nederlands | Beslissing Albert |
| Foto's | Voorlopig placeholders | Albert levert later echte foto's |
| Versioning | GitHub (privé repo) | Automatische deployment via Hostinger Git |

## Bestanden

| Bestand | Status | Beschrijving |
|---------|--------|-------------|
| `index.html` | ✅ Klaar | Home: hero, filosofie, 3 wegen, waarom De Libertas |
| `bemanning.html` | ✅ Klaar | Team: Ruth Lachaert & IJsbrand Overmaat |
| `het-schip.html` | ✅ Klaar | Het schip: specs, historie, galerij |
| `agenda.html` | ⏳ Skelet | Agenda: placeholder data (TBD) |
| `locaties.html` | ⏳ Skelet | Locaties: 3 categorieën (rivieren, kanalen, meren) |
| `service-en-tarieven.html` | ✅ Klaar | Diensten: 3 programma's + 2 kernwaarden |
| `contact.html` | ✅ Klaar | Contactformulier (Formspree ID nog invullen) |
| `css/style.css` | ✅ Klaar | Custom styles |
| `js/main.js` | ✅ Klaar | Mobiele nav, fade-in, scroll-nav |
| `robots.txt` | ✅ Klaar | SEO |
| `sitemap.xml` | ✅ Klaar | SEO |

## Design systeem
- **Kleuren:** Navy (#1B2A4A), Gold (#C9A96E), wit, lichtgrijs (#F8F9FA)
- **Typografie:** Inter (body) + Playfair Display (headers, italic)
- **Layout:** Max 1200px container, card-based, full-width hero

## Openstaande acties

| Actie | Wie | Status |
|-------|-----|--------|
| Domein koppelen aan Hostinger (nameservers) | Albert | ❌ |
| SSL activeren | Albert | ❌ |
| GitHub repo koppelen in Hostinger hPanel | Albert | ❌ |
| Formspree account aanmaken + ID invullen | Albert | ❌ |
| info@libertas.tours mailbox instellen | Albert | ❌ |
| Echte foto's aanleveren | Albert | ❌ |
| Logo aanleveren (SVG/PNG) | Albert/Ton | ❌ |
| Agenda vullen met echte data | Albert | ❌ |
| Locaties pagina aanvullen | Albert | ❌ |
| Alle teksten controleren | Albert | ❌ |

## Bronbestanden
- Mockup screenshots: `C:\Users\alber\OneDrive - WorldEmp India Private Limited\project libertas\`
- 8 JPG bestanden: scherm 1 t/m 8 van het originele ontwerp door Ton

## Chronologie
- **20 maart 2026** — Website gebouwd op basis van 8 mockup-screenshots, GitHub repo aangemaakt
