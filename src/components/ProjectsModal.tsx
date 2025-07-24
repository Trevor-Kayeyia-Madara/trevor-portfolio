'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  details: string;
  tech: string[];
  image?: string;
  github: string;
  demo: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  details,
  tech,
  image,
  github,
  demo
}: ProjectModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0" 
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100" 
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
        </Transition.Child>

        {/* Panel */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95" 
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100" 
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title className="text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                  </Dialog.Title>
                  <button onClick={onClose}>
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-red-500" />
                  </button>
                </div>

                {image && (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                )}

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 text-sm mb-4">{details}</pre>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-cyan-100 dark:bg-cyan-800/30 text-cyan-700 dark:text-cyan-300 text-xs font-medium px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    🌐 Live Demo
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    🐙 GitHub
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
