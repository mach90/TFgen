/* //////////////////////////////////////////////////
DESCRIPTION COMPONENT
////////////////////////////////////////////////// */
export default function SectionAbout() {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className="flex flex-col justify-start items-center text-justify px-12 py-12 w-full gap-8 text-lg font-medium">
            <h1 className="text-3xl md:text-4xl font-bold text-colorTextLight">About the project</h1>
            <p className="sm:w-96">{`A strong interest in mysterious disappearances led to the realization that many tragic outcomes could be prevented with timely action and better knowledge of individuals.`}</p>
            <p className="sm:w-96">{`This insight inspired the creation of this project. Its goal is to promote safer travel and encourage people to plan their trips better while involving others.`}</p>
        </div>
    )
}
