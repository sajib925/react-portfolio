import React from "react";
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import {logo} from "../../assets/index";
import {BsGithub} from "react-icons/bs";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black ">
      <motion.div
        className="w-full h-full flex items-center flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay: 0.3, duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: 100},
          visible: {opacity: 1, y: 0},
        }}
      >
        <img className="w-32" src={logo} alt="logo" />
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
      </motion.div>
    </div>
  );
};

export default Footer;
