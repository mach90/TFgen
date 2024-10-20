/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { LuSearchX } from "react-icons/lu";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const section404ContainerStyle = "flex flex-col justify-start items-center text-justify px-12 py-12 w-full gap-12 text-lg font-medium text-primaryText font-default";
const section404MessageStyle = "flex flex-col justify-center items-center";
const section404TitleStyle = "font-bold text-9xl";
const section404SubtitleStyle = "font-extrabold text-3xl md:text-5xl";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
SECTION 404 COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function Section404() {
    return (
        <div className={section404ContainerStyle}>
            <div className={section404MessageStyle}>
                <LuSearchX size={100}/>
                <h1 className={section404TitleStyle}>404</h1>
                <p className={section404SubtitleStyle}>Page not found</p>
            </div>
            <NavLink to="/"><Button buttonStyle="default">Return to homepage</Button></NavLink>
        </div>
    );
}
