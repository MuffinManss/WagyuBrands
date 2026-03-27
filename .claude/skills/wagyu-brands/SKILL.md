---
name: wagyu-brands
description: Brand context for Wagyu Brands — characters (Moomaru cow, Macarune walrus), full color palette, typography, tone of voice, image asset names, and Supabase email capture integration. Load whenever working on brand content, copy, character references, or the email waitlist feature.
---

# Wagyu Brands — Brand Skill

## Brand Identity

**Wagyu Brands** is a kawaii lifestyle brand inspired by **Sanrio** and **San-X** (think Cinnamoroll, Sumikko Gurashi). The brand makes collectibles, plushies, stickers, and apparel centered on two original characters. The aesthetic is soft, pastel, warm, and whimsical — "every day gets a little more kawaii."

**Tagline:** *Where Every Day Gets a Little More Kawaii*
**Production domain:** `https://moonmaru.com`
**Deployment:** Vercel

---

## Characters

### Moomaru (primary mascot)
- **Species:** White and brown cow
- **Origin:** Hokkaido, Japan
- **Birthday:** February 11 (Aquarius)
- **Personality:** Gentle, soft, dreamy
- **Image prefix:** `moomaru-`
- **Key assets:** `moomaru-sunflowers.gif`, `moomaru-void.gif`, `moomaru-peek-banner.png`, `moomaru-logo.png`

### Macarune (secondary mascot)
- **Species:** Round, velvety-brown walrus
- **Personality:** Unbothered, loves sushi, sunflowers, lo-fi music, philosophical naps
- **Image prefix:** `macarune-`
- **Key assets:** `macarune-character.png`, `macarune-sushi.gif`

> **Note on spelling:** The character is "Moomaru" (double-o). Some legacy files and `layout.tsx` still say "Moonmaru" — treat both as referring to the same character. Prefer "Moomaru" in new content.

---

## Color Palette (from tailwind.config.ts)

### Core colors
| Token | Hex | Use |
|---|---|---|
| `cream` | `#fffaf3` | Page background |
| `cream-dark` | `#f5ede0` | Card backgrounds, subtle sections |
| `brown` | `#c89f7b` | Primary brand color, buttons |
| `brown-light` | `#e8d0b8` | Borders, soft dividers |
| `brown-medium` | `#a07850` | Body text, secondary text |
| `brown-dark` | `#7d5a3c` | Headings |
| `brown-deep` | `#3d2b1f` | Dark text, body default |

### Accent palette
| Token | Light | Default | Medium | Dark |
|---|---|---|---|---|
| pink | `#fff0f7` | `#ffd6e7` | `#f5a7c7` | `#e07aab` |
| lavender | `#f5eeff` | `#e8d5f5` | `#c4a8e8` | `#9b72cc` |
| mint | `#edfff7` | `#d4f5e9` | `#8ed8be` | `#4db896` |
| peach | `#fff5ee` | `#ffe5d0` | `#f5c4a0` | `#e09060` |

### Gradients
- **Kawaii gradient:** `linear-gradient(135deg, #fffaf3 0%, #ffd6e7 30%, #e8d5f5 60%, #d4f5e9 100%)`
- **Hero gradient:** `radial-gradient(ellipse at top, #ffd6e7 0%, #fffaf3 50%, #e8d5f5 100%)`
- **Gradient text:** `linear-gradient(135deg, #c89f7b 0%, #f5a7c7 40%, #c4a8e8 80%, #8ed8be 100%)`
- **Scroll bar:** `linear-gradient(90deg, #ffd6e7, #c89f7b, #e8d5f5, #d4f5e9)`

### Dark mode
- Dark background: `#1a1117`
- Dark card: `rgba(40, 28, 38, 0.6)`

---

## Typography

| Font | Variable | Tailwind class | Use |
|---|---|---|---|
| **Baloo 2** | `--font-baloo` | `font-display` | Headings, logo text, year labels |
| **Nunito** | `--font-nunito` | `font-body` | Body text, captions, UI labels |
| **Bubblegum Sans** | n/a | inline style | Navigation links, special accents |

All three loaded via Google Fonts in `src/app/layout.tsx`.

---

## Tone of Voice

- Warm, friendly, cute — not corporate
- Kawaii emoji used naturally (🌸 🐄 ✨ 🎉 💕)
- First-person plural "we" for brand voice
- Examples:
  - CTA: *"Join the Herd 🐄"*
  - Success: *"You're in the herd! ✨ We'll see you soon~"*
  - Subtext: *"No spam, ever. Unsubscribe anytime. 🌸"*
  - Tagline: *"Where every day gets a little more kawaii."*

---

## Image Assets (public/images/)

| File | Description | Used in |
|---|---|---|
| `hero-wagyu-logo.png` | Wagyu Brands wordmark/logo | Hero (desktop + mobile) |
| `hero-characters-center.png` | Moomaru + Macarune together | Hero banner center |
| `hero-main-scene.png` | Full-width character scene | Hero bottom |
| `moomaru-sunflowers.gif` | Moomaru with sunflowers (animated) | Characters card, LoadingScreen |
| `moomaru-void.gif` | Moomaru in cosmic void (animated) | Story, Gallery (orphaned) |
| `moomaru-peek-banner.png` | Moomaru peeking from bottom | MoomaruPeek (orphaned) |
| `moomaru-logo.png` | Moomaru standalone logo mark | Footer, Navigation (orphaned) |
| `moomaru-macarune-scene.jpeg` | Both characters scene artwork | Story (orphaned) |
| `macarune-character.png` | Macarune standalone character | Characters card |
| `macarune-sushi.gif` | Macarune with sushi (animated) | Gallery (orphaned) |
| `social-media-preview.mov` | Social media video preview | Community section |

**Missing:** `og-cover.png` — referenced in `layout.tsx` for Open Graph but not yet created. Needs 1200×630px artwork.

---

## Supabase Email Capture

### Architecture
- **API route:** `src/app/api/subscribe/route.ts`
- **Reusable component:** `src/components/sections/EmailCapture.tsx`
- **Table:** `public.subscribers` with columns: `id`, `email`, `source`, `created_at`
- **RLS:** Public INSERT allowed, public SELECT blocked

### Environment variables required
```
NEXT_PUBLIC_SUPABASE_URL=      # https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY= # Long JWT string
```

### EmailCapture component props
```tsx
<EmailCapture
  source="homepage"        // tracks which form captured the email
  placeholder="your@email.com"
  buttonText="Join the Herd 🐄"
  compact={false}          // true = inline row layout
/>
```

### Response states: `idle` | `loading` | `success` | `error` | `duplicate`
- Success fires canvas-confetti in brand colors
- Duplicate (409) shows a distinct lavender message
- Without Supabase keys, form works visually but doesn't save

---

## Page Structure (active sections in page.tsx)

```
Hero → AboutBrand → Characters → Community → Marketplace → Footer
```

## Orphaned sections (exist in sections/ but not in page.tsx)
`Gallery`, `MoomaruPeek`, `Navigation`, `Products`, `Story` — fully built, image refs updated, ready to add back.
