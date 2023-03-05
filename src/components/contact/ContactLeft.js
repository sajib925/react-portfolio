import React from "react";
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import {contactImg} from "../../assets/index";
import {BsGithub} from "react-icons/bs";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full font-Font bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sajib Ahmed</h3>
        <p className="text-lg font-normal text-gray-400">
          Front-End Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I have expertise in HTML, CSS, JavaScript, and javascript libraries
          such as react js and its framework next js.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">01740786762</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">hmsajibahmed@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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

export default ContactLeft;
