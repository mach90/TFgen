//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
import { ReactNode } from "react";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// TYPES
//////////////////////////////////////////////////////////////////////////////////////////////////////
type ButtonProps = {
  children: ReactNode;
  buttonStyle: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// BUTTON
//////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Button({children, buttonStyle = "default", onClick, onMouseOver, onMouseOut}: ButtonProps) {
    const buttonStyleDefault = "px-2 py-2 flex gap-2 bg-buttonDefault text-buttonDefaultText font-heading font-medium uppercase tracking-wider text-xs md:text-sm rounded-md hover:scale-110 duration-300 cursor-finger";
    const buttonStyleTransparent = "px-2 py-2 flex gap-2 bg-transparent text-buttonTransparentText font-heading text-xs md:text-sm tracking-wider font-normal hover:underline cursor-finger";

    const buttonStyleSocial = "text-textColor2 hover:text-colorTextLight font-heading tracking-wider bg-textColor1 rounded-md px-3 py-2 text-md flex gap-2 font-heading font-normal cursor-finger";
    const buttonStyleDisabled = "text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-xl flex gap-2 cursor-finger";
    const buttonStyleMain = "text-stone-100 bg-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-xl flex gap-2 cursor-finger";
    const buttonStyleBounce = "text-gray-300 bg-teal-800 hover:bg-teal-600 hover:text-white flex rounded-md px-3 py-2 text-sm hover:animate-bounce gap-2 cursor-finger";
    const buttonStyleArrow = "text-buttonDefaultText hover:text-buttonDefaultText font-bold bg-buttonDefault rounded-md px-3 py-2 text-xl flex gap-2 cursor-finger";
    const buttonStyleReset = "text-errorText hover:text-errorHover font-bold bg-error rounded-md px-3 py-2 text-xl flex flex-row gap-2 cursor-finger";
    const buttonStyleDownload = "text-validText hover:text-validHover font-bold bg-valid rounded-md px-3 py-2 text-xl flex flex-row items-center gap-2 cursor-finger";

    let selectedClassName ="";
    
    if(buttonStyle === "default")  selectedClassName = buttonStyleDefault;
    if(buttonStyle === "transparent")  selectedClassName = buttonStyleTransparent;

    if(buttonStyle === "social")  selectedClassName = buttonStyleSocial;
    if(buttonStyle === "disabled") selectedClassName =  buttonStyleDisabled;
    if(buttonStyle === "main") selectedClassName =  buttonStyleMain;
    if(buttonStyle === "bounce") selectedClassName =  buttonStyleBounce;
    if(buttonStyle === "arrow") selectedClassName =  buttonStyleArrow;
    if(buttonStyle === "download") selectedClassName =  buttonStyleDownload;
    if(buttonStyle === "reset") selectedClassName =  buttonStyleReset;

    return (
      <>
        <button type="button" className={selectedClassName} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
          {children}
        </button>
      </>
    );
}

