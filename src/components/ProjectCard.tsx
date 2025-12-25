import { useState } from "react";

type ProjectCardProps = {
  img: string;
  date: string;
  title: string;
  desc: string;
  link: string;
  source: string;
}

type FSProps = {
  onClose: () => void;
  img: string;
  desc: string;
  link: string;
  source: string;
  title: string;
}

const FS: React.FC<FSProps> = ({ onClose, img, desc, link, source, title}) => {
  let l = true
  if(link.length < 4) l = false
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
    >
      <div
        className="w-[95%] md:w-[65%] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-white mb-2 md:mb-4 text-lg md:text-2xl font-semibold">{title}</h1>
        <div className="relative w-full md:w-[90%]">
          <button
            onClick={onClose}
            className="cursor-pointer absolute -top-9 md:-top-10 right-2 md:right-3 text-white text-xl">
            x
          </button>
        </div>
        <div className="p-1 md:py-8 mb-3 rounded-lg md:rounded-2xl w-full md:w-[90%] bg-gray-300 items-center flex justify-center">
          <img src={img} className="md:text-lg rounded-lg md:rounded-xl md:max-w-[95%]" />
        </div>
        
        <h1 className="mx-2 text-left text-white md:text-lg mb-1 md:mb-0">
          {desc}
        </h1>
        {l && <a href={link} target="_blank" className="text-blue-300 hover:underline hover:text-blue-400">Open App</a>}
        <a href={source} target="_blank" className="text-center md:text-lg text-blue-300 hover:underline hover:text-blue-400">Source Code</a>
        
      </div>
    </div>
  );
};



const ProjectCard: React.FC<ProjectCardProps> = ({ img, date, title, desc, link, source }) => {
  const [FSs, setFSs] = useState<boolean>(false)

  

  return (
    <>
      {FSs  && <FS onClose={() => setFSs(false)}
        img={img}
        desc={desc}
        link={link}
        source={source}
        title={title}/>}
      <button className="max-h-[90%] hover:bg-gray-100 transition rounded-xl w-full md:flex-1 bg-[#fdfdfd] rounded-lg border-3 border-gray-300
      flex flex-col p-3"
      onClick={() => setFSs(!FSs)}>
        <img src={img} className="rounded-lg md:m-3 md:mb-0"/>
        <h1 className="ml-[1%] text-left px-1 pt-2 text-md text-gray-700">{title}</h1>
        <h1 className="ml-[1%] text-left px-1 md:pt-2 text-sm text-gray-500">{date}</h1>
      </button>
    </>
    
  );
};

export default ProjectCard;
