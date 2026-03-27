# CLAUDE.md — Wagyu Brands

## Project Overview

**Wagyu Brands** is a kawaii lifestyle brand centered on two characters: **Moomaru** (a gentle white and brown cow from Hokkaido) and **Macarune** (a round, velvety-brown walrus). The brand draws inspiration from Sanrio and San-X aesthetics.

This repo is the **pre-launch website** — a Next.js 14 landing page deployed on Vercel, with a Supabase-backed email capture waitlist.

---

## Characters

| Character | Species | Notes |
|---|---|---|
| **Moomaru** | White & brown cow | Primary mascot. Birthday: Feb 11 (Aquarius). From Hokkaido. |
| **Macarune** | Brown walrus | Secondary mascot. Loves sushi, sunflowers, lo-fi music. |

Image files use `moomaru-` and `macarune-` prefixes in `public/images/`.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| @supabase/supabase-js | Email capture storage |
| canvas-confetti | Confetti on signup |
| Google Fonts | Baloo 2 + Nunito + Bubblegum Sans |

---

## Dev Setup

```bash
# 1. Use the correct Node version
nvm use        # uses .nvmrc → Node 20 LTS

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Then open .env.local and fill in your Supabase keys

# 4. Start dev server
npm run dev
# → http://localhost:3000
```

---

## Environment Variables

Copy `.env.local.example` → `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=        # Your Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=   # Your Supabase anon public key
NEXT_PUBLIC_SITE_URL=            # Production URL (used for OG metadata)
```

**Never commit `.env.local`** — it is gitignored. The `.env.local.example` file is safe to commit (no real values).

---

## Project Structure

```
src/
├── app/
│   ├── api/subscribe/route.ts   # Supabase email capture API
│   ├── globals.css
│   ├── layout.tsx               # Root layout + SEO metadata
│   └── page.tsx                 # Main page (composes all sections)
└── components/
    ├── sections/                # Page section components
    │   ├── Hero.tsx             # Top banner + main character image
    │   ├── AboutBrand.tsx       # Brand origin story
    │   ├── Characters.tsx       # Moomaru & Macarune cards
    │   ├── Community.tsx        # Social links + video preview
    │   ├── Marketplace.tsx      # "Coming Soon" shop placeholder
    │   ├── Footer.tsx
    │   ├── EmailCapture.tsx     # Reusable email signup form
    │   ├── Gallery.tsx          # (orphaned — not in page.tsx yet)
    │   ├── MoomaruPeek.tsx      # (orphaned — not in page.tsx yet)
    │   ├── Navigation.tsx       # (orphaned — not in page.tsx yet)
    │   ├── Products.tsx         # (orphaned — not in page.tsx yet)
    │   └── Story.tsx            # (orphaned — not in page.tsx yet)
    └── ui/                      # Shared/utility components
        ├── BackToTop.tsx
        ├── ClientOnlyExtras.tsx # Lazy-loads loading screen, particles, cursor
        ├── CustomCursor.tsx
        ├── LoadingScreen.tsx    # Full-screen Moomaru splash on load
        ├── Particles.tsx
        ├── ScrollProgress.tsx
        └── ThemeToggle.tsx

public/images/                   # All character assets
supabase/schema.sql              # Run this in Supabase SQL Editor to set up the DB
```

---

## Image Assets

All images follow a consistent naming convention:

| File | Used in |
|---|---|
| `hero-wagyu-logo.png` | Hero banner (Wagyu Brands logo) |
| `hero-characters-center.png` | Hero banner (Moomaru + Macarune together) |
| `hero-main-scene.png` | Hero full-width character scene |
| `moomaru-sunflowers.gif` | Characters card, LoadingScreen |
| `moomaru-void.gif` | Story, Gallery (orphaned) |
| `moomaru-peek-banner.png` | MoomaruPeek, Gallery (orphaned) |
| `moomaru-logo.png` | Footer, Navigation (orphaned) |
| `moomaru-macarune-scene.jpeg` | Story, Gallery (orphaned) |
| `macarune-character.png` | Characters card, Gallery (orphaned) |
| `macarune-sushi.gif` | Gallery (orphaned) |
| `social-media-preview.mov` | Community section video |

**Missing:** `og-cover.png` — referenced in `layout.tsx` for Open Graph metadata but not yet created. Add a 1200×630px image to `public/images/` when ready.

---

## Multi-Device Notes

This project is worked on across **two machines** (laptop + desktop with RTX 3080). Common issues:

- **localhost errors when switching devices** — always `git pull` before starting work
- **Node version mismatches** — always run `nvm use` first to load `.nvmrc`
- **`.env.local` is not committed** — you must copy it manually on each machine

---

## Deployment

Deployed to **Vercel**. Environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_SITE_URL`) must be set in the Vercel dashboard under Project Settings → Environment Variables.

---

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start dev server on localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Available Skills (.claude/skills/)

These skills are installed in `.claude/skills/` and provide deep context for common tasks. Claude should load the relevant skill(s) at the start of any session involving that domain.

| Skill | File | When to use |
|---|---|---|
| **frontend-design** | `.claude/skills/frontend-design/SKILL.md` | Building or redesigning any UI component, section, or page. Contains animation patterns, glassmorphism card templates, section wrapper pattern, button variants, and all available CSS utilities. |
| **wagyu-brands** | `.claude/skills/wagyu-brands/SKILL.md` | Any work involving brand content, character references, copy, color palette, image assets, or the Supabase email capture feature. Contains full color tokens, typography, tone of voice, asset inventory, and EmailCapture component docs. |
| **nextjs-conventions** | `.claude/skills/nextjs-conventions/SKILL.md` | Creating new components, API routes, or restructuring files. Contains App Router patterns, import alias rules, sections/ vs ui/ split rules, image conventions, and environment variable docs. |

### Skill loading heuristics
- Working on a new section or redesigning visuals → load `frontend-design` + `wagyu-brands`
- Adding a new component file → load `nextjs-conventions`
- Writing brand copy or referencing characters → load `wagyu-brands`
- Setting up on a new device or fixing import errors → load `nextjs-conventions`
