import { useState, useEffect } from "react";

const Banner: React.FC = () => {
  const [activeSide, setActiveSide] = useState<"left" | "right" | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [introStarted, setIntroStarted] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);

    requestAnimationFrame(() => setIntroStarted(true));
    const t = setTimeout(() => setIntroFinished(true), 2000);

    return () => {
      window.removeEventListener("resize", check);
      clearTimeout(t);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !introFinished) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setActiveSide(x < rect.width / 2 ? "left" : "right");
  };

  const handleMouseLeave = () => {
    if (!isDesktop || !introFinished) return;
    setActiveSide(null);
  };


  return (
    <div
      className="relative w-full h-[200px] md:h-[550px] overflow-hidden mt-10 md:mt-18 z-[45]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 w-full transition-transform duration-1500 ease-in-out border-b-2 border-gray-500"
        style={{
          transform: !introStarted
            ? "translateX(-100%)"
            : activeSide === "left"
            ? "translateX(0)"
            : activeSide === "right"
            ? "translateX(-100%)"
            : "translateX(-50.1%)",
        }}
      >
        <img
          src="robotics.png"
          className="block md:hidden w-full h-full object-cover"
        />

        <img
          src="robotic.png"
          className="hidden md:block w-full h-full object-cover"
        />

      </div>

      <div
        className="absolute inset-0 w-full transition-transform duration-1500 ease-in-out border-b-2 border-gray-500"
        style={{
          transform: !introStarted
            ? "translateX(100%)"
            : activeSide === "right"
            ? "translateX(0)"
            : activeSide === "left"
            ? "translateX(100%)"
            : "translateX(50.1%)",
        }}
      >
        <img
          src="artsys.png"
          className="block md:hidden w-full h-full object-cover object-cover scale-y-[-1]"
        />

        <img
          src="artsy.png"
          className="hidden md:block w-full h-full object-cover object-cover scale-y-[-1]"
        />
      </div>

      <div className="absolute inset-0 bg-white/10 pointer-events-none" />
    </div>
  );
};

export default Banner;
