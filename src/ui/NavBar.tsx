//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
import { NavLink } from "react-router-dom";
import LogoSVG from "../../public/logo.svg";
import Button from "./Button";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////////
const navbarContainerStyle = "h-[60px] flex flex-row justify-between bg-secondary px-6 md:px-10 xl:px-20 py-5 gap-6 fixed top-0 z-40 cursor-triangle w-full";

const navbarLogoContainerStyle = "flex flex-row justify-center md:justify-start items-center gap-4";
const navbarLogoTitleStyle = "text-2xl font-heading font-normal text-secondaryHeading leading-none cursor-finger";

const navbarMenuContainerStyle = "flex flex-row gap-4 md:gap-8 items-center justify-center md:justify-end";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// NAVBAR
//////////////////////////////////////////////////////////////////////////////////////////////////////
export default function NavBar() {
    return (
        <>
            <div className={navbarContainerStyle}>

                <div className={navbarLogoContainerStyle}>
                    <NavLink to="/">
                        <img src={LogoSVG} alt="🏕️" width="36px" className="cursor-finger"/>
                    </NavLink>
                    <NavLink to="/">
                        <h1 className={navbarLogoTitleStyle}>TFGen</h1>
                    </NavLink>
                </div>

                <nav className={navbarMenuContainerStyle}>
                    <NavLink to="/">
                        <Button buttonStyle="transparent">HOME</Button>
                    </NavLink>
                    <NavLink to="/form">
                        <Button buttonStyle="default">GENERATOR</Button>
                    </NavLink>
                </nav>
                
            </div>
        </>
    );
}
