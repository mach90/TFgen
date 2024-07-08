/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { useEffect, useState } from 'react';
import { ArrowUpFromDot } from 'lucide-react';
import NavButton from './Button';

/* //////////////////////////////////////////////////
ARROW SCOLL UP TO TOP COMPONENT
////////////////////////////////////////////////// */
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
    TAILWIND CSS CLASSES
    ////////////////////////////////////////////////// */
    const buttonBackground = "flex flex-row fixed bottom-20 left-5 gap-4 items-center justify-end w-auto bg-darkControlsBackground rounded-md z-20";
    // const buttonStyle = "text-gray-300 bg-gray-500 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-2";

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <>
            {controlsVisibility && <div className={buttonBackground}>
                <NavButton buttonStyle='arrow' onClick={() => ScrollTo('top', 'smooth')}><ArrowUpFromDot /></NavButton>
            </div>}
        </>
    );
}

export default ControlArrowUp;
