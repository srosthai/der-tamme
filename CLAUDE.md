# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 tourism website for Cambodia (branded as "Siem Reap Guide - Gateway to Angkor Wat") that showcases tourist destinations across Cambodia. The application is configured for static export with static site generation and uses a comprehensive shadcn/ui design system.

## Key Technologies & Architecture

- **Framework**: Next.js 13 with App Router and static export (`output: 'export'`)
- **UI Components**: Complete shadcn/ui design system with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming and custom animations
- **Icons**: Lucide React (extensive icon library)
- **Type Safety**: TypeScript with strict mode
- **Theme**: Dark/light mode support via next-themes with CSS variables
- **Static Export**: Configured for static site generation with unoptimized images

## Commands

- **Development**: `npm run dev` - Start development server
- **Build**: `npm run build` - Build for production (static export)
- **Start**: `npm run start` - Start production server (for testing static build)
- **Lint**: `npm run lint` - Run ESLint (disabled during builds via next.config.js)
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
- **Styling**: CSS-in-JS via Tailwind classes, CSS variables for theme consistency
- **Icons**: Consistent Lucide React icon usage throughout

### Build Configuration
- **Static Export**: `next.config.js` configures static export with unoptimized images
- **ESLint**: Disabled during builds to prevent lint issues from blocking deployment
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

- **No Test Framework**: Currently no testing setup configured
- **Static-Only**: No server-side functionality - pure static site generation
- **External Images**: All images hosted externally, configured as unoptimized for static export
- **SEO Optimized**: Complete metadata setup for social sharing and search engines
- **Deployment Ready**: Static export generates `out/` directory ready for CDN deployment