'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Mail } from 'lucide-react';
import { FaGithub,  FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-24 bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        About Me
      </motion.h2>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl max-w-3xl text-gray-700 dark:text-gray-300 mb-10"
      >
        I'm <strong>Trevor Madara Kayeyia</strong>, a Software Developer focused on delivering sleek, scalable, and
        efficient digital experiences. I’m always exploring the edge of modern web technologies and love turning ideas
        into polished UI and powerful backends.
      </motion.p>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 mb-12"
      >
        {/* Animated Stats */}
        <div className="flex flex-col gap-6">
          <Counter label="Years of Experience" value={5} />
          <Counter label="Projects Completed" value={20} />
          <Counter label="Technologies Mastered" value={15} />
        </div>

        {/* Soft Skills */}
        {/* Soft Skills */}
        <div className="space-y-4">
        <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
            <Sparkles className="h-5 w-5" /> Key Strengths & Skills
        </h3>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>💻 Full-Stack Development</li>
            <li>📋 Project Management</li>
            <li>🤝 Collaboration & Teamwork</li>
            <li>🧠 Problem-Solving & Critical Thinking</li>
            <li>📱 Mobile App Development</li>
            <li>🔐 Penetration Testing</li>
            <li>🧭 Technical Consultancy</li>
        </ul>
        </div>
      </motion.div>

      {/* Education & Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start gap-8"
      >
        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-2 mb-2">
            <GraduationCap className="h-5 w-5" /> Education
          </h3>
          <div className="text-gray-700 dark:text-gray-300">
            <p className="font-medium">BSc. Information Security & Forensics</p>
            <p>KCA University</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2021 – 2025</p>
          </div>
          <div className="text-gray-700 dark:text-gray-300">
            <p className="font-medium">Certificate of Software Engineering</p>
            <p>Moringa School</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2022 – 2023</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/Trevor-Kayeyia-Madara"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/trevor-madara/"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:trevormadarakayeyia@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* 👇 Animated Counter Component */
function Counter({ label, value }: { label: string; value: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">{value}+</p>
      <p className="text-lg text-gray-800 dark:text-gray-300">{label}</p>
    </motion.div>
  );
}
