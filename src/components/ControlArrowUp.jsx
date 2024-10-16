/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { useEffect, useState } from 'react';
import { ArrowUpFromDot } from 'lucide-react';
import NavButton from './Button';

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const controlArrowUpContainerStyle = "flex flex-row fixed bottom-20 left-5 gap-4 items-center justify-end w-max rounded-md z-20";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
ARROW SCOLL UP TO TOP COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function ControlArrowUp({ScrollTo}) {
    /* //////////////////////////////////////////////////
    STATE Controls buttons visibility
    ////////////////////////////////////////////////// */
    const [controlsVisibility, setControlsVisibility] = useState(false);

    /* //////////////////////////////////////////////////
    useEffect scroll trigger set Controls buttons visibility true/false
    ////////////////////////////////////////////////// */
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= 400) {
                setControlsVisibility(true);
            } else {
                setControlsVisibility(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <>
            {controlsVisibility && <div className={controlArrowUpContainerStyle}>
                <NavButton buttonStyle='arrow' onClick={() => ScrollTo('top', 'smooth')}><ArrowUpFromDot /></NavButton>
            </div>}
        </>
    );
}

export default ControlArrowUp;
