export default function Button({children, buttonStyle = 'default', onClick, onMouseOver, onMouseOut}) {
    const buttonStyleDefault = "text-textColor2 hover:text-colorTextLight font-bold bg-color2 rounded-md px-3 py-2 text-sm flex gap-2";
    const buttonStyleSocial = "text-textColor2 hover:text-colorTextLight font-bold bg-textColor1 rounded-md px-3 py-2 text-sm flex gap-2";
    const buttonStyleTransparent = "text-textColor1 hover:text-colorTextLight font-bold bg-transparent border border-textColor1 hover:border-colorTextLight rounded-md px-3 py-2 text-sm flex gap-2";
    const buttonStyleDisabled = "text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm flex gap-2";
    const buttonStyleMain = "text-stone-100 bg-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm flex gap-2";
    const buttonStyleBounce = "text-gray-300 bg-teal-800 hover:bg-teal-600 hover:text-white flex rounded-md px-3 py-2 text-sm hover:animate-bounce gap-2";
    const buttonStyleArrow = "text-textColor2 bg-color2 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm flex flex-row gap-2";
    const buttonStyleReset = "text-textColor2 hover:text-colorTextLight font-bold bg-color4 rounded-md px-3 py-2 text-sm flex flex-row gap-2";
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

