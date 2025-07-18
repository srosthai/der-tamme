import { Button } from '@/components/ui/button';
import { ArrowDown, MapPin, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://wallpapercat.com/w/full/a/f/e/777485-2160x1080-desktop-dual-screen-angkor-wat-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium">Discover Cambodia</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Explore the
          <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Kingdom of Wonder
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Discover Cambodia's ancient temples, pristine beaches, lush jungles, and vibrant culture. 
          From the majestic Angkor Wat to hidden natural wonders, embark on an unforgettable journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <a href="#places">Start Exploring</a>
          </Button>
          {/* <Button 
            variant="outline" 
            size="lg"
            className="border-white/60 bg-black text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg backdrop-blur-sm"
          >
            Watch Video
          </Button> */}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-emerald-400">24+</div>
            <div className="text-sm text-gray-200">Provinces</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-emerald-400">100+</div>
            <div className="text-sm text-gray-200">Amazing Places</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-emerald-400">4.8</div>
            <div className="text-sm text-gray-200 flex items-center justify-center">
              <Star className="w-4 h-4 fill-current mr-1" />
              Rating
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  );
}