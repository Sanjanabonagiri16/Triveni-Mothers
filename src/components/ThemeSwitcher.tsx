"use client";

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-primary dark:bg-primary-gold shadow-lg z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {theme === 'dark' ? (
        <FaSun className="w-6 h-6 text-black" />
      ) : (
        <FaMoon className="w-6 h-6 text-white" />
      )}
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
