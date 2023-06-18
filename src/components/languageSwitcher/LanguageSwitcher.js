import React, { useState } from "react";
import i18n from "../../i18n";

const LanguageSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    i18n.changeLanguage(option);
  };

  return (
    <div className="relative">
      <button
        className="w-20 bg-white border text-darkText dark:text-lightText dark:bg-bodyColor  dark:border-gray-600 border-gray-300 rounded-md py-2 px-4 flex"
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption : "en"}

        <svg
          className={`w-5 h-5 ml-2 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-1 mt-2 py-2 w-20 bg-white hover:text-designColorlight dark:hover:text-designColor duration-300 dark:bg-bodyColor text-darkText dark:text-lightText rounded-md shadow-lg">
          {/* Dropdown menu options */}
          <button
            className="block pl-4 py-2 hover:text-designColorlight dark:hover:text-designColor duration-300 dark:bg-bodyColor text-darkText dark:text-lightText w-full text-start"
            onClick={() => handleOptionSelect("en")}
          >
            en
          </button>
          <button
            className="block px-4 py-2 hover:text-designColorlight dark:hover:text-designColor duration-300 dark:bg-bodyColor text-darkText dark:text-lightText w-full text-start"
            onClick={() => handleOptionSelect("bn")}
          >
            bn
          </button>
          <button
            className="block px-4 py-2 hover:text-designColorlight dark:hover:text-designColor duration-300 dark:bg-bodyColor text-darkText dark:text-lightText w-full text-start"
            onClick={() => handleOptionSelect("ar")}
          >
            ar
          </button>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
