import { useTranslation } from "react-i18next";

const { t } = useTranslation();

export const navLinksdata = [
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
