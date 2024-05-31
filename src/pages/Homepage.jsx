/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import Header from "../components/Header";
import Description from "../components/Description";
import Informations from "../components/Informations";
import Footer from "../components/Footer";

/* //////////////////////////////////////////////////
HOMEPAGE PAGE COMPONENT
////////////////////////////////////////////////// */
export default function Homepage() {
    return (
        <div className="bg-darkBackground min-h-screen flex flex-col justify-between">
            <Header/>
            <Description/>
            <Informations/>
            <Footer/>
        </div>
    );
}
