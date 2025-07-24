/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';

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
        form.reset();
      } else {
        toast.error('Something went wrong. Try again.');
      }
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

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        onSubmit={handleSubmit}
        action="https://formspree.io/f/meozayvg"
        method="POST"
        className="grid gap-6 max-w-2xl"
      >
        {/* Name */}
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 group-hover:shadow"
          />
        </div>

        {/* Email */}
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
          />
        </div>

        {/* Message */}
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
          />
        </div>

        {/* Submit */}
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
    </section>
  );
}
