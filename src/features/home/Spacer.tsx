import RouteSVG from "../../img/route.svg";

const sectionInfosSpacerStyle = "h-40 w-full flex justify-center";

function Spacer() {
    return <div className={sectionInfosSpacerStyle}><img src={RouteSVG} alt="Route SVG" /></div>;
};

export default Spacer;