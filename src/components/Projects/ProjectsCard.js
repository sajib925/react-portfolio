import React, {useState} from "react";
import {BsGithub} from "react-icons/bs";
import {BsFillEyeFill} from "react-icons/bs";
import {motion} from "framer-motion";
import ProjectDetailsPopup from "./ProjectDetailsPopup";

const ProjectsCard = ({link, title, subTitle, des, src, githubLink, isPopupOpen, handlePopupToggle}) => {

    return (<motion.div
            className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowTwo dark:shadow-shadowOne flex flex-col bg-gradient-to-r from-[#fff] to-[#fafafa] dark:from-bodyColor dark:to-[#202327] group hover:bg-gradient-to-b hover:from-[#fafafa] hover:[#fafafa] dark:hover:from-gray-900 dark:hover:gray-900 transition-colors duration-1000"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay: 0.3, duration: 0.5}}
            variants={{
                hidden: {opacity: 0, Y: 100}, visible: {opacity: 1, Y: 0},
            }}
        >
            <div className="w-full h-[80%] overflow-hidden rounded-lg relative">
                <img
                    className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                    src={src}
                    alt="src"
                />
                <a
                    href={link}
                    target="_blank"
                    className="absolute top-0 right-0 bottom-0 left-0"
                ></a>
            </div>
            <div className="w-full mt-5 flex flex-col  gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-designColorlight dark:text-designColor font-normal">
                            {title}
                        </h3>
                        {githubLink ? <a href={githubLink} target="_blank" className="">
                            <span
                                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                                <BsGithub/>
                            </span></a> :
                            <div className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                            onClick={() => handlePopupToggle()}
                            >
                                <BsFillEyeFill/>
                            </div>
                        }

                        {/*{isPopupOpen && <ProjectDetailsPopup handlePopupToggle={handlePopupToggle} isPopupOpen={isPopupOpen} />}*/}

                    </div>
                    <p className="text-sm mt-3 text-designColorlight dark:text-designColor font-normal">
                        {subTitle}
                    </p>
                    <p className="text-sm tracking-wide mt-3 text-darkText dark:text-lightText dark:hover:text-gray-100 duration-300">
                        {des}
                    </p>
                </div>
            </div>
        </motion.div>);
};

export default ProjectsCard;
