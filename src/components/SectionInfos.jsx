/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { infos, stats, stories } from "../data/data.js";
import Spacer from "./Spacer";
import { IoDocumentText, IoStatsChart } from "react-icons/io5";
import { FaBookOpen, FaQuestion } from "react-icons/fa";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const sectionInfosContainerStyle = "bg-primary w-full font-default flex flex-col items-center py-24";

const sectionInfosBlockStyle = "w-full h-full flex flex-col gap-12 justify-center items-center p-12 lg:px-[20%]";
const sectionInfosBlockWithImageStyle = "grid grid-cols-2 w-full h-full gap-4 py-8 border-t border-primaryBorder";
const sectionInfosBlockStoriesStyle = "flex flex-col w-full justify-center items-center gap-12 py-12"
const sectionInfosBlockTitleStyle = "flex flex-row gap-4 text-3xl md:text-6xl font-bold font-heading text-primaryHeading max-w-5xl";
const sectionInfoBlockTitleIconStyle = "rounded-full p-2 bg-primaryIconBg text-primaryHeading";
const sectionInfosBlockParagraphStyle = "text-lg font-normal max-w-3xl text-justify";

const sectionInfos2CardsContainerStyle = "grid md:grid-cols-2 gap-12 justify-between items-center";
const sectionInfos3CardsContainerStyle = "grid md:grid-cols-2 xl:grid-cols-3 gap-12 justify-between items-center";
const sectionInfosImageContainerStyle = "bg-exampleForm bg-cover bg-top bg-no-repeat p-4 rounded-r-2xl";
const sectionInfosImageParagraphStyle = "p-8 flex flex-col gap-4 justify-between";

const sectionInfosImageStyle = "h-96 w-full rounded-r-2xl"

const sectionInfosCardContainerInfosStyle = "relative flex flex-col sm:flex-col gap-4 items-end rounded-xl lg:max-w-96 translate-y-2 hover:translate-y-0 duration-200 h-full bg-alternate";
const sectionInfosCardContainerStatsStyle = "relative flex flex-col sm:flex-col gap-4 items-end rounded-xl lg:max-w-96 translate-y-2 hover:translate-y-0 duration-200 h-full bg-primaryIconBg";
// const sectionInfosCardCutStyle = "absolute bottom-[-2px] right-[-2px] bg-primary w-10 h-10 border-t-2 border-l-2 rounded-tl-full border-dashed border-primaryBorder";
const sectionInfosCardIconInfosStyle = "absolute z-20 top-2 right-4 font-bold text-primaryIcon text-5xl p-2 bg-primaryCard rounded-full";
const sectionInfosCardIconStatsStyle = "absolute z-20 top-2 right-4 font-bold text-primaryHeading text-5xl p-2 bg-primaryCard rounded-full";
const sectionInfosCardInfosContainerStyle = "flex flex-col gap-2 bg-primaryCard card-clip-path rounded-lg pt-16 pb-6 px-6 h-full w-full";
const sectionInfosCardInfosTitleStyle = "font-medium font-heading text-primaryHeading text-2xl border-b border-primaryBorder";
const sectionInfosCardInfosDescriptionStyle = "text-md text-primaryText";

const iconSize = 60;

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
SECTION HERO COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function sectionInfos() {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={sectionInfosContainerStyle}>
            
            <Spacer />

            <div className={sectionInfosBlockStyle}>
                <h2 className={sectionInfosBlockTitleStyle}><FaQuestion className={sectionInfoBlockTitleIconStyle} /> Why using Travel Form Generator ?</h2>
                <p className={sectionInfosBlockParagraphStyle}>Our Travel Form Generator simplifies trip planning by helping you document and share essential travel details. It's a quick way to enhance your safety and preparedness, giving you and your loved ones peace of mind during your adventures.</p>
                <div className={sectionInfos2CardsContainerStyle}>
                    {infos.map((info) => (
                        <div key={info.title} className={sectionInfosCardContainerInfosStyle}>
                            {/* <div className={sectionInfosCardCutStyle}></div> */}
                            <div className={sectionInfosCardIconInfosStyle}><info.icon size={iconSize} /></div>
                            <div className={sectionInfosCardInfosContainerStyle}>
                                <p className={sectionInfosCardInfosTitleStyle}>{info.title}</p>
                                <p className={sectionInfosCardInfosDescriptionStyle}>{info.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Spacer />

            <div className={sectionInfosBlockStyle}>
                <h2 className={sectionInfosBlockTitleStyle}><IoStatsChart className={sectionInfoBlockTitleIconStyle} /> Some stats and facts</h2>
                <p className={sectionInfosBlockParagraphStyle}>Travel safety is crucial, yet often overlooked. Understanding the risks and preparing adequately can make a significant difference in emergency situations. These statistics highlight the importance of proper planning and quick action when things go wrong.</p>
                <div className={sectionInfos3CardsContainerStyle}>
                    {stats.map((stat) => (
                        <div key={stat.title} className={sectionInfosCardContainerStatsStyle}>
                            {/* <div className={sectionInfosCardCutStyle}></div> */}
                            <div className={sectionInfosCardIconStatsStyle}><stat.icon size={iconSize} /></div>
                            <div className={sectionInfosCardInfosContainerStyle}>
                                <p className={sectionInfosCardInfosTitleStyle}>{stat.title}</p>
                                <p className={sectionInfosCardInfosDescriptionStyle}>{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Spacer />

            <div className={sectionInfosBlockStyle}>
                <h2 className={sectionInfosBlockTitleStyle}><IoDocumentText className={sectionInfoBlockTitleIconStyle} /> Example form</h2>
                <img src="../src/img/example-form.avif" alt="Form example" />
            </div>
            
            <Spacer />

            <div className={sectionInfosBlockStoriesStyle}>
                <h2 className={sectionInfosBlockTitleStyle}><FaBookOpen className={sectionInfoBlockTitleIconStyle} /> Example cases</h2>
                {stories.map((story) => (
                    <div className={sectionInfosBlockWithImageStyle}>
                        <img src={story.storyImage} alt="AAAA" className={sectionInfosImageStyle}/>
                        <div className={sectionInfosImageParagraphStyle}>
                            <h2 className={sectionInfosBlockTitleStyle}>{story.storyTitle}</h2>
                            <p className={sectionInfosBlockParagraphStyle}>{story.storyParagraph}</p>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    )
}
