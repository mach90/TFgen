/* ████████████████████████████████████████████████████████████████████████████████████████████████████
BUTTON COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function Button({children, buttonStyle = 'default', onClick, onMouseOver, onMouseOut}) {
    const buttonStyleDefault = "px-3 py-2 flex gap-2 bg-buttonDefault text-buttonDefaultText font-heading font-normal tracking-wider text-md rounded-md hover:scale-110 duration-300";
    const buttonStyleTransparent = "px-3 py-2 flex gap-2 bg-transparent text-buttonTransparentText font-heading text-md font-heading tracking-wider font-normal hover:underline";
    const buttonStyleSocial = "text-textColor2 hover:text-colorTextLight font-heading tracking-wider bg-textColor1 rounded-md px-3 py-2 text-md flex gap-2 font-heading font-normal";
    const buttonStyleDisabled = "text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm flex gap-2";
    const buttonStyleMain = "text-stone-100 bg-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm flex gap-2";
    const buttonStyleBounce = "text-gray-300 bg-teal-800 hover:bg-teal-600 hover:text-white flex rounded-md px-3 py-2 text-sm hover:animate-bounce gap-2";
    const buttonStyleArrow = "text-textColor2 hover:text-colorTextLight font-bold bg-textColor1 rounded-md px-3 py-2 text-sm flex gap-2";
    const buttonStyleReset = "text-textColor2 hover:text-colorTextLight font-bold bg-error rounded-md px-3 py-2 text-sm flex flex-row gap-2";
    const buttonStyleDownload = "text-textColor2 hover:text-colorTextLight font-bold bg-green-600 rounded-md px-3 py-2 text-sm flex flex-row items-center gap-2";

    let selectedClassName ='';
    if(buttonStyle === 'default')  selectedClassName = buttonStyleDefault;
    if(buttonStyle === 'social')  selectedClassName = buttonStyleSocial;
    if(buttonStyle === 'transparent')  selectedClassName = buttonStyleTransparent;
    if(buttonStyle === 'disabled') selectedClassName =  buttonStyleDisabled;
    if(buttonStyle === 'main') selectedClassName =  buttonStyleMain;
    if(buttonStyle === 'bounce') selectedClassName =  buttonStyleBounce;
    if(buttonStyle === 'arrow') selectedClassName =  buttonStyleArrow;
    if(buttonStyle === 'download') selectedClassName =  buttonStyleDownload;
    if(buttonStyle === 'reset') selectedClassName =  buttonStyleReset;

    return (
      <>
        <button type="button" className={selectedClassName} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
          {children}
        </button>
      </>
    );
}

