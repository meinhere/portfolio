import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticleBackground from "./components/Particle";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Educations from "./components/Educations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Educations /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
