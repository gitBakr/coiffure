
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

type Testimonial = {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
  service: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dupont",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "J'ai adoré mon expérience chez ChicHair. Sophie a parfaitement compris ce que je voulais et le résultat dépasse mes attentes. L'ambiance du salon est très relaxante et le service impeccable.",
    rating: 5,
    service: "Balayage & Coupe"
  },
  {
    id: 2,
    name: "Lucie Martin",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    text: "Cela fait des années que je cherche une coiffeuse qui comprend mes cheveux bouclés, et enfin je l'ai trouvée ! Les produits utilisés sont de qualité et le conseil personnalisé est vraiment apprécié.",
    rating: 5,
    service: "Coupe & Soin"
  },
  {
    id: 3,
    name: "Camille Bernard",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    text: "Une adresse à conserver précieusement ! Ma coloration est exactement comme je la voulais, et les conseils pour l'entretien à domicile ont été très utiles. Je recommande vivement.",
    rating: 5,
    service: "Coloration"
  },
  {
    id: 4,
    name: "Émilie Laurent",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    text: "Premier rendez-vous chez ChicHair et certainement pas le dernier ! Sophie a su me conseiller sur ce qui conviendrait le mieux à la forme de mon visage. Résultat impeccable.",
    rating: 5,
    service: "Coupe & Brushing"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i}
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-salon-pink-light">
      <div className="container-custom">
        <h2 className="section-title">Témoignages</h2>
        <p className="section-subtitle">Ce que nos clientes disent de nous</p>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="testimonial-card overflow-hidden">
            <div className={`transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-xl">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].service}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                </div>
              </div>
              <p className="text-lg italic mb-4">{testimonials[activeIndex].text}</p>
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-salon-pink hover:text-white transition-colors"
            aria-label="Témoignage précédent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-salon-pink hover:text-white transition-colors"
            aria-label="Témoignage suivant"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                index === activeIndex ? 'bg-salon-pink' : 'bg-gray-300'
              }`}
              aria-label={`Voir témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
