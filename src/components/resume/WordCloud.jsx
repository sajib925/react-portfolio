import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import TagCloud from "TagCloud";

const WordCloud = () => {
  const { t } = useTranslation();
  const [isLoading, setLoad] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let optionRadius;
  if (windowWidth >= 740) {
    optionRadius = 300;
  } else {
    optionRadius = 150;
  }

  const container = ".bottle";

  const texts = [
    t("ReactJS"),
    t("ReactQuery"),
    t("Redux"),
    t("HTML5"),
    t("CSS3"),
    t("JavaScript"),
    t("SCSS"),
    t("NextJs"),
    t("Git"),
    t("GitHub"),
    t("TailwindCss"),
    t("BootStrap"),
    t("Webflow"),
    t("GatsbyJs"),
    t("GraphQL"),
    t("ChakraUi"),
  ];

  const options = {
    radius: optionRadius,

    maxSpeed: "fast",
    initSpeed: "fast",

    itenClass: "sdsd",

    keep: true,
  };

  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options);
      setLoad(false);
    }
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="main">
      <span className="bottle text-darkText dark:text-lightText hover:text-designColorlight dark:hover:text-designColor"></span>
    </div>
  );
};

export default WordCloud;
