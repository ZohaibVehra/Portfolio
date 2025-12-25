import Banner from './components/Banner'
import './App.css'
import TopBar from './components/TopBar'
import Projects from './components/Projects'
import MobileTopBar from './components/MobileTopBar'
import Experience from './components/Experience'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import { useEffect, useRef, useState } from "react";

function App() {

  
  const useTimeSinceLoad = () => {
    const startTime = useRef(performance.now());
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        const elapsed = performance.now() - startTime.current;
        setElapsed(elapsed);

        if (elapsed >= 5000) {
          clearInterval(interval);
        }
      }, 16);

      return () => clearInterval(interval);
    }, []);

    return elapsed;
  };

  

  const elapsed = useTimeSinceLoad();

  useEffect(() => {
    if (elapsed < 2500) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [elapsed]);


  return (
    <>
      <>
        <div className="block md:hidden">
          <MobileTopBar />
        </div>

        <div className="hidden md:block">
          <TopBar />
        </div>
      </>

      <div
          className={`fixed inset-0 z-[40] bg-white transition-opacity duration-700
          ${elapsed > 2000 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      />

      
      {elapsed > 1000 && <Banner />} 
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </>
  )
}

export default App
