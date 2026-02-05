import { useGSAP } from "@gsap/react";
import React from "react";
import splitText from "gsap/SplitText.js";
import gsap from "gsap";
import { socials } from "../../constants";

const Contact = () => {

    useGSAP(() => {
        const contactSplit = new splitText("#contact h2,#contact p", {
            type: "lines",
        })
        
        const ct = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top 60%",
                end: "center 40%",
                scrub: true
            }
        })

        ct.from(contactSplit.lines, {
            opacity: 0,
            ypercent: 100,
            scrub: true,
            stagger: 0.04,
            duration: 1,
            ease: "power1.out"
        })


    }, []);

    return(
        <section id="contact">
            <div className="content">
                <div className="font-great text-sm">
                    <h2 className="text-yellow">where to find us</h2>
                    <p className="mt-2">Platform 9 ¾ at King's Cross Station, London</p>
                </div>
                <img src="/images/logo.webp" alt="" />
                <div>
                    <p className="font-modern-negra">For Franchinse Details :
                    </p>
                    <p className="text-sm mb-3">(91+) - 9768928489</p>
                    <div className="font-great text-4xl">
                        Socials
                        <div className="flex-center">
                            {socials.map((social) => (
                                    <a className="ml-4 mt-1 p-2"
                                    href={social.url}
                                    key={social.name}
                                    target="_blank"
                                    > <img className="h-5 w-5" src={social.icon} alt="" />
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;