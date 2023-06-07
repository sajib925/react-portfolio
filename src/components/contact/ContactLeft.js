import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const ContactLeft = () => {
  return (
    <motion.div
      className="w-full lgl:w-[35%] h-full font-Font bg-gradient-to-r from-[#fff] to-[#fafafa] dark:from-[#1e2024] dark:to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowTwo dark:shadow-shadowOne flex flex-col gap-8 justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-darkText dark:text-lightText">
          Sajib Ahmed
        </h3>
        <p className="text-lg font-normal text-darkText dark:text-gray-400">
          Front-End Web Developer
        </p>
        <p className="text-base  text-darkText dark:text-gray-400 tracking-wide">
          I have expertise in HTML, CSS, JavaScript, and javascript libraries
          such as react js and its framework next js.
        </p>
        <p className="text-base text-darkText dark:text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-darkText dark:text-lightText">01740786762</span>
        </p>
        <p className="text-base text-darkText dark:text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-darkText dark:text-lightText">
            hmsajibahmed7@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase text-darkText dark:text-lightText font-titleFont mb-4">
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
    </motion.div>
  );
};

export default ContactLeft;
