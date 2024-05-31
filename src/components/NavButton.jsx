export default function NavButton({children, buttonStyle = 'default', onClick, onMouseOver, onMouseOut}) {
    const buttonStyleDefault = "text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-base font-medium flex gap-2";
    const buttonStyleDisabled = "text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-base font-medium flex gap-2";
    const buttonStyleActive = "text-gray-300 bg-teal-800 hover:bg-teal-600 hover:text-white rounded-md px-3 py-2 text-base font-medium flex gap-2";
    const buttonStyleBounce = "text-gray-300 bg-teal-800 hover:bg-teal-600 hover:text-white flex rounded-md px-3 py-2 text-base font-medium hover:animate-bounce gap-2";
    const buttonStyleArrow = "text-gray-300 bg-gray-500 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-2";
    const buttonStyleReset = "text-gray-300 bg-redAccent hover:bg-redAccentLight hover:text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-2";

    let selectedClassName ='';
    if(buttonStyle === 'default')  selectedClassName = buttonStyleDefault;
    if(buttonStyle === 'disabled') selectedClassName =  buttonStyleDisabled;
    if(buttonStyle === 'active') selectedClassName =  buttonStyleActive;
    if(buttonStyle === 'bounce') selectedClassName =  buttonStyleBounce;
    if(buttonStyle === 'arrow') selectedClassName =  buttonStyleArrow;
    if(buttonStyle === 'reset') selectedClassName =  buttonStyleReset;

    return (
      <>
        <button type="button" className={selectedClassName} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
          {children}
        </button>
      </>
    );
}
