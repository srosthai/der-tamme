# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 tourism website for Cambodia called "Cambodia Explore" that showcases tourist destinations across Cambodia. The application is configured for static export with static site generation.

## Key Technologies & Architecture

- **Framework**: Next.js 13 with App Router
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS variables for theming
- **Icons**: Lucide React
- **Type Safety**: TypeScript with strict mode
- **Theme**: Dark/light mode support via next-themes
- **Static Export**: Configured for static site generation (`output: 'export'`)

## Commands

- **Development**: `npm run dev` - Start development server
- **Build**: `npm run build` - Build for production (static export)
- **Start**: `npm run start` - Start production server
- **Lint**: `npm run lint` - Run ESLint (ignores during builds)

## Architecture & Structure

### App Structure (App Router)
- `app/layout.tsx` - Root layout with metadata, fonts, and theme provider
- `app/page.tsx` - Home page with main components
- `app/places/[id]/` - Dynamic routes for place details
  - `page.tsx` - Main place detail page
  - `page-new.tsx` - Alternative place detail implementation
  - `place-details-client.tsx` - Client component for place details

### Data Management
- `lib/data.ts` - Central data store containing:
  - `Place` interface definition
  - `places` array with all location data
  - `provinces` array for filtering
  - `placeTypes` for categorization
  - Location coordinates, images, ratings, and detailed information

### Components Architecture
- `components/` - Reusable components
  - `header.tsx`, `hero.tsx`, `places.tsx`, `footer.tsx` - Main layout components
  - `providers/theme-provider.tsx` - Theme context provider
  - `ui/` - shadcn/ui components library
- `hooks/` - Custom React hooks (toast functionality)
- `lib/utils.ts` - Utility functions and cn() helper for class merging

### Styling System
- Tailwind CSS with custom configuration
- CSS variables for theme colors in `app/globals.css`
- Dark/light mode support throughout
- Responsive design patterns

## Key Features

1. **Place Discovery**: Filterable grid of tourist destinations
2. **Search & Filtering**: By province, type, and text search
3. **Place Details**: Individual pages with galleries, maps, and information
4. **Google Maps Integration**: Direct links to Google Maps for directions
5. **Responsive Design**: Mobile-first approach
6. **Theme Support**: Dark/light mode toggle

## Development Notes

- Images are configured as unoptimized for static export
- ESLint is disabled during builds
- Uses absolute imports with `@/` prefix
- Client components are marked with "use client" directive
- TypeScript paths configured for clean imports
- Static export removes server-side functionality

## Data Structure

Places contain comprehensive tourism information including:
- Basic info (name, province, type, description)
- Images and ratings
- Geographic coordinates
- Visitor information (fees, duration, difficulty)
- Facilities and nearby attractions

## Important Notes

- No test framework is currently configured in this project
- The project name in package.json is generic ("nextjs") but refers to the Cambodia Explore tourism site
- All dependencies are production dependencies - no separate dev dependencies
- Uses Node.js 20+ compatible packages
- Static export configuration means no server-side API routes or dynamic server features