/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import NavMenu from './NavMenu';
import NavLogo from './NavLogo';

/* //////////////////////////////////////////////////
NAVBAR COMPONENT
////////////////////////////////////////////////// */
export default function NavBar() {
    return (
        <div className='flex flex-row justify-between bg-colorBackground px-20 py-4 border-b border-color2 sticky top-0 z-10 shadow-2xl shadow-gray-950'>
            <NavLogo />
            <NavMenu />
        </div>
    );
}
