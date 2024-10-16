/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Section404 from "../components/Section404";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
404 PAGE NOT FOUND COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function Page404() {
    return (
            <Container containerID="404">
                <NavBar/>
                <Section404/>
                <FooterBar/> 
            </Container>
    );
}
