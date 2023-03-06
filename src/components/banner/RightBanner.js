import React from "react";
import {bannerImg} from "../../assets/index";
import { motion } from 'framer-motion';



const RightBanner = () => {
  return (
    <motion.div
      className="w-full lgl:w-1/2 flex justify-center items-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.5}}
      transition={{delay: 0.3, duration: 0.5}}
      variants={{
        hidden: {opacity: 0, x: 100},
        visible: {opacity: 1, x: 0},
      }}
    >
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 "
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </motion.div>
  );
};

export default RightBanner;
