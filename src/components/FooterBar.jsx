/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const footerContainerStyle = "fixed bottom-0 w-full h-[60px] flex flex-row items-center justify-between bg-secondary px-6 md:px-10 xl:px-20 py-2";
const footerSocialsContainerStyle = "flex flex-row items-center gap-2";
const footerMenuContainerStyle = "flex flex-row items-center font-medium gap-2";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
FOOTER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function FooterBar() {
    return (
        <div className={footerContainerStyle}>
            <div className={footerSocialsContainerStyle}>
                <NavLink to="https://github.com/mach90/epagen" target="_blank" rel="noopener noreferrer"><Button buttonStyle="transparent"><FaGithub size={24}/></Button></NavLink>
            </div>
            <div className={footerMenuContainerStyle}>
                <p className="text-secondaryText font-default text-sm md:text-lg">Built with</p>
                <NavLink to="https://react-pdf.org/" target="_blank" rel="noopener noreferrer"><Button buttonStyle="transparent">REACT-PDF</Button></NavLink>
            </div>
        </div>
    );
}
