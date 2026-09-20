"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { places, placeTypes, type Place } from '@/lib/data';

type TypeOption = { value: string; label: string; count: number };

type PlaceFiltersValue = {
  query: string;
  type: string;
  setQuery: (value: string) => void;
  selectType: (value: string) => void;
  reset: () => void;
  visible: Place[];
  typeOptions: TypeOption[];
  total: number;
  selectedTypeLabel?: string;
  goToPlaces: () => void;
  focusSearch: () => void;
};

const PlaceFiltersContext = createContext<PlaceFiltersValue | null>(null);

export function PlaceFiltersProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');

  const typeOptions = useMemo<TypeOption[]>(
    () => [
      { value: 'all', label: 'All', count: places.length },
      ...placeTypes
        .filter((option) => option.value !== 'all')
        .map((option) => ({
          value: option.value,
          label: option.label,
          count: places.filter((place) => place.type === option.value).length,
        }))
        .filter((option) => option.count > 0),
    ],
    []
  );

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return places.filter((place) => {
      const matchesType = type === 'all' || place.type === type;
      const matchesQuery =
        needle.length === 0 ||
        place.name.toLowerCase().includes(needle) ||
        place.description.toLowerCase().includes(needle) ||
        place.highlights.some((highlight) => highlight.toLowerCase().includes(needle));

      return matchesType && matchesQuery;
    });
  }, [query, type]);

  const selectedTypeLabel = placeTypes.find((option) => option.value === type)?.label;

  const reset = useCallback(() => {
    setType('all');
    setQuery('');
  }, []);

  const goToPlaces = useCallback(() => {
    document.getElementById('places')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const focusSearch = useCallback(() => {
    const input = document.getElementById('place-search');

    // On pages without the hero search (place details), hand the intent to the home page.
    if (!input) {
      router.push('/#search');
      return;
    }

    input.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    if (input instanceof HTMLInputElement) {
      window.setTimeout(() => input.focus({ preventScroll: true }), 350);
    }
  }, [router]);

  const value = useMemo<PlaceFiltersValue>(
    () => ({
      query,
      type,
      setQuery,
      selectType: setType,
      reset,
      visible,
      typeOptions,
      total: places.length,
      selectedTypeLabel,
      goToPlaces,
      focusSearch,
    }),
    [query, type, reset, visible, typeOptions, selectedTypeLabel, goToPlaces, focusSearch]
  );

  return <PlaceFiltersContext.Provider value={value}>{children}</PlaceFiltersContext.Provider>;
}

export function usePlaceFilters() {
  const value = useContext(PlaceFiltersContext);
  if (!value) {
    throw new Error('usePlaceFilters must be used inside a PlaceFiltersProvider');
  }
  return value;
}
