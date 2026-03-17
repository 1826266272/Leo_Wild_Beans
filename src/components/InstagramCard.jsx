import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const InstagramCard = (props) => {
    const sectionRef = useRef(null);
    const commentIconRef = useRef(null);
    const flowContainerRef = useRef(null);
    const [showDetails, setShowDetails] = useState(false);

    useGSAP(() => {


        const ptl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                end: "top top",
                scrub: true,
            }
        });

        ptl.from(sectionRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.out",    
        });

        const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 20%",
                        toggleActions: "play none none none",
                    }
                })

        tl.from(".Like",{
            opacity: 0,
            xPercent: 270,
            yPercent: -1000,
            scale: 6,
            delay: 0.2,
            ease: "bounce.out",
        });

    }, { scope: sectionRef });

    useGSAP(() => {
        if (!showDetails) return;

        // Set initial random positions
        gsap.set(".flow-item", {
            x: () => (Math.random() - 0.5) * window.innerWidth,
            y: () => (Math.random() - 0.5) * window.innerHeight,
            z: () => Math.random() * -1500,
            rotationZ: () => (Math.random() - 0.5) * 20,
            opacity: 0,
        });

        // Entrance flight
        gsap.to(".flow-item", {
            opacity: 1,
            duration: 1.5,
            stagger: { each: 0.3, from: "random" },
            ease: "power2.out"
        });

        // Random drifting loop
        gsap.to(".flow-item", {
            x: "+=random(-60, 60)",
            y: "+=random(-60, 60)",
            duration: "random(4, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, [showDetails]); // Only re-run when showDetails changes

    // 3. ZOOM HANDLER
    const handleCommentClick = () => {
        
        gsap.to(".Review", { opacity: 0, duration: 0.3 });

        const tl = gsap.timeline({
            onComplete: () => setShowDetails(true)
        });


        tl.to(commentIconRef.current, {
            xPercent: 400,
            yPercent: 400,
            scale: 250,
            opacity: 0,
            duration: 1,
            ease: "expo.in",
        });

        tl.to(sectionRef.current, {
            opacity: 0,
            ease: "power2.out"
        }, "-=0.3");
    };

    if(showDetails){
        return (
            <div ref={flowContainerRef} className="h-screen w-full bg-black overflow-hidden flex items-center justify-center" style={{ perspective: "1200px" }}>
                {/* <button 
                    onClick={() => setShowDetails(false)} 
                    className="absolute top-10 left-10 z-50 text-white font-bold bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all"
                >
                    ← BACK
                </button> */}

                <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Fallback to profileImage if images array isn't provided */}
                    {(props.images || [props.image]).map((src, i) => (
                        <div 
                            key={i} 
                            className="flow-item absolute w-[450px] h-[150px] rounded-[30px] overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <img src={src} alt="" className="w-full h-full object-cover pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <>
        <section ref={sectionRef} className="md:h-screen w-full flex gap-5 md:flex-row flex-col p-[20px] rounded-2xl">
            <div className="h-full md:max-h-8/9 w-full md:max-w-2/5 max-w-full flex justify-center md:pl-[60px] rounded-2xl">
                <div
                    className="h-full w-full ml-[10px] px-[40px] py-4 flex flex-col gap-4" 
                    style={{
                        fontFamily: "-apple-system, sans-serif",
                    }}
                >
                    <div className="flex items-center gap-1.5">
                        <div className="relative w-12 h-12">
                            <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#FFCB03" />
                                        <stop offset="35%" stopColor="#e6683c" />
                                        <stop offset="50%" stopColor="#dc2743" />
                                        <stop offset="75%" stopColor="#cc2366" />
                                        <stop offset="100%" stopColor="#d300c5" />
                                    </linearGradient>
                                </defs>
                                <circle
                                    cx="24"
                                    cy="24"
                                    r="22"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                />
                            </svg>
                            <img
                                src={props.profileImage}
                                alt={props.username}
                                className="absolute inset-1.5 w-9 h-9 object-cover rounded-full"
                            />
                        </div>
                        <div className='text-sm font-extrabold flex items-center gap-0.5'>
                            {props.username}
                            <svg fill="rgb(0, 149, 246)" height="12" viewBox="0 0 40 40" width="12">
                                <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fillRule="evenodd"></path>
                            </svg>
                            <span className='text-lg text-white/40 inline-block mx-0.5'>•</span>
                            <span className='text-sm text-white/40 font-light'>{props.timestamp}</span>
                        </div>
                    </div>
                    
                    <div className="w-full h-fit min-h-[500px] border border-white/10 rounded-md overflow-hidden">
                        <img 
                            src={props.image || ''} 
                            alt={props.username}
                            className="w-full h-full object-fill"
                        />
                    </div>
                    
                    <div className="flex items-center gap-3.5">
                        <button
                            className="cursor-pointer"
                            type="button"
                        >
                            <svg
                            className="Like"
                                fill="currentColor"
                                height="30"
                                viewBox="0 0 24 24"
                                width="30"
                                style={{ transformOrigin: 'center center' }}
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="red"/>
                            </svg>
                        </button>

                        <button ref={commentIconRef} onClick={ handleCommentClick } className="Comment cursor-pointer hover:opacity-70" type="button">
                            <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                        </button>

                        <button className="cursor-pointer hover:opacity-70" type="button">
                            <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.488" x2="15.515" y1="12.208" y2="7.641"></line>
                            </svg>
                        </button>

                        <button
                            className="ml-auto cursor-pointer hover:opacity-70"
                            type="button"
                        >
                            <svg
                                fill="currentColor"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <polygon
                                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Change the Review div from w-1/3 to w-1/2 */}
            <div className="Review relative flex h-full md:w-1/2 items-center justify-center p-10 overflow-hidden">
                <div className='Header flex items-star whitespace-nowrap'>
                    <h1 className='md:text-6xl text-4xl font-bold '>Click on the <span className='text-yellow'>Comment</span> Section</h1>
                </div>
            </div>
        </section>
        </>
    )
}

export default InstagramCard;