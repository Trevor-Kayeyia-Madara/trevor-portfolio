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
        bg-gradient-to-br from-[#0d001a] via-[#1a0833] to-[#150027]
        dark:from-black dark:via-[#0a0013] dark:to-[#1a0833]
        transition-colors duration-500 overflow-hidden"
    >
      {/* ✨ Stars */}
      <StarsBackground />

      {/* 🌗 Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* 💠 Purple Glow */}
      <div
        className="absolute -z-10 right-[-20%] top-[25%] w-[600px] h-[600px] rounded-full
        bg-[#9b5de5] blur-3xl transition-opacity duration-500
        opacity-0 dark:opacity-25"
      />

      {/* 👤 Profile Image */}
      <motion.img
        src="/IMG2.jpg"
        alt="Trevor Madara Kayeyia"
        width={280}
        height={280}
        className="mt-10 md:absolute md:right-24 md:top-1/2 md:-translate-y-1/2
          rounded-full shadow-xl border-4 border-[#9b5de5] 
          shadow-[0_0_40px_#9b5de5]/40"
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
            bg-gradient-to-r from-[#9b5de5] via-[#c77dff] to-[#6c63ff]"
        >
          Trevor Madara Kayeyia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-2xl max-w-xl mb-8 text-gray-300"
        >
          Software Developer crafting sleek, scalable, and performant digital experiences.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {/* 🔮 Primary Button */}
          <a href="#projects">
            <Button className="bg-[#9b5de5] hover:bg-[#a06bf5] text-white 
              shadow-[0_0_20px_#9b5de5]/40 transition-all">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          {/* 📄 Secondary Button */}
          <a href="/TREVOR MADARA KAYEYIA CURRICULUM VITAE.pdf" download>
            <Button
              variant="outline"
              className="border-[#9b5de5] text-[#9b5de5] hover:bg-[#9b5de5]/10 
                dark:border-[#c77dff] dark:text-[#c77dff] dark:hover:bg-[#9b5de5]/10
                transition-all"
            >
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
