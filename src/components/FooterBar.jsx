/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { Github } from 'lucide-react';

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const footerContainerStyle = "flex flex-row items-center justify-between bg-secondary px-6 md:px-10 xl:px-20 py-4 sticky bottom-0 z-50";
const footerSocialsContainerStyle = "flex flex-row items-center gap-4";
const footerMenuContainerStyle = "flex flex-row items-center font-medium gap-2 sm:gap-6 font-normal";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
FOOTER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function FooterBar() {
    return (
        <div className={footerContainerStyle}>
            <div className={footerSocialsContainerStyle}>
                <NavLink to="https://github.com/mach90/epagen" target="_blank" rel="noopener noreferrer"><Button buttonStyle="social"><Github size={20}/> SOURCE CODE</Button></NavLink>
            </div>
            <div className={footerMenuContainerStyle}>
                <p className="text-secondaryText font-default">Built with</p>
                <NavLink to="https://react-pdf.org/" target="_blank" rel="noopener noreferrer"><Button buttonStyle="transparent">REACT-PDF</Button></NavLink>
            </div>
        </div>
    );
}
