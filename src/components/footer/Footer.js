import React from "react";
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import {logo} from "../../assets/index";
import {BsGithub} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black ">
      <div className="w-full h-full flex items-center flex-col gap-8">
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
      </div>
    </div>
  );
};

export default Footer;
