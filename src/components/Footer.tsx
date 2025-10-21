'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative py-12 px-6 md:px-24 mt-24 
        bg-gradient-to-b from-[#f8f5ff] to-white 
        dark:from-[#0a0013] dark:to-[#1b0033] 
        border-t border-transparent 
        [border-image:linear-gradient(to_right,#9b5de5,#c77dff)_1] 
        transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* © + Branding */}
        <div className="text-sm text-gray-700 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold bg-gradient-to-r from-[#9b5de5] to-[#c77dff] bg-clip-text text-transparent">
            Trevor Madara Kayeyia
          </span>
          . All rights reserved.
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a
            href="#about"
            className="hover:text-[#9b5de5] dark:hover:text-[#c77dff] transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-[#9b5de5] dark:hover:text-[#c77dff] transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[#9b5de5] dark:hover:text-[#c77dff] transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-[#9b5de5] dark:text-[#c77dff]">
          <a
            href="https://github.com/trevormadara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-[#c77dff] transition-transform"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/trevormadara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-[#c77dff] transition-transform"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:trevormadarakayeyia@gmail.com"
            className="hover:scale-110 hover:text-[#c77dff] transition-transform"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </motion.div>

      {/* Floating Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 
          bg-gradient-to-r from-[#9b5de5] to-[#c77dff] 
          text-white p-3 rounded-full 
          shadow-[0_0_20px_rgba(155,93,229,0.4)] 
          hover:shadow-[0_0_25px_rgba(155,93,229,0.6)] 
          z-50 transition-all"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} />
      </motion.button>

      {/* Subtle animated top glow line (optional aesthetic touch) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9b5de5] via-[#c77dff] to-[#9b5de5]"
      />
    </footer>
  );
}
