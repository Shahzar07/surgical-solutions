# Surgical Solutions — Next.js

Next.js 15 + App Router port of the Surgical Solutions design with:

- **Lenis** smooth scroll
- **Framer Motion** hero animations:
  - Headline stagger reveal (each line slides up)
  - Circle portraits slide in from left/right
  - Watermark parallax (drifts as you scroll)

## Run

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Structure

```
app/
  layout.tsx       — root layout with fonts + LenisProvider + CartProvider
  page.tsx         — homepage composition
  globals.css      — full design stylesheet (ported from prototype)
components/
  LenisProvider.tsx — wraps the app in Lenis smooth-scroll
  Hero.tsx          — animated hero (the showpiece)
  Header.tsx, Footer.tsx, CartDrawer.tsx, ... — all other sections
lib/
  products.ts       — 8 products + their SVG instrument art
  cart.tsx          — cart context + hook
```
