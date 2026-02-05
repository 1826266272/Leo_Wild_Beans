import React from "react";
import { gsap } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import splitText from "gsap/SplitText";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brews from "./components/Brews";

gsap.registerPlugin(scrollTrigger, splitText);

const App = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Brews/>
      <div className="h-dvh bg-black"></div>
    </>
  )
}

export default App
