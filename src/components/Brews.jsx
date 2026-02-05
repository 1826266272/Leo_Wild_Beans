import React, { use } from "react";
import { brewLists } from "../../constants";
import { modernLists } from "../../constants";
import gsap from "gsap";
import splitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

const Brews = () => {

    useGSAP(() => {

        const lt = gsap.timeline({
            scrollTrigger: {
                trigger: "#brews",
                start: "top 300%",
                end: "center top",
                scrub: true
            }
        })

        const mt = gsap.timeline({
            scrollTrigger: {
                trigger: "#brews",
                start: "top 300%",
                end: "center top",
                scrub: true
            }
        })

        const popularSplit = new splitText(".popular", {
            type: "lines",
        });

        lt.from(popularSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
            delay: 3.5,
            stagger: 0.15,
        });

        const modernSplit = new splitText(".modern", {
            type: "lines",
        });

        mt.from(modernSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
            delay: 3.5,
            stagger: 0.15,
        });

    }, []);


  return (
    <section id="brews" className="relative">
        <div className="list">
            <div className="popular">
                <h2>Popular Brews</h2>
                <ul>
                    {brewLists.map((brew) => (
                        <li key={brew.name}>
                            <div className="md:me-28">
                                <h3>{brew.name}</h3>
                                <p className="text-sm text-gray-500">{brew.country}</p>
                                <p className="text-sm">{brew.detail}</p>
                            </div>
                            <span>{brew.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="modern">
                <h2>Modern Brews</h2>
                <ul>
                    {modernLists.map((brew) => (
                        <li key={brew.name}>
                            <div className="md:me-28">
                                <h3>{brew.name}</h3>
                                <p className="text-sm text-gray-500">{brew.country}</p>
                                <p className="text-sm">{brew.detail}</p>
                            </div>
                            <span>{brew.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </section>
    )
}

export default Brews;