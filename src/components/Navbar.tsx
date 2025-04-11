
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-2xl font-playfair font-bold text-salon-pink">
          ChicHair
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="font-medium hover:text-salon-pink transition-colors">
            Accueil
          </button>
          <button onClick={() => scrollToSection('about')} className="font-medium hover:text-salon-pink transition-colors">
            À propos
          </button>
          <button onClick={() => scrollToSection('services')} className="font-medium hover:text-salon-pink transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="font-medium hover:text-salon-pink transition-colors">
            Témoignages
          </button>
          <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-salon-pink transition-colors">
            Contact
          </button>
        </div>

        <Button onClick={() => scrollToSection('booking')} className="hidden md:block btn-primary">
          Prendre RDV
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-salon-pink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col space-y-4">
          <button onClick={() => scrollToSection('home')} className="font-medium hover:text-salon-pink transition-colors py-2">
            Accueil
          </button>
          <button onClick={() => scrollToSection('about')} className="font-medium hover:text-salon-pink transition-colors py-2">
            À propos
          </button>
          <button onClick={() => scrollToSection('services')} className="font-medium hover:text-salon-pink transition-colors py-2">
            Services
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="font-medium hover:text-salon-pink transition-colors py-2">
            Témoignages
          </button>
          <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-salon-pink transition-colors py-2">
            Contact
          </button>
          <Button onClick={() => scrollToSection('booking')} className="btn-primary w-full">
            Prendre RDV
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
