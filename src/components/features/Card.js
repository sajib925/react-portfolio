import React from "react";
import {HiArrowRight} from "react-icons/hi";
import { motion } from 'framer-motion';

const Card = ({title, des, icon}) => {
  return (
    <motion.div
      className="w-full px-12 h-90 py-10 rounded-lg shadow-shadowTwo dark:shadow-shadowOne flex items-center bg-gradient-to-r from-[#fff] to-[#fafafa] dark:from-bodyColor dark:to-[#202327] group dark:hover:bg-gradient-to-b dark:hover:from-black dark:hover:to-[#1e2024] transition-colors duration-100 group"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 0.5}}
      variants={{
        hidden: {opacity: 0, y: 100},
        visible: {opacity: 1, y: 0},
      }}
    >
      <div className="h-85 overflow-y-hidden" style={{scrollbarWidth: "none"}}>
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-center text-designColorlight dark:text-designColor">
                {icon}
              </span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColorlight dark:bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColorlight dark:bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColorlight dark:bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColorlight dark:bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-Font font-bold text-darkText dark:text-lightText">
              {title}
            </h2>
            <p className="base text-darkText dark:text-lightText font-Font">
              {des}
            </p>
            <span className="text-2xl text-designColorlight dark:text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
