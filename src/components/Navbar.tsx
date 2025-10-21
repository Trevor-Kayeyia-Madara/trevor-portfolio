'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = links.map(link => {
        const el = document.querySelector(link.href);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return { name: link.name, top: rect.top };
      });

      const current = sections.find(s => s && s.top < window.innerHeight / 2);
      if (current) setActive(current.name);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-4 backdrop-blur-xl border-b transition-all duration-500 ${
        isScrolled
          ? "bg-white/60 dark:bg-black/50 border-purple-300/20 dark:border-purple-500/30 shadow-[0_0_15px_rgba(155,93,229,0.25)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-between transition-all duration-300">
        {/* 🌟 Logo */}
        <a
          href="#hero"
          className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          Trevor Kayeyia
        </a>

        {/* 💠 Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-800 dark:text-gray-100">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`relative transition-all duration-300 hover:text-purple-500 dark:hover:text-purple-400 ${
                active === link.name
                  ? "text-purple-600 dark:text-purple-400 font-semibold after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-fuchsia-400 after:rounded-full"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* 🌗 Theme + Menu */}
        <div className="flex items-center gap-4">
          <div className="hover:scale-110 transition-transform">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 dark:text-gray-100 hover:text-purple-500 dark:hover:text-purple-400 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium bg-gradient-to-b from-purple-900/30 to-fuchsia-800/20 backdrop-blur-xl p-6 rounded-2xl border border-purple-400/20 shadow-[0_0_20px_rgba(155,93,229,0.2)]"
        >
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`transition-all duration-300 hover:text-purple-400 ${
                active === link.name
                  ? "text-purple-400 font-semibold"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
