'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Smartphone,
  ShieldCheck,
  Settings2,
  Sparkles,
} from 'lucide-react';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-24 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 dark:from-purple-950 dark:via-black dark:to-fuchsia-900/10 transition-colors duration-700 overflow-hidden"
    >
      {/* Decorative blurred orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl dark:bg-purple-700/30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-400/20 rounded-full blur-3xl dark:bg-fuchsia-800/20"></div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-400 text-center"
      >
        Tech Stack & Tools
      </motion.h2>

      {/* Skill Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} index={index} />
        ))}
      </div>
    </section>
  );
}

const skillsData = [
  {
    icon: <Code className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    icon: <Server className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Ruby on Rails', 'Python', 'Java'],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    title: 'Mobile',
    items: ['React Native', 'Expo', 'Flutter (basic)', 'Kotlin'],
  },
  {
    icon: <Settings2 className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    title: 'DevOps & Tools',
    items: ['Git & GitHub', 'Docker', 'CI/CD', 'Firebase', 'Vercel'],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    title: 'Security',
    items: ['Penetration Testing', 'Burp Suite', 'OWASP ZAP', 'Nmap'],
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    title: 'Other Skills',
    items: ['Agile & Scrum', 'Consultancy', 'Documentation', 'Problem Solving'],
  },
];

function SkillCard({
  icon,
  title,
  items,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-purple-200/40 dark:border-purple-800/50 backdrop-blur-xl shadow-md dark:shadow-purple-500/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-100/70 dark:bg-purple-900/30 rounded-lg group-hover:rotate-6 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      <ul className="space-y-2 mt-3 text-gray-700 dark:text-gray-300 text-sm">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
