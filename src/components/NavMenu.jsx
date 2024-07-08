/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { NavLink } from "react-router-dom";
import Button from "./Button";

/* //////////////////////////////////////////////////
NAVMENU COMPONENT
////////////////////////////////////////////////// */
export default function NavMenu() {
    return (
        <div className="flex flex-row gap-4 md:gap-8 items-center justify-center md:justify-end">
            <NavLink to="/about">
                <Button buttonStyle="transparent">About</Button>
            </NavLink>
            <NavLink to="/privacy">
                <Button buttonStyle="transparent">Privacy</Button>
            </NavLink>
            <NavLink to="/form">
                <Button buttonStyle="default">Generator</Button>
            </NavLink>
        </div>
    );
}
