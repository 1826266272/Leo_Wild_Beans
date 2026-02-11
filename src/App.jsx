import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brews from "./components/Brews";
import About from "./components/About";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Brews />
      <About />
      <Contact />
    </>
  );
};

export default App;
