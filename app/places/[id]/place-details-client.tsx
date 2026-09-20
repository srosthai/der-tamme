"use client";

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Calendar,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gauge,
  MapPin,
  Navigation,
  Star,
  Ticket,
  X,
} from 'lucide-react';
import { type Place } from '@/lib/data';
import { difficultyDot, getPlaceTypeMeta } from '@/lib/place-styles';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';

interface PlaceDetailsClientProps {
  place: Place;
}

const glassPill =
  'inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-md';

const glassButton =
  'inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70';

export default function PlaceDetailsClient({ place }: PlaceDetailsClientProps) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const imageCount = place.images.length;
  const typeMeta = getPlaceTypeMeta(place.type);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % imageCount);
  }, [imageCount]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount);
  }, [imageCount]);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${place.location.lat},${place.location.lng}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    if (!isGalleryOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsGalleryOpen(false);
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isGalleryOpen, nextImage, prevImage]);

  const facts = [
    { label: 'Best time', value: place.bestTimeToVisit, icon: Calendar },
    { label: 'Entrance', value: place.entryFee, icon: Ticket },
    { label: 'Time needed', value: place.duration, icon: Clock },
    { label: 'Difficulty', value: place.difficulty, icon: Gauge, dot: difficultyDot[place.difficulty] },
  ];

  return (
    <div className="min-h-screen min-h-[100dvh] bg-background">
      <Header />

      <main className="pb-2 md:pb-0">
        {/* Photo hero */}
        <div className="relative md:mx-auto md:mt-6 md:w-full md:max-w-6xl md:px-8">
          <div className="relative h-[54vh] min-h-[320px] overflow-hidden md:h-[56vh] md:rounded-3xl">
            <img
              src={place.images[currentImageIndex]}
              alt={`${place.name} photo ${currentImageIndex + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />

            <button
              type="button"
              onClick={() => router.push('/')}
              className={cn(glassButton, 'absolute left-4 top-[max(1rem,env(safe-area-inset-top))]')}
              aria-label="Back to places"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] flex items-center gap-2">
              <span className={glassPill}>
                {currentImageIndex + 1} / {imageCount}
              </span>
              <button
                type="button"
                onClick={() => openGallery(currentImageIndex)}
                className={glassButton}
                aria-label="Open photo gallery"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>

            {imageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className={cn(glassButton, 'absolute left-4 top-1/2 hidden -translate-y-1/2 md:inline-flex')}
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className={cn(glassButton, 'absolute right-4 top-1/2 hidden -translate-y-1/2 md:inline-flex')}
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}

            <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className={glassPill}>
                  <span className={cn('h-1.5 w-1.5 rounded-full', typeMeta.dot)} />
                  {typeMeta.label}
                </span>
                <span className={glassPill}>
                  <Star className="h-3 w-3 fill-emerald-300 text-emerald-300" />
                  {place.rating.toFixed(1)}
                </span>
              </div>

              <h1 className="mt-3 text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-5xl">
                {place.name}
              </h1>
              <p className="mt-2 flex items-center gap-1.5 text-[13px] text-white/75 md:text-[14px]">
                <MapPin className="h-3.5 w-3.5" />
                {place.province}, Cambodia
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)] gap-10 px-5 pt-8 md:px-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 lg:pt-12">
          {/* Story */}
          <div className="order-2 divide-y divide-border/60 lg:order-1">
            <section className="py-7 first:pt-0 last:pb-0">
              <h2 className="text-[15px] font-semibold tracking-[-0.01em]">About this place</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {place.description}
              </p>
            </section>

            <section className="py-7 first:pt-0 last:pb-0">
              <h2 className="text-[15px] font-semibold tracking-[-0.01em]">Highlights</h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                {place.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                      <Check className="h-3 w-3 text-emerald-700 dark:text-emerald-400" />
                    </span>
                    <span className="text-[14px] leading-snug text-muted-foreground">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="py-7 first:pt-0 last:pb-0">
              <h2 className="text-[15px] font-semibold tracking-[-0.01em]">Facilities &amp; services</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {place.facilities.map((facility) => (
                  <li
                    key={facility}
                    className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1.5 text-[13px] text-foreground/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                    {facility}
                  </li>
                ))}
              </ul>
            </section>

            <section className="py-7 first:pt-0 last:pb-0">
              <h2 className="text-[15px] font-semibold tracking-[-0.01em]">Nearby attractions</h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                {place.nearbyAttractions.map((attraction) => (
                  <li key={attraction} className="flex items-center gap-2.5 text-[14px] text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 text-muted-foreground/70" />
                    {attraction}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Facts, photos and actions */}
          <aside className="order-1 space-y-6 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <dl className="divide-y divide-border/60 border-y border-border/60 lg:rounded-2xl lg:border lg:px-4">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3 py-3.5">
                  <fact.icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <dt className="text-[13px] text-muted-foreground">{fact.label}</dt>
                  <dd className="ml-auto max-w-[60%] text-right text-[14px] font-medium leading-snug">
                    {fact.dot && (
                      <span
                        className={cn('mr-1.5 inline-block h-2 w-2 rounded-full align-middle', fact.dot)}
                      />
                    )}
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="hidden gap-2.5 lg:flex">
              <Button
                onClick={getDirections}
                className="h-11 flex-1 rounded-full border-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-[14px] font-semibold text-white hover:from-emerald-500 hover:to-teal-600 hover:brightness-110"
              >
                <Navigation className="h-4 w-4" />
                Get directions
              </Button>
              <Button
                variant="outline"
                onClick={() => openGallery(0)}
                className="h-11 rounded-full border-border/60 px-4 text-[14px]"
              >
                <Camera className="h-4 w-4" />
                Photos
              </Button>
            </div>

            <div>
              <h2 className="text-[13px] font-semibold text-muted-foreground lg:px-1">Photo gallery</h2>
              <div className="rail no-scrollbar -mx-5 mt-3 flex gap-2.5 overflow-x-auto px-5 pb-1 md:-mx-8 md:scroll-px-8 md:px-8 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-1 lg:pb-0">
                {place.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => openGallery(index)}
                    className={cn(
                      'relative h-20 w-28 shrink-0 overflow-hidden rounded-xl ring-offset-2 ring-offset-background transition-all lg:h-24 lg:w-full',
                      index === currentImageIndex ? 'ring-2 ring-emerald-600' : 'opacity-80 hover:opacity-100'
                    )}
                    aria-label={`Open photo ${index + 1}`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Sticky mobile actions */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/80 px-5 pb-[calc(env(safe-area-inset-bottom)_+_0.75rem)] pt-3 backdrop-blur-xl lg:hidden">
        <div className="flex gap-2.5">
          <Button
            onClick={getDirections}
            className="h-11 flex-1 rounded-full border-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-[15px] font-semibold text-white hover:from-emerald-500 hover:to-teal-600 hover:brightness-110"
          >
            <Navigation className="h-4 w-4" />
            Get directions
          </Button>
          <Button
            variant="outline"
            onClick={() => openGallery(currentImageIndex)}
            className="h-11 rounded-full border-border/60 px-4 text-[14px]"
          >
            <Camera className="h-4 w-4" />
            Photos
          </Button>
        </div>
      </div>

      <Footer />
      <ScrollToTop />

      {/* Full screen gallery */}
      {isGalleryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${place.name} photo gallery`}
          className="fixed inset-0 z-[60] bg-black/95"
        >
          <div className="relative flex h-full w-full items-center justify-center px-4 pb-24 pt-16">
            <img
              src={place.images[currentImageIndex]}
              alt={`${place.name} photo ${currentImageIndex + 1}`}
              className="max-h-full max-w-full object-contain"
            />

            <button
              type="button"
              onClick={() => setIsGalleryOpen(false)}
              className={cn(glassButton, 'absolute right-4 top-[max(1rem,env(safe-area-inset-top))]')}
              aria-label="Close gallery"
            >
              <X className="h-4 w-4" />
            </button>

            <span className={cn(glassPill, 'absolute left-1/2 top-[max(1rem,env(safe-area-inset-top))] -translate-x-1/2')}>
              {currentImageIndex + 1} / {imageCount}
            </span>

            {imageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className={cn(glassButton, 'absolute left-3 top-1/2 -translate-y-1/2')}
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className={cn(glassButton, 'absolute right-3 top-1/2 -translate-y-1/2')}
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <div className="rail no-scrollbar absolute inset-x-0 bottom-0 flex gap-2 overflow-x-auto px-5 pb-[calc(env(safe-area-inset-bottom)_+_1rem)] pt-2">
              {place.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    'h-14 w-20 shrink-0 overflow-hidden rounded-lg transition-opacity',
                    index === currentImageIndex ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-90'
                  )}
                  aria-label={`Show photo ${index + 1}`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
