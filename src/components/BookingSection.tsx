
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type TimeSlot = {
  time: string;
  available: boolean;
};

type ServiceOption = {
  id: number;
  name: string;
  duration: number;
};

const serviceOptions: ServiceOption[] = [
  { id: 1, name: "Coupe Femme", duration: 45 },
  { id: 2, name: "Coupe Homme", duration: 30 },
  { id: 3, name: "Brushing", duration: 30 },
  { id: 4, name: "Coloration", duration: 90 },
  { id: 5, name: "Balayage", duration: 120 },
  { id: 6, name: "Soin Profond", duration: 30 }
];

const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

// Générer des créneaux de 15 minutes entre 9h et 19h
const generateTimeSlots = () => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour < 19; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      // Simuler des créneaux déjà réservés de manière aléatoire
      const available = Math.random() > 0.3;
      slots.push({ time, available });
    }
  }
  return slots;
};

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(generateTimeSlots());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Générer les dates pour les 14 prochains jours
  const getNextTwoWeeks = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Exclure les dimanches (0 = dimanche)
      if (date.getDay() !== 0) {
        dates.push(date);
      }
    }
    return dates;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    // Simuler différents créneaux disponibles selon les jours
    setTimeSlots(generateTimeSlots());
  };

  const handleServiceSelect = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (bookingStep === 1 && selectedService && selectedDate) {
      setBookingStep(2);
    } else if (bookingStep === 2 && selectedTime) {
      setBookingStep(3);
    } else if (bookingStep === 3 && formData.name && formData.email && formData.phone) {
      // Simuler la confirmation de réservation
      setBookingConfirmed(true);
    }
  };

  const prevStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', { 
      day: 'numeric', 
      month: 'short' 
    }).format(date);
  };

  const getDayName = (date: Date) => {
    return daysOfWeek[date.getDay() === 0 ? 6 : date.getDay() - 1];
  };

  const nextTwoWeeks = getNextTwoWeeks();

  return (
    <section id="booking" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Réservez votre rendez-vous</h2>
        <p className="section-subtitle">Choisissez la date et l'heure qui vous conviennent</p>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-soft p-6 md:p-8">
          {bookingConfirmed ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-playfair mb-4">Réservation Confirmée!</h3>
              <p className="text-lg mb-6">
                Merci {formData.name}! Votre rendez-vous a été réservé pour le {selectedDate && formatDate(selectedDate)} à {selectedTime}.
              </p>
              <p className="text-muted-foreground mb-8">
                Un email de confirmation a été envoyé à {formData.email}. Nous avons hâte de vous accueillir!
              </p>
              <Button 
                onClick={() => {
                  setBookingConfirmed(false);
                  setBookingStep(1);
                  setSelectedDate(null);
                  setSelectedService(null);
                  setSelectedTime(null);
                  setFormData({ name: '', email: '', phone: '' });
                }}
                className="btn-secondary"
              >
                Réserver un autre rendez-vous
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <div className="font-bold text-lg">
                  Étape {bookingStep} sur 3
                </div>
                <div className="flex space-x-1">
                  <div className={cn("w-8 h-1 rounded-full", bookingStep >= 1 ? "bg-salon-pink" : "bg-gray-200")}></div>
                  <div className={cn("w-8 h-1 rounded-full", bookingStep >= 2 ? "bg-salon-pink" : "bg-gray-200")}></div>
                  <div className={cn("w-8 h-1 rounded-full", bookingStep >= 3 ? "bg-salon-pink" : "bg-gray-200")}></div>
                </div>
              </div>
              
              {bookingStep === 1 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Choisissez votre service</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {serviceOptions.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className={cn(
                          "p-4 rounded-lg text-center transition-all border",
                          selectedService === service.id 
                            ? "border-salon-pink bg-salon-pink-light shadow-sm" 
                            : "border-gray-200 hover:border-salon-pink"
                        )}
                      >
                        <div className="font-bold mb-1">{service.name}</div>
                        <div className="text-sm text-muted-foreground">{service.duration} min</div>
                      </button>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Choisissez une date</h3>
                  <div className="flex overflow-x-auto pb-4 mb-6 -mx-2 scrollbar-hide">
                    {nextTwoWeeks.map((date, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateClick(date)}
                        className={cn(
                          "flex-shrink-0 w-20 p-3 mx-2 rounded-lg text-center transition-all border",
                          selectedDate && selectedDate.toDateString() === date.toDateString()
                            ? "border-salon-pink bg-salon-pink-light shadow-sm" 
                            : "border-gray-200 hover:border-salon-pink"
                        )}
                      >
                        <div className="text-sm font-medium">{getDayName(date)}</div>
                        <div className="text-lg font-bold mt-1">{date.getDate()}</div>
                        <div className="text-xs text-muted-foreground">{date.toLocaleString('fr-FR', { month: 'short' })}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {bookingStep === 2 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Choisissez un horaire</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-6">
                    {timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        disabled={!slot.available}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                        className={cn(
                          "p-2 rounded-lg text-center transition-all",
                          !slot.available 
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                            : selectedTime === slot.time
                              ? "bg-salon-pink text-white" 
                              : "bg-white border border-gray-200 hover:border-salon-pink"
                        )}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {bookingStep === 3 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Vos informations</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent"
                        placeholder="Votre numéro de téléphone"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="bg-salon-pink-light p-4 rounded-lg mb-6">
                    <h4 className="font-bold mb-2">Récapitulatif</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Service:</div>
                      <div>{serviceOptions.find(s => s.id === selectedService)?.name}</div>
                      <div className="text-muted-foreground">Date:</div>
                      <div>{selectedDate && formatDate(selectedDate)}</div>
                      <div className="text-muted-foreground">Heure:</div>
                      <div>{selectedTime}</div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between">
                {bookingStep > 1 ? (
                  <Button onClick={prevStep} className="btn-secondary">
                    Retour
                  </Button>
                ) : (
                  <div></div>
                )}
                
                <Button 
                  onClick={nextStep} 
                  className="btn-primary"
                  disabled={(bookingStep === 1 && (!selectedService || !selectedDate)) ||
                            (bookingStep === 2 && !selectedTime) ||
                            (bookingStep === 3 && (!formData.name || !formData.email || !formData.phone))}
                >
                  {bookingStep === 3 ? 'Confirmer' : 'Suivant'}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
