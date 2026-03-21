# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Production build
pnpm lint       # ESLint
pnpm start      # Start production server
```

There are no tests in this project.

## Architecture

This is a **Next.js 15 / React 19** website for a Chinese restaurant called 味縁 (Mien), deployed on Vercel.

### Page structure

- `/` — Homepage (`src/app/page.js`): composes `Header`, `Main`, `TakeOut`, `PaymentWay`, `About`, `Access`, `Footer` sections in sequence
- `/menu/tanpin` — A la carte menu (image-based, with sticky category nav)
- `/menu/teisyoku` — Lunch/set meals
- `/menu/otsukare` — Drink set menus
- `/menu/tabehodai` — All-you-can-eat/drink

Each menu sub-page includes `Header` and `Footer` directly (no shared layout beyond `src/app/layout.js`).

### Components

All components live flat in `src/app/` as `.js` files. Notable ones:
- `header.js` — `'use client'`; hamburger nav with dropdown linking to the four menu pages
- `imageSlider.js` — `'use client'`; touch/swipe-enabled image carousel

### Styling

Styling is a mix of **inline styles** and **global CSS classes** in `src/app/globals.css`. Tailwind v4 is imported but used minimally (`antialiased` in layout). The design theme uses a warm Chinese restaurant palette:
- Crimson red: `#c41e3a` / `--primary`
- Deep red: `#8b1a1a` / `--primary-dark`
- Gold: `#c9950c` / `--gold`
- Cream background: `#fdf5e6` / `--background`

Reusable CSS classes defined in `globals.css`: `.menu-btn`, `.menu-btn-{tanpin,teisyoku,otsukare,tabehodai}`, `.section-title`, `.section-divider`, `.hours-card`, `.info-card`, `.payment-badge`. Responsive breakpoints use `@media (max-width: 600px)`.

### Images

All menu images are in `public/menu/` and rendered with Next.js `<Image>` at fixed widths (400×300). Slider images are in `public/`.
