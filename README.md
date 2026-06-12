# 🐄 Wagyu Brands — Moonmaru

The official pre-launch website for **Wagyu Brands**, an original kawaii character-IP brand built around **Moomaru** (a gentle Hokkaido cow) and **Macarune** (a velvety-brown walrus). It's a Next.js landing page with a Supabase-backed email-capture waitlist, deployed on Vercel.

🌐 **Live site:** [wagyubrands.com](https://wagyubrands.com)

![Wagyu Brands website screenshot](docs/screenshot.png)

> 📸 _Add a screenshot of the site at `docs/screenshot.png` to populate the image above._

---

## ✨ Features

- **Animated hero** — logo, social links, and full-width mascot scene
- **Brand story / about** section introducing Wagyu Brands
- **Character profiles** for Moomaru & Macarune
- **Community hub** with social links and a looping video preview
- **"Wagyu Shops — Coming Soon"** teaser section
- **Supabase email-capture API** (`/api/subscribe`) with Row-Level Security, plus a reusable `EmailCapture` form component ready to drop into any section
- **Framer Motion** animations — scroll reveals, hover effects, and signup confetti
- **Canvas particle sparkles** background
- **Glassmorphism** UI with soft shadows
- **Scroll progress** indicator
- **SEO metadata** — Open Graph + Twitter cards
- **Responsive & accessible** — mobile-first, ARIA labels, semantic HTML

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) (App Router) | Framework |
| [React 18](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 3](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [@supabase/supabase-js](https://supabase.com/) | Email-capture storage |
| [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) | Confetti on signup |
| [tsparticles](https://particles.js.org/) | Particle background |
| [Vercel](https://vercel.com/) | Hosting & deployment |

---

## 🚀 Quick Start

### 1. Use the correct Node version

```bash
nvm use   # reads .nvmrc → Node 20 LTS
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and fill in your Supabase values (see [Environment Variables](#-environment-variables)).

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

> The email form works visually without Supabase configured — it just won't persist emails. Perfect for local UI work.

---

## 🔑 Environment Variables

Copy `.env.local.example` → `.env.local` and fill in:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | Your Supabase project URL (`https://xxxx.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Your Supabase **anon public** key (safe for client use) |
| `NEXT_PUBLIC_SITE_URL` | optional | Production URL, used for SEO/OG metadata |

> Only the **anon public** key is used — never the `service_role` key. `.env.local` is gitignored and must never be committed.

---

## 🗄️ Supabase Setup

1. Create a free project at [supabase.com](https://supabase.com).
2. In the dashboard, open **SQL Editor → New query**, paste the contents of [`supabase/schema.sql`](supabase/schema.sql), and **Run**. This creates the `subscribers` table, enables **Row Level Security**, and adds an insert-only policy for anonymous sign-ups (no public reads).
3. Under **Project Settings → API**, copy the **Project URL** and **anon public key** into `.env.local`.

To export subscribers, run this in the SQL Editor:

```sql
SELECT email, source, created_at FROM public.subscribers ORDER BY created_at DESC;
```

---

## 🌐 Deploy to Vercel

1. Push to GitHub (confirm `.env.local` is gitignored ✅).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add the environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_SITE_URL`) under **Project Settings → Environment Variables**.
4. Deploy 🚀

---

## 📁 Project Structure

```
WagyuBrands/
├── public/images/                  # Character art & assets
├── src/
│   ├── app/
│   │   ├── api/subscribe/route.ts  # Supabase email-capture API
│   │   ├── globals.css             # Global styles + animations
│   │   ├── layout.tsx              # Root layout + SEO metadata
│   │   └── page.tsx                # Composes all sections
│   └── components/
│       ├── sections/               # Page sections
│       │   ├── Hero.tsx
│       │   ├── AboutBrand.tsx
│       │   ├── Characters.tsx
│       │   ├── Community.tsx
│       │   ├── Marketplace.tsx
│       │   ├── Footer.tsx
│       │   └── EmailCapture.tsx    # Reusable Supabase signup form
│       └── ui/
│           ├── ClientOnlyExtras.tsx
│           ├── Particles.tsx
│           └── ScrollProgress.tsx
├── supabase/schema.sql             # Run in Supabase SQL Editor
├── .env.local.example
├── .nvmrc                          # Node 20 LTS
└── package.json
```

---

## 🛠️ Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

Made with 💕 by **Wagyu Brands** — _Where every day gets a little more kawaii._
