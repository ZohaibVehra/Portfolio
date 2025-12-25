type MobileDropDownProps = {
  onClose: () => void;
};

const MobileDropDown: React.FC<MobileDropDownProps> = ({ onClose }) => {
  return (
    <>
        <header className="fixed top-16 w-full left-0 bg-[#1f1f1f] z-50 flex flex-col">
            <nav className="flex flex-col text-white text-lg text-center">
                {[
                    { label: "Projects", id: "projects" },
                    { label: "Experience", id: "experience" },
                    { label: "Skills", id: "skills" },
                    { label: "About", id: "about" },
                    { label: "Contact", id: "contact" },
                ].map(({ label, id }) => (
                <div key={id} className="border-b border-white/10">
                    <a
                        href={`#${id}`}
                        className="block py-6"
                        onClick={onClose}
                    >
                    {label}
                    </a>
                </div>
                ))}
                <div className="border-t border-white/10">
                  <a
                    href="https://www.linkedin.com/in/zohaib-vehra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 py-6 hover:text-gray-400 transition"
                  >
                    <img
                      src="linkedin.png"
                      alt="LinkedIn"
                      className="h-6 w-6"
                    />
                    <span>LinkedIn</span>
                  </a>
                </div>
            </nav>
        </header>
    </>
  );
};

export default MobileDropDown;
