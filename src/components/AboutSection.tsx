
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-salon-pink-light">
      <div className="container-custom">
        <h2 className="section-title">À Propos de Nous</h2>
        <p className="section-subtitle">Découvrez notre philosophie et notre passion pour la beauté</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-salon-pink rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1559599076-9c61d8e1b77c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
                alt="Portrait de la coiffeuse" 
                className="rounded-xl shadow-soft relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Sophie Martin</h3>
            <p className="text-lg mb-4">
              Passionnée par la coiffure depuis plus de 15 ans, j'ai fondé ChicHair avec une vision claire : 
              créer un espace où chaque client se sent unique et ressort transformé, tant physiquement que mentalement.
            </p>
            <p className="text-lg mb-6">
              Formée aux techniques les plus modernes et constamment à l'affût des dernières tendances, 
              je m'engage à offrir des prestations de qualité dans une ambiance chaleureuse et bienveillante.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-salon-pink mb-1">Expertise</h4>
                <p>Plus de 15 ans d'expérience dans la coiffure et le style</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-salon-pink mb-1">Formation</h4>
                <p>Diplômée de l'Académie de Coiffure de Paris</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-salon-pink mb-1">Spécialités</h4>
                <p>Coupes tendance, balayage, et techniques de coloration</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-salon-pink mb-1">Philosophie</h4>
                <p>Beauté naturelle et soins durables pour vos cheveux</p>
              </div>
            </div>
            
            <Button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
