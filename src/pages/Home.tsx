//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
import SectionHero from "../features/home/SectionHero";
import SectionInfos from "../features/home/SectionInfos";
import Container from "../ui/Container";
import ControlArrowUp from "../ui/ControlArrowUp";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// HOME PAGE
//////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Home() {
    return (
        <Container containerID="homepage">
            <SectionHero/>
            <SectionInfos/>
            <ControlArrowUp />
        </Container>
    );
}
