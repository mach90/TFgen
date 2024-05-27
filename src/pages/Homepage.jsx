import Description from "../components/Description";
import Header from "../components/Header";
import Informations from "../components/Informations";
import Footer from "../components/Footer";


export default function Homepage() {
    return (
        <div className="bg-dark3 min-h-screen flex flex-col justify-between">
            <Header/>
            <Description/>
            <Informations/>
            <Footer/>
        </div>
    );
}
