import { useEffect, useState } from 'react';
import { ArrowUpFromDot } from 'lucide-react';

function ControlArrowUp({ScrollToTopSmoothly}) {
    // STATE Controls buttons visibility
    const [controlsVisibility, setControlsVisibility] = useState(false);

    // Effect scroll trigger set Controls buttons visibility true/false
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

    return (
        <>
            {controlsVisibility && <div className='flex flex-row fixed bottom-5 left-5 gap-4 items-center justify-end w-auto bg-gray-700 p-2 rounded-md'>
                <button className="text-gray-300 bg-gray-500 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-2" onClick={ScrollToTopSmoothly}><ArrowUpFromDot /></button>
            </div>}
        </>
    );
}

export default ControlArrowUp;
