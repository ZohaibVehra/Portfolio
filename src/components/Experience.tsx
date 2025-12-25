type WorkCardProp = {
    company: string;
    icon: string;
    title: string;
    location: string;
    dates: string;
    bulletPoints: string[];
}

const WorkCard: React.FC<WorkCardProp> = ({ company, icon, title, location, dates, bulletPoints}) => {
    return(
        <div className="rounded-xl w-[90%] md:w-[70%] flex flex-col bg-[#f1f0f2] border-3 border-gray-300 overflow-hidden">
            <div className="relative">
                <div className="pt-5 pb-2 md:pb-5 md:pt-5 px-2 md:px-10 flex flex-row items-center">
                    <div className="hidden md:flex bg-[#fdfdfd] h-24 w-24 items-center justify-center rounded-xl z-[2]">
                        <img src={icon} className="h-20 block" />
                    </div>
                    
                    <div className="ml-[2%] flex flex-col justify-center">
                        <h1 className="text-lg md:text-2xl font-semibold text-gray-700">{company}</h1>
                        <h2 className="md:text-xl font-semibold text-gray-700">{title}</h2>
                        <p className="text-sm md:text-lg font-semibold text-gray-600">{location}</p>
                        <p className="md:hidden text-sm md:ml-auto md:text-lg font-semibold text-gray-600">{dates}</p>
                    </div>
                    <p className="hidden md:block text-sm md:ml-auto md:text-lg font-semibold text-gray-600">{dates}</p>
                    <img src="smoothGradientVertical.png" className = "opacity-60 absolute top-0 left-0 h-full w-full"/>
                </div>

            </div>
            
            <img src="gradientVertical.png" className="w-full max-h-[6px] opacity-70"/>
            <div className="rounded-b-xl bg-[#fdfdfd] px-10 py-5 text-xl text-gray-800">
                <ul className="space-y-2">
                    {bulletPoints.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shrink-0" />
                        <p className="text-sm md:text-lg">{bullet}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
const Experience: React.FC = () => {
  return (
    <>
        <header className="mt-5 w-full bg-[#ecebef] pb-10 scroll-mt-16 md:scroll-mt-24" id="experience">
            <div className="mt-16 hidden md:block flex-1 h-[2px] bg-gray-400" />
            <div className="w-full h-20 flex gap-16 justify-center text-lg text-gray-600 font-bold items-center px-[10%]">
                <div className="mt-10 md:mt-10 hidden md:block flex-1 h-px bg-gray-400" />
                <h1 className="mt-10 md:mt-10 text-2xl whitespace-nowrap scale-y-110">WORK EXPERIENCE</h1>
                <div className="mt-10 md:mt-10 hidden md:block flex-1 h-px bg-gray-400" />
            </div>

            <div className="mt-8 w-full flex flex-col gap-6 px-6 justify-items items-center">
                <WorkCard company="Tiny Dinner" icon="TinyDinner.png" title="Software Engineer Full-Stack" location="New York, NY, USA" dates="Sep 2025 - Current" bulletPoints={["Migrated key parts of the platform’s React/Next.js frontend and Node.js/Express backend from Firebase to PostgreSQL, ensuring data integrity and improving query performance by 25%", "Developed modular, reusable UI components and optimized user flows for maintainability and scalability, reducing frontend code redundancy by 20%", "Collaborated with founders in Agile sprints to plan releases, track progress, and align engineering goals with business needs", "Implemented end-to-end tests using Playwright to validate core platform functionality, identifying 10+ bugs pre-release and improving deployment stability"]} />
                <WorkCard company="AMD - Advanced Micro Devices, Inc" icon="AMD.png" title="Software Development Intern" location="Markham, ON, Canada" dates="May 2023 - Apr 2024" bulletPoints={["Developed a full-stack application with a React dashboard and Node.js/Express backend connected to MongoDB, enabling engineers to monitor and delete stale branches/pull requests, resulting in a 40% reduction in repository size and a 15% decrease in average Git operation time", "Designed a React dashboard with real-time data updates and client-side state management, enabling engineers to track metrics and reducing manual lookup time by 40%", "Optimized RESTful API endpoints in Node.js/Express to serve queries, with the backend executing GraphQL requests to GitHub APIs for repository metrics, allowing look up of 100 branches/pull requests per request"]} />
                <WorkCard company="Molex LLC" icon="Molex.png" title="Software Developer Intern" location="Waterloo, ON, Canada" dates="May 2022 - Aug 2022" bulletPoints={["Created a React dashboard to visualize test results integrated with a Node.js/Express API pulling data from MongoDB Atlas", "Implemented CRUD operations for managing device test configurations via RESTful endpoints, ensuring reliable storage and retrieval of data across 1,000+ test runs", "Built automated Jest unit tests, catching 15+ bugs before deployment and improving app stability"]} />
                <WorkCard company="Molex LLC" icon="Molex.png" title="Embedded Developer Intern" location="Waterloo, ON, Canada" dates="Sep 2021 - Apr 2022" bulletPoints={["Created mock data to test dummy product versions of existing company products on test servers allowing multiple engineers to work on products at once saving the company $2.4M/year", "Wrote 160 live testing automation scripts in Python through Gauge Framework on Jenkins automation server’s continuous delivery pipelines to enforce code quality preventing an estimated 32 bugs from entering production", "Performed unit testing and debugging on company Ethernet Industrial Protocol code to verify bilateral communication"]} />
            </div>
        </header>
    </>
  );
};

export default Experience;
