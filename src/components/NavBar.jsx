import NavMenu from './NavMenu';
import NavLogo from './NavLogo';

export default function NavBar() {
    return (
        <div className='flex flex-col justify-center items-center py-2 px-8 gap-y-4 rounded-md  md:flex-row md:justify-between'>
            <NavLogo />
            <NavMenu />
        </div>
    );
}
