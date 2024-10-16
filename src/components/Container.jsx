/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const containerStyle = "text-primaryText flex flex-col justify-between min-h-screen";
const containerBackgroundImageStyle = "fixed inset-0 z-[-10] bg-[url(./img/isoline.svg)] bg-fit bg-no-repeat";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTAINER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function Container({children, containerID}) {
    return (
        <div id={containerID} className={containerStyle}>
            <div className={containerBackgroundImageStyle}></div>
            {children}
        </div>
    );
}
