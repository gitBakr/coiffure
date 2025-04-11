
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Contactez-Nous</h2>
        <p className="section-subtitle">Pour toute question ou information supplémentaire</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8">
              <h3 className="text-xl font-bold font-playfair mb-6">Envoyez-nous un message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contactSubject" className="block text-sm font-medium mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="contactSubject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent"
                    placeholder="Objet de votre message"
                  />
                </div>
                <div>
                  <label htmlFor="contactMessage" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <Button className="btn-primary w-full" type="submit">
                  <Send className="h-4 w-4 mr-2" /> Envoyer
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-6">
              <h3 className="text-xl font-bold font-playfair mb-6">Informations</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-salon-pink mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Adresse</h4>
                    <p className="text-muted-foreground">
                      123 Avenue des Fleurs<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-salon-pink mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Horaires d'ouverture</h4>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi: 9h00 - 19h00<br />
                      Samedi: 9h00 - 18h00<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-salon-pink mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Téléphone</h4>
                    <p className="text-muted-foreground">
                      +33 1 23 45 67 89
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-salon-pink mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-muted-foreground">
                      contact@chichairs.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden h-64 shadow-soft">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342144!2d2.3002659159387575!3d48.87456697928986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4fb7397e5%3A0x25e57e7b5b00a250!2s123%20Avenue%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sen!2sfr!4v1617700460656!5m2!1sen!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Carte du salon"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
