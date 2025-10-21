'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/projects';
import ProjectModal from './ProjectsModal';

// Define the project type
interface Project {
  title: string;
  description: string;
  details: string;
  tech: string[];
  github: string;
  demo: string;
  image?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-24 
      bg-gradient-to-br from-[#f7f2ff] via-[#f1e6ff] to-[#f8f5ff]
      dark:from-[#0d001a] dark:via-[#1a0833] dark:to-[#150027]
      transition-colors duration-500"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-12 
        bg-gradient-to-r from-[#9b5de5] via-[#c77dff] to-[#6c63ff] 
        bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
            className="relative bg-[#f9f6ff] dark:bg-[#120021] 
              rounded-2xl border border-transparent 
              hover:border-[#9b5de5]/60 hover:shadow-[0_0_25px_#9b5de5]/30 
              transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Image */}
            {project.image && (
              <div className="w-full h-52 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d001a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#3c1361] dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium 
                    bg-[#f0e6ff] text-[#7a00ff] 
                    dark:bg-[#9b5de5]/20 dark:text-[#d4b3ff] 
                    px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9b5de5] hover:text-[#c77dff] hover:underline flex items-center gap-1 text-sm"
                  onClick={e => e.stopPropagation()}
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c77dff] hover:text-[#9b5de5] hover:underline flex items-center gap-1 text-sm"
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          {...selectedProject}
        />
      )}
    </section>
  );
}
