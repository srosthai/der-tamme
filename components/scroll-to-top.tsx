"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Desktop-only affordance: phones use the Home tab instead. */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      className={cn(
        'fixed bottom-8 right-8 z-40 hidden h-11 w-11 rounded-full border-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white transition-all duration-300 ease-out hover:from-emerald-500 hover:to-teal-600 hover:brightness-110 md:inline-flex',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
      onClick={scrollToTop}
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}
