import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Skills from "./Skills";
// import WordCloud from './WordCloud';

const Resume = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const skills = "My Skills".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black overflow-hidden">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
            2 YEARS OF EXPERIENCE
          </h3>
          <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skills}
              idx={20}
            />
          </h1>
        </div>
      </div>
      <Skills />
      {/* <WordCloud /> */}
    </section>
  );
};

export default Resume;
