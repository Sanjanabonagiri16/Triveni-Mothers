import { motion } from 'framer-motion';
import { FaCheck, FaCrown, FaGem, FaStar, FaDiamond } from 'react-icons/fa';
import Link from 'next/link';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  icon: React.ReactNode;
  isPopular?: boolean;
  buttonText: string;
  buttonLink: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essential',
    price: '₹4,999',
    description: 'Perfect for special occasions',
    icon: <FaStar className="w-6 h-6" />,
    features: [
      { text: 'Professional Makeup Application', included: true },
      { text: 'Basic Hair Styling', included: true },
      { text: 'Traditional Saree Draping', included: true },
      { text: 'Touch-up Kit', included: true },
      { text: 'Pre-event Consultation', included: false },
      { text: 'Premium Products', included: false },
      { text: 'HD Photography', included: false },
      { text: 'Assistant Stylist', included: false },
    ],
    buttonText: 'Get Started',
    buttonLink: '/booking?tier=essential',
  },
  {
    name: 'Premium',
    price: '₹9,999',
    description: 'Ideal for weddings and photo shoots',
    icon: <FaCrown className="w-6 h-6" />,
    isPopular: true,
    features: [
      { text: 'Professional Makeup Application', included: true },
      { text: 'Advanced Hair Styling', included: true },
      { text: 'Designer Saree Draping', included: true },
      { text: 'Luxury Touch-up Kit', included: true },
      { text: 'Pre-event Consultation', included: true },
      { text: 'Premium Products', included: true },
      { text: 'HD Photography', included: true },
      { text: 'Assistant Stylist', included: false },
      { text: 'Video Coverage', included: false },
    ],
    buttonText: 'Choose Premium',
    buttonLink: '/booking?tier=premium',
  },
  {
    name: 'Luxury',
    price: '₹19,999',
    description: 'Complete bridal package',
    icon: <FaGem className="w-6 h-6" />,
    features: [
      { text: 'Professional Makeup Application', included: true },
      { text: 'Advanced Hair Styling', included: true },
      { text: 'Designer Saree Draping', included: true },
      { text: 'Luxury Touch-up Kit', included: true },
      { text: 'Multiple Consultations', included: true },
      { text: 'Premium Products & Accessories', included: true },
      { text: 'HD Photography & Video', included: true },
      { text: 'Assistant Stylist Team', included: true },
      { text: 'Mehendi Artist', included: true },
    ],
    buttonText: 'Experience Luxury',
    buttonLink: '/booking?tier=luxury',
  },
  {
    name: 'Elite',
    price: '₹29,999',
    description: 'Ultimate luxury experience',
    icon: <FaDiamond className="w-6 h-6" />,
    features: [
      { text: 'Celebrity Makeup Artist', included: true },
      { text: 'Signature Hair Styling', included: true },
      { text: 'Exclusive Saree Collection Access', included: true },
      { text: 'Premium Beauty Kit', included: true },
      { text: 'Unlimited Consultations', included: true },
      { text: 'International Premium Products', included: true },
      { text: '4K Photography & Cinematic Video', included: true },
      { text: 'Dedicated Styling Team', included: true },
      { text: 'Celebrity Mehendi Artist', included: true },
      { text: 'Spa Treatment Package', included: true },
    ],
    buttonText: 'Book Elite Experience',
    buttonLink: '/booking?tier=elite',
  }
];

export default function PricingCards() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-accent-pearl dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-4"
          >
            Choose Your Perfect Package
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Select from our carefully curated packages designed to meet your unique needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${
                tier.isPopular
                  ? 'bg-gradient-to-br from-primary via-primary-gold to-primary shadow-xl scale-105 z-10'
                  : 'bg-white dark:bg-gray-800 shadow-lg'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-white text-primary-gold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`p-8 ${tier.isPopular ? 'text-white' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-serif mb-2 ${
                      tier.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm ${
                      tier.isPopular ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {tier.description}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${
                    tier.isPopular ? 'bg-white/20' : 'bg-primary-gold/10'
                  }`}>
                    {tier.icon}
                  </div>
                </div>

                <div className="mb-8">
                  <span className={`text-4xl font-bold ${
                    tier.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {tier.price}
                  </span>
                  <span className={tier.isPopular ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}>
                    /session
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <span className={`mr-3 ${
                        feature.included
                          ? tier.isPopular
                            ? 'text-white'
                            : 'text-primary-gold'
                          : 'text-gray-400'
                      }`}>
                        {feature.included ? (
                          <FaCheck className="w-5 h-5" />
                        ) : (
                          <span className="block w-5 h-px bg-current" />
                        )}
                      </span>
                      <span className={`${
                        feature.included
                          ? tier.isPopular
                            ? 'text-white'
                            : 'text-gray-900 dark:text-white'
                          : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href={tier.buttonLink}
                  className={`block w-full py-3 px-6 text-center rounded-full transition-transform hover:scale-105 ${
                    tier.isPopular
                      ? 'bg-white text-primary-gold'
                      : 'bg-primary-gold text-white'
                  }`}
                >
                  {tier.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 dark:text-gray-300 mt-12"
        >
          All packages include basic consultation and premium customer support.{' '}
          <Link href="/contact" className="text-primary-gold hover:underline">
            Contact us
          </Link>{' '}
          for custom requirements.
        </motion.p>
      </div>
    </div>
  );
}
