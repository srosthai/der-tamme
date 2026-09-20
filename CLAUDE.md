# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 tourism website for Cambodia (branded as "Siem Reap Guide - Gateway to Angkor Wat") that showcases tourist destinations across Cambodia. The application is configured for static export with static site generation and uses a comprehensive shadcn/ui design system.

## Key Technologies & Architecture

- **Framework**: Next.js 16 (App Router, Turbopack for dev and build, static export via `output: 'export'`)
- **Runtime**: React 19.3 with `react-dom` 19.3 and `@types/react` 19.x
- **UI Components**: Complete shadcn/ui design system with Radix UI primitives
- **Styling**: Tailwind CSS 3 with CSS variables for theming and custom animations
- **Icons**: Lucide React (extensive icon library)
- **Type Safety**: TypeScript 5.9 with strict mode
- **Theme**: Dark/light mode support via next-themes 0.4 with CSS variables
- **Static Export**: Configured for static site generation with unoptimized images
- **Node**: Requires Node.js 20.9+ (Next 16 minimum)

## Commands

- **Development**: `npm run dev` - Start Turbopack dev server (port 3000)
- **Build**: `npm run build` - Build for production (static export to `out/`)
- **Preview**: `npx serve out` - Serve the static export locally (`next start` does **not** work with `output: 'export'`)
- **Lint**: `npm run lint` - Run ESLint 9 with the flat config in `eslint.config.mjs` (`next lint` was removed in Next 16; `next build` no longer runs ESLint)
- **Type Check**: `npx tsc --noEmit` - Check TypeScript types without building

## Architecture & Data Flow

### Core Data Architecture
The entire application is built around a centralized data structure in `lib/data.ts`:

```typescript
interface Place {
  id: string;
  name: string;
  province: string;
  type: 'temple' | 'cafe' | 'beach' | 'mountain' | 'city' | 'nature' | 'cultural';
  description: string;
  image: string;
  images: string[];
  rating: number;
  location: { lat: number; lng: number };
  highlights: string[];
  bestTimeToVisit: string;
  entryFee: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  facilities: string[];
  nearbyAttractions: string[];
}
```

### App Structure (App Router)
- `app/layout.tsx` - Root layout with metadata, Inter font, theme provider, and SEO configuration
- `app/page.tsx` - Home page assembling main components (`Header`, `Hero`, `Places`, `Footer`, `ScrollToTop`)
- `app/places/[id]/` - Dynamic routes for individual place details
  - `page.tsx` - Static params generation and place lookup
  - `page-new.tsx` - Alternative implementation (identical to page.tsx)
  - `place-details-client.tsx` - Feature-rich client component with image galleries, maps integration

### Component Architecture
- **Layout Components**: `header.tsx` (modern navigation with shadcn NavigationMenu and Sheet), `hero.tsx`, `places.tsx`, `footer.tsx`
- **UI Enhancement**: `scroll-to-top.tsx` - Global scroll-to-top functionality
- **Theme Management**: `providers/theme-provider.tsx` - next-themes integration
- **UI Library**: Complete shadcn/ui component library (40+ components)
- **Utilities**: `lib/utils.ts` with `cn()` helper for conditional class merging

### Modern UI Features
- **Navigation**: Desktop navigation menu with dropdowns, mobile sheet sidebar
- **Image Handling**: Multi-image galleries with modal lightbox, thumbnail navigation
- **Interactive Elements**: Scroll-to-top button, theme toggle, responsive design
- **Content Organization**: Card-based layouts, badges for categorization, structured data display

## Data Structure & Content Model

### Place Data Model
Each place contains comprehensive tourism information:
- **Core Info**: name, province, type, description, rating
- **Visual Content**: primary image + gallery arrays (external URLs)
- **Geographic Data**: lat/lng coordinates for Google Maps integration
- **Visitor Info**: entry fees, recommended duration, difficulty level
- **Experience Data**: highlights array, best visiting times, nearby attractions
- **Practical Info**: facilities available, accessibility information

### Type System
- `placeTypes` - Categorical filtering with labels ('temple', 'cafe', 'beach', 'mountain', 'city', 'nature', 'cultural')
- Strict TypeScript interfaces ensure data consistency
- Province-based organization for geographic filtering

## Development Patterns & Configuration

### Component Patterns
- **Client Components**: Use `"use client"` directive for interactive components
- **Static Generation**: All place detail pages are statically generated at build time
- **Async Request APIs (Next 16)**: `params`, `searchParams`, `cookies()`, `headers()` are promises — always `async` components and `const params = await props.params`. Current usage: `app/places/[id]/page.tsx` and `page-new.tsx` declare `params: Promise<{ id: string }>` and await it.
- **Links**: Use plain `<Link>` as a child of `NavigationMenuLink asChild` — the `legacyBehavior`/`passHref` props were removed in Next 16
- **Styling**: CSS-in-JS via Tailwind classes, CSS variables for theme consistency
- **Icons**: Consistent Lucide React icon usage throughout

### Build Configuration
- **Static Export**: `next.config.js` configures static export with unoptimized images
- **Bundler**: Turbopack is the default for `next dev` and `next build` in Next 16 (no custom webpack config in this repo, so no opt-out needed)
- **ESLint**: Not run by `next build` anymore; run it explicitly with `npm run lint`. Config lives in the flat `eslint.config.mjs` (extends `eslint-config-next/core-web-vitals`) — the legacy `.eslintrc.json` and `next lint` command were removed
- **Path Aliases**: `@/` prefix configured for clean imports (components, lib, hooks, ui)
- **shadcn Configuration**: `components.json` defines component generation settings

### Styling System
- **CSS Variables**: Theme colors defined in `app/globals.css` with dark/light mode variants
- **Tailwind Extensions**: Custom animations (accordion), border radius variables, extended color system
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint coverage

## Key Features & User Experience

1. **Place Discovery**: Filterable grid with search, type filtering, and province filtering
2. **Rich Place Details**: Multi-image galleries, interactive maps, comprehensive information
3. **Navigation**: Modern header with dropdown menus and mobile-optimized sidebar
4. **Theme Support**: System-aware dark/light mode with smooth transitions
5. **Enhanced UX**: Scroll-to-top functionality, smooth animations, loading states
6. **Google Maps Integration**: Direct deep-linking to Google Maps for directions

## Important Development Notes

- **No Test Framework**: Currently no testing setup configured — verify changes with `npx tsc --noEmit`, `npm run lint`, and `npm run build`
- **Static-Only**: No server-side functionality - pure static site generation
- **External Images**: All images hosted externally, configured as unoptimized for static export
- **SEO Optimized**: Complete metadata setup for social sharing and search engines
- **Deployment Ready**: Static export generates `out/` directory ready for CDN deployment
- **Unknown place ids**: `generateStaticParams()` lists every valid id, so an id outside that list 404s (dev logs an error overlay message because `output: 'export'` forbids on-demand params — this is not reachable from any in-app link)

### Version Upgrade Notes (Next 13 → 16)

- **React 19**: `react`/`react-dom`/`@types/react*` are on 19.3. `setState` in effects and unescaped quotes in JSX are now lint errors (`react/no-unescaped-entities`, `react-hooks/set-state-in-effect`) — see `components/ui/carousel.tsx` for the intentional suppression pattern
- **Dependency bumps**: `react-day-picker` 9 (v9 classNames keys + `components.Chevron` API in `components/ui/calendar.tsx`), `next-themes` 0.4 (`ThemeProviderProps` now imported from the package root), `vaul` 1.x, `typescript` 5.9
- **tsconfig**: Next 16 requires `"jsx": "react-jsx"` and adds `.next/dev/types/**/*.ts` to `include` (applied automatically)
- **Lockfiles**: `package-lock.json`, `yarn.lock`, and `bun.lock` are all kept in sync at Next 16.3.5 — regenerate the one you use if dependencies change

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
