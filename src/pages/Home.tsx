import About from "@/components/About";
import Hero from "../components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet";

<Helmet>
  <title>Trevor Madara | Developer Portfolio</title>
  <meta name="description" content="Full-stack developer portfolio — React, Node.js, mobile apps & security." />
  <meta name="keywords" content="Trevor Madara, portfolio, full-stack, react developer, mobile apps, penetration testing" />
  <meta name="author" content="Trevor Madara" />
</Helmet>

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
