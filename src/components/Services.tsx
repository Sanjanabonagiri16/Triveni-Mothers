import { motion } from 'framer-motion';
import { FaScissors, FaPaintBrush, FaFeather, FaTshirt } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Fashion Design',
    description: 'Custom designs that blend traditional elegance with contemporary style',
    longDescription: 'From bridal couture to party wear, each piece is meticulously crafted to reflect your personality and style preferences. We specialize in both traditional and contemporary designs.',
    features: [
      'Custom Bridal Wear',
      'Party & Event Outfits',
      'Traditional Wear',
      'Contemporary Fusion',
    ],
    images: [
      '/images/services/fashion-1.jpg',
      '/images/services/fashion-2.jpg',
      '/images/services/fashion-3.jpg',
    ],
    icon: <FaTshirt />,
  },
  {
    id: 2,
    title: 'Makeup Artistry',
    description: 'Professional makeup services for all occasions',
    longDescription: 'Transform your look with our expert makeup services. We specialize in bridal, party, and editorial makeup that enhances your natural beauty.',
    features: [
      'Bridal Makeup',
      'Party & Event Makeup',
      'Editorial Looks',
      'Natural Everyday Makeup',
    ],
    images: [
      '/images/services/makeup-1.jpg',
      '/images/services/makeup-2.jpg',
      '/images/services/makeup-3.jpg',
    ],
    icon: <FaPaintBrush />,
  },
  {
    id: 3,
    title: 'Hairstyling',
    description: 'Creative hairstyles for every occasion',
    longDescription: 'From elegant updos to trendy cuts, our hairstyling services are designed to complement your features and suit the occasion perfectly.',
    features: [
      'Bridal Hairstyles',
      'Party & Event Styling',
      'Modern Cuts & Colors',
      'Traditional Styles',
    ],
    images: [
      '/images/services/hair-1.jpg',
      '/images/services/hair-2.jpg',
      '/images/services/hair-3.jpg',
    ],
    icon: <FaScissors />,
  },
  {
    id: 4,
    title: 'Saree Draping',
    description: 'Innovative draping styles for all occasions',
    longDescription: 'Master the art of saree draping with our expert guidance. Learn traditional and contemporary styles that make you look elegant and feel confident.',
    features: [
      'Traditional Styles',
      'Modern Innovations',
      'Bridal Draping',
      'Style Workshops',
    ],
    images: [
      '/images/services/saree-1.jpg',
      '/images/services/saree-2.jpg',
      '/images/services/saree-3.jpg',
    ],
    icon: <FaFeather />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-accent-pearl dark:from-neutral-900 dark:to-neutral-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-primary dark:text-primary-gold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover our range of professional services tailored to enhance your style and beauty
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.longDescription}
              icon={service.icon}
              image={service.images[0]}
              features={service.features}
              link={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
