"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaSmile, FaCrown, FaStar, FaCertificate, FaTrophy, FaGraduationCap } from 'react-icons/fa';

interface Statistic {
  label: string;
  value: number;
  icon: React.ReactNode;
  description: string;
}

const statistics: Statistic[] = [
  {
    label: 'Happy Clients',
    value: 500,
    icon: <FaSmile className="w-8 h-8 text-primary-gold" />,
    description: 'Satisfied customers and counting'
  },
  {
    label: 'Bridal Makeovers',
    value: 200,
    icon: <FaCrown className="w-8 h-8 text-primary-gold" />,
    description: 'Beautiful brides transformed'
  },
  {
    label: 'Celebrity Clients',
    value: 25,
    icon: <FaStar className="w-8 h-8 text-primary-gold" />,
    description: 'High-profile transformations'
  },
  {
    label: 'Years Experience',
    value: 10,
    icon: <FaCertificate className="w-8 h-8 text-primary-gold" />,
    description: 'Professional expertise'
  },
  {
    label: 'Awards Won',
    value: 15,
    icon: <FaTrophy className="w-8 h-8 text-primary-gold" />,
    description: 'Industry recognition'
  },
  {
    label: 'Masterclasses',
    value: 50,
    icon: <FaGraduationCap className="w-8 h-8 text-primary-gold" />,
    description: 'Training sessions conducted'
  }
];

function CountUp({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const durationMs = duration * 1000; // convert to milliseconds
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / durationMs;
      
      if (progress < 1) {
        setCount(Math.floor(progress * end));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, isInView]);

  return (
    <span ref={ref} className="text-4xl font-bold text-primary-gold">
      {count}
    </span>
  );
}

export default function StatisticsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                {stat.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {stat.label}
                </h3>
              </div>
              <div className="relative h-20">
                <motion.span
                  className="text-4xl font-bold text-primary-gold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <CountUp end={stat.value} duration={2} />
                </motion.span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
