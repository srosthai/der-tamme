import { notFound } from 'next/navigation';
import { places, type Place } from '@/lib/data';
import PlaceDetailsClient from './place-details-client';

// Generate static params for all places
export async function generateStaticParams() {
  return places.map((place) => ({
    id: place.id,
  }));
}

interface PlaceDetailsProps {
  params: {
    id: string;
  };
}

export default function PlaceDetails({ params }: PlaceDetailsProps) {
  const place = places.find(p => p.id === params.id);

  if (!place) {
    notFound();
  }

  return <PlaceDetailsClient place={place} />;
}
