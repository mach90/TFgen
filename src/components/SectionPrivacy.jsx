/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const sectionPrivacyContainerStyle = "flex flex-col justify-start items-center text-justify px-12 py-12 w-full gap-8 text-lg font-medium text-secondaryText font-default";
const sectionPrivacyTitleStyle = "text-3xl md:text-4xl font-bold font-heading";
const sectionAboutParagraphStyle = "sm:w-96";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
SECTION PRIVACY COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function SectionPrivacy() {
    return (
        <div className={sectionPrivacyContainerStyle}>
            <h1 className={sectionPrivacyTitleStyle}>Privacy</h1>
            <p className={sectionAboutParagraphStyle}>The Travel Form PDF is generated entirely client-side using JavaScript and React-pdf library, ensuring data privacy and security.</p>
            <p className={sectionAboutParagraphStyle}>No form data or resulting PDF is stored or processed on any server, keeping your information confidential.</p>
        </div>
    );
}
