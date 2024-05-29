import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";
import Typed from 'typed.js';
import Container from "./Container";

export default function Description() {
    /* npm typed.js */
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Create", "Download", "Print", "Share"],
          typeSpeed: 100,
          loop: true,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);

    return (
        <Container>
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-400">
                    <span ref={el} className="text-orange-400"/>
                    <p>Your Emergency Plan of Action.</p>
                </h1>
                <p className="mt-6 text-sm sm:text-lg md:text-2xl leading-8 text-gray-500">
                    Let people know where you go. This can save your life.
                </p>
            </div>
            <div className="mt-6">
                <NavLink to="travelformgenerator">
                    <NavButton active>
                        Get started now
                    </NavButton>
                </NavLink>
            </div>
        </Container>
    )
}
