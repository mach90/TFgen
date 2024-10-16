/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const sectionAboutContainerStyle = "flex flex-col justify-start items-center text-justify px-12 py-12 w-full gap-8 text-lg font-medium text-secondaryText font-default";
const sectionAboutTitleStyle = "text-3xl md:text-4xl font-bold font-heading";
const sectionAboutParagraphStyle = "sm:w-96";

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
