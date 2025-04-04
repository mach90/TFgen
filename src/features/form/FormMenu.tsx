//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";
import { formFieldsets } from "../../data/data.js";
import ScrollTo from "../../utils/scrollTo.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////////
const menuStyle = "flex flex-col gap-2 py-4 px-8 rounded-md h-max justify-center sticky top-32 hidden md:block";
const menuButtonStyle = "flex flex-row gap-2 text-formSubheading items-center text-sm font-medium py-1 cursor-finger";
const menuButtonActiveStyle = "flex flex-row gap-2 text-formHover items-center text-sm font-medium py-1 cursor-finger";
const menuButtonLabelStyle = "hidden lg:block";
const menuIconSize = 32;

//////////////////////////////////////////////////////////////////////////////////////////////////////
// FORM MENU
//////////////////////////////////////////////////////////////////////////////////////////////////////
function FormMenu() {
    ////////////////////////////////////////////////////
    // WILL DETECT CURRENTLY OBSERVED FORM FIELDSET
    // AND SET CORRESPONDING TAB MENU TO ACTIVE STATE
    ///////////////////////////////////////////////////
    const [isActive, setIsActive] = useState("identity-btn");

    useEffect(() => {

        const handleScroll = () => {
            /* //////////////////////////////////////////////////
            IF SCROLL POSITION IS AT THE VERY BEGINNING OF THE PAGE
            NO MENU TAB SHOULD BE ACTIVE
            ////////////////////////////////////////////////// */
            if (window.scrollY === 0) {
                setIsActive("identity-btn");
            }

            /* //////////////////////////////////////////////////
            CREATE AN ELEMENT FOR EACH FIELDSET THEN
            DETECT WHEN A FORM FIELDSET IS THE MAIN OBJECT IN THE VIEWPORT
            AND SET CORRESPONDING MENU TAB TO ACTIVE STATE 
            ////////////////////////////////////////////////// */
            {formFieldsets.map((formFieldset) => {
                const elementChecked = document.getElementById(formFieldset.fieldsetElement);

                if (elementChecked) {
                    // Get the bounding rectangle of the selected element
                    const rect = elementChecked.getBoundingClientRect();
                    
                    // Get the height of the browser window
                    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                    
                    // Calculate the top half of the viewport
                    const topHalfViewport = windowHeight / 2;
                    
                    // Check if any part of the element is in the top half of the viewport
                    const isInTopHalf = (rect.top < topHalfViewport) && (rect.bottom > 0);
                    
                    // If any part of the element is in the top half of the viewport
                    if (isInTopHalf) {
                        setIsActive(formFieldset.fieldsetMenuBtn);
                    }
                }
            })}
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [isActive]);

    /* ////////////////////////////////////////////////////////////////////////////////////////////////////
    JSX
    //////////////////////////////////////////////////////////////////////////////////////////////////// */
    return (
        <div className={menuStyle}>       
            {formFieldsets.map((formFieldset) => (
                <button id={formFieldset.fieldsetMenuBtn} key={formFieldset.fieldsetMenuBtn} className={isActive === formFieldset.fieldsetMenuBtn ? menuButtonActiveStyle : menuButtonStyle} onClick={() => ScrollTo(formFieldset.fieldsetElement, 'auto', 'center')}><formFieldset.fieldsetIcon size={menuIconSize}/> <p className={menuButtonLabelStyle}>{formFieldset.fieldsetTitle}</p></button>
            ))}
        </div>
    );
};

export default FormMenu;
