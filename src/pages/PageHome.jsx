/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import SectionHero from "../components/SectionHero";
import SectionInfos from "../components/SectionInfos";
import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";
import Container from "../components/Container";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
HOMEPAGE PAGE COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function PageHome() {
    return (
            <Container containerID="homepage">
                <NavBar/>
                <SectionHero/>
                <SectionInfos/>
                <FooterBar/> 
            </Container>
    );
}
