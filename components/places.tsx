"use client";

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { MapPin, Star, Navigation, Search, Filter, Eye } from 'lucide-react';
import { places, provinces, placeTypes, type Place } from '@/lib/data';

export default function Places() {
  const router = useRouter();
  const [selectedProvince, setSelectedProvince] = useState('All Provinces');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesProvince = selectedProvince === 'All Provinces' || place.province === selectedProvince;
      const matchesType = selectedType === 'all' || place.type === selectedType;
      const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           place.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesProvince && matchesType && matchesSearch;
    });
  }, [selectedProvince, selectedType, searchQuery]);

  const getDirections = (place: Place) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${place.location.lat},${place.location.lng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  const viewDetails = (placeId: string) => {
    router.push(`/places/${placeId}`);
  };

  const getTypeColor = (type: string) => {
    const colors = {
      temple: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      beach: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      mountain: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      city: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      nature: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400',
      cultural: 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="places" className="py-16 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Amazing 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Places</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore Cambodia's most beautiful destinations, from ancient temples to pristine beaches and lush natural wonders.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl p-6 mb-8 shadow-lg border">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-emerald-600" />
            <h3 className="font-semibold">Filter Places</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search places..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Province Filter */}
            <Select value={selectedProvince} onValueChange={setSelectedProvince}>
              <SelectTrigger>
                <SelectValue placeholder="Select Province" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((province) => (
                  <SelectItem key={province} value={province}>
                    {province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                {placeTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredPlaces.length} of {places.length} places
            {selectedProvince !== 'All Provinces' && ` in ${selectedProvince}`}
            {selectedType !== 'all' && ` (${placeTypes.find(t => t.value === selectedType)?.label})`}
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <Card key={place.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => viewDetails(place.id)}>
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getTypeColor(place.type)} variant="secondary">
                    {place.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{place.rating}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-emerald-600 transition-colors cursor-pointer" onClick={() => viewDetails(place.id)}>
                  {place.name}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {place.province}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {place.description}
                </p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {place.highlights.slice(0, 2).map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                  {place.highlights.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{place.highlights.length - 2} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button
                  onClick={() => viewDetails(place.id)}
                  variant="outline"
                  className="flex-1 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 dark:hover:bg-emerald-900/20"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button
                  onClick={() => getDirections(place)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Directions
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No places found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search terms to find more places.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}