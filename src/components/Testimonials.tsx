"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride',
    image: '/images/testimonials/client-1.jpg',
    text: 'The bridal look created was absolutely stunning! The makeup stayed perfect throughout the day, and the saree draping was innovative yet comfortable.',
    service: 'Bridal Makeup & Saree Draping',
  },
  // Add more testimonials
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary text-primary dark:text-primary-gold mb-4">
            Client Testimonials
          </h2>
          <p className="text-body text-gray-600 dark:text-gray-300">
            Read what our clients have to say about their experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                className={`${
                  index === currentIndex ? 'block' : 'hidden'
                } bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <h4 className="font-serif text-xl font-semibold dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary dark:text-primary-gold">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-primary dark:bg-primary-gold'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
