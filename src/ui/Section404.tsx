//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { LuSearchX } from "react-icons/lu";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////////
const section404ContainerStyle = "min-h-screen flex flex-col justify-center items-center px-12 py-12 md:py-20 lg:py-28 xl:py-40 gap-8";
const section404TitleStyle = "flex flex-row justify-center items-center gap-2 text-6xl md:text-7xl font-bold font-heading text-error rotate-[2deg]";
const section404SubtitleStyle = "font-extrabold text-3xl md:text-5xl text-secondaryText";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 404 SECTION
//////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Section404() {
    return (
        <div className={section404ContainerStyle}>
            <div>
                <h1 className={section404TitleStyle}><LuSearchX /> 404</h1>
                <p className={section404SubtitleStyle}>Page not found</p>
            </div>
            <NavLink to="/"><Button buttonStyle="default">Return to homepage</Button></NavLink>
        </div>
    );
}
