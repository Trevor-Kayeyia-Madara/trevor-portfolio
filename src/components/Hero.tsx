'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-24
        bg-gradient-to-br from-blue-50 via-cyan-50 to-white
        dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-gray-800
        transition-colors duration-500 overflow-hidden"
    >
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Glow Effect (Dark mode only) */}
      <div
        className="absolute -z-10 right-[-20%] top-[20%] w-[600px] h-[600px] rounded-full
        bg-cyan-500 blur-3xl transition-opacity duration-500
        opacity-0 dark:opacity-20"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent
          dark:bg-gradient-to-r dark:from-purple-300 dark:via-cyan-400 dark:to-blue-500
          bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-500"
      >
        Trevor Madara Kayeyia
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg md:text-2xl max-w-xl mb-8 text-gray-800 dark:text-gray-300"
      >
        Software Developer crafting sleek, scalable, and performant digital experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <a href="#projects">
          <Button className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-md">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>

        <a href="/TREVOR MADARA KAYEYIA CURRICULUM VITAE.pdf" download>
          <Button
            variant="outline"
            className="border-cyan-600 text-cyan-700 hover:bg-cyan-50
              dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-800/10"
          >
            Download Resume <Download className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
