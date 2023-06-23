import React, { useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [letterClass, setLetterClass] = useState("text-animate");
  const projects = "My Projects".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-20 font-Font border-b-[1px] border-b-gray-300 dark:border-b-gray-600 overflow-hidden"
    >
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-Font mb-14">
          <h3 className="text-sm uppercase font-light text-designColorlight dark:text-designColor tracking-wide">
            {t("VISITMYPORTFOLIOANDKEEPYOURFEEDBACK")}
          </h3>
          <h1 className="text-4xl md:text-5xl text-darkText dark:text-lightText font-bold capitalize">
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
          link="https://vercel.com/sajib925/baby-store-minimog-c649"
          title={t("E-COMMERCEWEBSITE")}
          subTitle={t("MadebyReact.jsandStyledComponents")}
          des={t(
            "Thisisane-commerceportfoliowebsitethatissolelyforshowcasing.Itdisplaysacollectionofproductsandservices relatedtomyworkandexpertise."
          )}
          src={projectOne}
          githubLink="https://github.com/sajib925/baby-store-minimog"
        />

        <ProjectsCard
          link="https://kacha-bazar-three.vercel.app/"
          title={t("E-COMMERCEWEBSITE")}
          subTitle={t("MadebyNext.jsandTailwindCSS")}
          des={t(
            "Thisisane-commerceportfoliowebsitethatissolelyforshowcasing.Itdisplaysacollectionofproductsandservices relatedtomyworkandexpertise."
          )}
          src={projectTwo}
          githubLink="https://github.com/sajib925/kacha-bazar"
        />

        <ProjectsCard
          link="https://evemat-d81d99.webflow.io/"
          title={t("LANDINGWEBSITE")}
          subTitle={t("MadebyWebflow")}
          des={t(
            "Thisisalandingportfoliowebsitethatissolelyforshowcasing.Itdisplaysacollectionofproductsandservices relatedtomyworkandexpertise."
          )}
          src={projectThree}
          githubLink="#"
        />

        <ProjectsCard
          link="https://admin-dashboard-syncfusion-tailwind-2p68.vercel.app/"
          title={t("ADMINDASHBOARD")}
          subTitle={t("MadebyNext.jsandTailwindCSS")}
          des={t(
            "Thisisadashboardportfoliowebsitethatissolelyforshowcasing.Itdisplaysacollectionofproductsandservices relatedtomyworkandexpertise."
          )}
          src={projectFour}
          githubLink="https://github.com/sajib925/admin-dashboard-syncfusion-tailwind"
        />

        <ProjectsCard
          link="https://okiro-eight.vercel.app/"
          title={t("BLOG WEBSITE")}
          subTitle={t("MadebyReact.jsandStyledComponents")}
          des={t(
            "Thisisablogportfoliowebsitethatissolelyforshowcasing.Itdisplaysacollectionofproductsandservices relatedtomyworkandexpertise."
          )}
          src={projectFive}
          githubLink="https://github.com/sajib925/okiro"
        />

        <ProjectsCard
          link="https://pungent-rho.vercel.app/"
          title={t("LANDINGWEBSITE")}
          subTitle={t("MadebyNext.jsandModuleCSS")}
          des={t(
            "Thisisalandingportfoliowebsitethatissolelyforshowcasing.Itdisplaysacollectionofproductsandservices relatedtomyworkandexpertise."
          )}
          src={projectSix}
          githubLink="https://github.com/sajib925/pungent"
        />
      </div>
    </section>
  );
};

export default Projects;
