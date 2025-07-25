'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        form.reset();
      } else {
        toast.error('Something went wrong. Try again.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-24 bg-white dark:bg-black transition-colors"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          action="https://formspree.io/f/meozayvg"
          method="POST"
          className="grid gap-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.96 }}
            disabled={isSubmitting}
            className="bg-cyan-600 text-white px-6 py-2 rounded-md shadow hover:bg-cyan-500 transition-colors flex items-center gap-2"
          >
            <FaPaperPlane />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center dark:bg-gray-900 bg-gray-50 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm open to freelance work, collaborations, or a simple hello.
          </p>

          <div className="flex gap-4 text-xl text-cyan-600 dark:text-cyan-400 mt-4">
            <a
              href="https://github.com/trevormadara"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/trevormadara"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:trevormadarakayeyia@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
