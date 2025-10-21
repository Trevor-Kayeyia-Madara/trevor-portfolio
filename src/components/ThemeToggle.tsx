'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);

  // 🧠 Check system preference & local storage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(storedTheme === 'dark' || (!storedTheme && prefersDark));
    setMounted(true);
  }, []);

  // 🌗 Apply theme class to <html>
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark, mounted]);

  if (!mounted) return null;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className={`
        relative p-3 rounded-full transition-all duration-300 
        shadow-md hover:shadow-lg 
        bg-gradient-to-tr 
        ${dark 
          ? 'from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:to-fuchsia-500' 
          : 'from-violet-200 via-fuchsia-200 to-pink-100 hover:from-violet-300 hover:to-fuchsia-200'}
      `}
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Sun className="w-5 h-5 text-yellow-200 drop-shadow-glow" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Moon className="w-5 h-5 text-purple-700" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✨ Subtle outer glow ring */}
      <motion.span
        className="absolute inset-0 rounded-full blur-md"
        animate={{
          opacity: dark ? 0.6 : 0.3,
          scale: dark ? [1, 1.05, 1] : [1, 0.95, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)'
            : 'radial-gradient(circle, rgba(192,132,252,0.2), transparent 70%)',
        }}
      />
    </motion.button>
  );
}
