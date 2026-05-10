# Amawe — Agent Documentation

## Project Overview
Amawe is a bilingual (FR/EN) website built with Astro 5, deployed on Cloudflare Workers.

## Tech Stack
| Technology | Version | Purpose |
|---|---|---|
| Astro | ^5.16.6 | Web framework (SSR) |
| Tailwind CSS | ^4.1.14 | Styling |
| TypeScript | strict | Language |
| Bun | latest | Package manager & runtime |
| Cloudflare Workers | via Wrangler | Deployment |
| Sharp | ^0.34.5 | Image optimization |

## Project Structure
```
amawe-siteweb/
├── .github/workflows/deploy.yml   # CI/CD pipeline
├── public/
│   ├── images/                     # Static images (WebP)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/                 # Astro components
│   ├── i18n/
│   │   ├── translations.ts        # FR/EN translation strings
│   │   └── utils.ts               # i18n helper functions
│   ├── layouts/
│   │   └── Layout.astro           # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro            # French homepage (/)
│   │   └── en/
│   │       └── index.astro        # English homepage (/en/)
│   ├── styles/
│   │   └── global.css             # Global styles + Tailwind + Design tokens
│   └── utils/
│       └── schema.ts              # JSON-LD structured data
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── wrangler.jsonc
```

## Design System

### Color Palette — Amawe 2026
| Name | Hex | Usage |
|---|---|---|
| Noir | `#1A1A1A` | Texte principal, headings, fonds sombres |
| Prune Signature | `#8B5A7A` | Couleur signature, accents premium |
| Terracotta | `#CE766A` | CTAs, boutons, urgence, highlights |
| Vert Signature | `#005850` | Nature, confiance, accents verts |
| Olive Sauge | `#9CAF88` | Vert doux, badges, check marks |
| Sable Doré | `#E8D5B5` | Fond chaud, accents doux |
| Pierre Claire | `#E8E0D8` | Bordures, séparateurs, fond neutre |
| Lin Naturel | `#F5EFE7` | Fond chaud principal |
| Ivoire Rosé | `#F8F3F0` | Fond le plus clair, cards |
| Grès | `#8A7268` | Texte secondaire, sous-titres |
| Blanc | `#FFFFFF` | Surface, cards, overlays |

### Typography — Amawe 2026

**Polices** : Josefin Sans (headings) + Lato (corps de texte)
Source : Google Fonts

| Element | Police | Weight | Taille | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| H1 — Titre Principal | Josefin Sans | 200 (extra-light) | 4em | 0.02em | — |
| H2 — Titre Secondaire | Josefin Sans | 300 (light) | 3em | 0.02em | — |
| H3 — Sous-titre | Josefin Sans | 400 (regular) | 2em | 0.01em | — |
| Corps de texte | Lato | 300 (light) | 1.1em | — | 1.9 |

### Aesthetic Direction
- Luxury, minimal, nature-focused
- Clean whitespace
- Subtle transitions
- WebP images only

## Commands
| Command | Description |
|---|---|
| `bun dev` | Start dev server on port 3000 |
| `bun run build` | Type check + build for production |
| `bun run preview` | Preview production build |
| `bun run format` | Format code with Prettier |
| `bun run format:check` | Check formatting |
| `bun run seo:check` | Run SEO audit |

## i18n
- Default locale: `fr` (served at `/`)
- English locale: `en` (served at `/en/`)
- All strings in `src/i18n/translations.ts`
- Use `useTranslations(lang)` to get the `t()` function
- Use `getLangFromUrl(Astro.url)` to detect current language

## Images (`public/images/`)

All images are **WebP format**, optimized for web performance.

### Image Optimization Rules
- **Portraits** : max 800px wide, quality 65-80
- **Paysages** : max 1200px wide, quality 78-80
- **All images** : `decoding="async"`, correct `width`/`height` attributes
- **First visible image** : `loading="eager"` + `fetchpriority="high"`
- **All other images** : `loading="lazy"`

### Image Inventory — Page Énergie Illimitée

| Filename | Dimensions | Size | Format | Source | Usage |
|---|---|---|---|---|---|
| `claire-energie-illimitee.webp` | 683x1024 | 60 Ko | Portrait | Production (2026/01) | Section Promesse (à côté du texte) |
| `claire-ei-portrait.webp` | 800x1200 | 134 Ko | Portrait | Production (2026/02) | Section citation intermédiaire |
| `claire-ei-paysage.webp` | 1024x682 | 54 Ko | Paysage | Production (2026/01) | Grille bento |
| `claire-stage.webp` | 1198x800 | 44 Ko | Paysage | Existante | Grille bento |
| `stage-groupe.webp` | 750x1000 | 120 Ko | Portrait | Recompressée | Grille bento (span 2 rows) |
| `claire-danse-libre.webp` | 1024x684 | 20 Ko | Paysage | Existante | Grille bento 2e rangée |
| `groupe-ei-2.webp` | 1200x900 | 136 Ko | Paysage | Production (2026/01) | Grille bento |
| `groupe-ei-3.webp` | 800x1067 | 177 Ko | Portrait | Production (2026/01) | Disponible (non intégrée) |
| `movnat-1.webp` | 750x1000 | 199 Ko | Portrait | Production (2026/02) | Grille bento 2e rangée |
| `movnat-2.webp` | 800x1220 | 140 Ko | Portrait | Production (2026/02) | Disponible (non intégrée) |
| `nature-aveyron.webp` | 750x1000 | 95 Ko | Portrait | Recompressée | Disponible |
| `roue-sante-holistique.webp` | 800x756 | 50 Ko | Carré | Existante | Section 4 Piliers |

### Image Inventory — Autres pages

| Filename | Dimensions | Size | Usage |
|---|---|---|---|
| `claire-portrait-full.webp` | 800x1200 | 75 Ko | Hero homepage |
| `claire-portrait.webp` | 200x300 | 7 Ko | Page contact |
| `claire-bmd.webp` | 776x776 | 35 Ko | Composant |
| `claire-energie-illimitee2.webp` | 683x1024 | 38 Ko | Page à propos |
| `ecolieu-la-margue.webp` | 1024x768 | 103 Ko | Page expériences |
| `ecolieu-paysage.webp` | 1400x1050 | 372 Ko | Page à propos (à recompresser) |
| `introspection.webp` | 1198x800 | 44 Ko | Page expériences |
| `la-margue-exterieur.webp` | 800x1067 | 103 Ko | Page expériences |
| `meditation-retraite.webp` | 1200x800 | 24 Ko | Composant ExperiencesPreview |
| `paysage-aveyron.webp` | 1351x900 | 205 Ko | Page expériences hero (à recompresser) |
| `salle-pratique.webp` | 1024x768 | 106 Ko | Page expériences |
| `silence-meditation.webp` | 1024x683 | 15 Ko | Page expériences |

## SEO Checklist
- [ ] Title tag on every page
- [ ] Meta description on every page
- [ ] Canonical URL with trailing slash
- [ ] Hreflang tags (fr + en + x-default)
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] JSON-LD structured data
- [ ] Sitemap at /sitemap-index.xml
- [ ] robots.txt
