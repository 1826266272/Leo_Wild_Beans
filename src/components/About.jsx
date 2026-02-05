import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import splitText from "gsap/SplitText";

const About = () => {
    
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
        }).from(".top-grid, .bottom-grid", {
            opacity: 0,
            duration: 1,
            stagger: 0.04,
            ease: "power1.out"
        }, "-=0.5")

    }, []);

    return (
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
        <div className="p-[20px]">
            <div className="top-grid">
                <div className="md:col-span-3">
                    <img src="/images/grid-4.png" alt="" />
                </div>
                <div className="md:col-span-6">
                    <img src="/images/grid-1.png" alt="" />
                </div>
                <div className="md:col-span-3">
                    <img src="/images/grid-3.jpg" alt="" />
                </div>
            </div>
            <div className="bottom-grid">
                <div className="md:col-span-4">
                    <img src="/images/grid-6.jpg" alt="" />
                </div>
                <div className="md:col-span-4">
                    <img src="/images/grid-2.png" alt="" />
                </div>
                <div className="md:col-span-4">
                    <img src="/images/grid-5.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>

  )
}

export default About;