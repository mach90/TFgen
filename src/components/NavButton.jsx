export default function NavButton({children, active, bounce, onMouseOver, onMouseOut}) {
    return (
      <>
      {active &&
        <button type="button" className="text-gray-300 bg-teal-800 hover:bg-teal-600 hover:text-white rounded-md px-3 py-2 text-base font-medium flex gap-2">
          {children}
        </button>
      }
      {!active && !bounce &&
        <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} type="button" className="text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-base font-medium flex gap-2">
          {children}
        </button>
      }
      {bounce &&
        <button type="button" className="text-gray-300 bg-teal-800 hover:bg-teal-600 hover:text-white flex rounded-md px-3 py-2 text-base font-medium hover:animate-bounce gap-2">
          {children}
        </button>
      }
      </>
    );
}
