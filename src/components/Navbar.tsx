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
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-4 backdrop-blur-md border-b transition-all ${
        isScrolled
          ? "bg-white/70 dark:bg-black/70 border-gray-200 dark:border-gray-800 shadow"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold text-cyan-600 dark:text-cyan-400 tracking-tight"
        >
          Trevor Kayeyia
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-800 dark:text-gray-100">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 ${
                active === link.name ? "text-cyan-600 dark:text-cyan-400 font-semibold" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 dark:text-gray-100"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium text-gray-800 dark:text-gray-100"
        >
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 ${
                active === link.name ? "text-cyan-600 dark:text-cyan-400 font-semibold" : ""
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
