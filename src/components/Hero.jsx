import React from "react";
import gsap from "gsap";
import splitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";


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

        var htl = gsap.timeline();
        
        htl.from(heroSplit.chars, {    
            yPercent: 100,
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            stagger: 0.08,
            ease: "expo.out",
        });
        
        htl.from(paragraphSplit.lines, {
            yPercent: 20,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
            stagger: 0.08,
        },"-=1");
        
        htl.from(videoRef.current, {
            opacity : 0,
            duration: 2,
            ease: "power1.inOut",
        },"-=1.5");

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "270% top" : "180% top";

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

        gsap.to(videoRef.current,{
            x: isMobile ? "5%" : "25%",
            scale: isMobile ? 0.4 : 0.6,
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                end: "top 70%",
                scrub: true,
                pin: false,
            },
        })

    }, []);

    return (
    <>
        <div className="video absolute inset-0">
            <video 
            ref={videoRef}
            src="/videos/output.mp4" 
            muted 
            playsInline 
            preload="auto"
            ></video>
        </div>
        <section id="hero" className="back">
            <h1 className="title">WILD BEANS</h1>

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden lg:block">
                        <p className="font-unical">Brewed by</p>
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
    </>
  )
}

export default Hero;