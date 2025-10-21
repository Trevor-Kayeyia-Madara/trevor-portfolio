'use client';

import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function FloatingContact() {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full
                 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-400
                 text-white font-medium shadow-lg shadow-purple-500/30
                 hover:shadow-purple-500/50 backdrop-blur-md
                 transition-all duration-300"
      aria-label="Contact Me"
    >
      <FaPaperPlane className="animate-bounce-slow" />
      <span>Contact</span>
    </motion.a>
  );
}

/* 💜 Optional: Add this custom animation to your globals.css or Tailwind config */
