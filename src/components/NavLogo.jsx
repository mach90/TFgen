/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { NavLink } from 'react-router-dom';
import LogoSVG from '../img/logo.svg';

/* //////////////////////////////////////////////////
NAVLOGO COMPONENT
////////////////////////////////////////////////// */
export default function NavLogo() {
    return (
        <div className='flex flex-row items-center gap-4'>
            <NavLink to='/'>
                <img src={LogoSVG} alt="🏕️" />
            </NavLink>
            <NavLink to='/'>
                <h1 className="text-xl font-bold tracking-tight px-1 text-brandNameDark hover:text-brandNameDarkHover md:text-brandNameLight md:hover:text-brandNameLightHover">EPAgen</h1>
            </NavLink>
        </div>
    );
}
