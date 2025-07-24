'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);

  // On mount, read theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(storedTheme === 'dark' || (!storedTheme && systemPrefersDark));
    setMounted(true);
  }, []);

  // Apply theme to <html> tag
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
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle Theme"
      className={`p-2 rounded-full transition-all duration-300 hover:scale-110
        ${dark ? 'text-yellow-400' : 'text-blue-600'}`}
    >
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
