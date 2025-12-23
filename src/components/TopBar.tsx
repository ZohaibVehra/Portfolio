import { useEffect, useState } from "react";


const TopBar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <header
    className={`fixed top-0 left-0 z-50 w-full h-24 bg-black border-b border-gray-800 text-white
      transition-all duration-1700 ease-out
      ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center px-10 pl-30">
        
        <div className="flex-shrink-0 text-2xl font-semibold">
          Zohaib Vehra
        </div>

        <div className="flex-1"></div>
        

        <nav className="flex gap-8 text-lg">
          <a href="#projects">
            <div className="text-2xl hover:text-gray-400 cursor-pointer py-6">
              Projects
            </div>
          </a>
          <a href="#experience">
            <div className="text-2xl hover:text-gray-400 cursor-pointer py-6">
              Experience
            </div>
          </a>
          <a href="#skills">
            <div className="text-2xl hover:text-gray-400 cursor-pointer py-6">
              Skills
            </div>
          </a>
          <a href="#about">
            <div className="text-2xl hover:text-gray-400 cursor-pointer py-6">
              About
            </div>
          </a>
        </nav>

      </div>
    </header>
  );
};

export default TopBar;
