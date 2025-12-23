import { useEffect, useState } from "react";

const useMinWidth = (minWidth: number) => {
  const [ok, setOk] = useState(window.innerWidth >= minWidth);

  useEffect(() => {
    const onResize = () => setOk(window.innerWidth >= minWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [minWidth]);

  return ok;
};

const About: React.FC = () => {

  const wideEnough = useMinWidth(1850);

  return (
    <div className="mt-5 w-full bg-[#ecebef] pb-10 scroll-mt-16 md:scroll-mt-24" id="about">
        <div className="w-full h-20 flex gap-16 justify-center text-lg text-gray-600 font-bold items-center px-[10%]">
            <div className="mt-10 md:mt-10 hidden md:block flex-1 h-px bg-gray-400" />
            <h1 className="mt-10 md:mt-10 text-2xl whitespace-nowrap scale-y-110">WHO AM I?</h1>
            <div className="mt-10 md:mt-10 hidden md:block flex-1 h-px bg-gray-400" />
        </div>
        <div className="flex justify-center w-full md:hidden px-6 mt-4">
            <img src="cleanKloe.png" className="mx-auto" />
        </div>

        {/*text about me*/}
        <div className="mt-4 md:mt-8 flex flex-col md:flex-row items-stretch w-full px-4 md:px-[10%] gap-8">
            <div className="basis-full md:basis-[55%] flex flex-col items-center">
                <p className="py-4 text-lg font-semibold text-gray-700 scale-y-105">
                Hey there! I’m Zohaib, a software developer specializing in Full-Stack 
                Development and a graduate of Electrical Engineering from McMaster University.
                <br /><br />
                There's nothing I enjoy more than getting lost in projects that push me to
                improve my skills.
                <br/><br/>
                Other parts of tech that I love learning about includes Embedded Development, IoT, Generative AI and Automation Scripting
                </p>
                {wideEnough && <h1 className="hidden md:block mt-12 text-center text-2xl font-bold text-gray-700 scale-y-105">Off the Clock</h1>}
                <div  />
                {wideEnough && <div className="hidden md:block mt-4 py-5 gap-4 bg-[#f1f0f2] w-[80%] h-80 rounded-xl border-2 border-gray-400 flex flex-col justify-center">
                    <div className="mt-5 px-30 h-[45%] flex flex-row 
                    justify-center items-center gap-25">
                        <div className="h-[90%] w-[25%] flex flex-col justify-center items-center">
                            <img
                                src={"/paint.png"}
                                alt="Paint Pallet Icon"
                                className="h-[80%]"
                            />
                            <h1 className="text-lg font-semibold">Digital Painting</h1>
                        </div>
                        <div className="h-[90%] w-[25%] flex flex-col justify-center items-center">
                            <img
                                src={"/dogs.png"}
                                alt="Dog Head Icon"
                                className="h-[110%]"
                            />
                            <h1 className="text-lg font-semibold">Dogs</h1>
                        </div>
                        <div className="h-[90%] w-[25%] flex flex-col justify-center items-center">
                            <img
                                src={"/basketball.png"}
                                alt="Basketball Icon"
                                className="h-[80%]"
                            />
                            <h1 className="text-lg font-semibold">Basketball</h1>
                        </div>
                    </div>
                    <div className="px-30 h-[45%] flex flex-row 
                    justify-center items-center gap-25">
                        <div className="mb-3 h-[90%] w-[25%] flex flex-col justify-center items-center">
                            <img
                                src={"/cook.png"}
                                alt="Wok Icon"
                                className="h-[90%]"
                            />
                            <h1 className="text-lg font-semibold">Cooking</h1>
                        </div>
                        <div className="h-[90%] w-[25%] flex flex-col justify-center items-center">
                            <img
                                src={"/game.png"}
                                alt="Video Game Icon"
                                className="h-[80%]"
                            />
                            <h1 className="text-lg font-semibold">Video Games</h1>
                        </div>
                    </div>

                </div>
            }
            </div>

            <div className="hidden md:block basis-full md:basis-[45%] h-64 md:h-auto relative">
                <img src="gradient.png" className = "h-full max-w-[0.7%]"/>
                <img src="smoothGradient.png" className = "opacity-20 absolute top-0 left-0 h-full w-full"/>
                <img src="cleanKloe.png" className="absolute left-[5%] top-[15%] h-[70%]"/>
            </div>
        </div>

    </div>
  );
};

export default About;
