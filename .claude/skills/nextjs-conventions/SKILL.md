---
name: nextjs-conventions
description: Next.js 14 App Router conventions for this specific project — folder structure, import aliases, component split rules, page composition pattern, and API route conventions. Load when creating new components, routes, or restructuring files.
---

# Next.js Conventions Skill

## Framework
- **Next.js 14** with **App Router** (not Pages Router — never use `pages/` directory)
- **TypeScript strict mode** enabled
- **Node 20 LTS** (locked via `.nvmrc`)

---

## Import Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

```tsx
// Always use alias — never relative paths from deep directories
import Hero from '@/components/sections/Hero'
import EmailCapture from '@/components/sections/EmailCapture'
import ScrollProgress from '@/components/ui/ScrollProgress'
```

Exception: within the same folder, relative imports are fine:
```tsx
// Inside ui/ folder — these are fine
import LoadingScreen from './LoadingScreen'
import Particles from './Particles'
```

---

## Folder Structure

```
src/
├── app/
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts        # API Routes go here
│   ├── globals.css             # Global styles, Tailwind, CSS utilities
│   ├── layout.tsx              # Root layout + all SEO metadata
│   └── page.tsx                # Single page — composes section components
└── components/
    ├── sections/               # Full page sections (Hero, About, etc.)
    └── ui/                     # Shared widgets (ScrollProgress, BackToTop, etc.)

public/
└── images/                     # All static images and GIFs
    └── [asset-name].ext        # kebab-case naming convention
```

### sections/ vs ui/ rule
- **`sections/`** — A section is a full-width page block with its own `<section id="...">` wrapper. It appears once on the page.
- **`ui/`** — A UI component is reusable, has no section ID, and doesn't represent a "place" on the page (e.g., buttons, loading screen, cursor, scroll progress).

---

## page.tsx Pattern

`page.tsx` is a thin orchestrator — it imports sections and renders them in order. No logic, no hooks, no styling.

```tsx
// page.tsx — import order mirrors visual order on the page
import Hero from '@/components/sections/Hero'
import AboutBrand from '@/components/sections/AboutBrand'
import Characters from '@/components/sections/Characters'
import Community from '@/components/sections/Community'
import Marketplace from '@/components/sections/Marketplace'
import Footer from '@/components/sections/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import ClientOnlyExtras from '@/components/ui/ClientOnlyExtras'

export default function Home() {
  return (
    <>
      <ClientOnlyExtras />   {/* loading screen, particles, cursor */}
      <ScrollProgress />
      <BackToTop />
      <main>
        <Hero />
        <AboutBrand />
        {/* ... */}
      </main>
      <Footer />
    </>
  )
}
```

---

## Component Conventions

### Client vs Server
- Use `'use client'` at top when component uses: hooks, event handlers, Framer Motion, browser APIs
- Omit `'use client'` for pure presentational components with no interactivity
- `ClientOnlyExtras.tsx` uses `dynamic(() => import(...), { ssr: false })` to lazy-load heavy client components (loading screen, particles, cursor) — use this pattern for anything that should not block SSR

### Section component shape
```tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionName() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="section-name"        // matches nav href="#section-name"
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
      aria-label="Section description"
    >
      <div className="max-w-5xl mx-auto">
        {/* content */}
      </div>
    </section>
  )
}
```

---

## API Routes

Route: `src/app/api/[endpoint]/route.ts`

```ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  // ...
  return NextResponse.json({ success: true }, { status: 200 })
}
```

Current API routes:
- `POST /api/subscribe` — saves email + source to Supabase `subscribers` table

---

## Image Conventions

Always use `next/image` — never `<img>` tags.

```tsx
import Image from 'next/image'

// Fixed size
<Image src="/images/hero-wagyu-logo.png" alt="..." width={400} height={200} priority />

// Fill container
<div className="relative w-full aspect-square">
  <Image src="/images/..." alt="..." fill className="object-cover" sizes="256px" />
</div>

// GIFs must use unoptimized
<Image src="/images/moomaru-sunflowers.gif" alt="..." width={300} height={300} unoptimized />
```

Asset naming: `kebab-case.ext` in `public/images/`. Character prefixes: `moomaru-` and `macarune-`. Hero assets: `hero-`.

---

## SEO / Metadata

All metadata lives in `src/app/layout.tsx` via the Next.js `Metadata` export.

```ts
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://moonmaru.com'),
  title: '...',
  openGraph: { ... },
  twitter: { ... },
}
```

OG image: `/images/og-cover.png` (1200×630px) — not yet created.

---

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL       # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY  # Supabase anon public key
NEXT_PUBLIC_SITE_URL           # Production domain (for OG metadata)
```

- `.env.local` is gitignored — never commit it
- `.env.local.example` is committed with empty values
- Vercel: set all three in Project Settings → Environment Variables

---

## Styling Rules

- **Tailwind CSS only** — no CSS modules, no styled-components
- Custom utilities in `src/app/globals.css` (`.glass`, `.glass-card`, `.btn-shimmer`, `.text-gradient`, etc.)
- Extended Tailwind config in `tailwind.config.ts` (custom colors, border radius, shadows, animations)
- `darkMode: 'class'` — toggled via ThemeToggle component adding/removing `.dark` on `<html>`
- Custom scrollbar, cursor, and focus ring styles in globals.css

---

## Scripts

```bash
npm run dev    # dev server → localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

Always run `nvm use` first to load Node 20 from `.nvmrc`.
