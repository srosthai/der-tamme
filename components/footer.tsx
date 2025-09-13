import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden">
                <img src="/images/logo.png" alt="DER TAM ME Logo" className="w-full h-full object-cover" />
              </div>
              <div className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Cambodia Explore
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Discover the magnificent temples of Angkor and the cultural heart of Cambodia. 
              Experience the ancient wonders and vibrant local life of Siem Reap with expert guidance.
            </p>

            {/* Social Media */}
            <div className="flex space-x-2">
              <Button asChild variant="outline" size="icon" className="w-10 h-10 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors">
                <a href="https://www.facebook.com/samo.thai.73?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="w-10 h-10 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors">
                <a href="https://www.instagram.com/sovannthai887/?igsh=bGQ3NW55MTlocWhz&utm_source=qr#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="w-10 h-10 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors">
                <a href="https://www.linkedin.com/in/sros-thai-b491b42ab/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
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
                  <p className="font-medium">info@siemreapexplore.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">Pub Street Area, Siem Reap, Cambodia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 DER TAM ME. All rights reserved.
          </div>

          <div className="flex space-x-6 text-sm">
            <a href="https://sovannthai.vercel.app/" className="text-muted-foreground hover:text-emerald-600 transition-colors" target='_blank' rel='noopener noreferrer'>
              By <span>HE Sovannthai</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}