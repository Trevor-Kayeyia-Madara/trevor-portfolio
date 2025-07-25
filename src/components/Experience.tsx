'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2022 – Present',
    description:
      'Built web apps and contributed to open-source projects across JavaScript, TypeScript, React, Node.js, and more.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    role: 'Cyber Sec Intern',
    company: 'UserCare',
    period: 'Sep 2024 – Dec 2024',
    description:
      'Worked with email protocols, penetration testing and security evaluations for internal tools.',
    tags: ['Email Security', 'PenTesting', 'Linux', 'SMTP'],
  },
  {
    role: 'Software Consultant Intern',
    company: 'Computer Pride',
    period: 'May 2025 – Present',
    description:
      'Supporting ERP systems and advising clients on customized business software solutions.',
    tags: ['ERP', 'Consultancy', 'Client Support', 'Problem Solving'],
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
        className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white"
      >
        Experience
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative p-6 rounded-2xl border border-cyan-100 dark:border-cyan-800/40 bg-white/70 dark:bg-black/30 backdrop-blur-md shadow-md dark:shadow-cyan-500/10 hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="absolute top-4 right-4 text-cyan-600 dark:text-cyan-300">
              <Briefcase size={20} />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {exp.role}
            </h3>
            <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-2 font-medium">
              {exp.company}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">{exp.period}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{exp.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-800/30 dark:text-cyan-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
