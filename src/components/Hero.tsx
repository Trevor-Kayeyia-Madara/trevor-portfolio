import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "../components/ui/button"; // 

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start px-6 md:px-24 bg-primary text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Trevor Madara Kayeyia
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-xl md:text-2xl text-accent mb-6 max-w-xl"
      >
        Software Developer building high-performance, beautiful web experiences.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <a href="#projects">
          <Button variant="default" className="flex items-center gap-2">
            View Projects <ArrowRight className="h-4 w-4" />
          </Button>
        </a>

        <a href="/TREVOR MADARA KAYEYIA CURRICULUM VITAE.pdf" download>
          <Button variant="outline" className="flex items-center gap-2">
            Download Resume <Download className="h-4 w-4" />
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
