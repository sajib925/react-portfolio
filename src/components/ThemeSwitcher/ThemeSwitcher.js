import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillCloudSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme: light").matches) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleThemeSwitcher = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      className="text-xl dark:bg-black bg-[#e7e7e7]   w-10 h-10 inline-flex items-center justify-center rounded-full 
      dark:text-designColor text-designColorlight  cursor-pointer"
      onClick={handleThemeSwitcher}
    >
      {theme === "light" ? <BsFillCloudSunFill /> : <FaMoon />}
    </button>
  );
};

export default ThemeSwitcher;
