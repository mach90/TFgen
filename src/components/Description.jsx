/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";
import Container from "./Container";
import Typed from 'typed.js';

/* //////////////////////////////////////////////////
DESCRIPTION COMPONENT
////////////////////////////////////////////////// */
export default function Description() {
    /* //////////////////////////////////////////////////
    Animated text with typing machine effect typed.js
    ////////////////////////////////////////////////// */
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

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <Container>
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-darkH1">
                    <span ref={el} className="text-orangeAccent"/>
                    <p>Your Travel Form.</p>
                </h1>
                <p className="mt-6 text-sm sm:text-lg md:text-2xl leading-8 text-darkP">
                    Let people know where you go. This can save your life.
                </p>
            </div>
            <div className="mt-6">
                <NavLink to="travelformgenerator">
                    <NavButton buttonStyle="active">
                        Get started now
                    </NavButton>
                </NavLink>
            </div>
        </Container>
    )
}
