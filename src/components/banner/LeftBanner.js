import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiTailwindcss, SiRedux, SiNextdotjs } from "react-icons/si";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LeftBanner = () => {
  const { t } = useTranslation();
  const [letterClass, setLetterClass] = useState("text-animate");
  const myself1 = "Hi, I'm".split("");
  const myself2 = "Sajib Ahmed".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  const [text] = useTypewriter({
    words: ["Frontend web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 max-lgl:items-center">
      <motion.div
        className="flex flex-col max-lgl:items-center gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h4 className=" text-lg text-darkText dark:text-lightText font-normal">
          {t("WELCOMETOMYWORLD")}
        </h4>
        <h1 className="text-4xl md:text-5xl lgl:text-6xl font-bold text-darkText dark:text-white flex items-center flex-wrap gap-x-2">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={myself1}
            idx={20}
          />{" "}
          <span className="text-designColorlight dark:text-designColor capitalize max-sm:block">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={myself2}
              idx={20}
            />
          </span>
        </h1>
        <h2 className="text-4xl font-bold dark:text-white text-designColorlight">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#5de4c7"
          />
        </h2>
        <p className="text-base text-darkText dark:text-lightText font-bodyFont leading-6 tracking-wide">
          {t(
            "Asafrontendwebdeveloper,myworkinvolvesdesigningandimplementinguser nterfacesforwebsitesandweb applications.IhaveexpertiseinHTML,CSS,JavaScript,aswellasJavaScriptlibrariessuchasReact.js,Next.js,and Gatsby.js.IamalsoskilledinusingWebflowandWordPress.Withthesetechnologies,Icreatevisually ppealingand responsivewebpagesthatdeliveranexceptionaluserexperience."
          )}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <h2 className="text-base text-darkText dark:text-lightText uppercase font-titleFont mb-4">
            {t("Findmein")}
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100008890392675"
              target="_blank"
              className="bannerIcon"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a
              href="https://twitter.com/SajibAh27935466"
              target="_blank"
              className="bannerIcon"
            >
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/sajib-ahmed-70a906238/"
              target="_blank"
              className="bannerIcon"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://github.com/sajib925"
              target="_blank"
              className="bannerIcon"
            >
              <span>
                <BsGithub />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base text-darkText dark:text-lightText uppercase font-titleFont mb-4">
            {t("BESTSKILLON")}
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiRedux />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LeftBanner;
