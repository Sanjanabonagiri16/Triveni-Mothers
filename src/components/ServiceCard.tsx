import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactElement;
  image: string;
  features: string[];
  link: string;
}

export default function ServiceCard({ title, description, icon, image, features, link }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[400px] cursor-pointer group perspective"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Front of the card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-3/5 w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 bg-primary-gold dark:bg-primary rounded-full flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-2xl font-serif text-white text-center mb-2">
                {title}
              </h3>
              <div className="w-12 h-1 bg-primary-gold dark:bg-primary" />
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-serif text-primary dark:text-primary-gold mb-4 text-center">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              {description}
            </p>
            <ul className="space-y-2 mb-8 flex-grow">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-primary-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={link}
              className="block w-full py-3 text-center bg-primary dark:bg-primary-gold text-white dark:text-black rounded-full hover:opacity-90 transition-opacity"
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
