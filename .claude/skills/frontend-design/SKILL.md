---
name: frontend-design
description: Build production-quality UI components and pages for Wagyu Brands with high design fidelity — kawaii aesthetic, Framer Motion animations, glassmorphism cards, pastel palette, rounded corners. Trigger when asked to build, redesign, or add visual components.
---

# Frontend Design Skill

## When to trigger
- User asks to build a new page section or component
- User asks to redesign or improve a UI element
- User asks to add animations, transitions, or visual polish
- User asks for anything described as "cute", "kawaii", "soft", or references the brand aesthetic

## Design Philosophy

This is a **kawaii lifestyle brand** inspired by Sanrio and San-X. Every UI element should feel:
- **Soft and rounded** — prefer `rounded-3xl`, `rounded-4xl`, `rounded-full` over sharp corners
- **Pastel and warm** — use the brand palette (see wagyu-brands skill), never harsh or saturated colors
- **Playful but refined** — animations are gentle floats and bounces, not jarring or fast
- **Glassmorphic** — cards use `glass-card` or `glass` utility classes, not flat opaque surfaces

## Component Quality Standards

### Always include:
- `'use client'` at top of any component using hooks, animations, or event handlers
- `useInView` from Framer Motion for scroll-triggered animations (with `once: true, margin: '-80px'`)
- `aria-label` on sections, `role="alert"` on dynamic messages, `aria-hidden="true"` on decorative elements
- Mobile-first responsive layout — test `flex-col` on mobile, `md:flex-row` on desktop

### Animation patterns:
```tsx
// Scroll-reveal (standard pattern)
const ref = useRef<HTMLElement>(null)
const inView = useInView(ref, { once: true, margin: '-80px' })

<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7 }}
>

// Float animation (for character images)
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
>

// Staggered list items
transition={{ delay: i * 0.15, duration: 0.6 }}

// Hover lift
whileHover={{ scale: 1.04, y: -2 }}
whileTap={{ scale: 0.97 }}
```

### Card pattern (glassmorphism):
```tsx
<motion.div
  whileHover={{ y: -4 }}
  className="rounded-4xl p-6 glass-card border-2 border-white/60 shadow-soft"
>
```

### Section wrapper pattern:
```tsx
<section
  id="section-name"
  ref={ref}
  className="relative py-20 px-4 overflow-hidden"
  aria-label="Section description"
>
  {/* Optional background radial gradient */}
  <div
    className="absolute inset-0 -z-10 opacity-30"
    style={{ background: 'radial-gradient(ellipse 100% 70% at 20% 50%, #ffe5d0 0%, transparent 60%)' }}
    aria-hidden="true"
  />
  <div className="max-w-5xl mx-auto">
    {/* Section heading */}
    <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
      <span className="inline-block px-4 py-1 rounded-full glass text-brown-dark text-sm font-semibold font-body mb-3 border border-brown-light/30">
        Category Label
      </span>
      <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark mb-3">
        Heading with <span className="text-gradient">Gradient Word</span>
      </h2>
      <p className="font-body text-brown-medium text-lg max-w-xl mx-auto">
        Supporting description text.
      </p>
    </motion.div>
    {/* Content */}
  </div>
</section>
```

### Button pattern:
```tsx
// Primary CTA
<motion.button
  whileHover={{ scale: 1.04, y: -1 }}
  whileTap={{ scale: 0.97 }}
  className="btn-shimmer font-display font-bold text-white rounded-full px-8 py-3.5 shadow-soft"
>
  Action Text 🐄
</motion.button>

// Secondary / ghost
<motion.button
  whileHover={{ scale: 1.02 }}
  className="glass font-body font-semibold text-brown-dark rounded-full px-6 py-3 border border-brown-light/40"
>
  Secondary Action
</motion.button>
```

### Typography classes:
- **Display/headings:** `font-display font-extrabold` (Baloo 2)
- **Body text:** `font-body` (Nunito)
- **Nav/special:** `font-family: "'Bubblegum Sans', cursive"` inline style
- **Gradient text:** `className="text-gradient"` or `className="text-gradient-pink"`

### Image pattern (Next.js):
```tsx
<Image
  src="/images/filename.ext"
  alt="Descriptive alt text"
  fill               // or width/height for fixed sizes
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority           // only for above-the-fold images
  unoptimized        // only for GIFs
/>
```

## CSS utility classes available (from globals.css):
- `.glass` — light glassmorphism panel
- `.glass-card` — heavier glassmorphic card (white/60 bg)
- `.glass-pink` — pink-tinted glass
- `.btn-shimmer` — shimmer gradient button (brown → pink)
- `.text-gradient` — multi-color brand gradient text
- `.text-gradient-pink` — pink-to-lavender gradient text
- `.animate-fade-in-up` — fade up entrance animation
- `.delay-100` through `.delay-1000` — animation delay helpers
- `.wave-divider` — section wave divider wrapper

## Tailwind animation classes available:
`animate-float`, `animate-float-slow`, `animate-float-fast`, `animate-bounce-soft`, `animate-shimmer`, `animate-sparkle`, `animate-wiggle`, `animate-pulse-soft`, `animate-spin-slow`, `animate-slide-up`, `animate-fade-in`
