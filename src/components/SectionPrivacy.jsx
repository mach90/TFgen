export default function SectionPrivacy() {
    return (
        <div className="flex flex-col justify-start items-center text-justify py-36 w-full gap-8 text-lg font-medium">
            <h1 className="text-4xl font-bold text-colorTextLight">Privacy</h1>
            <p className="w-96">{`The Travel Form PDF is generated entirely client-side using JavaScript and React-pdf library, ensuring data privacy and security.`}</p>
            <p className="w-96">{`No form data or resulting PDF is stored or processed on any server, keeping your information confidential.`}</p>
        </div>
    );
}
