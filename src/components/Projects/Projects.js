import React, {useEffect, useState} from "react";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const projects = "My Projects".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] font-Font border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-Font mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </h3>
          <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projects}
              idx={20}
            />
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          link="https://mahade-vai-test.vercel.app/"
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          githubLink="https://github.com/sajib925/baby-store-minimog"
        />

        <ProjectsCard
          link="https://kacha-bazar-three.vercel.app/"
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          githubLink="https://github.com/sajib925/kacha-bazar"
        />

        <ProjectsCard
          link="https://grover.vercel.app/"
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          githubLink="https://github.com/sajib925/grover"
        />

        <ProjectsCard
          link=""
          title="Admin Dashboard"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}
          githubLink="https://github.com/sajib925/admin-dashboard-syncfusion-tailwind"
        />

        <ProjectsCard
          link="https://okiro-eight.vercel.app/"
          title="Blog Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFive}
          githubLink="https://github.com/sajib925/okiro"
        />

        <ProjectsCard
          link="https://pungent-rho.vercel.app/"
          title="Landing Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectSix}
          githubLink="https://github.com/sajib925/pungent"
        />
      </div>
    </section>
  );
};

export default Projects;
