import { type Place } from '@/lib/data';

/**
 * Single source of truth for place type styling so cards, filters and the
 * detail view never drift apart. Colours stay as dots only, which keeps the
 * card surface quiet while still signalling the category.
 */
export const placeTypeMeta: Record<Place['type'], { label: string; dot: string }> = {
  temple: { label: 'Temple', dot: 'bg-orange-400' },
  cafe: { label: 'Cafe', dot: 'bg-amber-400' },
  mountain: { label: 'Mountain', dot: 'bg-lime-500' },
  city: { label: 'City', dot: 'bg-violet-400' },
  nature: { label: 'Nature', dot: 'bg-emerald-400' },
  cultural: { label: 'Cultural', dot: 'bg-sky-400' },
};

export const difficultyDot: Record<Place['difficulty'], string> = {
  Easy: 'bg-emerald-500',
  Moderate: 'bg-amber-500',
  Challenging: 'bg-rose-500',
};

export function getPlaceTypeMeta(type: string) {
  return placeTypeMeta[type as Place['type']] ?? { label: type, dot: 'bg-muted-foreground' };
}
