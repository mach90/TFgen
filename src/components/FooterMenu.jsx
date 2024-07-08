import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function FooterMenu() {
    return (
        <div className="flex flex-row items-center font-medium gap-2 sm:gap-6">
            <p className="font-normal">Built with</p>
            <NavLink to="https://react-pdf.org/" target="_blank" rel="noopener noreferrer"><Button buttonStyle="transparent">React-pdf</Button></NavLink>
        </div>
    );
}
