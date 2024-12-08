import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";

interface BookingFormData {
  service: string;
  date: Date | null;
  time: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const services = [
  { id: 'fashion-design', name: 'Fashion Design Consultation' },
  { id: 'makeup', name: 'Bridal Makeup' },
  { id: 'hairstyling', name: 'Professional Hairstyling' },
  { id: 'saree-draping', name: 'Saree Draping' },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
];

export default function Booking() {
  const [formData, setFormData] = useState<BookingFormData>({
    service: '',
    date: null,
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Implement actual booking API integration
    // const response = await fetch('/api/booking', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSuccess(true);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif text-primary dark:text-primary-gold mb-4">
            Book an Appointment
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Schedule your consultation or service appointment with us
          </p>
        </motion.div>

        {success ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-xl"
          >
            <h3 className="text-2xl font-serif text-green-600 dark:text-green-400 mb-4">
              Booking Confirmed!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for booking with us. We'll send you a confirmation email shortly.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({
                  service: '',
                  date: null,
                  time: '',
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                });
                setStep(1);
              }}
              className="px-6 py-3 bg-primary dark:bg-primary-gold text-white dark:text-black rounded-full hover:opacity-90 transition-opacity"
            >
              Book Another Appointment
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-2">
                    Select Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  >
                    <option value="">Choose a service...</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-2">
                    Select Date
                  </label>
                  <DatePicker
                    selected={formData.date}
                    onChange={(date: Date) => setFormData(prev => ({ ...prev, date }))}
                    minDate={new Date()}
                    required
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-2">
                    Select Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  >
                    <option value="">Choose a time...</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3 bg-primary dark:bg-primary-gold text-white dark:text-black rounded-full hover:opacity-90 transition-opacity"
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-200 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/2 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-1/2 py-3 bg-primary dark:bg-primary-gold text-white dark:text-black rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {loading ? 'Booking...' : 'Confirm Booking'}
                  </button>
                </div>
              </div>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
}
