import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Cambodia Explore
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your ultimate guide to discovering Cambodia's hidden gems, ancient wonders, and natural beauty. 
              Explore the Kingdom of Wonder with confidence and create unforgettable memories.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="w-10 h-10 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#places" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Places
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#provinces" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Provinces
                </a>
              </li>
              <li>
                <a href="#travel-tips" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Travel Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+855 12 345 678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">info@cambodiaexplore.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Cambodia Explore. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-emerald-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-emerald-600 transition-colors">
              Terms & Conditions
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-emerald-600 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}