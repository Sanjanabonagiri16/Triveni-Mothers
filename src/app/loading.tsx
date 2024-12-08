"use client";

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <motion.div
        className="relative w-24 h-24"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 border-4 border-primary-gold/30 rounded-full" />
        <div className="absolute inset-0 border-4 border-primary-gold rounded-full border-t-transparent animate-spin" />
      </motion.div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
