import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollReveal from "./components/ScrollReveal";
import BackgroundAnimation from "./components/BackgroundAnimation";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <Cursor />
      <ScrollReveal />
      <BackgroundAnimation />
    </main>
  );
}