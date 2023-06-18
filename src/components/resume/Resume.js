import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
// import Skills from "./Skills";
import WordCloud from "./WordCloud";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  const [letterClass, setLetterClass] = useState("text-animate");
  const skills = "My Skills".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-300 dark:border-b-gray-600 overflow-hidden"
    >
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColorlight dark:text-designColor tracking-wide">
            {t("2YEARSOFEXPERIENCE")}
          </h3>
          <h1 className="text-4xl md:text-5xl text-darkText dark:text-lightText font-bold capitalize">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skills}
              idx={20}
            />
          </h1>
        </div>
      </div>
      {/* <Skills /> */}
      <WordCloud />
    </section>
  );
};

export default Resume;
