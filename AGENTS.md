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

### Color Palette
| Name | Hex | Usage |
|---|---|---|
| Primary | `#1a1a1a` | Text, headings |
| Secondary | `#2d5016` | Nature accents |
| Accent | `#d4af37` | Gold highlights, CTAs |
| Background | `#fafafa` | Page background |
| Surface | `#ffffff` | Cards, overlays |
| Text Light | `#6b7280` | Subtitles, captions |
| Border | `#e5e7eb` | Dividers, borders |

### Typography
- System fonts (no external font loading)
- Headings: font-weight 300 (light)
- Body: font-weight 400 (normal)
- Letter spacing: -0.02em for headings

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
