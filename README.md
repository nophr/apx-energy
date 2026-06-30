# APX Energy Solutions — Marketing Site

Single-page marketing site for **APX Energy Solutions**, a full-spectrum renewable energy
company and the exclusive international distributor for Sanhe Power Tech across Australia,
Cambodia, and Vietnam.

Built as a fast, animated single-page app: a fixed navbar with scroll-spy, GSAP scroll
reveals, and a section-by-section narrative from hero to contact.

## Tech stack

- **React 19** + **Vite 8** (`@vitejs/plugin-react`)
- **Tailwind CSS v4** via `@tailwindcss/vite` (theme tokens defined in `src/index.css`)
- **GSAP** + **ScrollTrigger** (`@gsap/react`) for load-in, scroll reveals, parallax, and tilt
- **lucide-react** for all icons
- **Oxlint** for linting
- Deployed as a **Cloudflare Worker** serving static assets (see [Deployment](#deployment))

## Getting started

Requires Node 18+ and npm.

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (http://localhost:5173)
```

## Scripts

| Command           | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Start the Vite dev server with HMR                                 |
| `npm run build`   | Production build to `dist/`                                        |
| `npm run preview` | Serve the built `dist/` locally                                    |
| `npm run lint`    | Run Oxlint                                                         |

## Project structure

```
src/
  main.jsx                 App entry
  App.jsx                  Composes the page sections in scroll order
  index.css                Tailwind import + theme tokens + global styles
  components/              One file per section / UI piece
    Navbar.jsx             Fixed header with scroll-spy active underline
    Hero.jsx               Video background hero + clickable scroll cue
    About.jsx              Who we are + trust pillars
    SanheStats.jsx         Technology partner (Sanhe) stats
    BusinessPillars.jsx    Three delivery verticals
    EPC.jsx                E-P-C-O&M turnkey delivery flow
    Projects.jsx           Active project pipeline
    Solutions.jsx          Solutions portfolio grid
    WhyAPX.jsx             Reasons to choose APX
    Markets.jsx            Regional markets
    Clients.jsx            Industry sectors + client logo wall
    Contact.jsx            Contact form + merged footer
    Logo.jsx / BrandLogo.jsx   SVG logo + brand-logo-with-fallback
  data/brands.js           Client + certification lists
  lib/useScrollAnimations.js  GSAP/ScrollTrigger setup (respects reduced-motion)
  assets/logos/            Brand + certification logo files (resolved at build time)
public/                    Static assets (hero video/image, favicon)
```

### Navigation

The navbar links map to section `id`s and follow the page's scroll order. A scroll listener
underlines the link of whichever section is currently under the menu bar. Anchored sections
use `scroll-margin-top` so they land flush under the fixed 80px navbar.

### Icons

All icons come from `lucide-react`. Import the component you need and render it directly,
e.g. `import { Sun } from 'lucide-react'` → `<Sun className="w-6 h-6" strokeWidth={1.75} />`.

## Deployment

The site deploys as a Cloudflare Worker serving the static `dist/` output, configured in
[`wrangler.jsonc`](./wrangler.jsonc).

When connecting the repo in the Cloudflare dashboard (Workers Builds):

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

Cloudflare clones the repo, runs the build (Vite → `dist/`), then uploads `dist/` as static
assets. `dist/` itself is gitignored and regenerated on every build.
