/* //////////////////////////////////////////////////
CONTAINER COMPONENT
////////////////////////////////////////////////// */
export default function Container({children, containerID}) {
    return (
        <div id={containerID} className="bg-color1 text-textColor1 flex flex-col justify-between shadow-lg min-h-screen bg-[url('/src/img/background.jpg')] bg-fixed">
            {children}
        </div>
    );
}
