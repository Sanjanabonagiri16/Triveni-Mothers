import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Fashion Portfolio Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl text-white space-y-8">
          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block">Transforming</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-gold to-primary-light bg-clip-text text-transparent">
                Elegance into Reality
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            Elevate your style with expert fashion design, makeup artistry,
            hairstyling, and innovative saree draping services.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="px-8 py-3 bg-primary-gold text-white rounded-full hover:bg-primary-gold/90 transition-all transform hover:scale-105"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all transform hover:scale-105"
            >
              Book Consultation
            </a>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-white/20"
          >
            {['Fashion Design', 'Makeup Artistry', 'Hairstyling', 'Saree Draping'].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-serif text-lg text-primary-gold mb-2">{service}</h3>
                <div className="w-12 h-1 bg-primary-gold mx-auto rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-t from-primary-gold/20 via-transparent to-transparent pointer-events-none"
      />
    </section>
  );
}
