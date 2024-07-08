import { NavLink } from "react-router-dom";
import Button from "./Button";
import { Github } from 'lucide-react';

export default function FooterSocials() {
    return (
        <div className="flex flex-row items-center gap-4">
            <NavLink to="https://github.com/mach90/epagen" target="_blank" rel="noopener noreferrer"><Button buttonStyle="social"><Github size={20}/> Source code</Button></NavLink>
        </div>
    );
}
