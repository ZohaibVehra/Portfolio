import ProjectCard from "./ProjectCard";


const Projects: React.FC = () => {
  const expenseDesc = "An app to help you plan, track, and manage your travel expenses with a clean UI and simple user flow. Allows users to create trips, enter expenses and generate spending reports."
const medicalDesc = "Search a medical research database and discover articles ranked by relevance, publication date, or citation count. Filter for free full-text papers and use an AI assistant to refine and optimize search queries.";

  return (
    <div id="projects" className="scroll-mt-16 md:scroll-mt-24">
        <div className="mt-5 md:mt-5 w-full h-20 flex gap-15 justify-center text-lg text-gray-600 font-bold flex items-center px-[10%]">
            <div className="hidden md:block flex-1 h-px bg-gray-400" />
            <h1 className="text-2xl whitespace-nowrap scale-y-110">MY LATEST PROJECTS</h1>
            <div className="hidden md:block flex-1 h-px bg-gray-400" />
        </div>
        <div 
            className="pb-5 md:pb-0 w-full flex flex-col md:flex-row gap-6 md:gap-10 px-6 md:px-[8%]"
        >
            <ProjectCard link="https://medicalresearchassistant.onrender.com/" source="https://github.com/ZohaibVehra/MedicalResearchAssistant" desc={medicalDesc} img="Medical1.png" title="AI Medical Research Assistant" date="Sep 2025"/>
            <ProjectCard link="" source="https://github.com/ZohaibVehra/expense-tracker-api" desc={expenseDesc}  img="Expense1.png" title="Expense Tracker App" date="May 2025"/>
        </div>
    </div>
  );
};

export default Projects;
