import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brews from "./components/Brews";
import About from "./components/About";
import Contact from "./components/Contact";
import InstagramCard from "./components/InstagramCard";
import { imageArray } from "../constants";

gsap.registerPlugin(ScrollTrigger, SplitText);



const App = () => {

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Brews />
      <About />
      <InstagramCard 
        image="/images/post.jpg"
        profileImage="/images/logo.png"
        username="Cafe-Wild-Beans"
        timestamp="Just Now"
        images = { imageArray } 
      />
      <Contact />
    </>
  );
};

export default App;
