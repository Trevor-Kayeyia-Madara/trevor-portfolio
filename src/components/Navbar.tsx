import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-4 backdrop-blur-md border-b transition-all ${
        isScrolled
          ? 'bg-white/70 dark:bg-black/70 border-gray-200 dark:border-gray-800 shadow'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-xl font-bold text-cyan-600 dark:text-cyan-400 tracking-tight"
        >
          Trevor Kayeyia
        </a>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Theme Toggle */}
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
