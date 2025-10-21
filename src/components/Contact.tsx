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
          colors: ['#9b5de5', '#c77dff', '#6c63ff'],
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
      className="py-24 px-6 md:px-24 
        bg-gradient-to-b from-[#f8f5ff] to-white 
        dark:from-[#0a0013] dark:to-[#1b0033] 
        transition-colors duration-500"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold mb-12 
          bg-gradient-to-r from-[#9b5de5] via-[#c77dff] to-[#6c63ff] 
          bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          action="https://formspree.io/f/meozayvg"
          method="POST"
          className="grid gap-6 p-6 rounded-xl shadow-xl 
            bg-white/70 dark:bg-[#120022]/60 backdrop-blur-lg 
            border border-purple-200 dark:border-purple-900"
        >
          <InputField label="Name" name="name" type="text" required />
          <InputField label="Email" name="email" type="email" required />
          <TextArea label="Message" name="message" required />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.96 }}
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 
              bg-gradient-to-r from-[#9b5de5] to-[#6c63ff] 
              hover:from-[#c77dff] hover:to-[#9b5de5] 
              text-white font-semibold px-6 py-3 rounded-md shadow-lg 
              transition-all"
          >
            <FaPaperPlane />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center 
            dark:bg-[#120022]/60 bg-purple-50/70 
            border border-purple-200 dark:border-purple-900 
            rounded-xl shadow-xl p-8 backdrop-blur-lg"
        >
          <h3
            className="text-2xl font-semibold mb-4 
              bg-gradient-to-r from-[#9b5de5] to-[#c77dff] 
              bg-clip-text text-transparent"
          >
            Get in Touch
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Whether you’re looking to collaborate, need a developer for a project, or just want to say hi — my inbox is always open.
          </p>

          <div className="flex gap-5 text-2xl text-[#9b5de5] dark:text-[#c77dff] mt-2">
            <SocialLink href="https://github.com/trevormadara" icon={<FaGithub />} />
            <SocialLink href="https://linkedin.com/in/trevormadara" icon={<FaLinkedin />} />
            <SocialLink href="mailto:trevormadarakayeyia@gmail.com" icon={<FaTwitter />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* 🧩 Input Field Component */
function InputField({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 border rounded-md 
          bg-white/90 dark:bg-[#0a0013]/70 
          border-purple-300 dark:border-purple-900 
          text-gray-800 dark:text-gray-100 
          focus:ring-2 focus:ring-[#9b5de5] 
          transition-all"
      />
    </div>
  );
}

/* 🧩 Text Area Component */
function TextArea({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
        {label}
      </label>
      <textarea
        name={name}
        rows={5}
        required={required}
        className="w-full px-4 py-3 border rounded-md 
          bg-white/90 dark:bg-[#0a0013]/70 
          border-purple-300 dark:border-purple-900 
          text-gray-800 dark:text-gray-100 
          focus:ring-2 focus:ring-[#9b5de5] 
          transition-all"
      />
    </div>
  );
}

/* 🧩 Social Link Component */
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#c77dff] hover:scale-110 
        transition-transform drop-shadow-[0_0_8px_rgba(155,93,229,0.4)]"
    >
      {icon}
    </a>
  );
}
