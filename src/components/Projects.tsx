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
      className="py-24 px-6 md:px-24 bg-white dark:bg-black transition-colors"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
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
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Image */}
            {project.image && (
              <div className="w-full h-52 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
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
                    className="text-xs font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300 px-2 py-1 rounded"
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
                  className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 text-sm"
                  onClick={e => e.stopPropagation()}
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 text-sm"
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
