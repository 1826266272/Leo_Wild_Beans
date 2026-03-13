import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import splitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
    
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        const titleSplit = new splitText("#about h2,#about p",
        {
            type: "words"
        })

        const at = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 60%",
                end: "bottom 80%",
                scrub: true
            }
        })

        at.from(titleSplit.words, {
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.08,
        })
        
        const section = sectionRef.current;
        const content = contentRef.current;
        const navLinks = document.getElementById("nav-links");

        ScrollTrigger.create( {
            trigger: content,
            start: "top 15%",
            end: `+=900vh`,
            scrub: 1,
            pin: true,
            onUpdate: (self) => {  gsap.to(content, {
                x: `${-350 * self.progress}vw`,
                duration: 0.5,
                ease: "power3.out",
            })              
            },
            onEnter: () => gsap.to(navLinks, { y: -80, opacity: 0 }),
            onLeave: () => gsap.to(navLinks, { y: 0, opacity: 1 }),     
            onEnterBack: () => gsap.to(navLinks, { y: -80, opacity: 0 }),
            onLeaveBack: () => gsap.to(navLinks, { y: 0, opacity: 1 }),
        });

    }, []);

    return (
        <>
            <section id="about" className="relative">
                <div className="mb-16 md:px-0 px-5">
                    <div className="content">
                        <div className="p-[20px] md:col-span-8">
                            <p className="badge">Best Cafe</p>
                            <h2>
                                Our Priority lies in the <span className=" text-yellow">Taste OF Tradition</span>
                            </h2>
                            <p>
                                To Blend our tradition with every sip,
                                That Savour the essence of authentic trip!
                                To celebrate our ethical coffee drip,
                                Crafted and brewed to perfection cup!
                                We prioritize maintaining high standards and quality while minimizing costs.
                                From farm to cup, our journey never slips,
                                Serving moments of comfort in every blissful sip.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="h-scroll relative" ref={sectionRef}>
                    <div className="h-scroll-content" ref={contentRef}>
                        <h1><span>From Cultivation to your Cup</span></h1>
                        
                        <div className="card" id="card-1">
                            <img src="/images/h-1.jpg" alt="image" />
                        </div>
                        <div className="card" id="card-2">
                            <img src="/images/h-2.jpg" alt="image" />
                        </div>
                        <div className="card" id="card-3">
                            <img src="/images/grid-1.png" alt="image" />
                        </div>
                    </div>
            </section>
        </>
  )
}

export default About;