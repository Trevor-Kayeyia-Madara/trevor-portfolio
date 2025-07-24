import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-black py-10 px-6 md:px-24 border-t border-gray-200 dark:border-gray-800 mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Name + Copyright */}
        <div className="text-sm text-gray-700 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Trevor Madara Kayeyia. All rights reserved.
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-cyan-600 dark:text-cyan-400">
          <a href="https://github.com/trevormadara" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/trevormadara" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:trevormadarakayeyia@gmail.com" className="hover:text-cyan-400">
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg z-50 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </button>
      </motion.div>
    </footer>
  );
}
