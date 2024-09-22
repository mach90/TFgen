/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { NavLink } from "react-router-dom";
import NavButton from "./Button";
import Spline from '@splinetool/react-spline';
import { Shield, HandHelping, Rocket, Siren, ChevronsDown, StarHalf, BadgeCheck, CircleSlash, BarChartBig } from "lucide-react";

/* //////////////////////////////////////////////////
Object containing infos
////////////////////////////////////////////////// */
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
]

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
]

/* //////////////////////////////////////////////////
DESCRIPTION COMPONENT
////////////////////////////////////////////////// */
export default function SectionHero() {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className="flex flex-col justify-center items-center p-12 md:p-28">

            <div className="text-3xl md:text-5xl text-colorTextLight font-bold flex flex-col gap-2 items-center text-center">
                <h1>Let trusted contacts know where you go.</h1>
                <h1>They could save your life.</h1>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-20 mt-12 md:mt-32">

                <div className="cursor-none sm:block w-[300px] h-[200px] sm:w-[420px] sm:h-[270px]">
                    <Spline scene="https://prod.spline.design/4pizyTiul0IWxtKj/scene.splinecode" />
                </div> 

                <div className="flex flex-col gap-6 items-center lg:items-start">
                    <div className="flex flex-col gap-2 items-center lg:items-start">
                        <p className="text-xl sm:text-3xl font-bold text-colorTextLight">Create your Travel Form</p>
                        <p className="text-md sm:text-lg font-medium">{`It's easy and respect your privacy`}</p>
                    </div>
                    <div className="">
                        <NavLink to="/form">
                            <NavButton buttonStyle="default">Get started now</NavButton>
                        </NavLink>
                    </div>
                </div>
                
            </div>

            <div className="mt-16 text-colorTextLight animate-bounce z-0"><ChevronsDown size={48} /></div>

            <h2 className="text-3xl md:text-5xl font-bold text-colorTextLight mt-32 md:mt-60">Why using Travel Form Generator ?</h2>

            <div className="grid md:grid-cols-2 gap-12 justify-between items-center mt-16 md:mt-32">
                {infos.map((info) => (
                    <div key={info.title} className="flex flex-col sm:flex-row gap-4 items-center border border-color2 rounded-md h-full p-4 md:p-6 bg-colorBackground bg-opacity-60 lg:w-96">
                        <div className="text-color2">{info.icon}</div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-white text-lg">{info.title}</p>
                            <p className="text-md">{info.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-colorTextLight mt-32 md:mt-60">Some stats and facts</h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12 justify-between items-center mt-16 md:mt-32">
                {stats.map((stat) => (
                    <div key={stat.title} className="flex flex-col sm:flex-row gap-4 items-center border border-color2 rounded-md h-full p-4 md:p-6 bg-colorBackground bg-opacity-60 lg:w-96">
                        <div className="font-bold text-color2 text-5xl">{stat.icon}</div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-white text-lg">{stat.title}</p>
                            <p className="text-md">{stat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
