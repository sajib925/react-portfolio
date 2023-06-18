import React from "react";
import { useTranslation } from "react-i18next";

const FooterBottom = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full py-10">
      <p className="text-center font-Font text-darkText dark:text-lightText text-base">
        {t("©2023.AllrightsreservedbySajibAhmed")}
      </p>
    </div>
  );
};

export default FooterBottom;
