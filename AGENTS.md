<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# fahrezi-portfolio

Next.js 16 (App Router) / React 19 / TypeScript 5 / Tailwind v4 / Framer Motion / Zustand — Windows (Laragon).

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server on `http://localhost:3000` |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint (flat config, next/core-web-vitals + typescript) |
| `npx tsc --noEmit` | TypeScript check (no dedicated script) |

No test framework installed.

## Tailwind v4 specifics

- Entry CSS uses `@import "tailwindcss"` + `@config "../../tailwind.config.js"` (not v3 `@tailwind` directives)
- Theme tokens defined via `@theme inline {}` in CSS
- PostCSS plugin is `@tailwindcss/postcss`

## Architecture

- **`src/app/`** — App Router pages: `/`, `/portfolio`, `/portfolio/[id]`, `/about`, `/contact`
- **`src/app/api/`** — REST handlers: `/api/projects`, `/api/certifications`, `/api/contact`
- **`src/data/mockData.ts`** — Single source of mock data (swap to CMS/API here + `src/lib/dataService.ts`)
- **`src/lib/contactService.ts`** — Mock form submit (replace endpoint for Web3Forms / EmailJS)
- **`src/store/portfolioStore.ts`** — Zustand store for portfolio category filter
- **`src/types/index.ts`** — All shared types

## Gotchas

- Path alias `@/*` → `./src/*`
- Locale: `id_ID` (Indonesian)
- Contact form has a honeypot spam field (`.honeypot-field` CSS-hidden)
- Audio file expected at `public/audio/fajar-noor-tahta-hatiku.mp3`
- CV PDF at `public/cv/CV_FAHREZI AULIASYAFA (1).pdf` (path in mockData)
- Images remote pattern only allows `images.unsplash.com`
- `.env*` files are gitignored
