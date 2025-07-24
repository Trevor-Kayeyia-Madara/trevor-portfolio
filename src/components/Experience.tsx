'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2022 – Present',
    description: 'Built web apps and contributed to open-source projects across JavaScript, TypeScript, React, Node.js, and more.',
  },
  {
    role: 'Cyber Sec Intern',
    company: 'UserCare',
    period: 'Sep 2024  – Dec 2024',
    description: 'Dealing with Email Protocols ',
  },
  {
    role: 'Software Consultant Intern',
    company: 'Computer Pride',
    period: 'May 2025  – Present',
    description: 'Dealing with ERP and any Business Software Solution',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-24 bg-white dark:bg-black transition-colors"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
      >
        Experience
      </motion.h2>

      <div className="relative border-l-2 border-cyan-300 dark:border-cyan-600 pl-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="mb-12 relative"
          >
            {/* Dot & Icon */}
            <div className="absolute -left-4 top-1">
              <div className="w-6 h-6 bg-cyan-500 dark:bg-cyan-400 rounded-full flex items-center justify-center text-white shadow-md">
                <Briefcase size={14} />
              </div>
            </div>

            {/* Experience Content */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {exp.role} <span className="text-cyan-600 dark:text-cyan-400">@ {exp.company}</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.period}</p>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
