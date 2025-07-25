import { FaPaperPlane } from 'react-icons/fa';

export default function FloatingContact() {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all"
    >
      <FaPaperPlane />
      Contact
    </a>
  );
}
