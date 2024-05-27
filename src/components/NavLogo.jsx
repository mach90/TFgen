import { NavLink } from 'react-router-dom';
import LogoSVG from '../img/logo.svg';

export default function NavLogo() {
    return (
        <div className='flex flex-row items-center gap-4'>
            <NavLink to='/'>
                <img src={LogoSVG} alt="🏕️" />
            </NavLink>
            <NavLink to='/'>
                <h1 className="text-xl font-bold tracking-tight text-gray-300 hover:text-gray-200">EPAgen</h1>
            </NavLink>
        </div>
    );
}
