import React from "react";
import gsap from "gsap";
import splitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import MediaQuery, { useMediaQuery } from "react-responsive";


const Hero = () => {
    const videoRef = React.useRef();

    const isMobile = useMediaQuery({ maxWidth: 768 });

    useGSAP(() => {
        const heroSplit = new splitText(".title", {
            type: "words, chars",
        });
        const paragraphSplit = new splitText(".subtitles", {
            type: "lines",
        });

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {    
            yPercent: 100,
            duration: 1.8,
            stagger: 0.06,
            ease: "expo.out",
        });

        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.8,
            ease: "expo.out",
            delay: 1,
            stagger: 0.06,

        })

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "60% top" : "bottom top";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration/2,
            })
        }

    }, []);

    return (
    <>
        <section id="hero" className="back">
            <h1 className="title">WILD BEANS</h1>

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden lg:block">
                        <p>Brewed by</p>
                        <p className="subtitles">
                           Classic Traditon
                        </p>
                    </div>

                    <div className="view-brews">
                        <p className="subtitles">
                            "I am a humble tea merchant, pouring out the elixir of life to the world."<br/> - Kakuzo Okakura.
                        </p>
                    </div>
                </div>

            </div>

        </section>
        <div className="video absolute inset-0">
            <video 
            ref={videoRef}
            src="/videos/output.mp4" 
            muted 
            playsInline 
            preload="auto"></video>
        </div>
    </>
  )
}

export default Hero;