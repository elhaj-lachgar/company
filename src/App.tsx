import { useEffect, useRef, useState } from "react";
import Banner from "./components/Banner";
import Capabilities from "./components/Capabilities";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurWork from "./components/OurServices";
import Projects from "./components/Projects";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useDirectionContext } from "./context/DirectionContextProvider";

function App() {
  const [scrollTop, setScrollTop] = useState(false);
  const top = useRef<HTMLDivElement | null>(null);
  const { dir } = useDirectionContext();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const valid = window.innerHeight / 2 <= window.scrollY;
      if (valid) setScrollTop(true);
      else setScrollTop(false);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  const scrollTopHandler = () => {
    if (!scrollTop) return;
    top.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={top} className="flex flex-col relative" dir={dir}>
      <Navbar />
      <Banner />
      <Company />
      <Capabilities />
      <OurWork />
      <Projects />
      <Footer />
      {scrollTop && (
        <motion.div
          className="fixed top-[80%]  cursor-pointer flex items-center justify-center right-[3%] w-11 h-11 rounded-full bg-blue-700 text-white"
          onClick={scrollTopHandler}
          transition={{
            duration: 1,
          }}
        >
          <ArrowUp />
        </motion.div>
      )}
    </div>
  );
}

export default App;
