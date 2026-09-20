"use client";

import Link from 'next/link';
import { useEffect, useState, type MouseEvent } from 'react';
import { Moon, Search, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { usePlaceFilters } from '@/components/place-filters';

const navLinkClass =
  'inline-flex h-10 items-center rounded-full px-3.5 text-[14px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Sun className="h-[18px] w-[18px] dark:hidden" />
      <Moon className="hidden h-[18px] w-[18px] dark:block" />
    </button>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openSection, setOpenSection] = useState('');
  const { typeOptions, selectType, goToPlaces, focusSearch } = usePlaceFilters();

  // Keep in-page anchors instant on the home page while still linking home from detail pages.
  const anchorTo = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 8));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 md:px-4 md:pt-3">
      <div
        className={cn(
          'flex h-14 items-center gap-3 border-b border-border/60 bg-background/80 px-5 backdrop-blur-xl md:mx-auto md:grid md:h-14 md:max-w-5xl md:grid-cols-[1fr_auto_1fr] md:gap-2 md:rounded-full md:border md:px-3',
          scrolled && 'md:shadow-lg md:shadow-black/5 dark:md:shadow-black/40'
        )}
      >
        <Link href="/#home" onClick={anchorTo('home')} className="flex min-w-0 items-center gap-2.5 py-1 md:gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-emerald-600">
            <img src="/images/logo.png" alt="" className="h-full w-full object-cover" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[15px] font-semibold leading-tight tracking-[-0.01em]">
              DER TAM ME
            </span>
            <span className="block truncate text-[11px] leading-tight text-muted-foreground">
              Siem Reap · Cambodia
            </span>
          </span>
        </Link>

        <NavigationMenu
          value={openSection}
          onValueChange={setOpenSection}
          className="hidden md:block"
        >
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuItem value="home">
              <Link href="/#home" className={navLinkClass} onClick={anchorTo('home')}>
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem value="explore">
              <NavigationMenuTrigger className="h-10 rounded-full px-3.5 text-[14px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground data-[state=open]:bg-muted">
                Explore
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[380px] grid-cols-2 gap-1 p-2">
                  {typeOptions
                    .filter((option) => option.value !== 'all')
                    .map((option) => (
                      <li key={option.value}>
                        <NavigationMenuLink asChild>
                          <button
                            type="button"
                            onClick={() => {
                              selectType(option.value);
                              goToPlaces();
                              setOpenSection('');
                            }}
                            className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-[14px] font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            {option.label}
                            <span className="text-[12px] font-normal tabular-nums text-muted-foreground">
                              {option.count}
                            </span>
                          </button>
                        </NavigationMenuLink>
                      </li>
                    ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem value="places">
              <Link
                href="/#places"
                className={navLinkClass}
                onClick={(event) => {
                  selectType('all');
                  anchorTo('places')(event);
                }}
              >
                Places
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-1.5 md:flex md:justify-self-end">
          <button
            type="button"
            aria-label="Search places"
            onClick={focusSearch}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <ThemeToggle />
          <Link
            href="/#places"
            onClick={(event) => {
              selectType('all');
              anchorTo('places')(event);
            }}
            className="ml-1 inline-flex h-10 items-center rounded-full bg-emerald-600 px-4 text-[14px] font-medium text-white transition-colors hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Explore places
          </Link>
        </div>
      </div>
    </header>
  );
}
