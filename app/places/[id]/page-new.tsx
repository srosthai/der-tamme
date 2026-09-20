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
  params: Promise<{
    id: string;
  }>;
}

export default async function PlaceDetails({ params }: PlaceDetailsProps) {
  const { id } = await params;
  const place = places.find(p => p.id === id);

  if (!place) {
    notFound();
  }

  return <PlaceDetailsClient place={place} />;
}
