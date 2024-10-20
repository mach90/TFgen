/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { NavLink } from "react-router-dom";
import LogoSVG from '../../public/logo.svg';
import Button from "./Button";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const navbarStyle = "flex flex-col md:flex-row justify-between bg-secondary px-6 md:px-10 xl:px-20 py-3 gap-6 sticky top-0 z-50";

const navbarLogoContainerStyle = "flex flex-row justify-center md:justify-start items-center gap-4";
const navbarLogoTitleStyle = "text-2xl font-heading font-normal text-secondaryHeading leading-none";
const navbarLogoSubtitleStyle = "text-sm font-default font-medium text-secondarySubheading hidden md:block leading-none";

const navbarMenuContainerStyle = "flex flex-row gap-4 md:gap-8 items-center justify-center md:justify-end";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
NAVBAR COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function NavBar() {
    return (
        <>
            <div className={navbarStyle}>

                <div className={navbarLogoContainerStyle}>
                    <NavLink to="/">
                        <img src={LogoSVG} alt="🏕️" width="36px"/>
                    </NavLink>
                    <NavLink to="/">
                        <h1 className={navbarLogoTitleStyle}>TFGen</h1>
                        <h2 className={navbarLogoSubtitleStyle}>Your Travel Form Generator</h2>
                    </NavLink>
                </div>

                <div className={navbarMenuContainerStyle}>
                    <NavLink to="/">
                        <Button buttonStyle="transparent">HOME</Button>
                    </NavLink>
                    <NavLink to="/about">
                        <Button buttonStyle="transparent">ABOUT</Button>
                    </NavLink>
                    <NavLink to="/privacy">
                        <Button buttonStyle="transparent">PRIVACY</Button>
                    </NavLink>
                    <NavLink to="/form">
                        <Button buttonStyle="default">GENERATOR</Button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
