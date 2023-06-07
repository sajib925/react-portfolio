import React, { useEffect, useState } from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/resume/Resume";
import { BsArrow90DegUp } from "react-icons/bs";

function App() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="w-full h-auto bg-white dark:bg-bodyColor text-lightText">
      <Navbar />
      <div className="max-w-screen-xl w-[100%] mx-auto px-4">
        <Banner />
        <Features />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
        <FooterBottom />

        <div
          className={`scrollIcon duration-500 ease-in-out ${
            isScroll ? "right-5" : "-right-[100%]"
          } `}
        >
          <a
            href="#home"
            className="w-[100%] h-[100%] flex items-center justify-center"
          >
            <BsArrow90DegUp size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
