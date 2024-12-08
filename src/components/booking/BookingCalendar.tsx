"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaClock, FaWhatsapp, FaCreditCard } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingService {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
  addons: BookingAddon[];
}

interface BookingAddon {
  id: string;
  name: string;
  price: number;
  description: string;
}

const timeSlots: TimeSlot[] = [
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '12:00 PM', available: true },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: false },
  { time: '05:00 PM', available: true },
];

const services: BookingService[] = [
  {
    id: 'bridal',
    name: 'Bridal Makeup',
    duration: 180,
    price: 19999,
    description: 'Complete bridal makeup with premium products',
    addons: [
      {
        id: 'trial',
        name: 'Pre-wedding Trial',
        price: 2999,
        description: 'Test your look before the big day'
      },
      {
        id: 'hd-photos',
        name: 'HD Photography',
        price: 4999,
        description: 'Professional photography session'
      }
    ]
  },
  {
    id: 'party',
    name: 'Party Makeup',
    duration: 90,
    price: 4999,
    description: 'Glamorous look for special occasions',
    addons: [
      {
        id: 'hair',
        name: 'Hair Styling',
        price: 1999,
        description: 'Professional hair styling'
      },
      {
        id: 'touchup',
        name: 'Touch-up Kit',
        price: 999,
        description: 'Personal touch-up kit'
      }
    ]
  }
];

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState<'email' | 'whatsapp'>('whatsapp');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const calculateTotal = () => {
    const service = services.find(s => s.id === selectedService);
    let total = service ? service.price : 0;
    
    selectedAddons.forEach(addonId => {
      const addon = service?.addons.find(a => a.id === addonId);
      if (addon) total += addon.price;
    });

    return total;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleAddonSelect = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleContactMethodChange = (method: 'email' | 'whatsapp') => {
    setContactMethod(method);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send confirmation via selected method
    if (contactMethod === 'whatsapp') {
      const message = `Booking Confirmation\nDate: ${selectedDate}\nTime: ${selectedTime}\nService: ${selectedService}\nTotal: ₹${calculateTotal()}`;
      window.open(`https://wa.me/${formData.phone}?text=${encodeURIComponent(message)}`);
    } else {
      // Send email confirmation
      // await sendConfirmationEmail(formData.email, {
      //   date: selectedDate,
      //   time: selectedTime,
      //   service: selectedService,
      //   total: calculateTotal()
      // });
    }

    // Show success notification
    // toast.success('Booking confirmed! Check your ' + (contactMethod === 'whatsapp' ? 'WhatsApp' : 'email') + ' for details.');
    setCurrentStep(3);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
      <div className="p-8">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className="flex items-center"
            >
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentStep
                    ? 'bg-primary-gold text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
                animate={{
                  scale: step === currentStep ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: step === currentStep ? Infinity : 0 }}
              >
                {step}
              </motion.div>
              {step < 3 && (
                <div
                  className={`w-24 h-1 mx-2 ${
                    step < currentStep
                      ? 'bg-primary-gold'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif text-gray-900 dark:text-white mb-6">
                Select Date & Time
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Date Picker */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Date
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateSelect}
                      minDate={new Date()}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholderText="Choose a date"
                    />
                    <FaCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Time
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => handleTimeSelect(slot.time)}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          selectedTime === slot.time
                            ? 'bg-primary-gold text-white border-primary-gold'
                            : slot.available
                            ? 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-gold'
                            : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!selectedDate || !selectedTime}
                  className="px-6 py-2 bg-primary-gold text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary transition-colors"
                >
                  Next Step
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif text-gray-900 dark:text-white mb-6">
                Your Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    value={selectedService}
                    onChange={(e) => handleServiceSelect(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.name}</option>
                    ))}
                  </select>
                </div>

                {selectedService && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Add-ons
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.find(s => s.id === selectedService)?.addons.map((addon) => (
                        <button
                          key={addon.id}
                          onClick={() => handleAddonSelect(addon.id)}
                          className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                            selectedAddons.includes(addon.id)
                              ? 'bg-primary-gold text-white border-primary-gold'
                              : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-gold'
                          }`}
                        >
                          {addon.name} (+₹{addon.price})
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Method
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleContactMethodChange('whatsapp')}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      contactMethod === 'whatsapp'
                        ? 'bg-primary-gold text-white border-primary-gold'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-gold'
                    }`}
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleContactMethodChange('email')}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      contactMethod === 'email'
                        ? 'bg-primary-gold text-white border-primary-gold'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-gold'
                    }`}
                  >
                    Email
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-gold text-white rounded-full hover:bg-primary transition-colors"
                >
                  Proceed to Payment
                </button>
              </div>
            </motion.form>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 mx-auto mb-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center"
              >
                <FaWhatsapp className="w-8 h-8 text-green-500" />
              </motion.div>
              <h2 className="text-2xl font-serif text-gray-900 dark:text-white mb-4">
                Booking Confirmed!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                You will receive a confirmation on {contactMethod === 'whatsapp' ? 'WhatsApp' : 'email'} shortly.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => window.location.href = '/dashboard'}
                  className="px-6 py-2 bg-primary-gold text-white rounded-full hover:bg-primary transition-colors"
                >
                  View Booking
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
