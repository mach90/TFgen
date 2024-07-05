/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { NavLink } from 'react-router-dom';
import LogoSVG from '../../public/logo.svg';

/* //////////////////////////////////////////////////
NAVLOGO COMPONENT
////////////////////////////////////////////////// */
export default function NavLogo() {
    return (
        <div className='flex flex-row items-center gap-2'>
            <NavLink to='/'>
                <img src={LogoSVG} alt="🏕️" width="48px"/>
            </NavLink>
            <NavLink to='/' className="flex flex-col">
                <h1 className="text-lg font-bold text-color2">TFGen</h1>
                <h2 className="text-sm font-bold text-textColorLight">your Travel Form Generator</h2>
            </NavLink>
        </div>
    );
}
