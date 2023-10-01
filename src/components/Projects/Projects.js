import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
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
import {useTranslation} from "react-i18next";
import {projectCardData} from "./projectCardData";

const Projects = () => {
    const {t} = useTranslation();
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
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    autoPlay: true
                }}
                modules={[Autoplay]}
                className="w-full h-full sm:h-[550px]"
            >
                {
                    projectCardData.map(({id, link, title, subTitle, des, img, githubLink}) => (
                        <SwiperSlide key={id}>
                            <ProjectsCard link={link} title={t(title)} subTitle={t(subTitle)} des={t(des)} src={img}
                                          githubLink={githubLink}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Projects;
