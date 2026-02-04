import React from "react";
import { gsap } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import splitText from "gsap/SplitText";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(scrollTrigger, splitText);

const App = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="h-dvh bg-black"></div>
    </>
  )
}

export default App
