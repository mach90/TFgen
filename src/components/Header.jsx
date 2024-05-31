/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import NavBar from "./NavBar";

/* //////////////////////////////////////////////////
HEADER COMPONENT
////////////////////////////////////////////////// */
export default function Header() {
    return (
        <div className="bg-[url('./img/headerBackground.jpg')] bg-cover bg-center">
            <div className="px-[2vw] py-16 md:px-[4vw] lg:px-[6vw] xl:px-[12vw]">
                <NavBar/>
            </div>
            <div>
                <svg preserveAspectRatio="none" width="100%" height="74" viewBox="0 0 1440 74">
                    <path
                        d="M983.536 0.0434C1162.84 -1.7058 1440 50.0141 1440 50.0141V74H0V50.0141C0 50.0141 119.6 31.1925 196.91 27.0276C340.67 19.2816 420.92 53.1981 564.862 50.0141C729.473 46.3727 818.892 1.6495 983.536 0.0434Z"
                        fill="#141f28"
                        fillOpacity="1"
                    />
                </svg>
            </div>
        </div>
    );
}
