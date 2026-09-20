"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Compass, Home, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const baseItemClass =
  'flex h-11 items-center gap-2 rounded-full px-4 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400';

export default function MobileDock() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [atPlaces, setAtPlaces] = useState(false);
  const isDetailPage = pathname?.startsWith('/places/');

  useEffect(() => {
    if (isDetailPage) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = document.getElementById('places');
        if (target) setAtPlaces(target.getBoundingClientRect().top <= 120);
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [isDetailPage]);

  if (isDetailPage) return null;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 flex justify-center md:hidden">
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/90 p-1.5 shadow-lg shadow-black/30 backdrop-blur-xl"
      >
        <button
          type="button"
          aria-current={!atPlaces ? 'page' : undefined}
          onClick={() => scrollTo('home')}
          className={cn(
            baseItemClass,
            atPlaces
              ? 'text-neutral-400 hover:bg-white/10 hover:text-neutral-100'
              : 'bg-emerald-500/20 text-emerald-300'
          )}
        >
          <Home className="h-[19px] w-[19px] shrink-0" />
          <span
            className={cn(
              'overflow-hidden whitespace-nowrap transition-all duration-300',
              atPlaces ? 'max-w-0 opacity-0' : 'max-w-[5rem] opacity-100'
            )}
          >
            Home
          </span>
        </button>

        <button
          type="button"
          aria-current={atPlaces ? 'page' : undefined}
          onClick={() => scrollTo('places')}
          className={cn(
            baseItemClass,
            atPlaces
              ? 'bg-emerald-500/20 text-emerald-300'
              : 'text-neutral-400 hover:bg-white/10 hover:text-neutral-100'
          )}
        >
          <Compass className="h-[19px] w-[19px] shrink-0" />
          <span
            className={cn(
              'overflow-hidden whitespace-nowrap transition-all duration-300',
              atPlaces ? 'max-w-[5rem] opacity-100' : 'max-w-0 opacity-0'
            )}
          >
            Explore
          </span>
        </button>

        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className={cn(baseItemClass, 'text-neutral-400 hover:bg-white/10 hover:text-neutral-100')}
        >
          <Sun className="h-[19px] w-[19px] shrink-0 dark:hidden" />
          <Moon className="hidden h-[19px] w-[19px] shrink-0 dark:block" />
        </button>
      </nav>
    </div>
  );
}
