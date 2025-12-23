import { useState, useEffect } from "react";
import MobileDropDown from "./MobileDropDown";

const MobileTopBar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const flipDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full h-16 bg-black border-b border-gray-800 text-white
        transition-all duration-1700 ease-out
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center h-full px-6">
          <div className="mr-auto text-xl">
            ZV
          </div>

          <button
            onClick={flipDropDown}
            className="flex flex-col justify-between w-6 h-4"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-full bg-white"></span>
            <span className="block h-0.5 w-full bg-white"></span>
            <span className="block h-0.5 w-full bg-white"></span>
          </button>
        </div>
      </header>

      {isDropDown && (
        <MobileDropDown onClose={() => setIsDropDown(false)} />
      )}
    </>
  );
};

export default MobileTopBar;
