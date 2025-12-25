import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="border-t-3 border-gray-400 w-full md:flex-1 scroll-mt-16 md:scroll-mt-24">
        <div className="w-full h-20 flex gap-16 justify-center text-lg text-gray-600 font-bold items-center px-[10%]">
            <div className="mt-10 md:mt-10 hidden md:block flex-1 h-px bg-gray-400" />
            <h1 className="mt-10 md:mt-10 text-2xl whitespace-nowrap scale-y-110">SKILLS</h1>
            <div className="mt-10 md:mt-10 hidden md:block flex-1 h-px bg-gray-400" />
        </div>

        <div className="w-full flex flex-col mb-8 px-6 py-6 gap-6 items-center">
            <SkillCard image="/1.png" title="Frontend" values={["React", "Next", "Tailwind"]}/>
            <SkillCard image="/2.png" title="Backend" values={["Node.js", "Express.js", "SpringBoot"]}/>
            <SkillCard image="/3.png" title="Languages" values={["TypeScript", "JavaScript", "Python", "Java"]}/>
            <SkillCard image="/3.png" title="Databases" values={["MongoDB", "PostgreSQL", "SQL", "NoSQL"]}/>
            <SkillCard image="/4.png" title="Developer Tools" values={["RestAPI", "GraphQL", "Jenkins", "Git", "Kubernetes"]}/>
        </div>
    </div>
  );
};

export default Skills;
