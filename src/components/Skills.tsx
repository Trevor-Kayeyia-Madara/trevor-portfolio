'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Smartphone,
  ShieldCheck,
  Settings2,
} from 'lucide-react';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-24 bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
      >
        Tech Stack & Tools
      </motion.h2>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <SkillCard
          icon={<Code className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
          title="Frontend"
          items={['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']}
        />

        <SkillCard
          icon={<Server className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
          title="Backend"
          items={['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs','Ruby on Rails', 'Python','Java']}
        />

        <SkillCard
          icon={<Smartphone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
          title="Mobile"
          items={['React Native', 'Expo', 'Flutter (basic)', 'Kotlin']}
        />

        <SkillCard
          icon={<Settings2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
          title="DevOps & Tools"
          items={['Git & GitHub', 'Docker', 'CI/CD', 'Firebase', 'Vercel']}
        />

        <SkillCard
          icon={<ShieldCheck className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
          title="Security"
          items={['Penetration Testing', 'Burp Suite', 'OWASP ZAP', 'Nmap']}
        />

        <SkillCard
          icon={<SparkleIcon />}
          title="Other Skills"
          items={['Agile & Scrum', 'Consultancy', 'Documentation', 'Problem Solving']}
        />
      </div>
    </section>
  );
}

function SkillCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md dark:shadow-xl border border-gray-200 dark:border-gray-800"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

// Optional sparkle icon if you don't want to use another Lucide icon
function SparkleIcon() {
  return (
    <svg
      className="w-6 h-6 text-cyan-600 dark:text-cyan-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v3m6.364 1.636l-2.121 2.121m4.95 4.95h-3M17.657 18.364l-2.121-2.121M12 21v-3M6.343 18.364l2.121-2.121M3 12h3M6.343 5.636l2.121 2.121"
      />
    </svg>
  );
}
