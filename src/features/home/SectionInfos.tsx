//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
import { infos, stats, stories } from "../../data/data.ts";
import Spacer from "./Spacer";
import { IoDocumentText, IoStatsChart } from "react-icons/io5";
import { FaBookOpen, FaQuestion } from "react-icons/fa";
import ExampleForm from "../../img/example-form.avif";
import ExampleFormPDF from "../../pdf/example.pdf";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////////
const sectionInfosContainerStyle = "bg-bgPattern w-full font-default flex flex-col items-center py-24";

const sectionInfosBlockStyle = "w-full h-full flex flex-col gap-12 justify-center items-center p-12 lg:px-[20%]";
const sectionInfosBlockWithImageStyle = "grid grid-cols-full md:grid-cols-2 md:flex-row w-full h-full gap-4 py-8 border-t border-primaryBorder";
const sectionInfosBlockStoriesStyle = "flex flex-col w-full justify-center items-center gap-12 py-12"
const sectionInfosBlockTitleStyle = "flex flex-col items-center text-center md:flex-row gap-4 text-3xl md:text-6xl font-bold font-heading text-primaryHeading max-w-5xl";
const sectionInfoBlockTitleIconStyle = "rounded-full p-2 bg-primaryIconBg text-primaryHeading";
const sectionInfosBlockParagraphStyle = "text-lg font-normal max-w-3xl text-justify";

const sectionInfos2CardsContainerStyle = "grid md:grid-cols-2 gap-12 justify-between items-center";
const sectionInfos3CardsContainerStyle = "grid md:grid-cols-2 xl:grid-cols-3 gap-12 justify-between items-center";
const sectionInfosImageParagraphStyle = "p-8 flex flex-col gap-4 justify-between";

const sectionInfosImageStyle = "h-max w-full md:rounded-r-2xl";

const sectionInfosCardContainerInfosStyle = "relative flex flex-col sm:flex-col gap-4 items-end rounded-xl lg:max-w-96 translate-y-2 hover:translate-y-0 duration-200 h-full bg-alternate shadow-lg";
const sectionInfosCardContainerStatsStyle = "relative flex flex-col sm:flex-col gap-4 items-end rounded-xl lg:max-w-96 translate-y-2 hover:translate-y-0 duration-200 h-full bg-primaryIconBg bg-alternate shadow-lg";
const sectionInfosCardIconInfosStyle = "absolute z-20 top-2 right-4 font-bold text-primaryIcon text-5xl p-2 bg-primaryCard rounded-full";
const sectionInfosCardIconStatsStyle = "absolute z-20 top-2 right-4 font-bold text-primaryHeading text-5xl p-2 bg-primaryCard rounded-full";
const sectionInfosCardInfosContainerStyle = "flex flex-col gap-2 bg-bgCard card-clip-path rounded-lg pt-16 pb-6 px-6 h-full w-full";
const sectionInfosCardInfosTitleStyle = "font-medium font-heading text-primaryHeading text-2xl border-b border-primaryBorder";
const sectionInfosCardInfosDescriptionStyle = "text-md text-primaryText";

const iconSize = 40;

//////////////////////////////////////////////////////////////////////////////////////////////////////
// INFOS SECTION
//////////////////////////////////////////////////////////////////////////////////////////////////////
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
                <h2 className={sectionInfosBlockTitleStyle}><IoDocumentText className={sectionInfoBlockTitleIconStyle} /> Specimen</h2>
                <a href={ExampleFormPDF} target="_blank" className="cursor-eye"><img src={ExampleForm} alt="PDF Form example" /></a>
            </div>
            
            <Spacer />

            <div className={sectionInfosBlockStoriesStyle}>
                <h2 className={sectionInfosBlockTitleStyle}><FaBookOpen className={sectionInfoBlockTitleIconStyle} /> Stories</h2>
                {stories.map((story) => (
                    <div className={sectionInfosBlockWithImageStyle} key={story.storyTitle}>
                        <img src={story.storyImage} alt={story.storyTitle} className={sectionInfosImageStyle}/>
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


/*
Privacy
The Travel Form PDF is generated entirely client-side using JavaScript and React-pdf library, ensuring data privacy and security.
No form data or resulting PDF is stored or processed on any server, keeping your information confidential.

About the project
A strong interest in mysterious disappearances led to the realization that many tragic outcomes could be prevented with timely action and better knowledge of individuals.
This insight inspired the creation of this project. Its goal is to promote safer travel and encourage people to plan their trips better while involving others.
*/