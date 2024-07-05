/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";
import SectionPrivacy from "../components/SectionPrivacy";
import Container from "../components/Container";

/* //////////////////////////////////////////////////
PRIVACY PAGE COMPONENT
////////////////////////////////////////////////// */
export default function PagePrivacy() {
    return (
            <Container containerID="about">
                <NavBar/>
                <SectionPrivacy />
                <FooterBar/> 
            </Container>
    );
}
