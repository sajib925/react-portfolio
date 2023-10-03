import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import ProjectsCard from "./ProjectsCard";
import {useTranslation} from "react-i18next";
import {projectCardData} from "./projectCardData";

const Projects = () => {
    const {t} = useTranslation();
    const [letterClass, setLetterClass] = useState("text-animate");
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const projects = "My Projects".split("");
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handlePopupToggle = () => {
        setIsPopupOpen((prev) => !prev)
    }

    const filteredProjects = projectCardData.filter(({category}) => {
        if (selectedCategory === 'All') {
            return true;
        } else {
            return category === selectedCategory;
        }
    });

    const categories = ['All','Client Project', 'Webflow', 'E-Commerce', 'Blog', 'Landing', 'Admin Dashboard', 'Portfolio',];

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
            <div className="flex justify-center items-center gap-4 pb-8 flex-wrap">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`${category === selectedCategory ? 'CardActive' : 'bg-white dark:bg-black'} py-4 px-6  dark:bg-opacity-25 text-gray-700 dark:text-gray-200 text-xl rounded-md dark:shadow-shadowOne shadow-shadowTwo dark:hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300 z-10 `}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <Swiper

                breakpoints={{
                    // uses minimum with
                    320: {
                        width: 320,
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    995: {
                        width: 995,
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    autoPlay: true
                }}
                modules={[Autoplay, Pagination]}
                className="w-full h-full sm:h-[550px]"
            >
                {filteredProjects.map(({id, link, title, subTitle, des, img, githubLink}) => (
                    <SwiperSlide key={id}>
                        <ProjectsCard
                            link={link}
                            title={t(title)}
                            subTitle={t(subTitle)}
                            des={t(des)}
                            src={img}
                            githubLink={githubLink}
                            handlePopupToggle={handlePopupToggle}
                            isPopupOpen={isPopupOpen}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Projects;
