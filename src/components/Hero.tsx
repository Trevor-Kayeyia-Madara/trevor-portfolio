'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import StarsBackground from './StarsBackground';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-24
        bg-gradient-to-br from-blue-50 via-cyan-50 to-white
        dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-gray-800
        transition-colors duration-500 overflow-hidden"
    >
      {/* ✨ Stars */}
      <StarsBackground />

      {/* 🌗 Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* 💠 Glow (Dark only) */}
      <div
        className="absolute -z-10 right-[-20%] top-[20%] w-[600px] h-[600px] rounded-full
        bg-cyan-500 blur-3xl transition-opacity duration-500
        opacity-0 dark:opacity-20"
      />

      {/* 👤 Profile Image */}
      <motion.img
        src="/IMG2.jpg"
        alt="Trevor Madara Kayeyia"
        width={280}
        height={280}
        className="mt-10 md:absolute md:right-24 md:top-1/2 md:-translate-y-1/2
          rounded-full shadow-xl border-4 border-cyan-400 dark:border-cyan-600"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />

      {/* 🌀 Parallax Content */}
      <motion.div style={{ y }} className="z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent
            bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-500
            dark:from-purple-300 dark:via-cyan-400 dark:to-blue-500"
        >
          Trevor Madara Kayeyia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-2xl max-w-xl mb-8 text-gray-800 dark:text-gray-300"
        >
          Software Developer crafting sleek, scalable, and performant digital experiences.
        </motion.p>

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
      </motion.div>
    </section>
  );
}
