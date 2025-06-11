"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, MapPin } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Cambodia Explore
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Home
            </a>
            <a href="#places" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Places
            </a>
            <a href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-9 h-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-2 p-4">
              <a 
                href="#home" 
                className="text-sm font-medium hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#places" 
                className="text-sm font-medium hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Places
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}