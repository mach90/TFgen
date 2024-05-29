import { NavLink } from 'react-router-dom';
import LogoSVG from '../img/logo.svg';

export default function NavLogo() {
    return (
        <div className='flex flex-row items-center gap-4'>
            <NavLink to='/'>
                <img src={LogoSVG} alt="🏕️" />
            </NavLink>
            <NavLink to='/'>
                <h1 className="text-xl font-bold tracking-tight px-1 text-[#4a4437] hover:text-[#665e4c] md:text-gray-200 md:hover:text-gray-50">EPAgen</h1>
            </NavLink>
        </div>
    );
}
