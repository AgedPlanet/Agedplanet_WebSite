# AgedPlanet Website

A simple, honest landing site for AgedPlanet Ecommerce Inc. built with Next.js, TypeScript, Tailwind CSS v4, and a shadcn-compatible component structure.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn structure with `components.json`
- `motion` for the parallax hero
- `lucide-react` for icons

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build checks

```bash
npm run lint
npm run build
```

## Component integration notes

The project supports the requested structure:

- Components default path: `components/ui`
- Styles path: `app/globals.css`
- Utility helper: `lib/utils.ts` with `cn()` from shadcn
- shadcn config: `components.json`

The requested files were added here:

- `components/ui/davincho-hero-1.tsx`
- `components/ui/demo.tsx`

`demo.tsx` was adapted into the AgedPlanet hero and uses Unsplash imagery, Next Image, and `motion/react`.

## If rebuilding from scratch

```bash
npx create-next-app@latest agedplanet-website --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --yes
cd agedplanet-website
npx shadcn@latest init -d
npm install motion lucide-react
```

If shadcn ever resolves to a different component alias, keep `components/ui` anyway. It is the expected path for shadcn UI components and keeps imports like `@/components/ui/button` predictable across examples, generated components, and registry snippets.

## Content stance

The site intentionally avoids fake testimonials, exaggerated product claims, or a padded catalog. AgedPlanet is presented as a lean ecommerce rebuild focused on product validation, supplier discipline, and Amazon FBA readiness.
