import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const achievements = [
    {
      title: 'Professional Certifications',
      items: [
        'Advanced Fashion Design - National Institute of Fashion Technology',
        'Professional Makeup Artistry - International Makeup Academy',
        'Master Hair Styling Certification - L\'Oréal Professionnel',
        'Traditional & Contemporary Saree Draping'
      ]
    },
    {
      title: 'Awards & Recognition',
      items: [
        'Best Bridal Makeup Artist 2023 - Wedding Style Awards',
        'Innovation in Fashion Design 2022',
        'Featured in Vogue India',
        'Celebrity Style Collaborations'
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-accent-pearl dark:bg-neutral-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-elegant from-primary-gold/20 via-transparent to-transparent rounded-tr-[100px] rounded-bl-[100px] transform -rotate-3" />
              <div className="absolute inset-0 bg-gradient-elegant from-primary/20 via-transparent to-transparent rounded-tr-[100px] rounded-bl-[100px] transform rotate-3" />
              <div className="relative h-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-image.jpg"
                  alt="Professional Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Title */}
            <div className="space-y-4">
              <motion.h2 
                className="font-serif text-4xl md:text-5xl text-primary dark:text-primary-gold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>
              <div className="w-24 h-1 bg-primary-gold rounded-full" />
            </div>

            {/* Personal Philosophy Quote */}
            <blockquote className="relative pl-6 border-l-4 border-primary-gold">
              <p className="text-lg italic text-primary dark:text-gray-300">
                "My passion lies in creating transformative experiences that make every client feel uniquely beautiful and confident."
              </p>
            </blockquote>

            {/* Biography */}
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                With over a decade of experience in the fashion and beauty industry, 
                I've dedicated my career to helping people look and feel their absolute best. 
                My journey began with a deep passion for creativity and a desire to transform 
                lives through the art of fashion and beauty.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I specialize in creating personalized experiences that reflect each client's 
                unique personality and style. From designing the perfect outfit to crafting 
                stunning makeup looks and innovative saree drapes, every service is tailored 
                to exceed expectations.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              {achievements.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-xl text-primary-dark dark:text-primary-gold">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-gold rounded-full" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-6"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary-gold text-white rounded-full hover:bg-primary-gold/90 transition-all transform hover:scale-105"
              >
                Book a Consultation
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
