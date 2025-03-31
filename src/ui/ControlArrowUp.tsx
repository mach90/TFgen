//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";
import ScrollTo from "../utils/scrollTo";
import NavButton from "../ui/Button";
import { FaArrowUp } from "react-icons/fa";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////////
const controlArrowUpContainerStyle = "fixed bottom-5 left-5 flex flex-row gap-4 items-center justify-end w-max rounded-md z-20";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// ARROW SCOLL UP TO TOP COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////////
function ControlArrowUp() {
    ////////////////////////////////////////////////////
    // CONTROLS VISIBILITY
    ///////////////////////////////////////////////////
    const [controlsVisibility, setControlsVisibility] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= 400) {
                setControlsVisibility(true);
            } else {
                setControlsVisibility(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <>
            {controlsVisibility && <div className={controlArrowUpContainerStyle}>
                <NavButton buttonStyle="arrow" onClick={() => ScrollTo("top", "smooth")}>
                    <FaArrowUp />
                </NavButton>
            </div>}
        </>
    );
}

export default ControlArrowUp;
