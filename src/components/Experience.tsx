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
      'Worked with email protocols, penetration testing, and security evaluations for internal tools.',
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
      className="py-24 px-6 md:px-24 
        bg-gradient-to-b from-[#f8f5ff] to-white 
        dark:from-[#0a0013] dark:to-[#1b0033]
        transition-colors duration-500"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center 
          bg-gradient-to-r from-[#9b5de5] via-[#c77dff] to-[#6c63ff] 
          bg-clip-text text-transparent"
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
            className="relative p-6 rounded-2xl 
              bg-white/80 dark:bg-[#120022]/50 
              backdrop-blur-lg 
              border border-purple-200 dark:border-purple-800/60 
              shadow-md hover:shadow-[0_0_20px_rgba(155,93,229,0.3)] 
              transition-all duration-300"
          >
            {/* Icon */}
            <div className="absolute top-4 right-4 text-[#9b5de5] dark:text-[#c77dff]">
              <Briefcase size={22} />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {exp.role}
            </h3>

            <p className="text-sm font-medium text-[#9b5de5] dark:text-[#c77dff] mb-2">
              {exp.company}
            </p>

            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-4">
              {exp.period}
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {exp.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium 
                    bg-gradient-to-r from-[#e7d6ff] to-[#f3e8ff] 
                    dark:from-[#2d004d] dark:to-[#40006b] 
                    text-[#6c63ff] dark:text-[#c77dff] 
                    rounded-full shadow-sm"
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
