# 🐄 Moonmaru — Wagyu Brands Pre-Launch Website

A beautiful, production-ready Next.js 14 kawaii landing page for **Moonmaru** and **Macarune**, the adorable characters from **Wagyu Brands**.

---

## ✨ Features

- **Full pre-launch email capture** with Supabase backend
- **Framer Motion** animations throughout — floating characters, scroll reveals, confetti
- **Dark / Light mode** with localStorage persistence
- **Custom cursor** on desktop
- **Scroll progress indicator**
- **Loading splash screen** with mascot
- **Sticky navigation** with active section highlighting
- **Gallery with lightbox** and filter tabs
- **Mobile-first**, fully responsive
- **Canvas particle sparkles**
- **Glassmorphism cards** with noise texture
- **SEO metadata** (Open Graph, Twitter cards)
- **Accessible** — ARIA labels, keyboard navigation, semantic HTML

---

## 🚀 Quick Start

### 1. Use the correct Node version

```bash
nvm use
```

This reads `.nvmrc` and switches to Node 20 LTS. Install nvm if you haven't already.

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your Supabase credentials (see below).

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

> **Working across multiple devices?** Always `git pull` before starting, and make sure `.env.local` is copied on each machine — it is not committed to git.

---

## 🗄️ Supabase Setup

### Step 1: Create a Supabase account

1. Go to [https://supabase.com](https://supabase.com) and sign up for free
2. Click **"New Project"**
3. Choose your organization, give your project a name (e.g. `moonmaru`), set a database password, and pick a region close to you

### Step 2: Create the subscribers table

1. In your Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **"New query"**
3. Paste the contents of `supabase/schema.sql`
4. Click **"Run"**

This will:
- Create the `subscribers` table with `id`, `email`, `source`, and `created_at` columns
- Enable Row Level Security (RLS)
- Allow public inserts (sign-ups) but block public reads

### Step 3: Get your API keys

1. In your Supabase dashboard, go to **Project Settings** → **API**
2. Copy your **Project URL** — looks like `https://xxxxx.supabase.co`
3. Copy your **anon public key** — a long JWT string

### Step 4: Add keys to `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

> **Note:** Without these keys, the form still works visually — it just won't save emails. Perfect for testing the UI.

---

## 📤 Export Subscribers

In your Supabase dashboard:

1. Go to **SQL Editor**
2. Run:

```sql
SELECT email, source, created_at
FROM public.subscribers
ORDER BY created_at DESC;
```

3. Click **"Download CSV"** in the results panel

---

## 🌐 Deploy to Vercel

### Option A: One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Option B: Manual

1. Push your code to GitHub (make sure `.env.local` is in `.gitignore` ✅)
2. Go to [https://vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. In the **Environment Variables** step, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy** 🚀

---

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.ts` → `theme.extend.colors`:

```ts
cream: '#fffaf3',     // Page background
brown: { DEFAULT: '#c89f7b', ... },  // Primary brand color
pink:  { DEFAULT: '#ffd6e7', ... },  // Accent pink
```

### Fonts

Fonts are loaded in `src/app/layout.tsx` via Google Fonts:
- **Display:** Baloo 2 (headings, logo)
- **Body:** Nunito (paragraphs, UI)

Change the `@import` URL and `font-family` values in `src/app/globals.css`.

### Content

| What to change         | File                                        |
|------------------------|---------------------------------------------|
| Hero banner            | `src/components/sections/Hero.tsx`          |
| About section          | `src/components/sections/AboutBrand.tsx`    |
| Character profiles     | `src/components/sections/Characters.tsx`    |
| Social links / video   | `src/components/sections/Community.tsx`     |
| Marketplace placeholder| `src/components/sections/Marketplace.tsx`   |
| Footer links           | `src/components/sections/Footer.tsx`        |
| SEO metadata           | `src/app/layout.tsx`                        |

### Images

Add new images to `public/images/` and reference them with `/images/filename.ext`.

---

## 📁 Project Structure

```
WagyuBrands/
├── public/
│   └── images/              # All character images and gifs
├── src/
│   ├── app/
│   │   ├── api/subscribe/route.ts   # Email capture API
│   │   ├── globals.css              # Global styles + animations
│   │   ├── layout.tsx               # Root layout + SEO metadata
│   │   └── page.tsx                 # Main page
│   └── components/
│       ├── sections/                # Page section components
│       │   ├── Hero.tsx
│       │   ├── AboutBrand.tsx
│       │   ├── Characters.tsx
│       │   ├── Community.tsx
│       │   ├── Marketplace.tsx
│       │   ├── Footer.tsx
│       │   └── EmailCapture.tsx     # Reusable email form
│       └── ui/                      # Shared UI components
│           ├── BackToTop.tsx
│           ├── ClientOnlyExtras.tsx
│           ├── CustomCursor.tsx
│           ├── LoadingScreen.tsx
│           ├── Particles.tsx
│           ├── ScrollProgress.tsx
│           └── ThemeToggle.tsx
├── supabase/
│   └── schema.sql                   # Run this in Supabase SQL Editor
├── .env.local.example
├── .nvmrc                           # Node 20 LTS
├── CLAUDE.md                        # AI assistant context file
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🛠️ Scripts

| Command         | Action                    |
|-----------------|---------------------------|
| `npm run dev`   | Start development server  |
| `npm run build` | Build for production      |
| `npm run start` | Start production server   |
| `npm run lint`  | Run ESLint                |

---

## 📦 Tech Stack

| Tool                   | Purpose                      |
|------------------------|------------------------------|
| Next.js 14 (App Router)| Framework                    |
| TypeScript             | Type safety                  |
| Tailwind CSS           | Styling                      |
| Framer Motion          | Animations                   |
| @supabase/supabase-js  | Database / email storage     |
| canvas-confetti        | Confetti on signup           |
| Google Fonts           | Baloo 2 + Nunito typography  |

---

Made with 💕 by **Wagyu Brands** — *Where every day gets a little more kawaii.*
