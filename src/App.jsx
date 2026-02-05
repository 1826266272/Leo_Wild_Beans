import React from "react";
import { gsap } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import splitText from "gsap/SplitText";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brews from "./components/Brews";
import About from "./components/About";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(scrollTrigger, splitText);

const App = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Brews/>
      <About/>
    </>
  )
}

export default App
