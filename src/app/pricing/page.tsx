import { Metadata } from 'next';
import PricingCards from '@/components/PricingCards';
import { FaCheck } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Pricing | Your Fashion Portfolio',
  description: 'Explore our service packages and choose the perfect option for your needs.',
};

const additionalFeatures = [
  'Free consultation for all packages',
  'Premium quality products',
  'Experienced professionals',
  'Flexible scheduling',
  'Post-service support',
  'Satisfaction guaranteed',
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Pricing Cards */}
      <PricingCards />

      {/* Additional Features */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">
              All Plans Include
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Every package comes with our standard premium features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary-gold/10 flex items-center justify-center">
                    <FaCheck className="w-4 h-4 text-primary-gold" />
                  </div>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How far in advance should I book?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We recommend booking at least 2-3 weeks in advance for regular services, and 1-2 months for bridal packages to ensure availability.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Can I customize my package?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! We offer customization options for all our packages. Contact us to discuss your specific requirements.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Do you offer trials?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer trials for bridal packages. This helps ensure we achieve your desired look for your special day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
