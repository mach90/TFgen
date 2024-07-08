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
        <div className='flex flex-col md:flex-row justify-between bg-colorBackground px-6 md:px-10 xl:px-20 py-4 gap-6 border-b border-color2 sticky top-0 z-10 shadow-2xl shadow-gray-950'>
            <NavLogo />
            <NavMenu />
        </div>
    );
}
