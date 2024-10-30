/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const sectionPrivacyContainerStyle = "min-h-screen flex flex-col justify-center items-center px-12 py-12 md:py-20 lg:py-28 xl:py-40 gap-8";
const sectionPrivacyTitleStyle = "text-4xl md:text-5xl font-bold font-heading text-secondarySubheading rotate-[2deg]";
const sectionAboutParagraphStyle = "text-md md:text-xl text-justify text-secondaryText max-w-md";

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
