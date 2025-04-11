
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-salon-pink-light pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-playfair mb-4">ChicHair</h3>
            <p className="text-muted-foreground mb-4">
              Votre salon de beauté dédié à sublimer votre style naturel dans une ambiance élégante et chaleureuse.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow" 
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-salon-pink" />
              </a>
              <a 
                href="#" 
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-salon-pink" />
              </a>
              <a 
                href="#" 
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow" 
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-salon-pink" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-playfair mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-salon-pink transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-salon-pink transition-colors">À propos</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-salon-pink transition-colors">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-salon-pink transition-colors">Témoignages</a>
              </li>
              <li>
                <a href="#booking" className="text-muted-foreground hover:text-salon-pink transition-colors">Réservation</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-salon-pink transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-playfair mb-4">Heures d'ouverture</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Lundi - Vendredi</span>
                <span>9h00 - 19h00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Samedi</span>
                <span>9h00 - 18h00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ChicHair. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
