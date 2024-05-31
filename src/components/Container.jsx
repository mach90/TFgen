/* //////////////////////////////////////////////////
CONTAINER COMPONENT
////////////////////////////////////////////////// */
export default function Container({children, containerID}) {
    return (
        <div id={containerID} className="my-4 mx-[2vw] py-16 px-4 md:mx-[4vw] lg:mx-[6vw] xl:mx-[12vw] items-center justify-center gap-2 text-center flex flex-col">
            {children}
        </div>
    );
}
