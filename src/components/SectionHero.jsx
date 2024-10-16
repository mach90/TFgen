/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { NavLink } from "react-router-dom";
import NavButton from "./Button";
import { Shield, HandHelping, Rocket, Siren, ChevronsDown, StarHalf, BadgeCheck, CircleSlash, BarChartBig } from "lucide-react";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
DATA (INFOS, STATS)
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const iconSize = 60;

const infos = [
    {
        title: 'Easy to use',
        description: "User-friendly interface to create a comprehensive travel form in minutes.",
        icon: <Rocket size={iconSize}/>,
    },
    {
        title: 'Free',
        description: "It's an open source project so it's totally free to use.",
        icon: <CircleSlash size={iconSize}/>,
    },
    {
        title: 'Safety',
        description:
        "Increase your security by sharing your travel plans with trusted contacts only.",
        icon: <Shield size={iconSize}/>,
    },
    {
        title: 'Peace of Mind',
        description: "Travel knowing someone can act appropriately if you don't check in when supposed to.",
        icon: <HandHelping size={iconSize}/>,
    },
    {
        title: 'Better preparation',
        description: "Creating a travel form encourages you to prepare your trip in more detail.",
        icon: <BadgeCheck size={iconSize}/>,
    },
    {
        title: 'Emergency Ready',
        description: 'Provide crucial information to expedite rescue efforts if needed.',
        icon: <Siren size={iconSize}/>,
    },
];

const stats = [
    {
        title: '50% survival rate after 48h',
        description: 'Survival chances drop from 90% to 50% after 48 hours. Quick, efficient search efforts and signaling are crucial.',
        icon: '48h',
    },
    {
        title: '1% of the lost hikers are never found',
        description: 'An estimated 10-30 hikers go missing in France each year and are never found.',
        icon: '1%',
    },
    {
        title: 'Preparation',
        description: 'The most common causes of hiker distress include lack of preparation, underestimating trail difficulty, and environmental conditions.',
        icon: <StarHalf size={iconSize}/>,
    },
];

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const sectionHeroContainerStyle = "bg-gradient-to-b from-secondary to-transparent font-default flex flex-col items-center gap-16 py-16";
const sectionHeroBlockStyle = "w-full h-full flex flex-col gap-12 justify-center items-center p-12 lg:px-[20%]";
const sectionHeroBlockTitleStyle = "text-3xl md:text-5xl font-bold font-heading text-secondaryHeading";
const sectionHeroIntroStyle = "text-5xl sm:text-6xl md:text-8xl font-bold flex flex-col gap-2 items-center text-center";
const sectionHeroIntroTitleStyle = "text-secondaryHeading font-heading";
const sectionHeroIntroSubtitleStyle = "text-secondarySubheading font-heading";
const sectionHeroCtaStyle = "flex flex-col lg:flex-col items-center justify-center gap-2";
const sectionHeroCtaTitleStyle = "text-xl sm:text-4xl font-bold text-secondaryHeading font-heading";
const sectionHeroCtaTextStyle = "text-md sm:text-lg font-medium text-secondaryText";
const sectionHeroScrollStyle = "text-secondaryText animate-bounce flex flex-col justify-center items-center";
const sectionHero2CardsContainerStyle = "grid md:grid-cols-2 gap-12 justify-between items-center";
const sectionHero3CardsContainerStyle = "grid md:grid-cols-2 xl:grid-cols-3 gap-12 justify-between items-center";
const sectionHeroCardContainerStyle = "flex flex-col sm:flex-row gap-4 items-center rounded-md h-full p-4 md:p-6 bg-alternate lg:max-w-96 translate-y-2 hover:translate-y-0 duration-200";
const sectionHeroCardIconStyle = "font-bold text-alternateHeading text-5xl";
const sectionHeroCardInfosContainerStyle = "flex flex-col gap-2";
const sectionHeroCardInfosTitleStyle = "font-medium font-heading text-alternateHeading text-xl";
const sectionHeroCardInfosDescriptionStyle = "text-md text-alternateText";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
SECTION HERO COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function SectionHero() {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={sectionHeroContainerStyle}>

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

                <div className={sectionHeroScrollStyle}>More infos <ChevronsDown size={24} /></div>
            </div>
            
            <div className={sectionHeroBlockStyle}>
                <h2 className={sectionHeroBlockTitleStyle}>Why using Travel Form Generator ?</h2>

                <div className={sectionHero2CardsContainerStyle}>
                    {infos.map((info) => (
                        <div key={info.title} className={sectionHeroCardContainerStyle}>
                            <div className={sectionHeroCardIconStyle}>{info.icon}</div>
                            <div className={sectionHeroCardInfosContainerStyle}>
                                <p className={sectionHeroCardInfosTitleStyle}>{info.title}</p>
                                <p className={sectionHeroCardInfosDescriptionStyle}>{info.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={sectionHeroBlockStyle}>
                <h2 className={sectionHeroBlockTitleStyle}>Some stats and facts</h2>

                <div className={sectionHero3CardsContainerStyle}>
                    {stats.map((stat) => (
                        <div key={stat.title} className={sectionHeroCardContainerStyle}>
                            <div className={sectionHeroCardIconStyle}>{stat.icon}</div>
                            <div className={sectionHeroCardInfosContainerStyle}>
                                <p className={sectionHeroCardInfosTitleStyle}>{stat.title}</p>
                                <p className={sectionHeroCardInfosDescriptionStyle}>{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
