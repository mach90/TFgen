/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Container from '../components/Container';
import NavButton from '../components/NavButton';
import Footer from "../components/Footer";

/* //////////////////////////////////////////////////
404 NOT FOUND PAGE COMPONENT
////////////////////////////////////////////////// */
export default function PageNotFound() {
    return (
        <div className="bg-darkBackground min-h-screen flex flex-col justify-between">
            <Header/>
            <Container>
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-darkH1">
                        <span className="text-redAccent">404</span>
                        <p>Page not found.</p>
                    </h1>
                    <p className="mt-6 text-sm sm:text-lg md:text-2xl leading-8 text-darkP">
                        We apologize, but the page you are trying to access cannot be found.
                    </p>
                </div>
                <div className="mt-6">
                    <NavLink to="/"><NavButton buttonStyle='active'>
                        Go to Homepage
                    </NavButton></NavLink>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}
