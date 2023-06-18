import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Card from "./Card";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  const [letterClass, setLetterClass] = useState("text-animate");
  const forClient = "What Can I Do For My Client ?".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-300 dark:border-b-gray-600"
    >
      <div className="flex flex-col gap-4 font-Font mb-14">
        <h3 className="text-sm uppercase font-light text-designColorlight dark:text-designColor tracking-wide">
          {t("Features")}
        </h3>
        <h1 className="text-4xl md:text-5xl text-darkText dark:text-lightText font-bold capitalize">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={forClient}
            idx={20}
          />
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title={t("Front-EndWebDevelopment")}
          des={t(
            "Asafront-endwebdeveloper,Iplayacriticalroleinbuildingwebapplicationsthatarebothvisuallyappealingandfunctional,providinguserswithaseamlessandenjoyableexperience."
          )}
        />
        <Card
          title={t("MobileResponsiveDesigning")}
          des={t(
            "Asamobileresponsivewebdeveloper,Iplayacriticalroleinbuildingwebapplicationsthatprovideaseamlessandenjoyableexperienceforusersonmobiledevices,helpingbusinessesandorganizationsreachawideraudienceandachievetheirgoals."
          )}
        />
        <Card
          title={t("UserFriendly")}
          des={t(
            "Asauser-friendlywebdeveloper,Iplayacriticalroleinbuildingwebapplicationsthatprovideaseamlessandenjoyableexperienceforusers,helpingbusinessesandorganizationsachievetheirgoalsandcreatemeaningfulconnectionswiththeiraudiences."
          )}
        />
      </div>
    </section>
  );
};

export default Features;
