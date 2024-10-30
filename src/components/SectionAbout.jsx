/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const sectionAboutContainerStyle = "min-h-screen flex flex-col justify-center items-center px-12 py-12 md:py-20 lg:py-28 xl:py-40 gap-8";
const sectionAboutTitleStyle = "text-4xl md:text-5xl font-bold font-heading text-secondarySubheading rotate-[-3deg]";
const sectionAboutParagraphStyle = "text-md md:text-xl text-justify text-secondaryText max-w-md";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
SECTION ABOUT COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function SectionAbout() {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={sectionAboutContainerStyle}>
            <h1 className={sectionAboutTitleStyle}>About the project</h1>
            <p className={sectionAboutParagraphStyle}>A strong interest in mysterious disappearances led to the realization that many tragic outcomes could be prevented with timely action and better knowledge of individuals.</p>
            <p className={sectionAboutParagraphStyle}>This insight inspired the creation of this project. Its goal is to promote safer travel and encourage people to plan their trips better while involving others.</p>
        </div>
    )
}
