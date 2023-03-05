import React, {useEffect, useState} from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaReact} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {SiTailwindcss, SiRedux, SiNextdotjs} from "react-icons/si";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const LeftBanner = () => {
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
      <div className="flex flex-col max-lgl:items-center gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl md:text-5xl lgl:text-6xl font-bold text-white flex items-center flex-wrap gap-x-2">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={myself1}
            idx={20}
          />{" "}
          <span className="text-designColor capitalize max-sm:block">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={myself2}
              idx={20}
            />
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#5de4c7"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a front-end web developer, I am responsible for designing and
          implementing the user interface of websites and web applications. I
          have expertise in HTML, CSS, JavaScript, and javascript libraries such
          as react js. I use these technologies to create visually appealing and
          responsive web pages that provide a great user experience.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
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
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
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
      </div>
    </div>
  );
};

export default LeftBanner;
