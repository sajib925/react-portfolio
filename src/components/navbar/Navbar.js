import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { Logo } from "../../Icons/icons";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  // nav links

  const navLinksdata = [
    {
      _id: 1001,
      title: t("Home"),
      link: "home",
    },
    {
      _id: 1002,
      title: t("Features"),
      link: "features",
    },
    {
      _id: 1003,
      title: t("Skills"),
      link: "resume",
    },
    {
      _id: 1004,
      title: t("Portfolio"),
      link: "projects",
    },

    {
      _id: 1005,
      title: t("Contact"),
      link: "contact",
    },
  ];

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-white dark:bg-bodyColor font-Font dark:border-b-[1px] dark:shadow-none shadow  border-b-gray-600">
      <div className="max-w-screen-xl mx-auto py-[28px] px-4">
        <div className="flex justify-between items-center">
          <a href="#home">
            <img
              src={logo}
              alt="logo"
              className="w-[40px] h-[40px] object-cover hidden dark:block"
            />
            <div className="w-[40px] h-[40px] block dark:hidden">
              <Logo />
            </div>
          </a>
          <div>
            <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
              {navLinksdata.map(({ _id, title, link }) => (
                <li
                  className="text-base font-normal text-darkText dark:text-lightText tracking-wide cursor-pointer hover:text-designColorlight dark:hover:text-designColor duration-300"
                  key={_id}
                >
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            {showMenu && (
              <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-white dark:bg-gray-900 p-4 scrollbar-hide ease-in-out duration-500 z-10">
                <div className="flex flex-col gap-8 py-2 relative">
                  <Link to="#home">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-[40px] h-[40px] object-cover"
                    />
                    <p className="text-[16px] text-darkText dark:text-lightText mt-4">
                      {t(
                        "IhaveexpertiseinJavaScriptandjavascriptlibrariessuchasreactjsanditsframeworknextjsandgatsbyjsaswell asWebflowandWordPress"
                      )}
                    </p>
                  </Link>
                  <ul className="flex flex-col gap-4">
                    {navLinksdata.map((item) => (
                      <li
                        key={item._id}
                        className="text-base font-normal text-darkText dark:text-lightText tracking-wide cursor-pointer hover:text-designColor duration-300"
                      >
                        <Link
                          onClick={() => setShowMenu(false)}
                          activeClass="active"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-base text-darkText dark:text-lightText uppercase font-titleFont mb-4">
                      {t("Findmein")}
                    </h2>
                    <div className="flex gap-4">
                      <span className="bannerIcon">
                        <FaFacebookF />
                      </span>
                      <span className="bannerIcon">
                        <FaTwitter />
                      </span>
                      <span className="bannerIcon">
                        <FaLinkedinIn />
                      </span>
                    </div>
                  </div>
                  <span
                    onClick={() => setShowMenu(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                  >
                    <MdClose />
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-x-6">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <span
              onClick={() => setShowMenu(!showMenu)}
              className="text-xl mdl:hidden dark:bg-black bg-[#e7e7e7] w-10 h-10 inline-flex items-center justify-center rounded-full text-designColorlight dark:text-designColor cursor-pointer"
            >
              <FiMenu />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
