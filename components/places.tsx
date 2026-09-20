"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Search, Star, X } from 'lucide-react';
import type { Place } from '@/lib/data';
import { getPlaceTypeMeta } from '@/lib/place-styles';
import { cn } from '@/lib/utils';
import { usePlaceFilters } from '@/components/place-filters';

export default function Places() {
  const { query, type, selectType, setQuery, reset, visible, typeOptions, total, selectedTypeLabel } =
    usePlaceFilters();

  const getDirections = (place: Place) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${place.location.lat},${place.location.lng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return (
    <section id="places" className="scroll-mt-16 bg-background pt-10 md:pt-16">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] md:text-4xl">
          Discover amazing places
        </h2>
        <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
          Explore Cambodia&apos;s most beautiful destinations, from ancient temples to floating
          villages and lush natural wonders.
        </p>

        <div className="sticky top-14 z-30 -mx-5 mt-5 border-b border-border/50 bg-background/80 px-5 py-3 backdrop-blur-xl md:static md:mx-0 md:mt-7 md:border-b-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
          <div className="rail no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-0.5 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
            {typeOptions.map((option) => {
              const isSelected = type === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectType(option.value)}
                  aria-pressed={isSelected}
                  className={cn(
                    'inline-flex h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 text-[13px] font-medium transition-colors',
                    isSelected
                      ? 'border-transparent bg-emerald-600 text-white'
                      : 'border-border/60 bg-background text-muted-foreground hover:border-border hover:text-foreground'
                  )}
                >
                  {option.label}
                  <span
                    className={cn(
                      'text-[12px] tabular-nums',
                      isSelected ? 'text-white/75' : 'text-muted-foreground/80'
                    )}
                  >
                    {option.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-5 flex flex-wrap items-center gap-x-1.5 text-[13px] text-muted-foreground" aria-live="polite">
          <span>
            {visible.length} of {total} places in Siem Reap
            {type !== 'all' && selectedTypeLabel && ` · ${selectedTypeLabel}`}
          </span>
          {query.trim().length > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[12px] text-foreground">
              {query.trim()}
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="flex h-5 w-5 items-center justify-center rounded-full transition-colors hover:bg-background"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
        </p>

        {visible.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-3 pb-8 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 md:pb-16">
            {visible.map((place) => {
              const typeMeta = getPlaceTypeMeta(place.type);
              return (
                <article
                  key={place.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-border md:rounded-2xl"
                >
                  <Link
                    href={`/places/${place.id}`}
                    className="block outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={place.image}
                        alt={place.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-md md:left-3 md:top-3 md:gap-1.5 md:px-2.5 md:py-1 md:text-[12px]">
                        <span className={cn('h-1.5 w-1.5 rounded-full', typeMeta.dot)} />
                        {typeMeta.label}
                      </span>
                      <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold tabular-nums text-neutral-900 backdrop-blur-md dark:bg-black/50 dark:text-white md:right-3 md:top-3 md:px-2.5 md:py-1 md:text-[12px]">
                        <Star className="h-2.5 w-2.5 fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400 md:h-3 md:w-3" />
                        {place.rating.toFixed(1)}
                      </span>
                    </div>

                    <div className="px-2.5 pb-2.5 pt-2 md:px-4 md:pb-4 md:pt-3.5">
                      <h3 className="text-[13px] font-semibold leading-snug tracking-[-0.01em] transition-colors group-hover:text-emerald-700 dark:group-hover:text-emerald-400 md:text-[17px]">
                        {place.name}
                      </h3>
                      <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground md:gap-1.5 md:text-[13px]">
                        <MapPin className="h-3 w-3 shrink-0 md:h-3.5 md:w-3.5" />
                        <span className="truncate">{place.province}</span>
                      </p>
                      <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground md:mt-2.5 md:text-[14px]">
                        {place.description}
                      </p>
                    </div>
                  </Link>

                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-border/60 px-2.5 py-1.5 md:gap-3 md:px-4 md:py-2">
                    <span className="truncate text-[10px] text-muted-foreground md:text-[13px]">
                      {place.duration} · {place.difficulty}
                    </span>
                    <button
                      type="button"
                      onClick={() => getDirections(place)}
                      aria-label={`Get directions to ${place.name}`}
                      className="inline-flex h-8 shrink-0 items-center gap-1 rounded-full px-2 text-[11px] font-semibold text-emerald-700 transition-colors hover:bg-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-emerald-400 md:h-10 md:gap-1.5 md:px-3.5 md:text-[13px]"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      <span className="hidden md:inline">Directions</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {visible.length === 0 && (
          <div className="mt-4 rounded-2xl border border-dashed border-border/70 px-6 py-14 text-center">
            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <Search className="h-5 w-5 text-muted-foreground" />
            </span>
            <h3 className="text-[16px] font-semibold">No places found</h3>
            <p className="mx-auto mt-1.5 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              Try adjusting your filters or search terms to find more places.
            </p>
            <Button
              variant="outline"
              onClick={reset}
              className="mt-5 h-10 rounded-full px-5 text-[14px]"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
