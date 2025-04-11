
import React from 'react';
import { Button } from '@/components/ui/button';

type Service = {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
};

const services: Service[] = [
  {
    id: 1,
    name: "Coupe Femme",
    description: "Coupe personnalisée incluant shampooing, soin et coiffage",
    price: "À partir de 45€",
    duration: "45 min",
    icon: "✂️"
  },
  {
    id: 2,
    name: "Coupe Homme",
    description: "Coupe et style avec finition à la tondeuse ou aux ciseaux",
    price: "À partir de 30€",
    duration: "30 min",
    icon: "💇‍♂️"
  },
  {
    id: 3,
    name: "Brushing",
    description: "Mise en forme complète avec produits adaptés à votre type de cheveux",
    price: "À partir de 35€",
    duration: "30-45 min",
    icon: "💨"
  },
  {
    id: 4,
    name: "Coloration",
    description: "Coloration professionnelle avec soins protecteurs",
    price: "À partir de 65€",
    duration: "1h30-2h",
    icon: "🎨"
  },
  {
    id: 5,
    name: "Balayage",
    description: "Technique de coloration naturelle pour un effet soleil",
    price: "À partir de 85€",
    duration: "2h-2h30",
    icon: "☀️"
  },
  {
    id: 6,
    name: "Soin Profond",
    description: "Traitement intensif pour réparer et nourrir vos cheveux",
    price: "À partir de 40€",
    duration: "30 min",
    icon: "✨"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Nos Services</h2>
        <p className="section-subtitle">Des prestations sur mesure pour sublimer votre beauté naturelle</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{service.icon}</span>
                <h3 className="text-xl font-bold font-playfair">{service.name}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-salon-pink-light">
                <span className="font-bold text-salon-pink">{service.price}</span>
                <span className="text-sm text-muted-foreground">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Prendre un rendez-vous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
