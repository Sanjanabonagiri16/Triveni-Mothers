import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

export default function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-primary via-primary-gold to-primary"
        >
          <div className="container-custom">
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-8">
                <h3 className="text-xl font-serif text-white mb-2">
                  Ready to Transform Your Look?
                </h3>
                <p className="text-white/90">
                  Book a consultation today and let's create something beautiful together!
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link
                  href="/booking"
                  className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-full overflow-hidden transition-transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    Book Now
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <FaArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-primary-gold"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: 'tween', ease: 'easeInOut' }}
                  />
                </Link>
                
                <button
                  onClick={handleDismiss}
                  className="p-2 text-white/80 hover:text-white transition-colors"
                  aria-label="Dismiss banner"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
