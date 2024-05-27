import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";
import { Github } from 'lucide-react';

export default function NavMenu() {
    return (
        
        <div className="flex flex-col justify-between gap-x-4 gap-y-4 items-center  sm:flex-row">
            <NavLink to="/travelformgenerator"><NavButton active>
                EPA Generator
            </NavButton></NavLink>
            <NavLink to="https://github.com/mach90/epagen" target="_blank" rel="noopener noreferrer"><NavButton><Github/> Source code</NavButton></NavLink>
        </div>
    );
}
