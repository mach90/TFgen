/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import SectionAbout from "../components/SectionAbout";
import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";
import Container from "../components/Container";

/* //////////////////////////////////////////////////
HOMEPAGE PAGE COMPONENT
////////////////////////////////////////////////// */
export default function PageAbout() {
    return (
            <Container containerID="homepage">
                <NavBar/>
                <SectionAbout/>
                <FooterBar/> 
            </Container>
    );
}
