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
          </Button>
        </div>
      </div>
    );
  }

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${place.location.lat},${place.location.lng}&travelmode=driving`;
    window.open(url, '_blank');
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

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Easy: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      Moderate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      Challenging: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % place.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + place.images.length) % place.images.length);
  };

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => router.push('/')}
          className="mb-6 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-900/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Places
        </Button>

        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-8 group">
          <img
            src={place.images[currentImageIndex]}
            alt={place.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Image Navigation */}
          {place.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {place.images.length}
          </div>

          {/* Gallery Button */}
          <Button
            onClick={() => openGallery(currentImageIndex)}
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
            variant="outline"
          >
            <Camera className="w-4 h-4 mr-2" />
            View Gallery
          </Button>

          {/* Place Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getTypeColor(place.type)} variant="secondary">
                {place.type}
              </Badge>
              <Badge className={getDifficultyColor(place.difficulty)} variant="secondary">
                {place.difficulty}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{place.name}</h1>
            <div className="flex items-center text-lg opacity-90">
              <MapPin className="w-5 h-5 mr-2" />
              {place.province}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Info className="w-6 h-6 mr-2 text-emerald-600" />
                  About This Place
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {place.description}
                </p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {place.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Facilities & Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {place.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center">
                        {facility.toLowerCase().includes('parking') && <Car className="w-4 h-4 text-emerald-600" />}
                        {facility.toLowerCase().includes('wifi') && <Wifi className="w-4 h-4 text-emerald-600" />}
                        {facility.toLowerCase().includes('food') && <Coffee className="w-4 h-4 text-emerald-600" />}
                        {!facility.toLowerCase().includes('parking') && !facility.toLowerCase().includes('wifi') && !facility.toLowerCase().includes('food') && <Mountain className="w-4 h-4 text-emerald-600" />}
                      </div>
                      <span className="text-sm font-medium">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Nearby Attractions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {place.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-muted-foreground">{attraction}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">Rating</span>
                    </div>
                    <span className="font-bold">{place.rating}/5</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">Entry Fee</span>
                    </div>
                    <span className="font-bold">{place.entryFee}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">Duration</span>
                    </div>
                    <span className="font-bold">{place.duration}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium">Best Time</span>
                    </div>
                    <span className="font-bold text-right text-sm">{place.bestTimeToVisit}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="p-6">
                <Button
                  onClick={getDirections}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mb-4"
                  size="lg"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => openGallery(0)}
                >
                  <Camera className="w-5 h-5 mr-2" />
                  View All Photos
                </Button>
              </CardContent>
            </Card>

            {/* Image Thumbnails */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Photo Gallery</h3>
                <div className="grid grid-cols-2 gap-2">
                  {place.images.slice(0, 4).map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => openGallery(index)}
                    >
                      <img
                        src={image}
                        alt={`${place.name} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {index === 3 && place.images.length > 4 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-white font-bold">+{place.images.length - 4}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Image Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={() => setIsGalleryOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            {place.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </>
            )}

            {/* Main Image */}
            <img
              src={place.images[currentImageIndex]}
              alt={`${place.name} ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {place.images.length}
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto">
              {place.images.map((image, index) => (
                <div
                  key={index}
                  className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    index === currentImageIndex ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}