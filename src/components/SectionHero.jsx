/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { NavLink } from "react-router-dom";
import NavButton from "./Button";
import { BiSolidChevronsDown } from "react-icons/bi";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const sectionHeroContainerStyle = "bg-bgIsoline bg-no-repeat bg-fit font-default flex flex-col justify-center items-center gap-16 py-16 min-h-[calc(100vh-0px)]";
const sectionHeroBlockStyle = "w-full h-full flex flex-col gap-10 md:gap-20 justify-center items-center p-6 md:p-12 lg:px-[20%]";

const sectionHeroIntroStyle = "text-3xl md:text-6xl lg:text-7xl max-w-3xl font-bold flex flex-col gap-2 items-center text-center";
const sectionHeroIntroTitleStyle = "text-secondaryHeading font-heading";
const sectionHeroIntroSubtitleStyle = "text-secondarySubheading font-heading";

const sectionHeroCtaStyle = "flex flex-col lg:flex-col items-center justify-center gap-2 md:gap-4";
const sectionHeroCtaTitleStyle = "text-xl md:text-4xl lg:text-5xl font-bold text-secondaryHeading font-heading";
const sectionHeroCtaTextStyle = "text-sm md:text-lg lg:text-2xl font-medium text-secondaryText";

const sectionHeroScrollStyle = "text-md md:text-2xl lg:text-3xl text-secondaryText animate-bounce flex flex-col justify-center items-center";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
SECTION HERO COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function SectionHero() {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <header className={sectionHeroContainerStyle}>

            <div className={sectionHeroBlockStyle}>
                <div className={sectionHeroIntroStyle}>
                    <h1 className={sectionHeroIntroTitleStyle}>Let trusted contacts know where you go.</h1>
                    <h1 className={sectionHeroIntroSubtitleStyle}>They could save your life.</h1>
                </div>

                <div className={sectionHeroCtaStyle}>
                    <h2 className={sectionHeroCtaTitleStyle}>Create your Travel Form</h2>
                    <p className={sectionHeroCtaTextStyle}>It's easy and respect your privacy</p>
                    <NavLink to="/form"><NavButton buttonStyle="default">Get started now</NavButton></NavLink>
                </div>

                <div className={sectionHeroScrollStyle}>More infos <BiSolidChevronsDown size={24} /></div>
            </div>

        </header>
    )
}
