import FooterSocials from "./FooterSocials";
import FooterMenu from "./FooterMenu";

/* //////////////////////////////////////////////////
FOOTER COMPONENT
////////////////////////////////////////////////// */
export default function FooterBar() {
    return (
        <div className="flex flex-row items-center justify-between bg-colorBackground px-6 md:px-10 xl:px-20 py-4 border-t border-color2 sticky bottom-0 z-10">
            <FooterSocials />
            <FooterMenu />
        </div>
    );
}
