'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-24 
        bg-gradient-to-b from-[#f8f5ff] to-white 
        dark:from-[#0a0013] dark:to-[#1b0033] 
        transition-colors duration-500"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-8 
          bg-gradient-to-r from-[#9b5de5] via-[#c77dff] to-[#6c63ff] 
          bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl max-w-3xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed"
      >
        I'm <strong className="text-[#9b5de5]">Trevor Madara Kayeyia</strong>, a Software Developer passionate about building sleek, scalable, and
        efficient digital experiences. I love turning ideas into performant, well-crafted interfaces and reliable backends that empower users and teams alike.
      </motion.p>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 mb-16"
      >
        {/* Animated Stats */}
        <div className="flex flex-col gap-6">
          <Counter label="Years of Experience" value={5} />
          <Counter label="Projects Completed" value={20} />
          <Counter label="Technologies Mastered" value={15} />
        </div>

        {/* Skills */}
        <div className="space-y-5">
          <h3
            className="text-xl font-semibold flex items-center gap-2 
              bg-gradient-to-r from-[#9b5de5] to-[#c77dff] bg-clip-text text-transparent"
          >
            <Sparkles className="h-5 w-5 text-[#9b5de5]" />
            Key Strengths & Skills
          </h3>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {[
              'Full-Stack Development',
              'Project Management',
              'Collaboration & Teamwork',
              'Problem-Solving & Critical Thinking',
              'Mobile App Development',
              'Penetration Testing',
              'Technical Consultancy',
            ].map((skill, index) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="text-[#9b5de5]">•</span> {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Education + Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start gap-10"
      >
        {/* Education */}
        <div className="space-y-6">
          <h3
            className="text-xl font-semibold flex items-center gap-2 
              bg-gradient-to-r from-[#9b5de5] to-[#c77dff] bg-clip-text text-transparent"
          >
            <GraduationCap className="h-5 w-5 text-[#9b5de5]" />
            Education
          </h3>

          {/* Cards */}
          <div
            className="border border-purple-200 dark:border-purple-900 rounded-lg p-5 
              hover:shadow-[0_0_15px_rgba(155,93,229,0.2)] transition"
          >
            <p className="font-medium text-gray-900 dark:text-gray-100">
              BSc. Information Security & Forensics
            </p>
            <p className="text-gray-700 dark:text-gray-300">KCA University</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2021 – 2025</p>
          </div>

          <div
            className="border border-purple-200 dark:border-purple-900 rounded-lg p-5 
              hover:shadow-[0_0_15px_rgba(155,93,229,0.2)] transition"
          >
            <p className="font-medium text-gray-900 dark:text-gray-100">
              Certificate of Software Engineering
            </p>
            <p className="text-gray-700 dark:text-gray-300">Moringa School</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2022 – 2023</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/Trevor-Kayeyia-Madara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-[#c77dff] hover:scale-110 
              drop-shadow-[0_0_6px_rgba(155,93,229,0.4)] transition-transform"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/trevor-madara/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-[#c77dff] hover:scale-110 
              drop-shadow-[0_0_6px_rgba(155,93,229,0.4)] transition-transform"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:trevormadarakayeyia@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-[#c77dff] hover:scale-110 
              drop-shadow-[0_0_6px_rgba(155,93,229,0.4)] transition-transform"
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
      <p
        className="text-4xl font-bold text-[#9b5de5] drop-shadow-[0_0_15px_rgba(155,93,229,0.3)]"
      >
        {value}+
      </p>
      <p className="text-lg text-gray-800 dark:text-gray-300">{label}</p>
    </motion.div>
  );
}
