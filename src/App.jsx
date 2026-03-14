import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brews from "./components/Brews";
import About from "./components/About";
import Contact from "./components/Contact";
import InstagramCard from "./components/InstagramCard";

gsap.registerPlugin(ScrollTrigger, SplitText);


const imageArray = [
  "/public/images/comment1.png",
  "/public/images/comment2.png",
  "/public/images/comment3.png",
  "/public/images/comment4.png",
  "/public/images/comment5.png",
  "/public/images/comment6.png",
  "/public/images/comment7.png",
  "/public/images/comment8.png",
  "/public/images/comment9.png",
  "/public/images/comment-10.png",
  "/public/images/comment11.png",
  "/public/images/comment12.png",
  "/public/images/comment13.png",
  "/public/images/comment14.png",
  "/public/images/comment15.png",
  "/public/images/comment16.png",
  "/public/images/comment17.png",
];


const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Brews />
      <About />
      <InstagramCard 
        image="/public/images/post.jpg"
        profileImage="/public/images/logo.png"
        isVerified={true}
        username="Cafe-Wild_Beans"
        timestamp="Just Now"
        images = { imageArray } 
      />
      <Contact />
    </>
  );
};

export default App;
