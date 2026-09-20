"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { Search, Star, X } from 'lucide-react';
import { places } from '@/lib/data';
import { usePlaceFilters } from '@/components/place-filters';

const heroImage =
  'https://wallpapercat.com/w/full/a/f/e/777485-2160x1080-desktop-dual-screen-angkor-wat-background.jpg';

const topRated = [...places].sort((a, b) => b.rating - a.rating).slice(0, 4);

const searchFieldClass =
  'h-12 w-full rounded-2xl border border-border/60 bg-muted/40 pl-11 pr-11 text-[15px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-emerald-500/50 focus:bg-background focus:ring-4 focus:ring-emerald-500/10 md:h-[52px] md:rounded-full md:border-white/25 md:bg-white/[0.08] md:pl-12 md:text-white md:placeholder:text-white/60 md:backdrop-blur-md md:focus:border-white/40 md:focus:bg-white/[0.14] md:focus:ring-white/10';

export default function Hero() {
  const { query, setQuery, goToPlaces, total } = usePlaceFilters();

  // Header search button on pages without the hero lands here as "/#search".
  useEffect(() => {
    if (window.location.hash !== '#search') return;

    document.getElementById('place-search')?.focus({ preventScroll: true });
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }, []);

  return (
    <section
      id="home"
      className="relative md:-mt-[68px] md:flex md:min-h-screen md:flex-col md:justify-end md:overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-2 pt-7 md:px-8 md:pb-24 md:pt-44">
        <h1 className="text-[28px] font-semibold leading-[1.12] tracking-[-0.025em] md:max-w-4xl md:text-[3.5rem] md:leading-[1.04] md:tracking-[-0.03em] md:text-white lg:text-[4.5rem]">
          <span className="md:hidden">{total} places to explore in Siem Reap</span>
          <span className="hidden md:block">Experience Siem Reap&apos;s magic</span>
        </h1>

        <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground md:mt-6 md:max-w-2xl md:text-[17px] md:text-white/75">
          <span className="md:hidden">
            Temples, cafes, villages and countryside. Search the guide, or start with the highest
            rated places below.
          </span>
          <span className="hidden md:inline">
            Browse {total} temples, cafes, floating villages and nature spots across the province,
            then get directions in one tap.
          </span>
        </p>

        <div className="relative mt-6 md:mt-8 md:max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 z-10 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground md:text-white/70" />
          <input
            id="place-search"
            type="text"
            inputMode="search"
            autoComplete="off"
            aria-label="Search places"
            placeholder="Search temples, cafes, villages"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') goToPlaces();
            }}
            className={searchFieldClass}
          />
          {query.length > 0 && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:right-2 md:text-white/70 md:hover:bg-white/10 md:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={goToPlaces}
          className="mt-4 hidden text-[15px] font-medium text-white/80 underline decoration-white/30 underline-offset-[6px] transition-colors hover:text-white hover:decoration-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 md:mt-3 md:inline-block md:py-3"
        >
          Browse all {total} places
        </button>

        <div className="mt-10 md:hidden">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[15px] font-semibold tracking-[-0.01em]">Highest rated</h2>
            <button
              type="button"
              onClick={goToPlaces}
              className="-mr-1 inline-flex h-10 items-center rounded-full bg-emerald-500/20 px-3.5 text-[13px] font-medium text-emerald-700 transition-colors hover:bg-emerald-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-emerald-300 dark:hover:bg-emerald-500/30"
            >
              See all {total}
            </button>
          </div>

          <div className="rail no-scrollbar -mx-5 mt-4 flex gap-3.5 overflow-x-auto px-5 pb-2">
            {topRated.map((place) => (
              <Link
                key={place.id}
                href={`/places/${place.id}`}
                className="w-[156px] shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="block aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={place.image}
                    alt={place.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="block p-3.5">
                  <span className="block truncate text-[14px] font-medium leading-tight">
                    {place.name}
                  </span>
                  <span className="mt-2 flex items-center gap-1.5 text-[12px] text-muted-foreground">
                    <Star className="h-3 w-3 fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400" />
                    <span className="tabular-nums">{place.rating.toFixed(1)}</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
