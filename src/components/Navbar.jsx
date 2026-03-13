import React from "react";
import { navLinks } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Navbar = () => {
    useGSAP(() => {

        var ntl = gsap.timeline();
        
        ntl.from("#nav-links", {
            yPercent: -100,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
        });

        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "center top",
                scrub: true,
            }
        });
        navTween.fromTo("nav", { backgroundColor: "transparent"},{
            backgroundColor: "#00000050",
            backdropFilter: "blur(10px)",
            ease: "power3.out",
        });

    }, []);

    return (
    <nav>
        <div id="nav-links">
            <a href="#hero" id="cafe-title" className="flex items-center gap-2">
                <p>Cafe</p>
            </a>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;