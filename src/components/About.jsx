import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import splitText from "gsap/SplitText";

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
                start: "top 50%",
                end: "center center",
                scrub: true
            }
        })

        at.from(titleSplit.words, {
            opacity: 0,
            duration: 1,
            ypercent: 100,
            ease: "expo.out",
            stagger: 0.02
        })
        
        const section = sectionRef.current;
        const content = contentRef.current;

        const scrollWidth = content.scrollWidth;
        const viewportWidth = window.innerWidth;
        const navLinks = document.getElementById("nav-links");

        const horizontalAnim = gsap.to(content  , {
        x: -(scrollWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top 10%",   
            end: () => `+=${scrollWidth}`,
            scrub: true,
            pin: true,
            onEnter: () => gsap.to(navLinks, { y: -80, opacity: 0 }),
            onLeave: () => gsap.to(navLinks, { y: 0, opacity: 1 }),     
            onEnterBack: () => gsap.to(navLinks, { y: -80, opacity: 0 }),
            onLeaveBack: () => gsap.to(navLinks, { y: 0, opacity: 1 }),
            },
        });

        gsap.utils.toArray(".card img").forEach((img) => {
            gsap.from(img, {
                opacity: 0,
                y: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: img,
                    start: "left 90%",
                    end: "left 70%",
                    scrub: true,
                    containerAnimation: horizontalAnim,
                },
            });
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
                                that Savour the essence of authentic trip!
                                To celebrate our ethical coffee drip,
                                Crafted and brewed to perfection cup!
                                We prioritize maintaining high standards and quality while minimizing costs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="h-scroll" ref={sectionRef}>
                <div className="p-[20px]">
                    <div className="h-scroll-content flex gap-10 items-center" ref={contentRef}>
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
                </div>
            </section>
        </>
  )
}

export default About;